export default function BridgeDashboardPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-28 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          Bridge Training System
        </p>

        <h1 className="mt-5 text-6xl font-black">
          Bridge <span className="text-cyan-300">Dashboard</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Radar, AIS, rota, hava, mevki ve karar destek ekranlarını tek eğitim
          panelinde birleştiren köprü üstü farkındalık modülü.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {["AIS", "Radar", "Route", "Weather", "Depth", "CPA/TCPA", "Alerts", "Watch"].map((item) => (
            <div key={item} className="rounded-3xl border border-cyan-300/20 bg-white/5 p-6 text-center">
              <p className="text-2xl font-black text-cyan-200">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
