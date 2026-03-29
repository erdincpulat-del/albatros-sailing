"use client";

import Link from "next/link";

const quickLinks = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Eğitimler", href: "/training" },
  { label: "Doğrula", href: "/verify" },
  { label: "İletişim", href: "/contact" },
];

const programLinks = [
  { label: "Basic Sailing", href: "/training/basic-sailing" },
  { label: "Coastal Skipper", href: "/training/coastal-skipper" },
  { label: "Offshore Skipper", href: "/training/offshore-skipper" },
  { label: "Yachtmaster", href: "/training/yachtmaster" },
];

export default function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #050b14 0%, #07111f 40%, #030712 100%)",
        color: "#e2e8f0",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-80px",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(56,189,248,0.10)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          right: "-80px",
          width: 260,
          height: 260,
          borderRadius: "50%",
          background: "rgba(34,197,94,0.08)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "78px 20px 28px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 40,
            paddingBottom: 34,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 18,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, rgba(56,189,248,0.95), rgba(14,165,233,0.55))",
                  boxShadow: "0 0 18px rgba(56,189,248,0.35)",
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                    letterSpacing: 0.8,
                  }}
                >
                  ALBATROS SAILING
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(226,232,240,0.68)",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginTop: 3,
                  }}
                >
                  Official Sailing Training Platform
                </div>
              </div>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: 500,
                color: "rgba(226,232,240,0.82)",
                fontSize: 15,
                lineHeight: 1.8,
              }}
            >
              Gerçek deniz tecrübesi, küçük grup yapısı ve doğrulanabilir
              sertifika sistemi ile güven veren premium yelken eğitimi.
            </p>

            <div
              style={{
                marginTop: 18,
                display: "flex",
                flexWrap: "wrap",
                gap: 10,
              }}
            >
              {[
                "Bodrum çıkışlı",
                "Maksimum 4 kişi",
                "QR doğrulamalı sistem",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 999,
                    background:
                      "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(56,189,248,0.04))",
                    border: "1px solid rgba(56,189,248,0.14)",
                    color: "#7dd3fc",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#7dd3fc",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 14,
              }}
            >
              Hızlı Menü
            </div>

            <div
              style={{
                display: "grid",
                gap: 10,
              }}
            >
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    color: "rgba(226,232,240,0.86)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: 13,
                fontWeight: 800,
                color: "#7dd3fc",
                textTransform: "uppercase",
                letterSpacing: 1,
                marginBottom: 14,
              }}
            >
              Programlar
            </div>

            <div
              style={{
                display: "grid",
                gap: 10,
                marginBottom: 18,
              }}
            >
              {programLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    color: "rgba(226,232,240,0.86)",
                    textDecoration: "none",
                    fontSize: 15,
                    fontWeight: 600,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div
              style={{
                display: "grid",
                gap: 8,
                fontSize: 14,
                color: "rgba(226,232,240,0.72)",
                lineHeight: 1.7,
              }}
            >
              <div>Bodrum, Türkiye</div>
              <div>info@albatrossailing.com</div>
              <div>+90 532 487 38 13</div>
            </div>
          </div>
        </div>

        <div
          style={{
            paddingTop: 18,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            fontSize: 13,
            color: "rgba(148,163,184,0.84)",
          }}
        >
          <div>© {new Date().getFullYear()} Albatros Sailing. Tüm hakları saklıdır.</div>
          <div>Freedom • Open Sea • Leadership • Trust</div>
        </div>
      </div>
    </footer>
  );
}