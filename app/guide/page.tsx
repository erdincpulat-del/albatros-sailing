"use client";

import Link from "next/link";

const guideCategories = [
  {
    title: "Seyir ve Kurallar",
    description:
      "COLREG, yol verme kuralları ve denizde güvenli seyir prensipleri.",
    href: "/guide/colreg-nedir",
    badge: "CORE RULES",
  },
  {
    title: "Navigasyon",
    description:
      "Harita okuma, rota planlama, AIS, VTS ve TSS sistemleri.",
    href: "/guide/navigasyon",
    badge: "NAVIGATION",
  },
  {
    title: "Güvenlik",
    description:
      "Acil durumlar, mayday çağrıları ve denizde kriz yönetimi.",
    href: "/guide/guvenlik",
    badge: "SAFETY",
  },
  {
    title: "Meteoroloji",
    description:
      "Rüzgar, basınç sistemleri ve hava tahmini.",
    href: "/guide/meteoroloji",
    badge: "WEATHER",
  },
];

export default function GuidePage() {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px 100px",
        background:
          "radial-gradient(circle at 20% 30%, rgba(66,189,248,0.06), transparent 40%), #050b14",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        {/* HEADER */}
        <div style={{ maxWidth: 680 }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(66,189,248,0.08)",
              border: "1px solid rgba(66,189,248,0.18)",
              color: "#67d3ff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
              marginBottom: 18,
            }}
          >
            ALBATROS GUIDE
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              color: "#f8fafc",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Denizi sadece
            <br />
            görmek değil,
            <br />
            <span style={{ color: "#67d3ff" }}>anlamak gerekir.</span>
          </h1>

          <p
            style={{
              marginTop: 20,
              color: "rgba(226,232,240,0.75)",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            Bu rehber, Albatros Sailing eğitimlerinin teorik temelini oluşturur.
            Gerçek denizcilik bilgisi burada başlar.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 26,
          }}
        >
          {guideCategories.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                position: "relative",
                padding: 26,
                borderRadius: 22,
                textDecoration: "none",
                color: "#f8fafc",
                background:
                  "linear-gradient(180deg, rgba(18,25,39,0.9), rgba(10,15,24,0.95))",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                transition: "all 0.25s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(66,189,248,0.15)";
                e.currentTarget.style.borderColor =
                  "rgba(66,189,248,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.35)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.06)";
              }}
            >
              {/* glow */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 20% 0%, rgba(66,189,248,0.15), transparent 60%)",
                  opacity: 0.6,
                }}
              />

              {/* badge */}
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(66,189,248,0.08)",
                  border: "1px solid rgba(66,189,248,0.18)",
                  color: "#67d3ff",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1,
                  marginBottom: 14,
                }}
              >
                {item.badge}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 800,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "rgba(226,232,240,0.7)",
                  lineHeight: 1.6,
                }}
              >
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 80,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="/programs"
            style={{
              padding: "16px 34px",
              borderRadius: 14,
              background:
                "linear-gradient(180deg, #67d3ff, #42bdf8)",
              color: "#04121c",
              fontWeight: 900,
              textDecoration: "none",
              boxShadow: "0 20px 40px rgba(66,189,248,0.35)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Eğitime Başla
          </Link>
        </div>
      </div>
    </section>
  );
}