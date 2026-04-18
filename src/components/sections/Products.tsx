"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const products = [
  { name: "Osmium", tag: "Deep Learning", logo: "/assets/osmium.png" },
  { name: "Natraj", tag: "AI + AR", logo: "/assets/natraj.png" },
  { name: "Aegis Auth", tag: "Agentic AI", logo: "/assets/agegis.png" },
  { name: "Kriya", tag: "Organizational AI", logo: "/assets/kriya.png" },
  { name: "LM Lens", tag: "Vision AI", logo: "/assets/lm-lens.svg" },
  { name: "NSL", tag: "Neural Systems", logo: "/assets/nsl.png" },
];

export function Products() {
  return (
    <section className="relative py-24 md:py-40 bg-[var(--page-bg)]">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 70% at 80% 50%, transparent 40%, var(--page-bg) 100%)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.2fr_1.5fr] lg:gap-24">

          {/* ── Left copy ── */}
          <ScrollReveal>
            <div className="pr-4 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-black/5 text-[11px] font-bold uppercase tracking-[0.2em] text-black/60">
                From learning to living
              </span>
              <h2
                className="text-black leading-[1.05] mb-8 max-w-lg"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.04em"
                }}
              >
                Powered by<br />
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>Conscious Intelligence.</span>
              </h2>

              <p className="type-lg text-black/60 leading-relaxed text-pretty max-w-md mb-12">
                Discover how conscious intelligence and advanced technology
                unlock growth, creativity, and transformation across every
                dimension of life. Experience the future today.
              </p>

              <Link
                href="/products"
                className="group relative inline-flex items-center justify-center rounded-full px-8 py-4 text-sm font-medium overflow-hidden transition-all duration-300 active:scale-95 whitespace-nowrap bg-black text-white hover:bg-black/80"
              >
                <span className="z-10 relative">Explore Products Framework</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* ── Right floating product cards ── */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 relative z-10">
              {products.map((p, i) => (
                <ScrollReveal key={p.name} delay={i * 80}>
                  <div
                    className="group relative flex flex-col items-center justify-center p-8 bg-[var(--card-bg)] rounded-3xl cursor-pointer"
                    style={{
                      border: "1px solid var(--card-border)"
                    }}
                  >
                    <div className="mb-6 relative flex h-16 w-16 items-center justify-center">
                      <img
                        src={p.logo}
                        alt={`${p.name} logo`}
                        className="h-12 w-12 object-contain filter drop-shadow-md"
                      />
                    </div>
                    <h3 className="type-xl font-medium mb-2 text-black tracking-tight">
                      {p.name}
                    </h3>
                    <p className="text-[11px] uppercase tracking-[0.15em] font-medium text-black/40">
                      {p.tag}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
