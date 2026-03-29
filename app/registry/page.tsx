"use client";

import { useState } from "react";

type RegistryCertificate = {
  id: string;
  fullName: string;
  certificateId?: string | null;
  certificateLevel?: string | null;
  program?: string | null;
  seaMiles?: number | null;
  status?: string | null;
  cardFrontUrl?: string | null;
  certifiedAt?: string | null;
};

export default function RegistryPage() {
  const [certificateId, setCertificateId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RegistryCertificate | null>(null);
  const [notFound, setNotFound] = useState(false);

  async function handleSearch() {
    const value = certificateId.trim().toUpperCase();

    if (!value) {
      alert("Certificate ID gir.");
      return;
    }

    try {
      setLoading(true);
      setResult(null);
      setNotFound(false);

      const res = await fetch(
        `/api/registry?certificateId=${encodeURIComponent(value)}`,
        {
          cache: "no-store",
        }
      );

      const data = await res.json();

      if (!res.ok || !data?.success) {
        alert(data?.error || "Arama başarısız.");
        return;
      }

      if (!data.found) {
        setNotFound(true);
        return;
      }

      setResult(data.certificate);
    } catch (error) {
      console.error(error);
      alert("Arama sırasında hata oluştu.");
    } finally {
      setLoading(false);
    }
  }

  function handleOpenVerify() {
    if (!result?.certificateId) return;
    window.location.href = `/verify/${encodeURIComponent(result.certificateId)}`;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(14,165,233,0.10), transparent 30%), #08111f",
        color: "white",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div
          style={{
            width: "100%",
            borderRadius: 28,
            padding: 32,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#67e8f9",
              marginBottom: 10,
              fontWeight: 700,
            }}
          >
            Albatros Sailing
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.15,
            }}
          >
            Global Certificate Registry
          </h1>

          <p
            style={{
              marginTop: 14,
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7,
              fontSize: 15,
            }}
          >
            Certificate ID girerek Albatros Sailing dijital sertifika kaydını
            ara ve doğrula.
          </p>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gap: 14,
            }}
          >
            <input
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value)}
              placeholder="Örnek: AS-OFF-2026-1735"
              style={inputStyle}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch} style={searchButtonStyle}>
              {loading ? "Searching..." : "Search Certificate"}
            </button>
          </div>

          {notFound && (
            <div style={warningBoxStyle}>
              Bu certificate ID için kayıt bulunamadı.
            </div>
          )}

          {result && (
            <div
              style={{
                marginTop: 24,
                borderRadius: 20,
                padding: 20,
                background: "#0a1627",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
                  gap: 14,
                  marginBottom: 18,
                }}
              >
                <InfoCard label="Full Name" value={result.fullName || "-"} />
                <InfoCard
                  label="Certificate ID"
                  value={result.certificateId || "-"}
                />
                <InfoCard
                  label="Qualification"
                  value={result.certificateLevel || result.program || "-"}
                />
                <InfoCard
                  label="Sea Miles"
                  value={
                    typeof result.seaMiles === "number"
                      ? `${result.seaMiles} NM`
                      : "-"
                  }
                />
                <InfoCard label="Status" value={result.status || "-"} />
              </div>

              {result.cardFrontUrl ? (
                <img
                  src={result.cardFrontUrl}
                  alt={result.fullName}
                  style={{
                    width: "100%",
                    maxWidth: 620,
                    display: "block",
                    margin: "0 auto 18px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                />
              ) : null}

              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={handleOpenVerify} style={verifyButtonStyle}>
                  Open Full Verify Page
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        borderRadius: 16,
        padding: 16,
        background: "#0f1d31",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.42)",
          marginBottom: 8,
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: 17,
          fontWeight: 700,
          color: "white",
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "15px 16px",
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "#0a1627",
  color: "white",
  fontSize: 16,
  outline: "none",
};

const searchButtonStyle: React.CSSProperties = {
  border: "none",
  borderRadius: 16,
  padding: "14px 18px",
  background: "#22c55e",
  color: "#04130a",
  fontWeight: 800,
  cursor: "pointer",
  fontSize: 15,
};

const verifyButtonStyle: React.CSSProperties = {
  border: "1px solid rgba(96,165,250,0.35)",
  borderRadius: 14,
  padding: "12px 18px",
  background: "rgba(59,130,246,0.12)",
  color: "#bfdbfe",
  fontWeight: 700,
  cursor: "pointer",
  fontSize: 14,
};

const warningBoxStyle: React.CSSProperties = {
  marginTop: 20,
  borderRadius: 16,
  padding: 16,
  background: "rgba(248,113,113,0.10)",
  border: "1px solid rgba(248,113,113,0.20)",
  color: "#fecaca",
  fontWeight: 600,
};