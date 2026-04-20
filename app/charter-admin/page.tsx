"use client";

import { useEffect, useMemo, useState } from "react";

type Boat = {
  id: string;
  name: string;
  slug: string;
  model?: string;
  year?: number;
  cabins?: number;
  guestsLabel?: string;
  location?: string;
  image?: string;
};

export default function CharterAdminPage() {
  const [boats, setBoats] = useState<Boat[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [deletingSlug, setDeletingSlug] = useState<string | null>(null);

  useEffect(() => {
    fetchBoats();
  }, []);

  async function fetchBoats() {
    try {
      setLoading(true);

      const res = await fetch("/api/charter", {
        method: "GET",
        cache: "no-store",
      });

      const data = await res.json();

      const list = Array.isArray(data)
        ? data
        : data?.boats || data?.data || [];

      setBoats(list);
    } catch (error) {
      console.error("Charter admin fetch error:", error);
      alert("Tekne listesi yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }

  async function handleDeleteBoat(slug: string, name: string) {
    const ok = window.confirm(`"${name}" teknesini silmek istiyor musun?`);
    if (!ok) return;

    try {
      setDeletingSlug(slug);

      const res = await fetch(`/api/charter/${slug}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (!res.ok || !result.success) {
        throw new Error(result.error || "Silme başarısız");
      }

      setBoats((prev) => prev.filter((b) => b.slug !== slug));
      alert("Tekne silindi.");
    } catch (error) {
      console.error("Delete boat error:", error);
      alert("Tekne silinemedi.");
    } finally {
      setDeletingSlug(null);
    }
  }

  const filteredBoats = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return boats;

    return boats.filter((boat) =>
      [
        boat.name,
        boat.slug,
        boat.model,
        String(boat.year ?? ""),
        boat.location,
        String(boat.cabins ?? ""),
        boat.guestsLabel,
      ]
        .filter(Boolean)
        .some((value) => String(value).toLowerCase().includes(q))
    );
  }, [boats, search]);

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          padding: 40,
          background:
            "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 35%), linear-gradient(180deg, #060b14 0%, #09111d 100%)",
          color: "#fff",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.7,
              marginBottom: 10,
            }}
          >
            Albatros Sailing
          </div>

          <div
            style={{
              fontSize: 40,
              fontWeight: 800,
              marginBottom: 10,
            }}
          >
            Charter Fleet Yönetimi
          </div>

          <div style={{ opacity: 0.7, fontSize: 16 }}>Yükleniyor...</div>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 35%), linear-gradient(180deg, #060b14 0%, #09111d 100%)",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ marginBottom: 24 }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.7,
              marginBottom: 10,
            }}
          >
            Albatros Sailing
          </div>

          <h1
            style={{
              fontSize: 48,
              lineHeight: 1.1,
              margin: 0,
              fontWeight: 800,
            }}
          >
            Charter Fleet Yönetimi
          </h1>

          <p
            style={{
              marginTop: 12,
              opacity: 0.72,
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Tekneleri listele, ara, detay sayfasına geç ve gerekirse sistemden kaldır.
          </p>
        </div>

        <div
          style={{
            marginBottom: 24,
            display: "flex",
            gap: 12,
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Tekne adı, model, yıl, lokasyon ara..."
            style={{
              width: "100%",
              maxWidth: 420,
              padding: "12px 14px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              outline: "none",
              fontSize: 14,
            }}
          />

          <button
            type="button"
            onClick={fetchBoats}
            style={{
              padding: "12px 16px",
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              color: "#fff",
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            Listeyi Yenile
          </button>
        </div>

        {filteredBoats.length === 0 ? (
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 20,
              padding: 24,
              background: "rgba(255,255,255,0.03)",
              color: "rgba(255,255,255,0.78)",
            }}
          >
            {boats.length === 0
              ? "Henüz kayıtlı tekne bulunmuyor."
              : "Arama sonucuna uygun tekne bulunamadı."}
          </div>
        ) : (
          <div style={{ display: "grid", gap: 18 }}>
            {filteredBoats.map((boat) => (
              <div
                key={boat.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 20,
                  padding: 20,
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.03)",
                  boxShadow: "0 14px 40px rgba(0,0,0,0.18)",
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    minWidth: 0,
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      width: 120,
                      height: 84,
                      borderRadius: 14,
                      overflow: "hidden",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      flexShrink: 0,
                    }}
                  >
                    {boat.image ? (
                      <img
                        src={boat.image}
                        alt={boat.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 12,
                          opacity: 0.6,
                        }}
                      >
                        Görsel yok
                      </div>
                    )}
                  </div>

                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: 28,
                        fontWeight: 700,
                        marginBottom: 6,
                      }}
                    >
                      {boat.name}
                    </div>

                    <div
                      style={{
                        opacity: 0.78,
                        fontSize: 16,
                        lineHeight: 1.7,
                      }}
                    >
                      {boat.model || "-"} • {boat.year || "-"} • {boat.location || "-"}
                    </div>

                    <div
                      style={{
                        opacity: 0.72,
                        fontSize: 15,
                        lineHeight: 1.7,
                      }}
                    >
                      {boat.cabins ?? "-"} kabin • {boat.guestsLabel || "-"}
                    </div>

                    <div
                      style={{
                        opacity: 0.5,
                        fontSize: 13,
                        marginTop: 4,
                      }}
                    >
                      slug: {boat.slug}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: 10,
                    flexWrap: "wrap",
                    flexShrink: 0,
                  }}
                >
                  <a
                    href={`/charter-admin/charter/${boat.slug}`}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 12,
                      background: "#3b82f6",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    Detay Aç
                  </a>

                  <a
                    href={`/charter/${boat.slug}`}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 12,
                      background: "#4b5563",
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    Public Sayfa
                  </a>

                  <button
                    onClick={() => handleDeleteBoat(boat.slug, boat.name)}
                    disabled={deletingSlug === boat.slug}
                    style={{
                      padding: "10px 16px",
                      borderRadius: 12,
                      background:
                        deletingSlug === boat.slug ? "#7f1d1d" : "#ef4444",
                      color: "#fff",
                      border: "none",
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: deletingSlug === boat.slug ? "not-allowed" : "pointer",
                      minWidth: 78,
                      opacity: deletingSlug === boat.slug ? 0.75 : 1,
                    }}
                  >
                    {deletingSlug === boat.slug ? "Siliniyor..." : "Sil"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}