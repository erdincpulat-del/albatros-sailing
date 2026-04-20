"use client";

import Link from "next/link";

const topics = [
  {
    title: "Denizde Acil Durumlar",
    description:
      "Yangın, su alma, adam denize düştü ve ani kriz anlarında doğru öncelik sırası.",
    href: "/guide/denizde-acil-durumlar",
    badge: "EMERGENCY",
  },
  {
    title: "Denizde Çatışmayı Önleme",
    description:
      "Riskli yaklaşmaları erken fark etmek, doğru karar vermek ve güvenli ayrım oluşturmak.",
    href: "/guide/denizde-catismayi-onleme",
    badge: "COLLISION",
  },
  {
    title: "VHF / Mayday Mantığı",
    description:
      "Acil çağrı, doğru iletişim ve kriz anında net bilgi aktarımı disiplini.",
    href: "/guide/denizde-acil-durumlar",
    badge: "COMMUNICATION",
  },
  {
    title: "Tekne Hakimiyeti",
    description:
      "Dar alan, yanaşma, ayrılma ve panik oluşturmadan tekneyi kontrol altında tutma.",
    href: "/guide/tekne-hakimiyeti",
    badge: "CONTROL",
  },
];

const highlights = [
  "Güvenlik, ekipman değil; karar sırasıdır.",
  "Kriz anında ilk dakikalar, sonucu belirler.",
  "Denizde panik değil, prosedür çalışmalıdır.",
  "Albatros eğitimlerinde güvenlik teori değil, refleks haline getirilir.",
];

export default function SafetyGuidePage() {
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
          padding: "120px 24px 100px",
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 760 }}>
          <div
            style={{
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: 999,
              background: "rgba(66,189,248,0.08)",
              border: "1px solid rgba(66,189,248,0.18)",
              color: "#67d3ff",
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
              marginBottom: 18,
            }}
          >
            ALBATROS ACADEMY • SAFETY
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(38px, 5vw, 66px)",
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
            }}
          >
            Güvenlik,
            <br />
            ekipmandan önce
            <br />
            <span style={{ color: "#67d3ff" }}>karar sistemidir.</span>
          </h1>

          <p
            style={{
              marginTop: 20,
              color: "rgba(226,232,240,0.78)",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 760,
            }}
          >
            Gerçek denizcilikte güvenlik; yangın söndürücüyü, can salını veya
            telsizi bilmekten fazlasıdır. Asıl fark, kriz anında doğru öncelik
            sırası kurabilmek, paniği yönetebilmek ve ekibi yönlendirebilmektir.
          </p>
        </div>

        <div
          style={{
            marginTop: 28,
            padding: "20px 22px",
            borderRadius: 18,
            background: "rgba(103,211,255,0.05)",
            border: "1px solid rgba(103,211,255,0.15)",
            maxWidth: 820,
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
            CRISIS DISCIPLINE
          </div>

          <div
            style={{
              color: "#dbeafe",
              fontSize: 14,
              lineHeight: 1.75,
              fontWeight: 600,
            }}
          >
            Açık denizde güvenlik bilgisi yalnızca ezberle korunmaz. Gece,
            yoğun trafik, kötü hava veya ekip yorgunluğu gibi durumlarda doğru
            kriz refleksi, profesyonel kaptanlık seviyesini belirler.
          </div>
        </div>

        <div
          style={{
            marginTop: 50,
            display: "grid",
            gap: 12,
          }}
        >
          {highlights.map((item) => (
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

        <div
          style={{
            marginTop: 60,
            marginBottom: 10,
            fontSize: 12,
            letterSpacing: 1,
            textTransform: "uppercase",
            color: "#67d3ff",
            fontWeight: 800,
          }}
        >
          SAFETY MODULES
        </div>

        <div
          style={{
            marginTop: 14,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {topics.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              style={{
                textDecoration: "none",
                color: "#f8fafc",
                borderRadius: 22,
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(18,25,39,0.9), rgba(10,15,24,0.95))",
                border: "1px solid rgba(255,255,255,0.06)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(66,189,248,0.15)";
                e.currentTarget.style.borderColor = "rgba(66,189,248,0.28)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.35)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "6px 10px",
                  borderRadius: 999,
                  background: "rgba(66,189,248,0.08)",
                  border: "1px solid rgba(66,189,248,0.18)",
                  color: "#67d3ff",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1,
                  marginBottom: 14,
                }}
              >
                {item.badge}
              </div>

              <h3
                style={{
                  margin: 0,
                  fontSize: 20,
                  fontWeight: 800,
                  marginBottom: 10,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  color: "rgba(226,232,240,0.74)",
                  lineHeight: 1.65,
                }}
              >
                {item.description}
              </p>
            </Link>
          ))}
        </div>

        <div
          style={{
            marginTop: 80,
            padding: "28px 24px",
            borderRadius: 24,
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
            REAL CAPTAINCY PATH
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: 26,
              fontWeight: 900,
              lineHeight: 1.2,
              color: "#f8fafc",
            }}
          >
            Güvenlik bilgisini gerçek denizde geliştirmek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.75)",
              lineHeight: 1.7,
              fontSize: 15,
              maxWidth: 760,
            }}
          >
            Bu modüller yalnızca okunmak için değil, gerçek rota eğitimlerinde
            uygulanmak için vardır. Offshore eğitimlerinde güvenlik; refleks,
            ekip yönetimi ve karar disiplini ile birlikte çalışır.
          </p>

          <div
            style={{
              marginTop: 22,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/programs"
              style={{
                padding: "14px 24px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 20px 40px rgba(66,189,248,0.35)",
              }}
            >
              Programları İncele
            </Link>

            <Link
              href="/training/offshore-skipper"
              style={{
                padding: "14px 24px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Offshore Eğitimi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}