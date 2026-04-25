import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const {
      fullName,
      phone,
      email,
      type,
      trainingProgram,
      participantCount,
      guestCount,
      charterDurationWeeks,
      routePreference,
    } = await req.json();

    const safeFullName = String(fullName || "").trim();
    const safePhone = String(phone || "").trim();
    const safeEmail = String(email || "").trim();
    const safeType = String(type || "").trim().toUpperCase();

    if (!safeFullName || !safePhone || !safeEmail || !safeType) {
      return NextResponse.json(
        { error: "Ad soyad, telefon, email ve talep tipi zorunludur." },
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
        email: safeEmail,

        type: safeType,
        status: "NEW",

        trainingProgram: trainingProgram || undefined,
        participantCount: participantCount
          ? Number(participantCount)
          : undefined,

        routePreference: routePreference || undefined,
        guestCount: guestCount ? Number(guestCount) : undefined,
        charterDurationWeeks: charterDurationWeeks
          ? Number(charterDurationWeeks)
          : undefined,

        leadScore,
        estimatedValue,
      },
    });

    return NextResponse.json({
      success: true,
      inquiry,
    });
  } catch (error) {
    console.error("INQUIRY CREATE ERROR:", error);

    return NextResponse.json(
      { error: "Talep oluşturulamadı." },
      { status: 500 }
    );
  }
}