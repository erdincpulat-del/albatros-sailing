"use client";

import Link from "next/link";
import { charterBoats } from "@/lib/charter-boats";

const WHATSAPP_NUMBER = "905324873813";

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

type PageProps = {
  params: {
    id: string;
  };
};

const monthMap = [
  { key: "may", label: "Mayıs" },
  { key: "june", label: "Haziran" },
  { key: "july", label: "Temmuz" },
  { key: "august", label: "Ağustos" },
  { key: "september", label: "Eylül" },
] as const;

export default function CharterDetailPage({ params }: PageProps) {
  const boat = charterBoats.find((b) => b.id === params.id);

  if (!boat) {
    return (
      <main style={notFoundStyle}>
        <div style={{ textAlign: "center" }}>
          <h1
            style={{
              fontSize: 42,
              fontWeight: 900,
              marginBottom: 12,
            }}
          >
            Tekne bulunamadı
          </h1>

          <p
            style={{
              opacity: 0.72,
              marginBottom: 24,
              lineHeight: 1.7,
            }}
          >
            Aradığınız tekne mevcut olmayabilir veya bağlantı değişmiş olabilir.
          </p>

          <Link href="/charter" style={backButton}>
            Charter sayfasına dön
          </Link>
        </div>
      </main>
    );
  }

  const featuresList = Array.isArray(boat.features)
    ? boat.features
    : typeof boat.features === "string"
      ? boat.features.split("\n").filter(Boolean)
      : [];

  const getFeatureIcon = (text: string) => {
    const t = text.toLowerCase();

    if (t.includes("wifi")) return "📶";
    if (t.includes("air") || t.includes("ac") || t.includes("klima")) return "❄️";
    if (t.includes("generator") || t.includes("jeneratör")) return "⚡";
    if (t.includes("radar")) return "📡";
    if (t.includes("gps")) return "🧭";
    if (t.includes("autopilot") || t.includes("otomatik pilot")) return "🛟";
    if (t.includes("solar")) return "☀️";
    if (t.includes("watermaker") || t.includes("su yapıcı")) return "💧";
    if (t.includes("bluetooth")) return "🔊";
    if (t.includes("dinghy") || t.includes("bot")) return "🚤";
    if (t.includes("bimini")) return "⛵";
    if (t.includes("kitchen") || t.includes("mutfak")) return "🍽️";

    return "⚓";
  };

  const isPremiumFeature = (text: string) => {
    const t = text.toLowerCase();

    return (
      t.includes("wifi") ||
      t.includes("air") ||
      t.includes("ac") ||
      t.includes("klima") ||
      t.includes("generator") ||
      t.includes("jeneratör") ||
      t.includes("autopilot") ||
      t.includes("otomatik pilot") ||
      t.includes("watermaker") ||
      t.includes("su yapıcı")
    );
  };

  const getPrice = (monthKey: string) => {
    if (!boat.prices) return "—";

    if (Array.isArray(boat.prices)) {
      const found = boat.prices.find(
        (p: { month?: string; price?: string }) => p.month === monthKey
      );
      return found?.price || "—";
    }

    return (boat.prices as Record<string, string>)[monthKey] || "—";
  };

  return (
    <main style={mainStyle}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 20 }}>
          <Link href="/charter" style={backLink}>
            ← Tüm teknelere dön
          </Link>
        </div>

        {/* HERO */}
        <section style={heroGrid}>
          <div
            style={{
              height: 500,
              borderRadius: 26,
              background: `url(${boat.image}) center/cover`,
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
            }}
          />

          <div>
            <div style={topBadge}>
              {boat.location} • {boat.model}
            </div>

            <h1 style={title}>{boat.name}</h1>

            <p style={desc}>{boat.shortNote}</p>

            <div style={specGrid}>
              <Spec label="Model" value={boat.model} />
              <Spec label="Yıl" value={String(boat.year)} />
              <Spec label="Kabin" value={String(boat.cabins)} />
              <Spec label="Kapasite" value={boat.guestsLabel} />
              <Spec label="Lokasyon" value={boat.location} />
            </div>

            <div
              style={{
                marginTop: 22,
                padding: "14px 16px",
                borderRadius: 16,
                background:
                  "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(66,189,248,0.05))",
                border: "1px solid rgba(103,211,255,0.16)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: "#d8f5ff",
                  fontWeight: 700,
                }}
              >
                Haziran başlangıç fiyatı
              </span>

              <span
                style={{
                  fontSize: 24,
                  color: "#67d3ff",
                  fontWeight: 900,
                  textShadow: "0 0 20px rgba(103,211,255,0.35)",
                }}
              >
                {getPrice("june")}
              </span>
            </div>

            <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
              <a
                href={waLink(
                  `Merhaba, ${boat.name} teknesi hakkında fiyat almak istiyorum.`
                )}
                target="_blank"
                rel="noreferrer"
                style={primaryBtn}
              >
                Fiyat Sor
              </a>

              <a
                href={waLink(
                  `Merhaba, ${boat.name} teknesi için hemen rezervasyon yapmak istiyorum. Güncel müsaitlik paylaşabilir misiniz?`
                )}
                target="_blank"
                rel="noreferrer"
                style={secondaryBtn}
              >
                Hemen Rezervasyon / WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* DESCRIPTION + SALES + FEATURES */}
        <section style={card}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginBottom: 18,
            }}
          >
            <SalesBadge
              color="orange"
              text="🔥 En çok tercih edilen tekne"
            />
            <SalesBadge
              color="blue"
              text="⚡ Son 2 gün içinde 5 kişi inceledi"
            />
            <SalesBadge
              color="green"
              text="📉 Bu ay %20 dolu"
            />
          </div>

          <h2 style={sectionTitle}>Tekne hakkında</h2>
          <p style={text}>{boat.description}</p>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {featuresList.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: isPremiumFeature(item)
                    ? "linear-gradient(135deg, rgba(103,211,255,0.15), rgba(66,189,248,0.08))"
                    : "rgba(255,255,255,0.04)",
                  border: isPremiumFeature(item)
                    ? "1px solid rgba(103,211,255,0.32)"
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isPremiumFeature(item)
                    ? "0 10px 28px rgba(66,189,248,0.10)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.background = isPremiumFeature(item)
                    ? "linear-gradient(135deg, rgba(103,211,255,0.22), rgba(66,189,248,0.12))"
                    : "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.background = isPremiumFeature(item)
                    ? "linear-gradient(135deg, rgba(103,211,255,0.15), rgba(66,189,248,0.08))"
                    : "rgba(255,255,255,0.04)";
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: isPremiumFeature(item)
                      ? "linear-gradient(135deg,#67d3ff,#42bdf8)"
                      : "rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 16,
                    flexShrink: 0,
                  }}
                >
                  {getFeatureIcon(item)}
                </div>

                <div
                  style={{
                    flex: 1,
                    fontSize: 14,
                    color: "#dbeafe",
                    fontWeight: 600,
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </div>

                {isPremiumFeature(item) && (
                  <div
                    style={{
                      fontSize: 10,
                      padding: "4px 8px",
                      borderRadius: 999,
                      background: "rgba(103,211,255,0.18)",
                      color: "#8ee8ff",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    Premium
                  </div>
                )}
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: 22,
              padding: "14px 16px",
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.72)",
              fontSize: 14,
              lineHeight: 1.8,
            }}
          >
            Bu tekne için müsaitlik ve fiyatlar dönemsel olarak hızlı değişebilir.
            Özellikle popüler tarihlerde erken rezervasyon avantaj sağlar.
          </div>
        </section>

        {/* PRICES */}
        <section style={card}>
          <h2 style={sectionTitle}>Aylara göre fiyatlar</h2>

          <div style={priceGrid}>
            {monthMap.map((m) => (
              <div key={m.key} style={priceBox}>
                <span style={priceMonth}>{m.label}</span>
                <span style={priceValue}>{getPrice(m.key)}</span>

                <a
                  href={waLink(
                    `Merhaba, ${boat.name} teknesi için ${m.label} ayında rezervasyon yapmak istiyorum.`
                  )}
                  target="_blank"
                  rel="noreferrer"
                  style={miniBtn}
                >
                  Rezervasyon Yap
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FINAL CTA */}
        <section style={card}>
          <h2 style={sectionTitle}>Planını birlikte oluşturalım</h2>

          <p style={text}>
            Size en uygun tarih, tekne ve rota planını birlikte belirleyelim.
          </p>

          <a
            href={waLink(
              `Merhaba, ${boat.name} teknesi için detaylı plan yapmak istiyorum.`
            )}
            target="_blank"
            rel="noreferrer"
            style={bigCta}
          >
            WhatsApp ile iletişime geç
          </a>
        </section>
      </div>
    </main>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 10,
        background: "rgba(255,255,255,0.04)",
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.6 }}>{label}</div>
      <div style={{ fontWeight: 800 }}>{value}</div>
    </div>
  );
}

function SalesBadge({
  text,
  color,
}: {
  text: string;
  color: "orange" | "blue" | "green";
}) {
  const styles = {
    orange: {
      background:
        "linear-gradient(135deg, rgba(245,158,11,0.18), rgba(239,68,68,0.14))",
      border: "1px solid rgba(245,158,11,0.35)",
      color: "#fde68a",
    },
    blue: {
      background:
        "linear-gradient(135deg, rgba(103,211,255,0.14), rgba(66,189,248,0.08))",
      border: "1px solid rgba(103,211,255,0.28)",
      color: "#8ee8ff",
    },
    green: {
      background:
        "linear-gradient(135deg, rgba(34,197,94,0.14), rgba(22,163,74,0.08))",
      border: "1px solid rgba(34,197,94,0.28)",
      color: "#bbf7d0",
    },
  };

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "8px 12px",
        borderRadius: 999,
        fontSize: 12,
        fontWeight: 700,
        ...styles[color],
      }}
    >
      {text}
    </div>
  );
}

const mainStyle: React.CSSProperties = {
  background: "#050b14",
  minHeight: "100vh",
  color: "#fff",
  padding: "120px 24px",
};

const notFoundStyle: React.CSSProperties = {
  background: "#050b14",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
};

const heroGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.2fr 0.8fr",
  gap: 30,
};

const topBadge: React.CSSProperties = {
  display: "inline-flex",
  padding: "8px 14px",
  borderRadius: 999,
  background: "rgba(103,211,255,0.08)",
  border: "1px solid rgba(103,211,255,0.18)",
  color: "#8ee8ff",
  fontSize: 12,
  fontWeight: 800,
  letterSpacing: 1,
  textTransform: "uppercase",
};

const title: React.CSSProperties = {
  fontSize: 42,
  fontWeight: 900,
  marginTop: 16,
};

const desc: React.CSSProperties = {
  marginTop: 12,
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const specGrid: React.CSSProperties = {
  marginTop: 16,
  display: "grid",
  gridTemplateColumns: "repeat(2,1fr)",
  gap: 10,
};

const card: React.CSSProperties = {
  marginTop: 40,
  padding: 20,
  borderRadius: 20,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
};

const sectionTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 28,
  fontWeight: 900,
};

const text: React.CSSProperties = {
  marginTop: 10,
  color: "rgba(255,255,255,0.72)",
  lineHeight: 1.8,
};

const priceGrid: React.CSSProperties = {
  marginTop: 20,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
  gap: 12,
};

const priceBox: React.CSSProperties = {
  padding: 14,
  borderRadius: 12,
  background: "rgba(255,255,255,0.05)",
  textAlign: "center",
};

const priceMonth: React.CSSProperties = {
  fontSize: 12,
  opacity: 0.7,
};

const priceValue: React.CSSProperties = {
  display: "block",
  marginTop: 6,
  fontSize: 20,
  fontWeight: 900,
  color: "#67d3ff",
};

const primaryBtn: React.CSSProperties = {
  padding: 12,
  background: "#67d3ff",
  color: "#02121c",
  textAlign: "center",
  borderRadius: 10,
  fontWeight: 800,
  textDecoration: "none",
};

const secondaryBtn: React.CSSProperties = {
  padding: 12,
  background: "#22c55e",
  color: "#fff",
  textAlign: "center",
  borderRadius: 10,
  fontWeight: 800,
  textDecoration: "none",
};

const miniBtn: React.CSSProperties = {
  display: "block",
  marginTop: 10,
  fontSize: 12,
  color: "#67d3ff",
  textDecoration: "none",
};

const bigCta: React.CSSProperties = {
  display: "block",
  marginTop: 20,
  padding: 14,
  background: "#22c55e",
  textAlign: "center",
  borderRadius: 12,
  fontWeight: 900,
  textDecoration: "none",
  color: "#fff",
};

const backLink: React.CSSProperties = {
  color: "#67d3ff",
  textDecoration: "none",
};

const backButton: React.CSSProperties = {
  marginTop: 20,
  display: "inline-block",
  padding: 10,
  background: "#67d3ff",
  color: "#02121c",
  borderRadius: 8,
  textDecoration: "none",
};