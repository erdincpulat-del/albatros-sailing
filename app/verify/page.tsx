import { redirect } from "next/navigation";

type VerifyRedirectPageProps = {
  searchParams: Promise<{
    certificateId?: string;
  }>;
};

export default async function VerifyRedirectPage({
  searchParams,
}: VerifyRedirectPageProps) {
  const { certificateId } = await searchParams;

  const cleanCertificateId = decodeURIComponent(certificateId || "").trim();

  if (!cleanCertificateId) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(180deg, #081321 0%, #0f1f33 50%, #0a1625 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          padding: 24,
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 560,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 24,
            padding: 32,
            textAlign: "center",
            boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              display: "inline-block",
              marginBottom: 16,
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(245,158,11,0.12)",
              border: "1px solid rgba(245,158,11,0.28)",
              color: "#fcd34d",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Verification Error
          </div>

          <h1
            style={{
              margin: 0,
              marginBottom: 12,
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            Invalid QR Code
          </h1>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.7,
              fontSize: 15,
            }}
          >
            The verification link does not include a valid certificate ID.
            Please scan the QR code again or contact Albatros Sailing.
          </p>
        </div>
      </main>
    );
  }

  redirect(`/verify/${encodeURIComponent(cleanCertificateId)}`);
}