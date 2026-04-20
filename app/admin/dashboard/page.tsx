"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type CharterBoat = {
  id: string;
  slug: string;
  name: string;
  model: string;
  prices?: Array<{
    id: string;
    month: string;
    price: string;
  }>;
};

type Inquiry = {
  id: string;
  type: string;
  status: string;
  fullName: string;
  phone?: string | null;
  email?: string | null;
  leadScore?: number;
  estimatedValue?: number;
  createdAt: string;
  charterWeekId?: string | null;
  charterStartDate?: string | null;
  charterEndDate?: string | null;
  boatPreference?: string | null;
  charterWeek?: {
    id: string;
    weekLabel: string;
    startDate: string;
    endDate: string;
    status: string;
    boat?: {
      id: string;
      name: string;
      model: string;
    } | null;
  } | null;
};

type AdminLog = {
  id: string;
  action: string;
  targetType: string;
  targetId: string;
  createdAt: string;
};

type ConflictLead = {
  id: string;
  fullName: string;
  phone: string | null;
  email: string | null;
};

type ConflictGroup = {
  charterWeekId: string;
  weekLabel: string;
  startDate: string;
  endDate: string;
  inquiryCount: number;
  boatName: string;
  people: string[];
  leads: ConflictLead[];
};

function formatDateTime(value?: string | null) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";

  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
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

function getInquiryTypeClasses(type: string) {
  if (type === "CHARTER") {
    return "bg-blue-50 text-blue-700 ring-blue-200";
  }

  return "bg-emerald-50 text-emerald-700 ring-emerald-200";
}

function getInquiryStatusClasses(status: string) {
  switch (status) {
    case "CONFIRMED":
      return "bg-emerald-50 text-emerald-700 ring-emerald-200";
    case "CONTACTED":
      return "bg-amber-50 text-amber-700 ring-amber-200";
    case "QUOTED":
      return "bg-purple-50 text-purple-700 ring-purple-200";
    case "CANCELLED":
      return "bg-rose-50 text-rose-700 ring-rose-200";
    default:
      return "bg-slate-100 text-slate-700 ring-slate-200";
  }
}

function normalizePhoneForWhatsApp(phone?: string | null) {
  if (!phone) return "";
  return phone.replace(/[^\d]/g, "");
}

function buildConflictWhatsAppMessage(leadName: string, boatName: string, weekLabel: string) {
  return `Merhaba ${leadName},

Albatros Sailing olarak ${boatName} için ${weekLabel} tarihli charter talebinizi aldık.

Uygunluk, fiyat ve rota detaylarını sizinle netleştirebiliriz. Dilerseniz size en doğru seçeneği hemen paylaşayım.`;
}

export default function AdminDashboardPage() {
  const [boats, setBoats] = useState<CharterBoat[]>([]);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [logs, setLogs] = useState<AdminLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);

        const [boatsRes, inquiriesRes, logsRes] = await Promise.all([
          fetch("/api/charter", { cache: "no-store" }),
          fetch("/api/inquiries", { cache: "no-store" }),
          fetch("/api/admin-logs?limit=8", { cache: "no-store" }),
        ]);

        const boatsData = await boatsRes.json();
        const inquiriesData = await inquiriesRes.json();
        const logsData = await logsRes.json();

        setBoats(Array.isArray(boatsData?.boats) ? boatsData.boats : []);
        setInquiries(
          Array.isArray(inquiriesData?.inquiries) ? inquiriesData.inquiries : []
        );
        setLogs(Array.isArray(logsData?.logs) ? logsData.logs : []);
      } catch (error) {
        console.error("Admin dashboard fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  const stats = useMemo(() => {
    const charterInquiries = inquiries.filter((i) => i.type === "CHARTER");
    const trainingInquiries = inquiries.filter((i) => i.type === "TRAINING");
    const hotLeads = inquiries.filter((i) => (i.leadScore || 0) >= 70);
    const totalEstimatedValue = inquiries.reduce(
      (sum, item) => sum + Number(item.estimatedValue || 0),
      0
    );
    const pricedBoats = boats.filter((boat) => (boat.prices?.length || 0) > 0);

    return {
      totalBoats: boats.length,
      pricedBoats: pricedBoats.length,
      totalInquiries: inquiries.length,
      charterInquiries: charterInquiries.length,
      trainingInquiries: trainingInquiries.length,
      hotLeads: hotLeads.length,
      totalEstimatedValue,
    };
  }, [boats, inquiries]);

  const conflictGroups = useMemo(() => {
    const map = new Map<string, ConflictGroup>();

    for (const inquiry of inquiries) {
      if (inquiry.type !== "CHARTER") continue;
      if (!inquiry.charterWeekId) continue;

      const key = inquiry.charterWeekId;
      const existing = map.get(key);

      const boatName =
        inquiry.charterWeek?.boat?.name || inquiry.boatPreference || "-";

      const lead: ConflictLead = {
        id: inquiry.id,
        fullName: inquiry.fullName,
        phone: inquiry.phone || null,
        email: inquiry.email || null,
      };

      if (!existing) {
        map.set(key, {
          charterWeekId: key,
          weekLabel: inquiry.charterWeek?.weekLabel || "Unknown Week",
          startDate:
            inquiry.charterStartDate ||
            inquiry.charterWeek?.startDate ||
            "",
          endDate:
            inquiry.charterEndDate ||
            inquiry.charterWeek?.endDate ||
            "",
          inquiryCount: 1,
          boatName,
          people: [inquiry.fullName],
          leads: [lead],
        });
      } else {
        existing.inquiryCount += 1;
        existing.people.push(inquiry.fullName);
        existing.leads.push(lead);
      }
    }

    return Array.from(map.values())
      .filter((item) => item.inquiryCount > 1)
      .sort((a, b) => {
        if (a.inquiryCount !== b.inquiryCount) {
          return b.inquiryCount - a.inquiryCount;
        }
        return a.startDate.localeCompare(b.startDate);
      });
  }, [inquiries]);

  const recentInquiries = useMemo(() => inquiries.slice(0, 6), [inquiries]);
  const recentLogs = useMemo(() => logs.slice(0, 6), [logs]);

  return (
    <main className="min-h-screen bg-[#f7f8fb] text-slate-900">
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
                Albatros Sailing
              </p>

              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 md:text-4xl">
                Admin Control Center
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Charter operasyonu, inquiry yönetimi, availability takibi ve log
                kayıtlarını tek merkezden yönetin.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Certificate Admin
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Public Site
              </Link>

              <Link
                href="/verify"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Verify Portal
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            label="Toplam Tekne"
            value={String(stats.totalBoats)}
            sublabel={`${stats.pricedBoats} fiyatlı tekne`}
          />
          <StatCard
            label="Toplam Inquiry"
            value={String(stats.totalInquiries)}
            sublabel={`${stats.charterInquiries} charter / ${stats.trainingInquiries} training`}
          />
          <StatCard
            label="Hot Lead"
            value={String(stats.hotLeads)}
            sublabel="Lead score ≥ 70"
          />
          <StatCard
            label="Tahmini Değer"
            value={`€${stats.totalEstimatedValue.toLocaleString("tr-TR")}`}
            sublabel="Toplam potansiyel"
          />
          <StatCard
            label="Conflict Week"
            value={String(conflictGroups.length)}
            sublabel="Çakışan satış haftaları"
          />
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <QuickLinkCard
            title="Certificate Admin"
            text="Sertifika oluşturma, revoke, print ve verify işlemleri."
            href="/admin"
            cta="Paneli Aç"
          />
          <QuickLinkCard
            title="Charter Boats"
            text="Tekne oluştur, düzenle, fiyat yapılarını yönet."
            href="/admin/charter"
            cta="Panele Git"
          />
          <QuickLinkCard
            title="Availability"
            text="Haftaları, müsaitlik durumlarını ve sezon bloklarını yönet."
            href="/admin/charter-availability"
            cta="Yönet"
          />
          <QuickLinkCard
            title="Inquiries CRM"
            text="Lead score, estimated value, filtre ve kanban ile satış takibi yap."
            href="/admin/inquiries"
            cta="CRM Aç"
          />
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-2 xl:grid-cols-2">
          <QuickLinkCard
            title="Admin Logs"
            text="Sistemde yapılan işlemleri ve değişiklik kayıtlarını incele."
            href="/admin/logs"
            cta="Logları Gör"
          />
          <QuickLinkCard
            title="Charter Public"
            text="Public charter sayfasını ve satış akışını canlı tarafta kontrol et."
            href="/charter"
            cta="Canlıya Git"
          />
        </div>

        <div className="mt-8 rounded-[2rem] border border-rose-200 bg-rose-50 p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-rose-600">
                Conflict Alerts
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Çakışan satış haftaları
              </h2>
            </div>

            <Link
              href="/admin/charter-availability"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Availability Aç
            </Link>
          </div>

          <div className="mt-6">
            {loading ? (
              <p className="text-sm text-slate-500">Yükleniyor...</p>
            ) : conflictGroups.length === 0 ? (
              <p className="text-sm text-slate-600">
                Şu anda conflict görünen hafta yok.
              </p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {conflictGroups.map((group) => (
                  <article
                    key={group.charterWeekId}
                    className="rounded-[1.5rem] border border-rose-200 bg-white p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex rounded-full bg-rose-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-rose-700">
                        Conflict
                      </span>
                      <span className="text-sm font-semibold text-slate-950">
                        {group.weekLabel}
                      </span>
                    </div>

                    <div className="mt-3 space-y-1 text-sm text-slate-600">
                      <div>Tekne: {group.boatName}</div>
                      <div>
                        Tarih: {formatDate(group.startDate)} →{" "}
                        {formatDate(group.endDate)}
                      </div>
                      <div className="font-semibold text-rose-700">
                        Inquiry: {group.inquiryCount}
                      </div>
                    </div>

                    <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-6 text-slate-700">
                      {group.people.join(", ")}
                    </div>

                    <div className="mt-4 space-y-2">
                      {group.leads.map((lead) => {
                        const whatsappPhone = normalizePhoneForWhatsApp(lead.phone);
                        const whatsappUrl = whatsappPhone
                          ? `https://wa.me/${whatsappPhone}?text=${encodeURIComponent(
                              buildConflictWhatsAppMessage(
                                lead.fullName,
                                group.boatName,
                                group.weekLabel
                              )
                            )}`
                          : null;

                        return (
                          <div
                            key={lead.id}
                            className="rounded-xl border border-slate-200 bg-white p-3"
                          >
                            <div className="text-sm font-semibold text-slate-900">
                              {lead.fullName}
                            </div>
                            <div className="mt-1 text-xs text-slate-600">
                              {lead.phone || "-"} {lead.email ? `• ${lead.email}` : ""}
                            </div>

                            <div className="mt-3 flex gap-2">
                              {whatsappUrl ? (
                                <a
                                  href={whatsappUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
                                >
                                  WhatsApp
                                </a>
                              ) : null}

                              <Link
                                href="/admin/charter-availability"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-50"
                              >
                                Haftayı Aç
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Recent Inquiries
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Son talepler
                </h2>
              </div>

              <Link
                href="/admin/inquiries"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Tümünü Aç
              </Link>
            </div>

            <div className="mt-6">
              {loading ? (
                <p className="text-sm text-slate-500">Yükleniyor...</p>
              ) : recentInquiries.length === 0 ? (
                <p className="text-sm text-slate-500">Henüz inquiry yok.</p>
              ) : (
                <div className="space-y-4">
                  {recentInquiries.map((item) => (
                    <article
                      key={item.id}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-semibold text-slate-950">
                              {item.fullName}
                            </h3>

                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ring-1 ${getInquiryTypeClasses(
                                item.type
                              )}`}
                            >
                              {item.type}
                            </span>

                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] ring-1 ${getInquiryStatusClasses(
                                item.status
                              )}`}
                            >
                              {item.status}
                            </span>
                          </div>

                          <div className="mt-2 flex flex-wrap gap-2">
                            <MiniPill
                              text={`Score ${item.leadScore || 0}`}
                              strong={(item.leadScore || 0) >= 70}
                            />
                            <MiniPill
                              text={`€${Number(
                                item.estimatedValue || 0
                              ).toLocaleString("tr-TR")}`}
                            />
                            <MiniPill text={formatDateTime(item.createdAt)} />
                          </div>
                        </div>

                        <Link
                          href="/admin/inquiries"
                          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                        >
                          Aç
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                  Recent Admin Logs
                </p>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Son sistem hareketleri
                </h2>
              </div>

              <Link
                href="/admin/logs"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Loglar
              </Link>
            </div>

            <div className="mt-6">
              {loading ? (
                <p className="text-sm text-slate-500">Yükleniyor...</p>
              ) : recentLogs.length === 0 ? (
                <p className="text-sm text-slate-500">Henüz log kaydı yok.</p>
              ) : (
                <div className="space-y-4">
                  {recentLogs.map((log) => (
                    <article
                      key={log.id}
                      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4"
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex rounded-full bg-slate-950 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                          {log.action}
                        </span>
                        <span className="inline-flex rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                          {log.targetType}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1 text-sm text-slate-600">
                        <div className="break-all">Target: {log.targetId}</div>
                        <div>{formatDateTime(log.createdAt)}</div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                System Modules
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                Hızlı yönetim erişimi
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            <ModuleLink
              href="/admin"
              title="Certificate Admin"
              text="Sertifika operasyonu"
            />
            <ModuleLink
              href="/admin/charter"
              title="Charter Boats"
              text="Tekne ve fiyat yönetimi"
            />
            <ModuleLink
              href="/admin/charter-availability"
              title="Availability"
              text="Hafta ve müsaitlik"
            />
            <ModuleLink
              href="/admin/inquiries"
              title="Inquiries CRM"
              text="Lead, kanban ve teklif"
            />
            <ModuleLink
              href="/admin/logs"
              title="Admin Logs"
              text="İşlem kayıtları"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: string;
  sublabel?: string;
}) {
  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </div>
      <div className="mt-2 text-2xl font-semibold text-slate-950">{value}</div>
      {sublabel ? (
        <div className="mt-2 text-sm text-slate-500">{sublabel}</div>
      ) : null}
    </div>
  );
}

function QuickLinkCard({
  title,
  text,
  href,
  cta,
}: {
  title: string;
  text: string;
  href: string;
  cta: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="text-lg font-semibold text-slate-950">{title}</div>
      <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>

      <div className="mt-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-slate-950">{cta}</span>
        <span className="text-lg text-slate-400 transition group-hover:translate-x-1">
          →
        </span>
      </div>
    </Link>
  );
}

function ModuleLink({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 transition hover:bg-white"
    >
      <div className="text-base font-semibold text-slate-950">{title}</div>
      <div className="mt-2 text-sm leading-7 text-slate-600">{text}</div>
    </Link>
  );
}

function MiniPill({
  text,
  strong = false,
}: {
  text: string;
  strong?: boolean;
}) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        strong
          ? "bg-rose-100 text-rose-700"
          : "bg-white text-slate-600 ring-1 ring-slate-200"
      }`}
    >
      {text}
    </span>
  );
}