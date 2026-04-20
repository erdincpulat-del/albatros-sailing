"use client";

import { useState } from "react";

type Props = {
  images: string[];
  boatName?: string;
};

export default function CharterGallery({ images, boatName }: Props) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-[420px] items-center justify-center rounded-2xl bg-[#f4f4f5] text-sm text-gray-500">
        Görsel bulunamadı
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={images[active]}
          alt={boatName || "Boat image"}
          className="h-[420px] w-full object-cover transition-all duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/40 px-3 py-2 text-white"
            >
              ‹
            </button>

            <button
              type="button"
              onClick={() =>
                setActive((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg bg-black/40 px-3 py-2 text-white"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`${boatName || "Boat"} thumbnail ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-16 w-24 cursor-pointer rounded-lg border object-cover ${
                i === active
                  ? "border-cyan-400"
                  : "border-transparent opacity-60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}