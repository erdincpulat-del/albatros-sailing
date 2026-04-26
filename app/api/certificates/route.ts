import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import crypto from "crypto";

// ✅ 1. GET (zaten var)
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
      photoUrl,
    } = body;

    if (!fullName || !program || !qualificationLevel || !instructorId) {
      return NextResponse.json(
        { success: false, error: "Eksik alan var" },
        { status: 400 }
      );
    }

    const count = await prisma.certificate.count();

    const certificateId = `AS-OFF-2026-${String(count + 1).padStart(4, "0")}`;

    const verificationHash = crypto
      .createHash("sha256")
      .update(`${certificateId}-${Date.now()}`)
      .digest("hex");

    const certificate = await prisma.certificate.create({
  data: {
    certificateId,
    fullName,
    program,
    qualificationLevel,
    issueDate: issueDate ? new Date(issueDate.split(".").reverse().join("-")): null,
    seaMiles: seaMiles ? Number(seaMiles) : null,
    photoUrl: photoUrl || null,
    status: "ACTIVE",
    verificationHash,

    instructorId: instructorId || "erdinc-pulat",
  },
});

    return NextResponse.json({
      success: true,
      certificate,
    });
  } catch (error) {
    console.error("CERTIFICATE_CREATE_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Sertifika oluşturulamadı",
      },
      { status: 500 }
    );
  }
}