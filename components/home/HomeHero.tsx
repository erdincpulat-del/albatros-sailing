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
          liveTitle: "Canlı Eğitim Görünümü",
          liveText:
            "Gerçek rota, gerçek tekne, gerçek karar anları. Eğitim izlenmez, yaşanır.",
          liveBadge: "Gerçek Offshore Hissi",
          strip1Title: "GERÇEK DENEYİM",
          strip1Text: "Açık denizde gerçek karar anları",
          strip2Title: "GÜVEN SİSTEMİ",
          strip2Text: "QR doğrulanabilir sertifika altyapısı",
          strip3Title: "SEVİYE YOLU",
          strip3Text: "YY1 → Yachtmaster progression",
        }
      : {
          badge: "ALBATROS SAILING • OPEN SEA TRAINING",
          title1: "Stop watching the sea.",
          title2: "Learn to command it.",
          description:
            "This training does more than teach sailing. It builds captaincy through real routes, real traffic, and real decision-making moments.",
          primary: "Join the Training",
          secondary: "View Programs",
          liveTitle: "Live Training View",
          liveText:
            "Real route, real yacht, real decision moments. Training is not watched, it is lived.",
          liveBadge: "Real Offshore Feeling",
          strip1Title: "REAL EXPERIENCE",
          strip1Text: "Real decision moments at open sea",
          strip2Title: "TRUST SYSTEM",
          strip2Text: "QR verifiable certificate infrastructure",
          strip3Title: "LEVEL PATH",
          strip3Text: "YY1 → Yachtmaster progression",
        };

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "140px 0 90px",
        minHeight: "78vh",
        display: "flex",
        alignItems: "center",
        background:
          "radial-gradient(circle at 16% 18%, rgba(103,211,255,0.11), transparent 26%), radial-gradient(circle at 84% 32%, rgba(103,211,255,0.06), transparent 22%), linear-gradient(180deg, #07101d 0%, #091321 42%, #08111d 100%)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(8,17,29,0.18) 0%, rgba(8,17,29,0.04) 24%, rgba(8,17,29,0.10) 55%, rgba(8,17,29,0.28) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          opacity: 0.16,
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.14) 35%, rgba(0,0,0,0.34) 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          className="home-hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.08fr) minmax(340px, 520px)",
            gap: 34,
            alignItems: "center",
          }}
        >
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
                boxShadow: "0 0 28px rgba(103,211,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              {content.badge}
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 5.8vw, 82px)",
                fontWeight: 900,
                lineHeight: 1.01,
                margin: 0,
                color: "#f8fafc",
                letterSpacing: "-0.055em",
                textShadow: "0 8px 30px rgba(0,0,0,0.18)",
              }}
            >
              {content.title1}
              <br />
              <span
                style={{
                  color: "#67d3ff",
                  textShadow: "0 0 26px rgba(103,211,255,0.18)",
                }}
              >
                {content.title2}
              </span>
            </h1>

            <p
              style={{
                marginTop: 22,
                maxWidth: 640,
                fontSize: 17,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.86)",
                textShadow: "0 4px 18px rgba(0,0,0,0.14)",
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
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 30px rgba(66,189,248,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 24px rgba(66,189,248,0.22)";
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
                  backdropFilter: "blur(8px)",
                  transition:
                    "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(103,211,255,0.22)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 24px rgba(66,189,248,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.16)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {content.secondary}
              </Link>
            </div>
          </div>

          <div>
            <div
              className="group"
              style={{
                position: "relative",
                borderRadius: 28,
                overflow: "hidden",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.82), rgba(10,15,24,0.90))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 18px 36px rgba(0,0,0,0.24)",
                backdropFilter: "blur(14px)",
                aspectRatio: "9/16",
                width: "100%",
                maxWidth: 420,
                transition:
                  "transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 30px 60px rgba(0,0,0,0.35)";
                e.currentTarget.style.borderColor =
                  "rgba(103,211,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(0,0,0,0.24)";
                e.currentTarget.style.borderColor =
                  "rgba(255,255,255,0.08)";
              }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.jpg"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  transform: "scale(1.03)",
                  transition: "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
                  filter: "saturate(0.96) contrast(1.04) brightness(0.75)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                }}
              >
                <source src="/videos/home-hero-small kopyası.webm" type="video/webm" />
              </video>

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(4,8,16,0.15), rgba(4,8,16,0.45) 45%, rgba(4,8,16,0.78) 100%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 120,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0.35), transparent)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 22% 18%, rgba(103,211,255,0.18), transparent 28%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 18,
                  right: 18,
                  bottom: 32,
                  borderRadius: 22,
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.72), rgba(10,15,24,0.88))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: 24,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 18px 36px rgba(0,0,0,0.26)",
                  transition:
                    "transform 0.45s ease, box-shadow 0.45s ease, border-color 0.45s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 24px 42px rgba(0,0,0,0.32)";
                  e.currentTarget.style.borderColor =
                    "rgba(103,211,255,0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 36px rgba(0,0,0,0.26)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#8ed8ff",
                    marginBottom: 10,
                  }}
                >
                  {content.liveBadge}
                </div>

                <h3
                  style={{
                    margin: 0,
                    fontSize: 28,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#f8fafc",
                  }}
                >
                  {content.liveTitle}
                </h3>

                <p
                  style={{
                    marginTop: 12,
                    marginBottom: 0,
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(226,232,240,0.82)",
                  }}
                >
                  {content.liveText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="home-hero-strip"
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 20,
            opacity: 0.88,
          }}
        >
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8ed8ff",
                marginBottom: 8,
              }}
            >
              {content.strip1Title}
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#cbd5e1",
              }}
            >
              {content.strip1Text}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8ed8ff",
                marginBottom: 8,
              }}
            >
              {content.strip2Title}
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#cbd5e1",
              }}
            >
              {content.strip2Text}
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: 16,
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#8ed8ff",
                marginBottom: 8,
              }}
            >
              {content.strip3Title}
            </div>
            <div
              style={{
                fontSize: 14,
                lineHeight: 1.8,
                color: "#cbd5e1",
              }}
            >
              {content.strip3Text}
            </div>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 1100px) {
              .home-hero-grid {
                grid-template-columns: 1fr !important;
                align-items: start !important;
              }
            }

            @media (max-width: 820px) {
              .home-hero-strip {
                grid-template-columns: 1fr !important;
              }
            }
          `,
        }}
      />
    </section>
  );
}