"use client";

import Link from "next/link";

const guides = [
  {
    title: "COLREG nedir?",
    desc: "Denizde çatışmayı önleme kuralları ve temel prensipler.",
    href: "/guide/colreg-nedir",
    badge: "CORE RULES",
  },
  {
    title: "Gece seyri fenerleri",
    desc: "Işık karakterleri, flash pattern ve gerçek gece senaryoları.",
    href: "/guide/gece-seyri-fenerleri",
    badge: "LIGHT SYSTEM",
  },
  {
    title: "AIS ve VTS",
    desc: "Modern trafik sistemleri ve deniz trafiği yönetimi.",
    href: "/guide/ais-ve-vts",
    badge: "NAVIGATION",
  },
];

export default function GuideHubPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 40%), #020617",
        color: "#f8fafc",
      }}
    >
      <section
        style={{
          padding: "120px 24px 80px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <div style={{ maxWidth: 720 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(103,211,255,0.08)",
              border: "1px solid rgba(103,211,255,0.18)",
              color: "#8ed8ff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            ALBATROS GUIDE
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Denizcilik
            <br />
            bilgi merkezi
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
            }}
          >
            COLREG, navigasyon, gece seyri ve açık deniz bilgileri.
            Bu içerikler gerçek eğitim sistemine entegre şekilde hazırlanmıştır.
          </p>
        </div>

        {/* CARDS */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {guides.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                textDecoration: "none",
              }}
            >
              <div
                style={{
                  padding: 22,
                  borderRadius: 20,
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.9), rgba(10,15,24,0.9))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.25s ease",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(66,189,248,0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    color: "#67d3ff",
                    marginBottom: 10,
                    letterSpacing: 1,
                  }}
                >
                  {item.badge}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 900,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    color: "rgba(226,232,240,0.7)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 80,
            padding: 30,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.9), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            Bu bilgiyi denizde uygulamak ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
            }}
          >
            Teoriyi pratiğe dönüştüren açık deniz eğitimlerine katıl.
          </p>

          <Link
            href="/training/offshore-skipper"
            style={{
              display: "inline-block",
              marginTop: 20,
              padding: "14px 22px",
              borderRadius: 14,
              background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
              color: "#04121c",
              fontWeight: 900,
              textDecoration: "none",
            }}
          >
            Eğitimleri Gör
          </Link>
        </div>
      </section>
    </main>
  );
}