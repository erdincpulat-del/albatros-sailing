"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { tr } from "@/messages/tr";
import { en } from "@/messages/en";

function NavLinks({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const { lang } = useLanguage();
  const t = useMemo(() => (lang === "tr" ? tr : en), [lang]);

  const baseClass = mobile
    ? "block rounded-xl px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
    : "text-sm font-medium text-gray-700 transition hover:text-gray-900";

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/training", label: t.nav.training },
    { href: "/programs", label: t.nav.programs },
    { href: "/registry", label: t.nav.registry },
    { href: "/verify", label: t.nav.verify },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={baseClass}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </>
  );
}

function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-1 shadow-sm">
      <button
        type="button"
        onClick={() => setLang("tr")}
        className={`rounded-xl px-3 py-2 text-xs font-semibold transition md:px-4 md:text-sm ${
          lang === "tr"
            ? "bg-gray-900 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        🇹🇷 TR
      </button>

      <button
        type="button"
        onClick={() => setLang("en")}
        className={`rounded-xl px-3 py-2 text-xs font-semibold transition md:px-4 md:text-sm ${
          lang === "en"
            ? "bg-gray-900 text-white"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
}

export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const { lang } = useLanguage();
  const t = useMemo(() => (lang === "tr" ? tr : en), [lang]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between gap-4 py-4">
            {/* LOGO */}
            <Link href="/" className="shrink-0 text-lg font-bold tracking-tight">
              Albatros Sailing
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-6 lg:flex">
              <NavLinks />
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden items-center gap-3 lg:flex">
              <LanguageSwitch />

              <Link
                href="/login"
                className="rounded-xl border px-4 py-2 text-sm font-medium"
              >
                {t.nav.admin}
              </Link>

              <Link
                href="/reserve"
                className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t.nav.reserve}
              </Link>
            </div>

            {/* MOBILE MENU */}
            <details className="relative lg:hidden">
              <summary className="flex cursor-pointer list-none items-center rounded-xl border px-3 py-2 text-sm font-medium">
                {t.nav.menu}
              </summary>

              <div className="absolute right-0 mt-3 w-72 rounded-2xl border bg-white p-3 shadow-xl">
                <div className="mb-3 flex justify-end">
                  <LanguageSwitch />
                </div>

                <nav className="space-y-1">
                  <NavLinks mobile />

                  <div className="my-3 border-t" />

                  <Link
                    href="/login"
                    className="block rounded-xl px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {t.nav.adminLogin}
                  </Link>

                  <Link
                    href="/reserve"
                    className="mt-2 block rounded-xl bg-gray-900 px-3 py-2 text-center text-sm font-medium text-white"
                  >
                    {t.nav.reserve}
                  </Link>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* PAGE CONTENT */}
      <main className="flex-1">{children}</main>

      {/* FOOTER */}
      <footer className="border-t bg-gray-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Albatros Sailing</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              {t.footer.navigationTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/training">{t.nav.training}</Link>
              </li>
              <li>
                <Link href="/programs">{t.nav.programs}</Link>
              </li>
              <li>
                <Link href="/reserve">{t.nav.reserve}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              {t.footer.certificationTitle}
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li>
                <Link href="/registry">{t.nav.registry}</Link>
              </li>
              <li>
                <Link href="/verify">{t.nav.verify}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              {t.footer.contactTitle}
            </h4>
            <p className="mt-4 text-sm text-gray-600">
              Bodrum / Türkiye
              <br />
              info@albatrossailing.com
            </p>
          </div>
        </div>

        <div className="border-t">
          <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} Albatros Sailing</p>
            <p>{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}