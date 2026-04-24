"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";

export default function OffshoreRouteDisciplinePage() {
  const { locale } = useLanguage();

  const ui =
    locale === "tr"
      ? {
          badge: "İleri Offshore Rota Disiplini",
          title: "Bodrum – İstanbul – Çanakkale",
          titleAccent: "TSS / VTS Route Discipline",
          subtitle:
            "Gerçek rota, gerçek trafik, gerçek gece seyri. Bu sayfa; yoğun gemi trafiği, Traffic Separation Scheme (TSS), Vessel Traffic Services (VTS), vardiya disiplini ve açık denizde karar alma refleksinin neden kritik olduğunu anlatır.",
          heroStat1Label: "Rota Karakteri",
          heroStat1Value: "Uzun Geçiş / Gerçek Trafik",
          heroStat2Label: "Odak",
          heroStat2Value: "TSS • VTS • Gece Seyri",
          heroStat3Label: "Seviye",
          heroStat3Value: "İleri Offshore Disiplini",

          introTitle: "Bu rota neden güçlü?",
          introHeadline: "Sadece deniz yapmak değil, denizi okumak.",
          introText:
            "Bodrum’dan İstanbul ve Çanakkale hattına uzanan geçiş; sadece mil toplamak anlamına gelmez. Bu rota, yoğun trafik içinde sakin kalmayı, TSS mantığını anlamayı, VTS farkındalığı geliştirmeyi, gece seyri disiplinini korumayı ve şart değiştiğinde doğru karar almayı öğretir.",

          image1Eyebrow: "Gerçek Komuta",
          image1Title: "Boğaz yaklaşımı ve trafik farkındalığı",
          image1Text:
            "Köprü hattında dümen başında olmak; yalnızca rota tutmak değil, çevredeki büyük gemi hareketlerini, güvenli mesafeyi, TSS mantığını ve seyir disiplinini birlikte okuyabilmektir.",

          image2Eyebrow: "Gece Disiplini",
          image2Title: "Gece seyri, vardiya ve seyir ışıkları",
          image2Text:
            "Gece açık deniz ve kıyı geçişleri, gündüz seyirden farklı bir zihin ister. Görüş, ışık yorumlama, sessiz karar alma, dikkat bölünmesini azaltma ve vardiya kalitesini koruma bu seviyenin omurgasıdır.",

          tssTitle: "TSS nedir?",
          tssHeadline: "Traffic Separation Scheme, trafik düzenidir.",
          tssText:
            "TSS, yoğun deniz trafiğinin daha güvenli ve düzenli akması için oluşturulan ayırım düzenidir. Büyük gemilerin, ticari trafiğin ve farklı yönlü geçişlerin bir sistem içinde ayrılması amaçlanır. Eğitim açısından önemi; adayın yalnızca teknesini değil, sistemin nasıl çalıştığını da kavramasıdır.",
          tssItems: [
            "Trafiği çizgi gibi değil, davranış sistemi gibi okumayı öğretir.",
            "Kesişen riskleri önceden fark etme alışkanlığı kazandırır.",
            "Büyük gemi ile küçük teknenin aynı denizde farklı gerçekliklerle hareket ettiğini gösterir.",
            "Karar verme zamanlamasını geliştirir.",
          ],

          vtsTitle: "VTS nedir?",
          vtsHeadline: "Vessel Traffic Services, deniz trafiği farkındalığını büyütür.",
          vtsText:
            "VTS, belirli bölgelerde deniz trafiğinin emniyetine katkı sağlayan izleme ve bilgilendirme sistemidir. Offshore eğitim açısından anlamı, denizde yalnız olmadığını kabul etmek ve trafik ortamını daha geniş bir resim içinde değerlendirmektir.",
          vtsItems: [
            "Trafiği yalnızca gözle değil, sistem mantığıyla değerlendirme alışkanlığı",
            "Rota planlarken trafik yoğunluğunu ve bölgesel riski hesaba katma",
            "Boğaz ve yaklaşım bölgelerinde profesyonel dikkat seviyesi geliştirme",
            "Kurumsal denizcilik disiplinine yaklaşma",
          ],

          learningTitle: "Bu modülde ne gelişir?",
          learningHeadline: "Offshore zihniyeti burada keskinleşir.",
          learningCards: [
            {
              title: "Trafik Okuma",
              text: "Yoğun gemi akışı içinde yön, niyet, risk ve güvenli mesafe yorumlama becerisi gelişir.",
            },
            {
              title: "Gece Seyri Disiplini",
              text: "Seyir ışıkları, dikkat yönetimi, sessiz iletişim ve vardiya kalitesi güçlenir.",
            },
            {
              title: "Rota Kararı",
              text: "Meteoroloji, trafik ve tekne durumunu birlikte okuyarak daha doğru rota kararı üretilir.",
            },
            {
              title: "Profesyonel Duruş",
              text: "Kaptanlık; yalnızca yönetmek değil, temsil etmek ve güven vermektir. Bu rota bunu öğretir.",
            },
          ],

          whyTitle: "Neden Albatros için önemli?",
          whyText:
            "Çünkü Albatros bu hattı sadece teorik bir anlatı olarak değil, gerçek deniz pratiğinin parçası olarak ele alır. Bodrum – İstanbul – Çanakkale çizgisi; açık deniz düşüncesi, trafik farkındalığı, gece seyri ve komuta refleksini aynı anda büyüten güçlü bir eğitim sahasıdır.",

          ctaTitle: "Gerçek rota pratiğine geç",
          ctaText:
            "Offshore eğitimini sadece anlatılan değil, yaşanan seviyeye taşımak istiyorsan bu disiplin hattı senin için doğru adımdır.",
          ctaPrimary: "Offshore Yacht Course'a Git",
          ctaSecondary: "Tüm Programları Gör",
        }
      : {
          badge: "Advanced Offshore Route Discipline",
          title: "Bodrum – Istanbul – Çanakkale",
          titleAccent: "TSS / VTS Route Discipline",
          subtitle:
            "Real route, real traffic, real night passage. This page explains why dense vessel traffic, Traffic Separation Scheme (TSS), Vessel Traffic Services (VTS), watchkeeping discipline, and offshore decision-making reflexes matter.",
          heroStat1Label: "Route Character",
          heroStat1Value: "Long Passage / Real Traffic",
          heroStat2Label: "Focus",
          heroStat2Value: "TSS • VTS • Night Sailing",
          heroStat3Label: "Level",
          heroStat3Value: "Advanced Offshore Discipline",

          introTitle: "Why is this route powerful?",
          introHeadline: "Not just sailing miles, but reading the sea.",
          introText:
            "A passage from Bodrum toward Istanbul and Çanakkale is not only about collecting miles. It teaches how to stay calm in dense traffic, understand TSS logic, build VTS awareness, maintain night-sailing discipline, and make the right decision when conditions change.",

          image1Eyebrow: "Real Command",
          image1Title: "Strait approach and traffic awareness",
          image1Text:
            "Being at the helm near the bridge line is not only about holding course. It means reading large-vessel movement, safe distance, TSS logic, and navigation discipline together.",

          image2Eyebrow: "Night Discipline",
          image2Title: "Night sailing, watches, and navigation lights",
          image2Text:
            "Night passages offshore and along the coast require a different mindset from daytime sailing. Visibility, light interpretation, quiet decision-making, reduced distraction, and watch quality form the backbone of this level.",

          tssTitle: "What is TSS?",
          tssHeadline: "Traffic Separation Scheme is a traffic order.",
          tssText:
            "TSS is a separation system designed to help heavy marine traffic flow more safely and in a more organized way. It separates commercial traffic and opposite-direction movement within a system. Its training value is that the candidate learns not only to handle the yacht, but also to understand how the larger system works.",
          tssItems: [
            "Teaches you to read traffic not as a line, but as a behavior system.",
            "Builds the habit of noticing intersecting risks early.",
            "Shows that large ships and small yachts move with different realities in the same sea.",
            "Improves the timing of decision-making.",
          ],

          vtsTitle: "What is VTS?",
          vtsHeadline: "Vessel Traffic Services expand traffic awareness.",
          vtsText:
            "VTS is a monitoring and information system that contributes to marine traffic safety in designated areas. In offshore training, it means accepting that you are not alone at sea and evaluating the traffic environment within a wider picture.",
          vtsItems: [
            "Evaluating traffic not only visually, but with system logic",
            "Considering traffic density and regional risk when planning route",
            "Building professional attention level in straits and approach zones",
            "Moving closer to institutional seamanship discipline",
          ],

          learningTitle: "What improves in this module?",
          learningHeadline: "The offshore mindset sharpens here.",
          learningCards: [
            {
              title: "Traffic Reading",
              text: "You improve your ability to interpret direction, intent, risk, and safe distance within heavy vessel movement.",
            },
            {
              title: "Night Discipline",
              text: "Navigation lights, attention control, quiet communication, and watch quality become stronger.",
            },
            {
              title: "Route Decisions",
              text: "You generate better route decisions by reading weather, traffic, and yacht condition together.",
            },
            {
              title: "Professional Presence",
              text: "Captaincy is not only management; it is representation and confidence. This route teaches that.",
            },
          ],

          whyTitle: "Why does this matter for Albatros?",
          whyText:
            "Because Albatros treats this line not as theory, but as part of real sea practice. The Bodrum – Istanbul – Çanakkale line is a powerful training field that grows offshore thinking, traffic awareness, night-sailing discipline, and command reflexes at the same time.",

          ctaTitle: "Step into real route practice",
          ctaText:
            "If you want to take offshore training from something explained to something lived, this discipline line is the right step for you.",
          ctaPrimary: "Go to Offshore Yacht Course",
          ctaSecondary: "View All Programs",
        };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 32%), linear-gradient(180deg, #020617 0%, #07111d 48%, #020617 100%)",
        color: "#f8fafc",
      }}
    >
      <section
        className="relative overflow-hidden"
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.70), rgba(8,14,24,0.42))",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 20% 0%, rgba(66,189,248,0.15), transparent 60%)",
            filter: "blur(60px)",
            opacity: 0.6,
            pointerEvents: "none",
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <p
              style={{
                display: "inline-flex",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(103,211,255,0.08)",
                border: "1px solid rgba(103,211,255,0.18)",
                color: "#8ed8ff",
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              {ui.badge}
            </p>

            <h1
              style={{
                marginTop: 14,
                fontSize: "clamp(34px, 5vw, 68px)",
                fontWeight: 900,
                lineHeight: 1.02,
                letterSpacing: "-0.04em",
                color: "#f8fafc",
              }}
            >
              {ui.title}
              <br />
              <span style={{ color: "#8ed8ff" }}>{ui.titleAccent}</span>
            </h1>

            <p
              style={{
                marginTop: 20,
                maxWidth: "58rem",
                fontSize: 17,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.82)",
              }}
            >
              {ui.subtitle}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                [ui.heroStat1Label, ui.heroStat1Value],
                [ui.heroStat2Label, ui.heroStat2Value],
                [ui.heroStat3Label, ui.heroStat3Value],
              ].map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background:
                      "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                    padding: "18px 18px",
                    boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                  }}
                >
                  <div
                    style={{
                      fontSize: 11,
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      color: "rgba(226,232,240,0.55)",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      marginTop: 10,
                      fontSize: 16,
                      fontWeight: 800,
                      color: "#f8fafc",
                    }}
                  >
                    {value}
                  </div>
                </div>
              ))}
            </div>

            <div
              className="relative mt-10 overflow-hidden rounded-[28px]"
              style={{
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.28)",
              }}
            >
              <Image
                src="/images/offshore-route-bridge.jpg"
                alt="Bosphorus bridge sailing command"
                width={1600}
                height={1000}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 620,
                  objectFit: "cover",
                  display: "block",
                }}
                priority
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(2,6,23,0.04), rgba(2,6,23,0.10) 35%, rgba(2,6,23,0.72) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 24,
                  right: 24,
                  bottom: 24,
                  display: "grid",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignSelf: "start",
                    width: "fit-content",
                    borderRadius: 999,
                    background: "rgba(8,14,24,0.60)",
                    border: "1px solid rgba(142,216,255,0.20)",
                    padding: "8px 12px",
                    backdropFilter: "blur(10px)",
                    color: "#bfeaff",
                    fontSize: 11,
                    fontWeight: 800,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  BOSPHORUS • LIVE COMMAND
                </div>

                <div
                  style={{
                    maxWidth: 700,
                    color: "#f8fafc",
                    fontWeight: 900,
                    fontSize: "clamp(22px, 3.3vw, 34px)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {locale === "tr"
                    ? "Gerçek trafik içinde komuta, yalnızca yön tutmak değil; sistemi okumaktır."
                    : "Command in real traffic is not only about holding course, but reading the system."}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <p
            style={{
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              color: "rgba(226,232,240,0.62)",
            }}
          >
            {ui.introTitle}
          </p>

          <h2
            style={{
              marginTop: 12,
              fontSize: "clamp(30px, 4vw, 42px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#f8fafc",
            }}
          >
            {ui.introHeadline}
          </h2>

          <p
            style={{
              marginTop: 18,
              fontSize: 16,
              lineHeight: 1.9,
              color: "rgba(226,232,240,0.78)",
              maxWidth: 980,
            }}
          >
            {ui.introText}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12 md:pb-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#8ed8ff",
                marginBottom: 10,
              }}
            >
              {ui.image1Eyebrow}
            </div>

            <h3
              style={{
                fontSize: "clamp(24px, 3.3vw, 34px)",
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.image1Title}
            </h3>

            <p
              style={{
                marginTop: 18,
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.image1Text}
            </p>
          </div>

          <div
            style={{
              overflow: "hidden",
              borderRadius: 26,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.22)",
            }}
          >
            <Image
              src="/images/offshore-route-bridge.jpg"
              alt="Commander at helm under bridge"
              width={1200}
              height={1500}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 640,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:py-20">
          <div
            style={{
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 28,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#8ed8ff",
              }}
            >
              {ui.tssTitle}
            </p>

            <h3
              style={{
                marginTop: 12,
                fontSize: 28,
                fontWeight: 900,
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.tssHeadline}
            </h3>

            <p
              style={{
                marginTop: 18,
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.tssText}
            </p>

            <div className="mt-6 grid gap-3">
              {ui.tssItems.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "14px 16px",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#e2e8f0",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              borderRadius: 28,
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
              padding: 28,
              boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
            }}
          >
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#8ed8ff",
              }}
            >
              {ui.vtsTitle}
            </p>

            <h3
              style={{
                marginTop: 12,
                fontSize: 28,
                fontWeight: 900,
                lineHeight: 1.14,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.vtsHeadline}
            </h3>

            <p
              style={{
                marginTop: 18,
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.vtsText}
            </p>

            <div className="mt-6 grid gap-3">
              {ui.vtsItems.map((item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: 16,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.04)",
                    padding: "14px 16px",
                    fontSize: 14,
                    lineHeight: 1.75,
                    color: "#e2e8f0",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div
            style={{
              overflow: "hidden",
              borderRadius: 26,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.24)",
            }}
          >
            <Image
              src="/images/offshore-route-night.jpg"
              alt="Night sailing and navigation lights"
              width={1000}
              height={1500}
              style={{
                width: "100%",
                height: "100%",
                maxHeight: 720,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "#8ed8ff",
                marginBottom: 10,
              }}
            >
              {ui.image2Eyebrow}
            </div>

            <h3
              style={{
                fontSize: "clamp(24px, 3.3vw, 34px)",
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.image2Title}
            </h3>

            <p
              style={{
                marginTop: 18,
                fontSize: 15,
                lineHeight: 1.85,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.image2Text}
            </p>

            <div
              style={{
                marginTop: 28,
                borderRadius: 24,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                padding: 24,
                boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
              }}
            >
              <p
                style={{
                  fontSize: 12,
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "rgba(226,232,240,0.62)",
                }}
              >
                {ui.whyTitle}
              </p>

              <p
                style={{
                  marginTop: 16,
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "rgba(226,232,240,0.78)",
                }}
              >
                {ui.whyText}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background:
            "linear-gradient(180deg, rgba(8,14,24,0.34), rgba(8,14,24,0.24))",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-2xl">
            <p
              style={{
                fontSize: 12,
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                color: "rgba(226,232,240,0.62)",
              }}
            >
              {ui.learningTitle}
            </p>

            <h2
              style={{
                marginTop: 12,
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.learningHeadline}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {ui.learningCards.map((item) => (
              <div
                key={item.title}
                style={{
                  borderRadius: "1.75rem",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.92))",
                  padding: 24,
                  boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
                }}
              >
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: "#f8fafc",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "rgba(226,232,240,0.78)",
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <div
          style={{
            borderRadius: "2rem",
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.94), rgba(8,12,20,0.98))",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "48px 32px",
            color: "white",
            boxShadow: "0 18px 36px rgba(0,0,0,0.18)",
          }}
          className="md:px-12 md:py-14"
        >
          <div className="max-w-3xl">
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#f8fafc",
              }}
            >
              {ui.ctaTitle}
            </h2>

            <p
              style={{
                marginTop: 16,
                fontSize: 16,
                lineHeight: 1.9,
                color: "rgba(226,232,240,0.78)",
              }}
            >
              {ui.ctaText}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/programs/offshore-route-discipline"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full transition hover:-translate-y-1"
              style={{
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                padding: "14px 22px",
                fontSize: "14px",
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.3), transparent 70%)",
                  animation: "shine 1.5s linear infinite",
                }}
              />
              <span className="relative z-10">{ui.ctaPrimary}</span>
            </Link>

            <Link
              href="/programs"
              className="inline-flex items-center justify-center rounded-full transition hover:bg-white/5"
              style={{
                border: "1px solid rgba(255,255,255,0.20)",
                color: "#f8fafc",
                padding: "14px 22px",
                fontSize: "14px",
                fontWeight: 700,
                textDecoration: "none",
                background: "transparent",
              }}
            >
              {ui.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}