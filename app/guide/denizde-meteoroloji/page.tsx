"use client";

import Link from "next/link";

const coreBlocks = [
  {
    title: "Meteoroloji neden kritiktir?",
    text: "Denizde hava yalnızca konforu değil, güvenliği, rota kararını, hızını, manevranı ve geceye kalıp kalmayacağını belirler. Kötü hava okuması, doğru planı bile bozar.",
  },
  {
    title: "Rüzgârı okumak",
    text: "Rüzgâr yönü ve şiddeti tek başına yeterli değildir. Süreklilik, dönüş ihtimali, lokal etkiler ve coğrafyanın rüzgârı nasıl sıkıştırdığı da birlikte düşünülmelidir.",
  },
  {
    title: "Dalga ve deniz durumu",
    text: "Denizde tehlike çoğu zaman sadece rüzgâr değildir. Dalgaların yönü, periyodu ve tekneye geliş açısı rotayı ve konforu ciddi şekilde etkiler.",
  },
  {
    title: "Karar verme",
    text: "Meteoroloji bilgisi, havayı tahmin etmekten çok havaya göre doğru karar verebilmektir. Bazen devam etmek, bazen beklemek, bazen de rotayı değiştirmek gerekir.",
  },
];

const weatherSignals = [
  "Basınç düşüşü ve ani hava bozulma işaretleri",
  "Bulut yapılarından kısa vadeli yorum çıkarma",
  "Lokal rüzgâr hızlanmaları ve kıyı etkileri",
  "Cephe geçişi öncesi ve sonrası davranış farkı",
  "Gün içi termik değişimlerin seyire etkisi",
];

const commonMistakes = [
  "Sadece uygulamadaki rüzgâr rakamına bakıp karar vermek",
  "Dalga yönünü ve periyodunu ihmal etmek",
  "Rüzgâr dönüş ihtimalini hesaba katmamak",
  "Kıyı ve ada etkilerini küçümsemek",
  "Hava bozarken geri dönüş kararını geciktirmek",
];

const realSituations = [
  {
    title: "Açık deniz geçişi",
    text: "Açık denizde küçük hava değişimi bile rota, vardiya düzeni ve varış zamanını ciddi şekilde etkileyebilir.",
  },
  {
    title: "Ada geçişleri",
    text: "Ada aralarında rüzgâr yönü aynı kalsa bile şiddet aniden değişebilir. Hızlanma koridorları ve türbülans alanları iyi okunmalıdır.",
  },
  {
    title: "Geceye kalma riski",
    text: "Hava kötüleştiğinde hesaplanan varış saatinin sarkması, gece yaklaşmasını ve güvenlik riskini büyütebilir.",
  },
];

export default function MarineMeteorologyPage() {
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
        <div style={{ maxWidth: 820 }}>
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
            Seyir • Deniz Meteorolojisi
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
            Denizde meteoroloji
            <br />
            nasıl okunur?
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
            Denizde hava bilgisi, uygulamada görülen birkaç sayıdan ibaret değildir.
            Gerçek meteoroloji; rüzgârı, dalgayı, bulutu, basıncı ve rotaya olan
            etkisini birlikte okuyabilmektir. Güvenli seyir, çoğu zaman doğru hava
            yorumuyla başlar.
          </p>

          <div
            style={{
              marginTop: 24,
              padding: "18px 20px",
              borderRadius: 18,
              background: "rgba(103,211,255,0.05)",
              border: "1px solid rgba(103,211,255,0.15)",
              fontSize: 14,
              lineHeight: 1.7,
              color: "#cbd5f5",
              fontWeight: 600,
              maxWidth: 720,
            }}
          >
            Bu sayfa tek başına bir konu değildir. Navigasyon, rota planlama ve
            güvenlik ile birlikte çalışır. Albatros Sailing eğitimlerinde
            meteoroloji, karar sisteminin merkezindedir.
          </div>

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
              En önemli nokta nedir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Meteoroloji bilmek, havayı seyretmek değil; havaya göre karar
              verebilmektir. Bazen çıkmamak en iyi seamanship kararidir. Bazen
              daha erken hareket etmek, bazen alternatif rotaya dönmek gerekir.
            </p>
          </div>
        </div>

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
                  "0 20px 40px rgba(66,189,248,0.12)";
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
            Kaptanın baktığı temel işaretler
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {weatherSignals.map((item) => (
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
                    background: "#67d3ff",
                    boxShadow: "0 0 8px rgba(103,211,255,0.45)",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

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
            Gerçek denizde nerede fark yaratır?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {realSituations.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 18,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    color: "rgba(226,232,240,0.78)",
                    fontSize: 14,
                    lineHeight: 1.68,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            padding: "22px 20px",
            borderRadius: 18,
            background: "rgba(66,189,248,0.05)",
            border: "1px solid rgba(66,189,248,0.15)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#67d3ff",
              fontWeight: 800,
              marginBottom: 8,
            }}
          >
            REAL ROUTE CONNECTION
          </div>

          <p
            style={{
              margin: 0,
              color: "rgba(226,232,240,0.8)",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            Bodrum – İstanbul gibi açık deniz ve yoğun trafik içeren rotalarda,
            meteoroloji yalnızca hava değil; zamanlama, rota seçimi ve güvenlik
            kararlarının temelidir.
          </p>
        </div>
                <div style={{ marginTop: 70 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            En sık yapılan hatalar
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {commonMistakes.map((item) => (
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
            Peki denizde yalnız değilsen?
          </h3>

          <p
            style={{
              marginTop: 10,
              color: "rgba(226,232,240,0.78)",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            Hava ne olursa olsun, diğer teknelerle nasıl davranacağını bilmeden
            güvenli seyir mümkün değildir.
          </p>

          <Link
            href="/guide/denizde-catisma-onleme"
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
            COLREG öğren →
          </Link>
        </section>

        {/* 🔥 REAL CAPTAIN DIFFERENCE */}
        <div
          style={{
            marginTop: 60,
            padding: "26px 22px",
            borderRadius: 22,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.9), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#67d3ff",
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            REAL CAPTAIN DIFFERENCE
          </div>

          <h3 style={{ margin: 0, fontSize: 22, fontWeight: 900 }}>
            Bu bilgiyi bilmek ile uygulamak arasında fark vardır.
          </h3>

          <p
            style={{
              marginTop: 12,
              color: "rgba(226,232,240,0.78)",
              fontSize: 15,
              lineHeight: 1.7,
            }}
          >
            Meteoroloji bilgisi kitapta öğrenilir. Ama gerçek kaptanlık, bu bilgiyi
            doğru zamanda doğru karar haline getirebilmektir.
          </p>
        </div>

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
            Hava okumayı gerçek denizde geliştirmek ister misin?
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
            Rüzgâr, dalga, rota ve karar verme ilişkisi ancak gerçek seyir
            senaryolarında tam anlamıyla oturur.
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
              Rota planlamaya dön
            </Link>
          </div>
        </div>

      </section>
    </main>
  );
}