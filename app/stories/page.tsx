"use client";

import Link from "next/link";
import Tilt from "react-parallax-tilt";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const stories = [
  {
    slug: "ilk-gece-vardiyasi",
    name: "Ahmet K.",
    program: "Offshore Training",
    title: "İlk gece vardiyamı burada tuttum.",
    text: "Gece seyri benim için önce korkutucuydu. AIS ekranı, karanlık, trafik ve rüzgar aynı anda geldiğinde sakin kalmayı bu eğitimde öğrendim.",
    tag: "Gece Seyri",
    journal: "Aegean Sea — 02:40 AM",
    condition: "Wind 22 Knots",
    image: "/images/stories/night-watch.jpg",
    verified: true,
    video: true,
  },
  {
    slug: "karar-verme-egitimi",
    name: "Elif D.",
    program: "Coastal Skipper",
    title: "Tekne kullanmayı değil, karar vermeyi öğrendim.",
    text: "Albatros Sailing’de eğitim sadece manevra değil; sorumluluk, ekip yönetimi ve doğru zamanda doğru karar alma üzerine kurulu.",
    tag: "Karar Yönetimi",
    journal: "Training Briefing — Bodrum",
    condition: "Route Planning",
    image: "/images/stories/briefing.jpg",
    verified: true,
    video: false,
  },
  {
    slug: "marina-manevrasi",
    name: "Murat S.",
    program: "Marina Maneuver",
    title: "Marina manevrası artık panik değil.",
    text: "Rüzgar, kıçtan kara, aborda ve dar alan manevralarında neye bakmam gerektiğini sistemli şekilde öğrendim.",
    tag: "Marina Manevrası",
    journal: "Marina Approach",
    condition: "Crosswind Practice",
    image: "/images/stories/marina.jpg",
    verified: true,
    video: false,
  },
  {
    slug: "denizde-ozguven",
    name: "Emre T.",
    program: "Coastal & Marina Training",
    title: "Sadece belge değil, denizde özgüven kazandım.",
    text: "Belgelerimi aldım ama profesyonel hayatta dümen başında ne yapacağımı, bir marinaya nasıl yanaşacağımı, bir koyda demirde ya da kıçtan kara nasıl güvenli manevra yapacağımı gerçekten burada öğrendim.",
    tag: "Marina & Anchorage",
    journal: "Anchorage Training",
    condition: "Stern-to & Mooring",
    image: "/images/stories/anchorage.jpg",
    verified: true,
    video: true,
  },
];

type StudentStory = {
  id: string;
  full_name: string;
  program: string | null;
  title: string;
  story: string;
  status: string;
  created_at: string;
};

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function StoriesPage() {
  const [studentStories, setStudentStories] = useState<StudentStory[]>([]);

  useEffect(() => {
    async function loadStories() {
      const { data, error } = await supabase
        .from("student_stories")
        .select("*")
        .eq("status", "PUBLISHED")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setStudentStories(data);
      }
    }

    loadStories();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020817] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,8,23,0.2),#020817_90%)]" />
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.6)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(rgba(255,255,255,.9)_1px,transparent_1px)] [background-size:3px_3px]" />
        <div className="absolute left-[10%] top-[20%] h-72 w-72 animate-pulse rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-[10%] right-[10%] h-96 w-96 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <video
            className="absolute inset-0 h-full w-full scale-110 object-cover object-center opacity-[0.13] blur-[1px] animate-[slowZoom_22s_ease-in-out_infinite_alternate]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="/videos/stories/night-watch-hero.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-[#020817] via-[#020817]/88 to-[#020817]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_30%)]" />
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-32 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-cyan-300">
              Albatros Sailing Stories
            </p>

            <h1 className="max-w-4xl text-6xl font-black leading-[0.95] md:text-8xl">
              Denizde geçen{" "}
              <span className="text-cyan-300">gerçek hikâyeler.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              Her eğitim sonunda sadece bir sertifika değil; karar verme,
              sorumluluk alma ve denizde güven kazanma hikâyesi oluşur.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/stories/submit"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-black text-white hover:bg-white/20 transition"
              >
                Kendi Hikâyeni Başlat
              </Link>

              <Link
                href="/programs"
                className="rounded-full border border-white/20 bg-white/[0.04] px-8 py-4 text-sm font-black text-white/90 backdrop-blur transition hover:border-cyan-300 hover:text-cyan-300"
              >
                Programları İncele
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 rounded-full bg-cyan-300/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur">
              <div className="relative h-[500px]">
                <div
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/images/stories/hero-watch.jpg')",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/25 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_35%)]" />

                <div className="absolute left-6 top-6 rounded-full border border-cyan-300/30 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] text-cyan-200 backdrop-blur">
                  Offshore Atmosphere
                </div>

                <Link
                  href="/stories/ilk-gece-vardiyasi"
                  className="absolute bottom-8 left-8 flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-6 py-3 text-sm font-black text-cyan-100 backdrop-blur transition hover:scale-105 hover:bg-cyan-300 hover:text-slate-950"
                >
                  ▶ Watch Experience
                </Link>

                <div className="absolute bottom-8 right-8 rounded-2xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-cyan-300">
                    Sea Journal
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    Aegean Sea — Night Watch
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Wind 24 Knots · Offshore Training
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-6 py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              Student Experience
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-6xl">
              Sertifika değil, deniz özgüveni.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stories.map((story) => (
              <Tilt
                key={story.slug}
                glareEnable
                glareMaxOpacity={0.12}
                scale={1.02}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                transitionSpeed={1800}
              >
                <article className="group relative h-[580px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.07]">
                  <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                  </div>

                  <div
                    className="relative h-56 border-b border-white/10 bg-[#071426] bg-contain bg-top bg-no-repeat transition duration-700 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url(${story.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/25 to-transparent" />

                    <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-black/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur">
                      {story.condition}
                    </div>

                    {story.video && (
                      <Link
                        href={`/stories/${story.slug}`}
                        className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-[11px] font-bold text-cyan-100 backdrop-blur transition hover:scale-105 hover:bg-cyan-300 hover:text-slate-950"
                      >
                        ▶ Watch
                      </Link>
                    )}
                  </div>

                  <div className="relative z-10 flex h-[356px] flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold text-cyan-300">
                        {story.tag}
                      </span>

                      {story.verified && (
                        <span className="rounded-full border border-emerald-400/30 px-3 py-1 text-[11px] font-bold text-emerald-300">
                          Verified
                        </span>
                      )}
                    </div>

                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                      {story.journal}
                    </p>

                    <h3 className="text-lg font-black leading-tight">
                      {story.title}
                    </h3>

                    <p className="mt-4 line-clamp-6 text-[13px] leading-6 text-slate-300">
                      “{story.text}”
                    </p>

                    <div className="mt-auto border-t border-white/10 pt-5">
                      <p className="font-bold text-white">{story.name}</p>
                      <p className="text-sm text-slate-400">{story.program}</p>

                      <Link
                        href={`/stories/${story.slug}`}
                        className="mt-3 inline-block text-xs font-black text-cyan-300 transition hover:text-white"
                      >
                        Hikâyeyi Oku →
                      </Link>
                    </div>
                  </div>
                </article>
              </Tilt>
            ))}

            {studentStories.map((story) => (
              <Tilt
                key={story.id}
                glareEnable
                glareMaxOpacity={0.12}
                scale={1.02}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                transitionSpeed={1800}
              >
                <article className="group relative h-[580px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur transition-all duration-700 hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-white/[0.07]">
                  <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute -left-20 top-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
                    <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                  </div>

                  <div className="relative h-56 border-b border-white/10 bg-[#071426]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_35%),linear-gradient(to_bottom,rgba(2,8,23,0.15),#020817)]" />
                    <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:34px_34px]" />

                    <div className="absolute left-4 top-4 rounded-full border border-cyan-300/20 bg-black/40 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur">
                      Student Story
                    </div>

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                        Albatros Sailing Experience
                      </p>
                      <p className="mt-2 text-sm font-bold text-white/90">
                        Shared by student
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-[356px] flex-col p-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-cyan-300/10 px-3 py-1.5 text-[11px] font-bold text-cyan-300">
                        Student Experience
                      </span>

                      <span className="rounded-full border border-cyan-300/30 px-3 py-1 text-[11px] font-bold text-cyan-200">
                        Published
                      </span>
                    </div>

                    <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.25em] text-slate-400">
                      Student Story
                    </p>

                    <h3 className="text-lg font-black leading-tight">
                      {story.title}
                    </h3>

                    <p className="mt-4 line-clamp-8 text-[13px] leading-6 text-slate-300">
                      “{story.story}”
                    </p>

                    <div className="mt-auto border-t border-white/10 pt-5">
                      <p className="font-bold text-white">{story.full_name}</p>
                      <p className="text-sm text-slate-400">
                        {story.program || "Student Experience"}
                      </p>
                    </div>
                  </div>
                </article>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-white/10 px-6 py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-300">
              Why Stories Matter
            </p>

            <h2 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
              İnsanlar kursu değil, dönüşümü hatırlar.
            </h2>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-10 backdrop-blur">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />

            <p className="relative text-lg leading-9 text-slate-300">
              Albatros Sailing’de her öğrenci denizde bir eşiği geçer. Kimi ilk
              gece vardiyasını tutar, kimi ilk defa yoğun trafikte sakin kalır,
              kimi de tekneyi değil ekibi yönetmeyi öğrenir.
            </p>

            <p className="relative mt-8 text-2xl font-black text-cyan-300">
              Gerçek kaptanlık, denizde verilen kararla başlar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}