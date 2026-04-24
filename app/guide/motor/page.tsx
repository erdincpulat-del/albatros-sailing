"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function MotorGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • MOTOR MODÜLÜ",
    badgeEn: "ALBATROS SAILING • ENGINE MODULE",

    title1Tr: "Motoru sadece çalıştırmayı değil,",
    title1En: "Do not only learn how to start the engine,",

    title2Tr: "mantığını okumayı öğren.",
    title2En: "learn how to read its logic.",

    introTr:
      "Denizde motor bilgisi bir lüks değildir. Manevra, güvenlik, enerji ve acil durum yönetimi için motorun çalışma mantığını, temel sistemlerini ve risk işaretlerini bilmek gerekir.",
    introEn:
      "Engine knowledge at sea is not a luxury. For maneuvering, safety, power continuity, and emergency management, it is essential to understand the engine’s logic, core systems, and warning signs.",

    strip1TitleTr: "KAPTANLIK REFLEKSİ",
    strip1TitleEn: "CAPTAINCY REFLEX",
    strip1TextTr: "Sorun çıkınca panik değil, doğru teşhis gerekir.",
    strip1TextEn: "When a problem appears, correct diagnosis matters more than panic.",

    strip2TitleTr: "SİSTEM BİLGİSİ",
    strip2TitleEn: "SYSTEM KNOWLEDGE",
    strip2TextTr: "Yakıt, soğutma, elektrik ve tahrik bir bütün olarak okunur.",
    strip2TextEn: "Fuel, cooling, electrical, and propulsion systems are read as one whole.",

    strip3TitleTr: "GÜVENLİ SEYİR",
    strip3TitleEn: "SAFE OPERATION",
    strip3TextTr: "Motor bilgisi liman manevrası ve acil durumda fark yaratır.",
    strip3TextEn: "Engine knowledge makes the difference in harbor maneuvers and emergencies.",

    logicTitleTr: "Bu modül neden kritik?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Birçok katılımcı motoru sadece bir aç-kapa sistemi gibi görür. Oysa gerçek denizcilikte motor; karar alma, ön kontrol, arıza fark etme, manevra güvenliği ve rota devamlılığı anlamına gelir. Bu modülün amacı, katılımcıyı tamirci yapmak değil; bilinçli ve güvenli kullanıcı haline getirmektir.",
    logicTextEn:
      "Many participants see the engine as a simple on-off mechanism. In real seamanship, however, the engine means decision-making, pre-check discipline, fault awareness, maneuver safety, and route continuity. The aim of this module is not to turn the participant into a mechanic, but into a conscious and safe operator.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Motor mantığı, kontrol disiplini, arıza işaretleri",
    details1ValueEn: "Engine logic, control discipline, fault indicators",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Manevra, güvenlik, seyir devamlılığı",
    details2ValueEn: "Maneuvering, safety, operational continuity",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + orta seviye denizcilik altyapısı",
    details3ValueEn: "Core + intermediate seamanship foundation",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Doğru kontrol eden, erken fark eden, güvenli hareket eden kullanıcı",
    details4ValueEn: "An operator who checks correctly, notices early, and acts safely",

    ctaTitleTr: "Motoru anlamak, güveni büyütür.",
    ctaTitleEn: "Understanding the engine strengthens confidence.",

    ctaTextTr:
      "Bu modül tek başına bir teknik bilgi bölümü değildir. Liman çıkışında, seyir sırasında veya acil durumda daha sakin ve kontrollü kalmanın altyapısını oluşturur.",
    ctaTextEn:
      "This module is not just a technical information section. It forms the foundation for staying calmer and more controlled during departure, passage, or emergency situations.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Motorun görevi",
      titleEn: "The role of the engine",
      textTr:
        "Motor sadece tekneyi yürütmez. Liman manevrasında kontrol sağlar, zor hava koşullarında güvenlik desteği verir ve enerji sürekliliğinin temel parçasıdır.",
      textEn:
        "The engine does more than move the boat. It provides control during harbor maneuvers, supports safety in difficult conditions, and forms a key part of power continuity.",
    },
    {
      titleTr: "Ön kontrol disiplini",
      titleEn: "Pre-check discipline",
      textTr:
        "Çalıştırmadan önce görsel kontrol, sıvılar, kayışlar, genel sızıntı izleri ve temel elektrik durumu gözden geçirilmelidir. Sorun çoğu zaman çalıştırmadan önce ipucu verir.",
      textEn:
        "Before start-up, visual inspection, fluids, belts, general leak signs, and basic electrical condition should be reviewed. Problems often leave clues before the engine is started.",
    },
    {
      titleTr: "Yakıt sistemi mantığı",
      titleEn: "Fuel system logic",
      textTr:
        "Yakıt sistemi temiz akış ister. Kirli yakıt, hava yapma, filtre tıkanması veya hat problemi motor performansını doğrudan etkiler. Kullanıcı, belirtileri erkenden okumayı öğrenmelidir.",
      textEn:
        "The fuel system requires clean flow. Contaminated fuel, air in the line, filter blockage, or line issues directly affect performance. The operator must learn to read the symptoms early.",
    },
    {
      titleTr: "Soğutma sistemi",
      titleEn: "Cooling system",
      textTr:
        "Aşırı ısınma en kritik risklerden biridir. Su akışı, impeller mantığı ve sıcaklık uyarıları görmezden gelinemez. Isı yükselmesi genelde daha büyük bir arızanın habercisidir.",
      textEn:
        "Overheating is one of the most critical risks. Water flow, impeller logic, and temperature warnings cannot be ignored. Rising temperature is often the sign of a larger issue.",
    },
    {
      titleTr: "Elektrik ve marş ilişkisi",
      titleEn: "Electrical system and starting",
      textTr:
        "Akü zayıflığı, bağlantı sorunları veya güç dağılımındaki hatalar motoru dolaylı biçimde etkiler. Kullanıcı motor problemi ile elektrik problemi arasındaki farkı ayırabilmelidir.",
      textEn:
        "Weak batteries, connection problems, or faults in power distribution indirectly affect engine operation. The operator should be able to distinguish engine problems from electrical problems.",
    },
    {
      titleTr: "Arıza işaretlerini okumak",
      titleEn: "Reading fault indicators",
      textTr:
        "Sarsıntı, farklı ses, duman rengi, güç kaybı veya alarm; hepsi anlam taşır. Denizcilikte önemli olan her şeyi tamir etmek değil, işaretleri doğru okuyup doğru kararı vermektir.",
      textEn:
        "Vibration, unusual noise, smoke color, loss of power, or alarms all have meaning. At sea, the key is not to repair everything yourself, but to read the signs correctly and make the right decision.",
    },
  ];

  const checklist = isTR
    ? [
        "Motor dairesine görsel bakış",
        "Yağ ve temel sıvı kontrolleri",
        "Sızıntı / koku / anormal iz kontrolü",
        "Akü ve elektrik durumu farkındalığı",
        "Çalıştırma sonrası ses, titreşim ve su akışı gözlemi",
        "Alarm veya sıcaklık göstergelerine dikkat",
      ]
    : [
        "Visual engine-space check",
        "Oil and essential fluid checks",
        "Leak / smell / abnormal sign inspection",
        "Battery and electrical awareness",
        "Observation of sound, vibration, and water flow after start-up",
        "Attention to alarms and temperature indicators",
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