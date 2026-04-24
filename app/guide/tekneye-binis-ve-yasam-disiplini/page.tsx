"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

type Card = {
  titleTr: string;
  titleEn: string;
  textTr: string;
  textEn: string;
};

export default function OnboardDisciplinePage() {
  const { locale } = useLanguage();
  const isTR = locale === "tr";

  const page = {
    badgeTr: "ALBATROS SAILING • TEKNE YAŞAM DİSİPLİNİ",
    badgeEn: "ALBATROS SAILING • ONBOARD DISCIPLINE",

    hero1Tr: "Tekneye çıkmak kolaydır,",
    hero1En: "Getting onboard is easy,",

    hero2Tr: "orada doğru yaşamak fark yaratır.",
    hero2En: "living correctly onboard makes the difference.",

    heroTextTr:
      "Denizcilik yalnızca rota ve rüzgar değildir. Tekne üzerindeki düzen, davranış ve disiplin; güvenliği, konforu ve ekip uyumunu doğrudan belirler.",
    heroTextEn:
      "Seamanship is not only about routes and wind. Order, behavior, and discipline onboard directly define safety, comfort, and crew harmony.",

    sectionTitleTr: "Tekne yaşamı nasıl düşünülmeli?",
    sectionTitleEn: "How should onboard life be approached?",

    sectionTextTr:
      "Tekne üzerinde herkesin alanı sınırlıdır. Bu yüzden düzen, saygı ve farkındalık olmadan konfor sürdürülemez. Bu modül, tekne yaşamını bireysel değil, sistem olarak öğretir.",
    sectionTextEn:
      "Space onboard is limited. Without order, respect, and awareness, comfort cannot be sustained. This module teaches onboard life as a system, not as individual behavior.",

    ctaTitleTr: "Gerçek denizcilik, küçük davranışlarda görünür.",
    ctaTitleEn: "Real seamanship shows in small behaviors.",

    ctaTextTr:
      "Bu modül, kullanıcıya sadece tekneye çıkmayı değil; o ortamda doğru yaşamayı öğretir.",
    ctaTextEn:
      "This module teaches not only how to step onboard, but how to live correctly in that environment.",

    ctaPrimaryTr: "Modüllere Dön",
    ctaPrimaryEn: "Back to Modules",

    ctaSecondaryTr: "Programları Gör",
    ctaSecondaryEn: "View Programs",
  };

  const cards: Card[] = [
    {
      titleTr: "Alan disiplini",
      titleEn: "Space discipline",
      textTr:
        "Teknede alan sınırlıdır. Eşyaların, hareketin ve kullanımın kontrollü olması gerekir.",
      textEn:
        "Space is limited onboard. Movement, belongings, and usage must be controlled.",
    },
    {
      titleTr: "Sessizlik ve farkındalık",
      titleEn: "Silence & awareness",
      textTr:
        "Gece saatleri, dinlenme düzeni ve diğer ekip üyeleri dikkate alınmalıdır.",
      textEn:
        "Night hours, rest cycles, and other crew members must be respected.",
    },
    {
      titleTr: "Temizlik düzeni",
      titleEn: "Cleanliness system",
      textTr:
        "Tekne düzeni bireysel değil, kolektif sorumluluktur.",
      textEn:
        "Cleanliness onboard is a shared responsibility, not individual.",
    },
    {
      titleTr: "Güvenli hareket",
      titleEn: "Safe movement",
      textTr:
        "Tekne sabit değildir. Her hareket kontrollü yapılmalıdır.",
      textEn:
        "The vessel is not stable. Every movement must be controlled.",
    },
    {
      titleTr: "Ekip uyumu",
      titleEn: "Crew harmony",
      textTr:
        "İyi ekip, sessiz çalışan ekip demektir. Gereksiz konuşma değil, doğru iletişim önemlidir.",
      textEn:
        "A good crew works quietly. Not noise, but clear communication matters.",
    },
    {
      titleTr: "Sorumluluk bilinci",
      titleEn: "Responsibility awareness",
      textTr:
        "Teknede herkes sistemin bir parçasıdır. Sorumluluk paylaşılır.",
      textEn:
        "Everyone onboard is part of the system. Responsibility is shared.",
    },
  ];

  return (
    <main className="relative bg-[#07111f] text-white overflow-hidden">

      {/* HERO */}
      <section className="relative border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-10 items-center">

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-cyan-300">
              {isTR ? page.badgeTr : page.badgeEn}
            </div>

            <h1 className="mt-6 text-5xl md:text-7xl font-semibold">
              {isTR ? page.hero1Tr : page.hero1En}
              <span className="block text-cyan-300">
                {isTR ? page.hero2Tr : page.hero2En}
              </span>
            </h1>

            <p className="mt-6 text-slate-300 leading-8">
              {isTR ? page.heroTextTr : page.heroTextEn}
            </p>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden shadow-xl group"
              style={{ aspectRatio: "4/5" }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/images/guide/onboard-life.jpg')",
                }}
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          </div>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <h2 className="text-3xl font-semibold">
          {isTR ? page.sectionTitleTr : page.sectionTitleEn}
        </h2>

        <p className="mt-4 text-slate-300 max-w-3xl leading-8">
          {isTR ? page.sectionTextTr : page.sectionTextEn}
        </p>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div
              key={c.titleTr}
              className="bg-white/5 border border-white/10 p-6 rounded-xl hover:-translate-y-1 transition"
            >
              <h3 className="text-xl font-semibold">
                {isTR ? c.titleTr : c.titleEn}
              </h3>

              <p className="mt-3 text-sm text-slate-300 leading-7">
                {isTR ? c.textTr : c.textEn}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-semibold">
            {isTR ? page.ctaTitleTr : page.ctaTitleEn}
          </h2>

          <p className="mt-4 text-slate-300">
            {isTR ? page.ctaTextTr : page.ctaTextEn}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="/guide" className="bg-white text-black px-6 py-3 rounded-full">
              {isTR ? page.ctaPrimaryTr : page.ctaPrimaryEn}
            </Link>

            <Link href="/programs" className="border px-6 py-3 rounded-full">
              {isTR ? page.ctaSecondaryTr : page.ctaSecondaryEn}
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}