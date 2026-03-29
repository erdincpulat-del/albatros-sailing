"use client";

import Link from "next/link";

const programs = [
  {
    title: "Basic Sailing",
    desc: "Sıfırdan başlayanlar için denizle doğru tanışma.",
    level: "Başlangıç",
    href: "/training/basic-sailing",
  },
  {
    title: "Coastal Skipper",
    desc: "Kıyı seyri, manevra ve tekne hakimiyeti.",
    level: "Orta Seviye",
    href: "/training/coastal-skipper",
  },
  {
    title: "Offshore Skipper",
    desc: "Açık denizde gerçek kaptanlık deneyimi.",
    level: "İleri Seviye",
    href: "/training/offshore-skipper",
  },
  {
    title: "Yachtmaster",
    desc: "Profesyonel kaptanlık ve üst seviye deniz yönetimi.",
    level: "Profesyonel",
    href: "/training/yachtmaster",
  },
];

export default function FeaturedPrograms() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#050b14",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div
            style={{
              fontSize: 12,
              color: "#7dd3fc",
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            Eğitim Programları
          </div>

          <h2
            style={{
              fontSize: "clamp(32px,4vw,48px)",
              fontWeight: 900,
              margin: 0,
            }}
          >
            Hangi seviyede başlamak istiyorsun?
          </h2>

          <p
            style={{
              marginTop: 16,
              color: "rgba(226,232,240,0.75)",
              maxWidth: 600,
              marginInline: "auto",
              lineHeight: 1.7,
            }}
          >
            Her program bir sonrakine hazırlar. Doğru seviyeden başlamak süreci
            hızlandırır.
          </p>
        </div>

        {/* GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 22,
          }}
        >
          {programs.map((p) => (
            <div
              key={p.title}
              style={{
                borderRadius: 20,
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(10,18,32,0.75))",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "0.2s",
                
              }}
              onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-8px)";
  e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.25)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0)";
  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.15)";
}}
            >
              {/* LEVEL */}
              <div
                style={{
                  fontSize: 12,
                  color: "#7dd3fc",
                  marginBottom: 10,
                  fontWeight: 700,
                }}
              >
                {p.level}
              </div>

              {/* TITLE */}
              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 800,
                }}
              >
                {p.title}
              </h3>

              {/* DESC */}
              <p
                style={{
                  marginTop: 10,
                  color: "rgba(226,232,240,0.7)",
                  fontSize: 14,
                  lineHeight: 1.6,
                  minHeight: 60,
                }}
              >
                {p.desc}
              </p>

              {/* CTA */}
              <Link
                href={p.href}
                style={{
                  marginTop: 16,
                  display: "inline-block",
                  padding: "12px 16px",
                  borderRadius: 10,
                  background: "#38bdf8",
                  color: "#082032",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Detayları Gör
              </Link>
            </div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div
          style={{
            marginTop: 50,
            textAlign: "center",
          }}
        >
          <Link
            href="/contact"
            style={{
              padding: "16px 28px",
              borderRadius: 14,
              background: "#38bdf8",
              color: "#082032",
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 20px 40px rgba(56,189,248,0.3)",
            }}
          >
            Hangi Program Uygun? Danış
          </Link>
        </div>
      </div>
    </section>
  );
}