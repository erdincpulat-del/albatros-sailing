import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type PriceInput = {
  month: string;
  price: string;
};

type GalleryInput = {
  imageUrl: string;
  sortOrder?: number;
};

type BoatInput = {
  slug?: string;
  name?: string;
  model?: string;
  year?: number | string;
  cabins?: number | string;
  guestsLabel?: string;
  location?: string;
  image?: string;
  shortNote?: string;
  description?: string;
  features?: string;
  prices?: PriceInput[];
  gallery?: GalleryInput[];
};

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/ı/g, "i")
    .replace(/ğ/g, "g")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ö/g, "o")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function requiredString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function requiredInt(value: unknown) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : NaN;
}

function sanitizePrices(value: unknown): PriceInput[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => {
      if (!item || typeof item !== "object") return null;
      const row = item as Record<string, unknown>;
      const month = requiredString(row.month);
      const price = requiredString(row.price);
      if (!month || !price) return null;
      return { month, price };
    })
    .filter((item): item is PriceInput => Boolean(item));
}

function sanitizeGallery(value: unknown): GalleryInput[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item, index) => {
      if (!item || typeof item !== "object") return null;
      const row = item as Record<string, unknown>;
      const imageUrl = requiredString(row.imageUrl);
      if (!imageUrl) return null;

      const rawSort = Number(row.sortOrder);
      return {
        imageUrl,
        sortOrder: Number.isFinite(rawSort) ? rawSort : index,
      };
    })
    .filter((item): item is GalleryInput => Boolean(item));
}

export async function GET() {
  try {
    const boats = await prisma.charterBoat.findMany({
      include: {
        prices: {
          orderBy: {
            month: "asc",
          },
        },
        gallery: {
          orderBy: {
            sortOrder: "asc",
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return NextResponse.json({ boats });
  } catch (error) {
    console.error("GET /api/admin/charter error:", error);
    return NextResponse.json(
      { error: "Tekneler yüklenemedi." },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as BoatInput;

    const name = requiredString(body.name);
    const model = requiredString(body.model);
    const slug = normalizeSlug(requiredString(body.slug) || name);
    const year = requiredInt(body.year);
    const cabins = requiredInt(body.cabins);
    const guestsLabel = requiredString(body.guestsLabel);
    const location = requiredString(body.location);
    const image = requiredString(body.image);
    const shortNote = requiredString(body.shortNote);
    const description = requiredString(body.description);
    const features = requiredString(body.features);
    const prices = sanitizePrices(body.prices);
    const gallery = sanitizeGallery(body.gallery);

    if (!name) {
      return NextResponse.json(
        { error: "Tekne adı zorunlu." },
        { status: 400 }
      );
    }

    if (!model) {
      return NextResponse.json(
        { error: "Tekne modeli zorunlu." },
        { status: 400 }
      );
    }

    if (!slug) {
      return NextResponse.json(
        { error: "Slug zorunlu." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(year)) {
      return NextResponse.json(
        { error: "Geçerli bir yıl gir." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(cabins)) {
      return NextResponse.json(
        { error: "Geçerli bir kabin sayısı gir." },
        { status: 400 }
      );
    }

    if (!guestsLabel || !location || !image || !shortNote || !description || !features) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldur." },
        { status: 400 }
      );
    }

    const existing = await prisma.charterBoat.findUnique({
      where: { slug },
      select: { id: true },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Bu slug zaten kullanılıyor." },
        { status: 409 }
      );
    }

    const boat = await prisma.charterBoat.create({
      data: {
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
        prices: {
          create: prices.map((price) => ({
            month: price.month,
            price: price.price,
          })),
        },
        gallery: {
          create: gallery.map((item, index) => ({
            imageUrl: item.imageUrl,
            sortOrder: typeof item.sortOrder === "number" ? item.sortOrder : index,
          })),
        },
      },
      include: {
        prices: {
          orderBy: {
            month: "asc",
          },
        },
        gallery: {
          orderBy: {
            sortOrder: "asc",
          },
        },
      },
    });

    return NextResponse.json({ boat }, { status: 201 });
  } catch (error) {
    console.error("POST /api/admin/charter error:", error);
    return NextResponse.json(
      { error: "Tekne oluşturulamadı." },
      { status: 500 }
    );
  }
}