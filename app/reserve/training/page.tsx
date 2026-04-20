"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageProvider";
import { getMessages } from "@/messages";

const WHATSAPP_NUMBER = "905324873813";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function TrainingReservePage() {
  const { lang } = useLanguage();
  const t = useMemo(() => getMessages(lang), [lang]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selectedProgram, setSelectedProgram] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("");
  const [preferredMonth, setPreferredMonth] = useState("");
  const [participantCount, setParticipantCount] = useState("");
  const [routePreference, setRoutePreference] = useState("");
  const [notes, setNotes] = useState("");

  const ui = {
    badge: lang === "tr" ? "Training Reservation" : "Training Reservation",
    title:
      lang === "tr"
        ? "Eğitim talebinizi doğru yapı ile oluşturun."
        : "Create your training inquiry with the right structure.",
    description:
      lang === "tr"
        ? "Eğitim rezervasyonları rota, dönem, seviye ve kontenjan mantığıyla değerlendirilir. Bilgilerinizi bırakın, size en uygun eğitim akışını birlikte netleştirelim."
        : "Training reservations are evaluated based on route, season, level, and capacity. Leave your details and let us define the most suitable training flow together.",

    formTitle: lang === "tr" ? "Eğitim Talep Formu" : "Training Inquiry Form",
    formDesc:
      lang === "tr"
        ? "Form gönderildiğinde talebiniz sisteme kaydedilir ve ekibimiz sizinle iletişime geçer."
        : "When the form is submitted, your inquiry is stored in the system and our team will contact you.",

    fullName: lang === "tr" ? "Ad Soyad" : "Full Name",
    phone: lang === "tr" ? "Telefon / WhatsApp" : "Phone / WhatsApp",
    email: lang === "tr" ? "E-posta" : "Email",
    program: lang === "tr" ? "Program Seçimi" : "Program Selection",
    experience: lang === "tr" ? "Deneyim Seviyesi" : "Experience Level",
    preferredMonth: lang === "tr" ? "Tercih Edilen Dönem" : "Preferred Period",
    participantCount: lang === "tr" ? "Katılımcı Sayısı" : "Participant Count",
    routePreference: lang === "tr" ? "Rota Tercihi" : "Route Preference",
    notes: lang === "tr" ? "Notunuz" : "Your Note",

    notesPlaceholder:
      lang === "tr"
        ? "Hedefiniz, tarih beklentiniz veya özel durumunuzu yazabilirsiniz."
        : "You can write your goal, preferred timing, or any special details.",
    routePlaceholder:
      lang === "tr"
        ? "Örn: Bodrum - Yunan Adaları / Bodrum - İstanbul"
        : "Ex: Bodrum - Greek Islands / Bodrum - Istanbul",

    submit:
      lang === "tr" ? "Talebi Sisteme Kaydet" : "Save Inquiry to System",
    submitting: lang === "tr" ? "Kaydediliyor..." : "Saving...",

    success:
      lang === "tr"
        ? "Eğitim talebiniz başarıyla kaydedildi."
        : "Your training inquiry has been saved successfully.",
    error:
      lang === "tr"
        ? "İşlem sırasında bir hata oluştu."
        : "An error occurred during the request.",
    validation:
      lang === "tr"
        ? "Lütfen ad soyad ve program seçimini doldurun."
        : "Please fill in full name and program selection.",

    altTitle: lang === "tr" ? "Hızlı İletişim" : "Quick Contact",
    altDesc:
      lang === "tr"
        ? "Dilerseniz eğitim yapısı hakkında hızlı bilgi almak için doğrudan WhatsApp üzerinden de yazabilirsiniz."
        : "If you prefer, you can also message directly on WhatsApp for quick information about the training structure.",
    altButton: lang === "tr" ? "WhatsApp ile Sor" : "Ask on WhatsApp",

    whyTitle:
      lang === "tr"
        ? "Bu form neden önemli?"
        : "Why is this form important?",
    whyItems:
      lang === "tr"
        ? [
            "Seviyenize uygun program yönlendirmesi yapılır",
            "Rota ve dönem uygunluğu değerlendirilir",
            "Kontenjan ve planlama süreci hızlanır",
          ]
        : [
            "You receive guidance toward the right program for your level",
            "Route and seasonal suitability are evaluated",
            "Capacity and planning become faster",
          ],
  };

  const experienceOptions =
    lang === "tr"
      ? [
          "Başlangıç",
          "Temel seviye deneyimim var",
          "Orta seviye",
          "İleri seviye",
          "Profesyonel hedefim var",
        ]
      : [
          "Beginner",
          "I have basic experience",
          "Intermediate",
          "Advanced",
          "I have professional goals",
        ];

  const monthOptions =
    lang === "tr"
      ? [
          "Nisan 2026",
          "Mayıs 2026",
          "Haziran 2026",
          "Temmuz 2026",
          "Ağustos 2026",
          "Eylül 2026",
          "Ekim 2026",
        ]
      : [
          "April 2026",
          "May 2026",
          "June 2026",
          "July 2026",
          "August 2026",
          "September 2026",
          "October 2026",
        ];

  const routeOptions =
    lang === "tr"
      ? [
          "Bodrum - Marmaris",
          "Bodrum - Yunan Adaları",
          "Bodrum - İstanbul",
          "İstanbul - Bodrum",
          "Bodrum - Kıbrıs",
          "Kıbrıs - Bodrum",
        ]
      : [
          "Bodrum - Marmaris",
          "Bodrum - Greek Islands",
          "Bodrum - Istanbul",
          "Istanbul - Bodrum",
          "Bodrum - Cyprus",
          "Cyprus - Bodrum",
        ];

  const programs = t.programs;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!fullName.trim() || !selectedProgram.trim()) {
      alert(ui.validation);
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        type: "TRAINING",
        fullName,
        phone,
        email,
        notes:
          [
            notes.trim(),
            routePreference ? `Route Preference: ${routePreference}` : "",
          ]
            .filter(Boolean)
            .join("\n\n") || null,
        trainingProgram: selectedProgram,
        experienceLevel,
        preferredMonth,
        participantCount: participantCount ? Number(participantCount) : null,
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
window.location.href = buildWhatsAppUrl(`Merhaba, ben ${fullName}. ${selectedProgram} eğitimi hakkında bilgi almak istiyorum. Telefon: ${phone}`);
      setFullName("");
      setPhone("");
      setEmail("");
      setSelectedProgram("");
      setExperienceLevel("");
      setPreferredMonth("");
      setParticipantCount("");
      setRoutePreference("");
      setNotes("");
    } catch (error) {
      console.error(error);
      alert(ui.error);
    } finally {
      setIsSubmitting(false);
    }
  }

  const quickMessage =
    lang === "tr"
      ? "Merhaba, Albatros Sailing eğitim programları, rotalar ve uygun dönemler hakkında bilgi almak istiyorum."
      : "Hello, I would like to get information about Albatros Sailing training programs, routes, and available periods.";

  return (
    <main
      className="min-h-screen text-white"
      style={{
        background:
          "radial-gradient(circle at 15% 15%, rgba(56,189,248,0.14), transparent 26%), radial-gradient(circle at 85% 0%, rgba(72,167,255,0.10), transparent 30%), linear-gradient(180deg, #07111d 0%, #091320 45%, #08101a 100%)",
      }}
    >
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              {ui.badge}
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {ui.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              {ui.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="rounded-[2rem] border p-8"
            style={{
              borderColor: "rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(16px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
              {ui.formTitle}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white">
              {lang === "tr" ? "Bilgilerinizi bırakın" : "Leave your details"}
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
              {ui.formDesc}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  {ui.fullName}
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="reserve-input"
                  placeholder={lang === "tr" ? "Adınız soyadınız" : "Your full name"}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {ui.phone}
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="reserve-input"
                    placeholder={lang === "tr" ? "05xx xxx xx xx" : "+90 ..."}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {ui.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="reserve-input"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  {ui.program}
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="reserve-input"
                >
                  <option value="">
                    {lang === "tr" ? "Program seçin" : "Select a program"}
                  </option>
                  {programs.map((program) => (
                    <option key={program.href} value={program.href}>
                      {program.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {ui.experience}
                  </label>
                  <select
                    value={experienceLevel}
                    onChange={(e) => setExperienceLevel(e.target.value)}
                    className="reserve-input"
                  >
                    <option value="">
                      {lang === "tr" ? "Seçiniz" : "Select"}
                    </option>
                    {experienceOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {ui.participantCount}
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={participantCount}
                    onChange={(e) => setParticipantCount(e.target.value)}
                    className="reserve-input"
                    placeholder="1"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {ui.preferredMonth}
                  </label>
                  <select
                    value={preferredMonth}
                    onChange={(e) => setPreferredMonth(e.target.value)}
                    className="reserve-input"
                  >
                    <option value="">
                      {lang === "tr" ? "Dönem seçin" : "Select period"}
                    </option>
                    {monthOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-white/70">
                    {ui.routePreference}
                  </label>
                  <select
                    value={routePreference}
                    onChange={(e) => setRoutePreference(e.target.value)}
                    className="reserve-input"
                  >
                    <option value="">
                      {lang === "tr" ? "Rota seçin" : "Select route"}
                    </option>
                    {routeOptions.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white/70">
                  {ui.notes}
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={5}
                  className="reserve-input"
                  placeholder={ui.notesPlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-sm font-semibold text-[#04131c] transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #58c6ff 0%, #22d3ee 100%)",
                  boxShadow: "0 0 30px rgba(56,189,248,0.35)",
                }}
              >
                {isSubmitting ? ui.submitting : ui.submit}
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            <div
              className="rounded-[2rem] border p-8"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                {ui.altTitle}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {lang === "tr"
                  ? "Hızlı bilgi almak isterseniz"
                  : "If you want quick information"}
              </h3>

              <p className="mt-4 text-base leading-8 text-white/65">
                {ui.altDesc}
              </p>

              <a
                href={buildWhatsAppUrl(quickMessage)}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full border px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.04)",
                  boxShadow: "0 0 20px rgba(56,189,248,0.08)",
                }}
              >
                {ui.altButton}
              </a>
            </div>

            <div
              className="rounded-[2rem] border p-8"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                {ui.whyTitle}
              </p>

              <div className="mt-5 space-y-4">
                {ui.whyItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border px-5 py-4 text-sm font-medium leading-7 text-white/75"
                    style={{
                      borderColor: "rgba(255,255,255,0.10)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div
              className="rounded-[2rem] border p-8 text-white"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(16px)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.28)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                {lang === "tr" ? "Yönlendirme" : "Direction"}
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                {lang === "tr"
                  ? "Diğer eğitim sayfalarını incelemek ister misiniz?"
                  : "Would you like to review the other training pages?"}
              </h3>

              <p className="mt-4 text-base leading-8 text-white/70">
                {lang === "tr"
                  ? "Karar vermeden önce programları ve eğitim yapısını inceleyebilirsiniz."
                  : "Before deciding, you can review the programs and training structure."}
              </p>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-full px-6 py-4 text-sm font-semibold text-[#04131c] transition duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #58c6ff 0%, #22d3ee 100%)",
                    boxShadow: "0 0 30px rgba(56,189,248,0.35)",
                  }}
                >
                  {lang === "tr" ? "Programları Gör" : "View Programs"}
                </Link>

                <Link
                  href="/training"
                  className="inline-flex items-center justify-center rounded-full border px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
                  style={{
                    borderColor: "rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {lang === "tr" ? "Eğitim Yapısı" : "Training Structure"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .reserve-input {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.10);
          background: rgba(255, 255, 255, 0.05);
          padding: 1rem 1rem;
          color: white;
          outline: none;
          transition:
            border-color 0.2s ease,
            box-shadow 0.2s ease,
            background 0.2s ease,
            transform 0.2s ease;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        }

        .reserve-input::placeholder {
          color: rgba(255, 255, 255, 0.38);
        }

        .reserve-input:focus {
          border-color: rgba(56, 189, 248, 0.7);
          background: rgba(255, 255, 255, 0.07);
          box-shadow:
            0 0 0 4px rgba(56, 189, 248, 0.14),
            0 0 30px rgba(56, 189, 248, 0.12);
          transform: translateY(-1px);
        }

        select.reserve-input option {
          background: #0b1220;
          color: #f8fafc;
        }
      `}</style>
    </main>
  );
}