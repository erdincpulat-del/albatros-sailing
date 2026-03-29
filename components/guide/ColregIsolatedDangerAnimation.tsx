"use client";

import { useEffect, useState } from "react";

export default function ColregIsolatedDangerAnimation() {
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setFlash((prev) => !prev);
    }, 900);

    return () => clearInterval(id);
  }, []);

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
          background: "rgba(217,188,119,0.08)",
          border: "1px solid rgba(217,188,119,0.16)",
          color: "#d9bc77",
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
        Isolated danger
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
        Isolated danger işareti, çevresinde seyredilebilir su olsa da tam
        bulunduğu noktada tehlike olduğunu gösterir.
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
                "radial-gradient(circle at center, rgba(217,188,119,0.08), transparent 42%)",
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

            <circle cx="142" cy="22" r="10" fill="#111827" />
            <circle cx="158" cy="40" r="10" fill="#111827" />

            <rect x="126" y="64" width="48" height="52" rx="12" fill="#111827" />
            <rect x="126" y="116" width="48" height="52" rx="12" fill="#facc15" />
            <rect x="126" y="168" width="48" height="52" rx="12" fill="#111827" />
            <rect
              x="120"
              y="220"
              width="60"
              height="24"
              rx="10"
              fill="#111827"
              opacity="0.92"
            />

            <ellipse
              cx="150"
              cy="300"
              rx="62"
              ry="11"
              fill="#facc15"
              opacity="0.14"
            />

            <circle
              cx="210"
              cy="64"
              r={flash ? 18 : 10}
              fill="#f8fafc"
              opacity={flash ? 0.95 : 0.32}
            />
            <circle
              cx="210"
              cy="64"
              r={flash ? 36 : 16}
              fill="#f8fafc"
              opacity={flash ? 0.12 : 0}
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
            "Siyah - sarı - siyah gövde yapısı ile tanınır.",
            "Üst üste iki siyah küre topmark taşır.",
            "Tam bulunduğu noktada tehlike vardır.",
            "Gece beyaz grup ışık karakteri ile tanımlanır.",
          ].map((item, index) => (
            <div
              key={item}
              style={{
                padding: "16px 18px",
                borderRadius: 18,
                background:
                  index === 0
                    ? "linear-gradient(180deg, rgba(217,188,119,0.10), rgba(217,188,119,0.04))"
                    : "rgba(255,255,255,0.04)",
                border:
                  index === 0
                    ? "1px solid rgba(217,188,119,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  index === 0 ? "0 10px 24px rgba(217,188,119,0.10)" : "none",
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