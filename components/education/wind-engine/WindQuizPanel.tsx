"use client";

import { useMemo, useState } from "react";

type WindQuizPanelProps = {
  speedKnots: number;
  beaufortForce: number;
  cardinalLabel: string;
  relativeWind: string;
  status: string;
};

type QuizQuestion = {
  id: string;
  question: string;
  context?: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

export function WindQuizPanel({
  speedKnots,
  beaufortForce,
  cardinalLabel,
  relativeWind,
  status,
}: WindQuizPanelProps) {
  const questions = useMemo<QuizQuestion[]>(() => {
    const q1Correct =
      speedKnots <= 6
        ? "Hafif rüzgâr, eğitim ve temel manevra için uygun olabilir."
        : speedKnots <= 16
        ? "Kontrollü eğitim, dikkatli yelken ve planlı operasyon gerekir."
        : "Daha yüksek dikkat, sınırlama ve deneyim gerektirir.";

    const q2Correct =
      beaufortForce <= 2
        ? `Bf ${beaufortForce} seviyesinde yüzey etkisi düşük kalır.`
        : beaufortForce <= 4
        ? `Bf ${beaufortForce} seviyesinde yüzey ve tekne tepkileri daha belirgin hale gelir.`
        : `Bf ${beaufortForce} seviyesinde operasyonel karar daha kritik hale gelir.`;

    const q3Correct =
      relativeWind === "headwind"
        ? "Rüzgâr baştan geliyor; hız yönetimi ve denge daha önemlidir."
        : relativeWind === "tailwind"
        ? "Rüzgâr kıçtan geliyor; rota kontrolü ve ani hızlanmalara dikkat gerekir."
        : "Rüzgâr yandan geliyor; yatış, denge ve trim kontrolü daha önemlidir.";

    return [
      {
        id: "wind-01",
        question: "Mevcut rüzgâr hızına göre en doğru genel değerlendirme hangisidir?",
        context: `${speedKnots} knot • Bf ${beaufortForce}`,
        options: [
          "Hafif rüzgâr, eğitim ve temel manevra için uygun olabilir.",
          "Kontrollü eğitim, dikkatli yelken ve planlı operasyon gerekir.",
          "Daha yüksek dikkat, sınırlama ve deneyim gerektirir.",
          "Rüzgâr değeri karar vermede önemli değildir.",
        ],
        correctAnswer: q1Correct,
        explanation:
          "Rüzgâr arttıkça tekne tepkileri, deniz yüzeyi ve karar baskısı birlikte artar. Operasyonel değerlendirme sadece knot değil, etkisinin seviyesiyle yapılır.",
      },
      {
        id: "wind-02",
        question: "Beaufort seviyesinin pratik karşılığı için en doğru ifade hangisidir?",
        context: `Aktif seviye: Bf ${beaufortForce}`,
        options: [
          `Bf ${beaufortForce} seviyesinde yüzey etkisi düşük kalır.`,
          `Bf ${beaufortForce} seviyesinde yüzey ve tekne tepkileri daha belirgin hale gelir.`,
          `Bf ${beaufortForce} seviyesinde operasyonel karar daha kritik hale gelir.`,
          "Beaufort yalnızca teorik bir sınıflamadır, karar sürecine etkisi yoktur.",
        ],
        correctAnswer: q2Correct,
        explanation:
          "Beaufort yalnızca sayı değil; yüzey görüntüsü, kontrol hissi, yatış ve güvenlik kararının seviyesidir.",
      },
      {
        id: "wind-03",
        question: "Bağıl rüzgâr yönüne göre en doğru yorum hangisidir?",
        context: `${cardinalLabel} • ${relativeWind}`,
        options: [
          "Rüzgâr baştan geliyor; hız yönetimi ve denge daha önemlidir.",
          "Rüzgâr kıçtan geliyor; rota kontrolü ve ani hızlanmalara dikkat gerekir.",
          "Rüzgâr yandan geliyor; yatış, denge ve trim kontrolü daha önemlidir.",
          "Bağıl rüzgâr yönü eğitim kararını etkilemez.",
        ],
        correctAnswer: q3Correct,
        explanation:
          "Bağıl rüzgâr teknenin davranışını doğrudan etkiler. Baş, kıç veya apaz etkisi aynı sonuçları üretmez.",
      },
      {
        id: "wind-04",
        question: "Mevcut operasyon statüsüne göre kaptan yaklaşımı nasıl olmalıdır?",
        context: `Status: ${status}`,
        options: [
          "Status ne olursa olsun aynı operasyon yapılabilir.",
          "Statü, rota, ekip ve eğitim yoğunluğunu yeniden yorumlatır.",
          "Status yalnızca teorik bilgi amaçlıdır.",
          "Sadece pusula yönü önemlidir, operasyon statüsü önemli değildir.",
        ],
        correctAnswer:
          "Statü, rota, ekip ve eğitim yoğunluğunu yeniden yorumlatır.",
        explanation:
          "Karar sistemi tek değişkene dayanmaz. Statü; rüzgâr, deniz yüzeyi ve eğitim yaklaşımını birlikte etkiler.",
      },
      {
        id: "wind-05",
        question: "Aşağıdakilerden hangisi profesyonel denizcilik eğitimi yaklaşımına daha uygundur?",
        context: "Training mindset",
        options: [
          "Sadece knot değerine bakıp karar vermek",
          "Rüzgâr, yön, deniz yüzeyi ve operasyon statüsünü birlikte yorumlamak",
          "Yalnızca teorik bilgiyle hareket etmek",
          "Simülasyon dışındaki değişkenleri önemsiz görmek",
        ],
        correctAnswer:
          "Rüzgâr, yön, deniz yüzeyi ve operasyon statüsünü birlikte yorumlamak",
        explanation:
          "Gerçek eğitim yaklaşımı tek veri değil, sistematik yorum ister. Knot, yön, yüzey ve kaptan kararı birlikte okunmalıdır.",
      },
    ];
  }, [speedKnots, beaufortForce, cardinalLabel, relativeWind, status]);

  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const answeredCount = Object.keys(selectedAnswers).length;

  const score = useMemo(() => {
    return questions.reduce((total, q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        return total + 1;
      }
      return total;
    }, 0);
  }, [questions, selectedAnswers]);

  const percentage = Math.round((score / questions.length) * 100);

  const resultLabel =
    percentage >= 90
      ? "Advanced Awareness"
      : percentage >= 70
      ? "Operationally Aware"
      : percentage >= 50
      ? "Developing Interpretation"
      : "Needs Review";

  const handleSelect = (questionId: string, answer: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <section className="rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
            Wind Quiz
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Interpretation Check
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70">
            Rüzgâr, Beaufort, bağıl yön ve operasyon statüsünü birlikte yorumlama
            becerisini ölçen kısa kontrol modülü.
          </p>
        </div>

        <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4 text-sm">
          <div className="text-xs uppercase tracking-[0.18em] text-white/50">
            Progress
          </div>
          <div className="mt-2 font-medium text-white">
            {answeredCount} / {questions.length} answered
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {questions.map((q, qIndex) => {
          const selected = selectedAnswers[q.id] ?? "";

          return (
            <div
              key={q.id}
              className="rounded-[24px] border border-white/10 bg-[#08111c]/70 p-5"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                    Question {qIndex + 1}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{q.question}</h3>
                  {q.context ? (
                    <p className="mt-2 text-sm leading-6 text-cyan-200/70">
                      {q.context}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5 grid gap-2 md:grid-cols-2">
                {q.options.map((option, index) => {
                  const active = selected === option;
                  const revealCorrect = submitted && option === q.correctAnswer;
                  const revealWrong =
                    submitted && active && option !== q.correctAnswer;

                  return (
                    <button
                      key={`${q.id}-${option}-${index}`}
                      type="button"
                      onClick={() => handleSelect(q.id, option)}
                      className={`rounded-[18px] border px-4 py-4 text-left transition ${
                        revealCorrect
                          ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-50"
                          : revealWrong
                          ? "border-rose-400/40 bg-rose-400/10 text-rose-50"
                          : active
                          ? "border-cyan-300/35 bg-cyan-300/10 text-cyan-50"
                          : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8"
                      }`}
                    >
                      <div className="text-sm font-medium leading-6">
                        {option}
                      </div>
                    </button>
                  );
                })}
              </div>

              {submitted ? (
                <div className="mt-5 rounded-[20px] border border-white/10 bg-black/20 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/45">
                    Explanation
                  </div>
                  <p className="mt-2 text-sm leading-7 text-white/72">
                    {q.explanation}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-8 rounded-[26px] border border-white/10 bg-white/5 p-5">
        <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/50">
              Quiz Result
            </div>

            <div className="mt-4 text-4xl font-semibold">
              {submitted ? `${score}/${questions.length}` : "--"}
            </div>

            <div className="mt-2 text-sm text-cyan-200/75">
              {submitted ? `${percentage}% • ${resultLabel}` : "Submit to reveal score"}
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-[linear-gradient(90deg,#67d3ff,#7cf7d4)] transition-all duration-500"
                style={{ width: submitted ? `${percentage}%` : "0%" }}
              />
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <p className="text-sm leading-7 text-white/68">
              Bu modül yalnızca doğru şıkkı bulmayı değil, rüzgâr verisini
              operasyonel okuma alışkanlığını ölçer. Amaç sistematik denizcilik
              düşüncesi oluşturmaktır.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-2xl border border-cyan-300/30 bg-cyan-300/10 px-5 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/15"
              >
                Sonuçları Gör
              </button>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/8"
              >
                Yeniden Başlat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}