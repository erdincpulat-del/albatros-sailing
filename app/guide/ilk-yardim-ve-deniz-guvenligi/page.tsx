"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function FirstAidSafetyGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • İLK YARDIM & DENİZ GÜVENLİĞİ",
    badgeEn: "ALBATROS SAILING • FIRST AID & SEA SAFETY",

    title1Tr: "Güvenliği sadece ekipman değil,",
    title1En: "Do not see safety as equipment alone,",

    title2Tr: "refleks olarak öğren.",
    title2En: "learn it as a reflex.",

    introTr:
      "Denizde güvenlik, yalnızca can yeleği veya yangın tüpü bulundurmak değildir. Asıl fark; riski erken fark etmek, doğru öncelik kurmak ve baskı altında kontrollü kalabilmektir. Bu modül, ilk yardım ve deniz güvenliğini gerçek denizcilik mantığıyla birleştirir.",
    introEn:
      "Safety at sea is not only about carrying lifejackets or fire extinguishers. The real difference lies in recognizing risk early, setting correct priorities, and remaining controlled under pressure. This module combines first aid and sea safety with real seamanship logic.",

    strip1TitleTr: "ERKEN FARKINDALIK",
    strip1TitleEn: "EARLY AWARENESS",
    strip1TextTr: "Birçok kriz, büyümeden önce işaret verir.",
    strip1TextEn: "Many crises show signs before they escalate.",

    strip2TitleTr: "ÖNCELİK DİSİPLİNİ",
    strip2TitleEn: "PRIORITY DISCIPLINE",
    strip2TextTr: "Doğru sırada hareket etmek, güvenliğin temelidir.",
    strip2TextEn: "Acting in the correct order is the basis of safety.",

    strip3TitleTr: "SOĞUKKANLILIK",
    strip3TitleEn: "CALM CONTROL",
    strip3TextTr: "Acil durumda en büyük güç panik değil, düzenli reflekstir.",
    strip3TextEn: "In emergencies, the greatest strength is not panic, but structured reflex.",

    logicTitleTr: "Bu modül neden kritiktir?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Gerçek denizcilik, her şey yolundayken değil; bir şey ters gittiğinde ortaya çıkar. Ufak yaralanmalar, hipotermi, düşme, yangın, su alma veya denize adam düşmesi gibi durumlar; teorik bilgi değil, refleks ister. Bu modülün amacı kullanıcıyı sağlık personeli yapmak değil; ilk müdahaleyi, risk önceliğini ve güvenlik davranışını doğru kurabilen bilinçli denizci haline getirmektir.",
    logicTextEn:
      "Real seamanship reveals itself not when everything is fine, but when something goes wrong. Minor injuries, hypothermia, falls, fire, flooding, or man overboard situations require reflex rather than theory alone. The goal of this module is not to turn the user into medical staff, but into a conscious seafarer capable of correct first response, risk prioritization, and safe behavior.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "İlk müdahale, risk sırası, güvenli davranış",
    details1ValueEn: "First response, risk order, safe behavior",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "MOB, hipotermi, yangın, düşme, su alma",
    details2ValueEn: "MOB, hypothermia, fire, falling, flooding",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + operasyonel güvenlik farkındalığı",
    details3ValueEn: "Core + operational safety awareness",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Acil durumda önceliği doğru kuran ve sakin kalan kullanıcı",
    details4ValueEn: "An operator who sets priorities correctly and remains calm in emergencies",

    ctaTitleTr: "Güvenlik bilgisi, denizde özgüvenin sessiz temelidir.",
    ctaTitleEn: "Safety knowledge is the quiet foundation of confidence at sea.",

    ctaTextTr:
      "Bu modül yalnızca kaza anını değil, kaza oluşmadan önceki farkındalığı da öğretir. Amaç, daha hazırlıklı, daha kontrollü ve daha güvenli bir denizcilik refleksi kurmaktır.",
    ctaTextEn:
      "This module teaches not only what to do during an incident, but also the awareness that prevents one from developing. The aim is to build a more prepared, more controlled, and safer seamanship reflex.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "İlk müdahale mantığı",
      titleEn: "First response logic",
      textTr:
        "İlk yardım denizde profesyonel tedavi değil, doğru ilk adımdır. Amaç, durumu kötüleştirmeden zaman kazanmak ve doğru önceliği kurmaktır.",
      textEn:
        "First aid at sea is not professional treatment, but the correct first step. The aim is to gain time without worsening the situation and to establish the right priority.",
    },
    {
      titleTr: "Denize adam düştü (MOB)",
      titleEn: "Man overboard (MOB)",
      textTr:
        "Denize adam düşmesi, teoride kolay görünen ama pratikte panik üreten konulardan biridir. Burada önemli olan hızlı değil, doğru ve organize tepki vermektir.",
      textEn:
        "Man overboard is one of those subjects that seems simple in theory but generates panic in practice. What matters here is not speed alone, but correct and organized response.",
    },
    {
      titleTr: "Hipotermi ve soğuk şok",
      titleEn: "Hypothermia and cold shock",
      textTr:
        "Soğuk suyla temas, birkaç dakikada ciddi risk üretir. Kullanıcı, belirtileri erken tanımalı ve koruma / ısı yönetimi mantığını bilmelidir.",
      textEn:
        "Cold-water exposure can create serious risk within minutes. The operator must recognize the symptoms early and understand the logic of protection and heat management.",
    },
    {
      titleTr: "Yangın ve ilk reaksiyon",
      titleEn: "Fire and first reaction",
      textTr:
        "Yangın denizde en korkutucu risklerden biridir. En büyük farkı yaratan şey ekipman değil, ilk saniyelerde doğru reaksiyondur.",
      textEn:
        "Fire is one of the most frightening risks at sea. The biggest difference is made not by equipment alone, but by the correct reaction in the first seconds.",
    },
    {
      titleTr: "Düşme, çarpma ve küçük travmalar",
      titleEn: "Falls, impacts, and minor trauma",
      textTr:
        "Tekne üzerindeki birçok yaralanma büyük kazalardan değil, küçük dikkatsizliklerden doğar. Güvenli hareket disiplini burada ilk savunma hattıdır.",
      textEn:
        "Many injuries onboard are caused not by major accidents, but by small moments of inattention. Safe movement discipline is the first line of defense.",
    },
    {
      titleTr: "Su alma ve iç güvenlik",
      titleEn: "Flooding and internal safety",
      textTr:
        "Teknenin içine su girmesi bazen küçük, bazen kritik bir işarettir. Kullanıcı, sorunun büyüklüğünü değerlendirmeyi ve ilk önlemleri bilmeliidir.",
      textEn:
        "Water entering the boat can be either a minor issue or a critical warning sign. The operator should know how to assess the severity and take the first precautions.",
    },
  ];

  const checklist = isTR
    ? [
        "Risk oluşmadan önce çevreyi okumak",
        "Acil durumda önce önceliği belirlemek",
        "Küçük yaralanmayı büyümeden yönetmek",
        "MOB anında panik yerine düzenli tepki vermek",
        "Hipotermi ve soğuk şok belirtilerini fark etmek",
        "Yangın, su alma ve düşme durumlarında ilk reaksiyonu doğru kurmak",
      ]
    : [
        "Reading the environment before risk grows",
        "Setting priorities first in an emergency",
        "Managing minor injuries before they escalate",
        "Responding in an organized way instead of panicking in MOB situations",
        "Recognizing signs of hypothermia and cold shock",
        "Establishing the correct first reaction in fire, flooding, and fall scenarios",
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