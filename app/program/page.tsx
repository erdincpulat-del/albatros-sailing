"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

export default function ProgramsPage() {
  const { locale } = useLanguage();
  const t = useMemo(() => getMessages(locale), [locale]);

  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-black/5 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              {locale === "tr" ? "Programlar" : "Programs"}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
              {locale === "tr"
                ? "Hedefinize uygun eğitim rotasını seçin."
                : "Choose the training route that fits your goal."}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
              {locale === "tr"
                ? "Her program, denizde daha fazla güven, daha fazla yetkinlik ve daha güçlü bir profesyonel duruş kazandırmak için tasarlanmıştır."
                : "Each program is designed to build greater confidence, stronger competence, and a more professional presence at sea."}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.programs.map((program) => (
            <div
              key={program.title}
              className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                {t.programCardBadge}
              </div>

              <h2 className="mt-3 text-xl font-semibold text-gray-950">
                {program.title}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600">
                {program.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={program.href}
                  className="inline-flex items-center justify-center rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  {t.viewDetails}
                </Link>

                <Link
                  href="/reserve"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  {locale === "tr" ? "Rezervasyon" : "Reserve"}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-black/5 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  {locale === "tr" ? "Doğru Programı Seçin" : "Choose the Right Path"}
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950 md:text-4xl">
                  {locale === "tr"
                    ? "Hangi programın sizin için doğru olduğundan emin değil misiniz?"
                    : "Not sure which program is right for you?"}
                </h2>

                <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
                  {locale === "tr"
                    ? "Ekibimizle iletişime geçin. Seviyenize, hedefinize ve deniz tecrübenize göre size en uygun eğitim rotasını birlikte belirleyelim."
                    : "Contact our team. Based on your level, goals, and sea experience, we can help you choose the most suitable training path."}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  {locale === "tr" ? "İletişime Geç" : "Contact Us"}
                </Link>

                <Link
                  href="/training"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  {locale === "tr" ? "Eğitim Sayfası" : "Training Page"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}