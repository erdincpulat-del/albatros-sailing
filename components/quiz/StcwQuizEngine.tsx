"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStcwQuestionsFromSupabase } from "@/lib/stcw/get-stcw-questions";
import type { QuizMode, QuizResult, StcwQuestion } from "@/lib/stcw/quiz-types";
import { calculateQuizResult } from "@/lib/stcw/quiz-utils";

const MODES: QuizMode[] = [100, 250, 500];

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
  const [mode, setMode] = useState<QuizMode>(MODES[0]);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<StcwQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [timeLeft, setTimeLeft] = useState(60);

  // 🆕 yanlış sorular modu
  const [reviewMode, setReviewMode] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;

  const hasAnswered = selectedAnswer !== undefined;

  // 🔥 FETCH
  useEffect(() => {
    if (!started) return;

    let cancelled = false;

    async function fetchQuestions() {
      setLoading(true);
      setQuizQuestions([]);
      setCurrentIndex(0);
      setAnswers({});
      setResult(null);

      const data = await getStcwQuestionsFromSupabase(mode);

      if (!cancelled) {
        setQuizQuestions(data);
        setTimeLeft(60);
      }

      setLoading(false);
    }

    fetchQuestions();

    return () => {
      cancelled = true;
    };
  }, [started, mode]);

  // ⏱ TIMER
  useEffect(() => {
    if (!started || loading || result || !currentQuestion) return;

    if (timeLeft <= 0) {
      nextQuestion(true);
      return;
    }

    const t = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft, started, loading, result, currentQuestion]);

  function startQuiz(m: QuizMode) {
    setMode(m);
    setStarted(true);
    setReviewMode(false);
  }

  // 🔒 CEVAP KİLİT
  function handleAnswer(i: number) {
    if (!currentQuestion) return;
    if (answers[currentQuestion.id] !== undefined) return;

    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: i,
    }));
  }

  function nextQuestion(force = false) {
    if (!currentQuestion) return;
    if (!hasAnswered && !force) return;

    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((p) => p + 1);
      setTimeLeft(60);
      return;
    }

    const res = calculateQuizResult(quizQuestions, answers);
    setResult(res);
  }

  function restartQuiz() {
    setStarted(false);
    setQuizQuestions([]);
    setAnswers({});
    setResult(null);
    setCurrentIndex(0);
    setReviewMode(false);
  }

  // 🧠 CATEGORY ANALYTICS
  const categoryStats =
    result &&
    quizQuestions.reduce<Record<string, { total: number; correct: number }>>(
      (acc, q) => {
        const cat = CATEGORY_LABELS[q.category] ?? q.category;
        if (!acc[cat]) acc[cat] = { total: 0, correct: 0 };

        acc[cat].total += 1;

        if (answers[q.id] === q.correctAnswer) {
          acc[cat].correct += 1;
        }

        return acc;
      },
      {}
    );

  // ❗ YANLIŞ SORULAR
  const wrongQuestions =
    result &&
    quizQuestions.filter(
      (q) => answers[q.id] !== q.correctAnswer
    );

  function startWrongReview() {
    if (!wrongQuestions) return;

    setQuizQuestions(wrongQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setResult(null);
    setReviewMode(true);
    setTimeLeft(60);
  }

  return (
    <section className="min-h-screen bg-[#06111c] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        {/* MODE */}
        {!started && (
          <div className="grid gap-6">
            {MODES.map((m) => (
              <button
                key={m}
                onClick={() => startQuiz(m)}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left"
              >
                <p className="text-3xl font-black">{m} Soru</p>
              </button>
            ))}
          </div>
        )}

        {/* LOADING */}
        {started && loading && <p>Yükleniyor...</p>}

        {/* QUIZ */}
        {started && !loading && !result && currentQuestion && (
          <div>
            <p>
              Soru {currentIndex + 1} / {quizQuestions.length}
            </p>

            <p className="text-cyan-300 font-bold">
              ⏱ {timeLeft} sn
            </p>

            {reviewMode && (
              <p className="text-red-400 font-bold">
                Yanlış Sorular Modu
              </p>
            )}

            <h2 className="text-2xl font-black">
              {currentQuestion.question}
            </h2>

            {currentQuestion.options.map((opt, i) => {
              const selected = selectedAnswer === i;

              return (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  className={`block w-full p-4 mt-3 rounded-xl ${
                    selected ? "bg-cyan-500" : "bg-gray-800"
                  }`}
                >
                  {opt}
                </button>
              );
            })}

            <button
              onClick={() => nextQuestion()}
              disabled={!hasAnswered}
              className="mt-6 bg-cyan-400 px-6 py-3 rounded-xl disabled:opacity-40"
            >
              Sonraki
            </button>
          </div>
        )}

        {/* RESULT */}
        {result && (
          <div>
            <h2 className="text-3xl font-black">
              Skor: %{result.score}
            </h2>

            {/* ANALYTICS */}
            {categoryStats &&
              Object.entries(categoryStats).map(([cat, stat]) => {
                const percent = Math.round(
                  (stat.correct / stat.total) * 100
                );

                return (
                  <div key={cat}>
                    {cat}: %{percent}
                  </div>
                );
              })}

            {/* 🔥 YANLIŞ SORULAR */}
            {wrongQuestions && wrongQuestions.length > 0 && (
              <button
                onClick={startWrongReview}
                className="mt-6 bg-red-500 px-6 py-3 rounded-xl"
              >
                Yanlış Soruları Tekrar Çöz ({wrongQuestions.length})
              </button>
            )}

            <button
              onClick={restartQuiz}
              className="mt-4 bg-cyan-500 px-6 py-3 rounded-xl"
            >
              Yeniden Başla
            </button>
          </div>
        )}
      </div>
    </section>
  );
}