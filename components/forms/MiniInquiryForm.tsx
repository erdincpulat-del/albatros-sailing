"use client";

import { useState } from "react";

export default function MiniInquiryForm() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName.trim() || !phone.trim()) return;

    try {
      setLoading(true);

      await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "CHARTER",
          fullName,
          phone,
          email: "",
          notes: "Homepage Mini Lead",
          charterWeekId: null,
          guestCount: null,
          routePreference: null,
          boatPreference: null,
          skipperRequired: false,
        }),
      });

      setSuccess("Sizi arayacağız ✔");
      setFullName("");
      setPhone("");
    } catch {
      setSuccess("Hata oluştu");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-black text-white rounded-2xl p-6 mt-10">
      <h3 className="text-xl font-semibold">
        Sizin için en uygun haftayı planlayalım
      </h3>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
        <input
          className="px-4 py-3 rounded-xl text-black"
          placeholder="Ad Soyad"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <input
          className="px-4 py-3 rounded-xl text-black"
          placeholder="Telefon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button
          type="submit"
          className="bg-white text-black rounded-xl py-3 font-semibold"
        >
          {loading ? "Gönderiliyor..." : "Planlama Talebi"}
        </button>

        {success && <p className="text-sm mt-2">{success}</p>}
      </form>
    </section>
  );
}