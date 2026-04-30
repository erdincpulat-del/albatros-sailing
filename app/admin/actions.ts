"use server";

import { createCertificateWithCard } from "@/lib/create-certificate-with-card";

export async function createCertificateAction(data: {
  fullName: string;
  program: string;
  qualificationLevel: string;
  issueDate: string;
  seaMiles: string;
  photoUrl: string | null;
  instructorId: string;
}) {
  return await createCertificateWithCard({
  fullName: data.fullName,
  program: data.program,
  qualificationLevel: data.qualificationLevel,
  issueDate: data.issueDate ? new Date(data.issueDate) : new Date(),
  seaMiles: data.seaMiles ? Number(data.seaMiles) : 0,
  photoUrl: data.photoUrl || undefined,
});
}