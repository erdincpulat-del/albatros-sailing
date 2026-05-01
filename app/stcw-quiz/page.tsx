"use client";

export default function STCWQuizPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #0b1c2c 0%, #07111a 100%)",
        color: "white",
        padding: "80px 20px",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADLINE */}
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h1
          style={{
            fontSize: 36,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          STCW Sınav Simülasyonu
        </h1>

        <p
          style={{
            opacity: 0.7,
            fontSize: 18,
            marginBottom: 40,
          }}
        >
          Gerçek denizcilik sınavına en yakın deneyim.  
          Bilgini test et, seviyeni gör, eksiklerini keşfet.
        </p>

        {/* CTA */}
        <div style={{ display: "flex", gap: 15, justifyContent: "center" }}>
          <button
            style={{
              padding: "12px 24px",
              background: "#0ea5e9",
              border: "none",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
            }}
          >
            10 Soru Başlat
          </button>

          <button
            style={{
              padding: "12px 24px",
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
            }}
          >
            25 Soru
          </button>

          <button
            style={{
              padding: "12px 24px",
              background: "#1e293b",
              border: "1px solid #334155",
              borderRadius: 8,
              color: "white",
              cursor: "pointer",
            }}
          >
            50 Soru
          </button>
        </div>

        {/* TRUST / PREMIUM MESSAGE */}
        <div
          style={{
            marginTop: 50,
            opacity: 0.6,
            fontSize: 14,
          }}
        >
          STCW | IMO standartlarına uygun soru yapısı  
          Gerçek sınav mantığına göre hazırlanmıştır
        </div>
      </div>
    </div>
  );
}