import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      phone,
      type,
      trainingProgram,
      participantCount,
      routePreference,
      guestCount,
      charterDurationWeeks,
    } = await req.json();

    const safeFullName = String(fullName || "").trim();
    const safePhone = String(phone || "").trim();
    const safeType = String(type || "").trim();

    if (!safeFullName || !safePhone || !safeType) {
      return NextResponse.json(
        { error: "Ad soyad, telefon ve talep tipi zorunludur." },
        { status: 400 }
      );
    }

    if (safeType !== "TRAINING" && safeType !== "CHARTER") {
      return NextResponse.json(
        { error: "Geçersiz talep tipi." },
        { status: 400 }
      );
    }

    let leadScore = 40;

    if (safeType === "TRAINING") leadScore += 20;
    if (safeType === "CHARTER") leadScore += 15;
    if (trainingProgram) leadScore += 10;
    if (participantCount && Number(participantCount) > 1) leadScore += 10;
    if (guestCount && Number(guestCount) > 2) leadScore += 10;
    if (charterDurationWeeks && Number(charterDurationWeeks) >= 2) {
      leadScore += 10;
    }

    const estimatedValue =
      safeType === "CHARTER"
        ? (Number(guestCount) || 1) * 300
        : (Number(participantCount) || 1) * 200;

    const inquiry = await prisma.inquiry.create({
      data: {
        fullName: safeFullName,
        phone: safePhone,
        type: safeType,
        trainingProgram: trainingProgram || null,
        participantCount: participantCount
          ? Number(participantCount)
          : null,
        routePreference: routePreference || null,
        guestCount: guestCount ? Number(guestCount) : null,
        charterDurationWeeks: charterDurationWeeks
          ? Number(charterDurationWeeks)
          : null,
        leadScore,
        estimatedValue,
      },
    });

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("CREATE INQUIRY ERROR:", error);

    return NextResponse.json(
      { error: "Talep oluşturulamadı." },
      { status: 500 }
    );
  }
}