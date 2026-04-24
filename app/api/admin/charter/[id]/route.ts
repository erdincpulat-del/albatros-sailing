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

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
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

  const result: GalleryInput[] = [];

  value.forEach((item, index) => {
    if (!item || typeof item !== "object") return;

    const row = item as Record<string, unknown>;
    const imageUrl = String(row.imageUrl || row.image || "").trim();
if (!imageUrl) return;

    const rawSort = Number(row.sortOrder);

    result.push({
      imageUrl,
      sortOrder: Number.isFinite(rawSort) ? rawSort : index,
    });
  });

  return result;
}

export async function PUT(req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = (await req.json()) as BoatInput;

    const current = await prisma.charterBoat.findUnique({
      where: { id },
      select: { id: true, slug: true },
    });

    if (!current) {
      return NextResponse.json(
        { error: "Tekne bulunamadı." },
        { status: 404 }
      );
    }

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

    if (!name || !model || !slug) {
      return NextResponse.json(
        { error: "İsim, model ve slug zorunlu." },
        { status: 400 }
      );
    }

    if (!Number.isFinite(year) || !Number.isFinite(cabins)) {
      return NextResponse.json(
        { error: "Yıl ve kabin sayısı geçerli olmalı." },
        { status: 400 }
      );
    }

    if (!guestsLabel || !location || !image || !shortNote || !description || !features) {
      return NextResponse.json(
        { error: "Tüm zorunlu alanları doldur." },
        { status: 400 }
      );
    }

    const slugConflict = await prisma.charterBoat.findFirst({
      where: {
        slug,
        NOT: { id },
      },
      select: { id: true },
    });

    if (slugConflict) {
      return NextResponse.json(
        { error: "Bu slug başka bir teknede kullanılıyor." },
        { status: 409 }
      );
    }

          await prisma.charterBoatPrice.deleteMany({
        where: { boatId: id },
      });

      const boat = await prisma.charterBoat.update({
        where: { id },
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
          },
      });

      return NextResponse.json({ boat });
  } catch (error) {
    console.error("PUT /api/admin/charter/[id] error:", error);
    return NextResponse.json(
      { error: "Tekne güncellenemedi." },
      { status: 500 }
    );
  }
}

export async function DELETE(_req: NextRequest, context: RouteContext) {
  try {
    const { id } = await context.params;

    const existing = await prisma.charterBoat.findUnique({
      where: { id },
      select: { id: true },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Tekne bulunamadı." },
        { status: 404 }
      );
    }

    const hasAvailability = await prisma.charterAvailability.findFirst({
      where: { boatId: id },
      select: { id: true },
    });

    if (hasAvailability) {
      return NextResponse.json(
        {
          error:
            "Bu tekneye bağlı availability kayıtları var. Önce ilgili takvim kayıtlarını temizle.",
        },
        { status: 409 }
      );
    }

    const hasInquiry = await prisma.inquiry.findFirst({
      where: { boatId: id },
      select: { id: true },
    });

    if (hasInquiry) {
      return NextResponse.json(
        {
          error:
            "Bu tekneye bağlı inquiry kayıtları var. Önce ilgili talepleri temizle veya tekneyi sistemde tut.",
        },
        { status: 409 }
      );
    }

    await prisma.charterBoatPrice.deleteMany({
      where: { boatId: id },
    });

    

    await prisma.charterBoat.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE /api/admin/charter/[id] error:", error);
    return NextResponse.json(
      { error: "Tekne silinemedi." },
      { status: 500 }
    );
  }
}