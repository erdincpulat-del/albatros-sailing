"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const message = searchParams.get("message");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.error || "Giriş başarısız");
        return;
      }

      // güvenli redirect
      const nextPath = searchParams.get("next");
      const safeNext =
        nextPath && nextPath.startsWith("/") ? nextPath : "/admin";

      router.push(safeNext);
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Giriş sırasında hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background:
          "linear-gradient(180deg, #f8fafc 0%, #eef4fb 50%, #ffffff 100%)",
        padding: 24,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 420,
          background: "#fff",
          border: "1px solid #e2e8f0",
          borderRadius: 20,
          padding: 28,
          boxShadow: "0 20px 40px rgba(15,23,42,0.08)",
        }}
      >
        {/* HEADER */}
        <div style={{ marginBottom: 22 }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 1.4,
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Albatros Sailing
          </div>

          <h1
            style={{
              margin: 0,
              fontSize: 28,
              color: "#0f172a",
            }}
          >
            Admin Login
          </h1>
        </div>

        {/* SESSION MESSAGE */}
        {message === "session-ended" && (
          <div
            style={{
              marginBottom: 16,
              padding: "12px 14px",
              borderRadius: 12,
              background: "rgba(34,197,94,0.10)",
              border: "1px solid rgba(34,197,94,0.24)",
              color: "#166534",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Session ended successfully.
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 16 }}>
            <label style={labelStyle}>Username</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
              autoComplete="username"
            />
          </div>

          <div style={{ marginBottom: 20 }}>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={buttonStyle}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  );
}

/* ---------- STYLES ---------- */

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: 8,
  fontWeight: 700,
  fontSize: 14,
  color: "#334155",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #cbd5e1",
  fontSize: 14,
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: 12,
  border: "none",
  background: "#0b2742",
  color: "#fff",
  fontWeight: 700,
  cursor: "pointer",
};