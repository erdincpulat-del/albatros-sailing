"use client";

import { useEffect, useState } from "react";

const WA_NUMBER = "905324873813"; // 🔴 NUMARANI YAZ

const waLink = (message: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export default function FloatingWhatsApp() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    checkMobile();
    handleScroll();

    window.addEventListener("resize", checkMobile);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const size = isMobile || isScrolled ? "small" : "large";

  return (
    <>
      <style>
        {`
        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 0.6; }
          70% { transform: scale(1.2); opacity: 0; }
          100% { opacity: 0; }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
          100% { transform: translateY(0); }
        }
        `}
      </style>

      <a
        href={waLink(
          "Merhaba, Albatros Sailing eğitimleri hakkında bilgi almak istiyorum."
        )}
        target="_blank"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: size === "small" ? 8 : 12,
          padding: size === "small" ? "10px 12px" : "14px 18px",
          borderRadius: 999,
          background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
          color: "#04121c",
          fontWeight: 800,
          textDecoration: "none",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
          transition: "all 0.25s ease",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        {/* ICON + PULSE */}
        <span
          style={{
            position: "relative",
            width: size === "small" ? 34 : 40,
            height: size === "small" ? 34 : 40,
            borderRadius: "50%",
            display: "grid",
            placeItems: "center",
            background: "rgba(255,255,255,0.2)",
          }}
        >
          <span
            style={{
              position: "absolute",
              inset: -6,
              borderRadius: "50%",
              background: "rgba(103,211,255,0.35)",
              animation: "pulse 1.8s infinite",
            }}
          />

          <span style={{ fontSize: size === "small" ? 14 : 18 }}>
            💬
          </span>
        </span>

        {/* TEXT (küçülüp büyür) */}
        {size === "large" && (
          <span style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 14, fontWeight: 900 }}>
              WhatsApp
            </span>

            <span
              style={{
                fontSize: 11,
                opacity: 0.8,
              }}
            >
              Hızlı bilgi & kayıt
            </span>
          </span>
        )}

        {/* ONLINE DOT */}
        <span
          style={{
            position: "absolute",
            top: -4,
            right: -4,
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: "#22c55e",
            boxShadow: "0 0 10px rgba(34,197,94,0.8)",
          }}
        />
      </a>
    </>
  );
}