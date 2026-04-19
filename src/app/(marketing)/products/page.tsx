"use client";

import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowUpRight } from "@phosphor-icons/react";

const allProducts = [
  {
    id: "osmium",
    name: "Osmium",
    tag: "Deep Learning",
    image: "/assets/osmium-mockup.png",
    desc: "AI-powered education and career guidance built from thousands of past papers, with intelligent exam prediction.",
    href: "https://osmium.co.in",
    isFlagship: true,
  },
  {
    id: "natraj",
    name: "Natraj",
    tag: "AI + AR",
    image: "/assets/nataraj_mockup.png",
    desc: "Immersive augmented reality platform. Point your phone at a body part and view realistic 3D models in place.",
    href: "/news/product/natraj",
  },
  {
    id: "aegis",
    name: "Aegis Auth",
    tag: "Agentic AI",
    image: "/assets/aegis1.png",
    desc: "Intelligent autonomous agents that understand, learn, and execute complex tasks with human-like reasoning.",
    href: "/news/product/aegis",
  },
  {
    id: "kriya",
    name: "Kriya",
    tag: "Organizational AI",
    image: "/assets/kriya1.png",
    desc: "Organizational intelligence platform that streamlines workflows and drives productivity across teams.",
    href: "/news/product/kriya",
  },
  {
    id: "lmlens",
    name: "LM Lens",
    tag: "Vision AI",
    image: "/assets/lmlens.png",
    desc: "Intelligent data extraction that converts unstructured documents into actionable data using advanced OCR.",
    href: "/news/product/lmlens",
  },
  {
    id: "nsl",
    name: "NSL",
    tag: "Smart Billing",
    image: "/assets/nsl.png",
    desc: "Intelligent billing and ledger management system that automates the entire billing lifecycle.",
    href: "/news/product/nsl",
  },
];

const pillars = [
  { title: "Conscious AI", desc: "Designed with ethical considerations and human values at their core. We build AI that serves, not replaces." },
  { title: "Scalable", desc: "Cloud-native architecture that grows with your needs and adapts to any scale. From day one to year ten." },
  { title: "Human-Centered", desc: "Intuitive interfaces that enhance human capabilities rather than replace them. Technology that stays out of the way." },
];

export default function ProductsPage() {
  return (
    <>
      {/* ── Header with subtle gradient ── */}
      <section
        className="relative pt-28 sm:pt-32 md:pt-36 pb-10"
        style={{
          background: "linear-gradient(180deg, rgba(72,105,133,0.04) 0%, rgba(125,72,53,0.03) 40%, var(--page-bg) 100%)",
        }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="chip mb-5">Product Directory</span>
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

      {/* ── Product Grid — Flat, human editorial layout ── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="section-container">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">
            {allProducts.map((p, index) => (
              <ScrollReveal key={p.id} delay={index * 45}>
                <Link
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block"
                >
                  <div className="relative mb-4 overflow-hidden rounded-sm bg-black/[0.02] border border-black/[0.08]">
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        quality={84} />
                      <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay pointer-events-none transition-opacity duration-500 group-hover:opacity-[0.35]" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} />
                      <div className="absolute inset-0 z-20 bg-black/0 transition-colors duration-500 group-hover:bg-black/[0.03] pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col border-b border-dotted border-black/[0.25] pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h3
                          style={{
                            fontFamily: "var(--font-waldenburg)",
                            fontSize: "1.1rem",
                            fontWeight: 500,
                            letterSpacing: "-0.015em",
                            color: "var(--heading-color)"
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
                        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
                          {p.tag}
                        </span>
                        <ArrowUpRight
                          weight="bold"
                          className="w-3.5 h-3.5 text-black/30"
                        />
                      </div>
                    </div>
                    <p className="text-[13px] leading-relaxed text-black/50 pr-4">
                      {p.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Pillars — Flat typographic list ── */}
      <section className="relative overflow-hidden py-10 md:py-14">
        <div className="section-sep" />
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-12">
              <span className="chip mb-4">Core Pillars</span>
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
                background: "#080808",
                backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "80px 48px",
              }}
            >
              {/* corner accents */}
              <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
              <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
              <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
              <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />
              <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
                <span
                  className="inline-flex items-center gap-2 mb-6 text-white/40"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "10px",
                    letterSpacing: "1.4px",
                    textTransform: "uppercase",
                    border: "1px solid rgba(255,255,255,0.1)",
                    padding: "5px 14px",
                    borderRadius: "3px",
                  }}
                >
                  Explore Products
                </span>
                <h2
                  className="mb-4 text-balance text-white"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.6rem, 3vw, 2.35rem)",
                    fontWeight: 500,
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                    color: "#fff"
                  }}
                >
                  Ready to experience{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #fdece2 0%, #c4b0f5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>conscious intelligence?</span>
                </h2>
                <p className="max-w-xl mt-3" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Discover how our AI-powered products can transform your workflow and unlock new possibilities.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 btn btn-primary"
                  style={{ height: "2.5rem", padding: "0 1.5rem" }}
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
