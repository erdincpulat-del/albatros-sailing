"use client";

import { useLanguage } from "@/contexts/LanguageProvider";
import type { RelativeWindType, Scenario } from "@/lib/wind/types";

type ScenarioTrainingCasesProps = {
  speedKnots: number;
  scenario: Scenario;
  cardinalLabel: string;
  directionDeg: number;
  relativeWind: RelativeWindType;
  status: "Training Suitable" | "Caution" | "Advanced Handling" | "Restricted";
};

type ExpandedCase = {
  id: string;
  title: string;
  badge: string;
  condition: string;
  trainingFocus: string;
  riskLevel: string;
  whatYouSee: string;
  whatItMeans: string;
  commonMistake: string;
  bestResponse: string;
  instructorInsight: string;
};

export function ScenarioTrainingCases({
  speedKnots,
  scenario,
  cardinalLabel,
  directionDeg,
  relativeWind,
  status,
}: ScenarioTrainingCasesProps) {
  const { t } = useLanguage();

  const activeCase = buildActiveCase({
    speedKnots,
    scenario,
    cardinalLabel,
    directionDeg,
    relativeWind,
    status,
  });

  const supportCases = buildSupportCases({
    speedKnots,
    scenario,
    cardinalLabel,
    directionDeg,
    relativeWind,
  });

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur shadow-[0_0_36px_rgba(61,181,255,0.04)]">
      <style jsx>{`
        @keyframes caseSweep {
          0% {
            transform: translateX(-30%) skewX(-18deg);
            opacity: 0.04;
          }
          50% {
            opacity: 0.12;
          }
          100% {
            transform: translateX(140%) skewX(-18deg);
            opacity: 0.04;
          }
        }
      `}</style>

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute left-[-24%] top-0 h-full w-[44%] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.14),transparent)]"
          style={{ animation: "caseSweep 11s linear infinite" }}
        />
      </div>

      <div className="relative z-10 mb-5">
        <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">
          Albatros Academy
        </p>
        <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
          {t.windEngine.scenario.title}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70">
          {t.windEngine.scenario.desc}
        </p>
      </div>

      <div className="relative z-10 grid gap-5 xl:grid-cols-[1.08fr_0.92fr]">
        <ExpandableCaseCard caseData={activeCase} highlight t={t} />

        <div className="grid gap-4">
          {supportCases.map((item) => (
            <ExpandableCaseCard key={item.id} caseData={item} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpandableCaseCard({
  caseData,
  highlight = false,
  t,
}: {
  caseData: ExpandedCase;
  highlight?: boolean;
  t: any;
}) {
  return (
    <details
      className={`group rounded-[26px] border p-5 transition open:shadow-[0_0_28px_rgba(255,214,102,0.06)] ${
        highlight
          ? "border-amber-300/20 bg-[linear-gradient(180deg,rgba(255,214,102,0.08)_0%,rgba(8,17,29,0.7)_100%)]"
          : "border-white/10 bg-[#08111d]/72"
      }`}
      open={highlight}
    >
      <summary className="cursor-pointer list-none">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="max-w-[85%]">
            <div className="text-[10px] uppercase tracking-[0.2em] text-white/45">
              {highlight ? "Active Case" : "Training Case"}
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white md:text-xl">
              {caseData.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-white/74">
              {caseData.trainingFocus}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.16em] text-white/70">
              {caseData.badge}
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition group-open:rotate-45">
              +
            </span>
          </div>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <MiniInfo label="Condition" value={caseData.condition} />
          <MiniInfo label="Risk Level" value={caseData.riskLevel} />
        </div>
      </summary>

      <div className="mt-5 border-t border-white/10 pt-5">
        <div className="grid gap-4 md:grid-cols-2">
          <InfoBlock label={t.windEngine.case.see} value={caseData.whatYouSee} />
          <InfoBlock label={t.windEngine.case.meaning} value={caseData.whatItMeans} />
          <InfoBlock label={t.windEngine.case.mistake} value={caseData.commonMistake} />
          <InfoBlock label={t.windEngine.case.response} value={caseData.bestResponse} />
        </div>

        <div className="mt-4 rounded-[22px] border border-white/10 bg-black/20 p-4">
          <div className="text-[10px] uppercase tracking-[0.18em] text-cyan-100/55">
            {t.windEngine.case.insight}
          </div>
          <p className="mt-2 text-sm leading-7 text-white/82">
            {caseData.instructorInsight}
          </p>
        </div>
      </div>
    </details>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-sm leading-7 text-white/82">{value}</div>
    </div>
  );
}

function MiniInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3">
      <div className="text-[10px] uppercase tracking-[0.18em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-sm leading-7 text-white/78">{value}</div>
    </div>
  );
}

function buildActiveCase({
  speedKnots,
  scenario,
  cardinalLabel,
  directionDeg,
  relativeWind,
  status,
}: {
  speedKnots: number;
  scenario: Scenario;
  cardinalLabel: string;
  directionDeg: number;
  relativeWind: RelativeWindType;
  status: "Training Suitable" | "Caution" | "Advanced Handling" | "Restricted";
}): ExpandedCase {
  const condition = `${speedKnots} kt • ${cardinalLabel} • ${Math.round(
    directionDeg
  )}° • ${relativeWindToText(relativeWind)}`;

  if (scenario === "marina") {
    return {
      id: "active-marina",
      title: "Marina Crosswind Handling Case",
      badge: status,
      condition,
      trainingFocus:
        "Dar alanda yaklaşma hattının korunması, yanal sürüklenmenin erken okunması ve düşük süratte tekne kontrolü.",
      riskLevel:
        speedKnots < 10
          ? "Low to Moderate"
          : speedKnots < 18
          ? "Moderate"
          : "High",
      whatYouSee:
        "Rüzgâr tekneyi hatta tutmak yerine yanal olarak itmeye başlar. Özellikle düşük süratte yaklaşma açısı kolay bozulabilir.",
      whatItMeans:
        "Sorun yalnızca rüzgârın güçlü olması değil; dar alanda küçük düzeltmelerin bile sonuç üretmesidir. Hata payı daralır.",
      commonMistake:
        "Öğrencinin tekneyi sadece dümenle toparlamaya çalışması ve rüzgâr baskısını geç fark etmesi.",
      bestResponse:
        "Yaklaşmayı önceden planla, baskı tarafını erken belirle, düzeltmeyi son anda değil yaklaşma hattına girmeden önce uygula.",
      instructorInsight:
        "Marina eğitiminin değeri, öğrencinin tekneyi düz götürmesinden çok rüzgârın tekne üzerindeki yanal etkisini okuyup önceden reaksiyon geliştirmesidir.",
    };
  }

  if (scenario === "anchorage") {
    return {
      id: "active-anchorage",
      title: "Anchorage Swing & Load Case",
      badge: status,
      condition,
      trainingFocus:
        "Demirde yük artışı, salınım davranışı ve güvenli bekleme mesafesinin rüzgârla birlikte yorumlanması.",
      riskLevel:
        speedKnots < 8
          ? "Low"
          : speedKnots < 16
          ? "Moderate"
          : "High",
      whatYouSee:
        "Tekne rüzgâr arttıkça daha geniş salınım yapar, zincir hattı daha belirgin yük alır ve konfor azalır.",
      whatItMeans:
        "Demirde güvenlik sabit değildir; rüzgâr arttıkça hem yatay yük hem de swing circle etkisi büyür.",
      commonMistake:
        "Sadece demirin tuttuğunu düşünüp çevresel boşluk, komşu tekneler ve salınım açısını ihmal etmek.",
      bestResponse:
        "Rüzgâr arttıkça yalnızca konumu değil, salınım geometrisini ve demir alanındaki güvenlik marjını da yeniden değerlendir.",
      instructorInsight:
        "Demir sahasında iyi eğitim, demirin atıldığı anı değil; rüzgâr değiştikçe teknenin davranışını okumayı öğretir.",
    };
  }

  if (scenario === "harbourApproach") {
    return {
      id: "active-harbour",
      title: "Harbour Entry Alignment Case",
      badge: status,
      condition,
      trainingFocus:
        "Liman giriş hattının rüzgârla birlikte korunması, düzeltme zamanlaması ve giriş açısının planlanması.",
      riskLevel:
        speedKnots < 10
          ? "Moderate"
          : speedKnots < 18
          ? "Moderate to High"
          : "High",
      whatYouSee:
        "Giriş hattı sabit görünse de rüzgâr yaklaşma çizgisini yavaşça bozar ve tekneyi kapıya eğik getirebilir.",
      whatItMeans:
        "Yaklaşma, son anda kapıyı düz görmek değil; rüzgârı hesaba katarak hattı önceden kurmaktır.",
      commonMistake:
        "Düzeltmeyi çok geç yapmak ve liman ağzına gelene kadar tekneyi pasif şekilde sürdürmek.",
      bestResponse:
        "Rüzgâr baskısını girişten önce analiz et, yaklaşma hattını hafif ofsetle kur ve erken düzeltme disiplinini koru.",
      instructorInsight:
        "Liman yaklaşmasında kaliteli eğitim, öğrenciye sadece rota değil, rüzgâra karşı kurulmuş bir rota mantığı kazandırır.",
    };
  }

  if (scenario === "nightWatch") {
    return {
      id: "active-night",
      title: "Night Watch Wind Awareness Case",
      badge: status,
      condition,
      trainingFocus:
        "Gece vardiyasında rüzgâr karakterini sınırlı görsel veriyle okuyabilmek ve değişimi geç fark etmemek.",
      riskLevel:
        speedKnots < 10
          ? "Low to Moderate"
          : speedKnots < 18
          ? "Moderate"
          : "High",
      whatYouSee:
        "Gece yüzey okuması daha zorlaşır; bu yüzden pusula, windsock, ses ve teknenin davranışı daha kıymetli hale gelir.",
      whatItMeans:
        "Gece koşulu aynı rüzgârı daha kritik yapar; bilgi azalır, dikkat gereksinimi artar.",
      commonMistake:
        "Gecede rüzgârın gündüz gibi kolay okunacağını varsayıp kontrol sıklığını düşürmek.",
      bestResponse:
        "Periyodik kontrol ritmi oluştur, yön istikrarını izle ve küçük değişimleri kayıt mantığıyla değerlendir.",
      instructorInsight:
        "Gece vardiyası eğitimi, az veriden doğru sonuç çıkarmayı öğretir. Rüzgâr burada bir sayı değil, sürekli izlenen bir davranıştır.",
    };
  }

  if (scenario === "openSea") {
    return {
      id: "active-open-sea",
      title: "Open Sea Exposure Case",
      badge: status,
      condition,
      trainingFocus:
        "Açık denizde rüzgâr, yüzey ve tekne maruziyetini birlikte okuyarak genel operasyonel yükü anlamak.",
      riskLevel:
        speedKnots < 8
          ? "Low"
          : speedKnots < 18
          ? "Moderate"
          : "High",
      whatYouSee:
        "Yüzey cevabı daha geniş alana yayılır, dalga enerjisi tekneye daha açık ve sürekli etki eder.",
      whatItMeans:
        "Açık denizde aynı rüzgâr, korunaklı alana göre daha fazla fiziksel ve zihinsel yük yaratabilir.",
      commonMistake:
        "Sadece rüzgâr sayısına bakıp açık denizdeki toplam maruziyet etkisini küçümsemek.",
      bestResponse:
        "Rüzgârı, yüzeyi ve tekne davranışını birlikte okuyarak değerlendirme yap; sayı tek başına yeterli değildir.",
      instructorInsight:
        "Açık deniz farkındalığı, çevresel verileri ayrı ayrı değil tek bir operasyonel tablo olarak okuyabilme becerisidir.",
    };
  }

  return {
    id: "active-sail-training",
    title: "Sail Training Response Case",
    badge: status,
    condition,
    trainingFocus:
      "Trim, dümen hissi, tekne dengesi ve eğitim için uygun rüzgâr bandının uygulamalı olarak okunması.",
    riskLevel:
      speedKnots < 7
        ? "Low"
        : speedKnots < 16
        ? "Moderate"
        : "High",
    whatYouSee:
      "Rüzgâr arttıkça teknenin dengesi, yüzey cevabı ve kontrol ihtiyacı daha belirgin hale gelir.",
    whatItMeans:
      "Gerçek eğitim rüzgârı, öğrencinin tekneyi sadece hareket ettirmediği; rüzgârın etkisini yönetmeye başladığı banttır.",
    commonMistake:
      "Öğrencinin yalnızca yelkeni çalıştığını düşünüp rüzgârın tekne dengesi ve dümen yüküne etkisini geri planda bırakması.",
    bestResponse:
      "Rüzgârı trim, dümen ve denge üçgeni içinde değerlendir; sayıya değil teknenin verdiği cevaba da odaklan.",
    instructorInsight:
      "Eğitim değeri en yüksek an, öğrencinin rüzgârı görsel veri olmaktan çıkarıp aktif karar girdisine dönüştürdüğü andır.",
  };
}

function buildSupportCases({
  speedKnots,
  scenario,
  cardinalLabel,
  directionDeg,
  relativeWind,
}: {
  speedKnots: number;
  scenario: Scenario;
  cardinalLabel: string;
  directionDeg: number;
  relativeWind: RelativeWindType;
}): ExpandedCase[] {
  const condition = `${speedKnots} kt • ${cardinalLabel} • ${Math.round(
    directionDeg
  )}° • ${relativeWindToText(relativeWind)}`;

  return [
    {
      id: `${scenario}-support-1`,
      title: "Wind Shift Recognition Case",
      badge: "Observation",
      condition,
      trainingFocus:
        "Rüzgâr yönündeki küçük değişimlerin görsel ve operasyonel işaretlerini birlikte okumak.",
      riskLevel:
        speedKnots < 8 ? "Low" : speedKnots < 18 ? "Moderate" : "High",
      whatYouSee:
        "Windsock açısı, yüzey çizgileri ve pusula okuması aynı anda küçük farklılıklar göstermeye başlar.",
      whatItMeans:
        "Yön değişimi tek bir işaretten değil, çoklu işaretin birlikte kaymasından anlaşılır.",
      commonMistake:
        "Sadece pusulaya bakıp görsel akış ve deniz yüzeyindeki yön değişimini görmezden gelmek.",
      bestResponse:
        "Windsock, pusula ve yüzey cevabını birlikte izle; tek kaynak yerine bütünsel okuma yap.",
      instructorInsight:
        "İyi denizci yön değişimini cihazdan sonra değil, çevreden önce fark etmeye başlar.",
    },
    {
      id: `${scenario}-support-2`,
      title: "Surface vs Wind Correlation Case",
      badge: "Interpretation",
      condition,
      trainingFocus:
        "Rüzgâr verisi ile deniz yüzeyinin verdiği cevabı eşleştirerek daha güvenilir okuma yapmak.",
      riskLevel:
        speedKnots < 10 ? "Moderate" : speedKnots < 20 ? "Moderate" : "High",
      whatYouSee:
        "Deniz yüzeyi, rüzgârı bazen doğrular, bazen de bulunduğun korunak veya açıklığa göre farklı hissettirir.",
      whatItMeans:
        "Rüzgârın etkisi yerel koşullarla şekillenir; tek sayı her zaman tam resmi vermez.",
      commonMistake:
        "Yüzeyi yalnızca dekor gibi görmek ve rüzgâr yorumunu sadece knot değeri üstünden yapmak.",
      bestResponse:
        "Sayısal veriyi görsel çevresel işaretlerle kontrol et; özellikle geçiş alanlarında bunu alışkanlık haline getir.",
      instructorInsight:
        "Profesyonel okuma, cihazdan gelen veriyi çevrenin verdiği cevapla test etmeyi içerir.",
    },
    {
      id: `${scenario}-support-3`,
      title: "Control Margin Awareness Case",
      badge: "Decision",
      condition,
      trainingFocus:
        "Koşul zorlaştıkça hata payının nasıl daraldığını ve karar kalitesinin neden kritik hale geldiğini anlamak.",
      riskLevel:
        speedKnots < 8
          ? "Low"
          : speedKnots < 18
          ? "Moderate"
          : "High to Critical",
      whatYouSee:
        "Aynı hata, düşük rüzgârda tolere edilirken yüksek rüzgârda hızla büyüyen sonuçlara dönüşebilir.",
      whatItMeans:
        "Sorun yalnızca güç değil; hatayı düzeltmek için kalan zaman ve alanın azalmasıdır.",
      commonMistake:
        "Koşul ağırlaştığında aynı rahatlıkla devam edip karar eşiğini geç fark etmek.",
      bestResponse:
        "Her bantta kendine şu soruyu sor: bu hâlâ eğitim mi, yoksa artık kontrollü operasyon mu?",
      instructorInsight:
        "Tecrübe, sadece zor koşulu yönetmek değil; o koşulun eğitim sınırını ne zaman aştığını fark etmektir.",
    },
  ];
}

function relativeWindToText(value: RelativeWindType) {
  switch (value) {
    case "headwind":
      return "Baş Rüzgâr";
    case "portBow":
      return "İskele Baş Omuzluk";
    case "starboardBow":
      return "Sancak Baş Omuzluk";
    case "portBeam":
      return "İskele Yan Rüzgâr";
    case "starboardBeam":
      return "Sancak Yan Rüzgâr";
    case "portQuarter":
      return "İskele Kıç Omuzluk";
    case "starboardQuarter":
      return "Sancak Kıç Omuzluk";
    case "following":
      return "Kıçtan Rüzgâr";
    default:
      return value;
  }
}