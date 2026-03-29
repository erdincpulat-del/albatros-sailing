"use client";

import Link from "next/link";
import MarinaManeuverAnimation from "@/components/guide/MarinaManeuverAnimation";

const coreBlocks = [
  {
    title: "Giriş ve çıkış planı",
    text: "Marina manevrası başlamadan önce rüzgâr, akıntı, tekne boyu, dönüş alanı ve bağlanılacak yer net düşünülmelidir. Marina içinde son anda karar verilmez.",
  },
  {
    title: "Düşük hız disiplini",
    text: "Marina içinde ustalık hızda değil, düşük hız kontrolündedir. Teknenin momentumunu yönetmek, fazla gaz vermemek ve komutlar arasında tekneyi okumak gerekir.",
  },
  {
    title: "Rüzgâr ve akıntı etkisi",
    text: "Özellikle dar marina alanlarında rüzgâr küçük tekneleri bile ciddi şekilde sürükleyebilir. Akıntı ve borda etkisi küçümsendiğinde manevra bozulur.",
  },
  {
    title: "Ekip hazırlığı",
    text: "Usturmaçalar, halatlar, görev paylaşımı ve iletişim marina girişi başlamadan hazır olmalıdır. Son anda halat aramak en klasik hatalardan biridir.",
  },
];

const keySteps = [
  "Marina yaklaşmasından önce bağlanma planını netleştir",
  "Usturmaça ve halatları manevra başlamadan hazırla",
  "Mümkün olan en düşük ama yönetilebilir hızla ilerle",
  "Rüzgâr ve akıntının tekneyi nereye taşıyacağını önceden düşün",
  "Tek komut yerine komut-sonuç ilişkisinde sabırlı ol",
  "Gerekirse pas geç; kötü manevrayı zorla bitirmeye çalışma",
];

const commonMistakes = [
  "Marinaya hızlı girmek",
  "Rüzgâr etkisini son anda fark etmek",
  "Halat ve usturmaçayı önceden hazırlamamak",
  "Teknenin otomobil gibi döneceğini sanmak",
  "Panikle art arda komut verip tekneyi okumamak",
  "Pas geçmesi gerekirken inatla manevrayı sürdürmek",
];

const realSituations = [
  {
    title: "Rüzgârlı marina girişi",
    text: "En büyük fark, teknenin nereye gitmesini istediğin değil, rüzgârın onu nereye taşımak istediğini önceden okuyabilmektir.",
  },
  {
    title: "Stern-to yaklaşma",
    text: "Kıçtan bağlanma sırasında hız, açı ve halat zamanlaması birlikte çalışır. Birindeki hata tüm yaklaşmayı bozar.",
  },
  {
    title: "Dar alanda çıkış",
    text: "Marinadan çıkarken çoğu hata aceleden doğar. Önce çıkış hattı, sonra dümen ve gaz planı netleşmelidir.",
  },
];

export default function MarinaGuidePage() {
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
            Manevra • Marina Giriş Çıkış Usulleri
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
            Marina giriş çıkış
            <br />
            usulleri nasıl uygulanır?
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
            Marina manevraları, açık denizdeki hızdan çok daha fazla hassasiyet ister.
            Dar alan, rüzgâr, akıntı, halat düzeni ve düşük hız kontrolü aynı anda
            çalıştığında giriş ve çıkış güvenli hale gelir.
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
              Marina içinde başarı, güçlü komut vermekten değil; doğru zamanda az,
              net ve kontrollü komut verebilmekten gelir. Çoğu hata, tekneyi son
              anda kurtarmaya çalışma anında büyür.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 40 }}>
          <MarinaManeuverAnimation />
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
            Doğru uygulama akışı
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {keySteps.map((item) => (
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
            Gerçek hayatta nerede zorlaşır?
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
    Artık hazırsın
  </h3>

  <p
    style={{
      marginTop: 10,
      color: "rgba(226,232,240,0.78)",
      fontSize: 14,
      lineHeight: 1.7,
    }}
  >
    Bu noktaya kadar geldiysen artık sadece bilgi değil, gerçek deniz tecrübesi
    arıyorsun. Kaptanlık; bu kararları gerçek şartlarda vermekle gelişir.
  </p>

  <Link
    href="/training/offshore-skipper"
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
    Offshore eğitime katıl →
  </Link>
</section>
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
            Peki durmayı biliyor musun?
          </h3>

          <p
            style={{
              marginTop: 10,
              color: "rgba(226,232,240,0.78)",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            Marina manevrası kadar önemli bir konu daha var: doğru ve güvenli
            şekilde demirlemek. Asıl güven, tekneyi yalnızca bir yere getirmek değil,
            orada güvenle tutabilmektir.
          </p>

          <Link
            href="/guide/demirleme-ve-demir-alma"
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
            Demirlemeyi öğren →
          </Link>
        </section>

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
            Marina manevralarında gerçekten rahat olmak ister misin?
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
            Marina giriş çıkış, yanaşma, ayrılma ve düşük hız kontrolü ancak
            gerçek eğitim senaryolarında güvene dönüşür.
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