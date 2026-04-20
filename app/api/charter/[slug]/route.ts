import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type RouteParams = {
  slug: string;
};

type PriceInput = {
  month?: string;
  price?: string;
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
      include: {
        gallery: {
          orderBy: { sortOrder: "asc" },
        },
        prices: {
          orderBy: { month: "asc" },
        },
      },
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
      { success: false, error: "Hata oluştu" },
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

        captainFee:
          typeof body.captainFee === "string" ? body.captainFee.trim() : "",
        transitlogFee:
          typeof body.transitlogFee === "string"
            ? body.transitlogFee.trim()
            : "",
        cleaningFee:
          typeof body.cleaningFee === "string" ? body.cleaningFee.trim() : "",
        extrasNote:
          typeof body.extrasNote === "string" ? body.extrasNote.trim() : "",
      },
    });

    await prisma.charterBoatPrice.deleteMany({
      where: { boatId: updatedBoat.id },
    });

    const validPrices: PriceInput[] = Array.isArray(body.prices)
      ? body.prices.filter(
          (item: PriceInput) =>
            typeof item?.month === "string" &&
            typeof item?.price === "string" &&
            item.month.trim() &&
            item.price.trim()
        )
      : [];

    if (validPrices.length > 0) {
      await prisma.charterBoatPrice.createMany({
        data: validPrices.map((item) => ({
          boatId: updatedBoat.id,
          month: String(item.month).trim(),
          price: String(item.price).trim(),
        })),
      });
    }

    const finalBoat = await prisma.charterBoat.findUnique({
      where: { id: updatedBoat.id },
      include: {
        gallery: {
          orderBy: { sortOrder: "asc" },
        },
        prices: {
          orderBy: { month: "asc" },
        },
      },
    });

    return NextResponse.json({
      success: true,
      boat: finalBoat,
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
  { params }: { params: Promise<{ slug: string }> }
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