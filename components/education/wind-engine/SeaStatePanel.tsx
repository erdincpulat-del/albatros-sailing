"use client";

import { useMemo } from "react";

type SeaStatePanelProps = {
  seaLabel: string;
  seaDetail: string;
  trainingView: string;
  speedKnots: number;
};

export function SeaStatePanel({
  seaLabel,
  seaDetail,
  trainingView,
  speedKnots,
}: SeaStatePanelProps) {
  const scene = useMemo(() => {
    const clamped = Math.max(0, Math.min(speedKnots, 40));
    const normalized = clamped / 40;

    const waveAmpBack = 6 + normalized * 16;
    const waveAmpMid = 10 + normalized * 24;
    const waveAmpFront = 16 + normalized * 34;

    const glow = 0.12 + normalized * 0.18;
    const foam = normalized > 0.2 ? 0.08 + normalized * 0.22 : 0.02;
    const chop = normalized > 0.45 ? 0.2 + normalized * 0.35 : 0.08 + normalized * 0.1;

    const band =
      clamped <= 3
        ? "Mirror / Calm Band"
        : clamped <= 8
        ? "Light Surface Motion"
        : clamped <= 15
        ? "Moderate Training Surface"
        : clamped <= 24
        ? "Active Sea Response"
        : "Heavy Surface Pressure";

    const operationalNote =
      clamped <= 3
        ? "Yüzey çok sakin. Görsel okuma kolay, eğitim başlangıcı için rahat bir ortam oluşur."
        : clamped <= 8
        ? "Yüzey hareketi belirginleşir. Tekne tepkileri daha okunur hale gelir."
        : clamped <= 15
        ? "Dalga formu daha aktif okunur. Eğitim ve karar pratiği anlam kazanır."
        : clamped <= 24
        ? "Deniz yüzeyi operasyonel baskı oluşturmaya başlar. Yorum ve hazırlık daha kritik hale gelir."
        : "Yüzey ciddi şekilde baskılıdır. Eğitim yaklaşımı daha kontrollü ve seçici olmalıdır.";

    return {
      clamped,
      normalized,
      waveAmpBack,
      waveAmpMid,
      waveAmpFront,
      glow,
      foam,
      chop,
      band,
      operationalNote,
    };
  }, [speedKnots]);

  return (
    <section className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,19,34,0.95),rgba(6,11,20,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
            Sea State Response
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Surface Interpretation Panel
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
            Deniz yüzeyinin rüzgâra verdiği cevabı, eğitim yaklaşımını ve
            operasyonel okuma seviyesini birlikte gösteren premium panel.
          </p>
        </div>

        <div className="rounded-[22px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-4 text-sm">
          <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/65">
            Active Surface Band
          </div>
          <div className="mt-2 font-semibold text-white">{scene.band}</div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,#10284b_0%,#0c2040_30%,#0a1a35_60%,#081221_100%)]">
          <style>{`
            @keyframes seaScanGlow {
              0% { opacity: 0.18; transform: translateX(-10%); }
              50% { opacity: 0.32; transform: translateX(10%); }
              100% { opacity: 0.18; transform: translateX(-10%); }
            }
          `}</style>

          <div className="relative h-[360px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(103,211,255,0.16),transparent_22%),radial-gradient(circle_at_78%_10%,rgba(132,155,255,0.09),transparent_26%)]" />

            <div
              className="absolute left-0 top-[22%] h-px w-full bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent"
              style={{ animation: "seaScanGlow 5.4s ease-in-out infinite" }}
            />

            <svg
              viewBox="0 0 900 360"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <defs>
                <linearGradient id="seaBack" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(120,210,255,0.10)" />
                  <stop offset="100%" stopColor="rgba(33,99,160,0.15)" />
                </linearGradient>

                <linearGradient id="seaMid" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(91,188,255,0.22)" />
                  <stop offset="100%" stopColor="rgba(14,66,121,0.30)" />
                </linearGradient>

                <linearGradient id="seaFront" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(116,224,255,0.35)" />
                  <stop offset="100%" stopColor="rgba(10,42,88,0.62)" />
                </linearGradient>
              </defs>

              {/* Back layer */}
              <path
                d={buildWavePath(360, 900, 150, scene.waveAmpBack, 90, 0)}
                fill="url(#seaBack)"
                opacity={0.9}
              />

              {/* Mid layer */}
              <path
                d={buildWavePath(360, 900, 190, scene.waveAmpMid, 74, 0.8)}
                fill="url(#seaMid)"
                opacity={0.96}
              />

              {/* Front layer */}
              <path
                d={buildWavePath(360, 900, 240, scene.waveAmpFront, 58, 1.4)}
                fill="url(#seaFront)"
              />

              {/* Foam highlights */}
              {scene.foam > 0.03
                ? Array.from({ length: 9 }).map((_, i) => (
                    <ellipse
                      key={`foam-${i}`}
                      cx={90 + i * 86}
                      cy={232 + Math.sin(i * 0.8) * 8}
                      rx={18 + scene.foam * 22}
                      ry={2.6 + scene.foam * 5}
                      fill={`rgba(235,248,255,${0.10 + scene.foam})`}
                    />
                  ))
                : null}

              {/* Chop highlights */}
              {scene.chop > 0.08
                ? Array.from({ length: 14 }).map((_, i) => (
                    <path
                      key={`chop-${i}`}
                      d={buildChopStroke(
                        42 + i * 60,
                        208 + Math.sin(i * 0.6) * 12,
                        18 + scene.chop * 16
                      )}
                      fill="none"
                      stroke={`rgba(180,234,255,${0.12 + scene.chop * 0.28})`}
                      strokeWidth={1.4}
                      strokeLinecap="round"
                    />
                  ))
                : null}
            </svg>

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#06101c] to-transparent" />

            <div className="absolute left-4 top-4 rounded-[20px] border border-white/10 bg-black/20 px-4 py-3 backdrop-blur">
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                Surface Signal
              </div>
              <div className="mt-2 text-lg font-semibold text-white">
                {seaLabel}
              </div>
            </div>

            <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-4">
              <MiniReadout
                label="Wind"
                value={`${scene.clamped} kt`}
              />
              <MiniReadout
                label="Back Wave"
                value={scene.waveAmpBack.toFixed(0)}
              />
              <MiniReadout
                label="Front Wave"
                value={scene.waveAmpFront.toFixed(0)}
              />
              <MiniReadout
                label="Foam"
                value={`${Math.round(scene.foam * 100)}%`}
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <InfoCard
            label="Sea State"
            value={seaLabel}
            hint="Current classification"
          />

          <InfoCard
            label="Training View"
            value={trainingView}
            hint="Instruction layer"
          />

          <InfoCard
            label="Surface Behaviour"
            value={scene.band}
            hint="Operational band"
          />

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/70">
              Sea Detail
            </div>
            <p className="mt-3 text-sm leading-7 text-white/72">
              {seaDetail}
            </p>
          </div>

          <div className="rounded-[26px] border border-cyan-300/15 bg-cyan-300/5 p-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
              Albatros Interpretation
            </div>
            <p className="mt-3 text-sm leading-7 text-white/75">
              {scene.operationalNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/48">
        {label}
      </div>
      <div className="mt-3 text-lg font-semibold text-white">{value}</div>
      {hint ? (
        <div className="mt-2 text-xs uppercase tracking-[0.14em] text-cyan-200/65">
          {hint}
        </div>
      ) : null}
    </div>
  );
}

function MiniReadout({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[18px] border border-white/10 bg-[rgba(7,12,22,0.76)] px-3 py-3 backdrop-blur">
      <div className="text-[10px] uppercase tracking-[0.16em] text-white/48">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}

function buildWavePath(
  height: number,
  width: number,
  baseY: number,
  amplitude: number,
  wavelength: number,
  phase: number
) {
  const step = 24;
  let d = `M 0 ${baseY}`;

  for (let x = 0; x <= width; x += step) {
    const y = baseY + Math.sin(x / wavelength + phase) * amplitude;
    d += ` L ${x} ${y}`;
  }

  d += ` L ${width} ${height} L 0 ${height} Z`;
  return d;
}

function buildChopStroke(x: number, y: number, length: number) {
  return `M ${x} ${y} C ${x + length * 0.3} ${y - 4}, ${x + length * 0.7} ${
    y - 4
  }, ${x + length} ${y}`;
}