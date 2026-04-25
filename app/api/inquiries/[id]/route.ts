import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

function calculateLeadScore({
  guestCount,
  participantCount,
  skipperRequired,
  charterDurationWeeks,
  status,
}: {
  guestCount?: number;
  participantCount?: number;
  skipperRequired?: boolean;
  charterDurationWeeks?: number;
  status?: string;
}) {
  let score = 0;

  if (guestCount) score += guestCount * 2;
  if (participantCount) score += participantCount * 2;
  if (skipperRequired) score += 5;
  if (charterDurationWeeks) score += charterDurationWeeks * 3;
  if (status === "NEW") score += 10;

  return score;
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const body = await req.json();
    const { status } = body;

    const existing = await prisma.inquiry.findUnique({
      where: { id },
    });

    if (!existing) {
      return NextResponse.json(
        { success: false, error: "Inquiry bulunamadı." },
        { status: 404 }
      );
    }

    const nextLeadScore = calculateLeadScore({
  guestCount: existing.guestCount ?? undefined,
  participantCount: existing.participantCount ?? undefined,
  skipperRequired: existing.skipperRequired ?? undefined,
  charterDurationWeeks: existing.charterDurationWeeks ?? undefined,
  status,
});

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: {
        status,
        leadScore: nextLeadScore,
      },
    });

    return NextResponse.json({
      success: true,
      inquiry,
    });

  } catch (error) {
    console.error("INQUIRY STATUS UPDATE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Status güncellenemedi.",
      },
      { status: 500 }
    );
  }
}