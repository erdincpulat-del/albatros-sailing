"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function CoastalSkipperPage() {
  const { locale } = useLanguage();

  const ui = {
    badge: locale === "tr" ? "Program" : "Program",
    title: "Coastal Skipper",
    subtitle:
      locale === "tr"
        ? "Kıyı seyri, komuta disiplini ve daha güçlü tekne yönetimi için gelişim programı."
        : "A development program for coastal passage skills, command discipline, and stronger boat management.",

    introNote:
      locale === "tr"
        ? "Coastal Skipper, temel denizcilik bilgisi ile gerçek komuta disiplini arasındaki geçiş seviyesidir. Amaç yalnızca kıyıda seyretmek değil, daha bilinçli karar verebilen bir skipper yapısı oluşturmaktır."
        : "Coastal Skipper is the transition level between basic seamanship knowledge and real command discipline. The aim is not merely to sail along the coast, but to build a skipper structure capable of more conscious decisions.",

    realityTitle:
      locale === "tr"
        ? "Bu eğitim neyi farklı yapar?"
        : "What makes this training different?",

    realityHeadline:
      locale === "tr"
        ? "Temelden komutaya geçiş burada başlar."
        : "The transition from basics to command starts here.",

    realityItems:
      locale === "tr"
        ? [
            "Kıyı seyri içinde daha bilinçli rota ve komuta disiplini kurar.",
            "Marina manevraları, planlama ve ekip yönetimini birlikte geliştirir.",
            "Açık deniz seviyesine geçmeden önce karar verme refleksini güçlendirir.",
            "Temel seviyeden gerçek kaptanlık çizgisine geçiş sağlar.",
          ]
        : [
            "Builds more conscious route and command discipline in coastal passages.",
            "Develops marina maneuvers, planning, and crew management together.",
            "Strengthens decision-making reflexes before offshore level.",
            "Creates the transition from basic level to real captaincy progression.",
          ],

    overviewTitle: locale === "tr" ? "Programın Amacı" : "Program Purpose",

    overviewHeadline:
      locale === "tr"
        ? "Kıyı seyri ve komutaya geçiş."
        : "A transition into coastal command and passage discipline.",

    overviewText:
      locale === "tr"
        ? "Coastal Skipper programı; temel seviyeyi aşmış katılımcıların kıyı seyri, tekne yönetimi, manevra, planlama ve karar alma becerilerini ileri taşımak için tasarlanmıştır. Amaç, adayın yalnızca tekne üzerinde bulunmasını değil, tekneye daha bilinçli şekilde liderlik etmesini sağlamaktır."
        : "The Coastal Skipper program is designed to advance the coastal navigation, boat handling, maneuvering, planning, and decision-making abilities of participants who have moved beyond the basic level. The goal is not only to place the candidate on a boat, but to help them lead it more consciously.",

    systemTitle: locale === "tr" ? "Eğitim sistemi" : "Training system",

    systemText:
      locale === "tr"
        ? "Bu programda kıyı seyri, rota planlama, güvenlik ve komuta yaklaşımı birlikte çalışır. Amaç yalnızca tekne kullanmak değil; kıyı koşullarında doğru karar verebilen, daha güvenli ve daha disiplinli bir skipper yapısı oluşturmaktır."
        : "In this program, coastal passage, route planning, safety, and command approach work together. The aim is not only to handle a boat, but to build a safer, more disciplined skipper structure capable of making sound decisions in coastal conditions.",

    forWhomTitle: locale === "tr" ? "Kimler İçin Uygun?" : "Who Is It For?",

    forWhomItems:
      locale === "tr"
        ? [
            "Temel seviyeyi geçmiş ve daha fazla sorumluluk almak isteyenler",
            "Kıyı seyri ve rota planlamasında güven kazanmak isteyenler",
            "Açık deniz seviyesine geçmeden önce komuta disiplini oluşturmak isteyenler",
          ]
        : [
            "Those who have passed the basic level and want to take on more responsibility",
            "Those who want to build confidence in coastal passages and route planning",
            "Those who want to establish command discipline before moving into offshore level",
          ],

    gainsTitle: locale === "tr" ? "Bu Programda Ne Kazanırsınız?" : "What Do You Gain?",

    gainsHeadline:
      locale === "tr"
        ? "Programın temel kazanımları"
        : "Core outcomes of the program",

    gains:
      locale === "tr"
        ? [
            {
              title: "Kıyı seyri güveni",
              text: "Seyir planlaması, rota düşüncesi ve kıyı odaklı karar alma becerisi gelişir.",
            },
            {
              title: "Tekne yönetim disiplini",
              text: "Manevra, ekip düzeni ve komuta yaklaşımı daha net hale gelir.",
            },
            {
              title: "Bir üst seviyeye hazırlık",
              text: "Offshore Yacht Course ve daha ileri yapılar için gerekli zihinsel ve pratik altyapı güçlenir.",
            },
          ]
        : [
            {
              title: "Coastal passage confidence",
              text: "Passage planning, route thinking, and coastal decision-making ability improve.",
            },
            {
              title: "Boat management discipline",
              text: "Maneuvering, crew organization, and command approach become clearer.",
            },
            {
              title: "Preparation for the next level",
              text: "The mental and practical foundation required for Offshore Yacht Course and higher structures becomes stronger.",
            },
          ],

    detailsTitle: locale === "tr" ? "Program Detayları" : "Program Details",

    details:
      locale === "tr"
        ? [
            ["Süre", "6–7 Gün"],
            ["Seviye", "Orta Seviye"],
            ["TYF / YES Uyumu", "YY2 / YY3"],
            ["Odak", "Kıyı seyri, komuta, manevra, rota planlama"],
            ["Çıktı", "Daha bilinçli yönetim ve offshore hazırlığı"],
          ]
        : [
            ["Duration", "6–7 Days"],
            ["Level", "Intermediate"],
            ["TYF / YES Alignment", "YY2 / YY3"],
            ["Focus", "Coastal passage, command, maneuvering, route planning"],
            ["Outcome", "More conscious management and offshore readiness"],
          ],

    resultTitle: locale === "tr" ? "Program sonunda" : "At the end of the program",

    resultHeadline:
      locale === "tr"
        ? "Bu program seni nereye taşır?"
        : "Where does this program take you?",

    resultItems:
      locale === "tr"
        ? [
            "Kıyı seyri içinde daha güçlü karar verebilme",
            "Manevra ve tekne yönetiminde daha yüksek özgüven",
            "Daha bilinçli rota kurma ve uygulama yaklaşımı",
            "Offshore seviyesine geçiş için daha sağlam temel",
          ]
        : [
            "Stronger decision-making in coastal passages",
            "Higher confidence in maneuvers and boat management",
            "A more conscious approach to route building and execution",
            "A stronger foundation for transition into offshore level",
          ],

    nextTitle: locale === "tr" ? "Sonraki mantıklı adım" : "The logical next step",

    nextHeadline:
      locale === "tr"
        ? "Bir üst seviyeye planlı geçin."
        : "Move into the next level with structure.",

    nextText:
      locale === "tr"
        ? "Bu programı tamamlayan katılımcılar için bir sonraki güçlü aşama Offshore Yacht Course seviyesidir."
        : "For participants completing this program, the next strong stage is the Offshore Yacht Course level.",

    foundationBadge: "REAL COASTAL DISCIPLINE",

    foundationHeadline:
      locale === "tr"
        ? "Kıyı seyri seviyesinde gerçekten güçlenmek ister misin?"
        : "Do you want to become truly stronger at coastal level?",

    foundationText:
      locale === "tr"
        ? "Coastal Skipper, temel bilgiyi gerçek yönetim disiplinine dönüştürür. Bu program, seni daha bilinçli karar veren, daha güvenli rota kuran ve offshore seviyesine daha sağlam geçen bir skipper adayına dönüştürür."
        : "Coastal Skipper transforms basic knowledge into real management discipline. This program helps you become a candidate skipper who makes more conscious decisions, builds safer routes, and transitions more solidly into offshore level.",

    ctaPrimary:
      locale === "tr" ? "Coastal Skipper'a Katıl" : "Join Coastal Skipper",
    ctaSecondary:
      locale === "tr" ? "Tüm Programları Gör" : "View All Programs",
    nextProgram:
      locale === "tr"
        ? "Offshore Yacht Course'a Geç"
        : "Continue to Offshore Yacht Course",
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
              "radial-gradient(circle at 20% 0%, rgba(66,189,248,0.15), transparent 60%)",
            filter: "blur(60px)",
            opacity: 0.5,
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
              className="card-hover"
              style={{
                marginTop: 32,
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
                  href="/programs/offshore-yacht-course"
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