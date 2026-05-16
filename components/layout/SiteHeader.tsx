"use client";

import Link from "next/link";
import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageProvider";

const WHATSAPP_NUMBER = "905324873813";

const waLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};

type MenuItem = {
  label: string;
  href: string;
  desc?: string;
  external?: boolean;
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

type NavGroup = {
  key: string;
  label: string;
  href?: string;
  items?: MenuItem[];
  sections?: MenuSection[];
};

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>("home");

  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navGroups = useMemo<NavGroup[]>(() => {
    if (locale === "tr") {
      return [
        {
          key: "home",
          label: "Ana Sayfa",
          href: "/",
          items: [
            { label: "Ana Sayfa", href: "/" },
            { label: "Programlar Bölümü", href: "/#programlar" },
            { label: "Eğitim Modülleri", href: "/#egitim" },
            { label: "Charter Bölümü", href: "/#charter" },
          ],
        },
        {
          key: "education",
          label: "Eğitim",
          href: "/guide",
          sections: [
            {
              title: "YES Eğitim Sistemi",
              items: [
                { label: "Güvenlik", href: "/guide/guvenlik" },
                { label: "Demirleme ve Demir Alma", href: "/guide/demirleme-ve-demir-alma" },
                { label: "Marina Giriş / Çıkış Usulleri", href: "/guide/marina-giris-cikis-usulleri" },
                { label: "Tekne Hakimiyeti", href: "/guide/tekne-hakimiyeti" },
              ],
            },
            {
              title: "Navigasyon",
              items: [
                { label: "Navigasyon", href: "/guide/navigasyon" },
                { label: "Rota Planlama", href: "/guide/rota-planlama" },
                { label: "Paper Chart Navigation", href: "/guide/paper-chart-navigation" },
                { label: "Almanac", href: "/guide/almanac" },
                { label: "Sextant", href: "/guide/sextant" },
                { label: "Sextant Nedir", href: "/guide/sextant-nedir" },
              ],
            },
            {
              title: "Trafik ve Kurallar",
              items: [
                { label: "COLREG", href: "/guide/colreg" },
                { label: "Denizde Çatışma Önleme", href: "/guide/denizde-catisma-onleme" },
                { label: "AIS / VTS", href: "/guide/ais-ve-vts" },
                { label: "AIS / VTS Nedir", href: "/guide/ais-ve-vts-nedir" },
                { label: "TSS Nedir", href: "/guide/tss-nedir" },
                { label: "Buoyage", href: "/guide/buoyage" },
              ],
            },
            {
              title: "Hava ve Seyir",
              items: [
                { label: "Denizde Meteoroloji", href: "/guide/denizde-meteoroloji" },
                { label: "Gece Seyri Fenerleri", href: "/guide/gece-seyri-fenerleri" },
                { label: "Signals", href: "/guide/signals" },
                { label: "Wind Engine", href: "/guide/wind-engine" },
                { label: "Yelkenin Çalışma Prensibi", href: "/guide/yelkenin-calisma-prensibi" },
              ],
            },
            {
  title: "Simülasyonlar",
  items: [
    {
      label: "Marina Simulator",
      href: "/guide/yye/marina-simulator",
      desc: "Interaktif YES eğitim simülasyonu",
    },
    { label: "Chart Plotter", href: "/guide/yye/chart-plotter" },
{ label: "DR / EP / Fix", href: "/guide/yye/dr-ep-fix" },
    { label: "Passage Planning", href: "/guide/passage-planning" },
    { label: "Radar", href: "/guide/radar" },
    { label: "Bridge Tools", href: "/guide/bridge-dashboard" },
  ],
},
            {
              title: "İleri ve Kariyer",
              items: [
                { label: "Yat Kaptanı Nasıl Olunur", href: "/guide/yat-kaptani-nasil-olunur" },
                { label: "Denizde Acil Durumlar", href: "/guide/denizde-acil-durumlar" },
                { label: "STCW Quiz", href: "/stcw-quiz" },
                { label: "Anchored Alcohol", href: "/guide/anchored-alcohol" },
              ],
            },
          ],
        },
        {
          key: "programs",
          label: "Programlar",
          href: "/programs",
          items: [
            { label: "Tüm Programlar", href: "/programs" },
            { label: "Başlangıç Yelken Eğitimi", href: "/programs/basic-sailing" },
            { label: "Coastal Skipper", href: "/programs/coastal-skipper" },
            { label: "Offshore Yacht Course", href: "/programs/offshore-yacht-course" },

            { label: "Yelkenli Yat Eğitim ve Tatil", href: "/yelkenli-yat-egitim-ve-tatil" },
            { label: "Bodrum Yelken Eğitimi", href: "/bodrum-yelken-egitimi" },
            { label: "Offshore Yelken Eğitimi", href: "/offshore-yelken-egitimi" },
            { label: "Konaklamalı Yelken Eğitimi", href: "/konaklamali-yelken-egitimi" },
            { label: "Yat Kaptanlığı Eğitimi", href: "/yat-kaptanligi-egitimi" },
            { label: "Yelkenli Yat Okulu", href: "/yelkenli-yat-okulu" },
            { label: "Ege Denizi Yelken Rotaları", href: "/ege-denizi-yelken-rotalari" },
          ],
        },
        {
          key: "about",
          label: "Eğitmen",
          href: "/about",
          items: [{ label: "Eğitmen Hakkında", href: "/about" }],
        },
        {
          key: "stories",
          label: "Hikâyeler",
          href: "/stories",
          items: [
            { label: "Öğrenci Hikâyeleri", href: "/stories" },
            { label: "İlk Gece Vardiyası", href: "/stories/ilk-gece-vardiyasi" },
          ],
        },
        {
          key: "charter",
          label: "Charter",
          href: "/charter",
          items: [{ label: "Charter Sayfası", href: "/charter" }],
        },
        {
          key: "verify",
          label: "Doğrula",
          href: "/verify",
          items: [
            { label: "Sertifika Doğrula", href: "/verify" },
            { label: "Kayıt Sistemi", href: "/registry" },
            { label: "Sertifika", href: "/verify" },
            { label: "Kartlar", href: "/cards" },
          ],
        },
        {
          key: "contact",
          label: "İletişim",
          href: "/contact",
          items: [
            { label: "İletişim Sayfası", href: "/contact" },
            {
              label: "WhatsApp",
              href: waLink("Merhaba, eğitim hakkında bilgi almak istiyorum."),
              external: true,
            },
          ],
        },
      ];
    }

    return [
      {
        key: "home",
        label: "Home",
        href: "/",
        items: [
          { label: "Homepage", href: "/" },
          { label: "Programs Section", href: "/#programlar" },
          { label: "Education Modules", href: "/#egitim" },
          { label: "Charter Section", href: "/#charter" },
        ],
      },
      {
        key: "education",
        label: "Education",
        href: "/guide",
        sections: [
          {
            title: "YES Training System",
            items: [
              { label: "Safety", href: "/guide/guvenlik" },
              { label: "Anchoring", href: "/guide/demirleme-ve-demir-alma" },
              { label: "Marina Entry / Exit", href: "/guide/marina-giris-cikis-usulleri" },
              { label: "Boat Handling", href: "/guide/tekne-hakimiyeti" },
            ],
          },
          {
            title: "Navigation",
            items: [
              { label: "Navigation", href: "/guide/navigasyon" },
              { label: "Route Planning", href: "/guide/rota-planlama" },
              { label: "Paper Chart Navigation", href: "/guide/paper-chart-navigation" },
              { label: "Almanac", href: "/guide/almanac" },
              { label: "Sextant", href: "/guide/sextant" },
              { label: "What is Sextant?", href: "/guide/sextant-nedir" },
            ],
          },
          {
            title: "Traffic & Rules",
            items: [
              { label: "COLREG", href: "/guide/colreg" },
              { label: "Collision Prevention", href: "/guide/denizde-catisma-onleme" },
              { label: "AIS / VTS", href: "/guide/ais-ve-vts" },
              { label: "What is AIS / VTS?", href: "/guide/ais-ve-vts-nedir" },
              { label: "What is TSS?", href: "/guide/tss-nedir" },
              { label: "Buoyage", href: "/guide/buoyage" },
            ],
          },
          {
            title: "Weather & Sailing",
            items: [
              { label: "Meteorology at Sea", href: "/guide/denizde-meteoroloji" },
              { label: "Night Lights", href: "/guide/gece-seyri-fenerleri" },
              { label: "Signals", href: "/guide/signals" },
              { label: "Wind Engine", href: "/guide/wind-engine" },
              { label: "How Sails Work", href: "/guide/yelkenin-calisma-prensibi" },
            ],
          },
          {
  title: "Simulations",
  items: [
    { label: "Marina Simulator", href: "/simulator/marina" },
    { label: "Chart Plotter", href: "/guide/yye/chart-plotter" },
    { label: "DR / EP / Fix", href: "/guide/yye/dr-ep-fix" },
    { label: "Passage Planning", href: "/guide/passage-planning" },
    { label: "Radar", href: "/guide/radar" },
    { label: "Bridge Tools", href: "/guide/bridge-tools" },
  ],
},
          {
            title: "Advanced & Career",
            items: [
              { label: "How to Become a Yacht Captain", href: "/guide/yat-kaptani-nasil-olunur" },
              { label: "Emergency at Sea", href: "/guide/denizde-acil-durumlar" },
              { label: "STCW Quiz", href: "/stcw-quiz" },
              { label: "Anchored Alcohol", href: "/guide/anchored-alcohol" },
            ],
          },
        ],
      },
      {
        key: "programs",
        label: "Programs",
        href: "/programs",
        items: [
          { label: "All Programs", href: "/programs" },
          { label: "Basic Sailing", href: "/programs/basic-sailing" },
          { label: "Coastal Skipper", href: "/programs/coastal-skipper" },
          { label: "Offshore Yacht Course", href: "/programs/offshore-yacht-course" },

          { label: "Sailing Training & Holiday", href: "/yelkenli-yat-egitim-ve-tatil" },
          { label: "Bodrum Sailing Training", href: "/bodrum-yelken-egitimi" },
          { label: "Offshore Sailing Training", href: "/offshore-yelken-egitimi" },
          { label: "Liveaboard Sailing Training", href: "/konaklamali-yelken-egitimi" },
          { label: "Yacht Captain Training", href: "/yat-kaptanligi-egitimi" },
          { label: "Sailing Yacht School", href: "/yelkenli-yat-okulu" },
          { label: "Aegean Sailing Routes", href: "/ege-denizi-yelken-rotalari" },
        ],
      },
      {
        key: "about",
        label: "Instructor",
        href: "/about",
        items: [{ label: "About the Instructor", href: "/about" }],
      },
      {
        key: "stories",
        label: "Stories",
        href: "/stories",
        items: [
          { label: "Student Stories", href: "/stories" },
          { label: "First Night Watch", href: "/stories/ilk-gece-vardiyasi" },
        ],
      },
      {
        key: "charter",
        label: "Charter",
        href: "/charter",
        items: [
          { label: "Charter Page", href: "/charter" },
          { label: "Boat Charter", href: "/charter" },
          { label: "Charter Admin", href: "/charter-admin" },
        ],
      },
      {
        key: "verify",
        label: "Verify",
        href: "/verify",
        items: [
          { label: "Verify Certificate", href: "/verify" },
          { label: "Registry", href: "/registry" },
          { label: "Certificate", href: "/certificate" },
          { label: "Cards", href: "/cards" },
        ],
      },
      {
        key: "contact",
        label: "Contact",
        href: "/contact",
        items: [
          { label: "Contact Page", href: "/contact" },
          {
            label: "WhatsApp",
            href: waLink("Hello, I would like information about the training."),
            external: true,
          },
        ],
      },
    ];
  }, [locale]);

  return (
    <>
      <style>{`
        .site-header-cta {
          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            background 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease;
        }

        .site-header-cta:hover {
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 0 34px rgba(103,211,255,0.38);
          background: rgba(103,211,255,0.16);
          border-color: rgba(103,211,255,0.48);
        }

        .nav-link-strong {
          position: relative;
          transition: color 0.22s ease, text-shadow 0.22s ease;
        }

        .nav-link-strong:hover {
          color: #9deaff !important;
          text-shadow: 0 0 18px rgba(103,211,255,0.35);
        }

        .nav-link-strong::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -7px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #67d3ff, #b8f3ff);
          box-shadow: 0 0 14px rgba(103,211,255,0.5);
          transition: width 0.22s ease;
        }

        .nav-link-strong:hover::after,
        .nav-link-strong.active::after {
          width: 100%;
        }

        @keyframes glowMove {
          0% { transform: translateX(-40%); opacity: 0.55; }
          50% { transform: translateX(40%); opacity: 1; }
          100% { transform: translateX(-40%); opacity: 0.55; }
        }

        @keyframes dropdownIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes mobilePanelIn {
          from {
            opacity: 0;
            transform: translateY(-10px) scale(0.985);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .dropdown-item-card {
          transition:
            background 0.18s ease,
            border-color 0.18s ease,
            transform 0.18s ease,
            box-shadow 0.18s ease;
          border: 1px solid transparent;
          cursor: pointer;
        }

        .dropdown-item-card:hover {
          background: rgba(103,211,255,0.14);
          border-color: rgba(103,211,255,0.28);
          transform: translateX(2px);
          box-shadow: 0 0 28px rgba(103,211,255,0.18);
        }

        .desktop-nav {
          display: flex;
        }

        .mobile-menu-button {
          display: none;
        }

        @media (max-width: 1200px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-button {
            display: inline-flex !important;
          }

          .site-header-brand-main {
            font-size: 13px !important;
            letter-spacing: 0.22em !important;
          }

          .site-header-brand-sub {
            font-size: 12px !important;
          }
        }

        @media (max-width: 420px) {
          .site-header-brand-main {
            font-size: 11px !important;
            letter-spacing: 0.18em !important;
          }

          .site-header-brand-sub {
            font-size: 11px !important;
          }
        }
      `}</style>

      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          background: scrolled ? "rgba(2,6,12,0.92)" : "rgba(2,6,12,0.78)",
          borderBottom: "1px solid rgba(103,211,255,0.18)",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1320,
            margin: "0 auto",
            padding: scrolled ? "10px 18px" : "18px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 18,
          }}
        >
          <Link href="/" style={{ textDecoration: "none", flexShrink: 0 }}>
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  bottom: -2,
                  left: "-20%",
                  width: "140%",
                  height: "14px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(103,211,255,0.95), transparent)",
                  filter: "blur(10px)",
                  opacity: 0.85,
                  pointerEvents: "none",
                  animation: "glowMove 4s ease-in-out infinite",
                  zIndex: 1,
                }}
              />

              <span
                className="site-header-brand-main"
                style={{
                  fontSize: scrolled ? "13px" : "15px",
                  fontWeight: 600,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                ALBATROS SAILING
              </span>

              <span
                className="site-header-brand-sub"
                style={{
                  fontSize: scrolled ? "12px" : "14px",
                  fontWeight: 500,
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                Premium Sailing Academy
              </span>
            </div>
          </Link>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileOpen}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 46,
              height: 46,
              borderRadius: 16,
              border: "1px solid rgba(103,211,255,0.32)",
              background: mobileOpen
                ? "rgba(103,211,255,0.18)"
                : "rgba(255,255,255,0.05)",
              color: "#f8fafc",
              cursor: "pointer",
              boxShadow: mobileOpen
                ? "0 0 28px rgba(103,211,255,0.28)"
                : "none",
            }}
          >
            <span
              style={{
                position: "relative",
                width: 22,
                height: 16,
                display: "inline-block",
              }}
            >
              <span style={hamburgerLine(mobileOpen, "top")} />
              <span style={hamburgerLine(mobileOpen, "middle")} />
              <span style={hamburgerLine(mobileOpen, "bottom")} />
            </span>
          </button>

          <nav
            className="desktop-nav"
            style={{
              alignItems: "center",
              gap: 22,
              flexWrap: "wrap",
              justifyContent: "flex-end",
            }}
          >
            {navGroups.map((group) => (
              <div
                key={group.key}
                style={{
                  position: "relative",
                  paddingBottom: 14,
                  marginBottom: -14,
                }}
                onMouseEnter={() => setOpenMenu(group.key)}
                onMouseLeave={() =>
                  setOpenMenu((prev) => (prev === group.key ? null : prev))
                }
              >
                <Link
                  href={group.href || "#"}
                  className={`nav-link-strong${
                    isActive(pathname, group) ? " active" : ""
                  }`}
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    letterSpacing: 0.4,
                    textDecoration: "none",
                    color: isActive(pathname, group) ? "#67d3ff" : "#e6ecf4",
                    paddingBottom: 6,
                    display: "inline-block",
                  }}
                >
                  {group.label}
                </Link>

                {(group.items?.length || group.sections?.length) &&
                openMenu === group.key ? (
                  <DesktopDropdown group={group} />
                ) : null}
              </div>
            ))}

            <div style={{ display: "flex", gap: 8, marginLeft: 4 }}>
              <button
                type="button"
                onClick={() => setLocale("tr")}
                style={langBtn(locale === "tr")}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                style={langBtn(locale === "en")}
              >
                EN
              </button>
            </div>

            <Link href="/admin" className="site-header-cta" style={adminBtnStyle}>
              {locale === "tr" ? "Admin Giriş" : "Admin"}
            </Link>

            <a
              href={waLink(
                locale === "tr"
                  ? "Merhaba, eğitim hakkında bilgi almak istiyorum."
                  : "Hello, I would like information about the training."
              )}
              target="_blank"
              rel="noreferrer"
              className="site-header-cta"
              style={applyBtnStyle}
            >
              {locale === "tr" ? "Başvuru" : "Apply"}
            </a>
          </nav>
        </div>
      </header>

      {mobileOpen ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            background:
              "radial-gradient(circle at top left, rgba(103,211,255,0.14), transparent 35%), rgba(2,6,12,0.94)",
            backdropFilter: "blur(18px)",
            WebkitBackdropFilter: "blur(18px)",
            paddingTop: 92,
            overflowY: "auto",
          }}
        >
          <div
            style={{
              width: "min(100% - 28px, 760px)",
              margin: "0 auto 28px",
              borderRadius: 26,
              border: "1px solid rgba(103,211,255,0.18)",
              background:
                "linear-gradient(180deg, rgba(10,15,24,0.96), rgba(2,6,23,0.98))",
              boxShadow:
                "0 30px 90px rgba(0,0,0,0.55), 0 0 42px rgba(103,211,255,0.12)",
              padding: 16,
              animation: "mobilePanelIn 0.22s ease",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginBottom: 14,
              }}
            >
              {navGroups.map((group) => {
                const active = mobileGroup === group.key || isActive(pathname, group);

                return (
                  <button
                    type="button"
                    key={group.key}
                    onClick={() =>
                      group.items?.length || group.sections?.length
                        ? setMobileGroup((prev) =>
                            prev === group.key ? null : group.key
                          )
                        : setMobileOpen(false)
                    }
                    style={{
                      minHeight: 48,
                      borderRadius: 16,
                      border: active
                        ? "1px solid rgba(103,211,255,0.42)"
                        : "1px solid rgba(255,255,255,0.08)",
                      background: active
                        ? "rgba(103,211,255,0.14)"
                        : "rgba(255,255,255,0.04)",
                      color: active ? "#9deaff" : "#f8fafc",
                      fontWeight: 900,
                      fontSize: 14,
                      letterSpacing: 0.2,
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    {group.label}
                  </button>
                );
              })}
            </div>

            {navGroups.map((group) =>
              mobileGroup === group.key ? (
                <div key={group.key} style={{ marginTop: 10 }}>
                  {group.href ? (
                    <Link
                      href={group.href}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "15px 16px",
                        borderRadius: 18,
                        background:
                          "linear-gradient(135deg, rgba(103,211,255,0.16), rgba(103,211,255,0.04))",
                        border: "1px solid rgba(103,211,255,0.28)",
                        color: "#f8fafc",
                        textDecoration: "none",
                        fontWeight: 900,
                        marginBottom: 12,
                      }}
                    >
                      <span>{group.label}</span>
                      <span style={{ color: "#8ed8ff" }}>→</span>
                    </Link>
                  ) : null}

                  {group.sections ? (
                    <div style={{ display: "grid", gap: 12 }}>
                      {group.sections.map((section) => (
                        <div
                          key={section.title}
                          style={{
                            borderRadius: 18,
                            border: "1px solid rgba(255,255,255,0.08)",
                            background: "rgba(255,255,255,0.035)",
                            padding: 12,
                          }}
                        >
                          <div
                            style={{
                              fontSize: 11,
                              fontWeight: 900,
                              letterSpacing: "0.16em",
                              textTransform: "uppercase",
                              color: "#8ed8ff",
                              marginBottom: 8,
                            }}
                          >
                            {section.title}
                          </div>

                          {section.items.map((item) => (
                            <MobileMenuLink key={item.label} item={item} />
                          ))}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ display: "grid", gap: 8 }}>
                      {group.items?.map((item) => (
                        <MobileMenuLink key={item.label} item={item} />
                      ))}
                    </div>
                  )}
                </div>
              ) : null
            )}

            <div
              style={{
                display: "flex",
                gap: 10,
                marginTop: 18,
                paddingTop: 16,
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <button
                type="button"
                onClick={() => setLocale("tr")}
                style={{ ...langBtn(locale === "tr"), flex: 1, minHeight: 46 }}
              >
                TR
              </button>
              <button
                type="button"
                onClick={() => setLocale("en")}
                style={{ ...langBtn(locale === "en"), flex: 1, minHeight: 46 }}
              >
                EN
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 10,
                marginTop: 14,
              }}
            >
              <Link href="/admin" className="site-header-cta" style={adminMobileBtnStyle}>
                {locale === "tr" ? "Admin Giriş" : "Admin"}
              </Link>

              <a
                href={waLink(
                  locale === "tr"
                    ? "Merhaba, eğitim hakkında bilgi almak istiyorum."
                    : "Hello, I would like information about the training."
                )}
                target="_blank"
                rel="noreferrer"
                className="site-header-cta"
                style={applyMobileBtnStyle}
              >
                {locale === "tr" ? "Başvuru" : "Apply"}
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function DesktopDropdown({ group }: { group: NavGroup }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "calc(100% - 4px)",
        right: group.sections ? -260 : "auto",
        left: group.sections ? "auto" : 0,
        width: group.sections ? "min(860px, calc(100vw - 48px))" : 330,
        borderRadius: 20,
        background:
          "linear-gradient(180deg, rgba(10,15,24,0.97), rgba(8,12,20,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 26px 60px rgba(0,0,0,0.40)",
        padding: 14,
        animation: "dropdownIn 0.18s ease",
        pointerEvents: "auto",
        zIndex: 1200,
      }}
    >
      {group.sections ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(280px, 1fr))",
            gap: 14,
          }}
        >
          {group.sections.map((section) => (
            <div
              key={section.title}
              style={{
                borderRadius: 16,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                padding: 12,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 900,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#8ed8ff",
                  marginBottom: 8,
                }}
              >
                {section.title}
              </div>

              {section.items.map((item) => (
                <DesktopMenuLink key={item.label} item={item} />
              ))}
            </div>
          ))}
        </div>
      ) : (
        <>
          {group.items?.map((item) => (
            <DesktopMenuLink key={item.label} item={item} />
          ))}
        </>
      )}
    </div>
  );
}

function DesktopMenuLink({ item }: { item: MenuItem }) {
  const isQuiz = item.href === "/stcw-quiz";
  const isSimulator = item.href.startsWith("/simulator") || item.href.includes("simulator");
  const featured = isQuiz || isSimulator;

  const content = (
    <div
      className="dropdown-item-card"
      style={{
        borderRadius: 14,
        padding: "12px 14px",
        background: featured
          ? "linear-gradient(135deg, rgba(103,211,255,0.16), rgba(103,211,255,0.04))"
          : undefined,
        border: featured
          ? "1px solid rgba(103,211,255,0.35)"
          : "1px solid transparent",
        boxShadow: featured ? "0 0 24px rgba(103,211,255,0.18)" : undefined,
      }}
    >
      <div
        style={{
          color: featured ? "#9deaff" : "#f8fafc",
          fontSize: 14,
          fontWeight: 800,
          lineHeight: 1.4,
          transition: "color 0.18s ease",
        }}
      >
        {isQuiz ? "⚓ " : ""}
        {isSimulator ? "◈ " : ""}
        {item.label}
      </div>

      {isQuiz ? (
        <div
          style={{
            marginTop: 4,
            fontSize: 12,
            lineHeight: 1.45,
            color: "rgba(226,232,240,0.72)",
          }}
        >
          STCW 149/499 gemici hazırlık deneme sistemi
        </div>
      ) : null}

      {isSimulator ? (
        <div
          style={{
            marginTop: 4,
            fontSize: 12,
            lineHeight: 1.45,
            color: "rgba(226,232,240,0.72)",
          }}
        >
          İnteraktif YES eğitim simülasyonu
        </div>
      ) : null}
    </div>
  );

  return item.external ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      style={{ textDecoration: "none", display: "block" }}
    >
      {content}
    </a>
  ) : (
    <Link href={item.href} style={{ textDecoration: "none", display: "block" }}>
      {content}
    </Link>
  );
}

function MobileMenuLink({ item }: { item: MenuItem }) {
  const isQuiz = item.href === "/stcw-quiz";
  const isSimulator = item.href.startsWith("/simulator") || item.href.includes("simulator");
  const featured = isQuiz || isSimulator;

  const style: CSSProperties = {
    display: "block",
    padding: "13px 14px",
    borderRadius: 15,
    background: featured
      ? "linear-gradient(135deg, rgba(103,211,255,0.16), rgba(103,211,255,0.04))"
      : "rgba(255,255,255,0.035)",
    border: featured
      ? "1px solid rgba(103,211,255,0.34)"
      : "1px solid rgba(255,255,255,0.06)",
    color: featured ? "#9deaff" : "#f8fafc",
    textDecoration: "none",
    fontWeight: 850,
    fontSize: 14,
    lineHeight: 1.35,
  };

  return item.external ? (
    <a href={item.href} target="_blank" rel="noreferrer" style={style}>
      {isQuiz ? "⚓ " : ""}
      {isSimulator ? "◈ " : ""}
      {item.label}
    </a>
  ) : (
    <Link href={item.href} style={style}>
      {isQuiz ? "⚓ " : ""}
      {isSimulator ? "◈ " : ""}
      {item.label}
    </Link>
  );
}

function isActive(pathname: string, group: NavGroup) {
  if (group.href && pathname === group.href) return true;

  const flatItems = [
    ...(group.items ?? []),
    ...(group.sections?.flatMap((section) => section.items) ?? []),
  ];

  return flatItems.some((item) => pathname === item.href);
}

function langBtn(active: boolean): CSSProperties {
  return {
    padding: "7px 11px",
    borderRadius: 10,
    border: active
      ? "1px solid rgba(103,211,255,0.40)"
      : "1px solid rgba(255,255,255,0.16)",
    background: active ? "#bff3ff" : "transparent",
    color: active ? "#082032" : "#ffffff",
    fontSize: 12,
    fontWeight: 800,
    cursor: "pointer",
    transition: "all 0.2s ease",
  };
}

function hamburgerLine(
  open: boolean,
  part: "top" | "middle" | "bottom"
): CSSProperties {
  const base: CSSProperties = {
    position: "absolute",
    left: 0,
    width: 22,
    height: 2,
    borderRadius: 999,
    background: "#f8fafc",
    transition: "all 0.22s ease",
  };

  if (part === "top") {
    return {
      ...base,
      top: open ? 7 : 0,
      transform: open ? "rotate(45deg)" : "rotate(0deg)",
    };
  }

  if (part === "middle") {
    return {
      ...base,
      top: 7,
      opacity: open ? 0 : 1,
      transform: open ? "scaleX(0)" : "scaleX(1)",
    };
  }

  return {
    ...base,
    top: open ? 7 : 14,
    transform: open ? "rotate(-45deg)" : "rotate(0deg)",
  };
}

const adminBtnStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 18px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.16)",
  color: "#f8fafc",
  fontWeight: 800,
  fontSize: 13,
  textDecoration: "none",
};

const applyBtnStyle: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 8,
  padding: "10px 18px",
  borderRadius: 999,
  background: "rgba(103,211,255,0.12)",
  border: "1px solid rgba(103,211,255,0.35)",
  color: "#8ed8ff",
  fontWeight: 800,
  fontSize: 13,
  textDecoration: "none",
  boxShadow: "0 0 22px rgba(103,211,255,0.28)",
};

const adminMobileBtnStyle: CSSProperties = {
  ...adminBtnStyle,
  justifyContent: "center",
  minHeight: 50,
  fontSize: 15,
};

const applyMobileBtnStyle: CSSProperties = {
  ...applyBtnStyle,
  justifyContent: "center",
  minHeight: 50,
  fontSize: 15,
};
