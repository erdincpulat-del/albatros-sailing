"use client";

import { useEffect, useState } from "react";

const maneuvers = [
  {
    key: "approach",
    title: "Marinaya kontrollü yaklaşma",
    subtitle: "Approach angle",
    accent: "#67d3ff",
    description:
      "Yaklaşma açısı çok dar veya çok sert olmamalıdır. Düşük hız, kontrollü açı ve rüzgâr payı ile giriş yapılır.",
    steps: [
      "Rüzgâr yönünü oku",
      "Düşük hızla hizalan",
      "Açıyı koru",
      "Gerekirse pas geç",
    ],
  },
  {
    key: "stern",
    title: "Kıçtan bağlanma yaklaşımı",
    subtitle: "Stern-to docking",
    accent: "#86efac",
    description:
      "Kıçtan yaklaşmada en kritik konu hızın çok düşük, hattın net ve ekibin hazır olmasıdır. Son anda düzeltme ihtiyacı azaltılmalıdır.",
    steps: [
      "Usturmaça ve halat hazır",
      "Geri yaklaşma hattını kur",
      "Kıç davranışını izle",
      "Son metreyi sakin yönet",
    ],
  },
  {
    key: "exit",
    title: "Marinadan kontrollü çıkış",
    subtitle: "Fairway exit",
    accent: "#fca5a5",
    description:
      "Çıkışta en büyük hata aceledir. Teknenin kıç atması, rüzgâr etkisi ve çıkış hattı daha bağ çözülmeden düşünülmelidir.",
    steps: [
      "Çıkış hattını seç",
      "Rüzgâr payını hesapla",
      "Dar alanda hızlanma",
      "Trafiği teyit et",
    ],
  },
] as const;

type ManeuverKey = (typeof maneuvers)[number]["key"];

export default function MarinaManeuverAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [phase, setPhase] = useState(0);

  const active = maneuvers[activeIndex];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % maneuvers.length);
      setPhase(0);
    }, 5200);

    return () => clearInterval(slideTimer);
  }, []);

  useEffect(() => {
    const phaseTimer = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 900);

    return () => clearInterval(phaseTimer);
  }, [activeIndex]);

  const renderBoatScene = (key: ManeuverKey) => {
    if (key === "approach") {
      const boatX = [70, 98, 126, 146][phase];
      const boatY = [208, 194, 182, 174][phase];

      return (
        <svg viewBox="0 0 520 320" width="100%" height="320" style={{ maxWidth: 520 }}>
          <defs>
            <linearGradient id="waterApproach" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(103,211,255,0.18)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.05)" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="520" height="320" rx="24" fill="url(#waterApproach)" />
          <rect x="325" y="42" width="120" height="224" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
          <rect x="345" y="62" width="80" height="184" rx="10" fill="rgba(255,255,255,0.06)" />
          <line x1="188" y1="168" x2="325" y2="154" stroke={active.accent} strokeWidth="3" strokeDasharray="8 8" opacity="0.9" />
          <circle cx="325" cy="154" r="6" fill={active.accent} />
          <g transform={`translate(${boatX}, ${boatY}) rotate(-18)`}>
            <ellipse cx="0" cy="0" rx="48" ry="18" fill="rgba(255,255,255,0.08)" />
            <path d="M -38 0 L 8 -18 L 40 -8 L 36 8 L 0 18 L -38 10 Z" fill="#e2e8f0" />
            <rect x="-10" y="-26" width="18" height="14" rx="3" fill="#cbd5e1" />
            <line x1="-4" y1="-28" x2="-4" y2="-58" stroke="#f8fafc" strokeWidth="2" />
            <path d="M -4 -56 L 18 -36 L -4 -36 Z" fill={active.accent} opacity="0.9" />
          </g>
          <text x="38" y="272" fill="rgba(226,232,240,0.72)" fontSize="14" fontWeight="700">
            Kontrollü yaklaşma hattı
          </text>
          <text x="344" y="286" fill="rgba(226,232,240,0.72)" fontSize="14" fontWeight="700">
            Marina / pontoon
          </text>
        </svg>
      );
    }

    if (key === "stern") {
      const boatX = [318, 308, 298, 290][phase];
      const boatY = [208, 194, 182, 170][phase];

      return (
        <svg viewBox="0 0 520 320" width="100%" height="320" style={{ maxWidth: 520 }}>
          <defs>
            <linearGradient id="waterStern" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(134,239,172,0.18)" />
              <stop offset="100%" stopColor="rgba(52,211,153,0.05)" />
            </linearGradient>
          </defs>

          <rect x="0" y="0" width="520" height="320" rx="24" fill="url(#waterStern)" />
          <rect x="72" y="56" width="372" height="20" rx="10" fill="rgba(255,255,255,0.10)" />
          <line x1="260" y1="76" x2="260" y2="248" stroke={active.accent} strokeWidth="3" strokeDasharray="8 8" opacity="0.9" />
          <circle cx="260" cy="76" r="6" fill={active.accent} />
          <g transform={`translate(${boatX}, ${boatY}) rotate(90)`}>
            <ellipse cx="0" cy="0" rx="54" ry="20" fill="rgba(255,255,255,0.08)" />
            <path d="M -42 0 L 8 -18 L 42 -8 L 40 8 L 6 18 L -42 10 Z" fill="#f8fafc" />
            <rect x="-10" y="-26" width="20" height="14" rx="3" fill="#cbd5e1" />
            <line x1="-2" y1="-28" x2="-2" y2="-58" stroke="#f8fafc" strokeWidth="2" />
            <path d="M -2 -56 L 20 -38 L -2 -38 Z" fill={active.accent} opacity="0.9" />
          </g>
          <text x="86" y="44" fill="rgba(226,232,240,0.72)" fontSize="14" fontWeight="700">
            Kıçtan bağlanma hattı
          </text>
          <text x="346" y="284" fill="rgba(226,232,240,0.72)" fontSize="14" fontWeight="700">
            Geri yaklaşma
          </text>
        </svg>
      );
    }

    const boatX = [136, 158, 184, 210][phase];
    const boatY = [154, 148, 144, 140][phase];

    return (
      <svg viewBox="0 0 520 320" width="100%" height="320" style={{ maxWidth: 520 }}>
        <defs>
          <linearGradient id="waterExit" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(252,165,165,0.18)" />
            <stop offset="100%" stopColor="rgba(248,113,113,0.05)" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="520" height="320" rx="24" fill="url(#waterExit)" />
        <rect x="74" y="66" width="116" height="188" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        <rect x="330" y="66" width="116" height="188" rx="18" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" />
        <line x1="198" y1="160" x2="430" y2="136" stroke={active.accent} strokeWidth="3" strokeDasharray="8 8" opacity="0.9" />
        <circle cx="430" cy="136" r="6" fill={active.accent} />
        <g transform={`translate(${boatX}, ${boatY}) rotate(-8)`}>
          <ellipse cx="0" cy="0" rx="52" ry="19" fill="rgba(255,255,255,0.08)" />
          <path d="M -40 0 L 8 -18 L 42 -8 L 38 8 L 4 18 L -40 10 Z" fill="#f8fafc" />
          <rect x="-10" y="-26" width="20" height="14" rx="3" fill="#cbd5e1" />
          <line x1="-2" y1="-28" x2="-2" y2="-56" stroke="#f8fafc" strokeWidth="2" />
          <path d="M -2 -54 L 20 -36 L -2 -36 Z" fill={active.accent} opacity="0.9" />
        </g>
        <text x="92" y="284" fill="rgba(226,232,240,0.72)" fontSize="14" fontWeight="700">
          Marina içi
        </text>
        <text x="360" y="284" fill="rgba(226,232,240,0.72)" fontSize="14" fontWeight="700">
          Çıkış hattı
        </text>
      </svg>
    );
  };

  return (
    <section
      style={{
        borderRadius: 28,
        padding: "28px 24px",
        background:
          "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          padding: "8px 14px",
          borderRadius: 999,
          background: "rgba(103,211,255,0.08)",
          border: "1px solid rgba(103,211,255,0.16)",
          color: "#8ed8ff",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: "uppercase",
          marginBottom: 14,
        }}
      >
        Marina Visual
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: 28,
          fontWeight: 900,
          lineHeight: 1.08,
        }}
      >
        Marina manevraları
        <br />
        görerek öğren
      </h2>

      <p
        style={{
          marginTop: 14,
          color: "rgba(226,232,240,0.80)",
          fontSize: 16,
          lineHeight: 1.8,
          maxWidth: 780,
        }}
      >
        Marina giriş çıkışlarında farkı yaratan şey güç değil; açı, hız, zamanlama
        ve teknenin tepkisini önceden okuyabilmektir. Aşağıdaki mini animasyonlar,
        yaklaşma mantığını sahaya yakın bir dille gösterir.
      </p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.1fr) minmax(300px, 0.9fr)",
          gap: 22,
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: 18,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(9,14,24,0.82))",
            border: "1px solid rgba(255,255,255,0.08)",
            minHeight: 360,
            display: "grid",
            placeItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `radial-gradient(circle at center, ${active.accent}18, transparent 42%)`,
              pointerEvents: "none",
            }}
          />

          {renderBoatScene(active.key)}
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          {maneuvers.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.key}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setPhase(0);
                }}
                style={{
                  textAlign: "left",
                  padding: "16px 18px",
                  borderRadius: 18,
                  background: isActive
                    ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? `1px solid ${item.accent}`
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 10px 24px ${item.accent}22` : "none",
                  transition: "all 0.25s ease",
                  cursor: "pointer",
                  color: "#f8fafc",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: isActive ? item.accent : "rgba(226,232,240,0.58)",
                    marginBottom: 6,
                  }}
                >
                  {item.subtitle}
                </div>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    color: "rgba(226,232,240,0.76)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    marginBottom: 10,
                  }}
                >
                  {item.description}
                </div>

                <div
                  style={{
                    display: "grid",
                    gap: 6,
                  }}
                >
                  {item.steps.map((step) => (
                    <div
                      key={step}
                      style={{
                        display: "flex",
                        gap: 8,
                        alignItems: "flex-start",
                        color: "rgba(226,232,240,0.76)",
                        fontSize: 13,
                        lineHeight: 1.55,
                        fontWeight: 700,
                      }}
                    >
                      <span
                        style={{
                          width: 7,
                          height: 7,
                          borderRadius: "50%",
                          marginTop: 6,
                          flexShrink: 0,
                          background: item.accent,
                          boxShadow: `0 0 10px ${item.accent}77`,
                        }}
                      />
                      {step}
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}