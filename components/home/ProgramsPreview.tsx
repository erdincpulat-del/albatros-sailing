"use client";

export default function ProgramsPreview() {
  const programs = [
    {
      title: "Açık Deniz Başlangıç",
      desc: "Temel yelken bilgisi, güvenli seyir ve ilk açık deniz deneyimi.",
      tag: "Başlangıç",
    },
    {
      title: "Offshore Yacht Training",
      desc: "Gece seyri, rota planlama ve ileri denizcilik pratiği.",
      tag: "İleri Seviye",
    },
    {
      title: "Uluslararası Rotalar",
      desc: "Yunan adaları ve uzun rota deneyimi ile gerçek kaptanlık süreci.",
      tag: "Deneyim",
    },
  ];

  return (
    <section
      style={{
        padding: "100px 24px",
        background: "#050b14",
      }}
    >
      <div
        style={{
          maxWidth: 1180,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            marginBottom: 50,
            maxWidth: 640,
          }}
        >
          <div
            style={{
              fontSize: 12,
              letterSpacing: 1.2,
              color: "#38bdf8",
              fontWeight: 800,
              marginBottom: 10,
              textTransform: "uppercase",
            }}
          >
            Programlar
          </div>

          <h2
            style={{
              fontSize: 40,
              fontWeight: 800,
              color: "#f8fafc",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Sadece eğitim değil, gerçek deniz süreci
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 16,
              lineHeight: 1.6,
            }}
          >
            Her program, seni bir üst seviyeye taşıyan gerçek senaryolar ve
            uygulamalar içerir.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {programs.map((program) => (
            <div
              key={program.title}
              style={{
                borderRadius: 20,
                padding: 22,
                background:
                  "linear-gradient(180deg, rgba(15,23,42,0.8), rgba(15,23,42,0.5))",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                transition: "all 0.25s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(0,0,0,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  color: "#7dd3fc",
                  fontWeight: 700,
                  marginBottom: 10,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                {program.tag}
              </div>

              <div
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#f8fafc",
                  marginBottom: 10,
                }}
              >
                {program.title}
              </div>

              <div
                style={{
                  fontSize: 14,
                  color: "rgba(226,232,240,0.8)",
                  lineHeight: 1.6,
                }}
              >
                {program.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}