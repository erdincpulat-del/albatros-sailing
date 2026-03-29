"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "905324873813";

const waLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        transition: "all 0.3s ease",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        background: scrolled
          ? "rgba(5,11,20,0.85)"
          : "rgba(5,11,20,0.55)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: scrolled ? "10px 24px" : "18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          transition: "all 0.3s ease",
        }}
      >
        {/* LOGO */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #67d3ff, #42bdf8)",
                boxShadow: "0 0 12px rgba(103,211,255,0.6)",
                flexShrink: 0,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontSize: scrolled ? 14 : 16,
                  fontWeight: 800,
                  letterSpacing: 1,
                  color: "#ffffff",
                  transition: "all 0.3s ease",
                  lineHeight: 1.1,
                }}
              >
                ALBATROS SAILING
              </span>

              <span
                style={{
                  fontSize: 11,
                  opacity: 0.6,
                  letterSpacing: 1,
                  color: "#cfd8e3",
                  lineHeight: 1.1,
                }}
              >
                Official Sailing Training Platform
              </span>
            </div>
          </div>
        </Link>

        {/* MENU */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 26,
          }}
        >
          <Link
            href="/training"
            style={menuStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#67d3ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#e6ecf4";
            }}
          >
            Eğitimler
          </Link>

          <Link
            href="/charter"
            style={menuStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#67d3ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#e6ecf4";
            }}
          >
            Tekne Kiralama
          </Link>

          <Link
            href="/verify"
            style={menuStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#67d3ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#e6ecf4";
            }}
          >
            Doğrula
          </Link>

          <Link
            href="/contact"
            style={menuStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#67d3ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#e6ecf4";
            }}
          >
            İletişim
          </Link>

          {/* CTA BUTTON */}
          <a
            href={waLink(
              "Merhaba, Albatros Sailing açık deniz eğitim programları hakkında bilgi almak istiyorum."
            )}
            target="_blank"
            rel="noreferrer"
            style={{
              marginLeft: 10,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "10px 18px",
              borderRadius: 999,
              background: "linear-gradient(135deg, #67d3ff, #42bdf8)",
              color: "#02121c",
              fontWeight: 700,
              fontSize: 13,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(103,211,255,0.45)",
              transition: "all 0.25s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 0 30px rgba(103,211,255,0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(103,211,255,0.45)";
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#8CFF7A",
                boxShadow: "0 0 10px rgba(140,255,122,0.85)",
                display: "inline-block",
              }}
            />
            Hemen Yaz
          </a>
        </nav>
      </div>
    </header>
  );
}

const menuStyle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 600,
  letterSpacing: 0.4,
  color: "#e6ecf4",
  textDecoration: "none",
  opacity: 0.9,
  transition: "all 0.25s ease",
  whiteSpace: "nowrap",
};