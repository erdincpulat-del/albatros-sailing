"use client";

import Link from "next/link";

const controlBlocks = [
  {
    title: "Tekneyi hissetmek",
    text: "Tekne hakimiyeti, sadece dümeni çevirmek değildir. Teknenin rüzgâra, devre, gaz komutuna, dalgaya ve akıntıya nasıl tepki verdiğini hissetmektir.",
  },
  {
    title: "Momentum ve gecikme",
    text: "Tekneler otomobil gibi anında tepki vermez. Özellikle düşük hızda, ağır deplasmanda ve dar alanda komut ile sonuç arasında zaman farkı vardır.",
  },
  {
    title: "Rüzgâr etkisi",
    text: "Üst yapı, borda yüksekliği ve teknenin formu rüzgâr altında ciddi sapmalara neden olabilir. Özellikle marina içinde rüzgâr etkisini küçümsemek büyük hatadır.",
  },
  {
    title: "Gaz ve dümen ilişkisi",
    text: "Dümen tek başına yön vermez; su akışı ve itki gerekir. Bu nedenle gaz, devir ve dümen birlikte düşünülmelidir.",
  },
];

const keySkills = [
  "Düşük hızda yön kontrolü",
  "Dar alanda sakin manevra",
  "Rüzgâr altında tekneyi dengede tutmak",
  "İleri-geri vites geçişlerini doğru zamanlamak",
  "Teknenin kıç atmasını ve baş davranışını öngörmek",
  "Komut vermeden önce sonucu düşünmek",
];

const commonMistakes = [
  "Teknenin otomobil gibi davranacağını sanmak",
  "Rüzgâr etkisini geç fark etmek",
  "Gazı fazla veya gereksiz sert kullanmak",
  "Komutları arka arkaya verip tekneyi okumamak",
  "Dar alanda panikle hızlı karar değiştirmek",
  "Teknenin dönme yarıçapını küçümsemek",
];

const realSituations = [
  {
    title: "Marina içinde düşük hız kontrolü",
    text: "Asıl ustalık yüksek süratte değil, düşük süratte tekneyi kontrollü ve sakin taşıyabilmektir.",
  },
  {
    title: "Rüzgârlı yanaşma",
    text: "Yanaşma planı yapılmadan tekne son anda kurtarılmaz. Yaklaşma açısı, hız ve rüzgâr etkisi daha baştan yönetilmelidir.",
  },
  {
    title: "Geri manevra",
    text: "Birçok teknede geri viteste dümen tepkisi ve kıçın davranışı farklıdır. Bu bilgi pratiğe dayalı öğrenilir.",
  },
];

export default function BoatControlPage() {
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
            Manevra • Tekne Hakimiyeti
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
            Tekne hakimiyeti
            <br />
            nasıl gelişir?
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
            Gerçek denizcilikte tekne hakimiyeti, yalnızca tekneyi hareket ettirmek
            değil; teknenin ne yapacağını önceden okuyabilmektir. Rüzgâr, momentum,
            düşük hız, kıç davranışı ve dar alan kontrolü bir araya geldiğinde
            kaptanlık refleksi oluşur.
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
              En kritik gerçek nedir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Tekne hakimiyeti, güç değil zamanlama işidir. Çoğu hata, yanlış
              yönde dümen vermekten değil; doğru komutu yanlış anda vermekten
              doğar.
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
          {controlBlocks.map((item) => (
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

        {/* KEY SKILLS */}
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
            Tekne hakimiyetinin temel parçaları
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {keySkills.map((item) => (
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
                  textAlign: "center",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* REAL SITUATIONS */}
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

        {/* COMMON MISTAKES */}
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
  <h3 style={{ fontSize: 22, fontWeight: 900 }}>
    Gerçek test: dar alan
  </h3>

  <p style={{ marginTop: 10, color: "rgba(226,232,240,0.78)" }}>
    Tekne hakimiyeti açık denizde değil, marina içinde ortaya çıkar.
    Hata payı küçülür, kontrol gerçek anlamda test edilir.
  </p>

  <Link
    href="/guide/marina-giris-cikis-usulleri"
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
    Marina manevrasına geç →
  </Link>
</section>
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
            Tekne hakimiyetini gerçek denizde geliştirmek ister misin?
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
            Marina manevraları, düşük hız kontrolü, rüzgâr altında yaklaşma ve
            dar alanda karar verme becerisi ancak gerçek eğitim senaryolarında
            yerli yerine oturur.
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
              href="/guide"
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
              Rehbere geri dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}