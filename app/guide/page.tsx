"use client";

import Link from "next/link";

type GuideCard = {
  title: string;
  href: string;
  description: string;
  badge: string;
};

type GuideSection = {
  title: string;
  subtitle: string;
  items: GuideCard[];
};

const guideSections: GuideSection[] = [
  {
    title: "Temel Denizcilik",
    subtitle: "Temel kontrol, güvenlik ve tekne davranışı",
    items: [
      {
        title: "Güvenlik",
        href: "/guide/guvenlik",
        description:
          "Temel deniz güvenliği, öncelik sırası ve sahada doğru refleks kurma mantığı.",
        badge: "Safety",
      },
      {
        title: "Demirleme ve Demir Alma",
        href: "/guide/demirleme-ve-demir-alma",
        description:
          "Demir operasyonlarının mantığı, hazırlık, kontrol ve uygulama akışı.",
        badge: "Anchoring",
      },
      {
        title: "Marina Giriş Çıkış Usulleri",
        href: "/guide/marina-giris-cikis-usulleri",
        description:
          "Marina yaklaşımı, çıkış usulleri ve düşük hız manevra disiplini.",
        badge: "Marina",
      },
      {
        title: "Tekne Hakimiyeti",
        href: "/guide/tekne-hakimiyeti",
        description:
          "Tekneyi yönlendirme, hissetme ve komut altında tutma mantığı.",
        badge: "Boat Handling",
      },
    ],
  },
  {
    title: "Navigasyon ve Göksel Düşünce",
    subtitle: "Rota, harita, sextant ve almanac disiplini",
    items: [
      {
        title: "Navigasyon",
        href: "/guide/navigasyon",
        description:
          "Seyir düşüncesinin omurgası, yön, konum ve karar mantığının temeli.",
        badge: "Navigation",
      },
      {
        title: "Rota Planlama",
        href: "/guide/rota-planlama",
        description:
          "Rota kurma, risk okuma ve geçişleri önceden düşünme mantığı.",
        badge: "Route Planning",
      },
      {
        title: "Paper Chart Navigation",
        href: "/guide/paper-chart-navigation",
        description:
          "Kâğıt harita ile düşünme, rota ve düzeltme mantığını öğreten eğitim modülü.",
        badge: "Chartwork",
      },
      {
        title: "Almanac",
        href: "/guide/almanac",
        description:
          "GMT, GHA, declination ve sight reduction mantığını öğreten göksel navigasyon modülü.",
        badge: "Astronavigation",
      },
      {
        title: "Sextant",
        href: "/guide/sextant",
        description:
          "Sextant kullanımı, ölçüm düşüncesi ve klasik denizcilik refleksi.",
        badge: "Sextant",
      },
      {
        title: "Sextant Nedir",
        href: "/guide/sextant-nedir",
        description:
          "Sextant’ın ne olduğu, nasıl düşündürdüğü ve neden hâlâ önemli olduğu.",
        badge: "Instrument",
      },
    ],
  },
  {
    title: "Trafik, Kurallar ve Sistemler",
    subtitle: "COLREG, AIS, VTS ve trafik düzeni",
    items: [
      {
        title: "COLREG",
        href: "/guide/colreg",
        description:
          "Denizde çatışmayı önleme kurallarını sistematik biçimde öğrenme alanı.",
        badge: "Rules",
      },
      {
        title: "Denizde Çatışma Önleme",
        href: "/guide/denizde-catisma-onleme",
        description:
          "Kuralların sahadaki uygulanışı ve riskin erken okunması.",
        badge: "Collision Avoidance",
      },
      {
        title: "AIS / VTS",
        href: "/guide/ais-ve-vts",
        description:
          "Gemi trafiği, sistem farkındalığı ve seyir güvenliğinde veri okuma.",
        badge: "Traffic Systems",
      },
      {
        title: "AIS / VTS Nedir",
        href: "/guide/ais-ve-vts-nedir",
        description:
          "AIS ve VTS sistemlerinin temel mantığı ve eğitimsel önemi.",
        badge: "Awareness",
      },
      {
        title: "TSS Nedir",
        href: "/guide/tss-nedir",
        description:
          "Trafik ayırım düzeni mantığı, geçiş disiplini ve operasyonel değerlendirme.",
        badge: "TSS",
      },
    ],
  },
  {
    title: "Rüzgâr, Hava ve Yelken Dinamiği",
    subtitle: "Rüzgârı okumak, yüzeyi görmek ve yelkeni çalıştırmak",
    items: [
      {
        title: "Denizde Meteoroloji",
        href: "/guide/denizde-meteoroloji",
        description:
          "Hava okuma, deniz yüzeyi ilişkisi ve karar desteği mantığı.",
        badge: "Weather",
      },
      {
        title: "Wind Engine",
        href: "/guide/wind-engine",
        description:
          "Rüzgâr, Beaufort, yüzey, pusula ve karar ilişkisini bir araya getiren interaktif motor.",
        badge: "Engine",
      },
      {
        title: "Yelkenin Çalışma Prensibi",
        href: "/guide/yelkenin-calisma-prensibi",
        description:
          "Rüzgârın yelken üzerindeki etkisi, trim, akış ve güç üretimi prensibi.",
        badge: "Sail Aerodynamics",
      },
      {
        title: "Gece Seyri Fenerleri",
        href: "/guide/gece-seyri-fenerleri",
        description:
          "Gece görünürlük, ışık karakteri ve güvenli seyir mantığı.",
        badge: "Night Sailing",
      },
      {
        title: "Signals",
        href: "/guide/signals",
        description:
          "İşaretler, eğitim modülü, senaryolar ve denizcilik iletişim mantığı.",
        badge: "Signals",
      },
    ],
  },
  {
    title: "İleri Seviye ve Kaptanlık Düşüncesi",
    subtitle: "Kriz, kariyer ve komuta disiplini",
    items: [
      {
        title: "Denizde Acil Durumlar",
        href: "/guide/denizde-acil-durumlar",
        description:
          "Kriz yönetimi, öncelik sırası ve sakin komuta yaklaşımı.",
        badge: "Emergency",
      },
      {
        title: "Anchored Alcohol",
        href: "/guide/anchored-alcohol",
        description:
          "Demirde alkol, hukuk, uygulama ve denizcilik sorumluluğu üzerine eğitim sayfası.",
        badge: "Law",
      },
      {
        title: "Yat Kaptanı Nasıl Olunur",
        href: "/guide/yat-kaptani-nasil-olunur",
        description:
          "Kaptanlık yol haritası, eğitim, tecrübe ve disiplin katmanları.",
        badge: "Captaincy",
      },
    ],
  },
];

export default function GuideIndexPage() {
  const totalCount = guideSections.reduce(
    (acc, section) => acc + section.items.length,
    0
  );

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#14304d_0%,_#09131f_45%,_#050a11_100%)] text-white">
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="max-w-6xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
            Albatros Sailing • Eğitim Modülleri • Academy Guide
          </div>

          <h1 className="mt-5 max-w-6xl text-4xl font-semibold leading-[1.02] md:text-7xl">
            Eğitim,
            <span className="block">denizde özgürlüğün disipline dönüşmüş halidir.</span>
          </h1>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-white/72 md:text-lg md:leading-8">
            Bu alan yalnızca konu listesi değildir. Her modül; seyir, rüzgâr,
            güvenlik, navigasyon ve kaptanlık düşüncesini parça parça değil,
            sistematik bir denizcilik dili içinde öğretmek için tasarlandı.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          <StatCard label="Toplam Modül" value={String(totalCount)} />
          <StatCard label="Ana Yapı" value="5 Eğitim Katmanı" />
          <StatCard label="Yeni Modül" value="Almanac" />
          <StatCard label="Yeni Modül" value="Yelken Prensibi" />
        </div>

        <div className="mt-12 space-y-10">
          {guideSections.map((section) => (
            <section
              key={section.title}
              className="rounded-[32px] border border-white/10 bg-white/5 p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                    Eğitim Alanı
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
                    {section.subtitle}
                  </p>
                </div>

                <div className="rounded-[20px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-sm">
                  <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/65">
                    Module Count
                  </div>
                  <div className="mt-2 font-semibold text-white">
                    {section.items.length} modül
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {section.items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition hover:border-cyan-300/22 hover:bg-cyan-300/[0.06]"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">
                        {item.badge}
                      </div>
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm text-white/70 transition group-hover:border-cyan-300/22 group-hover:text-cyan-100">
                        →
                      </div>
                    </div>

                    <h3 className="mt-4 text-xl font-semibold text-white transition group-hover:text-cyan-50">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-[32px] border border-cyan-300/15 bg-cyan-300/5 p-6">
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-100/68">
            Albatros Eğitim Yaklaşımı
          </p>
          <p className="mt-4 max-w-5xl text-sm leading-8 text-white/78 md:text-base">
            Amaç yalnızca bilgi vermek değil; öğrencinin denizde gördüğü her şeyi
            aynı sistem içinde okuyabilmesini sağlamaktır. Rüzgâr, rota, gece ışığı,
            harita, almanac, sextant, trafik sistemi ve kaptan kararı birbirinden
            kopuk başlıklar değildir. Gerçek eğitim, bunların aynı denizcilik
            zihninde birleştiği noktada başlar.
          </p>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-3 text-xl font-semibold text-white">{value}</div>
    </div>
  );
}