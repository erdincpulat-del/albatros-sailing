import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_STATUSES = ["ACTIVE", "REVOKED", "EXPIRED"] as const;
type CertificateStatus = (typeof ALLOWED_STATUSES)[number];

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();

    const certificateId =
      typeof body.certificateId === "string" ? body.certificateId.trim() : "";
    const status =
      typeof body.status === "string" ? body.status.trim().toUpperCase() : "";

    if (!certificateId) {
      return NextResponse.json(
        {
          success: false,
          error: "certificateId is required.",
        },
        { status: 400 }
      );
    }

    if (!ALLOWED_STATUSES.includes(status as CertificateStatus)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid status. Allowed: ACTIVE, REVOKED, EXPIRED.",
        },
        { status: 400 }
      );
    }

    const existing = await prisma.reservation.findFirst({
      where: { certificateId },
      select: { id: true, certificateId: true },
    });

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          error: "Certificate not found.",
        },
        { status: 404 }
      );
    }

    const updated = await prisma.reservation.update({
      where: { id: existing.id },
      data: {
        status,
      },
      select: {
        id: true,
        fullName: true,
        certificateId: true,
        certificateLevel: true,
        program: true,
        status: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({
      success: true,
      certificate: updated,
    });
  } catch (error) {
    console.error("UPDATE_CERTIFICATE_STATUS_ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificate status update failed.",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}