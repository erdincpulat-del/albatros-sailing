"use client";

import { useEffect, useState } from "react";

const marks = [
  {
    key: "north",
    title: "North Cardinal",
    subtitle: "Kuzey cardinal işareti",
    color: "#67d3ff",
    safe: "Tehlikenin kuzeyinden geçilir.",
    stripes: ["black", "black", "yellow", "yellow"],
    light: "Q veya VQ",
  },
  {
    key: "east",
    title: "East Cardinal",
    subtitle: "Doğu cardinal işareti",
    color: "#86efac",
    safe: "Tehlikenin doğusundan geçilir.",
    stripes: ["black", "yellow", "yellow", "black"],
    light: "Q(3) veya VQ(3)",
  },
  {
    key: "south",
    title: "South Cardinal",
    subtitle: "Güney cardinal işareti",
    color: "#fca5a5",
    safe: "Tehlikenin güneyinden geçilir.",
    stripes: ["yellow", "yellow", "black", "black"],
    light: "Q(6)+LFl veya VQ(6)+LFl",
  },
  {
    key: "west",
    title: "West Cardinal",
    subtitle: "Batı cardinal işareti",
    color: "#fcd34d",
    safe: "Tehlikenin batısından geçilir.",
    stripes: ["yellow", "black", "black", "yellow"],
    light: "Q(9) veya VQ(9)",
  },
];

function Topmark({
  type,
  active,
}: {
  type: "north" | "east" | "south" | "west";
  active: boolean;
}) {
  const color = active ? "#f8fafc" : "rgba(248,250,252,0.82)";

  if (type === "north") {
    return (
      <>
        <polygon points="136,12 150,34 122,34" fill={color} />
        <polygon points="164,12 178,34 150,34" fill={color} />
      </>
    );
  }

  if (type === "east") {
    return (
      <>
        <polygon points="122,10 150,32 136,32" fill={color} />
        <polygon points="178,10 150,32 164,32" fill={color} />
      </>
    );
  }

  if (type === "south") {
    return (
      <>
        <polygon points="122,12 150,12 136,34" fill={color} />
        <polygon points="150,12 178,12 164,34" fill={color} />
      </>
    );
  }

  return (
    <>
      <polygon points="122,12 150,24 136,34" fill={color} />
      <polygon points="178,12 150,24 164,34" fill={color} />
    </>
  );
}

function StripeBlock({
  y,
  height,
  fill,
}: {
  y: number;
  height: number;
  fill: "black" | "yellow";
}) {
  return (
    <rect
      x="122"
      y={y}
      width="56"
      height={height}
      rx="10"
      fill={fill === "black" ? "#111827" : "#facc15"}
    />
  );
}

export default function ColregCardinalAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = marks[activeIndex];

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % marks.length);
    }, 2400);

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
        Cardinal işaretleri
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
        Cardinal işaretleri, tehlikenin hangi tarafında güvenli su bulunduğunu
        gösterir. Renk düzeni, topmark yönü ve ışık karakteri birlikte okunur.
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
              background: `radial-gradient(circle at center, ${active.color}22, transparent 42%)`,
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
              y1="40"
              x2="150"
              y2="286"
              stroke="rgba(226,232,240,0.34)"
              strokeWidth="5"
              strokeLinecap="round"
            />

            <Topmark type={active.key as "north" | "east" | "south" | "west"} active />

            <StripeBlock y={54} height={42} fill={active.stripes[0] as "black" | "yellow"} />
            <StripeBlock y={96} height={58} fill={active.stripes[1] as "black" | "yellow"} />
            <StripeBlock y={154} height={58} fill={active.stripes[2] as "black" | "yellow"} />
            <StripeBlock y={212} height={30} fill={active.stripes[3] as "black" | "yellow"} />

            <ellipse
              cx="150"
              cy="302"
              rx="62"
              ry="11"
              fill={active.color}
              opacity="0.14"
            />

            <circle
              cx="218"
              cy="74"
              r="14"
              fill="#f8fafc"
              opacity="0.88"
            />
            <circle
              cx="218"
              cy="74"
              r="28"
              fill="#f8fafc"
              opacity="0.08"
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
                  boxShadow: isActive ? `0 10px 24px ${mark.color}22` : "none",
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
                  {mark.safe}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(226,232,240,0.58)",
                    fontWeight: 700,
                    letterSpacing: 0.4,
                  }}
                >
                  Işık karakteri: {mark.light}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}