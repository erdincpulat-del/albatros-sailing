import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId");

    if (!certificateId) {
      return NextResponse.json(
        { error: "certificateId gerekli" },
        { status: 400 }
      );
    }

    const certificate = await prisma.certificate.findFirst({
      where: {
        certificateId: certificateId.toUpperCase(),
        status: "ACTIVE", // sadece aktifleri getir
      },
    });

    if (!certificate) {
      return NextResponse.json(
        { error: "Sertifika bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      certificate,
    });

  } catch (error) {
    console.error("VERIFY ERROR:", error);

    return NextResponse.json(
      { error: "Doğrulama hatası" },
      { status: 500 }
    );
  }
}