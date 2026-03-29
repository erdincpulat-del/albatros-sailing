"use client";

import { useState } from "react";

export default function CharterAdminPage() {
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [cabins, setCabins] = useState("");
  const [guests, setGuests] = useState("");
  const [location, setLocation] = useState("");
  const [shortNote, setShortNote] = useState("");
  const [description, setDescription] = useState("");
  const [features, setFeatures] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      // FOTO ZORUNLU
      if (!selectedFile) {
        alert("Lütfen tekne fotoğrafı seçin");
        setLoading(false);
        return;
      }

      // 1️⃣ FOTO YÜKLE
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("folder", "charter"); // 🔥 KRİTİK

      const uploadRes = await fetch("/api/upload_photo", {
        method: "POST",
        body: formData,
      });

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok || !uploadData.success) {
        alert(uploadData.error || "Foto yüklenemedi");
        setLoading(false);
        return;
      }

      const imageUrl = uploadData.url;

      // 2️⃣ TEKNE KAYDET
      const res = await fetch("/api/charter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          model,
          year: Number(year),
          cabins: Number(cabins),
          guestsLabel: guests,
          location,
          shortNote,
          description,
          features, // textarea string olarak gider
          image: imageUrl, // 🔥 upload sonucu
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        alert(data.error || "Tekne oluşturulamadı");
        setLoading(false);
        return;
      }

      alert("Tekne başarıyla eklendi");

      // RESET
      setName("");
      setModel("");
      setYear("");
      setCabins("");
      setGuests("");
      setLocation("");
      setShortNote("");
      setDescription("");
      setFeatures("");
      setSelectedFile(null);
    } catch (err) {
      console.error(err);
      alert("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={container}>
      <h1 style={title}>Charter Tekne Ekle</h1>

      <input placeholder="Tekne adı" value={name} onChange={(e) => setName(e.target.value)} style={input} />
      <input placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} style={input} />
      <input placeholder="Yıl" value={year} onChange={(e) => setYear(e.target.value)} style={input} />
      <input placeholder="Kabin sayısı" value={cabins} onChange={(e) => setCabins(e.target.value)} style={input} />
      <input placeholder="Kapasite (örn: 8 Kişi)" value={guests} onChange={(e) => setGuests(e.target.value)} style={input} />
      <input placeholder="Lokasyon" value={location} onChange={(e) => setLocation(e.target.value)} style={input} />

      <input placeholder="Kısa açıklama" value={shortNote} onChange={(e) => setShortNote(e.target.value)} style={input} />

      <textarea
        placeholder="Detaylı açıklama"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={textarea}
      />

      <textarea
        placeholder="Özellikler (her satır bir özellik)"
        value={features}
        onChange={(e) => setFeatures(e.target.value)}
        style={textarea}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
          }
        }}
        style={{ marginTop: 10 }}
      />

      <button onClick={handleSubmit} style={button} disabled={loading}>
        {loading ? "Yükleniyor..." : "Tekne Ekle"}
      </button>
    </main>
  );
}

/* STYLE */

const container: React.CSSProperties = {
  maxWidth: 600,
  margin: "0 auto",
  padding: 40,
  display: "flex",
  flexDirection: "column",
  gap: 12,
};

const title: React.CSSProperties = {
  fontSize: 28,
  fontWeight: 900,
};

const input: React.CSSProperties = {
  padding: 10,
  borderRadius: 8,
  border: "1px solid #ccc",
};

const textarea: React.CSSProperties = {
  padding: 10,
  borderRadius: 8,
  border: "1px solid #ccc",
  minHeight: 80,
};

const button: React.CSSProperties = {
  marginTop: 10,
  padding: 12,
  borderRadius: 10,
  background: "#0ea5e9",
  color: "#fff",
  fontWeight: 800,
  border: "none",
  cursor: "pointer",
};