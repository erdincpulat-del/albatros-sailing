"use client";

type CaptainDecisionPanelProps = {
  status: string;
  summary: string;
  marinaNote: string;
  sailingNote: string;
  anchorageNote: string;
};

export function CaptainDecisionPanel({
  status,
  summary,
  marinaNote,
  sailingNote,
  anchorageNote,
}: CaptainDecisionPanelProps) {
  const statusLower = status.toLowerCase();

  const tone =
    statusLower.includes("danger") ||
    statusLower.includes("critical") ||
    statusLower.includes("unsuitable")
      ? {
          badge: "CRITICAL DECISION BAND",
          accent: "text-rose-200",
          chip: "border-rose-300/30 bg-rose-300/10 text-rose-50",
          glow: "bg-rose-400/10",
          line: "from-rose-300/40 via-rose-200/10 to-transparent",
        }
      : statusLower.includes("limit") ||
        statusLower.includes("restrict") ||
        statusLower.includes("caution")
      ? {
          badge: "CONTROLLED DECISION BAND",
          accent: "text-amber-200",
          chip: "border-amber-300/30 bg-amber-300/10 text-amber-50",
          glow: "bg-amber-300/10",
          line: "from-amber-300/40 via-amber-200/10 to-transparent",
        }
      : {
          badge: "OPERATIONALLY ACCEPTABLE",
          accent: "text-emerald-200",
          chip: "border-emerald-300/30 bg-emerald-300/10 text-emerald-50",
          glow: "bg-emerald-300/10",
          line: "from-emerald-300/40 via-emerald-200/10 to-transparent",
        };

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(11,20,36,0.96),rgba(7,12,22,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
      <div className={`pointer-events-none absolute -left-10 top-0 h-40 w-40 rounded-full blur-[90px] ${tone.glow}`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/20 to-transparent" />

      <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className={`text-xs uppercase tracking-[0.24em] ${tone.accent}`}>
            Captain Decision Logic
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Operational Command Interpretation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
            Bu panel rüzgâr, deniz yüzeyi ve operasyon baskısını tek cümlelik
            bir sonuçtan çıkarıp; marina, yelken ve demirleme kararına dönüştürür.
          </p>
        </div>

        <div className={`inline-flex rounded-[22px] border px-4 py-4 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.03)] ${tone.chip}`}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">
              Status
            </div>
            <div className="mt-2 text-lg leading-none">{status}</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 rounded-[28px] border border-white/10 bg-white/5 p-5">
        <div className={`h-px w-full bg-gradient-to-r ${tone.line}`} />
        <div className="mt-4 text-[11px] uppercase tracking-[0.18em] text-white/48">
          Command Summary
        </div>
        <p className="mt-3 text-base leading-8 text-white/82 md:text-lg">
          {summary}
        </p>
      </div>

      <div className="relative z-10 mt-6 grid gap-4 xl:grid-cols-3">
        <DecisionCard
          title="Marina Decision"
          subtitle="Harbor / close maneuver logic"
          body={marinaNote}
          tone={tone}
          icon="M"
        />

        <DecisionCard
          title="Sailing Decision"
          subtitle="Open-water training logic"
          body={sailingNote}
          tone={tone}
          icon="S"
        />

        <DecisionCard
          title="Anchorage Decision"
          subtitle="Hold / comfort / exposure logic"
          body={anchorageNote}
          tone={tone}
          icon="A"
        />
      </div>

      <div className="relative z-10 mt-6 grid gap-4 md:grid-cols-3">
        <MiniSignal
          label="Decision Mode"
          value={tone.badge}
        />
        <MiniSignal
          label="Interpretation Layer"
          value="Professional Training View"
        />
        <MiniSignal
          label="Command Focus"
          value="Safety • Control • Judgment"
        />
      </div>
    </section>
  );
}

function DecisionCard({
  title,
  subtitle,
  body,
  tone,
  icon,
}: {
  title: string;
  subtitle: string;
  body: string;
  tone: {
    accent: string;
    chip: string;
  };
  icon: string;
}) {
  return (
    <article className="rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
            {subtitle}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-white">{title}</h3>
        </div>

        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-bold ${tone.chip}`}>
          {icon}
        </div>
      </div>

      <p className="mt-4 text-sm leading-7 text-white/72">{body}</p>
    </article>
  );
}

function MiniSignal({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}