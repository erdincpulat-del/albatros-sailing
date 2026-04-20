"use client";

import { WindsockSimulator } from "@/components/education/wind-engine/WindsockSimulator";

type WindEngineHeroProps = {
  speedKnots: number;
  directionDeg: number;
  beaufortForce: number;
  beaufortName: string;
  windsockLabel: string;
  extensionPercent: number;
  turbulence: "stable" | "light" | "moderate" | "strong" | string;
  cardinalLabel: string;
  degreeLabel: string;
  seaLabel: string;
  status: string;
};

export function WindEngineHero({
  speedKnots,
  directionDeg,
  beaufortForce,
  beaufortName,
  windsockLabel,
  extensionPercent,
  turbulence,
  cardinalLabel,
  degreeLabel,
  seaLabel,
  status,
}: WindEngineHeroProps) {
  const windComment =
    speedKnots <= 2
      ? "Rüzgâr neredeyse yok. Kumaş düşük kalır, torba sarkar ve yön okuması sınırlıdır."
      : speedKnots <= 6
      ? "Hafif dolum başlar. Windsock yukarı kalkmaya ve gerçek yön karakterini göstermeye başlar."
      : speedKnots <= 12
      ? "Dolum belirginleşir. Eğitim ve kontrol okumaları için dengeli bir rüzgâr bandı oluşur."
      : speedKnots <= 20
      ? "Windsock daha güçlü gerilir, yataya yaklaşır ve akış karakteri operasyonel anlam kazanır."
      : "Basınç yüksek, akış kararlı ve kuvvetli. Görsel okuma artık ciddi karar desteğine dönüşür.";

  const statusLower = status.toLowerCase();

  const statusTone =
    statusLower.includes("unsuitable") ||
    statusLower.includes("danger") ||
    statusLower.includes("critical")
      ? "border-rose-300/30 bg-rose-300/10 text-rose-50"
      : statusLower.includes("restrict") ||
        statusLower.includes("limit") ||
        statusLower.includes("caution")
      ? "border-amber-300/30 bg-amber-300/10 text-amber-50"
      : "border-emerald-300/30 bg-emerald-300/10 text-emerald-50";

  const operationalBand =
    speedKnots <= 4
      ? "Calm Training Band"
      : speedKnots <= 10
      ? "Foundational Control Band"
      : speedKnots <= 18
      ? "Active Seamanship Band"
      : "High Discipline Band";

  return (
    <section className="grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,18,34,0.96),rgba(8,16,28,0.98))] p-4 shadow-[0_0_50px_rgba(52,180,255,0.08)] md:p-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-0 h-[220px] w-[220px] rounded-full bg-cyan-300/10 blur-[90px]" />
          <div className="absolute bottom-[-40px] right-[-40px] h-[240px] w-[240px] rounded-full bg-indigo-400/10 blur-[110px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/25 to-transparent" />
        </div>

        <div className="relative z-10 mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <div className="inline-flex items-center rounded-full border border-cyan-300/18 bg-cyan-300/8 px-4 py-1 text-[11px] uppercase tracking-[0.28em] text-cyan-100/75">
              Live Maritime Wind Reading
            </div>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              Rüzgârı okumak sadece bilgi değil,
              <span className="block bg-[linear-gradient(90deg,#ffffff,#9fe8ff,#7ed0ff)] bg-clip-text text-transparent">
                operasyonel sezgidir.
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/68 md:text-base">
              Bu panel rüzgârı yalnızca sayısal olarak değil; kumaş dolumu,
              yön karakteri, Beaufort seviyesi ve deniz yüzeyine etkisiyle
              birlikte okuman için tasarlandı.
            </p>
          </div>

          <div
            className={`inline-flex rounded-[22px] border px-4 py-4 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.03)] ${statusTone}`}
          >
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">
                Training Status
              </div>
              <div className="mt-2 text-lg leading-none">{status}</div>
            </div>
          </div>
        </div>

        <div className="relative z-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <WindsockSimulator
            speedKnots={speedKnots}
            directionDeg={directionDeg}
            extensionPercent={extensionPercent}
            turbulence={turbulence}
            className="min-h-[410px]"
          />

          <div className="grid gap-4">
            <SignalCard
              label="Wind Speed"
              value={`${speedKnots} kt`}
              hint={operationalBand}
            />
            <SignalCard
              label="Direction"
              value={`${cardinalLabel} • ${degreeLabel}`}
              hint="Bearing"
            />
            <SignalCard
              label="Beaufort"
              value={`Bf ${beaufortForce} • ${beaufortName}`}
              hint="Classification"
            />
            <SignalCard
              label="Windsock State"
              value={windsockLabel}
              hint={`Fill ${Math.round(extensionPercent)}%`}
            />
            <SignalCard
              label="Sea Surface"
              value={seaLabel}
              hint="Surface Response"
            />
            <SignalCard
              label="Flow Character"
              value={String(turbulence)}
              hint="Turbulence"
            />
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,38,0.95),rgba(7,13,22,0.98))] p-5">
          <div className="text-[11px] uppercase tracking-[0.24em] text-cyan-200/70">
            Premium Readout
          </div>

          <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
            Live Training Signature
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <MiniStat
              title="Wind"
              value={`${speedKnots} kt`}
            />
            <MiniStat
              title="Direction"
              value={`${cardinalLabel} • ${degreeLabel}`}
            />
            <MiniStat
              title="Classification"
              value={`Bf ${beaufortForce} • ${beaufortName}`}
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,31,0.96),rgba(7,12,21,0.98))] p-5">
          <div className="text-[11px] uppercase tracking-[0.24em] text-white/48">
            Albatros Academy
          </div>

          <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
            Bir veriyi okumak değil,
            <span className="block text-cyan-200">
              kararın zeminini görmek.
            </span>
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/68">
            Windsock, rüzgârın sadece yönünü değil; anlık basıncını, kumaş
            dolum seviyesini ve çevresel etkisini görünür hale getirir.
            Profesyonel eğitim yaklaşımı bu veriyi seyretmez, yorumlar.
          </p>

          <div className="mt-5 rounded-[24px] border border-cyan-300/15 bg-cyan-300/5 p-4">
            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
              Live Interpretation
            </div>
            <p className="mt-3 text-sm leading-7 text-white/74">
              {windComment}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,16,28,0.95),rgba(6,11,19,0.98))] p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <InsightPill
              label="Wind Fill"
              value={`${Math.round(extensionPercent)}%`}
            />
            <InsightPill
              label="Command Reading"
              value={status}
            />
            <InsightPill
              label="Surface"
              value={seaLabel}
            />
            <InsightPill
              label="Flow"
              value={String(turbulence)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SignalCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">
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

function MiniStat({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-black/20 p-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/48">
        {title}
      </div>
      <div className="mt-3 text-base font-semibold text-white">{value}</div>
    </div>
  );
}

function InsightPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}