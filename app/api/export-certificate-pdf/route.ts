import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

function formatDate(value: Date | string | null | undefined) {
  if (!value) return "-";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "-";

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}.${month}.${year}`;
}

function safeText(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return "-";
  return String(value);
}

async function buildPdfBuffer({
  fullName,
  qualificationLevel,
  certificateId,
  program,
  issueDate,
  seaMiles,
  instructorName,
  instructorTitle,
}: {
  fullName: string;
  qualificationLevel: string;
  certificateId: string;
  program: string;
  issueDate: string;
  seaMiles: string;
  instructorName: string;
  instructorTitle: string;
}) {
  return new Promise<Buffer>((resolve, reject) => {
    try {
      const doc = new PDFDocument({
        size: "A4",
        margin: 0,
      });

      const chunks: Buffer[] = [];

      doc.on("data", (chunk) => chunks.push(chunk));
      doc.on("end", () => resolve(Buffer.concat(chunks)));
      doc.on("error", reject);

      const templatePath = path.join(
        process.cwd(),
        "public",
        "certificate-templates",
        "certificate-a4.png"
      );

      if (fs.existsSync(templatePath)) {
        doc.image(templatePath, 0, 0, {
          width: 595.28,
          height: 841.89,
        });
      } else {
        doc.rect(0, 0, 595.28, 841.89).fill("#f7f1df");
        doc.fillColor("#111827");
      }

      doc.fillColor("#111827");

      doc.fontSize(26).text("ALBATROS SAILING", 0, 95, {
        align: "center",
        width: 595.28,
      });

      doc.fontSize(14).text("Certificate of Completion", 0, 130, {
        align: "center",
        width: 595.28,
      });

      doc.moveTo(90, 170).lineTo(505, 170).strokeColor("#c8a85a").stroke();

      doc.fillColor("#111827").fontSize(13);

      const left = 120;
      const labelWidth = 150;
      const valueLeft = 280;
      let y = 230;

      function row(label: string, value: string) {
        doc.fillColor("#6b7280").fontSize(11).text(label, left, y, {
          width: labelWidth,
        });

        doc.fillColor("#111827").fontSize(13).text(value, valueLeft, y, {
          width: 240,
        });

        y += 42;
      }

      row("Full Name", fullName);
      row("Program", program);
      row("Qualification Level", qualificationLevel);
      row("Issue Date", issueDate);
      row("Sea Miles", seaMiles);
      row("Certificate ID", certificateId);

      y += 40;

      doc.fillColor("#111827").fontSize(12).text("Instructor", left, y);
      y += 22;

      doc.fontSize(13).text(instructorName, left, y);
      y += 18;

      doc.fillColor("#6b7280").fontSize(11).text(instructorTitle, left, y);

      doc.fillColor("#111827").fontSize(10).text(
        "This certificate can be verified through the official Albatros Sailing verification system.",
        90,
        745,
        {
          align: "center",
          width: 415,
        }
      );

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
}

async function handleExport(certificateId: string | null) {
  if (!certificateId) {
    return NextResponse.json(
      { success: false, error: "certificateId is required." },
      { status: 400 }
    );
  }

  const certificate = await prisma.certificate.findFirst({
    where: { certificateId },
    select: {
      id: true,
      certificateId: true,
      fullName: true,
      program: true,
      qualificationLevel: true,
      issueDate: true,
      seaMiles: true,
      status: true,
      instructor: {
        select: {
          fullName: true,
          title: true,
        },
      },
    },
  });

  if (!certificate) {
    return NextResponse.json(
      { success: false, error: "Certificate not found." },
      { status: 404 }
    );
  }

  const pdfBuffer = await buildPdfBuffer({
    fullName: safeText(certificate.fullName),
    qualificationLevel: safeText(certificate.qualificationLevel),
    certificateId: safeText(certificate.certificateId),
    program: safeText(certificate.program),
    issueDate: formatDate(certificate.issueDate),
    seaMiles:
      typeof certificate.seaMiles === "number"
        ? `${certificate.seaMiles} NM`
        : "-",
    instructorName: safeText(certificate.instructor?.fullName),
    instructorTitle: safeText(certificate.instructor?.title),
  });

  return new NextResponse(new Uint8Array(pdfBuffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${certificate.certificateId}.pdf"`,
    },
  });
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId");

    return await handleExport(certificateId);
  } catch (error) {
    console.error("GET /api/export-certificate-pdf error:", error);

    return NextResponse.json(
      { success: false, error: "PDF could not be generated." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const certificateId = String(body?.certificateId || "").trim();

    return await handleExport(certificateId);
  } catch (error) {
    console.error("POST /api/export-certificate-pdf error:", error);

    return NextResponse.json(
      { success: false, error: "PDF could not be generated." },
      { status: 500 }
    );
  }
}