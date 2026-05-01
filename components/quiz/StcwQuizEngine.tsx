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

function getModeDescription(mode: QuizMode) {
  if (mode === 100) return "Dengeli hazırlık modu";
  if (mode === 250) return "Geniş kapsamlı sınav modu";
  if (mode === 500) return "Tam gerçek sınav simülasyonu";
  return "Sınav modu";
}

export default function StcwQuizEngine() {
  const [mode, setMode] = useState<QuizMode>(MODES[0]);
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<StcwQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const currentQuestion = quizQuestions[currentIndex];
  const selectedAnswer = currentQuestion
    ? answers[currentQuestion.id]
    : undefined;
  const hasAnswered = selectedAnswer !== undefined;

  useEffect(() => {
    if (!started) return;

    let cancelled = false;

    async function fetchQuestions() {
      setLoading(true);
      setQuizQuestions([]);
      setCurrentIndex(0);
      setAnswers({});
      setResult(null);

      try {
        const data = await getStcwQuestionsFromSupabase(mode);

        if (cancelled) return;

        setQuizQuestions(data);
        setCurrentIndex(0);
      } catch (error) {
        console.error("STCW quiz fetch error:", error);

        if (!cancelled) {
          setQuizQuestions([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchQuestions();

    return () => {
      cancelled = true;
    };
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
    if (!hasAnswered) return;

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
    <section className="min-h-screen overflow-hidden bg-[#06111c] px-6 py-24 text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-[-10%] h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {!started && (
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
                STCW 149 / 499 Hazırlık Simülasyonu
              </p>

              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                Gerçek sınav hissiyle profesyonel denizcilik pratiği.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                Yangın, can kurtarma, ilk yardım, gemide güvenlik, acil durum ve
                temel gemicilik bilgisi için hazırlanmış premium sınav
                simülasyonu.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-black text-cyan-300">Gerçek</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Sınav ritmine yakın soru akışı
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-black text-cyan-300">Anlık</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Sonuç ve skor analizi
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-2xl font-black text-cyan-300">Eğitim</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Eksik konulara yönlendirme
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.06] p-6 shadow-[0_0_60px_rgba(103,211,255,0.12)] backdrop-blur-xl">
              <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
                Test Modu Seç
              </p>

              <div className="grid gap-4">
                {MODES.map((m) => (
                  <button
                    key={m}
                    onClick={() => startQuiz(m)}
                    className="group rounded-3xl border border-white/10 bg-slate-950/40 p-6 text-left transition hover:border-cyan-300/60 hover:bg-cyan-400/10 hover:shadow-[0_0_35px_rgba(103,211,255,0.18)]"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-4xl font-black">{m} Soru</p>
                        <p className="mt-2 text-sm text-slate-300">
                          {getModeDescription(m)}
                        </p>
                      </div>

                      <span className="text-3xl text-cyan-300 transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              <p className="mt-6 rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4 text-sm leading-6 text-slate-200">
                Bu modül eğitim seviyesini görmek, eksikleri fark etmek ve
                profesyonel denizcilik eğitimine doğru yönlenmek için
                tasarlanmıştır.
              </p>
            </div>
          </div>
        )}

        {started && loading && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            Sorular yükleniyor...
          </div>
        )}

        {started && !loading && !result && !currentQuestion && (
          <div className="rounded-3xl border border-red-400/30 bg-red-500/10 p-10">
            Supabase’den soru gelmedi.
            <button
              onClick={restartQuiz}
              className="mt-6 block rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950"
            >
              Geri Dön
            </button>
          </div>
        )}

        {started && !loading && !result && currentQuestion && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl">
            <div className="mb-8 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full bg-cyan-300"
                style={{
                  width: `${((currentIndex + 1) / quizQuestions.length) * 100}%`,
                }}
              />
            </div>

            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              {CATEGORY_LABELS[currentQuestion.category] ??
                currentQuestion.category}
            </p>

            <p className="mb-4 text-sm text-slate-400">
              Soru {currentIndex + 1} / {quizQuestions.length}
            </p>

            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              {currentQuestion.question}
            </h2>

            <div className="mt-10 grid gap-4">
              {currentQuestion.options.map((opt, i) => {
                const selected = selectedAnswer === i;

                return (
                  <button
                    key={`${currentQuestion.id}-${i}`}
                    onClick={() => handleAnswer(i)}
                    className={`rounded-2xl border p-5 text-left text-lg font-semibold transition ${
                      selected
                        ? "border-cyan-300 bg-cyan-400/20 text-white shadow-[0_0_30px_rgba(103,211,255,0.18)]"
                        : "border-white/10 bg-white/5 text-slate-200 hover:border-cyan-300/60 hover:bg-cyan-400/10"
                    }`}
                  >
                    <span className="mr-3 font-black text-cyan-300">
                      {String.fromCharCode(65 + i)})
                    </span>
                    {opt}
                  </button>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={nextQuestion}
                disabled={!hasAnswered}
                className="rounded-full bg-cyan-400 px-8 py-4 font-black text-slate-950 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {currentIndex < quizQuestions.length - 1
                  ? "Sonraki Soru"
                  : "Testi Bitir"}
              </button>

              <button
                onClick={restartQuiz}
                className="rounded-full border border-white/15 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Başa Dön
              </button>
            </div>
          </div>
        )}

        {result && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-10 shadow-2xl backdrop-blur-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-cyan-300">
              Sınav Sonucu
            </p>

            <h2 className="text-5xl font-black">
              {result.score >= 80
                ? "Güçlü bir sonuç."
                : result.score >= 60
                  ? "Temelin var, geliştirme gerekli."
                  : "Bu alan eğitimle güçlenmeli."}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              {result.score >= 80
                ? "Denizcilik bilgisi açısından iyi bir seviyedesin. Bir sonraki adım pratik senaryo, gerçek rota ve profesyonel eğitim süreci olmalı."
                : result.score >= 60
                  ? "Bazı temel konular oturmuş görünüyor; ancak sınav ve gerçek deniz pratiği için eksik başlıkların güçlendirilmesi gerekir."
                  : "Bu sonuç, özellikle güvenlik, acil durum ve temel gemicilik alanlarında yapılandırılmış eğitim ihtiyacını gösterir."}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Toplam</p>
                <p className="text-3xl font-black">{result.totalQuestions}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Doğru</p>
                <p className="text-3xl font-black text-cyan-300">
                  {result.correctCount}
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Yanlış</p>
                <p className="text-3xl font-black">{result.wrongCount}</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5">
                <p className="text-sm text-slate-400">Skor</p>
                <p className="text-3xl font-black">%{result.score}</p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6">
              <h3 className="text-2xl font-black text-cyan-300">
                Sonraki doğru adım
              </h3>

              <p className="mt-3 max-w-3xl text-slate-200">
                Bu sonucu eğitim hedefinle birlikte değerlendirmek için bizimle
                iletişime geçebilir veya açık deniz eğitim programlarını
                inceleyebilirsin.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <Link
                  href="/programs/offshore-yacht-course"
                  className="rounded-full bg-cyan-400 px-7 py-4 font-black text-slate-950 transition hover:scale-105"
                >
                  Eğitim Programlarını İncele
                </Link>

                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 px-7 py-4 font-bold text-white transition hover:bg-white/10"
                >
                  Eğitim Danışmanlığı Al
                </Link>

                <button
                  onClick={restartQuiz}
                  className="rounded-full border border-cyan-300/30 px-7 py-4 font-bold text-cyan-300 transition hover:bg-cyan-300/10"
                >
                  Testi Yeniden Başlat
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}