"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NewsSidebar, NewsMobileBar } from "@/components/sections/NewsSidebar";
import { Calendar, Brain, Shield, Eye, FileText, Layers, BarChart3, ArrowUpRight } from "lucide-react";

const toc = [
  { id: "osmium",  label: "Osmium 2.0",       icon: Brain    },
  { id: "aegis",   label: "Aegis Auth v3.0",   icon: Shield   },
  { id: "natraj",  label: "Natraj AR",          icon: Eye      },
  { id: "lmlens",  label: "LM Lens",            icon: FileText },
  { id: "kriya",   label: "Kriya ERP",          icon: Layers   },
  { id: "nsl",     label: "NSL Billing",        icon: BarChart3},
];

const articles = [
  {
    id: "osmium",
    badge: "Featured Launch",
    date: "Jan 15, 2025",
    title: "Osmium 2.0: The Future of AI-Powered Education",
    paras: [
      "Osmium 2.0 isn't just another EdTech upgrade — it's a rethink. Where others stop at academics, Osmium goes deeper: it mentors, predicts, and monitors student mental health. Deployed with 276 students at Rai University, Ahmedabad.",
    ],
    callout: {
      label: "Historic Achievement",
      text: "Outperformed leading global LLMs in benchmarked educational content generation (August 15, 2025).",
    },
    paras2: [
      "Built with Adaptive Mentorship AI, Predictive Exam Intelligence, and Mental Health & Wellness Integration — making it not just an educational tool, but an ally, mentor, and guardian for students.",
    ],
    author: "Varun Yadav, Co-Founder & Director",
    readTime: "12 min read",
    tags: ["AI", "EdTech", "Education"],
  },
  {
    id: "aegis",
    badge: "Security",
    date: "Jan 15, 2026",
    title: "Aegis Auth v3.0: The New Standard for Digital Identity",
    paras: [
      "In an era of fragmented user bases and escalating security threats, Aegis Auth v3.0 emerges as the definitive solution for enterprise identity. Built on a memory-safe Rust architecture and engineered for FIPS 140-2 compliance, Aegis delivers sub-millisecond validation without compromising security.",
    ],
    callout: {
      label: "Benchmark Breakthrough",
      text: "<5ms Token Validation Latency in production — a new global standard for high-velocity authentication.",
    },
    metrics: [
      { label: "Token Latency", value: "<5ms" },
      { label: "Architecture",  value: "Rust" },
      { label: "Uptime SLA",    value: "99.99%" },
      { label: "Compliance",    value: "FIPS 140-2" },
    ],
    author: "Varun Yadav, Co-Founder & Director",
    readTime: "12 min read",
    tags: ["Security", "Auth", "Rust"],
  },
  {
    id: "natraj",
    badge: "Feature Update",
    date: "Jan 10, 2025",
    title: "Natraj: AR + AI Anatomy Learning Platform",
    paras: [
      "Revolutionizing anatomy education with real-time AR body scans, interactive 3D models, and an AI tutor that transforms traditional medical learning into an engaging, accessible, and clinically accurate experience.",
    ],
    metrics: [
      { label: "Knowledge retention",     value: "+40%" },
      { label: "Practical understanding", value: "+55%" },
      { label: "Engagement increase",     value: "+60%" },
      { label: "Target",                  value: "Mobile-first" },
    ],
    author: "Navchetna EdTech Team",
    readTime: "10 min read",
    tags: ["AR", "AI", "EdTech"],
  },
  {
    id: "lmlens",
    badge: "Product Launch",
    date: "Jan 15, 2025",
    title: "LM Lens: Transforming Chaos into Clean Data",
    paras: [
      "Stop typing data manually. LM Lens automatically converts unstructured documents into clean, actionable data using advanced OCR, Computer Vision, and LLM intelligence — unlike traditional OCR tools, it adapts dynamically to any document format without requiring rigid templates.",
      "90% reduction in manual data entry · 10x faster processing · 99% accuracy across millions of files.",
    ],
    author: "Navchetna LMlens Team",
    readTime: "10 min read",
    tags: ["OCR", "AI", "Data"],
  },
  {
    id: "kriya",
    badge: "Product Launch",
    date: "Jan 10, 2025",
    title: "Kriya: AI-Integrated ERP & Project Management",
    paras: [
      "Kriya isn't just another ERP or project management tool — it predicts workflow bottlenecks, optimizes team performance, and integrates AI-driven insights across your entire organization. Where traditional platforms stop at automation, Kriya goes further.",
    ],
    author: "Suman Yadav, Co-Founder & HOD",
    readTime: "12 min read",
    tags: ["ERP", "AI", "Management"],
  },
  {
    id: "nsl",
    badge: "Product Launch",
    date: "Jan 20, 2025",
    title: "NSL: The Silent Engine of Financial Truth",
    paras: [
      "Smart Billing, Automated Invoicing, Zero Manual Effort. NSL is an intelligent billing and ledger management system that tracks usage and billing data silently throughout the month — acting as a centralized brain for all user transactions.",
    ],
    metrics: [
      { label: "Billing",     value: "Automated" },
      { label: "Intervention",value: "Zero manual" },
      { label: "Accuracy",    value: "Guaranteed" },
      { label: "Scale",       value: "10 → 10,000" },
    ],
    author: "Ayushmaan Soni, Founder & CEO",
    readTime: "8 min read",
    tags: ["Billing", "Finance", "ERP"],
  },
];

export default function ProductNewsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="flex max-w-[100rem] mx-auto">

        <NewsSidebar activeHref="/news/product" />

        <main className="flex-1 min-w-0 pb-20">
          <NewsMobileBar activeHref="/news/product" />

          <div className="flex flex-col xl:flex-row xl:gap-12 px-6 sm:px-10 lg:px-14 pt-10 pb-4">

            {/* ── Article feed ── */}
            <div className="flex-1 max-w-3xl">
              <ScrollReveal>
                <div className="mb-10 pb-8 border-b border-black/[0.06]">
                  <h1
                    className="text-[clamp(1.85rem,3.5vw,2.5rem)] text-black mb-3"
                    style={{ fontFamily: "var(--font-waldenburg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                  >
                    Product <span className="serif-italic">Launches.</span>
                  </h1>
                  <p className="text-[0.9rem] text-black/45 max-w-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Stay updated with the latest product releases, feature announcements, and technical insights from our development team.
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-black/[0.06]">
                {articles.map((a) => (
                  <ScrollReveal key={a.id}>
                    <article id={a.id} className="py-10">

                      <div className="mb-4 flex items-center gap-3">
                        <span className="chip mb-0">{a.badge}</span>
                        <span className="text-[12.5px] text-black/35 flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                          <Calendar className="size-3.5" />
                          {a.date}
                        </span>
                      </div>

                      <h2
                        className="text-[1.35rem] md:text-[1.6rem] leading-[1.2] text-black mb-5"
                        style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.022em" }}
                      >
                        {a.title}
                      </h2>

                      <div className="space-y-4 text-[0.9rem] leading-[1.75] text-black/55" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {a.paras.map((p, i) => <p key={i}>{p}</p>)}

                        {a.callout && (
                          <div className="border border-black/[0.06] rounded-xl px-5 py-4 my-2">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/35 mb-1.5">{a.callout.label}</p>
                            <p className="text-[0.88rem] text-black/50 leading-relaxed">{a.callout.text}</p>
                          </div>
                        )}

                        {/* @ts-ignore */}
                        {a.paras2?.map((p: string, i: number) => <p key={`p2-${i}`}>{p}</p>)}

                        {a.metrics && (
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-2">
                            {a.metrics.map((m) => (
                              <div key={m.label} className="border border-black/[0.06] rounded-xl p-4 text-center">
                                <p className="text-[1.1rem] font-semibold text-black mb-1" style={{ fontFamily: "var(--font-waldenburg)" }}>{m.value}</p>
                                <p className="text-[11px] text-black/40 uppercase tracking-widest">{m.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-3 pt-6 border-t border-black/[0.06]">
                        <span className="text-[12.5px] text-black/35 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {a.author} · {a.readTime}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {a.tags.map((tag) => (
                            <span key={tag} className="border border-black/[0.06] px-2.5 py-1 rounded-md text-[11px] font-medium text-black/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ── Right TOC ── */}
            <div className="hidden xl:block w-52 shrink-0">
              <div className="sticky top-28 border border-black/[0.06] rounded-xl p-5">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-black/40 mb-4">On this page</p>
                <nav className="flex flex-col gap-0.5">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center gap-2.5 px-2.5 py-2 text-[12.5px] rounded-lg text-black/50 hover:text-black hover:bg-black/[0.02] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <item.icon className="size-3.5 opacity-50 shrink-0 group-hover:opacity-70 transition-opacity" />
                      {item.label}
                      <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-35 ml-auto transition-opacity" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
