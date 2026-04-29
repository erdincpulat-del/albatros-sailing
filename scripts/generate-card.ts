import prisma from "../lib/prisma";
import { generateCertificateCardFront } from "../lib/generate-certificate-card-front";

async function main() {
  const certificateId = process.argv[2];

  if (!certificateId) {
    throw new Error("Kullanım: npx tsx scripts/generate-card.ts AS-GEN-2026-0002");
  }

  const certificate = await prisma.certificate.findUnique({
    where: { certificateId },
  });

  if (!certificate) {
    throw new Error(`Certificate bulunamadı: ${certificateId}`);
  }

  console.log("Kart üretiliyor:", certificate.certificateId);

  const cardFrontUrl = await generateCertificateCardFront({
    certificateId: certificate.certificateId,
    fullName: certificate.fullName,
    qualification:
      certificate.qualificationLevel ||
      certificate.program ||
      "Offshore Yacht Course",
    issueDate: certificate.issueDate,
    seaMiles: certificate.seaMiles,
    photoUrl: certificate.photoUrl,
  });

  await prisma.certificate.update({
    where: { id: certificate.id },
    data: {
      cardFrontUrl,
      status: "COMPLETED",
    },
  });

  console.log("✅ Kart üretildi ve DB güncellendi:");
  console.log(cardFrontUrl);
}

main()
  .catch((error) => {
    console.error("❌ Kart üretim hatası:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });