"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type InfoStat = {
  labelTr: string;
  labelEn: string;
  valueTr: string;
  valueEn: string;
};

type RouteStep = {
  step: string;
  titleTr: string;
  titleEn: string;
  bodyTr: string;
  bodyEn: string;
};

type ModuleCard = {
  titleTr: string;
  titleEn: string;
  itemsTr: string[];
  itemsEn: string[];
};

export default function OffshoreYachtCoursePage() {
  const { lang } = useLanguage();
  const isTR = lang === "tr";

  const content = {
    eyebrowTr: "OFFSHORE YACHT COURSE",
    eyebrowEn: "OFFSHORE YACHT COURSE",

    titleTr: "Türkiye – Yunan Adaları",
    titleEn: "Turkey – Greek Islands",

    accentTr: "Açık Deniz Eğitimi",
    accentEn: "Offshore Sailing Training",

    introTr:
      "Bu program kıyı seyri değil, gerçek açık deniz eğitimi üzerine kuruludur. Eğitim; rota planlama, resmi çıkış-giriş süreçleri, trafik okuma, ada geçişleri, kaptanlık disiplini ve karar refleksini gerçek operasyon akışı içinde öğretir.",
    introEn:
      "This program is not coastal cruising. It is built around real offshore training. Route planning, official departure-entry procedures, traffic reading, island passages, skipper discipline, and decision reflex are taught within a real operational flow.",

    ctaPrimaryTr: "Eğitime Katıl",
    ctaPrimaryEn: "Join the Training",

    ctaSecondaryTr: "Rota Akışını Gör",
    ctaSecondaryEn: "View Route Flow",

    systemTitleTr: "Bu eğitim bir sistemdir.",
    systemTitleEn: "This training is a system.",

    systemBodyTr:
      "Eğitimimiz temel bilgilerle başlar; tekne hakimiyeti, donanım tanıtımı, marina giriş-çıkış usulleri, sefer planı esasları, seyir aletleri, harita ve mevki mantığı, telsiz disiplini, yelken prensipleri, yanaşma-ayrılma manevraları ve acil durum farkındalığı bir bütün olarak çalışır. Konular ayrı ayrı değil, gerçek rota içinde birlikte öğrenilir.",
    systemBodyEn:
      "The training starts with fundamentals; boat command, equipment familiarity, marina entry-exit procedures, voyage planning, navigation instruments, chart and position logic, radio discipline, sailing principles, berthing maneuvers, and emergency awareness work together as one system. Subjects are learned together on a real route, not in isolation.",

    opsTitleTr: "Gerçek operasyon burada başlar",
    opsTitleEn: "Real operations begin here",

    opsBodyTr:
      "Bodrum çıkış hazırlığından Kalimnos giriş işlemlerine kadar programın her adımı yalnızca anlatılmaz; uygulanır. Eğitim, resmi süreçlerin, rota kararlarının ve açık deniz pratiğinin içinde devam eder.",
    opsBodyEn:
      "From Bodrum departure preparation to Kalymnos entry procedures, every stage of the program is not only explained, but practiced. Training continues inside official processes, route decisions, and offshore conditions.",

    routeEyebrowTr: "ROTA VE OPERASYON AKIŞI",
    routeEyebrowEn: "ROUTE & OPERATION FLOW",

    routeTitleTr: "Bu programda sadece seyir öğrenmezsin.",
    routeTitleEn: "You do more than learn passage making.",

    routeBodyTr:
      "Program Bodrum Turgutreis D Marin çıkışıyla başlar. Acente, gümrük ve polis işlemleri ile transitlog süreci yerinde görülür. İlk varış Kalimnos olur; giriş işlemleri sahada uygulanır. Sonrasında Emborios Koyu, Leros, Lipsi, Patmos ve Panteli hattı üzerinde koy yaklaşmaları, ada geçişleri, rota kararları ve ekip disiplini gerçek deniz içinde çalışılır.",
    routeBodyEn:
      "The program starts with departure from Bodrum Turgutreis D Marin. Agency, customs, police, and transit log procedures are experienced on site. The first arrival is Kalymnos, where entry formalities are applied in the field. Then, along the Emborios Bay, Leros, Lipsi, Patmos, and Panteli line, bay approaches, island passages, route decisions, and crew discipline are practiced in real sea conditions.",

    modulesEyebrowTr: "EĞİTİM MODÜLLERİ",
    modulesEyebrowEn: "TRAINING MODULES",

    modulesTitleTr: "Açık denizde çalışan bilgi",
    modulesTitleEn: "Knowledge that works offshore",

    modulesBodyTr:
      "Bu içerikler kağıt üstünde kalmaz. Geçiş, trafik, yaklaşma, resmi akış, ekip disiplini ve liderlik kararları gerçek rota içinde uygulanır.",
    modulesBodyEn:
      "These subjects do not remain theoretical. Crossing, traffic, approach, official flow, crew discipline, and leadership decisions are applied on a real route.",

    whyTitleTr: "Bu programın farkı",
    whyTitleEn: "What makes this program different",

    whyBodyTr:
      "Katılımcı yalnızca tekne kullanmayı değil, uluslararası geçiş hazırlığını, giriş prosedürlerini, rota zincirini ve sorumluluk yapısını da öğrenir. Haftalık ortak alışverişten tekne yaşam düzenine kadar her aşama eğitimin parçasıdır. Bu yaklaşım, eğitim ile gerçek deniz hayatını birleştirir.",
    whyBodyEn:
      "Participants learn more than handling the yacht; they also learn international crossing preparation, entry procedures, route logic, and responsibility structure. From weekly provisioning to life organization on board, every stage is part of the training. This approach combines instruction with real life at sea.",

    includedTitleTr: "Ücrete dahil olan ve olmayanlar",
    includedTitleEn: "Included and excluded costs",

    includedBodyTr:
      "Ücrete tekne ve eğitim bedeli dahildir. Marina bağlama ücretleri, transitlog, motorin, atık, yiyecek-içecek, son temizlik ve özel harcamalar dahil değildir. Dahil olmayan giderler kişi başına bölünür.",
    includedBodyEn:
      "The fee includes the yacht and training cost. Marina mooring fees, transit log, fuel, waste, food and beverages, final cleaning, and personal expenses are not included. Non-included expenses are divided per person.",

    finalTitleTr: "Açık deniz seni ölçer.",
    finalTitleEn: "Offshore sailing measures you.",

    finalBodyTr:
      "Bu program sonunda yalnızca rota yapmış olmazsın. Resmi prosedür, trafik, ekip koordinasyonu, yaklaşma, geçiş ve karar alma arasında nasıl bağ kurulduğunu gerçek denizde deneyimlemiş olursun.",
    finalBodyEn:
      "By the end of this program, you will have done more than complete a route. You will have experienced how official procedures, traffic, crew coordination, approach, crossing, and decision-making connect at sea.",

    verifyTr: "Sertifikayı Doğrula",
    verifyEn: "Verify Certificate",
  };

  const stats: InfoStat[] = [
    {
      labelTr: "Süre",
      labelEn: "Duration",
      valueTr: "6 Gün Açık Deniz",
      valueEn: "6 Days Offshore",
    },
    {
      labelTr: "Katılım",
      labelEn: "Capacity",
      valueTr: "Max 6 Kişi",
      valueEn: "Max 6 People",
    },
    {
      labelTr: "Rota",
      labelEn: "Route",
      valueTr: "Türkiye + Yunan Adaları",
      valueEn: "Turkey + Greek Islands",
    },
    {
      labelTr: "Sertifika",
      labelEn: "Certificate",
      valueTr: "QR Doğrulanabilir",
      valueEn: "QR Verifiable",
    },
  ];

  const routeSteps: RouteStep[] = [
    {
      step: "01",
      titleTr: "Bodrum Turgutreis D Marin çıkış",
      titleEn: "Departure from Bodrum Turgutreis D Marin",
      bodyTr:
        "Program acente, gümrük ve polis işlemleri ile başlar. Transitlog alım süreci operasyonun gerçek başlangıcı olarak yerinde öğrenilir.",
      bodyEn:
        "The program begins with agency, customs, and police procedures. The transit log process is learned on site as the real beginning of offshore operations.",
    },
    {
      step: "02",
      titleTr: "Kalimnos giriş işlemleri",
      titleEn: "Kalymnos entry procedures",
      bodyTr:
        "İlk varış Kalimnos olur. Girişte yeniden gümrük ve polis işlemleri uygulanır. Böylece uluslararası geçiş pratiği anlatım değil, deneyim olur.",
      bodyEn:
        "The first arrival is Kalymnos. Customs and police formalities are carried out again. International crossing becomes experience, not only theory.",
    },
    {
      step: "03",
      titleTr: "Kalimnos → Emborios Koyu",
      titleEn: "Kalymnos → Emborios Bay",
      bodyTr:
        "Koy yaklaşması, güvenli giriş, kısa planlama, demirleme ve yerel koşullara göre karar verme burada çalışılır.",
      bodyEn:
        "Bay approach, safe entry, short planning, anchoring, and decisions based on local conditions are practiced here.",
    },
    {
      step: "04",
      titleTr: "Leros → Lipsi → Patmos",
      titleEn: "Leros → Lipsi → Patmos",
      bodyTr:
        "Ada geçişleri boyunca rota kurma, meteoroloji değerlendirmesi, trafik okuma ve ekip koordinasyonu gerçek offshore mantıkla yürütülür.",
      bodyEn:
        "Across the island passages, route building, weather evaluation, traffic reading, and crew coordination are handled with offshore logic.",
    },
    {
      step: "05",
      titleTr: "Panteli → Kalimnos çıkış",
      titleEn: "Panteli → Kalymnos departure",
      bodyTr:
        "Dönüş öncesi son operasyon akışı tamamlanır. Çıkış disiplini, geçiş mantığı ve rota değerlendirmesi gerçek süreç içinde ele alınır.",
      bodyEn:
        "The final operational flow before return is completed. Departure discipline, crossing logic, and route review are handled inside the real process.",
    },
  ];

  const modules: ModuleCard[] = [
    {
      titleTr: "Temel Denizcilik ve Tekne Hakimiyeti",
      titleEn: "Fundamentals & Boat Command",
      itemsTr: [
        "Denizcilik terimleri ve yönler",
        "Tekne hakimiyeti",
        "Elektrik ve makine sistemleri",
        "Arma donanımı tanıtımı",
      ],
      itemsEn: [
        "Maritime terms and directions",
        "Boat command",
        "Electrical and engine systems",
        "Rigging and deck gear familiarity",
      ],
    },
    {
      titleTr: "Navigasyon ve Seyir",
      titleEn: "Navigation & Passage",
      itemsTr: [
        "Sefer planı esasları",
        "Seyir aletleri kullanımı",
        "Harita ve mevki atma",
        "Pusula sapması ve akıntı hesabı",
      ],
      itemsEn: [
        "Voyage planning principles",
        "Navigation instruments",
        "Chartwork and plotting",
        "Compass error and current calculations",
      ],
    },
    {
      titleTr: "Operasyon ve Güvenlik",
      titleEn: "Operations & Safety",
      itemsTr: [
        "Marina giriş-çıkış usulleri",
        "Telsiz kullanımı ve usulleri",
        "Yangına müdahale prensipleri",
        "Denize adam düştü ve hipotermi farkındalığı",
      ],
      itemsEn: [
        "Marina entry-exit procedures",
        "VHF use and radio procedures",
        "Fire response principles",
        "Man overboard and hypothermia awareness",
      ],
    },
    {
      titleTr: "Yelken ve Manevra",
      titleEn: "Sailing & Maneuvering",
      itemsTr: [
        "Yelken prensipleri ve trimleme",
        "Yanaşma ve ayrılma manevraları",
        "Koy, iskele ve demir sahası kararları",
        "Ekip disiplini ve liderlik refleksi",
      ],
      itemsEn: [
        "Sailing principles and trim",
        "Berthing and departure maneuvers",
        "Bay, pier, and anchorage decisions",
        "Crew discipline and leadership reflex",
      ],
    },
  ];

  const opsSteps = isTR
    ? [
        "Bodrum çıkış + Transitlog",
        "Kalimnos giriş işlemleri",
        "Ada geçişleri ve rota planlama",
        "Gerçek kaptanlık kararları",
      ]
    : [
        "Bodrum departure + Transit Log",
        "Kalymnos entry procedures",
        "Island passages and route planning",
        "Real skipper decisions",
      ];

  return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <style>{`
        @keyframes offshoreSlowZoom {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1.02); }
        }

        @keyframes offshoreShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes offshoreFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_18%_0%,rgba(56,189,248,0.20),transparent_34%),radial-gradient(circle_at_82%_10%,rgba(59,130,246,0.12),transparent_26%)]" />
        <div className="absolute left-[-120px] top-[18%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-140px] top-[44%] h-[380px] w-[380px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_0.96fr] lg:items-center">
          <div className="max-w-4xl">
            <div
              className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-300/10 px-4 py-2 backdrop-blur-md"
              style={{ animation: "offshoreFadeUp 0.7s ease forwards" }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                {isTR ? content.eyebrowTr : content.eyebrowEn}
              </span>
            </div>

            <h1
              className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl"
              style={{ animation: "offshoreFadeUp 0.9s ease forwards" }}
            >
              {isTR ? content.titleTr : content.titleEn}
              <span className="block text-cyan-300">
                {isTR ? content.accentTr : content.accentEn}
              </span>
            </h1>

            <p
              className="mt-6 max-w-3xl text-lg leading-8 text-slate-300"
              style={{ animation: "offshoreFadeUp 1.05s ease forwards" }}
            >
              {isTR ? content.introTr : content.introEn}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #67e8f9, #22d3ee)",
                  boxShadow:
                    "0 12px 30px rgba(34,211,238,0.22), 0 0 0 1px rgba(255,255,255,0.10) inset",
                  animation: "offshoreFadeUp 1.15s ease forwards",
                }}
              >
                <span
                  className="pointer-events-none absolute left-1/2 top-[70%] h-[34px] w-[72%] -translate-x-1/2 rounded-full blur-2xl"
                  style={{
                    background: "rgba(103,232,249,0.55)",
                    zIndex: 0,
                  }}
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.28) 50%, transparent 80%)",
                    zIndex: 1,
                  }}
                />
                <span className="relative z-[2]">
                  {isTR ? content.ctaPrimaryTr : content.ctaPrimaryEn}
                </span>
              </Link>

              <a
                href="#route-flow"
                className="group relative inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
                  animation: "offshoreFadeUp 1.25s ease forwards",
                }}
              >
                <span
                  className="pointer-events-none absolute left-1/2 top-[74%] h-[24px] w-[65%] -translate-x-1/2 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
                  style={{
                    background: "rgba(103,232,249,0.28)",
                    zIndex: 0,
                  }}
                />
                <span className="relative z-[2]">
                  {isTR ? content.ctaSecondaryTr : content.ctaSecondaryEn}
                </span>
              </a>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.32)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_95px_rgba(0,0,0,0.40)]">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/programs/offshore-hero.jpg"
                alt={
                  isTR
                    ? "Türkiye Yunan Adaları offshore eğitim hero görseli"
                    : "Turkey Greek Islands offshore training hero image"
                }
                width={1600}
                height={1400}
                className="h-[560px] w-full object-cover"
                priority
                style={{
                  animation: "offshoreSlowZoom 18s ease-in-out infinite",
                  transformOrigin: "center center",
                }}
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18),rgba(2,6,23,0.70))]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(103,232,249,0.18),transparent_42%)]" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.08) 46%, rgba(255,255,255,0.02) 52%, transparent 60%)",
                animation: "offshoreShimmer 9s linear infinite",
              }}
            />
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
  <div
    key={item.labelTr}
    className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
    style={{
      boxShadow:
        "0 18px 44px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
      animation: "offshoreFadeUp 0.9s ease forwards",
      animationDelay: `${index * 0.08}s`,
    }}
  >
    <div
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
      }}
    />

    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

    <div
      className="pointer-events-none absolute left-5 top-3 h-14 w-20 rounded-full blur-2xl transition-all duration-700 group-hover:scale-125"
      style={{
        background: "rgba(103,211,255,0.25)",
        animation: "glowMove 8s ease-in-out infinite",
      }}
    />

    <div
      className="pointer-events-none absolute left-10 top-6 h-10 w-14 rounded-full blur-xl opacity-0 transition-all duration-700 group-hover:opacity-100"
      style={{
        background: "rgba(66,189,248,0.35)",
      }}
    />

    <div className="relative z-[2]">
      <div className="text-[12px] font-semibold text-slate-300">
        {isTR ? item.labelTr : item.labelEn}
      </div>

      <div className="mt-2 text-[22px] font-semibold leading-tight tracking-[-0.04em] text-white">
        {isTR ? item.valueTr : item.valueEn}
      </div>
    </div>
  </div>
))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="group relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_38px_95px_rgba(0,0,0,0.42)]">
            <Image
              src="/images/programs/offshore-marina.jpg"
              alt={
                isTR
                  ? "Marina çıkış operasyon görseli"
                  : "Marina departure operations image"
              }
              width={1600}
              height={1200}
              className="h-[520px] w-full object-cover transition duration-700"
              style={{ animation: "offshoreSlowZoom 20s ease-in-out infinite" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(103,211,255,0.16),transparent_40%)]" />
          </div>

          <div
            className="relative rounded-[28px] border border-white/10 bg-white/[0.06] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_38px_90px_rgba(0,0,0,0.34)]"
            style={{ animation: "offshoreFadeUp 1.1s ease forwards" }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[28px]"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(103,211,255,0.10), transparent 35%)",
              }}
            />

            <h3 className="relative text-2xl font-semibold tracking-[-0.02em] text-white md:text-3xl">
              {isTR ? content.opsTitleTr : content.opsTitleEn}
            </h3>

            <p className="relative mt-4 leading-7 text-slate-300">
              {isTR ? content.opsBodyTr : content.opsBodyEn}
            </p>

            <div className="relative mt-6 space-y-4">
              {opsSteps.map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-300/20 text-sm font-bold text-cyan-200">
                    {i + 1}
                  </div>

                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <div className="relative mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-slate-900 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #67e8f9, #22d3ee)",
                  boxShadow:
                    "0 12px 28px rgba(34,211,238,0.26), 0 0 0 1px rgba(255,255,255,0.10) inset",
                }}
              >
                <span
                  className="pointer-events-none absolute left-1/2 top-[72%] h-[30px] w-[70%] -translate-x-1/2 rounded-full blur-2xl"
                  style={{
                    background: "rgba(103,232,249,0.52)",
                    zIndex: 0,
                  }}
                />
                <span
                  className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(120deg, transparent 20%, rgba(255,255,255,0.24) 50%, transparent 80%)",
                    zIndex: 1,
                  }}
                />
                <span className="relative z-[2]">
                  {isTR ? content.ctaPrimaryTr : content.ctaPrimaryEn}
                </span>
              </Link>

              <a
                href="#route-flow"
                className="group relative inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white transition duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
                }}
              >
                <span
                  className="pointer-events-none absolute left-1/2 top-[74%] h-[24px] w-[65%] -translate-x-1/2 rounded-full opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"
                  style={{
                    background: "rgba(103,232,249,0.28)",
                    zIndex: 0,
                  }}
                />
                <span className="relative z-[2]">
                  {isTR ? "Detayları Gör" : "See Details"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isTR ? content.systemTitleTr : content.systemTitleEn}
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">
              {isTR ? content.systemBodyTr : content.systemBodyEn}
            </p>
          </div>
        </div>
      </section>

      <section
        id="route-flow"
        className="relative mx-auto max-w-7xl px-6 py-16 md:py-24"
      >
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
            {isTR ? content.routeEyebrowTr : content.routeEyebrowEn}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            {isTR ? content.routeTitleTr : content.routeTitleEn}
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            {isTR ? content.routeBodyTr : content.routeBodyEn}
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {routeSteps.map((item, index) => (
            <div
              key={item.step}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.06]"
              style={{
                animation: "offshoreFadeUp 1s ease forwards",
                animationDelay: `${index * 0.08}s`,
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/20 bg-cyan-300/10 text-sm font-semibold text-cyan-100 shadow-[0_0_18px_rgba(103,211,255,0.18)]">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold text-white md:text-xl">
                  {isTR ? item.titleTr : item.titleEn}
                </h3>
              </div>

              <p className="text-sm leading-7 text-slate-300 md:text-[15px]">
                {isTR ? item.bodyTr : item.bodyEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.75rem] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(103,211,255,0.10),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.2)] backdrop-blur-md md:p-8">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/65">
            {isTR ? "Operasyonel Rota" : "Operational Route"}
          </div>

          <p className="mt-4 text-lg font-medium leading-8 text-white md:text-xl">
            Bodrum Turgutreis D Marin → Kalimnos → Emborios Koyu → Leros →
            Lipsi → Patmos → Panteli → Kalimnos çıkış
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.28)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_36px_95px_rgba(0,0,0,0.38)]">
          <Image
            src="/images/programs/offshore-aegean.jpg"
            alt={isTR ? "Ege deneyimi görseli" : "Aegean experience image"}
            width={1800}
            height={1000}
            className="h-[420px] w-full object-cover md:h-[500px]"
            style={{ animation: "offshoreSlowZoom 20s ease-in-out infinite" }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.16),rgba(2,6,23,0.82))]" />

          <div
            className="absolute bottom-0 left-0 right-0 p-8 md:p-10"
            style={{ animation: "offshoreFadeUp 1.2s ease forwards" }}
          >
            <div className="max-w-2xl">
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/70">
                {isTR ? "DENEYİM KATI" : "EXPERIENCE LAYER"}
              </div>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                {isTR
                  ? "Bu sadece eğitim değil."
                  : "This is more than training."}
              </h3>

              <p className="mt-4 text-base leading-8 text-white/80">
                {isTR
                  ? "Ege’yi okumayı, denizde karar vermeyi ve açık deniz geçişlerinin gerçek ritmini yaşamayı öğrenirsin."
                  : "You learn how to read the Aegean, make decisions at sea, and experience the real rhythm of offshore passages."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {isTR ? content.modulesEyebrowTr : content.modulesEyebrowEn}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isTR ? content.modulesTitleTr : content.modulesTitleEn}
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              {isTR ? content.modulesBodyTr : content.modulesBodyEn}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <div
                key={module.titleTr}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {isTR ? module.titleTr : module.titleEn}
                </h3>

                <div className="mt-5 space-y-3">
                  {(isTR ? module.itemsTr : module.itemsEn).map((item) => (
                    <div
                      key={item}
                      className="rounded-[1rem] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {isTR ? content.whyTitleTr : content.whyTitleEn}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {isTR ? content.whyBodyTr : content.whyBodyEn}
            </p>
          </div>

          <div
            className="relative rounded-[1.8rem] border border-cyan-300/15 bg-[linear-gradient(135deg,#0a1830_0%,#10294b_42%,#143f67_100%)] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.24)]"
            style={{ animation: "offshoreFadeUp 1.2s ease forwards" }}
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-[1.8rem]"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(103,211,255,0.14), transparent 34%)",
              }}
            />

            <h2 className="relative text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {isTR ? content.finalTitleTr : content.finalTitleEn}
            </h2>

            <p className="relative mt-5 text-base leading-8 text-white/80">
              {isTR ? content.finalBodyTr : content.finalBodyEn}
            </p>

            <div className="relative mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "#ffffff",
                  boxShadow:
                    "0 12px 26px rgba(255,255,255,0.10), 0 0 0 1px rgba(255,255,255,0.08) inset",
                }}
              >
                <span className="relative z-[2]">
                  {isTR ? content.ctaPrimaryTr : content.ctaPrimaryEn}
                </span>
              </Link>

              <Link
                href="/verify"
                className="group relative inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
                }}
              >
                <span className="relative z-[2]">
                  {isTR ? content.verifyTr : content.verifyEn}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}