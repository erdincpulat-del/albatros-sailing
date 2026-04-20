"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { getBeaufort, BEAUFORT_SCALE_DATA } from "@/lib/wind/beaufort";
import { getCompassInfo } from "@/lib/wind/compass";
import { getCaptainDecision } from "@/lib/wind/interpretations";
import { SCENARIOS } from "@/lib/wind/scenarios";
import { getSeaState } from "@/lib/wind/seaState";
import { getWindsockState } from "@/lib/wind/windsock";
import type { Scenario } from "@/lib/wind/types";

import { WindEngineHero } from "@/components/education/wind-engine/WindEngineHero";
import { WindCompass } from "@/components/education/wind-engine/WindCompass";
import { CaptainDecisionPanel } from "@/components/education/wind-engine/CaptainDecisionPanel";
import { MicroLessons } from "@/components/education/wind-engine/MicroLessons";
import { WindQuizPanel } from "@/components/education/wind-engine/WindQuizPanel";
import { PremiumLearningSummary } from "@/components/education/wind-engine/PremiumLearningSummary";
import { PremiumPolishStrip } from "@/components/education/wind-engine/PremiumPolishStrip";
import { ScenarioTrainingCases } from "@/components/education/wind-engine/ScenarioTrainingCases";

const SeaStatePanel = dynamic(
  () =>
    import("@/components/education/wind-engine/SeaStatePanel").then(
      (mod) => mod.SeaStatePanel
    ),
  {
    ssr: false,
    loading: () => (
      <section className="rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
        <div className="animate-pulse">
          <div className="h-4 w-40 rounded bg-white/10" />
          <div className="mt-4 h-8 w-72 rounded bg-white/10" />
          <div className="mt-4 h-[320px] rounded-[24px] bg-white/5" />
        </div>
      </section>
    ),
  }
);

type HeroTurbulence = "stable" | "light" | "moderate" | "strong";

function normalizeTurbulence(value: unknown): HeroTurbulence {
  const v = String(value ?? "").toLowerCase();

  if (v === "strong") return "strong";
  if (v === "moderate") return "moderate";
  if (v === "light") return "light";
  return "stable";
}

export default function WindEnginePage() {
  const [speedKnots, setSpeedKnots] = useState<number>(12);
  const [directionDeg, setDirectionDeg] = useState<number>(315);
  const [scenario, setScenario] = useState<Scenario>("sailTraining");

  const beaufort = useMemo(() => getBeaufort(speedKnots), [speedKnots]);
  const seaState = useMemo(() => getSeaState(speedKnots), [speedKnots]);
  const windsock = useMemo(() => getWindsockState(speedKnots), [speedKnots]);
  const compass = useMemo(() => getCompassInfo(directionDeg), [directionDeg]);

  const decision = useMemo(
    () => getCaptainDecision(speedKnots, directionDeg, scenario),
    [speedKnots, directionDeg, scenario]
  );

  const activeScenario = useMemo(
    () => SCENARIOS.find((item) => item.value === scenario) ?? SCENARIOS[0],
    [scenario]
  );

  const heroTurbulence = useMemo<HeroTurbulence>(
    () => normalizeTurbulence(windsock.turbulence),
    [windsock.turbulence]
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#14304d_0%,_#09131f_45%,_#050a11_100%)] text-white">
      <section className="mx-auto max-w-[1440px] px-4 pb-14 pt-28 md:px-6 md:pb-20 md:pt-32">
        <div className="mb-10">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
            Albatros Academy • Wind Engine
          </div>

          <h1 className="mt-5 max-w-6xl text-4xl font-semibold leading-tight md:text-6xl">
            Wind Interpretation & Maritime Awareness Engine
          </h1>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/70 md:text-base">
            Rüzgâr torbası, Beaufort skalası, rüzgâr pusulası, deniz yüzeyi ve
            operasyonel karar mantığını tek bir profesyonel eğitim motorunda
            birleştiren etkileşimli denizcilik alanı.
          </p>
        </div>

        <div className="space-y-8">
          <div className="grid gap-8 xl:grid-cols-[1.32fr_0.68fr] xl:items-start">
            <div className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,30,0.96),rgba(8,17,31,0.98))] p-4 shadow-[0_0_50px_rgba(52,180,255,0.08)] backdrop-blur md:p-6">
              <WindEngineHero
                speedKnots={speedKnots}
                directionDeg={directionDeg}
                beaufortForce={beaufort.force}
                beaufortName={beaufort.name}
                windsockLabel={windsock.label}
                extensionPercent={windsock.extensionPercent}
                turbulence={heroTurbulence}
                cardinalLabel={compass.cardinalLabel}
                degreeLabel={compass.directionLabel}
                seaLabel={seaState.label}
                status={decision.status}
              />
            </div>

            <div className="space-y-6">
              <Panel title="Wind Controls">
                <div>
                  <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
                    Wind Speed
                  </label>

                  <div className="mt-3 flex items-center gap-4">
                    <input
                      type="range"
                      min={0}
                      max={50}
                      step={1}
                      value={speedKnots}
                      onChange={(e) => setSpeedKnots(Number(e.target.value))}
                      className="w-full accent-cyan-300"
                    />
                    <div className="min-w-[74px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium">
                      {speedKnots} kt
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
                    Wind Direction
                  </label>

                  <div className="mt-3 flex items-center gap-4">
                    <input
                      type="range"
                      min={0}
                      max={359}
                      step={1}
                      value={directionDeg}
                      onChange={(e) => setDirectionDeg(Number(e.target.value))}
                      className="w-full accent-amber-300"
                    />
                    <div className="min-w-[92px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium">
                      {compass.directionLabel}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
                    Scenario
                  </label>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {SCENARIOS.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setScenario(item.value)}
                        className={`rounded-2xl border px-3 py-3 text-left transition ${
                          scenario === item.value
                            ? "border-amber-300/35 bg-amber-300/10 text-amber-50"
                            : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8"
                        }`}
                      >
                        <div className="text-sm font-medium">{item.label}</div>
                        <div className="mt-1 text-[11px] leading-5 opacity-75">
                          {item.detail}
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="mt-4 rounded-2xl border border-cyan-300/15 bg-cyan-300/5 px-4 py-3">
                    <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/70">
                      Active Scenario
                    </div>
                    <div className="mt-2 text-sm font-medium text-white">
                      {activeScenario.label}
                    </div>
                    <div className="mt-1 text-xs leading-6 text-white/60">
                      {activeScenario.detail}
                    </div>
                  </div>
                </div>
              </Panel>

              <CaptainDecisionPanel
                status={decision.status}
                summary={decision.summary}
                marinaNote={decision.marinaNote}
                sailingNote={decision.sailingNote}
                anchorageNote={decision.anchorageNote}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-6">
            <DataBox label="Wind" value={`${speedKnots} kt`} hint="Live speed" />
            <DataBox
              label="Direction"
              value={`${compass.cardinalLabel} • ${compass.directionLabel}`}
              hint="Bearing"
            />
            <DataBox
              label="Beaufort"
              value={`Bf ${beaufort.force} • ${beaufort.name}`}
              hint="Classification"
            />
            <DataBox label="Sea State" value={seaState.label} hint="Surface response" />
            <DataBox label="Flow" value={heroTurbulence} hint="Turbulence" />
            <DataBox label="Status" value={decision.status} hint="Decision band" />
          </div>

          <PremiumPolishStrip
            speedKnots={speedKnots}
            directionLabel={`${compass.cardinalLabel} • ${compass.directionLabel}`}
            beaufortLabel={`Bf ${beaufort.force} • ${beaufort.name}`}
          />

          <div className="grid gap-8 xl:grid-cols-[0.86fr_1.14fr]">
            <WindCompass
              directionDeg={directionDeg}
              cardinalLabel={compass.cardinalLabel}
              relativeWind={compass.relativeWind}
            />

            <SeaStatePanel
              seaLabel={seaState.label}
              seaDetail={seaState.detail}
              trainingView={seaState.trainingView}
              speedKnots={speedKnots}
            />
          </div>

          <ScenarioTrainingCases
            speedKnots={speedKnots}
            scenario={scenario}
            cardinalLabel={compass.cardinalLabel}
            directionDeg={directionDeg}
            relativeWind={compass.relativeWind}
            status={decision.status}
          />

          <MicroLessons />

          <div className="grid gap-8 xl:grid-cols-[1fr_1fr]">
            <WindQuizPanel
              speedKnots={speedKnots}
              beaufortForce={beaufort.force}
              cardinalLabel={compass.cardinalLabel}
              relativeWind={compass.relativeWind}
              status={decision.status}
            />

            <PremiumLearningSummary
              beaufortForce={beaufort.force}
              cardinalLabel={compass.cardinalLabel}
              seaLabel={seaState.label}
              status={decision.status}
            />
          </div>

          <section className="rounded-[30px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <div className="mb-5">
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                Beaufort Explorer
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Operational Wind Classification
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {BEAUFORT_SCALE_DATA.map((item) => {
                const active = item.force === beaufort.force;

                return (
                  <div
                    key={item.force}
                    className={`rounded-[24px] border p-5 transition ${
                      active
                        ? "border-amber-300/40 bg-amber-300/10 shadow-[0_0_30px_rgba(255,214,102,0.08)]"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-white/60">
                        Bf {item.force}
                      </span>
                      <span className="text-xs text-white/45">
                        {item.knotRange}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
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

function DataBox({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="text-[10px] uppercase tracking-[0.16em] text-white/48">
        {label}
      </div>
      <div className="mt-2 text-base font-semibold text-white md:text-lg">
        {value}
      </div>
      {hint ? (
        <div className="mt-2 text-[11px] uppercase tracking-[0.14em] text-cyan-200/62">
          {hint}
        </div>
      ) : null}
    </div>
  );
}