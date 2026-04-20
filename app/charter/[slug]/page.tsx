"use client";

import { useEffect, useMemo, useState } from "react";
import type React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageProvider";
import CharterGallery from "../../../components/charter/CharterGallery";

type CreateInquiryPayload = {
  type: "CHARTER";
  fullName: string;
  phone: string;
  email: string;
  notes: string;
  charterWeekId: string;
  guestCount: number | null;
  routePreference: string | null;
  boatPreference: string | null;
  skipperRequired: boolean;
  estimatedValue?: number;
  leadScore?: number;
};

type CharterBoatPrice = {
  id: string;
  month: string;
  price: string;
};

type CharterGalleryItem = {
  id: string;
  imageUrl: string;
  sortOrder: number;
};

type CharterBoatDetail = {
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
  prices: CharterBoatPrice[];
  gallery?: CharterGalleryItem[];

  captainFee?: string | null;
  transitlogFee?: string | null;
  cleaningFee?: string | null;
  extrasNote?: string | null;
};

type CharterWeek = {
  id: string;
  weekLabel: string;
  startDate: string;
  endDate: string;
  routeLabel: string | null;
  notes: string | null;
  status: string;
  boatId?: string | null;
  boat?: {
    id: string;
    name: string;
    model: string;
    location?: string;
  } | null;
  inquiryCount?: number;
  hasConflict?: boolean;
  isOverdue?: boolean;
  priority?: "LOW" | "HIGH" | "HOT" | "CRITICAL";
  overridePrice?: string | null;
};

type SeasonRailMonth = {
  key: string;
  monthLabel: string;
  weeks: CharterWeek[];
};

type BoatResponse = {
  success: boolean;
  boat?: CharterBoatDetail;
  error?: string;
};

type AvailabilityResponse = {
  success: boolean;
  weeks?: CharterWeek[];
  items?: CharterWeek[];
  error?: string;
};

type InquiryResponse = {
  success: boolean;
  error?: string;
};

function normalizeFeatures(features?: string | null) {
  if (!features) return [];
  return features
    .split("\n")
    .flatMap((item) => item.split(","))
    .map((item) => item.trim())
    .filter(Boolean);
}

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

function formatShortDate(value?: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
  }).format(d);
}

function getMonthShortLabel(value?: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return new Intl.DateTimeFormat("tr-TR", { month: "short" }).format(d);
}

function getStatusText(status: string, lang: string) {
  if (lang === "tr") {
    if (status === "BOOKED") return "Rezerve";
    if (status === "OPTION") return "Opsiyonda";
    if (status === "BLOCKED") return "Kapalı";
    return "Müsait";
  }

  if (status === "BOOKED") return "Booked";
  if (status === "OPTION") return "Option";
  if (status === "BLOCKED") return "Blocked";
  return "Available";
}

function getPriorityBadgeClasses(priority?: string) {
  switch (priority) {
    case "CRITICAL":
      return "bg-black text-white";
    case "HOT":
      return "bg-rose-600 text-white";
    case "HIGH":
      return "bg-amber-500 text-white";
    default:
      return "bg-slate-100 text-slate-700";
  }
}

function getSuggestedMonthPrice(
  prices: CharterBoatPrice[] | undefined,
  startDate: string,
  overridePrice?: string | null
) {
  if (overridePrice?.trim()) return overridePrice;
  if (!prices?.length) return "";

  const d = new Date(startDate);
  if (Number.isNaN(d.getTime())) return "";

  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(d);

  const match =
    prices.find((p) => p.month.toLowerCase() === month.toLowerCase()) ||
    prices.find((p) => p.month.toLowerCase().includes(month.toLowerCase()));

  return match?.price || "";
}

function getStartingPrice(prices: CharterBoatPrice[] | undefined) {
  if (!prices?.length) return "";

  const numbers = prices
    .map((item) => {
      const numeric = String(item.price)
        .replace(/[^\d.,]/g, "")
        .replace(",", ".");
      const value = Number(numeric);
      return Number.isFinite(value) ? value : null;
    })
    .filter((value): value is number => value !== null);

  if (!numbers.length) return prices[0]?.price || "";

  const min = Math.min(...numbers);

  const matched = prices.find((item) => {
    const numeric = String(item.price)
      .replace(/[^\d.,]/g, "")
      .replace(",", ".");
    return Number(numeric) === min;
  });

  return matched?.price || prices[0]?.price || "";
}

function buildSeasonRailMonths(weeks: CharterWeek[]): SeasonRailMonth[] {
  const map = new Map<string, SeasonRailMonth>();

  for (const week of weeks) {
    const d = new Date(week.startDate);
    if (Number.isNaN(d.getTime())) continue;

    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
    const monthLabel = new Intl.DateTimeFormat("tr-TR", {
      month: "long",
      year: "numeric",
    }).format(d);

    if (!map.has(key)) {
      map.set(key, {
        key,
        monthLabel,
        weeks: [],
      });
    }

    map.get(key)!.weeks.push(week);
  }

  return Array.from(map.values());
}

function getWeekRailCardClasses(week: CharterWeek, isSelected: boolean): string {
  if (isSelected) {
    return "border-gray-950 bg-gray-950 text-white shadow-[0_18px_40px_rgba(17,24,39,0.14)]";
  }

  if (week.status === "OPTION") {
    return "border-amber-200 bg-amber-50 hover:border-amber-300";
  }

  if (week.status === "BOOKED") {
    return "border-rose-200 bg-rose-50 opacity-60";
  }

  if (week.status === "BLOCKED") {
    return "border-slate-200 bg-slate-100 opacity-60";
  }

  return "border-emerald-200 bg-emerald-50/60 hover:border-emerald-300";
}

function getWeekIndicatorClasses(status: string, isSelected: boolean): string {
  if (isSelected) return "bg-white/90";
  if (status === "OPTION") return "bg-amber-400";
  if (status === "BOOKED") return "bg-rose-500";
  if (status === "BLOCKED") return "bg-slate-400";
  return "bg-emerald-500";
}function SeasonRail({
  months,
  selectedWeekId,
  onSelectWeek,
  getPrice,
  compact = false,
  lang,
}: {
  months: SeasonRailMonth[];
  selectedWeekId: string;
  onSelectWeek: (week: CharterWeek) => void;
  getPrice: (week: CharterWeek) => string;
  compact?: boolean;
  lang: string;
}) {
  if (!months.length) return null;

  return (
    <div className="space-y-5">
      {months.map((month) => (
        <div key={month.key}>
          <div className="mb-3 flex items-center gap-3">
            <div className="h-px flex-1 bg-black/5" />
            <div className="shrink-0 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
              {month.monthLabel}
            </div>
            <div className="h-px flex-1 bg-black/5" />
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-max gap-3">
              {month.weeks.map((week) => {
                const isSelected = selectedWeekId === week.id;
                const suggestedPrice = getPrice(week);

                return (
                  <button
                    key={week.id}
                    type="button"
                    onClick={() => onSelectWeek(week)}
                    className={`${
                      compact ? "w-[156px]" : "w-[172px]"
                    } shrink-0 rounded-[1.25rem] border p-4 text-left transition ${getWeekRailCardClasses(
                      week,
                      isSelected
                    )}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span
                        className={`mt-1 h-2.5 w-2.5 rounded-full ${getWeekIndicatorClasses(
                          week.status,
                          isSelected
                        )}`}
                      />
                      <span
                        className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                          isSelected ? "bg-white/15 text-white" : "bg-white text-gray-700"
                        }`}
                      >
                        {getStatusText(week.status, lang)}
                      </span>
                    </div>

                    <div className="mt-4 text-[11px] uppercase tracking-[0.16em] opacity-70">
                      {getMonthShortLabel(week.startDate)}
                    </div>

                    <div className="mt-1 text-2xl font-semibold leading-none">
                      {formatShortDate(week.startDate).split(".")[0]}
                    </div>

                    <div
                      className={`mt-1 text-xs ${
                        isSelected ? "text-white/80" : "text-gray-500"
                      }`}
                    >
                      {formatShortDate(week.startDate)} → {formatShortDate(week.endDate)}
                    </div>

                    {week.routeLabel ? (
                      <div
                        className={`mt-3 line-clamp-2 text-xs ${
                          isSelected ? "text-white/85" : "text-gray-600"
                        }`}
                      >
                        {week.routeLabel}
                      </div>
                    ) : (
                      <div className="mt-3 text-xs opacity-50">—</div>
                    )}

                    {suggestedPrice ? (
                      <div
                        className={`mt-4 text-sm font-semibold ${
                          isSelected ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {suggestedPrice}
                      </div>
                    ) : (
                      <div className="mt-4 text-sm opacity-60">
                        {lang === "tr" ? "Sorunuz" : "On request"}
                      </div>
                    )}

                    {week.priority ? (
                      <div className="mt-3">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ${getPriorityBadgeClasses(
                            week.priority
                          )}`}
                        >
                          {week.priority}
                        </span>
                      </div>
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CharterBoatDetailPage() {
  const { lang } = useLanguage();
  const params = useParams<{ slug: string }>();
  const slug = typeof params?.slug === "string" ? params.slug : "";

  const currentYear = new Date().getFullYear();
  const WHATSAPP_NUMBER = "905324873813";

  const [boat, setBoat] = useState<CharterBoatDetail | null>(null);
  const [weeks, setWeeks] = useState<CharterWeek[]>([]);
  const [loading, setLoading] = useState(true);
  const [weeksLoading, setWeeksLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const [selectedWeekId, setSelectedWeekId] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [routePreference, setRoutePreference] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [skipperRequired, setSkipperRequired] = useState(false);

  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [highlightInquiryForm, setHighlightInquiryForm] = useState(false);

  const ui = {
    badge: lang === "tr" ? "Charter Boat" : "Charter Boat",
    back: lang === "tr" ? "Charter'a Dön" : "Back to Charter",
    reserveButton:
      lang === "tr" ? "Talep Formuna Git" : "Go to Inquiry Form",
    reserveCenter:
      lang === "tr" ? "Rezervasyon Merkezi" : "Reservation Center",
    loading: lang === "tr" ? "Yükleniyor..." : "Loading...",
    errorDefault:
      lang === "tr"
        ? "Tekne bilgileri alınamadı."
        : "Boat details could not be loaded.",
    overviewTitle: lang === "tr" ? "Genel Bakış" : "Overview",
    featuresTitle: lang === "tr" ? "Öne Çıkan Özellikler" : "Highlights",
    pricingTitle: lang === "tr" ? "Sezon Fiyatları" : "Seasonal Pricing",
    availabilityTitle: lang === "tr" ? "Uygun Haftalar" : "Available Weeks",
    year: lang === "tr" ? "Yıl" : "Year",
    cabins: lang === "tr" ? "Kabin" : "Cabins",
    guests: lang === "tr" ? "Misafir" : "Guests",
    location: lang === "tr" ? "Konum" : "Location",
    pricingNote:
      lang === "tr"
        ? "Nihai fiyat; hafta, sezon, müsaitlik ve ek taleplere göre netleşir."
        : "Final pricing is confirmed according to week, season, availability, and additional requests.",
    availabilityNote:
      lang === "tr"
        ? "Aşağıda bu tekneye bağlı uygun veya opsiyon durumundaki haftalar gösterilir."
        : "Below are the weeks linked to this boat that are currently available or optional.",
    route: lang === "tr" ? "Rota" : "Route",
    noWeeks:
      lang === "tr"
        ? "Bu tekne için şu anda uygun hafta tanımlı görünmüyor."
        : "There is currently no available week defined for this boat.",
    selectedWeek:
      lang === "tr" ? "Seçilen Hafta" : "Selected Week",
    selectWeekFirst:
      lang === "tr"
        ? "Lütfen önce bir hafta seçin."
        : "Please select a week first.",
    inquirySuccess:
      lang === "tr"
        ? "Talebiniz başarıyla alındı."
        : "Your inquiry has been received successfully.",
    inquiryError:
      lang === "tr"
        ? "Talep gönderilemedi."
        : "Inquiry could not be sent.",
    selectedYear:
      lang === "tr" ? "Sezon Yılı" : "Season Year",
    startingFrom:
      lang === "tr" ? "Başlangıç fiyatı:" : "Starting from:",
    onRequest:
      lang === "tr" ? "Sorunuz" : "On request",
    selectedWeekLinked:
      lang === "tr"
        ? "Seçtiğiniz hafta talep formuna bağlandı."
        : "Your selected week has been linked to the inquiry form.",
    inquiryTrust:
      lang === "tr"
        ? "Talebiniz doğrudan Albatros Sailing ekibine ulaşır. Uygun hafta, rota ve fiyat teyidi sizinle paylaşılır."
        : "Your inquiry is sent directly to the Albatros Sailing team. Availability, route, and final pricing are confirmed with you personally.",
  };

  async function fetchBoat() {
    try {
      setLoading(true);
      setError("");

      const cleanSlug = typeof slug === "string" ? slug.trim() : "";

      if (!cleanSlug) {
        setError(lang === "tr" ? "Tekne bulunamadı." : "Boat not found.");
        return;
      }

      const res = await fetch(`/api/charter/${encodeURIComponent(cleanSlug)}`, {
        cache: "no-store",
      });

      const data: BoatResponse = await res.json();

      if (!res.ok || !data?.success || !data?.boat) {
        setError(data?.error || (lang === "tr" ? "Tekne bulunamadı." : "Boat not found."));
        return;
      }

      setBoat(data.boat);
    } catch (err) {
      console.error(err);
      setError(
        lang === "tr"
          ? "Tekne bilgileri alınamadı."
          : "Boat details could not be loaded."
      );
    } finally {
      setLoading(false);
    }
  }

  async function fetchWeeks(boatId: string, year: number) {
    try {
      setWeeksLoading(true);

      const res = await fetch(
        `/api/charter-availability?boatId=${encodeURIComponent(boatId)}&year=${year}`,
        { cache: "no-store" }
      );

      const data: AvailabilityResponse = await res.json();

      if (!res.ok || !data?.success) {
        console.error("Charter availability API error:", data);
        setWeeks([]);
        return;
      }

      const nextWeeks = Array.isArray(data?.weeks)
        ? data.weeks
        : Array.isArray(data?.items)
        ? data.items
        : [];

      setWeeks(nextWeeks);
    } catch (err) {
      console.error("Charter availability fetch error:", err);
      setWeeks([]);
    } finally {
      setWeeksLoading(false);
    }
  }

  useEffect(() => {
    fetchBoat();
  }, [slug]);

  useEffect(() => {
    if (!boat?.id) {
      setWeeks([]);
      setWeeksLoading(false);
      return;
    }

    fetchWeeks(boat.id, selectedYear);
    }, [boat?.id, selectedYear]);

  const features = useMemo(
    () => normalizeFeatures(boat?.features),
    [boat]
  );

  const startingPrice = useMemo(
    () => getStartingPrice(boat?.prices),
    [boat]
  );

  

  const extras = useMemo(() => {
    if (!boat) return [];

    const rows: { label: string; value: string }[] = [];

    if (boat.captainFee?.trim()) {
      rows.push({
        label: lang === "tr" ? "Kaptan bedeli" : "Skipper fee",
        value: boat.captainFee.trim(),
      });
    }

    if (boat.transitlogFee?.trim()) {
      rows.push({
        label: lang === "tr" ? "Transitlog" : "Transitlog",
        value: boat.transitlogFee.trim(),
      });
    }

    if (boat.cleaningFee?.trim()) {
      rows.push({
        label: lang === "tr" ? "Son temizlik" : "Final cleaning",
        value: boat.cleaningFee.trim(),
      });
    }

    return rows;
  }, [boat, lang]);

  const galleryImages = useMemo(() => {
    if (!boat) return [];
    return [
      boat.image,
      ...(boat.gallery?.map((item) => item.imageUrl) ?? []),
    ].filter(Boolean);
  }, [boat]);

  const boatWeeks = useMemo(() => {
    if (!boat) return [];

    return weeks.filter(
      (week) => week.boatId === boat.id || week.boat?.id === boat.id
    );
  }, [weeks, boat]);

  const activeWeeks = useMemo(
    () =>
      boatWeeks.filter(
        (week) => week.status === "AVAILABLE" || week.status === "OPTION"
      ),
    [boatWeeks]
  );

  const sortedActiveWeeks = useMemo(() => {
    const priorityOrder = {
      CRITICAL: 4,
      HOT: 3,
      HIGH: 2,
      LOW: 1,
      undefined: 0,
    } as const;

    return [...activeWeeks].sort((a, b) => {
      const aOverdue = a.isOverdue ? 1 : 0;
      const bOverdue = b.isOverdue ? 1 : 0;

      if (aOverdue !== bOverdue) return bOverdue - aOverdue;

      const aPriority = priorityOrder[a.priority ?? "undefined"];
      const bPriority = priorityOrder[b.priority ?? "undefined"];

      if (aPriority !== bPriority) return bPriority - aPriority;

      return a.startDate.localeCompare(b.startDate);
    });
  }, [activeWeeks]);

  const seasonRailMonths = useMemo(
    () => buildSeasonRailMonths(sortedActiveWeeks),
    [sortedActiveWeeks]
  );

  const selectedWeek = useMemo(
    () => sortedActiveWeeks.find((week) => week.id === selectedWeekId) || null,
    [sortedActiveWeeks, selectedWeekId]
    
  );
  const selectedWeekPrice = useMemo(() => {
    if (!boat || !selectedWeek) return "";
    return getSuggestedMonthPrice(
      boat.prices,
      selectedWeek.startDate,
      selectedWeek.overridePrice
    );
  }, [boat, selectedWeek]);

  const selectedWeekStatusLabel = useMemo(() => {
    if (!selectedWeek) return "";
    return getStatusText(selectedWeek.status, lang);
  }, [selectedWeek, lang]);

  const selectedWeekPriorityTone = useMemo(() => {
    if (!selectedWeek?.priority) return "";
    if (selectedWeek.priority === "CRITICAL") return "Son alanlar";
    if (selectedWeek.priority === "HOT") return "Yoğun talep";
    if (selectedWeek.priority === "HIGH") return "Dikkat çekiyor";
    return "";
  }, [selectedWeek]);

  useEffect(() => {
    if (!selectedWeek) return;

    if (selectedWeek.routeLabel && !routePreference) {
      setRoutePreference(selectedWeek.routeLabel);
    }

    setSuccessMessage(ui.selectedWeekLinked);
    setErrorMessage("");
  }, [selectedWeek, routePreference, ui.selectedWeekLinked]);

  const whatsappHref = useMemo(() => {
    if (!boat || !selectedWeek) return "";

    const text = [
      "Merhaba Albatros Sailing,",
      `${boat.name} için bilgi almak istiyorum.`,
      `Hafta: ${selectedWeek.weekLabel}`,
      `Tarih: ${formatDate(selectedWeek.startDate)} - ${formatDate(
        selectedWeek.endDate
      )}`,
      selectedWeek.routeLabel ? `Rota: ${selectedWeek.routeLabel}` : "",
      fullName ? `Ad Soyad: ${fullName}` : "",
      phone ? `Telefon: ${phone}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  }, [boat, selectedWeek, fullName, phone]);

  const leadScore = useMemo(() => {
    let score = 20;

    if (fullName.trim()) score += 15;
    if (phone.trim()) score += 15;
    if (email.trim()) score += 10;
    if (selectedWeek) score += 20;
    if (routePreference?.trim()) score += 10;

    const guestValue = Number(guestCount || 0);
    if (guestValue >= 2) score += 5;
    if (guestValue >= 4) score += 10;
    if (guestValue >= 6) score += 5;

    if (skipperRequired) score += 5;

    return Math.min(score, 100);
  }, [
    fullName,
    phone,
    email,
    selectedWeek,
    routePreference,
    guestCount,
    skipperRequired,
  ]);

  const estimatedValue = useMemo(() => {
    const guestValue = Number(guestCount || 0);
    const normalizedGuests =
      Number.isFinite(guestValue) && guestValue > 0 ? guestValue : 2;

    const base = 900;
    const weekMultiplier = selectedWeek?.status === "OPTION" ? 1.1 : 1;

    return Math.round(normalizedGuests * base * weekMultiplier);
  }, [guestCount, selectedWeek]);

  const urgencyText = useMemo(() => {
    if (!selectedWeek) return "";

    if ((selectedWeek.inquiryCount || 0) >= 5) {
      return lang === "tr"
        ? "Bu hafta için talep yoğunluğu yüksek."
        : "Demand is currently high for this week.";
    }

    if (selectedWeek.status === "OPTION") {
      return lang === "tr"
        ? "Bu hafta opsiyon sürecinde olabilir."
        : "This week may currently be under option.";
    }

    return lang === "tr"
      ? "Bu hafta için erken talep bırakmanız önerilir."
      : "Early inquiry is recommended for this week.";
  }, [selectedWeek, lang]);

  const leadBadge = useMemo(() => {
    if (leadScore >= 75) {
      return {
        label: "Hot Lead",
        className: "bg-rose-50 text-rose-700 border-rose-200",
      };
    }

    if (leadScore >= 50) {
      return {
        label: "Strong Lead",
        className: "bg-amber-50 text-amber-700 border-amber-200",
      };
    }

    return {
      label: "New Lead",
      className: "bg-slate-50 text-slate-700 border-slate-200",
    };
  }, [leadScore]);

  const yearOptions = Array.from({ length: 4 }, (_, i) => currentYear + i);

  function handleSelectWeek(week: CharterWeek) {
    setSelectedWeekId(week.id);
    setSuccessMessage(ui.selectedWeekLinked);
    setErrorMessage("");
    setHighlightInquiryForm(true);

    setTimeout(() => {
      const section = document.getElementById("charter-inquiry-form");
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);

    setTimeout(() => {
      setHighlightInquiryForm(false);
    }, 1800);
  }

  async function handleSubmitInquiry() {
    if (!boat || !selectedWeek) {
      setErrorMessage(ui.selectWeekFirst);
      setSuccessMessage("");
      return;
    }

    if (!fullName.trim()) {
      setErrorMessage(
        lang === "tr" ? "Ad Soyad zorunludur." : "Full name is required."
      );
      setSuccessMessage("");
      return;
    }

    try {
      setSubmitting(true);
      setErrorMessage("");
      setSuccessMessage("");

      const payload: CreateInquiryPayload = {
        type: "CHARTER",
        fullName: fullName || "",
        phone: phone || "",
        email: email || "",
        notes: notes || "",
        charterWeekId: selectedWeek.id,
        guestCount: guestCount ? Number(guestCount) : null,
        routePreference: routePreference ?? selectedWeek.routeLabel ?? null,
        boatPreference: boat?.name ?? null,
        skipperRequired: Boolean(skipperRequired),
        estimatedValue,
        leadScore,
      };

      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data: InquiryResponse = await res.json();

      if (!res.ok || !data?.success) {
        setErrorMessage(data?.error || ui.inquiryError);
        setSuccessMessage("");
        return;
      }

      setSuccessMessage(ui.inquirySuccess);
      setErrorMessage("");
      setFullName("");
      setPhone("");
      setEmail("");
      setGuestCount("");
      setRoutePreference(null);
      setNotes("");
      setSkipperRequired(false);

      await fetchWeeks(boat.id, selectedYear);
    } catch (err) {
      console.error(err);
      setErrorMessage(ui.inquiryError);
      setSuccessMessage("");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <main className="bg-white text-gray-900">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm text-gray-600">{ui.loading}</p>
          </div>
        </section>
      </main>
    );
  }

  if (error || !boat) {
    return (
      <main className="bg-white text-gray-900">
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-sm text-rose-700">{error || ui.errorDefault}</p>

            <div className="mt-6">
              <Link
                href="/charter"
                className="inline-flex items-center justify-center rounded-full bg-gray-950 px-6 py-4 text-sm font-semibold text-white transition hover:opacity-95"
              >
                {ui.back}
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white text-gray-900">
      <section className="border-b border-black/5 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/charter"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
            >
              {ui.back}
            </Link>

            <button
              type="button"
              onClick={() => {
                const section = document.getElementById("charter-inquiry-form");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center rounded-full bg-gray-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
            >
              {ui.reserveButton}
            </button>
          </div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                {ui.badge}
              </p>

              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">
                {boat.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-gray-600">
                {boat.model}
              </p>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                {boat.shortNote}
              </p>

              <div className="mt-6 inline-flex rounded-full border border-black/5 bg-white px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm">
                {ui.startingFrom}
                <span className="ml-2 text-gray-950">
                  {startingPrice || ui.onRequest}
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <InfoBox label={ui.year} value={String(boat.year)} />
                <InfoBox label={ui.cabins} value={String(boat.cabins)} />
                <InfoBox label={ui.guests} value={boat.guestsLabel} />
                <InfoBox label={ui.location} value={boat.location} />
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem]">
              <CharterGallery images={galleryImages} boatName={boat.name} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              {ui.overviewTitle}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-950">
              {boat.name} · {boat.model}
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600">
              {boat.description}
            </p>
          </div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              {ui.featuresTitle}
            </p>

            <div className="mt-6 grid gap-3">
              {features.length ? (
                features.map((feature, index) => (
                  <div
                    key={`${feature}-${index}`}
                    className="rounded-xl border border-black/5 bg-[#fafafa] px-4 py-3 text-sm font-medium text-gray-800"
                  >
                    {feature}
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">-</p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
  <div className="flex items-center justify-between gap-4">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
      TARİHLER ÜCRETLER (EURO)
    </p>

    <div className="rounded-full border border-black/5 bg-[#fafafa] px-4 py-2 text-xs font-semibold text-gray-700">
      {ui.startingFrom} {startingPrice || ui.onRequest}
    </div>
  </div>

  <div className="mt-8">
    {boat.prices?.length ? (
      <div className="space-y-5">
        {boat.prices.map((price) => (
          <div
            key={price.id}
            className="grid grid-cols-[1fr_auto] items-center gap-6"
          >
            <div className="text-[27px] font-semibold tracking-tight text-gray-900 md:text-[30px]">
              {price.month}
            </div>

            <div className="text-right text-[28px] font-semibold tracking-tight text-gray-900 md:text-[32px]">
              {price.price}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <p className="text-sm text-gray-500">{ui.onRequest}</p>
    )}
  </div>

  {extras.length > 0 || boat.extrasNote?.trim() ? (
    <div className="mt-10 border-t border-black/5 pt-8">
      <div className="text-[24px] font-semibold tracking-tight text-gray-900 md:text-[26px]">
        {lang === "tr" ? "İlaveler:" : "Extras:"}
      </div>

      <div className="mt-5 space-y-4">
        {extras.map((item, index) => (
          <div
            key={`${item.label}-${index}`}
            className="grid grid-cols-[1fr_auto] items-center gap-6"
          >
            <div className="text-[22px] font-medium text-gray-900 md:text-[24px]">
              {item.label}
            </div>
            <div className="text-right text-[22px] font-semibold text-gray-900 md:text-[24px]">
              {item.value}
            </div>
          </div>
        ))}

        {boat.extrasNote?.trim() ? (
          <p className="pt-2 text-base leading-8 text-gray-600">
            {boat.extrasNote.trim()}
          </p>
        ) : null}
      </div>
    </div>
  ) : null}

  <p className="mt-8 text-sm leading-7 text-gray-500">
    {ui.pricingNote}
  </p>
</div>

          <div className="rounded-[2rem] border border-black/5 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                {ui.availabilityTitle}
              </p>

              <div className="flex items-center gap-3">
                <span className="text-xs font-medium text-gray-500">
                  {ui.selectedYear}
                </span>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-900 outline-none"
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              {ui.availabilityNote}
            </p>

            <div className="mt-6">
              {weeksLoading ? (
                <p className="text-sm text-gray-500">{ui.loading}</p>
              ) : seasonRailMonths.length ? (
                <div className="space-y-4">
  <SeasonRail
    months={seasonRailMonths}
    selectedWeekId={selectedWeekId}
    onSelectWeek={handleSelectWeek}
    getPrice={(week) =>
      getSuggestedMonthPrice(
        boat.prices,
        week.startDate,
        week.overridePrice
      )
    }
    lang={lang}
  />

  {selectedWeek ? (
    <>
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900">
        <div className="font-semibold">
          {lang === "tr" ? "Seçilen hafta hazır" : "Selected week ready"}
        </div>

        <div className="mt-1">
          {selectedWeek.weekLabel}
          {selectedWeekPrice ? ` • ${selectedWeekPrice}` : ""}
        </div>
      </div>

      {whatsappHref ? (
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-full items-center justify-center rounded-2xl bg-[#25D366] px-4 py-4 text-sm font-semibold text-white transition hover:opacity-90"
        >
          {lang === "tr"
            ? "Bu haftayı WhatsApp’tan sor"
            : "Ask for this week on WhatsApp"}
        </a>
      ) : null}
    </>
  ) : null}

  <div className="rounded-2xl border border-black/5 bg-[#fafafa] px-4 py-3 text-xs text-gray-500">
    {lang === "tr"
      ? "Bu sezon şeridi, haftaları soldan sağa akış halinde gösterir. Bir hafta seçtiğinizde fiyat ve uygunluk güncellenir."
      : "This season rail shows weeks in a left-to-right flow. Selecting a week updates pricing and availability."}
  </div>
</div>
              ) : (
                <div className="rounded-[1.2rem] border border-black/5 bg-[#fafafa] p-4 text-sm text-gray-500">
                  {ui.noWeeks}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
            <section
        id="charter-inquiry-form"
        className="mx-auto max-w-7xl px-6 py-16 md:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  {ui.availabilityTitle}
                </p>

                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(Number(e.target.value))}
                  className="rounded-full border border-gray-300 px-4 py-2 text-sm"
                >
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-6">
                {weeksLoading ? (
                  <p className="text-sm text-gray-500">{ui.loading}</p>
                ) : seasonRailMonths.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    {lang === "tr"
                      ? "Uygun hafta bulunamadı."
                      : "No available weeks found."}
                  </p>
                ) : (
                  <SeasonRail
                    months={seasonRailMonths}
                    selectedWeekId={selectedWeekId}
                    onSelectWeek={handleSelectWeek}
                    getPrice={(week) =>
                      getSuggestedMonthPrice(
                        boat.prices,
                        week.startDate,
                        week.overridePrice
                      )
                    }
                    compact
                    lang={lang}
                  />
                )}
              </div>
            </div>

            {selectedWeek && (
              <div className="mt-6 rounded-2xl border border-black/5 bg-white p-5 text-sm text-gray-700 shadow-sm">
                <p className="font-semibold text-gray-900">
                  {lang === "tr" ? "Durum" : "Status"}
                </p>
                <p className="mt-2">{urgencyText}</p>
              </div>
            )}
          </div>

          <div
            className={`rounded-[2rem] border border-black/5 bg-white p-6 shadow-sm transition ${
              highlightInquiryForm ? "ring-2 ring-gray-900/15" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                {ui.reserveCenter}
              </p>

              <span
                className={`rounded-full border px-3 py-1 text-xs font-semibold ${leadBadge.className}`}
              >
                {leadBadge.label}
              </span>
            </div>

            <div className="mt-5 rounded-2xl border border-black/5 bg-[#fafafa] p-4"><div className="mt-5 rounded-2xl border border-black/5 bg-[#fafafa] p-4">
  <div className="flex items-start justify-between gap-3">
    <div className="text-xs uppercase tracking-[0.18em] text-gray-500">
      {selectedWeek ? ui.selectedWeek : "Week Selection"}
    </div>

    {selectedWeek ? (
      <span
        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${getPriorityBadgeClasses(
          selectedWeek.priority
        )}`}
      >
        {selectedWeek.priority ?? selectedWeekStatusLabel}
      </span>
    ) : null}
  </div>

  {selectedWeek ? (
    <>
      <div className="mt-3 text-lg font-semibold text-gray-900">
        {selectedWeek.weekLabel}
      </div>

      <div className="mt-1 text-sm text-gray-500">
        {formatDate(selectedWeek.startDate)} - {formatDate(selectedWeek.endDate)}
      </div>

      {selectedWeek.routeLabel ? (
        <div className="mt-3 text-sm text-gray-700">
          {ui.route}: {selectedWeek.routeLabel}
        </div>
      ) : null}

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-xl border border-black/5 bg-white px-3 py-3">
          <div className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
            Durum
          </div>
          <div className="mt-1 text-sm font-semibold text-gray-900">
            {selectedWeekStatusLabel}
          </div>
        </div>

        <div className="rounded-xl border border-black/5 bg-white px-3 py-3">
          <div className="text-[11px] uppercase tracking-[0.14em] text-gray-500">
            Fiyat
          </div>
          <div className="mt-1 text-sm font-semibold text-gray-900">
            {selectedWeekPrice || ui.onRequest}
          </div>
        </div>
      </div>

      {selectedWeekPriorityTone ? (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-800">
          {selectedWeekPriorityTone}
        </div>
      ) : null}
    </>
  ) : (
    <div className="mt-2 text-sm text-gray-500">
      {lang === "tr"
        ? "Lütfen sezon şeridinden bir hafta seçin."
        : "Please select a week from the season rail."}
    </div>
  )}
</div>

              {selectedWeek ? (
                <>
                  <div className="mt-2 text-base font-semibold text-gray-900">
                    {selectedWeek.weekLabel}
                  </div>
                  <div className="mt-1 text-sm text-gray-500">
                    {formatDate(selectedWeek.startDate)} -{" "}
                    {formatDate(selectedWeek.endDate)}
                  </div>
                  {selectedWeek.routeLabel ? (
                    <div className="mt-2 text-sm text-gray-700">
                      {ui.route}: {selectedWeek.routeLabel}
                    </div>
                  ) : null}
                  {getSuggestedMonthPrice(
                    boat.prices,
                    selectedWeek.startDate,
                    selectedWeek.overridePrice
                  ) ? (
                    <div className="mt-2 text-sm font-semibold text-gray-900">
                      {getSuggestedMonthPrice(
                        boat.prices,
                        selectedWeek.startDate,
                        selectedWeek.overridePrice
                      )}
                    </div>
                  ) : null}
                </>
              ) : (
                <div className="mt-2 text-sm text-gray-500">
                  {lang === "tr"
                    ? "Lütfen sezon şeridinden bir hafta seçin."
                    : "Please select a week from the season rail."}
                </div>
              )}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="rounded-xl border border-gray-200 p-3">
                <p className="text-gray-500">Lead Score</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  {leadScore}/100
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 p-3">
                <p className="text-gray-500">Estimated Value</p>
                <p className="mt-1 text-lg font-semibold text-gray-900">
                  €{estimatedValue}
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <Input
                placeholder={lang === "tr" ? "Ad Soyad" : "Full name"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

              <Input
                placeholder={lang === "tr" ? "Telefon" : "Phone"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <Input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                placeholder={lang === "tr" ? "Kişi sayısı" : "Guests"}
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
              />

              <Input
                placeholder={lang === "tr" ? "Rota tercihi" : "Route preference"}
                value={routePreference ?? ""}
                onChange={(e) => setRoutePreference(e.target.value)}
              />

              <textarea
                placeholder={lang === "tr" ? "Notlar" : "Notes"}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900"
              />

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={skipperRequired}
                  onChange={(e) => setSkipperRequired(e.target.checked)}
                />
                {lang === "tr" ? "Kaptan gerekli" : "Skipper required"}
              </label>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {selectedWeek ? (
  <div className="mb-2 text-xs text-emerald-700">
    {lang === "tr"
      ? `Seçilen hafta: ${selectedWeek.weekLabel}${
          selectedWeekPrice ? ` • ${selectedWeekPrice}` : ""
        }`
      : `Selected week: ${selectedWeek.weekLabel}${
          selectedWeekPrice ? ` • ${selectedWeekPrice}` : ""
        }`}
  </div>
) : null}
              <button
  onClick={handleSubmitInquiry}
  disabled={submitting || !selectedWeek}
  className={`w-full rounded-full px-6 py-4 text-sm font-semibold text-white transition
${
  selectedWeek
    ? "bg-gray-950 cta-glow hover:opacity-95"
    : "bg-gray-300 cursor-not-allowed"
}`}
>
  {submitting
    ? (lang === "tr" ? "Gönderiliyor..." : "Sending...")
    : selectedWeek
      ? (
          lang === "tr"
            ? `${selectedWeek.weekLabel}${
                selectedWeekPrice ? ` • ${selectedWeekPrice}` : ""
              } için teklif al`
            : `Request offer for ${selectedWeek.weekLabel}${
                selectedWeekPrice ? ` • ${selectedWeekPrice}` : ""
              }`
        )
      : (lang === "tr" ? "Teklif talebi gönder" : "Send inquiry")}
</button>

              {whatsappHref && (
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-gray-300 px-6 py-4 text-center text-sm font-semibold text-gray-900 transition hover:bg-gray-50"
                >
                  WhatsApp
                </a>
              )}
            </div>

            {errorMessage && (
              <p className="mt-4 text-sm text-rose-600">{errorMessage}</p>
            )}

            {successMessage && (
              <p className="mt-4 text-sm text-emerald-600">
                {successMessage}
              </p>
            )}

            <p className="mt-6 text-xs leading-6 text-gray-500">
              {ui.inquiryTrust}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
function InfoBox({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-black/5 bg-white px-4 py-3 text-sm shadow-sm">
      <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
      <p className="mt-1 font-semibold text-gray-900">{value}</p>
    </div>
  );
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm text-gray-900 outline-none focus:border-gray-900"
    />
  );
}