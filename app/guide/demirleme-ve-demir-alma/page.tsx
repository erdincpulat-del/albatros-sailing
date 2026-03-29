"use client";

import Link from "next/link";

const coreBlocks = [
  {
    title: "Demirleme neden önemlidir?",
    text: "Demirleme yalnızca tekneyi durdurmak değildir. Rüzgâr, dip yapısı, derinlik, salma mesafesi ve dönüş alanı birlikte değerlendirilmelidir. Güvenli gece ve güvenli bekleme çoğu zaman doğru demirlemeye bağlıdır.",
  },
  {
    title: "Yer seçimi",
    text: "İyi demirleme, doğru yer seçimiyle başlar. Dip yapısı, korunaklılık, rüzgâr yönü, diğer teknelerin salınım alanı ve kıyıya yaklaşma riski önceden düşünülmelidir.",
  },
  {
    title: "Zincir ve salma oranı",
    text: "Demirin tutması yalnızca atmakla değil, doğru zincir salmakla ilgilidir. Derinlik, hava ve bekleme süresine göre salınan zincir oranı büyük fark yaratır.",
  },
  {
    title: "Kontrol ve teyit",
    text: "Demir atıldıktan sonra iş bitmez. Teknenin geri tarayıp taramadığı, referans noktaları, GPS alarmı ve kıyıya göre durum mutlaka kontrol edilmelidir.",
  },
];

const anchoringSteps = [
  "Yer seçilir ve dip/rüzgâr değerlendirilir",
  "Yaklaşma düşük hızla ve kontrollü yapılır",
  "Uygun noktada demir bırakılır",
  "Geri viteste nazikçe tutuş kontrol edilir",
  "Doğru zincir oranı salınır",
  "Referans ve alarm ile tarama kontrolü yapılır",
];

const commonMistakes = [
  "Dip yapısını değerlendirmeden demir atmak",
  "Yetersiz zincir salmak",
  "Demirin tuttuğunu varsayıp teyit etmemek",
  "Diğer teknelerin dönüş alanını küçümsemek",
  "Hava değişimini hesaba katmadan gecelemek",
  "Demir alırken zincir hattını kontrolsüz toplamak",
];

const realSituations = [
  {
    title: "Rüzgâr artarken geceleme",
    text: "Akşam sakin görünen koy, gece farklı davranabilir. Demirin tutuşu ve salma oranı hava değişimine göre düşünülmelidir.",
  },
  {
    title: "Kalabalık koyda bekleme",
    text: "Sadece kendi teknenin değil, çevredeki teknelerin de salınım alanı hesaplanmalıdır. En sık hata burada yapılır.",
  },
  {
    title: "Demir alma",
    text: "Demir almak da en az atmak kadar dikkat ister. Zincir hattı, motor konumu ve teknenin demir üzerindeki yürüyüşü sakin yönetilmelidir.",
  },
];

export default function AnchoringGuidePage() {
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
        style={{
          padding: "120px 24px 90px",
          maxWidth: 1120,
          margin: "0 auto",
        }}
      >
        <div style={{ maxWidth: 820 }}>
          <div
            style={{
              display: "inline-flex",
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(103,211,255,0.08)",
              border: "1px solid rgba(103,211,255,0.18)",
              color: "#8ed8ff",
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              marginBottom: 18,
            }}
          >
            Manevra • Demirleme
          </div>

          <h1
            style={{
              fontSize: "clamp(40px, 5vw, 72px)",
              fontWeight: 900,
              lineHeight: 1.03,
              margin: 0,
              letterSpacing: "-0.04em",
            }}
          >
            Demirleme ve demir alma
            <br />
            nasıl uygulanır?
          </h1>

          <p
            style={{
              marginTop: 18,
              fontSize: 17,
              lineHeight: 1.85,
              color: "rgba(226,232,240,0.82)",
              maxWidth: 800,
            }}
          >
            Güvenli demirleme, tekneyi sadece durdurmak değil; geceyi, havayı,
            dip yapısını ve teknenin davranışını önceden yönetmektir. İyi bir
            kaptan demiri yalnızca atmaz, gerçekten tutturur ve kontrol eder.
          </p>

          <div style={{ marginTop: 40, maxWidth: 760 }}>
            <h2
              style={{
                fontSize: 26,
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                marginBottom: 12,
              }}
            >
              En kritik gerçek nedir?
            </h2>

            <p
              style={{
                color: "rgba(226,232,240,0.82)",
                lineHeight: 1.8,
                fontSize: 15,
                margin: 0,
              }}
            >
              Demirin suya gitmesi yetmez. Asıl mesele, doğru yerde, doğru
              açıyla, doğru zincir oranıyla tutmasını sağlamak ve bunu teyit
              etmektir.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: 60,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {coreBlocks.map((item) => (
            <div
              key={item.title}
              style={{
                padding: 22,
                borderRadius: 20,
                background:
                  "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.90))",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 40px rgba(66,189,248,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 18,
                  fontWeight: 800,
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  marginTop: 10,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "rgba(226,232,240,0.75)",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Doğru demirleme akışı
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {anchoringSteps.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "flex-start",
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#e2e8f0",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontWeight: 700,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    marginTop: 8,
                    flexShrink: 0,
                    background: "#67d3ff",
                    boxShadow: "0 0 8px rgba(103,211,255,0.45)",
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 70,
            borderRadius: 26,
            padding: "28px 24px",
            background:
              "linear-gradient(180deg, rgba(12,18,30,0.94), rgba(8,12,20,0.92))",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Gerçek hayatta nerede zorlaşır?
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 16,
            }}
          >
            {realSituations.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 18,
                  borderRadius: 18,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  style={{
                    fontSize: 16,
                    fontWeight: 900,
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </div>

                <div
                  style={{
                    color: "rgba(226,232,240,0.78)",
                    fontSize: 14,
                    lineHeight: 1.68,
                  }}
                >
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 70 }}>
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
            }}
          >
            En sık yapılan hatalar
          </h2>

          <div
            style={{
              marginTop: 18,
              display: "grid",
              gap: 12,
            }}
          >
            {commonMistakes.map((item) => (
              <div
                key={item}
                style={{
                  padding: "14px 16px",
                  borderRadius: 16,
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(226,232,240,0.82)",
                  fontSize: 15,
                  lineHeight: 1.7,
                  fontWeight: 700,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            marginTop: 80,
            padding: 30,
            borderRadius: 24,
            background:
              "linear-gradient(180deg, rgba(14,20,32,0.90), rgba(10,15,24,0.95))",
            border: "1px solid rgba(255,255,255,0.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Demirlemeyi gerçek denizde geliştirmek ister misin?
          </h2>

          <p
            style={{
              marginTop: 14,
              color: "rgba(226,232,240,0.8)",
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 780,
              marginInline: "auto",
            }}
          >
            Yer seçimi, zincir oranı, tutuş kontrolü ve güvenli geceleme ancak
            gerçek eğitim senaryolarında güvene dönüşür.
          </p>

          <div
            style={{
              marginTop: 24,
              display: "flex",
              justifyContent: "center",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <Link
              href="/training/offshore-skipper"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "linear-gradient(180deg, #67d3ff, #42bdf8)",
                color: "#04121c",
                textDecoration: "none",
                fontWeight: 900,
                boxShadow: "0 10px 24px rgba(66,189,248,0.22)",
              }}
            >
              Offshore Eğitimi
            </Link>

            <Link
              href="/guide/tekne-hakimiyeti"
              style={{
                padding: "14px 22px",
                borderRadius: 14,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.10)",
                color: "#f8fafc",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Tekne hakimiyetine dön
            </Link>
          </div>
        </div>
      </section>
      <section
  style={{
    marginTop: 80,
    padding: 30,
    borderRadius: 24,
    background:
      "linear-gradient(180deg, rgba(14,20,32,0.9), rgba(10,15,24,0.95))",
    border: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
  }}
>
  <h2 style={{ fontSize: 26, fontWeight: 900 }}>
    Demirledin… ama gerçekten kontrol sende mi?
  </h2>

  <p style={{ marginTop: 10, color: "rgba(226,232,240,0.78)" }}>
    Gerçek hakimiyet demir atmak değil, tekneyi her koşulda yönetebilmektir.
    Dar alan ve marina manevraları kaptanlığı ortaya çıkarır.
  </p>

  <Link
    href="/guide/marina-giris-cikis-usulleri"
    style={{
      display: "inline-block",
      marginTop: 18,
      padding: "12px 20px",
      borderRadius: 12,
      background: "linear-gradient(180deg,#67d3ff,#42bdf8)",
      color: "#04121c",
      fontWeight: 800,
      textDecoration: "none",
    }}
  >
    Marina manevrasına geç →
  </Link>
</section>
    </main>
  );
}