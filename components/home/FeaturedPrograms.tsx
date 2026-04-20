"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CharterBoatPrice = {
  id?: string;
  month: string;
  price: string;
};

type CharterBoat = {
  id: string;
  slug: string;
  name: string;
  model: string;
  year: number;
  cabins: number;
  guestsLabel: string;
  location: string;
  image: string;
  shortNote: string;
  description: string;
  features: string;
  prices: CharterBoatPrice[];
};

function getStartingPrice(prices: CharterBoatPrice[] = []) {
  if (!prices.length) return "";

  const numbers = prices
    .map((item) => {
      const numeric = String(item.price)
        .replace(/[^\d.,]/g, "")
        .replace(",", ".");
      const value = Number(numeric);
      return Number.isFinite(value) ? value : null;
    })
    .filter((value): value is number => value !== null);

  if (!numbers.length) return prices[0]?.price || "";

  const min = Math.min(...numbers);

  const matched = prices.find((item) => {
    const numeric = String(item.price)
      .replace(/[^\d.,]/g, "")
      .replace(",", ".");
    return Number(numeric) === min;
  });

  return matched?.price || prices[0]?.price || "";
}

export default function FeaturedCharterPreview() {
  const [boats, setBoats] = useState<CharterBoat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBoats() {
      try {
        setLoading(true);

        const res = await fetch("/api/charter", {
          cache: "no-store",
        });

        const data = await res.json();
        const items = Array.isArray(data?.boats) ? data.boats : [];

        setBoats(items.slice(0, 2));
      } catch (error) {
        console.error("Featured charter fetch error:", error);
        setBoats([]);
      } finally {
        setLoading(false);
      }
    }

    loadBoats();
  }, []);

  return (
    <section className="bg-white text-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
              Featured Charter
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              Seçili charter tekneleri
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Premium charter koleksiyonumuzdan öne çıkan tekneleri inceleyin,
              detay sayfasına geçin ve doğrudan talep bırakın.
            </p>
          </div>

          <div>
            <Link
              href="/charter"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Tüm Charter Koleksiyonunu Gör
            </Link>
          </div>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 text-sm text-slate-500">
              Charter tekneleri yükleniyor...
            </div>
          ) : boats.length === 0 ? (
            <div className="rounded-[2rem] border border-slate-200 bg-[#f8fafc] p-8 text-sm text-slate-500">
              Şu anda öne çıkarılacak charter teknesi bulunamadı.
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-2">
              {boats.map((boat) => {
                const startingPrice = getStartingPrice(boat.prices);

                return (
                  <article
                    key={boat.id}
                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="grid gap-0 md:grid-cols-[320px_1fr]">
                      <div className="relative min-h-[280px] bg-slate-100">
                        {boat.image ? (
                          <img
                            src={boat.image}
                            alt={boat.name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-sm text-slate-500">
                            No image
                          </div>
                        )}

                        <div className="absolute left-4 top-4 inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 backdrop-blur">
                          {boat.location}
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                            {boat.name}
                          </h3>

                          <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700 ring-1 ring-slate-200">
                            {boat.model}
                          </span>
                        </div>

                        <p className="mt-4 text-sm leading-7 text-slate-600">
                          {boat.shortNote}
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3">
                          <InfoBox label="Yıl" value={String(boat.year)} />
                          <InfoBox label="Kabin" value={String(boat.cabins)} />
                          <InfoBox label="Misafir" value={boat.guestsLabel} />
                          <InfoBox
                            label="Başlangıç"
                            value={startingPrice || "Sorunuz"}
                          />
                        </div>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                          <Link
                            href={`/charter/${boat.slug}`}
                            className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                          >
                            Tekneyi İncele
                          </Link>

                          <Link
                            href={`/charter/${boat.slug}#charter-inquiry-form`}
                            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                          >
                            Talep Gönder
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 break-words text-sm font-medium text-slate-900">
        {value}
      </div>
    </div>
  );
}