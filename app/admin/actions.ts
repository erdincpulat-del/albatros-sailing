"use server";

export async function createCertificateAction(data: {
  fullName: string;
  program: string;
  qualificationLevel: string;
  issueDate: string;
  seaMiles: string;
  photoUrl: string | null;
  instructorId: string;
}) {
  const { prisma } = await import("@/lib/prisma");

  const certificateId = `AS-${Date.now()}`;

  const certificate = await prisma.certificate.create({
    data: {
      certificateId,
      fullName: data.fullName,
      program: data.program,
      qualificationLevel: data.qualificationLevel,
      issueDate: new Date(data.issueDate),
      seaMiles: Number(data.seaMiles) || 0,
      photoUrl: data.photoUrl,
      status: "PENDING",
    },
  });

  return certificate;
}