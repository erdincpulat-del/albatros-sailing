"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function RopesKnotsGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • HALATLAR & BAĞLAR",
    badgeEn: "ALBATROS SAILING • ROPES & KNOTS",

    title1Tr: "Halatı sadece tutmayı değil,",
    title1En: "Do not only hold the line,",

    title2Tr: "doğru kullanmayı öğren.",
    title2En: "learn to use it correctly.",

    introTr:
      "Halatlar ve bağlar, denizcilikte en temel ama en fazla hata yapılan alanlardan biridir. Doğru bağ, doğru halat kullanımı ve doğru gerginlik; güvenlikten manevraya kadar her şeyi etkiler.",
    introEn:
      "Ropes and knots are among the most fundamental yet most frequently mishandled parts of seamanship. The correct knot, proper line handling, and correct tension affect everything from safety to maneuvering.",

    strip1TitleTr: "TEMEL DENİZCİLİK",
    strip1TitleEn: "CORE SEAMANSHIP",
    strip1TextTr: "Halat bilgisi, tekne üzerindeki kontrolün temelidir.",
    strip1TextEn: "Line handling is one of the foundations of control on board.",

    strip2TitleTr: "MANEVRA GÜVENİ",
    strip2TitleEn: "MANEUVER CONFIDENCE",
    strip2TextTr: "Doğru bağ, doğru yanaşma ve doğru ayrılma demektir.",
    strip2TextEn: "The right knot means correct berthing and departure.",

    strip3TitleTr: "EKİP DİSİPLİNİ",
    strip3TitleEn: "CREW DISCIPLINE",
    strip3TextTr: "Halat kullanımı bireysel değil, ekip koordinasyonudur.",
    strip3TextEn: "Line handling is not individual work, but crew coordination.",

    logicTitleTr: "Bu modül neden kritiktir?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Tekne üzerinde en basit görünen işler çoğu zaman en kritik olanlardır. Bir halatın yanlış bağlanması, yanlış alınması veya yanlış anda boşlanması; hem tekneye hem ekibe zarar verebilir. Bu modülün amacı, kullanıcıya halatı sadece fiziksel bir obje olarak değil; kontrol, güvenlik ve disiplin aracı olarak öğretmektir.",
    logicTextEn:
      "The simplest-looking tasks onboard are often the most critical. A line tied incorrectly, handled improperly, or released at the wrong moment can damage both the vessel and the crew. The purpose of this module is to teach the line not merely as an object, but as a tool of control, safety, and discipline.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Halat kullanımı, bağlar, gerginlik ve kontrol",
    details1ValueEn: "Line handling, knots, tension, and control",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Yanaşma, ayrılma, sabitleme ve manevra",
    details2ValueEn: "Berthing, departure, securing, and maneuvering",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + uygulamalı denizcilik refleksi",
    details3ValueEn: "Core + practical seamanship reflex",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Halatı güvenli ve kontrollü kullanan bilinçli kullanıcı",
    details4ValueEn: "A conscious operator who uses lines safely and correctly",

    ctaTitleTr: "Halatı doğru kullanan, tekneyi daha sakin yönetir.",
    ctaTitleEn: "Whoever uses the line correctly, manages the vessel more calmly.",

    ctaTextTr:
      "Bu modül yalnızca bağ öğretmez. Tekne üzerindeki düzeni, manevra güvenini ve ekip disiplinini güçlendirir.",
    ctaTextEn:
      "This module does more than teach knots. It strengthens order on board, maneuver confidence, and crew discipline.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Halatın görevi",
      titleEn: "The role of the line",
      textTr:
        "Halat yalnızca bağlamak için kullanılmaz. Kontrol etmek, sabitlemek, yönlendirmek ve güvenli manevra oluşturmak için kullanılır.",
      textEn:
        "A line is not only used to tie something. It is used to control, secure, guide, and create safe maneuvering conditions.",
    },
    {
      titleTr: "Doğru halat kullanımı",
      titleEn: "Proper line handling",
      textTr:
        "Halatı tanımadan doğru kullanmak mümkün değildir. Kalınlık, esneklik, kullanım amacı ve yük altında davranışı anlaşılmalıdır.",
      textEn:
        "It is not possible to use a line correctly without understanding it. Thickness, elasticity, purpose, and behavior under load must be understood.",
    },
    {
      titleTr: "Temel bağ mantığı",
      titleEn: "Basic knot logic",
      textTr:
        "Bağ ezberlemek değil, mantığını anlamak gerekir. İyi bir bağ güvenli olmalı, gerektiğinde çözülmeli ve yük altında doğru davranmalıdır.",
      textEn:
        "The goal is not to memorize knots, but to understand their logic. A good knot must be secure, releasable when needed, and behave correctly under load.",
    },
    {
      titleTr: "Koçboynuzu ve sabitleme",
      titleEn: "Cleat handling and securing",
      textTr:
        "Koçboynuzu üzerinde doğru sarım ve sabitleme, en temel ama en kritik becerilerden biridir. Burada yapılan hata manevra kalitesini doğrudan etkiler.",
      textEn:
        "Proper wrapping and securing on a cleat is one of the most basic yet critical skills. Mistakes here directly affect maneuver quality.",
    },
    {
      titleTr: "Yanaşma ve ayrılmada halat disiplini",
      titleEn: "Line discipline during berthing and departure",
      textTr:
        "Bir teknenin sakin görünmesi çoğu zaman doğru halat yönetimi sayesindedir. Panik değil, zamanlama ve disiplin gerekir.",
      textEn:
        "A calm-looking maneuver is often the result of correct line management. It requires timing and discipline, not panic.",
    },
    {
      titleTr: "Ekip koordinasyonu",
      titleEn: "Crew coordination",
      textTr:
        "Halat yönetimi tek kişinin işi değildir. İyi iletişim, doğru komut ve ortak refleks olmadan halatlar kaosa dönüşebilir.",
      textEn:
        "Line handling is not a one-person task. Without good communication, correct commands, and shared reflex, lines can turn into chaos.",
    },
  ];

  const checklist = isTR
    ? [
        "Halatı kontrol ederek vermek ve almak",
        "Temel bağların mantığını bilmek",
        "Koçboynuzu üzerinde doğru sabitleme yapmak",
        "Yük altındaki halata dikkatle yaklaşmak",
        "Yanaşma sırasında zamanlama ve sakinlik korumak",
        "Ekip komutlarını net ve kontrollü yürütmek",
      ]
    : [
        "Handling lines in a controlled way",
        "Understanding the logic of basic knots",
        "Securing correctly on a cleat",
        "Approaching loaded lines with caution",
        "Maintaining timing and calm during berthing",
        "Executing crew commands clearly and in control",
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