import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.certificate.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        certificateId: true,
        fullName: true,
        program: true,
        qualificationLevel: true,
        issueDate: true,
        seaMiles: true,
        photoUrl: true,
        cardFrontUrl: true,
        cardBackUrl: true,
        verificationHash: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        instructorId: true,
        instructor: {
          select: {
            id: true,
            fullName: true,
            title: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      items,
      total: items.length,
    });
  } catch (error) {
    console.error("GET /api/certificates error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Sertifikalar alınamadı.",
        items: [],
        total: 0,
      },
      { status: 500 }
    );
  }
}