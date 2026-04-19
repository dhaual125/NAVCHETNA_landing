"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  { q: "What is Navchetna Technology and who do you work with?", a: "Navchetna Technology is a creative tech company that blends design, innovation, and engineering to solve real problems. We work with students, startups, institutions, and enterprises looking to scale thoughtfully with technology." },
  { q: "What primary services do you provide?", a: "We build across Android, iOS, web apps, AI and ML systems, custom LLM workflows, UI and UX design, branding, and cloud deployment. The focus is practical execution, not inflated process." },
  { q: "Do you provide modular standalone services?", a: "Yes. We can step in for a focused redesign, product strategy sprint, API architecture, or a specific implementation stream when that is the better fit." },
  { q: "What makes your approach uniquely efficient?", a: "We favor direct collaboration, clear ownership, and a restrained delivery model. That keeps the work fast without sacrificing technical depth or product quality." },
  { q: "Can you consult with us on an hourly basis?", a: "Yes. Our team supports technical discovery, architecture validation, and advisory work for organizations that need focused guidance before committing to a larger build." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-[var(--page-bg)] py-10 md:py-14">
      <div className="section-sep" />

      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(240px,0.6fr)_minmax(0,1.4fr)]">
          {/* Left panel — no wrapper */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="chip mb-4">FAQ</span>
              <h2 className="section-heading max-w-sm">
                Common
                {" "}
                <span className="serif-italic">inquiries</span>
              </h2>
              <p
                className="mb-8 max-w-sm"
                style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.65, fontSize: "0.9rem" }}
              >
                Questions around engagement, delivery, and technical scope usually start here.
              </p>

              <div className="section-divider mb-6" />

              <div>
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "0.96rem",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                  }}
                >
                  Need more clarity?
                </h3>
                <p className="mb-5 text-sm text-black/46">
                  Speak directly with our architectural and product team.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black/78 transition-opacity hover:opacity-70"
                >
                  Reach out immediately
                  <ArrowUpRight weight="bold" className="size-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — accordion, no wrapper */}
          <div className="flex flex-col">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.q} delay={index * 35}>
                <div className="py-1 border-b border-dotted border-black/[0.15]">
                  <button
                    onClick={() => setOpenIdx(openIdx === index ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-4 text-left"
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontSize: "clamp(0.98rem, 1.4vw, 1.08rem)",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        color: "rgba(0,0,0,0.8)",
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{
                        background: openIdx === index ? "#0A0A0A" : "rgba(0,0,0,0.04)",
                        color: openIdx === index ? "#FFFFFF" : "rgba(0,0,0,0.32)",
                      }}
                    >
                      {openIdx === index ? (
                        <Minus weight="bold" className="size-3" />
                      ) : (
                        <Plus weight="bold" className="size-3" />
                      )}
                    </span>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      maxHeight: openIdx === index ? "240px" : "0px",
                      opacity: openIdx === index ? 1 : 0,
                    }}
                  >
                    <p
                      className="max-w-3xl pb-4 pr-10"
                      style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.68, fontSize: "0.9rem" }}
                    >
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
