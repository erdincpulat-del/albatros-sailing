import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.charterAvailability.update({
      where: { id },
      data: {
        weekLabel: body.weekLabel,
        startDate: body.startDate ? new Date(body.startDate) : undefined,
        endDate: body.endDate ? new Date(body.endDate) : undefined,
        status: body.status,
        inquiryCount: Number(body.inquiryCount || 0),
        overridePrice: body.overridePrice || null,
        notes: body.notes || null,
      },
    });

    return NextResponse.json({
      success: true,
      item: updated,
    });
  } catch (error) {
    console.error("PUT /api/charter-availability/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Availability güncellenemedi." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.charterAvailability.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/charter-availability/[id] error:", error);
    return NextResponse.json(
      { success: false, error: "Availability silinemedi." },
      { status: 500 }
    );
  }
}