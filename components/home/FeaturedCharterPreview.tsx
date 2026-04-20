"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type CharterBoatPrice = {
  id?: string;
  month?: string;
  price: string;
};

type CharterBoat = {
  id: string;
  slug: string;
  name: string;
  model: string;
  year?: number;
  cabins?: number;
  guestsLabel?: string;
  location: string;
  image?: string;
  shortNote?: string;
  description?: string;
  features?: string[];
  prices: CharterBoatPrice[];
};

function getStartingPrice(prices: CharterBoatPrice[] = []) {
  if (!prices.length) return "";

  const numbers = prices
    .map((item) => {
      const numeric = String(item.price).replace(/[^\d,]/g, "").replace(",", ".");
      const value = Number(numeric);
      return Number.isFinite(value) ? value : null;
    })
    .filter((v): v is number => v !== null);

  if (!numbers.length) return prices[0]?.price || "";

  const min = Math.min(...numbers);

  const match = prices.find((item) => {
    const numeric = String(item.price).replace(/[^\d,]/g, "").replace(",", ".");
    return Number(numeric) === min;
  });

  return match?.price || prices[0]?.price || "";
}

export default function FeaturedCharterPreview() {
  const [boats, setBoats] = useState<CharterBoat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const res = await fetch("/api/charter", {
          cache: "no-store",
        });

        const data = await res.json();
        const items = Array.isArray(data?.boats) ? data.boats : [];

        setBoats(items.slice(0, 2));
      } catch (err) {
        console.error(err);
        setBoats([]);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <section className="bg-[#0b1d2a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex justify-between items-end gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Charter
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              Premium Charter Koleksiyonu
            </h2>

            <p className="mt-3 max-w-xl text-white/70">
              Seçili tekneleri inceleyin ve size uygun olanı doğrudan talep edin.
            </p>
          </div>

          <Link
            href="/charter"
            className="hidden md:inline-flex border border-white/10 bg-white/5 px-5 py-3 rounded-full text-sm font-semibold text-white transition hover:border-[#67d3ff] hover:text-[#67d3ff]"
          >
            Tümünü Gör
          </Link>
        </div>

        <div className="mt-10">
          {loading ? (
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur rounded-2xl text-sm text-white/60">
              Yükleniyor...
            </div>
          ) : boats.length === 0 ? (
            <div className="p-8 border border-white/10 bg-white/5 backdrop-blur rounded-2xl text-sm text-white/60">
              Tekne bulunamadı.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {boats.map((boat) => {
                const price = getStartingPrice(boat.prices);

                return (
                  <div
                    key={boat.id}
                    className="border border-white/10 bg-white/5 backdrop-blur rounded-2xl overflow-hidden transition hover:border-[#67d3ff]/40 hover:shadow-[0_18px_50px_rgba(0,0,0,0.18)]"
                  >
                    <div className="h-[260px] bg-slate-900">
                      {boat.image ? (
                        <img
                          src={boat.image}
                          alt={boat.name}
                          className="w-full h-full object-cover"
                        />
                      ) : null}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white">
                        {boat.name}
                      </h3>

                      <p className="text-sm text-white/55 mt-2">
                        {boat.model} • {boat.location}
                      </p>

                      <p className="mt-3 text-sm text-white/72">
                        {boat.shortNote}
                      </p>

                      <div className="mt-4 text-sm text-white/78">
                        Başlangıç:{" "}
                        <span className="font-semibold text-white">
                          {price || "Sorunuz"}
                        </span>
                      </div>

                      <div className="mt-5 flex gap-3">
                        <Link
                          href={`/charter/${boat.slug}`}
                          className="flex-1 text-center bg-[#67d3ff] text-[#04121c] py-2 rounded-full text-sm font-semibold transition hover:brightness-105"
                        >
                          İncele
                        </Link>

                        <Link
                          href={`/charter/${boat.slug}#charter-inquiry-form`}
                          className="flex-1 text-center border border-white/10 bg-white/5 text-white py-2 rounded-full text-sm font-semibold transition hover:border-[#67d3ff] hover:text-[#67d3ff]"
                        >
                          Talep
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/charter"
            className="inline-flex border border-white/10 bg-white/5 px-5 py-3 rounded-full text-sm font-semibold text-white transition hover:border-[#67d3ff] hover:text-[#67d3ff]"
          >
            Tümünü Gör
          </Link>
        </div>
      </div>
    </section>
  );
}