"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

type GuideCtaProps = {
  title?: string;
  description?: string;
};

export default function GuideCta({
  title,
  description,
}: GuideCtaProps) {
  const { lang } = useLanguage();
  const t = useMemo(() => getMessages(lang), [lang]);

  const ui =
    lang === "tr"
      ? {
          badge: "NEXT STEP",
          title:
            title || "Bu bilgiyi gerçek denizde pratiğe dönüştürmeye hazır mısınız?",
          description:
            description ||
            "Albatros Sailing programları teoriyi gerçek rota, gerçek ekip disiplini ve açık deniz karar pratiği ile birleştirir.",
          primary: "Programları İncele",
          secondary: "İletişime Geç",
        }
      : {
          badge: "NEXT STEP",
          title:
            title ||
            "Ready to turn this knowledge into real sea practice?",
          description:
            description ||
            "Albatros Sailing programs combine theory with real routes, real crew discipline and open sea decision-making.",
          primary: "Explore Programs",
          secondary: "Contact Us",
        };

  return (
    <section className="mt-16">
      <div className="rounded-[2rem] bg-gray-950 px-8 py-10 text-white md:px-10 md:py-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.22em] text-white/60">
            {ui.badge}
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            {ui.title}
          </h2>

          <p className="mt-4 text-base leading-8 text-white/75">
            {ui.description}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/programs"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:opacity-90"
          >
            {ui.primary}
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
          >
            {ui.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}