"use client";

import Link from "next/link";

const tssBasics = [
  {
    title: "TSS nedir?",
    text: "Traffic Separation Scheme (TSS), yoğun gemi trafiğinin düzenli ve güvenli şekilde akmasını sağlamak için oluşturulmuş deniz otoyollarıdır.",
  },
  {
    title: "Neden vardır?",
    text: "Farklı hız ve boyuttaki gemilerin düzensiz hareket etmesini engelleyerek çarpışma riskini azaltmak için kullanılır.",
  },
  {
    title: "Nasıl çalışır?",
    text: "Trafik belirli şeritlere ayrılır. Her gemi kendi yönüne uygun şeritte ilerler ve karşı trafikle kesişme minimize edilir.",
  },
];

const rules = [
  "Trafik şeritleri yönüne uygun seyir yapılır",
  "Şeritler mümkün olduğunca dik açıyla geçilir",
  "Trafik akışı gereksiz şekilde engellenmez",
  "Küçük tekneler büyük gemilerin manevra alanını hesaba katmalıdır",
];

const realSituations = [
  {
    title: "İstanbul Boğazı geçişi",
    text: "Dar su, güçlü akıntı ve yoğun trafik birleştiğinde karar hatası toleransı sıfıra yaklaşır.",
  },
  {
    title: "Ege geçiş hatları",
    text: "Adalar arası geçişlerde ticari trafik ile yelkenli teknelerin etkileşimi doğru yönetilmelidir.",
  },
  {
    title: "Gece TSS seyri",
    text: "Gece fenerleri ve AIS birlikte okunmazsa yanlış değerlendirme riski ciddi şekilde artar.",
  },
];

const mistakes = [
  "Büyük geminin hızını yanlış tahmin etmek",
  "AIS’e bakıp görsel teyidi ihmal etmek",
  "Geçiş açısını yanlış seçmek",
  "Kararsız kalmak ve son anda manevra yapmak",
];

export default function TSSPage() {
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
            NAVIGATION • TSS
          </div>

          <h1
            style={{
              fontSize: "clamp(42px,5vw,72px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            TSS nedir?
            <br />
            Denizde trafik nasıl yönetilir?
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: 18,
              lineHeight: 1.8,
              color: "rgba(226,232,240,0.8)",
            }}
          >
            Denizde trafik, karadaki gibi rastgele akmaz.
            TSS sistemleri, gemilerin güvenli ve düzenli hareket etmesini sağlar.
          </p>
        </div>

        {/* BASICS */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: 20,
          }}
        >
          {tssBasics.map((b) => (
            <div
              key={b.title}
              style={{
                padding: 20,
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3 style={{ margin: 0 }}>{b.title}</h3>
              <p style={{ marginTop: 8, fontSize: 14 }}>
                {b.text}
              </p>
            </div>
          ))}
        </div>

        {/* RULES */}
        <div style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Temel kurallar
          </h2>

          <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
            {rules.map((r) => (
              <div
                key={r}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontWeight: 700,
                }}
              >
                {r}
              </div>
            ))}
          </div>
        </div>

        {/* REAL */}
        <div style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            Gerçek deniz senaryoları
          </h2>

          <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
            {realSituations.map((s) => (
              <div
                key={s.title}
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <strong>{s.title}</strong>
                <p style={{ marginTop: 6, fontSize: 14 }}>
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* MISTAKES */}
        <div style={{ marginTop: 70 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900 }}>
            En kritik hatalar
          </h2>

          <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
            {mistakes.map((m) => (
              <div
                key={m}
                style={{
                  padding: 14,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  fontWeight: 700,
                }}
              >
                {m}
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
            Trafiği denizde okumak ister misin?
          </h2>

          <p style={{ marginTop: 12 }}>
            Bu sistem kitapta değil, denizde öğrenilir.
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