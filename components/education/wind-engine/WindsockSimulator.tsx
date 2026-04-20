"use client";

import { useMemo } from "react";

type Turbulence = "stable" | "light" | "moderate" | "strong" | string;

type WindsockSimulatorProps = {
  speedKnots: number;
  directionDeg?: number;
  extensionPercent?: number;
  turbulence?: Turbulence;
  className?: string;
};

type SegmentShape = {
  path: string;
  shadowPath: string;
  seamPath: string;
  opacity: number;
};

export function WindsockSimulator({
  speedKnots,
  directionDeg = 0,
  extensionPercent,
  turbulence = "stable",
  className = "",
}: WindsockSimulatorProps) {
  const scene = useMemo(() => {
    const clampedSpeed = clamp(speedKnots, 0, 40);

    const fillPercent =
      typeof extensionPercent === "number"
        ? clamp(extensionPercent, 0, 100)
        : clamp((clampedSpeed / 18) * 100, 0, 100);

    const normalized = fillPercent / 100;

    const droopDeg = 82 - normalized * 76;
    const riseOffset = 24 + normalized * 38;
    const visibleLength = 72 + normalized * 220;

    const mouthScaleX = 0.88 + normalized * 0.3;
    const mouthScaleY = 0.9 + normalized * 0.2;

    const clothTension = 0.22 + normalized * 0.78;
    const bodyThickness = 24 - normalized * 7.5;
    const tailThickness = 13 - normalized * 5.4;

    const waveAmp =
      turbulence === "strong"
        ? 9
        : turbulence === "moderate"
        ? 6
        : turbulence === "light"
        ? 3
        : 1.4;

    const flutterSpeed =
      turbulence === "strong"
        ? "0.9s"
        : turbulence === "moderate"
        ? "1.35s"
        : turbulence === "light"
        ? "1.9s"
        : "2.8s";

    const gustFactor =
      turbulence === "strong"
        ? "High"
        : turbulence === "moderate"
        ? "Moderate"
        : turbulence === "light"
        ? "Light"
        : "Stable";

    const clothState =
      normalized < 0.12
        ? "Slack"
        : normalized < 0.35
        ? "Partial Fill"
        : normalized < 0.68
        ? "Pressurized"
        : normalized < 0.9
        ? "Extended"
        : "Full Extension";

    return {
      clampedSpeed,
      fillPercent,
      normalized,
      droopDeg,
      riseOffset,
      visibleLength,
      mouthScaleX,
      mouthScaleY,
      clothTension,
      bodyThickness,
      tailThickness,
      waveAmp,
      flutterSpeed,
      gustFactor,
      clothState,
    };
  }, [speedKnots, extensionPercent, turbulence]);

  const rotation = directionDeg;
  const segments = buildPremiumSegments(scene);
  const seamLines = buildSeams(scene);

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: "100%",
        minHeight: 390,
        overflow: "hidden",
        borderRadius: 30,
        background:
          "radial-gradient(circle at 20% 18%, rgba(116,211,255,0.18), transparent 22%), radial-gradient(circle at 80% 10%, rgba(117,146,255,0.08), transparent 24%), linear-gradient(180deg, #10284d 0%, #0c1d39 24%, #0a1730 54%, #08111f 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -30px 80px rgba(0,0,0,0.22), 0 30px 70px rgba(0,0,0,0.22)",
      }}
    >
      <style>{`
        @keyframes ws-premium-flutter {
          0%   { transform: translateY(0px) skewY(0deg) rotate(0deg); }
          20%  { transform: translateY(-1px) skewY(-1.2deg) rotate(-0.25deg); }
          40%  { transform: translateY(0px) skewY(0.8deg) rotate(0.18deg); }
          60%  { transform: translateY(1px) skewY(1.4deg) rotate(0.28deg); }
          80%  { transform: translateY(-1px) skewY(-0.8deg) rotate(-0.18deg); }
          100% { transform: translateY(0px) skewY(0deg) rotate(0deg); }
        }

        @keyframes ws-premium-glow {
          0%   { opacity: 0.36; }
          50%  { opacity: 0.64; }
          100% { opacity: 0.36; }
        }

        @keyframes ws-scan {
          0%   { transform: translateX(-20%); opacity: 0.0; }
          20%  { opacity: 0.08; }
          50%  { opacity: 0.16; }
          80%  { opacity: 0.08; }
          100% { transform: translateX(120%); opacity: 0.0; }
        }
      `}</style>

      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), transparent 20%, transparent 72%, rgba(255,255,255,0.015))",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "24%",
            left: "-10%",
            width: "50%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(103,211,255,0.28), transparent)",
            filter: "blur(2px)",
            animation: "ws-scan 5.2s linear infinite",
          }}
        />
      </div>

      <svg
        viewBox="0 0 980 450"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        <defs>
          <linearGradient id="pole-main" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#edf6ff" />
            <stop offset="20%" stopColor="#cad9ea" />
            <stop offset="55%" stopColor="#8da4bc" />
            <stop offset="100%" stopColor="#53677c" />
          </linearGradient>

          <linearGradient id="pole-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
          </linearGradient>

          <linearGradient id="ring-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff7a71" />
            <stop offset="100%" stopColor="#d33139" />
          </linearGradient>

          <linearGradient id="sock-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff7d73" />
            <stop offset="55%" stopColor="#ef4a50" />
            <stop offset="100%" stopColor="#b92032" />
          </linearGradient>

          <linearGradient id="sock-white" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#eef5fc" />
            <stop offset="100%" stopColor="#cfd9e4" />
          </linearGradient>

          <linearGradient id="sock-inner-shadow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(0,0,0,0.0)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.18)" />
          </linearGradient>

          <filter id="soft-shadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="rgba(0,0,0,0.34)" />
          </filter>

          <filter id="cyan-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor="rgba(103,211,255,0.24)" />
          </filter>
        </defs>

        {/* Background horizon lines */}
        {Array.from({ length: 5 }).map((_, index) => (
          <line
            key={`grid-${index}`}
            x1="0"
            y1={72 + index * 62}
            x2="980"
            y2={72 + index * 62}
            stroke="rgba(255,255,255,0.035)"
            strokeWidth="1"
          />
        ))}

        {/* Pole */}
        <g filter="url(#soft-shadow)">
          <rect x="118" y="44" width="18" height="326" rx="9" fill="url(#pole-main)" />
          <rect x="120" y="44" width="4" height="326" rx="2" fill="url(#pole-edge)" />
          <circle cx="127" cy="44" r="15" fill="url(#ring-red)" />
          <circle cx="127" cy="44" r="8.5" fill="#9d1f2c" />
          <rect x="122" y="88" width="10" height="84" rx="5" fill="#ef4f59" opacity="0.95" />
        </g>

        {/* Windsock arm + body */}
        <g transform={`translate(127 86) rotate(${rotation})`}>
          <circle cx="0" cy="0" r="7.5" fill="#dbe7f5" stroke="#8ca1b8" strokeWidth="2.2" />
          <rect x="0" y="-4" width="36" height="8" rx="4" fill="#d7e4f2" />
          <rect x="0" y="-1.5" width="36" height="3" rx="1.5" fill="rgba(255,255,255,0.48)" />

          <g
            transform={`translate(34 ${-scene.riseOffset}) rotate(${scene.droopDeg})`}
            style={{
              transformOrigin: "0px 0px",
              animation: `ws-premium-flutter ${scene.flutterSpeed} ease-in-out infinite`,
            }}
          >
            {/* outer flow glow */}
            <ellipse
              cx={scene.visibleLength * 0.44}
              cy={8}
              rx={scene.visibleLength * 0.62}
              ry={42}
              fill="rgba(103,211,255,0.10)"
              filter="url(#cyan-glow)"
              style={{ animation: "ws-premium-glow 2.8s ease-in-out infinite" }}
            />

            {/* mouth */}
            <g transform={`scale(${scene.mouthScaleX} ${scene.mouthScaleY})`}>
              <ellipse
                cx="0"
                cy="0"
                rx="28"
                ry="23"
                fill="url(#ring-red)"
                stroke="rgba(255,232,235,0.95)"
                strokeWidth="2"
              />
              <ellipse
                cx="0"
                cy="0"
                rx="19"
                ry="15.5"
                fill="#f7fbff"
                opacity={0.98}
              />
              <ellipse
                cx="-5"
                cy="-3"
                rx="10"
                ry="7"
                fill="rgba(255,255,255,0.34)"
              />
            </g>

            {/* body segments */}
            {segments.map((seg, index) => (
              <g key={`seg-${index}`} filter="url(#soft-shadow)">
                <path
                  d={seg.path}
                  fill={index % 2 === 0 ? "url(#sock-red)" : "url(#sock-white)"}
                  opacity={seg.opacity}
                  stroke="rgba(255,255,255,0.18)"
                  strokeWidth="1"
                />
                <path
                  d={seg.shadowPath}
                  fill="url(#sock-inner-shadow)"
                  opacity="0.72"
                />
                <path
                  d={seg.seamPath}
                  fill="none"
                  stroke="rgba(20,28,40,0.24)"
                  strokeWidth="2"
                  opacity="0.5"
                />
              </g>
            ))}

            {/* seam dividers */}
            {seamLines.map((line, index) => (
              <path
                key={`line-${index}`}
                d={line}
                fill="none"
                stroke="rgba(0,0,0,0.22)"
                strokeWidth="2.1"
                opacity="0.46"
              />
            ))}

            {/* tail air shimmer */}
            <ellipse
              cx={scene.visibleLength + 12}
              cy={tailCenterY(scene.visibleLength, scene.waveAmp, scene.clothTension)}
              rx={18}
              ry={8}
              fill="rgba(103,211,255,0.14)"
              filter="url(#cyan-glow)"
            />
          </g>
        </g>
      </svg>

      <div
        style={{
          position: "absolute",
          left: 18,
          right: 18,
          bottom: 18,
          display: "grid",
          gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
          gap: 10,
        }}
      >
        <ReadoutCard
          label="Wind Fill"
          value={`${Math.round(scene.fillPercent)}%`}
        />
        <ReadoutCard
          label="Flow Bearing"
          value={`${Math.round(rotation)}°`}
        />
        <ReadoutCard
          label="Gust Factor"
          value={scene.gustFactor}
        />
        <ReadoutCard
          label="Cloth State"
          value={scene.clothState}
        />
      </div>
    </div>
  );
}

function ReadoutCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        padding: "10px 12px",
        background: "rgba(7,12,22,0.76)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
    >
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(226,232,240,0.56)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 6,
          fontSize: 14,
          fontWeight: 800,
          color: "#f8fafc",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function buildPremiumSegments(scene: {
  visibleLength: number;
  bodyThickness: number;
  tailThickness: number;
  waveAmp: number;
  clothTension: number;
  fillPercent: number;
}): SegmentShape[] {
  const segmentCount = 4;
  const segLen = scene.visibleLength / segmentCount;

  return Array.from({ length: segmentCount }).map((_, index) => {
    const x0 = index * segLen;
    const x1 = (index + 1) * segLen;

    const top0 = topY(
      x0,
      scene.waveAmp,
      scene.clothTension,
      scene.bodyThickness,
      scene.tailThickness,
      scene.visibleLength
    );
    const top1 = topY(
      x1,
      scene.waveAmp,
      scene.clothTension,
      scene.bodyThickness,
      scene.tailThickness,
      scene.visibleLength
    );
    const bot1 = bottomY(
      x1,
      scene.waveAmp,
      scene.clothTension,
      scene.bodyThickness,
      scene.tailThickness,
      scene.visibleLength
    );
    const bot0 = bottomY(
      x0,
      scene.waveAmp,
      scene.clothTension,
      scene.bodyThickness,
      scene.tailThickness,
      scene.visibleLength
    );

    const opacity = 0.84 + (scene.fillPercent / 100) * 0.16;

    const path = `
      M ${x0} ${top0}
      C ${x0 + segLen * 0.34} ${top0 - scene.waveAmp * 0.85},
        ${x1 - segLen * 0.32} ${top1 - scene.waveAmp * 0.45},
        ${x1} ${top1}
      L ${x1} ${bot1}
      C ${x1 - segLen * 0.32} ${bot1 + scene.waveAmp * 0.55},
        ${x0 + segLen * 0.34} ${bot0 + scene.waveAmp * 0.45},
        ${x0} ${bot0}
      Z
    `;

    const shadowPath = `
      M ${x0} ${midY(top0, bot0)}
      C ${x0 + segLen * 0.22} ${midY(top0, bot0) + 4},
        ${x1 - segLen * 0.28} ${midY(top1, bot1) + 6},
        ${x1} ${midY(top1, bot1)}
      L ${x1} ${bot1}
      C ${x1 - segLen * 0.32} ${bot1 + 3},
        ${x0 + segLen * 0.24} ${bot0 + 3},
        ${x0} ${bot0}
      Z
    `;

    const seamPath = `
      M ${x0 + segLen * 0.06} ${top0 + 1}
      C ${x0 + segLen * 0.4} ${top0 + 3},
        ${x1 - segLen * 0.32} ${top1 + 4},
        ${x1 - segLen * 0.04} ${top1 + 1}
    `;

    return { path, shadowPath, seamPath, opacity };
  });
}

function buildSeams(scene: {
  visibleLength: number;
  waveAmp: number;
  clothTension: number;
  bodyThickness: number;
  tailThickness: number;
}) {
  const segmentCount = 4;
  const segLen = scene.visibleLength / segmentCount;

  return Array.from({ length: segmentCount - 1 }).map((_, index) => {
    const x = (index + 1) * segLen;
    const top = topY(
      x,
      scene.waveAmp,
      scene.clothTension,
      scene.bodyThickness,
      scene.tailThickness,
      scene.visibleLength
    );
    const bottom = bottomY(
      x,
      scene.waveAmp,
      scene.clothTension,
      scene.bodyThickness,
      scene.tailThickness,
      scene.visibleLength
    );

    return `
      M ${x} ${top}
      C ${x + 3} ${(top + bottom) * 0.42},
        ${x - 3} ${(top + bottom) * 0.72},
        ${x} ${bottom}
    `;
  });
}

function topY(
  x: number,
  waveAmp: number,
  clothTension: number,
  bodyThickness: number,
  tailThickness: number,
  length: number
) {
  const thickness = lerp(bodyThickness, tailThickness, x / Math.max(length, 1));
  const wave = Math.sin(x / 46) * waveAmp * (1 - clothTension * 0.34);
  return -thickness + wave;
}

function bottomY(
  x: number,
  waveAmp: number,
  clothTension: number,
  bodyThickness: number,
  tailThickness: number,
  length: number
) {
  const thickness = lerp(bodyThickness, tailThickness, x / Math.max(length, 1));
  const wave = Math.sin(x / 50 + 0.48) * waveAmp * (1 - clothTension * 0.26);
  return thickness + wave;
}

function tailCenterY(x: number, waveAmp: number, clothTension: number) {
  const top = Math.sin(x / 46) * waveAmp * (1 - clothTension * 0.34) - 10;
  const bottom = Math.sin(x / 50 + 0.48) * waveAmp * (1 - clothTension * 0.26) + 10;
  return (top + bottom) / 2;
}

function midY(a: number, b: number) {
  return (a + b) / 2;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}