"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type DecisionCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

type RiskItem = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function AnchorageSelectionPage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • KOY SEÇİMİ & GÜVENLİ KONAKLAMA",
    badgeEn: "ALBATROS SAILING • ANCHORAGE SELECTION & SAFE STAY",

    heroTitle1Tr: "Güzel koy seçmek başka,",
    heroTitle1En: "Choosing a beautiful bay is one thing,",

    heroTitle2Tr: "güvenli koy seçmek başka.",
    heroTitle2En: "choosing a safe anchorage is another.",

    heroTextTr:
      "Doğru koy seçimi; yalnızca manzara değil, rüzgar yönü, dip yapısı, mesafe, gece güvenliği ve kaçış planı ile verilir. Bu modül, konaklamayı romantik bir an değil, denizcilik kararı olarak öğretir.",
    heroTextEn:
      "Correct anchorage selection is not based on scenery alone, but on wind direction, seabed condition, spacing, night safety, and exit strategy. This module teaches anchoring as a seamanship decision, not a romantic moment.",

    heroBadgeTr: "Gerçek Karar Eğitimi",
    heroBadgeEn: "Real Decision Training",

    heroOverlayTitleTr: "Koy kararı = güven kararı",
    heroOverlayTitleEn: "Anchorage decision = safety decision",

    heroOverlayTextTr:
      "Rüzgar, dip, yoğunluk, gece davranışı ve çıkış kolaylığı birlikte düşünülür.",
    heroOverlayTextEn:
      "Wind, seabed, density, night behavior, and ease of departure are evaluated together.",

    strip1TitleTr: "RÜZGAR KORUMASI",
    strip1TitleEn: "WIND SHELTER",
    strip1TextTr: "Koyun güzel görünmesi değil, hangi havaya nasıl davrandığı önemlidir.",
    strip1TextEn: "What matters is not beauty, but how the anchorage behaves in specific conditions.",

    strip2TitleTr: "DİP & TUTUŞ",
    strip2TitleEn: "BOTTOM & HOLDING",
    strip2TextTr: "Güvenli gece, doğru dip ve doğru tutuş ile başlar.",
    strip2TextEn: "A safe night begins with the right seabed and proper holding.",

    strip3TitleTr: "KAÇIŞ PLANI",
    strip3TitleEn: "EXIT STRATEGY",
    strip3TextTr: "İyi koy kararı, kötü senaryoda nasıl çıkılacağını da düşünür.",
    strip3TextEn: "A good anchorage decision also plans how to leave in a bad scenario.",

    sectionTitleTr: "Koy seçimi nasıl düşünülür?",
    sectionTitleEn: "How should anchorage selection be approached?",

    sectionTextTr:
      "Güvenli konaklama; tekneyi bir yere bırakmak değil, gece boyunca değişebilecek tüm koşulları önceden hesaba katmaktır. Bu yüzden doğru koy kararı, mevcut hava kadar gece riski, dip karakteri, çevre tekne yoğunluğu ve sabah çıkış kolaylığı ile birlikte düşünülür.",
    sectionTextEn:
      "Safe overnight stay is not about leaving the boat somewhere; it is about accounting in advance for all conditions that may change overnight. That is why the correct anchorage decision is made not only with the current weather, but also with night risk, seabed character, nearby boat density, and ease of departure in the morning.",

    decisionTitleTr: "Karar sistemi",
    decisionTitleEn: "Decision system",

    decisionIntroTr:
      "Doğru koy seçimi tek faktörlü değil, katmanlı bir değerlendirmedir.",
    decisionIntroEn:
      "Correct anchorage selection is not based on a single factor, but on layered evaluation.",

    riskTitleTr: "En sık hata yapılan alanlar",
    riskTitleEn: "Most common mistake areas",

    riskIntroTr:
      "Bir koyun güvenli görünmesi, gerçekten güvenli olduğu anlamına gelmez.",
    riskIntroEn:
      "An anchorage that looks safe is not always truly safe.",

    matrixTitleTr: "Profesyonel bakış açısı",
    matrixTitleEn: "Professional perspective",

    matrixTextTr:
      "İyi kaptan, yalnızca şu an rahat olanı değil; birkaç saat sonra ne olacağını da düşünür.",
    matrixTextEn:
      "A good skipper considers not only what feels comfortable now, but what will happen several hours later.",

    matrix1LabelTr: "Şu an",
    matrix1LabelEn: "Now",
    matrix1ValueTr: "Sakin görünüm",
    matrix1ValueEn: "Looks calm",

    matrix2LabelTr: "Gece",
    matrix2LabelEn: "Night",
    matrix2ValueTr: "Rüzgar dönebilir",
    matrix2ValueEn: "Wind may shift",

    matrix3LabelTr: "Dip",
    matrix3LabelEn: "Bottom",
    matrix3ValueTr: "Tutuş yeterli mi?",
    matrix3ValueEn: "Is holding sufficient?",

    matrix4LabelTr: "Çıkış",
    matrix4LabelEn: "Exit",
    matrix4ValueTr: "Acil ayrılış mümkün mü?",
    matrix4ValueEn: "Is emergency departure possible?",

    ctaTitleTr: "Koy seçimi, denizcilikte sessiz bir ustalıktır.",
    ctaTitleEn: "Anchorage selection is a quiet mastery in seamanship.",

    ctaTextTr:
      "Bu modül, kullanıcıya sadece nereye demirleyeceğini değil; neden orayı seçtiğini, hangi riski kabul ettiğini ve neye hazır olması gerektiğini öğretir.",
    ctaTextEn:
      "This module teaches not only where to anchor, but why that place is chosen, which risks are being accepted, and what one should be prepared for.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const decisionCards: DecisionCard[] = [
    {
      titleTr: "Rüzgar yönü",
      titleEn: "Wind direction",
      textTr:
        "Koy kararı mevcut rüzgara göre değil, beklenen rüzgara göre verilmelidir. Öğleden sonra rahat olan yer, gece riskli hale gelebilir.",
      textEn:
        "Anchorage decisions should be made not only for the current wind, but for the expected wind. A comfortable bay in the afternoon may become risky at night.",
    },
    {
      titleTr: "Dip yapısı",
      titleEn: "Seabed condition",
      textTr:
        "Kum, çamur, taş veya otlu dip; güvenliğin temelini değiştirir. Demirin gerçekten ne kadar tuttuğu, çoğu zaman dip karakterine bağlıdır.",
      textEn:
        "Sand, mud, rock, or weed changes the basis of safety. How well the anchor truly holds often depends on the seabed character.",
    },
    {
      titleTr: "Mesafe ve yoğunluk",
      titleEn: "Spacing and density",
      textTr:
        "Sadece senin teknen değil, çevredeki teknelerin davranışı da risk oluşturur. Güvenli mesafe gece boyunca korunabilir olmalıdır.",
      textEn:
        "Not only your vessel, but also the behavior of nearby vessels creates risk. Safe spacing must remain manageable throughout the night.",
    },
    {
      titleTr: "Gece davranışı",
      titleEn: "Night behavior",
      textTr:
        "Koy gündüz sakin olabilir. Ancak gece dalga dönüşü, rüzgar değişimi veya kör nokta etkisiyle karakteri tamamen değişebilir.",
      textEn:
        "A bay may seem calm by day. Yet at night, wave rebound, wind shift, or blind-spot effects may completely change its character.",
    },
    {
      titleTr: "Çıkış kolaylığı",
      titleEn: "Ease of departure",
      textTr:
        "Gerçek karar yalnızca kalmayı değil, gerektiğinde ne kadar hızlı ve güvenli çıkılabileceğini de kapsar.",
      textEn:
        "A real decision covers not only staying, but also how quickly and safely one can leave if needed.",
    },
    {
      titleTr: "Tekne ve ekip sınırı",
      titleEn: "Vessel and crew limits",
      textTr:
        "Aynı koy, farklı tekne ve farklı ekip için farklı risk üretir. Karar sadece doğaya göre değil, mevcut kapasiteye göre de verilmelidir.",
      textEn:
        "The same anchorage may create different risk for different vessels and crews. Decisions must be made not only against nature, but also against current capability.",
    },
  ];

  const riskItems: RiskItem[] = [
    {
      titleTr: "Sadece manzaraya göre karar vermek",
      titleEn: "Choosing based only on scenery",
      textTr:
        "Güzel görünen koy, güvenli gece anlamına gelmez.",
      textEn:
        "A beautiful bay does not necessarily mean a safe night.",
    },
    {
      titleTr: "Mevcut havaya aldanmak",
      titleEn: "Trusting only current conditions",
      textTr:
        "Gece veya sabah değişimi hesaba katılmazsa karar eksik kalır.",
      textEn:
        "If night or early-morning changes are ignored, the decision remains incomplete.",
    },
    {
      titleTr: "Dip yapısını önemsememek",
      titleEn: "Ignoring seabed quality",
      textTr:
        "Tutuşu belirleyen en kritik unsurlardan biri dip karakteridir.",
      textEn:
        "One of the most critical factors for holding is the nature of the seabed.",
    },
    {
      titleTr: "Kaçış planı yapmamak",
      titleEn: "Having no exit plan",
      textTr:
        "İyi koy seçimi, kötü senaryoda nasıl çıkılacağını da içerir.",
      textEn:
        "Good anchorage selection includes knowing how to leave in a bad scenario.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <style>{`
        @keyframes anchorageShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[580px] bg-[radial-gradient(circle_at_16%_8%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(59,130,246,0.10),transparent_24%)]" />
        <div className="absolute left-[-140px] top-[18%] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-140px] top-[40%] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                {isTR ? page.badgeTr : page.badgeEn}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
              {isTR ? page.heroTitle1Tr : page.heroTitle1En}
              <span className="block text-cyan-300">
                {isTR ? page.heroTitle2Tr : page.heroTitle2En}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {isTR ? page.heroTextTr : page.heroTextEn}
            </p>
          </div>

          <div className="relative">
            <div
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.34)] transition duration-500 hover:-translate-y-1"
              style={{
                aspectRatio: "4 / 5",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.80), rgba(10,15,24,0.90))",
              }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-[1400ms] group-hover:scale-[1.06]"
                style={{
                  backgroundImage:
                    "url('/images/guide/anchorage-bay-premium.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,16,0.16),rgba(3,8,16,0.36)_44%,rgba(3,8,16,0.90)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(103,211,255,0.18),transparent_28%)]" />

              <div
                className="pointer-events-none absolute inset-0 opacity-70"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.06) 46%, rgba(255,255,255,0.01) 52%, transparent 60%)",
                  animation: "anchorageShimmer 8s linear infinite",
                }}
              />

              <div className="absolute left-6 right-6 bottom-6 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(14,20,32,0.72),rgba(10,15,24,0.88))] p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
                <div className="mb-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                  {isTR ? page.heroBadgeTr : page.heroBadgeEn}
                </div>

                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {isTR ? page.heroOverlayTitleTr : page.heroOverlayTitleEn}
                </h2>

                <p className="mt-3 text-sm leading-7 text-slate-200/85">
                  {isTR ? page.heroOverlayTextTr : page.heroOverlayTextEn}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-14 md:pb-16">
          <div className="grid gap-5 md:grid-cols-3">
            <TopStrip
              title={isTR ? page.strip1TitleTr : page.strip1TitleEn}
              text={isTR ? page.strip1TextTr : page.strip1TextEn}
            />
            <TopStrip
              title={isTR ? page.strip2TitleTr : page.strip2TitleEn}
              text={isTR ? page.strip2TextTr : page.strip2TextEn}
            />
            <TopStrip
              title={isTR ? page.strip3TitleTr : page.strip3TitleEn}
              text={isTR ? page.strip3TextTr : page.strip3TextEn}
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
            {isTR ? page.sectionTitleTr : page.sectionTitleEn}
          </p>

          <p className="mt-5 max-w-4xl text-base leading-8 text-slate-300 md:text-lg">
            {isTR ? page.sectionTextTr : page.sectionTextEn}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {decisionCards.map((card) => (
            <div
              key={card.titleTr}
              className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-[6px] hover:border-cyan-300/20"
            >
              <h2 className="text-xl font-semibold tracking-[-0.02em] text-white">
                {isTR ? card.titleTr : card.titleEn}
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                {isTR ? card.textTr : card.textEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {isTR ? page.riskTitleTr : page.riskTitleEn}
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              {isTR ? page.riskIntroTr : page.riskIntroEn}
            </p>

            <div className="mt-8 space-y-4">
              {riskItems.map((item) => (
                <div
                  key={item.titleTr}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="text-base font-semibold text-white">
                    {isTR ? item.titleTr : item.titleEn}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {isTR ? item.textTr : item.textEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(14,20,32,0.92),rgba(10,15,24,0.94))] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {isTR ? page.matrixTitleTr : page.matrixTitleEn}
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              {isTR ? page.matrixTextTr : page.matrixTextEn}
            </p>

            <div className="mt-6 grid gap-4">
              <InfoRow
                label={isTR ? page.matrix1LabelTr : page.matrix1LabelEn}
                value={isTR ? page.matrix1ValueTr : page.matrix1ValueEn}
              />
              <InfoRow
                label={isTR ? page.matrix2LabelTr : page.matrix2LabelEn}
                value={isTR ? page.matrix2ValueTr : page.matrix2ValueEn}
              />
              <InfoRow
                label={isTR ? page.matrix3LabelTr : page.matrix3LabelEn}
                value={isTR ? page.matrix3ValueTr : page.matrix3ValueEn}
              />
              <InfoRow
                label={isTR ? page.matrix4LabelTr : page.matrix4LabelEn}
                value={isTR ? page.matrix4ValueTr : page.matrix4ValueEn}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,#0a1830_0%,#10294b_42%,#143f67_100%)] px-8 py-12 text-white shadow-[0_24px_60px_rgba(0,0,0,0.24)] md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-40px] top-[-40px] h-44 w-44 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-[-40px] right-[-40px] h-52 w-52 rounded-full bg-blue-300/10 blur-3xl" />
          </div>

          <div className="relative z-[2] max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] md:text-5xl">
              {isTR ? page.ctaTitleTr : page.ctaTitleEn}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
              {isTR ? page.ctaTextTr : page.ctaTextEn}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/guide"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
              >
                {isTR ? page.ctaPrimaryTr : page.ctaPrimaryEn}
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {isTR ? page.ctaSecondaryTr : page.ctaSecondaryEn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TopStrip({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_16px_36px_rgba(0,0,0,0.16)] backdrop-blur-md">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/65">
        {title}
      </div>
      <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[1.2rem] border border-white/8 bg-white/[0.03] px-5 py-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/55">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold leading-7 text-slate-100">
        {value}
      </div>
    </div>
  );
}