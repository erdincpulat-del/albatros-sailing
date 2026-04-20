type PremiumPolishStripProps = {
  speedKnots: number;
  directionLabel: string;
  beaufortLabel: string;
};

export function PremiumPolishStrip({
  speedKnots,
  directionLabel,
  beaufortLabel,
}: PremiumPolishStripProps) {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur shadow-[0_0_35px_rgba(61,181,255,0.04)]">
      <style jsx>{`
        @keyframes polishSweep {
          0% {
            transform: translateX(-30%) skewX(-18deg);
            opacity: 0.04;
          }
          50% {
            opacity: 0.12;
          }
          100% {
            transform: translateX(140%) skewX(-18deg);
            opacity: 0.04;
          }
        }
      `}</style>

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute left-[-24%] top-0 h-full w-[46%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.18),transparent)]"
          style={{ animation: "polishSweep 10s linear infinite" }}
        />
      </div>

      <div className="relative z-10">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
          Premium Readout
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          Live Training Signature
        </h2>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          <PolishStat label="Wind" value={`${speedKnots} kt`} />
          <PolishStat label="Direction" value={directionLabel} />
          <PolishStat label="Classification" value={beaufortLabel} />
        </div>
      </div>
    </section>
  );
}

function PolishStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[#08111d]/72 px-4 py-4 shadow-[0_0_24px_rgba(80,180,255,0.06)]">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}