"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Check,
  ChevronRight,
  ArrowDown,
} from "lucide-react";

/* ──────────────────────────────────────────────────────
   Service Data
   ────────────────────────────────────────────────────── */

const services = [
  {
    num: "01",
    tag: "Core Service",
    title: "Project Management\n& Operations.",
    desc: "Build and deploy with complete control: post-train models, build custom agents, and run production AI anywhere — from edge to cloud — with enterprise-grade tooling.",
    bullets: [
      "Agile workflows",
      "End-to-end observability",
      "Data privacy and operational controls",
    ],
    cta: "Discover Studio",
    image: "/assets/Group 1000006262.png"
  },
  {
    num: "02",
    tag: "Full-Stack",
    title: "Software\nDevelopment.",
    desc: "Develop robust digital platforms with expert engineering. We build mobile apps, web platforms, and unified enterprise systems designed for scale and performance.",
    bullets: [
      "Cross-platform applications",
      "Scalable backend architecture",
      "Unified enterprise systems",
    ],
    cta: "Start Building",
    image: "/assets/Group 1000006262.png"
  },
  {
    num: "03",
    tag: "AI",
    title: "AI & Machine\nLearning.",
    desc: "Empower your product with next-generation artificial intelligence. We integrate LLMs, computer vision, and generative AI into seamless agentic workflows.",
    bullets: [
      "Custom LLM fine-tuning",
      "Generative AI integration",
      "Intelligent automation systems",
    ],
    cta: "Explore AI",
    image: "/assets/Group 1000006262.png"
  },
  {
    num: "04",
    tag: "Cloud",
    title: "Cloud &\nInfrastructure.",
    desc: "Modernize your infrastructure natively on top-tier cloud providers. We handle DevOps automation, IoT deployments, and complex hybrid cloud architectures.",
    bullets: [
      "AWS / Azure / GCP native",
      "DevOps and CI/CD automation",
      "Hybrid cloud security",
    ],
    cta: "Scale Now",
    image: "/assets/Group 1000006262.png"
  },
  {
    num: "05",
    tag: "Design",
    title: "Design &\nBranding.",
    desc: "Craft exceptional user experiences. We weave stunning UI/UX design, motion graphics, and comprehensive branding identity into cohesive visual communications.",
    bullets: [
      "Bespoke UI/UX design",
      "Comprehensive design systems",
      "Interactive motion graphics",
    ],
    cta: "See Our Work",
    image: "/assets/Group 1000006262.png"
  },
];

/* ──────────────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────────────── */

export default function ServicesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="bg-[var(--page-bg)]">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--page-bg)]">
        {/* Generous Apple-like whitespace & warm empty space, no heavy lines */}
        
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-32 sm:py-40 w-full">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
              
              {/* Subtle Tag */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-[4px]"
                style={{ 
                  boxShadow: "rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset",
                  background: "transparent"
                }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-black/40" />
                <span className="text-[12px] font-medium tracking-normal text-black/60" style={{ letterSpacing: "0.14px" }}>
                  Comprehensive Solutions
                </span>
              </div>

              {/* ElevenLabs Light Display Typography */}
              <h1 
                className="mb-8 text-black" 
                style={{ 
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)", 
                  lineHeight: "1.08", 
                  letterSpacing: "-0.96px",
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 300,
                  whiteSpace: "pre-line"
                }}
              >
                Intelligent services<br /><span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>for every challenge</span>
              </h1>

              {/* Sub copy: Inter with positive letter spacing */}
              <p 
                className="text-black/60 max-w-xl mx-auto text-pretty mb-14"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.60",
                  letterSpacing: "0.18px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400
                }}
              >
                From AI development to digital transformation, we deliver cutting-edge
                solutions that drive growth and innovation across industries.
              </p>

              {/* ElevenLabs Primary CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Warm Stone Pill CTA */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center"
                  style={{
                    background: "#000000",
                    color: "#ffffff",
                    padding: "12px 20px 12px 14px",
                    borderRadius: "30px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "15px",
                    letterSpacing: "normal"
                  }}
                >
                  <span className="inline-flex items-center gap-2">
                    Schedule a Call
                    <ChevronRight className="size-4 text-white/40" />
                  </span>
                </Link>

               {/* White Pill (Shadow-bordered) Secondary CTA */}
                <button
                  onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    background: "transparent",
                    color: "#000000",
                    padding: "12px 20px",
                    borderRadius: "9999px",
                    border: "1px solid var(--card-border)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "15px"
                  }}
                >
                  View Services
                  <ArrowDown className="size-4 text-black/40" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SERVICE BLOCKS — Full-width with generous spacing
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div ref={scrollRef} className="bg-[var(--page-bg)]">
        {services.map((service, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <section
              key={service.num}
              className="relative py-24 lg:py-36 border-t"
              style={{ borderColor: "rgba(0,0,0,0.05)" }}
            >
              <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
                <div className={`grid lg:grid-cols-2 items-center gap-16 lg:gap-24 ${!isEven ? "direction-rtl" : ""}`}>

                  {/* ── TEXT COLUMN ── */}
                  <div className={`flex flex-col justify-center ${!isEven ? "lg:order-2 lg:pl-16" : "lg:pr-16"}`} style={{ direction: "ltr" }}>
                    <ScrollReveal delay={0}>
                      {/* Sub-label */}
                      <span 
                        className="block mb-6 text-black/40"
                        style={{
                          fontFamily: "var(--font-waldenburgFH), var(--font-waldenburg), sans-serif",
                          fontWeight: 700,
                          fontSize: "14px",
                          letterSpacing: "0.7px",
                          textTransform: "uppercase"
                        }}
                      >
                        {service.num} — {service.tag}
                      </span>

                      {/* Display Heading at 36px (Section Heading rule) */}
                      <h2 
                        className="mb-8 text-[var(--heading-color)]" 
                        style={{ 
                          fontSize: "36px", 
                          lineHeight: "1.17", 
                          letterSpacing: "normal",
                          fontFamily: "var(--font-waldenburg)", 
                          fontWeight: 300,
                          whiteSpace: "pre-line" 
                        }}
                      >
                        {service.title}
                      </h2>

                      {/* Description - Airly readable body text */}
                      <p 
                        className="text-[#4e4e4e] text-pretty mb-12 max-w-md"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "18px",
                          lineHeight: "1.60",
                          letterSpacing: "0.18px",
                          fontWeight: 400
                        }}
                      >
                        {service.desc}
                      </p>

                      {/* Checklist Features - White Cards with shadow-as-border */}
                      <div className="flex flex-col gap-3 mb-14">
                        {service.bullets.map((b, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center justify-between max-w-[400px]"
                            style={{ 
                              background: "var(--card-bg)",
                              borderRadius: "12px",
                              padding: "14px 20px",
                              border: "1px solid var(--card-border)"
                            }}
                          >
                            <span 
                              className="text-black/80"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "15px",
                                fontWeight: 500,
                                letterSpacing: "0.15px"
                              }}
                            >
                              {b}
                            </span>
                            <Check className="size-4 shrink-0 text-black/30" />
                          </div>
                        ))}
                      </div>

                      {/* CTA button (Primary Black Pill) */}
                      <Link
                        href="/contact"
                        className="group inline-flex items-center justify-center w-max"
                        style={{
                          background: "#000000",
                          color: "#ffffff",
                          padding: "10px 20px",
                          borderRadius: "9999px",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: "15px",
                        }}
                      >
                        {service.cta}
                      </Link>
                    </ScrollReveal>
                  </div>

                  {/* ── IMAGE / VISUAL COLUMN ── */}
                  <div className={`flex items-center justify-center ${!isEven ? "lg:order-1" : ""}`} style={{ direction: "ltr" }}>
                    <ScrollReveal delay={200}>
                      {/* The generous padding and subtle background for images mimicking audio/product demo containers */}
                      <div 
                        className="relative w-full aspect-square max-w-lg lg:max-w-none flex items-center justify-center overflow-hidden"
                        style={{
                          background: "#ffffff",
                          borderRadius: "24px",
                          boxShadow: "rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset"
                        }}
                      >
                        <div className="relative w-4/5 h-4/5">
                          <Image
                            src={service.image}
                            alt={service.title.replace("\n", " ")}
                            fill
                            className="object-contain drop-shadow-xl"
                            sizes="(max-width: 1024px) 90vw, 45vw"
                          />
                        </div>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM CTA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-32 md:py-48 px-5" style={{ background: "#ffffff", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <ScrollReveal>
            <span 
              className="block mb-6 text-black/40"
              style={{
                fontFamily: "var(--font-waldenburgFH), var(--font-waldenburg), sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.7px",
                textTransform: "uppercase"
              }}
            >
              Ready to transform?
            </span>
            <h2 
              className="mb-12 text-black" 
              style={{ 
                fontSize: "clamp(2rem, 5vw, 3.5rem)", 
                lineHeight: "1.08", 
                letterSpacing: "-0.96px",
                fontFamily: "var(--font-waldenburg)",
                fontWeight: 300
              }}
            >
              Let&apos;s build something amazing.
            </h2>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center"
              style={{
                background: "rgba(0,0,0,0.03)",
                color: "#000000",
                padding: "16px 28px",
                borderRadius: "30px",
                border: "1px solid var(--card-border)",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "normal"
              }}
            >
              Schedule a Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

