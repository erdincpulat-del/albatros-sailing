import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const boatId = searchParams.get("boatId");
    const slug = searchParams.get("slug");

    let resolvedBoatId = boatId;

    if (!resolvedBoatId && slug) {
      const boat = await prisma.charterBoat.findUnique({
        where: { slug },
        select: { id: true },
      });

      if (!boat) {
        return NextResponse.json(
          { success: false, error: "Tekne bulunamadı." },
          { status: 404 }
        );
      }

      resolvedBoatId = boat.id;
    }

    const where = resolvedBoatId ? { boatId: resolvedBoatId } : {};

    const items = await prisma.charterAvailability.findMany({
      where,
      orderBy: { startDate: "asc" },
      include: {
        boat: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });

    return NextResponse.json({
      success: true,
      items,
    });
  } catch (error) {
    console.error("GET /api/charter-availability error:", error);
    return NextResponse.json(
      { success: false, error: "Availability alınamadı." },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      boatId,
      weekLabel,
      startDate,
      endDate,
      status,
      inquiryCount,
      overridePrice,
      notes,
    } = body;

    if (!boatId || !weekLabel || !startDate || !endDate) {
      return NextResponse.json(
        { success: false, error: "Zorunlu alanlar eksik." },
        { status: 400 }
      );
    }

    const created = await prisma.charterAvailability.create({
      data: {
        boatId,
        weekLabel,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: status || "AVAILABLE",
        inquiryCount: Number(inquiryCount || 0),
        overridePrice: overridePrice || null,
        notes: notes || null,
      },
    });

    return NextResponse.json({
      success: true,
      item: created,
    });
  } catch (error) {
    console.error("POST /api/charter-availability error:", error);
    return NextResponse.json(
      { success: false, error: "Availability oluşturulamadı." },
      { status: 500 }
    );
  }
}