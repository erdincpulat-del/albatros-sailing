"use client";

import { useState } from "react";

type Mode = "learn" | "quiz";

const FLAGS = [
  {
    code: "A",
    name: "Alpha",
    meaning: "Dalgıç var, uzak dur",
    svg: "/flags/A.svg",
    sound: "/sounds/horn-short.mp3",
  },
  {
    code: "B",
    name: "Bravo",
    meaning: "Tehlikeli yük",
    svg: "/flags/B.svg",
    sound: "/sounds/horn-long.mp3",
  },
  {
    code: "C",
    name: "Charlie",
    meaning: "Evet / Onaylı",
    svg: "/flags/C.svg",
    sound: "/sounds/confirm.mp3",
  },
];

export default function SignalTrainingPro() {
  const [mode, setMode] = useState<Mode>("learn");
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [current, setCurrent] = useState(0);

  const flag = FLAGS[current];

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.play();
  };

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((s) => s + 1);
    setCurrent((c) => (c + 1) % FLAGS.length);
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        background:
          "radial-gradient(circle at 30% 20%, rgba(0,150,255,0.1), transparent 60%), #020617",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* HEADER */}
        <div style={{ display: "flex", gap: 12, marginBottom: 40 }}>
          <button
            onClick={() => setMode("learn")}
            style={btn(mode === "learn")}
          >
            Eğitim
          </button>
          <button
            onClick={() => setMode("quiz")}
            style={btn(mode === "quiz")}
          >
            Quiz
          </button>
        </div>

        {/* LEARN MODE */}
        {mode === "learn" && (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
              gap: 20,
            }}
          >
            {FLAGS.map((f, i) => (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                style={{
                  padding: 24,
                  borderRadius: 16,
                  background:
                    active === i
                      ? "linear-gradient(135deg,#0ea5e9,#22c55e)"
                      : "rgba(255,255,255,0.05)",
                  transition: "0.3s",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                {/* FLAG SVG */}
                <img
                  src={f.svg}
                  alt={f.name}
                  style={{ width: "100%", height: 120, objectFit: "contain" }}
                />

                <h3 style={{ marginTop: 12 }}>{f.name}</h3>
                <p style={{ opacity: 0.7 }}>{f.meaning}</p>

                <button
                  onClick={() => playSound(f.sound)}
                  style={{
                    marginTop: 10,
                    fontSize: 12,
                    opacity: 0.6,
                  }}
                >
                  🔊 Sinyal Dinle
                </button>
              </div>
            ))}
          </div>
        )}

        {/* QUIZ MODE */}
        {mode === "quiz" && (
          <div
            style={{
              padding: 40,
              borderRadius: 20,
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h2 style={{ marginBottom: 20 }}>Bu bayrak ne anlama geliyor?</h2>

            <img
              src={flag.svg}
              alt=""
              style={{ width: 200, marginBottom: 30 }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {FLAGS.map((f, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(f.code === flag.code)}
                  style={{
                    padding: 14,
                    borderRadius: 10,
                    background: "rgba(255,255,255,0.08)",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {f.meaning}
                </button>
              ))}
            </div>

            <div style={{ marginTop: 20, opacity: 0.7 }}>
              Skor: {score}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

/* BUTTON STYLE */
function btn(active: boolean) {
  return {
    padding: "10px 16px",
    borderRadius: "10px",
    background: active ? "#0ea5e9" : "rgba(255,255,255,0.1)",
    border: "none",
    color: "white",
    cursor: "pointer",
  };
}