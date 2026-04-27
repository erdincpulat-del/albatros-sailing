import crypto from "crypto";
import QRCode from "qrcode";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { generateCertificateCardFront } from "@/lib/generate-certificate-card-front";
import { generateCertificateCardBack } from "@/lib/generate-certificate-card-back";

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseIssueDate(value: unknown) {
  if (typeof value !== "string" || !value.trim()) return null;

  const raw = value.trim();

  const trMatch = raw.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  if (trMatch) {
    const [, day, month, year] = trMatch;
    const date = new Date(`${year}-${month}-${day}T00:00:00`);
    return Number.isNaN(date.getTime()) ? null : date;
  }

  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? null : date;
}

function parseSeaMiles(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return Math.max(0, Math.floor(value));
  }

  if (typeof value === "string" && value.trim()) {
    const num = Number(value.trim());
    if (Number.isFinite(num)) {
      return Math.max(0, Math.floor(num));
    }
  }

  return null;
}

function getProgramCode(program: string) {
  const normalized = program.toLowerCase();

  if (normalized.includes("offshore")) return "OFF";
  if (normalized.includes("bareboat")) return "BBS";
  if (normalized.includes("day skipper")) return "DS";
  if (normalized.includes("coastal")) return "CST";
  if (normalized.includes("yachtmaster")) return "YMT";

  return "GEN";
}

async function generateCertificateId(program: string) {
  const year = new Date().getFullYear();
  const programCode = getProgramCode(program);
  const prefix = `AS-${programCode}-${year}-`;

  const lastCertificate = await prisma.certificate.findFirst({
    where: {
      certificateId: {
        startsWith: prefix,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      certificateId: true,
    },
  });

  let nextNumber = 1;

  if (lastCertificate?.certificateId) {
    const lastPart = lastCertificate.certificateId.split("-").pop();
    const parsed = Number(lastPart);
    if (Number.isFinite(parsed)) {
      nextNumber = parsed + 1;
    }
  }

  return `${prefix}${String(nextNumber).padStart(4, "0")}`;
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = normalizeText(body.fullName);
    const program = normalizeText(body.program) || "Offshore Yacht Course";
    const qualificationLevel = normalizeText(body.qualificationLevel);
    const issueDate = parseIssueDate(body.issueDate);
    const seaMiles = parseSeaMiles(body.seaMiles);
    const instructorId = normalizeText(body.instructorId) || null;

    const photoUrl = normalizeText(body.photoUrl) || null;

    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Full name gerekli" },
        { status: 400 }
      );
    }

    if (!qualificationLevel) {
      return NextResponse.json(
        { success: false, error: "Qualification level gerekli" },
        { status: 400 }
      );
    }

    if (!instructorId) {
      return NextResponse.json(
        { success: false, error: "Instructor gerekli" },
        { status: 400 }
      );
    }

    const instructor = await prisma.instructor.findUnique({
      where: { id: instructorId },
      select: {
        id: true,
        fullName: true,
        title: true,
      },
    });

    if (!instructor) {
      return NextResponse.json(
        { success: false, error: "Instructor bulunamadı" },
        { status: 400 }
      );
    }

    const generatedId = await generateCertificateId(program);

    const verificationHash = crypto
      .createHash("sha256")
      .update(
        `${generatedId}:${fullName}:${program}:${qualificationLevel}:${Date.now()}`
      )
      .digest("hex")
      .slice(0, 12)
      .toUpperCase();

    // 1) önce certificate kaydı oluştur
    const createdCertificate = await prisma.certificate.create({
      data: {
        certificateId: generatedId,
        fullName,
        program,
        qualificationLevel,
        issueDate,
        seaMiles,
        instructorId,
        photoUrl,
        verificationHash,
        status: "PENDING",
      },
      include: {
        instructor: {
          select: {
            id: true,
            fullName: true,
            title: true,
          },
        },
      },
    });

    // 2) verify url üret
    const baseUrl =
      process.env.NEXT_PUBLIC_APP_URL ||
      process.env.APP_URL ||
      "http://localhost:3000";

    const verifyUrl = `${baseUrl}/verify/${encodeURIComponent(generatedId)}`;

    // 3) tek QR üret
    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl, {
      errorCorrectionLevel: "M",
      margin: 1,
      width: 300,
      color: {
        dark: "#111827",
        light: "#FFFFFFFF",
      },
    });

    // 4) aynı QR ile front / back üret
    const cardFrontUrl = await generateCertificateCardFront({
      certificateId: generatedId,
      fullName,
      qualification: qualificationLevel,
      issueDate,
      seaMiles,
      photoUrl,
      qrCodeDataUrl,
    });

    const cardBackUrl = await generateCertificateCardBack({
  certificateId: generatedId,
  qrCodeDataUrl,
  
});

    // 5) kaydı kart url'leri ile güncelle
    const updatedCertificate = await prisma.certificate.update({
      where: { id: createdCertificate.id },
      data: {
        cardFrontUrl,
        cardBackUrl,
      },
      include: {
        instructor: {
          select: {
            id: true,
            fullName: true,
            title: true,
          },
        },
      },
    });

    // 6) log
    await prisma.adminLog.create({
      data: {
        action: "CERTIFICATE_CREATED",
        targetType: "CERTIFICATE",
        targetId: updatedCertificate.id,
        details: JSON.stringify({
          certificateId: updatedCertificate.certificateId,
          fullName: updatedCertificate.fullName,
          program: updatedCertificate.program,
          qualificationLevel: updatedCertificate.qualificationLevel,
          instructorId: updatedCertificate.instructorId,
          verificationHash: updatedCertificate.verificationHash,
          cardFrontUrl: updatedCertificate.cardFrontUrl,
          cardBackUrl: updatedCertificate.cardBackUrl,
        }),
      },
    });

    return NextResponse.json({
      success: true,
      id: updatedCertificate.id,
      certificateId: updatedCertificate.certificateId,
      verificationHash: updatedCertificate.verificationHash,
      verifyUrl,
      qrCodeDataUrl,
      item: updatedCertificate,
    });
  } catch (error) {
    console.error("POST /api/certificates/create error:", error);

    return NextResponse.json(
      { success: false, error: "Certificate oluşturulamadı" },
      { status: 500 }
    );
  }
}