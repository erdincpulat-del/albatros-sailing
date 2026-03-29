import Link from "next/link";

const WA_NUMBER = "905324873813";

const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

const highlights = [
  {
    title: "Gece Seyri",
    text: "Gece navigasyonu, ışıklar, vardiya disiplini ve sınırlı görüşte karar alma pratiği.",
  },
  {
    title: "Uzun Rota",
    text: "Saatler süren seyirlerde rota takibi, enerji yönetimi ve açık deniz temposuna uyum.",
  },
  {
    title: "Karar Verme",
    text: "Hava, ekip, tekne ve risk faktörlerini birlikte değerlendirerek skipper refleksi geliştirme.",
  },
];

const weekPlan = [
  {
    day: "1. Gün",
    title: "Yapı ve Güvenlik",
    text: "Tekne düzeni, güvenlik brifingi, ekip rol dağılımı ve offshore disiplininin temeli.",
  },
  {
    day: "2. Gün",
    title: "Rota ve Vardiya",
    text: "Harita, rota mantığı, vardiya planı ve skipper sorumluluğunun sahadaki karşılığı.",
  },
  {
    day: "3. Gün",
    title: "Uzun Seyir",
    text: "Enerji yönetimi, tempo, trim ve kararların sürekliliği.",
  },
  {
    day: "4. Gün",
    title: "Gece Seyri",
    text: "Işıklar, sınırlı görüş, dikkat disiplini ve sakin karar verme.",
  },
  {
    day: "5. Gün",
    title: "Hava ve Risk",
    text: "Şartları okumak, rota revizyonu yapmak ve alternatif üretmek.",
  },
  {
    day: "6. Gün",
    title: "Komuta",
    text: "Ekip yönetimi, skipper dönüşümü ve bağımsız karar anları.",
  },
  {
    day: "7. Gün",
    title: "Final",
    text: "Performans değerlendirmesi, son uygulama ve sertifikasyon süreci.",
  },
];

const routeCards = [
  {
    title: "Bodrum → Kalimnos",
    text: "Açık deniz geçişi, ada yaklaşımı ve sınır ötesi rota disiplini.",
  },
  {
    title: "Bodrum → Leros → Lipsi",
    text: "Çoklu rota planı, zamanlama ve değişen şartlarda doğru seçim yapma pratiği.",
  },
  {
    title: "Bodrum → Patmos",
    text: "Daha uzun seyir düşüncesi, dikkat yönetimi ve skipper dayanıklılığı.",
  },
];

const proofItems = [
  "“İlk gece seyri deneyimimi bu programda yaşadım. En büyük fark, karar anlarını gerçekten yaşamaktı.”",
  "“Program sonunda sadece rota okumuyordum; hava, ekip ve tempo yönetimini birlikte düşünmeye başlamıştım.”",
  "“Küçük grup yapısı sayesinde her manevrada gerçekten sorumluluk aldım.”",
];

const pricingPlans = [
  {
    title: "Standart Katılım",
    badge: "Core",
    price: "€1.450",
    desc: "Programın tüm eğitim akışına tam katılım.",
    items: [
      "7 gün offshore eğitim akışı",
      "Teori + pratik uygulama",
      "Gece seyri deneyimi",
      "Program sonu değerlendirme",
    ],
    featured: false,
  },
  {
    title: "Early Bird",
    badge: "Önerilen",
    price: "€1.250",
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

const whoItsFor = [
  "Sorumluluk almaktan kaçmayanlar",
  "Gerçek deniz pratiği isteyenler",
  "Küçük grup ve yoğun eğitim arayanlar",
  "Karar verme seviyesini büyütmek isteyenler",
];

const whoItsNotFor = [
  "Turistik gezi beklentisi olanlar",
  "Sadece sertifika odaklı yaklaşanlar",
  "Denizde gerçek rol almak istemeyenler",
  "Yoğun pratiğin baskısını istemeyenler",
];

const sectionWrap: React.CSSProperties = {
  padding: "0 24px",
};

const sectionInner: React.CSSProperties = {
  maxWidth: 1120,
  margin: "0 auto",
};

export default function OffshoreSkipperPage() {
  return (
    <main style={{ background: "#050b14", color: "#f8fafc" }}>
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "120px 24px 100px",
          background:
            "linear-gradient(180deg, #07111f 0%, #08131f 48%, #050b14 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/images/homepage/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(5,11,20,0.97) 0%, rgba(5,11,20,0.89) 42%, rgba(5,11,20,0.50) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -140,
            left: -110,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "rgba(56,189,248,0.14)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -80,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "rgba(34,197,94,0.08)",
            filter: "blur(90px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1160,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 30,
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
              Offshore Skipper Program
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(44px, 5vw, 78px)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.05em",
                maxWidth: 760,
                textShadow: "0 10px 40px rgba(0,0,0,0.35)",
              }}
            >
              Açık denizde
              <br />
              gerçekten karar
              <br />
              vermeyi öğren.
            </h1>

            <p
              style={{
                marginTop: 22,
                fontSize: 18,
                color: "rgba(226,232,240,0.86)",
                lineHeight: 1.8,
                maxWidth: 660,
              }}
            >
              Bu program, seni sadece yelken kullanan biri değil; açık denizde
              rota, ekip ve risk yönetimini birlikte taşıyabilen bir skipper
              haline getirir. Amaç bilgi yüklemek değil, skipper refleksi
              inşa etmektir.
            </p>

            <div
              style={{
                marginTop: 14,
                fontSize: 13,
                color: "rgba(226,232,240,0.66)",
                fontWeight: 500,
                letterSpacing: 0.35,
              }}
            >
              Sadece 4 kişilik ekip • Açık deniz rotaları • Anında doğrulanabilir
              sertifika
            </div>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {[
                "Maksimum 4 kişi",
                "Gerçek rota eğitimi",
                "Gece seyri pratiği",
                "QR doğrulamalı sertifika",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "inline-flex",
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
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#38bdf8",
                      boxShadow: "0 0 8px rgba(56,189,248,0.6)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 30,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href={waLink(
                  "Merhaba, Offshore Skipper programı hakkında bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "15px 24px",
                  borderRadius: 14,
                  background: "#38bdf8",
                  color: "#082032",
                  textDecoration: "none",
                  fontWeight: 900,
                  boxShadow: "0 14px 30px rgba(56,189,248,0.28)",
                }}
              >
                💬 Hemen Yaz
              </a>

              <Link
                href="/certificates"
                style={{
                  padding: "15px 24px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#e2e8f0",
                  textDecoration: "none",
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                Sertifika Doğrula
              </Link>
            </div>

            <div
              style={{
                marginTop: 16,
                color: "#f87171",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ⚠️ Kontenjanlar sınırlı, dönemler hızlı dolabilir.
            </div>
          </div>

          <div
            style={{
              borderRadius: 24,
              padding: 22,
              background:
                "linear-gradient(180deg, rgba(8,15,30,0.90), rgba(5,10,20,0.92))",
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
                letterSpacing: 1.2,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Program Snapshot
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {[
                ["Süre", "7 gün yoğun offshore akışı"],
                ["Yapı", "Teori + gerçek deniz pratiği"],
                ["Katılım", "Maksimum 4 kişi"],
                ["Odak", "Gece seyri • uzun rota • karar disiplini"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(180deg, rgba(15,23,42,0.84), rgba(10,18,32,0.66))",
                    border: "1px solid rgba(255,255,255,0.12)",
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
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 16,
                padding: 14,
                borderRadius: 16,
                background: "rgba(248,113,113,0.08)",
                border: "1px solid rgba(248,113,113,0.18)",
                color: "#fecaca",
                fontSize: 14,
                lineHeight: 1.6,
                fontWeight: 700,
              }}
            >
              Bu program herkes için değil. Sorumluluk almaya hazır olanlar için.
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 84 }}>
        <div
          style={{
            ...sectionInner,
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
                borderRadius: 22,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.70), rgba(15,23,42,0.54))",
                transition: "all 0.2s ease",
                boxShadow: "0 18px 36px rgba(0,0,0,0.16)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 21,
                  fontWeight: 800,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "rgba(226,232,240,0.76)",
                  lineHeight: 1.75,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 94 }}>
        <div
          style={{
            ...sectionInner,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
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
                fontSize: "clamp(30px, 4vw, 50px)",
                fontWeight: 900,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
              }}
            >
              Her gün,
              <br />
              skipper zihnini
              <br />
              biraz daha inşa eder.
            </h2>

            <p
              style={{
                marginTop: 18,
                maxWidth: 560,
                color: "rgba(226,232,240,0.80)",
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              Bu akış turistik bir rota değil; gelişim tasarımıdır. Her gün bir
              önceki günün üstüne çıkar ve öğrenciyi gerçek karar anlarına
              yaklaştırır.
            </p>
          </div>

          <div style={{ display: "grid", gap: 12 }}>
            {weekPlan.map((item) => (
              <div
                key={item.day}
                style={{
                  padding: 16,
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.74), rgba(15,23,42,0.52))",
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
                  {item.day}
                </div>
                <div
                  style={{
                    fontSize: 16,
                    color: "#f8fafc",
                    fontWeight: 700,
                    lineHeight: 1.45,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(226,232,240,0.78)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 96 }}>
        <div
          style={{
            ...sectionInner,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          <div
            style={{
              padding: 26,
              borderRadius: 24,
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(10,18,32,0.72))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 22px 46px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: "#86efac",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Bu program kimler için?
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {whoItsFor.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    color: "#e2e8f0",
                    lineHeight: 1.65,
                    fontSize: 15,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#22c55e",
                      marginTop: 8,
                      flexShrink: 0,
                      boxShadow: "0 0 8px rgba(34,197,94,0.45)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              padding: 26,
              borderRadius: 24,
              background:
                "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(10,18,32,0.72))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 22px 46px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.2,
                color: "#fca5a5",
                textTransform: "uppercase",
                marginBottom: 14,
              }}
            >
              Bu program kimler için değil?
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {whoItsNotFor.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    color: "#e2e8f0",
                    lineHeight: 1.65,
                    fontSize: 15,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#f87171",
                      marginTop: 8,
                      flexShrink: 0,
                      boxShadow: "0 0 8px rgba(248,113,113,0.35)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 104 }}>
        <div
          style={{
            ...sectionInner,
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
              yaşayan biri verir.
            </h2>

            <p
              style={{
                marginTop: 18,
                fontSize: 16,
                lineHeight: 1.8,
                color: "rgba(226,232,240,0.82)",
                maxWidth: 520,
              }}
            >
              Eğitimler, açık denizde aktif olarak seyir yapan ve gerçek rota
              deneyimine sahip eğitmenler tarafından verilir. Amaç sadece
              öğretmek değil; seni skipper seviyesine taşımaktır.
            </p>

            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {[
                "Gerçek açık deniz tecrübesi",
                "Aktif kaptanlık",
                "Birebir eğitim yaklaşımı",
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
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 24,
                fontSize: 14,
                color: "rgba(226,232,240,0.6)",
                fontWeight: 700,
              }}
            >
              — Erdinç Pulat
            </div>
          </div>
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 96 }}>
        <div style={sectionInner}>
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
            Open Sea Routes
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
            Rota sadece mesafe değildir.
            <br />
            Karar verme ortamıdır.
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
                  borderRadius: 24,
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
                    lineHeight: 1.18,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: 12,
                    color: "rgba(226,232,240,0.76)",
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 90 }}>
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
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 16,
            }}
          >
            Çünkü burada sadece içerik verilmez; öğrencinin skipper refleksi
            gerçek açık deniz senaryoları içinde gelişir.
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
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.72), rgba(15,23,42,0.52))",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#e2e8f0",
                  fontSize: 15,
                  lineHeight: 1.75,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ ...sectionWrap, paddingBottom: 104 }}>
        <div style={sectionInner}>
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
              Doğru eğitim,
              <br />
              doğru yatırım ister.
            </h2>

            <p
              style={{
                marginTop: 16,
                color: "rgba(226,232,240,0.80)",
                fontSize: 16,
                lineHeight: 1.8,
              }}
            >
              Offshore programı sınırlı kontenjanla yürütülür. Küçük grup yapısı
              ve yoğun pratik nedeniyle her dönem sınırlı sayıda katılımcı kabul
              edilir.
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
                    lineHeight: 1.75,
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
                    href={waLink(
                      "Merhaba, Offshore Skipper programı fiyat ve tarih bilgisi alabilir miyim?"
                    )}
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
          padding: "94px 24px 124px",
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
              fontSize: "clamp(34px, 4vw, 54px)",
              fontWeight: 900,
              margin: 0,
              lineHeight: 1.08,
            }}
          >
            Erken kayıt avantajı ile
            <br />
            yerini şimdi ayır.
          </h2>

          <p
            style={{
              marginTop: 18,
              color: "rgba(226,232,240,0.84)",
              fontSize: 16,
              lineHeight: 1.8,
              maxWidth: 640,
              marginInline: "auto",
            }}
          >
            Offshore programı sınırlı kontenjanla açılır. Küçük grup yapısı
            nedeniyle yerler hızlı dolabilir. Kararını ertelemek yerine doğru
            zamanı şimdi kullan.
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
              href={waLink(
                "Merhaba, Offshore Skipper programına katılmak istiyorum. Müsaitlik durumu nedir?"
              )}
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
            <section
        style={{
          marginTop: 80,
          padding: 30,
          borderRadius: 24,
          background:
            "linear-gradient(180deg, rgba(14,20,32,0.9), rgba(10,15,24,0.95))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 900 }}>
          6 gün boyunca ne yaşayacaksın?
        </h2>

        <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
          {[
            "1. gün: Tekne, ekip ve sistem",
            "2. gün: Marina çıkışları ve manevra",
            "3. gün: Açık deniz seyri ve rota",
            "4. gün: Gece seyri ve vardiya",
            "5. gün: Demirleme ve karar senaryoları",
            "6. gün: Tam bağımsız kaptanlık uygulaması",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "14px 16px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                opacity: 0.9,
                fontWeight: 700,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          marginTop: 60,
          padding: 30,
          borderRadius: 24,
          background:
            "linear-gradient(180deg, rgba(10,20,30,0.9), rgba(6,12,20,0.95))",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 28, fontWeight: 900 }}>
          Yatırım
        </h2>

        <p style={{ marginTop: 10, opacity: 0.8 }}>
          Bu bir kurs değil, seviye değişimidir.
        </p>

        <div
          style={{
            marginTop: 20,
            fontSize: 36,
            fontWeight: 900,
            color: "#67d3ff",
          }}
        >
          Nisan ayı : Tek kişi kamara kapatma 700 Euro / İki kişi kamara kapatma 1100 Euro / Tekne kapatma 2700 Euro

Mayıs ayı : Tek kişi kamara kapatma 800 Euro  / İki kişi kamara kapatma 1300 Euro / Tekne kapatma 2900 Euro

Haziran ayı: Tek kişi kamara kapatma 900 Euro / İki kişi kamara kapatma 1600 Euro / Tekne kapatma 3600 .Euro

Temmuz ayı: Tek kişi kamara kapatma 1100 Euro / İki kişi kamara kapatma 1800 Euro / Tekne kapatma 3900 Euro

Ağustos ayı : Tek kişi kamara kapatma 1100 Euro / İki kişi kamara kapatma 1800 Euro / Tekne kapatma 3900 Euro

Eylül ayı : Tek kişi kamara kapatma 900 Euro / İki kişi kamara kapatma 1600 Euro / Tekne kapatma 3600 Euro

Ekim ayı : Tek kişi kamara kapatma 900 Euro / İki kişi kamara kapatma 1600 Euro / Tekne kapatma 3600 Euro
        </div>

        <p style={{ marginTop: 10, opacity: 0.7 }}>
          (Erken kayıt indirimi mevcut)
        </p>
      </section>

      <section
        style={{
          marginTop: 60,
          padding: 34,
          borderRadius: 24,
          background:
            "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.97))",
          border: "1px solid rgba(255,255,255,0.08)",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: 30, fontWeight: 900 }}>
          Hazırsan, burası senin başlangıcın
        </h2>

        <p style={{ marginTop: 12, opacity: 0.8 }}>
          Sadece izleyen değil, gerçekten denize çıkanlardan ol.
        </p>

        <a
  href={waLink("Merhaba, Offshore eğitim hakkında bilgi almak istiyorum.")}
  target="_blank"
  style={{
    display: "inline-block",
    marginTop: 20,
    padding: "14px 26px",
    borderRadius: 14,
    background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
    color: "#04121c",
    fontWeight: 900,
    textDecoration: "none",
  }}
>
  WhatsApp ile başvur →
</a>
        </section>
      <section>...</section>
      <section>...</section>
      <section>...</section>
    </main>
  );
}