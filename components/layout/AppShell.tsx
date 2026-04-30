"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

type NavChild = {
  href: string;
  label: string;
  description?: string;
  highlight?: boolean;
};

type NavItem =
  | {
      href: string;
      label: string;
    }
  | {
      label: string;
      children: NavChild[];
    };

function DesktopNavLinks() {
  const { locale } = useLanguage();
  const t = useMemo(() => getMessages(locale), [locale]);

  const navItems: NavItem[] = [
    { href: "/", label: t.nav.home },

    {
      label: "Akademi",
      children: [
        { href: "/about", label: "Biz Kimiz" },
        { href: "/guide/navigasyon", label: "Navigasyon" },
        { href: "/guide/sextant", label: "Sextant" },
        { href: "/guide/paper-chart-navigation", label: "Kağıt Harita" },
        {
          href: "/stcw-quiz",
          label: "STCW Quiz",
          description: "Profesyonel sınav simülasyonu",
          highlight: true,
        },
        { href: "/contact", label: "İletişim" },
      ],
    },

    {
      label: t.nav.training,
      children: [
        { href: "/training", label: t.nav.training },
        { href: "/guide/colreg", label: "COLREG" },
        { href: "/guide/ais-ve-vts-nedir", label: "AIS / VTS" },
        {
          href: "/stcw-quiz",
          label: "STCW Quiz",
          description: "Yangın, can kurtarma ve gemici sınav modülü",
          highlight: true,
        },
        { href: "/guide/gece-seyri-fenerleri", label: "Gece Seyri Fenerleri" },
        { href: "/guide/denizde-meteoroloji", label: "Denizde Meteoroloji" },
        { href: "/guide/guvenlik", label: "Güvenlik" },
      ],
    },

    {
      label: t.nav.programs,
      children: [
        { href: "/programs", label: "Tüm Programlar" },
        { href: "/programs/basic-sailing", label: "Başlangıç Yelken Eğitimi" },
        { href: "/programs/coastal-skipper", label: "Coastal Skipper" },
        { href: "/programs/offshore-skipper", label: "Offshore Skipper" },
        {
          href: "/programs/offshore-yacht-course",
          label: "Yunan Adaları Açık Deniz Eğitimi",
        },
        {
          href: "/programs/hisaronu-gulf-training",
          label: "Hisarönü Körfezi Eğitimi",
        },
      ],
    },

    { href: "/charter", label: t.nav.charter },
    { href: "/registry", label: t.nav.registry },
    { href: "/verify", label: t.nav.verify },
    { href: "/contact", label: t.nav.contact },
  ];

  const linkClass =
    "group relative px-3 py-2 text-sm font-semibold text-white/70 transition duration-200 hover:text-[#67d3ff]";

  return (
    <>
      {navItems.map((item) => {
        if ("children" in item) {
          return (
            <div key={item.label} className="relative group">
              <button
                type="button"
                className={`${linkClass} inline-flex items-center gap-2 whitespace-nowrap`}
              >
                <span className="relative">
                  {item.label}
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#67d3ff] transition-all duration-300 group-hover:w-full" />
                </span>

                <svg
                  className="h-3 w-3 text-white/50 transition duration-300 group-hover:rotate-180 group-hover:text-[#67d3ff]"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 translate-y-2 rounded-3xl border border-white/10 bg-[#06111c]/95 p-3 opacity-0 shadow-2xl backdrop-blur-xl transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                <div className="absolute left-8 top-0 h-3 w-3 -translate-y-1/2 rotate-45 border-l border-t border-white/10 bg-[#06111c]/95" />

                <div className="space-y-1 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`group/item block rounded-2xl px-4 py-3 text-sm transition ${
                        sub.highlight
                          ? "border border-[#67d3ff]/25 bg-[#67d3ff]/10 text-white shadow-[0_0_24px_rgba(103,211,255,0.12)] hover:border-[#67d3ff]/45 hover:bg-[#67d3ff]/15"
                          : "font-medium text-white/80 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2">
                            {sub.highlight && (
                              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#67d3ff]/15 text-[13px] text-[#67d3ff] ring-1 ring-[#67d3ff]/25">
                                ⚓
                              </span>
                            )}

                            <span
                              className={`font-semibold ${
                                sub.highlight ? "text-[#67d3ff]" : "text-white/85"
                              }`}
                            >
                              {sub.label}
                            </span>

                            {sub.highlight && (
                              <span className="rounded-full border border-[#67d3ff]/25 bg-[#67d3ff]/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#67d3ff]">
                                Yeni
                              </span>
                            )}
                          </div>

                          {sub.description && (
                            <p className="mt-1 pl-9 text-xs leading-5 text-white/55">
                              {sub.description}
                            </p>
                          )}
                        </div>

                        {sub.highlight && (
                          <span className="mt-1 text-[#67d3ff]/80 transition group-hover/item:translate-x-1">
                            →
                          </span>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          );
        }

        return (
          <Link key={item.href} href={item.href} className={linkClass}>
            <span className="relative group whitespace-nowrap">
              {item.label}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#67d3ff] transition-all duration-300 group-hover:w-full" />
            </span>
          </Link>
        );
      })}
    </>
  );
}

function MobileNavLinks() {
  const { locale } = useLanguage();
  const t = useMemo(() => getMessages(locale), [locale]);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { href: "/", label: t.nav.home },

    {
      label: "Akademi",
      children: [
        { href: "/about", label: "Biz Kimiz" },
        { href: "/guide/navigasyon", label: "Navigasyon" },
        { href: "/guide/sextant", label: "Sextant" },
        { href: "/guide/paper-chart-navigation", label: "Kağıt Harita" },
        {
          href: "/stcw-quiz",
          label: "STCW Quiz",
          description: "Profesyonel sınav simülasyonu",
          highlight: true,
        },
        { href: "/contact", label: "İletişim" },
      ],
    },

    {
      label: t.nav.training,
      children: [
        { href: "/training", label: t.nav.training },
        { href: "/guide/colreg", label: "COLREG" },
        { href: "/guide/ais-ve-vts-nedir", label: "AIS / VTS" },
        {
          href: "/stcw-quiz",
          label: "STCW Quiz",
          description: "Yangın, can kurtarma ve gemici sınav modülü",
          highlight: true,
        },
        { href: "/guide/gece-seyri-fenerleri", label: "Gece Seyri Fenerleri" },
        { href: "/guide/denizde-meteoroloji", label: "Denizde Meteoroloji" },
        { href: "/guide/guvenlik", label: "Güvenlik" },
      ],
    },

    {
      label: t.nav.programs,
      children: [
        { href: "/programs", label: "Tüm Programlar" },
        { href: "/programs/basic-sailing", label: "Başlangıç Yelken Eğitimi" },
        { href: "/programs/coastal-skipper", label: "Coastal Skipper" },
        { href: "/programs/offshore-skipper", label: "Offshore Skipper" },
      ],
    },

    { href: "/charter", label: t.nav.charter },
    { href: "/registry", label: t.nav.registry },
    { href: "/verify", label: t.nav.verify },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <div className="space-y-1">
      {navItems.map((item) => {
        if ("children" in item) {
          const isOpen = openGroup === item.label;

          return (
            <div
              key={item.label}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenGroup((prev) => (prev === item.label ? null : item.label))
                }
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-white/80 transition hover:bg-white/5 hover:text-white"
              >
                <span>{item.label}</span>

                <svg
                  className={`h-4 w-4 text-white/50 transition duration-300 ${
                    isOpen ? "rotate-180 text-[#67d3ff]" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.51a.75.75 0 01-1.08 0l-4.25-4.51a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="space-y-1 border-t border-white/10 px-2 py-2">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block rounded-xl px-3 py-2 text-sm transition ${
                        sub.highlight
                          ? "border border-[#67d3ff]/25 bg-[#67d3ff]/10 text-[#67d3ff]"
                          : "text-white/65 hover:bg-white/5 hover:text-[#67d3ff]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-semibold">{sub.label}</span>

                        {sub.highlight && (
                          <span className="rounded-full border border-[#67d3ff]/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.12em]">
                            Yeni
                          </span>
                        )}
                      </div>

                      {sub.description && (
                        <p className="mt-1 text-xs leading-5 text-white/55">
                          {sub.description}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="inline-flex items-center rounded-full border border-white/10 bg-black/40 p-1 shadow-sm backdrop-blur">
      <button
        type="button"
        onClick={() => setLocale("tr")}
        className={`rounded-full px-3 py-2 text-[11px] font-semibold tracking-[0.08em] transition md:px-4 md:text-xs ${
          locale === "tr"
            ? "bg-white text-black shadow-sm"
            : "text-gray-300 hover:text-white"
        }`}
      >
        TR
      </button>

      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`rounded-full px-3 py-2 text-[11px] font-semibold tracking-[0.08em] transition md:px-4 md:text-xs ${
          locale === "en"
            ? "bg-white text-black shadow-sm"
            : "text-gray-300 hover:text-white"
        }`}
      >
        EN
      </button>
    </div>
  );
}

function Header() {
  const { locale } = useLanguage();
  const t = useMemo(() => getMessages(locale), [locale]);

  return (
    <>
      <style>{`
        @keyframes albatrosGlowMove {
          0%   { transform: translateX(-40%) scaleX(1); opacity: 0.6; }
          50%  { transform: translateX(40%) scaleX(1.05); opacity: 1; }
          100% { transform: translateX(-40%) scaleX(1); opacity: 0.6; }
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#020617]/70">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex items-center justify-between gap-6">
            <Link href="/" className="shrink-0">
              <div className="relative flex flex-col leading-none group">
                <div
                  className="pointer-events-none absolute left-0 right-0 top-[calc(100%-2px)] h-[6px]"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(103,211,255,0.88) 50%, transparent 100%)",
                    filter: "blur(4px)",
                    opacity: 0.82,
                    zIndex: 1,
                    boxShadow: "0 0 18px rgba(103,211,255,0.45)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    bottom: -2,
                    left: "-30%",
                    width: "160%",
                    height: "14px",
                    background:
                      "linear-gradient(90deg, transparent, rgba(103,211,255,0.95), transparent)",
                    filter: "blur(10px)",
                    opacity: 0.9,
                    pointerEvents: "none",
                    zIndex: 2,
                    animation: "albatrosGlowMove 4s ease-in-out infinite",
                    transition: "opacity 0.25s ease, filter 0.25s ease",
                  }}
                />

                <span
                  className="text-[13px] font-semibold uppercase tracking-[0.32em] text-white"
                  style={{
                    position: "relative",
                    zIndex: 3,
                    textShadow: "0 0 8px rgba(255,255,255,0.05)",
                  }}
                >
                  ALBATROS SAILING
                </span>

                <span
                  className="mt-1 text-[18px] font-semibold tracking-[-0.02em] text-white"
                  style={{
                    position: "relative",
                    zIndex: 3,
                    textShadow: "0 0 10px rgba(255,255,255,0.04)",
                  }}
                >
                  Premium Sailing Academy
                </span>
              </div>
            </Link>

            <nav className="hidden items-center lg:flex">
              <div className="flex items-center gap-6 whitespace-nowrap">
                <DesktopNavLinks />
              </div>
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitch />

              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm font-medium text-gray-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                {t.nav.admin}
              </Link>

              <Link
                href="/reserve"
                className="inline-flex items-center justify-center rounded-full bg-[#67d3ff] px-5 py-2.5 text-sm font-semibold text-[#04121c] shadow-[0_10px_30px_rgba(14,165,233,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(14,165,233,0.28)]"
              >
                {t.nav.reserve}
              </Link>
            </div>

            <details className="relative lg:hidden">
              <summary className="flex cursor-pointer list-none items-center rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm font-medium text-gray-300 shadow-sm">
                {t.nav.menu}
              </summary>

              <div className="absolute right-0 mt-3 w-80 rounded-3xl border border-white/10 bg-[#06111c]/95 p-4 shadow-2xl backdrop-blur">
                <div className="mb-4 flex justify-end">
                  <LanguageSwitch />
                </div>

                <nav className="space-y-1">
                  <MobileNavLinks />

                  <div className="my-4 border-t border-white/10" />

                  <Link
                    href="/login"
                    className="block rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                  >
                    {t.nav.adminLogin}
                  </Link>

                  <Link
                    href="/reserve"
                    className="mt-3 block rounded-xl bg-[#67d3ff] px-4 py-3 text-center text-sm font-semibold text-[#04121c]"
                  >
                    {t.nav.reserve}
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}

function Footer() {
  const { locale } = useLanguage();
  const t = useMemo(() => getMessages(locale), [locale]);

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#06111c] text-white">
      <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/45">
            Albatros Sailing
          </div>
          <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
            Premium Sailing Academy
          </h3>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">
            {t.footer.description}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            {t.footer.navigationTitle}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              <Link href="/training" className="transition hover:text-[#67d3ff]">
                {t.nav.training}
              </Link>
            </li>
            <li>
              <Link href="/programs" className="transition hover:text-[#67d3ff]">
                {t.nav.programs}
              </Link>
            </li>
            <li>
              <Link href="/stcw-quiz" className="transition hover:text-[#67d3ff]">
                STCW Quiz
              </Link>
            </li>
            <li>
              <Link href="/charter" className="transition hover:text-[#67d3ff]">
                {t.nav.charter}
              </Link>
            </li>
            <li>
              <Link href="/reserve" className="transition hover:text-[#67d3ff]">
                {t.nav.reserve}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            {t.footer.certificationTitle}
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li>
              <Link href="/registry" className="transition hover:text-[#67d3ff]">
                {t.nav.registry}
              </Link>
            </li>
            <li>
              <Link href="/verify" className="transition hover:text-[#67d3ff]">
                {t.nav.verify}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
            {t.footer.contactTitle}
          </h4>
          <p className="mt-4 text-sm leading-7 text-white/60">
            Bodrum / Türkiye
            <br />
            info@albatrossailing.com
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-white/40 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Albatros Sailing</p>
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0b1a2b] text-white">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}