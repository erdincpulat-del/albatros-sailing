"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";
export default function OffshoreYachtCoursePage() {
  const { lang } = useLanguage();

  const ui = {
    badge: lang === "tr" ? "Program" : "Program",
    title: "Offshore Yacht Course",
    subtitle:
      lang === "tr"
        ? "Açık deniz geçişleri, daha yüksek sorumluluk ve güçlü komuta disiplini için ileri seviye eğitim programı."
        : "An advanced training program for offshore passages, higher responsibility, and stronger command discipline.",

    realityTitle:
      lang === "tr"
        ? "Bu eğitim neyi farklı yapar?"
        : "What makes this training different?",
    realityItems:
      lang === "tr"
        ? [
            "Gerçek açık deniz mantığı ile eğitim",
            "Bodrum – İstanbul hattı, yoğun gemi trafiği ve TSS farkındalığı",
            "Gece seyri, vardiya disiplini ve uzun rota düşüncesi",
            "Meteorolojiye göre karar verme ve rota değiştirme yaklaşımı",
          ]
        : [
            "Training based on real offshore thinking",
            "Bodrum–Istanbul line, dense vessel traffic, and TSS awareness",
            "Night sailing, watch discipline, and long-passage thinking",
            "Weather-based decision-making and route adjustment mindset",
          ],

    overviewTitle: lang === "tr" ? "Programın Amacı" : "Program Purpose",
    overviewText:
      lang === "tr"
        ? "Offshore Yacht Course; kıyı seyri seviyesini aşmış katılımcıların açık deniz düşüncesini, uzun rota planlamasını, vardiya disiplinini, gece seyri yaklaşımını ve daha güçlü komuta reflekslerini geliştirmek için tasarlanmıştır. Amaç, katılımcıyı yalnızca daha fazla bilgiye değil, daha yüksek deniz sorumluluğuna taşımaktır."
        : "The Offshore Yacht Course is designed for participants beyond the coastal level to develop offshore thinking, longer route planning, watchkeeping discipline, night navigation awareness, and stronger command reflexes. The goal is to move the participant not only toward more knowledge, but toward greater responsibility at sea.",

    systemTitle: lang === "tr" ? "Eğitim sistemi" : "Training system",
    systemText:
      lang === "tr"
        ? "Bu programda meteoroloji, COLREG, navigasyon ve rota planlama ayrı ayrı başlıklar gibi ele alınmaz. Hepsi birlikte çalışır. Amaç, açık denizde doğru zamanda doğru karar verebilen kaptan yaklaşımını inşa etmektir."
        : "In this program, meteorology, COLREG, navigation, and route planning are not treated as isolated topics. They work together. The goal is to build a captaincy mindset capable of making the right decisions at the right time offshore.",

    forWhomTitle: lang === "tr" ? "Kimler İçin Uygun?" : "Who Is It For?",
    forWhomItems:
      lang === "tr"
        ? [
            "Kıyı seyri seviyesini aşmış ve açık denize geçmek isteyenler",
            "Daha uzun rota, vardiya disiplini ve gece seyri tecrübesi kazanmak isteyenler",
            "Komuta seviyesini ileri taşımak ve üst düzey programa hazırlanmak isteyenler",
          ]
        : [
            "Those who have moved beyond coastal level and want to progress offshore",
            "Those who want experience with longer routes, watchkeeping discipline, and night navigation",
            "Those who want to advance their command level and prepare for top-tier training",
          ],

    gainsTitle: lang === "tr" ? "Bu Programda Ne Kazanırsınız?" : "What Do You Gain?",
    gains:
      lang === "tr"
        ? [
            {
              title: "Açık deniz farkındalığı",
              text: "Rota, hava, vardiya, gece ve uzun geçiş mantığı daha güçlü şekilde oturur.",
            },
            {
              title: "Daha yüksek komuta disiplini",
              text: "Karar alma, ekip yönetimi ve sorumluluk taşıma seviyesi belirgin biçimde yükselir.",
            },
            {
              title: "Yachtmaster seviyesine hazırlık",
              text: "Bir üst programa geçiş için gerekli zihinsel ve pratik altyapı güçlenir.",
            },
          ]
        : [
            {
              title: "Offshore awareness",
              text: "Route, weather, watchkeeping, night sailing, and long-passage logic become much stronger.",
            },
            {
              title: "Higher command discipline",
              text: "Decision-making, crew management, and responsibility levels increase clearly.",
            },
            {
              title: "Preparation for Yachtmaster level",
              text: "The mental and practical foundation required for the next program becomes stronger.",
            },
          ],

    detailsTitle: lang === "tr" ? "Program Detayları" : "Program Details",
    details:
      lang === "tr"
        ? [
            ["Seviye", "İleri Seviye"],
            ["TYF / YES Uyumu", "YY3 / YY4"],
            ["Odak", "Açık deniz, vardiya, gece seyri, komuta"],
            ["Çıktı", "Güçlü offshore pratiği ve üst seviyeye hazırlık"],
          ]
        : [
            ["Level", "Advanced"],
            ["TYF / YES Alignment", "YY3 / YY4"],
            ["Focus", "Offshore sailing, watchkeeping, night sailing, command"],
            ["Outcome", "Strong offshore practice and readiness for top level"],
          ],

    resultTitle: lang === "tr" ? "Program sonunda" : "At the end of the program",
    resultItems:
      lang === "tr"
        ? [
            "Gerçek denizde daha yüksek karar gücü",
            "Daha oturmuş rota ve risk düşüncesi",
            "Daha güçlü ekip yönetimi refleksi",
            "Açık denize karşı daha net özgüven",
          ]
        : [
            "Stronger decision-making in real sea conditions",
            "More developed route and risk thinking",
            "Stronger crew-management reflexes",
            "Clearer confidence for offshore conditions",
          ],

    nextTitle: lang === "tr" ? "Sonraki mantıklı adım" : "The logical next step",
    nextText:
      lang === "tr"
        ? "Bu programı tamamlayan katılımcılar için doğal sonraki aşama Yachtmaster Track seviyesidir."
        : "For participants completing this program, the natural next stage is the Yachtmaster Track level.",

    ctaPrimary: lang === "tr" ? "Offshore Eğitime Katıl" : "Join Offshore Training",
    ctaSecondary: lang === "tr" ? "Tüm Programları Gör" : "View All Programs",
    nextProgram:
      lang === "tr"
        ? "Yachtmaster Track'e Geç"
        : "Continue to Yachtmaster Track",
  };

  return (
    <main className="relative overflow-hidden bg-[#08111f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_20%_0%,rgba(56,189,248,0.20),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.12),transparent_28%)]" />
        <div className="absolute left-[-120px] top-[24%] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-140px] top-[52%] h-[360px] w-[360px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.92),rgba(8,17,31,0.98))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-1.5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200/80">
                {ui.badge}
              </p>
            </div>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {ui.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              {ui.subtitle}
            </p>

            <div
              style={{
                marginTop: 20,
                padding: "18px 20px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(103,211,255,0.18)",
                fontSize: 14,
                lineHeight: 1.7,
                color: "#cbd5e1",
                fontWeight: 600,
                maxWidth: 700,
                backdropFilter: "blur(10px)",
                boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
              }}
            >
              {lang === "tr"
                ? "Offshore eğitim, teorik bilgi değildir. Bodrum – İstanbul gibi gerçek rotalarda, yoğun gemi trafiği, Boğaz geçişi ve TSS içinde karar verebilme disiplinidir."
                : "Offshore training is not theoretical knowledge. It is the discipline of making sound decisions on real routes such as Bodrum–Istanbul, within dense vessel traffic, Bosphorus passage, and TSS conditions."}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-1"
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55), transparent 70%)",
                    animation: "shine 1.5s linear infinite",
                  }}
                />
                <span className="relative z-10">{ui.ctaPrimary}</span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {ui.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
            {ui.realityTitle}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {lang === "tr"
              ? "Gerçek açık denizde gerçek karar pratiği."
              : "Real decision practice in real offshore conditions."}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {ui.realityItems.map((item) => (
            <div
              key={item}
              className="card-hover rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-md"
            >
              <p className="text-sm font-semibold leading-7 text-slate-200">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative mx-auto max-w-7xl px-6 py-16 md:py-20"
        id="details"
      >
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {ui.overviewTitle}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {lang === "tr"
                ? "Açık denizde daha güçlü kararlar."
                : "Stronger decisions in offshore conditions."}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {ui.overviewText}
            </p>

            <div className="card-hover mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {ui.systemTitle}
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {ui.systemText}
              </p>
            </div>
          </div>

          <div className="card-hover rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {ui.forWhomTitle}
            </p>

            <div className="mt-5 space-y-4">
              {ui.forWhomItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-white/8 px-5 py-4 text-sm font-medium leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {ui.gainsTitle}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {lang === "tr"
                ? "Programın temel kazanımları"
                : "Core outcomes of the program"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ui.gains.map((item) => (
              <div
                key={item.title}
                className="card-hover rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.22)] backdrop-blur-md md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {ui.detailsTitle}
              </p>

              <div className="mt-6 grid gap-4">
                {ui.details.map(([label, value]) => (
                  <div
                    key={label}
                    className="card-hover rounded-[1.25rem] border border-white/10 bg-white/6 px-5 py-4"
                  >
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/55">
                      {label}
                    </div>
                    <div className="mt-2 text-base font-semibold text-white">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-hover rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {ui.nextTitle}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {lang === "tr"
                  ? "Üst seviyeye stratejik geçin."
                  : "Move strategically into the top level."}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {ui.nextText}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/reserve"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_50px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-1"
                >
                  <span
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background:
                        "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55), transparent 70%)",
                      animation: "shine 1.5s linear infinite",
                    }}
                  />
                  <span className="relative z-10">{ui.ctaPrimary}</span>
                </Link>

                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  {ui.ctaSecondary}
                </Link>
              </div>

              <div className="mt-4">
                <Link
                  href="/programs/yachtmaster"
                  className="text-sm font-semibold text-cyan-200 underline underline-offset-4 transition hover:text-white"
                >
                  {ui.nextProgram}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {ui.resultTitle}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {lang === "tr"
                ? "Bu program seni nereye taşır?"
                : "Where does this program take you?"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {ui.resultItems.map((item) => (
              <div
                key={item}
                className="card-hover rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_12px_35px_rgba(0,0,0,0.18)] backdrop-blur-md"
              >
                <p className="text-sm font-semibold leading-7 text-slate-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,#0b1930_0%,#0f2542_45%,#12355b_100%)] px-8 py-12 text-white shadow-[0_25px_60px_rgba(0,0,0,0.28)] md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[-40px] h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-[-40px] right-[-40px] h-52 w-52 rounded-full bg-blue-300/10 blur-3xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              {lang === "tr"
                ? "REAL OFFSHORE EXPERIENCE"
                : "REAL OFFSHORE EXPERIENCE"}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {lang === "tr"
                ? "Gerçek kaptanlık yoluna hazır mısın?"
                : "Ready for real captaincy?"}
            </h2>

            <p className="mt-4 text-base leading-8 text-white/75">
              {lang === "tr"
                ? "Bu program, seni açık denizde daha yüksek sorumluluk taşıyabilen, daha doğru karar verebilen ve bir üst seviyeye stratejik şekilde hazırlanmış bir kaptan adayına dönüştürür."
                : "This program prepares you to become a candidate captain capable of carrying greater responsibility offshore, making stronger decisions, and progressing strategically into the next level."}
            </p>
          </div>

          <div className="relative mt-8 flex flex-wrap gap-4">
            <Link
              href="/reserve"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.55), transparent 70%)",
                  animation: "shine 1.5s linear infinite",
                }}
              />
              <span className="relative z-10">{ui.ctaPrimary}</span>
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
            >
              {ui.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}