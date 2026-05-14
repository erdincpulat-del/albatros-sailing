"use client";

import Link from "next/link";

export default function FirstNightWatchPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,8,23,0.20),#020817_92%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.65)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.65)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute left-[8%] top-[18%] h-72 w-72 animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[12%] right-[8%] h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/92 to-[#020817]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-32">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition hover:text-white"
          >
            ← Hikâyelere Dön
          </Link>

          <div className="mt-10 max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              Offshore Training Story
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.98] md:text-7xl">
              İlk gece vardiyamı{" "}
              <span className="text-cyan-300">burada tuttum.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              Gece seyri, trafik, AIS ekranı, karanlık ve rüzgar… İlk gerçek
              offshore deneyiminin nasıl bir özgüvene dönüştüğünün hikâyesi.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-bold text-cyan-100 backdrop-blur">
                Aegean Sea — 02:40 AM
              </div>

              <div className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-sm font-bold text-white/80 backdrop-blur">
                Wind 22 Knots
              </div>

              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-300 backdrop-blur">
                Verified Story
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-300">
              Sea Journal
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight md:text-5xl">
              İlk kez gerçek gece trafiğinin içinde sakin kalmayı öğrendim.
            </h2>

            <div className="mt-10 space-y-7 text-base leading-8 text-slate-300 md:text-lg md:leading-9">
              <p>
                Eğitimin ilk günlerinde gündüz seyirlerinde bile yoğun trafik
                beni strese sokuyordu. Özellikle AIS ekranında aynı anda
                yaklaşan tekneleri görmek, gece ışıklarıyla yön tayini yapmak ve
                rüzgar altında rota korumak düşündüğümden daha zordu.
              </p>

              <p>
                İlk gece vardiyasında Ege açıklarında vardiya bana geçtiğinde,
                ilk defa teorinin gerçek deniz ortamında nasıl değiştiğini
                gördüm. Harita, AIS, radar görüntüsü ve dışarıdaki gerçek trafik
                aynı anda yönetilmek zorundaydı.
              </p>

              <p>
                Eğitim sırasında en büyük fark sadece bilgi verilmesi değildi.
                Her kararın neden alındığını, hangi riski azalttığını ve
                kaptanın neden sakin kalması gerektiğini yaşayarak görmek oldu.
              </p>

              <p>
                O geceden sonra artık dümen başında yalnızca tekne kullanmıyor,
                gerçekten durumu analiz etmeyi öğreniyordum.
              </p>

              <p className="text-xl font-black leading-relaxed text-cyan-300 md:text-2xl">
                Offshore eğitim sonunda aldığım en büyük şey sertifika değil,
                denizde sakin kalabilme özgüveni oldu.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-cyan-300/50 hover:shadow-[0_0_70px_rgba(34,211,238,0.18)]">
              <div className="relative h-[540px] overflow-hidden">
                <video
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source
                    src="/videos/stories/night-watch-hero.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-cyan-400/10" />

                <div className="absolute left-6 top-6 rounded-full border border-cyan-300/30 bg-black/40 px-4 py-2 text-[11px] font-black uppercase tracking-[0.28em] text-cyan-200 backdrop-blur">
                  Offshore Atmosphere
                </div>

                <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/45 p-4 backdrop-blur">
                  <p className="text-[10px] font-black uppercase tracking-[0.25em] text-cyan-300">
                    Live Watch Mode
                  </p>
                  <p className="mt-2 text-sm font-bold text-white">
                    Night Navigation · AIS · Real Traffic
                  </p>
                </div>
              </div>

              <div className="border-t border-white/10 p-6">
                <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                  Offshore Atmosphere
                </p>

                <p className="mt-3 text-lg font-bold">
                  Real night watch experience in the Aegean Sea.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-300">
                Training Focus
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-bold">Night Navigation</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Traffic interpretation, light recognition, AIS usage.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-bold">Decision Making</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Remaining calm under pressure and risk evaluation.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <p className="font-bold">Real Offshore Conditions</p>
                  <p className="mt-2 text-sm text-slate-400">
                    Wind, darkness, traffic and live navigation scenarios.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/10 p-8 backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.25em] text-cyan-100">
                Student Reflection
              </p>

              <p className="mt-4 text-xl font-black leading-relaxed text-white">
                “Gerçek denizcilik, her şey planlandığı gibi gitmediğinde başlıyor.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}