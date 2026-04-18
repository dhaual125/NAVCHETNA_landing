"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  { q: "What is Navchetna Technology and who do you work with?", a: "Navchetna Technology is a creative tech company that blends design, innovation, and engineering to solve real problems. We work with students, startups, institutions, and enterprises — anyone looking to scale effortlessly with technology." },
  { q: "What primary services do you provide?", a: "We architect cross-platform ecosystem solutions: Android, iOS, web apps, robust AI & ML architectures, custom LLMs, UI/UX design, branding, and comprehensive cloud deployments. We handle the hard technically deeply so you don't have to." },
  { q: "Do you provide modular standalone services?", a: "Absolutely. Whether it's a completely standalone high-end UI/UX redesign or a pure custom API stack, we offer specialized modular engagements tailored perfectly to your requirements." },
  { q: "What makes your approach uniquely efficient?", a: "We replace heavy, bloated tech agency operations with a pristine, direct-to-expert methodology. Total transparency, elite tech talent, and an unconditional commitment to aesthetic and operational perfection." },
  { q: "Can you consult with us on an hourly basis?", a: "Yes. Our executive strategy team is fully available for rigorous technical discovery, architectural validation, and advisory services." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-[var(--page-bg)] py-24 md:py-40 relative overflow-hidden">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--page-bg) 100%)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.5fr] lg:gap-24">

          <ScrollReveal>
            <div className="flex flex-col items-start lg:sticky lg:top-32">
              <h2
                className="text-black tracking-tight leading-[1.1] mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                }}
              >
                Common{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>Inquiries</span>
              </h2>
              <p className="type-lg text-black/60 text-pretty mb-12">
                Have specific questions about our execution models, pricing layers, or capabilities? Find your answers here.
              </p>

              <div className="p-8 rounded-[2rem] bg-black/5 w-full">
                <h3 className="type-xl font-medium text-black mb-3">
                  Cannot find your answer?
                </h3>
                <p className="type-sm text-black/60 mb-8 max-w-xs">
                  Speak directly with one of our core architectural consultants.
                </p>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 type-sm font-semibold text-black"
                >
                  Reach out immediately
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 40}>
                <div
                  className="group border-b border-black/[0.06] transition-colors"
                >
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="flex w-full items-center justify-between gap-8 py-8 text-left outline-none cursor-pointer"
                  >
                    <span
                      className="type-xl text-black/80 font-medium transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {faq.q}
                    </span>
                    <span className="shrink-0 text-black/30 transition-colors">
                      {openIdx === i ? <Minus strokeWidth={1.5} className="w-6 h-6" /> : <Plus strokeWidth={1.5} className="w-6 h-6" />}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-[400ms] cubic-bezier(0.2,0,0,1)"
                    style={{
                      maxHeight: openIdx === i ? "400px" : "0px",
                      opacity: openIdx === i ? 1 : 0
                    }}
                  >
                    <p className="pb-10 pt-2 type-lg text-black/50 leading-relaxed max-w-2xl">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
