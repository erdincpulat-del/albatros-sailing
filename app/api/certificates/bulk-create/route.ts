// app/api/certificates/bulk-create/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { generateVerificationHash } from "@/lib/generate-verification-hash";

export async function POST(req: Request) {
  const body = await req.json();

  const results = [];

  for (const item of body.certificates) {
    const certificateId = item.certificateId;

    const hash = generateVerificationHash(certificateId);

    const created = await prisma.certificate.create({
      data: {
        fullName: item.fullName,
        certificateId,
        program: item.program,
        qualificationLevel: item.level,
        issueDate: new Date(item.issueDate),
        seaMiles: item.seaMiles,
        status: "ACTIVE",
        verificationHash: hash,
      },
    });

    results.push(created);
  }

  return NextResponse.json({ success: true, count: results.length });
}