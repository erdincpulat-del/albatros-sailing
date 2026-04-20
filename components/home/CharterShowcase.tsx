"use client";

import Link from "next/link";

export default function CharterShowcase() {
  return (
    <section className="bg-[#0b1d2a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-sm backdrop-blur">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                Albatros Sailing Charter
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Premium charter deneyimini keşfedin
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
                Bodrum çıkışlı seçkin tekneler, özenle planlanmış rotalar ve
                Albatros Sailing standardında güçlü bir deniz deneyimi.
                Mevcut tekneleri inceleyin, sezon fiyatlarını görün ve size en
                uygun tekne için doğrudan talep bırakın.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <InfoCard label="Koleksiyon" value="Premium tekneler" />
                <InfoCard label="Çıkış" value="Bodrum" />
                <InfoCard label="Akış" value="Detay + Talep" />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/charter"
                  className="inline-flex items-center justify-center rounded-full bg-[#67d3ff] px-6 py-4 text-sm font-semibold text-[#04121c] transition hover:brightness-105"
                >
                  Charter Koleksiyonunu Gör
                </Link>

                <Link
                  href="/reserve/charter"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:border-[#67d3ff] hover:text-[#67d3ff]"
                >
                  Charter Talebi Oluştur
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1400&q=80"
                alt="Luxury sailing charter"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/20 bg-white/12 p-5 backdrop-blur">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Albatros Experience
                </div>

                <div className="mt-2 text-lg font-semibold text-white">
                  Seçkin rota, güçlü ekip, güven veren organizasyon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[1.25rem] border border-white/10 bg-[#08131d] p-4">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}