import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts, rgb, degrees } from "pdf-lib";
import QRCode from "qrcode";
import prisma from "@/lib/prisma";
import { generateVerificationHash } from "@/lib/generate-verification-hash";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;

function formatDate(dateValue?: Date | string | null) {
  if (!dateValue) return "—";

  const date = new Date(dateValue);
  if (Number.isNaN(date.getTime())) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

function buildBaseUrl(req: NextRequest) {
  const envUrl =
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_APP_URL;

  if (envUrl) return envUrl.replace(/\/$/, "");

  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || "http";

  return `${proto}://${host}`;
}

function centerX(text: string, font: any, size: number) {
  const textWidth = font.widthOfTextAtSize(text, size);
  return (PAGE_WIDTH - textWidth) / 2;
}

function drawCenteredText(
  page: any,
  text: string,
  font: any,
  size: number,
  y: number,
  color: ReturnType<typeof rgb>,
  opacity = 1,
) {
  page.drawText(text, {
    x: centerX(text, font, size),
    y,
    size,
    font,
    color,
    opacity,
  });
}

function fitSingleLine(
  text: string,
  font: any,
  maxWidth: number,
  startSize: number,
  minSize = 12,
) {
  let size = startSize;
  while (size > minSize && font.widthOfTextAtSize(text, size) > maxWidth) {
    size -= 1;
  }
  return size;
}

async function fetchAssetBytes(url: string) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) return null;
    return await response.arrayBuffer();
  } catch {
    return null;
  }
}

async function tryEmbedPngOrJpg(pdfDoc: PDFDocument, url: string) {
  const bytes = await fetchAssetBytes(url);
  if (!bytes) return null;

  try {
    return await pdfDoc.embedPng(bytes);
  } catch {
    try {
      return await pdfDoc.embedJpg(bytes);
    } catch {
      return null;
    }
  }
}

function drawFoilLine(
  page: any,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  gold: ReturnType<typeof rgb>,
  goldSoft: ReturnType<typeof rgb>,
) {
  page.drawLine({
    start: { x: x1, y: y1 },
    end: { x: x2, y: y2 },
    color: goldSoft,
    thickness: 3.0,
    opacity: 0.75,
  });

  page.drawLine({
    start: { x: x1, y: y1 + 0.6 },
    end: { x: x2, y: y2 + 0.6 },
    color: gold,
    thickness: 0.9,
    opacity: 0.95,
  });

  page.drawLine({
    start: { x: x1, y: y1 + 1 },
    end: { x: x2, y: y2 + 1 },
    color: rgb(1, 1, 1),
    thickness: 0.3,
    opacity: 0.4,
  });
}

function drawFoilFrame(page: any, x: number, y: number, w: number, h: number) {
  const gold = rgb(0.78, 0.67, 0.36);
  const goldSoft = rgb(0.95, 0.90, 0.76);

  drawFoilLine(page, x, y + h, x + w, y + h, gold, goldSoft);
  drawFoilLine(page, x, y, x + w, y, gold, goldSoft);
  drawFoilLine(page, x, y, x, y + h, gold, goldSoft);
  drawFoilLine(page, x + w, y, x + w, y + h, gold, goldSoft);
}

function drawHologramBand(page: any, x: number, y: number, w: number, h: number) {
  page.drawRectangle({
    x,
    y,
    width: w,
    height: h,
    color: rgb(0.93, 0.95, 0.98),
    opacity: 0.16,
  });

  page.drawRectangle({
    x: x + 3,
    y: y + 3,
    width: w - 6,
    height: h - 6,
    color: rgb(0.85, 0.92, 0.98),
    opacity: 0.10,
  });

  page.drawLine({
    start: { x: x + 8, y: y + h - 10 },
    end: { x: x + w - 8, y: y + 10 },
    color: rgb(0.78, 0.87, 0.96),
    thickness: 12,
    opacity: 0.10,
  });

  page.drawLine({
    start: { x: x + 16, y: y + h - 6 },
    end: { x: x + w - 2, y: y + 22 },
    color: rgb(0.96, 0.90, 0.78),
    thickness: 8,
    opacity: 0.09,
  });

  page.drawLine({
    start: { x: x + 6, y: y + 14 },
    end: { x: x + w - 6, y: y + 14 },
    color: rgb(1, 1, 1),
    thickness: 1,
    opacity: 0.24,
  });
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const certificateId = searchParams.get("certificateId")?.trim();

    if (!certificateId) {
      return NextResponse.json(
        { success: false, error: "certificateId is required." },
        { status: 400 },
      );
    }

    const certificate = await prisma.certificate.findUnique({
      where: { certificateId },
      include: {
        instructor: {
          select: {
            fullName: true,
            title: true,
          },
        },
      },
    });

    if (!certificate) {
      return NextResponse.json(
        { success: false, error: "Certificate record not found." },
        { status: 404 },
      );
    }

    const baseUrl = buildBaseUrl(req);
    const verifyUrl = `${baseUrl}/verify/${certificate.certificateId}`;
    const verifyDisplayUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/^https?:\/\//, "") ||
      process.env.SITE_URL?.replace(/^https?:\/\//, "") ||
      "www.albatros-sailing.com";

    const fullName = certificate.fullName || "—";
    const program = certificate.program || "Open Sea Sailing Training Program";
    const qualification = certificate.qualificationLevel || "—";
    const issueDate = formatDate(certificate.issueDate || certificate.createdAt);
    const instructorName = certificate.instructor?.fullName || "Erdinç Pulat";
    const instructorTitle =
      certificate.instructor?.title || "Official Sailing Instructor";
    const seaMiles =
      typeof certificate.seaMiles === "number" ? `${certificate.seaMiles} NM` : "—";

    const verificationHash =
      certificate.verificationHash ||
      generateVerificationHash(certificate.certificateId);

    const securityCode = String(verificationHash).slice(0, 10).toUpperCase();

    const qrPayload = JSON.stringify({
      id: certificate.certificateId,
      hash: verificationHash,
      status: certificate.status || "ACTIVE",
    });

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([PAGE_WIDTH, PAGE_HEIGHT]);

    const fontSans = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSansBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    const fontSerif = await pdfDoc.embedFont(StandardFonts.TimesRoman);
    const fontSerifBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);

    const navy = rgb(0.10, 0.15, 0.26);
    const navySoft = rgb(0.21, 0.26, 0.37);
    const gold = rgb(0.78, 0.67, 0.36);
    const goldSoft = rgb(0.95, 0.90, 0.76);
    const paper = rgb(0.975, 0.968, 0.948);
    const grey = rgb(0.45, 0.47, 0.52);
    const lightGrey = rgb(0.82, 0.82, 0.82);
    const charcoal = rgb(0.17, 0.19, 0.24);

    // Background
    page.drawRectangle({
      x: 0,
      y: 0,
      width: PAGE_WIDTH,
      height: PAGE_HEIGHT,
      color: paper,
    });

    const textureImage = await tryEmbedPngOrJpg(pdfDoc, `${baseUrl}/paper-texture.png`);
    if (textureImage) {
      page.drawImage(textureImage, {
        x: 0,
        y: 0,
        width: PAGE_WIDTH,
        height: PAGE_HEIGHT,
        opacity: 0.18,
      });
    }

    // Outer premium frame
    page.drawRectangle({
      x: 14,
      y: 14,
      width: PAGE_WIDTH - 28,
      height: PAGE_HEIGHT - 28,
      borderColor: navy,
      borderWidth: 1.6,
    });

    page.drawRectangle({
      x: 22,
      y: 22,
      width: PAGE_WIDTH - 44,
      height: PAGE_HEIGHT - 44,
      borderColor: rgb(0.35, 0.39, 0.49),
      borderWidth: 0.5,
      opacity: 0.45,
    });

    drawFoilFrame(page, 29, 29, PAGE_WIDTH - 58, PAGE_HEIGHT - 58);

    page.drawRectangle({
      x: 38,
      y: 38,
      width: PAGE_WIDTH - 76,
      height: PAGE_HEIGHT - 76,
      borderColor: lightGrey,
      borderWidth: 0.45,
      opacity: 0.9,
    });

    // Watermark
    page.drawText("ALBATROS SAILING", {
      x: 68,
      y: 430,
      size: 84,
      font: fontSerifBold,
      color: rgb(0.22, 0.24, 0.30),
      rotate: degrees(45),
      opacity: 0.16,
    });

    page.drawText("OPEN SEA SAILING", {
      x: 150,
      y: 332,
      size: 36,
      font: fontSansBold,
      color: rgb(0.22, 0.24, 0.30),
      rotate: degrees(45),
      opacity: 0.07,
    });

    page.drawText("CERTIFICATE", {
      x: 206,
      y: 286,
      size: 34,
      font: fontSansBold,
      color: rgb(0.22, 0.24, 0.30),
      rotate: degrees(45),
      opacity: 0.06,
    });

    // Crest / logo
    page.drawCircle({
      x: PAGE_WIDTH / 2,
      y: 766,
      size: 35,
      borderColor: gold,
      borderWidth: 1.2,
      color: rgb(0.97, 0.95, 0.86),
    });

    const logoImage = await tryEmbedPngOrJpg(pdfDoc, `${baseUrl}/logo.png`);
    if (logoImage) {
      page.drawImage(logoImage, {
        x: PAGE_WIDTH / 2 - 60,
        y: 710,
        width: 120,
        height: 120,
      });
    } else {
      page.drawText("AS", {
        x: PAGE_WIDTH / 2 - 13,
        y: 754,
        size: 18,
        font: fontSansBold,
        color: navy,
      });
    }

    drawCenteredText(page, "ALBATROS SAILING", fontSansBold, 24, 704, navy);
    drawCenteredText(
      page,
      "OFFICIAL SAILING TRAINING PLATFORM",
      fontSans,
      10,
      689,
      grey,
    );

    drawFoilLine(page, 74, 642, 220, 642, gold, goldSoft);
    drawFoilLine(page, 375, 642, 521, 642, gold, goldSoft);

    drawCenteredText(page, "OPEN SEA SAILING", fontSerifBold, 29, 652, navySoft);
    drawCenteredText(page, "CERTIFICATE", fontSerifBold, 33, 614, navySoft);

    // subtle gold foil overlay
    page.drawText("OPEN SEA SAILING", {
      x: centerX("OPEN SEA SAILING", fontSerifBold, 29),
      y: 652.6,
      size: 29,
      font: fontSerifBold,
      color: gold,
      opacity: 0.09,
    });

    page.drawText("CERTIFICATE", {
      x: centerX("CERTIFICATE", fontSerifBold, 33),
      y: 614.6,
      size: 33,
      font: fontSerifBold,
      color: gold,
      opacity: 0.09,
    });

    // QR block
    page.drawRectangle({
      x: 456,
      y: 648,
      width: 86,
      height: 108,
      borderColor: rgb(0.83, 0.83, 0.83),
      borderWidth: 0.9,
      color: rgb(1, 1, 1),
    });

    drawHologramBand(page, 456, 648, 86, 108);

    const qrDataUrl = await QRCode.toDataURL(qrPayload, {
      margin: 0,
      width: 220,
      color: {
        dark: "#1E293B",
        light: "#FFFFFF",
      },
    });

    const qrImage = await pdfDoc.embedPng(qrDataUrl);
    page.drawImage(qrImage, {
      x: 465,
      y: 680,
      width: 70,
      height: 70,
    });

    page.drawText("Scan to verify", {
      x: 474,
      y: 661,
      size: 8,
      font: fontSans,
      color: grey,
    });

    const qrIdSize = fitSingleLine(certificate.certificateId, fontSansBold, 76, 9, 7.2);
    const qrIdWidth = fontSansBold.widthOfTextAtSize(certificate.certificateId, qrIdSize);
    page.drawText(certificate.certificateId, {
      x: 499 - qrIdWidth / 2,
      y: 642,
      size: qrIdSize,
      font: fontSansBold,
      color: navy,
    });

    // Main body
    drawCenteredText(page, "This certifies that", fontSans, 15, 568, grey);

    const nameSize = fitSingleLine(fullName.toUpperCase(), fontSansBold, 420, 32, 22);
    drawCenteredText(page, fullName.toUpperCase(), fontSansBold, nameSize, 498, charcoal);

    page.drawLine({
      start: { x: 108, y: 490 },
      end: { x: 487, y: 490 },
      color: lightGrey,
      thickness: 0.9,
    });

    drawCenteredText(
      page,
      "has successfully completed the",
      fontSans,
      15,
      456,
      grey,
    );

    const programSize = fitSingleLine(program.toUpperCase(), fontSerifBold, 434, 22, 16);
    drawCenteredText(page, program.toUpperCase(), fontSerifBold, programSize, 395, navySoft);

    drawCenteredText(page, "Qualification", fontSans, 11, 362, grey);

    const qualificationSize = fitSingleLine(
      qualification.toUpperCase(),
      fontSansBold,
      446,
      19,
      13,
    );

    drawCenteredText(
      page,
      qualification.toUpperCase(),
      fontSansBold,
      qualificationSize,
      337,
      charcoal,
    );

    // Signature / date lines
    drawFoilLine(page, 82, 268, 334, 268, gold, goldSoft);
    drawFoilLine(page, 352, 268, 514, 268, gold, goldSoft);

    const signImage = await tryEmbedPngOrJpg(pdfDoc, `${baseUrl}/signature.png`);
if (signImage) {
  page.drawImage(signImage, {
    x: 120,
    y: 255,
    width: 260,
    height: 70,
    opacity: 0.85,
  });
  page.drawRectangle({
  x: 120,
  y: 255,
  width: 260,
  height: 70,
  color: rgb(0, 0, 0),
  opacity: 0.02,
});

  const microText = "ALBATROS SIGNATURE AUTHORITY";
  const textWidth = fontSans.widthOfTextAtSize(microText, 6);

  page.drawText(microText, {
    x: 120 + (260 - textWidth) / 2,
    y: 238,
    size: 6,
    font: fontSans,
    color: navySoft,
    opacity: 0.18,
  });
}

    page.drawText("Instructor", {
      x: 150,
      y: 235,
      size: 10,
      font: fontSans,
      color: grey,
    });

    const instructorNameWidth = fontSerif.widthOfTextAtSize(instructorName, 16);
    page.drawText(instructorName, {
      x: 208 - instructorNameWidth / 2,
      y: 226,
      size: 16,
      font: fontSerif,
      color: navy,
    });

    const instructorTitleWidth = fontSans.widthOfTextAtSize(instructorTitle, 10);
    page.drawText(instructorTitle, {
      x: 208 - instructorTitleWidth / 2,
      y: 208,
      size: 10,
      font: fontSans,
      color: grey,
    });

    page.drawText("Issue Date", {
      x: 401,
      y: 248,
      size: 11,
      font: fontSans,
      color: grey,
    });

    const issueDateWidth = fontSerif.widthOfTextAtSize(issueDate, 16);
    page.drawText(issueDate, {
      x: 433 - issueDateWidth / 2,
      y: 226,
      size: 16,
      font: fontSerif,
      color: navy,
    });

    // Security box
    page.drawRectangle({
      x: 58,
      y: 115,
      width: PAGE_WIDTH - 116,
      height: 72,
      borderColor: rgb(0.84, 0.82, 0.77),
      borderWidth: 0.8,
      color: rgb(1, 1, 1),
      opacity: 0.18,
    });

    page.drawRectangle({
      x: 61,
      y: 118,
      width: PAGE_WIDTH - 122,
      height: 66,
      borderColor: rgb(0.90, 0.88, 0.83),
      borderWidth: 0.4,
      color: rgb(1, 1, 1),
      opacity: 0.18,
    });

    page.drawText(`Registry No: ${certificate.certificateId}`, {
      x: 80,
      y: 158,
      size: 10,
      font: fontSans,
      color: navySoft,
    });

    page.drawText(`Security Code: ${securityCode}`, {
      x: 80,
      y: 140,
      size: 10,
      font: fontSans,
      color: navySoft,
    });

    page.drawText(`Sea Miles: ${seaMiles}`, {
      x: 80,
      y: 122,
      size: 10,
      font: fontSans,
      color: navySoft,
    });

    // Premium seal
    page.drawCircle({
      x: 500,
      y: 150,
      size: 42,
      color: rgb(0.93, 0.90, 0.75),
      borderColor: gold,
      borderWidth: 1.8,
      opacity: 1,
    });

    page.drawCircle({
      x: 500,
      y: 150,
      size: 36,
      borderColor: rgb(0.85, 0.77, 0.46),
      borderWidth: 1,
      opacity: 0.92,
    });

    page.drawLine({
      start: { x: 478, y: 172 },
      end: { x: 522, y: 128 },
      color: rgb(1, 1, 1),
      thickness: 8,
      opacity: 0.08,
    });

    page.drawText("ALBATROS", {
      x: 472,
      y: 157,
      size: 7,
      font: fontSansBold,
      color: navy,
    });

    page.drawText("OFFICIAL SEAL", {
      x: 468,
      y: 145,
      size: 6,
      font: fontSans,
      color: navy,
    });

    // Verify link
    drawCenteredText(
      page,
      `Verify at ${verifyDisplayUrl}/verify/${certificate.certificateId}`,
      fontSans,
      11,
      79,
      navySoft,
    );

    // Anti-fake micro text
    for (let i = 0; i < 12; i++) {
      page.drawText(`ALBATROS-${certificate.certificateId}-SECURE`, {
        x: 34,
        y: 44 + i * 4,
        size: 3,
        font: fontSans,
        color: navySoft,
        opacity: 0.22,
      });
    }

    // Invisible security layer
    page.drawText(verificationHash, {
      x: 6,
      y: 6,
      size: 1,
      font: fontSans,
      color: rgb(1, 1, 1),
      opacity: 0,
    });

    const pdfBytes = await pdfDoc.save();

    return new Response(new Uint8Array(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${certificate.certificateId}-certificate.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("EXPORT_CERTIFICATE_PDF_ROUTE_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificate PDF export failed.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}