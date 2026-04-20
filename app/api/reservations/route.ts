import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.reservation.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      items,
    });
  } catch (error) {
    console.error("reservations list error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Kayıtlar alınamadı",
      },
      { status: 500 }
    );
  }
}