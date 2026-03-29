export default function AboutPage() {
  return (
    <main
      style={{
        background: "#f8f5ef",
        color: "#0d1b2a",
        minHeight: "100vh"
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "120px 20px 80px",
          background: "linear-gradient(180deg,#17364a 0%, #0d1b2a 100%)",
          color: "white"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1px",
              marginBottom: "14px",
              opacity: 0.8
            }}
          >
            ALBATROS SAILING
          </div>

          <h1
            style={{
              fontSize: "clamp(38px,6vw,60px)",
              lineHeight: 1.05,
              margin: "0 0 18px 0"
            }}
          >
            Deniz bir spor değil,
            <br />
            bir karakter okuludur.
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              maxWidth: "720px",
              opacity: 0.85
            }}
          >
            Albatros Sailing yalnızca yelken öğretmek için değil,
            denizde karar verebilen, sorumluluk alabilen ve gerçek
            deneyim kazanmış kaptanlar yetiştirmek için kurulmuş
            bir eğitim platformudur.
          </p>
        </div>
      </section>

      {/* EĞİTMEN */}
      <section
        style={{
          padding: "90px 20px"
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px"
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "36px",
                marginBottom: "18px"
              }}
            >
              Eğitmen
            </h2>

            <h3
              style={{
                fontSize: "24px",
                marginBottom: "14px"
              }}
            >
              Erdinç Pulat
            </h3>

            <p
              style={{
                lineHeight: 1.8,
                opacity: 0.85
              }}
            >
              Albatros Sailing’in kurucusu ve eğitmeni olarak,
              yelken eğitimi ile gerçek deniz tecrübesini bir
              araya getiren bir yaklaşım benimser.
            </p>

            <p
              style={{
                lineHeight: 1.8,
                opacity: 0.85
              }}
            >
              Eğitimlerin amacı yalnızca teknik bilgi vermek
              değil; denizde doğru karar verebilen, ekip
              yönetebilen ve sorumluluk alabilen kaptanlar
              yetiştirmektir.
            </p>
          </div>

          {/* FOTOĞRAF */}
          <div
            style={{
              background: "white",
              borderRadius: "20px",
              border: "1px solid rgba(0,0,0,0.08)",
              height: "320px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              opacity: 0.6
            }}
          >
            Eğitmen fotoğrafı buraya gelecek
          </div>
        </div>
      </section>

      {/* EĞİTİM FELSEFESİ */}
      <section
        style={{
          padding: "80px 20px",
          background: "#ffffff"
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <h2
            style={{
              fontSize: "34px",
              marginBottom: "20px"
            }}
          >
            Eğitim Yaklaşımımız
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              opacity: 0.85
            }}
          >
            Albatros Sailing eğitimleri teoriden çok deneyime
            dayanır. Katılımcılar yalnızca dinleyerek değil,
            doğrudan denizde uygulayarak öğrenir.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              opacity: 0.85
            }}
          >
            Amaç bir kurs tamamlamak değil, gerçek deniz
            koşullarında gelişen uzun bir kaptanlık
            yolculuğunun ilk adımlarını atmaktır.
          </p>
        </div>
      </section>
    </main>
  )
}