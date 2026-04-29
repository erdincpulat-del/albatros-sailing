import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateCertificateCardFront } from "@/lib/generate-certificate-card-front";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const certificateId = body.certificateId;

    if (!certificateId || typeof certificateId !== "string") {
      return NextResponse.json(
        { success: false, error: "certificateId gerekli" },
        { status: 400 }
      );
    }

    const certificate = await prisma.certificate.findUnique({
      where: { certificateId },
      include: {
        instructor: true,
      },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, error: "Certificate bulunamadı" },
        { status: 404 }
      );
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

    const updatedCertificate = await prisma.certificate.update({
      where: { id: certificate.id },
      data: {
        cardFrontUrl,
        status: "COMPLETED",
      },
    });

    await prisma.adminLog.create({
      data: {
        action: "CARD_GENERATED",
        targetType: "CERTIFICATE",
        targetId: certificate.id,
        details: JSON.stringify({
          certificateId: certificate.certificateId,
          cardFrontUrl,
        }),
      },
    });

    return NextResponse.json({
      success: true,
      certificateId: updatedCertificate.certificateId,
      cardFrontUrl,
      item: updatedCertificate,
    });
  } catch (error) {
    console.error("POST /api/generate-card error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Kart üretilemedi",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}