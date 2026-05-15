export default function ChartPlotterPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-28 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          Chart Plotter Module
        </p>

        <h1 className="mt-5 text-6xl font-black">
          Chart <span className="text-cyan-300">Plotter</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Harita üzerinde rota çizme, waypoint oluşturma, mesafe ölçme,
          bearing alma ve güvenli geçiş hattı oluşturma eğitimi.
        </p>

        <div className="mt-12 rounded-[32px] border border-cyan-300/20 bg-white/5 p-8">
          <h2 className="text-3xl font-black">Eğitim Akışı</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <p className="rounded-2xl bg-white/5 p-5">1. Kalkış noktası belirlenir.</p>
            <p className="rounded-2xl bg-white/5 p-5">2. Varış waypoint’i seçilir.</p>
            <p className="rounded-2xl bg-white/5 p-5">3. Güvenli rota çizilir.</p>
            <p className="rounded-2xl bg-white/5 p-5">4. Mesafe, bearing ve ETA hesaplanır.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
