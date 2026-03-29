"use client";

import { useState } from "react";

const questions = [
  {
    pattern: "Q",
    question: "Bu ışık karakteri hangisidir?",
    options: ["Fixed", "Quick Flashing", "Fl(2)", "Morse A"],
    answer: "Quick Flashing",
  },
  {
    pattern: "Fl(2)",
    question: "Bu ışık neyi ifade eder?",
    options: [
      "Tek flaş",
      "İkili grup flaş",
      "Sabit ışık",
      "Morse karakteri",
    ],
    answer: "İkili grup flaş",
  },
  {
    pattern: "Mo(A)",
    question: "Bu ışık hangi işaretle ilişkilidir?",
    options: [
      "Cardinal",
      "Safe Water",
      "Isolated Danger",
      "Lateral",
    ],
    answer: "Safe Water",
  },
];

export default function ColregLightsQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const q = questions[current];

  function handleAnswer(option: string) {
    setSelected(option);

    if (option === q.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      setCurrent((prev) => prev + 1);
    }, 900);
  }

  if (current >= questions.length) {
    return (
      <div style={{ textAlign: "center", marginTop: 40 }}>
        <h2>Sonuç</h2>
        <p>
          Skor: {score} / {questions.length}
        </p>
      </div>
    );
  }

  return (
    <section
      style={{
        marginTop: 60,
        padding: 24,
        borderRadius: 20,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h3>{q.question}</h3>

      <div style={{ marginTop: 10, fontSize: 28, fontWeight: 900 }}>
        {q.pattern}
      </div>

      <div style={{ marginTop: 20, display: "grid", gap: 10 }}>
        {q.options.map((opt) => {
          const isCorrect = opt === q.answer;
          const isSelected = opt === selected;

          return (
            <button
              key={opt}
              onClick={() => handleAnswer(opt)}
              style={{
                padding: 12,
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.1)",
                background: isSelected
                  ? isCorrect
                    ? "#22c55e"
                    : "#ef4444"
                  : "rgba(255,255,255,0.05)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </section>
  );
}