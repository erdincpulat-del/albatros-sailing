import prisma from "../lib/prisma";
import { generateCertificateCardFront } from "../lib/generate-certificate-card-front";
import { generateCertificateCardBack } from "../lib/generate-certificate-card-back";
import "dotenv/config";
import QRCode from "qrcode";

async function main() {
  const certificateId = process.argv[2];

  if (!certificateId) {
    throw new Error(
      "Kullanım: npx tsx scripts/generate-card.ts AS-GEN-2026-0002"
    );
  }

  const certificate = await prisma.certificate.findUnique({
    where: { certificateId },
  });

  if (!certificate) {
    throw new Error(`Certificate bulunamadı: ${certificateId}`);
  }

  console.log("Kart üretiliyor:", certificate.certificateId);

  const payload = {
    certificateId: certificate.certificateId,
    fullName: certificate.fullName,
    qualification:
      certificate.qualificationLevel ||
      certificate.program ||
      "Offshore Yacht Course",
    issueDate: certificate.issueDate,
    seaMiles: certificate.seaMiles,
    photoUrl: certificate.photoUrl,
  };

  const cardFrontUrl = await generateCertificateCardFront(payload);

  const qrCodeDataUrl = await QRCode.toDataURL(
  `https://www.albatros-sailing.com/verify/${certificate.certificateId}`
);

const cardBackUrl = await generateCertificateCardBack({
  certificateId: certificate.certificateId,
  qrCodeDataUrl,
});
  await prisma.certificate.update({
    where: { id: certificate.id },
    data: {
      cardFrontUrl,
      cardBackUrl,
      status: "ACTIVE",
    },
  });

  console.log("✅ Kart üretildi ve DB güncellendi.");
  console.log("Front:", cardFrontUrl);
  console.log("Back:", cardBackUrl);
}

main()
  .catch((error) => {
    console.error("❌ Kart üretim hatası:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });