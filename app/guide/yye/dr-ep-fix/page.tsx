export default function DrEpFixPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-28 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          Position Fixing
        </p>

        <h1 className="mt-5 text-6xl font-black">
          DR / EP / <span className="text-cyan-300">FIX</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Dead Reckoning, Estimated Position ve Fix teknikleri denizde mevki
          güvenliğinin temelidir. Bu sayfa bu üç kavramı sıralı eğitim mantığıyla açıklar.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-cyan-300/20 bg-white/5 p-6">
            <h2 className="text-2xl font-black">DR</h2>
            <p className="mt-3 text-slate-300">Son bilinen mevkiden rota, hız ve zamanla tahmini mevki hesaplama.</p>
          </div>
          <div className="rounded-3xl border border-cyan-300/20 bg-white/5 p-6">
            <h2 className="text-2xl font-black">EP</h2>
            <p className="mt-3 text-slate-300">DR üzerine akıntı, rüzgâr ve sapma etkilerini ekleyerek düzeltilmiş mevki üretme.</p>
          </div>
          <div className="rounded-3xl border border-cyan-300/20 bg-white/5 p-6">
            <h2 className="text-2xl font-black">FIX</h2>
            <p className="mt-3 text-slate-300">Kerteriz, GPS, radar veya görsel referanslarla gerçek mevki doğrulama.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
