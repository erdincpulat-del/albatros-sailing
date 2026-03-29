import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET → tüm tekneleri getir
export async function GET() {
  try {
    const boats = await prisma.charterBoat.findMany({
      include: {
        prices: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({ boats });
  } catch (error) {
    console.error("GET /api/charter error:", error);
    return NextResponse.json(
      { error: "Tekneler alınamadı." },
      { status: 500 }
    );
  }
}

// POST → yeni tekne ekle
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      slug,
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

    if (
      !slug ||
      !name ||
      !model ||
      !year ||
      !cabins ||
      !guestsLabel ||
      !location ||
      !image ||
      !shortNote ||
      !description
    ) {
      return NextResponse.json(
        { error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const existing = await prisma.charterBoat.findUnique({
      where: { slug },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor." },
        { status: 409 }
      );
    }

    const created = await prisma.charterBoat.create({
      data: {
        slug,
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
        prices: {
          create: Array.isArray(prices)
            ? prices
                .filter(
                  (item: { month?: string; price?: string }) =>
                    item?.month && item?.price
                )
                .map((item: { month: string; price: string }) => ({
                  month: item.month,
                  price: item.price,
                }))
            : [],
        },
      },
      include: {
        prices: true,
      },
    });

    return NextResponse.json({ boat: created }, { status: 201 });
  } catch (error) {
    console.error("POST /api/charter error:", error);
    return NextResponse.json(
      { error: "Tekne oluşturulamadı." },
      { status: 500 }
    );
  }
}