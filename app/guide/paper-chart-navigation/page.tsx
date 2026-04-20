"use client";

import { useEffect, useMemo, useState } from "react";

type SolveMode = "compassToTrue" | "trueToCompass";
type DirectionSign = "E" | "W";

function normalize360(value: number) {
  const result = value % 360;
  return result < 0 ? result + 360 : result;
}

function round2(value: number) {
  return Number(value.toFixed(2));
}

function formatDeg(value: number) {
  return `${round2(normalize360(value)).toFixed(1)}°`;
}

function signedFromEW(value: number, dir: DirectionSign) {
  return dir === "E" ? value : -value;
}

function toMagneticFromCompass(
  compass: number,
  deviation: number,
  deviationDir: DirectionSign
) {
  return normalize360(compass + signedFromEW(deviation, deviationDir));
}

function toTrueFromMagnetic(
  magnetic: number,
  variation: number,
  variationDir: DirectionSign
) {
  return normalize360(magnetic + signedFromEW(variation, variationDir));
}

function toMagneticFromTrue(
  trueCourse: number,
  variation: number,
  variationDir: DirectionSign
) {
  return normalize360(trueCourse - signedFromEW(variation, variationDir));
}

function toCompassFromMagnetic(
  magnetic: number,
  deviation: number,
  deviationDir: DirectionSign
) {
  return normalize360(magnetic - signedFromEW(deviation, deviationDir));
}

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export default function PaperChartNavigationPage() {
  const [mounted, setMounted] = useState(false);

  const [mode, setMode] = useState<SolveMode>("compassToTrue");

  const [compass, setCompass] = useState(92);
  const [trueCourse, setTrueCourse] = useState(104);
  const [deviation, setDeviation] = useState(2);
  const [variation, setVariation] = useState(4);
  const [deviationDir, setDeviationDir] = useState<DirectionSign>("W");
  const [variationDir, setVariationDir] = useState<DirectionSign>("E");

  useEffect(() => {
    setMounted(true);
  }, []);

  const data = useMemo(() => {
    const safeCompass = normalize360(compass);
    const safeTrue = normalize360(trueCourse);
    const safeDeviation = Math.abs(deviation);
    const safeVariation = Math.abs(variation);

    if (mode === "compassToTrue") {
      const magnetic = toMagneticFromCompass(
        safeCompass,
        safeDeviation,
        deviationDir
      );
      const trueValue = toTrueFromMagnetic(
        magnetic,
        safeVariation,
        variationDir
      );

      return {
        compass: safeCompass,
        magnetic,
        trueCourse: trueValue,
      };
    }

    const magnetic = toMagneticFromTrue(safeTrue, safeVariation, variationDir);
    const compassValue = toCompassFromMagnetic(
      magnetic,
      safeDeviation,
      deviationDir
    );

    return {
      compass: compassValue,
      magnetic,
      trueCourse: safeTrue,
    };
  }, [mode, compass, trueCourse, deviation, variation, deviationDir, variationDir]);

  const deviationSigned = signedFromEW(Math.abs(deviation), deviationDir);
  const variationSigned = signedFromEW(Math.abs(variation), variationDir);

  const explanation = useMemo(() => {
    if (mode === "compassToTrue") {
      return `Compass rotadan başlıyoruz. Önce deviation uygulanarak Magnetic bulunur, sonra variation uygulanarak True elde edilir. Bu yönde giderken West eklenir, East çıkarılır.`;
    }

    return `True rotadan başlıyoruz. Önce variation geri alınarak Magnetic bulunur, sonra deviation geri alınarak Compass elde edilir. Bu dönüş yönünde West çıkarılır, East eklenir.`;
  }, [mode]);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#14304d_0%,_#09131f_45%,_#050a11_100%)] text-white">
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="max-w-6xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
            Navigasyon • Kâğıt Harita • Compass / Magnetic / True
          </div>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.02] md:text-7xl">
            Compass, Magnetic ve True
            <span className="block">aynı yönün farklı dilleridir.</span>
          </h1>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-white/72 md:text-lg md:leading-8">
            Bu modül deviation ve variation mantığını sadece formül olarak değil,
            görsel akış ve canlı hesap sistemi olarak öğretir. Amaç öğrencinin
            “hangi tarafta ne eklenir, ne çıkarılır?” sorusunu ezberlemek değil,
            yön dönüşümünün mantığını kavramasıdır.
          </p>
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.96),rgba(7,12,21,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Conversion Diagram
                </p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Eğitim diyagramı ve canlı dönüşüm
                </h2>
              </div>

              <div className="rounded-[20px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-sm">
                <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/65">
                  Active Mode
                </div>
                <div className="mt-2 font-semibold text-white">
                  {mode === "compassToTrue" ? "Compass → True" : "True → Compass"}
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(13,24,43,0.96),rgba(8,13,23,0.98))] p-5">
              <div className="mb-5 text-[11px] uppercase tracking-[0.18em] text-white/45">
                West / East Rule Logic
              </div>

              {mounted ? (
                <CompassCorrectionDiagram
                  mode={mode}
                  compass={data.compass}
                  magnetic={data.magnetic}
                  trueCourse={data.trueCourse}
                  deviation={deviationSigned}
                  variation={variationSigned}
                />
              ) : (
                <div className="h-[360px] rounded-[24px] border border-white/10 bg-white/5" />
              )}

              <div className="mt-6 grid gap-4 md:grid-cols-5">
                <DataCell label="Compass" value={formatDeg(data.compass)} />
                <DataCell
                  label="Deviation"
                  value={`${Math.abs(deviation).toFixed(1)}° ${deviationDir}`}
                />
                <DataCell label="Magnetic" value={formatDeg(data.magnetic)} />
                <DataCell
                  label="Variation"
                  value={`${Math.abs(variation).toFixed(1)}° ${variationDir}`}
                />
                <DataCell label="True" value={formatDeg(data.trueCourse)} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <Panel title="Hesap Modu">
              <div className="grid gap-3 sm:grid-cols-2">
                <ToggleCard
                  active={mode === "compassToTrue"}
                  title="Compass → True"
                  text="Pusula rotasından başlayıp manyetik ve gerçek rotayı bul."
                  onClick={() => setMode("compassToTrue")}
                />
                <ToggleCard
                  active={mode === "trueToCompass"}
                  title="True → Compass"
                  text="Gerçek rotadan başlayıp manyetik ve pusula rotasını bul."
                  onClick={() => setMode("trueToCompass")}
                />
              </div>
            </Panel>

            <Panel title="Canlı Girdi Alanı">
              <div className="grid gap-5">
                {mode === "compassToTrue" ? (
                  <InputBlock
                    label="Compass"
                    value={compass}
                    setValue={setCompass}
                    min={0}
                    max={359.9}
                  />
                ) : (
                  <InputBlock
                    label="True"
                    value={trueCourse}
                    setValue={setTrueCourse}
                    min={0}
                    max={359.9}
                  />
                )}

                <div className="grid gap-4 md:grid-cols-[1fr_120px]">
                  <InputBlock
                    label="Deviation"
                    value={deviation}
                    setValue={setDeviation}
                    min={0}
                    max={30}
                  />
                  <DirectionSelect
                    label="Dir"
                    value={deviationDir}
                    setValue={setDeviationDir}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-[1fr_120px]">
                  <InputBlock
                    label="Variation"
                    value={variation}
                    setValue={setVariation}
                    min={0}
                    max={30}
                  />
                  <DirectionSelect
                    label="Dir"
                    value={variationDir}
                    setValue={setVariationDir}
                  />
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setMode("compassToTrue");
                      setCompass(92);
                      setTrueCourse(104);
                      setDeviation(2);
                      setVariation(4);
                      setDeviationDir("W");
                      setVariationDir("E");
                    }}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/8"
                  >
                    Reset
                  </button>

                  <div className="rounded-full border border-cyan-300/15 bg-cyan-300/8 px-5 py-3 text-sm text-cyan-50">
                    {mode === "compassToTrue"
                      ? "West ekle / East çıkar"
                      : "West çıkar / East ekle"}
                  </div>
                </div>
              </div>
            </Panel>

            <Panel title="Canlı Eğitim Yorumu">
              <div className="rounded-[22px] border border-cyan-300/15 bg-cyan-300/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                  Rule Memory
                </div>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  {explanation}
                </p>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <DataCell label="Deviation Sign" value={`${deviationSigned >= 0 ? "+" : ""}${deviationSigned.toFixed(1)}°`} />
                <DataCell label="Variation Sign" value={`${variationSigned >= 0 ? "+" : ""}${variationSigned.toFixed(1)}°`} />
              </div>
            </Panel>
          </section>
        </div>
      </section>
    </main>
  );
}

function CompassCorrectionDiagram({
  mode,
  compass,
  magnetic,
  trueCourse,
  deviation,
  variation,
}: {
  mode: SolveMode;
  compass: number;
  magnetic: number;
  trueCourse: number;
  deviation: number;
  variation: number;
}) {
  const compassDeg = round2(compass);
  const magneticDeg = round2(magnetic);
  const trueDeg = round2(trueCourse);

  return (
    <div className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
      <svg viewBox="0 0 1100 360" className="w-full" fill="none">
        <defs>
          <linearGradient id="diagramGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(103,211,255,0.18)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.95)" />
            <stop offset="100%" stopColor="rgba(103,211,255,0.18)" />
          </linearGradient>
        </defs>

        <text x="95" y="185" fill="white" fontSize="26" fontWeight="700">
          Compass
        </text>
        <text x="485" y="185" fill="white" fontSize="26" fontWeight="700">
          Magnetic
        </text>
        <text x="905" y="185" fill="white" fontSize="26" fontWeight="700">
          True
        </text>

        <path
          d="M 150 100 C 285 18, 410 18, 530 100"
          stroke="url(#diagramGlow)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 550 100 C 685 18, 810 18, 930 100"
          stroke="url(#diagramGlow)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <path d="M 530 100 l -16 -6 l 8 18" stroke="url(#diagramGlow)" strokeWidth="3.5" />
        <path d="M 930 100 l -16 -6 l 8 18" stroke="url(#diagramGlow)" strokeWidth="3.5" />

        <path
          d="M 530 255 C 405 338, 270 338, 135 255"
          stroke="url(#diagramGlow)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <path
          d="M 930 255 C 805 338, 670 338, 535 255"
          stroke="url(#diagramGlow)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        <path d="M 135 255 l 18 -6 l -8 18" stroke="url(#diagramGlow)" strokeWidth="3.5" />
        <path d="M 535 255 l 18 -6 l -8 18" stroke="url(#diagramGlow)" strokeWidth="3.5" />

        <text x="258" y="68" fill="#c8f2ff" fontSize="22" fontWeight="600">
          + west  - east
        </text>
        <text x="664" y="68" fill="#c8f2ff" fontSize="22" fontWeight="600">
          + west  - east
        </text>

        <text x="225" y="306" fill="#c8f2ff" fontSize="22" fontWeight="600">
          - west  + east
        </text>
        <text x="630" y="306" fill="#c8f2ff" fontSize="22" fontWeight="600">
          - west  + east
        </text>

        <text x="244" y="162" fill="#9bdcff" fontSize="20">
          ± deviation
        </text>
        <text x="652" y="162" fill="#9bdcff" fontSize="20">
          ± variation
        </text>

        <ArrowVector
          cx={145}
          cy={185}
          deg={compassDeg}
          color="#8be0ff"
          label={formatDeg(compassDeg)}
        />
        <ArrowVector
          cx={545}
          cy={185}
          deg={magneticDeg}
          color="#f8fafc"
          label={formatDeg(magneticDeg)}
        />
        <ArrowVector
          cx={945}
          cy={185}
          deg={trueDeg}
          color="#d9bc77"
          label={formatDeg(trueDeg)}
        />

        <text x="228" y="210" fill="rgba(255,255,255,0.76)" fontSize="18" fontWeight="600">
          {deviation >= 0 ? "+" : ""}
          {deviation.toFixed(1)}°
        </text>
        <text x="645" y="210" fill="rgba(255,255,255,0.76)" fontSize="18" fontWeight="600">
          {variation >= 0 ? "+" : ""}
          {variation.toFixed(1)}°
        </text>

        <text x="430" y="340" fill="rgba(200,242,255,0.72)" fontSize="17" fontWeight="600">
          {mode === "compassToTrue"
            ? "Forward conversion: Compass → Magnetic → True"
            : "Reverse conversion: True → Magnetic → Compass"}
        </text>
      </svg>
    </div>
  );
}

function ArrowVector({
  cx,
  cy,
  deg,
  color,
  label,
}: {
  cx: number;
  cy: number;
  deg: number;
  color: string;
  label: string;
}) {
  const safeDeg = round2(deg);
  const radians = (safeDeg - 90) * (Math.PI / 180);
  const length = 74;

  const x2 = round2(cx + Math.cos(radians) * length);
  const y2 = round2(cy + Math.sin(radians) * length);

  const headLen = 16;
  const headAngle = 24 * (Math.PI / 180);

  const hx1 = round2(
    x2 - Math.cos(radians - headAngle) * headLen
  );
  const hy1 = round2(
    y2 - Math.sin(radians - headAngle) * headLen
  );
  const hx2 = round2(
    x2 - Math.cos(radians + headAngle) * headLen
  );
  const hy2 = round2(
    y2 - Math.sin(radians + headAngle) * headLen
  );

  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r="48"
        fill="rgba(255,255,255,0.02)"
        stroke="rgba(255,255,255,0.08)"
      />
      <line
        x1={cx}
        y1={cy}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d={`M ${x2} ${y2} L ${hx1} ${hy1} M ${x2} ${y2} L ${hx2} ${hy2}`}
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx={cx} cy={cy} r="5" fill={color} />
      <text
        x={cx - 28}
        y={cy + 74}
        fill={color}
        fontSize="16"
        fontWeight="700"
      >
        {label}
      </text>
    </g>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function DataCell({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function ToggleCard({
  active,
  title,
  text,
  onClick,
}: {
  active: boolean;
  title: string;
  text: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border px-4 py-4 text-left transition ${
        active
          ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
          : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8"
      }`}
    >
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-2 text-xs leading-6 opacity-75">{text}</div>
    </button>
  );
}

function InputBlock({
  label,
  value,
  setValue,
  min,
  max,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <input
        type="number"
        step="0.1"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(clamp(Number(e.target.value || 0), min, max))}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/35"
      />
    </div>
  );
}

function DirectionSelect({
  label,
  value,
  setValue,
}: {
  label: string;
  value: DirectionSign;
  setValue: (v: DirectionSign) => void;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value as DirectionSign)}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-[#0b1320] px-4 py-3 text-white outline-none transition focus:border-cyan-300/35"
      >
        <option value="E">East</option>
        <option value="W">West</option>
      </select>
    </div>
  );
}