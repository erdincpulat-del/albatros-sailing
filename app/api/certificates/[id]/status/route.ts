// app/api/certificates/[id]/status/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

function normalizeStatus(value?: string | null) {
  const normalized = (value || "").trim().toUpperCase();

  if (normalized === "VERIFIED") return "ACTIVE";
  if (normalized === "CANCELLED") return "REVOKED";

  if (normalized === "ACTIVE") return "ACTIVE";
  if (normalized === "PENDING") return "PENDING";
  if (normalized === "REVOKED") return "REVOKED";

  return null;
}

export async function PATCH(req: Request, context: RouteContext) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const status = normalizeStatus(body?.status);
    const reason =
      typeof body?.reason === "string" ? body.reason.trim() : "";

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Certificate id gerekli" },
        { status: 400 }
      );
    }

    if (!status) {
      return NextResponse.json(
        { success: false, error: "Geçersiz status" },
        { status: 400 }
      );
    }

    if (status === "REVOKED" && !reason) {
      return NextResponse.json(
        { success: false, error: "Revoke nedeni gerekli" },
        { status: 400 }
      );
    }

    const existingCertificate = await prisma.certificate.findUnique({
      where: { id },
      select: {
        id: true,
        certificateId: true,
        fullName: true,
        status: true,
      },
    });

    if (!existingCertificate) {
      return NextResponse.json(
        { success: false, error: "Certificate bulunamadı" },
        { status: 404 }
      );
    }

    const updatedCertificate = await prisma.certificate.update({
      where: { id },
      data: {
        status,
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

    await prisma.adminLog.create({
      data: {
        action:
          status === "REVOKED"
            ? "CERTIFICATE_REVOKED"
            : status === "ACTIVE"
            ? "CERTIFICATE_ACTIVATED"
            : "CERTIFICATE_STATUS_UPDATED",
        targetType: "CERTIFICATE",
        targetId: existingCertificate.id,
        details: JSON.stringify({
          certificateId: existingCertificate.certificateId,
          fullName: existingCertificate.fullName,
          previousStatus: existingCertificate.status || null,
          newStatus: status,
          revokeReason: status === "REVOKED" ? reason : null,
        }),
      },
    });

    return NextResponse.json({
      success: true,
      item: updatedCertificate,
    });
  } catch (error) {
    console.error("PATCH /api/certificates/[id]/status error:", error);

    return NextResponse.json(
      { success: false, error: "Certificate status güncellenemedi" },
      { status: 500 }
    );
  }
}