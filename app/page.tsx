"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

import HomeHero from "@/components/home/HomeHero";
import CharterShowcase from "@/components/home/CharterShowcase";
import FeaturedCharterPreview from "@/components/home/FeaturedCharterPreview";

export default function HomePage() {
  const { t, locale } = useLanguage();

  const academyModules =
    locale === "tr"
      ? {
          badge: "TRAINING MODULES",
          title: "Eğitimin omurgasını oluşturan modüller.",
          description:
            "Bu modüller rastgele içerikler değildir. Gerçek denizde karar vermeyi destekleyen bilgi sisteminin parçalarıdır.",
          items: [
            {
              title: "Sextant & Navigasyon",
              description:
                "Modern sistemlerin yanında klasik denizcilik düşüncesini ve yön bulma mantığını geliştirir.",
              href: "/guide/sextant-nedir",
            },
            {
              title: "COLREG",
              description:
                "Karşılaşma kuralları, trafik mantığı ve denizde doğru karar verme disiplini.",
              href: "/guide/colreg",
            },
            {
              title: "AIS / VTS",
              description:
                "Yoğun trafik, TSS ve profesyonel deniz trafiği içinde farkındalık geliştiren modül.",
              href: "/guide/ais-ve-vts-nedir",
            },
            {
              title: "Rota Planlama",
              description:
                "Hava, zamanlama, alternatifler ve güvenlik kararlarıyla gerçek rota kurma mantığı.",
              href: "/guide/rota-planlama",
            },
            {
              title: "Denizde Acil Durumlar",
              description:
                "Kriz anında öncelik sırası, güvenlik refleksi ve ekip yönetimi yaklaşımı.",
              href: "/guide/denizde-acil-durumlar",
            },
            {
              title: "Gece Seyri",
              description:
                "Fenerler, görünürlük, karar baskısı ve gece emniyeti içinde güvenli seyir yaklaşımı.",
              href: "/guide/gece-seyri-fenerleri",
            },
          ],
        }
      : {
          badge: "TRAINING MODULES",
          title: "Modules forming the backbone of training.",
          description:
            "These are not random articles. They are parts of the knowledge system that supports real decision-making at sea.",
          items: [
            {
              title: "Sextant & Navigation",
              description:
                "Builds both classical seamanship thinking and navigation logic alongside modern systems.",
              href: "/guide/sextant-nedir",
            },
            {
              title: "COLREG",
              description:
                "Collision regulations, traffic logic, and disciplined decision-making at sea.",
              href: "/guide/colreg",
            },
            {
              title: "AIS / VTS",
              description:
                "A module focused on awareness in dense traffic, TSS, and professional maritime environments.",
              href: "/guide/ais-ve-vts-nedir",
            },
            {
              title: "Route Planning",
              description:
                "Real route-building logic through weather, timing, alternatives, and safety decisions.",
              href: "/guide/rota-planlama",
            },
            {
              title: "Emergency at Sea",
              description:
                "Priority order in crisis, safety reflex, and crew management approach.",
              href: "/guide/denizde-acil-durumlar",
            },
            {
              title: "Night Sailing",
              description:
                "A safe navigation approach under lights, limited visibility, pressure, and night conditions.",
              href: "/guide/gece-seyri-fenerleri",
            },
          ],
        };

  const routeAuthority =
    locale === "tr"
      ? {
          badge: "OPEN SEA AUTHORITY",
          title: "Türkiye’de gerçek açık deniz eğitimi veren ayrıcalıklı yapı.",
          description:
            "Albatros Sailing eğitimleri yalnızca kıyı seyri mantığında ilerlemez. Bodrum – İstanbul, İstanbul – Bodrum, Bodrum – Kıbrıs, Kıbrıs – Bodrum, Bodrum – Yunan adaları ve Yunan adaları – Bodrum rotalarında gerçek karar verme, açık deniz disiplini ve profesyonel kaptanlık refleksi üzerine kuruludur.",
          highlights: [
            "Bodrum – İstanbul rotası Boğaz geçişi ve yoğun gemi trafiği içerir.",
            "TSS, gerçek navigasyon baskısı ve trafik yönetimi pratiği sunar.",
            "Türkiye – Yunan adaları ve Kıbrıs hatları gerçek offshore düşünce geliştirir.",
            "Simülasyon değil, gerçek rota ve gerçek karar anlarıyla eğitim verilir.",
          ],
        }
      : {
          badge: "OPEN SEA AUTHORITY",
          title: "A rare structure delivering real open sea training in Türkiye.",
          description:
            "Albatros Sailing training does not stay limited to coastal logic. It is built on real decision-making, offshore discipline and professional captaincy reflexes across Bodrum – Istanbul, Istanbul – Bodrum, Bodrum – Cyprus, Cyprus – Bodrum, Bodrum – Greek Islands and Greek Islands – Bodrum routes.",
          highlights: [
            "The Bodrum – Istanbul route includes Bosphorus passage and dense vessel traffic.",
            "It offers real TSS awareness, navigation pressure and traffic management practice.",
            "Greek Islands and Cyprus crossings build genuine offshore thinking.",
            "Training happens through real routes and real decisions, not simulations.",
          ],
        };

  const charterIntro =
    locale === "tr"
      ? {
          badge: "CHARTER EXPERIENCE",
          title:
            "Charter, ana kimliğimizi destekleyen premium deneyim katmanıdır.",
          description:
            "Albatros Sailing charter tarafı; eğitimin yanında markanın seçkin rota ve deniz deneyimi tarafını temsil eder. Ana odağımız eğitimdir, charter ise aynı kalite çizgisinde ilerleyen tamamlayıcı deneyim alanıdır.",
        }
      : {
          badge: "CHARTER EXPERIENCE",
          title:
            "Charter is a premium experience layer that supports our main identity.",
          description:
            "The charter side of Albatros Sailing represents the selected route and sea-experience layer of the brand alongside training. Training remains our core identity; charter is the complementary premium experience.",
        };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        color: "#f8fafc",
      }}
    >
      <HomeHero />

      <section
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-8 md:grid-cols-3">
          {t.trustBar.map((item) => (
            <div key={item.title}>
              <p
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                {item.title}
              </p>
              <p
                style={{
                  marginTop: 8,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="max-w-2xl">
          <p
            style={{
              fontSize: 12,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "rgba(226,232,240,0.62)",
            }}
          >
            {t.homeWhy.badge}
          </p>

          <h2
            style={{
              marginTop: 12,
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            {t.homeWhy.title}
          </h2>

          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.9,
              color: "rgba(226,232,240,0.78)",
            }}
          >
            {t.homeWhy.description}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.homeWhy.items.map((item) => (
            <article
              key={item.title}
              style={{
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                padding: 24,
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
              }}
            >
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  color: "#f8fafc",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 12,
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        style={{
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                {t.programsSectionBadge}
              </p>

              <h2
                style={{
                  marginTop: 12,
                  fontSize: "clamp(30px, 4vw, 42px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#f8fafc",
                }}
              >
                {locale === "tr"
                  ? "Eğitim yolculuğunu başlatan programlar."
                  : "Programs that start the training journey."}
              </h2>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {locale === "tr"
                  ? "Bu programlar teorik kurs değildir. Gerçek deniz şartlarında karar verebilen kaptanlar yetiştirmek için tasarlanmıştır."
                  : "These are not theoretical courses. They are designed to build captains who can make real decisions in real sea conditions."}
              </p>
            </div>

            <div>
              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  padding: "14px 22px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#f8fafc",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 700,
                }}
              >
                {t.viewAllPrograms}
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.programs.map((program) => (
              <article
                key={program.title}
                style={{
                  borderRadius: "1.75rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  padding: 24,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.62)",
                  }}
                >
                  {t.programCardBadge}
                </p>

                <h3
                  style={{
                    marginTop: 12,
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#f8fafc",
                  }}
                >
                  {program.title}
                </h3>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {program.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={program.href}
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#8ed8ff",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {locale === "tr" ? "Detay Gör" : "View Details"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "transparent",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {academyModules.badge}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {academyModules.title}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {academyModules.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {academyModules.items.map((item) => (
              <article
                key={item.title}
                style={{
                  borderRadius: "1.75rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  padding: 24,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
              >
                <p
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.62)",
                  }}
                >
                  {locale === "tr" ? "Akademi Modülü" : "Academy Module"}
                </p>

                <h3
                  style={{
                    marginTop: 12,
                    fontSize: 22,
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    color: "#f8fafc",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {item.description}
                </p>

                <div className="mt-5">
                  <Link
                    href={item.href}
                    style={{
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#8ed8ff",
                      textDecoration: "underline",
                      textUnderlineOffset: "4px",
                    }}
                  >
                    {locale === "tr" ? "Modülü İncele" : "Explore Module"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#0a1220",
          color: "white",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p
                style={{
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#7dd3fc",
                }}
              >
                {routeAuthority.badge}
              </p>

              <h2
                style={{
                  marginTop: 12,
                  fontSize: "clamp(30px, 4vw, 42px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#f8fafc",
                }}
              >
                {routeAuthority.title}
              </h2>

              <p
                style={{
                  marginTop: 20,
                  maxWidth: "42rem",
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {routeAuthority.description}
              </p>
            </div>

            <div className="grid gap-4">
              {routeAuthority.highlights.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.05)",
                    padding: 20,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "#e2e8f0",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#0a1220",
          color: "white",
          padding: "120px 24px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ maxWidth: 700 }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 14px",
                borderRadius: 999,
                background: "rgba(66,189,248,0.08)",
                border: "1px solid rgba(66,189,248,0.18)",
                color: "#67d3ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1,
                marginBottom: 18,
              }}
            >
              TRAINING SYSTEM
            </div>

            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 900,
                lineHeight: 1.1,
                margin: 0,
                color: "#f8fafc",
              }}
            >
              {locale === "tr"
                ? "Sistemi kuran kaptan olur."
                : "Captains are built by systems, not fragments."}
            </h2>

            <p
              style={{
                marginTop: 16,
                color: "rgba(226,232,240,0.8)",
                lineHeight: 1.8,
                fontSize: 16,
              }}
            >
              {locale === "tr"
                ? "Bilgi parçaları değil, karar sistemi öğretiyoruz. Navigasyon, COLREG, meteoroloji ve rota planlama birlikte çalışır. Denizde sonucu belirleyen fark budur."
                : "We do not teach isolated information, but a decision-making system. Navigation, COLREG, meteorology, and route planning work together. That is what determines the outcome at sea."}
            </p>
          </div>

          <div
            style={{
              marginTop: 50,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {[
              {
                title: "COLREG",
                href: "/guide/colreg",
              },
              {
                title: locale === "tr" ? "Meteoroloji" : "Meteorology",
                href: "/guide/denizde-meteoroloji",
              },
              {
                title: locale === "tr" ? "Navigasyon" : "Navigation",
                href: "/guide/rota-planlama",
              },
              {
                title: locale === "tr" ? "AIS / VTS" : "AIS / VTS",
                href: "/guide/ais-ve-vts-nedir",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  padding: 20,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  color: "#f8fafc",
                  fontWeight: 800,
                  transition: "0.2s",
                }}
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div
            style={{
              marginTop: 60,
              padding: "24px 20px",
              borderRadius: 18,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              maxWidth: 800,
              boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
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
              REAL CAPTAINCY SYSTEM — NOT THEORY
            </div>

            <p
              style={{
                margin: 0,
                color: "rgba(226,232,240,0.75)",
                lineHeight: 1.7,
                fontSize: 15,
              }}
            >
              {locale === "tr"
                ? "COLREG, navigasyon, meteoroloji ve rota planlama ayrı konular değildir. Hepsi birlikte çalışır. Gerçek kaptanlık, bu sistemi kurabilme disiplinidir."
                : "COLREG, navigation, meteorology, and route planning are not separate topics. They work together. Real captaincy is the discipline of building this system."}
            </p>
          </div>

          <div style={{ marginTop: 40 }}>
            <Link
              href="/guide"
              style={{
                display: "inline-block",
                padding: "14px 22px",
                borderRadius: 14,
                background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
                color: "#04121c",
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              {locale === "tr" ? "Akademiyi Keşfet" : "Explore Academy"}
            </Link>
          </div>
        </div>
      </section>

      <section style={{ background: "transparent" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:py-24 lg:grid-cols-2">
          <div>
            <p
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {t.instructorAuthority.badge}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {t.instructorAuthority.title}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {t.instructorAuthority.description}
            </p>
          </div>

          <div className="grid gap-4">
            {t.instructorAuthority.items.map((item) => (
              <div
                key={item}
                style={{
                  borderRadius: "1.25rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  padding: 16,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#e2e8f0",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div
            style={{
              borderRadius: "2rem",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: 40,
            }}
            className="md:p-10"
          >
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h2
                  style={{
                    fontSize: 30,
                    fontWeight: 900,
                    letterSpacing: "-0.03em",
                    color: "#f8fafc",
                  }}
                >
                  {t.certificateCta.title}
                </h2>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 16,
                    lineHeight: 1.9,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {t.certificateCta.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/verify"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
                    padding: "12px 24px",
                    fontSize: 14,
                    fontWeight: 900,
                    color: "#04121c",
                    textDecoration: "none",
                  }}
                >
                  {t.certificateCta.button}
                </Link>

                <Link
                  href="/registry"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.05)",
                    padding: "12px 24px",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#f8fafc",
                    textDecoration: "none",
                  }}
                >
                  {t.registryButton}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "transparent",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {charterIntro.badge}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {charterIntro.title}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {charterIntro.description}
            </p>
          </div>
        </div>
      </section>

      <CharterShowcase />
      <FeaturedCharterPreview />

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div
          style={{
            borderRadius: "2rem",
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.94), rgba(8,12,20,0.98))",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "48px 32px",
            color: "white",
          }}
          className="md:px-12 md:py-14"
        >
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {t.homeFinalCta.badge}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {t.homeFinalCta.title}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {t.homeFinalCta.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/programs"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                background: "white",
                padding: "12px 24px",
                fontSize: 14,
                fontWeight: 900,
                color: "#04121c",
                textDecoration: "none",
              }}
            >
              {t.homeFinalCta.primary}
            </Link>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.20)",
                padding: "12px 24px",
                fontSize: 14,
                fontWeight: 700,
                color: "#f8fafc",
                textDecoration: "none",
                background: "transparent",
              }}
            >
              {t.homeFinalCta.secondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}