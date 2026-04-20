"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function HomeHero() {
  const { locale } = useLanguage();

  const content =
    locale === "tr"
      ? {
          badge: "ALBATROS SAILING • AÇIK DENİZ EĞİTİMİ",
          title1: "Denizi sadece izleme.",
          title2: "Ona hükmetmeyi öğren.",
          description:
            "Bu eğitim sadece yelken öğretmez. Gerçek rotalar, gerçek trafik ve gerçek karar anlarıyla kaptanlık refleksi kazandırır.",
          primary: "Eğitime Katıl",
          secondary: "Programları İncele",
          snapshot: "Program Özeti",
          duration: "Süre",
          durationValue: "6 Gün Offshore",
          crew: "Katılım",
          crewValue: "Maksimum 4 Kişi",
          route: "Rota",
          routeValue: "Türkiye + Yunan Adaları",
          certificate: "Sertifika",
          certificateValue: "QR Doğrulanabilir",
        }
      : {
          badge: "ALBATROS SAILING • OPEN SEA TRAINING",
          title1: "Stop watching the sea.",
          title2: "Learn to command it.",
          description:
            "This training does more than teach sailing. It builds captaincy through real routes, real traffic, and real decision-making moments.",
          primary: "Join the Training",
          secondary: "View Programs",
          snapshot: "Program Snapshot",
          duration: "Duration",
          durationValue: "6 Days Offshore",
          crew: "Participation",
          crewValue: "Maximum 4 People",
          route: "Route",
          routeValue: "Türkiye + Greek Islands",
          certificate: "Certificate",
          certificateValue: "QR Verifiable",
        };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(2,6,12,0.92) 0%, rgba(2,6,12,0.68) 38%, rgba(2,6,12,0.26) 100%)",
        }}
      />

      {/* SOFT GLOW */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 30%, rgba(103,211,255,0.12), transparent 32%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1240,
          margin: "0 auto",
          padding: "120px 24px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gap: 28,
            alignItems: "end",
            gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 400px)",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ maxWidth: 760 }}>
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(103,211,255,0.10)",
                border: "1px solid rgba(103,211,255,0.18)",
                color: "#8ed8ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              {content.badge}
            </div>

            <h1
              style={{
                fontSize: "clamp(44px, 6vw, 82px)",
                fontWeight: 900,
                lineHeight: 1.02,
                margin: 0,
                color: "#f8fafc",
                letterSpacing: "-0.05em",
              }}
            >
              {content.title1}
              <br />
              <span style={{ color: "#67d3ff" }}>{content.title2}</span>
            </h1>

            <p
              style={{
                marginTop: 22,
                maxWidth: 640,
                fontSize: 17,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.86)",
              }}
            >
              {content.description}
            </p>

            <div
              style={{
                marginTop: 28,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 22px",
                  borderRadius: 999,
                  background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
                  color: "#04121c",
                  textDecoration: "none",
                  fontWeight: 900,
                  boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                }}
              >
                {content.primary}
              </Link>

              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "14px 22px",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.16)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#f8fafc",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                {content.secondary}
              </Link>
            </div>
          </div>

          {/* RIGHT SNAPSHOT CARD */}
          <div
            style={{
              borderRadius: 24,
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.88), rgba(10,15,24,0.94))",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 24,
              boxShadow: "0 18px 36px rgba(0,0,0,0.24)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8ed8ff",
              }}
            >
              {content.snapshot}
            </div>

            <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
              <InfoRow label={content.duration} value={content.durationValue} />
              <InfoRow label={content.crew} value={content.crewValue} />
              <InfoRow label={content.route} value={content.routeValue} />
              <InfoRow
                label={content.certificate}
                value={content.certificateValue}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: "14px 14px",
        borderRadius: 16,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "rgba(226,232,240,0.55)",
        }}
      >
        {label}
      </div>

      <div
        style={{
          marginTop: 8,
          fontSize: 15,
          fontWeight: 700,
          color: "#f8fafc",
        }}
      >
        {value}
      </div>
    </div>
  );
}