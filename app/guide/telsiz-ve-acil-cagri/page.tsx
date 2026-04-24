"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function RadioEmergencyGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • TELSİZ & ACİL ÇAĞRI",
    badgeEn: "ALBATROS SAILING • RADIO & DISTRESS CALLS",

    title1Tr: "Telsizi sadece konuşmak için değil,",
    title1En: "Do not use the radio only to speak,",

    title2Tr: "doğru anda doğru çağrı için öğren.",
    title2En: "learn it for the right call at the right moment.",

    introTr:
      "Denizde haberleşme, konfor değil emniyet konusudur. Telsiz kullanımı; doğru kanal disiplini, kısa ve net ifade, acil çağrı sırası ve soğukkanlılık gerektirir. Bu modül, kullanıcıya sadece cihazı değil, haberleşme mantığını öğretir.",
    introEn:
      "Communication at sea is not a matter of comfort, but of safety. Radio use requires correct channel discipline, clear and concise wording, the right distress sequence, and calm control. This module teaches not only the device, but the logic of maritime communication.",

    strip1TitleTr: "KANAL DİSİPLİNİ",
    strip1TitleEn: "CHANNEL DISCIPLINE",
    strip1TextTr: "Doğru kanal seçimi ve net kullanım kritik önemdedir.",
    strip1TextEn: "Correct channel selection and clear usage are critical.",

    strip2TitleTr: "ACİL ÇAĞRI MANTIĞI",
    strip2TitleEn: "DISTRESS CALL LOGIC",
    strip2TextTr: "Mayday, Pan Pan ve Securite farklı durumlara hizmet eder.",
    strip2TextEn: "Mayday, Pan Pan, and Securite serve different situations.",

    strip3TitleTr: "SOĞUKKANLILIK",
    strip3TitleEn: "CALM CONTROL",
    strip3TextTr: "Doğru haberleşme, panikten değil düzenli ifadeden doğar.",
    strip3TextEn: "Correct communication comes from calm structure, not panic.",

    logicTitleTr: "Bu modül neden kritiktir?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Denizde en değerli becerilerden biri, yardıma ihtiyaç duyduğunda doğru şekilde ses verebilmektir. Yanlış kanal, dağınık ifade veya gereksiz panik; durumu daha da zorlaştırabilir. Bu modülün amacı kullanıcıyı telsiz operatörü seviyesine çıkarmak değil; haberleşme mantığını bilen, çağrı önceliğini anlayan ve acil durumda daha kontrollü kalabilen denizci haline getirmektir.",
    logicTextEn:
      "One of the most valuable skills at sea is being able to call for help correctly when needed. Wrong channels, disorganized wording, or unnecessary panic can make the situation worse. The aim of this module is not to turn the user into a radio officer, but into a seafarer who understands communication logic, call priority, and can remain more controlled in emergency situations.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Kanal kullanımı, çağrı sırası, net ifade ve acil haberleşme",
    details1ValueEn: "Channel use, call order, clear wording, and emergency communication",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Güvenlik, koordinasyon, liman iletişimi ve acil durum",
    details2ValueEn: "Safety, coordination, harbor communication, and emergency response",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + operasyonel haberleşme farkındalığı",
    details3ValueEn: "Core + operational communication awareness",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Doğru kanalı seçen, doğru çağrıyı yapan, kontrollü kullanıcı",
    details4ValueEn: "An operator who selects the right channel, makes the right call, and stays controlled",

    ctaTitleTr: "Doğru çağrı, bazen en güçlü denizcilik becerisidir.",
    ctaTitleEn: "The right call is sometimes the strongest seamanship skill.",

    ctaTextTr:
      "Bu modül, kullanıcıya sadece bir cihaz öğretmez. Baskı altında daha net düşünmeyi, daha düzenli ifade kullanmayı ve acil durumda önceliği doğru kurmayı öğretir.",
    ctaTextEn:
      "This module teaches more than a device. It builds clearer thinking under pressure, more structured wording, and correct priority in emergencies.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Telsizin görevi",
      titleEn: "The role of the radio",
      textTr:
        "Telsiz yalnızca konuşma aracı değildir. Liman iletişimi, seyir koordinasyonu, güvenlik uyarıları ve acil durum çağrıları için kritik bir araçtır.",
      textEn:
        "The radio is not only a speaking device. It is a critical tool for harbor communication, passage coordination, safety warnings, and emergency calls.",
    },
    {
      titleTr: "Kanal mantığı",
      titleEn: "Channel logic",
      textTr:
        "Her kanal her iş için kullanılmaz. Kullanıcı, dinleme disiplini, çağrı önceliği ve uygun kanal seçiminin mantığını bilmelidir.",
      textEn:
        "Not every channel is used for every purpose. The operator should understand listening discipline, call priority, and correct channel selection.",
    },
    {
      titleTr: "Net ve kısa ifade",
      titleEn: "Clear and concise wording",
      textTr:
        "Denizde haberleşme uzun konuşma değil, düzenli ve net ifadedir. Mesaj kısa, anlaşılır ve gereksiz detaydan uzak olmalıdır.",
      textEn:
        "Maritime communication is not long conversation, but structured and clear wording. The message must be short, understandable, and free from unnecessary detail.",
    },
    {
      titleTr: "Mayday mantığı",
      titleEn: "Mayday logic",
      textTr:
        "Mayday, gerçek ve ciddi tehlike içindir. Bu çağrının yeri, tonu ve önceliği diğer tüm haberleşmelerden ayrılır.",
      textEn:
        "Mayday is for real and grave danger. Its place, tone, and priority are distinct from all other communications.",
    },
    {
      titleTr: "Pan Pan ve Securite",
      titleEn: "Pan Pan and Securite",
      textTr:
        "Her problem Mayday değildir. Bazı durumlar acildir ama hayati değildir; bazıları ise sadece emniyet bilgilendirmesidir. Bu ayrımı bilmek profesyonel fark yaratır.",
      textEn:
        "Not every problem is a Mayday. Some situations are urgent but not life-threatening; others are safety advisories. Knowing this distinction creates professional difference.",
    },
    {
      titleTr: "Acil durumda soğukkanlılık",
      titleEn: "Calmness in emergency",
      textTr:
        "Telsiz çağrısında en büyük hata paniktir. Doğru kullanıcı, önce durumu tanımlar, sonra önceliği belirler ve ardından düzenli iletişim kurar.",
      textEn:
        "The greatest mistake in radio communication is panic. A correct operator identifies the situation first, sets the priority, and then communicates in an orderly way.",
    },
  ];

  const checklist = isTR
    ? [
        "Telsizi açmadan önce dinleme disiplini kurmak",
        "Doğru kanal mantığını temel seviyede bilmek",
        "Mesajı kısa ve net kurmak",
        "Mayday / Pan Pan / Securite farkını ayırt etmek",
        "Acil durumda önce önceliği, sonra ifadeyi düzenlemek",
        "Panik yerine kontrollü konuşma refleksi geliştirmek",
      ]
    : [
        "Building listening discipline before transmitting",
        "Understanding channel logic at a basic level",
        "Keeping the message short and clear",
        "Distinguishing Mayday / Pan Pan / Securite",
        "Setting priority before wording in an emergency",
        "Developing controlled speech instead of panic",
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