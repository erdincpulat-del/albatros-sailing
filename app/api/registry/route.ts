import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId")?.trim().toUpperCase();

    if (!certificateId) {
      return NextResponse.json(
        {
          success: false,
          error: "certificateId is required.",
        },
        { status: 400 }
      );
    }

    const certificate = await prisma.reservation.findFirst({
      where: {
        certificateId,
      },
      select: {
        id: true,
        fullName: true,
        certificateId: true,
        certificateLevel: true,
        program: true,
        seaMiles: true,
        status: true,
        cardFrontUrl: true,
        certifiedAt: true,
      },
    });

    if (!certificate) {
      return NextResponse.json({
        success: true,
        found: false,
      });
    }

    return NextResponse.json({
      success: true,
      found: true,
      certificate,
    });
  } catch (error) {
    console.error("REGISTRY_SEARCH_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Registry search failed.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}