"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function VerifyPage() {
  const lang = "tr";

  const [certificateId, setCertificateId] = useState("");

  const normalizedCertificateId = certificateId.trim().toUpperCase();

  const verifyHref = normalizedCertificateId
    ? `/verify/${encodeURIComponent(normalizedCertificateId)}`
    : "#";

  const ui = {
    badge:
      lang === "tr"
        ? "ALBATROS SAILING · RESMİ DOĞRULAMA PORTALI"
        : "ALBATROS SAILING · OFFICIAL VERIFICATION PORTAL",

    title:
      lang === "tr"
        ? "Sertifika doğrulamasını anında yapın."
        : "Verify certificate authenticity instantly.",

    description:
      lang === "tr"
        ? "Sertifika kodunu girerek resmi doğrulama ekranına ilerleyin. Bu portal, kayıt destekli belge yapısını görünür hale getirir ve Albatros Sailing eğitim sisteminin kurumsal güven katmanını güçlendirir."
        : "Enter the certificate code to continue to the official verification screen. This portal makes the registry-backed document structure visible and strengthens the institutional trust layer of the Albatros Sailing training system.",

    trustLine:
      lang === "tr"
        ? [
            "Resmi kayıt desteği",
            "Hızlı doğrulama",
            "Kurumsal güven yapısı",
          ]
        : [
            "Official registry support",
            "Fast verification",
            "Institutional trust structure",
          ],

    entryBadge: lang === "tr" ? "Doğrulama Girişi" : "Verification Entry",
    entryTitle:
      lang === "tr"
        ? "Sertifika ID / Kayıt Kodu"
        : "Certificate ID / Registry Code",
    entryDescription:
      lang === "tr"
        ? "Kart üzerinde bulunan sertifika kodunu veya resmi kayıt numarasını girin."
        : "Enter the certificate code shown on the card or the official registry number.",
    inputLabel: lang === "tr" ? "Sertifika Kodu" : "Certificate Code",
    inputPlaceholder:
      lang === "tr" ? "Örn: AS-OFF-2026-0001" : "Ex: AS-OFF-2026-0001",
    verifyButton:
      lang === "tr" ? "Doğrulamaya Git" : "Go to Verification",
    registryButton:
      lang === "tr" ? "Kayıt Sistemini Aç" : "Open Registry",
    inputWarning:
      lang === "tr"
        ? "Lütfen geçerli bir sertifika kodu girin."
        : "Please enter a valid certificate code.",

    trustBoxTitle: lang === "tr" ? "Güven Katmanı" : "Trust Layer",
    trustBoxText:
      lang === "tr"
        ? "Doğrulama sistemi yalnızca kontrol alanı değildir. Aynı zamanda Albatros Sailing eğitim yapısının ciddiyetini, belge disiplinini ve resmi kayıt mantığını görünür hale getirir."
        : "The verification system is not only a control field. It also makes the seriousness of the Albatros Sailing training structure, document discipline, and official registry logic visible.",

    infoCards:
      lang === "tr"
        ? [
            {
              title: "Nasıl Çalışır?",
              text: "Sertifika kodu girilir, sistem ilgili kayıtla eşleşir ve kullanıcı resmi doğrulama ekranına yönlendirilir.",
            },
            {
              title: "Neden Önemlidir?",
              text: "Bu yapı, sertifikanın yalnızca basılı belge olmadığını; sistem içinde kayıtlı ve doğrulanabilir olduğunu gösterir.",
            },
            {
              title: "Ne Sağlar?",
              text: "Kurumsal güven, öğrenci başarısının görünürlüğü ve premium marka algısını güçlendirir.",
            },
          ]
        : [
            {
              title: "How It Works?",
              text: "The certificate code is entered, the system matches it with the relevant record, and the user is directed to the official verification screen.",
            },
            {
              title: "Why It Matters?",
              text: "This structure proves that the certificate is not just a printed document, but a record stored and verifiable within the system.",
            },
            {
              title: "What Does It Provide?",
              text: "It strengthens institutional trust, visibility of student achievement, and premium brand perception.",
            },
          ],

    nextStepBadge: lang === "tr" ? "Sonraki Adım" : "Next Step",
    nextStepTitle:
      lang === "tr"
        ? "Doğrulama sonrası resmi kaydı da inceleyin."
        : "After verification, review the official registry as well.",
    nextStepText:
      lang === "tr"
        ? "Doğrulama ekranı belgeyi teyit eder; kayıt sistemi ise yapı, disiplin ve güven algısını daha da güçlendirir."
        : "The verification screen confirms the document, while the registry system further strengthens the sense of structure, discipline, and trust.",
    openRegistry:
      lang === "tr" ? "Registry Aç" : "Open Registry",
    contact:
      lang === "tr" ? "İletişime Geç" : "Contact",

    sampleCodesTitle:
      lang === "tr" ? "Örnek Kod Formatı" : "Sample Code Format",
    sampleCodes: ["AS-OFF-2026-0001", "AS-OFF-2026-0108", "AS-OFF-2026-1735"],

    securityBadge:
      lang === "tr" ? "Kayıt Destekli Güven" : "Registry-Backed Trust",
    securityText:
      lang === "tr"
        ? "Bu portal, belge doğrulamasını görünür hale getirir ve kurumsal ciddiyeti destekler."
        : "This portal makes document verification visible and reinforces institutional credibility.",
  };

  function handleVerifyClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!normalizedCertificateId) {
      e.preventDefault();
      alert(ui.inputWarning);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && normalizedCertificateId) {
      window.location.href = `/verify/${encodeURIComponent(normalizedCertificateId)}`;
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_24%),linear-gradient(180deg,#07101d_0%,#0a1426_42%,#08111c_100%)] text-white">
      <section className="relative overflow-hidden border-b border-white/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.09),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.10),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_24px_rgba(34,211,238,0.10)] backdrop-blur">
                {ui.badge}
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-6xl md:leading-[1.02]">
                {ui.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/68">
                {ui.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-white/50">
                <span>{ui.trustLine[0]}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>{ui.trustLine[1]}</span>
                <span className="h-1 w-1 rounded-full bg-white/20" />
                <span>{ui.trustLine[2]}</span>
              </div>

              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.16)] backdrop-blur-xl">
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]" />
                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-100/70">
                    {ui.securityBadge}
                  </div>
                  <div className="text-sm font-medium text-white/82">
                    {ui.securityText}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/70">
                  {ui.entryBadge}
                </div>

                <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                  {ui.entryTitle}
                </h2>

                <p className="mt-3 text-sm leading-7 text-white/62">
                  {ui.entryDescription}
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="certificateId"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-white/55"
                  >
                    {ui.inputLabel}
                  </label>

                  <input
                    id="certificateId"
                    type="text"
                    value={certificateId}
                    onChange={(e) =>
                      setCertificateId(e.target.value.toUpperCase())
                    }
                    onKeyDown={handleKeyDown}
                    placeholder={ui.inputPlaceholder}
                    className="w-full rounded-2xl border border-white/12 bg-white/[0.05] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/28 focus:border-cyan-300/40 focus:bg-white/[0.07]"
                  />
                </div>

                <div className="mt-4">
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/48">
                    {ui.sampleCodesTitle}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {ui.sampleCodes.map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setCertificateId(code)}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs font-medium text-white/78 transition hover:bg-white/[0.09]"
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={verifyHref}
                    onClick={handleVerifyClick}
                    className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-4 text-sm font-semibold text-[#07111d] shadow-[0_14px_32px_rgba(56,189,248,0.20)] transition hover:opacity-95"
                  >
                    {ui.verifyButton}
                  </Link>

                  <Link
                    href="/registry"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                  >
                    {ui.registryButton}
                  </Link>
                </div>
              </div>

              <div className="mt-5 rounded-[1.6rem] border border-white/10 bg-[#0b1422] px-6 py-5 text-white shadow-[0_10px_32px_rgba(0,0,0,0.18)]">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-100/55">
                  {ui.trustBoxTitle}
                </div>

                <p className="mt-3 text-sm leading-7 text-white/74">
                  {ui.trustBoxText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/8 bg-transparent">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          {ui.infoCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                {ui.nextStepBadge}
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-4xl">
                {ui.nextStepTitle}
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/64">
                {ui.nextStepText}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/registry"
                className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-300 to-blue-500 px-6 py-4 text-sm font-semibold text-[#07111d] shadow-[0_14px_32px_rgba(56,189,248,0.20)] transition hover:opacity-95"
              >
                {ui.openRegistry}
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                {ui.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}