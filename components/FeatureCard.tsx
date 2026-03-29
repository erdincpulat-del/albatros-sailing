"use client";

import Link from "next/link";

const programs = [
  {
    badge: "Başlangıç",
    title: "Basic Sailing",
    desc: "Sıfırdan başlayanlar için denizle doğru tanışma.",
    href: "/training/basic-sailing",
    featured: false,
  },
  {
    badge: "Orta Seviye",
    title: "Coastal Skipper",
    desc: "Kıyı seyri, manevra ve tekne hakimiyeti.",
    href: "/training/coastal-skipper",
    featured: false,
  },
  {
    badge: "İleri Seviye",
    title: "Offshore Skipper",
    desc: "Açık denizde gerçek kaptanlık deneyimi.",
    href: "/training/offshore-skipper",
    featured: false,
  },
  {
    badge: "Profesyonel",
    title: "Yachtmaster",
    desc: "Profesyonel kaptanlık ve üst seviye deniz yönetimi.",
    href: "/training/yachtmaster",
    featured: true,
  },
];

export default function FeaturedPrograms() {
  return (
    <section
      style={{
        position: "relative",
        padding: "110px 24px 100px",
        background: "linear-gradient(180deg, #06101b 0%, #04070c 100%)",
        overflow: "hidden",
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
            textAlign: "center",
            maxWidth: 760,
            margin: "0 auto 40px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(125,211,252,0.08)",
              border: "1px solid rgba(125,211,252,0.16)",
              color: "#8ed8ff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Eğitim Programları
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 58px)",
              fontWeight: 900,
              lineHeight: 1.06,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
            }}
          >
            Hangi seviyede başlamak istiyorsun?
          </h2>

          <p
            style={{
              marginTop: 18,
              color: "rgba(226,232,240,0.78)",
              fontSize: 16,
              lineHeight: 1.85,
              maxWidth: 680,
              marginInline: "auto",
            }}
          >
            Her program bir sonrakine hazırlar. Doğru seviyeden başlamak süreci
            hızlandırır.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: 22,
          }}
        >
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
                e.currentTarget.style.boxShadow = program.featured
                  ? "0 24px 46px rgba(217,188,119,0.18)"
                  : "0 20px 40px rgba(66,189,248,0.16)";
                e.currentTarget.style.borderColor = program.featured
                  ? "rgba(217,188,119,0.42)"
                  : "rgba(125,211,252,0.24)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = program.featured
                  ? "0 24px 46px rgba(217,188,119,0.10)"
                  : "0 18px 36px rgba(0,0,0,0.16)";
                e.currentTarget.style.borderColor = program.featured
                  ? "rgba(217,188,119,0.26)"
                  : "rgba(255,255,255,0.08)";
              }}
              style={{
                position: "relative",
                overflow: "hidden",
                display: "block",
                minHeight: 260,
                padding: 24,
                borderRadius: 24,
                textDecoration: "none",
                color: "#f8fafc",
                border: program.featured
                  ? "1px solid rgba(217,188,119,0.26)"
                  : "1px solid rgba(255,255,255,0.08)",
                background: program.featured
                  ? "linear-gradient(180deg, rgba(18,25,39,0.98), rgba(10,15,24,0.92))"
                  : "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(9,14,24,0.82))",
                boxShadow: program.featured
                  ? "0 24px 46px rgba(217,188,119,0.10)"
                  : "0 18px 36px rgba(0,0,0,0.16)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                willChange: "transform",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: program.featured
                    ? "radial-gradient(circle at top right, rgba(217,188,119,0.18), transparent 38%)"
                    : "radial-gradient(circle at top right, rgba(103,211,255,0.12), transparent 38%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "-75%",
                  width: "45%",
                  height: "100%",
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.10) 50%, transparent 100%)",
                  transform: "skewX(-20deg)",
                  pointerEvents: "none",
                  transition: "left 0.6s ease",
                }}
                className="sweep-light"
              />

              <style>
                {`
                  a:hover .sweep-light {
                    left: 130%;
                  }
                `}
              </style>

              {program.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(217,188,119,0.10)",
                    border: "1px solid rgba(217,188,119,0.22)",
                    color: "#ecd8a1",
                    fontSize: 10,
                    fontWeight: 800,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                  }}
                >
                  En Güçlü Seçenek
                </div>
              )}

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  display: "inline-flex",
                  padding: "6px 12px",
                  borderRadius: 999,
                  background: program.featured
                    ? "rgba(217,188,119,0.08)"
                    : "rgba(125,211,252,0.08)",
                  border: program.featured
                    ? "1px solid rgba(217,188,119,0.22)"
                    : "1px solid rgba(125,211,252,0.16)",
                  color: program.featured ? "#d9bc77" : "#8ed8ff",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  marginBottom: 18,
                  backdropFilter: "blur(4px)",
                }}
              >
                {program.badge}
              </div>

              <h3
                style={{
                  position: "relative",
                  zIndex: 2,
                  margin: 0,
                  fontSize: 26,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  fontWeight: 900,
                  color: "#f8fafc",
                }}
              >
                {program.title}
              </h3>

              <p
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginTop: 14,
                  marginBottom: 22,
                  color: "rgba(226,232,240,0.76)",
                  fontSize: 15,
                  lineHeight: 1.78,
                  maxWidth: 320,
                }}
              >
                {program.desc}
              </p>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                  marginTop: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "11px 16px",
                  borderRadius: 12,
                  background: program.featured
                    ? "rgba(217,188,119,0.10)"
                    : "rgba(255,255,255,0.04)",
                  border: program.featured
                    ? "1px solid rgba(217,188,119,0.18)"
                    : "1px solid rgba(255,255,255,0.08)",
                  color: "#f8fafc",
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                Detayları Gör
                <span style={{ opacity: 0.7 }}>→</span>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            href="https://wa.me/905324873813?text=Merhaba,%20hangi%20program%C4%B1n%20bana%20uygun%20oldu%C4%9Funu%20dan%C4%B1%C5%9Fmak%20istiyorum."
            target="_blank"
            rel="noreferrer"
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 16px 40px rgba(66,189,248,0.32)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 24px rgba(66,189,248,0.22)";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 260,
              padding: "14px 22px",
              borderRadius: 14,
              textDecoration: "none",
              background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
              color: "#082032",
              fontSize: 14,
              fontWeight: 900,
              boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              transition: "all 0.25s ease",
              willChange: "transform",
            }}
          >
            Hangi Program Uygun? Danış
          </a>
        </div>
      </div>
    </section>
  );
}