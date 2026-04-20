"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

export default function VerifyPage() {
  const { lang } = useLanguage();
  const t = useMemo(() => getMessages(lang), [lang]);
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
    openRegistry: lang === "tr" ? "Registry Aç" : "Open Registry",
    contact: lang === "tr" ? "İletişime Geç" : "Contact",

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
      window.location.href = `/verify/${encodeURIComponent(
        normalizedCertificateId
      )}`;
    }
  }

  return (
    <main
      className="text-white"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
      }}
    >
      <style>{`
        @keyframes verifyScanLine {
          0% {
            transform: translateY(-10%);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.95;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(118%);
            opacity: 0;
          }
        }

        @keyframes verifyPulseGlow {
          0% {
            opacity: 0.16;
          }
          50% {
            opacity: 0.34;
          }
          100% {
            opacity: 0.16;
          }
        }
      `}</style>

      <section
        style={{
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.62), rgba(8,14,24,0.42))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(103,211,255,0.10), transparent 35%), radial-gradient(circle at bottom right, rgba(56,189,248,0.08), transparent 30%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="max-w-3xl">
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  borderRadius: 999,
                  padding: "8px 14px",
                  background: "rgba(103,211,255,0.08)",
                  border: "1px solid rgba(103,211,255,0.18)",
                  color: "#8ed8ff",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.10)",
                }}
              >
                {ui.badge}
              </div>

              <h1
                style={{
                  marginTop: 24,
                  fontSize: "clamp(40px, 5vw, 70px)",
                  fontWeight: 900,
                  lineHeight: 1.04,
                  letterSpacing: "-0.04em",
                  color: "#f8fafc",
                }}
              >
                {ui.title}
              </h1>

              <p
                style={{
                  marginTop: 20,
                  maxWidth: "42rem",
                  fontSize: 18,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.82)",
                }}
              >
                {ui.description}
              </p>

              <div
                style={{
                  marginTop: 32,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: 12,
                  color: "rgba(226,232,240,0.68)",
                  fontSize: 14,
                }}
              >
                <span>{ui.trustLine[0]}</span>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                  }}
                />
                <span>{ui.trustLine[1]}</span>
                <span
                  style={{
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.25)",
                  }}
                />
                <span>{ui.trustLine[2]}</span>
              </div>

              <div
                style={{
                  marginTop: 32,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 12,
                  borderRadius: 18,
                  padding: "14px 16px",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                }}
              >
                <div
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "#8CFF7A",
                    boxShadow: "0 0 14px rgba(140,255,122,0.85)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(226,232,240,0.62)",
                    }}
                  >
                    {ui.securityBadge}
                  </div>
                  <div
                    style={{
                      marginTop: 2,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#e2e8f0",
                    }}
                  >
                    {ui.securityText}
                  </div>
                </div>
              </div>
            </div>

            <div
              style={{
                borderRadius: "2rem",
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.96))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.24)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "1.5rem",
                  padding: 24,
                  background:
                    "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* scan glow layer */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at center, rgba(140,255,122,0.10), transparent 70%)",
                    animation: "verifyPulseGlow 3s ease-in-out infinite",
                    pointerEvents: "none",
                  }}
                />

                {/* scan line */}
                <div
                  style={{
                    position: "absolute",
                    left: 16,
                    right: 16,
                    top: 0,
                    height: 3,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, transparent, #8CFF7A, transparent)",
                    boxShadow: "0 0 18px rgba(140,255,122,0.45)",
                    animation: "verifyScanLine 3.2s ease-in-out infinite",
                    pointerEvents: "none",
                    zIndex: 3,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.62)",
                  }}
                >
                  {ui.entryBadge}
                </div>

                <h2
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: 12,
                    fontSize: 30,
                    fontWeight: 900,
                    lineHeight: 1.1,
                    color: "#f8fafc",
                  }}
                >
                  {ui.entryTitle}
                </h2>

                <p
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: 12,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {ui.entryDescription}
                </p>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: 24,
                  }}
                >
                  <label
                    htmlFor="certificateId"
                    style={{
                      display: "block",
                      marginBottom: 10,
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#e2e8f0",
                    }}
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
                    style={{
                      width: "100%",
                      borderRadius: 14,
                      padding: "16px 18px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#f8fafc",
                      fontSize: 15,
                      outline: "none",
                      transition:
                        "border-color 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(103,211,255,0.35)";
                      e.currentTarget.style.boxShadow =
                        "0 0 18px rgba(103,211,255,0.18)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.06)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.10)";
                      e.currentTarget.style.boxShadow = "none";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                    }}
                  />
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: 18,
                  }}
                >
                  <div
                    style={{
                      marginBottom: 8,
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "rgba(226,232,240,0.62)",
                    }}
                  >
                    {ui.sampleCodesTitle}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {ui.sampleCodes.map((code) => (
                      <button
                        key={code}
                        type="button"
                        onClick={() => setCertificateId(code)}
                        style={{
                          borderRadius: 999,
                          padding: "10px 14px",
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          color: "#e2e8f0",
                          fontSize: 12,
                          fontWeight: 700,
                          cursor: "pointer",
                          transition:
                            "transform 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.borderColor =
                            "rgba(103,211,255,0.18)";
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.07)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.borderColor =
                            "rgba(255,255,255,0.10)";
                          e.currentTarget.style.background =
                            "rgba(255,255,255,0.05)";
                        }}
                      >
                        {code}
                      </button>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    marginTop: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                  }}
                  className="sm:flex-row"
                >
                  <Link
                    href={verifyHref}
                    onClick={handleVerifyClick}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 14,
                      padding: "14px 22px",
                      background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                      color: "#04121c",
                      textDecoration: "none",
                      fontWeight: 900,
                      boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                      transition: "transform 0.25s ease, box-shadow 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow =
                        "0 16px 30px rgba(66,189,248,0.32)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 10px 24px rgba(66,189,248,0.22)";
                    }}
                  >
                    {ui.verifyButton}
                  </Link>

                  <Link
                    href="/registry"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 14,
                      padding: "14px 22px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.10)",
                      color: "#f8fafc",
                      textDecoration: "none",
                      fontWeight: 700,
                      transition:
                        "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.borderColor =
                        "rgba(103,211,255,0.18)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.07)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 26px rgba(66,189,248,0.10)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.10)";
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  >
                    {ui.registryButton}
                  </Link>
                </div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  borderRadius: "1.5rem",
                  padding: "20px 22px",
                  background:
                    "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "rgba(226,232,240,0.62)",
                  }}
                >
                  {ui.trustBoxTitle}
                </div>

                <p
                  style={{
                    marginTop: 12,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {ui.trustBoxText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-3">
          {ui.infoCards.map((item) => (
            <div
              key={item.title}
              style={{
                borderRadius: "1.5rem",
                padding: 24,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                transition:
                  "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(66,189,248,0.12)";
                e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(0,0,0,0.18)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <h3
                style={{
                  fontSize: 22,
                  fontWeight: 800,
                  color: "#f8fafc",
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 14,
                  fontSize: 14,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div
          style={{
            borderRadius: "2rem",
            padding: 32,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
          }}
          className="md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                {ui.nextStepBadge}
              </p>

              <h2
                style={{
                  marginTop: 12,
                  fontSize: "clamp(30px, 4vw, 42px)",
                  fontWeight: 900,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#f8fafc",
                }}
              >
                {ui.nextStepTitle}
              </h2>

              <p
                style={{
                  marginTop: 16,
                  maxWidth: "42rem",
                  fontSize: 16,
                  lineHeight: 1.9,
                  color: "rgba(226,232,240,0.82)",
                }}
              >
                {ui.nextStepText}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/registry"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  padding: "14px 22px",
                  background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                  color: "#04121c",
                  textDecoration: "none",
                  fontWeight: 900,
                  boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 30px rgba(66,189,248,0.32)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 24px rgba(66,189,248,0.22)";
                }}
              >
                {ui.openRegistry}
              </Link>

              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 14,
                  padding: "14px 22px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#f8fafc",
                  textDecoration: "none",
                  fontWeight: 700,
                  transition:
                    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor =
                    "rgba(103,211,255,0.18)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 26px rgba(66,189,248,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.10)";
                  e.currentTarget.style.background =
                    "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
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