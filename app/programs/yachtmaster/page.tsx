"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function YachtmasterPage() {
  const { locale } = useLanguage();

  const ui = {
    badge: locale === "tr" ? "Program" : "Program",
    title: "Yachtmaster Track",
    subtitle:
      locale === "tr"
        ? "Komuta, sorumluluk ve profesyonel denizcilik duruşunu üst seviyeye taşıyan premium gelişim programı."
        : "A premium development program that elevates command, responsibility, and professional maritime presence to the highest level.",

    introNote:
      locale === "tr"
        ? "Yachtmaster Track, sadece ileri eğitim değildir. Bu seviye; komutayı temsil gücüne, pratiği profesyonel duruşa ve deniz tecrübesini daha yüksek otoriteye dönüştüren üst düzey gelişim hattıdır."
        : "Yachtmaster Track is not only advanced training. It is a high-level development path that transforms command into representational strength, practice into professional presence, and sea experience into higher authority.",

    realityTitle:
      locale === "tr"
        ? "Bu eğitim neyi farklı yapar?"
        : "What makes this training different?",

    realityHeadline:
      locale === "tr"
        ? "Bu seviye kurs değil, konum kazandırır."
        : "This level builds position, not only completion.",

    realityItems:
      locale === "tr"
        ? [
            "Komuta refleksini daha yüksek sorumluluk seviyesine taşır.",
            "Offshore pratiğini profesyonel denizcilik duruşuna dönüştürür.",
            "Daha net liderlik, daha güçlü karar ve daha yüksek operasyon disiplini kurar.",
            "Seni bir sonraki kursa değil, daha yüksek bir denizcilik konumuna taşır.",
          ]
        : [
            "Raises command reflexes to a higher level of responsibility.",
            "Transforms offshore practice into a professional maritime posture.",
            "Builds clearer leadership, stronger decisions, and higher operational discipline.",
            "Moves you not just to another course, but to a higher maritime position.",
          ],

    overviewTitle:
      locale === "tr" ? "Programın Amacı" : "Program Purpose",

    overviewHeadline:
      locale === "tr"
        ? "Komutayı daha yüksek seviyeye taşıyın."
        : "Take command to a higher level.",

    overviewText:
      locale === "tr"
        ? "Yachtmaster Track; açık deniz pratiğini daha ileri noktaya taşımak, komuta reflekslerini güçlendirmek, daha yüksek sorumluluk düzeyine çıkmak ve profesyonel seviyeye yaklaşan bir duruş inşa etmek için tasarlanmıştır. Amaç yalnızca daha fazla deniz yapmak değil; denizde daha yüksek otorite, daha net karar ve daha güçlü liderlik kazandırmaktır."
        : "The Yachtmaster Track is designed to take offshore practice to a higher level, strengthen command reflexes, raise the level of responsibility, and build a presence that approaches professional maritime standards. The goal is not only to spend more time at sea, but to develop higher authority, clearer decisions, and stronger leadership on the water.",

    systemTitle:
      locale === "tr" ? "Eğitim sistemi" : "Training system",

    systemText:
      locale === "tr"
        ? "Bu programda liderlik, komuta, ileri sorumluluk, operasyon disiplini ve profesyonel denizcilik yaklaşımı birlikte çalışır. Amaç yalnızca daha ileri gitmek değil; denizde daha yüksek güven, otorite ve temsil gücü oluşturmaktır."
        : "In this program, leadership, command, advanced responsibility, operational discipline, and professional maritime approach work together. The goal is not only to move further, but to build greater trust, authority, and representational strength at sea.",

    forWhomTitle:
      locale === "tr" ? "Kimler İçin Uygun?" : "Who Is It For?",

    forWhomItems:
      locale === "tr"
        ? [
            "Açık deniz seviyesini geçmiş ve komuta gücünü ileri taşımak isteyenler",
            "Daha ciddi deniz sorumluluğu ve daha yüksek profesyonel standart hedefleyenler",
            "Üst düzey sertifikasyon ve eğitmenlik yaklaşımına yaklaşmak isteyen katılımcılar",
          ]
        : [
            "Those who have moved beyond offshore level and want to take command ability further",
            "Those aiming for more serious sea responsibility and higher professional standards",
            "Participants who want to move closer to top-level certification and instructor-oriented standards",
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
              title: "Üst düzey komuta disiplini",
              text: "Daha net karar alma, sorumluluk taşıma ve tekneye liderlik etme kapasitesi gelişir.",
            },
            {
              title: "Profesyonel seviye yaklaşımı",
              text: "Denize bakış, operasyon disiplini ve kurumsal görünürlük algısı üst seviyeye taşınır.",
            },
            {
              title: "İleri sertifikasyon hazırlığı",
              text: "Daha ileri doğrulanabilir belge yapıları ve eğitmenlik yaklaşımı için güçlü zemin oluşur.",
            },
          ]
        : [
            {
              title: "High-level command discipline",
              text: "Clearer decision-making, stronger responsibility handling, and better vessel leadership capacity are developed.",
            },
            {
              title: "Professional-level approach",
              text: "Sea awareness, operational discipline, and institutional presence are elevated to a higher level.",
            },
            {
              title: "Preparation for advanced certification",
              text: "A strong foundation is created for higher verifiable document structures and instructor-oriented pathways.",
            },
          ],

    detailsTitle:
      locale === "tr" ? "Program Detayları" : "Program Details",

    details:
      locale === "tr"
        ? [
            ["Süre", "Modüler / Etaplı"],
            ["Seviye", "Üst Seviye / Premium"],
            ["TYF / YES Uyumu", "YY4 / YY5"],
            ["Odak", "Komuta, liderlik, ileri seviye sorumluluk"],
            ["Çıktı", "Üst düzey denizcilik duruşu ve profesyonel yaklaşım"],
          ]
        : [
            ["Duration", "Modular / Staged"],
            ["Level", "Top Level / Premium"],
            ["TYF / YES Alignment", "YY4 / YY5"],
            ["Focus", "Command, leadership, advanced responsibility"],
            ["Outcome", "High-level maritime presence and professional approach"],
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
            "Daha yüksek komuta ve liderlik refleksi",
            "Daha ciddi sorumluluk taşıyabilen denizcilik yaklaşımı",
            "Daha görünür profesyonel duruş ve temsil gücü",
            "İleri sertifikasyon çizgisine daha sağlam hazırlık",
          ]
        : [
            "Higher command and leadership reflexes",
            "A maritime approach capable of carrying greater responsibility",
            "Stronger professional presence and representational strength",
            "More solid preparation for advanced certification paths",
          ],

    nextTitle:
      locale === "tr" ? "Programın pozisyonu" : "Program position",

    nextHeadline:
      locale === "tr"
        ? "Bu seviye bir sonuç değil, bir konumdur."
        : "This level is not just an outcome, but a position.",

    nextText:
      locale === "tr"
        ? "Bu program, eğitim yolculuğunun üst seviyesini temsil eder. Katılımcıyı yalnızca bir sonraki kursa değil, daha ciddi bir denizcilik duruşuna taşır."
        : "This program represents the upper stage of the training journey. It moves the participant not only toward the next course, but toward a more serious maritime posture.",

    ctaPrimary:
      locale === "tr"
        ? "Yachtmaster Track'e Katıl"
        : "Join Yachtmaster Track",

    ctaSecondary:
      locale === "tr" ? "Tüm Programları Gör" : "View All Programs",

    backProgram:
      locale === "tr"
        ? "Offshore Yacht Course'a Dön"
        : "Back to Offshore Yacht Course",

    foundationBadge: "REAL PROFESSIONAL POSITIONING",

    foundationHeadline:
      locale === "tr"
        ? "Denizde daha yüksek otorite ve temsil gücü ister misin?"
        : "Do you want greater authority and representational strength at sea?",

    foundationText:
      locale === "tr"
        ? "Yachtmaster Track, seni yalnızca daha deneyimli yapmaz. Bu program; komuta gücünü, liderlik kapasiteni ve profesyonel denizcilik duruşunu daha görünür, daha güçlü ve daha üst seviyeye taşır."
        : "Yachtmaster Track does not only make you more experienced. It elevates your command power, leadership capacity, and professional maritime presence to a more visible, stronger, and higher level.",
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
              textTransform: "uppercase",
              letterSpacing: "0.22em",
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
                textTransform: "uppercase",
                letterSpacing: "0.22em",
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
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
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
                textTransform: "uppercase",
                letterSpacing: "0.22em",
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
                textTransform: "uppercase",
                letterSpacing: "0.22em",
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
          className="rounded-[2rem] md:p-10"
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
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
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
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
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
                  {ui.backProgram}
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
                textTransform: "uppercase",
                letterSpacing: "0.22em",
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
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
                fontWeight: 800,
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
                background: "white",
                color: "#04121c",
                padding: "14px 22px",
                fontSize: "14px",
                fontWeight: 900,
                textDecoration: "none",
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