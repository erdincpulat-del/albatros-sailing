"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type TimelineItem = {
  yearTr: string;
  yearEn: string;
  titleTr: string;
  titleEn: string;
  bodyTr: string;
  bodyEn: string;
};

type PillarItem = {
  titleTr: string;
  titleEn: string;
  bodyTr: string;
  bodyEn: string;
};

type TrustItem = {
  titleTr: string;
  titleEn: string;
};

export default function AboutPage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const content = {
    eyebrowTr: "ALBATROS SAILING",
    eyebrowEn: "ALBATROS SAILING",

    heroTitleTr: "Deniz bir spor değil,",
    heroTitleEn: "The sea is not a sport,",

    heroAccentTr: "bir karakter okuludur.",
    heroAccentEn: "it is a school of character.",

    heroBodyTr:
      "Albatros Sailing yalnızca yelken öğretmek için değil; denizde doğru karar verebilen, sorumluluk alabilen ve gerçek deneyimle hareket eden kaptanlar yetiştirmek için kurulmuş bir eğitim yapısıdır.",
    heroBodyEn:
      "Albatros Sailing was built not only to teach sailing, but to train skippers who can make the right decisions at sea, take responsibility, and move with real experience.",

    heroQuoteTr:
      "Gerçek kaptanlar anlatılarak değil, denizde yetişir.",
    heroQuoteEn:
      "Real skippers are not formed by explanation, but by the sea itself.",

    instructorEyebrowTr: "EĞİTMEN / KURUCU",
    instructorEyebrowEn: "INSTRUCTOR / FOUNDER",

    instructorTitleTr: "Eğitmen değil.",
    instructorTitleEn: "Not just an instructor.",

    instructorAccentTr: "Denizde karar veren biri.",
    instructorAccentEn: "Someone who makes decisions at sea.",

    instructorBodyTr:
      "1984’te optimist ile başlayan deniz yolculuğu; yarış disiplini, askeri tecrübe, gemi operasyonları, acentecilik, gümrükleme ve resmi eğitmenlik sistemiyle birleşti. Bugün verilen her eğitim, gerçek deniz refleksi üzerine kuruludur.",
    instructorBodyEn:
      "A maritime journey that began with Optimist in 1984 evolved through racing discipline, military experience, ship operations, agency work, customs processes, and formal instructor training. Every program delivered today is built on real sea reflex.",

    authorityEyebrowTr: "RESMİ OTORİTE",
    authorityEyebrowEn: "OFFICIAL AUTHORITY",

    authorityTitleTr: "Yetki değil, kanıt.",
    authorityTitleEn: "Not a title, but proof.",

    authorityBodyTr:
      "Türkiye Yelken Federasyonu tarafından verilen YY6 Usta Eğitmen sertifikası, yalnızca teknik yeterlilik değil; sistem, sorumluluk ve resmi eğitim standardı anlamına gelir. Albatros Sailing’de verilen eğitim, sahadaki tecrübe ile bu resmi altyapının birleşimidir.",
    authorityBodyEn:
      "The YY6 Master Instructor certificate issued by the Turkish Sailing Federation represents more than technical qualification; it reflects system, responsibility, and formal training standards. Training at Albatros Sailing combines field experience with this official foundation.",

    storyEyebrowTr: "DENİZDE GEÇEN BİR HAYAT",
    storyEyebrowEn: "A LIFE SHAPED AT SEA",

    storyTitleTr: "Bugünkü yaklaşım, uzun bir yolun sonucudur.",
    storyTitleEn: "Today’s approach is the result of a long journey.",

    pillarsEyebrowTr: "EĞİTİM YAKLAŞIMI",
    pillarsEyebrowEn: "TRAINING APPROACH",

    pillarsTitleTr: "Burada amaç sertifika vermek değil,",
    pillarsTitleEn: "The goal here is not to hand out certificates,",

    pillarsAccentTr: "denizde güven oluşturmaktır.",
    pillarsAccentEn: "but to build confidence at sea.",

    pillarsBodyTr:
      "Eğitim; teori ile pratiği ayırmadan, gerçek deniz koşulları içinde karar alma refleksi kazandırmak için tasarlanır.",
    pillarsBodyEn:
      "The training is designed to build decision-making reflex in real sea conditions, without separating theory from practice.",

    finalTitleTr: "Deniz hata affetmez.",
    finalTitleEn: "The sea does not forgive mistakes.",

    finalAccentTr: "Bu yüzden burada sadece doğruyu öğrenirsin.",
    finalAccentEn: "That is why here you learn only what truly works.",

    finalBodyTr:
      "Albatros Sailing’de eğitim; denizde karar verme, ekip yönetme ve sorumluluk alma kültürü üzerine kuruludur.",
    finalBodyEn:
      "Training at Albatros Sailing is built on decision-making, team leadership, and responsibility at sea.",

    ctaPrimaryTr: "Programa Katıl",
    ctaPrimaryEn: "Join the Program",

    ctaSecondaryTr: "İletişime Geç",
    ctaSecondaryEn: "Get in Touch",

    verifyTr: "Sertifikayı Doğrula",
    verifyEn: "Verify Certificate",
  };

  const trustItems: TrustItem[] = [
    {
      titleTr: "Çocuk yaşta başlayan yarış geçmişi",
      titleEn: "A racing background that started in childhood",
    },
    {
      titleTr: "Operasyonel denizcilik tecrübesi",
      titleEn: "Operational maritime experience",
    },
    {
      titleTr: "TYF YY6 Usta Eğitmen seviyesi",
      titleEn: "TYF YY6 Master Instructor level",
    },
  ];

  const timeline: TimelineItem[] = [
    {
      yearTr: "1984",
      yearEn: "1984",
      titleTr: "Optimist ile başlangıç",
      titleEn: "Beginning with Optimist",
      bodyTr:
        "İGSAŞ Yelken / Yarımca Yelken bünyesinde denizle tanışma ve yarış disiplinine ilk adım.",
      bodyEn:
        "First contact with the sea and the beginning of racing discipline at İGSAŞ Sailing / Yarımca Sailing.",
    },
    {
      yearTr: "Yarış Yılları",
      yearEn: "Racing Years",
      titleTr: "Derece, federasyon ve şampiyonalar",
      titleEn: "Rankings, federation, and championships",
      bodyTr:
        "Türkiye şampiyonalarına katılabilmek için her yıl derece kovalayan, disiplinle şekillenen yarış dönemi.",
      bodyEn:
        "A racing period shaped by discipline, chasing rankings every year in order to compete in Turkish championships.",
    },
    {
      yearTr: "1996",
      yearEn: "1996",
      titleTr: "Tuzla Deniz Harp Okulu süreci",
      titleEn: "Tuzla Naval Academy period",
      bodyTr:
        "Seçkin sporcular arasında askeri disiplinle geçen, denize bakışı sertleştiren dönem.",
      bodyEn:
        "A period among selected athletes, shaped by military discipline and a tougher perspective on the sea.",
    },
    {
      yearTr: "Sonraki Dönem",
      yearEn: "Later Years",
      titleTr: "Gemi operasyonları ve denizcilik işleri",
      titleEn: "Ship operations and maritime work",
      bodyTr:
        "Gemi bakım-onarım, gemi acenteciliği, gümrükleme ve operasyon süreçleriyle geçen yoğun profesyonel dönem.",
      bodyEn:
        "An intensive professional period involving ship maintenance, ship agency work, customs procedures, and operations.",
    },
    {
      yearTr: "Pirat Sınıfı",
      yearEn: "Pirat Class",
      titleTr: "Temsil hakkı ve yeni seviye",
      titleEn: "Representation and a new level",
      bodyTr:
        "Pirat sınıfı ile tanışma, kısa sürede yükseliş ve Türkiye’de düzenlenen şampiyonada temsil hakkı.",
      bodyEn:
        "Introduction to the Pirat class, rapid progress, and the right to represent in a championship held in Turkey.",
    },
    {
      yearTr: "YY6 Süreci",
      yearEn: "YY6 Process",
      titleTr: "Zorlu eğitmenlik hattı",
      titleEn: "The demanding instructor path",
      bodyTr:
        "Sabine Dedeoğlu ve Deniz Karamanoğlu ile geçen disiplinli eğitim hattı sonunda YY6 seviyesine ulaşım.",
      bodyEn:
        "Reaching YY6 level after a disciplined training path with Sabine Dedeoğlu and Deniz Karamanoğlu.",
    },
  ];

  const pillars: PillarItem[] = [
    {
      titleTr: "Gerçek deniz koşulları",
      titleEn: "Real sea conditions",
      bodyTr:
        "Anlatımdan çok, gerçek senaryo içinde öğrenme yaklaşımı uygulanır.",
      bodyEn:
        "Learning happens inside real scenarios rather than only through explanation.",
    },
    {
      titleTr: "Karar alma refleksi",
      titleEn: "Decision-making reflex",
      bodyTr:
        "Amaç sadece bilgi vermek değil, doğru anda doğru kararı verebilmeyi öğretmektir.",
      bodyEn:
        "The aim is not only to provide knowledge, but to build the ability to make the right decision at the right time.",
    },
    {
      titleTr: "Ekip ve sorumluluk disiplini",
      titleEn: "Team and responsibility discipline",
      bodyTr:
        "Kaptanlık bireysel değil; ekip yönetimi ve sorumluluk zinciriyle birlikte ele alınır.",
      bodyEn:
        "Skippering is not treated as individual ability alone, but together with team management and responsibility structure.",
    },
    {
      titleTr: "Resmi ve operasyonel altyapı",
      titleEn: "Official and operational foundation",
      bodyTr:
        "Sahadaki deneyim, resmi eğitim sistemi ve gerçek operasyon bilgisiyle birleşir.",
      bodyEn:
        "Field experience is combined with formal training systems and real operational knowledge.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-[#07111f] text-white">
      <style>{`
        @keyframes aboutSlowZoom {
          0% { transform: scale(1.02); }
          50% { transform: scale(1.07); }
          100% { transform: scale(1.02); }
        }

        @keyframes aboutFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes aboutShimmer {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(120%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-[580px] bg-[radial-gradient(circle_at_15%_0%,rgba(56,189,248,0.16),transparent_34%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.10),transparent_24%)]" />
        <div className="absolute left-[-120px] top-[18%] h-[320px] w-[320px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute right-[-160px] top-[40%] h-[420px] w-[420px] rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      <section className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div
              className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-300/10 px-4 py-2 backdrop-blur-md"
              style={{ animation: "aboutFadeUp 0.7s ease forwards" }}
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                {isTR ? content.eyebrowTr : content.eyebrowEn}
              </span>
            </div>

            <h1
              className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white md:text-7xl"
              style={{ animation: "aboutFadeUp 0.9s ease forwards" }}
            >
              {isTR ? content.heroTitleTr : content.heroTitleEn}
              <span className="block text-cyan-300">
                {isTR ? content.heroAccentTr : content.heroAccentEn}
              </span>
            </h1>

            <p
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
              style={{ animation: "aboutFadeUp 1.05s ease forwards" }}
            >
              {isTR ? content.heroBodyTr : content.heroBodyEn}
            </p>

            <div
              className="mt-8 max-w-2xl rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md"
              style={{ animation: "aboutFadeUp 1.15s ease forwards" }}
            >
              <p className="text-base font-medium leading-7 text-white/90 md:text-lg">
                {isTR ? content.heroQuoteTr : content.heroQuoteEn}
              </p>
            </div>
          </div>

          <div
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_28px_80px_rgba(0,0,0,0.34)]"
            style={{ animation: "aboutFadeUp 1s ease forwards" }}
          >
            <Image
              src="/images/about/instructor-erdinc-bw.jpg"
              alt={
                isTR
                  ? "Erdinç Pulat siyah beyaz denizci portresi"
                  : "Black and white portrait of Erdinç Pulat"
              }
              width={1400}
              height={1800}
              className="h-[680px] w-full object-cover"
              priority
              style={{
                animation: "aboutSlowZoom 18s ease-in-out infinite",
                transformOrigin: "center center",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.10),rgba(2,6,23,0.82))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.10),transparent_36%)]" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.08) 46%, rgba(255,255,255,0.02) 52%, transparent 60%)",
                animation: "aboutShimmer 9s linear infinite",
              }}
            />
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] shadow-[0_28px_80px_rgba(0,0,0,0.26)]"
            style={{ animation: "aboutFadeUp 0.9s ease forwards" }}
          >
            <Image
              src="/images/about/instructor-erdinc-bw.jpg"
              alt={isTR ? "Eğitmen portresi" : "Instructor portrait"}
              width={1200}
              height={1600}
              className="h-[620px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08),rgba(2,6,23,0.78))]" />
          </div>

          <div style={{ animation: "aboutFadeUp 1s ease forwards" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {isTR ? content.instructorEyebrowTr : content.instructorEyebrowEn}
            </p>

            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-white md:text-6xl">
              {isTR ? content.instructorTitleTr : content.instructorTitleEn}
              <span className="block text-cyan-300">
                {isTR ? content.instructorAccentTr : content.instructorAccentEn}
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {isTR ? content.instructorBodyTr : content.instructorBodyEn}
            </p>

            <div className="mt-8 grid gap-4">
              {trustItems.map((item, index) => (
                <div
                  key={item.titleTr}
                  className="group relative overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition duration-300 hover:-translate-y-[4px] hover:border-cyan-300/25"
                  style={{
                    boxShadow:
                      "0 18px 40px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
                    animation: "aboutFadeUp 1s ease forwards",
                    animationDelay: `${index * 0.08}s`,
                  }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
                  <div
                    className="pointer-events-none absolute left-5 top-3 h-12 w-16 rounded-full blur-2xl"
                    style={{ background: "rgba(103,211,255,0.14)" }}
                  />
                  <div className="relative z-[2] text-[16px] font-semibold leading-7 text-white">
                    {isTR ? item.titleTr : item.titleEn}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:py-24 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.24)] backdrop-blur-md"
            style={{ animation: "aboutFadeUp 0.95s ease forwards" }}
          >
            <Image
              src="/images/about/yy6-certificate.jpg"
              alt={
                isTR
                  ? "YY6 Usta Eğitmen Sertifikası"
                  : "YY6 Master Instructor Certificate"
              }
              width={1600}
              height={1200}
              className="h-auto w-full rounded-[1.4rem] object-cover"
            />
          </div>

          <div style={{ animation: "aboutFadeUp 1.05s ease forwards" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {isTR ? content.authorityEyebrowTr : content.authorityEyebrowEn}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isTR ? content.authorityTitleTr : content.authorityTitleEn}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
              {isTR ? content.authorityBodyTr : content.authorityBodyEn}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #67e8f9, #22d3ee)",
                  boxShadow:
                    "0 12px 30px rgba(34,211,238,0.22), 0 0 0 1px rgba(255,255,255,0.10) inset",
                }}
              >
                <span
                  className="pointer-events-none absolute left-1/2 top-[70%] h-[34px] w-[72%] -translate-x-1/2 rounded-full blur-2xl"
                  style={{ background: "rgba(103,232,249,0.55)" }}
                />
                <span className="relative z-[2]">
                  {isTR ? content.ctaPrimaryTr : content.ctaPrimaryEn}
                </span>
              </Link>

              <Link
                href="/verify"
                className="group relative inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
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

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
            {isTR ? content.storyEyebrowTr : content.storyEyebrowEn}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
            {isTR ? content.storyTitleTr : content.storyTitleEn}
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {timeline.map((item, index) => (
            <div
              key={`${item.yearTr}-${item.titleTr}`}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-[6px] hover:border-cyan-300/20"
              style={{
                boxShadow:
                  "0 18px 44px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
                animation: "aboutFadeUp 1s ease forwards",
                animationDelay: `${index * 0.06}s`,
              }}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
              <div
                className="pointer-events-none absolute left-6 top-4 h-14 w-16 rounded-full blur-2xl"
                style={{ background: "rgba(103,211,255,0.12)" }}
              />

              <div className="relative z-[2]">
                <div className="text-[12px] font-semibold uppercase tracking-[0.20em] text-cyan-100/65">
                  {isTR ? item.yearTr : item.yearEn}
                </div>

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-white">
                  {isTR ? item.titleTr : item.titleEn}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-[15px]">
                  {isTR ? item.bodyTr : item.bodyEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
              {isTR ? content.pillarsEyebrowTr : content.pillarsEyebrowEn}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-5xl">
              {isTR ? content.pillarsTitleTr : content.pillarsTitleEn}
              <span className="block text-cyan-300">
                {isTR ? content.pillarsAccentTr : content.pillarsAccentEn}
              </span>
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              {isTR ? content.pillarsBodyTr : content.pillarsBodyEn}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {pillars.map((pillar) => (
              <div
                key={pillar.titleTr}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-300/20 hover:bg-white/[0.05]"
              >
                <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                  {isTR ? pillar.titleTr : pillar.titleEn}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-300 md:text-[15px]">
                  {isTR ? pillar.bodyTr : pillar.bodyEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-[linear-gradient(135deg,#0a1830_0%,#10294b_42%,#143f67_100%)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.24)] md:p-10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top right, rgba(103,211,255,0.14), transparent 34%)",
            }}
          />

          <div className="relative z-[2] max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              {isTR ? content.finalTitleTr : content.finalTitleEn}
              <span className="block text-cyan-300">
                {isTR ? content.finalAccentTr : content.finalAccentEn}
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/80 md:text-lg">
              {isTR ? content.finalBodyTr : content.finalBodyEn}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/reserve"
                className="group relative inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-1"
                style={{
                  background: "linear-gradient(180deg, #67e8f9, #22d3ee)",
                  boxShadow:
                    "0 12px 30px rgba(34,211,238,0.22), 0 0 0 1px rgba(255,255,255,0.10) inset",
                }}
              >
                <span
                  className="pointer-events-none absolute left-1/2 top-[70%] h-[34px] w-[72%] -translate-x-1/2 rounded-full blur-2xl"
                  style={{ background: "rgba(103,232,249,0.55)" }}
                />
                <span className="relative z-[2]">
                  {isTR ? content.ctaPrimaryTr : content.ctaPrimaryEn}
                </span>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  boxShadow:
                    "0 10px 24px rgba(0,0,0,0.18), 0 0 0 1px rgba(255,255,255,0.04) inset",
                }}
              >
                <span className="relative z-[2]">
                  {isTR ? content.ctaSecondaryTr : content.ctaSecondaryEn}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}