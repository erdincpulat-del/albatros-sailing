"use client";

import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";

type VesselType =
  | "power"
  | "sailing"
  | "fishing"
  | "towing"
  | "nuc"
  | "cbd"
  | "pilot"
  | "anchored";

type LightColor = "red" | "green" | "white" | "yellow";

type ScenarioKey =
  | "headon"
  | "crossing-port"
  | "crossing-starboard"
  | "overtaking"
  | "anchored"
  | "restricted";

type DynamicAspect = {
  heading: number;
  showRed: boolean;
  showGreen: boolean;
  showMasthead: boolean;
  showStern: boolean;
  label: string;
  note: string;
};

type QuizQuestion = {
  id: number;
  prompt: string;
  options: string[];
  answer: number;
  explanation: string;
};

type VesselConfig = {
  id: VesselType;
  title: string;
  subtitle: string;
  rule: string;
  lights: {
    label: string;
    color: LightColor;
    meaning: string;
  }[];
};

type Scenario = {
  id: ScenarioKey;
  title: string;
  subtitle: string;
  seenLights: {
    color: LightColor;
    blink?: boolean;
    x: string;
    y: string;
    size?: number;
  }[];
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  guidance: string;
};

const vesselConfigs: VesselConfig[] = [
  {
    id: "power",
    title: "Power-Driven Vessel",
    subtitle: "Makineyle seyreden tekne",
    rule:
      "Underway bir makine teknesi gece çoğu zaman kırmızı + yeşil yan fenerler ve beyaz masthead/stern kombinasyonu ile okunur.",
    lights: [
      {
        label: "Port Sidelight",
        color: "red",
        meaning: "İskele tarafı. Kırmızı görüyorsan teknenin iskele tarafını okuyorsun.",
      },
      {
        label: "Starboard Sidelight",
        color: "green",
        meaning: "Sancak tarafı. Yeşil görüyorsan teknenin sancak tarafını okuyorsun.",
      },
      {
        label: "Masthead Light",
        color: "white",
        meaning:
          "Makine teknesinin ileri yönlü beyaz feneri. Baş yönünü ve makine altında olduğunu hissettirir.",
      },
      {
        label: "Stern Light",
        color: "white",
        meaning: "Pupa tarafından görülen beyaz fener.",
      },
    ],
  },
  {
    id: "sailing",
    title: "Sailing Vessel",
    subtitle: "Yelken altında seyreden tekne",
    rule:
      "Yelkenli, genel durumda kırmızı ve yeşil yan fenerlerle pupa beyazını taşır. Masthead beyazı zorunlu değildir; bu ayırt edici farktır.",
    lights: [
      {
        label: "Port Sidelight",
        color: "red",
        meaning: "İskele tarafı.",
      },
      {
        label: "Starboard Sidelight",
        color: "green",
        meaning: "Sancak tarafı.",
      },
      {
        label: "Stern Light",
        color: "white",
        meaning: "Pupa beyazı.",
      },
    ],
  },
  {
    id: "fishing",
    title: "Fishing Vessel",
    subtitle: "Balıkçılık ile meşgul tekne",
    rule:
      "Balıkçılıkta klasik ayırt edici kombinasyon kırmızı üstte beyazdır. Night recognition için ezber değil, şekil farkındalığı gerekir.",
    lights: [
      {
        label: "Red over White",
        color: "red",
        meaning:
          "Üstte kırmızı, altta beyaz kombinasyon. Fishing at night diye ezberlenir.",
      },
      {
        label: "All-around White",
        color: "white",
        meaning: "Operasyon ve görünürlük bağlamında ek beyaz görülebilir.",
      },
    ],
  },
  {
    id: "towing",
    title: "Towing Vessel",
    subtitle: "Yedek çeken tekne",
    rule:
      "Towing kombinasyonunda beyaz masthead ışıkları artabilir ve sarı towing light stern çevresinde ayırt edici rol oynar.",
    lights: [
      {
        label: "Multiple Masthead Whites",
        color: "white",
        meaning: "Yedek uzunluğuna göre iki ya da daha fazla beyaz okunabilir.",
      },
      {
        label: "Yellow Towing Light",
        color: "yellow",
        meaning: "Pupa düzeninde towing karakterini ayırmaya yardımcı olur.",
      },
    ],
  },
  {
    id: "nuc",
    title: "Not Under Command",
    subtitle: "Komuta dışı tekne",
    rule:
      "Komuta dışı bir tekne en kritik tanınması gereken durumlardan biridir. İki kırmızı all-round gece farkındalığında alarm etkisi yaratmalıdır.",
    lights: [
      {
        label: "Red over Red",
        color: "red",
        meaning: "Komuta dışı. Gece görüşte güçlü uyarıdır.",
      },
    ],
  },
  {
    id: "cbd",
    title: "Constrained by Draft",
    subtitle: "Su çekimiyle sınırlı",
    rule:
      "Büyük gemilerde draft nedeniyle serbest manevra alanı yoksa kırmızı-beyaz-kırmızı kombinasyonu kritik hale gelir.",
    lights: [
      {
        label: "Red / White / Red",
        color: "red",
        meaning: "Draft nedeniyle hareket alanı kısıtlı gemi.",
      },
    ],
  },
  {
    id: "pilot",
    title: "Pilot Vessel",
    subtitle: "Kılavuz teknesi",
    rule:
      "Pilot vessel kombinasyonu beyaz üstte kırmızıdır. Liman girişlerinde ve trafik bölgelerinde ayırt etmek önemlidir.",
    lights: [
      {
        label: "White over Red",
        color: "white",
        meaning: "Pilot on duty olarak tanınır.",
      },
    ],
  },
  {
    id: "anchored",
    title: "Anchored Vessel",
    subtitle: "Demirde tekne",
    rule:
      "Demirde tekne hareket halinde değildir. Gece temel tanıma hissi: seyir düzeni değil, sabit all-round beyaz.",
    lights: [
      {
        label: "All-round White",
        color: "white",
        meaning: "Demirde. Boyuna göre ek beyazlar görülebilir.",
      },
    ],
  },
];
const scenarios: Scenario[] = [
  {
    id: "headon",
    title: "Head-on",
    subtitle: "Karşılıklı yaklaşma",
    seenLights: [
      { color: "red", x: "46%", y: "48%", size: 12 },
      { color: "green", x: "54%", y: "48%", size: 12 },
      { color: "white", x: "50%", y: "41%", size: 10, blink: true },
    ],
    question:
      "Kırmızı + yeşil birlikte ve üstte beyaz görüyorsan bu neyi düşündürür?",
    options: [
      "Baş başa veya sana doğrudan yaklaşan makine teknesi",
      "Demirde tekne",
      "Sadece pupa ışığı görünen yelkenli",
      "Fishing vessel",
    ],
    answer: 0,
    explanation:
      "Kırmızı ve yeşilin birlikte görünmesi çoğu zaman teknenin baş tarafını sana gösterdiğini anlatır. Üstteki beyaz da makine seyri izlenimini güçlendirir.",
    guidance:
      "Head-on hissi oluştuğunda ilk refleksin yalnız ışık renklerini değil, açısal ilişkiyi ve kapanma hızını okumak olmalı.",
  },
  {
    id: "crossing-port",
    title: "Crossing",
    subtitle: "İskele tarafından yaklaşan tekne",
    seenLights: [
      { color: "green", x: "54%", y: "48%", size: 12 },
      { color: "white", x: "49%", y: "41%", size: 10, blink: true },
    ],
    question: "Sadece yeşil ve beyaz görüyorsan en olası okuma nedir?",
    options: [
      "Teknenin iskele tarafını görüyorsun",
      "Teknenin sancak tarafını görüyorsun",
      "Demirde sabit tekne",
      "Komuta dışı gemi",
    ],
    answer: 1,
    explanation:
      "Yeşil ışık sana karşı tarafın sancak tarafını gösterir. Bu durumda crossing senaryosu oluşabilir ve COLREG kararı önem kazanır.",
    guidance:
      "Yeşil gördüğünde sadece rengi değil, sana göre hangi tarafın açıldığını düşün. Gece karar kalitesi burada başlar.",
  },
  {
    id: "crossing-starboard",
    title: "Crossing",
    subtitle: "Sancak tarafından yaklaşan tekne",
    seenLights: [
      { color: "red", x: "46%", y: "48%", size: 12 },
      { color: "white", x: "51%", y: "41%", size: 10, blink: true },
    ],
    question: "Kırmızı ve beyaz görüyorsan gece ilk sezgin ne olmalı?",
    options: [
      "Karşı teknenin sancak tarafını görüyorsun",
      "Karşı teknenin iskele tarafını görüyorsun",
      "Pupa ışığını görüyorsun",
      "Demirde tekne görüyorsun",
    ],
    answer: 1,
    explanation:
      "Kırmızı ışık karşı teknenin iskele tarafını gördüğünü anlatır. Bu da crossing değerlendirmesinde öncelik ve mesafe kararını tetikler.",
    guidance:
      "Kırmızı gece denizde yalnız renk değildir; ilişki, risk ve zaman anlamına gelir.",
  },
  {
    id: "overtaking",
    title: "Overtaking",
    subtitle: "Pupa tarafından yaklaşma",
    seenLights: [{ color: "white", x: "50%", y: "48%", size: 12 }],
    question: "Sadece beyaz pupa ışığı görüyorsan ilk olasılık nedir?",
    options: [
      "Sana karşı geliyor",
      "Demirde tekne",
      "Önündeki teknenin pupasını görüyorsun",
      "Fishing vessel",
    ],
    answer: 2,
    explanation:
      "Tek beyaz pupa ışığı çoğu zaman önündeki teknenin senden uzaklaşan veya senin overtaking ilişkisinde olduğun bir durumu işaret eder.",
    guidance:
      "Overtaking gecede en çok karıştırılan alanlardan biridir. Tek beyaz gördüğünde geometrik ilişkiyi düşün.",
  },
  {
    id: "anchored",
    title: "Anchored",
    subtitle: "Demirde tekne",
    seenLights: [
      { color: "white", x: "50%", y: "45%", size: 12, blink: true },
    ],
    question: "Sabit all-round beyaz gece neyi düşündürür?",
    options: [
      "Demirde tekne",
      "Head-on yaklaşma",
      "Sailing vessel under way",
      "Restricted in ability to manoeuvre",
    ],
    answer: 0,
    explanation:
      "Demirde teknenin temel gece karakteri sabit all-round beyaz ile tanınır. Hareket hissi yoksa bu ihtimal güçlenir.",
    guidance:
      "Gecede sadece ışık değil, ışığın sabitliği ve mekânsal davranışı da okunur.",
  },
  {
    id: "restricted",
    title: "Restricted Signal",
    subtitle: "Komuta dışı / özel durum farkındalığı",
    seenLights: [
      { color: "red", x: "50%", y: "40%", size: 10, blink: true },
      { color: "red", x: "50%", y: "48%", size: 10, blink: true },
    ],
    question: "Kırmızı üstte kırmızı kombinasyon gece ne hissettirmeli?",
    options: [
      "Komuta dışı veya ciddi kısıtlı manevra durumu",
      "Normal yelkenli",
      "Pilot vessel",
      "Demirde tekne",
    ],
    answer: 0,
    explanation:
      "Red over red gece alarm seviyesinde fark edilmelidir. Bu, normal trafik gibi okunmamalı; ekstra dikkat ve mesafe üretmelidir.",
    guidance:
      "Bazı kombinasyonlar sadece tanınmaz, zihinde alarm üretir. Bu onlardan biridir.",
  },
];

const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Kırmızı ve yeşil birlikte görünüyorsa ilk düşünce ne olmalıdır?",
    options: [
      "Teknenin baş tarafını görüyor olabilirim",
      "Demirde bir tekne görüyorum",
      "Sadece pupa ışığını görüyorum",
      "Kesinlikle sailing vessel",
    ],
    answer: 0,
    explanation:
      "Kırmızı ve yeşilin birlikte görülmesi çoğu zaman karşı teknenin baş tarafını gördüğünü düşündürür.",
  },
  {
    id: 2,
    prompt: "Tek beyaz ışık en sık hangi durumu düşündürür?",
    options: [
      "Her zaman demirde tekne",
      "Overtaking / pupa ilişkisi veya özel bağlam",
      "Kesin head-on",
      "Fishing vessel",
    ],
    answer: 1,
    explanation:
      "Tek beyazı bağlamla okumak gerekir. En sık pupa ilişkisi veya demirde tekneyle karışır.",
  },
  {
    id: 3,
    prompt: "Red over red neyi çağrıştırır?",
    options: [
      "Komuta dışı",
      "Pilot vessel",
      "Draft ile kısıtlı",
      "Sailing vessel",
    ],
    answer: 0,
    explanation:
      "Red over red, not under command ifadesinin gecedeki güçlü uyarı kombinasyonudur.",
  },
  {
    id: 4,
    prompt: "White over red hangi özel tekneyi işaret eder?",
    options: ["Fishing", "Pilot", "Anchored", "Towing"],
    answer: 1,
    explanation:
      "White over red çoğunlukla pilot vessel on duty olarak tanınır.",
  },
  {
    id: 5,
    prompt: "Fishing vessel için klasik ezber nedir?",
    options: [
      "White over red",
      "Red over white",
      "Green over white",
      "Yellow over red",
    ],
    answer: 1,
    explanation:
      "Fishing at night için klasik akılda kalıcı ifade red over white'tır.",
  },
];
function colorValue(color: LightColor) {
  switch (color) {
    case "red":
      return "#ff5252";
    case "green":
      return "#49ff8b";
    case "white":
      return "#f8fafc";
    case "yellow":
      return "#ffd166";
    default:
      return "#f8fafc";
  }
}

function normalizeHeading(deg: number) {
  let value = deg % 360;
  if (value < 0) value += 360;
  return value;
}

function getDynamicAspect(heading: number): DynamicAspect {
  const h = normalizeHeading(heading);

  const isBowSector = h <= 112.5 || h >= 247.5;
  const isStarboardSide = h > 0 && h < 180;
  const isPortSide = h > 180 && h < 360;
  const isSternSector = h >= 112.5 && h <= 247.5;

  const showGreen = isStarboardSide && !isSternSector;
  const showRed = isPortSide && !isSternSector;
  const showMasthead = isBowSector;
  const showStern = isSternSector;

  let label = "Approach";
  let note = "Açı değiştikçe ışık kombinasyonu değişir.";

  if ((showRed || showGreen) && showMasthead && !showStern) {
    label = "Forward Aspect";
    note = "Baş omuzluk sektörden bakıyorsun.";
  } else if (showStern && !showRed && !showGreen) {
    label = "Stern Aspect";
    note = "Pupa sektörü - sadece beyaz görünür.";
  } else if (showRed && !showGreen) {
    label = "Port Side View";
    note = "Karşı teknenin iskele tarafını görüyorsun.";
  } else if (showGreen && !showRed) {
    label = "Starboard Side View";
    note = "Karşı teknenin sancak tarafını görüyorsun.";
  }

  return {
    heading: h,
    showGreen,
    showRed,
    showMasthead,
    showStern,
    label,
    note,
  };
}

function LightDot({
  color,
  size = 12,
  blink = false,
  style,
}: {
  color: LightColor;
  size?: number;
  blink?: boolean;
  style?: React.CSSProperties;
}) {
  const glow = colorValue(color);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: glow,
        boxShadow: `0 0 ${size * 1.4}px ${glow}, 0 0 ${size * 3.2}px ${glow}90`,
        animation: blink ? "nightPulse 1.8s ease-in-out infinite" : undefined,
        ...style,
      }}
    />
  );
}

function StarField() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: 36 }).map((_, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${(i * 23) % 100}%`,
            top: `${(i * 17) % 70}%`,
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 0 10px rgba(255,255,255,0.55)",
            animation: `starBlink ${2 + (i % 4)}s ease-in-out ${i * 0.08}s infinite`,
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

function WaveLayer() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "-10%",
          right: "-10%",
          bottom: 0,
          height: 180,
          background:
            "radial-gradient(circle at 20% 40%, rgba(103,211,255,0.16), transparent 22%), radial-gradient(circle at 70% 20%, rgba(103,211,255,0.1), transparent 18%), linear-gradient(180deg, rgba(8,20,36,0), rgba(7,18,32,0.95))",
          animation: "seaShift 12s linear infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-20%",
          right: "-20%",
          bottom: 32,
          height: 120,
          borderTop: "1px solid rgba(103,211,255,0.18)",
          opacity: 0.55,
          animation: "seaFloat 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "-20%",
          right: "-20%",
          bottom: 64,
          height: 90,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          opacity: 0.35,
          animation: "seaFloat 11s ease-in-out infinite reverse",
        }}
      />
    </>
  );
}
function VesselLightsPreview({ vessel }: { vessel: VesselConfig }) {
  return (
    <div
      style={{
        borderRadius: 24,
        overflow: "hidden",
        position: "relative",
        minHeight: 220,
        background:
          "radial-gradient(circle at 50% 20%, rgba(103,211,255,0.08), transparent 28%), linear-gradient(180deg, #030816, #06101f 55%, #071625 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <StarField />
      <WaveLayer />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 56,
          width: 130,
          height: 18,
          borderRadius: "999px 999px 12px 12px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.08)",
          transform: "translateX(-50%)",
        }}
      />

      {vessel.id === "power" && (
        <>
          <LightDot color="red" style={{ position: "absolute", left: "46%", bottom: 74 }} />
          <LightDot color="green" style={{ position: "absolute", left: "54%", bottom: 74 }} />
          <LightDot
            color="white"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 88,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="white"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 62,
              width: 8,
              height: 8,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "sailing" && (
        <>
          <LightDot color="red" style={{ position: "absolute", left: "46%", bottom: 74 }} />
          <LightDot color="green" style={{ position: "absolute", left: "54%", bottom: 74 }} />
          <LightDot
            color="white"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 62,
              width: 8,
              height: 8,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "fishing" && (
        <>
          <LightDot
            color="red"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 90,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="white"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 76,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "towing" && (
        <>
          <LightDot
            color="white"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 92,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="white"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 80,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="yellow"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 62,
              width: 8,
              height: 8,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "nuc" && (
        <>
          <LightDot
            color="red"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 90,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="red"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 76,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "cbd" && (
        <>
          <LightDot
            color="red"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 94,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="white"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 80,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="red"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 66,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "pilot" && (
        <>
          <LightDot
            color="white"
            blink
            style={{
              position: "absolute",
              left: "50%",
              bottom: 90,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
          <LightDot
            color="red"
            style={{
              position: "absolute",
              left: "50%",
              bottom: 76,
              width: 10,
              height: 10,
              transform: "translateX(-50%)",
            }}
          />
        </>
      )}

      {vessel.id === "anchored" && (
        <LightDot
          color="white"
          blink
          style={{
            position: "absolute",
            left: "50%",
            bottom: 84,
            width: 12,
            height: 12,
            transform: "translateX(-50%)",
          }}
        />
      )}
    </div>
  );
}

function ScenarioWater({ scenario }: { scenario: Scenario }) {
  return (
    <div
      style={{
        position: "relative",
        minHeight: 330,
        borderRadius: 28,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, rgba(103,211,255,0.08), transparent 26%), linear-gradient(180deg, #020617, #06101c 60%, #071523 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <StarField />
      <WaveLayer />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 30,
          width: 150,
          height: 20,
          borderRadius: "999px 999px 18px 18px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.08)",
          transform: "translateX(-50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 32,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.18)",
          transform: "translateX(-50%)",
          boxShadow: "0 0 30px rgba(255,255,255,0.12)",
        }}
      />

      {scenario.seenLights.map((light, index) => (
        <LightDot
          key={`${scenario.id}-${index}`}
          color={light.color}
          size={light.size ?? 12}
          blink={light.blink}
          style={{
            position: "absolute",
            left: light.x,
            top: light.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          left: 20,
          top: 18,
          padding: "8px 12px",
          borderRadius: 999,
          background: "rgba(103,211,255,0.08)",
          border: "1px solid rgba(103,211,255,0.16)",
          color: "#8ed8ff",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Night Recognition
      </div>
    </div>
  );
}
function DynamicVesselSilhouette({
  heading,
}: {
  heading: number;
}) {
  const aspect = getDynamicAspect(heading);

  return (
    <div
      style={{
        position: "relative",
        minHeight: 360,
        borderRadius: 28,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 18%, rgba(103,211,255,0.08), transparent 28%), linear-gradient(180deg, #020617, #06101c 60%, #071523 100%)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <StarField />
      <WaveLayer />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 34,
          width: 170,
          height: 26,
          borderRadius: "999px 999px 18px 18px",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.10), rgba(255,255,255,0.05))",
          border: "1px solid rgba(255,255,255,0.08)",
          transform: `translateX(-50%) rotate(${(heading - 180) * 0.08}deg)`,
          boxShadow: "0 14px 30px rgba(0,0,0,0.22)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 56,
          width: 86,
          height: 18,
          borderRadius: "18px 18px 8px 8px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.06)",
          transform: `translateX(-50%) rotate(${(heading - 180) * 0.08}deg)`,
        }}
      />

      {aspect.showRed && (
        <LightDot
          color="red"
          blink
          style={{
            position: "absolute",
            left: "44%",
            bottom: 84,
          }}
        />
      )}

      {aspect.showGreen && (
        <LightDot
          color="green"
          blink
          style={{
            position: "absolute",
            left: "56%",
            bottom: 84,
          }}
        />
      )}

      {aspect.showMasthead && (
        <LightDot
          color="white"
          blink
          style={{
            position: "absolute",
            left: "50%",
            bottom: 98,
            width: 10,
            height: 10,
            transform: "translateX(-50%)",
          }}
        />
      )}

      {aspect.showStern && (
        <LightDot
          color="white"
          blink
          style={{
            position: "absolute",
            left: "50%",
            bottom: 72,
            width: 10,
            height: 10,
            transform: "translateX(-50%)",
          }}
        />
      )}

      <div
        style={{
          position: "absolute",
          left: 18,
          top: 18,
          padding: "8px 12px",
          borderRadius: 999,
          background: "rgba(103,211,255,0.08)",
          border: "1px solid rgba(103,211,255,0.16)",
          color: "#8ed8ff",
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
        }}
      >
        Dynamic Aspect Simulator
      </div>

      <div
        style={{
          position: "absolute",
          right: 18,
          top: 18,
          padding: "8px 12px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "#f8fafc",
          fontSize: 12,
          fontWeight: 800,
        }}
      >
        {aspect.heading.toFixed(0)}°
      </div>

      <div
        style={{
          position: "absolute",
          left: 18,
          right: 18,
          bottom: 16,
          padding: "14px 16px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 12,
            color: "#8ed8ff",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 800,
          }}
        >
          {aspect.label}
        </div>

        <p
          style={{
            marginTop: 8,
            marginBottom: 0,
            color: "rgba(226,232,240,0.8)",
            lineHeight: 1.7,
            fontSize: 13,
          }}
        >
          {aspect.note}
        </p>
      </div>
    </div>
  );
}

function DynamicRecognitionLab() {
  const [heading, setHeading] = useState(18);
  const aspect = useMemo(() => getDynamicAspect(heading), [heading]);

  return (
    <section style={{ marginTop: 94 }}>
      <div
        style={{
          display: "inline-flex",
          padding: "8px 14px",
          borderRadius: 999,
          background: "rgba(103,211,255,0.08)",
          border: "1px solid rgba(103,211,255,0.18)",
          color: "#8ed8ff",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        Dynamic Night Geometry
      </div>

      <h2
        style={{
          margin: "18px 0 0",
          fontSize: 34,
          fontWeight: 900,
          lineHeight: 1.12,
        }}
      >
        Açı değiştikçe
        <br />
        gördüğün gece feneri de değişir.
      </h2>

      <p
        style={{
          marginTop: 14,
          color: "rgba(226,232,240,0.8)",
          fontSize: 15,
          lineHeight: 1.85,
          maxWidth: 860,
        }}
      >
        Bu bölümde tekneye hangi açıdan baktığını değiştiriyorsun. Sistem,
        başa yakın mı, sancak/iskeleden mi, yoksa pupadan mı baktığını anlamaya
        çalışıp hangi ışıkların görünmesi gerektiğini dinamik olarak gösteriyor.
      </p>
            <div
        style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "minmax(340px, 1.08fr) minmax(280px, 0.92fr)",
          gap: 24,
        }}
      >
        <DynamicVesselSilhouette heading={heading} />

        <div
          className="panel-card glass-shimmer"
          style={{
            padding: 24,
            borderRadius: 28,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#8ed8ff",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 800,
            }}
          >
            Angle Control
          </div>

          <h3
            style={{
              margin: "10px 0 0",
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            Heading / Aspect Slider
          </h3>

          <div style={{ marginTop: 20 }}>
            <input
              type="range"
              min={0}
              max={359}
              step={1}
              value={heading}
              onChange={(e) => setHeading(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "#67d3ff",
              }}
            />
          </div>

          <div
            style={{
              marginTop: 16,
              display: "grid",
              gap: 10,
            }}
          >
            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(226,232,240,0.56)",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontWeight: 800,
                }}
              >
                Aspect
              </div>
              <div
                style={{
                  marginTop: 6,
                  fontSize: 18,
                  fontWeight: 900,
                }}
              >
                {aspect.label}
              </div>
            </div>

            <div
              style={{
                padding: "12px 14px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(226,232,240,0.56)",
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  fontWeight: 800,
                }}
              >
                Visible Lights
              </div>

              <div
                style={{
                  marginTop: 10,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 10,
                }}
              >
                {aspect.showRed && (
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(255,82,82,0.12)",
                      border: "1px solid rgba(255,82,82,0.20)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Red
                  </span>
                )}

                {aspect.showGreen && (
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(73,255,139,0.12)",
                      border: "1px solid rgba(73,255,139,0.20)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Green
                  </span>
                )}

                {aspect.showMasthead && (
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(248,250,252,0.10)",
                      border: "1px solid rgba(248,250,252,0.18)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Masthead White
                  </span>
                )}

                {aspect.showStern && (
                  <span
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      background: "rgba(248,250,252,0.10)",
                      border: "1px solid rgba(248,250,252,0.18)",
                      fontWeight: 800,
                      fontSize: 13,
                    }}
                  >
                    Stern White
                  </span>
                )}
              </div>
            </div>

            <div
              style={{
                padding: "14px 16px",
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.05))",
                border: "1px solid rgba(103,211,255,0.16)",
              }}
            >
              <p
                style={{
                  margin: 0,
                  color: "rgba(226,232,240,0.82)",
                  lineHeight: 1.75,
                  fontSize: 14,
                }}
              >
                Öğrenci burada şunu fark eder: ışıklar sabit bilgi değildir.
                Görüş açısı değiştikçe okuduğun gece kombinasyonu da değişir.
                Bu yüzden iyi gece seyri, ışıkları ezberlemekten çok, açısal
                ilişkiyi zihinde kurabilmektir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function NightLightsGuidePage() {
  const [activeVessel, setActiveVessel] = useState<VesselType>("power");
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>("headon");
  const [scenarioChoice, setScenarioChoice] = useState<number | null>(null);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const selectedVessel = useMemo(
    () => vesselConfigs.find((item) => item.id === activeVessel) ?? vesselConfigs[0],
    [activeVessel]
  );

  const selectedScenario = useMemo(
    () => scenarios.find((item) => item.id === activeScenario) ?? scenarios[0],
    [activeScenario]
  );

  const quizScore = useMemo(() => {
    return quizQuestions.reduce((sum, q) => {
      return sum + (quizAnswers[q.id] === q.answer ? 1 : 0);
    }, 0);
  }, [quizAnswers]);

  const quizPercent = Math.round((quizScore / quizQuestions.length) * 100);

  useEffect(() => {
    setScenarioChoice(null);
  }, [activeScenario]);

  const currentQuestion = quizQuestions[quizStep];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 30%), radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 24%), #020617",
        color: "#f8fafc",
      }}
    >
      <style>{`
        @keyframes starBlink {
          0%, 100% { opacity: 0.25; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        @keyframes seaShift {
          0% { transform: translateX(0); }
          50% { transform: translateX(2.5%); }
          100% { transform: translateX(0); }
        }

        @keyframes seaFloat {
          0%, 100% { transform: translateY(0px); opacity: 0.32; }
          50% { transform: translateY(-8px); opacity: 0.58; }
        }

        @keyframes nightPulse {
          0%, 100% { opacity: 0.55; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.18); }
        }

        @keyframes shimmerMove {
          0% { transform: translateX(-140%) skewX(-20deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(240%) skewX(-20deg); opacity: 0; }
        }

        .panel-card {
          transition: transform .28s ease, border-color .28s ease, box-shadow .28s ease;
        }

        .panel-card:hover {
          transform: translateY(-4px);
          border-color: rgba(103,211,255,0.18) !important;
          box-shadow: 0 18px 40px rgba(66,189,248,0.10);
        }

        .premium-button {
          transition: transform .22s ease, box-shadow .22s ease, border-color .22s ease;
        }

        .premium-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(66,189,248,0.16);
        }

        .glass-shimmer {
          position: relative;
          overflow: hidden;
        }

        .glass-shimmer::after {
          content: "";
          position: absolute;
          top: 0;
          left: -35%;
          width: 28%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.15) 45%,
            rgba(255,255,255,0.26) 50%,
            rgba(255,255,255,0.10) 55%,
            rgba(255,255,255,0) 100%
          );
          transform: translateX(-140%) skewX(-20deg);
          opacity: 0;
        }

        .glass-shimmer:hover::after {
          animation: shimmerMove 0.95s ease forwards;
        }
      `}</style>

      <section
        style={{
          padding: "120px 24px 84px",
          maxWidth: 1240,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 36,
            minHeight: 520,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "radial-gradient(circle at 50% 12%, rgba(103,211,255,0.10), transparent 26%), linear-gradient(180deg, #020617 0%, #06101c 60%, #071523 100%)",
            padding: "40px 32px 32px",
          }}
        >
          <StarField />
          <WaveLayer />

          <div
            style={{
              position: "relative",
              zIndex: 2,
              maxWidth: 760,
            }}
          >
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(103,211,255,0.08)",
                border: "1px solid rgba(103,211,255,0.18)",
                color: "#8ed8ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              ALBATROS GUIDE • NIGHT LIGHTS LAB
            </div>

            <h1
              style={{
                margin: "22px 0 0",
                fontSize: "clamp(42px, 5vw, 78px)",
                lineHeight: 1.02,
                fontWeight: 900,
                letterSpacing: "-0.045em",
              }}
            >
              Gece seyri
              <br />
              fenerlerini
              <br />
              sadece öğrenme.
              <br />
              Tanımayı hisset.
            </h1>
                        <p
              style={{
                marginTop: 22,
                fontSize: 17,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.82)",
                maxWidth: 720,
              }}
            >
              Bu sayfa bilgi vermek için değil, gece denizde ışık görüp doğru karar
              verecek zihni kurmak için tasarlandı. Kırmızı, yeşil ve beyazı sadece
              ezberlemeyeceksin; yaklaşma geometrisini, risk yönünü ve senaryo
              farkını hissedeceksin.
            </p>
          </div>
        </div>

        {/* Vessel Recognition */}
        <section style={{ marginTop: 88 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.02fr) minmax(260px, 0.98fr)",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(103,211,255,0.08)",
                  border: "1px solid rgba(103,211,255,0.18)",
                  color: "#8ed8ff",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Vessel Recognition Lab
              </div>

              <h2
                style={{
                  margin: "18px 0 0",
                  fontSize: 34,
                  fontWeight: 900,
                  lineHeight: 1.12,
                }}
              >
                Her teknenin ışık dili
                <br />
                farklıdır.
              </h2>

              <div
                style={{
                  marginTop: 22,
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: 12,
                }}
              >
                {vesselConfigs.map((item) => {
                  const active = item.id === activeVessel;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveVessel(item.id)}
                      className="premium-button"
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        borderRadius: 18,
                        border: active
                          ? "1px solid rgba(103,211,255,0.22)"
                          : "1px solid rgba(255,255,255,0.08)",
                        background: active
                          ? "linear-gradient(180deg, rgba(103,211,255,0.12), rgba(103,211,255,0.05))"
                          : "rgba(255,255,255,0.04)",
                        color: "#f8fafc",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 12,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: active ? "#8ed8ff" : "rgba(226,232,240,0.55)",
                          fontWeight: 800,
                        }}
                      >
                        Vessel
                      </div>
                      <div
                        style={{
                          marginTop: 6,
                          fontSize: 15,
                          fontWeight: 800,
                          lineHeight: 1.3,
                        }}
                      >
                        {item.title}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div
              className="panel-card glass-shimmer"
              style={{
                padding: 22,
                borderRadius: 28,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.95))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 26,
                  fontWeight: 900,
                }}
              >
                {selectedVessel.title}
              </h3>

              <p
                style={{
                  marginTop: 8,
                  color: "rgba(226,232,240,0.72)",
                  fontSize: 14,
                }}
              >
                {selectedVessel.subtitle}
              </p>

              <div style={{ marginTop: 18 }}>
                <VesselLightsPreview vessel={selectedVessel} />
              </div>

              <p
                style={{
                  marginTop: 16,
                  color: "rgba(226,232,240,0.8)",
                  lineHeight: 1.8,
                  fontSize: 14,
                }}
              >
                {selectedVessel.rule}
              </p>
            </div>
          </div>
        </section>

        {/* Scenario Simulator */}
        <section style={{ marginTop: 94 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(103,211,255,0.08)",
              border: "1px solid rgba(103,211,255,0.18)",
              color: "#8ed8ff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            Scenario Simulator
          </div>

          <h2
            style={{
              margin: "18px 0 0",
              fontSize: 34,
              fontWeight: 900,
              lineHeight: 1.12,
            }}
          >
            Gecede gördüğünü
            <br />
            doğru yorumla.
          </h2>

          <div
            style={{
              marginTop: 22,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 12,
            }}
          >
            {scenarios.map((scenario) => {
              const active = scenario.id === activeScenario;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveScenario(scenario.id)}
                  className="premium-button"
                  style={{
                    textAlign: "left",
                    padding: "14px 16px",
                    borderRadius: 18,
                    border: active
                      ? "1px solid rgba(103,211,255,0.22)"
                      : "1px solid rgba(255,255,255,0.08)",
                    background: active
                      ? "linear-gradient(180deg, rgba(103,211,255,0.12), rgba(103,211,255,0.05))"
                      : "rgba(255,255,255,0.04)",
                    color: "#f8fafc",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: active ? "#8ed8ff" : "rgba(226,232,240,0.55)",
                      fontWeight: 800,
                    }}
                  >
                    Scenario
                  </div>
                  <div
                    style={{
                      marginTop: 6,
                      fontSize: 15,
                      fontWeight: 800,
                    }}
                  >
                    {scenario.title}
                  </div>
                </button>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "minmax(340px, 1.08fr) minmax(280px, 0.92fr)",
              gap: 24,
            }}
          >
            <ScenarioWater scenario={selectedScenario} />

            <div
              className="panel-card"
              style={{
                padding: 24,
                borderRadius: 28,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.95))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 900,
                }}
              >
                {selectedScenario.title}
              </h3>

              <p
                style={{
                  marginTop: 20,
                  color: "#f8fafc",
                  lineHeight: 1.8,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                {selectedScenario.question}
              </p>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gap: 10,
                }}
              >
                {selectedScenario.options.map((option, index) => {
                  const selected = scenarioChoice === index;
                  const correctReveal =
                    scenarioChoice !== null && index === selectedScenario.answer;
                  const wrongReveal =
                    scenarioChoice !== null &&
                    selected &&
                    index !== selectedScenario.answer;

                  return (
                    <button
                      key={`${selectedScenario.id}-${index}`}
                      type="button"
                      onClick={() => setScenarioChoice(index)}
                      className="premium-button"
                      style={{
                        textAlign: "left",
                        padding: "14px 16px",
                        borderRadius: 18,
                        border: correctReveal
                          ? "1px solid rgba(73,255,139,0.30)"
                          : wrongReveal
                            ? "1px solid rgba(255,82,82,0.28)"
                            : selected
                              ? "1px solid rgba(103,211,255,0.22)"
                              : "1px solid rgba(255,255,255,0.08)",
                        background: correctReveal
                          ? "linear-gradient(180deg, rgba(73,255,139,0.12), rgba(73,255,139,0.05))"
                          : wrongReveal
                            ? "linear-gradient(180deg, rgba(255,82,82,0.12), rgba(255,82,82,0.05))"
                            : selected
                              ? "linear-gradient(180deg, rgba(103,211,255,0.12), rgba(103,211,255,0.05))"
                              : "rgba(255,255,255,0.04)",
                        color: "#f8fafc",
                        cursor: "pointer",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <DynamicRecognitionLab />

        {/* Night Mistake Zone */}
        <section style={{ marginTop: 94 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1fr) minmax(280px, 0.9fr)",
              gap: 24,
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  padding: "8px 14px",
                  borderRadius: 999,
                  background: "rgba(103,211,255,0.08)",
                  border: "1px solid rgba(103,211,255,0.18)",
                  color: "#8ed8ff",
                  fontSize: 12,
                  fontWeight: 800,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                }}
              >
                Night Mistake Zone
              </div>

              <h2
                style={{
                  margin: "18px 0 0",
                  fontSize: 34,
                  fontWeight: 900,
                  lineHeight: 1.12,
                }}
              >
                Gece en çok
                <br />
                nerede hata yapılır?
              </h2>
            </div>

            <div
              className="panel-card"
              style={{
                padding: 24,
                borderRadius: 28,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.95))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#8ed8ff",
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 800,
                }}
              >
                Quick Scan
              </div>

              <h3
                style={{
                  margin: "10px 0 0",
                  fontSize: 28,
                  fontWeight: 900,
                }}
              >
                10 saniyelik
                <br />
                gece kontrol akışı
              </h3>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gap: 12,
                }}
              >
                {[
                  "Hangi renkleri görüyorum?",
                  "Birlikte mi ayrı mı görünüyorlar?",
                  "Işık sabit mi, yön değiştiriyor mu, kapanıyor mu?",
                  "Karşı tarafın hangi tarafını okuyor olabilirim?",
                  "Bu durum head-on, crossing, overtaking veya anchored olabilir mi?",
                  "Kararım ışık ezberi mi yoksa ilişki okuması mı?",
                ].map((step, index) => (
                  <div
                    key={step}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "30px 1fr",
                      gap: 12,
                      alignItems: "start",
                      padding: "14px 14px",
                      borderRadius: 18,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        background:
                          "linear-gradient(180deg, rgba(103,211,255,0.14), rgba(103,211,255,0.06))",
                        border: "1px solid rgba(103,211,255,0.14)",
                        color: "#8ed8ff",
                        fontWeight: 900,
                        fontSize: 13,
                      }}
                    >
                      {index + 1}
                    </div>

                    <div
                      style={{
                        color: "rgba(248,250,252,0.88)",
                        fontSize: 14,
                        lineHeight: 1.7,
                        fontWeight: 700,
                      }}
                    >
                      {step}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}