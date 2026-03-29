import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Link from "next/link";

const programs = [
  {
    slug: "basic-sailing",
    title: "Başlangıç Yelken Eğitimi",
    duration: "2 Gün",
    level: "Başlangıç",
    description:
      "Denizle ilk tanışma, temel yelken bilgisi, güvenlik ve başlangıç seviyesinde uygulamalı eğitim.",
  },
  {
    slug: "coastal-skipper",
    title: "Coastal Skipper Programı",
    duration: "4 Gün",
    level: "Orta Seviye",
    description:
      "Kıyı seyri, liman manevraları, rota takibi ve kaptanlık disiplinine güçlü bir geçiş programı.",
  },
  {
    slug: "offshore-skipper",
    title: "Offshore Skipper Eğitimi",
    duration: "7 Gün",
    level: "İleri Seviye",
    description:
      "Açık deniz, gece seyri, vardiya yönetimi ve ileri karar verme becerileri üzerine yoğun eğitim.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />

      <main
        style={{
          background: "#f8f5ef",
          color: "#0d1b2a",
        }}
      >
        <section
          style={{
            padding: "110px 20px 70px",
            background:
              "linear-gradient(180deg, #17364a 0%, #0d1b2a 100%)",
            color: "white",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "1px",
                marginBottom: "14px",
                opacity: 0.82,
              }}
            >
              PROGRAMLAR
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 6vw, 64px)",
                lineHeight: 1.05,
                margin: "0 0 16px 0",
              }}
            >
              Albatros Sailing
              <br />
              Eğitim Programları
            </h1>

            <p
              style={{
                maxWidth: "760px",
                margin: "0 auto",
                fontSize: "18px",
                lineHeight: 1.8,
                opacity: 0.82,
              }}
            >
              Denizde güven, disiplin, liderlik ve gerçek tecrübe kazandıran
              sistemli eğitim programları.
            </p>
          </div>
        </section>

        <section
          style={{
            padding: "80px 20px 100px",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {programs.map((program) => (
              <article
                key={program.slug}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "28px",
                  border: "1px solid rgba(13,27,42,0.08)",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "320px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      marginBottom: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        background: "#e8eef2",
                        color: "#1b3a4b",
                        fontWeight: 700,
                      }}
                    >
                      {program.duration}
                    </span>

                    <span
                      style={{
                        fontSize: "13px",
                        padding: "6px 10px",
                        borderRadius: "999px",
                        background: "#eef2e7",
                        color: "#455d2e",
                        fontWeight: 700,
                      }}
                    >
                      {program.level}
                    </span>
                  </div>

                  <h2
                    style={{
                      fontSize: "28px",
                      lineHeight: 1.25,
                      margin: "0 0 14px 0",
                    }}
                  >
                    {program.title}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      fontSize: "16px",
                      lineHeight: 1.75,
                      opacity: 0.8,
                    }}
                  >
                    {program.description}
                  </p>
                </div>

                <div style={{ marginTop: "28px" }}>
                  <Link
                    href={`/programs/${program.slug}`}
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      background: "#1b3a4b",
                      color: "white",
                      padding: "12px 18px",
                      borderRadius: "999px",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    Detayı Gör
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}