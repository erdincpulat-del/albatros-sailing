import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const action = searchParams.get("action") || undefined;
    const targetType = searchParams.get("targetType") || undefined;

    const logs = await prisma.adminLog.findMany({
      where: {
        ...(action ? { action } : {}),
        ...(targetType ? { targetType } : {}),
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 100,
    });

    return NextResponse.json({
      success: true,
      items: logs,
      total: logs.length,
    });
  } catch (error) {
    console.error("GET /api/admin-logs error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Admin log kayıtları alınamadı",
        items: [],
        total: 0,
      },
      { status: 500 }
    );
  }
}