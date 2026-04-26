"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const faqs = [
  { q: "What is Navchetna and who do you work with?", a: "Navchetna is a creative tech company that blends design, innovation, and engineering to solve real problems. We work with students, startups, institutions, and enterprises, anyone looking to grow with the right use of technology." },
  { q: "What services does Navchetna provide?", a: "We offer product development, AI & automation, design & branding, and strategy & management services. Our focus is on delivering end-to-end solutions that combine technical excellence with thoughtful design." },
  { q: "Do you provide design separately or only with development?", a: "Yes, design can be taken as a standalone service. Many clients only need UI/UX or creative assets like logos and posters, and we're happy to provide that without full development." },
  { q: "What makes Navchetna different from others?", a: "We believe in being a one-stop partner for tech and design needs. Our focus is on affordability, transparency, and long-term support, customization, maintenance, and guidance even after launch." },
  { q: "What is Osmium AI and how does it help students?", a: "Osmium AI is our AI-powered learning platform. It helps students prepare smarter by generating personalized study material, quizzes, mock tests, and even career guidance, like a mentor that adapts to your learning style." },
  { q: "What is Natraj and who can use it?", a: "Natraj is an AR/AI-based product for learning anatomy. By pointing your phone's camera at a body part, you can view realistic 3D models of bones or organs in place. Medical students, biology learners, or educators can use it to make complex concepts more interactive and engaging." },
  { q: "How do you charge for services?", a: "Pricing depends on the scope and type of project. We keep it flexible, whether for individuals, startups, or enterprises, so clients only pay for what they really need." },
  { q: "How can I contact Navchetna for projects or support?", a: "You can reach us through our website or email. We respond quickly and also provide documentation, training, and ongoing support whenever required." },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-8 md:py-14">
      <div className="section-sep" />

      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(240px,0.6fr)_minmax(0,1.4fr)]">
          {/* Left panel — no wrapper */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">FAQ</p>
              <h2 className="section-heading max-w-sm">
                Common
                {" "}
                <span className="serif-italic">inquiries</span>
              </h2>
              <p
                className="mb-8 max-w-sm"
                style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.65, fontSize: "0.9rem" }}
              >
                Find answers to common questions about our services, products, and how we work.
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
                  Still have questions?
                </h3>
                <p className="mb-5 text-sm text-black/46">
                  Get in touch with our team for personalized assistance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-black/78 transition-opacity hover:opacity-70"
                >
                  Reach out to us
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
