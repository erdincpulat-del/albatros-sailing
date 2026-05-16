import Link from "next/link";

export const metadata = {
  title: "Yat Kaptanlığı Eğitimi | Yelkenli Yat Kaptanlığı | Albatros Sailing",
  description:
    "Bodrum çıkışlı yat kaptanlığı eğitimi. Yelkenli yat kullanımı, rota planlama, seyir disiplini, marina manevraları, güvenlik ve kaptanlık bakış açısı.",
  keywords: [
    "yat kaptanlığı eğitimi",
    "yat kaptanlığı kursu",
    "yelkenli yat kaptanlığı",
    "amatör yat kaptanlığı eğitimi",
    "kaptanlık eğitimi",
    "bodrum yat kaptanlığı eğitimi",
  ],
  alternates: {
    canonical: "/yat-kaptanligi-egitimi",
  },
  openGraph: {
    title: "Yat Kaptanlığı Eğitimi | Albatros Sailing",
    description:
      "Yelkenli yat kullanımı, rota disiplini ve kaptanlık bakış açısıyla uygulamalı eğitim.",
    url: "https://albatrossailing.com/yat-kaptanligi-egitimi",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const highlights = [
  "Kaptanlık Bakış Açısı",
  "Rota ve Karar Disiplini",
  "Marina Manevraları",
  "Güvenli Seyir Kültürü",
];

const modules = [
  "Tekne hâkimiyeti",
  "Dümen ve manevra disiplini",
  "Yelkenli yat kullanım prensipleri",
  "Rota planlama",
  "Hava durumu değerlendirme",
  "Marina çıkış ve yanaşma mantığı",
  "Demirleme ve koy güvenliği",
  "Ekip yönetimi",
  "Seyir güvenliği",
  "COLREG temel uygulamaları",
  "Acil durum yaklaşımı",
  "Kaptanlık sorumluluğu",
];

const mindset = [
  {
    title: "Karar Vermek",
    text: "Kaptanlık, yalnızca dümeni tutmak değil; hava, rota, ekip, tekne ve zamanlama arasında doğru kararı verebilmektir.",
  },
  {
    title: "Sorumluluk Almak",
    text: "Tekne üzerindeki güvenlik, görev paylaşımı, seyir planı ve operasyon düzeni kaptanlık bilincinin temelidir.",
  },
  {
    title: "Sistemi Yönetmek",
    text: "İyi kaptan; rüzgârı, rotayı, ekibi, tekneyi ve riskleri aynı anda okuyarak sistemi yönetir.",
  },
];

const faq = [
  {
    q: "Yat kaptanlığı eğitimi kimler için uygundur?",
    a: "Yelkenli yat kullanmayı öğrenmek, tekne üzerinde daha fazla sorumluluk almak ve kaptanlık bakış açısı geliştirmek isteyen katılımcılar için uygundur.",
  },
  {
    q: "Bu eğitim resmi ehliyet yerine geçer mi?",
    a: "Bu sayfa eğitim içeriğini anlatır. Resmi belge, ehliyet veya ticari yeterlilik konuları ilgili mevzuat ve yetkili kurum şartlarına göre ayrıca değerlendirilmelidir.",
  },
  {
    q: "Daha önce yelken deneyimi gerekir mi?",
    a: "Başlangıç seviyesinden ileri seviyeye kadar farklı yapılandırmalar yapılabilir. Kaptanlık bakış açısı için temel denizcilik pratiği büyük avantaj sağlar.",
  },
  {
    q: "Eğitimde marina manevraları var mı?",
    a: "Program yapısına ve hava şartlarına göre marina çıkış, yaklaşma, yanaşma mantığı ve manevra disiplini işlenebilir.",
  },
  {
    q: "Kaptanlık eğitiminin amacı nedir?",
    a: "Amaç; katılımcının tekneyi, rotayı, ekibi ve güvenliği birlikte düşünerek daha sistemli bir denizcilik yaklaşımı kazanmasıdır.",
  },
];

export default function YatKaptanligiEgitimiPage() {
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
              Yat Kaptanlığı Eğitimi
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Tekneyi Kullan.
              <span className="block text-cyan-300">Rotayı Yönet.</span>
              Kaptan Gibi Düşün.
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-slate-100 md:text-xl md:leading-9">
              Yat kaptanlığı eğitimi; yelkenli yat kullanımı, rota planlama,
              marina manevraları, ekip yönetimi, güvenlik disiplini ve denizde
              karar verme becerisini geliştirmek isteyenler için hazırlanmış
              uygulamalı bir eğitim deneyimidir.
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
                Kaptanlık Bilgisi Al
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
              Kaptanlık Bakış Açısı
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Kaptanlık, Sadece Tekne Kullanmak Değildir
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Kaptanlık; tekneyi, havayı, rotayı, ekibi, zamanı ve güvenliği
              aynı anda değerlendirme becerisidir. Bu eğitimde katılımcı,
              yelkenli yat üzerinde daha sistemli düşünmeyi ve denizde karar
              verme kültürünü öğrenir.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {mindset.map((item) => (
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
              Deniz Üzerinde Liderlik
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Kaptan, Rotadan Önce Sistemi Yönetir
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Eğitim sürecinde katılımcı yalnızca dümen tutmaz. Rüzgârı okur,
              manevrayı planlar, ekibi organize eder, riskleri değerlendirir
              ve kararlarının tekne üzerindeki etkisini görür.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <div className="grid gap-4">
              {[
                "Rota kararını sistemli vermek",
                "Ekip görevlerini doğru dağıtmak",
                "Marina manevrasını planlamak",
                "Hava ve deniz şartlarını değerlendirmek",
                "Güvenlik kararlarını önceliklendirmek",
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
              Kaptanlık Eğitim Sistemi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Tekne, Rota, Ekip ve Güvenlik Birlikte Yönetilir
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Bu eğitimde amaç, katılımcıya yalnızca teknik bilgi vermek değil;
              denizde sorumluluk alma, rota planlama, tekne hâkimiyeti,
              manevra disiplini ve liderlik bakış açısı kazandırmaktır.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Tekne", "Rota", "Ekip", "Güvenlik"].map((item) => (
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
              Yat Kaptanlığı Eğitiminde Neler Öğrenilir?
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
                Tekne Üzerinde Daha Fazla Sorumluluk Almak İsteyenler İçin
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Yat kaptanlığı eğitimi; yelkenli yat kullanmayı öğrenmek,
                marina manevralarında gelişmek, rota disiplini kazanmak,
                ekip yönetimini anlamak ve denizde daha güçlü kararlar vermek
                isteyen katılımcılar için uygundur.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/10 md:p-8">
              <div className="grid gap-4">
                {[
                  "Yelkenli yat kullanmayı öğrenmek isteyenler",
                  "Kaptanlık bakış açısı kazanmak isteyenler",
                  "Marina manevralarında gelişmek isteyenler",
                  "Rota ve güvenlik disiplini öğrenmek isteyenler",
                  "Tekne üzerinde liderlik becerisi geliştirmek isteyenler",
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
            Gerçek Seyir Deneyimi
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Eğitim Sahası Teknenin Kendisi ve Denizdir
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Kaptanlık eğitiminde katılımcı; tekne üzerinde verilen kararların
            seyir güvenliğini, ekip düzenini ve rota başarısını nasıl
            etkilediğini doğrudan deneyimler. Bu nedenle eğitim teorik bilgiyle
            sınırlı kalmaz, gerçek deniz pratiğiyle güçlenir.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Tekne Hâkimiyeti", "Rota", "Marina", "Güvenlik"].map((item) => (
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

      {/* FAQ */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Sık Sorulan Sorular
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Yat Kaptanlığı Eğitimi Hakkında
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
                title: "Offshore Yelken Eğitimi",
                href: "/offshore-yelken-egitimi",
              },
              {
                title: "Yelkenli Yat Eğitim ve Tatil",
                href: "/yelkenli-yat-egitim-ve-tatil",
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
            Kaptan Gibi Düşün
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Rotayı gör.
            <span className="block text-cyan-300">Kararı ver.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Yat kaptanlığı eğitimiyle tekne hâkimiyeti, rota yönetimi,
            güvenlik disiplini ve kaptanlık bakış açısını gerçek deniz
            şartlarında geliştirin.
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