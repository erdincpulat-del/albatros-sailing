import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_req: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params;

    const boat = await prisma.charterBoat.findUnique({
      where: { slug },
      include: { prices: true },
    });

    if (!boat) {
      return NextResponse.json(
        { error: "Tekne bulunamadı." },
        { status: 404 }
      );
    }

    return NextResponse.json({ boat });
  } catch (error) {
    console.error("GET /api/charter/[slug] error:", error);
    return NextResponse.json(
      { error: "Tekne alınamadı." },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params;
    const body = await req.json();

    const {
      name,
      model,
      year,
      cabins,
      guestsLabel,
      location,
      image,
      shortNote,
      description,
      features,
      prices,
    } = body;

    const existing = await prisma.charterBoat.findUnique({
      where: { slug },
      include: { prices: true },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Tekne bulunamadı." },
        { status: 404 }
      );
    }

    await prisma.charterBoat.update({
      where: { slug },
      data: {
        name,
        model,
        year: Number(year),
        cabins: Number(cabins),
        guestsLabel,
        location,
        image,
        shortNote,
        description,
        features:
          typeof features === "string"
            ? features
            : Array.isArray(features)
              ? features.join("\n")
              : "",
      },
    });

    await prisma.charterBoatPrice.deleteMany({
      where: { boatId: existing.id },
    });

    if (Array.isArray(prices) && prices.length > 0) {
      await prisma.charterBoatPrice.createMany({
        data: prices
          .filter((p: { month?: string; price?: string }) => p?.month && p?.price)
          .map((p: { month: string; price: string }) => ({
            boatId: existing.id,
            month: p.month,
            price: p.price,
          })),
      });
    }

    const updated = await prisma.charterBoat.findUnique({
      where: { slug },
      include: { prices: true },
    });

    return NextResponse.json({ boat: updated });
  } catch (error) {
    console.error("PATCH /api/charter/[slug] error:", error);
    return NextResponse.json(
      { error: "Tekne güncellenemedi." },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  try {
    const { slug } = await context.params;

    const boat = await prisma.charterBoat.findUnique({
      where: { slug },
    });

    if (!boat) {
      return NextResponse.json(
        { error: "Tekne bulunamadı." },
        { status: 404 }
      );
    }

    await prisma.charterBoat.delete({
      where: { slug },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/charter/[slug] error:", error);
    return NextResponse.json(
      { error: "Tekne silinemedi." },
      { status: 500 }
    );
  }
}