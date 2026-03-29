"use client";

import Link from "next/link";

const authorityPoints = [
  "Gerçek açık deniz tecrübesi",
  "Küçük grup ile birebir yönlendirme",
  "Karar verme ve liderlik odaklı eğitim",
  "Doğrulanabilir sertifika sistemi",
];

export default function InstructorSection() {
  return (
    <section
      style={{
        padding: "120px 24px",
        background:
          "linear-gradient(180deg, #07111f 0%, #050b14 55%, #07111f 100%)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >
        {/* SOL - GÖRSEL */}
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            overflow: "hidden",
            minHeight: 520,
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(180deg, rgba(15,23,42,0.92), rgba(10,18,32,0.82))",
            boxShadow: "0 30px 60px rgba(0,0,0,0.35)",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/images/homepage/instructor.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.85,
            }}
          />

          {/* DARK OVERLAY */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(5,11,20,0.1), rgba(5,11,20,0.75))",
            }}
          />

          {/* TEXT BOX */}
          <div
            style={{
              position: "absolute",
              left: 20,
              right: 20,
              bottom: 20,
              padding: 18,
              borderRadius: 18,
              background: "rgba(8,15,30,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                color: "#7dd3fc",
                fontWeight: 800,
                letterSpacing: 1.2,
                textTransform: "uppercase",
                marginBottom: 6,
              }}
            >
              Lead Instructor
            </div>

            <div
              style={{
                fontSize: 26,
                fontWeight: 900,
                lineHeight: 1.2,
                color: "#f8fafc",
              }}
            >
              Denizi öğretmek değil,
              <br />
              denizde düşünmeyi öğretmek.
            </div>
          </div>
        </div>

        {/* SAĞ - CONTENT */}
        <div>
          {/* BADGE */}
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.16)",
              color: "#7dd3fc",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1.1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Instructor Authority
          </div>

          {/* TITLE */}
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px,4vw,54px)",
              lineHeight: 1.05,
              fontWeight: 900,
              color: "#f8fafc",
            }}
          >
            İnsanlar kurs satın almaz.
            <br />
            Güvendikleri eğitmenle
            <br />
            yola çıkar.
          </h2>

          {/* TEXT */}
          <p
            style={{
              marginTop: 22,
              fontSize: 17,
              lineHeight: 1.8,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 560,
            }}
          >
            Albatros Sailing yaklaşımı yalnızca bilgi öğretmez. 
            Seni gerçek deniz koşullarında karar veren, 
            durumu okuyabilen ve yönetebilen bir kaptana dönüştürür.
          </p>

          {/* LIST */}
          <div
            style={{
              marginTop: 28,
              display: "grid",
              gap: 14,
            }}
          >
            {authorityPoints.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "14px 16px",
                  borderRadius: 16,
                  background:
                    "linear-gradient(180deg, rgba(15,23,42,0.72), rgba(15,23,42,0.54))",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "all 0.2s ease",
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#22c55e",
                    boxShadow: "0 0 10px rgba(34,197,94,0.6)",
                  }}
                />

                <span
                  style={{
                    fontSize: 15,
                    color: "#e2e8f0",
                    fontWeight: 600,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* NAME */}
          <div
            style={{
              marginTop: 24,
              fontSize: 14,
              color: "rgba(226,232,240,0.7)",
              fontWeight: 700,
            }}
          >
            Erdinç Pulat • Lead Instructor
          </div>

          {/* CTA */}
          <div
            style={{
              marginTop: 30,
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://wa.me/905324873813"
              target="_blank"
              style={{
                padding: "15px 24px",
                borderRadius: 14,
                background:
                  "linear-gradient(180deg,#67d3ff,#42bdf8)",
                color: "#04121c",
                fontWeight: 900,
                textDecoration: "none",
                boxShadow: "0 14px 30px rgba(66,189,248,0.3)",
              }}
            >
              Eğitmenle İletişime Geç
            </a>

            <Link
              href="/training/offshore-skipper"
              style={{
                padding: "15px 24px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#f8fafc",
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Offshore Programı Gör
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}