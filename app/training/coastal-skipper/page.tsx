"use client";
import Link from "next/link";

const highlights = [
  {
    title: "Kıyı Seyri",
    text: "Kıyı hattı boyunca güvenli rota kurma, yaklaşım planlama ve seyir disiplini.",
  },
  {
    title: "Liman Manevrası",
    text: "Marina giriş-çıkış, yanaşma, ayrılma ve kontrollü tekne yönetimi pratiği.",
  },
  {
    title: "Skipper Mantığı",
    text: "Ekip, hava, rota ve tekne durumunu birlikte okuyarak doğru karar alma alışkanlığı.",
  },
];

const programFlow = [
  ["1. Gün", "Karşılama, güvenlik brifingi, tekne düzeni ve temel ekip akışı."],
  ["2. Gün", "Temel yelken trimleri, dümen pratiği ve kıyı seyri mantığı."],
  ["3. Gün", "Liman yaklaşımı, marina manevrası ve halat yönetimi."],
  ["4. Gün", "Rota planlama, harita okuma ve kısa geçiş uygulamaları."],
  ["5. Gün", "Ekip koordinasyonu, skipper rolü ve gerçek senaryo çalışmaları."],
  ["6. Gün", "Bağımsız karar pratiği, rota revizyonu ve performans değerlendirmesi."],
];

const routeCards = [
  {
    title: "Bodrum Kıyı Hatları",
    text: "Kısa geçişler, güvenli yaklaşım ve kıyı seyri disiplininin oturması.",
  },
  {
    title: "Ada Yaklaşımı",
    text: "Rüzgar, akıntı ve liman yapısına göre karar alma pratiği.",
  },
  {
    title: "Marina Akışı",
    text: "Yoğun alanlarda kontrollü tekne yönetimi ve güvenli manevra disiplini.",
  },
];

const proofItems = [
  "“Bu programdan sonra liman manevralarında kendime çok daha fazla güvenmeye başladım.”",
  "“Rota kurarken artık sadece haritaya değil, şartlara da bakıyorum.”",
  "“En büyük fark, tekneyi kullanmanın ötesinde skipper gibi düşünmeyi öğrenmek oldu.”",
];

const pricingPlans = [
  {
    title: "Standart Katılım",
    badge: "Core",
    price: "€950",
    desc: "Programın tüm eğitim akışına tam katılım.",
    items: [
      "6 gün kıyı seyri eğitim akışı",
      "Teori + pratik uygulama",
      "Liman manevrası çalışmaları",
      "Program sonu değerlendirme",
    ],
    featured: false,
  },
  {
    title: "Early Bird",
    badge: "Önerilen",
    price: "€820",
    desc: "Erken kayıt dönemi için avantajlı katılım paketi.",
    items: [
      "Tüm standart içerik",
      "Öncelikli yer garantisi",
      "Sınırlı dönem avantajı",
      "Kontenjan dolmadan kayıt",
    ],
    featured: true,
  },
  {
    title: "Private Track",
    badge: "Özel",
    price: "Sorunuz",
    desc: "Kapalı grup veya daha kişiselleştirilmiş yapı için özel planlama.",
    items: [
      "Özel tarih planlama",
      "Kapalı grup seçeneği",
      "İhtiyaca göre yapılandırma",
      "Kurumsal / bireysel uyarlama",
    ],
    featured: false,
  },
];

const WA_GENERAL =
  "https://wa.me/905324873813?text=Merhaba%2C%20Coastal%20Skipper%20program%C4%B1%20i%C3%A7in%20bilgi%20alabilir%20miyim%3F";

const WA_PRICING =
  "https://wa.me/905324873813?text=Merhaba%2C%20Coastal%20Skipper%20program%C4%B1%20fiyat%20ve%20tarih%20bilgisi%20alabilir%20miyim%3F";

const WA_JOIN =
  "https://wa.me/905324873813?text=Merhaba%2C%20Coastal%20Skipper%20program%C4%B1na%20kat%C4%B1lmak%20istiyorum.%20M%C3%BCsaitlik%20durumu%20nedir%3F";

export default function CoastalSkipperPage() {
  return (
    <main
      style={{
        background: "#050b14",
        color: "#f8fafc",
      }}
    >
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 90px",
          background:
            "linear-gradient(180deg, #07111f 0%, #08131f 50%, #050b14 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/homepage/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.14,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(5,11,20,0.96) 0%, rgba(5,11,20,0.84) 45%, rgba(5,11,20,0.42) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -120,
            left: -80,
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(56,189,248,0.12)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
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
              Coastal Skipper Program
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(42px, 5vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                maxWidth: 760,
                textShadow: "0 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              Kıyı seyri
              <br />
              gerçekten yönetmeyi
              <br />
              öğren.
            </h1>

            <p
              style={{
                marginTop: 20,
                fontSize: 18,
                color: "rgba(226,232,240,0.86)",
                lineHeight: 1.75,
                maxWidth: 640,
              }}
            >
              Bu program, seni yalnızca tekne kullanan biri değil; kıyı
              seyri, marina manevrası ve ekip akışını birlikte taşıyabilen bir
              coastal skipper haline getirir.
            </p>

            <div
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "rgba(226,232,240,0.65)",
                fontWeight: 500,
                letterSpacing: 0.4,
              }}
            >
              Maksimum 4 kişi • Gerçek kıyı seyri pratiği • Doğrulanabilir
              sertifika
            </div>

            <div
              style={{
                marginTop: 16,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {[
                "Maksimum 4 kişi",
                "Kıyı seyri odaklı",
                "Liman manevrası eğitimi",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    borderRadius: 999,
                    background:
                      "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(56,189,248,0.04))",
                    border: "1px solid rgba(56,189,248,0.18)",
                    fontSize: 13,
                    color: "#7dd3fc",
                    fontWeight: 600,
                    letterSpacing: 0.3,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#38bdf8",
                      boxShadow: "0 0 6px rgba(56,189,248,0.6)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 10,
                fontSize: 12,
                color: "rgba(226,232,240,0.55)",
              }}
            >
              Temel seviye sonrası en doğru gelişim adımı
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "14px 22px",
                  borderRadius: 14,
                  background: "#38bdf8",
                  color: "#082032",
                  textDecoration: "none",
                  fontWeight: 800,
                  boxShadow: "0 14px 30px rgba(56,189,248,0.25)",
                }}
              >
                Yerini Ayır
              </a>

              <Link
                href="/certificates"
                style={{
                  padding: "14px 22px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Sertifika Yapısını Gör
              </Link>
            </div>

            <div
              style={{
                marginTop: 16,
                color: "rgba(226,232,240,0.68)",
                fontSize: 13,
              }}
            >
              Sınırlı kontenjan • Küçük grup • Bodrum çıkışlı
            </div>
          </div>

          <div
            style={{
              borderRadius: 24,
              padding: 22,
              background:
                "linear-gradient(180deg, rgba(8,15,30,0.88), rgba(5,10,20,0.92))",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.55), inset 0 0 25px rgba(56,189,248,0.08)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#7dd3fc",
                letterSpacing: 1.1,
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Program Snapshot
            </div>

            <div
              style={{
                display: "grid",
                gap: 12,
              }}
            >
              {[
                ["Süre", "6 gün yoğun eğitim akışı"],
                ["Yapı", "Teori + kıyı seyri pratiği"],
                ["Katılım", "Maksimum 4 kişi"],
                ["Odak", "Liman manevrası • rota • skipper mantığı"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.85), rgba(10,18,32,0.65))",
                    border: "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "#7dd3fc",
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#f8fafc",
                      fontWeight: 800,
                      lineHeight: 1.45,
                      textShadow: "0 0 8px rgba(56,189,248,0.15)",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 82px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {highlights.map((item) => (
            <div
              key={item.title}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
              style={{
                padding: 24,
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.70), rgba(15,23,42,0.52))",
                transition: "all 0.2s ease",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 800,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "rgba(226,232,240,0.74)",
                  lineHeight: 1.7,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          padding: "0 24px 90px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 26,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: "#7dd3fc",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              6 Gün Program Akışı
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Her gün,
              <br />
              kıyı skipper mantığını
              <br />
              biraz daha inşa eder.
            </h2>

            <p
              style={{
                marginTop: 18,
                maxWidth: 560,
                color: "rgba(226,232,240,0.78)",
                fontSize: 16,
                lineHeight: 1.75,
              }}
            >
              Bu akış, tekneyi sadece hareket ettirmeyi değil; kıyı seyri,
              marina yaklaşımı ve ekip akışını birlikte taşıyabilen bir skipper
              düşüncesi oluşturur.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gap: 12,
            }}
          >
            {programFlow.map(([day, text]) => (
              <div
                key={day}
                style={{
                  padding: 16,
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.74), rgba(15,23,42,0.50))",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "#7dd3fc",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  {day}
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "#f8fafc",
                    lineHeight: 1.6,
                  }}
                >
                  {text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 100px" }}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 40,
            alignItems: "center",
          }}
        >
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.5)",
            }}
          >
            <img
              src="/images/homepage/instructor.jpg"
              alt="Instructor"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: "#7dd3fc",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Instructor
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.08,
              }}
            >
              Bu eğitimi gerçekten
              <br />
              uygulayan biri verir.
            </h2>

            <p
              style={{
                marginTop: 18,
                fontSize: 16,
                lineHeight: 1.75,
                color: "rgba(226,232,240,0.82)",
                maxWidth: 520,
              }}
            >
              Eğitimler, kıyı seyri ve marina pratiğini gerçek koşullarda yaşayan
              eğitmenler tarafından verilir. Amaç sadece öğretmek değil; seni
              kontrollü ve güvenli skipper seviyesine taşımaktır.
            </p>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {[
                "Gerçek kıyı seyri tecrübesi",
                "Aktif kaptanlık yaklaşımı",
                "Birebir eğitim odağı",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "8px 14px",
                    borderRadius: 999,
                    background:
                      "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(56,189,248,0.04))",
                    border: "1px solid rgba(56,189,248,0.16)",
                    color: "#7dd3fc",
                    fontSize: 13,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 22,
                fontSize: 14,
                color: "rgba(226,232,240,0.6)",
              }}
            >
              — Erdinç Pulat
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 24px 96px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.2,
              color: "#7dd3fc",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Coastal Routes
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 4vw, 46px)",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              marginBottom: 22,
            }}
          >
            Kıyı seyri sadece kısa mesafe değildir.
            <br />
            Doğru karar ortamıdır.
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 20,
            }}
          >
            {routeCards.map((item) => (
              <div
                key={item.title}
                style={{
                  minHeight: 260,
                  borderRadius: 22,
                  padding: 24,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.80), rgba(15,23,42,0.58))",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.18)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 22,
                    fontWeight: 800,
                    lineHeight: 1.15,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 12,
                    color: "rgba(226,232,240,0.76)",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 24px 88px",
        }}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.2,
              color: "#7dd3fc",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Program Etkisi
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(30px, 4vw, 44px)",
              fontWeight: 900,
              lineHeight: 1.12,
            }}
          >
            Bu eğitim gerçekten fark yaratır.
          </h2>

          <p
            style={{
              marginTop: 16,
              color: "rgba(226,232,240,0.8)",
              lineHeight: 1.75,
              fontSize: 16,
            }}
          >
            Çünkü burada sadece bilgi verilmez; öğrenci marina, kıyı hattı ve
            skipper sorumluluğunu gerçek senaryolar içinde deneyimler.
          </p>

          <div
            style={{
              marginTop: 28,
              display: "grid",
              gap: 14,
              textAlign: "left",
            }}
          >
            {proofItems.map((item) => (
              <div
                key={item}
                style={{
                  padding: 18,
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.72), rgba(15,23,42,0.52))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#e2e8f0",
                  fontSize: 15,
                  lineHeight: 1.7,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {[
              "Gerçek kıyı seyri",
              "Maksimum 4 kişi",
              "Yoğun pratik",
              "Doğrulanabilir sertifika",
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: "10px 16px",
                  borderRadius: 999,
                  background:
                    "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(56,189,248,0.04))",
                  border: "1px solid rgba(56,189,248,0.16)",
                  color: "#7dd3fc",
                  fontSize: 14,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "0 24px 100px",
        }}
      >
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto 30px",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: "#7dd3fc",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Pricing & Packages
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 4vw, 46px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Doğru seviye, doğru yatırım.
            </h2>

            <p
              style={{
                marginTop: 16,
                color: "rgba(226,232,240,0.8)",
                fontSize: 16,
                lineHeight: 1.75,
              }}
            >
              Coastal programı sınırlı kontenjanla yürütülür. Küçük grup yapısı
              nedeniyle her dönem sınırlı sayıda katılımcı kabul edilir.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 22,
            }}
          >
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                style={{
                  borderRadius: 24,
                  padding: 26,
                  border: plan.featured
                    ? "1px solid rgba(56,189,248,0.32)"
                    : "1px solid rgba(255,255,255,0.10)",
                  background: plan.featured
                    ? "linear-gradient(180deg, rgba(18,40,66,0.92), rgba(12,24,42,0.76))"
                    : "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(15,23,42,0.64))",
                  boxShadow: plan.featured
                    ? "0 20px 50px rgba(56,189,248,0.14)"
                    : "0 20px 40px rgba(0,0,0,0.18)",
                  position: "relative",
                  overflow: "hidden",
                  transform: plan.featured ? "scale(1.03)" : "scale(1)",
                }}
              >
                {plan.featured && (
                  <div
                    style={{
                      position: "absolute",
                      top: 18,
                      right: 18,
                      padding: "6px 10px",
                      borderRadius: 999,
                      background: "rgba(56,189,248,0.14)",
                      border: "1px solid rgba(56,189,248,0.22)",
                      color: "#7dd3fc",
                      fontSize: 11,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 0.8,
                    }}
                  >
                    En Avantajlı
                  </div>
                )}

                <div
                  style={{
                    display: "inline-flex",
                    padding: "7px 12px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "#dbeafe",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: 0.8,
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {plan.badge}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: 24,
                    fontWeight: 800,
                    lineHeight: 1.15,
                  }}
                >
                  {plan.title}
                </h3>

                <div
                  style={{
                    marginTop: 14,
                    fontSize: 34,
                    fontWeight: 900,
                    color: plan.featured ? "#7dd3fc" : "#f8fafc",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {plan.price}
                </div>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "rgba(226,232,240,0.78)",
                    minHeight: 78,
                  }}
                >
                  {plan.desc}
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: 10,
                    marginTop: 14,
                  }}
                >
                  {plan.items.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        color: "#e2e8f0",
                        fontSize: 14,
                        lineHeight: 1.55,
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          background: plan.featured ? "#38bdf8" : "#22c55e",
                          marginTop: 8,
                          flexShrink: 0,
                          boxShadow: plan.featured
                            ? "0 0 8px rgba(56,189,248,0.5)"
                            : "0 0 8px rgba(34,197,94,0.45)",
                        }}
                      />
                      {item}
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 24 }}>
                  <a
                    href={WA_PRICING}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      padding: "14px 18px",
                      borderRadius: 14,
                      background: plan.featured
                        ? "#38bdf8"
                        : "rgba(255,255,255,0.06)",
                      color: plan.featured ? "#082032" : "#f8fafc",
                      textDecoration: "none",
                      fontWeight: 800,
                      border: plan.featured
                        ? "none"
                        : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    Bilgi Al
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "90px 24px 120px",
          textAlign: "center",
          background: "linear-gradient(180deg, #07111f 0%, #050b14 100%)",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.2,
              color: "#7dd3fc",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            Limited Capacity
          </div>

          <h2
            style={{
              fontSize: "clamp(34px, 4vw, 52px)",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.08,
            }}
          >
            Doğru temel ile
            <br />
            sonraki seviyeye hazırlan.
          </h2>

          <p
            style={{
              marginTop: 18,
              color: "rgba(226,232,240,0.82)",
              fontSize: 16,
              lineHeight: 1.75,
              maxWidth: 620,
              marginInline: "auto",
            }}
          >
            Coastal Skipper programı sınırlı kontenjanla açılır. Küçük grup
            yapısı ve yoğun uygulama nedeniyle yerler hızlı dolabilir.
          </p>

          <div
            style={{
              marginTop: 18,
              display: "inline-flex",
              padding: "10px 16px",
              borderRadius: 999,
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.22)",
              color: "#86efac",
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Early bird kontenjanı dönemsel olarak açılır
          </div>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href={WA_JOIN}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: "16px 28px",
                borderRadius: 14,
                background: "#38bdf8",
                color: "#082032",
                textDecoration: "none",
                fontWeight: 800,
                fontSize: 16,
                boxShadow: "0 14px 30px rgba(56,189,248,0.25)",
              }}
            >
              Eğitime Katıl
            </a>

            <Link
              href="/training"
              style={{
                padding: "16px 28px",
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#e2e8f0",
                textDecoration: "none",
                fontWeight: 700,
                background: "rgba(255,255,255,0.04)",
              }}
            >
              Tüm Programları Gör
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}