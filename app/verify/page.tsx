"use client";

import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

type CertificateData = {
  id?: string;
  certificateId?: string | null;
  fullName?: string | null;
  program?: string | null;
  qualificationLevel?: string | null;
  issueDate?: string | null;
  seaMiles?: number | null;
  status?: string | null;
  photoUrl?: string | null;
  cardFrontUrl?: string | null;
  cardBackUrl?: string | null;
  qrCodeUrl?: string | null;
  verificationHash?: string | null;
};

function VerifyPageContent() {
  const lang = "tr";
  const searchParams = useSearchParams();

  const qrCertificateId = searchParams.get("certificateId") || "";

  const [certificateId, setCertificateId] = useState("");
  const [certificate, setCertificate] = useState<CertificateData | null>(null);
  const [loadingCertificate, setLoadingCertificate] = useState(false);
  const [verifyError, setVerifyError] = useState("");

  useEffect(() => {
    if (qrCertificateId) {
      setCertificateId(qrCertificateId.toUpperCase());
    }
  }, [qrCertificateId]);

  const normalizedCertificateId = certificateId.trim().toUpperCase();

  useEffect(() => {
    if (!qrCertificateId) {
      setCertificate(null);
      setVerifyError("");
      return;
    }

    async function loadCertificate() {
      try {
        setLoadingCertificate(true);
        setVerifyError("");

        const res = await fetch(
          `/api/verify?certificateId=${encodeURIComponent(
            qrCertificateId.trim().toUpperCase()
          )}`,
          { cache: "no-store" }
        );

        const data = await res.json();

        if (!res.ok || !data.success) {
          setCertificate(null);
          setVerifyError(data.error || "Sertifika bulunamadı.");
          return;
        }

        setCertificate(data.certificate);
      } catch (error) {
        console.error("VERIFY PAGE LOAD ERROR:", error);
        setCertificate(null);
        setVerifyError("Doğrulama sırasında hata oluştu.");
      } finally {
        setLoadingCertificate(false);
      }
    }

    loadCertificate();
  }, [qrCertificateId]);

  const verifyHref = normalizedCertificateId
    ? `/verify?certificateId=${encodeURIComponent(normalizedCertificateId)}`
    : "#";

  const hasVerifiedCertificate = Boolean(qrCertificateId);

  const frontCardUrl = certificate?.cardFrontUrl || "";
  const backCardUrl = certificate?.cardBackUrl || "/templates/card-back.png";

  const ui = useMemo(
    () => ({
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
          : "Enter the certificate code to continue to the official verification screen.",

      trustLine:
        lang === "tr"
          ? ["Resmi kayıt desteği", "Hızlı doğrulama", "Kurumsal güven yapısı"]
          : [
              "Official registry support",
              "Fast verification",
              "Institutional trust structure",
            ],

      entryBadge: lang === "tr" ? "Doğrulama Girişi" : "Verification Entry",
      entryTitle:
        lang === "tr" ? "Sertifika ID / Kayıt Kodu" : "Certificate ID",
      entryDescription:
        lang === "tr"
          ? "Kart üzerinde bulunan sertifika kodunu veya resmi kayıt numarasını girin."
          : "Enter the certificate code shown on the card.",
      inputLabel: lang === "tr" ? "Sertifika Kodu" : "Certificate Code",
      inputPlaceholder:
        lang === "tr" ? "Örn: AS-OFF-2026-0001" : "Ex: AS-OFF-2026-0001",
      verifyButton: lang === "tr" ? "Doğrulamaya Git" : "Go to Verification",
      registryButton: lang === "tr" ? "Kayıt Sistemini Aç" : "Open Registry",
      inputWarning:
        lang === "tr"
          ? "Lütfen geçerli bir sertifika kodu girin."
          : "Please enter a valid certificate code.",

      cardTitle:
        lang === "tr" ? "Doğrulanan Sertifika Kartı" : "Verified Certificate Card",
      frontCard: lang === "tr" ? "Kart Ön Yüz" : "Card Front",
      backCard: lang === "tr" ? "Kart Arka Yüz" : "Card Back",

      trustBoxTitle: lang === "tr" ? "Güven Katmanı" : "Trust Layer",
      trustBoxText:
        lang === "tr"
          ? "Doğrulama sistemi yalnızca kontrol alanı değildir. Aynı zamanda Albatros Sailing eğitim yapısının ciddiyetini, belge disiplinini ve resmi kayıt mantığını görünür hale getirir."
          : "The verification system makes the official registry structure visible.",

      sampleCodesTitle: lang === "tr" ? "Örnek Kod Formatı" : "Sample Code Format",
      sampleCodes: ["AS-OFF-2026-0001", "AS-OFF-2026-0108", "AS-GEN-2026-0002"],

      securityBadge: lang === "tr" ? "Kayıt Destekli Güven" : "Registry-Backed Trust",
      securityText:
        lang === "tr"
          ? "Bu portal, belge doğrulamasını görünür hale getirir ve kurumsal ciddiyeti destekler."
          : "This portal reinforces institutional credibility.",

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
          : [],
    }),
    [lang]
  );

  function handleVerifyClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!normalizedCertificateId) {
      e.preventDefault();
      alert(ui.inputWarning);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (!normalizedCertificateId) {
        alert(ui.inputWarning);
        return;
      }

      window.location.href = `/verify?certificateId=${encodeURIComponent(
        normalizedCertificateId
      )}`;
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
                    onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
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

      {hasVerifiedCertificate && normalizedCertificateId ? (
        <section className="border-b border-white/8">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl">
              <div className="mb-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100/60">
                  {normalizedCertificateId}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {ui.cardTitle}
                </h2>

                {loadingCertificate ? (
                  <p className="mt-3 text-sm text-white/55">
                    Sertifika bilgileri yükleniyor...
                  </p>
                ) : null}

                {verifyError ? (
                  <div className="mt-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                    {verifyError}
                  </div>
                ) : null}

                {certificate && !frontCardUrl ? (
                  <div className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 px-4 py-3 text-sm text-amber-100">
                    Kart ön yüz URL’i henüz oluşturulmamış. Script ile kartı
                    üretip DB’de cardFrontUrl alanını doldurmalısın.
                  </div>
                ) : null}
              </div>

              {certificate ? (
                <div className="grid gap-8 lg:grid-cols-2">
                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      {ui.frontCard}
                    </h3>

                    {frontCardUrl ? (
                      <img
                        src={frontCardUrl}
                        alt={`${normalizedCertificateId} front card`}
                        className="w-full rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                      />
                    ) : (
                      <div className="flex aspect-[1536/1024] w-full items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/50">
                        Kart ön yüzü henüz yok.
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      {ui.backCard}
                    </h3>

                    <img
                      src={backCardUrl}
                      alt={`${normalizedCertificateId} back card`}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.24)]"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-b border-white/8 bg-transparent">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          {ui.infoCards.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_16px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/62">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default function VerifyPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-[#07101d] px-6 py-20 text-white">
          Yükleniyor...
        </main>
      }
    >
      <VerifyPageContent />
    </Suspense>
  );
}