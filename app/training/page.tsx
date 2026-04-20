"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

export default function TrainingPage() {
  const { lang } = useLanguage();
  const t = useMemo(() => getMessages(lang), [lang]);

  const intro = {
    badge: lang === "tr" ? "Eğitim Yapısı" : "Training Structure",
    title:
      lang === "tr"
        ? "Gerçek denizde yetkinlik kazandıran eğitim sistemi."
        : "A training system that builds real competence at sea.",
    description:
      lang === "tr"
        ? "Albatros Sailing eğitim modeli; yalnızca teori anlatan değil, karar alma, komuta, güven ve uygulama becerisi kazandıran bir gelişim yapısıdır. Amaç, sizi kurs tamamlayan değil, denizde daha güçlü hareket eden bir seviyeye taşımaktır."
        : "The Albatros Sailing training model is not just about theory. It is a development structure that builds decision-making, command, confidence, and practical ability. The goal is not only to complete a course, but to move you toward stronger performance at sea.",
  };

  const suitability =
    lang === "tr"
      ? [
          {
            title: "Yeni başlayanlar için",
            description:
              "Denizcilik temeli oluşturmak, güvenli başlangıç yapmak ve kontrollü şekilde ilerlemek isteyenler için.",
          },
          {
            title: "Seviyesini büyütmek isteyenler için",
            description:
              "Kıyı seyri, açık deniz geçişi, manevra ve komuta becerilerini ileri taşımak isteyen adaylar için.",
          },
          {
            title: "Ciddi hedefi olanlar için",
            description:
              "Sertifika, kurumsal görünürlük ve profesyonel seviyeye yaklaşmak isteyen katılımcılar için.",
          },
        ]
      : [
          {
            title: "For beginners",
            description:
              "For those who want to build a strong maritime foundation, start safely, and progress in a controlled way.",
          },
          {
            title: "For advancing sailors",
            description:
              "For candidates who want to take coastal sailing, offshore passages, maneuvers, and command skills to a higher level.",
          },
          {
            title: "For serious goals",
            description:
              "For participants who want certification, institutional visibility, and a path closer to professional level.",
          },
        ];

  const tyfLevels =
    lang === "tr"
      ? [
          {
            code: "YY1",
            title: "Yelkenli Yatçılığın Temelleri",
            description:
              "Sisteme giriş seviyesi. Temel yelken, güvenlik, tekne ve denizcilik altyapısının oluşturulduğu başlangıç aşaması.",
          },
          {
            code: "YY2",
            title: "Gezi Yatçılığı",
            description:
              "Kıyı ve gezi yatçılığı yaklaşımının geliştiği, tekne yönetimi ve karar alma disiplininin güçlendiği seviye.",
          },
          {
            code: "YY3",
            title: "Üst Düzey Yatçılık",
            description:
              "Daha yüksek sorumluluk, daha güçlü komuta ve daha ileri denizcilik uygulamalarına geçiş seviyesi.",
          },
          {
            code: "YY4",
            title: "İleri / Yarışçılık Odağı",
            description:
              "Performans, ileri teknik yetkinlik ve daha yüksek deniz hakimiyeti isteyen katılımcılar için üst seviye yapı.",
          },
          {
            code: "YY5",
            title: "Eğitmen / Öğretici Seviyesi",
            description:
              "TYF yapısında eğitmenlik tarafını temsil eden ileri seviye öğretici basamağı.",
          },
        ]
      : [
          {
            code: "YY1",
            title: "Fundamentals of Sailing Yachting",
            description:
              "Entry level of the system. Builds the initial foundation in sailing, safety, boat knowledge, and seamanship.",
          },
          {
            code: "YY2",
            title: "Cruising Yachting",
            description:
              "Develops the cruising approach, boat handling discipline, and decision-making confidence.",
          },
          {
            code: "YY3",
            title: "Advanced Yachting",
            description:
              "A higher-responsibility level focused on stronger command and more advanced seamanship application.",
          },
          {
            code: "YY4",
            title: "Advanced / Performance Focus",
            description:
              "An upper-level structure for participants seeking performance, advanced technical ability, and stronger control at sea.",
          },
          {
            code: "YY5",
            title: "Instructor / Teaching Level",
            description:
              "Represents the instructor-teacher side of the TYF structure at an advanced level.",
          },
        ];

  const steps =
    lang === "tr"
      ? [
          {
            number: "01",
            title: "Seviye ve hedef analizi",
            description:
              "Başlangıç seviyeniz, deniz tecrübeniz ve hedefiniz değerlendirilir.",
          },
          {
            number: "02",
            title: "Uygun program seçimi",
            description:
              "Sizin için en doğru eğitim rotası belirlenir ve gelişim planı netleştirilir.",
          },
          {
            number: "03",
            title: "Denizde uygulamalı süreç",
            description:
              "Gerçek rota, gerçek manevra ve gerçek karar alma anlarıyla eğitim ilerler.",
          },
          {
            number: "04",
            title: "Sertifika ve doğrulama",
            description:
              "Süreç sonunda kayıt destekli ve doğrulanabilir belge yapısı devreye girer.",
          },
        ]
      : [
          {
            number: "01",
            title: "Level and goal analysis",
            description:
              "Your starting level, sea experience, and goals are evaluated.",
          },
          {
            number: "02",
            title: "Program selection",
            description:
              "The most suitable training route is chosen and your development plan is clarified.",
          },
          {
            number: "03",
            title: "Practical process at sea",
            description:
              "Training progresses through real routes, real maneuvers, and real decision-making moments.",
          },
          {
            number: "04",
            title: "Certification and verification",
            description:
              "At the end of the process, a registry-backed and verifiable document structure is activated.",
          },
        ];

  const proofItems =
    lang === "tr"
      ? [
          "Gerçek deniz deneyimi",
          "Yapılandırılmış gelişim modeli",
          "Doğrulanabilir sertifika sistemi",
        ]
      : [
          "Real sea experience",
          "Structured development model",
          "Verifiable certificate system",
        ];

  const programLevelBadges: Record<string, string[]> = {
    "Basic Sailing": ["YY1", "YY2"],
    "Coastal Skipper": ["YY2", "YY3"],
    "Offshore Yacht Course": ["YY3", "YY4"],
    "Yachtmaster Track": ["YY4", "YY5"],
  };

  return (
    <main
      className="text-white"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
      }}
    >
      <section
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.62), rgba(8,14,24,0.42))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(103,211,255,0.08)",
                border: "1px solid rgba(103,211,255,0.18)",
                color: "#8ed8ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {intro.badge}
            </p>

            <h1
              style={{
                marginTop: 12,
                fontSize: "clamp(40px, 5vw, 70px)",
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: "-0.04em",
                color: "#f8fafc",
              }}
            >
              {intro.title}
            </h1>

            <p
              style={{
                marginTop: 20,
                maxWidth: "42rem",
                fontSize: 17,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.82)",
              }}
            >
              {intro.description}
            </p>

            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 12,
                fontSize: 14,
                color: "rgba(226,232,240,0.62)",
              }}
            >
              <span>{proofItems[0]}</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.24)",
                }}
              />
              <span>{proofItems[1]}</span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.24)",
                }}
              />
              <span>{proofItems[2]}</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  padding: "14px 22px",
                  background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
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
                {lang === "tr" ? "Programları İncele" : "Explore Programs"}
              </Link>

              <Link
                href="/reserve"
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
                  fontWeight: 700,
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 26px rgba(66,189,248,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {lang === "tr" ? "Rezervasyon" : "Reserve"}
              </Link>
            </div>
          </div>
        </div>
      </section>
            <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <p
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(226,232,240,0.62)",
            }}
          >
            {lang === "tr" ? "Bu Eğitim Kimler İçin?" : "Who Is This Training For?"}
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
            {lang === "tr"
              ? "Seviyeniz ne olursa olsun, doğru yapı ile ilerleyin."
              : "Move forward with the right structure, whatever your level."}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {suitability.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "1.75rem",
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(66,189,248,0.12)";
                e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(0,0,0,0.18)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#f8fafc",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  marginTop: 16,
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {lang === "tr" ? "TYF / YES Uyumlu Yapı" : "TYF / YES Aligned Structure"}
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
              {lang === "tr"
                ? "Türkiye Yelken Federasyonu eğitim seviyeleri ile uyumlu gelişim yapısı."
                : "A development structure aligned with Turkish Sailing Federation training levels."}
            </h2>

            <p
              style={{
                marginTop: 16,
                maxWidth: "42rem",
                fontSize: 17,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.82)",
              }}
            >
              {lang === "tr"
                ? "Albatros Sailing eğitim yaklaşımı, TYF Yelken Eğitim Sistemi seviyeleriyle uyumlu biçimde yapılandırılabilir. Böylece resmi sistemin netliği ile premium uygulama deneyimi aynı yapıda birleşir."
                : "The Albatros Sailing training approach can be structured in alignment with TYF Sailing Education System levels. This combines the clarity of the official system with a premium practical experience."}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {tyfLevels.map((level) => (
              <div
                key={level.code}
                style={{
                  borderRadius: "1.75rem",
                  padding: 24,
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 40px rgba(66,189,248,0.12)";
                  e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 18px 36px rgba(0,0,0,0.18)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.20em",
                    color: "rgba(226,232,240,0.62)",
                  }}
                >
                  {level.code}
                </div>

                <h3
                  style={{
                    marginTop: 12,
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {level.title}
                </h3>

                <p
                  style={{
                    marginTop: 16,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {level.description}
                </p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 32,
              borderRadius: "1.75rem",
              padding: 24,
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.82)",
              }}
            >
              {lang === "tr"
                ? "Bu seviye yapısı, Albatros Sailing’in gerçek rota, açık deniz pratiği ve doğrulanabilir sertifika yaklaşımı ile birleştirilerek uygulanır."
                : "This level structure is applied together with Albatros Sailing’s real-route, offshore practice, and verifiable certification approach."}
            </p>
          </div>
        </div>
      </section>
            <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
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
                {lang === "tr" ? "Program rotaları" : "Program routes"}
              </h2>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 17,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.82)",
                }}
              >
                {lang === "tr"
                  ? "İhtiyacınıza ve hedefinize göre uygun eğitim programını seçin."
                  : "Choose the right training program according to your needs and goals."}
              </p>
            </div>

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
                fontWeight: 700,
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow =
                  "0 12px 26px rgba(66,189,248,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {t.viewAllPrograms}
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.programs.map((program) => {
              const levelBadges = programLevelBadges[program.title] || [];

              return (
                <Link
                  key={program.title}
                  href={program.href}
                  style={{
                    borderRadius: "1.75rem",
                    padding: 24,
                    background:
                      "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                    textDecoration: "none",
                    transition:
                      "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(66,189,248,0.12)";
                    e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 36px rgba(0,0,0,0.18)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.20em",
                        color: "rgba(226,232,240,0.62)",
                      }}
                    >
                      {t.programCardBadge}
                    </div>

                    {levelBadges.map((badge) => (
                      <span
                        key={badge}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          borderRadius: 999,
                          padding: "6px 12px",
                          border: "1px solid rgba(255,255,255,0.10)",
                          background: "rgba(255,255,255,0.05)",
                          fontSize: 10,
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          color: "#e2e8f0",
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>

                  <h3
                    style={{
                      marginTop: 14,
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#f8fafc",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {program.title}
                  </h3>

                  <p
                    style={{
                      marginTop: 16,
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: "rgba(226,232,240,0.78)",
                    }}
                  >
                    {program.description}
                  </p>

                  <div
                    style={{
                      marginTop: 24,
                      display: "inline-flex",
                      alignItems: "center",
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#8ed8ff",
                    }}
                  >
                    {t.viewDetails}
                    <span style={{ marginLeft: 8 }}>→</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-2xl">
          <p
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(226,232,240,0.62)",
            }}
          >
            {lang === "tr" ? "Eğitim Akışı" : "Training Flow"}
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
            {lang === "tr" ? "Süreç nasıl ilerler?" : "How does the process work?"}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                borderRadius: "1.75rem",
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(66,189,248,0.12)";
                e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(0,0,0,0.18)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  style={{
                    display: "inline-flex",
                    height: 44,
                    width: 44,
                    flexShrink: 0,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                    color: "#04121c",
                    fontSize: 14,
                    fontWeight: 900,
                    boxShadow: "0 8px 20px rgba(66,189,248,0.20)",
                  }}
                >
                  {step.number}
                </div>

                <div>
                  <h3
                    style={{
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#f8fafc",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      marginTop: 12,
                      fontSize: 14,
                      lineHeight: 1.85,
                      color: "rgba(226,232,240,0.78)",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
            <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div
            style={{
              borderRadius: "2rem",
              padding: 32,
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
            className="md:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.62)",
                  }}
                >
                  {lang === "tr" ? "Sonraki Adım" : "Next Step"}
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
                  {lang === "tr"
                    ? "Şimdi sizin için doğru programı seçin."
                    : "Now choose the right program for you."}
                </h2>

                <p
                  style={{
                    marginTop: 16,
                    maxWidth: "42rem",
                    fontSize: 16,
                    lineHeight: 1.9,
                    color: "rgba(226,232,240,0.82)",
                  }}
                >
                  {lang === "tr"
                    ? "Programları inceleyin, seviyenize uygun rotayı belirleyin ve rezervasyon sürecine geçin. Gerekirse ekibimizle iletişime geçerek yönlendirme alabilirsiniz."
                    : "Review the programs, identify the route that fits your level, and move into the reservation process. If needed, contact our team for guidance."}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/programs"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 14,
                    padding: "14px 22px",
                    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
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
                  {lang === "tr" ? "Programları Gör" : "View Programs"}
                </Link>

                <Link
                  href="/contact"
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
                    fontWeight: 700,
                    transition:
                      "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 26px rgba(66,189,248,0.10)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {lang === "tr" ? "İletişime Geç" : "Contact Us"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}