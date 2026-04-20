"use client";

import { useLanguage } from "@/contexts/LanguageProvider";
import type { RelativeWindType } from "@/lib/wind/types";

type WindCompassProps = {
  directionDeg: number;
  cardinalLabel: string;
  relativeWind: RelativeWindType;
};

const COMPASS_16 = [
  { label: "N", deg: 0 },
  { label: "NNE", deg: 22.5 },
  { label: "NE", deg: 45 },
  { label: "ENE", deg: 67.5 },
  { label: "E", deg: 90 },
  { label: "ESE", deg: 112.5 },
  { label: "SE", deg: 135 },
  { label: "SSE", deg: 157.5 },
  { label: "S", deg: 180 },
  { label: "SSW", deg: 202.5 },
  { label: "SW", deg: 225 },
  { label: "WSW", deg: 247.5 },
  { label: "W", deg: 270 },
  { label: "WNW", deg: 292.5 },
  { label: "NW", deg: 315 },
  { label: "NNW", deg: 337.5 },
];

export function WindCompass({
  directionDeg,
  cardinalLabel,
  relativeWind,
}: WindCompassProps) {
  const { t } = useLanguage();
  const exact16 = get16PointLabel(directionDeg);

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
      <style jsx>{`
        @keyframes compassGlowPulse {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(94, 225, 255, 0.08);
          }
          50% {
            box-shadow: 0 0 35px rgba(94, 225, 255, 0.16);
          }
        }

        @keyframes needleGlow {
          0%,
          100% {
            filter: drop-shadow(0 0 8px rgba(112, 226, 255, 0.34));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(112, 226, 255, 0.58));
          }
        }

        @keyframes ringSweep {
          0% {
            transform: rotate(0deg);
            opacity: 0.16;
          }
          50% {
            opacity: 0.28;
          }
          100% {
            transform: rotate(360deg);
            opacity: 0.16;
          }
        }
      `}</style>

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute left-[-16%] top-[10%] h-[240px] w-[240px] rounded-full bg-cyan-300/12 blur-[74px]"
          style={{ animation: "compassGlowPulse 8s ease-in-out infinite" }}
        />
      </div>

      <div className="relative z-10 mb-5">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
          Albatros Academy
        </p>
        <h2 className="mt-2 text-xl font-semibold md:text-2xl">
          {t.windEngine.compass.title}
        </h2>
      </div>

      <div className="relative z-10 grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="flex items-center justify-center">
          <div
            className="relative h-[280px] w-[280px] rounded-full border border-white/10 bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0.02)_45%,_rgba(255,255,255,0.01)_100%)]"
            style={{ animation: "compassGlowPulse 6.8s ease-in-out infinite" }}
          >
            <div
              className="absolute inset-[16px] rounded-full border border-cyan-200/10"
              style={{ animation: "ringSweep 18s linear infinite" }}
            />
            <div className="absolute inset-[34px] rounded-full border border-white/8" />
            <div className="absolute inset-[56px] rounded-full border border-white/6" />

            {COMPASS_16.map((point) => {
              const radius = 122;
              const angle = (point.deg - 90) * (Math.PI / 180);
              const x = 140 + Math.cos(angle) * radius;
              const y = 140 + Math.sin(angle) * radius;
              const major =
                point.label === "N" ||
                point.label === "E" ||
                point.label === "S" ||
                point.label === "W";

              return (
                <div
                  key={point.label}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                  }}
                >
                  <div
                    className={`text-center ${
                      major
                        ? "text-xs font-semibold tracking-[0.24em] text-white/78"
                        : "text-[10px] font-medium tracking-[0.18em] text-white/52"
                    }`}
                  >
                    {point.label}
                  </div>
                </div>
              );
            })}

            {COMPASS_16.map((point, index) => {
              const tickRadius = 112;
              const angle = point.deg * (Math.PI / 180);
              const x = 140 + Math.sin(angle) * tickRadius;
              const y = 140 - Math.cos(angle) * tickRadius;
              const longTick = index % 2 === 0;

              return (
                <div
                  key={`tick-${point.label}`}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/28"
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    width: longTick ? "3px" : "2px",
                    height: longTick ? "14px" : "8px",
                    transform: `translate(-50%, -50%) rotate(${point.deg}deg)`,
                  }}
                />
              );
            })}

            <div
              className="absolute left-1/2 top-1/2 h-[102px] w-[4px] origin-bottom -translate-x-1/2 -translate-y-full rounded-full bg-gradient-to-t from-cyan-300 via-cyan-200 to-white transition-transform duration-500"
              style={{
                transform: `translateX(-50%) translateY(-100%) rotate(${directionDeg}deg)`,
                animation: "needleGlow 4.2s ease-in-out infinite",
              }}
            />

            <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/90 shadow-[0_0_16px_rgba(255,255,255,0.34)]" />
          </div>
        </div>

        <div className="space-y-4">
          <InfoRow label="Primary Cardinal" value={cardinalLabel} />
          <InfoRow label="16-Point Reading" value={exact16} />
          <InfoRow label="Degrees" value={`${Math.round(directionDeg)}°`} />
          <InfoRow label="Relative Wind" value={formatRelativeWind(relativeWind)} />

          <div className="rounded-[22px] border border-white/10 bg-[#08111d]/70 p-4 shadow-[0_0_24px_rgba(80,180,255,0.05)]">
            <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/55">
              Training Insight
            </div>
            <p className="mt-3 text-sm leading-7 text-white/78">
              {t.windEngine.compass.desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function get16PointLabel(directionDeg: number) {
  const normalized = ((directionDeg % 360) + 360) % 360;
  const index = Math.round(normalized / 22.5) % 16;
  return COMPASS_16[index].label;
}

function formatRelativeWind(value: RelativeWindType) {
  switch (value) {
    case "headwind":
      return "Headwind / Baş Rüzgâr";
    case "portBow":
      return "Port Bow / İskele Baş Omuzluk";
    case "starboardBow":
      return "Starboard Bow / Sancak Baş Omuzluk";
    case "portBeam":
      return "Port Beam / İskele Yan Rüzgâr";
    case "starboardBeam":
      return "Starboard Beam / Sancak Yan Rüzgâr";
    case "portQuarter":
      return "Port Quarter / İskele Kıç Omuzluk";
    case "starboardQuarter":
      return "Starboard Quarter / Sancak Kıç Omuzluk";
    case "following":
      return "Following Wind / Kıçtan Rüzgâr";
    default:
      return value;
  }
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[#08111d]/70 px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-sm leading-7 text-white/80">{value}</div>
    </div>
  );
}