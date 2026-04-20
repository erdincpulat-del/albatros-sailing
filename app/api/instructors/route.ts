import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const instructors = await prisma.instructor.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      items: instructors,
    });
  } catch (error) {
    console.error("GET /api/instructors error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Instructorlar alınamadı",
        items: [],
      },
      { status: 500 }
    );
  }
}