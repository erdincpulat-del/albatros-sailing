"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const planningBlocks = [
  {
    title: "Hedef rota",
    text: "Başlangıç ve varış noktası yalnızca çizgi çekmek değildir. Rota; mesafe, hava, akıntı, gece-gündüz dengesi ve güvenli alternatifler ile birlikte düşünülmelidir.",
  },
  {
    title: "Hava ve deniz durumu",
    text: "Rüzgar yönü, kuvveti, dalga yüksekliği ve olası dönüşler rota kararının temelini oluşturur. Yanlış hava okuması bütün planı bozar.",
  },
  {
    title: "Trafik ve geçişler",
    text: "TSS, dar geçitler, yoğun trafik alanları, ada geçişleri ve kıyı yaklaşmaları rota üzerinde özel dikkat gerektirir.",
  },
  {
    title: "Alternatif plan",
    text: "İyi kaptan tek rota yapmaz. Ana plan, yedek plan ve gerektiğinde geri dönüş kararı birlikte düşünülmelidir.",
  },
];

const commonMistakes = [
  "Harita üzerinde rota çizip gerçek hava koşullarını hesaba katmamak",
  "Sadece mesafeye odaklanıp gece varış riskini düşünmemek",
  "Alternatif liman veya kaçış noktası planlamamak",
  "Akıntı ve trafik yoğunluğunu küçümsemek",
];

const sampleRoute = [
  "Çıkış noktası netleştirilir ve varış hedefi belirlenir",
  "Hava tahmini, rüzgar yönü ve dalga şartları kontrol edilir",
  "Akıntı, trafik, TSS ve dar geçitler değerlendirilir",
  "Alternatif limanlar ve kaçış planı hazırlanır",
  "Geceye kalma ihtimali ve emniyetli yaklaşma kararı verilir",
];

const chartTopics = [
  {
    id: "paper-chart",
    title: "Kâğıt harita nedir?",
    short: "Elektronik sistemler olmadan da güvenli navigasyon düşüncesi kurduran temel araçtır.",
    body:
      "Kâğıt deniz haritası; kıyı formunu, derinlikleri, seyir yardımcılarını, tehlikeleri, yasak sahaları, datum bilgisini, projeksiyonu ve koordinat sistemini aynı yüzeyde toplayan resmi navigasyon dokümanıdır. GPS çağında bile yalnızca ekran değil, zihinsel konum farkındalığı üretmesi nedeniyle kritik değerdedir.",
  },
  {
    id: "acceptance",
    title: "Ne zaman kabul edilmiştir?",
    short: "Modern deniz haritacılığı yüzyıllar içinde gelişmiş, Mercator projeksiyonu büyük dönüm noktası olmuştur.",
    body:
      "Bugünkü modern deniz haritası mantığı; coğrafi koordinat sistemi, meridyen-paralel yapısı ve Mercator projeksiyonu ile olgunlaşmıştır. Özellikle Gerhard Mercator’un 1569 tarihli projeksiyon yaklaşımı, rota çizimi ve sabit kerteriz mantığı açısından denizciliği kökten değiştirmiştir.",
  },
  {
    id: "chart-language",
    title: "Harita dili neden önemlidir?",
    short: "Harita üzerindeki semboller evrensel bir karar dilidir.",
    body:
      "Harita dili yalnızca işaret ezberlemek değildir. Marina, batık, kaya, şamandıra, fix, running fix, EP, DR, LOP, set-drift gibi semboller; kaptanın beyninde risk, güvenlik ve karar akışını hızlandıran görsel kısayollardır.",
  },
];

const chartInfoCards = [
  {
    title: "Haritadaki bilgiler",
    text: "Harita adı, ölçek, datum, derinlik birimi, projeksiyon tipi, seyir işaret sistemi, yasak sahalar ve özel notlar okunmadan harita kullanılmaz.",
  },
  {
    title: "Paraleller ve meridyenler",
    text: "Enlem kuzey-güney konumunu, boylam doğu-batı konumunu verir. Koordinat okumada önce enlem, sonra boylam söylenir.",
  },
  {
    title: "Mesafe ölçmek",
    text: "Deniz haritasında mesafe, haritanın yan kenarındaki enlem ölçeğinden alınır. Haritanın ortasındaki çizgiler mesafe ölçmek için kullanılmaz.",
  },
  {
    title: "Koordinat bulmak",
    text: "Önce enlem çizgisine, sonra boylam çizgisine gidilir. İki kesişim noktası mevkii verir.",
  },
];

const symbolCards = [
  {
    code: "Fix",
    meaning: "Üç kerteriz veya yeterli veri ile bulunan kesin mevki işareti.",
  },
  {
    code: "Running Fix",
    meaning: "Tek bir cismi farklı zamanlarda kullanarak elde edilen hareketli mevki çözümü.",
  },
  {
    code: "EP",
    meaning: "Estimated Position. DR mevkiine akıntı, düşme veya dış etkenler eklenerek elde edilen tahmini mevki.",
  },
  {
    code: "DR",
    meaning: "Dead Reckoning. Sadece rota, hız ve zaman ile bulunan hesap mevkii.",
  },
  {
    code: "LOP",
    meaning: "Line of Position. Kerteriz ya da gözlemden türetilen mevki hattı.",
  },
  {
    code: "Set & Drift",
    meaning: "Akıntının yönü ve hızı. Teknenin su içindeki hareketini yer üzerindeki izinden ayırır.",
  },
  {
    code: "Ground Track",
    meaning: "Teknenin yer üzerindeki gerçek izi. Akıntı ve rüzgar etkisini içerir.",
  },
  {
    code: "Water Track",
    meaning: "Teknenin suya göre gitmek istediği veya gösterdiği iz.",
  },
];

const systemPowerLinks = [
  {
    title: "Trafik ve COLREG",
    desc: "Çatışmayı önleme, TSS, AIS ve trafik mantığı",
    href: "/guide/denizde-catisma-onleme",
    icon: "🧭",
  },
  {
    title: "Navigasyon ve Kâğıt Harita",
    desc: "Harita kullanımı, mevkii atma ve seyir mantığı",
    href: "/guide/rota-planlama",
    icon: "🗺️",
  },
  {
    title: "Harita Sembolleri",
    desc: "Deniz haritalarındaki işaretler ve anlamları",
    href: "/guide/rota-planlama",
    icon: "⚓",
  },
  {
    title: "İleri Navigasyon (Sextant)",
    desc: "Açı, zaman ve gerçek navigasyon mantığı",
    href: "/guide/sextant",
    icon: "🌌",
  },
];

const glossaryRows = [
  {
    term: "Dead Reckoning (DR)",
    meaning:
      "Rota, hız ve zaman kullanılarak; dış etkenler hesaba katılmadan bulunan mevki.",
  },
  {
    term: "Estimated Position (EP)",
    meaning:
      "DR mevkiinin akıntı, düşme veya diğer etkenlerle düzeltilmiş hali.",
  },
  {
    term: "Running Fix",
    meaning:
      "Aynı objeden farklı zamanlarda alınan kerterizlerle bulunan mevki çözümü.",
  },
  {
    term: "Set",
    meaning: "Akıntının gittiği yön.",
  },
  {
    term: "Drift",
    meaning: "Akıntının hızı.",
  },
  {
    term: "Ground Track",
    meaning: "Teknenin yer üzerindeki gerçek izidir.",
  },
  {
    term: "Water Track",
    meaning: "Teknenin su içindeki hedef veya teorik izidir.",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </div>
  );
}

function GlowCard({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        padding: 24,
        borderRadius: 22,
        background:
          "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.94))",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
      }}
    >
      {title ? (
        <h3
          style={{
            margin: 0,
            fontSize: 22,
            fontWeight: 900,
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
      ) : null}
      {children}
    </div>
  );
}
function AnimatedCompassRose({
  variation = 6,
  deviation = -3,
}: {
  variation?: number;
  deviation?: number;
}) {
  const trueNorth = 0;
  const magneticNorth = variation;
  const compassNorth = variation + deviation;

  return (
    <div
      style={{
        position: "relative",
        minHeight: 460,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, rgba(217,188,119,0.12), transparent 28%), linear-gradient(180deg, rgba(7,12,20,0.96), rgba(8,14,24,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at center, rgba(255,255,255,0.03), transparent 48%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          border: "2px solid rgba(255,255,255,0.18)",
          boxShadow: "0 0 36px rgba(103,211,255,0.08)",
        }}
      >
        {Array.from({ length: 36 }).map((_, i) => {
          const deg = i * 10;
          const longTick = deg % 30 === 0;
          return (
            <div
              key={deg}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 2,
                height: longTick ? 26 : 14,
                background: longTick
                  ? "rgba(217,188,119,0.72)"
                  : "rgba(255,255,255,0.24)",
                transform: `translate(-50%, -160px) rotate(${deg}deg)`,
                transformOrigin: "center 160px",
              }}
            />
          );
        })}

        <CompassArrow
          deg={trueNorth}
          color="#f472b6"
          label="True North"
          length={132}
        />
        <CompassArrow
          deg={magneticNorth}
          color="#67d3ff"
          label="Magnetic North"
          length={118}
        />
        <CompassArrow
          deg={compassNorth}
          color="#d9bc77"
          label="Compass North"
          length={104}
        />

        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#0f172a",
            border: "2px solid rgba(255,255,255,0.32)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 24,
          top: 24,
          display: "grid",
          gap: 10,
        }}
      >
        <MetricPill label="Variation" value={`${variation > 0 ? "+" : ""}${variation}°`} />
        <MetricPill label="Deviation" value={`${deviation > 0 ? "+" : ""}${deviation}°`} />
        <MetricPill
          label="Compass error"
          value={`${variation + deviation > 0 ? "+" : ""}${variation + deviation}°`}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 24,
          maxWidth: 320,
          padding: "16px 18px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(226,232,240,0.82)",
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        Varyasyon, gerçek kuzey ile manyetik kuzey arasındaki farktır.
        Deviasyon ise teknenin kendi manyetik etkilerinden doğar. İkisi
        birlikte okunmadan pusula kararı güvenli değildir.
      </div>
    </div>
  );
}

function CompassArrow({
  deg,
  color,
  label,
  length,
}: {
  deg: number;
  color: string;
  label: string;
  length: number;
}) {
  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 4,
          height: length,
          borderRadius: 999,
          background: color,
          transform: `translate(-50%, -${length}px) rotate(${deg}deg)`,
          transformOrigin: `center ${length}px`,
          boxShadow: `0 0 18px ${color}55`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: `translate(-50%, -${length + 24}px) rotate(${deg}deg)`,
          transformOrigin: `center ${length + 24}px`,
          color,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </>
  );
}

function MetricPill({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 14,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        minWidth: 150,
      }}
    >
      <div
        style={{
          fontSize: 10,
          textTransform: "uppercase",
          letterSpacing: "0.16em",
          color: "rgba(226,232,240,0.48)",
          fontWeight: 800,
        }}
      >
        {label}
      </div>
      <div
        style={{
          marginTop: 6,
          color: "#f8fafc",
          fontSize: 14,
          fontWeight: 800,
        }}
      >
        {value}
      </div>
    </div>
  );
}

function CoordinateGrid({
  latDeg,
  latMin,
  lonDeg,
  lonMin,
}: {
  latDeg: number;
  latMin: number;
  lonDeg: number;
  lonMin: number;
}) {
  const x = clamp(18 + lonMin * 1.15, 18, 92);
  const y = clamp(78 - latMin * 1.0, 12, 78);

  return (
    <div
      style={{
        position: "relative",
        minHeight: 430,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(7,12,20,0.96), rgba(8,14,24,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 24,
          borderRadius: 18,
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          border: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`v-${i}`}
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: `${12 + i * 10}%`,
              width: i === 3 ? 2 : 1,
              background:
                i === 3
                  ? "rgba(217,188,119,0.55)"
                  : "rgba(255,255,255,0.10)",
            }}
          />
        ))}

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`h-${i}`}
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: `${14 + i * 12}%`,
              height: i === 2 ? 2 : 1,
              background:
                i === 2
                  ? "rgba(103,211,255,0.40)"
                  : "rgba(255,255,255,0.10)",
            }}
          />
        ))}

        <div
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: 18,
            height: 18,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background: "#67d3ff",
            boxShadow: "0 0 16px rgba(103,211,255,0.45)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: 54,
            height: 54,
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid rgba(103,211,255,0.22)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: `${x}%`,
            top: 0,
            bottom: 0,
            width: 1,
            background: "rgba(103,211,255,0.28)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: `${y}%`,
            left: 0,
            right: 0,
            height: 1,
            background: "rgba(103,211,255,0.28)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 22,
          top: 18,
          display: "grid",
          gap: 10,
        }}
      >
        <MetricPill label="Latitude" value={`${latDeg}° ${latMin.toFixed(1)}' N`} />
        <MetricPill label="Longitude" value={`${lonDeg}° ${lonMin.toFixed(1)}' E`} />
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 24,
          maxWidth: 320,
          padding: "16px 18px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(226,232,240,0.82)",
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        Koordinat bulurken önce enlem, sonra boylam okunur. Haritada yatay
        çizgi enlem, dikey çizgi boylam mantığını sabitlemeden mevki güvenli
        okunmaz.
      </div>
    </div>
  );
}

function TopicSelector({
  activeTopic,
  setActiveTopic,
}: {
  activeTopic: string;
  setActiveTopic: (value: string) => void;
}) {
  return (
    <div
      style={{
        display: "grid",
        gap: 12,
      }}
    >
      {chartTopics.map((topic) => (
        <button
          key={topic.id}
          onClick={() => setActiveTopic(topic.id)}
          style={{
            textAlign: "left",
            padding: "16px 18px",
            borderRadius: 16,
            border:
              activeTopic === topic.id
                ? "1px solid rgba(103,211,255,0.22)"
                : "1px solid rgba(255,255,255,0.08)",
            background:
              activeTopic === topic.id
                ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                : "rgba(255,255,255,0.04)",
            color: activeTopic === topic.id ? "#e0f2fe" : "#f8fafc",
            fontWeight: 800,
            fontSize: 15,
            cursor: "pointer",
          }}
        >
          <div>{topic.title}</div>
          <div
            style={{
              marginTop: 8,
              fontSize: 13,
              lineHeight: 1.65,
              color:
                activeTopic === topic.id
                  ? "rgba(224,242,254,0.86)"
                  : "rgba(226,232,240,0.70)",
              fontWeight: 600,
            }}
          >
            {topic.short}
          </div>
        </button>
      ))}
    </div>
  );
}
function TrackSimulator({
  heading,
  leeway,
  setDrift,
  driftSpeed,
}: {
  heading: number;
  leeway: number;
  setDrift: number;
  driftSpeed: number;
}) {
  const waterAngle = heading - 90;
  const groundAngle = heading + leeway + setDrift - 90;

  const waterX = Math.cos((waterAngle * Math.PI) / 180) * 150;
  const waterY = Math.sin((waterAngle * Math.PI) / 180) * 150;

  const groundX = Math.cos((groundAngle * Math.PI) / 180) * (170 + driftSpeed * 8);
  const groundY = Math.sin((groundAngle * Math.PI) / 180) * (170 + driftSpeed * 8);

  return (
    <div
      style={{
        position: "relative",
        minHeight: 420,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, rgba(103,211,255,0.10), transparent 28%), linear-gradient(180deg, rgba(7,12,20,0.96), rgba(8,14,24,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 0%, transparent 72%, rgba(103,211,255,0.05) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#f8fafc",
          transform: "translate(-50%, -50%)",
          boxShadow: "0 0 14px rgba(255,255,255,0.18)",
        }}
      />

      <TrackLine
        x={waterX}
        y={waterY}
        color="#67d3ff"
        label="Water Track"
        dashed={false}
      />

      <TrackLine
        x={groundX}
        y={groundY}
        color="#d9bc77"
        label="Ground Track"
        dashed={false}
      />

      <TrackLine
        x={Math.cos(((heading + setDrift - 90) * Math.PI) / 180) * (112 + driftSpeed * 4)}
        y={Math.sin(((heading + setDrift - 90) * Math.PI) / 180) * (112 + driftSpeed * 4)}
        color="#f472b6"
        label="Set & Drift"
        dashed
      />

      <div
        style={{
          position: "absolute",
          left: 24,
          top: 24,
          display: "grid",
          gap: 10,
        }}
      >
        <MetricPill label="Heading" value={`${heading.toFixed(0)}°`} />
        <MetricPill label="Leeway" value={`${leeway > 0 ? "+" : ""}${leeway.toFixed(0)}°`} />
        <MetricPill label="Set" value={`${setDrift > 0 ? "+" : ""}${setDrift.toFixed(0)}°`} />
        <MetricPill label="Drift" value={`${driftSpeed.toFixed(1)} kn`} />
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 24,
          maxWidth: 320,
          padding: "16px 18px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(226,232,240,0.82)",
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        Water track teknenin suya göre gitmek istediği izdir. Ground track ise
        akıntı ve düşme eklendiğinde yer üzerindeki gerçek izdir. Bu farkı
        anlamayan kaptan rota üstünde kaldığını sanırken sürükleniyor olabilir.
      </div>
    </div>
  );
}

function TrackLine({
  x,
  y,
  color,
  label,
  dashed = false,
}: {
  x: number;
  y: number;
  color: string;
  label: string;
  dashed?: boolean;
}) {
  const length = Math.sqrt(x * x + y * y);
  const angle = (Math.atan2(y, x) * 180) / Math.PI;

  return (
    <>
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: length,
          height: 3,
          borderRadius: 999,
          background: dashed ? "transparent" : color,
          borderTop: dashed ? `2px dashed ${color}` : "none",
          transform: `translate(0, -50%) rotate(${angle}deg)`,
          transformOrigin: "0 50%",
          boxShadow: dashed ? "none" : `0 0 12px ${color}44`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: color,
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 12px ${color}66`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: `calc(50% + ${x * 0.55}px)`,
          top: `calc(50% + ${y * 0.55}px)`,
          transform: "translate(-50%, -50%)",
          padding: "6px 10px",
          borderRadius: 999,
          background: "rgba(15,23,42,0.88)",
          border: `1px solid ${color}55`,
          color,
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </>
  );
}

function FixTimeline({
  fixType,
}: {
  fixType: "fix" | "running" | "ep" | "dr";
}) {
  const config = {
    fix: {
      title: "Fix",
      color: "#67d3ff",
      text: "Üç bağımsız gözlem veya yeterli iki güvenilir hat ile bulunan daha kesin mevki.",
      points: [
        { left: "18%", top: "58%" },
        { left: "34%", top: "38%" },
        { left: "50%", top: "54%" },
      ],
      center: { left: "38%", top: "50%" },
    },
    running: {
      title: "Running Fix",
      color: "#d9bc77",
      text: "Aynı objeden zaman ilerledikçe alınan hatların tekne hareketiyle taşınarak birleştirilmesi.",
      points: [
        { left: "16%", top: "62%" },
        { left: "42%", top: "46%" },
        { left: "68%", top: "34%" },
      ],
      center: { left: "56%", top: "42%" },
    },
    ep: {
      title: "Estimated Position",
      color: "#f472b6",
      text: "DR üzerine akıntı, set-drift veya düşme eklenerek daha gerçekçi tahmini mevki kurulması.",
      points: [
        { left: "24%", top: "58%" },
        { left: "42%", top: "58%" },
        { left: "62%", top: "48%" },
      ],
      center: { left: "62%", top: "48%" },
    },
    dr: {
      title: "Dead Reckoning",
      color: "#34d399",
      text: "Sadece rota, hız ve zaman kullanılarak bulunan hesap mevkii. Dış etkenler henüz eklenmemiştir.",
      points: [
        { left: "22%", top: "62%" },
        { left: "38%", top: "54%" },
        { left: "54%", top: "46%" },
      ],
      center: { left: "54%", top: "46%" },
    },
  }[fixType];

  return (
    <div
      style={{
        position: "relative",
        minHeight: 360,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "linear-gradient(180deg, rgba(7,12,20,0.96), rgba(8,14,24,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 24,
          borderRadius: 18,
          border: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          top: "58%",
          height: 2,
          background: "rgba(255,255,255,0.10)",
        }}
      />

      {config.points.map((point, index) => (
        <div
          key={`${config.title}-${index}`}
          style={{
            position: "absolute",
            left: point.left,
            top: point.top,
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: config.color,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 12px ${config.color}66`,
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          left: config.center.left,
          top: config.center.top,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: `2px solid ${config.color}`,
          background: `${config.color}22`,
          transform: "translate(-50%, -50%)",
          boxShadow: `0 0 22px ${config.color}33`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 24,
          top: 24,
          padding: "10px 12px",
          borderRadius: 14,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            fontSize: 10,
            textTransform: "uppercase",
            letterSpacing: "0.16em",
            color: "rgba(226,232,240,0.48)",
            fontWeight: 800,
          }}
        >
          Symbol mode
        </div>
        <div
          style={{
            marginTop: 6,
            color: "#f8fafc",
            fontSize: 16,
            fontWeight: 900,
          }}
        >
          {config.title}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 24,
          bottom: 24,
          maxWidth: 320,
          padding: "16px 18px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(226,232,240,0.82)",
          fontSize: 13,
          lineHeight: 1.7,
        }}
      >
        {config.text}
      </div>
    </div>
  );
}

function SymbolLanguageBoard({
  activeSymbol,
  setActiveSymbol,
}: {
  activeSymbol: string;
  setActiveSymbol: (value: string) => void;
}) {
  const symbolData: Record<string, { title: string; body: string; icon: string }> = {
    rock: {
      title: "Kaya / Tehlikeli sığlık",
      body: "Haritadaki kaya ve görünmeyen tehlikeler sadece sembol değil, karar eşikleridir. Gece yaklaşması, dalga ve draft ile birlikte okunmalıdır.",
      icon: "✶",
    },
    marina: {
      title: "Marina / giriş güveni",
      body: "Marina işareti yalnızca bağlanma noktası değil; yaklaşma yönü, şamandıralama ve yerel manevra mantığının başlangıcıdır.",
      icon: "⛵",
    },
    wreck: {
      title: "Batık",
      body: "Batık sembolü, derinliği bilinse de bilinmese de rota güvenliği açısından ayrı dikkat ister. Özellikle gece ve dalgalı denizde hata affetmez.",
      icon: "⚠",
    },
    fish: {
      title: "Balık çiftliği",
      body: "Haritada işaretli çiftlikler, yaklaşma ve gece geçişlerinde ciddi kısıt üretir. GPS’e güvenip kör gitmek burada risklidir.",
      icon: "◫",
    },
    anchor: {
      title: "Demir yeri",
      body: "Demir yeri sembolü güvenli durma ihtimali verir; ama dip yapısı, rüzgar dönüşü ve salma mesafesi ayrıca düşünülmelidir.",
      icon: "⚓",
    },
    church: {
      title: "Kilise / belirgin kara işareti",
      body: "Kıyı objeleri görsel kerteriz ve yaklaşma doğrulaması için altın değerdedir. Özellikle klasik navigasyon düşüncesi için.",
      icon: "✛",
    },
  };

  const current = symbolData[activeSymbol];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(320px, 1.04fr) minmax(260px, 0.96fr)",
        gap: 24,
      }}
    >
      <div
        style={{
          position: "relative",
          minHeight: 420,
          borderRadius: 24,
          overflow: "hidden",
          background:
            "linear-gradient(180deg, rgba(7,12,20,0.96), rgba(8,14,24,0.98))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 24,
            borderRadius: 18,
            border: "1px solid rgba(255,255,255,0.06)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
          }}
        />

        {[
          { key: "rock", left: "20%", top: "24%" },
          { key: "marina", left: "70%", top: "22%" },
          { key: "wreck", left: "56%", top: "46%" },
          { key: "fish", left: "28%", top: "58%" },
          { key: "anchor", left: "74%", top: "64%" },
          { key: "church", left: "40%", top: "76%" },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => setActiveSymbol(item.key)}
            style={{
              position: "absolute",
              left: item.left,
              top: item.top,
              transform: "translate(-50%, -50%)",
              width: 58,
              height: 58,
              borderRadius: "50%",
              border:
                activeSymbol === item.key
                  ? "1px solid rgba(103,211,255,0.28)"
                  : "1px solid rgba(255,255,255,0.10)",
              background:
                activeSymbol === item.key
                  ? "linear-gradient(180deg, rgba(103,211,255,0.12), rgba(103,211,255,0.04))"
                  : "rgba(255,255,255,0.04)",
              color: "#f8fafc",
              fontSize: 24,
              cursor: "pointer",
              boxShadow:
                activeSymbol === item.key
                  ? "0 0 18px rgba(103,211,255,0.14)"
                  : "none",
            }}
          >
            {symbolData[item.key].icon}
          </button>
        ))}

        <div
          style={{
            position: "absolute",
            left: 24,
            bottom: 24,
            padding: "10px 14px",
            borderRadius: 999,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.08)",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "rgba(226,232,240,0.72)",
          }}
        >
          Chart symbol language
        </div>
      </div>

      <div
        style={{
          borderRadius: 24,
          padding: 24,
          background:
            "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.94))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "8px 12px",
            borderRadius: 999,
            background: "rgba(103,211,255,0.08)",
            border: "1px solid rgba(103,211,255,0.16)",
            color: "#8ed8ff",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 0.7,
            textTransform: "uppercase",
          }}
        >
          Symbol focus
        </div>

        <h3
          style={{
            marginTop: 18,
            marginBottom: 0,
            fontSize: 28,
            fontWeight: 900,
            lineHeight: 1.12,
          }}
        >
          {current.title}
        </h3>

        <p
          style={{
            marginTop: 14,
            marginBottom: 0,
            fontSize: 15,
            lineHeight: 1.8,
            color: "rgba(226,232,240,0.80)",
          }}
        >
          {current.body}
        </p>

        <div
          style={{
            marginTop: 24,
            display: "grid",
            gap: 10,
          }}
        >
          {Object.keys(symbolData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSymbol(key)}
              style={{
                textAlign: "left",
                padding: "14px 16px",
                borderRadius: 16,
                border:
                  activeSymbol === key
                    ? "1px solid rgba(103,211,255,0.22)"
                    : "1px solid rgba(255,255,255,0.08)",
                background:
                  activeSymbol === key
                    ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                    : "rgba(255,255,255,0.04)",
                color: "#f8fafc",
                fontWeight: 800,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {symbolData[key].title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
export default function RoutePlanningPage() {
  const [activeTopic, setActiveTopic] = useState("paper-chart");
  const [variation, setVariation] = useState(6);
  const [deviation, setDeviation] = useState(-3);

  const [latDeg] = useState(36);
  const [lonDeg] = useState(28);
  const [latMin, setLatMin] = useState(50.5);
  const [lonMin, setLonMin] = useState(18.2);

  const [heading, setHeading] = useState(90);
  const [leeway, setLeeway] = useState(5);
  const [setAngle, setSetAngle] = useState(6);
  const [driftSpeed, setDriftSpeed] = useState(1.2);

  const [fixMode, setFixMode] = useState<"fix" | "running" | "ep" | "dr">("fix");
  const [activeSymbol, setActiveSymbol] = useState("rock");

  const activeTopicData = useMemo(
    () => chartTopics.find((item) => item.id === activeTopic) || chartTopics[0],
    [activeTopic]
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        color: "#f8fafc",
      }}
    >
      <style>{`
        @keyframes shimmerSweep {
          0% { transform: translateX(-140%) skewX(-18deg); opacity: 0; }
          20% { opacity: 1; }
          100% { transform: translateX(240%) skewX(-18deg); opacity: 0; }
        }

        .wow-card {
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;
        }

        .wow-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(66,189,248,0.12);
          border-color: rgba(103,211,255,0.20) !important;
        }

        .system-card {
          position: relative;
          overflow: hidden;
        }

        .system-card::after {
          content: "";
          position: absolute;
          top: 0;
          left: -35%;
          width: 32%;
          height: 100%;
          background:
            linear-gradient(90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.16) 45%,
              rgba(255,255,255,0.30) 50%,
              rgba(255,255,255,0.12) 55%,
              rgba(255,255,255,0) 100%);
          transform: translateX(-140%) skewX(-18deg);
          opacity: 0;
          pointer-events: none;
        }

        .system-card:hover::after {
          animation: shimmerSweep .9s ease forwards;
        }

        .range-premium {
          width: 100%;
          -webkit-appearance: none;
          appearance: none;
          height: 8px;
          border-radius: 999px;
          background: rgba(255,255,255,0.10);
          outline: none;
        }

        .range-premium::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #67d3ff;
          border: 2px solid #e0f2fe;
          box-shadow: 0 0 0 6px rgba(103,211,255,0.12);
          cursor: pointer;
        }

        .range-premium::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #67d3ff;
          border: 2px solid #e0f2fe;
          box-shadow: 0 0 0 6px rgba(103,211,255,0.12);
          cursor: pointer;
        }
      `}</style>

      <section
        style={{
          padding: "120px 24px 90px",
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 780 }}>
          <SectionBadge>Navigasyon • Rota Planlama • Kâğıt Harita</SectionBadge>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 70px)",
              fontWeight: 900,
              lineHeight: 1.04,
              margin: "18px 0 0 0",
              letterSpacing: "-0.04em",
            }}
          >
            Rota planlama
            <br />
            kaptanlığın omurgasıdır.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 760,
            }}
          >
            Rota planlama, harita üzerinde iki nokta arasına çizgi çekmek değildir.
            Gerçek rota; hava, akıntı, trafik, geceye kalma ihtimali, alternatif
            limanlar ve teknenin gerçek kapasitesi birlikte düşünülerek kurulur.
          </p>
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/training/offshore-skipper"
            style={{
              padding: "14px 22px",
              borderRadius: 14,
              background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
              color: "#04121c",
              textDecoration: "none",
              fontWeight: 900,
              boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
            }}
          >
            Gerçek Açık Deniz Eğitimi
          </Link>

          <Link
            href="/programs"
            style={{
              padding: "14px 22px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.10)",
              color: "#f8fafc",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Tüm Programları Gör
          </Link>
        </div>

        <div
          style={{
            marginTop: 20,
            padding: "18px 20px",
            borderRadius: 18,
            background: "rgba(103,211,255,0.05)",
            border: "1px solid rgba(103,211,255,0.15)",
            color: "#e2e8f0",
            fontSize: 14,
            lineHeight: 1.75,
            fontWeight: 600,
          }}
        >
          Gerçek fark burada başlar. Bodrum – İstanbul hattı gibi açık deniz ve yoğun
          trafik içeren rotalarda, rota planlama sadece yön belirlemek değil; gece,
          trafik, hava ve alternatif kararları aynı anda yönetmektir.
        </div>

        <div style={{ marginTop: 40, maxWidth: 740 }}>
          <h2
            style={{
              fontSize: 26,
              fontWeight: 900,
              lineHeight: 1.15,
              margin: 0,
              marginBottom: 12,
            }}
          >
            Neden rota planlama bu kadar belirleyicidir?
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              margin: 0,
            }}
          >
            Çünkü denizde güvenlik çoğu zaman daha seyir başlamadan başlar. Kötü
            rota planı iyi tekneyi de zor durumda bırakır. Doğru rota planı ise
            riskleri daha kalkış anından önce azaltır.
          </p>

          <p
            style={{
              marginTop: 10,
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
            }}
          >
            Albatros Sailing eğitimlerinde rota planlama yalnızca teorik bir başlık
            değil; gerçek deniz geçişleri, alternatif liman kararları ve açık deniz
            senaryoları ile işlenen bir kaptanlık becerisidir.
          </p>
        </div>

        <div style={{ marginTop: 34 }}>
          <GlowCard title="Kısa tanım">
            <p
              style={{
                marginTop: 14,
                marginBottom: 0,
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.85,
                fontSize: 16,
              }}
            >
              Rota planlama; çıkış noktası, varış hedefi, ara karar noktaları, hava
              tahmini, akıntı, trafik yoğunluğu ve alternatif limanlar düşünülerek
              seyir planı oluşturmaktır.
            </p>

            <p
              style={{
                marginTop: 14,
                marginBottom: 0,
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.85,
                fontSize: 16,
              }}
            >
              Burada amaç yalnızca en kısa yolu bulmak değil; en güvenli, en
              yönetilebilir ve gerektiğinde değiştirilebilir yolu kurmaktır.
            </p>
          </GlowCard>
        </div>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {planningBlocks.map((item) => (
            <div
              key={item.title}
              className="wow-card"
              style={{
                padding: 22,
                borderRadius: 20,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.90))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 800,
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(226,232,240,0.75)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
                <div style={{ marginTop: 70 }}>
          <GlowCard title="Doğru düşünme akışı nasıl kurulur?">
            <div
              style={{
                marginTop: 18,
                display: "grid",
                gap: 12,
              }}
            >
              {sampleRoute.map((item) => (
                <div
                  key={item}
                  className="wow-card"
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    padding: "14px 16px",
                    borderRadius: 16,
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#e2e8f0",
                    fontSize: 15,
                    lineHeight: 1.7,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      marginTop: 8,
                      flexShrink: 0,
                      background: "#67d3ff",
                      boxShadow: "0 0 8px rgba(103,211,255,0.45)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>
          </GlowCard>
        </div>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Navigasyon ve kâğıt harita neden ayrı bir güç katmanıdır?
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Kâğıt harita; yalnızca “elektronik bozulursa yedek” değildir. Asıl değeri,
            denizcinin zihninde alan farkındalığı, risk okuma ve konumu grafik olarak
            kurma becerisi üretmesidir. Harita okumak, tekne üzerindeki düşünceyi
            derinleştirir.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "minmax(280px, 0.9fr) minmax(320px, 1.1fr)",
              gap: 24,
            }}
          >
            <GlowCard title="Konu seçim paneli">
              <p
                style={{
                  marginTop: 14,
                  marginBottom: 18,
                  color: "rgba(226,232,240,0.76)",
                  lineHeight: 1.75,
                  fontSize: 14,
                }}
              >
                Aşağıdaki başlıklara tıklayarak kâğıt harita bilgisinin temel
                katmanlarını ayrı ayrı inceleyebilirsin.
              </p>

              <TopicSelector
                activeTopic={activeTopic}
                setActiveTopic={setActiveTopic}
              />
            </GlowCard>

            <GlowCard title={activeTopicData.title}>
              <p
                style={{
                  marginTop: 14,
                  marginBottom: 0,
                  color: "rgba(226,232,240,0.82)",
                  lineHeight: 1.85,
                  fontSize: 15,
                }}
              >
                {activeTopicData.body}
              </p>

              <div
                style={{
                  marginTop: 22,
                  padding: "16px 18px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))",
                  border: "1px solid rgba(103,211,255,0.16)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.48)",
                    fontWeight: 800,
                  }}
                >
                  Neden önemlidir?
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#e0f2fe",
                    fontWeight: 700,
                  }}
                >
                  Harita okuma disiplini, elektronik sistemlerin gösterdiğini sadece
                  kabul eden kullanıcıyı değil; gördüğü veriyi kontrol eden gerçek
                  denizciyi üretir.
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Harita üzerindeki bilgiler ne anlatır?
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Harita adı, ölçek, projeksiyon, datum, derinlik birimi, seyir işaret
            sistemi, yasak sahalar, tehlikeler, özel notlar ve kenar açıklamaları;
            birlikte okunmadan haritanın gerçek dili tamamlanmaz.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {chartInfoCards.map((item) => (
              <div
                key={item.title}
                className="wow-card"
                style={{
                  padding: 20,
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.94))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: 17,
                    fontWeight: 800,
                    lineHeight: 1.25,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    marginTop: 10,
                    marginBottom: 0,
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "rgba(226,232,240,0.76)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Koordinat mantığını gözünde sabitle
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Enlem ve boylamı sadece ezberlemek yetmez. Harita üstünde yatay-dikey
            ilişkiyi, önce enlem sonra boylam okuma düzenini ve kesişimin neden
            mevkii verdiğini görsel olarak oturtmak gerekir.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.08fr) minmax(260px, 0.92fr)",
              gap: 24,
            }}
          >
            <CoordinateGrid
              latDeg={latDeg}
              latMin={latMin}
              lonDeg={lonDeg}
              lonMin={lonMin}
            />

            <GlowCard title="Koordinat simülatörü">
              <div style={{ marginTop: 18 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Latitude minutes
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={0}
                  max={59.9}
                  step={0.1}
                  value={latMin}
                  onChange={(e) => setLatMin(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {latDeg}° {latMin.toFixed(1)}' N
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Longitude minutes
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={0}
                  max={59.9}
                  step={0.1}
                  value={lonMin}
                  onChange={(e) => setLonMin(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {lonDeg}° {lonMin.toFixed(1)}' E
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  padding: "16px 18px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(217,188,119,0.10), rgba(217,188,119,0.04))",
                  border: "1px solid rgba(217,188,119,0.16)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.48)",
                    fontWeight: 800,
                  }}
                >
                  Kural
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#f7d58f",
                    fontWeight: 700,
                  }}
                >
                  Mevki söylenirken önce enlem, sonra boylam verilir. Harita üstünde
                  önce paralel, sonra meridyen mantığını zihne yerleştir.
                </div>
              </div>
            </GlowCard>
          </div>
        </section>
                <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Variation, deviation ve gerçek kuzey ilişkisi
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 820,
              margin: 0,
            }}
          >
            Pusulada gördüğün değer her zaman doğrudan gerçek kuzey değildir.
            Dünya’nın manyetik alanı ve teknenin kendi manyetik etkileri birlikte
            çalışır. Bu farkı anlamadan rota düzeltmesi güvenli yapılamaz.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.08fr) minmax(260px, 0.92fr)",
              gap: 24,
            }}
          >
            <AnimatedCompassRose
              variation={variation}
              deviation={deviation}
            />

            <GlowCard title="Compass correction simulator">
              <div style={{ marginTop: 18 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Variation
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={-15}
                  max={15}
                  step={1}
                  value={variation}
                  onChange={(e) => setVariation(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {variation > 0 ? "+" : ""}
                  {variation}°
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Deviation
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={-10}
                  max={10}
                  step={1}
                  value={deviation}
                  onChange={(e) => setDeviation(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {deviation > 0 ? "+" : ""}
                  {deviation}°
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  padding: "16px 18px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))",
                  border: "1px solid rgba(103,211,255,0.16)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.48)",
                    fontWeight: 800,
                  }}
                >
                  Hatırlatma
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#e0f2fe",
                    fontWeight: 700,
                  }}
                >
                  Variation dünya ile, deviation tekne ile ilgilidir. Gerçek
                  kuzeye dönebilmek için ikisini birlikte düşünmek gerekir.
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Water track, ground track ve set-drift farkı
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 860,
              margin: 0,
            }}
          >
            Haritada çizdiğin rota ile teknede hissettiğin yön aynı olmak zorunda
            değildir. Tekne suya göre başka, yere göre başka iz bırakabilir.
            Akıntı, rüzgar düşmesi ve leeway bunu değiştirir.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.08fr) minmax(260px, 0.92fr)",
              gap: 24,
            }}
          >
            <TrackSimulator
              heading={heading}
              leeway={leeway}
              setDrift={setAngle}
              driftSpeed={driftSpeed}
            />

            <GlowCard title="Track simulator">
              <div style={{ marginTop: 18 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Heading
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={0}
                  max={359}
                  step={1}
                  value={heading}
                  onChange={(e) => setHeading(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {heading.toFixed(0)}°
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Leeway
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={-15}
                  max={15}
                  step={1}
                  value={leeway}
                  onChange={(e) => setLeeway(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {leeway > 0 ? "+" : ""}
                  {leeway.toFixed(0)}°
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Set
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={-20}
                  max={20}
                  step={1}
                  value={setAngle}
                  onChange={(e) => setSetAngle(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {setAngle > 0 ? "+" : ""}
                  {setAngle.toFixed(0)}°
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div
                  style={{
                    fontSize: 12,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                    marginBottom: 10,
                  }}
                >
                  Drift
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={0}
                  max={4}
                  step={0.1}
                  value={driftSpeed}
                  onChange={(e) => setDriftSpeed(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {driftSpeed.toFixed(1)} kn
                </div>
              </div>
            </GlowCard>
          </div>
        </section>
                <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Fix, running fix, EP ve DR sembol mantığı
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 860,
              margin: 0,
            }}
          >
            Harita üzerinde kullanılan mevki işaretleri yalnızca çizim değildir.
            Her biri karar güveni seviyesini gösterir. DR, hesap mevkiidir. EP,
            düzeltilmiş tahmindir. Fix, daha sağlam veriye dayanır. Running fix ise
            zaman ve hareket ilişkisini harita üstünde canlı hale getirir.
          </p>

          <div
            style={{
              marginTop: 26,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.08fr) minmax(260px, 0.92fr)",
              gap: 24,
            }}
          >
            <FixTimeline fixType={fixMode} />

            <GlowCard title="Fix logic selector">
              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gap: 10,
                }}
              >
                {[
                  { id: "fix", label: "Fix" },
                  { id: "running", label: "Running Fix" },
                  { id: "ep", label: "Estimated Position (EP)" },
                  { id: "dr", label: "Dead Reckoning (DR)" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setFixMode(item.id as "fix" | "running" | "ep" | "dr")
                    }
                    style={{
                      textAlign: "left",
                      padding: "14px 16px",
                      borderRadius: 16,
                      border:
                        fixMode === item.id
                          ? "1px solid rgba(103,211,255,0.22)"
                          : "1px solid rgba(255,255,255,0.08)",
                      background:
                        fixMode === item.id
                          ? "linear-gradient(180deg, rgba(103,211,255,0.10), rgba(103,211,255,0.04))"
                          : "rgba(255,255,255,0.04)",
                      color: "#f8fafc",
                      fontWeight: 800,
                      fontSize: 14,
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <div
                style={{
                  marginTop: 22,
                  padding: "16px 18px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(217,188,119,0.10), rgba(217,188,119,0.04))",
                  border: "1px solid rgba(217,188,119,0.16)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.48)",
                    fontWeight: 800,
                  }}
                >
                  Eğitim mantığı
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: "#f7d58f",
                    fontWeight: 700,
                  }}
                >
                  Bir kaptan haritadaki sembolü yalnızca okumaz; o sembolün ne kadar
                  güven ürettiğini de bilir. İşaret dili, karar kalitesinin
                  görünür yüzüdür.
                </div>
              </div>
            </GlowCard>
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Harita sembol dili: görsel karar sistemi
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 860,
              margin: 0,
            }}
          >
            Kaya, batık, marina, balık çiftliği, çapa yeri, belirgin kara objesi,
            yaklaşma notu, yasak saha ve şamandıra işaretleri; hepsi kaptanın
            beyninde farklı risk ve emniyet çağrışımı üretir. Harita dili bu yüzden
            bir sembol listesi değil, bir karar alfabesidir.
          </p>

          <div style={{ marginTop: 26 }}>
            <SymbolLanguageBoard
              activeSymbol={activeSymbol}
              setActiveSymbol={setActiveSymbol}
            />
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 900,
              marginBottom: 16,
            }}
          >
            Sistemin gerçek gücü
          </h2>

          <p
            style={{
              color: "rgba(226,232,240,0.82)",
              lineHeight: 1.8,
              fontSize: 15,
              maxWidth: 780,
              margin: 0,
            }}
          >
            Gerçek denizcilik tek bir konudan oluşmaz. Trafik okuma, navigasyon,
            kâğıt harita disiplini, rota planlama, manevra ve acil durum yönetimi
            birlikte çalıştığında kaptanlık düşüncesi oluşur.
          </p>

          <div
            style={{
              marginTop: 30,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 16,
            }}
          >
            {systemPowerLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                style={{
                  textDecoration: "none",
                }}
              >
                <div
                  className="system-card wow-card"
                  style={{
                    padding: 18,
                    borderRadius: 16,
                    background:
                      "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.03))",
                    border: "1px solid rgba(255,255,255,0.08)",
                    height: "100%",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "radial-gradient(circle at top right, rgba(103,211,255,0.10), transparent 42%)",
                      opacity: 0.9,
                      pointerEvents: "none",
                    }}
                  />

                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        width: 42,
                        height: 42,
                        borderRadius: 12,
                        display: "grid",
                        placeItems: "center",
                        background:
                          "linear-gradient(180deg, rgba(103,211,255,0.14), rgba(103,211,255,0.06))",
                        border: "1px solid rgba(103,211,255,0.14)",
                        boxShadow: "0 0 24px rgba(103,211,255,0.08)",
                        fontSize: 20,
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>

                    <div
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: "50%",
                        background: "#67d3ff",
                        boxShadow:
                          "0 0 14px rgba(103,211,255,0.65), 0 0 28px rgba(103,211,255,0.18)",
                        opacity: 0.95,
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  <h3
                    style={{
                      position: "relative",
                      zIndex: 2,
                      margin: 0,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#f8fafc",
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      position: "relative",
                      zIndex: 2,
                      marginTop: 8,
                      fontSize: 13,
                      color: "rgba(226,232,240,0.74)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <GlowCard title="Bu rota bugün mümkün mü?">
            <p
              style={{
                marginTop: 10,
                marginBottom: 0,
                color: "rgba(226,232,240,0.78)",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              Rota planlamak tek başına yeterli değildir. Aynı rota farklı hava
              koşullarında tamamen farklı sonuçlar doğurur. Kâğıt harita, koordinat,
              DR ve fix bilgisi seni güçlü yapar; ama meteoroloji kararı rotanın
              uygulanabilir olup olmadığını belirler.
            </p>

            <Link
              href="/guide/denizde-meteoroloji"
              style={{
                display: "inline-block",
                marginTop: 16,
                padding: "12px 18px",
                borderRadius: 12,
                background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
                color: "#04121c",
                fontWeight: 800,
                textDecoration: "none",
              }}
            >
              Meteorolojiyi öğren →
            </Link>
          </GlowCard>
        </section>
                <section style={{ marginTop: 80 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            En sık yapılan hatalar
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {commonMistakes.map((item) => (
              <div
                key={item}
                className="wow-card"
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(226,232,240,0.82)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 80 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            Kısa kavram tablosu
          </h2>

          <div
            style={{
              marginTop: 18,
              borderRadius: 22,
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.94))",
            }}
          >
            {glossaryRows.map((row, index) => (
              <div
                key={row.term}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(220px, 0.75fr) minmax(260px, 1.25fr)",
                  gap: 20,
                  padding: "16px 18px",
                  borderTop:
                    index === 0 ? "none" : "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 800,
                    color: "#f8fafc",
                    lineHeight: 1.5,
                  }}
                >
                  {row.term}
                </div>
                <div
                  style={{
                    fontSize: 14,
                    color: "rgba(226,232,240,0.76)",
                    lineHeight: 1.75,
                  }}
                >
                  {row.meaning}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div
          style={{
            marginTop: 80,
            padding: 30,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              width: "28%",
              background:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.06), transparent)",
              animation: "shimmerSweep 3.8s linear infinite",
              pointerEvents: "none",
            }}
          />

          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Kâğıt harita ve rota planlamayı gerçek denizde büyütmek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 760,
              marginInline: "auto",
            }}
          >
            Harita bilgisi, koordinat okuma, DR, EP, fix, running fix, akıntı
            hesabı, traffic separation scheme ve meteoroloji birlikte çalıştığında
            gerçek kaptanlık zihni oluşur. Açık deniz eğitimleri bu yüzden yalnızca
            pratik değil, karar kalitesi eğitimi de verir.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/training/offshore-skipper"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                textDecoration: "none",
                fontWeight: 900,
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              Offshore Eğitimi
            </Link>

            <Link
              href="/guide"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Rehbere geri dön
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}