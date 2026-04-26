"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const launchedProducts = [
  {
    id: "osmiumllm",
    name: "OsmiumLLM",
    tag: "Education LLM",
    category: "Education",
    image: "/assets/osmium (1).png",
    desc: "World's smartest educational LLM with 96B parameters. Outperforms GPT-5, Claude 4, and Gemini 2.5 Pro across all educational benchmarks.",
    href: "/news/product/osmiumllm",
    isFlagship: true,
  },
  {
    id: "osmium",
    name: "Osmium AI",
    tag: "EdTech Platform",
    category: "Education",
    image: "/assets/osmium-mockup.png",
    desc: "AI-Powered Learning That Feels Personal. Combines AI-guided courses, smart test analysis, and adaptive learning into one seamless experience.",
    href: "https://www.osmium.co.in/",
    isFlagship: true,
  },
  {
    id: "natraj",
    name: "Natraj",
    tag: "AR Anatomy Learning",
    category: "Education",
    image: "/assets/nataraj_mockup.png",
    desc: "AR + AI-powered anatomy learning platform designed to make human biology interactive and accessible with real-time body scanning.",
    href: "https://natraj.navchetna.tech/",
  },
  {
    id: "aegis",
    name: "Aegis Auth",
    tag: "Identity Management",
    category: "Enterprise",
    image: "/assets/aegis1.png",
    desc: "A unified identity management system providing memory-safe Rust-based authentication. Consolidation of disparate identity providers into a single canonical source.",
    href: "https://aegis.navchetna.tech/",
  },
  {
    id: "nsl",
    name: "NSL",
    tag: "Smart Ledger",
    category: "Enterprise",
    image: "/assets/nsl.png",
    desc: "Our own ledger manages transaction, bills, invoices, subscriptions, and all monitoring stuffs.",
    href: "/products",
  },
  {
    id: "lmlens",
    name: "LM Lens",
    tag: "Data Extraction",
    category: "AI & Tools",
    image: "/assets/lmlens.png",
    desc: "Intelligently extracts the texts and images efficiently and effectively.",
    href: "/products",
  }
];

const comingSoonProducts = [
  {
    id: "vajra",
    name: "Vajra",
    tag: "Serverless GPU Cloud",
    category: "AI & Tools",
    image: "/assets/osmium (1).png",
    desc: "AWS Lambda for AI, a sovereign serverless GPU cloud designed to solve the industry's utilization crisis with sub-500ms cold starts.",
    href: "#",
  },
  {
    id: "crm",
    name: "Vyom",
    tag: "Customer Relationship",
    category: "Enterprise",
    image: "/assets/Frame 110.png",
    desc: "Advanced Customer Relationship Management tailored for seamless interactions and data insights.",
    href: "#",
  },
  {
    id: "kriya",
    name: "Kriya",
    tag: "AI Builder",
    category: "AI & Tools",
    image: "/assets/kriya1.png",
    desc: "A platform where you describe what you want in plain English, and it builds it—code, websites, APIs, marketing campaigns, everything.",
    href: "https://kriya.navchetna.tech/",
  },
  {
    id: "agentic_sde",
    name: "Vega",
    tag: "Developer AI",
    category: "AI & Tools",
    image: "/assets/Frame 112.png",
    desc: "Next-generation software engineering platform driven by agentic AI capabilities.",
    href: "#",
  },
  {
    id: "unified_storage",
    name: "Yugm",
    tag: "Storage Platform",
    category: "Enterprise",
    image: "/assets/Frame 113.png",
    desc: "Unified synced storage platform with inbuilt version control.",
    href: "#",
  }
];

const pillars = [
  { title: "Conscious AI", desc: "Designed with ethical considerations and human values at their core. We build AI that serves, not replaces." },
  { title: "Scalable", desc: "Cloud-native architecture that grows with your needs and adapts to any scale. From day one to year ten." },
  { title: "Human-Centered", desc: "Intuitive interfaces that enhance human capabilities rather than replace them. Technology that stays out of the way." },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Education", "Enterprise", "AI & Tools"];

  const filteredLaunched = launchedProducts.filter(p => activeCategory === "All" || p.category === activeCategory);
  const filteredUpcoming = comingSoonProducts.filter(p => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      {/* ── Header with subtle gradient ── */}
      <section
        className="relative pt-28 sm:pt-32 md:pt-36 pb-10"
        style={{
          background: "linear-gradient(180deg, rgba(72,105,133,0.04) 0%, rgba(125,72,53,0.03) 40%, #ffffff 100%)",
        }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h1
                className="text-black text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2rem, 4vw, 3.15rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.08,
                }}
              >
                Conscious Intelligence{" "}
                <span className="serif-italic">meets innovation.</span>
              </h1>
              <p
                className="mt-5 max-w-xl"
                style={{ color: "rgba(0,0,0,0.50)", lineHeight: 1.68, fontSize: "0.95rem" }}
              >
                Explore our directory of AI products that redefine possibilities across education,
                creativity, and enterprise automation.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <div className="section-container mt-10">
          <div className="section-divider" />
        </div>
      </section>

      {/* ── Launched Products Grid ── */}
      {filteredLaunched.length > 0 && (
        <section className="relative overflow-hidden py-8 md:py-14">
          <div className="section-container">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Our Products</p>
                <h2 className="section-heading">Launched Products</h2>
              </div>

              {/* ── Segmented filter control ── */}
              <div className="flex">
                <div
                  className="relative flex rounded-full p-1"
                  style={{
                    background: "rgba(0,0,0,0.03)",
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.07)",
                  }}
                >
                  <div className="flex gap-0.5">
                    {categories.map((cat) => {
                      const isActive = activeCategory === cat;
                      return (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className="isolate relative flex items-center justify-center cursor-pointer shrink-0 outline-none rounded-full h-8 px-4 transition-all duration-200"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          {isActive && (
                            <div
                              className="absolute inset-0 -z-10 rounded-full"
                              style={{
                                background: "#ffffff",
                                boxShadow: "0 0 0 1px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.07)",
                              }}
                            />
                          )}
                          <span
                            className="relative text-[12.5px] font-medium tracking-tight transition-colors duration-200"
                            style={{ color: isActive ? "#000000" : "rgba(0,0,0,0.40)" }}
                          >
                            {cat}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 sm:grid-cols-2">
              {filteredLaunched.map((p, index) => (
                <ScrollReveal key={p.id} delay={index * 45}>
                  <Link
                    href={p.href}
                    target={p.href.startsWith("http") ? "_blank" : undefined}
                    rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group block"
                  >
                    <div className="relative mb-4 overflow-hidden rounded-sm border border-black/[0.08]">
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          quality={60}
                          priority={index < 2} />
                        <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.35]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-black/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <p className="text-white/90 text-[13px] leading-relaxed translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col pb-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                        <div className="flex items-center gap-2">
                          <h3
                            style={{
                              fontFamily: "var(--font-waldenburg)",
                              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                              fontWeight: 500,
                              letterSpacing: "-0.015em",
                              color: "var(--heading-color)",
                              lineHeight: 1.2
                            }}
                          >
                            {p.name}
                          </h3>
                          {p.isFlagship && (
                            <span className="rounded-full bg-[rgba(125,72,53,0.06)] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[var(--color-brand)]">
                              Flagship
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-black/40">
                            {p.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Coming Soon Products Grid ── */}
      {filteredUpcoming.length > 0 && (
        <section className="relative overflow-hidden py-8 md:py-14">
          <div className="section-container">
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">In Development</p>
              <h2 className="section-heading">Coming Soon</h2>
              <div className="section-divider mt-6" />
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-6 sm:gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredUpcoming.map((p, index) => (
                <ScrollReveal key={p.id} delay={index * 45}>
                  <div className="group block">
                    <div className="relative mb-4 overflow-hidden rounded-sm border border-black/[0.08] opacity-80">
                      <div className="relative aspect-[16/10] w-full overflow-hidden grayscale">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          quality={75} />
                        <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.35]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] transition-opacity duration-500 group-hover:opacity-0">
                          <span className="rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black/80 shadow-sm">
                            Upcoming
                          </span>
                        </div>
                        <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 bg-black/80 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                          <p className="text-white/90 text-[13px] leading-relaxed translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col pb-4 pt-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-0">
                        <div className="flex items-center gap-2">
                          <h3
                            style={{
                              fontFamily: "var(--font-waldenburg)",
                              fontSize: "clamp(1.05rem, 2.5vw, 1.25rem)",
                              fontWeight: 500,
                              letterSpacing: "-0.015em",
                              color: "var(--heading-color)",
                              lineHeight: 1.2
                            }}
                          >
                            {p.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[9.5px] sm:text-[11px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-black/40">
                            {p.tag}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Core Pillars — Flat typographic list ── */}
      <section className="relative overflow-hidden py-10 md:py-14">
        <div className="section-sep" />
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Core Pillars</p>
              <h2 className="section-heading max-w-sm">
                Built for the{" "}
                <span className="serif-italic">future.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="section-divider mb-12" />

          <div className="grid gap-10 md:grid-cols-3">
            {pillars.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 70}>
                <div className="flex flex-col border-l border-dotted border-black/[0.25] pl-6">
                  <span className="text-[10px] font-semibold text-black/30 mb-4 tracking-widest">
                    0{i + 1}
                  </span>
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontSize: "1.15rem",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "var(--heading-color)"
                    }}
                  >
                    {w.title}
                  </h3>
                  <p style={{ color: "rgba(0,0,0,0.5)", lineHeight: 1.65, fontSize: "0.88rem" }}>
                    {w.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%)",
                backgroundImage: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 32px 32px, 32px 32px",
                border: "1px solid rgba(0,0,0,0.08)",
                padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              {/* corner accents */}
              <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-black/15 to-transparent" />
              <span className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-black/15 to-transparent" />
              <span className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-black/15 to-transparent" />
              <span className="absolute bottom-0 right-0 h-12 w-px bg-gradient-to-t from-black/15 to-transparent" />
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-purple-200/20 to-transparent blur-3xl opacity-40" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-orange-200/20 to-transparent blur-3xl opacity-40" />
              <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2
                  className="mb-4 text-balance"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#000"
                  }}
                >
                  Ready to experience{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #d4845a 0%, #8b6bc7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>conscious intelligence?</span>
                </h2>
                <p className="max-w-xl" style={{ color: "rgba(0,0,0,0.60)", lineHeight: 1.65, fontSize: "0.92rem", marginBottom: "1.75rem" }}>
                  Discover how our AI-powered products can transform your workflow and unlock new possibilities.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/80 transition-colors"
                  style={{ height: "2.5rem" }}
                >
                  Request Integration
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
