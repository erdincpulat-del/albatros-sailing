import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

// ✅ 1. GET (zaten var)
export async function GET() {
  try {
    const items = await prisma.certificate.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        certificateId: true,
        fullName: true,
        program: true,
        qualificationLevel: true,
        issueDate: true,
        seaMiles: true,
        photoUrl: true,
        cardFrontUrl: true,
        cardBackUrl: true,
        verificationHash: true,
        status: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      items,
      total: items.length,
    });
  } catch (error) {
    console.error("GET /api/certificates error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Sertifikalar alınamadı",
        items: [],
        total: 0,
      },
      { status: 500 }
    );
  }
}

// ✅ 2. BURAYA EKLENECEK (GET’in ALTINA)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      program,
      qualificationLevel,
      issueDate,
      seaMiles,
      instructorId,
    } = body;

    const count = await prisma.certificate.count();

    const certificateId = `AS-OFF-2026-${String(count + 1).padStart(4, "0")}`;

    const verificationHash = crypto
      .createHash("sha256")
      .update(certificateId + Date.now())
      .digest("hex");

    const certificate = await prisma.certificate.create({
      data: {
        certificateId,
        fullName,
        program,
        qualificationLevel,
        issueDate: issueDate ? new Date(issueDate) : null,
        seaMiles: seaMiles ? Number(seaMiles) : null,
        instructorId,
        status: "PENDING",
        verificationHash,
      },
    });

    return NextResponse.json({
      success: true,
      certificate,
    });
  } catch (error) {
    console.error("POST /api/certificates error:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Sertifika oluşturulamadı",
      },
      { status: 500 }
    );
  }
}