"use client";

type PremiumLearningSummaryProps = {
  beaufortForce: number;
  cardinalLabel: string;
  seaLabel: string;
  status: string;
};

export function PremiumLearningSummary({
  beaufortForce,
  cardinalLabel,
  seaLabel,
  status,
}: PremiumLearningSummaryProps) {
  const statusLower = status.toLowerCase();

  const tone =
    statusLower.includes("danger") ||
    statusLower.includes("critical") ||
    statusLower.includes("unsuitable")
      ? {
          badge: "HIGH RISK BAND",
          accent: "text-rose-200",
          chip: "border-rose-300/30 bg-rose-300/10 text-rose-50",
          glow: "bg-rose-400/10",
        }
      : statusLower.includes("limit") ||
        statusLower.includes("restrict") ||
        statusLower.includes("caution")
      ? {
          badge: "CONTROLLED BAND",
          accent: "text-amber-200",
          chip: "border-amber-300/30 bg-amber-300/10 text-amber-50",
          glow: "bg-amber-300/10",
        }
      : {
          badge: "TRAINABLE BAND",
          accent: "text-emerald-200",
          chip: "border-emerald-300/30 bg-emerald-300/10 text-emerald-50",
          glow: "bg-emerald-300/10",
        };

  const summary = buildSummary(beaufortForce, cardinalLabel, seaLabel, status);

  return (
    <section className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,32,0.96),rgba(7,12,21,0.98))] p-5 shadow-[0_0_40px_rgba(52,180,255,0.05)] backdrop-blur md:p-6">
      <div className={`pointer-events-none absolute -right-10 top-0 h-44 w-44 rounded-full blur-[100px] ${tone.glow}`} />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/18 to-transparent" />

      <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className={`text-xs uppercase tracking-[0.24em] ${tone.accent}`}>
            Premium Learning Summary
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Decision Synthesis Panel
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
            Bu panel rüzgâr, yön, yüzey ve operasyon statüsünü tek ekranda
            özetler; öğrencinin ayrı ayrı verileri değil, aralarındaki ilişkiyi
            görmesini sağlar.
          </p>
        </div>

        <div className={`inline-flex rounded-[22px] border px-4 py-4 text-sm font-semibold shadow-[0_0_20px_rgba(255,255,255,0.03)] ${tone.chip}`}>
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-70">
              Overall Status
            </div>
            <div className="mt-2 text-lg leading-none">{status}</div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="grid gap-4">
          <SummaryCard
            label="Beaufort Reading"
            value={`Bf ${beaufortForce}`}
            hint="Wind pressure band"
          />
          <SummaryCard
            label="Direction Reading"
            value={cardinalLabel}
            hint="Primary bearing"
          />
          <SummaryCard
            label="Surface Reading"
            value={seaLabel}
            hint="Sea response"
          />
          <SummaryCard
            label="Decision Tone"
            value={tone.badge}
            hint="Training layer"
          />
        </div>

        <div className="grid gap-4">
          <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/72">
              Integrated Summary
            </div>
            <p className="mt-4 text-base leading-8 text-white/80">
              {summary.integrated}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <InsightCard
              title="Training Insight"
              body={summary.trainingInsight}
            />
            <InsightCard
              title="Captaincy Insight"
              body={summary.captaincyInsight}
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 grid gap-4 md:grid-cols-3">
        <MiniSignal
          label="Wind Logic"
          value={summary.windLogic}
        />
        <MiniSignal
          label="Surface Logic"
          value={summary.surfaceLogic}
        />
        <MiniSignal
          label="Command Logic"
          value={summary.commandLogic}
        />
      </div>
    </section>
  );
}

function SummaryCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string;
  hint?: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-white/46">
        {label}
      </div>
      <div className="mt-3 text-lg font-semibold text-white">{value}</div>
      {hint ? (
        <div className="mt-2 text-xs uppercase tracking-[0.14em] text-cyan-200/65">
          {hint}
        </div>
      ) : null}
    </div>
  );
}

function InsightCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-white/5 p-4">
      <div className="text-[11px] uppercase tracking-[0.18em] text-cyan-200/70">
        {title}
      </div>
      <p className="mt-3 text-sm leading-7 text-white/72">{body}</p>
    </div>
  );
}

function MiniSignal({
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

function buildSummary(
  beaufortForce: number,
  cardinalLabel: string,
  seaLabel: string,
  status: string
) {
  const integrated =
    beaufortForce <= 2
      ? `Rüzgâr baskısı düşük, yön karakteri ${cardinalLabel} ve yüzey ${seaLabel} seviyesinde sakin okunuyor. Bu band eğitim başlangıcı, gözlem ve temel yorum alışkanlığı için uygun bir çerçeve sunar.`
      : beaufortForce <= 4
      ? `Rüzgâr seviyesi artık operasyonel davranış üretmeye başlıyor. ${cardinalLabel} yön karakteri ile ${seaLabel} yüzeyi birlikte okunduğunda, öğrenci tek veri yerine sistematik ilişki kurmayı öğrenir.`
      : `Bf ${beaufortForce} seviyesinde rüzgâr, yön ve yüzey artık ayrı başlıklar olarak değil, doğrudan komuta ve karar baskısı olarak değerlendirilmelidir. ${cardinalLabel} yönü ve ${seaLabel} yüzeyi bu baskının sahadaki görünür sonucudur.`;

  const trainingInsight =
    beaufortForce <= 2
      ? "Bu seviyede amaç sadece sakin ortamdan yararlanmak değil; sakin veriyi doğru okumayı öğrenmektir."
      : beaufortForce <= 4
      ? "Bu band, öğrenciyi rahat bölgeden çıkarıp gerçek yorum disiplinine sokar. Eğitim değeri burada yükselir."
      : "Bu seviyede eğitim seçici, kontrollü ve hedef odaklı olmalıdır. Her manevra aynı yoğunlukta uygulanmamalıdır.";

  const captaincyInsight =
    status.toLowerCase().includes("danger") ||
    status.toLowerCase().includes("critical") ||
    status.toLowerCase().includes("unsuitable")
      ? "Kaptanlık refleksi burada ilerlemek değil, sınırlamayı doğru zamanda koyabilmektir."
      : status.toLowerCase().includes("limit") ||
        status.toLowerCase().includes("restrict") ||
        status.toLowerCase().includes("caution")
      ? "Kaptan için doğru yaklaşım; veriyi küçümsememek, ama paniğe de dönüştürmeden sınır koyabilmektir."
      : "Kaptanlık burada sadece izin vermek değil; uygun koşulu doğru eğitim senaryosuna çevirebilmektir.";

  const windLogic =
    beaufortForce <= 2
      ? "Low Pressure Read"
      : beaufortForce <= 4
      ? "Structured Wind Read"
      : "High Pressure Read";

  const surfaceLogic =
    seaLabel.toLowerCase().includes("calm") ||
    seaLabel.toLowerCase().includes("mirror")
      ? "Minimal Surface Load"
      : seaLabel.toLowerCase().includes("moderate") ||
        seaLabel.toLowerCase().includes("slight")
      ? "Observable Surface Response"
      : "Active Surface Pressure";

  const commandLogic =
    status.toLowerCase().includes("danger") ||
    status.toLowerCase().includes("critical") ||
    status.toLowerCase().includes("unsuitable")
      ? "Restrict / Reassess"
      : status.toLowerCase().includes("limit") ||
        status.toLowerCase().includes("restrict") ||
        status.toLowerCase().includes("caution")
      ? "Controlled Command"
      : "Proceed with Structure";

  return {
    integrated,
    trainingInsight,
    captaincyInsight,
    windLogic,
    surfaceLogic,
    commandLogic,
  };
}