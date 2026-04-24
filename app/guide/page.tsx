"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type GuideLink = {
  href: string;
  tr: string;
  en: string;
};

type GuideSection = {
  key: string;
  eyebrowTr: string;
  eyebrowEn: string;
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
  items: GuideLink[];
};

export default function GuidePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • EĞİTİM MODÜLLERİ",
    badgeEn: "ALBATROS SAILING • TRAINING MODULES",

    title1Tr: "Denizciliği parça parça değil,",
    title1En: "Do not learn seamanship in fragments,",

    title2Tr: "sistem olarak öğren.",
    title2En: "learn it as a system.",

    introTr:
      "Bu yapı yalnızca konu listesi sunmaz. Tekne üzerindeki yaşamdan navigasyona, teknik sistemlerden acil duruma kadar denizciliğin birbirine bağlı eğitim katmanlarını bir araya getirir.",
    introEn:
      "This structure does not simply list topics. It brings together the connected learning layers of seamanship, from onboard life to navigation, from technical systems to emergency response.",

    top1TitleTr: "SİSTEMATİK YAPI",
    top1TitleEn: "SYSTEMATIC STRUCTURE",
    top1TextTr: "Her modül, başka bir modülü destekleyen bir öğrenme omurgasına bağlıdır.",
    top1TextEn: "Each module belongs to a learning backbone that supports the others.",

    top2TitleTr: "GERÇEK DENİZ",
    top2TitleEn: "REAL SEA",
    top2TextTr: "Başlıklar sadece teori değil; gerçek tekne, gerçek karar ve gerçek davranış mantığıyla ilişkilidir.",
    top2TextEn: "These topics are not abstract theory; they connect to real boats, real decisions, and real onboard behavior.",

    top3TitleTr: "SEVİYE YOLU",
    top3TitleEn: "PROGRESSION PATH",
    top3TextTr: "Temelden offshore düşünceye kadar uzanan bütünsel bir eğitim sistemi.",
    top3TextEn: "A complete training system stretching from fundamentals to offshore thinking.",
  };

  const sections: GuideSection[] = [
    {
      key: "core",
      eyebrowTr: "TEMEL DENİZCİLİK",
      eyebrowEn: "CORE SEAMANSHIP",
      titleTr: "Temel denizcilik",
      titleEn: "Core seamanship",
      textTr:
        "Tekne üzerinde güvenli, kontrollü ve bilinçli hareketin temeli burada oluşur.",
      textEn:
        "The foundation of safe, controlled, and conscious action onboard is formed here.",
      items: [
        { href: "/guide/guvenlik", tr: "Güvenlik", en: "Safety" },
        {
          href: "/guide/tekneye-binis-ve-yasam-disiplini",
          tr: "Tekneye Biniş ve Yaşam Disiplini",
          en: "Onboard Discipline",
        },
        {
          href: "/guide/halatlar-ve-baglar",
          tr: "Halatlar ve Bağlar",
          en: "Ropes & Knots",
        },
        {
          href: "/guide/marina-giris-cikis-usulleri",
          tr: "Marina Giriş Çıkış Usulleri",
          en: "Marina Entry & Exit",
        },
        {
          href: "/guide/tekne-hakimiyeti",
          tr: "Tekne Hakimiyeti",
          en: "Boat Handling",
        },
      ],
    },
    {
      key: "nav",
      eyebrowTr: "NAVİGASYON",
      eyebrowEn: "NAVIGATION",
      titleTr: "Navigasyon ve rota",
      titleEn: "Navigation and routing",
      textTr:
        "Doğru rota, doğru mevki ve doğru karar açık denizde güvenin omurgasıdır.",
      textEn:
        "Correct route, correct position, and correct decisions form the backbone of offshore confidence.",
      items: [
        { href: "/guide/navigasyon", tr: "Navigasyon", en: "Navigation" },
        {
          href: "/guide/rota-planlama",
          tr: "Rota Planlama",
          en: "Route Planning",
        },
        {
          href: "/guide/paper-chart-navigation",
          tr: "Paper Chart Navigation",
          en: "Paper Chart Navigation",
        },
        { href: "/guide/almanac", tr: "Almanac", en: "Almanac" },
        { href: "/guide/sextant", tr: "Sextant", en: "Sextant" },
        {
          href: "/guide/sextant-nedir",
          tr: "Sextant Nedir",
          en: "What is Sextant?",
        },
      ],
    },
    {
      key: "rules",
      eyebrowTr: "TRAFİK VE KURALLAR",
      eyebrowEn: "TRAFFIC & RULES",
      titleTr: "Trafik ve kurallar",
      titleEn: "Traffic and rules",
      textTr:
        "Denizde doğru hareket yalnızca tekneyi yönetmek değil, trafiği ve hakkı da doğru okumaktır.",
      textEn:
        "Correct action at sea is not only about handling the boat, but also reading traffic and right of way correctly.",
      items: [
        { href: "/guide/colreg", tr: "COLREG", en: "COLREG" },
        {
          href: "/guide/denizde-catisma-onleme",
          tr: "Denizde Çatışma Önleme",
          en: "Collision Prevention at Sea",
        },
        {
          href: "/guide/ais-ve-vts-nedir",
          tr: "AIS / VTS Nedir",
          en: "What is AIS / VTS?",
        },
        {
          href: "/guide/tss-nedir",
          tr: "TSS Nedir",
          en: "What is TSS?",
        },
      ],
    },
    {
      key: "weather",
      eyebrowTr: "HAVA, SEYİR VE İŞARETLER",
      eyebrowEn: "WEATHER, SAILING & SIGNALS",
      titleTr: "Hava, seyir ve işaretler",
      titleEn: "Weather, sailing, and signals",
      textTr:
        "Rüzgarı, geceyi, işaretleri ve teknenin verdiği tepkiyi birlikte okumayı burada öğrenirsiniz.",
      textEn:
        "Here you learn to read the wind, the night, the signals, and the vessel’s response together.",
      items: [
        {
          href: "/guide/denizde-meteoroloji",
          tr: "Denizde Meteoroloji",
          en: "Meteorology at Sea",
        },
        {
          href: "/guide/meteoroloji-karar-mantigi",
          tr: "Meteoroloji & Karar Mantığı",
          en: "Weather & Decision Logic",
        },
        {
          href: "/guide/gece-seyri-fenerleri",
          tr: "Gece Seyri Fenerleri",
          en: "Night Navigation Lights",
        },
        { href: "/guide/signals", tr: "Signals", en: "Signals" },
        {
          href: "/guide/wind-engine",
          tr: "Wind Engine",
          en: "Wind Engine",
        },
        {
          href: "/guide/yelkenin-calisma-prensibi",
          tr: "Yelkenin Çalışma Prensibi",
          en: "How Sails Work",
        },
      ],
    },
    {
      key: "technical",
      eyebrowTr: "TEKNE SİSTEMLERİ",
      eyebrowEn: "BOAT SYSTEMS",
      titleTr: "Motor, mekanik ve elektrik",
      titleEn: "Engine, mechanics, and electrical",
      textTr:
        "Kaptanlık sadece rota bilmek değil, teknenin çalışan sistemlerini de anlamaktır.",
      textEn:
        "Captaincy is not only about knowing the route, but also understanding the vessel’s operating systems.",
      items: [
        { href: "/guide/motor", tr: "Motor", en: "Engine" },
        {
          href: "/guide/yakit-sistemi",
          tr: "Yakıt Sistemi",
          en: "Fuel System",
        },
        {
          href: "/guide/tekne-elektrigi",
          tr: "Tekne Elektriği",
          en: "Boat Electrical",
        },
        {
          href: "/guide/aku-ve-guc",
          tr: "Akü ve Güç",
          en: "Battery & Power",
        },
      ],
    },
    {
      key: "anchoring",
      eyebrowTr: "DEMİRLEME VE KONAKLAMA",
      eyebrowEn: "ANCHORING & SAFE STAY",
      titleTr: "Demirleme ve konaklama",
      titleEn: "Anchoring and safe stay",
      textTr:
        "Doğru demirleme ve doğru koy kararı, denizde sessiz güvenin en önemli parçalarındandır.",
      textEn:
        "Correct anchoring and proper anchorage decisions are among the strongest foundations of quiet confidence at sea.",
      items: [
        {
          href: "/guide/demirleme-ve-demir-alma",
          tr: "Demirleme ve Demir Alma",
          en: "Anchoring & Weighing Anchor",
        },
        {
          href: "/guide/demir-tipleri-ve-sistem",
          tr: "Demir Tipleri ve Sistem",
          en: "Anchor Types & Systems",
        },
        {
          href: "/guide/koy-secimi-ve-guvenli-konaklama",
          tr: "Koy Seçimi ve Güvenli Konaklama",
          en: "Anchorage Selection & Safe Stay",
        },
      ],
    },
    {
      key: "emergency",
      eyebrowTr: "ACİL DURUM VE GÜVENLİK",
      eyebrowEn: "EMERGENCY & SAFETY",
      titleTr: "Acil durum ve güvenlik",
      titleEn: "Emergency and safety",
      textTr:
        "Kriz anı gerçek seviyeyi ortaya çıkarır. Bu bölüm güven, refleks ve doğru öncelik mantığını öğretir.",
      textEn:
        "A crisis reveals the real level. This section teaches safety, reflex, and correct priority logic.",
      items: [
        {
          href: "/guide/denizde-acil-durumlar",
          tr: "Denizde Acil Durumlar",
          en: "Emergency at Sea",
        },
        {
          href: "/guide/ilk-yardim-ve-deniz-guvenligi",
          tr: "İlk Yardım ve Deniz Güvenliği",
          en: "First Aid & Sea Safety",
        },
        {
          href: "/guide/telsiz-ve-acil-cagri",
          tr: "Telsiz ve Acil Çağrı",
          en: "Radio & Distress Calls",
        },
        {
          href: "/guide/anchored-alcohol",
          tr: "Anchored Alcohol",
          en: "Anchored Alcohol",
        },
      ],
    },
    {
      key: "career",
      eyebrowTr: "KARİYER VE DENİZCİLİK YOLU",
      eyebrowEn: "CAREER & MARITIME PATH",
      titleTr: "Kariyer ve denizcilik yolu",
      titleEn: "Career and maritime pathway",
      textTr:
        "Denizcilik yalnızca bilgi değil; seviye, sorumluluk ve yol haritası meselesidir.",
      textEn:
        "Seamanship is not only knowledge; it is also about level, responsibility, and pathway.",
      items: [
        {
          href: "/guide/yat-kaptani-nasil-olunur",
          tr: "Yat Kaptanı Nasıl Olunur",
          en: "How to Become a Yacht Captain",
        },
      ],
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <style>{`
        @keyframes guideShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_16%_8%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_84%_10%,rgba(59,130,246,0.10),transparent_24%)]" />
        <div className="absolute left-[-140px] top-[18%] h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-140px] top-[38%] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />
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
              title={isTR ? page.top1TitleTr : page.top1TitleEn}
              text={isTR ? page.top1TextTr : page.top1TextEn}
            />
            <TopStrip
              title={isTR ? page.top2TitleTr : page.top2TitleEn}
              text={isTR ? page.top2TextTr : page.top2TextEn}
            />
            <TopStrip
              title={isTR ? page.top3TitleTr : page.top3TitleEn}
              text={isTR ? page.top3TextTr : page.top3TextEn}
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <GuideSectionCard
              key={section.key}
              isTR={isTR}
              section={section}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function GuideSectionCard({
  isTR,
  section,
}: {
  isTR: boolean;
  section: GuideSection;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-[6px] hover:border-cyan-300/20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
      <div
        className="pointer-events-none absolute left-6 top-3 h-16 w-20 rounded-full blur-2xl"
        style={{ background: "rgba(103,211,255,0.12)" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.06) 46%, rgba(255,255,255,0.01) 52%, transparent 60%)",
          animation: "guideShimmer 2.2s linear infinite",
        }}
      />

      <div className="relative z-[2]">
        <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/65">
          {isTR ? section.eyebrowTr : section.eyebrowEn}
        </div>

        <h2 className="mt-3 text-[2rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white">
          {isTR ? section.titleTr : section.titleEn}
        </h2>

        <p className="mt-4 text-sm leading-7 text-slate-300">
          {isTR ? section.textTr : section.textEn}
        </p>

        <div className="mt-6 space-y-3">
          {section.items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-[1rem] border border-white/8 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:border-cyan-300/18 hover:bg-white/[0.06] hover:text-white"
            >
              {isTR ? item.tr : item.en}
            </Link>
          ))}
        </div>
      </div>
    </div>
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