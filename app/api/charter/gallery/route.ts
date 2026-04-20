import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { boatId, imageUrl } = body;

    if (!boatId) {
      return NextResponse.json(
        { success: false, error: "boatId missing" },
        { status: 400 }
      );
    }

    if (!imageUrl) {
      return NextResponse.json(
        { success: false, error: "imageUrl missing" },
        { status: 400 }
      );
    }

    const lastItem = await prisma.charterGalleryImage.findFirst({
      where: { boatId: String(boatId) },
      orderBy: { sortOrder: "desc" },
    });

    const created = await prisma.charterGalleryImage.create({
      data: {
        boatId: String(boatId),
        imageUrl: String(imageUrl),
        sortOrder: lastItem ? lastItem.sortOrder + 1 : 0,
      },
    });

    return NextResponse.json({
      success: true,
      item: created,
    });
  } catch (error) {
    console.error("POST /api/charter/gallery error:", error);

    return NextResponse.json(
      { success: false, error: "Galeri kaydı oluşturulamadı" },
      { status: 500 }
    );
  }
}