"use client";

import { useState } from "react";

type Props = {
  images: string[];
  boatName?: string;
};

export default function CharterGallery({ images, boatName }: Props) {
  const [active, setActive] = useState(0);

  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* MAIN IMAGE */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={images[active]}
          alt={boatName}
          className="w-full h-[420px] object-cover transition-all duration-500"
        />

        {/* ARROWS */}
        <button
          onClick={() =>
            setActive((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-lg"
        >
          ‹
        </button>

        <button
          onClick={() =>
            setActive((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 px-3 py-2 rounded-lg"
        >
          ›
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 overflow-x-auto">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            onClick={() => setActive(i)}
            className={`w-24 h-16 object-cover rounded-lg cursor-pointer border ${
              i === active
                ? "border-cyan-400"
                : "border-transparent opacity-60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}