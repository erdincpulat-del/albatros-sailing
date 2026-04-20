"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import GuideCta from "@/components/guide/GuideCta";

const coreBlocks = [
  {
    title: "Sextant nedir?",
    text: "Sextant, gök cismi ile ufuk arasındaki açıyı ölçerek mevki hesabına temel oluşturan klasik seyir aletidir. Özellikle açık deniz navigasyonunun tarihsel ve profesyonel omurgalarından biridir.",
  },
  {
    title: "Neden hâlâ önemlidir?",
    text: "Modern teknelerde GPS ve elektronik sistemler baskın olsa da sextant, denizcilikte yedek düşünme sistemini temsil eder. Elektroniğin bittiği yerde zihnin ve metodun devam etmesi gerektiğini öğretir.",
  },
  {
    title: "Asıl öğrettiği şey nedir?",
    text: "Sextant sadece bir alet değil, sistematik navigasyon düşüncesidir. Açı, zaman, gözlem ve hesap arasındaki ilişkiyi kurar.",
  },
  {
    title: "Kime değer katar?",
    text: "Sextant bilgisi özellikle açık deniz düşüncesi geliştirmek isteyen, profesyonel kaptanlık yaklaşımını derinleştirmek isteyen ve navigasyonu yüzeysel değil köklü öğrenmek isteyen kişiler için değerlidir.",
  },
];

const learningPoints = [
  "Ufuk çizgisi ile gök cismi arasındaki açıyı anlamak",
  "Gözlem zamanının neden kritik olduğunu kavramak",
  "Navigasyonun yalnızca ekrana bakmak olmadığını görmek",
  "Elektronik sistemler olmadan da düşünme disiplini geliştirmek",
];

const whyPremium = [
  "Sextant bilgisi seni ortalama kullanıcıdan ayırır",
  "Navigasyonun kök mantığını anlamanı sağlar",
  "Açık deniz düşüncesini güçlendirir",
  "Kaptanlıkta zihinsel derinlik ve disiplin kazandırır",
];

const misconceptions = [
  "Sextant sadece nostaljik bir objedir",
  "GPS varken sextant öğrenmek gereksizdir",
  "Bu bilgi sadece eski denizciler içindir",
  "Sextant öğrenmek yalnızca astronomi bilgisi gerektirir",
];

const quizQuestions = [
  {
    question: "Sextant temelde neyi ölçer?",
    options: [
      "İki liman arası mesafeyi",
      "Gök cismi ile ufuk arasındaki açıyı",
      "Rüzgâr yönünü",
      "Deniz derinliğini",
    ],
    answer: 1,
  },
  {
    question: "Enlem hesabında öğle Güneşi neden önemlidir?",
    options: [
      "En yüksek yüksekliğe ulaştığı için",
      "Rüzgâr durduğu için",
      "Pusula daha doğru çalıştığı için",
      "Dalga azaldığı için",
    ],
    answer: 0,
  },
  {
    question: "Boylam hesabında kritik unsur nedir?",
    options: ["Tekne boyu", "Doğru zaman", "Rüzgâr gücü", "Su sıcaklığı"],
    answer: 1,
  },
  {
    question: "Sextant bilgisinin modern denizcide en büyük katkısı nedir?",
    options: [
      "Daha hızlı marina bağlama",
      "Elektronik sistemler olmadan da navigasyon düşüncesi kurmak",
      "Motor bakımını azaltmak",
      "Otomatik rota çizmek",
    ],
    answer: 1,
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function formatSignedDegrees(value: number, positiveLabel: string, negativeLabel: string) {
  const abs = Math.abs(value).toFixed(1);
  return `${abs}° ${value >= 0 ? positiveLabel : negativeLabel}`;
}

function HorizonScene({
  ho,
  declination,
}: {
  ho: number;
  declination: number;
}) {
  const sunY = 180 - ho * 1.55;
  const lineHeight = ho * 1.55;
  const latitude = 90 - ho + declination;

  return (
    <div
      style={{
        position: "relative",
        height: 340,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 0%, rgba(217,188,119,0.18), transparent 34%), linear-gradient(180deg, rgba(5,11,20,0.94), rgba(7,17,31,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 0%, transparent 64%, rgba(103,211,255,0.04) 64%, rgba(103,211,255,0.08) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 74,
          height: 2,
          background: "rgba(255,255,255,0.28)",
          boxShadow: "0 0 24px rgba(103,211,255,0.10)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 74,
          width: 2,
          height: lineHeight,
          background: "linear-gradient(180deg, #67d3ff, #d9bc77)",
          transformOrigin: "bottom center",
          transform: `rotate(${-ho}deg)`,
          boxShadow: "0 0 18px rgba(103,211,255,0.22)",
        }}
      />

      <div
        className="sun-orb"
        style={{
          position: "absolute",
          left: `calc(50% + ${Math.cos((ho * Math.PI) / 180) * 120}px)`,
          bottom: sunY,
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "#facc15",
          boxShadow:
            "0 0 18px rgba(250,204,21,0.45), 0 0 45px rgba(217,188,119,0.25)",
          transform: "translateX(-50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: 70,
          width: 150,
          height: 150,
          borderLeft: "2px solid rgba(217,188,119,0.45)",
          borderBottom: "2px solid rgba(217,188,119,0.45)",
          borderBottomLeftRadius: 150,
          transform: "translateX(-2px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "calc(50% + 92px)",
          bottom: 126,
          padding: "8px 12px",
          borderRadius: 999,
          background: "rgba(217,188,119,0.10)",
          border: "1px solid rgba(217,188,119,0.18)",
          color: "#f7d58f",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: 0.6,
        }}
      >
        Ho {ho.toFixed(1)}°
      </div>

      <div
        style={{
          position: "absolute",
          left: 22,
          top: 20,
          display: "grid",
          gap: 10,
        }}
      >
        <MetricBadge label="Gözlenen yükseklik" value={`${ho.toFixed(1)}°`} />
        <MetricBadge
          label="Declination"
          value={formatSignedDegrees(declination, "N", "S")}
        />
        <MetricBadge
          label="Tahmini enlem"
          value={formatSignedDegrees(latitude, "N", "S")}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 18,
          bottom: 18,
          maxWidth: 270,
          padding: "16px 18px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(226,232,240,0.82)",
          fontSize: 13,
          lineHeight: 1.65,
        }}
      >
        Öğle Güneşi yükseldikçe ekvatora yaklaşırsın. Declination ile birlikte
        okunduğunda sextant, enlem düşüncesini somut hale getirir.
      </div>
    </div>
  );
}

function LongitudeScene({
  utcHour,
  localHour,
}: {
  utcHour: number;
  localHour: number;
}) {
  const diff = localHour - utcHour;
  const longitude = diff * 15;
  const markerPosition = clamp(50 + longitude / 3.6, 6, 94);

  return (
    <div
      style={{
        position: "relative",
        height: 340,
        borderRadius: 24,
        overflow: "hidden",
        background:
          "radial-gradient(circle at 50% 20%, rgba(103,211,255,0.10), transparent 30%), linear-gradient(180deg, rgba(5,11,20,0.94), rgba(7,17,31,0.98))",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="earth-core"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 210,
          height: 210,
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 40% 35%, rgba(103,211,255,0.28), rgba(8,15,24,0.94) 70%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 0 40px rgba(103,211,255,0.08)",
        }}
      >
        <div
          className="earth-rotate"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          {[20, 40, 60, 80].map((left) => (
            <div
              key={left}
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: `${left}%`,
                width: 1,
                background: "rgba(255,255,255,0.10)",
              }}
            />
          ))}
          {[25, 50, 75].map((top) => (
            <div
              key={top}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: `${top}%`,
                height: 1,
                background: "rgba(255,255,255,0.08)",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 16,
          transform: "translateX(-50%)",
          padding: "8px 14px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: 0.7,
          color: "#e2e8f0",
        }}
      >
        Greenwich reference vs local time
      </div>

      <div
        style={{
          position: "absolute",
          left: "8%",
          right: "8%",
          bottom: 42,
          height: 4,
          borderRadius: 999,
          background: "rgba(255,255,255,0.10)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: `${markerPosition}%`,
            top: "50%",
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#67d3ff",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 16px rgba(103,211,255,0.45)",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 24,
          top: 56,
          display: "grid",
          gap: 10,
        }}
      >
        <MetricBadge label="UTC" value={`${utcHour.toFixed(1)} h`} />
        <MetricBadge label="Yerel saat" value={`${localHour.toFixed(1)} h`} />
        <MetricBadge label="Saat farkı" value={`${diff.toFixed(1)} h`} />
        <MetricBadge
          label="Tahmini boylam"
          value={formatSignedDegrees(longitude, "E", "W")}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 18,
          bottom: 18,
          maxWidth: 270,
          padding: "16px 18px",
          borderRadius: 18,
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "rgba(226,232,240,0.82)",
          fontSize: 13,
          lineHeight: 1.65,
        }}
      >
        Dünya 1 saatte yaklaşık 15° döner. İşte bu yüzden boylam, açının yanında
        doğru zaman bilgisini de ister.
      </div>
    </div>
  );
}

function MetricBadge({
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
        minWidth: 168,
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

function InstrumentPanel({
  activePart,
  setActivePart,
}: {
  activePart: string;
  setActivePart: (value: string) => void;
}) {
  const partData: Record<string, { title: string; text: string }> = {
    frame: {
      title: "Frame",
      text: "Sextantın gövdesi tüm ölçüm geometrisini taşır. Yapısal doğruluk, ölçüm güveninin temelidir.",
    },
    arc: {
      title: "Graduated Arc",
      text: "Dereceli yay, ölçülen açının okunmasını sağlar. Navigasyon düşüncesinde açı, soyut değil sayısal gerçekliktir.",
    },
    index: {
      title: "Index Arm",
      text: "Hareketli kol, gök cismini ufka indirirken gerçek ölçüm ilişkisini kurar.",
    },
    mirrors: {
      title: "Mirrors",
      text: "Aynalar, ufuk ve gök cismini aynı düzleme taşır. Sextantın en zeki yanı budur.",
    },
    telescope: {
      title: "Telescope",
      text: "Gözlemi netleştirir. Ama asıl güç sadece görmek değil, doğru yorumlamaktır.",
    },
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(320px, 1.05fr) minmax(260px, 0.95fr)",
        gap: 24,
      }}
    >
      <div
        style={{
          position: "relative",
          minHeight: 380,
          borderRadius: 26,
          overflow: "hidden",
          background:
            "radial-gradient(circle at 20% 20%, rgba(217,188,119,0.12), transparent 28%), linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 72,
            top: 72,
            width: 190,
            height: 190,
            borderLeft: "10px solid rgba(217,188,119,0.90)",
            borderBottom: "10px solid rgba(217,188,119,0.90)",
            borderBottomLeftRadius: 220,
            boxShadow: "0 0 24px rgba(217,188,119,0.12)",
          }}
          className={activePart === "frame" ? "part-active" : "part-static"}
          onMouseEnter={() => setActivePart("frame")}
        />

        <div
          style={{
            position: "absolute",
            left: 88,
            top: 88,
            width: 160,
            height: 160,
            borderLeft: "2px dashed rgba(255,255,255,0.15)",
            borderBottom: "2px dashed rgba(255,255,255,0.15)",
            borderBottomLeftRadius: 180,
          }}
          className={activePart === "arc" ? "part-active" : "part-static"}
          onMouseEnter={() => setActivePart("arc")}
        />

        <div
          style={{
            position: "absolute",
            left: 178,
            top: 118,
            width: 4,
            height: 144,
            background: "#d9bc77",
            transform: "rotate(22deg)",
            transformOrigin: "top center",
            boxShadow: "0 0 14px rgba(217,188,119,0.18)",
          }}
          className={activePart === "index" ? "part-active" : "part-static"}
          onMouseEnter={() => setActivePart("index")}
        />

        <div
          style={{
            position: "absolute",
            left: 196,
            top: 114,
            width: 18,
            height: 28,
            borderRadius: 6,
            background: "rgba(255,255,255,0.75)",
            boxShadow: "0 0 16px rgba(255,255,255,0.16)",
          }}
          className={activePart === "mirrors" ? "part-active" : "part-static"}
          onMouseEnter={() => setActivePart("mirrors")}
        />

        <div
          style={{
            position: "absolute",
            left: 126,
            top: 224,
            width: 108,
            height: 8,
            borderRadius: 999,
            background: "#9fb6c7",
            boxShadow: "0 0 16px rgba(103,211,255,0.10)",
          }}
          className={activePart === "telescope" ? "part-active" : "part-static"}
          onMouseEnter={() => setActivePart("telescope")}
        />

        <div
          style={{
            position: "absolute",
            left: 18,
            bottom: 18,
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
          Hover to inspect
        </div>
      </div>

      <div
        style={{
          borderRadius: 26,
          padding: 28,
          background:
            "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            padding: "8px 12px",
            borderRadius: 999,
            background: "rgba(217,188,119,0.08)",
            border: "1px solid rgba(217,188,119,0.16)",
            color: "#d9bc77",
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: 0.7,
            textTransform: "uppercase",
          }}
        >
          Sextant anatomy
        </div>

        <h3
          style={{
            marginTop: 18,
            marginBottom: 0,
            fontSize: 28,
            fontWeight: 900,
            lineHeight: 1.1,
          }}
        >
          {partData[activePart].title}
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
          {partData[activePart].text}
        </p>

        <div
          style={{
            marginTop: 24,
            display: "grid",
            gap: 10,
          }}
        >
          {Object.keys(partData).map((key) => (
            <button
              key={key}
              onClick={() => setActivePart(key)}
              style={{
                textAlign: "left",
                padding: "14px 16px",
                borderRadius: 16,
                border:
                  activePart === key
                    ? "1px solid rgba(217,188,119,0.30)"
                    : "1px solid rgba(255,255,255,0.08)",
                background:
                  activePart === key
                    ? "linear-gradient(180deg, rgba(217,188,119,0.10), rgba(217,188,119,0.04))"
                    : "rgba(255,255,255,0.04)",
                color: activePart === key ? "#f7d58f" : "#e2e8f0",
                fontWeight: 800,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              {partData[key].title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SextantGuidePage() {
  const [angle, setAngle] = useState(46);
  const [declination, setDeclination] = useState(18);
  const [utcHour, setUtcHour] = useState(12);
  const [localHour, setLocalHour] = useState(15);
  const [activePart, setActivePart] = useState("frame");
  const [quizStep, setQuizStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const latitude = useMemo(() => 90 - angle + declination, [angle, declination]);
  const longitude = useMemo(() => (localHour - utcHour) * 15, [localHour, utcHour]);

  const quizProgress = useMemo(
    () => ((quizStep + (selectedAnswer !== null ? 1 : 0)) / quizQuestions.length) * 100,
    [quizStep, selectedAnswer]
  );

  const currentQuestion = quizQuestions[quizStep] ?? null;
  const passReady = quizStep >= quizQuestions.length;

  function handleAnswer(index: number) {
    if (!currentQuestion || selectedAnswer !== null) return;

    setSelectedAnswer(index);

    if (index === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }

    window.setTimeout(() => {
      setSelectedAnswer(null);
      setQuizStep((prev) => prev + 1);
    }, 900);
  }

  function resetQuiz() {
    setQuizStep(0);
    setSelectedAnswer(null);
    setScore(0);
  }

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
        @keyframes floatSoft {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulseGold {
          0% { box-shadow: 0 0 0 rgba(217,188,119,0.00); }
          50% { box-shadow: 0 0 28px rgba(217,188,119,0.14); }
          100% { box-shadow: 0 0 0 rgba(217,188,119,0.00); }
        }

        @keyframes shimmerSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(220%); }
        }

        @keyframes earthRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .card-hover-wow {
          transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease, background .28s ease;
        }

        .card-hover-wow:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(217,188,119,0.10);
          border-color: rgba(217,188,119,0.18) !important;
        }

        .sun-orb {
          animation: floatSoft 3.2s ease-in-out infinite;
        }

        .earth-rotate {
          animation: earthRotate 28s linear infinite;
        }

        .earth-core {
          animation: pulseGold 3.4s ease-in-out infinite;
        }

        .part-active {
          filter: drop-shadow(0 0 10px rgba(217,188,119,0.22));
          transition: all .22s ease;
        }

        .part-static {
          transition: all .22s ease;
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
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 900 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(217,188,119,0.08)",
              border: "1px solid rgba(217,188,119,0.18)",
              color: "#d9bc77",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Navigasyon • Sextant • Enlem / Boylam
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.03,
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            Sextant nedir?
            <br />
            Gerçek navigasyonun
            <br />
            derinlik katmanı.
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 820,
            }}
          >
            Sextant, yalnızca eski bir denizcilik aleti değildir. O, navigasyonun
            temel mantığını; gözlem, zaman, açı ve hesap ilişkisini öğretir.
            Modern sistemlerin çağında bile sextant bilgisi, denizciyi yüzeysel
            kullanıcıdan ayıran zihinsel derinliği temsil eder.
          </p>

          <div
            style={{
              marginTop: 34,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
              maxWidth: 920,
            }}
          >
            {[
              {
                label: "Ana Yetkinlik",
                value: "Angle + Time + Logic",
              },
              {
                label: "Öğrettiği Şey",
                value: "Systemic navigation thinking",
              },
              {
                label: "Premium Değeri",
                value: "Open sea mental depth",
              },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  padding: "16px 18px",
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.90))",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.45)",
                    fontWeight: 800,
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#f8fafc",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, maxWidth: 760 }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                marginBottom: 12,
              }}
            >
              Neden ayrı bir başlık olarak düşünülmelidir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Çünkü sextant sıradan bir navigasyon detayı değildir. Harita kullanımı,
              pusula, mevkii atma ve rota planlama seni güçlü yapar; sextant ise
              bu yapının derinliğini gösterir. Bu konu, denizciliği gerçekten
              kökten anlamak isteyenlerin alanıdır.
            </p>
          </div>
        </div>

        <div style={{ marginTop: 70 }}>
          <InstrumentPanel activePart={activePart} setActivePart={setActivePart} />
        </div>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {coreBlocks.map((item) => (
            <div
              key={item.title}
              className="card-hover-wow"
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

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "30px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 30,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Enlem mantığını gözünle gör.
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 820,
            }}
          >
            Öğle Güneşi gözleminde sextant ile ölçtüğün yükseklik (Ho) ve o günkü
            declination birlikte okunduğunda enlem düşüncesi ortaya çıkar. Aşağıdaki
            kontrol ile açı değiştikçe hesap mantığının nasıl davrandığını izle.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.1fr) minmax(260px, 0.9fr)",
              gap: 24,
            }}
          >
            <HorizonScene ho={angle} declination={declination} />

            <div
              style={{
                borderRadius: 24,
                padding: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 900,
                  lineHeight: 1.15,
                }}
              >
                Latitude simulator
              </h3>

              <div style={{ marginTop: 22 }}>
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
                  Observed altitude (Ho)
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={10}
                  max={80}
                  step={0.5}
                  value={angle}
                  onChange={(e) => setAngle(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {angle.toFixed(1)}°
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
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
                  Declination
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={-25}
                  max={25}
                  step={0.5}
                  value={declination}
                  onChange={(e) => setDeclination(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {formatSignedDegrees(declination, "N", "S")}
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  padding: "16px 18px",
                  borderRadius: 18,
                  background:
                    "linear-gradient(180deg, rgba(103,211,255,0.12), rgba(103,211,255,0.04))",
                  border: "1px solid rgba(103,211,255,0.16)",
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    textTransform: "uppercase",
                    letterSpacing: "0.16em",
                    color: "rgba(226,232,240,0.52)",
                    fontWeight: 800,
                  }}
                >
                  Formula
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Latitude = 90° - Ho + Declination
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  Bu gösterim eğitim amaçlı sadeleştirilmiştir. Gerçek seyirde
                  index correction, dip ve diğer düzeltmeler de dikkate alınır.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "30px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 30,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Boylam neden zaman ister?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.82)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 820,
            }}
          >
            Enlem daha çok yükseklikle ilgilidir. Boylam ise zaman farkı ile
            dünyanın dönüşünü birlikte okur. UTC ile yerel zaman arasındaki fark
            yaklaşık her saat için 15° boylam anlamına gelir.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "grid",
              gridTemplateColumns: "minmax(320px, 1.1fr) minmax(260px, 0.9fr)",
              gap: 24,
            }}
          >
            <LongitudeScene utcHour={utcHour} localHour={localHour} />

            <div
              style={{
                borderRadius: 24,
                padding: 24,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 22,
                  fontWeight: 900,
                  lineHeight: 1.15,
                }}
              >
                Longitude simulator
              </h3>

              <div style={{ marginTop: 22 }}>
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
                  UTC hour
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={0}
                  max={23.5}
                  step={0.5}
                  value={utcHour}
                  onChange={(e) => setUtcHour(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {utcHour.toFixed(1)} h
                </div>
              </div>

              <div style={{ marginTop: 22 }}>
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
                  Local hour
                </div>
                <input
                  className="range-premium"
                  type="range"
                  min={0}
                  max={23.5}
                  step={0.5}
                  value={localHour}
                  onChange={(e) => setLocalHour(Number(e.target.value))}
                />
                <div
                  style={{
                    marginTop: 10,
                    color: "#f8fafc",
                    fontWeight: 800,
                    fontSize: 15,
                  }}
                >
                  {localHour.toFixed(1)} h
                </div>
              </div>

              <div
                style={{
                  marginTop: 24,
                  padding: "16px 18px",
                  borderRadius: 18,
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
                    color: "rgba(226,232,240,0.52)",
                    fontWeight: 800,
                  }}
                >
                  Rule of thumb
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontSize: 20,
                    fontWeight: 900,
                    color: "#f8fafc",
                  }}
                >
                  Longitude ≈ (Local Time - UTC) × 15°
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  Eğitim amaçlı sadeleştirilmiş gösterimdir. Gerçek seyirde GHA,
                  Almanac ve sight reduction mantığı devreye girer.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Sextant sana gerçekte ne kazandırır?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {learningPoints.map((item) => (
              <div
                key={item}
                className="card-hover-wow"
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
                    background: "#d9bc77",
                    boxShadow: "0 0 8px rgba(217,188,119,0.45)",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            Neden premium bir konudur?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {whyPremium.map((item) => (
              <div
                key={item}
                className="card-hover-wow"
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e2e8f0",
                  fontSize: 15,
                  lineHeight: 1.65,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            En sık yanlış anlaşılan noktalar
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {misconceptions.map((item) => (
              <div
                key={item}
                className="card-hover-wow"
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
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "30px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 20,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: 30,
                  fontWeight: 900,
                  lineHeight: 1.1,
                }}
              >
                Mini mastery check
              </h2>
              <p
                style={{
                  marginTop: 12,
                  marginBottom: 0,
                  color: "rgba(226,232,240,0.78)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  maxWidth: 760,
                }}
              >
                Bu bölümde amaç ezber değil; mantığı oturtmak. Doğru cevap sayın
                kadar sextant düşüncesinin omurgasına yaklaşırsın.
              </p>
            </div>

            <div
              style={{
                minWidth: 180,
                padding: "16px 18px",
                borderRadius: 18,
                background:
                  score / quizQuestions.length >= 0.75
                    ? "linear-gradient(180deg, rgba(34,197,94,0.16), rgba(34,197,94,0.06))"
                    : "linear-gradient(180deg, rgba(103,211,255,0.12), rgba(103,211,255,0.04))",
                border:
                  score / quizQuestions.length >= 0.75
                    ? "1px solid rgba(34,197,94,0.18)"
                    : "1px solid rgba(103,211,255,0.16)",
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
                Progress
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 24,
                  fontWeight: 900,
                }}
              >
                {Math.round((score / quizQuestions.length) * 100)}%
              </div>
            </div>
          </div>

          <div
            style={{
              marginTop: 22,
              height: 10,
              width: "100%",
              borderRadius: 999,
              background: "rgba(255,255,255,0.08)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${passReady ? 100 : quizProgress}%`,
                height: "100%",
                borderRadius: 999,
                background: "linear-gradient(90deg, #67d3ff, #d9bc77)",
                transition: "width .3s ease",
              }}
            />
          </div>

          {!passReady && currentQuestion ? (
            <div
              style={{
                marginTop: 24,
                padding: 24,
                borderRadius: 20,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.16em",
                  color: "rgba(226,232,240,0.45)",
                  fontWeight: 800,
                }}
              >
                Question {quizStep + 1} / {quizQuestions.length}
              </div>

              <h3
                style={{
                  marginTop: 12,
                  marginBottom: 0,
                  fontSize: 24,
                  fontWeight: 900,
                  lineHeight: 1.2,
                }}
              >
                {currentQuestion.question}
              </h3>

              <div
                style={{
                  marginTop: 18,
                  display: "grid",
                  gap: 12,
                }}
              >
                {currentQuestion.options.map((option, index) => {
                  const isCorrect = index === currentQuestion.answer;
                  const isSelected = selectedAnswer === index;

                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      style={{
                        textAlign: "left",
                        padding: "16px 18px",
                        borderRadius: 16,
                        border:
                          isSelected && isCorrect
                            ? "1px solid rgba(34,197,94,0.26)"
                            : isSelected && !isCorrect
                              ? "1px solid rgba(239,68,68,0.26)"
                              : "1px solid rgba(255,255,255,0.08)",
                        background:
                          isSelected && isCorrect
                            ? "linear-gradient(180deg, rgba(34,197,94,0.12), rgba(34,197,94,0.04))"
                            : isSelected && !isCorrect
                              ? "linear-gradient(180deg, rgba(239,68,68,0.12), rgba(239,68,68,0.04))"
                              : "rgba(255,255,255,0.04)",
                        color: "#f8fafc",
                        fontWeight: 700,
                        fontSize: 15,
                        cursor: selectedAnswer !== null ? "default" : "pointer",
                        transition: "all .2s ease",
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div
              style={{
                marginTop: 24,
                padding: 28,
                borderRadius: 22,
                background:
                  score / quizQuestions.length >= 0.75
                    ? "linear-gradient(180deg, rgba(34,197,94,0.10), rgba(34,197,94,0.04))"
                    : "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
                border:
                  score / quizQuestions.length >= 0.75
                    ? "1px solid rgba(34,197,94,0.18)"
                    : "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 28,
                  fontWeight: 900,
                  lineHeight: 1.15,
                }}
              >
                {score / quizQuestions.length >= 0.75
                  ? "Sextant mindset unlocked."
                  : "Mantık oturuyor, ama bir tekrar daha iyi olur."}
              </h3>

              <p
                style={{
                  marginTop: 14,
                  color: "rgba(226,232,240,0.80)",
                  fontSize: 15,
                  lineHeight: 1.75,
                  maxWidth: 760,
                }}
              >
                Doğru cevap sayın: <strong>{score}</strong> / {quizQuestions.length}.
                Sextant, cihazdan çok düşünce sistemidir. Bu mantık oturduğunda
                açık deniz navigasyonu bambaşka görünür.
              </p>

              <div
                style={{
                  marginTop: 20,
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <button
                  onClick={resetQuiz}
                  style={{
                    padding: "14px 22px",
                    borderRadius: 14,
                    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                    color: "#04121c",
                    border: "none",
                    fontWeight: 900,
                    cursor: "pointer",
                    boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
                  }}
                >
                  Tekrar çöz
                </button>

                <Link
                  href="/training/offshore-skipper"
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
                  Offshore eğitimi incele
                </Link>
              </div>
            </div>
          )}
        </div>

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
            Navigasyonda derinleşmek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 780,
              marginInline: "auto",
            }}
          >
            Harita, rota planlama, mevkii atma ve açık deniz düşüncesi bir araya
            geldiğinde sextant bilgisi çok daha anlamlı hale gelir. Bu seviyeye
            geçmek, gerçek kaptanlık zihnini büyütür.
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
              href="/guide/rota-planlama"
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
              Rota Planlamaya dön
            </Link>
          </div>
        </div>
      </section>

      <GuideCta />
    </main>
  );
}