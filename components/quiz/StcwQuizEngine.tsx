"use client";

import { useEffect, useMemo, useState } from "react";
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

function normalizeQuestion(item: any): StcwQuestion | null {
  if (!item) return null;

  const options = Array.isArray(item.options) ? item.options : [];

  if (!item.question || options.length === 0) return null;

  return {
    id: String(item.id || `${Date.now()}-${Math.random()}`),
    category: String(item.category || "STCW"),
    difficulty: String(item.difficulty || "Orta"),
    question: String(item.question),
    options,
    correctAnswer: Number.isFinite(Number(item.correctAnswer))
      ? Number(item.correctAnswer)
      : 0,
    explanation: String(item.explanation || ""),
  };
}

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

  const currentQuestion = quizQuestions[currentIndex] || null;

  const progressText = useMemo(() => {
    if (!quizQuestions.length) return "0 / 0";
    return `${currentIndex + 1} / ${quizQuestions.length}`;
  }, [currentIndex, quizQuestions.length]);

  const progressPercent = useMemo(() => {
    if (!quizQuestions.length) return 0;
    return Math.round(((currentIndex + 1) / quizQuestions.length) * 100);
  }, [currentIndex, quizQuestions.length]);

  useEffect(() => {
    if (!started) return;

    async function fetchData() {
      setLoading(true);

      try {
        const data = await getStcwQuestionsFromSupabase(mode);

        const safeQuestions = Array.isArray(data)
          ? data.map(normalizeQuestion).filter(Boolean)
          : [];

        setQuizQuestions(safeQuestions as StcwQuestion[]);
        setCurrentIndex(0);
        setAnswers({});
        setWrongQuestions([]);
        setSelectedAnswer(null);
        setHasAnswered(false);
        setResult(null);
        setReviewMode(false);
        setTimeLeft(30);
      } catch (err) {
        console.error("Quiz fetch error:", err);
        setQuizQuestions([]);
        setCurrentIndex(0);
        setAnswers({});
        setWrongQuestions([]);
        setResult(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [started, mode]);

  useEffect(() => {
    if (!started || result || loading || !currentQuestion) return;

    if (timeLeft === 0) {
      nextQuestion();
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, started, result, loading, currentQuestion]);

  function handleAnswer(index: number) {
    if (hasAnswered || !currentQuestion) return;

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

  function finishQuiz() {
    let correct = 0;

    quizQuestions.forEach((q, i) => {
      if (answers[i] === q.correctAnswer) correct++;
    });

    const wrong = quizQuestions.length - correct;
    const score =
      quizQuestions.length > 0
        ? Math.round((correct / quizQuestions.length) * 100)
        : 0;

    setResult({ correct, wrong, score });
  }

  function startReviewMode() {
    setQuizQuestions(wrongQuestions);
    setCurrentIndex(0);
    setAnswers({});
    setWrongQuestions([]);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setResult(null);
    setReviewMode(true);
    setTimeLeft(30);
  }

  function restartQuiz() {
    setStarted(false);
    setQuizQuestions([]);
    setCurrentIndex(0);
    setAnswers({});
    setWrongQuestions([]);
    setSelectedAnswer(null);
    setHasAnswered(false);
    setResult(null);
    setReviewMode(false);
    setTimeLeft(30);
    setLoading(false);
  }

  function startQuiz(selected: QuizMode) {
    setMode(selected);
    setStarted(true);
  }

  if (!started) {
    return (
      <main style={styles.page}>
        <div style={styles.glowA} />
        <div style={styles.glowB} />
        <section style={styles.startShell}>
          <div style={styles.badge}>ALBATROS SAILING · STCW QUIZ ENGINE</div>

          <h1 style={styles.startTitle}>
            Gerçek sınav hissiyle profesyonel denizcilik pratiği
          </h1>

          <p style={styles.startText}>
            Supabase destekli STCW soru havuzundan sınav modu seçin. Her soru
            zamanlıdır, sonuçlar ve yanlış sorular otomatik hesaplanır.
          </p>

          <div style={styles.modeGrid}>
            {MODES.map((m) => (
              <button
                key={m}
                onClick={() => startQuiz(m)}
                style={styles.modeCard}
              >
                <span style={styles.modeLabel}>{m} Soru</span>
                <span style={styles.modeSub}>Sınavı Başlat →</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    );
  }

  if (loading) {
    return (
      <main style={styles.page}>
        <section style={styles.centerBox}>
          <div style={styles.badge}>SİSTEM HAZIRLANIYOR</div>
          <h2 style={styles.loadingTitle}>Supabase’den sorular yükleniyor...</h2>
        </section>
      </main>
    );
  }

  if (started && !result && (!currentQuestion || quizQuestions.length === 0)) {
    return (
      <main style={styles.page}>
        <section style={styles.centerBox}>
          <div style={styles.badge}>QUIZ DATA WARNING</div>
          <h2 style={styles.loadingTitle}>Quiz soruları yüklenemedi</h2>
          <p style={styles.mutedText}>
            Supabase’den bu mod için soru gelmedi veya veri formatı beklenenden
            farklı.
          </p>
          <button onClick={restartQuiz} style={styles.secondaryButton}>
            Baştan
          </button>
        </section>
      </main>
    );
  }

  if (result) {
    return (
      <main style={styles.page}>
        <section style={styles.resultShell}>
          <div style={styles.badge}>SINAV SONUCU</div>

          <h2 style={styles.resultTitle}>Sonuç Raporu</h2>

          <div style={styles.resultGrid}>
            <div style={styles.resultCard}>
              <span style={styles.resultLabel}>Doğru</span>
              <strong style={styles.resultValue}>{result.correct}</strong>
            </div>

            <div style={styles.resultCard}>
              <span style={styles.resultLabel}>Yanlış</span>
              <strong style={styles.resultValue}>{result.wrong}</strong>
            </div>

            <div style={styles.resultCard}>
              <span style={styles.resultLabel}>Skor</span>
              <strong style={styles.resultValue}>%{result.score}</strong>
            </div>
          </div>

          <div style={styles.resultActions}>
            {wrongQuestions.length > 0 && (
              <button onClick={startReviewMode} style={styles.dangerButton}>
                Yanlışları Çöz
              </button>
            )}

            <button onClick={restartQuiz} style={styles.secondaryButton}>
              Baştan
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.glowA} />
      <div style={styles.glowB} />

      <section style={styles.quizShell}>
        <div style={styles.quizHeader}>
          <div>
            <div style={styles.badge}>
              {reviewMode ? "YANLIŞ SORULAR MODU" : "STCW QUIZ"}
            </div>

            <p style={styles.progressText}>Soru {progressText}</p>
          </div>

          <div style={styles.timerBox}>⏱ {timeLeft} sn</div>
        </div>

        <div style={styles.progressTrack}>
          <div
            style={{
              ...styles.progressBar,
              width: `${progressPercent}%`,
            }}
          />
        </div>

        <div style={styles.questionCard}>
          <div style={styles.categoryRow}>
            <span>{currentQuestion?.category || "STCW"}</span>
            <span>{currentQuestion?.difficulty || "Orta"}</span>
          </div>

          <h2 style={styles.questionTitle}>
            {currentQuestion?.question || "Soru yüklenemedi"}
          </h2>

          <div style={styles.optionsWrap}>
            {(currentQuestion?.options || []).map((opt, i) => {
              const selected = selectedAnswer === i;
              const isCorrect = hasAnswered && i === currentQuestion.correctAnswer;
              const isWrong =
                hasAnswered &&
                selectedAnswer === i &&
                i !== currentQuestion.correctAnswer;

              return (
                <button
                  key={`${currentQuestion?.id || "question"}-${i}`}
                  onClick={() => handleAnswer(i)}
                  style={{
                    ...styles.optionButton,
                    ...(selected ? styles.optionSelected : {}),
                    ...(isCorrect ? styles.optionCorrect : {}),
                    ...(isWrong ? styles.optionWrong : {}),
                  }}
                >
                  <span style={styles.optionLetter}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span>{opt}</span>
                </button>
              );
            })}
          </div>

          {hasAnswered && currentQuestion?.explanation ? (
            <div style={styles.explanationBox}>
              <strong>Açıklama:</strong> {currentQuestion.explanation}
            </div>
          ) : null}

          <div style={styles.quizActions}>
            <button
              onClick={nextQuestion}
              disabled={!hasAnswered}
              style={{
                ...styles.primaryButton,
                opacity: hasAnswered ? 1 : 0.45,
                cursor: hasAnswered ? "pointer" : "not-allowed",
              }}
            >
              Sonraki
            </button>

            <button onClick={restartQuiz} style={styles.secondaryButton}>
              Çık
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    position: "relative",
    minHeight: "100vh",
    padding: "96px 20px 64px",
    overflow: "hidden",
    color: "#f8fafc",
    background:
      "radial-gradient(circle at top left, rgba(103,211,255,0.16), transparent 34%), linear-gradient(180deg, #020617 0%, #07111d 46%, #020617 100%)",
  },

  glowA: {
    position: "absolute",
    width: 520,
    height: 520,
    top: -180,
    left: -160,
    borderRadius: "50%",
    background: "rgba(56,189,248,0.14)",
    filter: "blur(90px)",
    pointerEvents: "none",
  },

  glowB: {
    position: "absolute",
    width: 460,
    height: 460,
    right: -180,
    bottom: -120,
    borderRadius: "50%",
    background: "rgba(14,165,233,0.10)",
    filter: "blur(100px)",
    pointerEvents: "none",
  },

  startShell: {
    position: "relative",
    zIndex: 2,
    maxWidth: 1080,
    margin: "0 auto",
    padding: "44px 28px",
    borderRadius: 32,
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.96))",
    border: "1px solid rgba(103,211,255,0.12)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
    backdropFilter: "blur(18px)",
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: 999,
    padding: "8px 14px",
    background: "rgba(103,211,255,0.09)",
    border: "1px solid rgba(103,211,255,0.20)",
    color: "#8ed8ff",
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },

  startTitle: {
    marginTop: 22,
    maxWidth: 820,
    fontSize: "clamp(34px, 5vw, 64px)",
    lineHeight: 1.04,
    fontWeight: 950,
    letterSpacing: "-0.05em",
    color: "#f8fafc",
    textShadow: "0 0 28px rgba(103,211,255,0.18)",
  },

  startText: {
    marginTop: 18,
    maxWidth: 760,
    fontSize: 17,
    lineHeight: 1.8,
    color: "rgba(226,232,240,0.78)",
  },

  modeGrid: {
    marginTop: 34,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 18,
  },

  modeCard: {
    minHeight: 150,
    padding: 24,
    borderRadius: 24,
    textAlign: "left",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
    border: "1px solid rgba(255,255,255,0.10)",
    color: "#f8fafc",
    cursor: "pointer",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
  },

  modeLabel: {
    display: "block",
    fontSize: 30,
    fontWeight: 950,
    letterSpacing: "-0.03em",
  },

  modeSub: {
    display: "block",
    marginTop: 18,
    color: "#8ed8ff",
    fontWeight: 800,
  },

  centerBox: {
    position: "relative",
    zIndex: 2,
    maxWidth: 720,
    margin: "0 auto",
    padding: 34,
    borderRadius: 28,
    textAlign: "center",
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.92), rgba(10,15,24,0.96))",
    border: "1px solid rgba(103,211,255,0.12)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
  },

  loadingTitle: {
    marginTop: 18,
    fontSize: 28,
    fontWeight: 900,
  },

  mutedText: {
    marginTop: 12,
    color: "rgba(226,232,240,0.68)",
    lineHeight: 1.7,
  },

  quizShell: {
    position: "relative",
    zIndex: 2,
    maxWidth: 900,
    margin: "0 auto",
  },

  quizHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginBottom: 18,
  },

  progressText: {
    marginTop: 10,
    fontSize: 13,
    color: "rgba(226,232,240,0.62)",
    fontWeight: 800,
  },

  timerBox: {
    borderRadius: 18,
    padding: "12px 16px",
    background: "rgba(103,211,255,0.09)",
    border: "1px solid rgba(103,211,255,0.18)",
    color: "#8ed8ff",
    fontWeight: 950,
    boxShadow: "0 0 24px rgba(103,211,255,0.12)",
  },

  progressTrack: {
    height: 8,
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    overflow: "hidden",
    marginBottom: 20,
  },

  progressBar: {
    height: "100%",
    borderRadius: 999,
    background: "linear-gradient(90deg, #67d3ff, #22c55e)",
    transition: "width 0.35s ease",
  },

  questionCard: {
    padding: 28,
    borderRadius: 32,
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.94), rgba(10,15,24,0.98))",
    border: "1px solid rgba(103,211,255,0.14)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.30)",
    backdropFilter: "blur(18px)",
  },

  categoryRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 18,
    color: "rgba(142,216,255,0.86)",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },

  questionTitle: {
    margin: 0,
    fontSize: "clamp(24px, 3.5vw, 38px)",
    lineHeight: 1.18,
    fontWeight: 950,
    letterSpacing: "-0.03em",
    color: "#e2f3ff",
    textShadow: "0 0 24px rgba(103,211,255,0.20)",
  },

  optionsWrap: {
    marginTop: 30,
    display: "grid",
    gap: 14,
  },

  optionButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 14,
    borderRadius: 18,
    padding: "18px 18px",
    textAlign: "left",
    color: "#f8fafc",
    background: "rgba(255,255,255,0.045)",
    border: "1px solid rgba(255,255,255,0.10)",
    cursor: "pointer",
    fontSize: 15,
    lineHeight: 1.6,
    transition: "all 0.22s ease",
  },

  optionSelected: {
    background: "rgba(103,211,255,0.12)",
    border: "1px solid rgba(103,211,255,0.42)",
    boxShadow: "0 0 24px rgba(103,211,255,0.12)",
  },

  optionCorrect: {
    background: "rgba(34,197,94,0.14)",
    border: "1px solid rgba(34,197,94,0.44)",
  },

  optionWrong: {
    background: "rgba(239,68,68,0.14)",
    border: "1px solid rgba(239,68,68,0.44)",
  },

  optionLetter: {
    flexShrink: 0,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 34,
    height: 34,
    borderRadius: 999,
    background: "rgba(103,211,255,0.10)",
    border: "1px solid rgba(103,211,255,0.22)",
    color: "#8ed8ff",
    fontWeight: 950,
  },

  explanationBox: {
    marginTop: 20,
    padding: 18,
    borderRadius: 18,
    background: "rgba(103,211,255,0.08)",
    border: "1px solid rgba(103,211,255,0.16)",
    color: "rgba(226,232,240,0.86)",
    lineHeight: 1.75,
  },

  quizActions: {
    marginTop: 26,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },

  primaryButton: {
    border: "none",
    borderRadius: 15,
    padding: "14px 22px",
    background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
    color: "#04121c",
    fontWeight: 950,
    boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
  },

  secondaryButton: {
    borderRadius: 15,
    padding: "14px 22px",
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "#f8fafc",
    fontWeight: 850,
    cursor: "pointer",
  },

  dangerButton: {
    border: "none",
    borderRadius: 15,
    padding: "14px 22px",
    background: "linear-gradient(180deg, #ef4444, #dc2626)",
    color: "#fff",
    fontWeight: 950,
    cursor: "pointer",
  },

  resultShell: {
    position: "relative",
    zIndex: 2,
    maxWidth: 860,
    margin: "0 auto",
    padding: 34,
    borderRadius: 32,
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.94), rgba(10,15,24,0.98))",
    border: "1px solid rgba(103,211,255,0.14)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.30)",
  },

  resultTitle: {
    marginTop: 18,
    fontSize: 44,
    fontWeight: 950,
    letterSpacing: "-0.04em",
  },

  resultGrid: {
    marginTop: 26,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: 16,
  },

  resultCard: {
    padding: 22,
    borderRadius: 22,
    background: "rgba(255,255,255,0.045)",
    border: "1px solid rgba(255,255,255,0.10)",
  },

  resultLabel: {
    display: "block",
    color: "rgba(226,232,240,0.62)",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
  },

  resultValue: {
    display: "block",
    marginTop: 8,
    fontSize: 32,
    color: "#8ed8ff",
  },

  resultActions: {
    marginTop: 26,
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
  },
};