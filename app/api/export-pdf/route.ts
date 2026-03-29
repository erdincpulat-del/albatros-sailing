import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import { PDFDocument, rgb, degrees } from "pdf-lib";
import fontkit from "@pdf-lib/fontkit";
import { prisma } from "@/lib/prisma";
import { generateVerificationHash } from "@/lib/generate-verification-hash";

function cleanPublicPath(url?: string | null) {
  if (!url) return null;
  return url.startsWith("/") ? url.slice(1) : url;
}

async function loadFileBytes(filePath: string) {
  return fs.promises.readFile(filePath);
}

function safeText(value: unknown) {
  if (value === null || value === undefined) return "-";
  const text = String(value).trim();
  return text.length > 0 ? text : "-";
}

function getCertificateMeta(program?: string | null) {
  const normalized = (program || "").trim();

  if (normalized === "YELKENLI YAT EGITIMI (YES)") {
    return {
      title: "ALBATROS SAILING",
      subtitle: "Yelkenli Yat Eğitimi Certificate",
      description:
        "This document certifies completion of the Albatros Sailing Yelkenli Yat Eğitimi program and is intended for training record and verification support.",
      header: rgb(0.05, 0.2, 0.17),
      accent: rgb(0.08, 0.45, 0.34),
      light: rgb(0.9, 0.96, 0.94),
      watermark: "YES",
    };
  }

  if (normalized === "Offshore Yacht Course") {
    return {
      title: "ALBATROS SAILING",
      subtitle: "Offshore Yacht Course Certificate",
      description:
        "This document certifies completion of the Albatros Sailing Offshore Yacht Course program and is intended for training record and verification support.",
      header: rgb(0.06, 0.15, 0.25),
      accent: rgb(0.16, 0.32, 0.54),
      light: rgb(0.93, 0.96, 0.99),
      watermark: "OFFSHORE",
    };
  }

  return {
    title: "ALBATROS SAILING",
    subtitle: "Certificate Document",
    description:
      "This document is generated from the Albatros Sailing certificate system and is intended for training record and verification support.",
    header: rgb(0.08, 0.12, 0.2),
    accent: rgb(0.25, 0.34, 0.48),
    light: rgb(0.95, 0.97, 0.99),
    watermark: "ALBATROS",
  };
}

function drawBox(
  page: any,
  labelFont: any,
  valueFont: any,
  x: number,
  y: number,
  w: number,
  h: number,
  label: string,
  value: string
) {
  page.drawRectangle({
    x,
    y,
    width: w,
    height: h,
    borderWidth: 1,
    borderColor: rgb(0.86, 0.89, 0.93),
    color: rgb(0.97, 0.98, 0.99),
  });

  page.drawText(label.toUpperCase(), {
    x: x + 10,
    y: y + h - 16,
    size: 8,
    font: labelFont,
    color: rgb(0.39, 0.45, 0.54),
  });

  page.drawText(value || "-", {
    x: x + 10,
    y: y + 14,
    size: 11,
    font: valueFont,
    color: rgb(0.06, 0.09, 0.16),
    maxWidth: w - 20,
  });
}

function drawCompassWatermark(
  page: any,
  centerX: number,
  centerY: number,
  color = rgb(0.88, 0.92, 0.96)
) {
  page.drawCircle({
    x: centerX,
    y: centerY,
    size: 95,
    borderWidth: 1,
    borderColor: color,
    opacity: 0.22,
  });

  page.drawCircle({
    x: centerX,
    y: centerY,
    size: 70,
    borderWidth: 1,
    borderColor: color,
    opacity: 0.18,
  });

  page.drawLine({
    start: { x: centerX, y: centerY - 95 },
    end: { x: centerX, y: centerY + 95 },
    thickness: 1,
    color,
    opacity: 0.18,
  });

  page.drawLine({
    start: { x: centerX - 95, y: centerY },
    end: { x: centerX + 95, y: centerY },
    thickness: 1,
    color,
    opacity: 0.18,
  });

  page.drawLine({
    start: { x: centerX - 67, y: centerY - 67 },
    end: { x: centerX + 67, y: centerY + 67 },
    thickness: 1,
    color,
    opacity: 0.14,
  });

  page.drawLine({
    start: { x: centerX - 67, y: centerY + 67 },
    end: { x: centerX + 67, y: centerY - 67 },
    thickness: 1,
    color,
    opacity: 0.14,
  });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId");

    if (!certificateId) {
      return new Response("certificateId gerekli", { status: 400 });
    }

    const certificate = await prisma.reservation.findFirst({
      where: { certificateId },
    });

    if (!certificate) {
      return new Response("Sertifika bulunamadı", { status: 404 });
    }

    const regeneratedHash = generateVerificationHash(
      certificate.certificateId,
      certificate.fullName,
      certificate.issueDate
    );

    const isAuthentic =
      !!certificate.verificationHash &&
      regeneratedHash === certificate.verificationHash;

    const normalizedStatus = (certificate.status || "").toUpperCase();
    const isRevoked =
      normalizedStatus === "REVOKED" || normalizedStatus === "CANCELLED";

    if (!isAuthentic) {
      return new Response("Bu sertifika kaydı doğrulama kontrolünü geçemedi.", {
        status: 403,
      });
    }

    if (isRevoked) {
      return new Response("Bu sertifika iptal edildiği için PDF üretilemez.", {
        status: 403,
      });
    }

    const meta = getCertificateMeta(certificate.program);

    const fontPath = path.join(
      process.cwd(),
      "public",
      "fonts",
      "Roboto-Regular.ttf"
    );

    if (!fs.existsSync(fontPath)) {
      return new Response("PDF font bulunamadı", { status: 500 });
    }

    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    const fontBytes = await loadFileBytes(fontPath);
    const regularFont = await pdfDoc.embedFont(fontBytes);
    const boldFont = regularFont;

    const page = pdfDoc.addPage([595.28, 841.89]);
    const { width, height } = page.getSize();

    page.drawRectangle({
      x: 0,
      y: height - 120,
      width,
      height: 120,
      color: meta.header,
    });

    const logoPath = path.join(
      process.cwd(),
      "public",
      "logo",
      "albatros-logo.png"
    );

    if (fs.existsSync(logoPath)) {
      const logoBytes = await loadFileBytes(logoPath);
      const logoImage = await pdfDoc.embedPng(logoBytes);

      page.drawImage(logoImage, {
        x: 40,
        y: height - 95,
        width: 70,
        height: 70,
      });
    }

    const sealPath = path.join(
      process.cwd(),
      "public",
      "certificate-assets",
      "seal.png"
    );

    if (fs.existsSync(sealPath)) {
      const sealBytes = await loadFileBytes(sealPath);
      const sealImage = sealPath.toLowerCase().endsWith(".png")
        ? await pdfDoc.embedPng(sealBytes)
        : await pdfDoc.embedJpg(sealBytes);

      page.drawImage(sealImage, {
        x: width - 112,
        y: height - 102,
        width: 72,
        height: 72,
      });
    }

    page.drawText(meta.title, {
      x: 160,
      y: height - 58,
      size: 24,
      font: boldFont,
      color: rgb(1, 1, 1),
    });

    page.drawText(meta.subtitle, {
      x: 170,
      y: height - 84,
      size: 12,
      font: regularFont,
      color: rgb(0.82, 0.85, 0.9),
    });

    drawCompassWatermark(page, 420, 525, meta.light);

    page.drawText(meta.watermark, {
      x: 120,
      y: 410,
      size: 78,
      font: boldFont,
      color: meta.light,
      opacity: 0.15,
      rotate: degrees(-20),
    });

    drawBox(
      page,
      boldFont,
      regularFont,
      40,
      height - 220,
      160,
      54,
      "Full Name",
      safeText(certificate.fullName)
    );

    drawBox(
      page,
      boldFont,
      regularFont,
      212,
      height - 220,
      160,
      54,
      "Certificate ID",
      safeText(certificate.certificateId)
    );

    drawBox(
      page,
      boldFont,
      regularFont,
      384,
      height - 220,
      170,
      54,
      "Program",
      safeText(certificate.program)
    );

    drawBox(
      page,
      boldFont,
      regularFont,
      40,
      height - 286,
      250,
      54,
      "Qualification",
      safeText(certificate.qualificationLevel)
    );

    drawBox(
      page,
      boldFont,
      regularFont,
      302,
      height - 286,
      120,
      54,
      "Issue Date",
      safeText(certificate.issueDate)
    );

    drawBox(
      page,
      boldFont,
      regularFont,
      434,
      height - 286,
      120,
      54,
      "Sea Miles",
      typeof certificate.seaMiles === "number"
        ? `${certificate.seaMiles} NM`
        : "-"
    );

    page.drawText(meta.description, {
      x: 40,
      y: height - 325,
      size: 10,
      font: regularFont,
      color: rgb(0.2, 0.27, 0.34),
      maxWidth: width - 80,
      lineHeight: 13,
    });

    page.drawRectangle({
      x: 40,
      y: 120,
      width: width - 80,
      height: 360,
      borderWidth: 1,
      borderColor: rgb(0.86, 0.89, 0.93),
      color: rgb(1, 1, 1),
    });

    page.drawText("CERTIFICATE CARD PREVIEW", {
      x: 56,
      y: 456,
      size: 9,
      font: boldFont,
      color: rgb(0.39, 0.45, 0.54),
    });

    page.drawText("Front Side", {
      x: 56,
      y: 430,
      size: 11,
      font: boldFont,
      color: rgb(0.06, 0.09, 0.16),
    });

    page.drawText("Back Side", {
      x: 320,
      y: 430,
      size: 11,
      font: boldFont,
      color: rgb(0.06, 0.09, 0.16),
    });

    const frontUrl = cleanPublicPath(certificate.cardFrontUrl);
    const backUrl = cleanPublicPath(certificate.cardBackUrl);

    const frontPath = frontUrl
      ? path.join(process.cwd(), "public", frontUrl)
      : null;
    const backPath = backUrl
      ? path.join(process.cwd(), "public", backUrl)
      : null;

    page.drawRectangle({
      x: 56,
      y: 250,
      width: 240,
      height: 151,
      borderWidth: 1,
      borderColor: rgb(0.86, 0.89, 0.93),
    });

    page.drawRectangle({
      x: 320,
      y: 250,
      width: 240,
      height: 151,
      borderWidth: 1,
      borderColor: rgb(0.86, 0.89, 0.93),
    });

    if (frontPath && fs.existsSync(frontPath)) {
      const bytes = await loadFileBytes(frontPath);
      const image = frontPath.toLowerCase().endsWith(".png")
        ? await pdfDoc.embedPng(bytes)
        : await pdfDoc.embedJpg(bytes);

      page.drawImage(image, {
        x: 56,
        y: 250,
        width: 240,
        height: 151,
      });
    } else {
      page.drawText("Front card görseli bulunamadı.", {
        x: 88,
        y: 320,
        size: 10,
        font: regularFont,
        color: rgb(0.58, 0.64, 0.72),
      });
    }

    if (backPath && fs.existsSync(backPath)) {
      const bytes = await loadFileBytes(backPath);
      const image = backPath.toLowerCase().endsWith(".png")
        ? await pdfDoc.embedPng(bytes)
        : await pdfDoc.embedJpg(bytes);

      page.drawImage(image, {
        x: 320,
        y: 250,
        width: 240,
        height: 151,
      });
    } else {
      page.drawText("Back card görseli bulunamadı.", {
        x: 350,
        y: 320,
        size: 10,
        font: regularFont,
        color: rgb(0.58, 0.64, 0.72),
      });
    }

    page.drawText("Verification", {
      x: 56,
      y: 210,
      size: 9,
      font: boldFont,
      color: rgb(0.39, 0.45, 0.54),
    });

    page.drawText(safeText(certificate.certificateId), {
      x: 56,
      y: 192,
      size: 10,
      font: regularFont,
      color: rgb(0.06, 0.09, 0.16),
    });

    page.drawText("Status", {
      x: 320,
      y: 210,
      size: 9,
      font: boldFont,
      color: rgb(0.39, 0.45, 0.54),
    });

    page.drawText("ACTIVE", {
      x: 320,
      y: 192,
      size: 10,
      font: boldFont,
      color: rgb(0.08, 0.5, 0.24),
    });

    page.drawText("Security", {
      x: 420,
      y: 210,
      size: 9,
      font: boldFont,
      color: rgb(0.39, 0.45, 0.54),
    });

    page.drawText("AUTHENTIC", {
      x: 420,
      y: 192,
      size: 10,
      font: boldFont,
      color: rgb(0.08, 0.5, 0.24),
    });

    page.drawLine({
      start: { x: 56, y: 92 },
      end: { x: 250, y: 92 },
      thickness: 1,
      color: rgb(0.8, 0.84, 0.89),
    });

    const signaturePath = path.join(
      process.cwd(),
      "public",
      "certificate-assets",
      "signature.png"
    );

    if (fs.existsSync(signaturePath)) {
      const signatureBytes = await loadFileBytes(signaturePath);
      const signatureImage = signaturePath.toLowerCase().endsWith(".png")
        ? await pdfDoc.embedPng(signatureBytes)
        : await pdfDoc.embedJpg(signatureBytes);

      page.drawImage(signatureImage, {
        x: 68,
        y: 98,
        width: 155,
        height: 48,
      });
    }

    page.drawText("Instructor Signature", {
      x: 56,
      y: 76,
      size: 9,
      font: regularFont,
      color: rgb(0.29, 0.34, 0.41),
    });

    page.drawText("Authorized by Albatros Sailing", {
      x: 56,
      y: 62,
      size: 8,
      font: regularFont,
      color: rgb(0.39, 0.45, 0.54),
    });

    page.drawText("OFFICIAL SEAL", {
      x: 400,
      y: 112,
      size: 8,
      font: boldFont,
      color: rgb(0.29, 0.34, 0.41),
    });

    page.drawText("Albatros Sailing Approval", {
      x: 370,
      y: 99,
      size: 8,
      font: regularFont,
      color: rgb(0.39, 0.45, 0.54),
    });

    const qrValue = certificate.qrCodeUrl || "";
    if (typeof qrValue === "string" && qrValue.startsWith("data:image")) {
      try {
        const base64 = qrValue.split(",")[1];
        if (base64) {
          const qrBytes = Buffer.from(base64, "base64");
          const qrImage = await pdfDoc.embedPng(qrBytes);

          page.drawImage(qrImage, {
            x: width - 92,
            y: 34,
            width: 58,
            height: 58,
          });

          page.drawText("SCAN TO VERIFY", {
            x: width - 118,
            y: 20,
            size: 6,
            font: boldFont,
            color: rgb(0.39, 0.45, 0.54),
          });

          page.drawText(safeText(certificate.certificateId), {
            x: width - 130,
            y: 10,
            size: 6,
            font: regularFont,
            color: rgb(0.45, 0.5, 0.58),
          });
        }
      } catch (error) {
        console.error("qr embed error:", error);
      }
    }

    const pdfBytes = await pdfDoc.save();

    return new Response(new Uint8Array(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${certificate.certificateId}.pdf"`,
      },
    });
  } catch (error) {
    console.error("export-pdf error:", error);
    return new Response("PDF oluşturulamadı", { status: 500 });
  }
}