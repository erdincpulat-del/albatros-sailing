"use client";

import Link from "next/link";

const steps = [
  {
    title: "Basic Sailing",
    level: "Başlangıç",
    text: "Denizle ilk temas. Temel kontrol ve güvenli başlangıç.",
    href: "/training/basic-sailing",
  },
  {
    title: "Coastal Skipper",
    level: "Gelişim",
    text: "Kıyı seyri, manevra ve ekip yönetimi disiplini.",
    href: "/training/coastal-skipper",
    highlight: true,
  },
  {
    title: "Offshore Skipper",
    level: "İleri",
    text: "Açık deniz rotaları ve gerçek karar anları.",
    href: "/training/offshore-skipper",
  },
  {
    title: "Yachtmaster",
    level: "Elite",
    text: "Sorumluluk, liderlik ve üst seviye kontrol.",
    href: "/training/yachtmaster",
  },
];

export default function TrainingPath() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, #050b14 0%, #07111f 50%, #050b14 100%)",
        color: "#f8fafc",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <h2
            style={{
              fontSize: "clamp(32px,4vw,50px)",
              fontWeight: 900,
              margin: 0,
            }}
          >
            Nereden başlayacağını bil.
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              maxWidth: 620,
              marginInline: "auto",
              lineHeight: 1.7,
            }}
          >
            Her eğitim bir sonrakine hazırlanır. Bu yol, sistemli ilerleyenler içindir.
          </p>
        </div>

        {/* PATH */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 18,
          }}
        >
          {steps.map((step, index) => (
            <div
              key={step.title}
              style={{
                position: "relative",
                padding: 20,
                borderRadius: 18,
                background: step.highlight
                  ? "linear-gradient(180deg, rgba(18,40,66,0.92), rgba(12,24,42,0.76))"
                  : "rgba(255,255,255,0.03)",
                border: step.highlight
                  ? "1px solid rgba(56,189,248,0.28)"
                  : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* STEP NUMBER */}
              <div
                style={{
                  fontSize: 12,
                  color: "#7dd3fc",
                  fontWeight: 800,
                  marginBottom: 6,
                }}
              >
                {step.level}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  color: "#cbd5e1",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {step.text}
              </p>

              <div style={{ marginTop: 14 }}>
                <Link
                  href={step.href}
                  style={{
                    fontSize: 13,
                    color: "#38bdf8",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Detayı Gör →
                </Link>
              </div>

              {/* ARROW */}
              {index < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    right: -10,
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: 22,
                    color: "rgba(255,255,255,0.2)",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}