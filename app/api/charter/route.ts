import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

/* =========================
   GET → TÜM TEKNELER
========================= */
export async function GET() {
  try {
    const boats = await prisma.charterBoat.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({
      success: true,
      boats,
    });
  } catch (error) {
    console.error("GET /api/charter error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Tekneler alınamadı.",
      },
      { status: 500 }
    );
  }
}

/* =========================
   POST → YENİ TEKNE EKLE
========================= */
export async function POST(req: Request) {
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
    } = body;

    // ZORUNLU ALAN KONTROLÜ
    if (
      !slug ||
      !name ||
      !model ||
      !year ||
      !cabins ||
      !guestsLabel ||
      !location
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Zorunlu alanlar eksik.",
        },
        { status: 400 }
      );
    }

    const created = await prisma.charterBoat.create({
      data: {
        slug: String(slug).trim(),
        name: String(name).trim(),
        model: String(model).trim(),
        year: Number(year),
        cabins: Number(cabins),
        guestsLabel: String(guestsLabel).trim(),
        location: String(location).trim(),
        image: image || "",
        shortNote: shortNote || "",
        description: description || "",
        features: features || "",
      },
    });

    return NextResponse.json({
      success: true,
      boat: created,
    });
  } catch (error) {
    console.error("POST /api/charter error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Tekne oluşturulamadı.",
      },
      { status: 500 }
    );
  }
}