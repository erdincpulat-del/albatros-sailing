"use client";

import Link from "next/link";
import GuideCta from "@/components/guide/GuideCta";

const heroStats = [
  {
    label: "Odak",
    value: "Gerçek trafik okuma",
  },
  {
    label: "Bağlam",
    value: "Boğaz, TSS, yoğun gemi trafiği",
  },
  {
    label: "Seviye",
    value: "Açık deniz karar disiplini",
  },
  {
    label: "Yaklaşım",
    value: "Elektronik veri + kaptan mantığı",
  },
];

const whyItMatters = [
  {
    title: "Trafik farkındalığı",
    text: "AIS hedefleri görünür hale getirir; VTS ise bölgesel düzeni, trafik akışını ve büyük resmi anlamayı destekler.",
  },
  {
    title: "Çatışmayı önleme desteği",
    text: "Yoğun trafikte hedefin kimliğini, rotasını, hızını ve hareket eğilimini erken fark etmek doğru karar kalitesini yükseltir.",
  },
  {
    title: "TSS ve boğaz disiplini",
    text: "Dar geçitler, yoğun gemi trafiği ve ayrılmış trafik düzenleri ancak sistem mantığını bilen kaptanlar için güvenli hale gelir.",
  },
  {
    title: "Profesyonel refleks",
    text: "Elektronik bilgiye körü körüne güvenmeden, görsel teyit ve COLREG ile birlikte yorum yapabilmek gerçek denizcilik seviyesidir.",
  },
];

const coreBlocks = [
  {
    title: "AIS nedir?",
    text: "AIS (Automatic Identification System), teknelerin ve gemilerin kimlik, hız, rota, mevki ve seyir bilgilerini elektronik olarak paylaşmasını sağlayan sistemdir. Trafiği okumayı kolaylaştırır ama tek başına karar vermez.",
  },
  {
    title: "VTS nedir?",
    text: "VTS (Vessel Traffic Services), yoğun trafik bölgelerinde gemi hareketlerini izleyen, bilgilendiren ve seyir emniyetini destekleyen kıyı tabanlı hizmet yapısıdır.",
  },
  {
    title: "Neden birlikte önemlidir?",
    text: "AIS sana trafikte kim olduğunu gösterir, VTS ise büyük resmi ve bölgesel düzeni temsil eder. Özellikle dar geçit, boğaz ve yoğun trafik bölgelerinde bu iki yapıyı birlikte anlamak gerekir.",
  },
  {
    title: "Ne değildir?",
    text: "AIS bir oto-pilot değildir. VTS de senin yerine kaptanlık yapmaz. Her ikisi de karar destek sistemidir; asıl sorumluluk her zaman teknedeki seyir sorumlusundadır.",
  },
];

const realUseCases = [
  {
    title: "Boğaz ve dar geçitler",
    text: "İstanbul Boğazı gibi yoğun, akıntılı ve dar sularda trafik okuması yalnızca görsel gözlemle sınırlı kalamaz. AIS verisi ve VTS mantığı birlikte değerlendirilmelidir.",
  },
  {
    title: "Gece seyri",
    text: "Gece büyük gemi trafiğinde yalnızca ışıklara bakmak yetmez. AIS, hedefin kimliğini ve seyrini anlamayı kolaylaştırır; yine de görsel teyit ve COLREG yorumu şarttır.",
  },
  {
    title: "Açık deniz geçişleri",
    text: "Uzak hedefleri erken fark etmek, CPA/TCPA mantığını okumak ve trafik yoğunluğunu önceden görmek uzun geçişlerde büyük avantaj sağlar.",
  },
];

const commonMistakes = [
  "AIS’e bakıp görsel gözcülüğü azaltmak",
  "AIS bilgisini kesin gerçek kabul etmek",
  "Büyük geminin manevra kabiliyetini küçümsemek",
  "VTS bölgesinde trafik mantığını anlamadan hareket etmek",
  "CPA/TCPA verisini okuyup yine de geç karar vermek",
];

const captainLogic = [
  "Önce gözle ve çevreyle durumu oku",
  "AIS verisini destekleyici bilgi olarak kullan",
  "COLREG kararını elektronik veriye değil, toplam duruma göre ver",
  "Yoğun trafikte erken ve net manevra düşün",
  "VTS bölgesinde disiplin ve öngörü ile hareket et",
];

const routeAuthority = [
  "Bodrum – İstanbul hattı yalnızca uzun rota değil, yoğun gemi trafiği ve Boğaz disiplini içeren gerçek karar eğitimidir.",
  "TSS mantığını, trafik akışını ve profesyonel deniz trafiği okumasını sahada anlamak sıradan kurs içeriği değildir.",
  "Türkiye – Yunan adaları ve açık deniz geçişleri, AIS bilgisini teoriden çıkarıp denizci refleksine dönüştürür.",
];

export default function AisVtsGuidePage() {
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
        <div style={{ maxWidth: 860 }}>
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
            Navigasyon • AIS / VTS • Trafik Disiplini
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
            AIS ve VTS bilgisi,
            <br />
            gerçek deniz karar kalitesini yükseltir.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 820,
            }}
          >
            Modern denizcilikte trafikte ne olduğunu anlamak yalnızca ufka bakmak
            değildir. AIS hedefleri görünür hale getirir, VTS ise yoğun bölgedeki
            büyük resmi okumana yardımcı olur. Ama gerçek kaptanlık; elektronik
            veriyi, görsel teyidi, COLREG mantığını ve zamanında manevrayı birlikte
            yorumlayabilmektir.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "flex",
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
              href="/programs"
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
              Programları İncele
            </Link>
          </div>
        </div>

        {/* STATS */}
        <div
          style={{
            marginTop: 42,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {heroStats.map((item) => (
            <div
              key={item.label}
              style={{
                padding: 18,
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.88), rgba(10,15,24,0.88))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  color: "#8ed8ff",
                  fontWeight: 800,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  lineHeight: 1.5,
                  color: "#f8fafc",
                  fontWeight: 800,
                }}
              >
                {item.value}
              </div>
            </div>
          ))}
        </div>

        {/* WHY IT MATTERS */}
        <div style={{ marginTop: 72 }}>
          <div style={{ maxWidth: 760 }}>
            <h2
              style={{
                margin: 0,
                fontSize: 28,
                fontWeight: 900,
                lineHeight: 1.12,
              }}
            >
              Neden bu konu ciddi denizcilik seviyesidir?
            </h2>

            <p
              style={{
                marginTop: 14,
                color: "rgba(226,232,240,0.82)",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              AIS ve VTS bilgisi yalnızca cihaz kullanmak değildir. Bu konu,
              yoğun trafiği okumayı, hedef davranışı çözmeyi, büyük gemi mantığını
              anlamayı ve dar geçitlerde doğru karar vermeyi kapsar.
            </p>
          </div>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {whyItMatters.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 22,
                  borderRadius: 20,
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.90))",
                  border: "1px solid rgba(255,255,255,0.08)",
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
        </div>

        {/* CORE BLOCKS */}
        <div
          style={{
            marginTop: 72,
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

        {/* REAL ROUTE CONTEXT */}
        <div
          style={{
            marginTop: 72,
            borderRadius: 26,
            padding: "30px 24px",
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
            Gerçek rota bağlamında AIS / VTS neden ayrıcalık yaratır?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              fontSize: 15,
              lineHeight: 1.8,
              maxWidth: 860,
            }}
          >
            AIS ve VTS bilgisi, özellikle Bodrum – İstanbul hattı gibi Boğaz
            geçişi, yoğun gemi trafiği ve TSS mantığı içeren rotalarda sıradan
            eğitimden ayrışır. Bu konu, teorik bilgi değil; gerçek deniz kararıdır.
          </p>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {routeAuthority.map((item) => (
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
                  lineHeight: 1.72,
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

        {/* REAL USE CASES */}
        <div
          style={{
            marginTop: 72,
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
            Gerçek denizde AIS ve VTS nerede fark yaratır?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {realUseCases.map((item) => (
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

        {/* CAPTAIN LOGIC */}
        <div
          style={{
            marginTop: 72,
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
            Kaptan mantığı nasıl çalışır?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {captainLogic.map((item) => (
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

        {/* COMMON MISTAKES */}
        <div style={{ marginTop: 72 }}>
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

        {/* PREMIUM CTA BLOCK */}
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
            Trafiği gerçek denizde okumak ister misin?
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
            AIS ve VTS bilgisi, açık deniz geçişlerinde ve yoğun trafik
            bölgelerinde ancak gerçek rota senaryoları ile yerli yerine oturur.
            Profesyonel kaptanlık refleksi, bilgiyi denizde karar gücüne
            dönüştürebilmektir.
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
              href="/programs"
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
              Programları İncele
            </Link>
          </div>
        </div>
      </section>

      <GuideCta />
    </main>
  );
}