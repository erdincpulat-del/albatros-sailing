import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const source = String(body?.source || "").trim();
    const page = String(body?.page || "").trim();
    const fullName = String(body?.fullName || "").trim();
    const phone = String(body?.phone || "").trim();

    if (!source) {
      return NextResponse.json(
        { error: "source zorunludur." },
        { status: 400 }
      );
    }

    const log = await prisma.adminLog.create({
      data: {
        action: "CONTACT_CLICK",
        entityType: "LEAD",
        entityId: null,
        message: `${source} tıklandı`,
        meta: {
          source,
          page,
          fullName,
          phone,
        },
      },
    });

    return NextResponse.json({
      success: true,
      log,
    });
  } catch (error) {
    console.error("CONTACT CLICK ERROR:", error);

    return NextResponse.json(
      { error: "Tıklama kaydı oluşturulamadı." },
      { status: 500 }
    );
  }
}