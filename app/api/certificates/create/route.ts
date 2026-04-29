import crypto from "crypto";
import QRCode from "qrcode";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullName = body.fullName?.trim();
    const program = body.program || "Offshore Yacht Course";
    const qualificationLevel = body.qualificationLevel;
    const issueDate = body.issueDate ? new Date(body.issueDate) : null;
    const seaMiles = body.seaMiles ? Number(body.seaMiles) : null;
    const instructorId = body.instructorId;
    const photoUrl = body.photoUrl || null;

    if (!fullName) {
      return NextResponse.json(
        { success: false, error: "Full name gerekli" },
        { status: 400 }
      );
    }

    if (!qualificationLevel) {
      return NextResponse.json(
        { success: false, error: "Qualification gerekli" },
        { status: 400 }
      );
    }

    // 🔹 CERTIFICATE ID
    const year = new Date().getFullYear();
    const generatedId = `AS-OFF-${year}-${Date.now().toString().slice(-4)}`;

    // 🔹 HASH
    const verificationHash = crypto
      .createHash("sha256")
      .update(`${generatedId}:${fullName}:${Date.now()}`)
      .digest("hex")
      .slice(0, 12)
      .toUpperCase();

    // 🔹 VERIFY URL
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ||
      "https://albatros-sailing.vercel.app";

    const verifyUrl = `${baseUrl}/verify?certificateId=${generatedId}`;

    // 🔹 QR
    const qrCodeDataUrl = await QRCode.toDataURL(verifyUrl);

    // 🔹 DB CREATE
    const certificate = await prisma.certificate.create({
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
        status: "PENDING", // 🔥 önemli
      },
    });

    return NextResponse.json({
      success: true,
      certificateId: certificate.certificateId,
      verifyUrl,
      qrCodeDataUrl,
      item: certificate,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Certificate oluşturulamadı" },
      { status: 500 }
    );
  }
}