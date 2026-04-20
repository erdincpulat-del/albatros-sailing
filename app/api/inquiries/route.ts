import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type InquiryType = "CHARTER" | "TRAINING";

function toNullableString(value: unknown): string | null {
  if (value === undefined || value === null) return null;
  const text = String(value).trim();
  return text.length ? text : null;
}

function toNullableInt(value: unknown): number | null {
  if (value === undefined || value === null || value === "") return null;
  const num = Number(value);
  return Number.isFinite(num) ? Math.trunc(num) : null;
}

function toNullableBoolean(value: unknown): boolean | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value === "boolean") return value;
  const text = String(value).trim().toLowerCase();
  if (["true", "1", "yes", "on"].includes(text)) return true;
  if (["false", "0", "no", "off"].includes(text)) return false;
  return null;
}

function normalizeType(value: unknown): InquiryType {
  return String(value).trim().toUpperCase() === "TRAINING"
    ? "TRAINING"
    : "CHARTER";
}

function calculateLeadScore(input: {
  type: InquiryType;
  guestCount?: number | null;
  participantCount?: number | null;
  skipperRequired?: boolean | null;
  charterDurationWeeks?: number | null;
  weekId?: string | null;
  boatId?: string | null;
}) {
  let score = 20;

  if (input.type === "CHARTER") score += 20;
  if ((input.guestCount ?? 0) >= 4) score += 10;
  if ((input.guestCount ?? 0) >= 6) score += 10;
  if ((input.participantCount ?? 0) >= 2) score += 10;
  if ((input.participantCount ?? 0) >= 4) score += 10;
  if (input.skipperRequired) score += 10;
  if ((input.charterDurationWeeks ?? 0) >= 2) score += 10;
  if (input.weekId) score += 5;
  if (input.boatId) score += 5;

  return Math.min(score, 100);
}

function calculateEstimatedValue(input: {
  type: InquiryType;
  guestCount?: number | null;
  participantCount?: number | null;
  charterDurationWeeks?: number | null;
}) {
  if (input.type === "TRAINING") {
    const participants = input.participantCount ?? 1;
    return participants * 450;
  }

  const guests = input.guestCount ?? 2;
  const weeks = input.charterDurationWeeks ?? 1;
  return guests * weeks * 900;
}

async function syncWeekInquiryCount(weekId: string) {
  const count = await prisma.inquiry.count({
    where: { weekId },
  });

  await prisma.charterAvailability.update({
    where: { id: weekId },
    data: {
      inquiryCount: count,
      hasConflict: count > 1,
    },
  });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const status = toNullableString(searchParams.get("status"));
    const type = toNullableString(searchParams.get("type"));
    const boatId = toNullableString(searchParams.get("boatId"));
    const weekId =
      toNullableString(searchParams.get("weekId")) ||
      toNullableString(searchParams.get("charterWeekId"));
    const search = toNullableString(searchParams.get("search"));

    const inquiries = await prisma.inquiry.findMany({
      where: {
        ...(status ? { status } : {}),
        ...(type ? { type } : {}),
        ...(boatId ? { boatId } : {}),
        ...(weekId ? { weekId } : {}),
        ...(search
          ? {
              OR: [
                { fullName: { contains: search } },
                { email: { contains: search } },
                { phone: { contains: search } },
                { notes: { contains: search } },
                { routePreference: { contains: search } },
                { trainingProgram: { contains: search } },
              ],
            }
          : {}),
      },
      orderBy: {
        createdAt: "desc",
      },
      include: {
        boat: true,
        week: {
          include: {
            boat: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      inquiries,
    });
  } catch (error) {
    console.error("INQUIRIES GET ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Inquiry listesi alınamadı.",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const type = normalizeType(body?.type);

    const fullName = toNullableString(body?.fullName);
    const email = toNullableString(body?.email);
    const phone = toNullableString(body?.phone);
    const notes =
      toNullableString(body?.notes) ?? toNullableString(body?.message);

    const guestCount = toNullableInt(body?.guestCount);
    const routePreference = toNullableString(body?.routePreference);
    const skipperRequired = toNullableBoolean(body?.skipperRequired) ?? false;
    const charterDurationWeeks =
      toNullableInt(body?.charterDurationWeeks) ?? 1;

    const trainingProgram = toNullableString(body?.trainingProgram);
    const participantCount = toNullableInt(body?.participantCount);

    const boatId = toNullableString(body?.boatId);
    const weekId =
      toNullableString(body?.weekId) ||
      toNullableString(body?.charterWeekId);

    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Ad Soyad zorunlu." },
        { status: 400 }
      );
    }

    if (!email && !phone) {
      return NextResponse.json(
        { success: false, error: "E-posta veya telefon zorunlu." },
        { status: 400 }
      );
    }

    const leadScore = calculateLeadScore({
      type,
      guestCount,
      participantCount,
      skipperRequired,
      charterDurationWeeks,
      weekId,
      boatId,
    });

    const estimatedValue = calculateEstimatedValue({
      type,
      guestCount,
      participantCount,
      charterDurationWeeks,
    });

    const inquiry = await prisma.inquiry.create({
      data: {
  type,
  status: "NEW",
  fullName: fullName || "",
  email: email || "",
  phone: phone || "",
  notes: notes ?? null,
  guestCount,
  routePreference,
  skipperRequired,
  charterDurationWeeks,
  trainingProgram,
  participantCount,
  boatId,
  weekId,
  leadScore,
  estimatedValue,
},

      include: {
        boat: true,
        week: {
          include: {
            boat: true,
          },
        },
      },
    });

    if (weekId) {
      await syncWeekInquiryCount(weekId);
    }

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("INQUIRIES POST ERROR:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Inquiry oluşturulamadı.",
      },
      { status: 500 }
    );
  }
}