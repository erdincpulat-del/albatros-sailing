import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateCertificateCardFront } from "@/lib/generate-certificate-card-front";

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
      certificate.cardFrontUrl &&
      certificate.cardFrontUrl.startsWith("https://")
    ) {
      return NextResponse.redirect(certificate.cardFrontUrl);
    }

    const cardFrontUrl = await generateCertificateCardFront({
      certificateId: certificate.certificateId,
      fullName: certificate.fullName,
      qualification:
        certificate.qualificationLevel ||
        certificate.program ||
        "Offshore Yacht Course",
      issueDate: certificate.issueDate,
      seaMiles: certificate.seaMiles,
      photoUrl: certificate.photoUrl,
    });

    await prisma.certificate.update({
      where: { id: certificate.id },
      data: { cardFrontUrl },
    });

    return NextResponse.redirect(cardFrontUrl);
  } catch (error: any) {
    console.error("Front card route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Front card could not be generated",
        detail: error?.message || String(error),
      },
      { status: 500 }
    );
  }
}