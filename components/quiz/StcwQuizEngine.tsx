"use client";

import { useEffect, useState } from "react";
import { getStcwQuestionsFromSupabase } from "@/lib/stcw/get-stcw-questions";
import type { QuizMode, QuizResult, StcwQuestion } from "@/lib/stcw/quiz-types";
import { calculateQuizResult } from "@/lib/stcw/quiz-utils";

const MODES: QuizMode[] = [10, 25, 50];

const CATEGORY_LABELS: Record<string, string> = {
  fire: "Yangın",
  survival: "Can Kurtarma",
  firstAid: "İlk Yardım",
  pssr: "Gemi Güvenliği / PSSR",
  seamanship: "Gemicilik",
  watchkeeping: "Vardiya",
  emergency: "Acil Durum",
};

export default function StcwQuizEngine() {
  const [mode, setMode] = useState<QuizMode>(10);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<StcwQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestion = quizQuestions[currentIndex];

  useEffect(() => {
    if (!started) return;

    async function fetchQuestions() {
      setLoading(true);

      const data = await getStcwQuestionsFromSupabase(mode);
      console.log("DATA:", data);

      setQuizQuestions(data);
      setCurrentIndex(0);
      setAnswers({});
      setResult(null);
      setLoading(false);
    }

    fetchQuestions();
  }, [started, mode]);

  function startQuiz(selectedMode: QuizMode) {
    setMode(selectedMode);
    setStarted(true);
  }

  function handleAnswer(index: number) {
    if (!currentQuestion) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: index,
    }));
  }

  function nextQuestion() {
    if (!currentQuestion) return;

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      return;
    }

    const res = calculateQuizResult(quizQuestions, answers);
    setResult(res);
  }

  function restartQuiz() {
    setStarted(false);
    setLoading(false);
    setQuizQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
  }

  return (
    <section className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        {!started && (
          <>
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              STCW 149 / 499 Gemici
            </p>

            <h1 className="text-4xl font-bold md:text-6xl">
              Profesyonel Quiz Sistemi
            </h1>

            <p className="mt-5 max-w-3xl text-lg text-slate-300">
              Yangın, can kurtarma, ilk yardım, gemide güvenlik, acil durum ve
              gemicilik bilgisi konularında sınav simülasyonu.
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {MODES.map((m) => (
                <button
                  key={m}
                  onClick={() => startQuiz(m)}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left transition hover:border-cyan-300 hover:bg-cyan-400/10"
                >
                  <p className="text-3xl font-bold">{m} Soru</p>
                  <p className="mt-2 text-sm text-slate-300">
                    {m === 10 && "Hızlı çalışma modu"}
                    {m === 25 && "Orta seviye sınav modu"}
                    {m === 50 && "Tam simülasyon modu"}
                  </p>
                </button>
              ))}
            </div>
          </>
        )}

        {started && loading && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            Sorular yükleniyor...
          </div>
        )}

        {started && !loading && !result && !currentQuestion && (
          <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-10">
            Supabase’den soru gelmedi. Şu an veritabanında yeterli aktif soru
            olmayabilir.
            <div className="mt-6">
              <button
                onClick={restartQuiz}
                className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
              >
                Geri Dön
              </button>
            </div>
          </div>
        )}

        {started && !loading && !result && currentQuestion && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-cyan-300"
                style={{
                  width: `${
                    ((currentIndex + 1) / quizQuestions.length) * 100
                  }%`,
                }}
              />
            </div>

            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-cyan-300">
              {CATEGORY_LABELS[currentQuestion.category] ??
                currentQuestion.category}
            </p>

            <p className="mb-4 text-sm text-slate-400">
              Soru {currentIndex + 1} / {quizQuestions.length}
            </p>

            <h2 className="text-3xl font-bold">
              {currentQuestion.question}
            </h2>

            <div className="mt-8 grid gap-4">
              {currentQuestion.options.map((opt, i) => {
                const selected = answers[currentQuestion.id] === i;

                return (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i)}
                    className={`rounded-2xl border p-5 text-left transition ${
                      selected
                        ? "border-cyan-300 bg-cyan-400/20"
                        : "border-white/10 bg-white/5 hover:border-cyan-300"
                    }`}
                  >
                    <span className="mr-3 font-bold text-cyan-300">
                      {String.fromCharCode(65 + i)})
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={nextQuestion}
                className="rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950"
              >
                {currentIndex < quizQuestions.length - 1
                  ? "Sonraki Soru"
                  : "Testi Bitir"}
              </button>

              <button
                onClick={restartQuiz}
                className="rounded-full border border-white/15 px-8 py-4 font-semibold text-white"
              >
                Geri Dön
              </button>
            </div>
          </div>
        )}

        {result && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-cyan-300">
              Sınav Sonucu
            </p>

            <h2 className="text-4xl font-bold">Sonuç</h2>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Toplam</p>
                <p className="text-3xl font-bold">{result.totalQuestions}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Doğru</p>
                <p className="text-3xl font-bold">{result.correctCount}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Yanlış</p>
                <p className="text-3xl font-bold">{result.wrongCount}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Skor</p>
                <p className="text-3xl font-bold">%{result.score}</p>
              </div>
            </div>

            <button
              onClick={restartQuiz}
              className="mt-8 rounded-full bg-cyan-400 px-8 py-4 font-semibold text-slate-950"
            >
              Yeni Test Başlat
            </button>
          </div>
        )}
      </div>
    </section>
  );
}