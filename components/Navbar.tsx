import Link from "next/link";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,.08)",
        background: "rgba(7,11,22,.55)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 0",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,.12)",
              background:
                "linear-gradient(135deg, rgba(120,179,255,.18), rgba(53,211,255,.14))",
            }}
          />
          <div style={{ lineHeight: 1.1 }}>
            <div style={{ fontWeight: 700, letterSpacing: "0.08em", fontSize: 12, opacity: 0.9 }}>
              ALBATROS
            </div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>Sailing • Yacht School</div>
          </div>
        </Link>

        <nav style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link className="btn" href="/programs">
            Eğitim Programları
          </Link>
          <Link className="btn btnPrimary" href="/verify">
            Lisans Doğrula
          </Link>
        </nav>
      </div>
    </header>
  );
}