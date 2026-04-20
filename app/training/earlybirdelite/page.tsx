"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "905324873813";

const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const masteryPillars = [
  {
    title: "Komuta",
    text: "Yachtmaster seviyesinde artık görev yapmazsın; karar verir, yönlendirir ve sonucu taşırsın.",
  },
  {
    title: "Baskı Altında Netlik",
    text: "Zor hava, zaman baskısı, ekip yorgunluğu ve rota değişiminde sakin kalmayı öğrenirsin.",
  },
  {
    title: "Gerçek Otorite",
    text: "Ekip güveni, tekne kontrolü ve skipper duruşu birlikte inşa edilir.",
  },
];

const programFlow = [
  {
    day: "1. Gün",
    title: "Standardın Yükselmesi",
    text: "Programın beklentileri, komuta standardı, tekne düzeni ve ileri seviye sorumluluk çerçevesi kurulur.",
  },
  {
    day: "2. Gün",
    title: "Karar Zinciri",
    text: "Rota, hava, ekip, zamanlama ve risk başlıklarını tek karar hattında birleştirme pratiği yapılır.",
  },
  {
    day: "3. Gün",
    title: "Yüksek Seviye Tekne Hakimiyeti",
    text: "Manevra, tempo, yaklaşım ve teknenin davranışını ileri seviyede okuma becerisi gelişir.",
  },
  {
    day: "4. Gün",
    title: "Gece ve Baskı",
    text: "Gece seyri, sınırlı görüş, dikkat disiplini ve düşük hata toleransında yönetim standardı çalışılır.",
  },
  {
    day: "5. Gün",
    title: "Liderlik ve Ekip Psikolojisi",
    text: "Komut vermek ile güven oluşturmak arasındaki çizgi sahada gerçek senaryolarla uygulanır.",
  },
  {
    day: "6. Gün",
    title: "Bağımsız Skipper Zihniyeti",
    text: "Eğitmen desteği azaltılır, katılımcı kararları sahiplenir ve sonuçlarını yönetir.",
  },
  {
    day: "7. Gün",
    title: "Final Değerlendirme",
    text: "Genel performans, karar kalitesi, skipper duruşu ve sonraki seviye yönlendirmesi tamamlanır.",
  },
];

const eliteScenarios = [
  {
    title: "Uzun Açık Deniz Geçişi",
    text: "Tekne temposunu, ekip enerjisini ve rotayı aynı anda yönetebilme standardı.",
  },
  {
    title: "Karmaşık Liman Yaklaşımı",
    text: "Marina, trafik, rüzgar ve ekip koordinasyonunu tek merkezden yönetme becerisi.",
  },
  {
    title: "Zor Hava Kararı",
    text: "Devam etmek, rota kırmak, beklemek veya geri dönmek gibi kararları sakin zihinle verme alışkanlığı.",
  },
];

const whoItsFor = [
  "Skipper seviyesini gerçek anlamda taşımak isteyenler",
  "Sorumluluk almaktan kaçmayanlar",
  "Gerçek deniz pratiği ile gelişmek isteyenler",
  "Kendini bilgiyle değil standartla ayırmak isteyenler",
];

const whoItsNotFor = [
  "Sadece sertifika almak isteyenler",
  "Turistik deneyim beklentisi olanlar",
  "Yoğun geri bildirim ve disiplin istemeyenler",
  "Komuta baskısını taşımaya hazır olmayanlar",
];

const proofItems = [
  "“Bu programdan sonra tekne kullanma algım değişti; artık sadece hareket ettirmiyorum, yönetiyorum.”",
  "“En zorlayıcı ama en öğretici taraf, kararlarımın gerçekten test edilmesiydi.”",
  "“Yachtmaster seviyesinin bilgi değil duruş meselesi olduğunu burada anladım.”",
];

const pricingPlans = [
  {
    title: "Standard Entry",
    badge: "Core",
    price: "€1.950",
    anchor: "Fiyat çıpası",
    desc: "Programın tam akışına erişim ve ileri seviye skipper değerlendirme sistemi.",
    items: [
      "7 gün yoğun Yachtmaster akışı",
      "İleri teori + gerçek uygulama",
      "Gece / baskı senaryoları",
      "Final değerlendirme",
    ],
    featured: false,
    waText:
      "Merhaba, Yachtmaster Standard Entry paketi için tarih ve detay bilgisi alabilir miyim?",
  },
  {
    title: "Early Bird Elite",
    badge: "Önerilen",
    price: "€1.690",
    anchor: "En güçlü teklif",
    desc: "Aynı yüksek standart, erken kayıt avantajı ve öncelikli yer garantisi ile.",
    items: [
      "Tüm standart içerik",
      "Öncelikli yer garantisi",
      "Sınırlı dönem fiyatı",
      "Kontenjan kapanmadan kayıt",
    ],
    featured: true,
    waText:
      "Merhaba, Yachtmaster Early Bird Elite paketi için kontenjan ve tarih bilgisi alabilir miyim?",
  },
  {
    title: "Private Command",
    badge: "Özel",
    price: "Sorunuz",
    anchor: "Kapalı yapı",
    desc: "Kapalı grup veya bireysel üst seviye çalışma için özel tasarlanmış yapı.",
    items: [
      "Özel tarih planlama",
      "Kapalı grup çalışma",
      "Hedefe göre özelleştirme",
      "Kurumsal / bireysel uyarlama",
    ],
    featured: false,
    waText:
      "Merhaba, Yachtmaster Private Command seçeneği hakkında bilgi alabilir miyim?",
  },
];

const luxuryStats = [
  ["Katılım", "Maksimum 4 kişi"],
  ["Seviye", "Elite / Yachtmaster"],
  ["Odak", "Komuta • Karar • Liderlik"],
  ["Doğrulama", "QR Kontrollü Sertifika"],
];

const comparisonRows = [
  {
    label: "Odak",
    basic: "Teknik ilerleme",
    premium: "Komuta standardı",
  },
  {
    label: "Beklenti",
    basic: "Daha iyi kullanmak",
    premium: "Daha doğru yönetmek",
  },
  {
    label: "Psikoloji",
    basic: "Uygulama geliştirme",
    premium: "Sorumluluk taşıma",
  },
  {
    label: "Sonuç",
    basic: "Daha deneyimli katılımcı",
    premium: "Gerçek skipper karakteri",
  },
];

export default function YachtmasterPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroShift = Math.min(scrollY, 300) * 0.12;
  const heroOpacity = Math.max(0.75, 1 - scrollY * 0.0009);
  const glowShift = Math.min(scrollY, 300) * 0.05;

  return (
    <main
      style={{
        background: "#04070c",
        color: "#f8fafc",
      }}
    >
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          padding: "124px 24px 110px",
          background:
            "linear-gradient(180deg, #050912 0%, #08111d 46%, #04070c 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 30%, rgba(217,188,119,0.15), transparent 40%), radial-gradient(circle at 80% 70%, rgba(56,189,248,0.12), transparent 45%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(92deg, rgba(4,7,12,0.98) 0%, rgba(4,7,12,0.90) 42%, rgba(4,7,12,0.52) 100%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.05,
            pointerEvents: "none",
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
            mixBlendMode: "overlay",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: `${-140 + glowShift}px`,
            left: `${-120 + glowShift * 0.7}px`,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(201,169,97,0.16)",
            filter: "blur(100px)",
            pointerEvents: "none",
            transition: "all 80ms linear",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: `${-160 + glowShift * 0.6}px`,
            right: `${-120 + glowShift}px`,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(56,189,248,0.11)",
            filter: "blur(110px)",
            pointerEvents: "none",
            transition: "all 80ms linear",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1180,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 34,
            alignItems: "center",
            transform: `translateY(${heroShift}px)`,
            opacity: heroOpacity,
            transition: "transform 80ms linear, opacity 80ms linear",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(201,169,97,0.08)",
                border: "1px solid rgba(201,169,97,0.18)",
                color: "#d9bc77",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: 1.15,
                textTransform: "uppercase",
                marginBottom: 18,
              }}
            >
              Yachtmaster Elite Program
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(50px, 5vw, 86px)",
                fontWeight: 900,
                lineHeight: 1.01,
                letterSpacing: "-0.055em",
                maxWidth: 840,
                textShadow: "0 12px 42px rgba(0,0,0,0.48)",
              }}
            >
              Komuta artık
              <br />
              sende.
            </h1>

            <p
              style={{
                marginTop: 22,
                fontSize: 18,
                color: "rgba(226,232,240,0.84)",
                lineHeight: 1.9,
                maxWidth: 700,
              }}
            >
              Yachtmaster bir eğitim değil, bir eştir. Bu noktadan sonra artık
              sadece tekne kullanmazsın; yönetir, önceliklendirir, karar verir
              ve sonucu taşırsın. Bu program seni bilgiyle değil standartla
              büyütür.
            </p>

            <div
              style={{
                marginTop: 16,
                fontSize: 13,
                color: "rgba(226,232,240,0.62)",
                fontWeight: 500,
                letterSpacing: 0.35,
              }}
            >
              Dark luxury yapı • Maksimum 4 kişi • Elite seviye karar pratiği
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
              }}
            >
              {[
                "Elite skipper standardı",
                "Liderlik ve komuta odağı",
                "Gerçek açık deniz pratiği",
                "QR doğrulamalı sertifika",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    borderRadius: 999,
                    background:
                      "linear-gradient(180deg, rgba(201,169,97,0.10), rgba(201,169,97,0.04))",
                    border: "1px solid rgba(201,169,97,0.18)",
                    fontSize: 13,
                    color: "#e8d7a7",
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "#d9bc77",
                      boxShadow: "0 0 10px rgba(217,188,119,0.55)",
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 30,
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
              }}
            >
              <a
                href={waLink(
                  "Merhaba, Yachtmaster programı hakkında bilgi almak istiyorum."
                )}
                target="_blank"
                rel="noreferrer"
                style={{
                  padding: "15px 24px",
                  borderRadius: 14,
                  background: "#d9bc77",
                  color: "#121212",
                  textDecoration: "none",
                  fontWeight: 900,
                  boxShadow: "0 14px 30px rgba(217,188,119,0.20)",
                }}
              >
                💬 Hemen Yaz
              </a>

              <Link
                href="/certificates"
                style={{
                  padding: "15px 24px",
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "#f8fafc",
                  textDecoration: "none",
                  fontWeight: 700,
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                Sertifika Doğrula
              </Link>
            </div>

            <div
              style={{
                marginTop: 16,
                color: "#fca5a5",
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              ⚠️ Bu program herkese açık görünür, ama herkese uygun değildir.
            </div>
          </div>

          <div
            style={{
              borderRadius: 26,
              padding: 24,
              background:
                "linear-gradient(180deg, rgba(9,14,22,0.78), rgba(5,8,14,0.90))",
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow:
                "0 25px 60px rgba(0,0,0,0.55), inset 0 0 24px rgba(201,169,97,0.05)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                color: "#d9bc77",
                letterSpacing: 1.2,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              Elite Snapshot
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {luxuryStats.map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    padding: "16px 18px",
                    borderRadius: 18,
                    background:
                      "linear-gradient(180deg, rgba(18,24,36,0.72), rgba(10,15,24,0.68))",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "#d9bc77",
                      fontWeight: 800,
                      letterSpacing: 1.2,
                      textTransform: "uppercase",
                      marginBottom: 6,
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "#f8fafc",
                      fontWeight: 800,
                      lineHeight: 1.45,
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 16,
                padding: 16,
                borderRadius: 18,
                background: "rgba(217,188,119,0.06)",
                border: "1px solid rgba(217,188,119,0.18)",
                color: "#ecd8a1",
                fontSize: 14,
                lineHeight: 1.7,
                fontWeight: 700,
              }}
            >
              Yachtmaster seviyesinde amaç sadece geçmek değildir. Ayırt edilmek,
              güven vermek ve komuta standardı taşımaktır.
            </div>
          </div>
        </div>
      </section>
            <section style={{ padding: "0 24px 86px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {masteryPillars.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 24,
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(16,22,34,0.78), rgba(10,14,22,0.58))",
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
              }}
            >
              <h3 style={{ margin: 0, fontSize: 22, fontWeight: 800 }}>
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  color: "rgba(226,232,240,0.76)",
                  lineHeight: 1.78,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 90px", textAlign: "center" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, fontWeight: 900 }}>
            Çoğu kişi burada kalır.
            <br />
            Çok azı geçer.
          </h2>

          <p style={{ marginTop: 18, opacity: 0.8 }}>
            Yachtmaster seviyesinde artık kimse sana ne yapacağını söylemez.
            Kararı sen verirsin.
          </p>
        </div>
      </section>

      <section style={{ padding: "0 24px 94px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 28,
          }}
        >
          {programFlow.map((item) => (
            <div
              key={item.day}
              style={{
                padding: 16,
                borderRadius: 18,
                background:
                  "linear-gradient(180deg, rgba(16,22,34,0.74), rgba(11,16,26,0.52))",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <div style={{ color: "#d9bc77", fontWeight: 800 }}>
                {item.day}
              </div>
              <div style={{ fontWeight: 700 }}>{item.title}</div>
              <div style={{ opacity: 0.8 }}>{item.text}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "0 24px 96px" }}>
        <div
          style={{
            maxWidth: 1120,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 28,
          }}
        >
          <div>
            <h3>Kimler için?</h3>
            {whoItsFor.map((item) => (
              <div key={item}>• {item}</div>
            ))}
          </div>

          <div>
            <h3>Kimler için değil?</h3>
            {whoItsNotFor.map((item) => (
              <div key={item}>• {item}</div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "0 24px 90px", textAlign: "center" }}>
        <h2>Gerçek geri dönüşler</h2>

        <div style={{ marginTop: 20 }}>
          {proofItems.map((text) => (
            <div key={text} style={{ marginBottom: 10 }}>
              {text}
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2>Katılım seçenekleri</h2>

          <div style={{ marginTop: 30 }}>
            {pricingPlans.map((plan) => (
              <div key={plan.title} style={{ marginBottom: 20 }}>
                <h3>{plan.title}</h3>
                <div>{plan.price}</div>

                <a
                  href={waLink(plan.waText)}
                  target="_blank"
                  style={{
                    display: "inline-block",
                    marginTop: 10,
                    padding: 10,
                    background: "#d9bc77",
                    color: "#111",
                    borderRadius: 8,
                    textDecoration: "none",
                  }}
                >
                  Bilgi Al
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "120px 24px", textAlign: "center" }}>
        <h2>Bu seviyeye herkes çıkamaz.</h2>

        <div style={{ marginTop: 20 }}>
          <a
            href={waLink("Yachtmaster programına katılmak istiyorum")}
            target="_blank"
            style={{
              padding: "18px 32px",
              background: "#d9bc77",
              borderRadius: 14,
              fontWeight: 900,
              color: "#111",
              textDecoration: "none",
            }}
          >
            Elite Başvuru
          </a>
        </div>
      </section>

    </main>
  );
}