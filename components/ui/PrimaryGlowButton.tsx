"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type PrimaryGlowButtonProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

export default function PrimaryGlowButton({
  href,
  children,
  external = false,
  className = "",
}: PrimaryGlowButtonProps) {
  const sharedClassName = [
    "group relative inline-flex min-w-[170px] items-center justify-center rounded-2xl px-5 py-4 text-sm font-black text-[#082032] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
    className,
  ]
    .join(" ")
    .trim();

  const sharedStyle = {
    background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
    boxShadow:
      "0 10px 24px rgba(66,189,248,0.22), 0 0 24px rgba(103,211,255,0.18)",
    overflow: "hidden" as const,
  };

  const inner = (
    <>
      <span
        className="absolute -bottom-3 left-1/2 h-10 w-[80%] -translate-x-1/2 rounded-full opacity-70 group-hover:opacity-100"
        style={{
          background: "rgba(103,211,255,0.55)",
          filter: "blur(18px)",
          transition: "all 0.3s ease",
        }}
      />

      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          boxShadow:
            "inset 0 0 25px rgba(255,255,255,0.18), 0 0 28px rgba(103,211,255,0.45)",
          transition: "0.3s",
        }}
      />

      <span
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.4), transparent 70%)",
          animation: "shine 1.5s linear infinite",
        }}
      />

      <span className="relative z-10">{children}</span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={sharedClassName}
        style={sharedStyle}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={sharedClassName} style={sharedStyle}>
      {inner}
    </Link>
  );
}