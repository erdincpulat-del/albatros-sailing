"use client";

import Link from "next/link";

const coreRules = [
  {
    title: "Gözcülük (Rule 5)",
    text: "Denizde güvenlik gözle başlar ama sadece gözle bitmez. Kulak, AIS, radar ve genel farkındalık birlikte çalışır.",
  },
  {
    title: "Güvenli hız (Rule 6)",
    text: "Hız, teknenin değil durumun karar verdiği bir şeydir. Görüş, trafik ve manevra kabiliyeti hızını belirler.",
  },
  {
    title: "Çatışma riski (Rule 7)",
    text: "Kerteriz değişmiyorsa tehlike vardır. Bu en basit ama en çok kaçırılan gerçektir.",
  },
  {
    title: "Erken ve net manevra (Rule 8)",
    text: "Geç yapılan doğru manevra, yanlış manevradır. Denizde karar erken ve net verilmelidir.",
  },
];

const mistakes = [
  "Diğer teknenin manevra yapacağını varsaymak",
  "Kerteriz değişimini takip etmemek",
  "AIS'e güvenip görsel teyit almamak",
  "Kararsız kalıp son ana kadar beklemek",
];

const relatedTopics = [
  {
    title: "TSS nedir?",
    desc: "Yoğun trafik alanlarında deniz trafiği nasıl düzenlenir?",
    href: "/guide/tss-nedir",
  },
  {
    title: "AIS ve VTS nedir?",
    desc: "Elektronik trafik bilgisi ve kıyı trafik hizmetleri mantığı",
    href: "/guide/ais-ve-vts-nedir",
  },
  {
    title: "Gece seyri fenerleri",
    desc: "Gece ışıklarını okuyup hedef davranışını doğru yorumlama",
    href: "/guide/colreg-nedir",
  },
];

export default function CollisionAvoidancePage() {
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
          padding: "120px 24px 90px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 760 }}>
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
            COLREG • GERÇEK DENİZ
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: 900,
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            Denizde
            <br />
            çatışmayı önlemek
          </h1>

          <p
            style={{
              marginTop: 20,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
            }}
          >
            Denizde çarpışmaların büyük kısmı bilgi eksikliğinden değil, yanlış
            yorum ve geç karar vermekten kaynaklanır. COLREG bu hataları
            önlemek için vardır.
          </p>
        </div>

        <div style={{ marginTop: 40, maxWidth: 720 }}>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.9,
              color: "rgba(226,232,240,0.82)",
            }}
          >
            Bu sistem sadece kurallardan oluşmaz. Aslında dört şeydir:
          </p>

          <ul
            style={{
              marginTop: 12,
              paddingLeft: 20,
              lineHeight: 1.8,
              color: "rgba(226,232,240,0.75)",
            }}
          >
            <li>Durumu erken fark etmek</li>
            <li>Riski doğru okumak</li>
            <li>Kararsız kalmamak</li>
            <li>Net aksiyon almak</li>
          </ul>
        </div>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {coreRules.map((rule) => (
            <div
              key={rule.title}
              style={{
                padding: 22,
                borderRadius: 20,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.9), rgba(10,15,24,0.9))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                {rule.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.6,
                  color: "rgba(226,232,240,0.75)",
                }}
              >
                {rule.text}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 70, maxWidth: 720 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900 }}>Gerçek senaryo</h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
            }}
          >
            İki tekne yaklaşır. Her iki taraf da diğerinin manevra yapmasını
            bekler. Kimse erken karar almaz. Son anda yapılan sert manevra artık
            sadece çarpışmayı yumuşatır, önlemez.
          </p>
        </div>

        <div style={{ marginTop: 50 }}>
          <h3 style={{ fontSize: 20, fontWeight: 900 }}>
            Bu konuyu tamamlayan başlıklar
          </h3>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 14,
            }}
          >
            {relatedTopics.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    padding: 18,
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    height: "100%",
                  }}
                >
                  <div
                    style={{
                      color: "#f8fafc",
                      fontSize: 16,
                      fontWeight: 800,
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      marginTop: 6,
                      color: "rgba(226,232,240,0.74)",
                      fontSize: 13,
                      lineHeight: 1.6,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <h3 style={{ fontSize: 20, fontWeight: 900 }}>
            En sık yapılan hatalar
          </h3>

          <ul
            style={{
              marginTop: 12,
              paddingLeft: 20,
              lineHeight: 1.8,
              color: "rgba(226,232,240,0.75)",
            }}
          >
            {mistakes.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </div>

        <section
          style={{
            marginTop: 80,
            padding: 26,
            borderRadius: 22,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: 22,
              fontWeight: 900,
            }}
          >
            Kuralları biliyorsun… uygulayabiliyor musun?
          </h3>

          <p
            style={{
              marginTop: 10,
              color: "rgba(226,232,240,0.78)",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            Trafik kurallarını bilmek yeterli değildir. Tekneyi gerçekten
            kontrol edemiyorsan doğru kararı uygulayamazsın.
          </p>

          <Link
            href="/guide/tekne-hakimiyeti"
            style={{
              display: "inline-block",
              marginTop: 16,
              padding: "12px 18px",
              borderRadius: 12,
              background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
              color: "#04121c",
              fontWeight: 800,
              textDecoration: "none",
            }}
          >
            Tekne hakimiyetine geç →
          </Link>
        </section>

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
            Bu kararları denizde vermek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Bu refleks kitapla değil, denizde gelişir.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/training/offshore-skipper"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              Offshore Eğitime Katıl
            </Link>

            <Link
              href="/guide"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f8fafc",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Rehbere geri dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}