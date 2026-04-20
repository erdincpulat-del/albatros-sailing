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
  const pathname = usePathname();
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navGroups = useMemo<NavGroup[]>(() => {
    if (locale === "tr") {
      return [
        {
          key: "home",
          label: "Ana Sayfa",
          href: "/",
          items: [
            { label: "Ana Sayfa", href: "/", desc: "Marka girişi ve ana vitrin" },
            { label: "Programlar Bölümü", href: "/#programlar", desc: "Eğitim programlarına hızlı geçiş" },
            { label: "Eğitim Modülleri", href: "/#egitim", desc: "Eğitim sistemini keşfet" },
            { label: "Charter Bölümü", href: "/#charter", desc: "Premium deneyim katmanı" },
          ],
        },
        {
          key: "education",
          label: "Eğitim",
          href: "/guide",
          sections: [
            {
              title: "Temel Denizcilik",
              items: [
                { label: "Güvenlik", href: "/guide/guvenlik", desc: "Temel deniz güvenliği ve refleks sistemi" },
                { label: "Demirleme ve Demir Alma", href: "/guide/demirleme-ve-demir-alma", desc: "Demir operasyonları ve kontrol" },
                { label: "Marina Giriş Çıkış Usulleri", href: "/guide/marina-giris-cikis-usulleri", desc: "Marina yaklaşımı ve usul bilgisi" },
                { label: "Tekne Hakimiyeti", href: "/guide/tekne-hakimiyeti", desc: "Teknenin kontrolü ve manevra disiplini" },
              ],
            },
            {
              
  title: "Navigasyon",
  items: [
    { label: "Navigasyon", href: "/guide/navigasyon", desc: "Seyir düşüncesinin omurgası" },
    { label: "Rota Planlama", href: "/guide/rota-planlama", desc: "Rota kurma ve karar verme mantığı" },
    { label: "Paper Chart Navigation", href: "/guide/paper-chart-navigation", desc: "Kâğıt harita ile navigasyon" },
    { label: "Almanac", href: "/guide/almanac", desc: "Göksel navigasyonun veri kaynağı ve zaman mantığı" },
    { label: "Sextant", href: "/guide/sextant", desc: "Klasik denizcilik ölçüm aracı" },
    { label: "Sextant Nedir", href: "/guide/sextant-nedir", desc: "Sextant mantığı ve kullanım girişi" },
  ],
},
            {
              title: "Trafik ve Kurallar",
              items: [
                { label: "COLREG", href: "/guide/colreg", desc: "Denizde çatışmayı önleme kuralları" },
                { label: "Denizde Çatışma Önleme", href: "/guide/denizde-catisma-onleme", desc: "Çarpışma riskini yorumlama ve önleme" },
                { label: "AIS / VTS", href: "/guide/ais-ve-vts", desc: "Trafik farkındalığı ve sistem okuması" },
                { label: "AIS / VTS Nedir", href: "/guide/ais-ve-vts-nedir", desc: "AIS ve VTS temel mantığı" },
                { label: "TSS Nedir", href: "/guide/tss-nedir", desc: "Trafik ayırım düzeni mantığı" },
              ],
            },
            {
  title: "Hava ve Seyir",
  items: [
    { label: "Denizde Meteoroloji", href: "/guide/denizde-meteoroloji", desc: "Hava okuma ve karar desteği" },
    { label: "Gece Seyri Fenerleri", href: "/guide/gece-seyri-fenerleri", desc: "Gece görünürlük ve ışık disiplini" },
    { label: "Signals", href: "/guide/signals", desc: "İşaret ve eğitim modülü" },
    { label: "Wind Engine", href: "/guide/wind-engine", desc: "Rüzgâr sistemi ve eğitim motoru" },
    { label: "Yelkenin Çalışma Prensibi", href: "/guide/yelkenin-calisma-prensibi", desc: "Rüzgârın yelken üzerindeki etkisi ve güç üretimi" },
  ],
},
            {
              title: "İleri ve Kariyer",
              items: [
                { label: "Yat Kaptanı Nasıl Olunur", href: "/guide/yat-kaptani-nasil-olunur", desc: "Kaptanlık yol haritası" },
                { label: "Denizde Acil Durumlar", href: "/guide/denizde-acil-durumlar", desc: "Kriz yönetimi ve öncelik sırası" },
                { label: "Anchored Alcohol", href: "/guide/anchored-alcohol", desc: "Demirde alkol ve hukuki çerçeve" },
              ],
            },
          ],
        },
        {
          key: "programs",
          label: "Programlar",
          href: "/programs",
          items: [
            { label: "Tüm Programlar", href: "/programs", desc: "Tüm eğitim yolunu gör" },
            { label: "Başlangıç Yelken Eğitimi", href: "/programs/basic-sailing", desc: "Temel yelken ve güvenlik" },
            { label: "Coastal Skipper", href: "/programs/coastal-skipper", desc: "Kıyı seyri ve komuta geçişi" },
            { label: "Offshore Yacht Course", href: "/programs/offshore-yacht-course", desc: "Açık deniz disiplini" },
          ],
        },
        {
          key: "charter",
          label: "Charter",
          href: "/charter",
          items: [
            { label: "Charter Sayfası", href: "/charter", desc: "Tekne ve rota deneyimi" },
            { label: "Tekne Kiralama", href: "/charter", desc: "Premium charter seçenekleri" },
            { label: "Charter Yönetimi", href: "/charter-admin", desc: "Operasyon yönetim alanı" },
          ],
        },
        {
          key: "verify",
          label: "Doğrula",
          href: "/verify",
          items: [
            { label: "Sertifika Doğrula", href: "/verify", desc: "QR / kayıt doğrulama" },
            { label: "Kayıt Sistemi", href: "/registry", desc: "Resmi kayıt ekranı" },
            { label: "Sertifika", href: "/certificate", desc: "Sertifika alanı" },
            { label: "Kartlar", href: "/cards", desc: "Kart ve belge erişimi" },
          ],
        },
        {
          key: "contact",
          label: "İletişim",
          href: "/contact",
          items: [
            { label: "İletişim Sayfası", href: "/contact", desc: "Doğrudan iletişim" },
            {
              label: "WhatsApp",
              href: waLink("Merhaba, eğitim hakkında bilgi almak istiyorum."),
              desc: "Hızlı başvuru ve bilgi alma",
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
          { label: "Homepage", href: "/", desc: "Main brand entrance" },
          { label: "Programs Section", href: "/#programlar", desc: "Jump to training programs" },
          { label: "Education Modules", href: "/#egitim", desc: "Explore the education system" },
          { label: "Charter Section", href: "/#charter", desc: "Premium experience layer" },
        ],
      },
      {
        key: "education",
        label: "Education",
        href: "/guide",
        sections: [
          {
            title: "Core Seamanship",
            items: [
              { label: "Safety", href: "/guide/guvenlik", desc: "Core maritime safety and reflex system" },
              { label: "Anchoring", href: "/guide/demirleme-ve-demir-alma", desc: "Anchoring operations and control" },
              { label: "Marina Entry / Exit", href: "/guide/marina-giris-cikis-usulleri", desc: "Marina approach and procedures" },
              { label: "Boat Handling", href: "/guide/tekne-hakimiyeti", desc: "Control and maneuver discipline" },
            ],
          },
          {
  title: "Navigation",
  items: [
    { label: "Navigation", href: "/guide/navigasyon", desc: "The backbone of seamanship thinking" },
    { label: "Route Planning", href: "/guide/rota-planlama", desc: "Route logic and decisions" },
    { label: "Paper Chart Navigation", href: "/guide/paper-chart-navigation", desc: "Navigation with paper charts" },
    { label: "Almanac", href: "/guide/almanac", desc: "Astronomical navigation data and time logic" },
    { label: "Sextant", href: "/guide/sextant", desc: "Classical maritime instrument" },
    { label: "What is Sextant?", href: "/guide/sextant-nedir", desc: "Sextant logic and basics" },
  ],
},
          {
            title: "Traffic & Rules",
            items: [
              { label: "COLREG", href: "/guide/colreg", desc: "Collision prevention rules" },
              { label: "Collision Prevention", href: "/guide/denizde-catisma-onleme", desc: "Reading and preventing collision risk" },
              { label: "AIS / VTS", href: "/guide/ais-ve-vts", desc: "Traffic awareness and system reading" },
              { label: "What is AIS / VTS?", href: "/guide/ais-ve-vts-nedir", desc: "AIS and VTS basics" },
              { label: "What is TSS?", href: "/guide/tss-nedir", desc: "Traffic separation scheme logic" },
            ],
          },
          {
  title: "Weather & Sailing",
  items: [
    { label: "Meteorology at Sea", href: "/guide/denizde-meteoroloji", desc: "Weather reading and decision support" },
    { label: "Night Lights", href: "/guide/gece-seyri-fenerleri", desc: "Night visibility and lights" },
    { label: "Signals", href: "/guide/signals", desc: "Signals training module" },
    { label: "Wind Engine", href: "/guide/wind-engine", desc: "Wind system training engine" },
    { label: "How Sails Work", href: "/guide/yelkenin-calisma-prensibi", desc: "Wind effect on sails and force generation" },
  ],
},
          {
            title: "Advanced & Career",
            items: [
              { label: "How to Become a Yacht Captain", href: "/guide/yat-kaptani-nasil-olunur", desc: "Captaincy roadmap" },
              { label: "Emergency at Sea", href: "/guide/denizde-acil-durumlar", desc: "Crisis management priorities" },
              { label: "Anchored Alcohol", href: "/guide/anchored-alcohol", desc: "Legal context at anchor" },
            ],
          },
        ],
      },
      {
        key: "programs",
        label: "Programs",
        href: "/programs",
        items: [
          { label: "All Programs", href: "/programs", desc: "See the full training path" },
          { label: "Basic Sailing", href: "/programs/basic-sailing", desc: "Fundamentals and safety" },
          { label: "Coastal Skipper", href: "/programs/coastal-skipper", desc: "Coastal command transition" },
          { label: "Offshore Yacht Course", href: "/programs/offshore-yacht-course", desc: "Open-sea discipline" },
        ],
      },
      {
        key: "charter",
        label: "Charter",
        href: "/charter",
        items: [
          { label: "Charter Page", href: "/charter", desc: "Boats and route experience" },
          { label: "Boat Charter", href: "/charter", desc: "Premium charter options" },
          { label: "Charter Admin", href: "/charter-admin", desc: "Operations area" },
        ],
      },
      {
        key: "verify",
        label: "Verify",
        href: "/verify",
        items: [
          { label: "Verify Certificate", href: "/verify", desc: "QR / registry verification" },
          { label: "Registry", href: "/registry", desc: "Official records" },
          { label: "Certificate", href: "/certificate", desc: "Certificate area" },
          { label: "Cards", href: "/cards", desc: "Cards and document access" },
        ],
      },
      {
        key: "contact",
        label: "Contact",
        href: "/contact",
        items: [
          { label: "Contact Page", href: "/contact", desc: "Direct communication" },
          {
            label: "WhatsApp",
            href: waLink("Hello, I would like information about the training."),
            desc: "Fast application and contact",
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
            padding: scrolled ? "10px 24px" : "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
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

          <nav
            style={{
              display: "flex",
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

                {(group.items?.length || group.sections?.length) && openMenu === group.key ? (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(100% - 4px)",
                      left: 0,
                      minWidth: group.sections ? 760 : 330,
                      maxWidth: group.sections ? 860 : 360,
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

                            {section.items.map((item) => {
                              const content = (
                                <div
                                  className="dropdown-item-card"
                                  style={{
                                    borderRadius: 14,
                                    padding: "10px 12px",
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "#f8fafc",
                                      fontSize: 14,
                                      fontWeight: 800,
                                      lineHeight: 1.4,
                                      transition: "color 0.18s ease",
                                    }}
                                  >
                                    {item.label}
                                  </div>

                                  {item.desc ? (
                                    <div
                                      style={{
                                        marginTop: 4,
                                        color: "rgba(226,232,240,0.66)",
                                        fontSize: 12,
                                        lineHeight: 1.55,
                                      }}
                                    >
                                      {item.desc}
                                    </div>
                                  ) : null}
                                </div>
                              );

                              return item.external ? (
                                <a
                                  key={item.label}
                                  href={item.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  style={{ textDecoration: "none", display: "block" }}
                                >
                                  {content}
                                </a>
                              ) : (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  style={{ textDecoration: "none", display: "block" }}
                                >
                                  {content}
                                </Link>
                              );
                            })}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <>
                        {group.items?.map((item) => {
                          const content = (
                            <div
                              className="dropdown-item-card"
                              style={{
                                borderRadius: 14,
                                padding: "12px 14px",
                              }}
                            >
                              <div
                                style={{
                                  color: "#f8fafc",
                                  fontSize: 14,
                                  fontWeight: 800,
                                  lineHeight: 1.4,
                                  transition: "color 0.18s ease",
                                }}
                              >
                                {item.label}
                              </div>

                              {item.desc ? (
                                <div
                                  style={{
                                    marginTop: 4,
                                    color: "rgba(226,232,240,0.66)",
                                    fontSize: 12,
                                    lineHeight: 1.6,
                                  }}
                                >
                                  {item.desc}
                                </div>
                              ) : null}
                            </div>
                          );

                          return item.external ? (
                            <a
                              key={item.label}
                              href={item.href}
                              target="_blank"
                              rel="noreferrer"
                              style={{
                                textDecoration: "none",
                                display: "block",
                              }}
                            >
                              {content}
                            </a>
                          ) : (
                            <Link
                              key={item.label}
                              href={item.href}
                              style={{
                                textDecoration: "none",
                                display: "block",
                              }}
                            >
                              {content}
                            </Link>
                          );
                        })}
                      </>
                    )}
                  </div>
                ) : null}
              </div>
            ))}

            <div
              style={{
                display: "flex",
                gap: 8,
                marginLeft: 4,
              }}
            >
              <button onClick={() => setLocale("tr")} style={langBtn(locale === "tr")}>
                TR
              </button>
              <button onClick={() => setLocale("en")} style={langBtn(locale === "en")}>
                EN
              </button>
            </div>

            <Link
              href="/admin"
              className="site-header-cta"
              style={{
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
              }}
            >
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
              style={{
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
              }}
            >
              {locale === "tr" ? "Başvuru" : "Apply"}
            </a>
          </nav>
        </div>
      </header>
    </>
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