"use client";

import Link from "next/link";
import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

const WHATSAPP_NUMBER = "905324873813";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function ContactPage() {
  const { lang } = useLanguage();
  const t = useMemo(() => getMessages(lang), [lang]);

  const ui = {
    badge: lang === "tr" ? "İletişim" : "Contact",
    title:
      lang === "tr"
        ? "Doğru programa birlikte karar verelim."
        : "Let’s decide on the right program together.",
    description:
      lang === "tr"
        ? "Seviyeniz, hedefiniz ve uygun tarihleriniz doğrultusunda size en uygun eğitim rotasını birlikte belirleyebiliriz."
        : "Based on your level, goals, and available dates, we can help you identify the most suitable training route.",
    whatsappTitle:
      lang === "tr" ? "WhatsApp ile Hızlı İletişim" : "Quick Contact via WhatsApp",
    whatsappText:
      lang === "tr"
        ? "En hızlı dönüş için doğrudan WhatsApp üzerinden bize yazabilirsiniz."
        : "For the fastest response, you can contact us directly via WhatsApp.",
    whatsappButton:
      lang === "tr" ? "WhatsApp'tan Yaz" : "Message on WhatsApp",

    emailTitle: lang === "tr" ? "E-posta" : "Email",
    emailText:
      lang === "tr"
        ? "Daha detaylı kurumsal iletişim için e-posta kullanabilirsiniz."
        : "For more detailed or formal communication, you can use email.",

    locationTitle: lang === "tr" ? "Konum" : "Location",
    locationText: "Bodrum / Türkiye",

    guidanceTitle: lang === "tr" ? "Nasıl yardımcı olabiliriz?" : "How can we help?",
    guidanceItems:
      lang === "tr"
        ? [
            "Seviyenize uygun program seçimi",
            "TYF / YES ve açık deniz eğitim yapısı hakkında yönlendirme",
            "Uygun tarih, kontenjan ve rota planlaması",
          ]
        : [
            "Choosing the right program for your level",
            "Guidance on TYF / YES and offshore training structure",
            "Available dates, capacity, and route planning",
          ],

    ctaTitle:
      lang === "tr"
        ? "İsterseniz önce programları da inceleyebilirsiniz."
        : "You can also review the programs first.",
    ctaText:
      lang === "tr"
        ? "Karar vermeden önce eğitim rotalarını ve yapılarını incelemek isterseniz, programlar sayfasından devam edebilirsiniz."
        : "If you would like to review the training routes and structures before deciding, you can continue from the programs page.",
    ctaPrimary: lang === "tr" ? "Programları Gör" : "View Programs",
    ctaSecondary: lang === "tr" ? "Rezervasyon Sayfası" : "Reservation Page",

    whatsappMessage:
      lang === "tr"
        ? "Merhaba, Albatros Sailing eğitim programları hakkında bilgi almak istiyorum. Seviyeme ve hedefime göre en uygun programı öğrenebilir miyim?"
        : "Hello, I would like to get information about Albatros Sailing training programs. Could you help me find the most suitable option for my level and goals?",
  };

  return (
    <main
      className="text-white"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
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
                marginBottom: 18,
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
                maxWidth: 760,
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
        <div className="grid gap-6 lg:grid-cols-3">
          <div
            className="group"
            style={{
              borderRadius: "1.75rem",
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
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#f8fafc",
              }}
            >
              {ui.whatsappTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 14,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.whatsappText}
            </p>

            <a
              href={buildWhatsAppUrl(ui.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: 24,
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
              {ui.whatsappButton}
            </a>
          </div>

          <div
            style={{
              borderRadius: "1.75rem",
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
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#f8fafc",
              }}
            >
              {ui.emailTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 14,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.emailText}
            </p>

            <a
              href="mailto:info@albatrossailing.com"
              style={{
                marginTop: 24,
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
                e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow =
                  "0 12px 26px rgba(66,189,248,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              info@albatrossailing.com
            </a>
          </div>

          <div
            style={{
              borderRadius: "1.75rem",
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
            <h2
              style={{
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.02em",
                color: "#f8fafc",
              }}
            >
              {ui.locationTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 14,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.locationText}
            </p>

            <div
              style={{
                marginTop: 24,
                borderRadius: "1.25rem",
                padding: "16px 18px",
                background: "rgba(103,211,255,0.05)",
                border: "1px solid rgba(103,211,255,0.15)",
                color: "#e2e8f0",
                fontSize: 14,
                lineHeight: 1.75,
                fontWeight: 600,
              }}
            >
              {lang === "tr"
                ? "Görüşme ve program yönlendirmesi için önce iletişim kurulması önerilir."
                : "Initial contact is recommended for consultation and program guidance."}
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.52), rgba(8,14,24,0.38))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {ui.guidanceTitle}
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
              {lang === "tr"
                ? "İletişim sonrası süreç"
                : "What happens after contact"}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ui.guidanceItems.map((item, index) => (
              <div
                key={item}
                style={{
                  borderRadius: "1.75rem",
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
                <div
                  style={{
                    display: "inline-flex",
                    height: 40,
                    width: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 999,
                    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                    color: "#04121c",
                    fontSize: 14,
                    fontWeight: 900,
                    boxShadow: "0 8px 20px rgba(66,189,248,0.20)",
                  }}
                >
                  {index + 1}
                </div>

                <p
                  style={{
                    marginTop: 16,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
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
                {lang === "tr" ? "Yönlendirme" : "Direction"}
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
                {ui.ctaTitle}
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
                {ui.ctaText}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <Link
                href="/programs"
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
                {ui.ctaPrimary}
              </Link>

              <Link
                href="/reserve"
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
                  e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 26px rgba(66,189,248,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {ui.ctaSecondary}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}