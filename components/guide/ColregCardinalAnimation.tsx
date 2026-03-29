"use client";

import { useEffect, useState } from "react";

type Mark = {
  key: "port" | "starboard";
  title: string;
  subtitle: string;
  color: string;
  body: string;
  topmark: "square" | "cone";
  guidance: string;
  sideLabel: string;
};

const marks: Mark[] = [
  {
    key: "port",
    title: "Port Hand Mark",
    subtitle: "Liman eli işareti",
    color: "#ef4444",
    body: "#ef4444",
    topmark: "square",
    guidance: "Kanala girişte iskele tarafında bırakılır.",
    sideLabel: "İskele",
  },
  {
    key: "starboard",
    title: "Starboard Hand Mark",
    subtitle: "Sancak eli işareti",
    color: "#22c55e",
    body: "#22c55e",
    topmark: "cone",
    guidance: "Kanala girişte sancak tarafında bırakılır.",
    sideLabel: "Sancak",
  },
];

function Topmark({
  type,
  color,
}: {
  type: "square" | "cone";
  color: string;
}) {
  if (type === "square") {
    return <rect x="136" y="18" width="28" height="20" rx="4" fill={color} />;
  }

  return <polygon points="150,14 166,38 134,38" fill={color} />;
}

export default function ColregLateralAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % marks.length);
    }, 2400);

    return () => clearInterval(id);
  }, []);

  const active = marks[activeIndex];

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
        Lateral işaretleri
        <br />
        görerek öğren
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
        Lateral işaretler, kanal veya geçit içinde hangi tarafın iskele ve hangi
        tarafın sancak olduğunu gösterir. Kanala giriş yönü her zaman temel
        referanstır.
      </p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.2fr) minmax(280px, 0.8fr)",
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
              background:
                "radial-gradient(circle at center, rgba(103,211,255,0.07), transparent 42%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "absolute",
              bottom: 18,
              left: 18,
              right: 18,
              height: 32,
              borderRadius: 16,
              background:
                "linear-gradient(180deg, rgba(56,189,248,0.04), rgba(56,189,248,0.16))",
              filter: "blur(2px)",
              opacity: 0.8,
            }}
          />

          <svg
            viewBox="0 0 300 320"
            width="100%"
            height="320"
            style={{ maxWidth: 300 }}
          >
            <line
              x1="150"
              y1="40"
              x2="150"
              y2="276"
              stroke="rgba(226,232,240,0.34)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <Topmark type={active.topmark} color={active.color} />

            <rect
              x="128"
              y="48"
              width="44"
              height="170"
              rx="16"
              fill={active.body}
            />

            <rect
              x="122"
              y="216"
              width="56"
              height="22"
              rx="10"
              fill={active.body}
              opacity="0.86"
            />

            <ellipse
              cx="150"
              cy="290"
              rx="60"
              ry="10"
              fill={active.color}
              opacity="0.18"
            />

            <text
              x="52"
              y="284"
              fill="rgba(226,232,240,0.62)"
              fontSize="13"
              fontWeight="700"
            >
              Kanal girişi
            </text>

            <line
              x1="120"
              y1="280"
              x2="210"
              y2="280"
              stroke="rgba(226,232,240,0.18)"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          {marks.map((mark, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={mark.key}
                style={{
                  padding: "16px 18px",
                  borderRadius: 18,
                  background: isActive
                    ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                    : "rgba(255,255,255,0.04)",
                  border: isActive
                    ? `1px solid ${mark.color}`
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: isActive
                    ? `0 10px 24px ${mark.color}22`
                    : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: isActive ? mark.color : "rgba(226,232,240,0.58)",
                    marginBottom: 6,
                  }}
                >
                  {mark.title}
                </div>

                <div
                  style={{
                    fontSize: 18,
                    fontWeight: 900,
                    color: "#f8fafc",
                    lineHeight: 1.2,
                    marginBottom: 6,
                  }}
                >
                  {mark.subtitle}
                </div>

                <div
                  style={{
                    color: "rgba(226,232,240,0.76)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    marginBottom: 8,
                  }}
                >
                  {mark.guidance}
                </div>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "6px 10px",
                    borderRadius: 999,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#dbeafe",
                    fontSize: 12,
                    fontWeight: 700,
                  }}
                >
                  Güvenli taraf: {mark.sideLabel}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}