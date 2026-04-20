"use client";

import { useMemo, useState } from "react";

type Props = {
  boatId?: string;
  boatName?: string | null;
  selectedWeekId?: string;
  selectedWeekLabel?: string | null;
  routeLabel?: string | null;
};

function calculateLeadScore(input: {
  guestCount: number;
  hasPhone: boolean;
  hasEmail: boolean;
  hasWeek: boolean;
  hasBoat: boolean;
  hasRoute: boolean;
}) {
  let score = 20;

  if (input.hasPhone) score += 15;
  if (input.hasEmail) score += 10;
  if (input.hasWeek) score += 20;
  if (input.hasBoat) score += 10;
  if (input.hasRoute) score += 10;
  if (input.guestCount >= 4) score += 10;
  if (input.guestCount >= 6) score += 5;

  return Math.min(score, 100);
}

function calculateEstimatedValue(guestCount: number) {
  const normalizedGuests = Number.isFinite(guestCount) && guestCount > 0 ? guestCount : 2;
  return normalizedGuests * 900;
}

function getLeadTone(score: number) {
  if (score >= 75) {
    return {
      label: "Hot Lead",
      className: "bg-rose-50 text-rose-700 border-rose-200",
    };
  }

  if (score >= 50) {
    return {
      label: "Strong Lead",
      className: "bg-amber-50 text-amber-700 border-amber-200",
    };
  }

  return {
    label: "New Lead",
    className: "bg-slate-50 text-slate-700 border-slate-200",
  };
}

function normalizePhoneForWhatsApp(phone: string) {
  return phone.replace(/[^\d]/g, "");
}

export default function InquiryForm({
  boatId,
  boatName,
  selectedWeekId,
  selectedWeekLabel,
  routeLabel,
}: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guestCount, setGuestCount] = useState("2");
  const [routePreference, setRoutePreference] = useState(routeLabel ?? "");
  const [notes, setNotes] = useState("");
  const [skipperRequired, setSkipperRequired] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const guestCountNumber = useMemo(() => {
    const parsed = Number(guestCount);
    return Number.isFinite(parsed) ? parsed : 2;
  }, [guestCount]);

  const estimatedValue = useMemo(
    () => calculateEstimatedValue(guestCountNumber),
    [guestCountNumber]
  );

  const leadScore = useMemo(
    () =>
      calculateLeadScore({
        guestCount: guestCountNumber,
        hasPhone: phone.trim().length > 0,
        hasEmail: email.trim().length > 0,
        hasWeek: Boolean(selectedWeekId),
        hasBoat: Boolean(boatId),
        hasRoute: routePreference.trim().length > 0,
      }),
    [guestCountNumber, phone, email, selectedWeekId, boatId, routePreference]
  );

  const leadTone = useMemo(() => getLeadTone(leadScore), [leadScore]);

  const whatsappUrl = useMemo(() => {
    const normalized = normalizePhoneForWhatsApp(phone);
    if (!normalized) return "";

    const text = [
      `Merhaba ${fullName || ""}`.trim(),
      boatName ? `Tekne: ${boatName}` : "",
      selectedWeekLabel ? `Hafta: ${selectedWeekLabel}` : "",
      routePreference ? `Rota: ${routePreference}` : "",
      guestCount ? `Kişi Sayısı: ${guestCount}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${normalized}?text=${encodeURIComponent(text)}`;
  }, [phone, fullName, boatName, selectedWeekLabel, routePreference, guestCount]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);
      setSuccess("");
      setErrorMessage("");

      if (!fullName.trim()) {
        setErrorMessage("Ad Soyad zorunlu.");
        return;
      }

      if (!email.trim() && !phone.trim()) {
        setErrorMessage("E-posta veya telefon zorunlu.");
        return;
      }

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "CHARTER",
          fullName: fullName || "",
          email: email || "",
          phone: phone || "",
          guestCount: Number(guestCount),
          routePreference: routePreference || null,
          notes: notes || "",
          boatId: boatId || null,
          charterWeekId: selectedWeekId || null,
          skipperRequired,
        }),
      });

      const data = await res.json();

      if (!data.success) {
        setErrorMessage(data.error || "Bir hata oluştu.");
        return;
      }

      setSuccess("Talebiniz başarıyla gönderildi ✔");
      setFullName("");
      setEmail("");
      setPhone("");
      setGuestCount("2");
      setRoutePreference(routeLabel ?? "");
      setNotes("");
      setSkipperRequired(false);
    } catch (error) {
      console.error(error);
      setErrorMessage("Sunucu hatası oluştu.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            CHARTER INQUIRY
          </p>

          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-950">
            Premium charter talebinizi oluşturun
          </h3>

          <p className="mt-4 text-sm leading-7 text-gray-600">
            Seçtiğiniz tekne ve hafta üzerinden talebinizi gönderin. Sistem,
            talebinizi doğrudan CRM akışına işler ve operasyon paneline düşürür.
          </p>

          <div className="mt-6 grid gap-4">
            <div className="rounded-[1.25rem] border border-black/5 bg-[#fafafa] p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                Tekne
              </div>
              <div className="mt-2 text-sm font-medium text-gray-900">
                {boatName || "Henüz seçilmedi"}
              </div>
            </div>

            <div className="rounded-[1.25rem] border border-black/5 bg-[#fafafa] p-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                Seçilen Hafta
              </div>
              <div className="mt-2 text-sm font-medium text-gray-900">
                {selectedWeekLabel || "Henüz seçilmedi"}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.25rem] border border-black/5 bg-[#fafafa] p-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gray-500">
                  Tahmini Değer
                </div>
                <div className="mt-2 text-lg font-semibold text-gray-950">
                  €{estimatedValue.toLocaleString("tr-TR")}
                </div>
              </div>

              <div className={`rounded-[1.25rem] border p-4 ${leadTone.className}`}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em]">
                  Lead Score
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-lg font-semibold">{leadScore}/100</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em]">
                    {leadTone.label}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-[1.25rem] border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-700">
            Bu form gönderildiğinde talep admin paneline düşer, seçilen hafta ile eşleştirilir ve satış takibine uygun hale gelir.
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ad Soyad"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              placeholder="Telefon"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              placeholder="Kişi Sayısı"
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
            />

            <input
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
              placeholder="Rota Tercihi"
              value={routePreference}
              onChange={(e) => setRoutePreference(e.target.value)}
            />
          </div>

          <textarea
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Ek notunuz"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={4}
          />

          <label className="flex items-center gap-3 rounded-xl border border-black/5 bg-[#fafafa] px-4 py-3 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={skipperRequired}
              onChange={(e) => setSkipperRequired(e.target.checked)}
            />
            Skipper / kaptan talep ediyorum
          </label>

          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-black px-6 py-3 text-white disabled:opacity-60"
            >
              {loading ? "Gönderiliyor..." : "Talep Gönder"}
            </button>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-gray-900"
              >
                WhatsApp
              </a>
            ) : null}
          </div>

          {success ? (
            <p className="text-sm text-green-600">{success}</p>
          ) : null}

          {errorMessage ? (
            <p className="text-sm text-rose-600">{errorMessage}</p>
          ) : null}
        </form>
      </div>
    </section>
  );
}