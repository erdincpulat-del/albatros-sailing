"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function WeatherDecisionGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • METEOROLOJİ & KARAR MANTIĞI",
    badgeEn: "ALBATROS SAILING • WEATHER & DECISION LOGIC",

    title1Tr: "Havayı sadece izlemeyi değil,",
    title1En: "Do not only observe the weather,",

    title2Tr: "ona göre karar vermeyi öğren.",
    title2En: "learn to decide through it.",

    introTr:
      "Denizde meteoroloji yalnızca tahmin okumak değildir. Rüzgarın yönü, basınç değişimi, bulut davranışı, dalga yapısı ve zamanlama birlikte değerlendirilir. Bu modül; havayı anlamayı değil, hava üzerinden doğru karar kurmayı öğretir.",
    introEn:
      "Meteorology at sea is not only about reading forecasts. Wind direction, pressure change, cloud behavior, wave pattern, and timing must be assessed together. This module teaches not just weather awareness, but how to make correct decisions through weather logic.",

    strip1TitleTr: "ERKEN OKUMA",
    strip1TitleEn: "EARLY READING",
    strip1TextTr: "Hava çoğu zaman gelmeden önce işaret verir.",
    strip1TextEn: "Weather often gives signs before it fully arrives.",

    strip2TitleTr: "RİSK DEĞERLENDİRME",
    strip2TitleEn: "RISK EVALUATION",
    strip2TextTr: "Aynı hava herkes için aynı risk anlamına gelmez.",
    strip2TextEn: "The same weather does not mean the same risk for everyone.",

    strip3TitleTr: "KAPTANLIK KARARI",
    strip3TitleEn: "CAPTAINCY DECISION",
    strip3TextTr: "Asıl beceri, ne zaman çıkılacağını ve ne zaman vazgeçileceğini bilmektir.",
    strip3TextEn: "The real skill is knowing when to depart and when not to.",

    logicTitleTr: "Bu modül neden kritiktir?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Birçok deniz kazasında sorun tek başına hava değildir; havaya rağmen yanlış karar verilmesidir. Güvenli denizcilik, rüzgarı ve dalgayı ezberlemekten çok; mevcut tekne, ekip, rota ve zaman koşulları içinde doğru sınırı koyabilmektir. Bu modülün amacı kullanıcıyı meteorolog yapmak değil; hava verisini karar mantığına dönüştürebilen bilinçli denizci haline getirmektir.",
    logicTextEn:
      "In many marine incidents, the problem is not the weather alone, but the wrong decision made in relation to it. Safe seamanship is less about memorizing wind and waves, and more about setting the correct limit within the context of the vessel, crew, route, and timing. The aim of this module is not to turn the user into a meteorologist, but into a conscious seafarer who can convert weather information into sound decisions.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Hava okuma, risk sınırı, rota ve zaman kararı",
    details1ValueEn: "Weather reading, risk limits, route and timing decisions",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Offshore geçiş, liman çıkışı, gece seyri ve güvenlik",
    details2ValueEn: "Offshore passages, departure timing, night navigation, and safety",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + operasyonel meteoroloji farkındalığı",
    details3ValueEn: "Core + operational meteorological awareness",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Havayı okuyup doğru sınırı koyan ve zamanı yöneten kullanıcı",
    details4ValueEn: "An operator who reads the weather, sets correct limits, and manages timing",

    ctaTitleTr: "Doğru hava kararı, sessiz bir profesyonelliktir.",
    ctaTitleEn: "Correct weather decisions are a quiet form of professionalism.",

    ctaTextTr:
      "Bu modül yalnızca meteoroloji bilgisi vermez. Kullanıcıya, hava koşullarını tekne, rota ve ekip ile birlikte değerlendirerek daha sakin ve daha doğru karar verebilme refleksi kazandırır.",
    ctaTextEn:
      "This module offers more than weather information. It builds the reflex to evaluate weather together with vessel, route, and crew, and to make calmer, more accurate decisions.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Tahmin okumak ve yorumlamak",
      titleEn: "Reading and interpreting forecasts",
      textTr:
        "Tahmin görmek tek başına yeterli değildir. Hangi verinin ne anlama geldiğini, değişimin ne kadar önemli olduğunu ve zaman çizelgesini anlamak gerekir.",
      textEn:
        "Seeing a forecast is not enough by itself. One must understand what each data point means, how important the change is, and how the timing unfolds.",
    },
    {
      titleTr: "Rüzgar yönü ve şiddeti",
      titleEn: "Wind direction and strength",
      textTr:
        "Rüzgar sadece kuvvet değildir. Yön değişimi, kıyı etkisi, koy yapısı ve teknenin rotasıyla birlikte değerlendirilmelidir.",
      textEn:
        "Wind is not only about strength. Direction change, coastal effect, bay geometry, and the vessel’s route must all be considered together.",
    },
    {
      titleTr: "Dalga ve konfor değil, güvenlik",
      titleEn: "Wave assessment as safety, not comfort",
      textTr:
        "Dalga yüksekliği sadece konforu değil, kontrolü ve emniyeti de etkiler. Bazen problem rüzgar değil, dalganın yönü ve kırılmasıdır.",
      textEn:
        "Wave height affects not only comfort, but also control and safety. Sometimes the real issue is not the wind, but wave direction and breaking behavior.",
    },
    {
      titleTr: "Basınç ve bulut davranışı",
      titleEn: "Pressure and cloud behavior",
      textTr:
        "Denizde erken işaretleri görmek büyük fark yaratır. Basınç değişimi ve gökyüzü davranışı, bazı durumlarda cihazlardan önce fikir verir.",
      textEn:
        "Seeing early signs at sea makes a major difference. Pressure change and sky behavior can sometimes provide clues even before instruments do.",
    },
    {
      titleTr: "Rota kararı ve vazgeçebilmek",
      titleEn: "Route decisions and knowing when to stop",
      textTr:
        "Bazen en iyi kaptanlık kararı devam etmek değil, rotayı değiştirmek ya da çıkışı ertelemektir. Bu zayıflık değil, seviye göstergesidir.",
      textEn:
        "Sometimes the best captaincy decision is not to continue, but to alter the route or postpone departure. This is not weakness; it is a sign of level.",
    },
    {
      titleTr: "Ekip, tekne ve zaman faktörü",
      titleEn: "Crew, vessel, and timing factors",
      textTr:
        "Aynı hava, farklı ekipler ve farklı tekneler için farklı risk üretir. Hava kararı; yalnızca doğa değil, insan ve ekipman sınırlarıyla birlikte düşünülmelidir.",
      textEn:
        "The same weather can create different levels of risk for different crews and vessels. Weather decisions must be made not only against nature, but together with human and equipment limits.",
    },
  ];

  const checklist = isTR
    ? [
        "Tahmini sadece görmek değil, yorumlamak",
        "Rüzgarı rota ve koy yapısıyla birlikte düşünmek",
        "Dalga yönü ve güvenlik etkisini değerlendirmek",
        "Erken işaretleri fark etmek",
        "Çıkış zamanı veya rota değişikliğini gerektiğinde kabul etmek",
        "Tekne, ekip ve hava sınırlarını birlikte okumak",
      ]
    : [
        "Not only seeing the forecast, but interpreting it",
        "Considering wind together with route and bay structure",
        "Assessing wave direction and its safety impact",
        "Recognizing early warning signs",
        "Accepting delayed departure or route change when necessary",
        "Reading vessel, crew, and weather limits together",
      ];

  return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_16%_6%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(59,130,246,0.10),transparent_24%)]" />
        <div className="absolute left-[-140px] top-[18%] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-140px] top-[42%] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/80">
                {isTR ? page.badgeTr : page.badgeEn}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl">
              {isTR ? page.title1Tr : page.title1En}
              <span className="block text-cyan-300">
                {isTR ? page.title2Tr : page.title2En}
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {isTR ? page.introTr : page.introEn}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div className="grid gap-6 md:grid-cols-2">
              {topicCards.map((card) => (
                <div
                  key={card.titleTr}
                  className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-[6px] hover:border-cyan-300/20"
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
          </div>

          <div className="space-y-6">
            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {isTR ? page.logicTitleTr : page.logicTitleEn}
              </div>

              <p className="mt-5 text-base leading-8 text-slate-300">
                {isTR ? page.logicTextTr : page.logicTextEn}
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {isTR ? page.detailsTitleTr : page.detailsTitleEn}
              </div>

              <div className="mt-5 grid gap-4">
                <InfoRow
                  label={isTR ? page.details1LabelTr : page.details1LabelEn}
                  value={isTR ? page.details1ValueTr : page.details1ValueEn}
                />
                <InfoRow
                  label={isTR ? page.details2LabelTr : page.details2LabelEn}
                  value={isTR ? page.details2ValueTr : page.details2ValueEn}
                />
                <InfoRow
                  label={isTR ? page.details3LabelTr : page.details3LabelEn}
                  value={isTR ? page.details3ValueTr : page.details3ValueEn}
                />
                <InfoRow
                  label={isTR ? page.details4LabelTr : page.details4LabelEn}
                  value={isTR ? page.details4ValueTr : page.details4ValueEn}
                />
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-cyan-300/12 bg-[linear-gradient(180deg,rgba(14,20,32,0.92),rgba(10,15,24,0.94))] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {isTR ? "Kontrol disiplini" : "Check discipline"}
              </div>

              <div className="mt-5 space-y-3">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-medium leading-7 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
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