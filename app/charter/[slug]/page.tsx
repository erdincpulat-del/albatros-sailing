import Link from "next/link";
import { notFound } from "next/navigation";

type Boat = {
  slug: string;
  name: string;
  title: string;
  mainImage: string;
  images: string[];
  cabins: string;
  year: string;
  capacity: string;
  wc: string;
  descriptionTr: string;
  featuresTr: string[];
  prices: string[];
};

const boats: Boat[] = [
  {
    slug: "bali-44-2024",
    name: "BALI 44",
    title: "BALI 44 – 2024 Model – Yeni Tekne",
    mainImage: "/boats/bali-44.jpg",
    images: ["/boats/bali-44.jpg", "/boats/bali-44-2.jpg", "/boats/bali-44-3.jpg"],
    cabins: "4 Kabin",
    year: "2024",
    capacity: "8 Kişi",
    wc: "4 WC",
    descriptionTr:
      "Yeni nesil katamaran konforu, geniş yaşam alanı ve dengeli seyir karakteriyle premium charter deneyimi sunar.",
    featuresTr: ["Katamaran konforu", "Geniş yaşam alanı", "Modern tasarım", "Premium charter hissi"],
    prices: ["Nisan: Talep üzerine", "Mayıs: Talep üzerine", "Haziran: Talep üzerine"],
  },
  {
    slug: "bavaria-45-AURA1",
    name: "BAVARIA 45 – AURA1",
    title: "BAVARIA 45 – 4 Kabin – Premium Charter",
    mainImage: "/boats/bavaria-45.jpg",
    images: ["/boats/bavaria-45.jpg", "/boats/bavaria-45-2.jpg", "/boats/bavaria-45-3.jpg"],
    cabins: "4 Kabin",
    year: "2011",
    capacity: "8 Kişi",
    wc: "3 WC",
    descriptionTr:
      "Klasik Bavaria güveni, rahat kokpit yapısı ve dengeli kullanım karakteriyle güçlü bir charter seçeneğidir.",
    featuresTr: ["Dengeli kullanım", "Konforlu kokpit", "Güvenilir yapı", "4 kabin planı"],
    prices: ["Nisan: Talep üzerine", "Mayıs: Talep üzerine", "Haziran: Talep üzerine"],
  },
  {
    slug: "bavaria-46-2022",
    name: "BAVARIA 46",
    title: "BAVARIA 46 – 4 Kabin – 2022 Model",
    mainImage: "/boats/bavaria-46-2022.jpg",
    images: ["/boats/bavaria-46-2022.jpg", "/boats/bavaria-46-2022-2.jpg", "/boats/bavaria-46-2022-3.jpg"],
    cabins: "4 Kabin",
    year: "2022",
    capacity: "8 Kişi",
    wc: "3 WC",
    descriptionTr:
      "Modern çizgisi, güçlü gövde yapısı ve ferah yaşam alanıyla aile ve grup charterları için uygundur.",
    featuresTr: ["Modern gövde", "Ferah iç alan", "Konforlu seyir", "4 kabin planı"],
    prices: ["Nisan: Talep üzerine", "Mayıs: Talep üzerine", "Haziran: Talep üzerine"],
  },
  {
    slug: "bavaria-46-2024",
    name: "BAVARIA 46",
    title: "BAVARIA 46 – 4 Kabin – 2024 Model – Yeni Tekne",
    mainImage: "/boats/bavaria-46-2024.jpg",
    images: ["/boats/bavaria-46-2024.jpg", "/boats/bavaria-46-2024-2.jpg", "/boats/bavaria-46-2024-3.jpg"],
    cabins: "4 Kabin",
    year: "2024",
    capacity: "8 Kişi",
    wc: "3 WC",
    descriptionTr:
      "Yeni model Bavaria 46, yüksek konforu ve modern çizgisiyle premium tekne kiralama deneyimi için öne çıkar.",
    featuresTr: ["Yeni model", "4 kabin", "3 WC", "Güneş paneli", "Webasto", "İnvertör"],
    prices: ["Nisan 2024: 3.700 €", "Mayıs 2024: 4.300 €", "Haziran 2024: 4.600 €"],
  },
  {
    slug: "beneteau-oceanis-41-2016",
    name: "BENETEAU OCEANIS 41",
    title: "BENETEAU OCEANIS 41 – 3 Kabin – 2016 Model",
    mainImage: "/boats/beneteau-oceanis-41.jpg",
    images: ["/boats/beneteau-oceanis-41.jpg", "/boats/beneteau-oceanis-41-2.jpg", "/boats/beneteau-oceanis-41-3.jpg"],
    cabins: "3 Kabin",
    year: "2016",
    capacity: "6 Kişi",
    wc: "2 WC",
    descriptionTr:
      "Akıcı seyir karakteri, dengeli performansı ve kullanışlı iç düzeniyle keyifli bir yelkenli charter seçeneğidir.",
    featuresTr: ["3 kabin", "Dengeli seyir", "Kullanışlı iç hacim", "Keyifli performans"],
    prices: ["Nisan: Talep üzerine", "Mayıs: Talep üzerine", "Haziran: Talep üzerine"],
  },
  {
    slug: "elan-400-2013",
    name: "SAFINAZ",
    title: "SAFINAZ – 3 Kabin – 2013 Model",
    mainImage: "/boats/elan-400.jpg",
    images: ["/boats/elan-400.jpg", "/boats/elan-400-2.jpg", "/boats/elan-400-3.jpg"],
    cabins: "3 Kabin",
    year: "2013",
    capacity: "6 Kişi",
    wc: "1 WC",
    descriptionTr:
      "Kompakt, dengeli ve pratik yapısıyla daha sade ve ekonomik charter deneyimi isteyenler için uygundur.",
    featuresTr: ["Kompakt yapı", "3 kabin", "Ekonomik seçenek", "Pratik kullanım"],
    prices: ["Nisan: Talep üzerine", "Mayıs: Talep üzerine", "Haziran: Talep üzerine"],
  },
];

export default async function CharterBoatDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const boat = boats.find((item) => item.slug === slug);

  if (!boat) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#07111f] text-white">
      <section className="relative h-[520px] w-full overflow-hidden">
        <img src={boat.mainImage} alt={boat.name} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/35 to-[#07111f]" />

        <div className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-6">
          <Link
            href="/charter"
            className="mb-6 inline-flex rounded-full border border-white/20 bg-black/30 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/10"
          >
            ← Charter filosuna dön
          </Link>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
            {boat.title}
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-[1fr_380px]">
        <div className="space-y-10">
          <div>
            <p className="text-sm uppercase tracking-[0.22em] text-cyan-200/70">
              Tekne Kiralama
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              {boat.descriptionTr}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Öne çıkan özellikler</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {boat.featuresTr.map((feature) => (
                <div
                  key={feature}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-slate-200"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Galeri</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {boat.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={boat.name}
                  className="h-40 w-full rounded-2xl object-cover transition duration-500 hover:scale-[1.03]"
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="h-fit rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-md md:sticky md:top-28">
          <h2 className="text-xl font-semibold">Tekne Bilgisi</h2>

          <div className="mt-5 grid gap-3">
            <Info label="Yıl" value={boat.year} />
            <Info label="Kabin" value={boat.cabins} />
            <Info label="Kapasite" value={boat.capacity} />
            <Info label="WC" value={boat.wc} />
          </div>

          <div className="mt-6 border-t border-white/10 pt-6">
            <h3 className="font-semibold">Fiyatlar</h3>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              {boat.prices.map((price) => (
                <div key={price}>{price}</div>
              ))}
            </div>
          </div>

          <a
            href={`https://wa.me/905324873813?text=${encodeURIComponent(
              `${boat.name} hakkında bilgi almak istiyorum.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-7 block rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-bold text-slate-950 shadow-[0_20px_50px_rgba(34,211,238,0.22)] transition hover:-translate-y-1"
          >
            Rezervasyon / Bilgi Al
          </a>
        </aside>
      </section>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/15 px-5 py-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-100/55">
        {label}
      </div>
      <div className="mt-1 text-base font-semibold text-white">{value}</div>
    </div>
  );
}