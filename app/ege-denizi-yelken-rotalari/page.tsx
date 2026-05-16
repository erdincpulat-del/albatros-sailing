import Link from "next/link";

export const metadata = {
  title: "Ege Denizi Yelken Rotaları | Bodrum Yelken Rotaları | Albatros Sailing",
  description:
    "Bodrum çıkışlı Ege Denizi yelken rotaları. Bodrum, Kalymnos, Leros, Lipsi, Patmos, koylar, açık deniz geçişleri ve yelkenli rota deneyimi.",
  keywords: [
    "ege denizi yelken rotaları",
    "bodrum yelken rotaları",
    "bodrum yunan adaları yelken rotası",
    "ege yelken tatili",
    "bodrum kalymnos leros patmos rota",
    "yelkenli yat rotaları",
  ],
  alternates: {
    canonical: "/ege-denizi-yelken-rotalari",
  },
  openGraph: {
    title: "Ege Denizi Yelken Rotaları | Albatros Sailing",
    description:
      "Bodrum çıkışlı Ege Denizi yelken rotaları ve gerçek rota deneyimi.",
    url: "https://albatrossailing.com/ege-denizi-yelken-rotalari",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const highlights = [
  "Bodrum Çıkışlı Rotalar",
  "Ege Denizi Seyri",
  "Yunan Adaları Geçişleri",
  "Gerçek Rota Deneyimi",
];

const routes = [
  "Bodrum çıkış hazırlığı",
  "Koy seçimi ve demirleme",
  "Kalymnos rota planı",
  "Leros seyir disiplini",
  "Lipsi geçiş senaryosu",
  "Patmos uzun rota deneyimi",
  "Gece seyri hazırlığı",
  "Hava durumu değerlendirme",
  "Alternatif liman planlama",
  "Ekip görev paylaşımı",
  "Güvenli geçiş disiplini",
  "Rota sonrası değerlendirme",
];

const routeCards = [
  {
    title: "Bodrum",
    text: "Eğitim ve rota başlangıcı için güçlü bir merkez. Marina çıkışı, hava değerlendirmesi ve seyir hazırlığı burada başlar.",
  },
  {
    title: "Kalymnos",
    text: "Bodrum çıkışlı rota deneyimlerinde açık deniz geçişi, rota takibi ve liman yaklaşımı için güçlü bir eğitim noktasıdır.",
  },
  {
    title: "Leros",
    text: "Uzun seyir disiplini, ekip düzeni, vardiya mantığı ve rota kararları için değerli bir geçiş rotası sunar.",
  },
];

const faq = [
  {
    q: "Ege Denizi yelken rotaları kimler için uygundur?",
    a: "Yelkenli yatla rota deneyimi yaşamak, Bodrum çıkışlı koy ve ada geçişlerini öğrenmek veya eğitim ile tatili birleştirmek isteyen katılımcılar için uygundur.",
  },
  {
    q: "Rotalar her zaman aynı mı olur?",
    a: "Hayır. Rota; hava durumu, rüzgâr yönü, deniz şartları, grup seviyesi ve güvenlik değerlendirmesine göre planlanır.",
  },
  {
    q: "Bodrum’dan Yunan adalarına rota yapılır mı?",
    a: "Program, sezon, resmi geçiş şartları, hava durumu ve operasyon planına göre Bodrum çıkışlı ada rotaları değerlendirilebilir.",
  },
  {
    q: "Bu sayfa eğitim mi tatil mi anlatıyor?",
    a: "Bu rota sayfası hem eğitim hem de deneyim odaklıdır. Amaç, Ege Denizi rotalarının yelken eğitimi içindeki değerini anlatmaktır.",
  },
  {
    q: "Gece seyri bu rotalarda yapılır mı?",
    a: "Uygun programlarda ve güvenli şartlar oluştuğunda gece seyri, vardiya ve rota takibi uygulamaları yapılabilir.",
  },
];

export default function EgeDeniziYelkenRotalariPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.38),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.08),#020617_96%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
              Ege Denizi Yelken Rotaları
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Rotayı Planla.
              <span className="block text-cyan-300">Ege’yi Keşfet.</span>
              Denizi Yaşa.
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-slate-100 md:text-xl md:leading-9">
              Bodrum çıkışlı Ege Denizi yelken rotaları; koylar, açık deniz
              geçişleri, ada rotaları, rota planlama ve gerçek seyir disiplini
              ile eğitim ve tatil deneyimini bir araya getirir.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-5 text-base font-bold text-slate-950 shadow-2xl shadow-cyan-500/25 transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                Programları İncele
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-base font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Rota Bilgisi Al
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.075] px-4 py-6 text-center text-base font-semibold text-slate-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Rota Kültürü
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              İyi Bir Rota, Denizden Önce Haritada Başlar
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Ege Denizi’nde yelken rotası yalnızca gidilecek yerlerin listesi
              değildir. Hava durumu, rüzgâr yönü, emniyetli koylar, alternatif
              limanlar, ekip seviyesi ve zamanlama birlikte düşünülür.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {routeCards.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                <h3 className="text-2xl font-bold text-cyan-200">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Bodrum’dan Ege’ye
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Her Geçiş, Yeni Bir Denizcilik Kararıdır
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Rota planı yapılırken sadece mesafe değil; rüzgâr açısı, varış
              zamanı, koy güvenliği, ekip dayanıklılığı ve alternatif seçenekler
              birlikte değerlendirilir. Bu nedenle Ege rotaları gerçek bir
              eğitim alanıdır.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <div className="grid gap-4">
              {[
                "Hava ve rüzgâr analizi",
                "Güvenli koy seçimi",
                "Alternatif liman planı",
                "Ada geçişi disiplini",
                "Rota sonrası değerlendirme",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-950/55 p-5 text-base leading-7 text-slate-100 ring-1 ring-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-14">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Rota Deneyimi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Bodrum, Koylar ve Ada Geçişleri
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Bodrum çıkışlı yelken rotaları; kısa koy seyirlerinden daha uzun
              açık deniz etaplarına kadar farklı deneyimler sunar. Her rota,
              seyir disiplini ve denizde karar verme becerisini geliştirir.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Bodrum", "Kalymnos", "Leros", "Patmos"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-slate-950/45 px-6 py-10 text-center text-2xl font-black shadow-xl shadow-cyan-950/20"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Rota İçeriği
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Ege Rotalarında Neler Deneyimlenir?
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {routes.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-white/10 bg-white/[0.045] p-7 text-lg leading-7 text-slate-200 shadow-xl shadow-cyan-950/10 transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Kimler İçin Uygun?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Eğitim, Tatil ve Rota Deneyimini Birleştirmek İsteyenler İçin
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Ege Denizi yelken rotaları; Bodrum çıkışlı deniz deneyimi
                yaşamak, yelkenli yatla gerçek rota pratiği kazanmak, koyları
                ve ada geçişlerini eğitim perspektifiyle deneyimlemek isteyenler
                için güçlü bir seçenektir.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/10 md:p-8">
              <div className="grid gap-4">
                {[
                  "Bodrum çıkışlı yelken rotası arayanlar",
                  "Ege Denizi’nde eğitim ve tatil isteyenler",
                  "Koy ve ada geçişi deneyimi yaşamak isteyenler",
                  "Rota planlama pratiği yapmak isteyenler",
                  "Yelkenli yatla gerçek seyir deneyimi arayanlar",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl bg-slate-950/60 p-5 text-base leading-7 text-slate-200 ring-1 ring-white/10"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/10 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Güvenli Rota Planlama
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Deniz Şartlarına Göre Planlanır
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Yelken rotaları sabit bir tur listesi gibi düşünülmez. Deniz
            şartları, sezon, ekip seviyesi, hava durumu, resmi geçiş koşulları
            ve güvenlik öncelikleri rota kararının temelini oluşturur.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Hava", "Rüzgâr", "Koy", "Güvenlik"].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 text-center text-xl font-black text-cyan-100"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Sık Sorulan Sorular
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Ege Denizi Yelken Rotaları Hakkında
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-xl shadow-cyan-950/10 md:p-8"
              >
                <h3 className="text-xl font-bold text-white md:text-2xl">
                  {item.q}
                </h3>

                <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Yelkenli Yat Eğitim ve Tatil",
                href: "/yelkenli-yat-egitim-ve-tatil",
              },
              {
                title: "Konaklamalı Yelken Eğitimi",
                href: "/konaklamali-yelken-egitimi",
              },
              {
                title: "Offshore Yelken Eğitimi",
                href: "/offshore-yelken-egitimi",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-xl shadow-cyan-950/10 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Albatros Sailing
                </p>

                <h3 className="mt-5 text-3xl font-bold transition group-hover:text-cyan-200">
                  {item.title}
                </h3>

                <p className="mt-5 leading-7 text-slate-300">
                  Detaylı bilgi ve eğitim içeriklerini inceleyin.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Bodrum’dan Ege’ye Açıl
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Rotayı kur.
            <span className="block text-cyan-300">Ege’yi yaşa.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Bodrum çıkışlı Ege Denizi yelken rotalarıyla eğitim, tatil,
            açık deniz geçişi ve rota deneyimini premium bir denizcilik
            yaklaşımıyla birleştirin.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-300"
            >
              Rota Bilgisi Al
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
            >
              Programları Gör
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-slate-950/90 p-4 backdrop-blur-xl md:hidden">
        <div className="flex gap-3">
          <Link
            href="/contact"
            className="flex-1 rounded-full bg-cyan-400 px-5 py-4 text-center font-bold text-slate-950"
          >
            Başvuru Yap
          </Link>

          <Link
            href="https://wa.me/"
            className="flex-1 rounded-full border border-white/10 bg-white/10 px-5 py-4 text-center font-semibold text-white"
          >
            WhatsApp
          </Link>
        </div>
      </div>
    </main>
  );
}