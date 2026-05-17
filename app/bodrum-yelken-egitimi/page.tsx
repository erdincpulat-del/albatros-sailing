import Link from "next/link";

export const metadata = {
  title: "Bodrum Yelken Eğitimi | Bodrum Yelken Kursu | Albatros Sailing",
  description:
    "Bodrum çıkışlı uygulamalı yelken eğitimi. Yelkenli yat kullanımı, rota planlama, marina yaklaşmaları, denizde güvenlik ve premium eğitim deneyimi.",
  keywords: [
    "bodrum yelken eğitimi",
    "bodrum yelken kursu",
    "bodrum yelken okulu",
    "bodrum yat eğitimi",
    "yelken eğitimi bodrum",
    "bodrum yelkenli yat eğitimi",
  ],
  alternates: {
    canonical: "/bodrum-yelken-egitimi",
  },
  openGraph: {
    title: "Bodrum Yelken Eğitimi | Albatros Sailing",
    description:
      "Bodrum çıkışlı gerçek deniz şartlarında uygulamalı yelken eğitimi.",
    url: "https://albatrossailing.com/bodrum-yelken-egitimi",
    siteName: "Albatros Sailing",
    locale: "tr_TR",
    type: "website",
  },
};

const highlights = [
  "Bodrum Çıkışlı Eğitim",
  "Gerçek Deniz Pratiği",
  "Yelkenli Yat Kullanımı",
  "Premium Eğitim Deneyimi",
];

const modules = [
  "Tekneye giriş ve temel denizcilik",
  "Rüzgâr yönü ve seyir açıları",
  "Yelken açma ve toplama",
  "Ana yelken ve cenova trimleri",
  "Dümen hâkimiyeti",
  "Tramola ve kavança manevraları",
  "Marina çıkış ve dönüş disiplini",
  "Demirleme ve koy yaklaşımı",
  "Rota planlama temelleri",
  "Ekip görev paylaşımı",
  "Denizde güvenlik bilinci",
  "Temel acil durum yaklaşımı",
];

const whyBodrum = [
  {
    title: "Güçlü Denizcilik Kültürü",
    text: "Bodrum, Ege Denizi’nin karakterini, rüzgâr yapısını ve rota çeşitliliğini bir arada sunan güçlü bir eğitim bölgesidir.",
  },
  {
    title: "Uygun Eğitim Rotaları",
    text: "Kısa koy geçişlerinden daha uzun seyir etaplarına kadar farklı seviyelerde eğitim yapılabilecek rota seçenekleri bulunur.",
  },
  {
    title: "Premium Tatil Atmosferi",
    text: "Yelken eğitimi, Bodrum’un deniz yaşamı ve koy deneyimiyle birleşerek daha güçlü bir öğrenme motivasyonu oluşturur.",
  },
];

const faq = [
  {
    q: "Bodrum yelken eğitimi kimler için uygundur?",
    a: "İlk kez yelkenli yatla tanışacak kişilerden, daha önce deneyimi olup kendini geliştirmek isteyenlere kadar farklı seviyeler için uygundur.",
  },
  {
    q: "Eğitimde daha önce tekne deneyimi gerekir mi?",
    a: "Hayır. Başlangıç seviyesindeki katılımcılar için temel denizcilik, tekne tanıma ve güvenli kullanım adım adım anlatılır.",
  },
  {
    q: "Eğitimler uygulamalı mı yapılır?",
    a: "Evet. Eğitimlerin ana amacı gerçek deniz şartlarında uygulama yaparak öğrenmektir.",
  },
  {
    q: "Bodrum çıkışlı eğitimlerde rota nasıl belirlenir?",
    a: "Rota; hava durumu, rüzgâr yönü, deniz şartları ve eğitim seviyesine göre planlanır.",
  },
  {
    q: "Eğitim sonunda ne kazanırım?",
    a: "Katılımcı; yelkenli yatın temel kullanımını, rüzgârı okumayı, manevra mantığını ve denizde güvenli hareket etmeyi öğrenir.",
  },
];

export default function BodrumYelkenEgitimiPage() {
  return (
    <main className="bg-slate-950 text-white">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Bodrum yelken eğitimi kimler için uygundur?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bodrum yelken eğitimi, ilk kez yelkenli yat deneyimi yaşamak isteyenler, temel denizcilik öğrenmek isteyenler ve uygulamalı eğitim arayan katılımcılar için uygundur.",
          },
        },
        {
          "@type": "Question",
          name: "Yelken eğitimi için deneyim gerekir mi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hayır. Başlangıç seviyesindeki katılımcılar için eğitimler sıfırdan başlar.",
          },
        },
      ],
    }),
  }}
/>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Ana Sayfa",
          item: "https://albatros-sailing.com.tr",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Eğitim",
          item: "https://albatros-sailing.com.tr/programs",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Bodrum Yelken Eğitimi",
          item: "https://albatros-sailing.com.tr/bodrum-yelken-egitimi",
        },
      ],
    }),
  }}
/>
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

          <div className="absolute inset-0 bg-black/72" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.38),transparent_45%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.15),#020617_96%)]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pt-32 pb-20 sm:px-6 lg:px-8">
          <div className="max-w-5xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300 md:text-sm md:tracking-[0.45em]">
              Bodrum Yelken Eğitimi
            </p>

            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
              Bodrum’da
              <span className="block text-cyan-300">Yelken Eğitimi</span>
              Deneyimi
            </h1>

            <p className="mt-8 max-w-4xl text-base leading-8 text-slate-200 md:text-xl md:leading-9">
              Bodrum çıkışlı uygulamalı yelken eğitimiyle rüzgârı,
              tekneyi, rotayı ve denizcilik disiplinini gerçek şartlarda
              öğrenin. Albatros Sailing ile eğitim yalnızca teorik bilgi
              değil, denizde yaşanan gerçek bir deneyimdir.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-bold text-slate-950 shadow-2xl shadow-cyan-500/20 transition hover:scale-[1.02] hover:bg-cyan-300"
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
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] px-4 py-6 text-center text-sm font-semibold text-slate-100 shadow-2xl shadow-cyan-950/20 backdrop-blur-xl"
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
              Neden Bodrum?
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Ege’nin En Güçlü Eğitim Bölgelerinden Biri
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
              Bodrum yelken eğitimi için güçlü bir başlangıç noktasıdır.
              Rüzgâr yapısı, koy çeşitliliği, kısa ve uzun seyir seçenekleri,
              marina çıkışları ve Ege Denizi karakteri sayesinde katılımcılar
              gerçek denizcilik pratiğini güvenli ve öğretici bir ortamda
              deneyimler.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {whyBodrum.map((item) => (
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

      {/* TRAINING */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-2xl shadow-cyan-950/20 md:p-14">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
              Uygulamalı Eğitim Sistemi
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Teoriden Denize, Bilgiden Deneyime
            </h2>

            <p className="mt-7 text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
              Albatros Sailing eğitimlerinde amaç, katılımcının yalnızca
              kavramları ezberlemesi değil; rüzgârı hissetmesi, teknenin
              davranışını anlaması ve denizde doğru karar alma alışkanlığı
              kazanmasıdır. Bu nedenle eğitimler gerçek rota, gerçek manevra
              ve gerçek sorumluluk prensibiyle yapılır.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Rüzgâr", "Yelken", "Rota", "Manevra"].map((item) => (
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
              Bodrum Yelken Eğitiminde Neler Öğrenilir?
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
                Kimler Katılabilir?
              </p>

              <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
                İlk Kez Başlayanlardan Deneyimini Geliştirmek İsteyenlere
              </h2>

              <p className="mt-7 text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
                Bodrum yelken eğitimi; başlangıç seviyesindeki katılımcılar,
                deniz tatilini eğitimle birleştirmek isteyenler, aile ve özel
                gruplar, yelkenli yat kullanmayı öğrenmek isteyenler ve daha
                ileri offshore programlarına hazırlanmak isteyenler için güçlü
                bir temel oluşturur.
              </p>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-cyan-950/10 md:p-8">
              <div className="grid gap-4">
                {[
                  "İlk kez yelkenli yat deneyimi yaşayacaklar",
                  "Bodrum’da eğitim ve tatili birleştirmek isteyenler",
                  "Temel yelken bilgisini uygulamalı öğrenmek isteyenler",
                  "Aile, arkadaş grubu veya özel eğitim isteyenler",
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

      {/* ROUTE */}
      <section className="px-5 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-white/[0.045] p-8 shadow-2xl shadow-cyan-950/10 md:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Bodrum Çıkışlı Rota Deneyimi
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Eğitim Sahası Gerçek Denizdir
          </h2>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Eğitimlerde hava durumu, rüzgâr yönü, koy seçimi, rota planlama,
            dönüş zamanlaması ve ekip görev paylaşımı birlikte değerlendirilir.
            Böylece katılımcı yalnızca tekne üzerinde bulunmaz; seyir kararının
            neden ve nasıl verildiğini de öğrenir.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {["Bodrum", "Koy Seyri", "Marina", "Ege Denizi"].map((item) => (
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
              Bodrum Yelken Eğitimi Hakkında
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
                title: "Offshore Yelken Eğitimi",
                href: "/offshore-yelken-egitimi",
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
            Bodrum’dan Denize Açıl
          </p>

          <h2 className="mt-6 text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
            Yelkeni öğren.
            <span className="block text-cyan-300">Denizi yaşa.</span>
          </h2>

          <p className="mx-auto mt-8 max-w-4xl text-lg leading-8 text-slate-300 md:text-xl md:leading-9">
            Bodrum çıkışlı yelken eğitimleriyle denizcilik kültürünü,
            rota disiplinini ve yelkenli yat kullanımını gerçek şartlarda
            deneyimleyin.
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