import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function OffshoreSkipperPage() {
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
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px", marginBottom: "14px", opacity: 0.82 }}>
              OFFSHORE SKIPPER
            </div>

            <h1 style={{ fontSize: "clamp(38px, 6vw, 60px)", lineHeight: 1.05, margin: "0 0 14px 0" }}>
              Offshore Skipper Eğitimi
            </h1>

            <p style={{ maxWidth: "760px", fontSize: "18px", lineHeight: 1.8, opacity: 0.82, margin: 0 }}>
              Açık deniz, gece seyri, vardiya yönetimi ve ileri karar verme becerileri üzerine yoğun gelişim programı.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 20px 100px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "28px" }}>
            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "28px",
                border: "1px solid rgba(13,27,42,0.08)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ marginTop: 0 }}>Program Özeti</h2>
              <p style={{ lineHeight: 1.75, opacity: 0.8 }}>
                Offshore Skipper programı; açık deniz psikolojisi, gece seyri,
                vardiya sistemi, ileri rota kararları ve sorumluluk yönetimi
                üzerine yoğunlaşır.
              </p>
              <p style={{ lineHeight: 1.75, opacity: 0.8 }}>
                Katılımcıyı yalnızca teknik olarak değil, zihinsel olarak da
                denizde güçlü hale getirmeyi hedefler.
              </p>
            </div>

            <div
              style={{
                background: "white",
                borderRadius: "24px",
                padding: "28px",
                border: "1px solid rgba(13,27,42,0.08)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.05)",
              }}
            >
              <h2 style={{ marginTop: 0 }}>Detaylar</h2>
              <p><strong>Süre:</strong> 7 Gün</p>
              <p><strong>Seviye:</strong> İleri Seviye</p>
              <p><strong>Odak:</strong> Açık deniz, gece seyri, vardiya ve ileri karar verme</p>
              <p><strong>Uygunluk:</strong> Kıyı seyri tecrübesi olan ve gelişmek isteyen katılımcılar</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}