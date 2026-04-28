import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const certificateId = req.nextUrl.searchParams.get("certificateId");

    if (!certificateId) {
      return NextResponse.json(
        { success: false, error: "certificateId required" },
        { status: 400 }
      );
    }

    const certificate = await prisma.certificate.findUnique({
      where: { certificateId },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, error: "Certificate not found" },
        { status: 404 }
      );
    }

    if (
      certificate.cardBackUrl &&
      certificate.cardBackUrl.startsWith("https://")
    ) {
      return NextResponse.redirect(certificate.cardBackUrl);
    }

    const possiblePaths = [
      path.join(process.cwd(), "public", "certificate-templates", "card-back.png"),
      path.join(process.cwd(), "public", "templates", "card-back.png"),
      path.join(process.cwd(), "public", "card-back.png"),
    ];

    let templateBuffer: Buffer | null = null;

    for (const filePath of possiblePaths) {
      try {
        templateBuffer = await fs.readFile(filePath);
        break;
      } catch {
        // continue
      }
    }

    if (!templateBuffer) {
      return NextResponse.json(
        {
          success: false,
          error: "card-back.png template not found",
          checkedPaths: possiblePaths,
        },
        { status: 404 }
      );
    }

    const finalBuffer = await sharp(templateBuffer)
      .resize(1536, 1024, {
        fit: "cover",
        position: "center",
      })
      .png()
      .toBuffer();

    return new NextResponse(finalBuffer as any, {
      status: 200,
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-store",
      },
    });
  } catch (error: any) {
    console.error("Back card route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Back card could not be generated",
        detail: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}