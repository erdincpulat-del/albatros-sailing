"use client";

import { useEffect, useMemo, useState } from "react";

type LightMode =
  | "fixed"
  | "flashing"
  | "quick"
  | "group2"
  | "group3"
  | "group9"
  | "morseA";

type LightCard = {
  key: LightMode;
  title: string;
  subtitle: string;
  color: string;
  pattern: number[];
  description: string;
};

const lights: LightCard[] = [
  {
    key: "fixed",
    title: "F",
    subtitle: "Fixed",
    color: "#f8fafc",
    pattern: [1, 1, 1, 1, 1, 1],
    description: "Sabit ışık. Sürekli yanar, kesintisiz görünür.",
  },
  {
    key: "flashing",
    title: "Fl",
    subtitle: "Flashing",
    color: "#f8fafc",
    pattern: [1, 0, 0, 0, 1, 0],
    description: "Tek flaş. Kısa bir ışık, ardından uzun karanlık dönem.",
  },
  {
    key: "quick",
    title: "Q",
    subtitle: "Quick Flashing",
    color: "#67d3ff",
    pattern: [1, 0, 1, 0, 1, 0],
    description: "Hızlı flaş. Cardinal işaretlerinde sık görülür.",
  },
  {
    key: "group2",
    title: "Fl(2)",
    subtitle: "Group Flashing 2",
    color: "#86efac",
    pattern: [1, 0, 1, 0, 0, 0],
    description: "İkili grup flaşı. İki ışık, sonra karanlık dönem.",
  },
  {
    key: "group3",
    title: "Fl(3)",
    subtitle: "Group Flashing 3",
    color: "#fca5a5",
    pattern: [1, 0, 1, 0, 1, 0, 0, 0],
    description: "Üçlü grup flaşı. Doğu cardinal mantığını öğrenmekte faydalıdır.",
  },
  {
    key: "group9",
    title: "Q(9)",
    subtitle: "Quick Group 9",
    color: "#fcd34d",
    pattern: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    description: "Dokuzlu hızlı flaş grubu. Batı cardinal ile ilişkilidir.",
  },
  {
    key: "morseA",
    title: "Mo(A)",
    subtitle: "Morse A",
    color: "#8ed8ff",
    pattern: [1, 0, 1, 1, 1, 0, 0, 0],
    description: "Mors A karakteri. Safe water işaretlerinde kullanılır.",
  },
];

export default function ColregLightsSimulation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [step, setStep] = useState(0);

  const active = lights[activeIndex];
  const sequence = useMemo(() => active.pattern, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % sequence.length);
    }, 320);

    return () => clearInterval(interval);
  }, [sequence]);

  const lightOn = sequence[step] === 1;

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
        COLREG Visual
      </div>

      <h2
        style={{
          margin: 0,
          fontSize: 28,
          fontWeight: 900,
          lineHeight: 1.08,
        }}
      >
        Gece fenerleri
        <br />
        flash pattern simülasyonu
      </h2>

      <p
        style={{
          marginTop: 14,
          color: "rgba(226,232,240,0.80)",
          fontSize: 16,
          lineHeight: 1.8,
          maxWidth: 760,
        }}
      >
        Gece seyri sırasında yalnızca rengin değil, ışığın karakterinin de
        okunması gerekir. Sabit, tek flaş, hızlı flaş, grup flaşı ve Morse A
        gibi pattern’ler denizde kritik anlam taşır.
      </p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(300px, 0.95fr)",
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
            minHeight: 390,
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
              background: `radial-gradient(circle at center, ${active.color}22, transparent 42%)`,
              pointerEvents: "none",
            }}
          />

          <svg
            viewBox="0 0 320 320"
            width="100%"
            height="320"
            style={{ maxWidth: 320 }}
          >
            <rect
              x="126"
              y="66"
              width="68"
              height="156"
              rx="22"
              fill="#0f172a"
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="2"
            />

            <rect
              x="148"
              y="222"
              width="24"
              height="42"
              rx="8"
              fill="rgba(226,232,240,0.28)"
            />

            <ellipse
              cx="160"
              cy="286"
              rx="56"
              ry="10"
              fill={active.color}
              opacity="0.12"
            />

            <circle
              cx="160"
              cy="116"
              r={lightOn ? 28 : 14}
              fill={active.color}
              opacity={lightOn ? 0.98 : 0.18}
            />
            <circle
              cx="160"
              cy="116"
              r={lightOn ? 54 : 24}
              fill={active.color}
              opacity={lightOn ? 0.14 : 0}
            />
            <circle
              cx="160"
              cy="116"
              r={lightOn ? 88 : 36}
              fill={active.color}
              opacity={lightOn ? 0.06 : 0}
            />

            <rect
              x="86"
              y="42"
              width="148"
              height="16"
              rx="8"
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.08)"
            />

            {sequence.map((item, index) => (
              <circle
                key={index}
                cx={96 + index * 14}
                cy="50"
                r="4.5"
                fill={
                  index === step
                    ? active.color
                    : item === 1
                    ? "rgba(248,250,252,0.22)"
                    : "rgba(255,255,255,0.08)"
                }
                opacity={index === step ? 1 : 0.9}
              />
            ))}
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          {lights.map((light, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={light.key}
                type="button"
                onClick={() => {
                  setActiveIndex(index);
                  setStep(0);
                }}
                style={{
                  textAlign: "left",
                  padding: "16px 18px",
                  borderRadius: 18,
                  background: isActive
                    ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? `1px solid ${light.color}`
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive ? `0 10px 24px ${light.color}22` : "none",
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
                    color: isActive ? light.color : "rgba(226,232,240,0.58)",
                    marginBottom: 6,
                  }}
                >
                  {light.title}
                </div>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {light.subtitle}
                </div>

                <div
                  style={{
                    color: "rgba(226,232,240,0.76)",
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}
                >
                  {light.description}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}