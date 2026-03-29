import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

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

    // 1. Certificate ID üret
    const count = await prisma.certificate.count();
    const certificateId = `AS-OFF-2026-${String(count + 1).padStart(4, "0")}`;

    // 2. Verification hash üret
    const verificationHash = crypto
      .createHash("sha256")
      .update(certificateId + Date.now())
      .digest("hex");

    // 3. DB kayıt
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

    // ✅ KRİTİK: ID GERİ DÖNÜYORUZ
    return NextResponse.json({
      success: true,
      certificateId: certificate.certificateId,
      id: certificate.id,
    });
  } catch (error) {
    console.error("CREATE CERTIFICATE ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Certificate creation failed" },
      { status: 500 }
    );
  }
}