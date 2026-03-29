"use client";

const stories = [
  {
    name: "Mert K.",
    role: "Offshore Program",
    text: "Bu eğitim sadece tekne kullanmayı değil, denizde düşünmeyi öğretti. En büyük fark buydu.",
  },
  {
    name: "Elif T.",
    role: "Coastal Skipper",
    text: "Küçük grup yapısı sayesinde her manevrada birebir gelişim sağladım. Çok daha güvenli hissettim.",
  },
  {
    name: "Jan P.",
    role: "International Participant",
    text: "It felt real, structured and professional. Not just a course, but a serious maritime experience.",
  },
];

export default function StudentStories() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "110px 24px",
        background:
          "linear-gradient(180deg, #050b14 0%, #07111f 50%, #050b14 100%)",
        color: "#f8fafc",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-90px",
          left: "-70px",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(56,189,248,0.10)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-90px",
          right: "-70px",
          width: 240,
          height: 240,
          borderRadius: "50%",
          background: "rgba(34,197,94,0.08)",
          filter: "blur(70px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            marginBottom: 36,
          }}
        >
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
            Student Stories
          </div>

          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px, 4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              fontWeight: 900,
            }}
          >
            Gerçek deneyimler
            <br />
            güven oluşturur.
          </h2>

          <p
            style={{
              margin: "18px 0 0",
              color: "rgba(226,232,240,0.82)",
              fontSize: 17,
              lineHeight: 1.75,
              maxWidth: 680,
            }}
          >
            Albatros Sailing sadece eğitim vermez; öğrencinin denizde daha
            kontrollü, daha bilinçli ve daha güçlü hissetmesini sağlar.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: 22,
          }}
        >
          {stories.map((story) => (
            <div
              key={story.name}
              style={{
                position: "relative",
                borderRadius: 24,
                padding: 24,
                minHeight: 280,
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.86), rgba(15,23,42,0.64))",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.20)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -28,
                  right: -18,
                  fontSize: 120,
                  lineHeight: 1,
                  color: "rgba(56,189,248,0.08)",
                  fontWeight: 900,
                  pointerEvents: "none",
                }}
              >
                “
              </div>

              <div
                style={{
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    lineHeight: 1.8,
                    color: "#e2e8f0",
                  }}
                >
                  {story.text}
                </p>
              </div>

              <div
                style={{
                  marginTop: 24,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  position: "relative",
                  zIndex: 2,
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 800,
                    color: "#f8fafc",
                    marginBottom: 4,
                  }}
                >
                  {story.name}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 800,
                    color: "#7dd3fc",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {story.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          {[
            "Gerçek öğrenci deneyimleri",
            "Küçük grup yapısı",
            "Gerçek deniz pratiği",
            "Uzun vadeli gelişim hissi",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "10px 16px",
                borderRadius: 999,
                background:
                  "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(56,189,248,0.04))",
                border: "1px solid rgba(56,189,248,0.16)",
                color: "#7dd3fc",
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}