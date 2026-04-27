import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

type CreateCertificateBody = {
  fullName: string;
  program: string;
  qualificationLevel: string;
  issueDate?: string | null;
  seaMiles?: number | string | null;
  instructorId?: string | null;
  photoUrl?: string | null;
};

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: { createdAt: "desc" },
      include: { instructor: true },
    });

    return NextResponse.json({
      success: true,
      items: certificates,
      total: certificates.length,
    });
  } catch (error) {
    console.error("CERTIFICATES FETCH ERROR:", error);

    return NextResponse.json(
      { success: false, error: "Certificates fetch failed" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body: CreateCertificateBody = await req.json();

    const data: any = {
      fullName: body.fullName,
      program: body.program,
      qualificationLevel: body.qualificationLevel,

      issueDate: body.issueDate ? new Date(body.issueDate) : null,

      seaMiles:
        body.seaMiles !== undefined &&
        body.seaMiles !== null &&
        body.seaMiles !== ""
          ? Number(body.seaMiles)
          : null,

      photoUrl: body.photoUrl || null,
      status: "PENDING",
    };

    // instructor varsa bağla
    if (body.instructorId) {
      data.instructor = {
        connect: { id: body.instructorId },
      };
    }

    const certificate = await prisma.certificate.create({
      data,
      include: { instructor: true },
    });

    return NextResponse.json({
      success: true,
      item: certificate,
    });
  } catch (error) {
    console.error("CERTIFICATE CREATE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificate create failed",
        detail: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}