"use client";

import Link from "next/link";

const WHATSAPP_NUMBER = "905324873813";

const waLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

const urgencyPoints = [
  "Küçük grup yapısı nedeniyle kontenjanlar hızlı dolabilir",
  "Her program bir sonraki seviyeye zemin hazırlar",
  "Gerçek deniz pratiği ile öğrenme süreci hızlanır",
  "Başvurunu ertelemek, doğru zamanı kaçırmana neden olabilir",
];

export default function CallToAction() {
  return (
    <section
      style={{
        position: "relative",
        padding: "110px 24px 130px",
        background: "linear-gradient(180deg, #04070c 0%, #06101b 100%)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(56,189,248,0.08), transparent 35%), radial-gradient(circle at 80% 70%, rgba(217,188,119,0.10), transparent 35%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1080,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            borderRadius: 30,
            padding: "40px 28px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.96), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 24px 70px rgba(0,0,0,0.30), inset 0 0 24px rgba(125,211,252,0.04)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(125,211,252,0.08)",
                border: "1px solid rgba(125,211,252,0.16)",
                color: "#8ed8ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Limited Capacity
            </div>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 4vw, 60px)",
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                color: "#f8fafc",
              }}
            >
              Denize çıkmak bir karar.
              <br />
              Ertelemek ise fırsat kaybettirir.
            </h2>

            <p
              style={{
                marginTop: 18,
                color: "rgba(226,232,240,0.80)",
                fontSize: 16,
                lineHeight: 1.85,
                maxWidth: 720,
                marginInline: "auto",
              }}
            >
              Albatros Sailing ile sadece eğitim almazsın. Gerçek deniz
              koşullarında düşünmeyi, karar vermeyi ve yönetmeyi öğrenirsin.
              Küçük grup yapısı nedeniyle dönemler hızla dolabilir.
            </p>

            <div
              style={{
                marginTop: 18,
                display: "inline-flex",
                padding: "7px 12px",
                borderRadius: 999,
                background: "rgba(134,239,172,0.08)",
                border: "1px solid rgba(134,239,172,0.16)",
                color: "#86efac",
                fontSize: 12,
                fontWeight: 800,
              }}
            >
              Early bird dönemsel olarak açılır
            </div>
          </div>

          <div
            style={{
              marginTop: 30,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
              gap: 14,
            }}
          >
            {urgencyPoints.map((item) => (
              <div
                key={item}
                style={{
                  padding: "16px 16px",
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(15,24,40,0.86), rgba(10,16,26,0.70))",
                  border: "1px solid rgba(125,211,252,0.12)",
                  color: "#dbeafe",
                  fontSize: 14,
                  lineHeight: 1.7,
                  fontWeight: 600,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href={waLink(
                "Merhaba, eğitim programları için kontenjan ve uygunluk bilgisi almak istiyorum."
              )}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 180,
                padding: "16px 22px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#082032",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 900,
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              Yerini Ayır
            </a>

            <Link
              href="/training"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 180,
                padding: "16px 22px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                textDecoration: "none",
                fontSize: 15,
                fontWeight: 800,
              }}
            >
              Programları İncele
            </Link>
          </div>

          <div
            style={{
              marginTop: 12,
              textAlign: "center",
              color: "rgba(226,232,240,0.58)",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            Bodrum çıkışlı • Küçük grup • Hızlı başvuru
          </div>
        </div>
      </div>
    </section>
  );
}