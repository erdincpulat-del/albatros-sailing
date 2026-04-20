"use client";

import { useMemo, useState } from "react";

type LessonItem = {
  id: string;
  badge: string;
  title: string;
  summary: string;
  body: string;
  takeaway: string;
};

export function MicroLessons() {
  const [activeId, setActiveId] = useState("lesson-01");

  const lessons = useMemo<LessonItem[]>(
    () => [
      {
        id: "lesson-01",
        badge: "FOUNDATION",
        title: "Rüzgârı görmek ile okumak aynı şey değildir.",
        summary:
          "Denizci için rüzgâr yalnızca knot değeri değil; yön, basınç, süreklilik ve yüzeye etkidir.",
        body:
          "Aynı hızdaki iki rüzgâr aynı sonucu vermez. Açısı, sürekliliği, yüzeyde oluşturduğu doku ve tekne üzerindeki davranışı birlikte değerlendirilmelidir. Eğitim yaklaşımı burada başlar: veri ezberlemek değil, davranışı yorumlamak.",
        takeaway:
          "İlk refleks: Hıza bak, sonra yüzeyi ve yön karakterini oku.",
      },
      {
        id: "lesson-02",
        badge: "BEAUFORT LOGIC",
        title: "Beaufort bir sayı değil, davranış sınıflamasıdır.",
        summary:
          "Bf 2 ile Bf 4 arasındaki fark sadece artan hız değil; artan operasyon baskısıdır.",
        body:
          "Beaufort ölçeği rüzgârı bir isimle değil, etkisiyle sınıflandırır. Yüzey şekli, köpük ihtimali, trim ihtiyacı, eğitim yaklaşımı ve güvenlik mesafesi bu sınıflamadan etkilenir. Bu yüzden Beaufort, kararın teorik değil pratik dilidir.",
        takeaway:
          "Beaufort seviyesi yükseldikçe tekne davranışı ve eğitim yaklaşımı yeniden yorumlanmalıdır.",
      },
      {
        id: "lesson-03",
        badge: "DIRECTION",
        title: "Yön bilgisi pusulada başlar, kararda tamamlanır.",
        summary:
          "Aynı rüzgâr hızı, baştan geldiğinde başka; apazda başka; kıçtan geldiğinde bambaşka sonuç üretir.",
        body:
          "Bağıl rüzgâr yönü teknenin hissini doğrudan değiştirir. Baştan gelen rüzgâr direnç ve denge gerektirir. Apaz rüzgârı yatış ve trim disiplinini öne çıkarır. Kıçtan gelen rüzgâr ise hız hissini ve rota kontrolünü daha kritik hale getirir.",
        takeaway:
          "Yön okumadan yapılan hız değerlendirmesi eksiktir.",
      },
      {
        id: "lesson-04",
        badge: "SURFACE RESPONSE",
        title: "Deniz yüzeyi rüzgârın görünür hafızasıdır.",
        summary:
          "Windsock anlık akışı gösterir; deniz yüzeyi ise o akışın sahadaki sonucunu.",
        body:
          "Pürüzsüz yüzey, küçük kırışımlar, kısa çopra dalga, belirgin form veya köpük... bunların her biri rüzgârın karakterine dair sahadaki görsel veridir. Profesyonel okuma, bu yüzeyi sadece izlemek değil, kararın parçası yapmaktır.",
        takeaway:
          "Surface reading olmadan wind reading tamamlanmış sayılmaz.",
      },
      {
        id: "lesson-05",
        badge: "COMMAND",
        title: "Karar, veri toplamaktan değil veri birleştirmekten doğar.",
        summary:
          "Rüzgâr, yön, deniz yüzeyi ve operasyon hedefi tek sistem içinde okunmalıdır.",
        body:
          "Gerçek denizcilik düşüncesi tek veriye dayanmaz. Windsock başka bir şey söyler, Beaufort bunu sınıflar, pusula yönü davranışı tamamlar, yüzey ise sonucu doğrular. Kaptan kararı bu verileri ayrı ayrı değil, birlikte okuyabildiği ölçüde güçlüdür.",
        takeaway:
          "Profesyonel eğitim, veri ezberi değil sistem kurma disiplinidir.",
      },
    ],
    []
  );

  const activeLesson =
    lessons.find((lesson) => lesson.id === activeId) ?? lessons[0];

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.96),rgba(7,12,21,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-[220px] w-[220px] rounded-full bg-cyan-300/8 blur-[90px]" />
        <div className="absolute bottom-[-60px] right-[-40px] h-[220px] w-[220px] rounded-full bg-indigo-400/8 blur-[110px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
            Micro Lessons
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Decision Layers Behind the Wind
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
            Kısa ama yoğun eğitim blokları. Amaç bilgi kalabalığı değil,
            profesyonel denizcilik düşüncesinin katmanlarını sistematik biçimde
            netleştirmek.
          </p>
        </div>

        <div className="rounded-[22px] border border-cyan-300/15 bg-cyan-300/8 px-4 py-4 text-sm">
          <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-100/65">
            Learning Mode
          </div>
          <div className="mt-2 font-semibold text-white">
            Interpretation • Awareness • Command
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid gap-6 xl:grid-cols-[0.88fr_1.12fr]">
        <div className="grid gap-3">
          {lessons.map((lesson, index) => {
            const active = lesson.id === activeLesson.id;

            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => setActiveId(lesson.id)}
                className={`rounded-[24px] border px-4 py-4 text-left transition ${
                  active
                    ? "border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_24px_rgba(103,211,255,0.10)]"
                    : "border-white/10 bg-white/5 hover:bg-white/8"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div
                      className={`text-[11px] uppercase tracking-[0.18em] ${
                        active ? "text-cyan-100/75" : "text-white/46"
                      }`}
                    >
                      {lesson.badge}
                    </div>

                    <h3
                      className={`mt-2 text-base font-semibold leading-7 ${
                        active ? "text-white" : "text-white/88"
                      }`}
                    >
                      {lesson.title}
                    </h3>

                    <p
                      className={`mt-2 text-sm leading-6 ${
                        active ? "text-white/74" : "text-white/62"
                      }`}
                    >
                      {lesson.summary}
                    </p>
                  </div>

                  <div
                    className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl border text-xs font-bold ${
                      active
                        ? "border-cyan-300/25 bg-cyan-300/12 text-cyan-50"
                        : "border-white/10 bg-white/5 text-white/60"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="grid gap-4">
          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">
                  {activeLesson.badge}
                </div>
                <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                  {activeLesson.title}
                </h3>
              </div>

              <div className="inline-flex rounded-[20px] border border-cyan-300/18 bg-cyan-300/8 px-4 py-3 text-xs uppercase tracking-[0.18em] text-cyan-50">
                Active Lesson
              </div>
            </div>

            <p className="mt-5 text-base leading-8 text-white/78">
              {activeLesson.body}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <LessonInfoCard
              label="Summary"
              value={activeLesson.summary}
            />
            <LessonInfoCard
              label="Takeaway"
              value={activeLesson.takeaway}
            />
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/48">
              Why This Matters
            </div>
            <p className="mt-3 text-sm leading-7 text-white/72">
              Micro lesson yaklaşımı, öğrencinin bir konuyu sadece görmesini
              değil; onu karar mantığının içine yerleştirmesini sağlar. Amaç,
              her başlığı ayrı ezberlemek değil, hepsini aynı denizcilik sistemi
              içinde bir araya getirmektir.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <MicroSignal
              label="Lesson Count"
              value={String(lessons.length)}
            />
            <MicroSignal
              label="Method"
              value="Layered Reading"
            />
            <MicroSignal
              label="Focus"
              value="Interpretation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function LessonInfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <p className="mt-3 text-sm leading-7 text-white/74">{value}</p>
    </div>
  );
}

function MicroSignal({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-[22px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-white/46">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}