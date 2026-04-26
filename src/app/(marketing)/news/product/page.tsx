"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NewsSidebar, NewsMobileBar } from "@/components/sections/NewsSidebar";
import { Calendar, ArrowUpRight, Brain, Shield, Eye, FileText, Layers, BarChart3, Cloud, Server, Cpu, Database } from "lucide-react";

/* Map badge label → chip color class */
function badgeChip(badge: string) {
  const b = badge.toLowerCase();
  if (b.includes("flagship"))       return "chip chip-purple";
  if (b.includes("launch"))         return "chip chip-green";
  if (b.includes("feature"))        return "chip chip-blue";
  if (b.includes("security"))       return "chip chip-red";
  if (b.includes("infrastructure")) return "chip chip-teal";
  if (b.includes("coming"))         return "chip chip-amber";
  return "chip";
}

const toc = [
  { id: "osmium",         label: "Osmium AI 2.0",      icon: Brain },
  { id: "natraj",         label: "Natraj AR",           icon: Eye },
  { id: "aegis",          label: "Aegis Auth",          icon: Shield },
  { id: "nsl",            label: "NSL Billing",         icon: BarChart3 },
  { id: "lmlens",         label: "LM Lens",             icon: FileText },
  { id: "vajra",          label: "Vajra GPU Cloud",     icon: Cloud },
  { id: "kriya",          label: "Kriya",               icon: Layers },
  { id: "crm",            label: "Vyom",               icon: Database },
  { id: "agentic-sde",    label: "Vega",                icon: Cpu },
  { id: "unified-storage",label: "Yugm",                icon: Server },
];

const articles = [
  {
    id: "osmium", badge: "Flagship Launch", date: "Jan 15, 2025", status: "Launched",
    title: "Osmium AI 2.0: The Future of AI-Powered Education",
    desc: "Osmium AI 2.0 isn't just another EdTech upgrade — it's a rethink. Where others stop at academics, Osmium AI goes deeper: it mentors, predicts, and monitors student mental health. Deployed with 276 students at Rai University, Ahmedabad.",
    callout: { label: "Historic Achievement", text: "Outperformed leading global LLMs in benchmarked educational content generation (August 15, 2025)." },
    author: "Varun Yadav, Co-Founder & Director", readTime: "12 min read",
    tags: ["AI", "EdTech", "Education"],
  },
  {
    id: "natraj", badge: "Feature Update", date: "Jan 10, 2025", status: "Launched",
    title: "Natraj: AR + AI Anatomy Learning Platform",
    desc: "Revolutionizing anatomy education with real-time AR body scans, interactive 3D models, and an AI tutor that transforms traditional medical learning into an engaging, accessible, and clinically accurate experience.",
    metrics: [
      { label: "Knowledge retention", value: "+40%" }, { label: "Practical understanding", value: "+55%" },
      { label: "Engagement increase", value: "+60%" }, { label: "Target", value: "Mobile-first" },
    ],
    author: "Navchetna EdTech Team", readTime: "10 min read",
    tags: ["AR", "AI", "EdTech"],
  },
  {
    id: "aegis", badge: "Security", date: "Jan 15, 2026", status: "Launched",
    title: "Aegis Auth v3.0: The New Standard for Digital Identity",
    desc: "In an era of fragmented user bases and escalating security threats, Aegis Auth v3.0 emerges as the definitive solution for enterprise identity. Built on a memory-safe Rust architecture and engineered for FIPS 140-2 compliance.",
    callout: { label: "Benchmark Breakthrough", text: "<5ms Token Validation Latency in production — a new global standard for high-velocity authentication." },
    metrics: [
      { label: "Token Latency", value: "<5ms" }, { label: "Architecture", value: "Rust" },
      { label: "Uptime SLA", value: "99.99%" }, { label: "Compliance", value: "FIPS 140-2" },
    ],
    author: "Varun Yadav, Co-Founder & Director", readTime: "12 min read",
    tags: ["Security", "Auth", "Rust"],
  },
  {
    id: "nsl", badge: "Product Launch", date: "Jan 20, 2025", status: "Launched",
    title: "NSL: The Silent Engine of Financial Truth",
    desc: "Smart Billing, Automated Invoicing, Zero Manual Effort. NSL is an intelligent billing and ledger management system that tracks usage and billing data silently throughout the month — acting as a centralized brain for all user transactions.",
    metrics: [
      { label: "Billing", value: "Automated" }, { label: "Intervention", value: "Zero manual" },
      { label: "Accuracy", value: "Guaranteed" }, { label: "Scale", value: "10 → 10,000" },
    ],
    author: "Ayushmaan Soni, Founder & CEO", readTime: "8 min read",
    tags: ["Billing", "Finance", "ERP"],
  },
  {
    id: "lmlens", badge: "Product Launch", date: "Jan 15, 2025", status: "Launched",
    title: "LM Lens: Transforming Chaos into Clean Data",
    desc: "Stop typing data manually. LM Lens automatically converts unstructured documents into clean, actionable data using advanced OCR, Computer Vision, and LLM intelligence — adapting dynamically to any document format without rigid templates.",
    author: "Navchetna LM Lens Team", readTime: "10 min read",
    tags: ["OCR", "AI", "Data"],
  },
  {
    id: "vajra", badge: "Infrastructure", date: "Mar 1, 2025", status: "Launched",
    title: "Vajra: The AWS Lambda for AI",
    desc: "A sovereign serverless GPU cloud designed to solve the industry's utilization crisis. Sub-500ms cold starts for 70B+ LLMs with 'Frozen Core + Hot Adapter' architecture, supporting 50-100 concurrent tenants on a single A100 GPU.",
    metrics: [
      { label: "Cold Start", value: "<500ms" }, { label: "Cost Reduction", value: "100x" },
      { label: "Concurrency", value: "50-100" }, { label: "GPU Target", value: "A100" },
    ],
    author: "Navchetna Infrastructure Team", readTime: "12 min read",
    tags: ["GPU", "Cloud", "Infrastructure"],
  },
  {
    id: "kriya", badge: "Coming Soon", date: "Q3 2025", status: "Coming Soon",
    title: "Kriya: Build Anything from Plain English",
    desc: "A platform where you describe what you want in plain English, and it actually builds it — code, websites, APIs, marketing campaigns. It automates the entire process from idea to deployment with careful guardrails and human oversight.",
    author: "Suman Yadav, Co-Founder & HOD", readTime: "12 min read",
    tags: ["AI", "Builder", "Automation"],
  },
  {
    id: "crm", badge: "Coming Soon", date: "Q4 2025", status: "Coming Soon",
    title: "Vyom: Intelligent Customer Relationship Management",
    desc: "Advanced Customer Relationship Management tailored for seamless interactions and data-driven insights, combining AI-powered analytics with intuitive workflows.",
    author: "Navchetna Product Team", readTime: "8 min read",
    tags: ["CRM", "Enterprise", "AI"],
  },
  {
    id: "agentic-sde", badge: "Coming Soon", date: "Q4 2025", status: "Coming Soon",
    title: "Vega: Autonomous Software Engineering",
    desc: "Next-generation software engineering platform driven by agentic AI capabilities. Collaborates with development teams to write, review, test, and deploy code autonomously.",
    author: "Navchetna Engineering Team", readTime: "10 min read",
    tags: ["AI", "SDE", "Engineering"],
  },
  {
    id: "unified-storage", badge: "Coming Soon", date: "2026", status: "Coming Soon",
    title: "Yugm: Synced Storage with Version Control",
    desc: "A unified synced storage platform with inbuilt version control for seamless asset management across teams, projects, and infrastructure.",
    author: "Navchetna Infrastructure Team", readTime: "8 min read",
    tags: ["Storage", "Infrastructure", "DevOps"],
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
                    className="text-[clamp(1.5rem,2.8vw,2rem)] text-black mb-3"
                    style={{ fontFamily: "var(--font-waldenburg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                  >
                    Product <span className="serif-italic">Launches.</span>
                  </h1>
                  <p className="text-[0.875rem] text-black/45 max-w-lg leading-[1.7]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Stay updated with the latest product releases, feature announcements, and technical insights from our development team.
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-black/[0.06]">
                {articles.map((a) => (
                  <ScrollReveal key={a.id}>
                    <article id={a.id} className="py-10">

                      <div className="mb-4 flex items-center gap-3">
                        <span className={badgeChip(a.badge)}>{a.badge}</span>
                        {a.status === "Coming Soon" && (
                          <span className="text-[10px] font-semibold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200/60 px-2 py-0.5 rounded-sm">Upcoming</span>
                        )}
                        <span className="text-[12.5px] text-black/35 flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                          <Calendar className="size-3.5" />
                          {a.date}
                        </span>
                      </div>

                      <h2
                        className="text-[1.15rem] md:text-[1.3rem] leading-[1.25] text-black mb-8"
                        style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}
                      >
                        {a.title}
                      </h2>

                      <div className="space-y-3 text-[0.875rem] leading-[1.7] text-black/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <p>{a.desc}</p>

                        {a.callout && (
                          <div className="border border-black/[0.06] rounded-xl px-5 py-4 my-2">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/35 mb-1.5">{a.callout.label}</p>
                            <p className="text-[0.88rem] text-black/70 leading-[1.7]">{a.callout.text}</p>
                          </div>
                        )}

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
                        <Link
                          href={`/news/product/${a.id}`}
                          className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-black hover:text-black/70 transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Read full article
                          <ArrowUpRight className="size-3.5" />
                        </Link>
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
