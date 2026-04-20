"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const lessonCards = [
  {
    title: "Almanac nedir?",
    text: "Nautical Almanac; Güneş, Ay, gezegenler ve seçili yıldızların göksel koordinatlarını, zaman ilişkilerini ve sextant gözlemlerinde kullanılacak temel astronomik verileri veren resmi navigasyon kaynağıdır.",
  },
  {
    title: "Neden hâlâ önemlidir?",
    text: "Elektronik sistemler güçlüdür; ama klasik navigasyon düşüncesi, zaman-gök cismi-gözlem-hesap zincirini kurabilen kaptanda yaşar. Almanac bu zincirin merkezindedir.",
  },
  {
    title: "Asıl öğrettiği şey",
    text: "Sadece tablo okumayı değil; GMT, GHA, declination, increment, correction ve sight reduction mantığını birbirine bağlayan denizcilik disiplinini öğretir.",
  },
  {
    title: "Bu modül ne yapar?",
    text: "Öğrenciyi pasif bırakmaz. Almanac sayfalarının neden kullanıldığını, hangi verinin hangi hesap için gerektiğini ve gözlem sonrası karar mantığını sistematik hale getirir.",
  },
];

const coreTopics = [
  {
    badge: "FOUNDATION",
    title: "Nautical Almanac’ın yapısı",
    body: "Almanac içindeki günlük sayfalar, Aries verileri, Güneş / Ay / gezegen tabloları, yıldız sayfaları ve correction bölümleri birbirinden bağımsız değildir. Öğrencinin ilk kazanımı bu yapıyı harita gibi okuyabilmesidir.",
  },
  {
    badge: "TIME LOGIC",
    title: "GMT / UT ve zaman disiplini",
    body: "Göksel navigasyonun en kırılgan noktalarından biri zamandır. Almanac eğitimi, saati sadece saat olarak değil; gözlemi çözülebilir veriye dönüştüren temel referans olarak öğretir.",
  },
  {
    badge: "COORDINATE THINKING",
    title: "GHA ve Declination mantığı",
    body: "GHA, bir gök cisminin Greenwich’e göre konum dilini; declination ise göksel ekvatora göre kuzey-güney ilişkisini verir. Bunları ezber değil, uzaydaki konum mantığı olarak kurmak gerekir.",
  },
  {
    badge: "APPLICATION",
    title: "Sextant gözlemine bağlanması",
    body: "Almanac tek başına kullanılmaz. Sextant ölçüsü, gözlem zamanı, index correction, dip, refraction ve son hesap adımlarıyla birlikte anlam kazanır. Eğitim burada gerçek kaptanlık disiplinine dönüşür.",
  },
];

const workflow = [
  {
    step: "1",
    title: "Doğru zamanı sabitle",
    text: "Gözlem anının GMT/UT referansını doğru kaydet. Almanac’ın dili zamanla çalışır; zamanı kaydırırsan bütün çözüm kayar.",
  },
  {
    step: "2",
    title: "Doğru gök cismi verisini bul",
    text: "Güneş, Ay, gezegen veya yıldız için ilgili sayfayı seç. Hangi sayfanın neden açıldığını anlamak, ezberden daha değerlidir.",
  },
  {
    step: "3",
    title: "GHA / Declination oku",
    text: "Saat, dakika ve gerekiyorsa increment kullanarak ara değeri kur. Burada tablo okuma değil, koordinat mantığı kurma becerisi gelişir.",
  },
  {
    step: "4",
    title: "Sight reduction zincirine bağla",
    text: "Almanac verisini sextant gözlemiyle birleştir. Böylece gök cismini sadece görmüş olmazsın; onu pozisyon çözümüne dönüştürürsün.",
  },
];

const glossary = [
  ["GMT / UT", "Almanac hesaplamasında temel zaman referansı."],
  ["GHA", "Greenwich Hour Angle; cismin Greenwich’e göre açısal konumu."],
  ["Declination", "Cismin göksel ekvatora göre kuzey-güney açısal konumu."],
  ["Increment", "Saat başı tablolar arasındaki dakika/saniye düzeltme mantığı."],
  ["Aries", "Yıldız sight reduction zincirinde referans alınan temel nokta."],
  ["SHA", "Sidereal Hour Angle; yıldızların Aries’e göre açısal ilişkisi."],
];

type BodyName = "Sun" | "Moon" | "Venus" | "Mars" | "Jupiter" | "Star";

function normalize360(v: number) {
  const x = v % 360;
  return x < 0 ? x + 360 : x;
}

function fmtDeg(v: number) {
  return `${normalize360(v).toFixed(1)}°`;
}

function clamp(v: number, min: number, max: number) {
  return Math.max(min, Math.min(max, v));
}

function fakeBaseGHA(body: BodyName) {
  switch (body) {
    case "Sun":
      return 148.4;
    case "Moon":
      return 216.8;
    case "Venus":
      return 88.2;
    case "Mars":
      return 302.5;
    case "Jupiter":
      return 41.9;
    case "Star":
      return 17.3;
  }
}

function fakeBaseDec(body: BodyName) {
  switch (body) {
    case "Sun":
      return 13.4;
    case "Moon":
      return -8.6;
    case "Venus":
      return 21.2;
    case "Mars":
      return -15.1;
    case "Jupiter":
      return 9.7;
    case "Star":
      return 27.8;
  }
}

function fakeRate(body: BodyName) {
  switch (body) {
    case "Sun":
      return 15.0;
    case "Moon":
      return 14.4;
    case "Venus":
      return 15.2;
    case "Mars":
      return 14.8;
    case "Jupiter":
      return 15.1;
    case "Star":
      return 15.0;
  }
}

function fakeDecDrift(body: BodyName) {
  switch (body) {
    case "Sun":
      return 0.02;
    case "Moon":
      return 0.08;
    case "Venus":
      return -0.01;
    case "Mars":
      return 0.03;
    case "Jupiter":
      return -0.02;
    case "Star":
      return 0.0;
  }
}

function fakeObservedAltitude(body: BodyName, minute: number) {
  const base =
    body === "Sun"
      ? 38.6
      : body === "Moon"
      ? 44.1
      : body === "Venus"
      ? 27.3
      : body === "Mars"
      ? 31.9
      : body === "Jupiter"
      ? 35.7
      : 25.8;
  return base + Math.sin(minute / 60) * 0.5;
}

type QuizItem = {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation: string;
};

export default function AlmanacGuidePage() {
  const [body, setBody] = useState<BodyName>("Sun");
  const [hour, setHour] = useState(14);
  const [minute, setMinute] = useState(22);
  const [drLat, setDrLat] = useState(37.8);
  const [drLon, setDrLon] = useState(27.2);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  const almanac = useMemo(() => {
    const safeHour = clamp(hour, 0, 23);
    const safeMinute = clamp(minute, 0, 59);

    const baseGha = fakeBaseGHA(body);
    const rate = fakeRate(body);
    const increment = (rate / 60) * safeMinute;
    const gha = normalize360(baseGha + safeHour * rate + increment);

    const baseDec = fakeBaseDec(body);
    const dec = baseDec + fakeDecDrift(body) * safeMinute;
    const decDir = dec >= 0 ? "N" : "S";

    const observedAltitude = fakeObservedAltitude(body, safeMinute);
    const hc = observedAltitude - 1.8 + Math.sin((safeHour + safeMinute / 60) / 4) * 0.4;
    const interceptNm = Math.abs((observedAltitude - hc) * 60);
    const zn = normalize360(gha - drLon + 180);

    return {
      safeHour,
      safeMinute,
      baseGha,
      rate,
      increment,
      gha,
      dec,
      decDir,
      observedAltitude,
      hc,
      interceptNm,
      zn,
    };
  }, [body, hour, minute, drLon]);

  const lessonMode = useMemo(() => {
    if (body === "Sun") return "Daylight training logic";
    if (body === "Moon") return "Advanced motion awareness";
    if (body === "Star") return "Aries / SHA discipline";
    return "Planet observation logic";
  }, [body]);

  const summaryText = useMemo(() => {
    return `${body} için ${String(almanac.safeHour).padStart(2, "0")}:${String(
      almanac.safeMinute
    ).padStart(2, "0")} GMT referansında önce temel GHA değeri alınır, sonra increment ile dakika payı eklenir. Declination ise cismin kuzey-güney konumunu verir. Bu veri, sextant gözlemi ve DR pozisyonla birlikte kullanıldığında sight reduction zinciri kurulmuş olur.`;
  }, [body, almanac]);

  const quizItems = useMemo<QuizItem[]>(
    () => [
      {
        id: "q1",
        question: "Nautical Almanac içindeki GMT/UT bilgisi neden kritiktir?",
        options: [
          "Sadece saat yazmak için",
          "Gözlemi doğru göksel veriye bağlamak için",
          "Sadece yıldız isimlerini bulmak için",
          "Harita numarasını seçmek için",
        ],
        correct: "Gözlemi doğru göksel veriye bağlamak için",
        explanation:
          "Almanac zamanla çalışır. Saati kaydırırsan GHA ve ilgili göksel çözüm de kayar.",
      },
      {
        id: "q2",
        question: "GHA neyi ifade eder?",
        options: [
          "Teknenin pusula sapmasını",
          "Cismin Greenwich’e göre açısal konumunu",
          "Liman yaklaşma açısını",
          "Sextant hatasının boyutunu",
        ],
        correct: "Cismin Greenwich’e göre açısal konumunu",
        explanation:
          "GHA, gök cisminin Greenwich’e göre açısal konum dilidir ve temel almanac verilerinden biridir.",
      },
      {
        id: "q3",
        question: "Declination hangi ilişkiyi anlatır?",
        options: [
          "Cismin göksel ekvatora göre kuzey-güney ilişkisini",
          "Cismin tekneye göre hızını",
          "Rüzgârın yönünü",
          "Manyetik pusula hatasını",
        ],
        correct: "Cismin göksel ekvatora göre kuzey-güney ilişkisini",
        explanation:
          "Declination, göksel ekvatora göre N/S açısal konumu ifade eder.",
      },
    ],
    []
  );

  const score = useMemo(() => {
    return quizItems.reduce((acc, item) => {
      return selectedAnswers[item.id] === item.correct ? acc + 1 : acc;
    }, 0);
  }, [quizItems, selectedAnswers]);

  const percentage = Math.round((score / quizItems.length) * 100);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_#14304d_0%,_#09131f_45%,_#050a11_100%)] text-white">
      <section className="mx-auto max-w-[1440px] px-4 pb-16 pt-28 md:px-6 md:pt-32">
        <div className="max-w-6xl">
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.28em] text-white/70">
            Navigasyon • Sextant • Nautical Almanac • Eğitim Modülü
          </div>

          <h1 className="mt-5 max-w-5xl text-4xl font-semibold leading-[1.02] md:text-7xl">
            Almanac,
            <span className="block">göksel navigasyonun sessiz komuta masasıdır.</span>
          </h1>

          <p className="mt-6 max-w-4xl text-sm leading-7 text-white/72 md:text-lg md:leading-8">
            Bu sayfa sadece tablo tanıtmıyor. Öğrenciyi zaman, gök cismi, koordinat
            ve sight reduction ilişkisini kurmaya zorluyor. Nautical Almanac burada
            bir kitap değil; denizde konum düşüncesini disipline eden eğitim aracına dönüşüyor.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lessonCards.map((card) => (
            <div
              key={card.title}
              className="rounded-[26px] border border-white/10 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/guide/sextant"
            className="rounded-full border border-cyan-300/30 bg-cyan-300/12 px-5 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/18"
          >
            Sextant Modülüne Git
          </Link>
          <Link
            href="/guide/paper-chart-navigation"
            className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/8"
          >
            Kâğıt Harita Modülüne Git
          </Link>
        </div>

        <div className="mt-14 grid gap-8 xl:grid-cols-[1.06fr_0.94fr]">
          <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.96),rgba(7,12,21,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Core Teaching Layers
                </p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Almanac eğitiminin omurgası
                </h2>
              </div>

              <div className="rounded-[20px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-sm">
                <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/65">
                  Module Focus
                </div>
                <div className="mt-2 font-semibold text-white">
                  Time • Coordinates • Reduction
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {coreTopics.map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">
                    {item.badge}
                  </div>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/74">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,31,0.96),rgba(6,11,19,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                Learning Flow
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Öğrencinin izlediği zincir
              </h2>
            </div>

            <div className="mt-6 space-y-4">
              {workflow.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-50">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/72">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-cyan-300/15 bg-cyan-300/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                Albatros yaklaşımı
              </div>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Almanac eğitimi, sadece tablo kullanmayı öğretmez. Öğrenciye,
                “neden bu veri burada, neden bu dakika önemli, neden bu düzeltme
                yapılıyor?” sorularını sistematik olarak sordurur. Asıl kazanım,
                göksel navigasyonu düşünce düzeyinde kurabilmektir.
              </p>
            </div>
          </section>
        </div>

        {/* INTERACTIVE ENGINE */}
        <div className="mt-8 grid gap-8 xl:grid-cols-[1.02fr_0.98fr]">
          <section className="rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.96),rgba(7,12,21,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                  Almanac Engine
                </p>
                <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                  Canlı GHA / Declination demonstrator
                </h2>
              </div>

              <div className="rounded-[20px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-sm">
                <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/65">
                  Lesson Mode
                </div>
                <div className="mt-2 font-semibold text-white">{lessonMode}</div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <InputBlock label="Hour (GMT)" value={hour} setValue={setHour} min={0} max={23} />
              <InputBlock label="Minute (GMT)" value={minute} setValue={setMinute} min={0} max={59} />
              <InputBlock label="DR Latitude" value={drLat} setValue={setDrLat} min={-90} max={90} step={0.1} />
              <InputBlock label="DR Longitude" value={drLon} setValue={setDrLon} min={-180} max={180} step={0.1} />
            </div>

            <div className="mt-4">
              <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
                Celestial Body
              </label>
              <div className="mt-3 grid gap-2 grid-cols-2 md:grid-cols-3">
                {(["Sun", "Moon", "Venus", "Mars", "Jupiter", "Star"] as BodyName[]).map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setBody(item)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        body === item
                          ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
                          : "border-white/10 bg-white/5 text-white/75 hover:bg-white/8"
                      }`}
                    >
                      <div className="text-sm font-semibold">{item}</div>
                    </button>
                  )
                )}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              <DataCell label="Base GHA" value={fmtDeg(almanac.baseGha)} />
              <DataCell label="Increment" value={fmtDeg(almanac.increment)} />
              <DataCell
                label="Declination"
                value={`${Math.abs(almanac.dec).toFixed(1)}° ${almanac.decDir}`}
              />
              <DataCell label="Final GHA" value={fmtDeg(almanac.gha)} />
            </div>

            <div className="mt-6 rounded-[24px] border border-cyan-300/15 bg-cyan-300/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                Live Explanation
              </div>
              <p className="mt-3 text-sm leading-7 text-white/75">{summaryText}</p>
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Sight Reduction Thinking
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Sextant verisine bağlanan mini eğitim motoru
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <MetricCard label="Observed Altitude (Hs)" value={`${almanac.observedAltitude.toFixed(1)}°`} />
              <MetricCard label="Computed Altitude (Hc)" value={`${almanac.hc.toFixed(1)}°`} />
              <MetricCard label="Intercept" value={`${almanac.interceptNm.toFixed(1)} NM`} />
              <MetricCard label="Azimuth (Zn)" value={fmtDeg(almanac.zn)} />
            </div>

            <div className="mt-6 space-y-4">
              <StepCard
                index="A"
                title="Observed altitude"
                text="Sextant ile ölçtüğün yükseklik, ilk ham veridir. Tek başına çözüm değildir."
              />
              <StepCard
                index="B"
                title="Almanac coordinates"
                text="GHA ve declination ile gök cismini uzaydaki doğru yerine yerleştirirsin."
              />
              <StepCard
                index="C"
                title="DR position comparison"
                text="Tahmini mevki ile teorik yükseklik kurulur. Bu kıyas, intercept mantığını doğurur."
              />
              <StepCard
                index="D"
                title="Line of position thinking"
                text="Asıl amaç sayı üretmek değil; gözlemi pozisyon düşüncesine dönüştürmektir."
              />
            </div>
          </section>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[0.94fr_1.06fr]">
          <section className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Mini Glossary
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Öğrencinin ezber değil, anlam kurması gereken kelimeler
            </h2>

            <div className="mt-6 grid gap-4">
              {glossary.map(([term, desc]) => (
                <div
                  key={term}
                  className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4"
                >
                  <div className="text-lg font-semibold">{term}</div>
                  <p className="mt-2 text-sm leading-7 text-white/72">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
              Training Outcomes
            </p>
            <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
              Bu modülün sonunda öğrenci ne kazanmalı?
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Nautical Almanac’ın ana bölümlerini ayırt edebilme",
                "GMT / UT referansının neden kritik olduğunu anlayabilme",
                "GHA ve declination verisini doğru okuma mantığı kurabilme",
                "Increment kullanımının amacını kavrayabilme",
                "Sextant ölçüsünü almanac verisine bağlayabilme",
                "Göksel navigasyonu ezber değil sistem olarak düşünebilme",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4"
                >
                  <div className="text-sm leading-7 text-white/78">{item}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[24px] border border-cyan-300/15 bg-cyan-300/5 p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                Son cümle
              </div>
              <p className="mt-3 text-sm leading-7 text-white/75">
                Almanac kullanmayı bilen öğrenci sadece gökyüzüne bakmaz; zamanı,
                açıyı, veriyi ve pozisyon düşüncesini aynı anda okuyabilen bir
                denizcilik refleksi geliştirir. Gerçek kaptanlık burada başlar.
              </p>
            </div>
          </section>
        </div>

        {/* QUIZ */}
        <div className="mt-8 rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.96),rgba(7,12,21,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
                Almanac Quiz
              </p>
              <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
                Kısa kontrol modülü
              </h2>
            </div>

            <div className="rounded-[20px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-3 text-sm">
              <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/65">
                Result
              </div>
              <div className="mt-2 font-semibold text-white">
                {submitted ? `${score}/${quizItems.length} • ${percentage}%` : "Not submitted"}
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-6">
            {quizItems.map((item, index) => {
              const selected = selectedAnswers[item.id];

              return (
                <div
                  key={item.id}
                  className="rounded-[24px] border border-white/10 bg-white/5 p-5"
                >
                  <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">
                    Question {index + 1}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{item.question}</h3>

                  <div className="mt-4 grid gap-2 md:grid-cols-2">
                    {item.options.map((option, optionIndex) => {
                      const isCorrect = submitted && option === item.correct;
                      const isWrong = submitted && selected === option && option !== item.correct;
                      const isActive = selected === option;

                      return (
                        <button
                          key={`${item.id}-${optionIndex}`}
                          type="button"
                          onClick={() =>
                            setSelectedAnswers((prev) => ({ ...prev, [item.id]: option }))
                          }
                          className={`rounded-2xl border px-4 py-4 text-left transition ${
                            isCorrect
                              ? "border-emerald-400/35 bg-emerald-400/10 text-emerald-50"
                              : isWrong
                              ? "border-rose-400/35 bg-rose-400/10 text-rose-50"
                              : isActive
                              ? "border-cyan-300/30 bg-cyan-300/10 text-cyan-50"
                              : "border-white/10 bg-white/5 text-white/80 hover:bg-white/8"
                          }`}
                        >
                          <div className="text-sm font-medium leading-6">{option}</div>
                        </button>
                      );
                    })}
                  </div>

                  {submitted ? (
                    <div className="mt-4 rounded-[20px] border border-cyan-300/15 bg-cyan-300/5 p-4">
                      <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/68">
                        Explanation
                      </div>
                      <p className="mt-2 text-sm leading-7 text-white/75">
                        {item.explanation}
                      </p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              className="rounded-full border border-cyan-300/30 bg-cyan-300/12 px-5 py-3 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/18"
            >
              Sonuçları Göster
            </button>
            <button
              type="button"
              onClick={() => {
                setSelectedAnswers({});
                setSubmitted(false);
              }}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/85 transition hover:bg-white/8"
            >
              Reset Quiz
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function InputBlock({
  label,
  value,
  setValue,
  min,
  max,
  step = 1,
}: {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step?: number;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-white/55">
        {label}
      </label>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => setValue(Number(e.target.value || 0))}
        className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-cyan-300/35"
      />
    </div>
  );
}

function DataCell({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function MetricCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-white">{value}</div>
    </div>
  );
}

function StepCard({
  index,
  title,
  text,
}: {
  index: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4">
      <div className="flex items-start gap-4">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-sm font-bold text-cyan-50">
          {index}
        </div>
        <div>
          <h3 className="text-base font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-7 text-white/72">{text}</p>
        </div>
      </div>
    </div>
  );
}