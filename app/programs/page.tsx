"use client";

import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function ProgramsPage() {
  const { locale } = useLanguage();

  const content =
    locale === "tr"
      ? {
          heroBadge: "ALBATROS SAILING · EĞİTİM PROGRAMLARI",
          heroTitle1: "Albatros Sailing",
          heroTitle2: "Eğitim Programları",
          heroDescription:
            "Denizde güven, disiplin, liderlik ve gerçek tecrübe kazandıran sistemli eğitim programları. Başlangıç seviyesinden açık deniz kaptanlığına uzanan yapılandırılmış gelişim hattı.",
          sectionBadge: "YAPILANDIRILMIŞ GELİŞİM",
          sectionTitle: "Doğru program, doğru seviyede başlar.",
          sectionDescription:
            "Her program bir sonrakine hazırlık oluşturur. Amaç yalnızca eğitim vermek değil; kontrollü şekilde denizde daha güçlü karar veren kaptanlık yapısı kurmaktır.",
          detailButton: "Detayı Gör",
          featured: "Öne Çıkan",
          programs: [
            {
              slug: "hisaronu-gulf-training",
              title: "Hisarönü Körfezi Eğitimi",
              duration: "7 Gün",
              level: "İleri Seviye",
              description:
                "Gerçek denizde, rota planlama, demirleme, gece seyri ve ekip koordinasyonu ile yoğun eğitim deneyimi.",
              highlight: "Gerçek deniz deneyimi",
            },
            {
              slug: "basic-sailing",
              title: "Başlangıç Yelken Eğitimi",
              duration: "7 Gün",
              level: "Başlangıç",
              description:
                "Denizle ilk tanışma, temel yelken bilgisi, güvenlik ve başlangıç seviyesinde uygulamalı eğitim.",
              highlight: "Doğru başlangıç zemini",
            },
            {
              slug: "coastal-skipper",
              title: "Coastal Skipper Programı",
              duration: "7 Gün",
              level: "Orta Seviye",
              description:
                "Kıyı seyri, liman manevraları, rota takibi ve kaptanlık disiplinine güçlü bir geçiş programı.",
              highlight: "Komutaya geçiş seviyesi",
            },
            {
              slug: "offshore-yacht-course",
              title: "Offshore Yacht Course",
              duration: "7 Gün",
              level: "İleri Seviye",
              description:
                "Açık deniz, gece seyri, vardiya yönetimi, trafik okuma ve gerçek karar verme becerileri üzerine yoğun eğitim.",
              highlight: "Gerçek açık deniz disiplini",
            },
            {
              slug: "yachtmaster",
              title: "Yachtmaster Track",
              duration: "İleri Hat",
              level: "Üst Seviye",
              description:
                "Daha yüksek sorumluluk, liderlik, ileri seviye komuta yaklaşımı ve profesyonel denizcilik çizgisine geçiş.",
              highlight: "Üst düzey kaptanlık yolu",
            },
            {
  slug: "offshore-route-discipline",
  title: "Offshore Route Discipline",
  duration: "7 Gün",
  level: "İleri Seviye",
  description:
    "Bodrum – İstanbul – Çanakkale rotalarında TSS (Traffic Separation Scheme), VTS iletişimi ve gece seyri disiplinlerini kapsayan ileri seviye uygulamalı eğitim.",
  highlight: "Gerçek rota üzerinde deniz disiplini",
},
          ],
        }
      : {
          heroBadge: "ALBATROS SAILING · TRAINING PROGRAMS",
          heroTitle1: "Albatros Sailing",
          heroTitle2: "Training Programs",
          heroDescription:
            "Structured training programs that build safety, discipline, leadership, and real sea experience. A progressive path from entry level to open-sea captaincy.",
          sectionBadge: "STRUCTURED DEVELOPMENT",
          sectionTitle: "The right program starts at the right level.",
          sectionDescription:
            "Each program prepares you for the next stage. The goal is not only to teach, but to build a captaincy structure that makes stronger decisions at sea in a controlled progression.",
          detailButton: "View Details",
          featured: "Featured",
          programs: [
            {
              slug: "hisaronu-gulf-training",
              title: "Hisarönü Gulf Training",
              duration: "7 Days",
              level: "Advanced",
              description:
                "An intensive training experience at sea with route planning, anchoring, night sailing, and crew coordination.",
              highlight: "Real sea experience",
            },
            {
              slug: "basic-sailing",
              title: "Basic Sailing Training",
              duration: "2 Days",
              level: "Beginner",
              description:
                "First contact with the sea, core sailing knowledge, safety, and hands-on entry-level training.",
              highlight: "The right foundation",
            },
            {
              slug: "coastal-skipper",
              title: "Coastal Skipper Program",
              duration: "4 Days",
              level: "Intermediate",
              description:
                "A strong transition into coastal sailing, harbor maneuvers, route tracking, and captaincy discipline.",
              highlight: "Command transition level",
            },
            {
              slug: "offshore-yacht-course",
              title: "Offshore Yacht Course",
              duration: "6 Days",
              level: "Advanced",
              description:
                "Intensive training focused on open sea, night sailing, watchkeeping, traffic awareness, and real decision-making ability.",
              highlight: "Real open-sea discipline",
            },
            {
              slug: "yachtmaster",
              title: "Yachtmaster Track",
              duration: "Advanced Track",
              level: "Upper Level",
              description:
                "A route toward higher responsibility, leadership, advanced command approach, and professional seamanship.",
              highlight: "Top-level captaincy path",
            },
          ],
        };

  return (
    <>
      <SiteHeader />

      <main
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
          color: "#f8fafc",
        }}
      >
        <section
          style={{
            padding: "110px 20px 70px",
            background:
              "linear-gradient(180deg, rgba(8,14,24,0.72) 0%, rgba(6,11,20,0.92) 100%)",
            color: "white",
            position: "relative",
            overflow: "hidden",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 15% 20%, rgba(103,211,255,0.10), transparent 30%), radial-gradient(circle at 80% 75%, rgba(103,211,255,0.08), transparent 28%)",
            }}
          />

          <div
            style={{
              position: "relative",
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontSize: "12px",
                fontWeight: 800,
                letterSpacing: "1.4px",
                marginBottom: "16px",
                padding: "7px 14px",
                borderRadius: "999px",
                border: "1px solid rgba(103,211,255,0.24)",
                background: "rgba(103,211,255,0.08)",
                color: "#aee8ff",
              }}
            >
              {content.heroBadge}
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 68px)",
                lineHeight: 1.02,
                margin: "0 0 16px 0",
                letterSpacing: "-0.04em",
                fontWeight: 900,
                color: "#f8fafc",
              }}
            >
              {content.heroTitle1}
              <br />
              {content.heroTitle2}
            </h1>

            <p
              style={{
                maxWidth: "820px",
                margin: "0 auto",
                fontSize: "18px",
                lineHeight: 1.8,
                color: "rgba(226,232,240,0.82)",
              }}
            >
              {content.heroDescription}
            </p>
          </div>
        </section>

        <section
          style={{
            padding: "80px 20px 36px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                maxWidth: "760px",
                marginBottom: "34px",
              }}
            >
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "1.2px",
                  color: "rgba(226,232,240,0.62)",
                  marginBottom: "10px",
                }}
              >
                {content.sectionBadge}
              </div>

              <h2
                style={{
                  fontSize: "clamp(28px, 4vw, 42px)",
                  lineHeight: 1.08,
                  margin: "0 0 14px 0",
                  fontWeight: 900,
                  color: "#f8fafc",
                }}
              >
                {content.sectionTitle}
              </h2>

              <p
                style={{
                  margin: 0,
                  fontSize: "16px",
                  lineHeight: 1.8,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {content.sectionDescription}
              </p>
            </div>
          </div>
        </section>

        <section
          style={{
            padding: "0 20px 100px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {content.programs.map((program) => (
              <article
                key={program.slug}
                className="group"
                style={{
                  position: "relative",
                  overflow: "hidden",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  borderRadius: "24px",
                  padding: "28px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "360px",
                  transition:
                    "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at top left, rgba(103,211,255,0.10), transparent 34%)",
                    pointerEvents: "none",
                  }}
                />

                <div
                  className="opacity-0 group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    inset: -2,
                    background:
                      "radial-gradient(circle at 30% 20%, rgba(103,211,255,0.32), transparent 36%), radial-gradient(circle at 70% 100%, rgba(66,189,248,0.20), transparent 34%)",
                    filter: "blur(20px)",
                    transition: "opacity 0.35s ease",
                    pointerEvents: "none",
                  }}
                />

                <div
                  className="opacity-0 group-hover:opacity-100"
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "24px",
                    border: "1px solid rgba(103,211,255,0.40)",
                    boxShadow:
                      "0 0 0 1px rgba(103,211,255,0.08), 0 24px 60px rgba(66,189,248,0.18)",
                    transition: "opacity 0.35s ease",
                    pointerEvents: "none",
                  }}
                />

                <div
                  className="group-hover:-translate-y-[4px]"
                  style={{
                    position: "relative",
                    zIndex: 2,
                    transition: "transform 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        padding: "7px 11px",
                        borderRadius: "999px",
                        background: "rgba(255,255,255,0.05)",
                        color: "#e2e8f0",
                        fontWeight: 800,
                        letterSpacing: "0.02em",
                        border: "1px solid rgba(255,255,255,0.10)",
                      }}
                    >
                      {program.duration}
                    </span>

                    <span
                      style={{
                        fontSize: "12px",
                        padding: "7px 11px",
                        borderRadius: "999px",
                        background: "rgba(103,211,255,0.10)",
                        color: "#8ed8ff",
                        fontWeight: 800,
                        letterSpacing: "0.02em",
                        border: "1px solid rgba(103,211,255,0.18)",
                      }}
                    >
                      {program.level}
                    </span>
                  </div>

                  <div
                    style={{
                      fontSize: "11px",
                      fontWeight: 800,
                      letterSpacing: "0.14em",
                      color: "rgba(226,232,240,0.62)",
                      marginBottom: "12px",
                      textTransform: "uppercase",
                    }}
                  >
                    {program.highlight}
                  </div>

                  <h2
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.18,
                      margin: "0 0 14px 0",
                      fontWeight: 900,
                      letterSpacing: "-0.03em",
                      color: "#f8fafc",
                    }}
                  >
                    {program.title}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.75,
                      color: "rgba(226,232,240,0.78)",
                    }}
                  >
                    {program.description}
                  </p>
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: "28px",
                    display: "flex",
                    gap: "10px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link
                    href={`/programs/${program.slug}`}
                    style={{
                      position: "relative",
                      display: "inline-block",
                      textDecoration: "none",
                      background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                      color: "#04121c",
                      padding: "13px 18px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 900,
                      boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                      overflow: "hidden",
                      transition:
                        "transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease",
                    }}
                    className="group/button hover:-translate-y-[2px] hover:shadow-[0_16px_34px_rgba(66,189,248,0.32)]"
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover/button:opacity-100"
                      style={{
                        background:
                          "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.22), transparent 70%)",
                        animation: "shine 1.5s linear infinite",
                      }}
                    />
                    <span
                      className="absolute inset-0 opacity-0 group-hover/button:opacity-100"
                      style={{
                        boxShadow: "inset 0 0 28px rgba(255,255,255,0.18)",
                        transition: "opacity 0.3s ease",
                      }}
                    />
                    <span style={{ position: "relative", zIndex: 2 }}>
                      {content.detailButton}
                    </span>
                  </Link>

                  {program.slug === "offshore-yacht-course" ? (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "13px 14px",
                        borderRadius: "999px",
                        background: "rgba(103,211,255,0.10)",
                        color: "#8ed8ff",
                        fontSize: "13px",
                        fontWeight: 800,
                        border: "1px solid rgba(103,211,255,0.18)",
                      }}
                    >
                      {content.featured}
                    </span>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}