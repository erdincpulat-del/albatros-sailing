"use client";

import Link from "next/link";

const posts = [
  {
    title: "Açık deniz eğitimi",
    text: "Gerçek rota, gerçek ekip, gerçek karar anları.",
  },
  {
    title: "Manevra pratiği",
    text: "Kontrollü öğrenme, tekrar ve güven kazanımı.",
  },
  {
    title: "Bodrum çıkışlı programlar",
    text: "Ege ve açık deniz odağında premium eğitim akışı.",
  },
];

export default function InstagramProof() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(180deg, #050b14 0%, #07111f 50%, #050b14 100%)",
        color: "#f8fafc",
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
            maxWidth: 760,
            marginBottom: 34,
          }}
        >
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
            Social Proof
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 900,
            }}
          >
            Eğitimleri sadece anlatmıyoruz.
            <br />
            Yaşıyoruz.
          </h2>

          <p
            style={{
              margin: "18px 0 0",
              color: "rgba(226,232,240,0.82)",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 700,
            }}
          >
            Albatros Sailing’in ritmini, deniz üzerindeki gerçek anları ve eğitim
            kültürünü sosyal medyada da görebilirsin.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
          }}
        >
          {posts.map((post) => (
            <div
              key={post.title}
              style={{
                borderRadius: 24,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.10)",
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(15,23,42,0.64))",
                boxShadow: "0 20px 40px rgba(0,0,0,0.22)",
              }}
            >
              <div
                style={{
                  height: 260,
                  background:
                    "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(15,23,42,0.30))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(226,232,240,0.50)",
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Instagram Görsel Alanı
              </div>

              <div
                style={{
                  padding: 20,
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 20,
                    fontWeight: 800,
                  }}
                >
                  {post.title}
                </h3>

                <p
                  style={{
                    margin: "10px 0 0",
                    color: "rgba(226,232,240,0.78)",
                    lineHeight: 1.7,
                    fontSize: 14,
                  }}
                >
                  {post.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Link
            href="https://instagram.com/"
            target="_blank"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 230,
              padding: "14px 20px",
              borderRadius: 14,
              background: "#38bdf8",
              color: "#082032",
              textDecoration: "none",
              fontWeight: 800,
              boxShadow: "0 14px 30px rgba(56,189,248,0.24)",
            }}
          >
            Instagram’da İncele
          </Link>
        </div>
      </div>
    </section>
  );
}