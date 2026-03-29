import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const instructors = await prisma.instructor.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ instructors });
  } catch (error) {
    console.error("GET /api/instructors error:", error);
    return NextResponse.json(
      { error: "Failed to fetch instructors" },
      { status: 500 }
    );
  }
}