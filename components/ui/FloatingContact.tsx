"use client";

export default function FloatingContact() {
  const phone = "905324873813";
  const message = "Merhaba, eğitimler hakkında bilgi almak istiyorum.";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan sor"
      onClick={async () => {
        try {
          await fetch("/api/contact-click", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              source: "Floating Contact Button",
              page: window.location.pathname,
              fullName: "",
              phone: "",
            }),
          });
        } catch (err) {
          console.error("contact click error", err);
        }
      }}
      style={{
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "12px 16px",
        borderRadius: 999,
        background: "#f4d9bc77",
        color: "#111",
        textDecoration: "none",
        fontSize: 14,
        fontWeight: 800,
        boxShadow: "0 18px 40px rgba(217,188,119,0.3)",
        transition: "all 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 24px 50px rgba(217,188,119,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 18px 40px rgba(217,188,119,0.3)";
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        💬
      </span>

      WhatsApp'tan Sor
    </a>
  );
}