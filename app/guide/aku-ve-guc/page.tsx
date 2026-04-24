"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function BatteryPowerGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • AKÜ & GÜÇ",
    badgeEn: "ALBATROS SAILING • BATTERY & POWER",

    title1Tr: "Enerjiyi sadece tüketme,",
    title1En: "Do not just consume energy,",

    title2Tr: "yönetmeyi öğren.",
    title2En: "learn to manage it.",

    introTr:
      "Denizde enerji, görünmeyen ama en kritik unsurlardan biridir. Akü yönetimi, güç dengesi ve tüketim disiplini; navigasyon, haberleşme ve güvenli seyir için belirleyici rol oynar.",
    introEn:
      "At sea, energy is invisible but critical. Battery management, power balance, and consumption discipline determine safe navigation, communication, and overall operation.",

    strip1TitleTr: "GÜÇ DENGESİ",
    strip1TitleEn: "POWER BALANCE",
    strip1TextTr: "Üretim ve tüketim dengesi sistemin temelidir.",
    strip1TextEn: "Balance between production and consumption is essential.",

    strip2TitleTr: "AKÜ BİLİNCİ",
    strip2TitleEn: "BATTERY AWARENESS",
    strip2TextTr: "Akü sadece enerji değil, sürekliliktir.",
    strip2TextEn: "Battery is not just energy, it is continuity.",

    strip3TitleTr: "SİSTEM GÜVENİ",
    strip3TitleEn: "SYSTEM CONFIDENCE",
    strip3TextTr: "Enerji doğruysa sistem çalışır.",
    strip3TextEn: "If power is stable, the system is reliable.",

    logicTitleTr: "Bu modül neden kritik?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Denizde yaşanan birçok problem, doğrudan elektrik arızası değil; yanlış enerji yönetiminden kaynaklanır. Akünün durumu, şarj alışkanlığı ve tüketim dengesi doğru değilse, sistemler birer birer kapanmaya başlar. Bu modül, kullanıcının bu zinciri önceden görmesini sağlar.",
    logicTextEn:
      "Many problems at sea are not direct electrical failures but results of poor energy management. If battery condition, charging habits, and consumption balance are not correct, systems start shutting down one by one. This module helps the user foresee that chain reaction.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Akü yönetimi, güç dengesi, tüketim farkındalığı",
    details1ValueEn: "Battery management, power balance, consumption awareness",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Navigasyon, motor, haberleşme",
    details2ValueEn: "Navigation, engine, communication",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + orta seviye sistem bilgisi",
    details3ValueEn: "Core + intermediate system knowledge",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Enerjiyi doğru yöneten ve sistemi ayakta tutan kullanıcı",
    details4ValueEn: "An operator who manages power and keeps systems alive",

    ctaTitleTr: "Enerji doğruysa, deniz daha sakin görünür.",
    ctaTitleEn: "When power is stable, the sea feels calmer.",

    ctaTextTr:
      "Bu modül, kullanıcıya sadece enerji kullanmayı değil; enerji üzerinden sistemi yönetmeyi öğretir.",
    ctaTextEn:
      "This module teaches not just how to use energy, but how to manage the entire system through it.",

    ctaPrimaryTr: "Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Akü mantığı",
      titleEn: "Battery logic",
      textTr:
        "Akü sadece depolama değil, tüm sistemin sürekliliğini sağlar. Kullanıcı akünün davranışını anlamalıdır.",
      textEn:
        "The battery is not just storage, it ensures system continuity. The operator must understand its behavior.",
    },
    {
      titleTr: "Şarj yönetimi",
      titleEn: "Charging management",
      textTr:
        "Şarj sadece dolum değildir. Doğru zamanda, doğru şekilde yapılmalıdır.",
      textEn:
        "Charging is not just filling. It must be done correctly and at the right time.",
    },
    {
      titleTr: "Tüketim farkındalığı",
      titleEn: "Consumption awareness",
      textTr:
        "Her cihaz enerji tüketir. Kullanıcı neyin ne kadar tükettiğini bilmelidir.",
      textEn:
        "Every device consumes power. The user should know what consumes how much.",
    },
    {
      titleTr: "Enerji planlaması",
      titleEn: "Energy planning",
      textTr:
        "Uzun seyirde enerji planı yapılmadan çıkılmaz. Yedek her zaman düşünülmelidir.",
      textEn:
        "No long passage starts without energy planning. Backup must always be considered.",
    },
    {
      titleTr: "Risk işaretleri",
      titleEn: "Risk indicators",
      textTr:
        "Düşük voltaj, sistem kapanması ve düzensiz çalışma erken uyarıdır.",
      textEn:
        "Low voltage, shutdowns, and instability are early warnings.",
    },
    {
      titleTr: "Sistem sürekliliği",
      titleEn: "System continuity",
      textTr:
        "Enerji doğruysa sistem çalışır. Yanlışsa zincirleme problem başlar.",
      textEn:
        "If power is stable, systems work. If not, failures cascade.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <div className="text-xs uppercase tracking-[0.25em] text-cyan-300">
            {isTR ? page.badgeTr : page.badgeEn}
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold">
            {isTR ? page.title1Tr : page.title1En}
            <span className="block text-cyan-300">
              {isTR ? page.title2Tr : page.title2En}
            </span>
          </h1>

          <p className="mt-6 text-slate-300 max-w-3xl leading-8">
            {isTR ? page.introTr : page.introEn}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {topicCards.map((card) => (
            <div
              key={card.titleTr}
              className="rounded-xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition"
            >
              <h3 className="text-xl font-semibold">
                {isTR ? card.titleTr : card.titleEn}
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-7">
                {isTR ? card.textTr : card.textEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-semibold">
            {isTR ? page.ctaTitleTr : page.ctaTitleEn}
          </h2>

          <p className="mt-4 text-slate-300 max-w-xl mx-auto">
            {isTR ? page.ctaTextTr : page.ctaTextEn}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/guide"
              className="bg-white text-black px-6 py-3 rounded-full"
            >
              {isTR ? page.ctaPrimaryTr : page.ctaPrimaryEn}
            </Link>

            <Link
              href="/programs"
              className="border border-white px-6 py-3 rounded-full"
            >
              {isTR ? page.ctaSecondaryTr : page.ctaSecondaryEn}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}