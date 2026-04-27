import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";
import QRCode from "qrcode";

// -----------------------------
// GET → tüm sertifikaları getir
// -----------------------------
export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: { createdAt: "desc" },
      include: { instructor: true },
    });

    return NextResponse.json({
      success: true,
      items: certificates,
      total: certificates.length,
    });
  } catch (error) {
    console.error("CERTIFICATES FETCH ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificates fetch failed",
      },
      { status: 500 }
    );
  }
}

// -----------------------------
// POST → yeni sertifika oluştur
// -----------------------------
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 🌍 BASE URL
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.APP_URL ||
      "https://albatros-sailing.vercel.app";

    // 🔐 HASH oluştur
    const verificationHash = crypto
      .createHash("sha256")
      .update(
        `${body.fullName}-${body.program}-${body.qualificationLevel}-${Date.now()}`
      )
      .digest("hex")
      .slice(0, 12)
      .toUpperCase();

    // 🔗 Verify URL
    const verifyUrl = `${baseUrl}/verify/${verificationHash}`;

    // 📱 QR üret
    const qrCodeUrl = await QRCode.toDataURL(verifyUrl, {
      width: 300,
      margin: 1,
    });

    // 🧠 DATA OBJESİ
    const data: any = {
      fullName: String(body.fullName || ""),
      program: String(body.program || ""),
      qualificationLevel: String(body.qualificationLevel || ""),

      issueDate: body.issueDate ? new Date(body.issueDate) : null,

      seaMiles:
        body.seaMiles !== undefined &&
        body.seaMiles !== null &&
        body.seaMiles !== ""
          ? Number(body.seaMiles)
          : null,

      photoUrl: body.photoUrl || null,

      status: "PENDING",

      // 🔥 EN KRİTİK ALANLAR
      verificationHash,
      qrCodeUrl,
    };

    // 👨‍✈️ Instructor bağlantısı (varsa)
    if (body.instructorId) {
      data.instructor = {
        connect: { id: body.instructorId },
      };
    }

    // 💾 DB kayıt
    const certificate = await prisma.certificate.create({
      data,
      include: { instructor: true },
    });

    return NextResponse.json({
      success: true,
      item: certificate,
    });
  } catch (error) {
    console.error("CERTIFICATE CREATE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificate create failed",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}