"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type ModuleGroup = {
  title: string;
  items: string[];
};

type RouteStop = {
  title: string;
  body: string;
};

type HighlightStat = {
  value: string;
  label: string;
};

export default function HisaronuGulfTrainingPage() {
  const { lang } = useLanguage();
  const isTR = lang === "tr";

  const content = {
    eyebrow: isTR ? "ROTALI EĞİTİM DENEYİMİ" : "ROUTE-BASED TRAINING EXPERIENCE",
    title: isTR
      ? "Hisarönü Körfezi'nde Gerçek Denizcilik Eğitimi"
      : "Real Seamanship Training in Hisarönü Gulf",
    subtitle: isTR
      ? "Bu bir sınıf anlatımı değil. Marina hazırlığından rota kararına, demirlemeden gece disiplinine kadar gerçek denizde yaşanan, yoğun ve dönüştürücü bir haftalık eğitim süreci."
      : "This is not classroom theory. It is an intensive and transformative week lived at sea, from marina preparation to route decisions, from anchoring to night discipline.",
    heroCardTitle: isTR ? "Program Özeti" : "Program Summary",
    heroCardBody: isTR
      ? "Eğitim Bodrum Turgutreis D Marin'de başlar. Ortak alışveriş, tekneye yükleme, yaşam alanı düzeni ve günlük operasyon; daha ilk andan itibaren eğitimin parçasıdır. Rota, eğitim içeriklerine göre tasarlanır ve her yeni gün yeni bir liman, koy, iskele ya da demir sahası ile seni farklı denizcilik senaryoları ile buluşturur."
      : "Training begins at Bodrum Turgutreis D Marin. Shared provisioning, loading the boat, organizing living space, and daily operations are part of the training from the very first moment. The route is built around the curriculum, and each new day exposes you to a new port, bay, dock, or anchorage with different real-life seamanship scenarios.",
    ctaPrimary: isTR ? "Programa Katıl" : "Join the Program",
    ctaSecondary: isTR ? "Tüm Programları Gör" : "View All Programs",
    storyEyebrow: isTR ? "EĞİTİMİN BAŞLANGICI" : "WHERE TRAINING BEGINS",
    storyTitle: isTR ? "Eğitim Marina'da Başlar" : "Training Begins at the Marina",
    storyBody: isTR
      ? "Bu programda eğitim, teknede anlatılan ilk konu ile başlamaz. Ortak alışveriş, doğru malzeme seçimi, stok planı, yükleme disiplini, tekneye yerleşim ve ekip düzeni; denizciliğin gerçek parçasıdır. Yani daha tekne limandan ayrılmadan öğrenme süreci başlamış olur."
      : "In this program, training does not begin with the first topic explained onboard. Shared provisioning, choosing the right supplies, stock planning, loading discipline, onboard setup, and crew organization are all part of real seamanship. The learning process starts before the yacht even leaves the marina.",
    differenceEyebrow: isTR ? "BU PROGRAMIN FARKI" : "WHAT MAKES THIS DIFFERENT",
    differenceTitle: isTR
      ? "Burada izleyici değil, denizin içindeki karar vericisin."
      : "Here you are not a spectator, but a decision-maker inside the sea itself.",
    differenceBody: isTR
      ? "Bu programın amacı konu ezberletmek değil; tekne, ekip, rota ve deniz üzerinde sorumluluk taşıyan karar refleksini geliştirmektir. Her durak bir bilgi maddesi değil, gerçek bir senaryodur."
      : "The purpose of this program is not to make you memorize topics, but to build the decision reflex required to carry responsibility for the boat, the crew, the route, and the sea. Every stop is not just information; it is a real scenario.",
    modulesEyebrow: isTR ? "EĞİTİM İÇERİĞİ" : "TRAINING CONTENT",
    modulesTitle: isTR
      ? "Konular Kağıtta Değil, Gerçek Denizde Karşılığını Bulur"
      : "Topics Find Their Meaning in Real Sea Conditions",
    modulesBody: isTR
      ? "Tekne hakimiyetinden navigasyona, emniyetten haberleşmeye kadar tüm içerik gerçek kullanım bağlamı içinde öğretilir."
      : "From boat handling to navigation, from safety to communication, all content is taught in a real operational context.",
    routeEyebrow: isTR ? "ROTA TASARIMI" : "ROUTE DESIGN",
    routeTitle: isTR
      ? "Rota Bir Manzara Değil, Eğitim Aracıdır"
      : "The Route Is Not a View, It Is a Training Tool",
    routeBody: isTR
      ? "Knidos, Datça, Hisarönü Körfezi, Söğüt, Bozukkale, Palamutbükü ve Bodrum D Marin hattı; meteoroloji uygunluğuna göre, seni farklı yaklaşma, ayrılma, demirleme, sefer planı ve karar senaryolarıyla karşılaştıracak şekilde kurgulanır."
      : "The line including Knidos, Datça, Hisarönü Gulf, Söğüt, Bozukkale, Palamutbükü, and Bodrum D Marin is shaped according to weather suitability so that you face different approach, departure, anchoring, passage-planning, and decision-making scenarios.",
    costEyebrow: isTR ? "ŞEFFAF ÜCRET YAPISI" : "TRANSPARENT COST STRUCTURE",
    costTitle: isTR
      ? "Ücrete Dahil Olanlar ve Olmayanlar"
      : "What Is Included and What Is Not",
    included: isTR ? "Dahil" : "Included",
    excluded: isTR ? "Dahil Değil" : "Not Included",
    splitNote: isTR
      ? "Dahil olmayan ortak harcamalar ekip arasında kişi başına bölünür."
      : "Shared expenses that are not included are divided equally per person among the crew.",
    finalEyebrow: "REAL TRAINING EXPERIENCE",
    finalTitle: isTR
      ? "Sadece Konu Öğrenme. Gerçek Deniz Disipliniyle Tanış."
      : "Do More Than Learn Topics. Meet Real Sea Discipline.",
    finalBody: isTR
      ? "Bu eğitim sonunda sadece içerik öğrenmiş olmazsın; teknenin, ekibin, rotanın ve sorumluluğun gerçek denizde nasıl yönetildiğini deneyimlemiş olursun."
      : "By the end of this training, you will not only have learned the content; you will have experienced how the boat, the crew, the route, and responsibility are truly managed at sea.",
  };

  const stats: HighlightStat[] = isTR
    ? [
        { value: "18+", label: "Gerçek eğitim başlığı" },
        { value: "7 Gün", label: "Yoğun rota deneyimi" },
        { value: "6+", label: "Farklı liman / koy senaryosu" },
      ]
    : [
        { value: "18+", label: "Real training topics" },
        { value: "7 Days", label: "Intensive route experience" },
        { value: "6+", label: "Different port / bay scenarios" },
      ];

  const moduleGroups: ModuleGroup[] = isTR
    ? [
        {
          title: "Denizcilik Temeli ve Tekne Hakimiyeti",
          items: [
            "Denizcilik terimleri ve yönler",
            "Tekne hakimiyeti",
            "Tekne elektrik ve makine sistemleri",
            "Arma donanımı tanıtımı",
          ],
        },
        {
          title: "Seyir, Navigasyon ve Planlama",
          items: [
            "Sefer planı esasları",
            "Seyir aletleri kullanımı",
            "Harita ve mevkii atma",
            "Pusula sapması ve hesaplama",
            "Akıntı seyri hesaplaması",
            "Fenerler, şamandıralar ve mevkii atma",
          ],
        },
        {
          title: "Manevra ve Operasyon",
          items: [
            "Marina giriş ve çıkış usulleri",
            "Yanaşma ve ayrılma manevraları",
            "Yelken prensipleri ve trimleme",
            "Telsiz kullanımı önemi ve usulleri",
          ],
        },
        {
          title: "Emniyet ve Acil Durum",
          items: [
            "Soğuk su şoku bilgilendirmesi ve hipotermi",
            "Denize adam düştü emercensi eğitimi",
            "Yangına müdahale prensipleri",
            "Cansalı gösterimi ve VHF kullanımı",
          ],
        },
      ]
    : [
        {
          title: "Seamanship Fundamentals & Boat Handling",
          items: [
            "Maritime terms and directions",
            "Boat handling",
            "Boat electrical and engine systems",
            "Rigging overview",
          ],
        },
        {
          title: "Navigation & Passage Planning",
          items: [
            "Passage planning basics",
            "Use of navigation instruments",
            "Chart work and position fixing",
            "Compass deviation and calculations",
            "Current navigation calculations",
            "Lights, buoys, and position fixing",
          ],
        },
        {
          title: "Maneuvering & Operations",
          items: [
            "Marina entry and exit procedures",
            "Berthing and departure maneuvers",
            "Sailing principles and trimming",
            "Importance and procedures of radio use",
          ],
        },
        {
          title: "Safety & Emergency",
          items: [
            "Cold shock and hypothermia awareness",
            "Man overboard emergency training",
            "Fire response principles",
            "Life raft demonstration and VHF usage",
          ],
        },
      ];

  const routeStops: RouteStop[] = isTR
    ? [
        {
          title: "Bodrum Turgutreis D Marin",
          body: "Hazırlık, ortak alışveriş, yükleme, tekneye yerleşim ve ilk operasyon disiplini burada başlar.",
        },
        {
          title: "Knidos / Datça Hattı",
          body: "Açık su hissi, seyir planı, rota takibi ve karar kalitesi için güçlü bir başlangıç senaryosu sunar.",
        },
        {
          title: "Hisarönü Körfezi",
          body: "Koy, iskele, yaklaşma ve farklı deniz durumlarını aynı program içinde deneyimleme fırsatı verir.",
        },
        {
          title: "Söğüt / Bozukkale",
          body: "Manevra, yaklaşma, rüzgâr değerlendirmesi ve günlük denizcilik kararları burada gerçek karşılığını bulur.",
        },
        {
          title: "Palamutbükü / Bodrum Dönüşü",
          body: "Program boyunca öğrendiklerini tekrar etmeyen, birleştiren final operasyon senaryosu oluşturur.",
        },
      ]
    : [
        {
          title: "Bodrum Turgutreis D Marin",
          body: "Preparation, provisioning, loading, onboard setup, and the first layer of operational discipline begin here.",
        },
        {
          title: "Knidos / Datça Line",
          body: "A powerful opening scenario for open-water feeling, route tracking, and decision quality.",
        },
        {
          title: "Hisarönü Gulf",
          body: "Creates the opportunity to experience bays, docks, approaches, and varying sea conditions within the same program.",
        },
        {
          title: "Söğüt / Bozukkale",
          body: "Maneuvering, approaches, wind assessment, and day-to-day seamanship decisions become real here.",
        },
        {
          title: "Palamutbükü / Return to Bodrum",
          body: "Forms the final operational scenario that combines what you learned throughout the week.",
        },
      ];

  const includedItems = isTR
    ? ["Tekne", "Eğitim bedeli"]
    : ["Boat", "Training fee"];

  const excludedItems = isTR
    ? [
        "Marina bağlama ücreti",
        "Transitlog",
        "Motorin",
        "Atık",
        "Yiyecek ve içecekler",
        "Son temizlik",
        "Özel harcamalar",
      ]
    : [
        "Marina mooring fee",
        "Transit log",
        "Fuel",
        "Waste",
        "Food and beverages",
        "Final cleaning",
        "Personal expenses",
      ];
        return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <style>{`
        @keyframes hisaronuHeroFloat {
          0% { transform: scale(1.05) translateY(0px); }
          50% { transform: scale(1.08) translateY(-6px); }
          100% { transform: scale(1.05) translateY(0px); }
        }

        @keyframes hisaronuGlowPulse {
          0% { opacity: 0.32; }
          50% { opacity: 0.52; }
          100% { opacity: 0.32; }
        }

        @keyframes hisaronuShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }

        @keyframes slowZoom {
          0% { transform: scale(1.05); }
          50% { transform: scale(1.12); }
          100% { transform: scale(1.05); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[560px] bg-[radial-gradient(circle_at_16%_0%,rgba(56,189,248,0.18),transparent_36%),radial-gradient(circle_at_86%_12%,rgba(59,130,246,0.12),transparent_28%)]" />
        <div className="absolute left-[-140px] top-[20%] h-[380px] w-[380px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-180px] top-[58%] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10 bg-[linear-gradient(180deg,rgba(7,17,31,0.92),rgba(7,17,31,0.98))]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-cyan-100/80">
                {content.eyebrow}
              </span>
            </div>

            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              {content.title}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {content.subtitle}
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-cyan-400/15 bg-white/5 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.2)] backdrop-blur-md">
              <div className="mb-3 flex items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,211,255,0.95)]" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                  {content.heroCardTitle}
                </span>
              </div>

              <p className="text-sm leading-7 text-slate-200 md:text-[15px]">
                {content.heroCardBody}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group inline-flex items-center justify-center rounded-full bg-cyan-300 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(34,211,238,0.22)] transition duration-300 hover:-translate-y-1"
              >
                <span>{content.ctaPrimary}</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {content.ctaSecondary}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] px-4 py-4 backdrop-blur-sm"
                >
                  <div className="text-2xl font-semibold tracking-[-0.03em] text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseMove={(e) => {
              const target = e.currentTarget;
              const rect = target.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
              const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;

              const videoLayer = target.querySelector(
                "[data-video-layer='true']"
              ) as HTMLDivElement | null;

              const cardLayer = target.querySelector(
                "[data-card-layer='true']"
              ) as HTMLDivElement | null;

              if (videoLayer) {
                videoLayer.style.transform = `translate3d(${x * 0.6}px, ${y * 0.6}px, 0) scale(1.08)`;
              }

              if (cardLayer) {
                cardLayer.style.transform = `translate3d(${x * -0.35}px, ${y * -0.35}px, 0)`;
              }
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;

              const videoLayer = target.querySelector(
                "[data-video-layer='true']"
              ) as HTMLDivElement | null;

              const cardLayer = target.querySelector(
                "[data-card-layer='true']"
              ) as HTMLDivElement | null;

              if (videoLayer) {
                videoLayer.style.transform = "translate3d(0px, 0px, 0) scale(1.05)";
              }

              if (cardLayer) {
                cardLayer.style.transform = "translate3d(0px, 0px, 0)";
              }
            }}
          >
            <div className="group relative h-[620px] overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_24px_70px_rgba(0,0,0,0.30)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(103,211,255,0.12),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_24%)]" />

              <div
                data-video-layer="true"
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{
                  transform: "translate3d(0px, 0px, 0) scale(1.05)",
                  animation: "hisaronuHeroFloat 10s ease-in-out infinite",
                  willChange: "transform",
                }}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  
                  className="h-full w-full object-cover contrast-110 brightness-[0.84] saturate-[1.05]"
                  style={{
                    transform: "scale(1.05)",
                    animation: "slowZoom 20s ease-in-out infinite",
                  }}
                >
                  <source src="/videos/hisaronu-hero.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="pointer-events-none absolute inset-0 z-[1]">
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#020617]/40 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(103,211,255,0.12),transparent_60%)]" />
              </div>

              <div
                className="pointer-events-none absolute inset-0 z-[2]"
                style={{
                  background:
                    "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.08) 46%, rgba(255,255,255,0.02) 52%, transparent 60%)",
                  animation: "hisaronuShimmer 8s linear infinite",
                }}
              />

              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24"
                style={{
                  background:
                    "radial-gradient(circle at 50% 100%, rgba(103,211,255,0.24), transparent 70%)",
                  animation: "hisaronuGlowPulse 4s ease-in-out infinite",
                }}
              />

              <div className="absolute inset-x-0 bottom-0 z-[3] p-6 md:p-7">
                <div
                  data-card-layer="true"
                  className="relative z-[2] rounded-[1.6rem] border border-white/10 bg-white/10 p-6 backdrop-blur-xl shadow-[0_40px_120px_rgba(0,0,0,0.55)] transition-transform duration-500 ease-out group-hover:shadow-[0_48px_140px_rgba(0,0,0,0.62)]"
                  style={{
                    transform: "translate3d(0px, 0px, 0)",
                    willChange: "transform",
                  }}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-[1.6rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.11),rgba(255,255,255,0.03)_28%,rgba(255,255,255,0.015)_100%)]" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/25" />
                  <div className="pointer-events-none absolute right-8 top-0 h-20 w-24 bg-cyan-300/10 blur-2xl" />

                  <div className="relative mb-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/75">
                      {isTR ? "Program Akışı" : "Program Flow"}
                    </span>

                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] font-semibold text-cyan-100/85">
                      {isTR ? "Meteorolojiye bağlı" : "Weather dependent"}
                    </span>
                  </div>

                  <div className="relative space-y-3">
                    {routeStops.slice(0, 3).map((stop, index) => (
                      <div
                        key={stop.title}
                        className="rounded-[1rem] border border-white/12 bg-[rgba(255,255,255,0.05)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:border-cyan-300/20 hover:bg-[rgba(255,255,255,0.065)]"
                      >
                        <div className="mb-2 flex items-center gap-3">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-300/12 text-[11px] font-semibold text-cyan-100 shadow-[0_0_14px_rgba(103,211,255,0.16)]">
                            {index + 1}
                          </span>

                          <h3 className="text-sm font-semibold text-white">
                            {stop.title}
                          </h3>
                        </div>

                        <p className="text-sm leading-6 text-slate-200/90">
                          {stop.body}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
            <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,17,31,0.10)_0%,rgba(7,17,31,0.28)_50%,rgba(7,17,31,0.78)_100%)]" />
            <Image
              src="/images/programs/hisarounu-marina.jpg"
              alt={isTR ? "Marina başlangıç ve alışveriş eğitimi görseli" : "Marina preparation and provisioning training image"}
              width={1400}
              height={1200}
              className="h-[560px] w-full object-cover contrast-105 brightness-[0.90]"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {content.storyEyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {content.storyTitle}
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-300">
              {content.storyBody}
            </p>

            <div className="mt-8 rounded-[1.6rem] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {content.differenceEyebrow}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                {content.differenceTitle}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-200 md:text-[15px]">
                {content.differenceBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
            {content.modulesEyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            {content.modulesTitle}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300">
            {content.modulesBody}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {moduleGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                {group.title}
              </h3>

              <div className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1rem] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {content.routeEyebrow}
              </p>

              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
                {content.routeTitle}
              </h2>

              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">
                {content.routeBody}
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/60">
                    {isTR ? "Açık Deniz Hissi" : "Open Water Feel"}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    {isTR
                      ? "Knidos ve Datça hattı; rota disiplini, açık su hissi ve karar kalitesini güçlendiren güçlü bir eğitim zemini sunar."
                      : "The Knidos and Datça line creates a strong training ground for route discipline, open-water awareness, and decision quality."}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/60">
                    {isTR ? "Demirleme ve Operasyon" : "Anchoring & Operations"}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    {isTR
                      ? "Koy, iskele ve demir sahaları; yaklaşma, ayrılma, emniyet ve ekip koordinasyonunu gerçek ortamda çalıştırır."
                      : "Bays, docks, and anchorage areas let you practice approach, departure, safety, and crew coordination in real conditions."}
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 shadow-[0_16px_50px_rgba(0,0,0,0.18)] backdrop-blur-md">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/60">
                    {isTR ? "Karar ve Liderlik" : "Decision & Leadership"}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-200">
                    {isTR
                      ? "Program boyunca amaç sadece konu öğretmek değil; denizde sorumluluk taşıyan karar refleksini büyütmektir."
                      : "The goal is not only to teach topics but to grow the decision reflex needed to carry real responsibility at sea."}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.24)]">
              <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(7,17,31,0.08)_0%,rgba(7,17,31,0.20)_44%,rgba(7,17,31,0.82)_100%)]" />
              <Image
                src="/images/programs/hisarounu-night.jpg"
                alt={isTR ? "Gece denizcilik disiplini görseli" : "Night seamanship discipline image"}
                width={1400}
                height={1400}
                className="h-[640px] w-full object-cover contrast-110 brightness-[0.82] saturate-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
            {content.costEyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            {content.costTitle}
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] border border-emerald-400/15 bg-[linear-gradient(180deg,rgba(16,185,129,0.10),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100/70">
              {content.included}
            </div>

            <div className="mt-6 space-y-3">
              {includedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-emerald-400/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-amber-400/15 bg-[linear-gradient(180deg,rgba(251,191,36,0.08),rgba(255,255,255,0.04))] p-8 shadow-[0_20px_55px_rgba(0,0,0,0.22)] backdrop-blur-md">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-100/70">
              {content.excluded}
            </div>

            <div className="mt-6 space-y-3">
              {excludedItems.map((item) => (
                <div
                  key={item}
                  className="rounded-[1rem] border border-amber-400/15 bg-white/[0.04] px-4 py-3 text-sm font-medium text-white"
                >
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-300">
              {content.splitNote}
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,#0a1830_0%,#10294b_42%,#143f67_100%)] px-8 py-12 shadow-[0_28px_70px_rgba(0,0,0,0.3)] md:px-12 md:py-14">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[-30px] top-[-30px] h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute bottom-[-40px] right-[-40px] h-52 w-52 rounded-full bg-blue-300/10 blur-3xl" />
          </div>

          <div className="relative max-w-3xl">
            <p className="text-xs uppercase tracking-[0.22em] text-white/60">
              {content.finalEyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {content.finalTitle}
            </h2>

            <p className="mt-5 text-base leading-8 text-white/75">
              {content.finalBody}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
              >
                <span>{content.ctaPrimary}</span>
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                {content.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}