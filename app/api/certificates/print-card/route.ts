import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import prisma from "@/lib/prisma";

export const runtime = "nodejs";

const MM_TO_PT = 2.8346456693;

const CARD_WIDTH = 85.6 * MM_TO_PT;
const CARD_HEIGHT = 54 * MM_TO_PT;

async function fetchImage(url: string) {
  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

async function embedImage(pdfDoc: PDFDocument, url: string) {
  const bytes = await fetchImage(url);
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

export async function POST(req: NextRequest) {
  try {
    const { certificateId } = await req.json();

    if (!certificateId) {
      return NextResponse.json(
        { success: false, error: "certificateId gerekli" },
        { status: 400 }
      );
    }

    const cert = await prisma.certificate.findUnique({
      where: { certificateId },
    });

    if (!cert) {
      return NextResponse.json(
        { success: false, error: "Certificate bulunamadı" },
        { status: 404 }
      );
    }

    const pdfDoc = await PDFDocument.create();

    const frontPage = pdfDoc.addPage([CARD_WIDTH, CARD_HEIGHT]);
    const backPage = pdfDoc.addPage([CARD_WIDTH, CARD_HEIGHT]);

    if (cert.cardFrontUrl) {
      const img = await embedImage(pdfDoc, cert.cardFrontUrl);
      if (img) {
        frontPage.drawImage(img, {
          x: 0,
          y: 0,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        });
      }
    }

    if (cert.cardBackUrl) {
      const img = await embedImage(pdfDoc, cert.cardBackUrl);
      if (img) {
        backPage.drawImage(img, {
          x: 0,
          y: 0,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
        });
      }
    }

    const pdfBytes = await pdfDoc.save();

    return new Response(new Uint8Array(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { success: false, error: "Print failed" },
      { status: 500 }
    );
  }
}