"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type CertificateStatus = "PENDING" | "ACTIVE" | "REVOKED" | "EXPIRED";

type CertificateItem = {
  id: string;
  certificateId: string;
  fullName: string;
  program: string;
  qualificationLevel: string | null;
  issueDate: string | null;
  seaMiles: number | null;
  photoUrl: string | null;
  cardFrontUrl: string | null;
  cardBackUrl: string | null;
  verificationHash: string | null;
  status: CertificateStatus;
  createdAt: string;
  updatedAt: string;
};

type ApiListResponse = {
  success: boolean;
  items?: CertificateItem[];
  total?: number;
  error?: string;
};

type ApiCreateResponse = {
  success: boolean;
  certificateId?: string;
  id?: string;
  certificate?: CertificateItem;
  error?: string;
};

const PROGRAMS = [
  "Basic Sailing",
  "Coastal Skipper",
  "Offshore Skipper",
  "Offshore Yacht Course",
  "Yachtmaster",
];

export default function CertificatesPage() {
  const [items, setItems] = useState<CertificateItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [message, setMessage] = useState("");

  const [fullName, setFullName] = useState("");
  const [program, setProgram] = useState(PROGRAMS[0]);
  const [qualificationLevel, setQualificationLevel] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [seaMiles, setSeaMiles] = useState("");
  const [instructorId, setInstructorId] = useState("");

  async function loadCertificates() {
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/certificates", {
        cache: "no-store",
      });

      const data: ApiListResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Sertifikalar alınamadı.");
      }

      setItems(data.items || []);
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Listeleme hatası.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCertificates();
  }, []);

  const activeCount = useMemo(
    () => items.filter((item) => item.status === "ACTIVE").length,
    [items]
  );

  const pendingCount = useMemo(
    () => items.filter((item) => item.status === "PENDING").length,
    [items]
  );

  async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");

    if (!fullName.trim()) {
      setMessage("Öğrenci adı zorunlu.");
      return;
    }

    setCreating(true);

    try {
      const res = await fetch("/api/certificates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: fullName.trim(),
          program,
          qualificationLevel: qualificationLevel.trim() || program,
          issueDate: issueDate || null,
          seaMiles: seaMiles ? Number(seaMiles) : null,
          instructorId: instructorId.trim() || null,
        }),
      });

      const data: ApiCreateResponse = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Sertifika oluşturulamadı.");
      }

      setFullName("");
      setQualificationLevel("");
      setIssueDate("");
      setSeaMiles("");
      setInstructorId("");
      setMessage(`Sertifika oluşturuldu: ${data.certificateId || "Kayıt başarılı"}`);

      await loadCertificates();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Oluşturma hatası.");
    } finally {
      setCreating(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#07111f] px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              Albatros Sailing Admin
            </p>
            <h1 className="mt-3 text-4xl font-black tracking-tight">
              Certificates Panel
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Sertifika oluşturma, listeleme ve doğrulama sayfasına geçiş paneli.
            </p>
          </div>

          <button
            type="button"
            onClick={loadCertificates}
            className="rounded-full border border-cyan-300/40 px-5 py-3 text-sm font-bold text-cyan-100 hover:bg-cyan-300/10"
          >
            Listeyi Yenile
          </button>
        </div>

        <section className="mb-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-slate-400">Toplam Sertifika</p>
            <p className="mt-2 text-4xl font-black">{items.length}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-slate-400">Aktif</p>
            <p className="mt-2 text-4xl font-black text-emerald-300">
              {activeCount}
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-sm text-slate-400">Bekleyen</p>
            <p className="mt-2 text-4xl font-black text-amber-300">
              {pendingCount}
            </p>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[420px_1fr]">
          <form
            onSubmit={handleCreate}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl"
          >
            <h2 className="text-2xl font-black">Yeni Sertifika</h2>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="text-sm font-bold text-slate-300">
                  Ad Soyad
                </span>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300"
                  placeholder="Örn. Erdinç Pulat"
                />
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-300">
                  Program
                </span>
                <select
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300"
                >
                  {PROGRAMS.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-sm font-bold text-slate-300">
                  Qualification Level
                </span>
                <input
                  value={qualificationLevel}
                  onChange={(e) => setQualificationLevel(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300"
                  placeholder="Örn. Offshore Skipper"
                />
              </label>

              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-bold text-slate-300">
                    Issue Date
                  </span>
                  <input
                    type="date"
                    value={issueDate}
                    onChange={(e) => setIssueDate(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-bold text-slate-300">
                    Sea Miles
                  </span>
                  <input
                    type="number"
                    value={seaMiles}
                    onChange={(e) => setSeaMiles(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300"
                    placeholder="320"
                  />
                </label>
              </div>

              <label className="block">
                <span className="text-sm font-bold text-slate-300">
                  Instructor ID
                </span>
                <input
                  value={instructorId}
                  onChange={(e) => setInstructorId(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 outline-none focus:border-cyan-300"
                  placeholder="Opsiyonel"
                />
              </label>

              <button
                type="submit"
                disabled={creating}
                className="w-full rounded-2xl bg-cyan-300 px-5 py-4 font-black text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {creating ? "Oluşturuluyor..." : "Sertifika Oluştur"}
              </button>

              {message ? (
                <p className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm text-cyan-100">
                  {message}
                </p>
              ) : null}
            </div>
          </form>

          <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-black">Sertifika Kayıtları</h2>

            <div className="mt-6 overflow-x-auto">
              {loading ? (
                <p className="text-slate-300">Yükleniyor...</p>
              ) : items.length === 0 ? (
                <p className="text-slate-300">Henüz kayıt yok.</p>
              ) : (
                <table className="w-full min-w-[760px] border-separate border-spacing-y-3 text-left text-sm">
                  <thead className="text-xs uppercase tracking-[0.2em] text-slate-400">
                    <tr>
                      <th className="px-4">ID</th>
                      <th className="px-4">Ad Soyad</th>
                      <th className="px-4">Program</th>
                      <th className="px-4">Status</th>
                      <th className="px-4">Verify</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.id} className="bg-black/25">
                        <td className="rounded-l-2xl px-4 py-4 font-bold text-cyan-200">
                          {item.certificateId}
                        </td>
                        <td className="px-4 py-4">{item.fullName}</td>
                        <td className="px-4 py-4 text-slate-300">
                          {item.program}
                        </td>
                        <td className="px-4 py-4">
                          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold">
                            {item.status}
                          </span>
                        </td>
                        <td className="rounded-r-2xl px-4 py-4">
                          <Link
                            href={`/verify/${item.certificateId}`}
                            className="font-bold text-cyan-300 hover:text-cyan-100"
                          >
                            Aç
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}