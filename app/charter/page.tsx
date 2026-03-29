"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Price = {
  month: string;
  price: string;
};

type Boat = {
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
  prices: Price[];
};

const WHATSAPP = "905532487383";

const monthOptions = [
  { key: "mayis", label: "Mayıs" },
  { key: "haziran", label: "Haziran" },
  { key: "temmuz", label: "Temmuz" },
  { key: "agustos", label: "Ağustos" },
  { key: "eylul", label: "Eylül" },
];

export default function CharterPage() {
  const [boats, setBoats] = useState<Boat[]>([]);
  const [selectedMonth, setSelectedMonth] = useState("haziran");
  const [minCabin, setMinCabin] = useState(0);

  useEffect(() => {
    fetch("/api/charter")
      .then((res) => res.json())
      .then((data) => setBoats(data.boats || []));
  }, []);

  const filteredBoats = boats.filter((b) => {
    return (minCabin ? b.cabins >= minCabin : true);
  });

  const getPrice = (boat: Boat) => {
    const found = boat.prices.find(
      (p) => p.month === selectedMonth
    );
    return found?.price || "—";
  };

  const waLink = (boat: Boat) => {
    const monthLabel =
      monthOptions.find((m) => m.key === selectedMonth)?.label;

    const text = `Merhaba, ${boat.name} (${boat.model}) teknesi için ${monthLabel} ayında rezervasyon yapmak istiyorum.`;

    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  };

  return (
    <main
      style={{
        padding: "120px 24px 60px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: 42,
          fontWeight: 900,
          color: "#e6f1ff",
        }}
      >
        deneyimini doğru planla
      </h1>

      {/* FILTER */}
      <div
        style={{
          marginTop: 30,
          display: "flex",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {monthOptions.map((m) => (
            <option key={m.key} value={m.key}>
              {m.label}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => setMinCabin(Number(e.target.value))}
        >
          <option value={0}>Kabin</option>
          <option value={2}>2+</option>
          <option value={3}>3+</option>
          <option value={4}>4+</option>
        </select>
      </div>

      {/* GRID */}
      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: 24,
        }}
      >
        {filteredBoats.map((boat) => (
          <div
            key={boat.id}
            style={{
              borderRadius: 20,
              overflow: "hidden",
              background: "#0b1624",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                height: 220,
                background: `url(${boat.image}) center/cover`,
              }}
            />

            <div style={{ padding: 18 }}>
              <div
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#fff",
                }}
              >
                {boat.name}
              </div>

              <div style={{ opacity: 0.7, fontSize: 13 }}>
                {boat.model} • {boat.location}
              </div>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  opacity: 0.7,
                }}
              >
                {boat.shortNote}
              </p>

              {/* PRICE */}
              <div
                style={{
                  marginTop: 14,
                  padding: 14,
                  borderRadius: 14,
                  background:
                    "linear-gradient(180deg,#0b1624,#07101a)",
                }}
              >
                <span style={{ fontSize: 12, opacity: 0.6 }}>
                  {
                    monthOptions.find(
                      (m) => m.key === selectedMonth
                    )?.label
                  }{" "}
                  fiyatı
                </span>

                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: "#67d3ff",
                  }}
                >
                  {getPrice(boat)}
                </div>
              </div>

              {/* BUTTONS */}
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href={`/charter/${boat.slug}`}
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 12,
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    textAlign: "center",
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  Detayları Gör
                </Link>

                <a
                  href={waLink(boat)}
                  target="_blank"
                  style={{
                    flex: 1,
                    padding: "12px",
                    borderRadius: 12,
                    background:
                      "linear-gradient(135deg,#67d3ff,#42bdf8)",
                    color: "#02121c",
                    textAlign: "center",
                    fontWeight: 900,
                    textDecoration: "none",
                  }}
                >
                  Hemen Rezervasyon
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}