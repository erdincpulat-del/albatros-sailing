"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Ana Sayfa", href: "/" },

  {
    label: "Eğitim",
    href: "/training",
    children: [
      { label: "Başlangıç Eğitimi", href: "/training/basic-sailing" },
      { label: "Coastal Skipper", href: "/training/coastal-skipper" },
      { label: "Offshore Skipper", href: "/training/offshore-skipper" },
      { label: "Yachtmaster", href: "/training/yachtmaster" },
    ],
  },

  {
    label: "Programlar",
    href: "/programs",
    children: [
      { label: "Tüm Programlar", href: "/programs" },
      { label: "Basic Sailing", href: "/programs/basic-sailing" },
      { label: "Coastal Skipper", href: "/programs/coastal-skipper" },
      { label: "Offshore Yacht Course", href: "/programs/offshore-yacht-course" },
      { label: "Yachtmaster Track", href: "/programs/yachtmaster" },
    ],
  },

  { label: "Tekne Kiralama", href: "/charter" },

  {
    label: "Akademi",
    href: "/guide",
    children: [
      { label: "COLREG", href: "/guide/colreg" },
      { label: "Yat Kaptanı Nasıl Olunur", href: "/guide/yat-kaptani-nasil-olunur" },
      { label: "AIS & VTS", href: "/guide/ais-ve-vts-nedir" },
      { label: "Rota Planlama", href: "/guide/rota-planlama" },
      { label: "Navigasyon", href: "/guide/navigasyon" },
      { label: "Meteoroloji", href: "/guide/denizde-meteoroloji" },
      { label: "Demirde Alkol", href: "/guide/anchored-alcohol" },
      { label: "STCW Quiz", href: "/stcw-quiz" },
    ],
  },

  { label: "Doğrula", href: "/verify" },
  { label: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        borderBottom: "1px solid rgba(255,255,255,.08)",
        background: "rgba(7,11,22,.76)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 18,
          padding: "14px 0",
          flexWrap: "wrap",
        }}
      >
        {/* LOGO */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            textDecoration: "none",
            color: "inherit",
            minWidth: "fit-content",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,.12)",
              background:
                "linear-gradient(135deg, rgba(120,179,255,.18), rgba(53,211,255,.14))",
              boxShadow: "0 10px 20px rgba(0,0,0,.18)",
              flexShrink: 0,
            }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <div
              style={{
                fontWeight: 800,
                letterSpacing: "0.12em",
                fontSize: 12,
                opacity: 0.96,
                color: "#f8fafc",
              }}
            >
              ALBATROS
            </div>
            <div
              style={{
                fontSize: 12,
                opacity: 0.76,
                color: "#cbd5e1",
              }}
            >
              Sailing • Premium Academy
            </div>
          </div>
        </Link>

        {/* MAIN NAV */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            flexWrap: "wrap",
          }}
        >
          {navItems.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0;
            const isOpen = openMenu === item.label;

            if (!hasChildren) {
              return (
                <Link key={item.href} href={item.href} style={navLinkStyle}>
                  {item.label}
                </Link>
              );
            }

            return (
              <div
                key={item.label}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenMenu(item.label)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  style={{
                    ...navLinkStyle,
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(255,255,255,.03)",
                  }}
                >
                  <span>{item.label}</span>
                  <span
                    style={{
                      fontSize: 10,
                      opacity: 0.8,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    ▼
                  </span>
                </button>

                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    left: 0,
                    minWidth: 260,
                    maxHeight: 360,
                    overflowY: "auto",
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,.08)",
                    background: "rgba(10,15,28,.96)",
                    boxShadow: "0 18px 44px rgba(0,0,0,.28)",
                    padding: 10,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? "auto" : "none",
                    transform: isOpen ? "translateY(0)" : "translateY(8px)",
                    transition: "all 0.22s ease",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                  }}
                >
                  {item.children!.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "12px 14px",
                        borderRadius: 12,
                        textDecoration: "none",
                        color: child.href === "/stcw-quiz" ? "#67d3ff" : "#e2e8f0",
                        fontSize: 14,
                        fontWeight: 700,
                        transition: "all 0.18s ease",
                        background:
                          child.href === "/stcw-quiz"
                            ? "rgba(103,211,255,.08)"
                            : "transparent",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(103,211,255,.10)";
                        e.currentTarget.style.color = "#67d3ff";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          child.href === "/stcw-quiz"
                            ? "rgba(103,211,255,.08)"
                            : "transparent";
                        e.currentTarget.style.color =
                          child.href === "/stcw-quiz" ? "#67d3ff" : "#e2e8f0";
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </nav>

        {/* CTA AREA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/charter"
            className="group relative"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              textDecoration: "none",
              color: "#f8fafc",
              fontSize: 14,
              fontWeight: 800,
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(255,255,255,.04)",
              transition: "all 0.2s ease",
              overflow: "hidden",
            }}
          >
            <span
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.08), transparent 70%)",
                transform: "translateX(-120%)",
                animation: "shine 3s linear infinite",
              }}
            />
            <span style={{ position: "relative", zIndex: 2 }}>
              Tekne Kiralama
            </span>
          </Link>

          <Link
            href="/programs/offshore-yacht-course"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              textDecoration: "none",
              color: "#f8fafc",
              fontSize: 14,
              fontWeight: 800,
              border: "1px solid rgba(255,255,255,.08)",
              background: "rgba(255,255,255,.04)",
              transition: "all 0.2s ease",
            }}
          >
            Offshore Eğitim
          </Link>

          <Link
            href="/stcw-quiz"
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              textDecoration: "none",
              color: "#67d3ff",
              fontSize: 14,
              fontWeight: 900,
              border: "1px solid rgba(103,211,255,.22)",
              background: "rgba(103,211,255,.08)",
              boxShadow: "0 0 18px rgba(103,211,255,.12)",
              transition: "all 0.2s ease",
            }}
          >
            STCW Quiz
          </Link>

          <Link
            href="/verify"
            className="group relative inline-flex items-center justify-center"
            style={{
              padding: "10px 16px",
              borderRadius: 12,
              textDecoration: "none",
              color: "#04121c",
              fontSize: 14,
              fontWeight: 900,
              background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
              boxShadow:
                "0 14px 28px rgba(66,189,248,.22), 0 0 18px rgba(103,211,255,.18)",
              transition: "all 0.2s ease",
              overflow: "hidden",
              position: "relative",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
              e.currentTarget.style.boxShadow =
                "0 18px 36px rgba(66,189,248,.30), 0 0 26px rgba(103,211,255,.34)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow =
                "0 14px 28px rgba(66,189,248,.22), 0 0 18px rgba(103,211,255,.18)";
            }}
          >
            <span
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.28), transparent 70%)",
                animation: "shine 1.8s linear infinite",
              }}
            />
            <span
              style={{
                position: "absolute",
                bottom: -8,
                left: "50%",
                transform: "translateX(-50%)",
                width: "70%",
                height: 18,
                background: "rgba(103,211,255,0.42)",
                filter: "blur(16px)",
              }}
            />
            <span style={{ position: "relative", zIndex: 2 }}>
              Lisans Doğrula
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}

const navLinkStyle: React.CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  textDecoration: "none",
  color: "#e2e8f0",
  fontSize: 14,
  fontWeight: 700,
  border: "1px solid rgba(255,255,255,.06)",
  background: "rgba(255,255,255,.03)",
  transition: "all 0.2s ease",
};