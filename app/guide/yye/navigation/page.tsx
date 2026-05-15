export default function NavigationPage() {
  return (
    <main className="min-h-screen bg-[#07111f] text-white p-10">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
          YES Navigation System
        </p>

        <h1 className="text-6xl font-black mt-4">
          Navigation Academy
        </h1>

        <p className="text-white/70 mt-6 max-w-3xl text-lg">
          Bu modül DR, EP, Fix, chart plotting, route planning,
          compass correction ve gerçek seyir mantığını tek eğitim
          motorunda birleştirir.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">DR Navigation</h2>
            <p className="text-white/60 mt-3">
              Dead Reckoning mantığı ile tahmini pozisyon hesaplama.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">EP & Fix</h2>
            <p className="text-white/60 mt-3">
              Gerçek pozisyon doğrulama ve fix teknikleri.
            </p>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">
            <h2 className="text-2xl font-bold">Passage Planning</h2>
            <p className="text-white/60 mt-3">
              Offshore rota planlama ve güvenli seyir mantığı.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
