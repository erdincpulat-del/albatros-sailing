"use client";

import Link from "next/link";

const planningBlocks = [
  {
    title: "Hedef rota",
    text: "Başlangıç ve varış noktası yalnızca çizgi çekmek değildir. Rota; mesafe, hava, akıntı, gece-gündüz dengesi ve güvenli alternatifler ile birlikte düşünülmelidir.",
  },
  {
    title: "Hava ve deniz durumu",
    text: "Rüzgar yönü, kuvveti, dalga yüksekliği ve olası dönüşler rota kararının temelini oluşturur. Yanlış hava okuması bütün planı bozar.",
  },
  {
    title: "Trafik ve geçişler",
    text: "TSS, dar geçitler, yoğun trafik alanları, ada geçişleri ve kıyı yaklaşmaları rota üzerinde özel dikkat gerektirir.",
  },
  {
    title: "Alternatif plan",
    text: "İyi kaptan tek rota yapmaz. Ana plan, yedek plan ve gerektiğinde geri dönüş kararı birlikte düşünülmelidir.",
  },
];

const commonMistakes = [
  "Harita üzerinde rota çizip gerçek hava koşullarını hesaba katmamak",
  "Sadece mesafeye odaklanıp gece varış riskini düşünmemek",
  "Alternatif liman veya kaçış noktası planlamamak",
  "Akıntı ve trafik yoğunluğunu küçümsemek",
];

const sampleRoute = [
  "Çıkış noktası netleştirilir ve varış hedefi belirlenir",
  "Hava tahmini, rüzgar yönü ve dalga şartları kontrol edilir",
  "Akıntı, trafik, TSS ve dar geçitler değerlendirilir",
  "Alternatif limanlar ve kaçış planı hazırlanır",
  "Geceye kalma ihtimali ve emniyetli yaklaşma kararı verilir",
];

const icons = {
  traffic: "🧭",
  navigation: "🗺️",
  symbols: "⚓",
  route: "📍",
  maneuver: "🛥️",
  emergency: "🚨",
  captain: "👨‍✈️",
  sextant: "🌌",
};

const systemPowerLinks = [
  {
    title: "Trafik ve COLREG",
    desc: "Çatışmayı önleme, TSS, AIS ve trafik mantığı",
    href: "/guide/denizde-catisma-onleme",
    icon: "traffic" as const,
  },
  {
    title: "Navigasyon ve Kâğıt Harita",
    desc: "Harita kullanımı, mevkii atma ve seyir mantığı",
    href: "/guide/rota-planlama",
    icon: "navigation" as const,
  },
  {
    title: "Harita Sembolleri",
    desc: "Deniz haritalarındaki işaretler ve anlamları",
    href: "/guide/rota-planlama",
    icon: "symbols" as const,
  },
  {
    title: "Rota Planlama Sembolleri",
    desc: "Waypoint, course line ve güvenli geçiş işaretleri",
    href: "/guide/rota-planlama",
    icon: "route" as const,
  },
  {
    title: "Manevra ve Tekne Hakimiyeti",
    desc: "Yanaşma, ayrılma ve dar alanda tekne kontrolü",
    href: "/guide/tekne-hakimiyeti",
    icon: "maneuver" as const,
  },
  {
    title: "Acil Durum Yönetimi",
    desc: "MOB, yangın, VHF ve hayatta kalma mantığı",
    href: "/guide/denizde-acil-durumlar",
    icon: "emergency" as const,
  },
  {
    title: "Kaptanlık ve Karar Verme",
    desc: "Risk yönetimi, soğukkanlılık ve sorumluluk",
    href: "/guide/yat-kaptani-nasil-olunur",
    icon: "captain" as const,
  },
  {
    title: "İleri Navigasyon (Sextant)",
    desc: "Açı, zaman ve gerçek navigasyon mantığı",
    href: "/guide/sextant-nedir",
    icon: "sextant" as const,
  },
];

export default function RoutePlanningPage() {
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
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 780 }}>
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
            Navigasyon • Rota Planlama
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: 900,
              lineHeight: 1.04,
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            Rota planlama
            <br />
            kaptanlığın omurgasıdır.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 760,
            }}
          >
            Rota planlama, harita üzerinde iki nokta arasına çizgi çekmek
            değildir. Gerçek rota; hava, akıntı, trafik, geceye kalma ihtimali,
            alternatif limanlar ve teknenin gerçek kapasitesi birlikte
            düşünülerek kurulur.
          </p>
        </div>

        <div style={{ marginTop: 40, maxWidth: 740 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 12,
            }}
          >
            Neden rota planlama bu kadar belirleyicidir?
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              margin: 0,
            }}
          >
            Çünkü denizde güvenlik çoğu zaman daha seyir başlamadan başlar. Kötü
            rota planı iyi tekneyi de zor durumda bırakır. Doğru rota planı ise
            riskleri daha kalkış anından önce azaltır.
          </p>

          <p
            style={{
              marginTop: 10,
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
            }}
          >
            Albatros Sailing eğitimlerinde rota planlama yalnızca teorik bir başlık
            değil; gerçek deniz geçişleri, alternatif liman kararları ve açık deniz
            senaryoları ile işlenen bir kaptanlık becerisidir.
          </p>
        </div>

        <div
          style={{
            marginTop: 34,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
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
            Kısa tanım
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.85,
              fontSize: 16,
            }}
          >
            Rota planlama; çıkış noktası, varış hedefi, ara karar noktaları, hava
            tahmini, akıntı, trafik yoğunluğu ve alternatif limanlar düşünülerek
            seyir planı oluşturmaktır.
          </p>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.85,
              fontSize: 16,
            }}
          >
            Burada amaç yalnızca en kısa yolu bulmak değil; en güvenli, en
            yönetilebilir ve gerektiğinde değiştirilebilir yolu kurmaktır.
          </p>
        </div>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {planningBlocks.map((item) => (
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
            Doğru düşünme akışı nasıl kurulur?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {sampleRoute.map((item) => (
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

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Sistemin gerçek gücü
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 780,
            }}
          >
            Gerçek denizcilik tek bir konudan oluşmaz. Trafik okuma, navigasyon,
            kâğıt harita disiplini, rota planlama, manevra ve acil durum yönetimi
            birlikte çalıştığında kaptanlık düşüncesi oluşur.
          </p>

          <div
            style={{
              marginTop: 30,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {systemPowerLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  style={{
                    padding: 18,
                    borderRadius: 16,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    transition:
                      "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    height: "100%",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const card = e.currentTarget;
                    const sweep = card.querySelector(
                      '[data-sweep="true"]'
                    ) as HTMLDivElement | null;

                    card.style.transform = "translateY(-6px)";
                    card.style.boxShadow = "0 20px 40px rgba(66,189,248,0.15)";
                    card.style.borderColor = "rgba(103,211,255,0.22)";

                    if (sweep) {
                      sweep.style.opacity = "1";
                      sweep.style.transform = "translateX(220%) skewX(-18deg)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    const sweep = card.querySelector(
                      '[data-sweep="true"]'
                    ) as HTMLDivElement | null;

                    card.style.transform = "translateY(0)";
                    card.style.boxShadow = "none";
                    card.style.borderColor = "rgba(255,255,255,0.08)";

                    if (sweep) {
                      sweep.style.opacity = "0";
                      sweep.style.transform = "translateX(-140%) skewX(-18deg)";
                    }
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at top right, rgba(103,211,255,0.10), transparent 42%)",
                      opacity: 0.9,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(135deg, rgba(103,211,255,0.04), transparent 45%, rgba(56,189,248,0.05) 100%)",
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    data-sweep="true"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "-35%",
                      width: "32%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.16) 45%, rgba(255,255,255,0.32) 50%, rgba(255,255,255,0.12) 55%, rgba(255,255,255,0) 100%)",
                      transform: "translateX(-140%) skewX(-18deg)",
                      transition:
                        "transform 0.7s ease, opacity 0.35s ease",
                      opacity: 0,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        display: "grid",
                        placeItems: "center",
                        background:
                          "linear-gradient(180deg, rgba(103,211,255,0.14), rgba(103,211,255,0.06))",
                        border: "1px solid rgba(103,211,255,0.14)",
                        boxShadow: "0 0 24px rgba(103,211,255,0.08)",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {icons[item.icon]}
                    </div>

                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#67d3ff",
                        boxShadow:
                          "0 0 14px rgba(103,211,255,0.65), 0 0 28px rgba(103,211,255,0.18)",
                        opacity: 0.95,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      position: "relative",
                      zIndex: 2,
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#f8fafc",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: 8,
                      fontSize: 13,
                      color: "rgba(226,232,240,0.74)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

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
    Bu rota bugün mümkün mü?
  </h3>

  <p
    style={{
      marginTop: 10,
      color: "rgba(226,232,240,0.78)",
      fontSize: 14,
      lineHeight: 1.7,
    }}
  >
    Rota planlamak tek başına yeterli değildir. Aynı rota farklı hava
    koşullarında tamamen farklı sonuçlar doğurur.
  </p>

  <Link
    href="/guide/denizde-meteoroloji"
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
    Meteorolojiyi öğren →
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
            Rota planlamayı gerçek denizde geliştirmek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 760,
              marginInline: "auto",
            }}
          >
            Harita bilgisi, akıntı hesabı, trafik değerlendirmesi ve açık deniz
            karar mantığı ancak gerçek rota eğitimlerinde yerli yerine oturur.
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