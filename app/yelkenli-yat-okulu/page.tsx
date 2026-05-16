import Link from "next/link";

export const metadata = {
  title: "Yelkenli Yat Okulu | Bodrum Yelken Okulu | Albatros Sailing",
  description:
    "Bodrum çıkışlı yelkenli yat okulu. Temel yelken eğitimi, rota planlama, denizcilik kültürü, güvenli seyir, offshore hazırlık ve premium eğitim deneyimi.",
  keywords: [
    "yelkenli yat okulu",
    "yelken okulu",
    "yelkenli yat eğitimi",
    "denizcilik okulu",
    "bodrum yelken okulu",
    "bodrum yelkenli yat okulu",
  ],
  alternates: {
    canonical: "/yelkenli-yat-okulu",
  },
  openGraph: {
    title: "Yelkenli Yat Okulu | Albatros Sailing",
    description:
      "Bodrum çıkışlı premium yelkenli yat okulu ve uygulamalı denizcilik eğitimi.",
    url: "https://albatrossailing.com/yelkenli-yat-okulu",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const highlights = [
  "Yelkenli Yat Eğitimi",
  "Bodrum Çıkışlı Okul",
  "Uygulamalı Denizcilik",
  "Premium Academy",
];

const modules = [
  "Temel denizcilik bilgisi",
  "Tekne bölümleri ve güvenlik",
  "Rüzgâr yönü ve seyir açıları",
  "Yelken açma ve toplama",
  "Dümen kullanımı",
  "Tramola ve kavança",
  "Rota planlama temelleri",
  "Demirleme ve koy yaklaşımı",
  "Marina disiplini",
  "Ekip görev paylaşımı",
  "Denizde güvenlik kültürü",
  "Offshore seviyeye hazırlık",
];

const academy = [
  {
    title: "Temelden Başlar",
    text: "Katılımcı, tekneye ilk adımından itibaren yelkenli yatı, rüzgârı, güvenliği ve ekip düzenini sistemli şekilde öğrenir.",
  },
  {
    title: "Denizde Gelişir",
    text: "Eğitimler gerçek seyir pratiğiyle güçlenir. Rota, manevra, dümen ve yelken kullanımı denizde uygulanır.",
  },
  {
    title: "Kültüre Dönüşür",
    text: "Amaç sadece kurs vermek değil; denizcilik bilinci, sorumluluk ve güvenli seyir kültürü kazandırmaktır.",
  },
];

const faq = [
  {
    q: "Yelkenli yat okulu kimler için uygundur?",
    a: "İlk kez yelkenli yatla tanışacak kişilerden, denizcilik bilgisini geliştirmek isteyenlere kadar farklı seviyeler için uygundur.",
  },
  {
    q: "Daha önce deneyim gerekir mi?",
    a: "Hayır. Başlangıç seviyesindeki katılımcılar için temel bilgiler adım adım aktarılır.",
  },
  {
    q: "Eğitimler uygulamalı mı?",
    a: "Evet. Eğitimlerin temel amacı gerçek deniz şartlarında uygulama yaparak öğrenmektir.",
  },
  {
    q: "Okul Bodrum çıkışlı mı?",
    a: "Evet. Eğitimler çoğunlukla Bodrum çıkışlı Ege Denizi rotalarında planlanır.",
  },
  {
    q: "Yelkenli yat okulu ile offshore eğitime geçilebilir mi?",
    a: "Temel eğitimden sonra katılımcı seviyesi uygunsa daha ileri offshore ve rota eğitimlerine geçiş yapılabilir.",
  },
];

export default function YelkenliYatOkuluPage() {
  return (
    <main className="bg-slate-950 text-white">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <video autoPlay muted loop playsInline className="h-full w-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/58" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(6,182,212,0.38),transparent_42%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.08),#020617_96%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-6xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
              Yelkenli Yat Okulu
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Yelkeni Öğren.
              <span className="block text-cyan-300">Denizi Anla.</span>
              Rotanı Kur.
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-slate-100 md:text-xl md:leading-9">
              Albatros Sailing, Bodrum çıkışlı yelkenli yat okulu yaklaşımıyla
              temel denizcilik bilgisinden gerçek rota deneyimine kadar
              uygulamalı ve premium bir eğitim sistemi sunar.
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
                Okul Bilgisi Al
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
              Academy Yaklaşımı
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Yelkenli Yat Eğitimi Sistemli Bir Yolculuktur
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Bir yelkenli yat okulunda amaç yalnızca birkaç manevra öğretmek
              değildir. Amaç; katılımcının rüzgârı okumasını, tekneyi
              anlamasını, rota düşünmesini ve denizde güvenli kararlar
              verebilmesini sağlamaktır.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {academy.map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/10 backdrop-blur-xl transition hover:border-cyan-300/30 hover:bg-cyan-300/[0.06]"
              >
                <h3 className="text-2xl font-bold text-cyan-200">{item.title}</h3>
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
              Denizcilik Kültürü
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              İyi Bir Yelken Okulu, Denizi Okumayı Öğretir
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Tekne üzerindeki her karar; güvenlik, rota, ekip ve zamanlama ile
              ilgilidir. Bu nedenle eğitim süreci yalnızca teknik bilgi değil,
              denizcilik kültürü ve sorumluluk bilinci kazandırır.
            </p>
          </div>

          <div className="rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-12">
            <div className="grid gap-4">
              {[
                "Rüzgârı okumak",
                "Teknenin davranışını anlamak",
                "Ekip görevlerini paylaşmak",
                "Güvenli seyir disiplini kurmak",
                "Rota kararını bilinçli vermek",
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
              Eğitim Sistemi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Temel Bilgiden Gerçek Seyir Pratiğine
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Eğitim sistemi; temel denizcilik, yelkenli yat kullanımı,
              manevra mantığı, rota planlama, güvenlik yaklaşımı ve ileri
              seviye eğitimlere hazırlık başlıklarını bir araya getirir.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Temel", "Yelken", "Rota", "Güvenlik"].map((item) => (
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
              Eğitim İçeriği
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Yelkenli Yat Okulunda Neler Öğrenilir?
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

      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Kimler Katılmalı?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                Denize Güvenli ve Sistemli Başlamak İsteyenler İçin
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Yelkenli yat okulu; denizcilik kültürüne sağlam bir başlangıç
                yapmak, yelkenli yat kullanımını öğrenmek, tatil deneyimini
                eğitimle birleştirmek veya ileride offshore seviyeye hazırlanmak
                isteyen katılımcılar için uygundur.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/10 md:p-8">
              <div className="grid gap-4">
                {[
                  "İlk kez yelkenli yat deneyimi yaşayacaklar",
                  "Temel denizcilik öğrenmek isteyenler",
                  "Bodrum çıkışlı yelken okulu arayanlar",
                  "Eğitim ve tatili birleştirmek isteyenler",
                  "Offshore seviyeye hazırlanmak isteyenler",
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
            Bodrum Çıkışlı Eğitim
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Eğitim Sahası Gerçek Denizdir
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Bodrum çıkışlı eğitimlerde katılımcı; koylar, rüzgâr geçişleri,
            rota kararları, marina disiplini ve gerçek seyir pratiğiyle
            öğrenme sürecini deniz üzerinde yaşar.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Bodrum", "Ege Denizi", "Yelken", "Rota"].map((item) => (
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
              Yelkenli Yat Okulu Hakkında
            </h2>
          </div>

          <div className="mt-14 space-y-5">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-xl shadow-cyan-950/10 md:p-8"
              >
                <h3 className="text-xl font-bold text-white md:text-2xl">{item.q}</h3>
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
                title: "Bodrum Yelken Eğitimi",
                href: "/bodrum-yelken-egitimi",
              },
              {
                title: "Yelkenli Yat Eğitim ve Tatil",
                href: "/yelkenli-yat-egitim-ve-tatil",
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
            Albatros Sailing Academy
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Yelkeni öğren.
            <span className="block text-cyan-300">Denizi oku.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Yelkenli yat okuluyla temel denizcilik bilgisinden gerçek seyir
            pratiğine uzanan premium bir eğitim deneyimine başlayın.
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