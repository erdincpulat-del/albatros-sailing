"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

export default function ReserveLandingPage() {
  const { locale } = useLanguage();
  const t = useMemo(() => getMessages(locale), [locale]);

  const ui = {
    badge: locale === "tr" ? "Rezervasyon Merkezi" : "Reservation Center",
    title:
      locale === "tr"
        ? "Eğitim ve charter taleplerini doğru akıştan başlatın."
        : "Start training and charter requests from the right flow.",
    description:
      locale === "tr"
        ? "Albatros Sailing içinde eğitim rezervasyonu ve charter talebi farklı operasyon mantıklarıyla yönetilir. İhtiyacınıza uygun akışı seçerek devam edin."
        : "Inside Albatros Sailing, training reservations and charter requests are managed with different operational structures. Continue with the flow that matches your need.",

    trainingBadge: locale === "tr" ? "Training" : "Training",
    trainingTitle:
      locale === "tr"
        ? "Eğitim rezervasyonu"
        : "Training reservation",
    trainingText:
      locale === "tr"
        ? "Açık deniz, rota, dönem, seviye ve kontenjan odaklı eğitim talepleri için doğru giriş noktası."
        : "The right entry point for training requests focused on offshore routes, seasons, levels, and capacity.",
    trainingFeatures:
      locale === "tr"
        ? [
            "Program ve rota seçimi",
            "Deneyim seviyesi bilgisi",
            "Dönem ve kontenjan planlaması",
          ]
        : [
            "Program and route selection",
            "Experience level information",
            "Season and capacity planning",
          ],
    trainingButton:
      locale === "tr" ? "Training rezervasyonuna git" : "Go to training reservation",

    charterBadge: locale === "tr" ? "Charter" : "Charter",
    charterTitle:
      locale === "tr"
        ? "Charter talebi"
        : "Charter request",
    charterText:
      locale === "tr"
        ? "Tekne, model, sezon, Cumartesi–Cuma haftalık periyotlar ve müsaitlik odaklı charter talepleri için doğru giriş noktası."
        : "The right entry point for charter requests focused on boats, models, seasonality, Saturday-to-Friday weekly periods, and availability.",
    charterFeatures:
      locale === "tr"
        ? [
            "Tekne ve hafta seçimi",
            "Kişi sayısı ve rota tercihi",
            "Müsaitlik ve fiyat dönüşü",
          ]
        : [
            "Boat and week selection",
            "Guest count and route preference",
            "Availability and price follow-up",
          ],
    charterButton:
      locale === "tr" ? "Charter talebine git" : "Go to charter request",

    footerTitle:
      locale === "tr"
        ? "Neden bu ayrım önemli?"
        : "Why is this separation important?",
    footerText:
      locale === "tr"
        ? "Charter ve eğitim aynı site içinde yer alsa da, aynı rezervasyon mantığıyla yönetilmez. Bu yapı hem kullanıcı deneyimini hem de admin panel yönetimini daha profesyonel hale getirir."
        : "Even though charter and training live on the same site, they should not be managed with the same reservation logic. This structure makes both the user experience and admin management more professional.",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        color: "#f8fafc",
      }}
    >
      <section
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.62), rgba(8,14,24,0.42))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(103,211,255,0.08)",
                border: "1px solid rgba(103,211,255,0.18)",
                color: "#8ed8ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {ui.badge}
            </p>

            <h1
              style={{
                marginTop: 12,
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
                fontSize: 17,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.82)",
              }}
            >
              {ui.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div
            style={{
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 32,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {ui.trainingBadge}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: 32,
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.trainingTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.trainingText}
            </p>

            <div className="mt-6 space-y-3">
              {ui.trainingFeatures.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                    padding: "16px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.8,
                    color: "#e2e8f0",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/reserve/training"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
                  padding: "14px 22px",
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#04121c",
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                }}
              >
                {ui.trainingButton}
              </Link>
            </div>
          </div>

          <div
            style={{
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 32,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {ui.charterBadge}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: 32,
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.charterTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.charterText}
            </p>

            <div className="mt-6 space-y-3">
              {ui.charterFeatures.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "1.25rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                    padding: "16px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    lineHeight: 1.8,
                    color: "#e2e8f0",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/reserve/charter"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 999,
                  background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
                  padding: "14px 22px",
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#04121c",
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                }}
              >
                {ui.charterButton}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div
            style={{
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
              padding: 40,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
            className="md:p-10"
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {locale === "tr" ? "Sistem Mantığı" : "System Logic"}
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
              {ui.footerTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                maxWidth: "42rem",
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.footerText}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}