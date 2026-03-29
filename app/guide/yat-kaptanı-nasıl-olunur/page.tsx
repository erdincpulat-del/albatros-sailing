"use client";

import Link from "next/link";

const steps = [
  {
    title: "Temel denizcilik bilgisi",
    text: "Terimler, yönler, tekne sistemleri ve deniz mantığı olmadan kaptanlık kurulmaz.",
  },
  {
    title: "Navigasyon ve seyir",
    text: "Harita, rota planlama, pusula, akıntı ve mevkii atma kaptanın karar araçlarıdır.",
  },
  {
    title: "COLREG ve trafik",
    text: "Çatışmayı önleme kuralları, gece fenerleri ve trafik sistemi doğru yorumlanmalıdır.",
  },
  {
    title: "Manevra ve tekne hakimiyeti",
    text: "Marina, yanaşma, ayrılma ve dar alanda tekne yönetimi gerçek pratik ister.",
  },
  {
    title: "Acil durum yönetimi",
    text: "MOB, yangın, VHF, hipotermi ve tahliye konuları refleks haline gelmelidir.",
  },
  {
    title: "Gerçek deniz tecrübesi",
    text: "Kaptanlık, denizde sorumluluk almakla gelişir. Teori sadece başlangıçtır.",
  },
];

const truths = [
  "Kaptanlık belge değil, sorumluluktur",
  "Tekne kullanmak kaptanlık değildir",
  "En kritik fark doğru karar verme yeteneğidir",
  "Deniz hata affetmez",
];

const skills = [
  "Durumu okumak",
  "Karar vermek",
  "Ekibi yönetmek",
  "Riski azaltmak",
  "Soğukkanlı kalmak",
];

export default function CaptainPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 30%), #020617",
        color: "#f8fafc",
      }}
    >
      <section
        style={{
          padding: "120px 24px 100px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <div style={{ maxWidth: 800 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              color: "#67d3ff",
              letterSpacing: 1,
              marginBottom: 16,
            }}
          >
            YAT KAPTANLIĞI
          </div>

          <h1
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Yat kaptanı
            <br />
            nasıl olunur?
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              lineHeight: 1.8,
              color: "rgba(226,232,240,0.8)",
            }}
          >
            Kaptanlık bir belge değil, bir karar verme sistemidir.
            Tekneyi değil, durumu yönetebilen kişi kaptandır.
          </p>
        </div>

        {/* TRUTH BLOCK */}
        <div style={{ marginTop: 50 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Gerçek şu:
          </h2>

          <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
            {truths.map((t) => (
              <div
                key={t}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontWeight: 700,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* ROADMAP */}
        <div style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Kaptanlık yolu
          </h2>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
              gap: 20,
            }}
          >
            {steps.map((s, i) => (
              <div
                key={s.title}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#67d3ff",
                    fontWeight: 800,
                    marginBottom: 6,
                  }}
                >
                  ADIM {i + 1}
                </div>

                <h3 style={{ margin: 0, fontSize: 18 }}>
                  {s.title}
                </h3>

                <p
                  style={{
                    marginTop: 8,
                    fontSize: 14,
                    color: "rgba(226,232,240,0.75)",
                  }}
                >
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SKILLS */}
        <div style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Kaptanı kaptan yapan şey
          </h2>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {skills.map((s) => (
              <div
                key={s}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontWeight: 700,
                }}
              >
                {s}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 80,
            padding: 30,
            borderRadius: 20,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Gerçek kaptan olmak ister misin?
          </h2>

          <p
            style={{
              marginTop: 12,
              color: "rgba(226,232,240,0.8)",
            }}
          >
            Bu sistem denizde kurulur. Eğitim bunun başlangıcıdır.
          </p>

          <div style={{ marginTop: 20 }}>
            <Link
              href="/training/offshore-skipper"
              style={{
                padding: "14px 24px",
                borderRadius: 12,
                background: "#67d3ff",
                color: "#000",
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Eğitime Katıl
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}