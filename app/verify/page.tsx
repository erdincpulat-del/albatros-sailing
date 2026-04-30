import prisma from "@/lib/prisma";

type Props = {
  searchParams: {
    certificateId?: string;
  };
};

export default async function VerifyPage({ searchParams }: Props) {
  const certificateId = searchParams.certificateId?.toUpperCase();

  if (!certificateId) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Sertifika ID gerekli</h2>
      </div>
    );
  }

  const certificate = await prisma.certificate.findFirst({
    where: {
      certificateId,
      status: "ACTIVE",
    },
  });

  if (!certificate) {
    return (
      <div style={{ padding: 40 }}>
        <h2>Sertifika bulunamadı</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Certificate Verified</h1>

      <p><strong>Ad Soyad:</strong> {certificate.fullName}</p>
      <p><strong>ID:</strong> {certificate.certificateId}</p>
      <p><strong>Program:</strong> {certificate.program}</p>

      <div style={{ marginTop: 20 }}>
        <img src={certificate.cardFrontUrl || ""} width={400} />
      </div>

      <div style={{ marginTop: 20 }}>
        <img src={certificate.cardBackUrl || ""} width={400} />
      </div>
    </div>
  );
}