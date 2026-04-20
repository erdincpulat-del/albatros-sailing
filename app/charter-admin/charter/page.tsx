"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CharterBoat = {
  id: string;
  slug: string;
  name: string;
  model: string;
  year: number;
  cabins: number;
  guestsLabel: string;
  location: string;
  image: string;
  shortNote: string;
  description: string;
  features: string;
};

type ApiResponse = {
  success?: boolean;
  items?: CharterBoat[];
  boats?: CharterBoat[];
  data?: CharterBoat[];
  item?: CharterBoat;
  error?: string;
};

const initialForm = {
  slug: "",
  name: "",
  model: "",
  year: "",
  cabins: "",
  guestsLabel: "",
  location: "",
  image: "",
  shortNote: "",
  description: "",
  features: "",
};

function normalizeBoatsResponse(data: any): CharterBoat[] {
  if (Array.isArray(data)) return data;
  if (Array.isArray(data?.items)) return data.items;
  if (Array.isArray(data?.boats)) return data.boats;
  if (Array.isArray(data?.data)) return data.data;
  return [];
}

export default function CharterListPage() {
  const [boats, setBoats] = useState<CharterBoat[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [deletingSlug, setDeletingSlug] = useState("");
  const [error, setError] = useState("");
  const [query, setQuery] = useState("");
  const [form, setForm] = useState(initialForm);

  async function loadBoats() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/charter", { cache: "no-store" });
      const data: ApiResponse = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Tekneler yüklenemedi.");
      }

      const nextBoats = normalizeBoatsResponse(data);
      setBoats(nextBoats);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu.");
      setBoats([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadBoats();
  }, []);

  function updateField(key: keyof typeof initialForm, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function createSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/ı/g, "i")
      .replace(/ğ/g, "g")
      .replace(/ü/g, "u")
      .replace(/ş/g, "s")
      .replace(/ö/g, "o")
      .replace(/ç/g, "c")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  async function handleImageUpload(file: File) {
    try {
      setUploading(true);
      setError("");

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/charter/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Görsel yüklenemedi.");
      }

      setForm((prev) => ({
        ...prev,
        image: data.url,
      }));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload hatası oluştu.");
    } finally {
      setUploading(false);
    }
  }

  const filteredBoats = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return boats;

    return boats.filter((boat) =>
      [boat.name, boat.model, boat.slug, boat.location]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [boats, query]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const payload = {
        ...form,
        slug: form.slug || createSlug(form.name),
      };

      const res = await fetch("/api/charter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || data?.success === false) {
        throw new Error(data.error || "Tekne oluşturulamadı.");
      }

      setForm(initialForm);
      await loadBoats();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu.");
    } finally {
      setSaving(false);
    }
  }

  async function handleDeleteBoat(slug: string) {
    const confirmed = window.confirm(
      "Bu tekneyi silmek istediğine emin misin?"
    );
    if (!confirmed) return;

    try {
      setDeletingSlug(slug);
      setError("");

      const res = await fetch(`/api/charter/${slug}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Tekne silinemedi.");
      }

      await loadBoats();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Silme hatası oluştu.");
    } finally {
      setDeletingSlug("");
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background:
          "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 30%), linear-gradient(180deg, #07111f 0%, #0a1526 100%)",
        color: "white",
      }}
    >
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ marginBottom: 24 }}>
          <div style={{ fontSize: 12, letterSpacing: "0.18em", opacity: 0.7 }}>
            ALBATROS SAILING · CHARTER CONTROL PANEL
          </div>
          <h1 style={{ fontSize: 38, margin: "10px 0 8px", lineHeight: 1.05 }}>
            Charter Fleet Yönetimi
          </h1>
          <p style={{ opacity: 0.75, margin: 0, fontSize: 15 }}>
            Tekne ekle, listele, sil ve yönetim sayfasına geç.
          </p>
        </div>

        {error ? (
          <div
            style={{
              marginBottom: 20,
              padding: 14,
              borderRadius: 12,
              border: "1px solid rgba(255,120,120,0.35)",
              background: "rgba(255,80,80,0.12)",
            }}
          >
            {error}
          </div>
        ) : null}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "400px 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <form
            onSubmit={handleCreate}
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 22,
              padding: 22,
              boxShadow: "0 18px 36px rgba(0,0,0,0.16)",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: 18 }}>Yeni Tekne</h2>

            <Field
              label="Tekne Adı"
              value={form.name}
              onChange={(v) => updateField("name", v)}
            />
            <Field
              label="Slug"
              value={form.slug}
              onChange={(v) => updateField("slug", v)}
              placeholder="boş bırakırsan otomatik oluşur"
            />
            <Field
              label="Model"
              value={form.model}
              onChange={(v) => updateField("model", v)}
            />
            <Field
              label="Yıl"
              value={form.year}
              onChange={(v) => updateField("year", v)}
            />
            <Field
              label="Kabin"
              value={form.cabins}
              onChange={(v) => updateField("cabins", v)}
            />
            <Field
              label="Guests Label"
              value={form.guestsLabel}
              onChange={(v) => updateField("guestsLabel", v)}
            />
            <Field
              label="Lokasyon"
              value={form.location}
              onChange={(v) => updateField("location", v)}
            />
            <Field
              label="Ana Görsel URL"
              value={form.image}
              onChange={(v) => updateField("image", v)}
              placeholder="/charter/bali-44.jpg"
            />

            <label style={{ display: "block", marginBottom: 12 }}>
              <div style={{ marginBottom: 6, fontSize: 14, opacity: 0.82 }}>
                Ana Görsel Yükle
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleImageUpload(file);
                }}
                style={inputStyle}
              />

              <div style={{ marginTop: 8, fontSize: 13, opacity: 0.7 }}>
                {uploading
                  ? "Görsel yükleniyor..."
                  : "JPG, PNG, WEBP yükleyebilirsin."}
              </div>
            </label>

            {form.image ? (
              <div
                style={{
                  marginBottom: 16,
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 14,
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                <img
                  src={form.image}
                  alt="Preview"
                  style={{
                    width: "100%",
                    height: 190,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ) : null}

            <TextField
              label="Kısa Not"
              value={form.shortNote}
              onChange={(v) => updateField("shortNote", v)}
            />
            <TextField
              label="Açıklama"
              value={form.description}
              onChange={(v) => updateField("description", v)}
            />
            <TextField
              label="Özellikler"
              value={form.features}
              onChange={(v) => updateField("features", v)}
              placeholder="Virgülle ayır veya kısa kısa yaz"
            />

            <button
              type="submit"
              disabled={saving || uploading}
              style={buttonStyle}
            >
              {saving ? "Kaydediliyor..." : "Tekne Oluştur"}
            </button>
          </form>

          <section
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 22,
              padding: 22,
              boxShadow: "0 18px 36px rgba(0,0,0,0.16)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                marginBottom: 18,
                alignItems: "center",
              }}
            >
              <h2 style={{ margin: 0 }}>Tekne Listesi</h2>

              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ara..."
                style={{ ...inputStyle, maxWidth: 300 }}
              />
            </div>

            {loading ? (
              <div style={{ opacity: 0.7 }}>Yükleniyor...</div>
            ) : filteredBoats.length === 0 ? (
              <div style={{ opacity: 0.7 }}>Kayıt yok.</div>
            ) : (
              <div style={{ display: "grid", gap: 14 }}>
                {filteredBoats.map((boat) => (
                  <div
                    key={boat.id}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "160px 1fr",
                      gap: 18,
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 18,
                      padding: 14,
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    <div
                      style={{
                        width: 160,
                        height: 110,
                        borderRadius: 14,
                        overflow: "hidden",
                        background: "rgba(255,255,255,0.06)",
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
                          }}
                        />
                      ) : null}
                    </div>

                    <div>
                      <div style={{ fontSize: 24, fontWeight: 800 }}>
                        {boat.name}
                      </div>
                      <div style={{ opacity: 0.72, marginTop: 5 }}>
                        {boat.model} • {boat.year} • {boat.location}
                      </div>
                      <div style={{ opacity: 0.72, marginTop: 4 }}>
                        {boat.cabins} kabin • {boat.guestsLabel}
                      </div>

                      <div
                        style={{
                          marginTop: 14,
                          display: "flex",
                          gap: 10,
                          flexWrap: "wrap",
                        }}
                      >
                        <Link
                          href={`/charter-admin/charter/${boat.slug}`}
                          style={linkStyle}
                        >
                          Yönet
                        </Link>

                        <Link
                          href={`/charter/${boat.slug}`}
                          style={ghostLinkStyle}
                        >
                          Public Sayfa
                        </Link>

                        <button
                          type="button"
                          onClick={() => handleDeleteBoat(boat.slug)}
                          disabled={deletingSlug === boat.slug}
                          style={deleteButtonStyle}
                        >
                          {deletingSlug === boat.slug ? "Siliniyor..." : "Sil"}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <div style={{ marginBottom: 6, fontSize: 14, opacity: 0.82 }}>{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={inputStyle}
      />
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <div style={{ marginBottom: 6, fontSize: 14, opacity: 0.82 }}>{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={4}
        style={{
          ...inputStyle,
          resize: "vertical",
          minHeight: 96,
        }}
      />
    </label>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  marginTop: 8,
  padding: "13px 14px",
  borderRadius: 12,
  border: "1px solid rgba(120,220,255,0.3)",
  background: "rgba(90,190,255,0.18)",
  color: "white",
  cursor: "pointer",
  fontWeight: 700,
};

const linkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid rgba(120,220,255,0.3)",
  background: "rgba(90,190,255,0.14)",
};

const ghostLinkStyle: React.CSSProperties = {
  color: "white",
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.05)",
};

const deleteButtonStyle: React.CSSProperties = {
  color: "white",
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,90,90,0.3)",
  background: "rgba(255,80,80,0.15)",
  cursor: "pointer",
};