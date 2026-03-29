import { headers } from "next/headers";

type Certificate = {
  fullName: string | null;
  program: string | null;
  certificateId: string | null;
  certificateLevel: string | null;
  certifiedAt: string | null;
  status: string | null;
  cardFrontUrl: string | null;
  cardBackUrl: string | null;
};

async function getCertificate(certificateId: string): Promise<Certificate | null> {
  try {
    const headersList = await headers();
    const host = headersList.get("host");

    if (!host) return null;

    const protocol =
      process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(
      `${protocol}://${host}/api/verify?certificateId=${certificateId}`,
      { cache: "no-store" }
    );

    if (!res.ok) return null;

    const data = await res.json();

    return data.certificate ?? null;
  } catch {
    return null;
  }
}

export default async function CardPage({
  params,
}: {
  params: Promise<{ certificateId: string }>;
}) {
  const { certificateId } = await params;
  const certificate = await getCertificate(certificateId);

  if (!certificate) {
    return (
      <main style={{ padding: 40 }}>
        <h1>Kart bulunamadı</h1>
        <p>Bu certificateId için kayıt yok.</p>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        padding: 40,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ marginBottom: 12 }}>Albatros Sailing Certificate</h1>

        <p style={{ color: "#475569", marginBottom: 24 }}>
          Certificate verification record
        </p>

        <div
          style={{
            background: "white",
            border: "1px solid #e2e8f0",
            borderRadius: 16,
            padding: 24,
            marginBottom: 24,
          }}
        >
          <p><b>Full Name:</b> {certificate.fullName ?? "-"}</p>
          <p><b>Certificate ID:</b> {certificate.certificateId ?? "-"}</p>
          <p><b>Program:</b> {certificate.program ?? "-"}</p>
          <p><b>Level:</b> {certificate.certificateLevel ?? "-"}</p>
          <p>
            <b>Issue Date:</b>{" "}
            {certificate.certifiedAt
              ? new Date(certificate.certifiedAt).toLocaleDateString()
              : "-"}
          </p>
          <p><b>Status:</b> {certificate.status ?? "-"}</p>
        </div>

        {certificate.cardFrontUrl ? (
          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <img
              src={certificate.cardFrontUrl}
              alt="Certificate Card Front"
              style={{
                width: "100%",
                maxWidth: 900,
                display: "block",
                borderRadius: 12,
                marginBottom: certificate.cardBackUrl ? 20 : 0,
              }}
            />

            {certificate.cardBackUrl ? (
              <img
                src={certificate.cardBackUrl}
                alt="Certificate Card Back"
                style={{
                  width: "100%",
                  maxWidth: 900,
                  display: "block",
                  borderRadius: 12,
                }}
              />
            ) : null}
          </div>
        ) : (
          <div
            style={{
              background: "white",
              border: "1px solid #e2e8f0",
              borderRadius: 16,
              padding: 24,
            }}
          >
            <p>Kart görseli henüz oluşturulmamış.</p>
          </div>
        )}
      </div>
    </main>
  );
}