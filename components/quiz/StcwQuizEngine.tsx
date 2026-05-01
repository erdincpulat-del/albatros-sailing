"use client";

import { useEffect, useState } from "react";
import { getStcwQuestionsFromSupabase } from "@/lib/stcw/get-stcw-questions";

type QuizMode = number;

type StcwQuestion = {
  id: string;
  category: string;
  difficulty: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

type QuizResult = {
  correct: number;
  wrong: number;
  score: number;
};

const MODES: QuizMode[] = [100, 250, 500];

export default function StcwQuizEngine() {
  const [mode, setMode] = useState<QuizMode>(100);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [quizQuestions, setQuizQuestions] = useState<StcwQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [wrongQuestions, setWrongQuestions] = useState<StcwQuestion[]>([]);

  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);

  const [result, setResult] = useState<QuizResult | null>(null);

  const [timeLeft, setTimeLeft] = useState(30);
  const [reviewMode, setReviewMode] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];

  // 🚀 FETCH
  useEffect(() => {
    if (!started) return;

    async function fetchData() {
      setLoading(true);

      const data = await getStcwQuestionsFromSupabase(mode);

      setQuizQuestions(data);
      setCurrentIndex(0);
      setAnswers({});
      setWrongQuestions([]);
      setResult(null);
      setLoading(false);
    }

    fetchData();
  }, [started, mode]);

  // ⏱ TIMER
  useEffect(() => {
    if (!started || result) return;

    if (timeLeft === 0) {
      nextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, started, result]);

  // ✅ ANSWER
  function handleAnswer(index: number) {
    if (hasAnswered) return;

    setSelectedAnswer(index);
    setHasAnswered(true);

    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: index,
    }));

    if (index !== currentQuestion.correctAnswer) {
      setWrongQuestions((prev) => [...prev, currentQuestion]);
    }
  }

  // ➡️ NEXT
  function nextQuestion() {
    if (currentIndex + 1 >= quizQuestions.length) {
      finishQuiz();
      return;
    }

    setCurrentIndex((i) => i + 1);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setTimeLeft(30);
  }

  // 🧠 FINISH
  function finishQuiz() {
    let correct = 0;

    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });

    const wrong = quizQuestions.length - correct;
    const score = Math.round((correct / quizQuestions.length) * 100);

    setResult({ correct, wrong, score });
  }

  // 🔁 WRONG MODE
  function startReviewMode() {
    setQuizQuestions(wrongQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setWrongQuestions([]);
    setResult(null);
    setReviewMode(true);
  }

  // 🔄 RESET
  function restartQuiz() {
    setStarted(false);
    setQuizQuestions([]);
    setResult(null);
    setReviewMode(false);
  }

  // 🚀 START
  function startQuiz(selected: QuizMode) {
    setMode(selected);
    setStarted(true);
    setTimeLeft(30);
  }

  // ================= UI =================

  if (!started) {
    return (
      <div className="mx-auto max-w-5xl py-20 text-center">
        <h1 className="text-4xl font-black mb-10">
          Gerçek sınav hissiyle profesyonel denizcilik pratiği
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {MODES.map((m) => (
            <button
              key={m}
              onClick={() => startQuiz(m)}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-400"
            >
              <p className="text-2xl font-bold">{m} Soru</p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (loading) {
    return <div className="text-center py-20">Yükleniyor...</div>;
  }

  if (result) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Sonuç</h2>
        <p>Doğru: {result.correct}</p>
        <p>Yanlış: {result.wrong}</p>
        <p>Skor: %{result.score}</p>

        {wrongQuestions.length > 0 && (
          <button
            onClick={startReviewMode}
            className="mt-6 bg-red-500 px-6 py-3 rounded-xl"
          >
            Yanlışları Çöz
          </button>
        )}

        <button
          onClick={restartQuiz}
          className="mt-4 border px-6 py-3 rounded-xl"
        >
          Baştan
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl py-16">

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <p className="text-sm text-slate-400 mb-2">
          Soru {currentIndex + 1} / {quizQuestions.length}
        </p>

        <p className="text-cyan-300 font-bold mb-4">
          ⏱ {timeLeft} sn
        </p>

        {reviewMode && (
          <p className="text-red-400 font-bold mb-4">
            Yanlış Sorular Modu
          </p>
        )}

        <h2 className="text-2xl md:text-3xl font-black mb-8">
          {currentQuestion.question}
        </h2>

        <div className="space-y-4">
          {currentQuestion.options.map((opt, i) => {
            const selected = selectedAnswer === i;

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`w-full text-left p-5 rounded-2xl border transition ${
                  selected
                    ? "bg-cyan-500 border-cyan-300"
                    : "bg-slate-800 border-white/10 hover:border-cyan-300"
                }`}
              >
                <span className="mr-3 text-cyan-300 font-bold">
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
            disabled={!hasAnswered}
            className="bg-cyan-400 px-6 py-3 rounded-xl font-bold text-black disabled:opacity-40"
          >
            Sonraki
          </button>

          <button
            onClick={restartQuiz}
            className="border border-white/20 px-6 py-3 rounded-xl"
          >
            Çık
          </button>
        </div>

      </div>
    </div>
  );
}