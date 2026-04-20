import { NextRequest, NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function formatDate(dateValue?: Date | string | null) {
  if (!dateValue) return "-";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "-";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

async function buildPdfBuffer({
  fullName,
  qualificationLevel,
  certificateId,
  issueDate,
}: {
  fullName: string;
  qualificationLevel: string;
  certificateId: string;
  issueDate: string;
}) {
  return new Promise<Buffer>((resolve, reject) => {
    try {
      const templatePath = path.join(
        process.cwd(),
        "public",
        "certificate-templates",
        "certificate-a4.png"
      );

      const fontPath = path.join(
        process.cwd(),
        "public",
        "fonts",
        "Roboto-Regular.ttf"
      );

      if (!fs.existsSync(templatePath)) {
        throw new Error(
          "Template not found: public/certificate-templates/certificate-a4.png"
        );
      }

      if (!fs.existsSync(fontPath)) {
        throw new Error(
          "Font not found: public/fonts/Roboto-Regular.ttf"
        );
      }

      const doc = new PDFDocument({
        size: "A4",
        margins: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
        autoFirstPage: false,
        font: fontPath,
      });

      const chunks: Buffer[] = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      const pageWidth = 595.28;
      const pageHeight = 841.89;

      doc.addPage({
        size: "A4",
        margins: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
        },
      });

      doc.image(templatePath, 0, 0, {
        width: pageWidth,
        height: pageHeight,
      });

      doc.font(fontPath);

      // FULL NAME
      doc
        .fontSize(24)
        .fillColor("#1f3f75")
        .text(fullName || "-", 140, 357, {
          width: 320,
          align: "center",
        });

      // QUALIFICATION TITLE
      doc
        .fontSize(18)
        .fillColor("#1f3f75")
        .text(qualificationLevel || "-", 130, 451, {
          width: 340,
          align: "center",
        });

      // VERIFY / CERTIFICATE ID LINE
      doc
        .fontSize(10)
        .fillColor("#1f3f75")
        .text(certificateId || "-", 238, 676, {
          width: 120,
          align: "center",
        });

      // DATE
      doc
        .fontSize(11)
        .fillColor("#1f3f75")
        .text(issueDate || "-", 430, 598, {
          width: 85,
          align: "center",
        });

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId")?.trim();

    if (!certificateId) {
      return NextResponse.json(
        {
          success: false,
          error: "certificateId is required.",
        },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.findFirst({
      where: {
        certificateId,
      },
      select: {
        fullName: true,
        certificateId: true,
        certificateLevel: true,
        certifiedAt: true,
        createdAt: true,
      },
    });

    if (!reservation || !reservation.certificateId) {
      return NextResponse.json(
        {
          success: false,
          error: "Certificate record not found.",
        },
        { status: 404 }
      );
    }

    const pdfBuffer = await buildPdfBuffer({
      fullName: reservation.fullName || "-",
      qualificationLevel: reservation.certificateLevel || "-",
      certificateId: reservation.certificateId,
      issueDate: formatDate(reservation.certifiedAt || reservation.createdAt),
    });

    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${reservation.certificateId}-certificate.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("EXPORT_CERTIFICATE_PDF_ROUTE_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificate PDF export failed.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}