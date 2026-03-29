"use client";

import Link from "next/link";

const firstFiveMinutes = [
  {
    title: "Paniği değil görevi yönet",
    text: "İlk dakikalarda en büyük hata aynı anda herkesin her şeyi yapmaya çalışmasıdır. Kimin göz teması kuracağı, kimin VHF çağrısı yapacağı, kimin tekneyi yöneteceği net olmalıdır.",
  },
  {
    title: "Pozisyonu sabitle",
    text: "Mevki, rota, hız, son görülen nokta ve çevresel şartlar hemen kayıt altına alınmalıdır. Arama-kurtarma başarısı çoğu zaman ilk dakikadaki bu disipline bağlıdır.",
  },
  {
    title: "İletişimi erken başlat",
    text: "Gecikmiş çağrı, büyüyen bir risktir. Mayday, Pan-Pan veya Sécurité çağrısı; olayın seviyesine göre erken ve doğru kanalda başlatılmalıdır.",
  },
  {
    title: "Ekipmanı hazırla",
    text: "Can yeleği, can simidi, MOB ekipmanı, can salı, yangın söndürücü, EPIRB ve görsel distress araçları erişilebilir ve kullanılabilir olmalıdır.",
  },
];

const vhfBlocks = [
  {
    title: "Mayday",
    text: "Hayat tehlikesi bulunan durumlarda kullanılır. Teknenin kimliği, mevkii, olay tipi, kişi sayısı ve ihtiyaç duyulan yardım açık şekilde iletilmelidir.",
  },
  {
    title: "Pan-Pan",
    text: "Acil ama doğrudan hayatı tehdit etmeyen durumlar içindir. Makine arızası, sürüklenme veya yardım gerektiren ama henüz distress seviyesine çıkmamış senaryolarda kullanılır.",
  },
  {
    title: "Sécurité",
    text: "Seyir güvenliğini ilgilendiren uyarılar içindir. Yüzer cisim, sürüklenen tehlike, ani görüş düşmesi veya seyir emniyetini ilgilendiren bilgi yayını buna örnektir.",
  },
];

const equipmentBlocks = [
  {
    title: "EPIRB",
    text: "406 MHz EPIRB, uydu üzerinden arama-kurtarma otoritelerine alarm ulaştıran kritik distress ekipmanıdır. Ne zaman aktive edileceği ve nerede tutulacağı ekip tarafından bilinmelidir.",
  },
  {
    title: "Can Salı",
    text: "Can salı son karar ekipmanıdır; erken değil, doğru anda devreye alınmalıdır. Açılış, bağlama, tahliye ve içine geçiş disiplini eğitimle öğrenilir.",
  },
  {
    title: "İşaret fişekleri ve duman",
    text: "Paraşüt fişeği, el maytabı ve turuncu duman kandili aynı amaç için kullanılmaz. Gündüz-gece, mesafe ve görünürlük şartına göre doğru distress aracı seçilmelidir.",
  },
  {
    title: "Bayrak ve görsel işaretleşme",
    text: "Modern sistemler baskın olsa da görsel distress ve işaret mantığını bilmek hâlâ önemlidir. Yedek iletişim kültürü gerçek denizciliğin parçasıdır.",
  },
];

const emergencyScenarios = [
  {
    title: "Denize adam düştü (MOB)",
    text: "İlk 30 saniye belirleyicidir. Göz temasını kaybetmemek, geri dönüş manevrasını doğru seçmek ve gereksiz karmaşa yaratmamak gerekir.",
  },
  {
    title: "Yangın",
    text: "Yangında paniğin değil prosedürün hızı belirleyicidir. Kaynağı izole etmek, personeli korumak ve uygun söndürücü ile doğru müdahale etmek esastır.",
  },
  {
    title: "Soğuk su şoku / hipotermi",
    text: "Soğuk suya düşen kişi önce panik ve nefes kontrolü sorunu yaşar, sonra güç kaybı gelir. Kurtarma sonrası yanlış ısıtma ve kötü yönetim de ikinci risk katmanıdır.",
  },
  {
    title: "Gece tahliye",
    text: "Gece yaşanan tahliye veya distress durumlarında yön, kişi sayısı, ekipman ve iletişim kontrolü gündüze göre daha zordur. Bu nedenle gece senaryoları ayrıca çalışılmalıdır.",
  },
];

const turkeyQuickInfo = [
  "Türkiye’de tüm acil numaralar 112’de toplanmıştır.",
  "112 hattına mobil ve sabit hatlardan ücretsiz erişim sağlanır.",
  "Sahil Güvenlik resmî mobil uygulamasında tek tıkla acil yardım talebi özelliği öne çıkarılmaktadır.",
];

const radioQuickInfo = [
  "VHF Ch 16: distress, urgency ve safety radiotelephony için temel çağrı kanalı",
  "VHF Ch 70: DSC distress/urgency/safety alerting için temel dijital kanal",
  "406–406.1 MHz EPIRB: Cospas-Sarsat sistemi üzerinden SAR otoritelerine alarm iletir",
];

export default function EmergencyAtSeaPage() {
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
              background: "rgba(248,113,113,0.08)",
              border: "1px solid rgba(248,113,113,0.18)",
              color: "#fca5a5",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Güvenlik • Denizde Acil Durumlar
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
            Denizde acil durumlar
            <br />
            doğru yönetilmelidir.
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
            Denizde kritik anlar, teorik bilginin gerçek değere dönüştüğü anlardır.
            Adam düştü, yangın, hipotermi, can salı, EPIRB, VHF distress çağrıları
            ve görsel distress araçları yalnızca bilinmemeli; doğru sırayla ve doğru
            kararla yönetilmelidir.
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
              Bu konu neden hayatidir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Çünkü denizde hata yalnızca zaman kaybettirmez; hayat kaybettirebilir.
              Acil durum bilgisi, ekipman listesi bilmekten daha fazlasıdır. Esas olan,
              olay anında önceliği doğru koymak ve ekibi dağılmadan yönetebilmektir.
            </p>

            <p
              style={{
                marginTop: 10,
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
              }}
            >
              Albatros Sailing eğitimlerinde bu başlıklar yalnızca anlatılmaz; senaryo,
              ekipman ve iletişim disiplininin birlikte çalıştığı gerçek eğitim mantığıyla işlenir.
            </p>
          </div>
        </div>

        {/* QUICK INFO */}
        <div
          style={{
            marginTop: 34,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 18,
          }}
        >
          <div
            style={{
              borderRadius: 22,
              padding: 22,
              background:
                "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#8ed8ff",
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Türkiye hızlı erişim
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {turkeyQuickInfo.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgba(226,232,240,0.80)",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 22,
              padding: 22,
              background:
                "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#86efac",
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              Uluslararası radyo / beacon
            </div>

            <div style={{ display: "grid", gap: 10 }}>
              {radioQuickInfo.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgba(226,232,240,0.80)",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FIRST 5 MINUTES */}
        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {firstFiveMinutes.map((item) => (
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
                  "0 20px 40px rgba(248,113,113,0.10)";
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

        {/* VHF BLOCK */}
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
            VHF çağrı seviyeleri
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: 16,
            }}
          >
            {vhfBlocks.map((item) => (
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

        {/* EQUIPMENT */}
        <div
          style={{
            marginTop: 70,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {equipmentBlocks.map((item) => (
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
                  "0 20px 40px rgba(66,189,248,0.10)";
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

        {/* SCENARIOS */}
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
            Gerçek senaryolar
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {emergencyScenarios.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: "16px 18px",
                  borderRadius: 16,
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
                    lineHeight: 1.7,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* NOTE */}
        <div
          style={{
            marginTop: 40,
            padding: "16px 18px",
            borderRadius: 16,
            background: "rgba(248,113,113,0.07)",
            border: "1px solid rgba(248,113,113,0.14)",
            color: "rgba(254,226,226,0.92)",
            fontSize: 14,
            lineHeight: 1.75,
            fontWeight: 700,
          }}
        >
          Not: EPIRB, can salı, pyrotechnics ve radyo ekipmanlarının taşıma ve kullanım
          yükümlülükleri; teknenin boyu, sefer bölgesi, bayrağı ve mevzuatına göre
          değişebilir. Bu sayfa eğitim mantığını ve operasyonel yaklaşımı anlatır.
        </div>

        {/* EDUCATION CTA */}
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
            Acil durum bilgisi kitapta değil, tatbikatta güçlenir.
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
            MOB, yangın, hipotermi, distress çağrıları ve can salı yönetimi; gerçek
            denizde ve kontrollü eğitim ortamında tekrar edilmeden refleks haline gelmez.
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