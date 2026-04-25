"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

const WHATSAPP_NUMBER = "905324873813";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

type CharterWeek = {
  id: string;
  weekLabel: string;
  startDate: string;
  endDate: string;
  routeLabel: string | null;
  notes: string | null;
  status: string;
  boat?: {
    id: string;
    name: string;
    model: string;
    location: string;
  } | null;
};

function formatDate(value?: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(d);
}

export default function CharterReservePage() {
  const { locale } = useLanguage();
  useMemo(() => getMessages(locale), [locale]);
  const searchParams = useSearchParams();

  const [weeksLoading, setWeeksLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charterWeeks, setCharterWeeks] = useState<CharterWeek[]>([]);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [charterWeekId, setCharterWeekId] = useState("");
  const [charterDurationWeeks, setCharterDurationWeeks] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [routePreference, setRoutePreference] = useState("");
  const [boatPreference, setBoatPreference] = useState("");
  const [skipperRequired, setSkipperRequired] = useState(false);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    async function fetchWeeks() {
      try {
        setWeeksLoading(true);

        const res = await fetch("/api/charter-availability", {
          cache: "no-store",
        });
        const data = await res.json();

        const weeks = Array.isArray(data?.weeks) ? data.weeks : [];
        setCharterWeeks(
          weeks.filter(
            (item: CharterWeek) =>
              item.status === "AVAILABLE" || item.status === "OPTION"
          )
        );
      } catch (error) {
        console.error("Charter weeks fetch error:", error);
      } finally {
        setWeeksLoading(false);
      }
    }

    fetchWeeks();
  }, []);

  useEffect(() => {
    const weekFromUrl = searchParams.get("week");
    const boatFromUrl = searchParams.get("boat");

    if (boatFromUrl) {
      setBoatPreference((prev) => prev || boatFromUrl);
    }

    if (!weekFromUrl || charterWeeks.length === 0) return;

    const matchedWeek = charterWeeks.find((item) => item.id === weekFromUrl);
    if (!matchedWeek) return;

    setCharterWeekId(matchedWeek.id);

    if (matchedWeek.routeLabel) {
      setRoutePreference((prev) => prev || matchedWeek.routeLabel || "");
    }

    if (matchedWeek.boat?.name) {
      setBoatPreference((prev) => prev || matchedWeek.boat?.name || "");
    }
  }, [searchParams, charterWeeks]);

  const selectedWeek = useMemo(
    () => charterWeeks.find((item) => item.id === charterWeekId) || null,
    [charterWeeks, charterWeekId]
  );

  const ui = {
    badge: locale === "tr" ? "Charter Request" : "Charter Request",
    title:
      locale === "tr"
        ? "Charter talebinizi doğru hafta ve tekne yapısıyla oluşturun."
        : "Create your charter request with the right week and boat structure.",
    description:
      locale === "tr"
        ? "Charter talepleri tekne, sezon, uygun hafta ve haftalık periyot mantığıyla değerlendirilir. Uygun haftayı seçin, detaylarınızı bırakın, size hızlı dönüş sağlayalım."
        : "Charter requests are evaluated based on boat, season, available week, and weekly period logic. Select the suitable week, leave your details, and let us get back to you quickly.",

    formTitle: locale === "tr" ? "Charter Talep Formu" : "Charter Inquiry Form",
    formDesc:
      locale === "tr"
        ? "Form gönderildiğinde charter talebiniz sisteme kaydedilir ve ekibimiz sizinle iletişime geçer."
        : "When the form is submitted, your charter inquiry is stored in the system and our team will contact you.",

    fullName: locale === "tr" ? "Ad Soyad" : "Full Name",
    phone: locale === "tr" ? "Telefon / WhatsApp" : "Phone / WhatsApp",
    email: locale === "tr" ? "E-posta" : "Email",
    charterWeekId: locale === "tr" ? "Uygun Hafta Seçimi" : "Select Available Week",
    charterDurationWeeks: locale === "tr" ? "Kaç Hafta" : "How Many Weeks",
    guestCount: locale === "tr" ? "Kişi Sayısı" : "Guest Count",
    routePreference: locale === "tr" ? "Rota Tercihi" : "Route Preference",
    boatPreference: locale === "tr" ? "Tekne Tercihi" : "Boat Preference",
    skipperRequired: locale === "tr" ? "Skipper Gerekli mi?" : "Skipper Required?",
    notes: locale === "tr" ? "Notunuz" : "Your Note",
    notesPlaceholder:
      locale === "tr"
        ? "Özel isteklerinizi, kabin yapısını veya planınızı yazabilirsiniz."
        : "You can write your special requests, cabin preference, or plan.",

    charterWeekLoading:
      locale === "tr" ? "Haftalar yükleniyor..." : "Weeks loading...",
    charterWeekEmpty:
      locale === "tr"
        ? "Şu anda uygun charter haftası bulunmuyor."
        : "There is currently no available charter week.",

    submit:
      locale === "tr" ? "Talebi Sisteme Kaydet" : "Save Inquiry to System",
    submitting: locale === "tr" ? "Kaydediliyor..." : "Saving...",

    success:
      locale === "tr"
        ? "Charter talebiniz başarıyla kaydedildi."
        : "Your charter inquiry has been saved successfully.",
    error:
      locale === "tr"
        ? "İşlem sırasında bir hata oluştu."
        : "An error occurred during the request.",
    validation:
      locale === "tr"
        ? "Lütfen ad soyad ve uygun charter haftası seçin."
        : "Please fill in full name and select an available charter week.",

    altTitle: locale === "tr" ? "Hızlı İletişim" : "Quick Contact",
    altDesc:
      locale === "tr"
        ? "Dilerseniz charter seçenekleri hakkında hızlı bilgi almak için doğrudan WhatsApp üzerinden de yazabilirsiniz."
        : "If you prefer, you can also message directly on WhatsApp for quick information about charter options.",
    altButton: locale === "tr" ? "WhatsApp ile Sor" : "Ask on WhatsApp",

    whyTitle:
      locale === "tr"
        ? "Bu form neden önemli?"
        : "Why is this form important?",
    whyItems:
      locale === "tr"
        ? [
            "Uygun hafta ve tekne hızlı belirlenir",
            "Müsaitlik ve fiyat süreci hızlanır",
            "Size özel charter dönüşü yapılır",
          ]
        : [
            "The right week and boat are identified quickly",
            "Availability and pricing move faster",
            "You receive a tailored charter response",
          ],
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName.trim() || !charterWeekId.trim()) {
      alert(ui.validation);
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        type: "CHARTER",
        fullName,
        phone,
        email,
        notes,
        charterWeekId,
        charterStartDate: selectedWeek?.startDate || null,
        charterEndDate: selectedWeek?.endDate || null,
        charterDurationWeeks: charterDurationWeeks
          ? Number(charterDurationWeeks)
          : null,
        guestCount: guestCount ? Number(guestCount) : null,
        routePreference,
        boatPreference: boatPreference || selectedWeek?.boat?.name || null,
        skipperRequired,
      };

      const res = await fetch("/api/inquiries/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data?.success) {
        alert(data?.error || ui.error);
        return;
      }

      alert(ui.success);

      setFullName("");
      setPhone("");
      setEmail("");
      setCharterWeekId("");
      setCharterDurationWeeks("");
      setGuestCount("");
      setRoutePreference("");
      setBoatPreference("");
      setSkipperRequired(false);
      setNotes("");
    } catch (error) {
      console.error(error);
      alert(ui.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const quickMessage =
    locale === "tr"
      ? "Merhaba, Albatros Sailing charter tekneleri, uygun haftalar ve fiyatlar hakkında bilgi almak istiyorum."
      : "Hello, I would like to get information about Albatros Sailing charter boats, available weeks, and pricing.";

  return (
    <main className="bg-[#0b1d2a] text-white">
      <section className="border-b border-white/10 bg-transparent">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {ui.badge}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              {ui.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              {ui.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              {ui.formTitle}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {locale === "tr" ? "Bilgilerinizi bırakın" : "Leave your details"}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
              {ui.formDesc}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  {ui.fullName}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                  placeholder={
                    locale === "tr" ? "Adınız soyadınız" : "Your full name"
                  }
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    {ui.phone}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                    placeholder={locale === "tr" ? "05xx xxx xx xx" : "+90 ..."}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    {ui.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  {ui.charterWeekId}
                </label>
                <select
                  value={charterWeekId}
                  onChange={(e) => {
                    setCharterWeekId(e.target.value);
                    const week = charterWeeks.find((w) => w.id === e.target.value);

                    if (week?.routeLabel) {
                      setRoutePreference(week.routeLabel);
                    }

                    if (week?.boat?.name) {
                      setBoatPreference(week.boat.name);
                    }
                  }}
                  className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition focus:border-[#67d3ff]"
                  disabled={weeksLoading}
                >
                  <option value="">
                    {weeksLoading
                      ? ui.charterWeekLoading
                      : locale === "tr"
                        ? "Uygun hafta seçin"
                        : "Select available week"}
                  </option>
                  {charterWeeks.map((week) => (
                    <option key={week.id} value={week.id}>
                      {week.weekLabel} · {formatDate(week.startDate)} -{" "}
                      {formatDate(week.endDate)}
                      {week.boat ? ` · ${week.boat.name}` : ""}
                    </option>
                  ))}
                </select>

                {!weeksLoading && charterWeeks.length === 0 ? (
                  <p className="mt-2 text-sm text-amber-300">
                    {ui.charterWeekEmpty}
                  </p>
                ) : null}
              </div>

              {selectedWeek ? (
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <InfoLine
                      label={locale === "tr" ? "Hafta" : "Week"}
                      value={selectedWeek.weekLabel}
                    />
                    <InfoLine
                      label={locale === "tr" ? "Tarih" : "Dates"}
                      value={`${formatDate(selectedWeek.startDate)} - ${formatDate(
                        selectedWeek.endDate
                      )}`}
                    />
                    <InfoLine
                      label={locale === "tr" ? "Tekne" : "Boat"}
                      value={
                        selectedWeek.boat
                          ? `${selectedWeek.boat.name} - ${selectedWeek.boat.model}`
                          : "-"
                      }
                    />
                    <InfoLine
                      label={locale === "tr" ? "Konum" : "Location"}
                      value={selectedWeek.boat?.location || "-"}
                    />
                    <InfoLine
                      label={locale === "tr" ? "Rota" : "Route"}
                      value={selectedWeek.routeLabel || "-"}
                    />
                    <InfoLine
                      label={locale === "tr" ? "Durum" : "Status"}
                      value={selectedWeek.status}
                    />
                  </div>
                </div>
              ) : null}

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    {ui.charterDurationWeeks}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={charterDurationWeeks}
                    onChange={(e) => setCharterDurationWeeks(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                    placeholder="1"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/80">
                    {ui.guestCount}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                    placeholder="4"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  {ui.routePreference}
                </label>
                <input
                  type="text"
                  value={routePreference}
                  onChange={(e) => setRoutePreference(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                  placeholder={
                    locale === "tr"
                      ? "Örn: Bodrum - Kos - Leros"
                      : "Ex: Bodrum - Kos - Leros"
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  {ui.boatPreference}
                </label>
                <input
                  type="text"
                  value={boatPreference}
                  onChange={(e) => setBoatPreference(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                  placeholder={
                    locale === "tr" ? "Tekne tercihi" : "Boat preference"
                  }
                />
              </div>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white">
                <input
                  type="checkbox"
                  checked={skipperRequired}
                  onChange={(e) => setSkipperRequired(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-transparent accent-[#67d3ff]"
                />
                <span>{ui.skipperRequired}</span>
              </label>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/80">
                  {ui.notes}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={5}
                  className="w-full rounded-2xl border border-white/10 bg-[#08131d] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#67d3ff]"
                  placeholder={ui.notesPlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[#67d3ff] px-7 py-4 text-sm font-semibold text-[#04121c] transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? ui.submitting : ui.submit}
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                {ui.altTitle}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {locale === "tr"
                  ? "Hızlı bilgi almak isterseniz"
                  : "If you want quick information"}
              </h3>

              <p className="mt-4 text-base leading-8 text-white/75">
                {ui.altDesc}
              </p>

              <a
                href={buildWhatsAppUrl(quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-[#08131d] px-6 py-4 text-sm font-semibold text-white transition hover:border-[#67d3ff] hover:text-[#67d3ff]"
              >
                {ui.altButton}
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                {ui.whyTitle}
              </p>

              <div className="mt-5 space-y-4">
                {ui.whyItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-[#08131d] px-5 py-4 text-sm font-medium leading-7 text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gray-950 p-8 text-white shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                {locale === "tr" ? "Yönlendirme" : "Direction"}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {locale === "tr"
                  ? "Önce tekneleri ve charter bölümünü incelemek ister misiniz?"
                  : "Would you like to review the boats and charter section first?"}
              </h3>

              <p className="mt-4 text-base leading-8 text-white/75">
                {locale === "tr"
                  ? "Talep bırakmadan önce tekneleri, haftaları ve charter yapısını inceleyebilirsiniz."
                  : "Before submitting your request, you can review the boats, weeks, and charter structure."}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/charter"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-gray-950 transition hover:bg-gray-100"
                >
                  {locale === "tr" ? "Charter Bölümü" : "Charter Section"}
                </Link>

                <Link
                  href="/reserve"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {locale === "tr" ? "Rezervasyon Merkezi" : "Reservation Center"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoLine({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
        {label}
      </div>
      <div className="mt-2 text-sm font-medium text-white">{value}</div>
    </div>
  );
}