"use client";

import { useEffect, useMemo, useState } from "react";

type Boat = {
  id: string;
  slug: string;
  name: string;
  model: string;
};

type AvailabilityItem = {
  id: string;
  boatId: string;
  weekLabel: string;
  startDate: string;
  endDate: string;
  status: string;
  inquiryCount: number;
  overridePrice?: string | null;
  notes?: string | null;
  boat?: {
    id: string;
    name: string;
    slug: string;
  };
};

type BoatsResponse = {
  success: boolean;
  items?: Boat[];
  error?: string;
};

type AvailabilityResponse = {
  success: boolean;
  items?: AvailabilityItem[];
  item?: AvailabilityItem;
  error?: string;
};

type GenerateResponse = {
  success: boolean;
  created?: number;
  error?: string;
};

const STATUS_OPTIONS = ["AVAILABLE", "OPTION", "BOOKED", "BLOCKED"] as const;

const emptyForm = {
  weekLabel: "",
  startDate: "",
  endDate: "",
  status: "AVAILABLE",
  inquiryCount: "0",
  overridePrice: "",
  notes: "",
};

export default function CharterAvailabilityPage() {
  const [boats, setBoats] = useState<Boat[]>([]);
  const [selectedBoatId, setSelectedBoatId] = useState("");
  const [items, setItems] = useState<AvailabilityItem[]>([]);
  const [loadingBoats, setLoadingBoats] = useState(true);
  const [loadingItems, setLoadingItems] = useState(false);
  const [saving, setSaving] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [form, setForm] = useState(emptyForm);

  async function loadBoats() {
    try {
      setLoadingBoats(true);
      setError("");

      const res = await fetch("/api/charter", { cache: "no-store" });
      const data: BoatsResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Tekneler alınamadı.");
      }

      const nextBoats = data.items || [];
      setBoats(nextBoats);

      if (nextBoats.length > 0 && !selectedBoatId) {
        setSelectedBoatId(nextBoats[0].id);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Tekneler alınamadı.");
    } finally {
      setLoadingBoats(false);
    }
  }

  async function loadAvailability(boatId: string) {
    if (!boatId) {
      setItems([]);
      return;
    }

    try {
      setLoadingItems(true);
      setError("");

      const res = await fetch(`/api/charter-availability?boatId=${boatId}`, {
        cache: "no-store",
      });

      const data: AvailabilityResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Availability alınamadı.");
      }

      setItems(data.items || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Availability alınamadı.");
    } finally {
      setLoadingItems(false);
    }
  }

  useEffect(() => {
    loadBoats();
  }, []);

  useEffect(() => {
    if (selectedBoatId) {
      loadAvailability(selectedBoatId);
    }
  }, [selectedBoatId]);

  function setField<K extends keyof typeof emptyForm>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedBoatId) return;

    try {
      setSaving(true);
      setError("");
      setSuccess("");

      const res = await fetch("/api/charter-availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          boatId: selectedBoatId,
          weekLabel: form.weekLabel,
          startDate: form.startDate,
          endDate: form.endDate,
          status: form.status,
          inquiryCount: Number(form.inquiryCount || 0),
          overridePrice: form.overridePrice || null,
          notes: form.notes || null,
        }),
      });

      const data: AvailabilityResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Hafta eklenemedi.");
      }

      setForm(emptyForm);
      setSuccess("Hafta başarıyla oluşturuldu.");
      await loadAvailability(selectedBoatId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Hafta eklenemedi.");
    } finally {
      setSaving(false);
    }
  }

  async function updateItem(id: string, patch: Partial<AvailabilityItem>) {
    try {
      setError("");
      const target = items.find((x) => x.id === id);
      if (!target) return;

      const res = await fetch(`/api/charter-availability/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...target,
          ...patch,
        }),
      });

      const data: AvailabilityResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Güncelleme başarısız.");
      }

      await loadAvailability(selectedBoatId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Güncelleme başarısız.");
    }
  }
    async function deleteItem(id: string) {
    try {
      setError("");
      setSuccess("");

      const res = await fetch(`/api/charter-availability/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Silme başarısız.");
      }

      setSuccess("Kayıt silindi.");
      await loadAvailability(selectedBoatId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Silme başarısız.");
    }
  }

  async function handleGenerateYear(targetYear: number) {
    if (!selectedBoatId) return;

    try {
      setGenerating(true);
      setError("");
      setSuccess("");

      const res = await fetch("/api/charter-availability/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          boatId: selectedBoatId,
          year: targetYear,
        }),
      });

      const data: GenerateResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Haftalar oluşturulamadı.");
      }

      setSuccess(`${data.created || 0} adet hafta oluşturuldu.`);
      await loadAvailability(selectedBoatId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Haftalar oluşturulamadı.");
    } finally {
      setGenerating(false);
    }
  }

  const selectedBoat = useMemo(
    () => boats.find((boat) => boat.id === selectedBoatId),
    [boats, selectedBoatId]
  );

  const summary = useMemo(() => {
    const available = items.filter((x) => x.status === "AVAILABLE").length;
    const option = items.filter((x) => x.status === "OPTION").length;
    const booked = items.filter((x) => x.status === "BOOKED").length;
    const blocked = items.filter((x) => x.status === "BLOCKED").length;

    return {
      total: items.length,
      available,
      option,
      booked,
      blocked,
    };
  }, [items]);

  return (
    <main style={pageStyle}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div style={{ marginBottom: 24 }}>
          <div style={eyebrowStyle}>ALBATROS SAILING</div>
          <h1 style={{ fontSize: 36, margin: "10px 0 8px" }}>
            Charter Availability Panel
          </h1>
          <p style={{ opacity: 0.78, margin: 0 }}>
            Haftalık müsaitlik, opsiyon, rezervasyon ve özel fiyat yönetimi.
          </p>
        </div>

        {error ? (
          <div style={errorBoxStyle}>
            {error}
          </div>
        ) : null}

        {success ? (
          <div style={successBoxStyle}>
            {success}
          </div>
        ) : null}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
            gap: 14,
            marginBottom: 22,
          }}
        >
          <SummaryCard title="Toplam Hafta" value={summary.total} />
          <SummaryCard title="Available" value={summary.available} />
          <SummaryCard title="Option" value={summary.option} />
          <SummaryCard title="Booked" value={summary.booked} />
          <SummaryCard title="Blocked" value={summary.blocked} />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "390px 1fr",
            gap: 24,
            alignItems: "start",
          }}
        >
          <section style={panelStyle}>
            <h2 style={{ marginTop: 0 }}>Yeni Hafta Ekle</h2>

            <label style={{ display: "block", marginBottom: 12 }}>
              <div style={labelStyle}>Tekne</div>
              <select
                value={selectedBoatId}
                onChange={(e) => setSelectedBoatId(e.target.value)}
                style={inputStyle}
              >
                {loadingBoats ? (
                  <option>Yükleniyor...</option>
                ) : boats.length === 0 ? (
                  <option value="">Tekne yok</option>
                ) : (
                  boats.map((boat) => (
                    <option key={boat.id} value={boat.id}>
                      {boat.name} • {boat.model}
                    </option>
                  ))
                )}
              </select>
            </label>

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                marginBottom: 16,
              }}
            >
              <button
                type="button"
                onClick={() => handleGenerateYear(2026)}
                disabled={!selectedBoatId || generating}
                style={buttonStyle}
              >
                {generating ? "Üretiliyor..." : "2026 Haftalarını Oluştur"}
              </button>

              <button
                type="button"
                onClick={() => handleGenerateYear(2027)}
                disabled={!selectedBoatId || generating}
                style={ghostButtonStyle}
              >
                2027 Oluştur
              </button>
            </div>

            {selectedBoat ? (
              <div
                style={{
                  marginBottom: 16,
                  padding: 12,
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  opacity: 0.85,
                }}
              >
                Aktif tekne: <strong>{selectedBoat.name}</strong>
              </div>
            ) : null}

            <form onSubmit={handleCreate}>
              <Field
                label="Hafta Etiketi"
                value={form.weekLabel}
                onChange={(v) => setField("weekLabel", v)}
                placeholder="14.06.2026 - 20.06.2026"
              />

              <Field
                label="Başlangıç Tarihi"
                value={form.startDate}
                onChange={(v) => setField("startDate", v)}
                type="date"
              />

              <Field
                label="Bitiş Tarihi"
                value={form.endDate}
                onChange={(v) => setField("endDate", v)}
                type="date"
              />

              <label style={{ display: "block", marginBottom: 12 }}>
                <div style={labelStyle}>Durum</div>
                <select
                  value={form.status}
                  onChange={(e) => setField("status", e.target.value)}
                  style={inputStyle}
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </label>
                            <Field
                label="Inquiry Count"
                value={form.inquiryCount}
                onChange={(v) => setField("inquiryCount", v)}
                type="number"
              />

              <Field
                label="Override Price"
                value={form.overridePrice}
                onChange={(v) => setField("overridePrice", v)}
                placeholder="3500 EUR"
              />

              <TextField
                label="Notlar"
                value={form.notes}
                onChange={(v) => setField("notes", v)}
              />

              <button
                type="submit"
                disabled={!selectedBoatId || saving}
                style={buttonStyle}
              >
                {saving ? "Ekleniyor..." : "Hafta Oluştur"}
              </button>
            </form>
          </section>

          <section style={panelStyle}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                alignItems: "center",
                marginBottom: 18,
              }}
            >
              <div>
                <h2 style={{ margin: 0 }}>Haftalık Durumlar</h2>
                <div style={{ marginTop: 6, opacity: 0.72, fontSize: 14 }}>
                  {selectedBoat
                    ? `${selectedBoat.name} için kayıtlar`
                    : "Tekne seç"}
                </div>
              </div>
            </div>

            {loadingItems ? (
              <div style={{ opacity: 0.7 }}>Yükleniyor...</div>
            ) : items.length === 0 ? (
              <div style={{ opacity: 0.7 }}>Kayıt yok.</div>
            ) : (
              <div style={{ display: "grid", gap: 14 }}>
                {items.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      border: `1px solid ${statusBorder(item.status)}`,
                      background: "rgba(255,255,255,0.03)",
                      borderRadius: 16,
                      padding: 16,
                    }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1.3fr 1fr 1fr 1fr auto",
                        gap: 12,
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <div style={{ fontSize: 18, fontWeight: 700 }}>
                          {item.weekLabel}
                        </div>
                        <div style={{ marginTop: 6, opacity: 0.72, fontSize: 14 }}>
                          {formatDate(item.startDate)} → {formatDate(item.endDate)}
                        </div>
                      </div>

                      <select
                        value={item.status}
                        onChange={(e) =>
                          updateItem(item.id, { status: e.target.value })
                        }
                        style={{
                          ...inputStyle,
                          borderColor: statusBorder(item.status),
                        }}
                      >
                        {STATUS_OPTIONS.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>

                      <input
                        value={item.overridePrice || ""}
                        onChange={(e) =>
                          updateItem(item.id, { overridePrice: e.target.value })
                        }
                        placeholder="Override Price"
                        style={inputStyle}
                      />

                      <input
                        value={String(item.inquiryCount ?? 0)}
                        onChange={(e) =>
                          updateItem(item.id, {
                            inquiryCount: Number(e.target.value || 0),
                          })
                        }
                        placeholder="Inquiry"
                        type="number"
                        style={inputStyle}
                      />

                      <button
                        type="button"
                        onClick={() => deleteItem(item.id)}
                        style={deleteButtonStyle}
                      >
                        Sil
                      </button>
                    </div>

                    <textarea
                      value={item.notes || ""}
                      onChange={(e) =>
                        updateItem(item.id, { notes: e.target.value })
                      }
                      placeholder="Notlar"
                      rows={3}
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                        minHeight: 72,
                        marginTop: 12,
                      }}
                    />
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

function SummaryCard({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div
      style={{
        border: "1px solid rgba(255,255,255,0.1)",
        background: "rgba(255,255,255,0.04)",
        borderRadius: 18,
        padding: 16,
      }}
    >
      <div style={{ fontSize: 12, opacity: 0.68, letterSpacing: "0.08em" }}>
        {title}
      </div>
      <div style={{ marginTop: 10, fontSize: 28, fontWeight: 700 }}>
        {value}
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <div style={labelStyle}>{label}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        style={inputStyle}
      />
    </label>
  );
}

function TextField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label style={{ display: "block", marginBottom: 12 }}>
      <div style={labelStyle}>{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        style={{
          ...inputStyle,
          resize: "vertical",
          minHeight: 90,
        }}
      />
    </label>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("tr-TR");
}

function statusBorder(status: string) {
  if (status === "BOOKED") return "rgba(255,90,90,0.45)";
  if (status === "OPTION") return "rgba(255,190,90,0.45)";
  if (status === "BLOCKED") return "rgba(160,160,160,0.45)";
  return "rgba(90,220,140,0.45)";
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: 40,
  background: "#07111f",
  color: "white",
};

const panelStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.1)",
  background: "rgba(255,255,255,0.04)",
  borderRadius: 20,
  padding: 20,
};

const eyebrowStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.18em",
  opacity: 0.7,
};

const labelStyle: React.CSSProperties = {
  marginBottom: 6,
  fontSize: 14,
  opacity: 0.82,
};

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
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(120,220,255,0.3)",
  background: "rgba(90,190,255,0.18)",
  color: "white",
  cursor: "pointer",
};

const ghostButtonStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.14)",
  background: "rgba(255,255,255,0.05)",
  color: "white",
  cursor: "pointer",
};

const deleteButtonStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(255,90,90,0.24)",
  background: "rgba(255,80,80,0.12)",
  color: "white",
  cursor: "pointer",
};

const errorBoxStyle: React.CSSProperties = {
  marginBottom: 20,
  padding: 14,
  borderRadius: 12,
  border: "1px solid rgba(255,120,120,0.35)",
  background: "rgba(255,80,80,0.12)",
};

const successBoxStyle: React.CSSProperties = {
  marginBottom: 20,
  padding: 14,
  borderRadius: 12,
  border: "1px solid rgba(120,255,170,0.28)",
  background: "rgba(70,210,140,0.12)",
};