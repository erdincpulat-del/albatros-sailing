"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "905324873813";

const waLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function HomeHero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "92vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px 80px",
        background: "#050b14",
        overflow: "hidden",
      }}
    >
      <video
  autoPlay
  muted
  loop
  playsInline
  style={{
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: 0,
    opacity: 0.75,
  }}
>
  <source src="/videos/hero-sailing.mp4" type="video/mp4" />
</video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(5,11,20,0.85) 0%, rgba(5,11,20,0.6) 40%, rgba(5,11,20,0.2) 70%, rgba(5,11,20,0.1) 100%)",

        }}
      />

      <div
        style={{
          position: "absolute",
          top: -120,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "rgba(103,211,255,0.12)",
filter: "blur(80px)"
        }}
      />

      <div
        style={{
          position: "absolute",
          right: -80,
          bottom: -100,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(217,188,119,0.16)",
          filter: "blur(90px)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1180,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 36,
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(103,211,255,0.08)",
              border: "1px solid rgba(103,211,255,0.16)",
              color: "#aee8ff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Albatros Sailing
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(44px, 6vw, 84px)",
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: "-0.05em",
              color: "#f8fafc",
              maxWidth: 620,
              textShadow: "0 10px 30px rgba(0,0,0,0.35)",
            }}
          >
            Denizi izlemeyi
            <br />
            bırak.
            <br />
            <span style={{ color: "#67d3ff" }}>Onu yönetmeyi</span>
            <br />
            öğren.
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: 620,
              color: "rgba(226,232,240,0.84)",
              fontSize: 18,
              lineHeight: 1.8,
            }}
          >
            Bu eğitim sadece yelken öğretmez.
            <br />
            Baskı altında doğru karar vermeyi öğretir.
          </p>

          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            {[
              "Maksimum 4 kişi",
              "Gerçek rota eğitimi",
              "Açık deniz deneyimi",
              "Doğrulanabilir sertifika",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "8px 12px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#dbeafe",
                  fontSize: 12,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 26,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
  href={waLink(
  "Merhaba, Albatros Sailing ile açık deniz eğitim programlarına katılmak istiyorum. Deneyimime göre en uygun program ve yakın tarihli kontenjan hakkında bilgi alabilir miyim?"
)}
  target="_blank"
  rel="noreferrer"
  onMouseEnter={(e) => {
  e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
  e.currentTarget.style.boxShadow = "0 16px 40px rgba(66,189,248,0.45)";
}}

onMouseLeave={(e) => {
  e.currentTarget.style.transform = "translateY(0) scale(1)";
  e.currentTarget.style.boxShadow = "0 10px 24px rgba(66,189,248,0.22)";

  }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 150,
    padding: "14px 20px",
    borderRadius: 14,
    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
    color: "#082032",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 900,
    boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
    transition: "all 0.2s ease",
    willChange: "transform",
  }}
>
  Eğitime Katıl
</a>

            <Link
              href="/verify"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 150,
                padding: "14px 20px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                textDecoration: "none",
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              Sertifikayı Doğrula
            </Link>
          </div>

          <div
            style={{
              marginTop: 12,
              color: "#fca5a5",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            ⚠️ Son kontenjanlar dolmak üzere
          </div>
        </div>

        <div
          style={{
            maxWidth: 380,
            justifySelf: "end",
            width: "100%",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              padding: 20,
              background:
                "linear-gradient(180deg, rgba(13,22,36,0.88), rgba(10,16,28,0.92))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.28)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                fontSize: 11,
                color: "#aee8ff",
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Program Snapshot
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {[
                ["Süre", "6 Gün Açık Deniz"],
                ["Katılım", "Maksimum 4 kişi"],
                ["Rota", "Türkiye + Yunan Adaları"],
                ["Sertifika", "QR Doğrulanabilir"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      color: "rgba(226,232,240,0.60)",
                      fontWeight: 700,
                      marginBottom: 4,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      color: "#f8fafc",
                      fontWeight: 800,
                      fontSize: 15,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 14,
                padding: "10px 12px",
                borderRadius: 12,
                background: "rgba(248,113,113,0.08)",
                border: "1px solid rgba(248,113,113,0.16)",
                color: "#fca5a5",
                fontSize: 13,
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              Son 3 Kontenjan
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}