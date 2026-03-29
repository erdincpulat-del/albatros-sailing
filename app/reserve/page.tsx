"use client";

import { useState } from "react";

export default function ReservePage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [note, setNote] = useState("");

  async function submit() {
    const res = await fetch("/api/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        phone,
        program,
        note,
      }),
    });

    const data = await res.json();
    console.log(data);
  }

  return (
    <div style={{ padding: 40 }}>
      <h1>Rezervasyon</h1>

      <input
        placeholder="Ad Soyad"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Telefon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Program"
        value={program}
        onChange={(e) => setProgram(e.target.value)}
      />

      <br />
      <br />

      <textarea
        placeholder="Not"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />

      <br />
      <br />

      <button onClick={submit}>Rezervasyon Yap</button>
    </div>
  );
}