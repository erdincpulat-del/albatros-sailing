import { prisma } from "@/lib/prisma";

type CertificatePageProps = {
  params: Promise<{
    certificateId: string;
  }>;
};

function formatDate(value: string | Date | null | undefined) {
  if (!value) return "-";

  const date = typeof value === "string" ? new Date(value) : value;

  if (Number.isNaN(date.getTime())) return "-";

  return new Intl.DateTimeFormat("tr-TR").format(date);
}

export default async function CertificatePublicPage({
  params,
}: CertificatePageProps) {
  const { certificateId } = await params;

  const certificate = await prisma.reservation.findFirst({
    where: {
      certificateId,
      status: "ACTIVE",
    },
    select: {
      id: true,
      fullName: true,
      program: true,
      certificateId: true,
      qualificationLevel: true,
      issueDate: true,
      seaMiles: true,
      photoUrl: true,
      cardFrontUrl: true,
      cardBackUrl: true,
      qrCodeUrl: true,
      createdAt: true,
      status: true,
    },
  });

  if (!certificate) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "linear-gradient(180deg, #17364a 0%, #0d1b2a 100%)",
          color: "white",
          padding: "80px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 980,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#93c5fd",
              marginBottom: 14,
              fontWeight: 700,
            }}
          >
            Certificate View
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.05,
            }}
          >
            Sertifika bulunamadı
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: 680,
              fontSize: 18,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Bu certificateId için aktif bir kayıt bulunamadı. Lütfen linki
            kontrol edin veya Albatros Sailing ile iletişime geçin.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f8f5ef",
        color: "#0d1b2a",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          padding: "90px 20px 60px",
          background: "linear-gradient(180deg, #17364a 0%, #0d1b2a 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#93c5fd",
              marginBottom: 14,
              fontWeight: 700,
            }}
          >
            Official Certificate View
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 6vw, 64px)",
              lineHeight: 1.05,
            }}
          >
            Certificate Verified
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: 760,
              fontSize: 18,
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            Bu sertifika Albatros Sailing kayıt sistemi içinde doğrulanmış aktif
            bir sertifikadır.
          </p>
        </div>
      </section>

      <section
        style={{
          padding: "36px 20px 32px",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 18px",
              borderRadius: 999,
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.24)",
              color: "#15803d",
              fontWeight: 700,
              fontSize: 14,
              width: "fit-content",
            }}
          >
            <span
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22c55e",
                display: "inline-block",
              }}
            />
            ACTIVE CERTIFICATE
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <InfoCard label="Full Name" value={certificate.fullName ?? "-"} />
            <InfoCard
              label="Certificate ID"
              value={certificate.certificateId ?? certificateId}
            />
            <InfoCard
              label="Qualification"
              value={certificate.qualificationLevel ?? "-"}
            />
            <InfoCard
              label="Program"
              value={certificate.program ?? "-"}
            />
            <InfoCard
              label="Issue Date"
              value={formatDate(certificate.issueDate ?? certificate.issueDate)}
            />
            <InfoCard
              label="Sea Miles"
              value={
                typeof certificate.seaMiles === "number"
                  ? `${certificate.seaMiles} NM`
                  : "-"
              }
            />
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 20px 70px",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            background: "white",
            borderRadius: 24,
            padding: 24,
            border: "1px solid rgba(13,27,42,0.08)",
            boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#64748b",
              marginBottom: 18,
            }}
          >
            Certificate Card Preview
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  fontSize: 13,
                  marginBottom: 10,
                  color: "#334155",
                  fontWeight: 700,
                }}
              >
                Ön Yüz
              </div>

              <div
                style={{
                  width: "100%",
                  aspectRatio: "1.586",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(13,27,42,0.10)",
                  background: "#f8fafc",
                }}
              >
                {certificate.cardFrontUrl ? (
                  <img
                    src={certificate.cardFrontUrl}
                    alt="Certificate Front"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <EmptyPreview text="Ön yüz görseli bulunamadı." />
                )}
              </div>
            </div>

            <div>
              <div
                style={{
                  fontSize: 13,
                  marginBottom: 10,
                  color: "#334155",
                  fontWeight: 700,
                }}
              >
                Arka Yüz
              </div>

              <div
                style={{
                  width: "100%",
                  aspectRatio: "1.586",
                  borderRadius: 18,
                  overflow: "hidden",
                  border: "1px solid rgba(13,27,42,0.10)",
                  background: "#f8fafc",
                }}
              >
                {certificate.cardBackUrl ? (
                  <img
                    src={certificate.cardBackUrl}
                    alt="Certificate Back"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <EmptyPreview text="Arka yüz görseli bulunamadı." />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 20px 90px",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) 320px",
            gap: 24,
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: 24,
              padding: 24,
              border: "1px solid rgba(13,27,42,0.08)",
              boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#64748b",
                marginBottom: 14,
              }}
            >
              Verification Note
            </div>

            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.9,
                color: "#334155",
              }}
            >
              Bu sertifika Albatros Sailing tarafından oluşturulmuş ve sistemde
              aktif olarak doğrulanmıştır. Bu sayfa resmi kurum lisansı yerine
              eğitim tamamlama ve kayıt doğrulama amacı taşır.
            </p>
          </div>

          <div
            style={{
              background: "white",
              borderRadius: 24,
              padding: 24,
              border: "1px solid rgba(13,27,42,0.08)",
              boxShadow: "0 18px 50px rgba(0,0,0,0.06)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#64748b",
                marginBottom: 14,
              }}
            >
              Verification Data
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              <MiniRow label="Instructor" value="Erdinç Pulat" />
              <MiniRow label="Status" value={certificate.status ?? "ACTIVE"} />
              <MiniRow
                label="Last Record Date"
                value={formatDate(certificate.createdAt)}
              />
              <MiniRow
                label="Public URL"
                value={`/certificate/${certificate.certificateId ?? certificateId}`}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        background: "white",
        borderRadius: 18,
        padding: 18,
        border: "1px solid rgba(13,27,42,0.08)",
        boxShadow: "0 10px 24px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: 8,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: 17,
          fontWeight: 700,
          lineHeight: 1.5,
          color: "#0f172a",
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function MiniRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        paddingBottom: 12,
        borderBottom: "1px solid rgba(13,27,42,0.08)",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#64748b",
          marginBottom: 6,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: 15,
          lineHeight: 1.6,
          color: "#0f172a",
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function EmptyPreview({ text }: { text: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#64748b",
        fontSize: 14,
        textAlign: "center",
        padding: 20,
      }}
    >
      {text}
    </div>
  );
}