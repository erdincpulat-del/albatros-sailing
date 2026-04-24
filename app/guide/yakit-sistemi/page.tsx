"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function FuelSystemGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • YAKIT SİSTEMİ",
    badgeEn: "ALBATROS SAILING • FUEL SYSTEM",

    title1Tr: "Yakıtı sadece depolanan sıvı değil,",
    title1En: "Do not see fuel as just stored liquid,",

    title2Tr: "seyir devamlılığının temeli olarak gör.",
    title2En: "see it as the foundation of passage continuity.",

    introTr:
      "Yakıt sistemi; motorun güvenilir çalışmasının, liman manevrasının ve uzun rota disiplininin temel parçalarından biridir. Bu modül, yakıt akış mantığını, filtre farkındalığını, kirlilik riskini ve problem işaretlerini doğru okumayı öğretir.",
    introEn:
      "The fuel system is one of the foundations of reliable engine operation, harbor maneuvering, and long-passage discipline. This module teaches how to understand fuel flow logic, filter awareness, contamination risks, and early signs of trouble.",

    strip1TitleTr: "AKIŞ MANTIĞI",
    strip1TitleEn: "FLOW LOGIC",
    strip1TextTr: "Yakıt sistemi temiz ve kesintisiz akış ister.",
    strip1TextEn: "A fuel system requires clean and uninterrupted flow.",

    strip2TitleTr: "ERKEN FARKINDALIK",
    strip2TitleEn: "EARLY AWARENESS",
    strip2TextTr: "Sorun büyümeden önce işaretleri okumak esastır.",
    strip2TextEn: "The key is to read the signs before the problem grows.",

    strip3TitleTr: "OFFSHORE GÜVENİ",
    strip3TitleEn: "OFFSHORE CONFIDENCE",
    strip3TextTr: "Uzun rotada yakıt sistemi bilgisi güvenin parçasıdır.",
    strip3TextEn: "On long passages, fuel system knowledge is part of confidence.",

    logicTitleTr: "Bu modül neden kritiktir?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Motorun çalışmaması çoğu zaman doğrudan büyük mekanik arızadan değil, yakıt sistemiyle ilgili bir düzensizlikten kaynaklanır. Kirli yakıt, filtre tıkanması, hava yapma veya yanlış yakıt yönetimi; kullanıcının erken fark edebileceği problemlerdir. Bu modülün amacı, katılımcıyı teknisyen yapmak değil; sistemi doğru okuyup riski büyümeden fark eden bilinçli kullanıcı haline getirmektir.",
    logicEn:
      "Engine failure is often caused not by a major mechanical breakdown, but by an irregularity within the fuel system. Contaminated fuel, blocked filters, air in the line, or poor fuel management are issues a trained operator can often recognize early. The aim of this module is not to make the participant a technician, but a conscious operator who reads the system correctly and recognizes risk before it escalates.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Yakıt akışı, filtre, kirlilik ve belirti okuma",
    details1ValueEn: "Fuel flow, filters, contamination, and symptom reading",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Motor güveni, liman manevrası, rota devamlılığı",
    details2ValueEn: "Engine reliability, harbor maneuvering, passage continuity",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + orta seviye sistem farkındalığı",
    details3ValueEn: "Core + intermediate system awareness",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Belirtiyi erken fark eden ve doğru reaksiyon veren kullanıcı",
    details4ValueEn: "An operator who notices symptoms early and reacts correctly",

    ctaTitleTr: "Yakıt bilgisi, motor güveninin sessiz temelidir.",
    ctaTitleEn: "Fuel knowledge is the quiet foundation of engine confidence.",

    ctaTextTr:
      "Bu modül, yalnızca depoyu doldurmakla ilgili değildir. Daha sakin liman çıkışı, daha güvenli seyir ve daha kontrollü uzun rota için kritik bir altyapı oluşturur.",
    ctaTextEn:
      "This module is not only about filling the tank. It provides a critical foundation for calmer departures, safer operation, and more controlled long passages.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Yakıt sisteminin görevi",
      titleEn: "The role of the fuel system",
      textTr:
        "Yakıt sistemi yalnızca depodan motora sıvı taşımaz. Motorun dengeli, temiz ve güvenli çalışması için kesintisiz bir akış kurar.",
      textEn:
        "The fuel system does more than move liquid from the tank to the engine. It creates a continuous flow for balanced, clean, and reliable engine operation.",
    },
    {
      titleTr: "Kirli yakıt riski",
      titleEn: "Contaminated fuel risk",
      textTr:
        "Kirli yakıt, denizde en sessiz ama en kritik problemlerdendir. Motorun performansını düşürür, düzensiz çalışmaya neden olabilir ve güven kaybı yaratır.",
      textEn:
        "Contaminated fuel is one of the quietest yet most critical problems at sea. It reduces engine performance, may cause unstable running, and undermines confidence.",
    },
    {
      titleTr: "Filtre farkındalığı",
      titleEn: "Filter awareness",
      textTr:
        "Filtreler sistemin koruyucusudur. Tıkanma, akışı bozar ve motor davranışını değiştirir. Kullanıcı, filtrenin önemini ve semptomlarını bilmelidir.",
      textEn:
        "Filters are the protectors of the system. Blockage disrupts flow and changes engine behavior. The operator should understand both the importance of filters and the symptoms of a problem.",
    },
    {
      titleTr: "Hava yapma ve akış bozulması",
      titleEn: "Air in the line and disrupted flow",
      textTr:
        "Yakıt hattında hava veya düzensizlik oluşması, motorun kararsız çalışmasına neden olabilir. Bu tip durumlarda asıl değer, problemi büyümeden fark etmektir.",
      textEn:
        "Air in the fuel line or disrupted flow may cause unstable engine behavior. In such cases, the real value lies in noticing the issue before it grows.",
    },
    {
      titleTr: "Uzun rota için planlama",
      titleEn: "Planning for long passages",
      textTr:
        "Yakıt, sadece anlık ihtiyaç değil; rota planlamasının aktif parçasıdır. Tüketim mantığı, yedek pay ve koşullara göre düşünme refleksi gerekir.",
      textEn:
        "Fuel is not only an immediate need; it is an active part of route planning. It requires awareness of consumption logic, safety reserve, and condition-based thinking.",
    },
    {
      titleTr: "Belirtiyi okumak",
      titleEn: "Reading the symptoms",
      textTr:
        "Güç kaybı, düzensiz ses, sarsıntı veya geç tepki; her zaman büyük mekanik arıza anlamına gelmez. Bazen sistem size erken uyarı veriyordur.",
      textEn:
        "Loss of power, irregular sound, vibration, or delayed response do not always mean major mechanical failure. Sometimes the system is giving you an early warning.",
    },
  ];

  const checklist = isTR
    ? [
        "Yakıt seviyesinin farkında olmak",
        "Yakıt temizliği ve kirlilik riskini düşünmek",
        "Filtre mantığını temel seviyede bilmek",
        "Düzensiz motor davranışını yakıt açısından da değerlendirmek",
        "Uzun rota öncesi tüketim ve yedek pay planlamak",
        "Belirtileri erken fark edip panik yerine kontrolle hareket etmek",
      ]
    : [
        "Being aware of fuel level",
        "Considering fuel cleanliness and contamination risk",
        "Understanding filter logic at a basic level",
        "Evaluating irregular engine behavior also from a fuel-system perspective",
        "Planning consumption and reserve before long passages",
        "Reacting with control instead of panic when symptoms appear",
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
                {isTR ? page.logicTextTr : page.logicEn}
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