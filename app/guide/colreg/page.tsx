"use client";

import Link from "next/link";

import ColregCardinalAnimation from "@/components/guide/ColregCardinalAnimation";
import ColregLateralAnimation from "@/components/guide/ColregLateralAnimation";
import ColregIsolatedDangerAnimation from "@/components/guide/ColregIsolatedDangerAnimation";
import ColregSafeWaterAnimation from "@/components/guide/ColregSafeWaterAnimation";
import ColregLightsSimulation from "@/components/guide/ColregLightsSimulation";
import ColregLightsQuiz from "@/components/guide/ColregLightsQuiz";
import GuideCta from "@/components/guide/GuideCta";

const corePoints = [
  {
    title: "Güvenli hız",
    text: "Her koşulda teknenin bulunduğu ortama, trafiğe, görüşe ve manevra kabiliyetine uygun hızda seyretmek gerekir.",
  },
  {
    title: "Uygun gözcülük",
    text: "Sadece gözle değil; radar, AIS, kulak ve genel durum farkındalığı ile sürekli çevre kontrolü yapılmalıdır.",
  },
  {
    title: "Çatışma riski",
    text: "Başka bir tekne ile yaklaşma açısı, kerteriz değişimi ve mesafe düzenli olarak değerlendirilmelidir.",
  },
  {
    title: "Erken ve belirgin manevra",
    text: "Geç kalınmış küçük manevralar yerine erken, net ve diğer tekne tarafından anlaşılır aksiyon tercih edilir.",
  },
];

const whyImportant = [
  "Kurallar olmadan karşılaşma anlarında yorum farkı doğar.",
  "Yorum farkı, geç manevra ve kararsızlık üretir.",
  "Kararsızlık, denizde en pahalı hatalardan biridir.",
  "COLREG bilmek yalnızca sınav geçmek için değil; güvenli karar verebilmek için gereklidir.",
];

const realityPoints = [
  "Yoğun trafik bölgelerinde COLREG bilgisi sadece teori değil, çarpışmayı önleyen karar disiplinidir.",
  "Boğaz geçişleri, TSS alanları ve gece seyri; kuralları gerçekten anlayan kaptan ile ezberleyen kişiyi ayırır.",
  "Gerçek denizcilikte doğru yorum, doğru zamanlama ve net manevra birlikte çalışır.",
];

const relatedTopics = [
  {
    title: "Denizde çatışmayı önleme",
    href: "/guide/denizde-catismayi-onleme",
  },
  {
    title: "Gece seyri fenerleri",
    href: "/guide/gece-seyri-fenerleri",
  },
  {
    title: "AIS ve VTS nedir?",
    href: "/guide/ais-ve-vts",
  },
];

export default function ColregGuidePage() {
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
        {/* HERO */}
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
            Denizcilik Rehberi • COLREG
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 900,
              lineHeight: 1.04,
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            COLREG nedir?
            <br />
            Denizde düzenin temelidir.
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
            COLREG, denizde çarpışmayı önlemek için oluşturulmuş uluslararası
            kurallar bütünüdür. Tüm teknelerin ortak bir dil ile hareket etmesini
            sağlar. Açık denizde, kıyı seyri sırasında veya gece vardiyasında
            güvenli karar verebilmek için bu sistemin mantığını anlamak
            zorunludur.
          </p>

          <div
            style={{
              marginTop: 22,
              padding: "18px 20px",
              borderRadius: 18,
              background: "rgba(255,87,87,0.05)",
              border: "1px solid rgba(255,87,87,0.15)",
              color: "#fecaca",
              fontSize: 14,
              lineHeight: 1.75,
              fontWeight: 600,
              maxWidth: 760,
            }}
          >
            COLREG sadece kurallar bütünü değildir. Özellikle yoğun trafik, TSS
            alanları ve gece seyri gibi senaryolarda doğru yorum yapamayan
            kaptanlar gerçek risk üretir.
          </div>

          <div style={{ marginTop: 40, maxWidth: 720 }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                marginBottom: 12,
              }}
            >
              COLREG kuralları neden öğrenilmelidir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              COLREG kuralları, denizde güvenli seyir yapabilmek için zorunlu olan
              uluslararası standartlardır. Bu kurallar özellikle yelkenli yat
              eğitimi, offshore skipper ve kaptanlık süreçlerinde temel oluşturur.
            </p>

            <p
              style={{
                marginTop: 10,
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
              }}
            >
              Albatros Sailing eğitimlerinde COLREG yalnızca teorik olarak değil,
              gerçek rota, gece seyri ve trafik senaryoları ile uygulamalı olarak
              öğretilir.
            </p>
          </div>
        </div>

        {/* SHORT DEFINITION */}
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
            COLREG, “International Regulations for Preventing Collisions at Sea”
            ifadesinin kısaltmasıdır. Temel amacı, denizde seyreden teknelerin
            birbirleriyle karşılaşma anlarında hangi teknenin nasıl davranması
            gerektiğini netleştirmektir.
          </p>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.85,
              fontSize: 16,
            }}
          >
            Bu kurallar yalnızca “yol ver / yol al” mantığından ibaret değildir.
            Gözcülük, güvenli hız, çatışma riski değerlendirmesi, manevra
            kararları, görünürlük ve gece işaretleri gibi çok daha geniş bir
            çerçeveyi kapsar.
          </p>
        </div>

        {/* INTERACTIVE / ANIMATIONS */}
        <div
          style={{
            marginTop: 50,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(10,18,32,0.94), rgba(7,12,20,0.92))",
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
            Gerçek trafik içinde COLREG
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 760,
            }}
          >
            Işıklar, şamandıralar, karşılaşma açıları ve trafik mantığı birlikte
            okunur. Kuralı bilmek tek başına yetmez; doğru senaryoda doğru
            yorumlamak gerekir.
          </p>

          <div style={{ marginTop: 34 }}>
            <ColregCardinalAnimation />
          </div>

          <div style={{ marginTop: 40 }}>
            <ColregLateralAnimation />
          </div>

          <div style={{ marginTop: 40 }}>
            <ColregIsolatedDangerAnimation />
          </div>

          <div style={{ marginTop: 40 }}>
            <ColregSafeWaterAnimation />
          </div>

          <div style={{ marginTop: 40 }}>
            <ColregLightsSimulation />
          </div>

          <div style={{ marginTop: 40 }}>
            <ColregLightsQuiz />
          </div>
        </div>

        {/* CORE POINTS */}
        <div
          style={{
            marginTop: 70,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {corePoints.map((item) => (
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

        {/* WHY IMPORTANT */}
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
            Neden bu kadar önemlidir?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {whyImportant.map((item) => (
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
                    background: "#86efac",
                    boxShadow: "0 0 8px rgba(134,239,172,0.45)",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* REAL WORLD POSITIONING */}
        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(10,18,32,0.94), rgba(7,12,20,0.92))",
            border: "1px solid rgba(103,211,255,0.12)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#8ed8ff",
              marginBottom: 12,
            }}
          >
            REAL TRAFFIC DISCIPLINE
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            COLREG bilgisi, gerçek trafikte değer kazanır.
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {realityPoints.map((item) => (
              <div
                key={item}
                style={{
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
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* EDUCATION CTA */}
        <div
          style={{
            marginTop: 70,
            padding: 30,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              marginBottom: 12,
              fontSize: 12,
              letterSpacing: 1,
              textTransform: "uppercase",
              color: "#67d3ff",
              fontWeight: 800,
            }}
          >
            REAL OFFSHORE EXPERIENCE
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Bu bilgiyi denizde uygulamak ister misin?
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
            COLREG bilgisi gerçek deniz ortamında anlam kazanır. Offshore
            eğitimlerinde bu bilgiyi uygulamalı olarak öğrenir, karar verme
            refleksini gerçek rota üzerinde geliştirirsin.
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

            <a
              href="https://wa.me/905324873813?text=Merhaba,%20COLREG%20ve%20e%C4%9Fitimler%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
              target="_blank"
              rel="noreferrer"
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
              WhatsApp
            </a>
          </div>
        </div>

        {/* RELATED */}
        <div style={{ marginTop: 80 }}>
          <h3
            style={{
              margin: 0,
              fontSize: 24,
              fontWeight: 900,
            }}
          >
            İlgili konular
          </h3>

          <div
            style={{
              marginTop: 20,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            {relatedTopics.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  padding: "10px 14px",
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  color: "#e2e8f0",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GuideCta
        title="COLREG bilgisini gerçek trafikte uygulamaya hazır mısınız?"
        description="Albatros Sailing eğitimleri kuralları ezberletmez. Gerçek trafik, gerçek rota ve gerçek karar deneyimi sunar."
      />
    </main>
  );
}