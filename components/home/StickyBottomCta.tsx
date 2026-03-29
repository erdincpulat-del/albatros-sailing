"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyBottomCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        left: 12,
        right: 12,
        bottom: 82,
        zIndex: 110,
        display: "flex",
        justifyContent: "center",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 780,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 14,
          padding: "14px 16px",
          borderRadius: 18,
          background: "rgba(5,11,20,0.88)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(14px)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.28)",
          pointerEvents: "auto",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 14,
              fontWeight: 800,
              color: "#f8fafc",
              marginBottom: 4,
            }}
          >
            Kontenjan sınırlı
          </div>

          <div
            style={{
              fontSize: 12,
              color: "rgba(226,232,240,0.72)",
            }}
          >
            Küçük grup • Gerçek deniz eğitimi • Hızlı başvuru
          </div>
        </div>

        <Link
          href="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            whiteSpace: "nowrap",
            minWidth: 150,
            padding: "12px 16px",
            borderRadius: 12,
            background: "#38bdf8",
            color: "#082032",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Yerini Ayır
        </Link>
      </div>
    </div>
  );
}