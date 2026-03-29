"use client";

import Link from "next/link";

const verificationItems = [
  "Her sertifika benzersiz ID ile kayıtlıdır",
  "QR ile anında doğrulama yapılabilir",
  "Sahte belgeye karşı güven katmanı sağlar",
  "Eğitim otoritesini görünür hale getirir",
];

const previewRows = [
  ["Certificate ID", "AS-OFF-2026-1024"],
  ["Name", "Test Captain"],
  ["Level", "Offshore Skipper"],
  ["Instructor", "Erdinç Pulat"],
  ["Issue Date", "12.03.2026"],
];

export default function CertificateVerifySection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "110px 24px 110px",
        background: "linear-gradient(180deg, #050b14 0%, #04070c 100%)",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes scanMove {
          0% {
            top: -120%;
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            top: 120%;
            opacity: 0;
          }
        }

        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 rgba(74,222,128,0);
          }
          50% {
            box-shadow: 0 0 18px rgba(74,222,128,0.35);
          }
          100% {
            box-shadow: 0 0 0 rgba(74,222,128,0);
          }
        }

        .verify-scan-line {
          position: absolute;
          top: -120%;
          left: 0;
          width: 100%;
          height: 140%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(74,222,128,0.14),
            transparent
          );
          animation: scanMove 3.2s linear infinite;
          pointer-events: none;
          z-index: 1;
          mix-blend-mode: screen;
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(74,222,128,0.08), transparent 34%), radial-gradient(circle at 80% 70%, rgba(103,211,255,0.08), transparent 34%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 34,
          alignItems: "center",
        }}
      >
        {/* LEFT CONTENT */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(74,222,128,0.08)",
              border: "1px solid rgba(74,222,128,0.16)",
              color: "#86efac",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Certificate Verification
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 58px)",
              lineHeight: 1.04,
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
              maxWidth: 620,
            }}
          >
            Sertifika
            <br />
            <span style={{ color: "#86efac" }}>doğrulanabilir</span>
            <br />
            olmalıdır.
          </h2>

          <p
            style={{
              marginTop: 18,
              maxWidth: 620,
              color: "rgba(226,232,240,0.82)",
              fontSize: 17,
              lineHeight: 1.8,
            }}
          >
            Albatros Sailing eğitimlerinde verilen her sertifika sistemde kayıtlı
            şekilde üretilir. Bu yapı, alınan eğitimi daha güçlü, daha resmi ve
            daha güvenilir hale getirir.
          </p>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
              maxWidth: 620,
            }}
          >
            {verificationItems.map((item) => (
              <div
                key={item}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateX(8px)";
                  e.currentTarget.style.borderColor = "rgba(74,222,128,0.24)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 30px rgba(74,222,128,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateX(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e2e8f0",
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.65,
                  transition: "all 0.22s ease",
                  willChange: "transform",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#86efac",
                    boxShadow: "0 0 10px rgba(134,239,172,0.45)",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 16,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 12px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(226,232,240,0.74)",
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            Kurumsal güven • QR sistem • Dijital doğrulama
          </div>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/verify"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(72,210,109,0.30)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 24px rgba(72,210,109,0.22)";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 170,
                padding: "14px 20px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #6ef58f, #48d26d)",
                color: "#082611",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 900,
                boxShadow: "0 10px 24px rgba(72,210,109,0.22)",
                transition: "all 0.25s ease",
                willChange: "transform",
              }}
            >
              Sertifika Doğrula
            </Link>

            <Link
              href="/certificates"
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.18)";
                e.currentTarget.style.boxShadow =
                  "0 14px 30px rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.boxShadow = "none";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 170,
                padding: "14px 20px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 800,
                transition: "all 0.25s ease",
                willChange: "transform",
              }}
            >
              Sistem Yapısını Gör
            </Link>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div
          style={{
            width: "100%",
            maxWidth: 430,
            justifySelf: "end",
          }}
        >
          <div
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                "0 0 42px rgba(74,222,128,0.14), 0 24px 48px rgba(0,0,0,0.34)";
              e.currentTarget.style.borderColor = "rgba(74,222,128,0.20)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 20px 40px rgba(0,0,0,0.28)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
            }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 26,
              padding: 22,
              background:
                "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.28)",
              backdropFilter: "blur(10px)",
              transition: "all 0.25s ease",
              willChange: "transform",
            }}
          >
            <div className="verify-scan-line" />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top right, rgba(74,222,128,0.10), transparent 30%)",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                fontSize: 11,
                color: "#86efac",
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Verification Preview
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "inline-flex",
                alignItems: "center",
                padding: "6px 10px",
                borderRadius: 999,
                background: "rgba(74,222,128,0.10)",
                border: "1px solid rgba(74,222,128,0.18)",
                color: "#86efac",
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 16,
                animation: "pulseGreen 2s infinite",
              }}
            >
              Valid
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "grid",
                gap: 10,
              }}
            >
              {previewRows.map(([label, value]) => (
                <div
                  key={label}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(4px)";
                    e.currentTarget.style.borderColor =
                      "rgba(103,211,255,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.08)";
                  }}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 12,
                    alignItems: "center",
                    transition: "all 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(226,232,240,0.60)",
                      fontWeight: 700,
                      letterSpacing: 0.8,
                      textTransform: "uppercase",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      color: "#f8fafc",
                      fontWeight: 800,
                      fontSize: 14,
                      textAlign: "right",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                position: "relative",
                zIndex: 2,
                marginTop: 14,
                display: "grid",
                gridTemplateColumns: "1fr 112px",
                gap: 12,
              }}
            >
              <div
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "rgba(103,211,255,0.16)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.2s ease",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#8ed8ff",
                    fontWeight: 800,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Why It Matters
                </div>

                <div
                  style={{
                    color: "rgba(226,232,240,0.78)",
                    fontSize: 13,
                    lineHeight: 1.7,
                    fontWeight: 600,
                  }}
                >
                  Eğitimin gerçekliğini ve doğrulanabilirliğini gösterir.
                </div>
              </div>

              <div
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 30px rgba(74,222,128,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 6px 18px rgba(74,222,128,0.18)";
                }}
                style={{
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(74,222,128,0.16), rgba(74,222,128,0.08))",
                  border: "1px solid rgba(74,222,128,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#86efac",
                  fontSize: 18,
                  fontWeight: 900,
                  textAlign: "center",
                  lineHeight: 1.2,
                  padding: 12,
                  transition: "all 0.2s ease",
                }}
              >
                QR
                <br />
                Verify
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}