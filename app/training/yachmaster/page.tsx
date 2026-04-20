"use client";
import Link from "next/link";

const highlights = [
  {
    title: "İleri Seviye Liderlik",
    text: "Tekneyi kullanmanın ötesinde, ekip, rota ve risk yönetimini birlikte taşıyan kaptan zihniyeti.",
  },
  {
    title: "Gerçek Skipper Kararları",
    text: "Hava, trafik, zamanlama ve ekip durumunu birlikte okuyarak doğru karar verme pratiği.",
  },
  {
    title: "Yüksek Sorumluluk",
    text: "Yachtmaster seviyesi; özgüven değil, kontrollü otorite ve tutarlı karar üretme seviyesidir.",
  },
];

const programFlow = [
  ["1. Gün", "Karşılama, seviye kalibrasyonu, tekne düzeni ve skipper beklentilerinin netleştirilmesi."],
  ["2. Gün", "İleri rota planlama, seyir disiplini ve kaptanlık sorumluluğu altında ekip akışı."],
  ["3. Gün", "Manevra standardı, dar alan kararı, yaklaşım ve ayrılma senaryoları."],
  ["4. Gün", "Gece seyri, vardiya kalitesi, dikkat yönetimi ve operasyonel disiplin."],
  ["5. Gün", "Uzun rota, hava değerlendirmesi, revizyon ve skipper karar baskısı."],
  ["6. Gün", "Bağımsız komuta pratiği, ekip koordinasyonu ve senaryo tabanlı liderlik."],
  ["7. Gün", "Final uygulama, performans ölçümü ve sertifikasyon değerlendirmesi."],
];

const routeCards = [
  {
    title: "Bodrum → Kalimnos → Leros",
    text: "Çoklu geçiş, sınır ötesi planlama ve skipper temposunu taşıma pratiği.",
  },
  {
    title: "Bodrum → Patmos",
    text: "Daha uzun rota kurgusu, dikkat yönetimi ve dayanıklılık gerektiren karar yapısı.",
  },
  {
    title: "Bodrum → Güney Ege Hatları",
    text: "Değişken şartlarda rota, zaman ve ekip dengesini koruma pratiği.",
  },
];

const proofItems = [
  "“Yachtmaster seviyesinin farkı burada anlaşılıyor. Artık tekneyi kullanmaktan çok, operasyonu yönetmeye başladım.”",
  "“Bu eğitim bana daha sert koşullarda bile sakin kalmayı ve doğru sırayla düşünmeyi öğretti.”",
  "“En büyük kazanımım özgüven değil, kontrollü karar verme disiplini oldu.”",
];

const pricingPlans = [
  {
    title: "Standart Katılım",
    badge: "Core",
    price: "€1.950",
    desc: "Yachtmaster seviyesine giden yoğun eğitim akışına tam katılım.",
    items: [
      "7 gün ileri seviye eğitim akışı",
      "Teori + gerçek uygulama",
      "Gece seyri ve liderlik pratiği",
      "Program sonu değerlendirme",
    ],
    featured: false,
  },
  {
    title: "Early Bird",
    badge: "Önerilen",
    price: "€1.690",
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
    desc: "Kapalı grup veya kişiselleştirilmiş ileri seviye yapı için özel planlama.",
    items: [
      "Özel tarih planlama",
      "Kapalı grup seçeneği",
      "İhtiyaca göre yapılandırma",
      "Kurumsal / bireysel uyarlama",
    ],
    featured: false,
  },
];

export default function YachtmasterPage() {
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
              Yachtmaster Program
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
              Tekneyi değil,
              <br />
              tüm operasyonu
              <br />
              yönetmeyi öğren.
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
              Yachtmaster seviyesi; sadece ileri teknik bilgi değil, yüksek
              sorumluluk altında sakin kalabilen, doğru önceliklendirme yapan ve
              ekibi güvenle taşıyabilen kaptanlık seviyesidir.
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
              İleri seviye liderlik • Gerçek açık deniz pratiği • Doğrulanabilir
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
                "Yüksek seviye skipper eğitimi",
                "Gerçek rota ve liderlik pratiği",
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
              Bu program herkes için değil; sorumluluk almaya hazır olanlar için
            </div>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/contact"
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
              </Link>

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
              Sınırlı kontenjan • Maksimum 4 kişi • İleri seviye rota disiplini
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
                ["Süre", "7 gün ileri seviye akış"],
                ["Yapı", "Teori + gerçek uygulama"],
                ["Katılım", "Maksimum 4 kişi"],
                ["Odak", "Liderlik • gece seyri • yüksek sorumluluk"],
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
              7 Gün Program Akışı
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
              kaptanlığın yükünü
              <br />
              biraz daha gerçek hale getirir.
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
              Bu akış, ileri teknik bilgiyi gerçek operasyonel sorumlulukla
              birleştirir. Her gün, öğrenciyi daha bağımsız ve daha kontrollü
              karar verme noktasına taşır.
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
              Bu seviyeyi gerçekten
              <br />
              yaşamış biri verir.
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
              Eğitimler, yalnızca ileri rota bilgisine değil; gerçek skipper
              sorumluluğuna sahip eğitmenler tarafından verilir. Amaç seni daha
              büyük görünmek değil, daha kontrollü ve daha yetkin hale getirmektir.
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
                "Gerçek açık deniz liderliği",
                "Aktif kaptanlık disiplini",
                "İleri seviye eğitim odağı",
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
            Advanced Routes
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
            Rota, sadece bir geçiş değildir.
            <br />
            Liderlik alanıdır.
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
            Bu program, seviyeyi yükseltir.
          </h2>

          <p
            style={{
              marginTop: 16,
              color: "rgba(226,232,240,0.8)",
              lineHeight: 1.75,
              fontSize: 16,
            }}
          >
            Çünkü burada sadece teknik bilgi değil; liderlik, önceliklendirme ve
            baskı altında sakin kalabilme pratiği gelişir.
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
              "İleri seviye liderlik",
              "Maksimum 4 kişi",
              "Gerçek skipper pratiği",
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
              Yüksek seviye eğitim,
              <br />
              yüksek seviye yatırım gerektirir.
            </h2>

            <p
              style={{
                marginTop: 16,
                color: "rgba(226,232,240,0.8)",
                fontSize: 16,
                lineHeight: 1.75,
              }}
            >
              Yachtmaster programı sınırlı kontenjanla yürütülür. Küçük grup
              yapısı ve ileri seviye yoğunluk nedeniyle her dönem sınırlı sayıda
              katılımcı kabul edilir.
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
                  <Link
                    href="/contact"
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
                  </Link>
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
            Bu seviyeye çıkmak isteyenler için
            <br />
            yerini şimdi ayır.
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
            Yachtmaster programı sınırlı kontenjanla açılır. Küçük grup yapısı
            ve yüksek yoğunluk nedeniyle yerler hızla dolabilir.
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
            <Link
              href="/contact"
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
            </Link>

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