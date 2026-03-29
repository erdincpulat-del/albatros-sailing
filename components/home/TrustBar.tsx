"use client";

export default function TrustBar() {
  const items = [
    "Sadece 4 kişilik ekip",
    "Açık deniz rotaları",
    "Gerçek kaptanlık eğitimi",
    "QR ile doğrulanabilir sertifika",
  ];

  return (
    <section
      style={{
        position: "relative",
        zIndex: 5,
        marginTop: -26,
        padding: "0 20px 40px",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: 14,
            padding: 14,
            borderRadius: 22,
            background:
              "linear-gradient(180deg, rgba(10,18,32,0.88), rgba(8,15,28,0.72))",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "0 0 40px rgba(56,189,248,0.08), 0 24px 60px rgba(0,0,0,0.30)",
            backdropFilter: "blur(10px)",
          }}
        >
          {items.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                minHeight: 64,
                padding: "14px 16px",
                borderRadius: 16,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.08)",
                color: "#e2e8f0",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1.4,
              }}
            >
              <span
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background: "#38bdf8",
                  boxShadow: "0 0 10px rgba(56,189,248,0.7)",
                }}
              />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}