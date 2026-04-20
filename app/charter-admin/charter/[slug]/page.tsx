"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

type CharterBoatPrice = {
  id?: string;
  month: string;
  price: string;
};

type GalleryImage = {
  id: string;
  boatId: string;
  imageUrl: string;
  sortOrder: number;
};

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
  captainFee?: string | null;
  transitlogFee?: string | null;
  cleaningFee?: string | null;
  extrasNote?: string | null;
  gallery?: GalleryImage[];
  prices?: CharterBoatPrice[];
};

type ApiResponse = {
  success: boolean;
  boat?: CharterBoat;
  error?: string;
};

function normalizeFeatureLines(value: string) {
  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function CharterDetailPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [boat, setBoat] = useState<CharterBoat | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [galleryUploading, setGalleryUploading] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  async function loadBoat() {
    try {
      if (!slug) {
        alert("Slug bulunamadı");
        return;
      }

      const res = await fetch(`/api/charter/${slug}`, {
        cache: "no-store",
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || !data.success || !data.boat) {
        throw new Error(data.error || "Tekne bulunamadı.");
      }

      setBoat({
        ...data.boat,
        gallery: data.boat.gallery ?? [],
        prices: data.boat.prices ?? [],
      });
    } catch (error) {
      console.error(error);
      alert("Tekne yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (slug) loadBoat();
  }, [slug]);

  const sortedGallery = useMemo(() => {
    return [...(boat?.gallery || [])].sort((a, b) => a.sortOrder - b.sortOrder);
  }, [boat?.gallery]);

  const featuresPreview = useMemo(() => {
    return normalizeFeatureLines(boat?.features ?? "");
  }, [boat?.features]);

  const sliderImages = useMemo(() => {
    const images: { id: string; imageUrl: string; isCover: boolean }[] = [];

    if (boat?.image) {
      images.push({
        id: "cover-image",
        imageUrl: boat.image,
        isCover: true,
      });
    }

    for (const item of sortedGallery) {
      if (!images.some((img) => img.imageUrl === item.imageUrl)) {
        images.push({
          id: item.id,
          imageUrl: item.imageUrl,
          isCover: boat?.image === item.imageUrl,
        });
      }
    }

    return images;
  }, [boat?.image, sortedGallery]);

  const activeSliderImage =
    sliderImages[activeImageIndex]?.imageUrl || boat?.image || "";

  useEffect(() => {
    if (activeImageIndex > sliderImages.length - 1) {
      setActiveImageIndex(0);
    }
  }, [sliderImages, activeImageIndex]);

  async function handleImageUpload(file: File) {
    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/charter/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Ana görsel yüklenemedi.");
      }

      if (!boat) return;

      setBoat({
        ...boat,
        image: data.url,
      });

      setActiveImageIndex(0);
    } catch (error) {
      console.error(error);
      alert("Ana görsel yüklenemedi");
    } finally {
      setUploading(false);
    }
  }

  async function handleGalleryUpload(file: File) {
    if (!boat) return;

    try {
      setGalleryUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const uploadRes = await fetch("/api/charter/upload", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok || !uploadData.success) {
        throw new Error(uploadData.error || "Galeri upload başarısız");
      }

      const createRes = await fetch("/api/charter/gallery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          boatId: boat.id,
          imageUrl: uploadData.url,
        }),
      });

      const createData = await createRes.json();

      if (!createRes.ok || !createData.success) {
        throw new Error(createData.error || "Galeri kaydı oluşturulamadı");
      }

      await loadBoat();
    } catch (error) {
      console.error(error);
      alert("Galeri görseli eklenemedi");
    } finally {
      setGalleryUploading(false);
    }
  }

  async function handleDeleteGalleryImage(id: string) {
    try {
      const res = await fetch(`/api/charter/gallery/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Silme başarısız");
      }

      await loadBoat();
    } catch (error) {
      console.error(error);
      alert("Galeri görseli silinemedi");
    }
  }

  async function handleSetCoverImage(imageUrl: string) {
    if (!boat || !slug) return;

    try {
      setSaving(true);

      const res = await fetch(`/api/charter/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...boat,
          image: imageUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Kapak görsel güncellenemedi");
      }

      await loadBoat();
      setActiveImageIndex(0);
      alert("Kapak görsel güncellendi");
    } catch (error) {
      console.error(error);
      alert("Kapak görsel güncellenemedi");
    } finally {
      setSaving(false);
    }
  }

  function ensurePriceRows() {
    if (!boat) return [];
    return boat.prices ?? [];
  }

  function handlePriceChange(index: number, field: "month" | "price", value: string) {
    if (!boat) return;

    const nextPrices = [...ensurePriceRows()];
    nextPrices[index] = {
      ...nextPrices[index],
      [field]: value,
    };

    setBoat({
      ...boat,
      prices: nextPrices,
    });
  }

  function handleAddPriceRow() {
    if (!boat) return;

    const nextPrices = [...ensurePriceRows(), { month: "", price: "" }];

    setBoat({
      ...boat,
      prices: nextPrices,
    });
  }

  function handleRemovePriceRow(index: number) {
    if (!boat) return;

    const nextPrices = ensurePriceRows().filter((_, i) => i !== index);

    setBoat({
      ...boat,
      prices: nextPrices,
    });
  }

  async function handleSave() {
    if (!boat || !slug) return;

    try {
      setSaving(true);

      const res = await fetch(`/api/charter/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(boat),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Kaydetme başarısız");
      }

      alert("Kaydedildi");
      await loadBoat();
    } catch (error) {
      console.error(error);
      alert("Güncelleme başarısız");
    } finally {
      setSaving(false);
    }
  }

  function handlePrevImage() {
    setActiveImageIndex((prev) =>
      prev === 0 ? Math.max(sliderImages.length - 1, 0) : prev - 1
    );
  }

  function handleNextImage() {
    setActiveImageIndex((prev) =>
      prev >= sliderImages.length - 1 ? 0 : prev + 1
    );
  }

  if (loading) {
    return <main style={pageStyle}>Yükleniyor...</main>;
  }

  if (!boat) {
    return <main style={pageStyle}>Tekne bulunamadı.</main>;
  }

  return (
    <main style={pageStyle}>
      <div style={shellStyle}>
        <div style={{ marginBottom: 24 }}>
          <div style={eyebrowStyle}>ALBATROS SAILING · CHARTER ADMIN</div>
          <h1 style={heroTitleStyle}>Tekne Yönetim Detayı</h1>
          <p style={heroSubStyle}>
            Tekne bilgileri, galeri, fiyatlar ve kapak görseli tek ekrandan yönetilir.
          </p>
        </div>

        <div style={topStatsGridStyle}>
          <StatCard label="Slug" value={boat.slug || "-"} accent="rgba(103,211,255,0.16)" />
          <StatCard label="Lokasyon" value={boat.location || "-"} accent="rgba(255,255,255,0.08)" />
          <StatCard label="Kabin" value={String(boat.cabins || 0)} accent="rgba(255,255,255,0.08)" />
          <StatCard label="Galeri" value={String(sliderImages.length)} accent="rgba(255,255,255,0.08)" />
        </div>

        <div style={layoutGridStyle}>
          <section style={leftColumnStyle}>
            <div style={panelStyle}>
              <div style={panelHeaderStyle}>
                <div>
                  <div style={sectionEyebrowStyle}>Cover Preview</div>
                  <h2 style={sectionTitleStyle}>Premium Görsel Slider</h2>
                </div>
              </div>

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: 620,
                  overflow: "hidden",
                  borderRadius: 24,
                  border: "1px solid rgba(255,255,255,0.08)",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.02))",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
                }}
              >
                {activeSliderImage ? (
                  <>
                    <img
                      src={activeSliderImage}
                      alt={boat.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(6,10,18,0.05) 0%, rgba(6,10,18,0.12) 55%, rgba(6,10,18,0.32) 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    <div
                      style={{
                        position: "absolute",
                        left: 22,
                        right: 22,
                        bottom: 20,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "end",
                        gap: 14,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 11,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            color: "rgba(255,255,255,0.68)",
                            marginBottom: 8,
                          }}
                        >
                          Live Preview
                        </div>

                        <div
                          style={{
                            fontSize: 30,
                            fontWeight: 900,
                            lineHeight: 1,
                            color: "#ffffff",
                            letterSpacing: "-0.04em",
                          }}
                        >
                          {boat.name}
                        </div>

                        <div
                          style={{
                            marginTop: 8,
                            fontSize: 15,
                            color: "rgba(255,255,255,0.78)",
                          }}
                        >
                          {boat.model} • {boat.year} • {boat.location}
                        </div>
                      </div>

                      <div
                        style={{
                          padding: "10px 14px",
                          borderRadius: 999,
                          border: "1px solid rgba(103,211,255,0.22)",
                          background: "rgba(103,211,255,0.10)",
                          color: "#aee8ff",
                          fontSize: 12,
                          fontWeight: 800,
                          letterSpacing: "0.08em",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {sliderImages[activeImageIndex]?.isCover ? "COVER IMAGE" : "GALLERY IMAGE"}
                      </div>
                    </div>

                    {sliderImages.length > 1 ? (
                      <>
                        <button
                          type="button"
                          onClick={handlePrevImage}
                          style={navButtonLeftStyle}
                        >
                          ‹
                        </button>
                        <button
                          type="button"
                          onClick={handleNextImage}
                          style={navButtonRightStyle}
                        >
                          ›
                        </button>
                      </>
                    ) : null}
                  </>
                ) : (
                  <div style={emptyPreviewStyle}>Kapak görsel henüz eklenmedi</div>
                )}
              </div>

              <div style={uploadInfoStyle}>
                {uploading
                  ? "Ana görsel yükleniyor..."
                  : "Seçili görsel burada premium slider önizleme olarak gösterilir."}
              </div>

              {sliderImages.length > 1 ? (
                <div style={thumbRailStyle}>
                  {sliderImages.map((item, index) => (
                    <button
                      key={`${item.id}-${index}`}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      style={{
                        ...thumbButtonStyle,
                        border:
                          index === activeImageIndex
                            ? "1px solid rgba(103,211,255,0.40)"
                            : "1px solid rgba(255,255,255,0.08)",
                        boxShadow:
                          index === activeImageIndex
                            ? "0 10px 24px rgba(66,189,248,0.18)"
                            : "none",
                      }}
                    >
                      <img
                        src={item.imageUrl}
                        alt={`${boat.name} ${index + 1}`}
                        style={thumbImageStyle}
                      />
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            <div style={panelStyle}>
              <div style={panelHeaderStyle}>
                <div>
                  <div style={sectionEyebrowStyle}>Boat Identity</div>
                  <h2 style={sectionTitleStyle}>Tekne Bilgileri</h2>
                </div>
              </div>

              <Field
                label="Tekne Adı"
                value={boat.name}
                onChange={(v) => setBoat({ ...boat, name: v })}
              />

              <div style={twoColStyle}>
                <Field
                  label="Model"
                  value={boat.model}
                  onChange={(v) => setBoat({ ...boat, model: v })}
                />
                <Field
                  label="Yıl"
                  value={String(boat.year ?? "")}
                  onChange={(v) => setBoat({ ...boat, year: Number(v) || 0 })}
                />
              </div>

              <div style={twoColStyle}>
                <Field
                  label="Kabin"
                  value={String(boat.cabins ?? "")}
                  onChange={(v) => setBoat({ ...boat, cabins: Number(v) || 0 })}
                />
                <Field
                  label="Guests Label"
                  value={boat.guestsLabel}
                  onChange={(v) => setBoat({ ...boat, guestsLabel: v })}
                />
              </div>

              <Field
                label="Lokasyon"
                value={boat.location}
                onChange={(v) => setBoat({ ...boat, location: v })}
              />

              <Field
                label="Ana Görsel URL"
                value={boat.image || ""}
                onChange={(v) => setBoat({ ...boat, image: v })}
              />

              <label style={{ display: "block", marginBottom: 12 }}>
                <div style={labelStyle}>Ana Görsel Yükle</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleImageUpload(file);
                  }}
                  style={inputStyle}
                />
              </label>

              <TextField
                label="Kısa Not"
                value={boat.shortNote}
                onChange={(v) => setBoat({ ...boat, shortNote: v })}
              />

              <TextField
                label="Açıklama"
                value={boat.description}
                onChange={(v) => setBoat({ ...boat, description: v })}
              />

              <TextField
                label="Özellikler"
                value={boat.features}
                onChange={(v) => setBoat({ ...boat, features: v })}
                placeholder="Her özelliği yeni satıra yaz"
              />

              {featuresPreview.length > 0 ? (
                <div style={featurePreviewWrapStyle}>
                  <div style={miniLabelStyle}>Özellik Önizleme</div>
                  <div style={featureListStyle}>
                    {featuresPreview.map((feature) => (
                      <div key={feature} style={featureChipStyle}>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <div style={panelStyle}>
              <div style={panelHeaderStyle}>
                <div>
                  <div style={sectionEyebrowStyle}>Extras</div>
                  <h2 style={sectionTitleStyle}>İlaveler / Ek Ücretler</h2>
                </div>
              </div>

              <div style={twoColStyle}>
                <Field
                  label="Kaptan Bedeli"
                  value={boat.captainFee ?? ""}
                  onChange={(v) => setBoat({ ...boat, captainFee: v })}
                />
                <Field
                  label="Transitlog"
                  value={boat.transitlogFee ?? ""}
                  onChange={(v) => setBoat({ ...boat, transitlogFee: v })}
                />
              </div>

              <Field
                label="Son Temizlik"
                value={boat.cleaningFee ?? ""}
                onChange={(v) => setBoat({ ...boat, cleaningFee: v })}
              />

              <TextField
                label="İlaveler Notu"
                value={boat.extrasNote ?? ""}
                onChange={(v) => setBoat({ ...boat, extrasNote: v })}
              />
            </div>
          </section>

          <aside style={rightColumnStyle}>
            <div style={panelStyle}>
              <div style={panelHeaderStyle}>
                <div>
                  <div style={sectionEyebrowStyle}>Season Pricing</div>
                  <h2 style={sectionTitleStyle}>Sezon Fiyat Tablosu</h2>
                </div>
              </div>

              <div style={priceListWrapStyle}>
                {(boat.prices ?? []).map((row, index) => (
                  <div
                    key={row.id ?? `price-${index}`}
                    style={priceRowStyle}
                  >
                    <label style={{ display: "block" }}>
                      <div style={labelStyle}>Ay / Dönem</div>
                      <input
                        value={row.month}
                        onChange={(e) =>
                          handlePriceChange(index, "month", e.target.value)
                        }
                        placeholder="Örn: Temmuz 2026"
                        style={inputStyle}
                      />
                    </label>

                    <label style={{ display: "block" }}>
                      <div style={labelStyle}>Fiyat</div>
                      <input
                        value={row.price}
                        onChange={(e) =>
                          handlePriceChange(index, "price", e.target.value)
                        }
                        placeholder="Örn: 3.400 €"
                        style={inputStyle}
                      />
                    </label>

                    <button
                      type="button"
                      onClick={() => handleRemovePriceRow(index)}
                      style={deleteButtonStyle}
                    >
                      Sil
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={handleAddPriceRow}
                  style={smallButtonStyle}
                >
                  + Fiyat Satırı Ekle
                </button>
              </div>
            </div>

            <div style={panelStyle}>
              <div style={panelHeaderStyle}>
                <div>
                  <div style={sectionEyebrowStyle}>Gallery Manager</div>
                  <h2 style={sectionTitleStyle}>Galeri Yönetimi</h2>
                </div>
              </div>

              <label style={{ display: "block", marginBottom: 16 }}>
                <div style={labelStyle}>Galeri Görseli Ekle</div>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleGalleryUpload(file);
                  }}
                  style={inputStyle}
                />
                <div style={uploadInfoStyle}>
                  {galleryUploading ? "Galeri görseli yükleniyor..." : "Eklenen görseller slider içine otomatik düşer."}
                </div>
              </label>

              {sortedGallery.length ? (
                <div style={galleryGridStyle}>
                  {sortedGallery.map((item, index) => (
                    <div key={item.id} style={galleryCardStyle}>
                      <img
                        src={item.imageUrl}
                        alt={`Gallery ${index + 1}`}
                        style={galleryImageStyle}
                      />

                      <div style={galleryMetaStyle}>
                        <div style={miniLabelStyle}>Sıra: {item.sortOrder}</div>

                        {boat.image === item.imageUrl ? (
                          <div style={coverActiveTextStyle}>
                            Bu görsel şu anda kapak görsel
                          </div>
                        ) : null}

                        <div style={galleryButtonRowStyle}>
                          <button
                            type="button"
                            onClick={() => handleSetCoverImage(item.imageUrl)}
                            style={
                              boat.image === item.imageUrl
                                ? activeCoverButtonStyle
                                : coverButtonStyle
                            }
                          >
                            {boat.image === item.imageUrl ? "Kapak Görsel" : "Kapak Yap"}
                          </button>

                          <button
                            type="button"
                            onClick={() => handleDeleteGalleryImage(item.id)}
                            style={deleteButtonStyle}
                          >
                            Sil
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div style={emptyBoxStyle}>Henüz galeri görseli yok.</div>
              )}
            </div>

            <div style={stickyActionWrapStyle}>
              <button
                onClick={handleSave}
                disabled={saving || uploading || galleryUploading}
                style={buttonStyle}
              >
                {saving ? "Kaydediliyor..." : "Tüm Değişiklikleri Kaydet"}
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function StatCard({
  label,
  value,
  accent,
}: {
  label: string;
  value: string;
  accent: string;
}) {
  return (
    <div
      style={{
        borderRadius: 18,
        padding: "16px 18px",
        border: "1px solid rgba(255,255,255,0.08)",
        background: `linear-gradient(180deg, ${accent}, rgba(255,255,255,0.03))`,
        boxShadow: "0 18px 40px rgba(0,0,0,0.16)",
      }}
    >
      <div style={miniLabelStyle}>{label}</div>
      <div
        style={{
          marginTop: 8,
          fontSize: 18,
          fontWeight: 800,
          color: "#f8fafc",
          wordBreak: "break-word",
        }}
      >
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
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label style={{ display: "block", marginBottom: 14 }}>
      <div style={labelStyle}>{label}</div>
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
    <label style={{ display: "block", marginBottom: 14 }}>
      <div style={labelStyle}>{label}</div>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        style={{
          ...inputStyle,
          resize: "vertical",
          minHeight: 120,
        }}
      />
    </label>
  );
}

const pageStyle: React.CSSProperties = {
  minHeight: "100vh",
  padding: 32,
  background:
    "radial-gradient(circle at top left, rgba(103,211,255,0.08), transparent 30%), linear-gradient(180deg, #07111f 0%, #0a1526 100%)",
  color: "white",
};

const shellStyle: React.CSSProperties = {
  maxWidth: 1380,
  margin: "0 auto",
};

const eyebrowStyle: React.CSSProperties = {
  fontSize: 12,
  letterSpacing: "0.2em",
  opacity: 0.68,
};

const heroTitleStyle: React.CSSProperties = {
  fontSize: 42,
  margin: "10px 0 10px",
  lineHeight: 1.02,
  letterSpacing: "-0.04em",
};

const heroSubStyle: React.CSSProperties = {
  margin: 0,
  opacity: 0.76,
  fontSize: 16,
  lineHeight: 1.8,
  maxWidth: 760,
};

const topStatsGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
  gap: 14,
  marginTop: 26,
  marginBottom: 24,
};

const layoutGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.05fr) minmax(360px, 0.95fr)",
  gap: 24,
  alignItems: "start",
};

const leftColumnStyle: React.CSSProperties = {
  display: "grid",
  gap: 24,
};

const rightColumnStyle: React.CSSProperties = {
  display: "grid",
  gap: 24,
};

const panelStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.03))",
  borderRadius: 24,
  padding: 22,
  boxShadow: "0 22px 50px rgba(0,0,0,0.18)",
  backdropFilter: "blur(12px)",
};

const panelHeaderStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "start",
  gap: 12,
  marginBottom: 18,
};

const sectionEyebrowStyle: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "rgba(226,232,240,0.54)",
};

const sectionTitleStyle: React.CSSProperties = {
  margin: "6px 0 0",
  fontSize: 24,
  fontWeight: 800,
  letterSpacing: "-0.02em",
};

const labelStyle: React.CSSProperties = {
  marginBottom: 7,
  fontSize: 13,
  opacity: 0.84,
};

const miniLabelStyle: React.CSSProperties = {
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: "rgba(226,232,240,0.56)",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 14px",
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  outline: "none",
  boxSizing: "border-box",
};

const twoColStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 14,
};

const emptyPreviewStyle: React.CSSProperties = {
  width: "100%",
  height: "100%",
  display: "grid",
  placeItems: "center",
  color: "rgba(226,232,240,0.56)",
};

const uploadInfoStyle: React.CSSProperties = {
  marginTop: 10,
  fontSize: 13,
  opacity: 0.66,
};

const thumbRailStyle: React.CSSProperties = {
  marginTop: 14,
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))",
  gap: 10,
};

const thumbButtonStyle: React.CSSProperties = {
  overflow: "hidden",
  borderRadius: 14,
  background: "rgba(255,255,255,0.03)",
  padding: 0,
  cursor: "pointer",
};

const thumbImageStyle: React.CSSProperties = {
  width: "100%",
  height: 84,
  objectFit: "cover",
  display: "block",
};

const navButtonBase: React.CSSProperties = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 46,
  height: 46,
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(9,14,24,0.48)",
  color: "white",
  fontSize: 28,
  lineHeight: 1,
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  backdropFilter: "blur(6px)",
};

const navButtonLeftStyle: React.CSSProperties = {
  ...navButtonBase,
  left: 16,
};

const navButtonRightStyle: React.CSSProperties = {
  ...navButtonBase,
  right: 16,
};

const featurePreviewWrapStyle: React.CSSProperties = {
  marginTop: 6,
  padding: 14,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
};

const featureListStyle: React.CSSProperties = {
  marginTop: 10,
  display: "flex",
  flexWrap: "wrap",
  gap: 8,
};

const featureChipStyle: React.CSSProperties = {
  padding: "8px 10px",
  borderRadius: 999,
  border: "1px solid rgba(255,255,255,0.10)",
  background: "rgba(255,255,255,0.05)",
  fontSize: 13,
  color: "rgba(248,250,252,0.92)",
};

const priceListWrapStyle: React.CSSProperties = {
  display: "grid",
  gap: 12,
};

const priceRowStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr auto",
  gap: 10,
  alignItems: "end",
  padding: 12,
  borderRadius: 16,
  border: "1px solid rgba(255,255,255,0.08)",
  background: "rgba(255,255,255,0.03)",
};

const galleryGridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: 14,
};

const galleryCardStyle: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 16,
  overflow: "hidden",
  background: "rgba(255,255,255,0.04)",
};

const galleryImageStyle: React.CSSProperties = {
  width: "100%",
  height: 170,
  objectFit: "cover",
  display: "block",
};

const galleryMetaStyle: React.CSSProperties = {
  padding: 12,
};

const galleryButtonRowStyle: React.CSSProperties = {
  display: "flex",
  gap: 8,
  flexWrap: "wrap",
  marginTop: 10,
};

const coverActiveTextStyle: React.CSSProperties = {
  fontSize: 12,
  color: "#86efac",
  marginTop: 8,
};

const emptyBoxStyle: React.CSSProperties = {
  borderRadius: 16,
  border: "1px dashed rgba(255,255,255,0.14)",
  padding: "18px 16px",
  color: "rgba(226,232,240,0.6)",
};

const stickyActionWrapStyle: React.CSSProperties = {
  position: "sticky",
  top: 24,
};

const buttonStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 14,
  border: "1px solid rgba(120,220,255,0.30)",
  background: "linear-gradient(180deg, rgba(103,211,255,0.22), rgba(66,189,248,0.18))",
  color: "white",
  cursor: "pointer",
  fontSize: 15,
  fontWeight: 800,
  boxShadow: "0 16px 34px rgba(66,189,248,0.16)",
};

const smallButtonStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(255,255,255,0.06)",
  color: "white",
  cursor: "pointer",
  width: "fit-content",
  fontWeight: 700,
};

const deleteButtonStyle: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 12,
  border: "1px solid rgba(255,90,90,0.24)",
  background: "rgba(255,80,80,0.12)",
  color: "white",
  cursor: "pointer",
};

const coverButtonStyle: React.CSSProperties = {
  padding: "9px 11px",
  borderRadius: 12,
  border: "1px solid rgba(120,220,255,0.28)",
  background: "rgba(90,190,255,0.16)",
  color: "white",
  cursor: "pointer",
  fontWeight: 700,
};

const activeCoverButtonStyle: React.CSSProperties = {
  padding: "9px 11px",
  borderRadius: 12,
  border: "1px solid rgba(120,255,170,0.28)",
  background: "rgba(70,210,140,0.16)",
  color: "white",
  cursor: "default",
  fontWeight: 700,
};