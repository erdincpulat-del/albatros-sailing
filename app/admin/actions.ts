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
  try {
    const { createCertificateWithCard } = await import("@/lib/create-certificate-with-card");

    return await createCertificateWithCard({
  fullName: data.fullName,
  program: data.program,
  qualificationLevel: data.qualificationLevel,
  issueDate: new Date(data.issueDate),
  seaMiles: data.seaMiles ? Number(data.seaMiles) : 0,
  photoUrl: data.photoUrl || undefined,
  instructorId: data.instructorId,
});

  } catch (err) {
    console.error("🔥 CERTIFICATE ENGINE ERROR:", err);
    throw new Error("Kart oluşturulamadı");
  }
}