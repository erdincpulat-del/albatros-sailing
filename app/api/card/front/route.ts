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

    const reservation = await prisma.reservation.findFirst({
      where: {
        certificateId,
      },
    });

    if (!reservation) {
      return NextResponse.json(
        { success: false, error: "Certificate not found" },
        { status: 404 }
      );
    }

    const existingFrontUrl = (reservation as any).cardFrontUrl;

    if (
      typeof existingFrontUrl === "string" &&
      existingFrontUrl.startsWith("https://")
    ) {
      return NextResponse.redirect(existingFrontUrl);
    }

    const cardFrontUrl = await generateCertificateCardFront({
      certificateId: (reservation as any).certificateId || certificateId,
      fullName: (reservation as any).fullName || "",
      qualification:
        (reservation as any).qualificationLevel ||
        (reservation as any).certificateLevel ||
        (reservation as any).program ||
        "Offshore Yacht Course",
      issueDate:
        (reservation as any).issueDate ||
        (reservation as any).certifiedAt ||
        null,
      seaMiles: (reservation as any).seaMiles || null,
      photoUrl: (reservation as any).photoUrl || null,
    });

    await prisma.reservation.update({
      where: {
        id: reservation.id,
      },
      data: {
        cardFrontUrl,
      } as any,
    });

    return NextResponse.redirect(cardFrontUrl);
  } catch (error) {
    console.error("Front card route error:", error);

    return NextResponse.json(
      { success: false, error: "Front card could not be generated" },
      { status: 500 }
    );
  }
}