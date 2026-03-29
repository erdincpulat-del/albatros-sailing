"use client";

import Link from "next/link";

const coreBlocks = [
  {
    title: "Sextant nedir?",
    text: "Sextant, gök cismi ile ufuk arasındaki açıyı ölçerek mevki hesabına temel oluşturan klasik seyir aletidir. Özellikle açık deniz navigasyonunun tarihsel ve profesyonel omurgalarından biridir.",
  },
  {
    title: "Neden hâlâ önemlidir?",
    text: "Modern teknelerde GPS ve elektronik sistemler baskın olsa da sextant, denizcilikte yedek düşünme sistemini temsil eder. Elektroniğin bittiği yerde zihnin ve metodun devam etmesi gerektiğini öğretir.",
  },
  {
    title: "Asıl öğrettiği şey nedir?",
    text: "Sextant sadece bir alet değil, sistematik navigasyon düşüncesidir. Açı, zaman, gözlem ve hesap arasındaki ilişkiyi kurar.",
  },
  {
    title: "Kime değer katar?",
    text: "Sextant bilgisi özellikle açık deniz düşüncesi geliştirmek isteyen, profesyonel kaptanlık yaklaşımını derinleştirmek isteyen ve navigasyonu yüzeysel değil köklü öğrenmek isteyen kişiler için değerlidir.",
  },
];

const learningPoints = [
  "Ufuk çizgisi ile gök cismi arasındaki açıyı anlamak",
  "Gözlem zamanının neden kritik olduğunu kavramak",
  "Navigasyonun yalnızca ekrana bakmak olmadığını görmek",
  "Elektronik sistemler olmadan da düşünme disiplini geliştirmek",
];

const whyPremium = [
  "Sextant bilgisi seni ortalama kullanıcıdan ayırır",
  "Navigasyonun kök mantığını anlamanı sağlar",
  "Açık deniz düşüncesini güçlendirir",
  "Kaptanlıkta zihinsel derinlik ve disiplin kazandırır",
];

const misconceptions = [
  "Sextant sadece nostaljik bir objedir",
  "GPS varken sextant öğrenmek gereksizdir",
  "Bu bilgi sadece eski denizciler içindir",
  "Sextant öğrenmek yalnızca astronomi bilgisi gerektirir",
];

export default function SextantGuidePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        color: "#f8fafc",
      }}
    >
      <section
        style={{
          padding: "120px 24px 90px",
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        {/* HERO */}
        <div style={{ maxWidth: 840 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(217,188,119,0.08)",
              border: "1px solid rgba(217,188,119,0.18)",
              color: "#d9bc77",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Navigasyon • Sextant
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.03,
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            Sextant nedir?
            <br />
            Gerçek navigasyonun
            <br />
            derinlik katmanı.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 800,
            }}
          >
            Sextant, yalnızca eski bir denizcilik aleti değildir. O, navigasyonun
            temel mantığını; gözlem, zaman, açı ve hesap ilişkisini öğretir.
            Modern sistemlerin çağında bile sextant bilgisi, denizciyi yüzeysel
            kullanıcıdan ayıran zihinsel derinliği temsil eder.
          </p>

          <div style={{ marginTop: 40, maxWidth: 760 }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                marginBottom: 12,
              }}
            >
              Neden ayrı bir başlık olarak düşünülmelidir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Çünkü sextant sıradan bir navigasyon detayı değildir. Harita kullanımı,
              pusula, mevkii atma ve rota planlama seni güçlü yapar; sextant ise
              bu yapının derinliğini gösterir. Bu konu, denizciliği gerçekten
              kökten anlamak isteyenlerin alanıdır.
            </p>
          </div>
        </div>

        {/* CORE BLOCKS */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {coreBlocks.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 22,
                borderRadius: 20,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.90))",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(217,188,119,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 800,
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(226,232,240,0.75)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* LEARNING POINTS */}
        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Sextant sana gerçekte ne kazandırır?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {learningPoints.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e2e8f0",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    marginTop: 8,
                    flexShrink: 0,
                    background: "#d9bc77",
                    boxShadow: "0 0 8px rgba(217,188,119,0.45)",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* PREMIUM VALUE */}
        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            Neden premium bir konudur?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {whyPremium.map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e2e8f0",
                  fontSize: 15,
                  lineHeight: 1.65,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* MISCONCEPTIONS */}
        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            En sık yanlış anlaşılan noktalar
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {misconceptions.map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(226,232,240,0.82)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            marginTop: 80,
            padding: 30,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Navigasyonda derinleşmek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 780,
              marginInline: "auto",
            }}
          >
            Harita, rota planlama, mevkii atma ve açık deniz düşüncesi bir araya
            geldiğinde sextant bilgisi çok daha anlamlı hale gelir. Bu seviyeye
            geçmek, gerçek kaptanlık zihnini büyütür.
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
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              Offshore Eğitimi
            </Link>

            <Link
              href="/guide/rota-planlama"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Rota Planlamaya dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}