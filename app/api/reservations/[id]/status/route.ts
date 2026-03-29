import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

const ALLOWED_STATUSES = ["ACTIVE", "PENDING", "REVOKED", "CANCELLED"] as const;

export async function PATCH(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const nextStatus = String(body.status || "")
      .trim()
      .toUpperCase();

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          error: "Kayıt id gerekli",
        },
        { status: 400 }
      );
    }

    if (
      !ALLOWED_STATUSES.includes(
        nextStatus as (typeof ALLOWED_STATUSES)[number]
      )
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Geçersiz status değeri",
        },
        { status: 400 }
      );
    }

    const existing = await prisma.reservation.findUnique({
      where: { id },
      select: {
        id: true,
        certificateId: true,
        status: true,
        fullName: true,
      },
    });

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          error: "Kayıt bulunamadı",
        },
        { status: 404 }
      );
    }

    const updated = await prisma.reservation.update({
      where: { id },
      data: {
        status: nextStatus,
      },
    });

    await prisma.adminLog.create({
      data: {
        action: "UPDATE_STATUS",
        targetType: "CERTIFICATE",
        targetId: existing.certificateId,
        details: `${existing.fullName} için status ${existing.status} -> ${nextStatus} olarak değiştirildi`,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Status güncellendi",
      reservation: updated,
    });
  } catch (error) {
    console.error("reservation status update error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Status güncellenemedi",
      },
      { status: 500 }
    );
  }
}