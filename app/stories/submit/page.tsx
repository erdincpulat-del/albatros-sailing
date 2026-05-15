"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function SubmitStoryPage() {
  const [fullName, setFullName] = useState("");
  const [program, setProgram] = useState("");
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);

    const { error } = await supabase.from("student_stories").insert({
      full_name: fullName,
      program,
      title,
      story,
      status: "REVIEW",
    });

    setLoading(false);

    if (error) {
      setError("Gönderim sırasında hata oluştu. Lütfen tekrar deneyin.");
      return;
    }

    setSuccess(true);
    setFullName("");
    setProgram("");
    setTitle("");
    setStory("");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] px-6 py-28 text-white">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:44px_44px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-5xl">
        <Link
          href="/stories"
          className="text-sm font-bold text-cyan-300 transition hover:text-white"
        >
          ← Hikâyelere Dön
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.35em] text-cyan-300">
              Student Story Submission
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              Denizde yaşadığın{" "}
              <span className="text-cyan-300">hikâyeyi paylaş.</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Eğitim sonunda kazandığın deneyimi, güveni ve dönüşümü bizimle
              paylaş. Hikâyen admin onayından sonra yayına alınır.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur"
          >
            <div className="grid gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">
                  Ad Soyad
                </span>
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Örn: Ahmet K."
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">
                  Eğitim Programı
                </span>
                <input
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Örn: Offshore Training"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">
                  Hikâye Başlığı
                </span>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Örn: İlk gece vardiyamı burada tuttum."
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-bold text-slate-200">
                  Hikâyen
                </span>
                <textarea
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  required
                  rows={7}
                  className="resize-none rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300"
                  placeholder="Denizde ne öğrendin, hangi korkunu aştın, eğitim sana ne kattı?"
                />
              </label>

              {error && (
                <p className="rounded-2xl border border-red-400/30 bg-red-400/10 p-4 text-sm font-bold text-red-200">
                  {error}
                </p>
              )}

              {success && (
                <p className="rounded-2xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm font-bold text-emerald-200">
                  Hikâyen alındı. İnceleme sonrası hikâyeler sayfasında yayınlanabilir.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="rounded-full bg-cyan-300 px-8 py-4 text-sm font-black text-slate-950 shadow-[0_0_40px_rgba(34,211,238,0.35)] transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Gönderiliyor..." : "Hikâyemi Gönder"}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
