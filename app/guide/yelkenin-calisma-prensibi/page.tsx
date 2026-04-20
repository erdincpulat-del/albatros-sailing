"use client";

import { useMemo, useState } from "react";

type PointOfSail =
  | "closeHauled"
  | "closeReach"
  | "beamReach"
  | "broadReach"
  | "running";

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

function getPointOfSail(angle: number): PointOfSail {
  if (angle <= 40) return "closeHauled";
  if (angle <= 70) return "closeReach";
  if (angle <= 110) return "beamReach";
  if (angle <= 145) return "broadReach";
  return "running";
}

function getPointLabel(point: PointOfSail) {
  switch (point) {
    case "closeHauled":
      return "Orsa Yakını";
    case "closeReach":
      return "Dar Apaz";
    case "beamReach":
      return "Apaz";
    case "broadReach":
      return "Geniş Apaz";
    case "running":
      return "Pupa";
  }
}

function getFlowState(trim: number, angle: number) {
  const ideal =
    angle <= 40 ? 78 : angle <= 70 ? 64 : angle <= 110 ? 50 : angle <= 145 ? 36 : 22;

  const diff = trim - ideal;

  if (diff < -15) {
    return {
      key: "undertrimmed",
      title: "Açık / Güç Kaçırıyor",
      description:
        "Yelken fazla açık. Akış tam yönetilemiyor, güç üretimi düşüyor ve rüzgârın bir kısmı boşa gidiyor.",
    };
  }

  if (diff > 15) {
    return {
      key: "overtrimmed",
      title: "Kapalı / Akış Kopuyor",
      description:
        "Yelken fazla kapalı. Hücum açısı bozuluyor, akış ayrılıyor ve stall karakteri başlıyor.",
    };
  }

  return {
    key: "attached",
    title: "Bağlı Akış / Verimli Çalışma",
    description:
      "Yelken doğru açı bandında. Akış yelken yüzeyi boyunca daha düzenli ilerliyor ve kuvvet daha verimli üretiliyor.",
    };
}

function getSailPhysics(windAngle: number, trim: number, windSpeed: number) {
  const point = getPointOfSail(windAngle);
  const flow = getFlowState(trim, windAngle);

  const angleFactor =
    point === "closeHauled"
      ? 0.72
      : point === "closeReach"
      ? 0.86
      : point === "beamReach"
      ? 1
      : point === "broadReach"
      ? 0.9
      : 0.68;

  const flowFactor =
    flow.key === "attached" ? 1 : flow.key === "undertrimmed" ? 0.78 : 0.7;

  const driveForce = clamp((windSpeed / 24) * 100 * angleFactor * flowFactor, 5, 100);

  const heelBase =
    point === "closeHauled"
      ? 0.88
      : point === "closeReach"
      ? 1
      : point === "beamReach"
      ? 0.94
      : point === "broadReach"
      ? 0.66
      : 0.34;

  const heelForce = clamp((windSpeed / 24) * 100 * heelBase * flowFactor, 3, 100);

  const rudderLoad =
    flow.key === "attached"
      ? clamp(heelForce * 0.62, 5, 100)
      : clamp(heelForce * 0.78, 5, 100);

  const leeway =
    point === "closeHauled"
      ? clamp(heelForce * 0.72, 6, 100)
      : point === "closeReach"
      ? clamp(heelForce * 0.52, 5, 100)
      : point === "beamReach"
      ? clamp(heelForce * 0.34, 4, 100)
      : clamp(heelForce * 0.18, 3, 100);

  const apparentShift = clamp(windAngle - windSpeed * 0.55, 12, 180);

  const lesson =
    point === "closeHauled"
      ? "Bu açıda yelken kanat gibi çalışır. Verim, akışın bağlı kalmasına ve doğru trim disiplinine çok bağlıdır."
      : point === "closeReach"
      ? "Dar apaz, güç ile kontrolün birlikte hissedildiği banddır. Fazla trim veya yetersiz trim çok hızlı fark yaratır."
      : point === "beamReach"
      ? "Apaz genelde en dengeli güç hissini verir. Yelken doğru ayarlıysa ilerletici kuvvet net şekilde artar."
      : point === "broadReach"
      ? "Geniş apazda sürükleme ve taşıma karakteri birlikte hissedilir. Kontrol hâlâ önemlidir ama yatış baskısı azalır."
      : "Pupada yelken daha çok itme karakterine yaklaşır. Verim farklıdır; yön ve stabilite daha kritik hale gelir.";

  return {
    point,
    flow,
    driveForce,
    heelForce,
    rudderLoad,
    leeway,
    apparentShift,
    lesson,
  };
}

const theoryCards = [
  {
    title: "Yelken neden çalışır?",
    text: "Yelken, rüzgârı sadece yakalayan bir bez değil; hava akışını yöneten aerodinamik bir yüzeydir. Doğru açı ve doğru form oluştuğunda kuvvet üretir.",
  },
  {
    title: "İtiş mi, çekiş mi?",
    text: "Pupa tarafında itme karakteri daha baskın hissedilir. Orsa ve apaz bandında ise yelken daha çok bir kanat gibi davranır; akış ve basınç farkı daha önemlidir.",
  },
  {
    title: "Neden tekne yatar?",
    text: "Yelkenin ürettiği kuvvetin tamamı ileri gitmez. Bir kısmı yana ve aşağı/yukarı etkiler doğurur. Bu da yatış, leeway ve dümen yükü oluşturur.",
  },
  {
    title: "Trim neden bu kadar önemli?",
    text: "Yelken çok açıksa güç kaçar, çok kapalıysa akış kopar. Asıl performans doğru hücum açısında ve akışın bağlı kaldığı bölgede oluşur.",
  },
];

const principleBlocks = [
  {
    badge: "AIRFLOW",
    title: "Akış bağlı kalırsa yelken çalışır.",
    body: "Yelkenin iki yüzünden geçen hava, doğru trim bandında daha düzenli akar. Bu düzen bozulduğunda verim düşer. Eğitimin ana konusu, akışı görmek ve korumaktır.",
  },
  {
    badge: "ANGLE OF ATTACK",
    title: "Hücum açısı fazla büyürse stall başlar.",
    body: "Yelken aşırı kapatıldığında hava akışı yüzeyi takip edemez. Bu ayrılma, gücün düşmesine ve teknenin kaba ama verimsiz davranmasına neden olur.",
  },
  {
    badge: "SHAPE",
    title: "Karın ve form, güç karakterini değiştirir.",
    body: "Draft yeri, yelkenin ne kadar derin olduğu ve üst-alt bölümlerin nasıl çalıştığı; hız, denge ve dümen hissini doğrudan etkiler.",
  },
  {
    badge: "CONTROL",
    title: "İyi trim sadece hız değil, komuta kalitesidir.",
    body: "Doğru ayarlı yelken daha sessiz, daha dengeli ve daha öngörülebilir çalışır. Kaptanlık burada başlar: gücü almak kadar onu yönetmek gerekir.",
  },
];

export default function SailAerodynamicsPage() {
  const [windAngle, setWindAngle] = useState(82);
  const [trim, setTrim] = useState(52);
  const [windSpeed, setWindSpeed] = useState(14);

  const model = useMemo(
    () => getSailPhysics(windAngle, trim, windSpeed),
    [windAngle, trim, windSpeed]
  );

  const sailRotation = useMemo(() => {
    const angle =
      model.point === "closeHauled"
        ? 18
        : model.point === "closeReach"
        ? 28
        : model.point === "beamReach"
        ? 42
        : model.point === "broadReach"
        ? 58
        : 76;

    const trimAdjustment = (50 - trim) * 0.45;
    return clamp(angle + trimAdjustment, 8, 84);
  }, [model.point, trim]);

  const airflowTone =
    model.flow.key === "attached"
      ? {
          stroke: "rgba(93,255,184,0.95)",
          soft: "rgba(93,255,184,0.22)",
        }
      : model.flow.key === "undertrimmed"
      ? {
          stroke: "rgba(255,205,95,0.95)",
          soft: "rgba(255,205,95,0.22)",
        }
      : {
          stroke: "rgba(255,111,111,0.95)",
          soft: "rgba(255,111,111,0.22)",
        };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#14304d_0%,_#09131f_45%,_#050a11_100%)] text-white">
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="max-w-6xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
            Yelken Aerodinamiği • Rüzgâr Etkisi • Eğitim Modülü
          </div>

          <h1 className="mt-5 max-w-6xl text-4xl font-semibold leading-[1.02] md:text-7xl">
            Rüzgâr yelkeni doldurmaz sadece;
            <span className="block">tekneyi konuşturur.</span>
          </h1>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-white/72 md:text-lg md:leading-8">
            Bu sayfa, rüzgârın yelken üzerinde nasıl kuvvet ürettiğini, neden bazen
            güç kazandırıp bazen akışı kopardığını ve farklı seyir açılarında neden
            bambaşka sonuçlar doğurduğunu öğretir. Amaç, yelkeni çekmek değil;
            yelkeni çalıştırmayı anlamaktır.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {theoryCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[26px] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.08fr_0.92fr]">
          <section className="rounded-[34px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,16,30,0.96),rgba(8,17,31,0.98))] p-5 shadow-[0_0_50px_rgba(52,180,255,0.08)] backdrop-blur md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Sail Force Engine
                </p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Canlı rüzgâr / trim simülasyonu
                </h2>
              </div>

              <div className="rounded-[20px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-sm">
                <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/65">
                  Active Point of Sail
                </div>
                <div className="mt-2 font-semibold text-white">
                  {getPointLabel(model.point)}
                </div>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,23,44,0.96),rgba(8,14,24,0.98))] p-5">
              <style>{`
                @keyframes windStream {
                  0% {
                    stroke-dashoffset: 0;
                    opacity: 0.35;
                  }
                  50% {
                    opacity: 1;
                  }
                  100% {
                    stroke-dashoffset: -80;
                    opacity: 0.35;
                  }
                }

                @keyframes pressurePulse {
                  0% { opacity: 0.16; transform: scale(0.98); }
                  50% { opacity: 0.34; transform: scale(1.02); }
                  100% { opacity: 0.16; transform: scale(0.98); }
                }

                @keyframes vectorGlow {
                  0% { opacity: 0.72; }
                  50% { opacity: 1; }
                  100% { opacity: 0.72; }
                }
              `}</style>

              <div className="mb-4 text-[11px] uppercase tracking-[0.18em] text-white/45">
                Wind / Sail Relationship
              </div>

              <svg viewBox="0 0 1000 520" className="w-full" fill="none">
                <defs>
                  <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="rgba(90,184,255,0.18)" />
                    <stop offset="100%" stopColor="rgba(8,49,95,0.58)" />
                  </linearGradient>
                  <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#f8fbff" />
                    <stop offset="100%" stopColor="#ced8e5" />
                  </linearGradient>
                  <radialGradient id="pressureGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor={airflowTone.soft} />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>

                <circle cx="210" cy="100" r="140" fill="rgba(103,211,255,0.10)" />
                <circle cx="800" cy="90" r="110" fill="rgba(130,150,255,0.08)" />

                <path
                  d="M 0 370 C 120 350, 240 392, 360 372 C 470 354, 590 390, 710 372 C 810 356, 900 384, 1000 370 L 1000 520 L 0 520 Z"
                  fill="url(#seaGrad)"
                />
                <path
                  d="M 0 388 C 120 366, 240 406, 360 388 C 470 372, 590 406, 710 388 C 810 374, 900 402, 1000 390"
                  stroke="rgba(172,230,255,0.18)"
                  strokeWidth="2"
                />

                <path
                  d="M 305 325 L 520 325 C 560 325 604 342 640 370 L 340 370 C 320 360 312 346 305 325 Z"
                  fill="#141e2d"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                />

                <rect
                  x="445"
                  y="150"
                  width="8"
                  height="176"
                  rx="4"
                  fill="#dbe6f3"
                />

                <line
                  x1="449"
                  y1="282"
                  x2="565"
                  y2="300"
                  stroke="#dbe6f3"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <g transform={`rotate(${sailRotation} 449 282)`}>
                  <path
                    d="M 449 160 Q 480 230 565 300 L 450 282 Z"
                    fill="url(#sailGrad)"
                    stroke="rgba(255,255,255,0.48)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 454 176 Q 486 232 548 292"
                    stroke="rgba(105,125,145,0.38)"
                    strokeWidth="2"
                  />
                  <path
                    d="M 452 206 Q 490 248 532 289"
                    stroke="rgba(105,125,145,0.26)"
                    strokeWidth="2"
                  />
                </g>

                {/* incoming wind streams */}
                {Array.from({ length: 7 }).map((_, i) => {
                  const y = 98 + i * 38;
                  const x = 48 + i * 10;
                  const len = 210 + windSpeed * 5.5;
                  return (
                    <g key={i}>
                      <line
                        x1={x}
                        y1={y}
                        x2={x + len}
                        y2={y}
                        stroke="rgba(123,224,255,0.92)"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeDasharray="18 16"
                        style={{
                          animation: `windStream ${Math.max(
                            0.8,
                            2.2 - windSpeed * 0.04
                          )}s linear infinite`,
                        }}
                      />
                      <path
                        d={`M ${x + len - 14} ${y - 8} L ${x + len} ${y} L ${x + len - 14} ${y + 8}`}
                        stroke="rgba(123,224,255,0.92)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  );
                })}

                {/* pressure zone near sail */}
                <g style={{ animation: "pressurePulse 2.6s ease-in-out infinite" }}>
                  <ellipse
                    cx="498"
                    cy="246"
                    rx={56 + model.driveForce * 0.22}
                    ry={30 + model.driveForce * 0.12}
                    fill="url(#pressureGrad)"
                  />
                </g>

                {/* attached / detached flow lines around sail */}
                <path
                  d="M 382 170 C 428 184, 468 209, 520 248"
                  stroke={airflowTone.stroke}
                  strokeWidth="4"
                  strokeDasharray="14 12"
                  strokeLinecap="round"
                  style={{
                    animation: "windStream 1.8s linear infinite",
                  }}
                />
                <path
                  d="M 390 220 C 437 232, 468 252, 516 284"
                  stroke={
                    model.flow.key === "attached"
                      ? airflowTone.stroke
                      : model.flow.key === "undertrimmed"
                      ? "rgba(255,205,95,0.95)"
                      : "rgba(255,111,111,0.95)"
                  }
                  strokeWidth="4"
                  strokeDasharray="14 12"
                  strokeLinecap="round"
                  style={{
                    animation: `windStream ${
                      model.flow.key === "attached" ? "1.8s" : "1.1s"
                    } linear infinite`,
                  }}
                />

                {/* separation hint for stall */}
                {model.flow.key === "overtrimmed" ? (
                  <>
                    <path
                      d="M 474 210 C 502 206, 526 214, 544 238"
                      stroke="rgba(255,111,111,0.92)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="8 10"
                      style={{ animation: "windStream 1s linear infinite" }}
                    />
                    <path
                      d="M 484 242 C 514 238, 538 246, 554 270"
                      stroke="rgba(255,111,111,0.78)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="8 10"
                      style={{ animation: "windStream 0.9s linear infinite" }}
                    />
                  </>
                ) : null}

                {/* force vector */}
                <g style={{ animation: "vectorGlow 2.1s ease-in-out infinite" }}>
                  <line
                    x1="515"
                    y1="250"
                    x2={515 + model.driveForce * 2.1}
                    y2={250 - model.heelForce * 0.7}
                    stroke="rgba(255,215,117,0.96)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  <path
                    d={`M ${515 + model.driveForce * 2.1 - 14} ${250 - model.heelForce * 0.7 - 10}
                        L ${515 + model.driveForce * 2.1} ${250 - model.heelForce * 0.7}
                        L ${515 + model.driveForce * 2.1 - 18} ${250 - model.heelForce * 0.7 + 8}`}
                    stroke="rgba(255,215,117,0.96)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>

                <text x="74" y="92" fill="#c8f2ff" fontSize="18" fontWeight="600">
                  True Wind
                </text>
                <text x="610" y="190" fill="#ffd875" fontSize="18" fontWeight="600">
                  Sail Force Vector
                </text>

                <text
                  x="610"
                  y="218"
                  fill={airflowTone.stroke}
                  fontSize="15"
                  fontWeight="600"
                >
                  {model.flow.key === "attached"
                    ? "Attached flow"
                    : model.flow.key === "undertrimmed"
                    ? "Power leaking"
                    : "Flow separation / stall"}
                </text>
              </svg>

              <div className="mt-5 grid gap-4 md:grid-cols-4">
                <DataCell label="Rüzgâr Açısı" value={`${windAngle.toFixed(0)}°`} />
                <DataCell label="Trim" value={`${trim.toFixed(0)}%`} />
                <DataCell label="Rüzgâr Hızı" value={`${windSpeed.toFixed(0)} kt`} />
                <DataCell label="Akış Durumu" value={model.flow.title} />
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <Panel title="Canlı Girdi Alanı">
              <div className="grid gap-6">
                <SliderBlock
                  label="Rüzgâr Açısı"
                  value={windAngle}
                  min={20}
                  max={180}
                  onChange={setWindAngle}
                  hint="Rüzgârın tekneye geliş açısı"
                />
                <SliderBlock
                  label="Yelken Trim"
                  value={trim}
                  min={0}
                  max={100}
                  onChange={setTrim}
                  hint="Yelkenin ne kadar kapalı / açık olduğu"
                />
                <SliderBlock
                  label="Rüzgâr Hızı"
                  value={windSpeed}
                  min={4}
                  max={24}
                  onChange={setWindSpeed}
                  hint="Anlık rüzgâr kuvveti"
                />
              </div>
            </Panel>

            <Panel title="Canlı Eğitim Yorumu">
              <div className="space-y-4">
                <InfoCard
                  label="Seyir Bandı"
                  value={getPointLabel(model.point)}
                  hint="Point of sail"
                />
                <InfoCard
                  label="Akış Yorumu"
                  value={model.flow.title}
                  hint="Flow state"
                />
                <InfoCard
                  label="Güç Üretimi"
                  value={`${model.driveForce.toFixed(0)}%`}
                  hint="Drive force"
                />
                <InfoCard
                  label="Yatış Eğilimi"
                  value={`${model.heelForce.toFixed(0)}%`}
                  hint="Heel load"
                />
              </div>

              <div className="mt-5 rounded-[22px] border border-cyan-300/15 bg-cyan-300/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                  Lesson Read
                </div>
                <p className="mt-3 text-sm leading-7 text-white/75">{model.lesson}</p>
              </div>

              <div className="mt-4 rounded-[22px] border border-white/10 bg-white/5 p-4">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
                  Flow Detail
                </div>
                <p className="mt-3 text-sm leading-7 text-white/74">
                  {model.flow.description}
                </p>
              </div>
            </Panel>
          </section>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Core Principles
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Yelkenin çalışma prensibini belirleyen ana katmanlar
            </h2>

            <div className="mt-6 grid gap-4">
              {principleBlocks.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">
                    {item.badge}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/74">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Operational Effects
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Tekne üzerindeki pratik etkiler
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <MetricCard label="İlerletici Kuvvet" value={`${model.driveForce.toFixed(0)}%`} />
              <MetricCard label="Yatış Eğilimi" value={`${model.heelForce.toFixed(0)}%`} />
              <MetricCard label="Dümen Yükü" value={`${model.rudderLoad.toFixed(0)}%`} />
              <MetricCard label="Leeway Eğilimi" value={`${model.leeway.toFixed(0)}%`} />
              <MetricCard label="Görünen Rüzgâr Kayması" value={`${model.apparentShift.toFixed(0)}°`} />
              <MetricCard label="Trim Durumu" value={model.flow.title} />
            </div>

            <div className="mt-6 rounded-[24px] border border-cyan-300/15 bg-cyan-300/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                Captain Note
              </div>
              <p className="mt-3 text-sm leading-7 text-white/75">
                İyi trim sadece daha hızlı gitmek değildir. Daha az dümen yükü, daha
                temiz akış, daha dengeli yatış ve daha öngörülebilir tekne davranışı
                üretir. Gerçek komuta burada başlar.
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function Panel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function DataCell({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function InfoCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-base font-semibold text-white">{value}</div>
      {hint ? (
        <div className="mt-2 text-xs uppercase tracking-[0.14em] text-cyan-200/65">
          {hint}
        </div>
      ) : null}
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function SliderBlock({
  label,
  value,
  min,
  max,
  onChange,
  hint,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <div className="mt-3 flex items-center gap-4">
        <input
          type="range"
          min={min}
          max={max}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-cyan-300"
        />
        <div className="min-w-[86px] rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-sm font-medium">
          {value}
        </div>
      </div>
      {hint ? <div className="mt-2 text-xs leading-6 text-white/55">{hint}</div> : null}
    </div>
  );
}