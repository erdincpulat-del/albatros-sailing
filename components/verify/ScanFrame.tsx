"use client";

import type { ReactNode } from "react";

type ScanFrameProps = {
  children: ReactNode;
  className?: string;
};

export default function ScanFrame({
  children,
  className = "",
}: ScanFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-cyan-400/20 bg-[rgba(8,18,32,0.78)] backdrop-blur-xl ${className}`}
    >
      <div className="relative z-10">
        {children}
      </div>

      <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[0_0_60px_rgba(66,189,248,0.18)]" />

      <div className="scan-beam pointer-events-none absolute inset-x-0 top-[-20%] h-24 bg-[linear-gradient(180deg,rgba(66,189,248,0),rgba(66,189,248,0.08),rgba(66,189,248,0.35),rgba(66,189,248,0.08),rgba(66,189,248,0))] blur-md" />

      <div className="scan-line pointer-events-none absolute inset-x-6 top-0 h-[2px] bg-cyan-300/80 shadow-[0_0_18px_rgba(103,211,255,0.9)]" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] [background-size:26px_26px]" />
    </div>
  );
}