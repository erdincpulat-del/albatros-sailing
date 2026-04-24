"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function BasicSailingPage() {
  const { locale } = useLanguage();

  const ui = {
    badge: locale === "tr" ? "Program" : "Program",
    title: locale === "tr" ? "Başlangıç Yelken Eğitimi" : "Basic Sailing",
    subtitle:
      locale === "tr"
        ? "Yelkene güçlü ve doğru bir başlangıç yapmak isteyenler için 7 günlük temel eğitim programı."
        : "A 7-day foundational training program for those who want a strong and correct start in sailing.",

    introNote:
      locale === "tr"
        ? "Başlangıç Yelken Eğitimi yalnızca ilk adım değildir. Doğru güvenlik alışkanlıklarını, tekne disiplinini ve denizde temel farkındalığı kuran kritik başlangıç seviyesidir."
        : "Basic Sailing is not just a first step. It is the critical starting level where correct safety habits, boat discipline, and basic awareness at sea are established.",

    realityTitle:
      locale === "tr"
        ? "Bu eğitim neyi farklı yapar?"
        : "What makes this training different?",

    realityHeadline:
      locale === "tr"
        ? "Doğru başlangıç, geleceği belirler."
        : "The right start shapes everything that follows.",

    realityItems:
      locale === "tr"
        ? [
            "Yelkene sadece teoriyle değil, gerçek uygulama ile giriş sağlar.",
            "Güvenlik, tekne disiplini ve temel görev mantığını birlikte kurar.",
            "Katılımcıyı yalnızca öğrenen değil, bilinçli hareket eden seviyeye taşır.",
            "Sonraki seviyeler için sağlam ve güvenli temel oluşturur.",
          ]
        : [
            "Introduces sailing not only through theory, but through real practice.",
            "Builds safety, boat discipline, and core onboard task logic together.",
            "Moves the participant beyond passive learning into conscious action.",
            "Creates a solid and safe foundation for the next levels.",
          ],

    overviewTitle:
      locale === "tr" ? "Programın Amacı" : "Program Purpose",

    overviewHeadline:
      locale === "tr"
        ? "Temelden sağlam bir başlangıç."
        : "A strong start from the fundamentals.",

    overviewText:
      locale === "tr"
        ? "Başlangıç Yelken Eğitimi programı; temel yelken mantığını, güvenlik disiplinini, tekne üzerindeki ana görevleri ve denizde kontrollü hareket etmeyi öğretmek için tasarlanmıştır. Amaç, katılımcıyı yalnızca teorik bilgiyle değil, gerçek uygulama ile sağlam bir başlangıç seviyesine taşımaktır."
        : "The Basic Sailing program is designed to teach core sailing logic, safety discipline, primary onboard roles, and controlled movement at sea. The goal is to move the participant to a solid starting level not only through theory, but through real practical experience.",

    systemTitle:
      locale === "tr" ? "Eğitim sistemi" : "Training system",

    systemText:
      locale === "tr"
        ? "Bu programda güvenlik, temel tekne kullanımı, görev paylaşımı ve denizcilik disiplini birlikte ilerler. Amaç yalnızca yelkene başlamak değil; doğru başlangıç alışkanlıkları oluşturarak gelecekteki tüm seviyeler için sağlam bir yapı kurmaktır."
        : "In this program, safety, basic boat handling, role awareness, and seamanship discipline progress together. The goal is not only to start sailing, but to build correct habits that create a strong base for every future level.",

    forWhomTitle:
      locale === "tr" ? "Kimler İçin Uygun?" : "Who Is It For?",

    forWhomItems:
      locale === "tr"
        ? [
            "Yelkene ilk kez başlayacak katılımcılar",
            "Temel güvenlik ve tekne kullanım bilgisi edinmek isteyenler",
            "Daha ileri programlara sağlam bir altyapı ile geçmek isteyenler",
          ]
        : [
            "Participants starting sailing for the first time",
            "Those who want basic safety and boat handling knowledge",
            "Those who want to move to advanced programs with a solid foundation",
          ],

    gainsTitle:
      locale === "tr" ? "Bu Programda Ne Kazanırsınız?" : "What Do You Gain?",

    gainsHeadline:
      locale === "tr"
        ? "Programın temel kazanımları"
        : "Core outcomes of the program",

    gains:
      locale === "tr"
        ? [
            {
              title: "Temel denizcilik farkındalığı",
              text: "Tekne üzerindeki düzen, güvenlik ve temel yelken mantığına güçlü bir giriş.",
            },
            {
              title: "Kontrollü uygulama",
              text: "Gerçek ortamda, temel manevra ve görevleri deneyimleme fırsatı.",
            },
            {
              title: "Sonraki seviyeye hazırlık",
              text: "Coastal Skipper ve üst seviye eğitimler için sağlam başlangıç zemini.",
            },
          ]
        : [
            {
              title: "Fundamental seamanship awareness",
              text: "A strong introduction to onboard order, safety, and core sailing logic.",
            },
            {
              title: "Controlled practice",
              text: "The opportunity to experience basic maneuvers and onboard tasks in a real environment.",
            },
            {
              title: "Preparation for the next level",
              text: "A strong starting foundation for Coastal Skipper and higher-level training.",
            },
          ],

    detailsTitle:
      locale === "tr" ? "Program Detayları" : "Program Details",

    details:
      locale === "tr"
        ? [
            ["Süre", "7 Gün"],
            ["Seviye", "Başlangıç"],
            ["TYF / YES Uyumu", "YY1"],
            ["Odak", "Temel yelken, güvenlik, tekne disiplini"],
            ["Çıktı", "Güçlü başlangıç ve ileri seviyeye hazırlık"],
          ]
        : [
            ["Duration", "7 Days"],
            ["Level", "Beginner"],
            ["TYF / YES Alignment", "YY1"],
            ["Focus", "Basic sailing, safety, boat discipline"],
            ["Outcome", "Strong foundation and readiness for advanced levels"],
          ],

    resultTitle:
      locale === "tr" ? "Program sonunda" : "At the end of the program",

    resultHeadline:
      locale === "tr"
        ? "Bu program seni nereye taşır?"
        : "Where does this program take you?",

    resultItems:
      locale === "tr"
        ? [
            "Temel seviyede daha bilinçli ve güvenli hareket etme",
            "Tekne üzerindeki rol ve görevleri daha iyi anlama",
            "Yelken mantığını gerçek uygulama ile kavrama",
            "Coastal Skipper seviyesine daha sağlam geçiş",
          ]
        : [
            "Move more consciously and safely at basic level",
            "Understand onboard roles and tasks more clearly",
            "Grasp sailing logic through real practice",
            "Make a stronger transition into Coastal Skipper level",
          ],

    nextTitle:
      locale === "tr" ? "Sonraki mantıklı adım" : "The logical next step",

    nextHeadline:
      locale === "tr"
        ? "İlerleme rotasını erken kurun."
        : "Build the progression route early.",

    nextText:
      locale === "tr"
        ? "Bu programı tamamlayan katılımcılar için en doğal ilerleme rotası Coastal Skipper seviyesidir."
        : "For participants completing this program, the most natural progression route is the Coastal Skipper level.",

    foundationBadge: "REAL STARTING FOUNDATION",

    foundationHeadline:
      locale === "tr"
        ? "Yelkene gerçekten doğru başlamak ister misin?"
        : "Do you want to start sailing the right way?",

    foundationText:
      locale === "tr"
        ? "Başlangıç Yelken Eğitimi, seni yalnızca ilk kez tekneye çıkan biri yapmaz. Bu program, güvenlik, disiplin ve temel denizcilik mantığını doğru kurarak seni bir sonraki seviyelere sağlam şekilde hazırlar."
        : "Basic Sailing does not merely put you on a boat for the first time. It builds safety, discipline, and core seamanship logic correctly, preparing you solidly for the levels ahead.",

    ctaPrimary:
      locale === "tr"
        ? "Başlangıç Yelken Eğitimine Katıl"
        : "Join Basic Sailing",

    ctaSecondary:
      locale === "tr" ? "Tüm Programları Gör" : "View All Programs",

    nextProgram:
      locale === "tr"
        ? "Coastal Skipper'a Geç"
        : "Continue to Coastal Skipper",
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
        className="relative overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.62), rgba(8,14,24,0.42))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 0%, rgba(66,189,248,0.16), transparent 60%)",
            filter: "blur(60px)",
            opacity: 0.55,
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
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
              {ui.badge}
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
              {ui.title}
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
              {ui.subtitle}
            </p>

            <div
              style={{
                marginTop: 20,
                padding: "18px 20px",
                borderRadius: 16,
                background: "rgba(103,211,255,0.05)",
                border: "1px solid rgba(103,211,255,0.15)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "#e2e8f0",
                fontWeight: 600,
                maxWidth: 700,
              }}
            >
              {ui.introNote}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full transition hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                  color: "#04121c",
                  padding: "14px 22px",
                  fontSize: "14px",
                  fontWeight: 900,
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)",
                    animation: "shine 1.5s linear infinite",
                  }}
                />
                <span className="relative z-10">{ui.ctaPrimary}</span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full transition hover:bg-white/5"
                style={{
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#f8fafc",
                  padding: "14px 22px",
                  fontSize: "14px",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                {ui.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
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
            {ui.realityTitle}
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
            {ui.realityHeadline}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ui.realityItems.map((item) => (
            <div
              key={item}
              className="card-hover"
              style={{
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                padding: 24,
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
              }}
            >
              <p
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.82)",
                }}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
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
              {ui.overviewTitle}
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
              {ui.overviewHeadline}
            </h2>

            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.overviewText}
            </p>

            <div
              className="mt-8 card-hover"
              style={{
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                padding: 24,
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                {ui.systemTitle}
              </p>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {ui.systemText}
              </p>
            </div>
          </div>

          <div
            className="card-hover"
            style={{
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 32,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {ui.forWhomTitle}
            </p>

            <div className="mt-5 space-y-4">
              {ui.forWhomItems.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                    padding: "16px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.8,
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
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
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
              {ui.gainsTitle}
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
              {ui.gainsHeadline}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ui.gains.map((item) => (
              <div
                key={item.title}
                className="card-hover"
                style={{
                  borderRadius: "1.75rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  padding: 24,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
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
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div
          className="card-hover rounded-[2rem] md:p-10"
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            padding: 32,
            boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
          }}
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
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
                {ui.detailsTitle}
              </p>

              <div className="mt-6 grid gap-4">
                {ui.details.map(([label, value]) => (
                  <div
                    key={label}
                    className="card-hover"
                    style={{
                      borderRadius: "1.25rem",
                      border: "1px solid rgba(255,255,255,0.08)",
                      background:
                        "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                      padding: "16px 20px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 11,
                        fontWeight: 800,
                        textTransform: "uppercase",
                        letterSpacing: "0.16em",
                        color: "rgba(226,232,240,0.62)",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        marginTop: 8,
                        fontSize: 16,
                        fontWeight: 700,
                        color: "#f8fafc",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="card-hover"
              style={{
                borderRadius: "1.75rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                padding: 24,
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                {ui.nextTitle}
              </p>

              <h3
                style={{
                  marginTop: 12,
                  fontSize: 28,
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.02em",
                  color: "#f8fafc",
                }}
              >
                {ui.nextHeadline}
              </h3>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {ui.nextText}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/reserve"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full transition hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                    color: "#04121c",
                    padding: "14px 22px",
                    fontSize: "14px",
                    fontWeight: 900,
                    textDecoration: "none",
                    boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                  }}
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)",
                      animation: "shine 1.5s linear infinite",
                    }}
                  />
                  <span className="relative z-10">{ui.ctaPrimary}</span>
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full transition hover:bg-white/5"
                  style={{
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#f8fafc",
                    padding: "14px 22px",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  {ui.ctaSecondary}
                </Link>
              </div>

              <div className="mt-4">
                <Link
                  href="/programs/coastal-skipper"
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#8ed8ff",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  {ui.nextProgram}
                </Link>
              </div>
            </div>
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
              {ui.resultTitle}
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
              {ui.resultHeadline}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ui.resultItems.map((item) => (
              <div
                key={item}
                className="card-hover"
                style={{
                  borderRadius: "1.5rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  padding: 24,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.82)",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div
          style={{
            borderRadius: "2rem",
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.94), rgba(8,12,20,0.98))",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "48px 32px",
            color: "white",
            boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
          }}
          className="md:px-12 md:py-14"
        >
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {ui.foundationBadge}
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
              {ui.foundationHeadline}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.foundationText}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/reserve"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full transition hover:-translate-y-1"
              style={{
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                padding: "14px 22px",
                fontSize: "14px",
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.5), transparent 70%)",
                  animation: "shine 1.5s linear infinite",
                }}
              />
              <span className="relative z-10">{ui.ctaPrimary}</span>
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full transition hover:bg-white/5"
              style={{
                border: "1px solid rgba(255,255,255,0.20)",
                color: "#f8fafc",
                padding: "14px 22px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                background: "transparent",
              }}
            >
              {ui.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}