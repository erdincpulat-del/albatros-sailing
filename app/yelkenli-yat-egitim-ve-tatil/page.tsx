import Link from "next/link";

export const metadata = {
  title:
    "Yelkenli Yat Eğitim ve Tatil | Bodrum Yelken Eğitimi | Albatros Sailing",
  description:
    "Bodrum çıkışlı yelkenli yat eğitim ve tatil programları. Gerçek offshore deneyimi, gece seyri, premium konaklama ve uygulamalı denizcilik eğitimi.",
  keywords: [
    "yelkenli yat eğitim ve tatil",
    "bodrum yelken eğitimi",
    "offshore yelken eğitimi",
    "yelkenli yat kursu",
    "yelken eğitimi",
    "yat kaptanlığı eğitimi",
    "ege denizi yelken eğitimi",
  ],
  alternates: {
    canonical: "/yelkenli-yat-egitim-ve-tatil",
  },
  openGraph: {
    title: "Yelkenli Yat Eğitim ve Tatil | Albatros Sailing",
    description:
      "Gerçek rota deneyimi, offshore eğitim kültürü ve premium deniz yaşamı.",
    url: "https://albatrossailing.com/yelkenli-yat-egitim-ve-tatil",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const features = [
  "Gerçek Offshore Eğitim",
  "Gece Seyri Deneyimi",
  "Bodrum Çıkışlı Eğitim",
  "Premium Konaklama",
];

const learnings = [
  "Rüzgâr yönü ve seyir açıları",
  "Yelken trimleri",
  "Dümen kullanımı",
  "Temel manevralar",
  "Rota planlama",
  "Demirleme teknikleri",
  "Gece seyri disiplini",
  "Marina yaklaşmaları",
  "Temel COLREG bilgisi",
];

const faq = [
  {
    q: "Yelkenli yat eğitimi için deneyim gerekir mi?",
    a: "Hayır. Başlangıç seviyesinden offshore disiplin seviyesine kadar farklı eğitim programları bulunmaktadır.",
  },
  {
    q: "Eğitimler Bodrum çıkışlı mı yapılıyor?",
    a: "Evet. Eğitimlerin büyük bölümü Bodrum çıkışlı Ege Denizi rotalarında gerçekleştirilmektedir.",
  },
  {
    q: "Konaklama teknede mi oluyor?",
    a: "Program yapısına göre teknede konaklamalı eğitim seçenekleri bulunmaktadır.",
  },
  {
    q: "Gece seyri yapılıyor mu?",
    a: "Uygun programlarda gece seyri, vardiya sistemi ve offshore disiplin uygulamaları yapılmaktadır.",
  },
  {
    q: "Sertifika veriliyor mu?",
    a: "Program yapısına göre eğitim katılım ve seviye belgeleri sunulmaktadır.",
  },
];

export default function Page() {
  return (
    <main className="bg-slate-950 text-white">
      {/* HERO */}
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

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.35),transparent_45%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.45em] text-cyan-300 md:text-sm">
              Albatros Sailing Premium Academy
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Yelkenli Yat
              <span className="block text-cyan-300">
                Eğitim ve Tatil
              </span>
              Deneyimi
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-slate-200 md:text-xl">
              Gerçek rota deneyimi, offshore disiplin kültürü,
              premium deniz yaşamı ve uygulamalı yelken eğitimi.
              Bodrum çıkışlı eğitim programlarıyla denizi
              yalnızca izlemeyin, gerçekten öğrenin.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
              >
                Programları İncele
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition hover:bg-white/20"
              >
                Eğitim Bilgisi Al
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-5 text-center text-sm font-medium text-slate-200 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-white/60">
            <span className="text-[10px] uppercase tracking-[0.3em]">
              Scroll
            </span>

            <div className="h-10 w-[1px] bg-gradient-to-b from-cyan-300 to-transparent" />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Gerçek Deniz Deneyimi
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Eğitimden Fazlası
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Albatros Sailing eğitimleri yalnızca teorik anlatımlardan oluşmaz.
              Katılımcılar gerçek deniz şartlarında rota planlama,
              yelken yönetimi, ekip koordinasyonu, marina yaklaşmaları
              ve offshore disiplin kültürüyle tanışır.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Gerçek Offshore Kültürü",
                text: "Açık deniz disiplini, vardiya sistemi ve rota sorumluluğu üzerine uygulamalı deneyim.",
              },
              {
                title: "Bodrum ve Ege Rotaları",
                text: "Ege Denizi’nin gerçek seyir karakteriyle uygulamalı eğitim deneyimi.",
              },
              {
                title: "Premium Atmosfer",
                text: "Denizcilik eğitimi ile premium yaşam deneyimini bir araya getiren yapı.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
              >
                <h3 className="text-2xl font-bold text-cyan-200">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROUTES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 md:p-14">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Eğitim Rotaları
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Gerçek Rotalarda Eğitim
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-200">
              Eğitim programları Bodrum çıkışlı Ege Denizi rotalarında,
              gerçek seyir şartlarında uygulanır. Katılımcılar yalnızca
              tekne kullanmayı değil; denizde düşünmeyi, karar vermeyi
              ve ekip halinde hareket etmeyi öğrenir.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Bodrum",
              "Kalymnos",
              "Leros",
              "Patmos",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/40 px-6 py-8 text-center text-xl font-bold"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARN */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Eğitim İçeriği
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Neler Öğrenilir?
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {learnings.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-lg text-slate-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Sık Sorulan Sorular
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Yelken Eğitimi Hakkında
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8"
              >
                <h3 className="text-xl font-bold text-white">
                  {item.q}
                </h3>

                <p className="mt-4 leading-8 text-slate-300">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERNAL LINKS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Offshore Eğitimleri",
                href: "/offshore-yelken-egitimi",
              },
              {
                title: "Programlar",
                href: "/programs",
              },
              {
                title: "Yelken Rehberleri",
                href: "/guide",
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 transition hover:border-cyan-400/50 hover:bg-cyan-400/10"
              >
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
                  Albatros Sailing
                </p>

                <h3 className="mt-5 text-3xl font-bold transition group-hover:text-cyan-200">
                  {item.title}
                </h3>

                <p className="mt-5 text-slate-300">
                  Detaylı bilgi ve içerikleri inceleyin.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_40%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Eğitim + Offshore + Deneyim
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
            Deniz deneyim ister.
            <span className="block text-cyan-300">
              Biz öğretiriz.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Gerçek denizcilik kültürünü premium bir eğitim deneyimiyle
            keşfedin. Bodrum çıkışlı yelkenli yat eğitim programlarıyla
            denizi yalnızca izlemeyin, yaşayın.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
            >
              Eğitim Başvurusu
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

      {/* MOBILE CTA */}
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