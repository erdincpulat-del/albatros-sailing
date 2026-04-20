import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

const ALLOWED_STATUSES = [
  "NEW",
  "CONTACTED",
  "QUOTED",
  "CONFIRMED",
  "CANCELLED",
] as const;

function calculateLeadScore(input: {
  type?: string | null;
  guestCount?: number | null;
  participantCount?: number | null;
  skipperRequired?: boolean | null;
  charterDurationWeeks?: number | null;
  status?: string | null;
}) {
  let score = 20;

  if (input.type === "CHARTER") score += 20;
  if ((input.guestCount ?? 0) >= 6) score += 15;
  if ((input.participantCount ?? 0) >= 2) score += 10;
  if (input.skipperRequired) score += 10;
  if ((input.charterDurationWeeks ?? 0) >= 2) score += 15;

  if (input.status === "CONTACTED") score += 5;
  if (input.status === "QUOTED") score += 10;
  if (input.status === "CONFIRMED") score += 20;
  if (input.status === "CANCELLED") score = Math.max(score - 20, 0);

  return Math.min(score, 100);
}

export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await req.json();
    const status = String(body?.status ?? "").trim();

    if (!ALLOWED_STATUSES.includes(status as (typeof ALLOWED_STATUSES)[number])) {
      return NextResponse.json(
        { success: false, error: "Geçersiz status." },
        { status: 400 }
      );
    }

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
      type: existing.type,
      guestCount: existing.guestCount,
      participantCount: existing.participantCount,
      skipperRequired: existing.skipperRequired,
      charterDurationWeeks: existing.charterDurationWeeks,
      status,
    });

    const inquiry = await prisma.inquiry.update({
      where: { id },
      data: {
        status,
        leadScore: nextLeadScore,
      },
      include: {
        charterWeek: {
          include: {
            boat: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("INQUIRY STATUS UPDATE ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Status güncellenemedi." },
      { status: 500 }
    );
  }
}