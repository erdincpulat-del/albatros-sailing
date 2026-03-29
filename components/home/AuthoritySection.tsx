"use client";

import Link from "next/link";

const trustItems = [
  "Gerçek açık deniz tecrübesi",
  "Küçük grup eğitim modeli",
  "QR ile doğrulanabilir sertifika sistemi",
  "Bodrum çıkışlı uygulamalı rota eğitimi",
];

export default function AuthoritySection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, #050b14 0%, #07111f 50%, #050b14 100%)",
        color: "#f8fafc",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(56,189,248,0.10)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 36,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.16)",
              color: "#7dd3fc",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Trust & Authority
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px,4vw,56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 900,
              maxWidth: 650,
            }}
          >
            Güven, denizde
            <br />
            anlatılmaz.
            <br />
            Gösterilir.
          </h2>

          <p
            style={{
              marginTop: 20,
              color: "rgba(226,232,240,0.82)",
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 620,
            }}
          >
            Albatros Sailing yaklaşımı yalnızca eğitim vermek değil; öğrenciyi
            gerçek koşullarda daha güçlü, daha kontrollü ve daha bilinçli hale
            getirmektir. Güven burada tasarımdan değil, sistemden gelir.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gap: 12,
            }}
          >
            {trustItems.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.76), rgba(15,23,42,0.54))",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 10px rgba(34,197,94,0.5)",
                    flexShrink: 0,
                  }}
                />
                <span
                  style={{
                    color: "#e2e8f0",
                    fontSize: 15,
                    fontWeight: 600,
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/certificates"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 20px",
                borderRadius: 14,
                background: "#38bdf8",
                color: "#082032",
                textDecoration: "none",
                fontWeight: 800,
                boxShadow: "0 14px 30px rgba(56,189,248,0.24)",
              }}
            >
              Sertifika Sistemini Gör
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 20px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                color: "#f8fafc",
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              Bilgi Al
            </Link>
          </div>
        </div>

        <div
          style={{
            borderRadius: 28,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.10)",
            background:
              "linear-gradient(180deg, rgba(10,18,32,0.92), rgba(7,12,22,0.90))",
            boxShadow: "0 28px 70px rgba(0,0,0,0.34)",
            minHeight: 520,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/images/homepage/cta.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.14,
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: 24,
              display: "grid",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                alignSelf: "flex-start",
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(34,197,94,0.10)",
                border: "1px solid rgba(34,197,94,0.20)",
                color: "#86efac",
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              Active Verification
            </div>

            <div
              style={{
                padding: 18,
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.82), rgba(15,23,42,0.62))",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "#7dd3fc",
                  fontWeight: 800,
                  letterSpacing: 1.1,
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                Verification Example
              </div>

              <div
                style={{
                  fontSize: 24,
                  fontWeight: 900,
                  color: "#f8fafc",
                  marginBottom: 12,
                }}
              >
                CERTIFICATE VERIFIED
              </div>

              <div
                style={{
                  color: "rgba(226,232,240,0.82)",
                  lineHeight: 1.7,
                  fontSize: 15,
                }}
              >
                Sistem üzerinde kayıtlı, doğrulanabilir ve güvenilir eğitim
                altyapısı.
              </div>
            </div>

            {[
              ["Certificate ID", "AS-OFF-2026-0001"],
              ["Program", "Offshore Skipper"],
              ["Status", "ACTIVE"],
              ["Validation", "QR + Database Record"],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.72), rgba(15,23,42,0.52))",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "#7dd3fc",
                    fontWeight: 800,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    marginBottom: 6,
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#f8fafc",
                    fontWeight: 700,
                    lineHeight: 1.45,
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}