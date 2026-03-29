import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const logs = await prisma.adminLog.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 100,
    });

    return NextResponse.json({
      success: true,
      items: logs,
    });
  } catch (error) {
    console.error("admin logs list error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Log kayıtları alınamadı",
      },
      { status: 500 }
    );
  }
}