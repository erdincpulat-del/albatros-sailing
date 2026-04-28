import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    if (!certificate || !certificate.cardFrontUrl) {
      return NextResponse.json(
        { success: false, error: "Front card not found" },
        { status: 404 }
      );
    }

    return NextResponse.redirect(certificate.cardFrontUrl);
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: "Front card route error",
        detail: error.message,
      },
      { status: 500 }
    );
  }
}