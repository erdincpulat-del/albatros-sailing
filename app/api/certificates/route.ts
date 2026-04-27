import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const certificates = await prisma.certificate.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      success: true,
      items: certificates,
      total: certificates.length,
    });
  } catch (error) {
    console.error("CERTIFICATES FETCH ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "Certificates fetch failed",
      },
      { status: 500 }
    );
  }
}