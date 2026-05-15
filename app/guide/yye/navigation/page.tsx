export default function NavigationPage() {
  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-28 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.35em] text-cyan-300">
          YES Eğitim Sistemi
        </p>

        <h1 className="mt-5 text-6xl font-black leading-tight">
          Navigation <span className="text-cyan-300">Academy</span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Bu modül deniz haritası okuma, mevki koyma, rota çizme, DR, EP, FIX,
          pusula düzeltmeleri, set-drift ve passage planning konularını tek eğitim
          akışında toplar.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["DR Navigation", "Hız, rota ve zaman bilgisiyle tahmini mevki üretme."],
            ["EP / FIX", "Gözlem, kerteriz ve çapraz kontrol ile gerçek mevki bulma."],
            ["Chart Plotter", "Harita üzerinde rota, waypoint, mesafe ve bearing çalışması."],
            ["Passage Planning", "Güvenli seyir öncesi rota, risk ve alternatif plan hazırlığı."],
            ["Set & Drift", "Akıntı ve rüzgâr etkisiyle oluşan sapmayı yorumlama."],
            ["Compass Correction", "Variation, deviation ve heading correction mantığı."],
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl border border-cyan-300/20 bg-white/5 p-6">
              <h2 className="text-2xl font-black text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
