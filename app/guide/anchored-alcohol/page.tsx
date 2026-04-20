"use client";

import Link from "next/link";
import {
  AlertTriangle,
  Anchor,
  BadgeAlert,
  BookOpen,
  FileText,
  Gavel,
  Landmark,
  Scale,
  SearchCheck,
  Shield,
  Siren,
  Waves,
  Wind,
} from "lucide-react";

type LegalBase = {
  title: string;
  subtitle: string;
  body: string;
  emphasis: string;
};

type Authority = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  items: string[];
};

type IntlBase = {
  title: string;
  text: string;
};

type SeamanshipFact = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

type OutcomeRow = {
  situation: string;
  result: string;
};

type FAQItem = {
  q: string;
  a: string;
};

const legalBases: LegalBase[] = [
  {
    title: "Türk Ceza Kanunu m.179",
    subtitle: "Trafik güvenliğini tehlikeye sokma",
    body:
      "Ulaşım araçlarını güvenli şekilde sevk ve idare edemeyecek durumda kullanma fiili, deniz araçları bakımından da ciddi sorumluluk zemini oluşturur. Burada odak yalnızca hareket hâli değildir; asıl mesele, risk doğduğunda güvenli müdahale kabiliyetinin korunmasıdır.",
    emphasis:
      "Odak noktası: kaptanın güvenli sevk ve idare kabiliyetinin sürmesi.",
  },
  {
    title: "Türk Ceza Kanunu m.85",
    subtitle: "Taksirle öldürme",
    body:
      "Olay ölümle sonuçlandığında kaptanın dikkat, özen, gözcülük, hazırlık ve zamanında müdahale yükümlülüğü çok daha ağır değerlendirilir. Müdahale eksikliği ile alkol etkisi arasında bağ kurulursa kusur ağırlaşabilir.",
    emphasis:
      "Odak noktası: sonuç doğuran olaylarda ihmal ve nedensellik bağı.",
  },
  {
    title: "Türk Ceza Kanunu m.89",
    subtitle: "Taksirle yaralama",
    body:
      "Sürüklenme, çarpışma, düşme, panik anında yanlış karar, ekip emniyetinin bozulması ya da geç müdahale sonucu yaralanma meydana gelirse kaptanın dikkat ve özen yükümlülüğü merkezde değerlendirilir.",
    emphasis:
      "Odak noktası: yaralanma doğuran olaylarda kusur incelemesi.",
  },
  {
    title: "Limanlar Kanunu",
    subtitle: "Deniz emniyeti ve idari müdahale zemini",
    body:
      "Liman ve kıyı alanlarında deniz emniyetinin korunması, riskli hâllerin önlenmesi ve gerekli tedbirlerin alınması bakımından idari yetki çerçevesi sağlar. Risk oluşturan tekne ve kaptan davranışları bu zeminde değerlendirilir.",
    emphasis:
      "Odak noktası: risk doğduğunda idarenin müdahale yetkisi.",
  },
];

const authorities: Authority[] = [
  {
    title: "Sahil Güvenlik Komutanlığı",
    icon: Shield,
    items: [
      "Denetim ve güvenlik değerlendirmesi yapar",
      "Riskli durumlarda müdahale eder",
      "Tutanak ve olay tespiti sürecinde kritik rol oynar",
      "Olayın ilk görünümünü kayıt altına alabilir",
    ],
  },
  {
    title: "Liman Başkanlığı",
    icon: Landmark,
    items: [
      "Deniz emniyeti ve liman düzeni açısından değerlendirme yapar",
      "İdari süreçlerde önemli bir uygulayıcıdır",
      "Teknenin emniyeti ve hareket kabiliyetine ilişkin tedbir alabilir",
      "Riskin büyümesini engellemeye dönük idari çerçeve sunar",
    ],
  },
  {
    title: "Savcılık ve Mahkeme",
    icon: Scale,
    items: [
      "Olay sonrası cezai süreci başlatabilir",
      "Bilirkişi raporu ister",
      "Kusur, nedensellik ve müdahale imkânını inceler",
      "Alkol etkisinin olaydaki ağırlığını değerlendirir",
    ],
  },
];

const intlBases: IntlBase[] = [
  {
    title: "COLREG Rule 2",
    text:
      "İyi denizcilik sorumluluğu her durumda geçerlidir. Yazılı kuralın ötesinde, doğru karar verme ve gerekli tedbiri alma yükümlülüğü devam eder.",
  },
  {
    title: "COLREG Rule 5",
    text:
      "Uygun gözcülük zorunludur. Demirde olmak, çevresel riskleri izleme ihtiyacını ortadan kaldırmaz.",
  },
  {
    title: "COLREG Rule 7",
    text:
      "Çarpışma riskinin değerlendirilmesi süreklidir. Yakın tekne, dönüşlü rüzgâr, sürüklenme ve görüş kısıtı gibi unsurlar aktif biçimde izlenmelidir.",
  },
  {
    title: "STCW A-VIII/1",
    text:
      "Görev yapmaya uygunluk esastır. Profesyonel denizcilik standardı, kaptanın ve sorumlu personelin her an müdahale edebilir durumda olmasını bekler.",
  },
];

const seamanshipFacts: SeamanshipFact[] = [
  {
    icon: Anchor,
    title: "Demir her zaman tutmaz",
    text:
      "Demir, zemine ve şartlara bağlı olarak tekneyi tutmaya çalışır. Rüzgâr, akıntı, dip yapısı ve zincir açısı dengeyi her an değiştirebilir.",
  },
  {
    icon: Wind,
    title: "Rüzgâr yönü oyunu değiştirir",
    text:
      "Rüzgârın yön ve şiddet değiştirmesi, teknenin yük dağılımını ve demire binen kuvveti aniden farklılaştırabilir.",
  },
  {
    icon: Waves,
    title: "Sürüklenme dakikalar içinde başlar",
    text:
      "Demir taraması çoğu zaman büyük bir alarm vermeden başlar. Kıyıya veya başka teknelere yaklaşma kısa sürede kritik hâle gelir.",
  },
  {
    icon: SearchCheck,
    title: "Anchor watch pasif bir görev değildir",
    text:
      "Pozisyon kontrolü, çevre taraması, yakın tekne mesafesi, derinlik ve kıyı yaklaşımı sürekli izlenmelidir.",
  },
];

const alcoholEffects = [
  "Reaksiyon süresini uzatır",
  "Risk algısını zayıflatır",
  "Karar kalitesini düşürür",
  "Gecikmiş müdahaleye yol açar",
  "Ekip koordinasyonunu bozar",
  "Panik anında hatalı önceliklendirme yaratabilir",
];

const incidentFlow = [
  "Tekne koyda demirde bekliyor.",
  "Rüzgâr artıyor veya yön değiştiriyor.",
  "Demir taramaya başlıyor.",
  "Tekne kıyıya ya da başka tekneye yaklaşmaya başlıyor.",
  "Müdahale için kısa bir zaman penceresi oluşuyor.",
  "Kaptanın fark etmesi ve doğru karar vermesi gerekiyor.",
  "Gecikme yaşanırsa olay hasara, yaralanmaya veya çarpışmaya dönüşebiliyor.",
];

const expertQuestions = [
  "Demirleme yeri ve yöntemi doğru muydu?",
  "Hava ve rüzgâr değişimi takip edildi mi?",
  "Anchor watch fiilen uygulanıyor muydu?",
  "Makine ve manevra hazırlığı yeterli miydi?",
  "Müdahale için zaman ve imkân var mıydı?",
  "Alkol etkisi karar verme veya müdahale sürecini zayıflattı mı?",
];

const outcomeRows: OutcomeRow[] = [
  {
    situation: "Demirde alkol var, olay yok",
    result:
      "Her durumda otomatik ceza anlamına gelmez; ancak güvenli müdahale kabiliyeti sorgulanabilir.",
  },
  {
    situation: "Demirde alkol var, sürüklenme başladı",
    result:
      "Kusur ve dikkat-özen yükümlülüğü değerlendirmesi doğar.",
  },
  {
    situation: "Demirde alkol var, çarpışma / yaralanma oldu",
    result:
      "Cezai, idari ve hukuki sorumluluk katmanlı şekilde incelenir.",
  },
  {
    situation: "Eğitim teknesinde alkollü kaptan",
    result:
      "Öğrenci güvenliği nedeniyle çok daha ağır bir değerlendirme doğabilir.",
  },
];

const faqItems: FAQItem[] = [
  {
    q: "Türkiye’de demirde alkol açıkça yasak mı?",
    a:
      "Burada vurgulanan yaklaşım, tek bir açık yasak cümlesinden çok; güvenli sevk ve idare, dikkat ve özen yükümlülüğü, olay sonrası kusur ve deniz emniyetinin birlikte değerlendirilmesidir.",
  },
  {
    q: "Asıl mesele teknenin hareket etmesi mi?",
    a:
      "Hayır. Asıl mesele, risk doğduğunda kaptanın müdahale edebilecek durumda olup olmadığıdır. Demirde olmak sorumluluğu kendiliğinden ortadan kaldırmaz.",
  },
  {
    q: "Neden anchor watch bu kadar önemli?",
    a:
      "Çünkü sürüklenme, yakın tekne yaklaşımı, kıyı riski ve değişen hava şartları çoğu zaman ancak disiplinli takip ile erken fark edilir.",
  },
  {
    q: "Bu sayfa hukuki danışmanlık yerine geçer mi?",
    a:
      "Hayır. Bu içerik eğitim amaçlıdır. Uygulamada somut olayın özellikleri, resmi tutanaklar, bilirkişi incelemesi ve güncel mevzuat birlikte değerlendirilmelidir.",
  },
];

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <div className="mb-3 inline-flex items-center rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">
        {eyebrow}
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-4 text-sm leading-7 text-white/70 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function GlowOrb({
  className,
}: {
  className?: string;
}) {
  return <div className={`pointer-events-none absolute rounded-full blur-3xl ${className ?? ""}`} />;
}

function StatCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm">
      <div className="text-xs uppercase tracking-[0.2em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-lg font-medium text-white">{value}</div>
    </div>
  );
}

function OverviewCard({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="mb-4 inline-flex rounded-xl bg-white/6 p-3 text-emerald-200">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-7 text-white/65">{text}</p>
    </div>
  );
}

function LegalCard({ item }: { item: LegalBase }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-7 transition hover:border-amber-300/25 hover:bg-white/[0.055]">
      <div className="mb-5 flex items-start gap-4">
        <div className="rounded-2xl bg-amber-400/10 p-3 text-amber-200">
          <Gavel className="h-5 w-5" />
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-amber-200/80">{item.subtitle}</p>
        </div>
      </div>

      <p className="text-sm leading-8 text-white/72 md:text-[15px]">
        {item.body}
      </p>

      <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-500/[0.08] p-4">
        <p className="text-sm font-medium leading-7 text-emerald-100/90">
          {item.emphasis}
        </p>
      </div>
    </article>
  );
}

function AuthorityCard({ item }: { item: Authority }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
      <div className="mb-5 flex items-center gap-4">
        <div className="rounded-2xl bg-white/6 p-3 text-emerald-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      </div>

      <ul className="space-y-3">
        {item.items.map((text) => (
          <li
            key={text}
            className="flex items-start gap-3 text-sm leading-7 text-white/70"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-amber-300" />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function IntlCard({ item }: { item: IntlBase }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6">
      <div className="mb-4 inline-flex rounded-xl bg-emerald-400/10 p-3 text-emerald-200">
        <BookOpen className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
      <p className="mt-3 text-sm leading-8 text-white/72">{item.text}</p>
    </div>
  );
}

function FactCard({ item }: { item: SeamanshipFact }) {
  const Icon = item.icon;

  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
      <div className="mb-5 flex items-center gap-4">
        <div className="rounded-2xl bg-amber-400/10 p-3 text-amber-200">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
      </div>
      <p className="text-sm leading-8 text-white/72">{item.text}</p>
    </article>
  );
}

function QuestionCard({ text }: { text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
      <div className="flex items-start gap-3">
        <div className="rounded-xl bg-white/6 p-2 text-amber-200">
          <SearchCheck className="h-4 w-4" />
        </div>
        <p className="text-sm leading-7 text-white/78">{text}</p>
      </div>
    </div>
  );
}

function FAQCard({ item }: { item: FAQItem }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
      <h3 className="text-lg font-semibold text-white">{item.q}</h3>
      <p className="mt-3 text-sm leading-8 text-white/72">{item.a}</p>
    </article>
  );
}

export default function AnchoredAlcoholPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#07110f] text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(234,179,8,0.12),_transparent_25%),linear-gradient(180deg,#07110f_0%,#081514_35%,#07110f_100%)]" />
      <GlowOrb className="-right-8 top-16 h-40 w-40 bg-amber-300/10" />
      <GlowOrb className="-left-10 top-[30rem] h-52 w-52 bg-emerald-400/10" />
      <GlowOrb className="bottom-20 right-[8%] h-56 w-56 bg-emerald-300/10" />

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_0%,transparent_35%,transparent_65%,rgba(255,255,255,0.03)_100%)]" />

        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-200">
              <BadgeAlert className="h-4 w-4" />
              Hukuk + Denizcilik Eğitimi
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
              Demirdeyken Alkol
              <span className="mt-3 block bg-gradient-to-r from-amber-200 via-white to-emerald-200 bg-clip-text text-transparent">
                Tekne duruyor olabilir. Sorumluluk durmaz.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
              Bu sayfa, Türkiye’deki hukuki dayanaklar, uygulayıcı kurumlar,
              deniz emniyeti yaklaşımı ve gerçek olay mantığı bir araya
              getirilerek hazırlanmış kapsamlı bir eğitim içeriğidir. Amaç,
              “yasak mı serbest mi” seviyesini aşarak asıl soruya
              odaklanmaktır:
              <span className="font-semibold text-white">
                {" "}
                risk doğduğunda kaptan müdahale edebilecek durumda mı?
              </span>
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#hukuki-dayanaklar"
                className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-400/20"
              >
                Hukuki Dayanaklar
              </a>

              <a
                href="#uygulayici-kurumlar"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
              >
                Uygulayıcı Kurumlar
              </a>

              <a
                href="#gercek-senaryo"
                className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
              >
                Gerçek Senaryo
              </a>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <StatCard label="Temel Soru" value="Müdahale kabiliyeti" />
              <StatCard label="Merkez Konu" value="Deniz emniyeti" />
              <StatCard label="Eğitim Yönü" value="Hukuk + iyi denizcilik" />
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-black/30 backdrop-blur-sm">
              <div className="rounded-[24px] border border-amber-300/15 bg-[#0b1917] p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="rounded-xl bg-amber-400/15 p-3 text-amber-200">
                    <AlertTriangle className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-amber-200/80">
                      İlk Etki
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      Soru içki değil, hazırlık sorusudur
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 text-sm leading-7 text-white/72 md:text-[15px]">
                  <p>Gece.</p>
                  <p>Rüzgâr artıyor.</p>
                  <p>Tekne sürüklenmeye başlıyor.</p>
                  <p className="font-medium text-white">
                    Kritik soru: kaptan müdahale edebilecek durumda mı?
                  </p>
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-400/8 p-5">
                  <p className="text-sm leading-7 text-emerald-100/90">
                    Bu sayfanın omurgası şudur: demirde olmak, denizdeki risk
                    yönetimini sona erdirmez. Tekne sabit görünse de sorumluluk
                    pasif hâle gelmez.
                  </p>
                </div>
              </div>
            </div>

            <GlowOrb className="-right-6 -top-6 h-28 w-28 bg-amber-300/10" />
            <GlowOrb className="-bottom-6 -left-6 h-32 w-32 bg-emerald-400/10" />
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081513]">
        <div className="mx-auto max-w-7xl px-6 py-8 md:px-8">
          <div className="grid gap-4 md:grid-cols-4">
            <OverviewCard
              icon={Gavel}
              title="Kanun Maddeleri"
              text="TCK 179, 85, 89 ve idari deniz emniyeti çerçevesi"
            />
            <OverviewCard
              icon={Siren}
              title="Uygulayıcı Kurumlar"
              text="Sahil Güvenlik, Liman Başkanlığı, savcılık ve mahkeme"
            />
            <OverviewCard
              icon={BookOpen}
              title="Uluslararası Kurallar"
              text="COLREG ve STCW üzerinden iyi denizcilik yaklaşımı"
            />
            <OverviewCard
              icon={FileText}
              title="Somut Olay Mantığı"
              text="Bilirkişi, müdahale imkânı ve kusur değerlendirmesi"
            />
          </div>
        </div>
      </section>

      <section
        id="hukuki-dayanaklar"
        className="border-b border-white/10 px-6 py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Türkiye’de Hukuki Zemin"
            title="Kanun maddeleri tek bir yasaktan daha büyük bir çerçeve kurar"
            description="Burada vurgulanan yaklaşım, tek bir “demirde alkol yasağı” ifadesinden çok; güvenli sevk ve idare, dikkat ve özen yükümlülüğü, olay sonrası kusur ve deniz emniyetinin birlikte değerlendirilmesidir."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {legalBases.map((item) => (
              <LegalCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="uygulayici-kurumlar"
        className="border-b border-white/10 bg-[#081513] px-6 py-20 md:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Uygulama"
            title="Kanun tek başına işlemez, kurumlar uygular"
            description="Deniz güvenliğinde yazılı hüküm kadar, sahadaki denetim, olay tespiti, tutanak, bilirkişi ve yargılama akışı da önemlidir. Öğrencinin bu zinciri birlikte görmesi gerekir."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {authorities.map((item) => (
              <AuthorityCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Uluslararası Denizcilik Standartları"
            title="İyi denizcilik, hazır olma ve gözcülük yaklaşımı"
            description="Bu sayfa yalnızca ulusal maddelere değil, denizcilik pratiğini şekillendiren uluslararası ilkelere de dayanır. Temel fikir aynıdır: risk doğduğunda doğru, zamanında ve yeterli müdahale."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {intlBases.map((item) => (
              <IntlCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081513] px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Denizcilik Mantığı"
            title="Demirde olmak neden pasif bir durum değildir?"
            description="Bu bölüm öğrencinin hukuki metni deniz üzerinde görmesini sağlar. Konu yalnızca ceza hukuku değil, aynı zamanda denizcilik fiziği ve nöbet disiplinidir."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {seamanshipFacts.map((item) => (
              <FactCard key={item.title} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionTitle
              eyebrow="Pratik Etki"
              title="Alkol denizde neyi bozar?"
              description="Odak, soyut yasak söylemi değil; alkolün kaptanın gerçek karar zincirine ne yaptığıdır."
            />

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <ul className="space-y-4">
                {alcoholEffects.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-white/75"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-2xl border border-amber-300/15 bg-amber-400/[0.08] p-5">
                <p className="text-sm leading-7 text-amber-100/90">
                  Denizde birçok olay yanlış manevradan önce başlar. İlk
                  kırılma, çoğu zaman riski geç fark etmek veya doğru anda karar
                  verememektir.
                </p>
              </div>
            </div>
          </div>

          <div id="gercek-senaryo">
            <SectionTitle
              eyebrow="Gerçek Senaryo"
              title="Olay nasıl büyür?"
              description="Konuya sahadan bakıldığında zincir genellikle küçük bir ihmal ile başlar ve çok kısa sürede ağır sonuca dönebilir."
            />

            <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7">
              <div className="space-y-5">
                {incidentFlow.map((step, index) => (
                  <div key={step} className="flex gap-4">
                    <div className="flex w-10 shrink-0 flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/6 text-sm font-semibold text-white">
                        {index + 1}
                      </div>
                      {index !== incidentFlow.length - 1 ? (
                        <div className="mt-2 h-full w-px bg-white/10" />
                      ) : null}
                    </div>

                    <div className="pb-5 pt-1 text-sm leading-7 text-white/72">
                      {step}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-emerald-300/15 bg-emerald-400/[0.08] p-5">
                <p className="text-sm leading-7 text-emerald-100/90">
                  Buradaki eğitim hedefi, öğrencinin “demirdeyken risk yoktur”
                  yanılgısından çıkması ve sorumluluğun asıl olarak hazırlık,
                  gözcülük ve müdahale kabiliyetinde toplandığını görmesidir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081513] px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Bilirkişi Mantığı"
            title="Mahkeme ve bilirkişi neye bakar?"
            description="Somut olay doğduğunda değerlendirme çoğu zaman şu sorular etrafında şekillenir. Eğitim açısından asıl kazanım, bu soruları olay çıkmadan önce öğrenmektir."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {expertQuestions.map((question) => (
              <QuestionCard key={question} text={question} />
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-amber-300/15 bg-amber-500/[0.08] p-7">
            <p className="text-sm leading-8 text-amber-100/90 md:text-[15px]">
              Bu bölümün ana öğretici sonucu şudur: değerlendirme yalnızca
              “alkol var mıydı?” sorusuna değil, “risk doğduğunda kaptanın
              güvenli ve zamanında müdahale etme imkânı var mıydı, bunu
              kullanabildi mi?” sorusuna dayanır.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Özet Tablo"
            title="Durumlara göre olası değerlendirme çerçevesi"
            description="Aşağıdaki tablo, eğitim amacıyla genel çerçeve sunar. Her somut olay kendi koşulları içinde ayrıca incelenir."
          />

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04]">
            <div className="grid grid-cols-1 border-b border-white/10 bg-white/[0.04] md:grid-cols-[1fr_1.2fr]">
              <div className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                Durum
              </div>
              <div className="px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/65">
                Olası Sonuç
              </div>
            </div>

            {outcomeRows.map((row, index) => (
              <div
                key={row.situation}
                className={`grid grid-cols-1 md:grid-cols-[1fr_1.2fr] ${
                  index !== outcomeRows.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <div className="px-6 py-5 text-sm font-medium leading-7 text-white">
                  {row.situation}
                </div>
                <div className="px-6 py-5 text-sm leading-7 text-white/72">
                  {row.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081513] px-6 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Sık Sorulanlar"
            title="Öğrencinin aklına gelecek temel sorular"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {faqItems.map((item) => (
              <FAQCard key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-amber-300/15 bg-[linear-gradient(180deg,rgba(245,158,11,0.08),rgba(16,185,129,0.06))] p-8 md:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
                <Anchor className="h-4 w-4" />
                Eğitim Sonucu
              </div>

              <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                Demirde olmak serbestlik değildir.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/75 md:text-lg">
                Kaptanın sorumluluğu, tekne durduğunda sona ermez. Deniz
                emniyeti, gözcülük, müdahale hazırlığı ve doğru karar verme
                yükümlülüğü devam eder. Bu sayfanın özü budur.
              </p>

              <div className="mt-8 space-y-3">
                <p className="text-xl font-semibold text-white md:text-2xl">
                  Demir tekneyi tutabilir.
                </p>
                <p className="text-xl font-semibold text-amber-200 md:text-2xl">
                  Ama sorumluluğu tutmaz.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#hukuki-dayanaklar"
                  className="rounded-full border border-white/15 bg-white/8 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/12"
                >
                  Baştan Oku
                </a>

                <Link
                  href="/guide"
                  className="rounded-full border border-emerald-300/30 bg-emerald-400/10 px-6 py-3 text-sm font-medium text-emerald-100 transition hover:bg-emerald-400/20"
                >
                  Eğitim Rehberine Dön
                </Link>
              </div>

              <p className="mt-8 text-xs leading-6 text-white/45">
                Bu sayfa eğitim amaçlı hazırlanmıştır. Somut olaylarda güncel
                mevzuat, resmi tutanaklar, bilirkişi incelemesi ve uzman hukuki
                değerlendirme ayrıca dikkate alınmalıdır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}