"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

type StoryStatus = "REVIEW" | "PUBLISHED" | "REJECTED";

type StudentStory = {
  id: string;
  full_name: string;
  program: string | null;
  title: string;
  story: string;
  image_url: string | null;
  video_url: string | null;
  status: StoryStatus;
  created_at: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const statusLabels: Record<StoryStatus, string> = {
  REVIEW: "İncelemede",
  PUBLISHED: "Yayında",
  REJECTED: "Gizli",
};

const statusClasses: Record<StoryStatus, string> = {
  REVIEW: "border-amber-300/30 bg-amber-300/10 text-amber-200",
  PUBLISHED: "border-emerald-300/30 bg-emerald-300/10 text-emerald-200",
  REJECTED: "border-red-300/30 bg-red-300/10 text-red-200",
};

export default function AdminStoriesPage() {
  const [stories, setStories] = useState<StudentStory[]>([]);
  const [loading, setLoading] = useState(true);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [filter, setFilter] = useState<"ALL" | StoryStatus>("ALL");
  const [error, setError] = useState("");

  async function loadStories() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("student_stories")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      setError("Hikâyeler alınamadı. Supabase izinlerini kontrol edin.");
      setStories([]);
      setLoading(false);
      return;
    }

    setStories((data || []) as StudentStory[]);
    setLoading(false);
  }

  async function updateStatus(id: string, status: StoryStatus) {
    setBusyId(id);
    setError("");

    const { error } = await supabase
      .from("student_stories")
      .update({ status })
      .eq("id", id);

    if (error) {
      setError("Durum güncellenemedi. Supabase update policy gerekli olabilir.");
      setBusyId(null);
      return;
    }

    setStories((current) =>
      current.map((item) => (item.id === id ? { ...item, status } : item))
    );

    setBusyId(null);
  }

  useEffect(() => {
    loadStories();
  }, []);

  const filteredStories = useMemo(() => {
    if (filter === "ALL") return stories;
    return stories.filter((story) => story.status === filter);
  }, [filter, stories]);

  const counts = useMemo(() => {
    return {
      all: stories.length,
      review: stories.filter((story) => story.status === "REVIEW").length,
      published: stories.filter((story) => story.status === "PUBLISHED").length,
      rejected: stories.filter((story) => story.status === "REJECTED").length,
    };
  }, [stories]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] px-6 py-24 text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Link
              href="/admin"
              className="text-sm font-bold text-cyan-300 transition hover:text-white"
            >
              ← Admin Merkezine Dön
            </Link>

            <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
              Student Stories Moderation
            </p>

            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">
              Hikâye yayın{" "}
              <span className="text-cyan-300">kontrol paneli.</span>
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
              Bu panel sadece öğrenci hikâyelerinin yayın durumunu yönetir.
              Sertifika, verified badge, öğrenci fotoğrafı ve ehliyet alanlarına
              dokunmaz.
            </p>
          </div>

          <button
            type="button"
            onClick={loadStories}
            className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-black text-cyan-100 backdrop-blur transition hover:bg-cyan-300 hover:text-slate-950"
          >
            Yenile
          </button>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-4">
          <button
            type="button"
            onClick={() => setFilter("ALL")}
            className={`rounded-2xl border p-5 text-left backdrop-blur transition ${
              filter === "ALL"
                ? "border-cyan-300/50 bg-cyan-300/10"
                : "border-white/10 bg-white/[0.04] hover:border-cyan-300/30"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Tümü
            </p>
            <p className="mt-3 text-3xl font-black">{counts.all}</p>
          </button>

          <button
            type="button"
            onClick={() => setFilter("REVIEW")}
            className={`rounded-2xl border p-5 text-left backdrop-blur transition ${
              filter === "REVIEW"
                ? "border-amber-300/50 bg-amber-300/10"
                : "border-white/10 bg-white/[0.04] hover:border-amber-300/30"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              İncelemede
            </p>
            <p className="mt-3 text-3xl font-black">{counts.review}</p>
          </button>

          <button
            type="button"
            onClick={() => setFilter("PUBLISHED")}
            className={`rounded-2xl border p-5 text-left backdrop-blur transition ${
              filter === "PUBLISHED"
                ? "border-emerald-300/50 bg-emerald-300/10"
                : "border-white/10 bg-white/[0.04] hover:border-emerald-300/30"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Yayında
            </p>
            <p className="mt-3 text-3xl font-black">{counts.published}</p>
          </button>

          <button
            type="button"
            onClick={() => setFilter("REJECTED")}
            className={`rounded-2xl border p-5 text-left backdrop-blur transition ${
              filter === "REJECTED"
                ? "border-red-300/50 bg-red-300/10"
                : "border-white/10 bg-white/[0.04] hover:border-red-300/30"
            }`}
          >
            <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
              Gizli
            </p>
            <p className="mt-3 text-3xl font-black">{counts.rejected}</p>
          </button>
        </div>

        {error && (
          <div className="mb-8 rounded-2xl border border-red-400/30 bg-red-400/10 p-5 text-sm font-bold text-red-200">
            {error}
          </div>
        )}

        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur">
          <div className="border-b border-white/10 px-6 py-5">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-cyan-300">
              Student Stories
            </p>
          </div>

          {loading ? (
            <div className="p-10 text-slate-300">Hikâyeler yükleniyor...</div>
          ) : filteredStories.length === 0 ? (
            <div className="p-10 text-slate-300">
              Bu filtrede hikâye bulunamadı.
            </div>
          ) : (
            <div className="divide-y divide-white/10">
              {filteredStories.map((story) => (
                <article
                  key={story.id}
                  className="grid gap-6 p-6 transition hover:bg-white/[0.03] lg:grid-cols-[1fr_220px]"
                >
                  <div>
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${
                          statusClasses[story.status] ||
                          "border-white/10 bg-white/[0.04] text-white"
                        }`}
                      >
                        {statusLabels[story.status] || story.status}
                      </span>

                      <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-bold text-slate-300">
                        {new Date(story.created_at).toLocaleDateString("tr-TR")}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black leading-tight">
                      {story.title}
                    </h2>

                    <p className="mt-2 text-sm font-bold text-cyan-300">
                      {story.full_name} · {story.program || "Student Experience"}
                    </p>

                    <p className="mt-5 max-w-4xl text-sm leading-7 text-slate-300">
                      {story.story}
                    </p>
                  </div>

                  <div className="flex flex-col justify-center gap-3">
                    <button
                      type="button"
                      disabled={busyId === story.id}
                      onClick={() => updateStatus(story.id, "PUBLISHED")}
                      className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-black text-emerald-100 transition hover:bg-emerald-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Yayınla
                    </button>

                    <button
                      type="button"
                      disabled={busyId === story.id}
                      onClick={() => updateStatus(story.id, "REVIEW")}
                      className="rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-sm font-black text-amber-100 transition hover:bg-amber-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      İncelemede Bırak
                    </button>

                    <button
                      type="button"
                      disabled={busyId === story.id}
                      onClick={() => updateStatus(story.id, "REJECTED")}
                      className="rounded-full border border-red-300/30 bg-red-300/10 px-5 py-3 text-sm font-black text-red-100 transition hover:bg-red-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Gizle
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
