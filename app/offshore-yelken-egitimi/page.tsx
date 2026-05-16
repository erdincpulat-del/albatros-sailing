import Link from "next/link";

export const metadata = {
  title: "Offshore Yelken Eğitimi | Açık Deniz Yelken Eğitimi | Albatros Sailing",
  description:
    "Bodrum çıkışlı offshore yelken eğitimi. Açık deniz seyri, gece seyri, vardiya sistemi, rota planlama, güvenlik disiplini ve ileri seviye yelken pratiği.",
  keywords: [
    "offshore yelken eğitimi",
    "açık deniz yelken eğitimi",
    "ileri seviye yelken eğitimi",
    "gece seyri eğitimi",
    "offshore yat eğitimi",
    "bodrum offshore yelken eğitimi",
  ],
  alternates: {
    canonical: "/offshore-yelken-egitimi",
  },
  openGraph: {
    title: "Offshore Yelken Eğitimi | Albatros Sailing",
    description:
      "Açık deniz seyri, gece seyri ve gerçek rota disipliniyle ileri seviye yelken eğitimi.",
    url: "https://albatrossailing.com/offshore-yelken-egitimi",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const highlights = [
  "Açık Deniz Seyri",
  "Gece Seyri",
  "Vardiya Sistemi",
  "İleri Seviye Rota Disiplini",
];

const modules = [
  "Offshore seyir planlama",
  "Hava durumu değerlendirme",
  "Gece seyri hazırlığı",
  "Vardiya sistemi",
  "Navigasyon disiplini",
  "Rota ve alternatif liman planlama",
  "Güvenlik ekipmanları kontrolü",
  "Acil durum senaryoları",
  "COLREG uygulamaları",
  "Kaptan-karar ilişkisi",
  "Ekip yönetimi",
  "Uzun seyir psikolojisi",
];

const phases = [
  {
    title: "Hazırlık",
    text: "Rota, hava, tekne, ekip ve güvenlik kontrolü yapılır. Offshore seyirde kararların yolculuktan önce başladığı öğretilir.",
  },
  {
    title: "Seyir",
    text: "Açık denizde dümen, yelken trimleri, vardiya disiplini, rota takibi ve gece seyri pratikleri uygulanır.",
  },
  {
    title: "Değerlendirme",
    text: "Seyir sonrası kararlar, rota tercihleri, ekip performansı ve güvenlik yaklaşımı birlikte değerlendirilir.",
  },
];

const faq = [
  {
    q: "Offshore yelken eğitimi kimler için uygundur?",
    a: "Temel yelken deneyimi olan, açık deniz seyri, gece seyri ve daha ciddi rota disiplini kazanmak isteyen katılımcılar için uygundur.",
  },
  {
    q: "Offshore eğitim başlangıç seviyesi için uygun mu?",
    a: "Tamamen başlangıç seviyesi için önce temel yelken eğitimi önerilir. Offshore eğitim daha çok ileri seviye gelişim programıdır.",
  },
  {
    q: "Gece seyri eğitime dahil mi?",
    a: "Program ve hava şartlarına göre gece seyri, vardiya sistemi ve rota takibi uygulamaları yapılabilir.",
  },
  {
    q: "Eğitim Bodrum çıkışlı mı?",
    a: "Evet. Offshore eğitimler çoğunlukla Bodrum çıkışlı Ege Denizi rotalarında planlanır.",
  },
  {
    q: "Offshore eğitimde amaç nedir?",
    a: "Amaç yalnızca tekne kullanmak değil; açık denizde karar verme, risk değerlendirme, rota yönetimi ve ekip liderliği geliştirmektir.",
  },
];

export default function OffshoreYelkenEgitimiPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.42),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.08),#020617_96%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
              Offshore Yelken Eğitimi
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Açık Denizde
              <span className="block text-cyan-300">Gerçek Yelken</span>
              Disiplini
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-slate-100 md:text-xl md:leading-9">
              Offshore yelken eğitimi; açık deniz seyri, gece seyri, vardiya
              sistemi, rota planlama ve ekip yönetimini gerçek deniz şartlarında
              öğrenmek isteyenler için tasarlanmış ileri seviye bir eğitim
              deneyimidir.
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
                Offshore Bilgisi Al
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
              Açık Deniz Kültürü
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Offshore Eğitim, Sadece Daha Uzağa Gitmek Değildir
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Açık deniz seyri; hazırlık, disiplin, risk yönetimi, rota
              okuma, hava değerlendirme ve ekip koordinasyonu gerektirir.
              Offshore yelken eğitiminde katılımcı, denizi yalnızca bir rota
              olarak değil, karar verilmesi gereken canlı bir ortam olarak
              okumayı öğrenir.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {phases.map((item) => (
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
              Denizde Karar Disiplini
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Gece, Rüzgâr ve Rota Aynı Anda Okunur
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Offshore seviyede eğitim, tek bir manevrayı doğru yapmaktan daha
              fazlasıdır. Katılımcı; hava değişimini, teknenin tepkisini,
              mürettebat yorgunluğunu, rota emniyetini ve zamanlamayı aynı
              anda düşünmeyi öğrenir.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <div className="grid gap-4">
              {[
                "Hava değişimini önceden okumak",
                "Gece seyri düzeni kurmak",
                "Alternatif liman planlamak",
                "Vardiya yorgunluğunu yönetmek",
                "Kaptanlık kararını sistemli vermek",
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
              Offshore Eğitim Sistemi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Rota, Vardiya, Güvenlik ve Karar Disiplini
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Bu eğitimde amaç, katılımcıya yalnızca tekneyi hareket ettirme
              becerisi kazandırmak değildir. Amaç; hava değişimini takip etmek,
              alternatif liman düşünmek, gece seyri düzeni kurmak, ekip içinde
              görev paylaşmak ve uzun seyirde kaptanlık bakış açısı
              geliştirmektir.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Rota", "Gece Seyri", "Vardiya", "Güvenlik"].map((item) => (
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
              Offshore Eğitimde Neler Öğrenilir?
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
                Kimler Katılmalı?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Denizde Daha Fazla Sorumluluk Almak İsteyenler İçin
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Offshore yelken eğitimi, temel yelken pratiğine sahip olup
                uzun seyir, gece seyri, açık deniz rota yönetimi ve ekip
                liderliği konularında gelişmek isteyen katılımcılar için
                güçlü bir üst seviye deneyimdir.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/10 md:p-8">
              <div className="grid gap-4">
                {[
                  "Temel yelken pratiği olan katılımcılar",
                  "Gece seyri deneyimi kazanmak isteyenler",
                  "Açık deniz rota disiplini öğrenmek isteyenler",
                  "Kaptanlık bakış açısını geliştirmek isteyenler",
                  "Uzun seyir ve ekip yönetimine hazırlanmak isteyenler",
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
            Açık Deniz Rota Deneyimi
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Eğitim Sahası Gerçek Açık Denizdir
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Offshore eğitimlerinde rota; hava durumu, rüzgâr yönü, emniyetli
            liman seçenekleri, gece geçişleri, ekip dayanıklılığı ve eğitim
            hedeflerine göre planlanır. Amaç, katılımcının açık denizde
            sistemli düşünmesini sağlamaktır.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Bodrum", "Ege Denizi", "Gece Geçişi", "Açık Deniz"].map(
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
              Offshore Yelken Eğitimi Hakkında
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
                title: "Bodrum Yelken Eğitimi",
                href: "/bodrum-yelken-egitimi",
              },
              {
                title: "Yelkenli Yat Eğitim ve Tatil",
                href: "/yelkenli-yat-egitim-ve-tatil",
              },
              {
                title: "Programlar",
                href: "/programs",
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
            Açık Denize Hazırlan
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Rotayı planla.
            <span className="block text-cyan-300">Denizi yönet.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Offshore yelken eğitimiyle açık deniz seyri, gece geçişi,
            vardiya sistemi ve kaptanlık karar disiplinini gerçek rotalarda
            deneyimleyin.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-10 py-5 text-lg font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-300"
            >
              Offshore Başvurusu
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