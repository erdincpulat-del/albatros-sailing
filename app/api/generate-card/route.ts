import { NextRequest, NextResponse } from "next/server";
import { createCanvas, loadImage } from "canvas";
import path from "path";
import fs from "fs";
import QRCode from "qrcode";
import { prisma } from "@/lib/db";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { certificateId } = body;

    if (!certificateId) {
      return NextResponse.json(
        { error: "certificateId gerekli" },
        { status: 400 }
      );
    }

    const reservation = await prisma.reservation.findUnique({
      where: { certificateId },
      select: {
        id: true,
        certificateId: true,
      },
    });

    if (!reservation) {
      return NextResponse.json(
        { error: "Kayıt bulunamadı" },
        { status: 404 }
      );
    }

    const templatePath = path.join(
      process.cwd(),
      "public",
      "templates",
      "card-back.png"
    );

    if (!fs.existsSync(templatePath)) {
      return NextResponse.json(
        { error: "card-back.png bulunamadı" },
        { status: 500 }
      );
    }

    const template = await loadImage(templatePath);
    const canvas = createCanvas(template.width, template.height);
    const ctx = canvas.getContext("2d");

    // back template
    ctx.drawImage(template, 0, 0, template.width, template.height);

    // verify URL
    const verifyUrl =
  `${req.nextUrl.origin}/verify/` +
  encodeURIComponent(reservation.certificateId);

    // QR üret
    const qrDataUrl = await QRCode.toDataURL(verifyUrl, {
      margin: 1,
      width: 220,
      color: {
        dark: "#111827",
        light: "#FFFFFF",
      },
    });

    const qrImage = await loadImage(qrDataUrl);

    // QR yerleşimi
    // Bu koordinatlar mevcut kartına göre güvenli başlangıç değerleri.
    // Sonraki aşamada milimetrik ince ayar yapabiliriz.
    const qrX = template.width - 245;
    const qrY = template.height - 195;
    const qrSize = 150;

    ctx.drawImage(qrImage, qrX, qrY, qrSize, qrSize);

    // Certificate ID küçük yazı
    ctx.fillStyle = "#374151";
    ctx.font = "bold 22px Arial";
    ctx.textAlign = "center";
    ctx.fillText(
      reservation.certificateId,
      qrX + qrSize / 2,
      qrY + qrSize + 16
    );

    // küçük verification label
    ctx.fillStyle = "#374151";
    ctx.font = "18px Arial";
    ctx.fillText(
      "Certificate Verification",
      qrX + qrSize / 2,
      qrY - 28
    );

    const outputDir = path.join(process.cwd(), "public", "cards");

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const fileName = `${reservation.certificateId}-back.png`;
    const filePath = path.join(outputDir, fileName);

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(filePath, buffer);

    const cardBackUrl = `/cards/${fileName}`;

    await prisma.reservation.update({
      where: { id: reservation.id },
      data: { cardBackUrl },
    });

    return NextResponse.json({
      success: true,
      cardBackUrl,
      verifyUrl,
      certificateId: reservation.certificateId,
    });
  } catch (error) {
    console.error("generate-card-back error:", error);

    return NextResponse.json(
      { error: "Arka yüz üretilemedi" },
      { status: 500 }
    );
  }
}