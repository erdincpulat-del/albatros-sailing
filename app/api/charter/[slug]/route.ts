import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteParams = {
  slug: string;
};

export async function GET(
  req: Request,
  { params }: { params: Promise<RouteParams> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Slug yok" },
        { status: 400 }
      );
    }

    const boat = await prisma.charterBoat.findUnique({
      where: { slug },
    });

    if (!boat) {
      return NextResponse.json(
        { success: false, error: "Tekne bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      boat,
    });
  } catch (error) {
    console.error("GET /api/charter/[slug] error:", error);

    return NextResponse.json(
      { success: false, error: "Tekne alınamadı" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<RouteParams> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Slug yok" },
        { status: 400 }
      );
    }

    const body = await req.json();

    const nextSlug =
      typeof body.slug === "string" && body.slug.trim()
        ? body.slug.trim()
        : slug;

    const updatedBoat = await prisma.charterBoat.update({
      where: { slug },
      data: {
        slug: nextSlug,
        name: typeof body.name === "string" ? body.name.trim() : "",
        model: typeof body.model === "string" ? body.model.trim() : "",
        year: Number(body.year) || 0,
        cabins: Number(body.cabins) || 0,
        guestsLabel:
          typeof body.guestsLabel === "string" ? body.guestsLabel.trim() : "",
        location: typeof body.location === "string" ? body.location.trim() : "",
        image: typeof body.image === "string" ? body.image.trim() : "",
        shortNote:
          typeof body.shortNote === "string" ? body.shortNote.trim() : "",
        description:
          typeof body.description === "string" ? body.description.trim() : "",
        features:
          typeof body.features === "string" ? body.features.trim() : "",
      },
    });

    return NextResponse.json({
      success: true,
      boat: updatedBoat,
    });
  } catch (error) {
    console.error("PUT /api/charter/[slug] error:", error);

    return NextResponse.json(
      { success: false, error: "Güncelleme başarısız" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<RouteParams> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { success: false, error: "Slug yok" },
        { status: 400 }
      );
    }

    await prisma.charterBoat.delete({
      where: { slug },
    });

    return NextResponse.json({
      success: true,
      message: "Tekne silindi.",
    });
  } catch (error) {
    console.error("DELETE /api/charter/[slug] error:", error);

    return NextResponse.json(
      { success: false, error: "Tekne silinemedi." },
      { status: 500 }
    );
  }
}