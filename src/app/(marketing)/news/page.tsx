"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NewsSidebar, NewsMobileBar } from "@/components/sections/NewsSidebar";
import { Calendar, Coffee, Award, Shield, ArrowUpRight } from "lucide-react";

const toc = [
  { id: "founding-story",        label: "Founding Story",         icon: Coffee  },
  { id: "government-recognition",label: "Government Recognition",  icon: Award   },
  { id: "tech-independence",     label: "Tech Independence",       icon: Shield  },
];

const articles = [
  {
    id: "founding-story",
    badge: "Featured",
    date: "Jan 15, 2025",
    title: "The Navchetna Story: How five friends built a tech company from a single conversation",
    paras: [
      "On 6th September 2024, five friends — Ayushmaan, Varun, Suman, Swastik, and Dhraval — were talking about school, college, and life when they realized something: education could be so much better with the right tools. From that conversation, Navchetna Technology was born.",
      "No fancy offices, no investors, no roadmap. Just a shared vision, late nights, and a lot of determination. Today we build products like Osmium AI, Natraj, and Aegis Auth — tools designed to make learning smarter and more accessible.",
    ],
    callout: {
      label: "Product Portfolio",
      text: "Our flagship products — Osmium AI, Natraj, and Aegis Auth — span web, iOS, Android, AI/ML solutions, cybersecurity, and more.",
    },
    quote: "\"Navchetna isn't just a company. It's a story of friendship, late-night ideas, and small wins that compound.\"",
    tags: ["Innovation", "Startup", "EdTech"],
  },
  {
    id: "government-recognition",
    badge: "Recognition",
    date: "Jan 12, 2025",
    title: "Officially recognized by DPIIT, Government of India",
    paras: [
      "Navchetna Technology has been officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India — positioning us among India's most promising startups.",
      "The recognition unlocks tax exemptions, faster patent examination, and access to government schemes. More than a certificate — it's validation that the work we're doing is real.",
    ],
    tags: ["DPIIT", "Milestone", "India"],
  },
  {
    id: "tech-independence",
    badge: "Engineering",
    date: "Jan 10, 2025",
    title: "We built our own stack — security, billing, and data extraction, all in-house",
    paras: [
      "We didn't want to rent our success, so we built everything ourselves — Aegis Auth (10-layer auth system), NSL (Navchetna Smart Ledger for immutable financial records), and LM Lens (our proprietary data extraction engine for AI models).",
    ],
    codeBlocks: [
      { lang: "JavaScript", code: "npm i aegis-auth-Navchetna" },
      { lang: "Python",     code: "pip install aegis-auth-Navchetna" },
      { lang: "Rust",       code: "cargo add aegis-auth-Navchetna" },
    ],
    tags: ["Self-Reliance", "Infrastructure", "Engineering"],
  },
];

export default function NewsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="flex max-w-[100rem] mx-auto">

        <NewsSidebar activeHref="/news" />

        <main className="flex-1 min-w-0 pb-20">
          <NewsMobileBar activeHref="/news" />

          <div className="flex flex-col xl:flex-row xl:gap-12 px-6 sm:px-10 lg:px-14 pt-10 pb-4">

            {/* ── Article feed ── */}
            <div className="flex-1 max-w-3xl">
              <ScrollReveal>
                <div className="mb-10 pb-8 border-b border-black/[0.06]">
                  <h1
                    className="text-[clamp(1.85rem,3.5vw,2.5rem)] text-black mb-3"
                    style={{ fontFamily: "var(--font-waldenburg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                  >
                    Latest from <span className="serif-italic">Navchetna.</span>
                  </h1>
                  <p className="text-[0.9rem] text-black/45 max-w-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Product launches, company milestones, and our thoughts on building conscious technology.
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-black/[0.06]">
                {articles.map((a) => (
                  <ScrollReveal key={a.id}>
                    <article id={a.id} className="py-10">
                      {/* Meta */}
                      <div className="mb-4 flex items-center gap-3">
                        <span className="chip mb-0">{a.badge}</span>
                        <span className="text-[12.5px] text-black/35 flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                          <Calendar className="size-3.5" />
                          {a.date}
                        </span>
                      </div>

                      {/* Title */}
                      <h2
                        className="text-[1.35rem] md:text-[1.6rem] leading-[1.2] text-black mb-9"
                        style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.022em" }}
                      >
                        {a.title}
                      </h2>

                      {/* Body */}
                      <div className="space-y-4 text-[0.9rem] leading-[1.7] text-black/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {a.paras.map((p, i) => <p key={i}>{p}</p>)}

                        {a.callout && (
                          <div className="border border-black/[0.06] rounded-xl px-5 py-4 my-2">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/35 mb-1.5">{a.callout.label}</p>
                            <p className="text-[0.88rem] text-black/70 leading-[1.7]">{a.callout.text}</p>
                          </div>
                        )}

                        {a.quote && (
                          <blockquote className="border-l-2 border-black/10 pl-4 italic text-black/50 text-[0.9rem] leading-relaxed my-2">
                            {a.quote}
                          </blockquote>
                        )}

                        {a.codeBlocks && (
                          <div className="border border-black/[0.06] rounded-xl p-4 space-y-2 my-2">
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-black/35 mb-3">Install Aegis Auth</p>
                            {a.codeBlocks.map((cb) => (
                              <div key={cb.lang} className="flex items-center gap-3">
                                <span className="text-[11px] text-black/30 w-20 text-right shrink-0" style={{ fontFamily: "'Inter', sans-serif" }}>{cb.lang}</span>
                                <code className="flex-1 bg-black/[0.03] border border-black/[0.05] rounded-md px-3 py-1.5 text-[12px] text-black/60 font-mono">{cb.code}</code>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {a.tags.map((tag) => (
                          <span key={tag} className="border border-black/[0.06] px-2.5 py-1 rounded-md text-[11px] font-medium text-black/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                            #{tag}
                          </span>
                        ))}
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
