"use client";

import React, { useEffect, useMemo, useState } from "react";

type Tab = "flags" | "quiz";

type FlagCode =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

type FlagItem = {
  code: FlagCode;
  name: string;
  meaning: string;
  detail: string;
  category: "flag" | "distress";
};

type DistressCombo = {
  id: string;
  label: string;
  description: string;
  sequence: FlagCode[];
};

const FLAGS: FlagItem[] = [
  {
    code: "A",
    name: "Alpha",
    meaning: "Dalgıç var, uzak dur.",
    detail:
      "Dalış operasyonu yapıldığını bildirir. Yaklaşma ve sürati düşür.",
    category: "flag",
  },
  {
    code: "B",
    name: "Bravo",
    meaning: "Tehlikeli yük taşıyorum / işlem yapıyorum.",
    detail:
      "Patlayıcı, yanıcı veya riskli kargo ile ilgili uyarı sinyalidir.",
    category: "flag",
  },
  {
    code: "C",
    name: "Charlie",
    meaning: "Evet / Onaylandı.",
    detail:
      "Mesajın alındığını ve onaylandığını belirtmek için kullanılır.",
    category: "flag",
  },
  {
    code: "D",
    name: "Delta",
    meaning: "Benden uzak dur, manevra yapmakta zorlanıyorum.",
    detail:
      "Dar alanda veya operasyon sırasında manevra kısıtlı olduğunu bildirir.",
    category: "flag",
  },
  {
    code: "E",
    name: "Echo",
    meaning: "Rotamı sancak tarafa çeviriyorum.",
    detail:
      "Teknenin sancak yönüne manevra yaptığını bildirir.",
    category: "flag",
  },
  {
    code: "F",
    name: "Foxtrot",
    meaning: "Arızalıyım, benimle iletişim kurun.",
    detail:
      "Teknenin operasyonel sorun yaşadığını ve haberleşme istediğini gösterir.",
    category: "flag",
  },
  {
    code: "G",
    name: "Golf",
    meaning: "Kılavuz istiyorum.",
    detail:
      "Özellikle liman girişlerinde pilotaj desteği talebini ifade eder.",
    category: "flag",
  },
  {
    code: "H",
    name: "Hotel",
    meaning: "Gemimde kılavuz var.",
    detail:
      "Kılavuz kaptanın teknede bulunduğunu bildirir.",
    category: "flag",
  },
  {
    code: "I",
    name: "India",
    meaning: "Rotamı iskele tarafa çeviriyorum.",
    detail:
      "Teknenin iskele yönüne manevra yaptığını gösterir.",
    category: "flag",
  },
  {
    code: "J",
    name: "Juliett",
    meaning: "Yangın var ve tehlikeli yük taşıyorum.",
    detail:
      "Yaklaşılmaması gereken yüksek riskli acil durum sinyalidir.",
    category: "distress",
  },
  {
    code: "K",
    name: "Kilo",
    meaning: "Sizinle haberleşmek istiyorum.",
    detail:
      "Karşı tekne veya istasyon ile doğrudan iletişim kurma talebidir.",
    category: "flag",
  },
  {
    code: "L",
    name: "Lima",
    meaning: "Geminizi hemen durdurun.",
    detail:
      "Acil şekilde dur emri vermek için kullanılır.",
    category: "flag",
  },
  {
    code: "M",
    name: "Mike",
    meaning: "Gemim durdu, yol yapmıyorum.",
    detail:
      "Teknenin ilerleme yapmadığını ve sabit kaldığını bildirir.",
    category: "flag",
  },
  {
    code: "N",
    name: "November",
    meaning: "Hayır / Olumsuz.",
    detail:
      "Tek başına olumsuz anlam taşır. Charlie ile distress kombinasyonunda kritik hale gelir.",
    category: "flag",
  },
  {
    code: "O",
    name: "Oscar",
    meaning: "Denize adam düştü.",
    detail:
      "Man overboard durumudur. Acil manevra ve göz temasının korunması gerekir.",
    category: "distress",
  },
  {
    code: "P",
    name: "Papa",
    meaning: "Liman terkine hazırlanıyorum.",
    detail:
      "Kalkış veya liman çıkış hazırlığını gösterir.",
    category: "flag",
  },
  {
    code: "Q",
    name: "Quebec",
    meaning: "Teknem sağlıklıdır, limana giriş talep ediyorum.",
    detail:
      "Klasik free pratique anlamında, sağlık problemi olmadığını bildirir.",
    category: "flag",
  },
  {
    code: "R",
    name: "Romeo",
    meaning: "Standart tek başına genel kullanım sınırlıdır.",
    detail:
      "Yarış veya özel uygulamalarda anlam kazanabilir.",
    category: "flag",
  },
  {
    code: "S",
    name: "Sierra",
    meaning: "Makinem tam tornistan çalışıyor.",
    detail:
      "Geminin geri yol verdiğini gösterir.",
    category: "flag",
  },
  {
    code: "T",
    name: "Tango",
    meaning: "Benden uzak durun, trol çekiyorum.",
    detail:
      "Balıkçılık veya çekim operasyonu sırasında emniyet amacıyla kullanılır.",
    category: "flag",
  },
  {
    code: "U",
    name: "Uniform",
    meaning: "Tehlikeye gidiyorsunuz.",
    detail:
      "Karşı tarafın tehlikeli bir istikamette olduğunu bildirir.",
    category: "flag",
  },
  {
    code: "V",
    name: "Victor",
    meaning: "Yardıma ihtiyacım var.",
    detail:
      "Genel yardım çağrısıdır.",
    category: "distress",
  },
  {
    code: "W",
    name: "Whiskey",
    meaning: "Tıbbi yardıma ihtiyacım var.",
    detail:
      "Sağlık aciliyetini gösterir.",
    category: "distress",
  },
  {
    code: "X",
    name: "X-ray",
    meaning: "Yaptığınızı durdurun ve talimat bekleyin.",
    detail:
      "Karşı tarafın mevcut hareketini kesmesini ister.",
    category: "flag",
  },
  {
    code: "Y",
    name: "Yankee",
    meaning: "Demir tarıyorum.",
    detail:
      "Teknenin demirde sabit kalmadığını ve sürüklendiğini gösterir.",
    category: "flag",
  },
  {
    code: "Z",
    name: "Zulu",
    meaning: "Römorkör istiyorum.",
    detail:
      "Çekme / tow assistance talebidir.",
    category: "flag",
  },
];
const DISTRESS_COMBOS: DistressCombo[] = [
  {
    id: "nc",
    label: "N + C",
    description: "Uluslararası distress / yardım çağrısı kombinasyonu.",
    sequence: ["N", "C"],
  },
  {
    id: "o",
    label: "O",
    description: "Man overboard. Denize adam düştü.",
    sequence: ["O"],
  },
  {
    id: "v",
    label: "V",
    description: "Genel yardım talebi.",
    sequence: ["V"],
  },
  {
    id: "w",
    label: "W",
    description: "Tıbbi yardım gerekiyor.",
    sequence: ["W"],
  },
  {
    id: "j",
    label: "J",
    description: "Yangın ve tehlikeli yük. Çok yüksek risk.",
    sequence: ["J"],
  },
];

const QUIZ_QUESTIONS = [
  {
    question: "Alpha bayrağı ne anlama gelir?",
    options: [
      "Tehlikeli yük taşıyorum",
      "Dalgıç var, uzak dur",
      "Denize adam düştü",
      "Römorkör istiyorum",
    ],
    answer: 1,
  },
  {
    question: "Oscar bayrağı hangi durumu bildirir?",
    options: [
      "Onaylandı",
      "Denize adam düştü",
      "Tıbbi yardım gerekiyor",
      "Liman terk ediyorum",
    ],
    answer: 1,
  },
  {
    question: "N + C kombinasyonu neyi ifade eder?",
    options: [
      "Rotamı sancağa çeviriyorum",
      "Pilot onboard",
      "Uluslararası distress çağrısı",
      "Demir tarıyorum",
    ],
    answer: 2,
  },
  {
    question: "Whiskey bayrağı hangi ihtiyacı ifade eder?",
    options: [
      "Tıbbi yardım",
      "Kılavuz kaptan",
      "Tehlikeli yük",
      "Trol çekiyorum",
    ],
    answer: 0,
  },
  {
    question: "Uniform bayrağı karşı tekneye ne söyler?",
    options: [
      "Hemen dur",
      "Tehlikeye gidiyorsunuz",
      "MOB",
      "Sancağa dönüyorum",
    ],
    answer: 1,
  },
  {
    question: "Victor bayrağı ne anlam taşır?",
    options: [
      "Yardıma ihtiyacım var",
      "Evet",
      "Hayır",
      "Römorkör istiyorum",
    ],
    answer: 0,
  },
];
export default function SignalsPage() {
  const [tab, setTab] = useState<Tab>("flags");
  const [activeFlag, setActiveFlag] = useState<FlagCode>("A");

  const [activeDistress, setActiveDistress] = useState<string>("nc");
  const [sequenceIndex, setSequenceIndex] = useState(0);

  const [quizIndex, setQuizIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentFlag = useMemo(
    () => FLAGS.find((f) => f.code === activeFlag) ?? FLAGS[0],
    [activeFlag]
  );

  const activeCombo = useMemo(
    () => DISTRESS_COMBOS.find((c) => c.id === activeDistress) ?? DISTRESS_COMBOS[0],
    [activeDistress]
  );

  const totalQuestions = QUIZ_QUESTIONS.length;
  const progress = Math.min((answeredCount / totalQuestions) * 100, 100);
  const successPercent = Math.round((score / totalQuestions) * 100);
  const certificateReady =
    quizCompleted && score >= Math.ceil(totalQuestions * 0.7);

  useEffect(() => {
    const combo = DISTRESS_COMBOS.find((c) => c.id === activeDistress);
    if (!combo) return;

    const id = window.setInterval(() => {
      setSequenceIndex((prev) => (prev + 1) % combo.sequence.length);
    }, 950);

    return () => window.clearInterval(id);
  }, [activeDistress]);

  function resetQuiz() {
    setQuizIndex(0);
    setSelected(null);
    setScore(0);
    setAnsweredCount(0);
    setQuizCompleted(false);
  }

  function answerQuiz(index: number) {
    if (selected !== null || quizCompleted) return;

    setSelected(index);

    const isCorrect = index === QUIZ_QUESTIONS[quizIndex].answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    window.setTimeout(() => {
      const nextAnswered = answeredCount + 1;
      setAnsweredCount(nextAnswered);
      setSelected(null);

      if (nextAnswered >= totalQuestions) {
        setQuizCompleted(true);
        return;
      }

      setQuizIndex((prev) => prev + 1);
    }, 850);
  }

  return (
    <main style={styles.page}>
      <style>{`
        @keyframes softFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }

        @keyframes pulseGlow {
          0% { opacity: .35; }
          50% { opacity: .95; }
          100% { opacity: .35; }
        }

        @keyframes shimmerRun {
          0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          20% { opacity: .25; }
          50% { opacity: .5; }
          80% { opacity: .25; }
          100% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
        }

        @keyframes distressPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 rgba(239,68,68,0); }
          50% { transform: scale(1.08); box-shadow: 0 0 24px rgba(239,68,68,.35); }
          100% { transform: scale(1); box-shadow: 0 0 0 rgba(239,68,68,0); }
        }

        .signal-hover {
          transition: transform .24s ease, box-shadow .24s ease, border-color .24s ease;
        }

        .signal-hover:hover {
          transform: translateY(-4px);
          border-color: rgba(125,211,252,.35);
          box-shadow: 0 18px 40px rgba(3, 10, 24, 0.28);
        }
      `}</style>

      <div style={styles.shell}>
        <section style={styles.hero}>
          <div style={styles.heroGlow} />
          <div style={styles.badge}>ALBATROS SIGNAL TRAINING</div>
          <h1 style={styles.title}>
            Denizcilik haberleşme bayrakları ve distress eğitim modülü
          </h1>
          <p style={styles.subtitle}>
            Uluslararası bayrak anlamları, distress kombinasyonları, quiz,
            ilerleme barı ve başarı durumu tek ekranda.
          </p>

          <div style={styles.tabRow}>
            <button
              onClick={() => setTab("flags")}
              style={{
                ...styles.tabBtn,
                ...(tab === "flags" ? styles.tabBtnActive : {}),
              }}
            >
              Bayraklar
            </button>

            <button
              onClick={() => setTab("quiz")}
              style={{
                ...styles.tabBtn,
                ...(tab === "quiz" ? styles.tabBtnActive : {}),
              }}
            >
              Quiz
            </button>
          </div>
        </section>
                {tab === "flags" && (
          <section style={styles.panel}>
            <div style={styles.gridTwo}>
              <div>
                <h2 style={styles.sectionTitle}>A-Z bayrak sistemi</h2>
                <p style={styles.sectionText}>
                  Bayrağa tıkla, anlamını ve kullanım detayını görüntüle.
                </p>

                <div style={styles.flagGrid}>
                  {FLAGS.map((flag) => {
                    const isActive = activeFlag === flag.code;
                    const isDistress = flag.category === "distress";

                    return (
                      <button
                        key={flag.code}
                        onClick={() => setActiveFlag(flag.code)}
                        className="signal-hover"
                        style={{
                          ...styles.flagCard,
                          ...(isActive ? styles.flagCardActive : {}),
                          ...(isDistress ? styles.flagCardDistress : {}),
                          animation: isActive ? "softFloat 3.2s ease-in-out infinite" : undefined,
                        }}
                      >
                        <div style={styles.flagCardGlow} />
                        <div style={styles.flagCardShimmer} />
                        <div style={styles.flagSvgBox}>
                          <FlagSVG code={flag.code} />
                        </div>
                        <div style={styles.flagCode}>{flag.code}</div>
                        <div style={styles.flagName}>{flag.name}</div>
                        <div style={styles.flagMeta}>
                          {flag.category === "distress" ? "DISTRESS" : "STANDARD"}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div style={styles.detailCard}>
                <div style={styles.detailTop}>
                  <div style={styles.detailVisual}>
                    <FlagSVG code={currentFlag.code} />
                  </div>

                  <div>
                    <div style={styles.detailEyebrow}>
                      {currentFlag.category === "distress"
                        ? "DISTRESS SIGNAL"
                        : "INTERNATIONAL CODE FLAG"}
                    </div>
                    <h3 style={styles.detailTitle}>
                      {currentFlag.name} ({currentFlag.code})
                    </h3>
                    <p style={styles.detailMeaning}>{currentFlag.meaning}</p>
                  </div>
                </div>

                <p style={styles.detailText}>{currentFlag.detail}</p>

                <div style={styles.infoGrid}>
                  <InfoBox
                    title="NC"
                    text="Uluslararası distress çağrısı."
                  />
                  <InfoBox
                    title="Oscar"
                    text="Man overboard, göz teması kaybedilmemeli."
                  />
                  <InfoBox
                    title="Whiskey"
                    text="Tıbbi yardım ihtiyacı."
                  />
                </div>

                <div style={styles.distressWrap}>
                  <div style={styles.distressTopRow}>
                    <div>
                      <div style={styles.detailEyebrow}>DISTRESS COMBINATIONS</div>
                      <h4 style={styles.distressTitle}>
                        Animasyonlu distress gösterimi
                      </h4>
                    </div>

                    <div style={styles.distressTabs}>
                      {DISTRESS_COMBOS.map((combo) => (
                        <button
                          key={combo.id}
                          onClick={() => {
                            setActiveDistress(combo.id);
                            setSequenceIndex(0);
                          }}
                          style={{
                            ...styles.distressTab,
                            ...(activeDistress === combo.id
                              ? styles.distressTabActive
                              : {}),
                          }}
                        >
                          {combo.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div style={styles.distressViewer}>
                    {activeCombo.sequence.map((code, index) => {
                      const active = index === sequenceIndex;

                      return (
                        <div
                          key={`${activeCombo.id}-${code}-${index}`}
                          style={{
                            ...styles.distressFlagFrame,
                            ...(active
                              ? styles.distressFlagFrameActive
                              : styles.distressFlagFramePassive),
                            animation: active
                              ? "distressPulse 1.1s ease-in-out infinite"
                              : undefined,
                          }}
                        >
                          <FlagSVG code={code} />
                        </div>
                      );
                    })}
                  </div>

                  <p style={styles.distressText}>{activeCombo.description}</p>
                </div>
              </div>
            </div>
          </section>
        )}
                {tab === "quiz" && (
          <section style={styles.panel}>
            <div style={styles.quizWrap}>
              <div style={styles.quizHeader}>
                <div>
                  <div style={styles.detailEyebrow}>QUIZ MODE</div>
                  <h2 style={styles.sectionTitle}>Bilgini test et</h2>
                </div>

                <div style={styles.scoreCluster}>
                  <div style={styles.scoreBadge}>Skor: {score}</div>
                  <div style={styles.scoreSecondary}>Başarı: %{successPercent}</div>
                </div>
              </div>

              <div style={styles.progressWrap}>
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${progress}%`,
                    }}
                  />
                </div>

                <div style={styles.progressText}>
                  {quizCompleted
                    ? `Quiz tamamlandı • ${answeredCount}/${totalQuestions}`
                    : `${answeredCount}/${totalQuestions} tamamlandı`}
                </div>
              </div>

              {!quizCompleted && (
                <div style={styles.quizCard}>
                  <div style={styles.quizIndex}>
                    Soru {quizIndex + 1} / {totalQuestions}
                  </div>

                  <p style={styles.quizQuestion}>
                    {QUIZ_QUESTIONS[quizIndex].question}
                  </p>

                  <div style={styles.quizOptions}>
                    {QUIZ_QUESTIONS[quizIndex].options.map((option, index) => {
                      const isCorrect = index === QUIZ_QUESTIONS[quizIndex].answer;
                      const isSelected = selected === index;

                      return (
                        <button
                          key={`${quizIndex}-${option}`}
                          onClick={() => answerQuiz(index)}
                          className="signal-hover"
                          style={{
                            ...styles.quizOption,
                            ...(isSelected && isCorrect
                              ? styles.quizOptionCorrect
                              : {}),
                            ...(isSelected && !isCorrect
                              ? styles.quizOptionWrong
                              : {}),
                          }}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  <p style={styles.quizHint}>
                    Her cevap sonrası sistem otomatik olarak sonraki soruya geçer.
                  </p>
                </div>
              )}

              {quizCompleted && (
                <div style={styles.resultCard}>
                  <div style={styles.resultGlow} />
                  <div style={styles.resultEyebrow}>RESULT</div>
                  <h3 style={styles.resultTitle}>Quiz tamamlandı</h3>
                  <p style={styles.resultText}>
                    Toplam <strong>{score}</strong> doğru yaptın. Başarı oranı{" "}
                    <strong>%{successPercent}</strong>.
                  </p>

                  <div
                    style={{
                      ...styles.certificateState,
                      ...(certificateReady
                        ? styles.certificateStateSuccess
                        : styles.certificateStatePending),
                    }}
                  >
                    {certificateReady
                      ? "Sertifika almaya hak kazandı"
                      : "Sertifika için başarı oranı yetersiz"}
                  </div>

                  <div style={styles.resultActions}>
                    <button onClick={resetQuiz} style={styles.primaryBtn}>
                      Quizi yeniden başlat
                    </button>
                  </div>
                </div>
              )}

              {!quizCompleted && (
                <div style={styles.statusCard}>
                  <div style={styles.detailEyebrow}>CERTIFICATE STATUS</div>
                  <h3 style={styles.statusTitle}>
                    Eğitim yeterlilik durumu takip ediliyor
                  </h3>
                  <p style={styles.statusText}>
                    Sertifika mantığına bağlamadan önce burada başarı seviyesi
                    izlenir. Hedef, toplam soruların en az %70’ini doğru cevaplamak.
                  </p>
                </div>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
function InfoBox({ title, text }: { title: string; text: string }) {
  return (
    <div style={styles.infoBox}>
      <div style={styles.infoTitle}>{title}</div>
      <div style={styles.infoText}>{text}</div>
    </div>
  );
}

function FlagSVG({ code }: { code: FlagCode }) {
  const common: React.CSSProperties = {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    overflow: "hidden",
    display: "block",
  };

  const tile = (bg: string, label: string) => (
    <div
      style={{
        ...common,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontWeight: 900,
        fontSize: 28,
        letterSpacing: 1,
      }}
    >
      {label}
    </div>
  );

  if (code === "A") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <rect width="120" height="120" fill="#ffffff" />
        <rect x="40" width="40" height="120" fill="#1d4ed8" />
      </svg>
    );
  }

  if (code === "B") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <rect width="120" height="120" fill="#dc2626" />
      </svg>
    );
  }

  if (code === "C") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <rect width="120" height="120" fill="#1d4ed8" />
        <rect x="60" y="0" width="60" height="60" fill="#ffffff" />
        <rect x="60" y="60" width="60" height="60" fill="#dc2626" />
      </svg>
    );
  }

  if (code === "N") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <polygon points="0,0 120,120 0,120" fill="#1d4ed8" />
        <polygon points="0,0 120,0 120,120" fill="#ffffff" />
      </svg>
    );
  }

  if (code === "O") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <polygon points="0,0 120,120 0,120" fill="#facc15" />
        <polygon points="0,0 120,0 120,120" fill="#dc2626" />
      </svg>
    );
  }

  if (code === "Q") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <rect width="120" height="120" fill="#facc15" />
      </svg>
    );
  }

  if (code === "V") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <rect width="120" height="120" fill="#ffffff" />
        <path d="M0 0 L120 120" stroke="#dc2626" strokeWidth="22" />
        <path d="M120 0 L0 120" stroke="#dc2626" strokeWidth="22" />
      </svg>
    );
  }

  if (code === "W") {
    return (
      <svg viewBox="0 0 120 120" style={common}>
        <rect width="120" height="120" fill="#1d4ed8" />
        <rect x="30" y="0" width="30" height="120" fill="#ffffff" />
        <rect x="60" y="0" width="30" height="120" fill="#dc2626" />
      </svg>
    );
  }

  if (code === "J") {
    return tile("linear-gradient(135deg,#7f1d1d,#dc2626)", "J");
  }

  if (code === "D") return tile("linear-gradient(135deg,#1d4ed8,#facc15)", "D");
  if (code === "E") return tile("linear-gradient(135deg,#1d4ed8,#dc2626)", "E");
  if (code === "F") return tile("linear-gradient(135deg,#ef4444,#ffffff)", "F");
  if (code === "G") return tile("linear-gradient(135deg,#facc15,#1d4ed8)", "G");
  if (code === "H") return tile("linear-gradient(135deg,#ffffff,#dc2626)", "H");
  if (code === "I") return tile("linear-gradient(135deg,#facc15,#111827)", "I");
  if (code === "K") return tile("linear-gradient(135deg,#facc15,#1d4ed8)", "K");
  if (code === "L") return tile("linear-gradient(135deg,#facc15,#111827)", "L");
  if (code === "M") return tile("linear-gradient(135deg,#1d4ed8,#ffffff)", "M");
  if (code === "P") return tile("linear-gradient(135deg,#1d4ed8,#ffffff)", "P");
  if (code === "R") return tile("linear-gradient(135deg,#dc2626,#facc15)", "R");
  if (code === "S") return tile("linear-gradient(135deg,#ffffff,#1d4ed8)", "S");
  if (code === "T") return tile("linear-gradient(135deg,#dc2626,#ffffff)", "T");
  if (code === "U") return tile("linear-gradient(135deg,#dc2626,#ffffff)", "U");
  if (code === "X") return tile("linear-gradient(135deg,#ffffff,#1d4ed8)", "X");
  if (code === "Y") return tile("linear-gradient(135deg,#facc15,#dc2626)", "Y");
  if (code === "Z") return tile("linear-gradient(135deg,#111827,#dc2626)", "Z");

  return tile("linear-gradient(135deg,#0f172a,#1e293b)", code);
}
const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(37,99,235,0.22), transparent 28%), linear-gradient(180deg, #06111f 0%, #081528 46%, #0a1830 100%)",
    color: "#f8fafc",
    padding: "28px 14px 56px",
  },
  shell: {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(10,18,34,0.72)",
    backdropFilter: "blur(16px)",
    borderRadius: 28,
    padding: "28px 22px",
    boxShadow: "0 24px 80px rgba(0,0,0,0.34)",
    marginBottom: 22,
  },
  heroGlow: {
    position: "absolute",
    inset: "-40% auto auto -10%",
    width: 320,
    height: 320,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)",
    animation: "pulseGlow 4s ease-in-out infinite",
    pointerEvents: "none",
  },
  badge: {
    display: "inline-flex",
    padding: "8px 12px",
    borderRadius: 999,
    border: "1px solid rgba(125,211,252,0.22)",
    background: "rgba(17,24,39,0.56)",
    color: "#7dd3fc",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: 1.2,
    marginBottom: 16,
    position: "relative",
    zIndex: 1,
  },
  title: {
    margin: 0,
    fontSize: "clamp(30px, 5vw, 56px)",
    lineHeight: 1.02,
    letterSpacing: -1.2,
    maxWidth: 920,
    position: "relative",
    zIndex: 1,
  },
  subtitle: {
    marginTop: 16,
    marginBottom: 0,
    color: "rgba(226,232,240,0.82)",
    fontSize: 16,
    lineHeight: 1.75,
    maxWidth: 760,
    position: "relative",
    zIndex: 1,
  },
  tabRow: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
    marginTop: 24,
    position: "relative",
    zIndex: 1,
  },
  tabBtn: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(15,23,42,0.8)",
    color: "#cbd5e1",
    borderRadius: 14,
    padding: "12px 16px",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 800,
  },
  tabBtnActive: {
    background: "linear-gradient(135deg, #0ea5e9, #2563eb)",
    color: "#ffffff",
    border: "1px solid rgba(125,211,252,0.55)",
    boxShadow: "0 12px 30px rgba(37,99,235,0.32)",
  },
  panel: {
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(10,18,34,0.78)",
    backdropFilter: "blur(16px)",
    borderRadius: 28,
    padding: 22,
    boxShadow: "0 20px 80px rgba(0,0,0,0.26)",
  },
  gridTwo: {
    display: "grid",
    gridTemplateColumns: "1.1fr 0.9fr",
    gap: 20,
  },
  sectionTitle: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.15,
    letterSpacing: -0.4,
  },
  sectionText: {
    marginTop: 10,
    marginBottom: 20,
    color: "rgba(226,232,240,0.8)",
    fontSize: 15,
    lineHeight: 1.7,
  },
  flagGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(122px, 1fr))",
    gap: 14,
  },
  flagCard: {
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "linear-gradient(180deg, rgba(15,23,42,0.9), rgba(9,16,28,0.98))",
    borderRadius: 18,
    padding: 12,
    cursor: "pointer",
    textAlign: "left",
    color: "#fff",
  },
  flagCardActive: {
    border: "1px solid rgba(125,211,252,0.45)",
    boxShadow: "0 18px 42px rgba(14,165,233,0.16)",
  },
  flagCardDistress: {
    boxShadow: "inset 0 0 0 1px rgba(239,68,68,0.18)",
  },
  flagCardGlow: {
    position: "absolute",
    inset: -30,
    background:
      "radial-gradient(circle at top, rgba(14,165,233,0.16), transparent 50%)",
    pointerEvents: "none",
  },
  flagCardShimmer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "-40%",
    width: "40%",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent)",
    transform: "skewX(-18deg)",
    animation: "shimmerRun 4.2s ease-in-out infinite",
    pointerEvents: "none",
  },
  flagSvgBox: {
    position: "relative",
    width: "100%",
    aspectRatio: "1 / 1",
    borderRadius: 14,
    overflow: "hidden",
    marginBottom: 10,
    background: "#0f172a",
  },
  flagCode: {
    position: "relative",
    fontSize: 12,
    color: "#7dd3fc",
    fontWeight: 900,
    letterSpacing: 1,
    marginBottom: 4,
  },
  flagName: {
    position: "relative",
    fontSize: 15,
    fontWeight: 800,
    color: "#f8fafc",
  },
  flagMeta: {
    position: "relative",
    marginTop: 8,
    fontSize: 11,
    color: "rgba(226,232,240,0.62)",
    fontWeight: 700,
    letterSpacing: 0.8,
  },
  detailCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.94), rgba(8,15,30,0.98))",
    borderRadius: 24,
    padding: 20,
  },
  detailTop: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 18,
  },
  detailVisual: {
    width: 148,
    height: 148,
    borderRadius: 20,
    overflow: "hidden",
    background: "#0f172a",
    border: "1px solid rgba(255,255,255,0.08)",
    flexShrink: 0,
  },
  detailEyebrow: {
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 1.2,
    color: "#7dd3fc",
    marginBottom: 8,
  },
  detailTitle: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.1,
  },
  detailMeaning: {
    margin: "10px 0 0",
    fontSize: 16,
    fontWeight: 800,
    color: "#f8fafc",
    lineHeight: 1.6,
  },
  detailText: {
    margin: "0 0 18px",
    fontSize: 15,
    lineHeight: 1.8,
    color: "rgba(226,232,240,0.84)",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: 12,
    marginBottom: 18,
  },
  infoBox: {
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 16,
    padding: 14,
  },
  infoTitle: {
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 1,
    color: "#7dd3fc",
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: "#e2e8f0",
    lineHeight: 1.6,
  },
  distressWrap: {
    marginTop: 6,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 20,
    padding: 16,
  },
  distressTopRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: 14,
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  distressTitle: {
    margin: 0,
    fontSize: 20,
    lineHeight: 1.3,
  },
  distressTabs: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
  },
  distressTab: {
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(15,23,42,0.72)",
    color: "#cbd5e1",
    borderRadius: 12,
    padding: "10px 12px",
    cursor: "pointer",
    fontWeight: 800,
    fontSize: 13,
  },
  distressTabActive: {
    background: "linear-gradient(135deg,#ef4444,#b91c1c)",
    color: "#fff",
    border: "1px solid rgba(254,202,202,0.22)",
  },
  distressViewer: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  distressFlagFrame: {
    width: 104,
    height: 104,
    borderRadius: 18,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(15,23,42,0.76)",
    transition: "all .3s ease",
  },
  distressFlagFrameActive: {
    opacity: 1,
    boxShadow: "0 0 26px rgba(239,68,68,0.3)",
  },
  distressFlagFramePassive: {
    opacity: 0.42,
  },
  distressText: {
    margin: "8px 0 0",
    textAlign: "center",
    color: "#e2e8f0",
    lineHeight: 1.7,
    fontSize: 14,
  },
  quizWrap: {
    display: "grid",
    gap: 18,
  },
  quizHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
  },
  scoreCluster: {
    display: "flex",
    gap: 10,
    flexWrap: "wrap",
  },
  scoreBadge: {
    borderRadius: 999,
    padding: "10px 14px",
    fontWeight: 900,
    fontSize: 14,
    color: "#ecfeff",
    background: "linear-gradient(135deg, #0891b2, #2563eb)",
    border: "1px solid rgba(125,211,252,0.3)",
  },
  scoreSecondary: {
    borderRadius: 999,
    padding: "10px 14px",
    fontWeight: 900,
    fontSize: 14,
    color: "#dbeafe",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  progressWrap: {
    marginTop: 4,
  },
  progressBar: {
    width: "100%",
    height: 10,
    borderRadius: 999,
    background: "rgba(255,255,255,0.08)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #22c55e, #0ea5e9)",
    transition: "width .35s ease",
    boxShadow: "0 0 24px rgba(14,165,233,0.28)",
  },
  progressText: {
    marginTop: 8,
    fontSize: 12,
    color: "#94a3b8",
    fontWeight: 700,
  },
  quizCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(8,15,30,0.98))",
    borderRadius: 24,
    padding: 20,
  },
  quizIndex: {
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 1,
    color: "#7dd3fc",
    marginBottom: 12,
  },
  quizQuestion: {
    margin: 0,
    fontSize: 24,
    lineHeight: 1.45,
    fontWeight: 800,
  },
  quizOptions: {
    display: "grid",
    gap: 12,
    marginTop: 18,
  },
  quizOption: {
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    color: "#f8fafc",
    borderRadius: 16,
    padding: "14px 16px",
    cursor: "pointer",
    textAlign: "left",
    fontWeight: 700,
    fontSize: 15,
  },
  quizOptionCorrect: {
    background: "rgba(34,197,94,0.18)",
    border: "1px solid rgba(34,197,94,0.45)",
    color: "#dcfce7",
  },
  quizOptionWrong: {
    background: "rgba(239,68,68,0.18)",
    border: "1px solid rgba(239,68,68,0.42)",
    color: "#fee2e2",
  },
  quizHint: {
    marginTop: 14,
    fontSize: 13,
    color: "rgba(226,232,240,0.72)",
  },
  resultCard: {
    position: "relative",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.08)",
    background:
      "linear-gradient(180deg, rgba(15,23,42,0.95), rgba(8,15,30,0.98))",
    borderRadius: 24,
    padding: 22,
  },
  resultGlow: {
    position: "absolute",
    inset: "-20% auto auto -10%",
    width: 280,
    height: 280,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(34,197,94,0.16), transparent 70%)",
    pointerEvents: "none",
  },
  resultEyebrow: {
    position: "relative",
    fontSize: 12,
    fontWeight: 900,
    letterSpacing: 1.2,
    color: "#7dd3fc",
    marginBottom: 10,
  },
  resultTitle: {
    position: "relative",
    margin: 0,
    fontSize: 30,
    lineHeight: 1.15,
  },
  resultText: {
    position: "relative",
    margin: "12px 0 0",
    color: "rgba(226,232,240,0.84)",
    fontSize: 15,
    lineHeight: 1.8,
  },
  certificateState: {
    position: "relative",
    marginTop: 16,
    borderRadius: 14,
    padding: "12px 14px",
    fontWeight: 900,
    fontSize: 14,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateStateSuccess: {
    background: "rgba(34,197,94,0.18)",
    color: "#dcfce7",
    border: "1px solid rgba(34,197,94,0.38)",
  },
  certificateStatePending: {
    background: "rgba(245,158,11,0.14)",
    color: "#fde68a",
    border: "1px solid rgba(245,158,11,0.28)",
  },
  resultActions: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },
  primaryBtn: {
    border: "1px solid rgba(125,211,252,0.34)",
    background: "linear-gradient(135deg,#0ea5e9,#2563eb)",
    color: "#fff",
    borderRadius: 14,
    padding: "12px 16px",
    cursor: "pointer",
    fontWeight: 900,
    fontSize: 14,
  },
  statusCard: {
    border: "1px solid rgba(255,255,255,0.08)",
    background:
      "linear-gradient(180deg, rgba(10,18,34,0.9), rgba(8,15,30,0.98))",
    borderRadius: 22,
    padding: 18,
  },
  statusTitle: {
    margin: 0,
    fontSize: 20,
    lineHeight: 1.3,
  },
  statusText: {
    margin: "10px 0 0",
    color: "rgba(226,232,240,0.8)",
    fontSize: 14,
    lineHeight: 1.75,
  },
};