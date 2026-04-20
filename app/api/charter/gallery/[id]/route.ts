import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Görsel id yok" },
        { status: 400 }
      );
    }

    const body = await req.json();
    const sortOrder = Number(body.sortOrder);

    if (Number.isNaN(sortOrder)) {
      return NextResponse.json(
        { success: false, error: "sortOrder geçersiz" },
        { status: 400 }
      );
    }

    const updated = await prisma.charterGalleryImage.update({
      where: { id },
      data: { sortOrder },
    });

    return NextResponse.json({
      success: true,
      item: updated,
    });
  } catch (error) {
    console.error("PUT /api/charter/gallery/[id] error:", error);

    return NextResponse.json(
      { success: false, error: "Galeri güncelleme başarısız" },
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

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Görsel id yok" },
        { status: 400 }
      );
    }

    await prisma.charterGalleryImage.delete({
      where: { id },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("DELETE /api/charter/gallery/[id] error:", error);

    return NextResponse.json(
      { success: false, error: "Galeri görseli silinemedi" },
      { status: 500 }
    );
  }
}