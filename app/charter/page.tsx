"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import CharterCalendar from "@/components/charter/CharterCalendar";

type CharterBoatAvailabilityStatus =
  | "AVAILABLE"
  | "OPTION"
  | "BOOKED"
  | "BLOCKED";

type CharterBoatAvailability = {
  id: string;
  startDate: string;
  endDate: string;
  status: CharterBoatAvailabilityStatus;
};

type CharterBoatPrice = {
  id: string;
  month: string;
  price: string;
};

type CharterGalleryImage = {
  id: string;
  imageUrl: string;
  sortOrder?: number | null;
  isCover?: boolean | null;
};

type CharterBoat = {
  id: string;
  slug: string;
  name: string;
  model?: string | null;
  year?: number | string | null;
  cabins?: number | string | null;
  cabin?: number | string | null;
  guestsLabel?: string | null;
  location?: string | null;
  imageUrl?: string | null;
  image?: string | null;
  shortNote?: string | null;
  description?: string | null;
  features?: string | null;
  prices: CharterBoatPrice[];
  gallery?: CharterGalleryImage[];
  availability?: CharterBoatAvailability[];
  images?: string[];
};

function safeString(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  return "";
}

function getStartingPrice(prices: { price: string }[]) {
  if (!prices?.length) return "";

  const numbers = prices
    .map((p) => Number(String(p.price).replace(/[^\d]/g, "")))
    .filter((n) => !Number.isNaN(n));

  if (!numbers.length) return prices[0]?.price || "";

  const min = Math.min(...numbers);
  return `${min} €`;
}

function normalizeFeatures(features?: string | null) {
  if (!features) return [];

  return features
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function getBoatImages(boat?: CharterBoat | null) {
  if (!boat) return [];

  const mainImage = safeString(boat.imageUrl || boat.image).trim();

  const galleryImages =
    (boat.gallery ?? [])
      .slice()
      .sort((a, b) => (a.sortOrder ?? 0) - (b.sortOrder ?? 0))
      .map((item) => safeString(item.imageUrl).trim())
      .filter(Boolean) ?? [];

  const legacyImages =
    (boat.images ?? []).map((item) => safeString(item).trim()).filter(Boolean) ??
    [];

  const merged = [
    ...(mainImage ? [mainImage] : []),
    ...galleryImages,
    ...legacyImages,
  ];

  return Array.from(new Set(merged));
}

function formatDateRangeTR(startDate: string, endDate: string) {
  const trMonths = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  const trDays = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
  ];

  const start = new Date(startDate);
  const end = new Date(endDate);

  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
    return `${startDate} – ${endDate}`;
  }

  const startLabel = `${String(start.getDate()).padStart(2, "0")} ${
    trMonths[start.getMonth()]
  } ${trDays[start.getDay()]}`;

  const endLabel = `${String(end.getDate()).padStart(2, "0")} ${
    trMonths[end.getMonth()]
  } ${trDays[end.getDay()]}`;

  return `${startLabel} – ${endLabel}`;
}

export default function CharterPage() {
  const [boats, setBoats] = useState<CharterBoat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedBoatId, setSelectedBoatId] = useState("");
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function fetchBoats() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch("/api/charter", {
          method: "GET",
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error(`Charter fetch failed: ${response.status}`);
        }

        const data = await response.json();

        const nextBoats = Array.isArray(data)
          ? data
          : Array.isArray(data?.boats)
          ? data.boats
          : Array.isArray(data?.data)
          ? data.data
          : Array.isArray(data?.items)
          ? data.items
          : [];

        if (ignore) return;

        setBoats(nextBoats);

        setSelectedBoatId((current) => {
          if (current && nextBoats.some((boat: any) => boat.id === current)) {
            return current;
          }
          return nextBoats[0]?.id ?? "";
        });
      } catch (err) {
        console.error("Charter page fetch error:", err);
        if (!ignore) {
          setError("Charter verileri yüklenemedi.");
          setBoats([]);
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchBoats();

    return () => {
      ignore = true;
    };
  }, []);

  const selectedBoat =
    boats.find((boat) => boat.id === selectedBoatId) ?? boats[0] ?? null;

  const selectedImages = useMemo(
    () => getBoatImages(selectedBoat),
    [selectedBoat]
  );

  const selectedImage =
    selectedImages[selectedImageIndex] ||
    safeString(selectedBoat?.imageUrl || selectedBoat?.image) ||
    "";

  useEffect(() => {
    if (selectedImageIndex > selectedImages.length - 1) {
      setSelectedImageIndex(0);
    }
  }, [selectedImages, selectedImageIndex]);

  const monthlyAvailability = useMemo(() => {
    if (!selectedBoat) return [];

    const monthNames = [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ];

    return (selectedBoat.prices ?? []).map((priceItem) => {
      const monthWeeks = (selectedBoat.availability ?? []).filter((item) => {
        const start = new Date(item.startDate);
        if (Number.isNaN(start.getTime())) return false;
        return monthNames[start.getMonth()] === priceItem.month;
      });

      return {
        ...priceItem,
        weeks: monthWeeks,
      };
    });
  }, [selectedBoat]);

  const selectedBoatFeatures = normalizeFeatures(selectedBoat?.features);

  if (loading) {
    return (
      <main
        className="text-white"
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: "20px 24px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(226,232,240,0.8)",
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          Charter verileri yükleniyor...
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main
        className="text-white"
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        }}
      >
        <div
          style={{
            maxWidth: 560,
            borderRadius: 24,
            padding: "24px 28px",
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              color: "#f8fafc",
            }}
          >
            Veri yüklenemedi
          </h2>
          <p
            style={{
              marginTop: 12,
              marginBottom: 0,
              color: "rgba(226,232,240,0.78)",
              lineHeight: 1.8,
              fontSize: 15,
            }}
          >
            {error}
          </p>
        </div>
      </main>
    );
  }

  if (!selectedBoat) {
    return (
      <main
        className="text-white"
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background:
            "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        }}
      >
        <div
          style={{
            borderRadius: 24,
            padding: "24px 28px",
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            color: "rgba(226,232,240,0.8)",
            fontSize: 15,
            fontWeight: 700,
          }}
        >
          Görüntülenecek charter teknesi bulunamadı.
        </div>
      </main>
    );
  }

  return (
    <main
      className="text-white"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
      }}
    >
      <section
        className="relative overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.62), rgba(8,14,24,0.42))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 10%, rgba(103,211,255,0.10), transparent 30%), radial-gradient(circle at 85% 80%, rgba(103,211,255,0.08), transparent 28%)",
            pointerEvents: "none",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <p
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(103,211,255,0.08)",
              border: "1px solid rgba(103,211,255,0.18)",
              color: "#8ed8ff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
            }}
          >
            ALBATROS SAILING
          </p>

          <h1
            style={{
              marginTop: 20,
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: 900,
              lineHeight: 1.04,
              letterSpacing: "-0.04em",
              color: "#f8fafc",
            }}
          >
            Charter Fleet
          </h1>

          <p
            style={{
              marginTop: 18,
              maxWidth: "48rem",
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
            }}
          >
            Tekneyi seçin, fotoğraflarını inceleyin, başlangıç fiyatını görün ve
            size uygun charter haftasını Cumartesi giriş – Cuma çıkış mantığıyla
            planlayın.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#charter-selector"
              style={{
                display: "inline-flex",
                minWidth: 170,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                padding: "14px 22px",
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                fontSize: 14,
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(66,189,248,0.45)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 10px 24px rgba(66,189,248,0.22)";
              }}
            >
              Tekneyi Seç
            </a>

            <a
              href="#charter-calendar"
              style={{
                display: "inline-flex",
                minWidth: 170,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 16,
                padding: "14px 22px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.borderColor = "rgba(103,211,255,0.18)";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow =
                  "0 12px 26px rgba(66,189,248,0.10)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Takvimi Gör
            </a>
          </div>
        </div>
      </section>

      <section
        id="charter-selector"
        className="mx-auto max-w-7xl px-6 py-14 md:py-16"
      >
        <div className="max-w-3xl">
          <p
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(226,232,240,0.62)",
            }}
          >
            CHARTER SELECTOR
          </p>

          <h2
            style={{
              marginTop: 12,
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            Teknenizi seçin
          </h2>

          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.78)",
            }}
          >
            Etiketlerden teknenizi seçin. Seçilen teknenin görselleri, fiyat
            çizgisi ve haftalık müsaitlik bilgisi hemen aşağıda değişir.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {boats.map((boat) => {
            const isActive = boat.id === selectedBoatId;

            return (
              <button
                key={boat.id}
                type="button"
                onClick={() => {
                  setSelectedBoatId(boat.id);
                  setSelectedImageIndex(0);
                }}
                style={{
                  borderRadius: 999,
                  padding: "12px 18px",
                  fontSize: 14,
                  fontWeight: 800,
                  transition: "all 0.2s ease",
                  border: "1px solid",
                  borderColor: isActive
                    ? "rgba(66,189,248,0.38)"
                    : "rgba(255,255,255,0.10)",
                  background: isActive
                    ? "linear-gradient(180deg, rgba(103,211,255,0.16), rgba(66,189,248,0.10))"
                    : "rgba(255,255,255,0.04)",
                  color: isActive ? "#8ed8ff" : "#e5eef7",
                  boxShadow: isActive
                    ? "0 10px 24px rgba(66,189,248,0.16)"
                    : "none",
                }}
              >
                {boat.name} / {boat.year}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div
            style={{
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 20,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <div
              style={{
                height: "520px",
                overflow: "hidden",
                borderRadius: "1.5rem",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={selectedBoat?.name || "Charter boat"}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div
                  className="flex h-full w-full items-center justify-center"
                  style={{
                    color: "rgba(226,232,240,0.6)",
                    fontSize: 14,
                  }}
                >
                  Görsel bulunamadı
                </div>
              )}
            </div>

            {selectedImages.length > 1 ? (
              <div className="mt-4 grid grid-cols-4 gap-3">
                {selectedImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImageIndex(index)}
                    style={{
                      overflow: "hidden",
                      borderRadius: 18,
                      border: "1px solid",
                      transition: "all 0.25s ease",
                      borderColor:
                        index === selectedImageIndex
                          ? "rgba(66,189,248,0.35)"
                          : "rgba(255,255,255,0.08)",
                      boxShadow:
                        index === selectedImageIndex
                          ? "0 8px 20px rgba(66,189,248,0.15)"
                          : "none",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <img
                      src={image}
                      alt={`${selectedBoat?.name || "Boat"} ${index + 1}`}
                      className="h-[92px] w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>

          <div
            style={{
              borderRadius: "2rem",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 24,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              SELECTED BOAT
            </p>

            <h3
              style={{
                marginTop: 12,
                fontSize: 36,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {selectedBoat.name} / {selectedBoat.year}
            </h3>

            <p
              style={{
                marginTop: 8,
                fontSize: 16,
                fontWeight: 600,
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {selectedBoat.model || "-"}
            </p>

            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {selectedBoat.description ||
                selectedBoat.shortNote ||
                "Açıklama yakında eklenecek."}
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <Info
                label="Kabin"
                value={safeString(
                  selectedBoat.cabins ?? selectedBoat.cabin ?? "-"
                )}
              />
              <Info label="Misafir" value={selectedBoat.guestsLabel ?? "-"} />
              <Info label="Yıl" value={safeString(selectedBoat.year ?? "-")} />
              <Info label="Konum" value={selectedBoat.location ?? "-"} />
            </div>

            <div
              style={{
                marginTop: 24,
                borderRadius: "1.5rem",
                padding: "18px 20px",
                background: "rgba(103,211,255,0.05)",
                border: "1px solid rgba(103,211,255,0.15)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#8ed8ff",
                }}
              >
                Starting Price
              </div>
              <div
                style={{
                  marginTop: 4,
                  fontSize: 34,
                  fontWeight: 900,
                  color: "#f8fafc",
                }}
              >
                {getStartingPrice(selectedBoat.prices) || "Sorunuz"}
              </div>
            </div>

            <div
              style={{
                marginTop: 24,
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
                padding: 20,
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                Öne Çıkan Özellikler
              </div>
              <div
                style={{
                  marginTop: 12,
                  display: "grid",
                  gap: 8,
                  fontSize: 14,
                  lineHeight: 1.8,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {selectedBoatFeatures.length > 0 ? (
                  selectedBoatFeatures.map((feature) => (
                    <div key={feature}>• {feature}</div>
                  ))
                ) : (
                  <div>• Özellik bilgisi eklenecek</div>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#charter-calendar"
                style={{
                  display: "inline-flex",
                  minWidth: 170,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  padding: "14px 22px",
                  background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                  color: "#04121c",
                  fontSize: 14,
                  fontWeight: 900,
                  textDecoration: "none",
                  boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform =
                    "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow =
                    "0 16px 40px rgba(66,189,248,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 24px rgba(66,189,248,0.22)";
                }}
              >
                Takvimi İncele
              </a>

              <Link
                href={`/charter/${selectedBoat.slug}`}
                style={{
                  display: "inline-flex",
                  minWidth: 170,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 16,
                  padding: "14px 22px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "#f8fafc",
                  fontSize: 14,
                  fontWeight: 700,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor =
                    "rgba(103,211,255,0.18)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 26px rgba(66,189,248,0.10)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor =
                    "rgba(255,255,255,0.10)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Tekne Detayı
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="charter-calendar"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              DATE SELECTION
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              Tarih seçin
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              Aşağıdaki takvimden başlangıç tarihini seçin. Sistem charter
              haftasını Cumartesi giriş – Cuma çıkış mantığıyla ele alır.
            </p>
          </div>

          <div className="mt-10 max-w-xl">
            <CharterCalendar
              images={selectedImages}
              boatName={selectedBoat.name ?? ""}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p
            style={{
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(226,232,240,0.62)",
            }}
          >
            MONTHLY PRICING & AVAILABILITY
          </p>

          <h2
            style={{
              marginTop: 12,
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 900,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            Aylara göre fiyat ve haftalık müsaitlik
          </h2>

          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.78)",
            }}
          >
            Seçtiğiniz teknenin fiyat çizgisi ve takvim kayıtlı haftaları aşağıda
            listelenmiştir.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {monthlyAvailability.map((priceItem) => (
            <div
              key={priceItem.id}
              style={{
                borderRadius: "2rem",
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                padding: 24,
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(66,189,248,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 18px 36px rgba(0,0,0,0.18)";
              }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3
                    style={{
                      fontSize: 28,
                      fontWeight: 900,
                      color: "#f8fafc",
                    }}
                  >
                    {priceItem.month} 2026
                  </h3>
                  <p
                    style={{
                      marginTop: 4,
                      fontSize: 13,
                      color: "rgba(226,232,240,0.62)",
                    }}
                  >
                    Haftalık başlangıç fiyatı
                  </p>
                </div>

                <div
                  style={{
                    borderRadius: "1rem",
                    padding: "12px 16px",
                    textAlign: "right",
                    background: "rgba(103,211,255,0.05)",
                    border: "1px solid rgba(103,211,255,0.15)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#8ed8ff",
                    }}
                  >
                    Starting
                  </div>
                  <div
                    style={{
                      fontSize: 24,
                      fontWeight: 900,
                      color: "#f8fafc",
                    }}
                  >
                    {priceItem.price}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                {priceItem.weeks.length > 0 ? (
                  priceItem.weeks.map((week) => (
                    <Week
                      key={week.id}
                      label={formatDateRangeTR(week.startDate, week.endDate)}
                      status={week.status}
                    />
                  ))
                ) : (
                  <div
                    style={{
                      borderRadius: 14,
                      border: "1px dashed rgba(255,255,255,0.12)",
                      padding: "14px 16px",
                      fontSize: 14,
                      color: "rgba(226,232,240,0.62)",
                    }}
                  >
                    Bu ay için eklenmiş haftalık müsaitlik kaydı bulunmuyor.
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              FLEET
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              Filodaki diğer tekneler
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              Farklı bir model incelemek isterseniz, aşağıdan diğer tekneleri de
              seçebilirsiniz.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {boats.map((boat) => {
              const startingPrice = getStartingPrice(boat.prices);
              const boatCardImage = getBoatImages(boat)[0] || "";

              return (
                <button
                  key={boat.id}
                  type="button"
                  onClick={() => {
                    setSelectedBoatId(boat.id);
                    setSelectedImageIndex(0);
                    window.scrollTo({
                      top: 260,
                      behavior: "smooth",
                    });
                  }}
                  style={{
                    overflow: "hidden",
                    borderRadius: "2rem",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                    textAlign: "left",
                    boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 20px 40px rgba(66,189,248,0.12)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 36px rgba(0,0,0,0.18)";
                  }}
                >
                  <div
                    className="h-[240px] overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.04)" }}
                  >
                    {boatCardImage ? (
                      <img
                        src={boatCardImage}
                        alt={boat.name}
                        className="h-full w-full object-cover transition duration-500 hover:scale-105"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{
                          color: "rgba(226,232,240,0.6)",
                          fontSize: 14,
                        }}
                      >
                        Görsel yok
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <h3
                      style={{
                        fontSize: 24,
                        fontWeight: 900,
                        color: "#f8fafc",
                      }}
                    >
                      {boat.name}
                    </h3>

                    <p
                      style={{
                        marginTop: 4,
                        fontSize: 14,
                        color: "rgba(226,232,240,0.62)",
                      }}
                    >
                      {boat.model || "-"}
                    </p>

                    <p
                      style={{
                        marginTop: 12,
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "rgba(226,232,240,0.78)",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {boat.shortNote ||
                        boat.description ||
                        "Açıklama eklenecek."}
                    </p>

                    <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                      <Info
                        label="Kabin"
                        value={safeString(boat.cabins ?? boat.cabin ?? "-")}
                      />
                      <Info label="Misafir" value={boat.guestsLabel ?? "-"} />
                      <Info label="Yıl" value={safeString(boat.year ?? "-")} />
                      <Info label="Konum" value={boat.location ?? "-"} />
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <div
                        style={{
                          fontSize: 14,
                          color: "rgba(226,232,240,0.62)",
                        }}
                      >
                        Başlangıç
                        <div
                          style={{
                            marginTop: 2,
                            fontSize: 22,
                            fontWeight: 900,
                            color: "#f8fafc",
                          }}
                        >
                          {startingPrice || "Sorunuz"}
                        </div>
                      </div>

                      <div
                        style={{
                          fontSize: 14,
                          fontWeight: 800,
                          color: "#8ed8ff",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        Seç →
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value?: string;
}) {
  return (
    <div
      style={{
        borderRadius: 14,
        border: "1px solid rgba(255,255,255,0.08)",
        background:
          "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
        padding: "10px 12px",
      }}
    >
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.15em",
          color: "rgba(226,232,240,0.58)",
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 4,
          fontSize: 14,
          fontWeight: 700,
          color: "#f8fafc",
        }}
      >
        {value || "-"}
      </div>
    </div>
  );
}

function Week({
  label,
  status,
}: {
  label: string;
  status: CharterBoatAvailability["status"];
}) {
  const colors: Record<
    CharterBoatAvailability["status"],
    {
      wrapper: React.CSSProperties;
      badge: React.CSSProperties;
      text: string;
    }
  > = {
    AVAILABLE: {
      wrapper: {
        border: "1px solid rgba(134,239,172,0.22)",
        background: "rgba(34,197,94,0.08)",
      },
      badge: {
        border: "1px solid rgba(134,239,172,0.22)",
        background: "rgba(34,197,94,0.12)",
        color: "#86efac",
      },
      text: "Boş",
    },
    OPTION: {
      wrapper: {
        border: "1px solid rgba(253,224,71,0.20)",
        background: "rgba(245,158,11,0.07)",
      },
      badge: {
        border: "1px solid rgba(253,224,71,0.20)",
        background: "rgba(245,158,11,0.12)",
        color: "#fde68a",
      },
      text: "Opsiyon",
    },
    BOOKED: {
      wrapper: {
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.03)",
      },
      badge: {
        border: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(255,255,255,0.05)",
        color: "rgba(226,232,240,0.72)",
      },
      text: "Dolu",
    },
    BLOCKED: {
      wrapper: {
        border: "1px solid rgba(252,165,165,0.20)",
        background: "rgba(239,68,68,0.08)",
      },
      badge: {
        border: "1px solid rgba(252,165,165,0.20)",
        background: "rgba(239,68,68,0.12)",
        color: "#fca5a5",
      },
      text: "Bloke",
    },
  };

  return (
    <div
      className="flex items-center justify-between"
      style={{
        ...colors[status].wrapper,
        borderRadius: 14,
        padding: "14px 16px",
      }}
    >
      <div
        style={{
          paddingRight: 12,
          fontSize: 14,
          fontWeight: 700,
          color: "#e2e8f0",
        }}
      >
        {label}
      </div>
      <div
        style={{
          ...colors[status].badge,
          borderRadius: 999,
          padding: "6px 12px",
          fontSize: 12,
          fontWeight: 800,
        }}
      >
        {colors[status].text}
      </div>
    </div>
  );
}