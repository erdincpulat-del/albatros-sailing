import Link from "next/link";

export const metadata = {
  title:
    "Konaklamalı Yelken Eğitimi | Yelken Eğitimi ve Tatil | Albatros Sailing",
  description:
    "Bodrum çıkışlı konaklamalı yelken eğitimi. Teknede yaşam, uygulamalı yelken eğitimi, rota deneyimi, koylar, denizcilik kültürü ve premium tatil atmosferi.",
  keywords: [
    "konaklamalı yelken eğitimi",
    "yatlı yelken eğitimi",
    "teknede konaklamalı yelken kursu",
    "yelken eğitimi tatili",
    "ege denizi yelken tatili",
    "bodrum konaklamalı yelken eğitimi",
  ],
  alternates: {
    canonical: "/konaklamali-yelken-egitimi",
  },
  openGraph: {
    title: "Konaklamalı Yelken Eğitimi | Albatros Sailing",
    description:
      "Teknede yaşam, gerçek rota deneyimi ve uygulamalı yelken eğitimi.",
    url: "https://albatrossailing.com/konaklamali-yelken-egitimi",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const highlights = [
  "Teknede Konaklama",
  "Eğitim + Tatil",
  "Bodrum Çıkışlı Rotalar",
  "Premium Deniz Yaşamı",
];

const modules = [
  "Teknede yaşam düzeni",
  "Yelkenli yat güvenliği",
  "Rüzgâr ve seyir açıları",
  "Yelken trimleri",
  "Dümen ve manevra pratiği",
  "Koy yaklaşımı ve demirleme",
  "Rota planlama temelleri",
  "Ekip görev paylaşımı",
  "Günlük seyir disiplini",
  "Denizde karar verme",
  "Temel acil durum bilinci",
  "Denizcilik kültürü",
];

const experience = [
  {
    title: "Gündüz Seyri",
    text: "Rüzgâr, rota, yelken ve ekip düzeni gerçek seyir sırasında uygulamalı olarak öğrenilir.",
  },
  {
    title: "Koy ve Demirleme",
    text: "Koy yaklaşımı, demirleme mantığı, güvenli konaklama ve teknede yaşam disiplini deneyimlenir.",
  },
  {
    title: "Denizde Yaşam",
    text: "Katılımcılar yalnızca eğitim almaz; tekne üzerindeki yaşam ritmini ve deniz kültürünü hisseder.",
  },
];

const faq = [
  {
    q: "Konaklamalı yelken eğitimi kimler için uygundur?",
    a: "Yelken eğitimini tatil atmosferiyle birleştirmek isteyen, denizde yaşamı deneyimlemek isteyen ve uygulamalı öğrenmeyi tercih eden katılımcılar için uygundur.",
  },
  {
    q: "Konaklama teknede mi yapılır?",
    a: "Program yapısına göre konaklama teknede yapılabilir. Bu yapı, katılımcıya gerçek deniz yaşamını deneyimleme fırsatı verir.",
  },
  {
    q: "Daha önce yelken deneyimi gerekir mi?",
    a: "Hayır. Başlangıç seviyesindeki katılımcılar için temel denizcilik ve yelken bilgileri adım adım aktarılır.",
  },
  {
    q: "Bu program tatil mi eğitim mi?",
    a: "İkisini birleştiren özel bir yapıdır. Amaç hem keyifli bir deniz deneyimi yaşatmak hem de gerçek yelken becerileri kazandırmaktır.",
  },
  {
    q: "Program Bodrum çıkışlı mı?",
    a: "Evet. Programlar çoğunlukla Bodrum çıkışlı Ege Denizi rotalarında planlanır.",
  },
];

export default function KonaklamaliYelkenEgitimiPage() {
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

          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.38),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.08),#020617_96%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
              Konaklamalı Yelken Eğitimi
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Teknede Yaşa.
              <span className="block text-cyan-300">Yelkeni Öğren.</span>
              Denizi Hisset.
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-slate-100 md:text-xl md:leading-9">
              Konaklamalı yelken eğitimi; teknede yaşamı, gerçek rota
              deneyimini, uygulamalı yelken pratiğini ve premium deniz tatili
              atmosferini bir araya getiren özel bir eğitim deneyimidir.
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
                Eğitim Bilgisi Al
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

      {/* INTRO */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Eğitim ve Tatil Birlikte
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Deniz Üzerinde Öğrenmenin En Güçlü Hali
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Konaklamalı yelken eğitimi, katılımcıya yalnızca tekne kullanmayı
              öğretmez. Tekne üzerinde yaşam düzeni, ekip bilinci, rota
              planlama, koy seçimi, demirleme ve denizde karar verme kültürü
              birlikte deneyimlenir.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {experience.map((item) => (
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

      {/* CINEMATIC STORY */}
      <section className="relative overflow-hidden px-5 py-28 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_45%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Teknede Bir Gün
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Sabah Rota, Gün Boyu Eğitim, Akşam Koy Sessizliği
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Güne hava ve rota değerlendirmesiyle başlanır. Seyir sırasında
              yelken trimleri, dümen kullanımı, manevralar ve ekip görevleri
              uygulanır. Akşam ise demirleme, koy güvenliği ve teknede yaşam
              düzeni deneyimlenir.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <div className="grid gap-4">
              {[
                "Sabah rota ve hava değerlendirmesi",
                "Gün içinde uygulamalı yelken eğitimi",
                "Koy yaklaşımı ve demirleme",
                "Teknede yaşam ve ekip düzeni",
                "Deniz üzerinde gerçek öğrenme",
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

      {/* TRAINING SYSTEM */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-14">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Konaklamalı Eğitim Sistemi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Tekne Sadece Ulaşım Değil, Eğitim Alanıdır
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Katılımcı, teknenin içinde yaşarken denizcilik kültürünü çok daha
              hızlı kavrar. Ekip düzeni, sorumluluk paylaşımı, güvenlik
              kontrolleri, yemek ve yaşam planı, rota kararları ve seyir
              disiplini doğal bir öğrenme sürecine dönüşür.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Yaşam", "Rota", "Yelken", "Koy"].map((item) => (
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

      {/* MODULES */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Eğitim İçeriği
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Konaklamalı Eğitimde Neler Öğrenilir?
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
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

      {/* WHO */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Kimler İçin Uygun?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Eğitimle Tatili Aynı Deneyimde Yaşamak İsteyenler İçin
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Konaklamalı yelken eğitimi; ilk kez yelkenli yatla tanışacak
                kişiler, denizde yaşamı merak edenler, aile veya arkadaş
                grubuyla özel deneyim isteyenler ve eğitim sürecini daha
                yoğun yaşamak isteyen katılımcılar için güçlü bir seçenektir.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/10 md:p-8">
              <div className="grid gap-4">
                {[
                  "Denizde yaşamı deneyimlemek isteyenler",
                  "Eğitim ve tatili birleştirmek isteyenler",
                  "Bodrum çıkışlı rota deneyimi arayanlar",
                  "Aile, arkadaş grubu veya özel grup isteyenler",
                  "Yelkeni uygulamalı öğrenmek isteyenler",
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

      {/* ROUTE */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/10 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Bodrum Çıkışlı Rota Deneyimi
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Koylar, Rotalar ve Gerçek Deniz Yaşamı
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Konaklamalı yelken eğitimlerinde rota; hava durumu, rüzgâr yönü,
            koy güvenliği, eğitim hedefleri ve grup seviyesine göre planlanır.
            Her gün yeni bir denizcilik pratiği ve yeni bir rota deneyimi
            sunar.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Bodrum", "Ege Koyları", "Demirleme", "Teknede Yaşam"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-8 text-center text-xl font-black text-cyan-100"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Sık Sorulan Sorular
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Konaklamalı Yelken Eğitimi Hakkında
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

      {/* INTERNAL LINKS */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Yelkenli Yat Eğitim ve Tatil",
                href: "/yelkenli-yat-egitim-ve-tatil",
              },
              {
                title: "Bodrum Yelken Eğitimi",
                href: "/bodrum-yelken-egitimi",
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

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-5 py-32 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.28),transparent_42%)]" />

        <div className="relative mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Eğitim ve Tatil Bir Arada
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Teknede yaşa.
            <span className="block text-cyan-300">Yelkeni öğren.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Konaklamalı yelken eğitimiyle deniz yaşamını, rota deneyimini ve
            uygulamalı yelken pratiğini Bodrum çıkışlı premium bir programda
            bir araya getirin.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-300"
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