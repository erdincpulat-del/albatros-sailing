// /app/api/card/front/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
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

  if (!certificate?.cardFrontUrl) {
    return NextResponse.json(
      { success: false, error: "Front card not found" },
      { status: 404 }
    );
  }

  return NextResponse.redirect(certificate.cardFrontUrl);
}