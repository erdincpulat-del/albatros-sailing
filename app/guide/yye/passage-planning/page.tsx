export default function PassagePlanningPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-28 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          Offshore Preparation
        </p>

        <h1 className="mt-5 text-6xl font-black">
          Passage <span className="text-cyan-300">Planning</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Seyir öncesi rota, hava, yakıt, emniyet, alternatif limanlar,
          gece geçişleri ve risk yönetimi planlanır.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            "Departure port and destination",
            "Weather window and wind direction",
            "Safe water, danger areas and no-go zones",
            "Alternative ports and emergency shelter",
            "ETA, fuel, watch keeping and night plan",
            "Crew briefing and safety equipment check",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-cyan-300/20 bg-white/5 p-6">
              <p className="text-xl font-black">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
