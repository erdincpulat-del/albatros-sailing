import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";
import * as archiver from "archiver";

import prisma from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 10;

function resolvePublicFile(urlOrPath?: string | null) {
  if (!urlOrPath) return null;

  let normalized = urlOrPath.trim();

  if (!normalized) return null;

  if (normalized.startsWith("http://") || normalized.startsWith("https://")) {
    return null;
  }

  if (normalized.startsWith("/")) {
    normalized = normalized.slice(1);
  }

  if (normalized.startsWith("public/")) {
    normalized = normalized.replace(/^public\//, "");
  }

  const absolutePath = path.join(process.cwd(), "public", normalized);

  if (!fs.existsSync(absolutePath)) {
    return null;
  }

  return absolutePath;
}

async function fetchFileBuffer(url: string) {
  const res = await fetch(url, {
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(
      `Failed to fetch ${url} (${res.status})${text ? ` - ${text}` : ""}`
    );
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

function createZipStream({
  certificatePdfBuffer,
  cardPdfBuffer,
  frontPath,
  backPath,
}: {
  certificatePdfBuffer: Buffer;
  cardPdfBuffer: Buffer;
  frontPath: string | null;
  backPath: string | null;
}) {
  const archive = archiver.default("zip", {
    zlib: { level: 9 },
  });

  const stream = new ReadableStream({
    start(controller) {
      archive.on("data", (chunk) => controller.enqueue(chunk));
      archive.on("end", () => controller.close());
      archive.on("error", (err) => controller.error(err));

      archive.append(certificatePdfBuffer, { name: "certificate-a4.pdf" });
      archive.append(cardPdfBuffer, { name: "card.pdf" });

      if (frontPath) {
        archive.file(frontPath, { name: "card-front.png" });
      }

      if (backPath) {
        archive.file(backPath, { name: "card-back.png" });
      }

      archive.finalize();
    },
  });

  return stream;
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams, origin } = new URL(req.url);
    const certificateId = searchParams.get("certificateId")?.trim();

    if (!certificateId) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "certificateId is required.",
        }),
        { status: 400 }
      );
    }

    const certificate = await prisma.certificate.findFirst({
  where: { certificateId },
  select: {
    id: true,
    certificateId: true,
    fullName: true,
    program: true,
    qualificationLevel: true,
    issueDate: true,
    seaMiles: true,
    cardFrontUrl: true,
    cardBackUrl: true,
  },
});

if (!certificate) {
  return new Response(
    JSON.stringify({
      success: false,
      error: "Certificate not found.",
    }),
    { status: 404 }
  );
}

const frontPath = resolvePublicFile(certificate.cardFrontUrl);
const backPath = resolvePublicFile(certificate.cardBackUrl);

if (!frontPath && !backPath) {
  return new Response(
    JSON.stringify({
      success: false,
      error: "Card images were not found for this certificate.",
    }),
    { status: 404 }
  );
}

const certificatePdfUrl =
  `${origin}/api/export-certificate-pdf?certificateId=` +
  encodeURIComponent(certificate.certificateId);

const cardPdfUrl =
  `${origin}/api/export-card-pdf?certificateId=` +
  encodeURIComponent(certificate.certificateId);
    const [certificatePdfBuffer, cardPdfBuffer] = await Promise.all([
      fetchFileBuffer(certificatePdfUrl),
      fetchFileBuffer(cardPdfUrl),
    ]);

    const zipName = `${certificate.certificateId}-package.zip`;

    const stream = createZipStream({
      certificatePdfBuffer,
      cardPdfBuffer,
      frontPath,
      backPath,
    });

    return new Response(stream as BodyInit, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${zipName}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("EXPORT_PACKAGE_ERROR:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Package export failed.",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500 }
    );
  }
}