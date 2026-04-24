"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function BoatElectricalGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • TEKNE ELEKTRİĞİ",
    badgeEn: "ALBATROS SAILING • BOAT ELECTRICAL",

    title1Tr: "Elektriği sadece düğme olarak değil,",
    title1En: "Do not see electrical systems as simple switches,",

    title2Tr: "sistem olarak anlamayı öğren.",
    title2En: "learn to understand them as a system.",

    introTr:
      "Teknede elektrik; konfor değil, güvenlik, haberleşme, navigasyon ve motor sürekliliğinin omurgasıdır. Bu modül; temel elektrik mantığını, akü yönetimini, güç dağılımını ve risk işaretlerini doğru okumayı öğretir.",
    introEn:
      "Electrical systems on a boat are not about comfort alone; they are the backbone of safety, communication, navigation, and engine continuity. This module teaches the basic logic of onboard electricity, battery management, power distribution, and how to read warning signs correctly.",

    strip1TitleTr: "ENERJİ DİSİPLİNİ",
    strip1TitleEn: "ENERGY DISCIPLINE",
    strip1TextTr: "Doğru enerji yönetimi, doğru karar kadar önemlidir.",
    strip1TextEn: "Correct energy management matters as much as correct decision-making.",

    strip2TitleTr: "SİSTEM OKUMA",
    strip2TitleEn: "SYSTEM READING",
    strip2TextTr: "Akü, şarj, panel ve cihazlar birlikte değerlendirilir.",
    strip2TextEn: "Batteries, charging, panels, and devices are evaluated together.",

    strip3TitleTr: "OPERASYON GÜVENİ",
    strip3TitleEn: "OPERATIONAL CONFIDENCE",
    strip3TextTr: "Navigasyon ve haberleşme, sağlıklı elektrik altyapısına bağlıdır.",
    strip3TextEn: "Navigation and communication depend on a healthy electrical setup.",

    logicTitleTr: "Bu modül neden önemlidir?",
    logicTitleEn: "Why does this module matter?",

    logicTextTr:
      "Elektrik bilgisi olmayan kullanıcı, arızayı çoğu zaman geç fark eder. Oysa düşük voltaj, yanlış akü kullanımı, hatalı şarj alışkanlığı veya enerji tüketim dengesizliği; hem seyri hem güvenliği etkileyebilir. Bu modülün amacı, kullanıcıyı elektrik mühendisi yapmak değil; sistemin mantığını okuyabilen bilinçli bir denizci haline getirmektir.",
    logicTextEn:
      "A user without electrical awareness often notices problems too late. Low voltage, incorrect battery use, poor charging habits, or unbalanced power consumption can affect both navigation and safety. The purpose of this module is not to turn the user into an electrical engineer, but into a conscious seafarer who can read the logic of the system.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Akü, şarj, tüketim ve arıza farkındalığı",
    details1ValueEn: "Battery, charging, consumption, and fault awareness",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Motor, navigasyon, haberleşme ve güvenlik",
    details2ValueEn: "Engine, navigation, communication, and safety",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + orta seviye sistem bilgisi",
    details3ValueEn: "Core + intermediate system knowledge",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Enerjiyi doğru yöneten, belirtileri erken okuyan kullanıcı",
    details4ValueEn: "An operator who manages power correctly and reads symptoms early",

    ctaTitleTr: "Elektrik farkındalığı, denizde sessiz güvendir.",
    ctaTitleEn: "Electrical awareness is quiet confidence at sea.",

    ctaTextTr:
      "Bu modül; ışıkların yanmasıyla ilgili değil, sistemin ayakta kalmasıyla ilgilidir. Doğru enerji yönetimi daha sakin, daha hazırlıklı ve daha güvenli seyir anlamına gelir.",
    ctaTextEn:
      "This module is not just about lights turning on; it is about keeping the system alive. Proper power management means calmer, better-prepared, and safer operation.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Temel elektrik mantığı",
      titleEn: "Basic electrical logic",
      textTr:
        "Teknede elektrik; üretim, depolama ve tüketim dengesiyle çalışır. Akü sadece enerji tutmaz, tüm sistemin sürekliliğini belirler.",
      textEn:
        "Onboard electricity works through a balance of production, storage, and consumption. The battery does more than store power; it determines the continuity of the whole system.",
    },
    {
      titleTr: "Akü farkındalığı",
      titleEn: "Battery awareness",
      textTr:
        "Akü tipi, kapasitesi, şarj düzeyi ve kullanım alışkanlığı doğrudan güvenliği etkiler. Zayıf akü yalnızca marş problemi değil, sistemsel risk anlamına gelir.",
      textEn:
        "Battery type, capacity, state of charge, and usage habits directly affect safety. A weak battery means more than a starting problem; it represents systemic risk.",
    },
    {
      titleTr: "Şarj ve enerji dengesi",
      titleEn: "Charging and energy balance",
      textTr:
        "Enerji üretimi ile tüketimi dengede olmalıdır. Şarj kaynaklarının mantığı, panel okuma disiplini ve gereksiz tüketim farkındalığı kritik önemdedir.",
      textEn:
        "Energy production and consumption must remain balanced. Understanding charging sources, reading the panel correctly, and avoiding unnecessary consumption are critical.",
    },
    {
      titleTr: "Panel ve göstergeleri okumak",
      titleEn: "Reading panels and indicators",
      textTr:
        "Göstergeler kullanıcıyı önceden uyarır. Voltaj düşüşü, beklenmeyen alarm veya anormal davranış, daha büyük sorunun erken habercisi olabilir.",
      textEn:
        "Panels and indicators warn the user early. Voltage drop, unexpected alarms, or abnormal behavior may be early signs of a bigger issue.",
    },
    {
      titleTr: "Navigasyon cihazları ile ilişki",
      titleEn: "Relation to navigation devices",
      textTr:
        "Chartplotter, VHF, ışıklar, otopilot ve temel elektronik cihazlar sağlıklı güç dağılımına bağlıdır. Elektrik problemi çoğu zaman seyir problemine dönüşür.",
      textEn:
        "Chartplotters, VHF, lights, autopilot, and essential electronics depend on healthy power distribution. Electrical issues often become navigation issues.",
    },
    {
      titleTr: "Risk işaretlerini fark etmek",
      titleEn: "Recognizing risk signals",
      textTr:
        "Yanık kokusu, düzensiz güç, tekrar eden sigorta atması veya beklenmeyen kapanmalar; sistemin yardıma ihtiyacı olduğunu gösterir. Burada amaç erken fark etmektir.",
      textEn:
        "Burning smell, unstable power, repeated breaker trips, or unexpected shutdowns indicate the system needs attention. The goal here is early recognition.",
    },
  ];

  const checklist = isTR
    ? [
        "Akü durumunun genel farkındalığı",
        "Şarj kaynaklarının mantığını bilmek",
        "Panel göstergelerini okumak",
        "Gereksiz enerji tüketimini fark etmek",
        "Voltaj düşüşü ve alarm belirtilerini ayırt etmek",
        "Elektrik problemi ile cihaz problemi arasındaki farkı gözlemlemek",
      ]
    : [
        "General awareness of battery condition",
        "Understanding the logic of charging sources",
        "Reading panel indicators",
        "Recognizing unnecessary power consumption",
        "Distinguishing voltage drop and alarm signs",
        "Observing the difference between electrical faults and device faults",
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