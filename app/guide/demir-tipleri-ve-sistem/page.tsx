"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TopicCard = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function AnchorSystemsGuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • DEMİR TİPLERİ & SİSTEM",
    badgeEn: "ALBATROS SAILING • ANCHOR TYPES & SYSTEMS",

    title1Tr: "Demiri sadece bırakmayı değil,",
    title1En: "Do not only learn how to drop anchor,",

    title2Tr: "sistemi okumayı öğren.",
    title2En: "learn to read the whole system.",

    introTr:
      "Demirleme, denizcilikte en temel ama en çok yanlış anlaşılan konulardan biridir. Güvenli bir demirleme; doğru demir tipi, doğru zemin değerlendirmesi, doğru zincir oranı ve doğru kontrol disiplini ister.",
    introEn:
      "Anchoring is one of the most fundamental yet most misunderstood subjects in seamanship. Safe anchoring requires the correct anchor type, proper seabed assessment, correct chain scope, and disciplined control.",

    strip1TitleTr: "ZEMİN OKUMA",
    strip1TitleEn: "BOTTOM READING",
    strip1TextTr: "Her demir her zeminde aynı davranmaz.",
    strip1TextEn: "Not every anchor behaves the same on every bottom type.",

    strip2TitleTr: "SCOPE DİSİPLİNİ",
    strip2TitleEn: "SCOPE DISCIPLINE",
    strip2TextTr: "Zincir oranı, güvenli tutuşun omurgasıdır.",
    strip2TextEn: "Chain scope is the backbone of a secure hold.",

    strip3TitleTr: "KONTROL REFLEKSİ",
    strip3TitleEn: "CONTROL REFLEX",
    strip3TextTr: "Demir atmak başlangıçtır; asıl iş tutuşu izlemektir.",
    strip3TextEn: "Dropping anchor is only the beginning; the real task is monitoring the hold.",

    logicTitleTr: "Bu modül neden kritiktir?",
    logicTitleEn: "Why is this module critical?",

    logicTextTr:
      "Demirleme, tekneyi sadece sabitlemek değildir. Hava değişiminde, gece koşullarında, dar koylarda veya yoğun tekneli alanlarda güvenli kalabilmenin temelidir. Bu modülün amacı, kullanıcıyı sadece demir atan biri yapmak değil; zemini, mesafeyi, zincir oranını ve riskleri birlikte okuyabilen bilinçli denizci haline getirmektir.",
    logicTextEn:
      "Anchoring is not merely about stopping the vessel. It is one of the foundations of staying safe during weather change, nighttime conditions, tight bays, or crowded anchorages. The aim of this module is not just to create someone who can drop anchor, but a conscious seafarer who reads bottom conditions, distance, chain scope, and risks together.",

    detailsTitleTr: "Modül çıktısı",
    detailsTitleEn: "Module outcome",

    details1LabelTr: "Odak",
    details1LabelEn: "Focus",
    details1ValueTr: "Demir tipi, zemin, zincir oranı ve tutuş kontrolü",
    details1ValueEn: "Anchor type, seabed, chain scope, and holding control",

    details2LabelTr: "Bağlantı",
    details2LabelEn: "Connection",
    details2ValueTr: "Koy içi güvenlik, gece disiplini, rüzgar değişimi",
    details2ValueEn: "Anchorage safety, night discipline, weather shifts",

    details3LabelTr: "Seviye",
    details3LabelEn: "Level",
    details3ValueTr: "Temel + uygulamalı denizcilik refleksi",
    details3ValueEn: "Core + practical seamanship reflex",

    details4LabelTr: "Amaç",
    details4LabelEn: "Goal",
    details4ValueTr: "Güvenli demirleme kararı veren ve tutuşu izleyen kullanıcı",
    details4ValueEn: "An operator who makes safe anchoring decisions and monitors holding correctly",

    ctaTitleTr: "Doğru demirleme, denizde sessiz güvendir.",
    ctaTitleEn: "Correct anchoring is quiet confidence at sea.",

    ctaTextTr:
      "Bu modül yalnızca demir tiplerini öğretmez. Kullanıcıya doğru koy seçimi, güvenli mesafe, zincir oranı ve tutuş kontrolü düşüncesi kazandırır.",
    ctaTextEn:
      "This module teaches more than anchor types. It builds thinking around selecting the right bay, safe spacing, chain scope, and monitoring holding performance.",

    ctaPrimaryTr: "Diğer Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const topicCards: TopicCard[] = [
    {
      titleTr: "Demirin görevi",
      titleEn: "The role of the anchor",
      textTr:
        "Demir yalnızca tekneyi durdurmaz. Rüzgar, akıntı ve koy içi hareketler karşısında güvenli bir referans noktası oluşturur.",
      textEn:
        "The anchor does more than stop the boat. It creates a secure reference point against wind, current, and movement within the anchorage.",
    },
    {
      titleTr: "Demir tiplerini anlamak",
      titleEn: "Understanding anchor types",
      textTr:
        "Delta, Bruce, Danforth gibi tipler farklı zeminlerde farklı davranır. Önemli olan isim ezberlemek değil, davranış farkını anlamaktır.",
      textEn:
        "Types such as Delta, Bruce, and Danforth behave differently on different seabeds. The key is not memorizing names, but understanding behavioral differences.",
    },
    {
      titleTr: "Zemin seçimi",
      titleEn: "Seabed selection",
      textTr:
        "Kum, çamur, taş veya otlu dip; demirin tutuş karakterini değiştirir. Güvenli demirleme doğru zemin okumayla başlar.",
      textEn:
        "Sand, mud, rock, or weed changes how the anchor holds. Safe anchoring begins with reading the seabed correctly.",
    },
    {
      titleTr: "Zincir oranı (scope)",
      titleEn: "Chain scope",
      textTr:
        "Demirin tutması kadar, doğru zincir oranı da kritiktir. Kısa zincir sahte güven yaratabilir; oran ise rüzgar ve derinlikle birlikte düşünülmelidir.",
      textEn:
        "Correct chain scope is as critical as the anchor itself. Too little scope can create false confidence; it must be considered together with wind and depth.",
    },
    {
      titleTr: "Tutuşu kontrol etmek",
      titleEn: "Monitoring the hold",
      textTr:
        "Demir atmak işin ilk adımıdır. Asıl denizcilik, teknenin sürüklenip sürüklenmediğini, tutuşun oturup oturmadığını ve çevresel riski izlemektir.",
      textEn:
        "Dropping anchor is only the first step. Real seamanship lies in monitoring whether the boat drags, whether the hold is set, and what surrounding risks are developing.",
    },
    {
      titleTr: "Gece ve hava değişimi",
      titleEn: "Night and weather shifts",
      textTr:
        "Demirleme kararı yalnızca gün ışığı için verilmez. Gece rüzgar değişimi, koy yoğunluğu ve dalga etkisi de düşünülmelidir.",
      textEn:
        "Anchoring decisions are not made only for daylight conditions. Nighttime wind shifts, anchorage density, and wave influence must also be considered.",
    },
  ];

  const checklist = isTR
    ? [
        "Demir tiplerinin temel davranış farklarını bilmek",
        "Dip yapısını göz önünde bulundurmak",
        "Zincir oranını derinlik ve havaya göre düşünmek",
        "Demirin tuttuğunu varsaymak yerine kontrol etmek",
        "Gece ve rüzgar değişimini önceden hesaba katmak",
        "Komşu tekneler ve güvenli mesafe farkındalığıyla hareket etmek",
      ]
    : [
        "Knowing the basic behavioral differences between anchor types",
        "Considering the seabed condition",
        "Thinking about scope according to depth and weather",
        "Checking holding instead of merely assuming it",
        "Accounting for night conditions and wind shifts in advance",
        "Operating with awareness of nearby boats and safe spacing",
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