"use client";

import { useEffect, useState } from "react";

export default function ColregSafeWaterAnimation() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setPhase((prev) => (prev + 1) % 4);
    }, 700);

    return () => clearInterval(id);
  }, []);

  const pulseA = phase === 0 || phase === 1;
  const pulseB = phase === 3;

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
          background: "rgba(125,211,252,0.08)",
          border: "1px solid rgba(125,211,252,0.16)",
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
        Safe water
        <br />
        işaretini görerek öğren
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
        Safe water işareti, etrafında seyredilebilir su bulunduğunu gösterir.
        Kanal ortası veya emniyetli yaklaşma hattında görülür.
      </p>

      <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(280px, 0.95fr)",
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

          <svg
            viewBox="0 0 300 330"
            width="100%"
            height="330"
            style={{ maxWidth: 300 }}
          >
            <line
              x1="150"
              y1="54"
              x2="150"
              y2="284"
              stroke="rgba(226,232,240,0.34)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <circle
              cx="150"
              cy="28"
              r="14"
              fill="rgba(248,250,252,0.96)"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="2"
            />

            <rect x="124" y="62" width="52" height="38" rx="12" fill="#ef4444" />
            <rect x="124" y="100" width="52" height="38" rx="12" fill="#f8fafc" />
            <rect x="124" y="138" width="52" height="38" rx="12" fill="#ef4444" />
            <rect x="124" y="176" width="52" height="38" rx="12" fill="#f8fafc" />
            <rect x="124" y="214" width="52" height="24" rx="10" fill="#ef4444" />

            <ellipse
              cx="150"
              cy="300"
              rx="62"
              ry="11"
              fill="#8ed8ff"
              opacity="0.14"
            />

            <circle
              cx="212"
              cy="74"
              r={pulseA ? 16 : 10}
              fill="#f8fafc"
              opacity={pulseA ? 0.95 : 0.26}
            />
            <circle
              cx="212"
              cy="108"
              r={pulseB ? 16 : 10}
              fill="#f8fafc"
              opacity={pulseB ? 0.95 : 0.26}
            />
          </svg>
        </div>

        <div
          style={{
            display: "grid",
            gap: 12,
          }}
        >
          {[
            "Kırmızı - beyaz dikey şeritlerle tanınır.",
            "Üstte tek kırmızı küre topmark bulunur.",
            "Her tarafı emniyetli su olabilir.",
            "Gece beyaz ışık karakteri taşır.",
          ].map((item, index) => (
            <div
              key={item}
              style={{
                padding: "16px 18px",
                borderRadius: 18,
                background:
                  index === 0
                    ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                    : "rgba(255,255,255,0.04)",
                border:
                  index === 0
                    ? "1px solid rgba(125,211,252,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  index === 0 ? "0 10px 24px rgba(66,189,248,0.10)" : "none",
                color: "rgba(226,232,240,0.78)",
                fontSize: 14,
                lineHeight: 1.68,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}