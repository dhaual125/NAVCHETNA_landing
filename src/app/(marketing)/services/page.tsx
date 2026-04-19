"use client";

import { useRef } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ArrowDown,
  Brain,
  CaretRight,
  Cloud,
  Code,
  PaintBrush,
  GearSix,
  Gauge,
  Cube,
  Megaphone,
  Database,
  Globe,
  ShieldCheck,
  Headset,
  ChartLine,
  GameController,
  DeviceMobile,
} from "@phosphor-icons/react";

const services = [
  {
    num: "01",
    tag: "Operations",
    title: "Project Management & Operations",
    desc: "Plan, coordinate, and ship with transparent milestones, clear ownership, and reliable execution systems.",
    bullets: ["Agile workflows", "End-to-end observability", "Operational controls"],
    cta: "Discuss operations",
    icon: GearSix,
  },
  {
    num: "02",
    tag: "Engineering",
    title: "Software Development",
    desc: "Robust mobile apps, websites, dashboards, and backend systems designed for real users and long-term scale.",
    bullets: ["Cross-platform builds", "Scalable backend architecture", "Unified systems"],
    cta: "Start building",
    icon: Code,
  },
  {
    num: "03",
    tag: "Intelligence",
    title: "AI & Machine Learning",
    desc: "LLM integrations, computer vision, recommendation logic, and automation workflows shaped around your product.",
    bullets: ["Custom LLM workflows", "Generative AI integration", "Intelligent automation"],
    cta: "Explore AI",
    icon: Brain,
  },
  {
    num: "04",
    tag: "Infrastructure",
    title: "Cloud & Infrastructure",
    desc: "Cloud-native deployments, DevOps automation, and secure infrastructure for products that need to keep growing.",
    bullets: ["AWS / Azure / GCP native", "CI/CD automation", "Hybrid cloud security"],
    cta: "Plan infrastructure",
    icon: Cloud,
  },
  {
    num: "05",
    tag: "Experience",
    title: "Design & Branding",
    desc: "High-quality UI/UX, brand systems, motion direction, and launch-ready visuals that make products feel trusted.",
    bullets: ["Bespoke UI/UX", "Design systems", "Interactive motion"],
    cta: "Shape the brand",
    icon: PaintBrush,
  },
];

/* Extended services list */
const moreServices = [
  { icon: DeviceMobile, title: "Mobile App Development", desc: "Android, iOS, and cross-platform apps" },
  { icon: Globe, title: "Web Application Development", desc: "Full-stack SaaS and web platforms" },
  { icon: GameController, title: "Game Development", desc: "Unity and Unreal-based interactive experiences" },
  { icon: Database, title: "Data Engineering", desc: "ETL pipelines, warehousing, and analytics" },
  { icon: Megaphone, title: "Digital Marketing", desc: "SEO, social media, and growth campaigns" },
  { icon: Cube, title: "3D & AR Experiences", desc: "Augmented reality and spatial computing" },
  { icon: ShieldCheck, title: "Cybersecurity Consulting", desc: "Audits, compliance, and secure architecture" },
  { icon: Headset, title: "IT Consulting & Support", desc: "Technical advisory and managed services" },
  { icon: ChartLine, title: "Business Intelligence", desc: "Dashboards, reporting, and decision support" },
  { icon: Gauge, title: "Performance Optimization", desc: "Speed audits, caching, and infrastructure tuning" },
];

export default function ServicesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      {/* ── Header with subtle gradient ── */}
      <section
        className="relative pt-28 pb-12 md:pt-36 md:pb-16"
        style={{
          background: "linear-gradient(180deg, rgba(125,72,53,0.04) 0%, rgba(72,105,133,0.03) 40%, var(--page-bg) 100%)",
        }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="chip mb-5">Services</span>
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
                Practical services for{" "}
                <span className="serif-italic">focused execution.</span>
              </h1>
              <p
                className="mt-5 max-w-2xl"
                style={{ color: "rgba(0,0,0,0.50)", fontSize: "0.95rem", lineHeight: 1.65 }}
              >
                From planning to engineering, AI, infrastructure, and brand
                experience, we help teams build clear systems without adding
                unnecessary complexity.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-black px-5 text-[13px] font-semibold text-white transition-colors hover:bg-black/80"
                >
                  Schedule a Call
                  <CaretRight weight="bold" className="size-3.5 text-white/52" />
                </Link>
                <button
                  type="button"
                  onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-black/10 px-5 text-[13px] font-semibold text-black/70 transition-colors hover:bg-black/5"
                >
                  View Services
                  <ArrowDown weight="bold" className="size-3.5" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Dotted divider at bottom */}
        <div className="section-container mt-12">
          <div className="section-divider" />
        </div>
      </section>

      {/* ── Services — Human List Layout ── */}
      <section ref={scrollRef} className="relative overflow-hidden py-14 md:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-12">
              <span className="chip mb-4">What we do</span>
              <h2 className="section-heading max-w-xl">
                End-to-end capabilities,{" "}
                <span className="serif-italic">restrained delivery.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-16">
            {services.map((service, index) => (
              <ScrollReveal key={service.num} delay={index * 20}>
                <article className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] border-l border-dotted border-black/[0.25] pl-6">
                  {/* Left Column: Number & Title */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-black/30 mb-2 tracking-widest">
                      {service.num} · {service.tag}
                    </span>
                    <h2
                      className="text-2xl mt-1"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        color: "var(--heading-color)"
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Column: Description & Bullets */}
                  <div className="flex flex-col md:pl-8 md:border-l border-dotted border-black/[0.15]">
                    <p className="text-black/60 mb-6" style={{ lineHeight: 1.65, fontSize: "0.95rem" }}>
                      {service.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <service.icon weight="duotone" className="size-4 text-black/40 mt-1 shrink-0" />
                          <span className="text-[13px] font-medium text-black/70 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Services — Flat Text List ── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="section-sep" />
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="chip mb-4">Also available</span>
                <h2 className="section-heading max-w-lg mb-0">
                  Additional services and{" "}
                  <span className="serif-italic">capabilities.</span>
                </h2>
              </div>
            </div>
          </ScrollReveal>

          <div className="section-divider mb-10" />

          <div className="columns-1 md:columns-2 lg:columns-3 gap-x-12 gap-y-6">
            {moreServices.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 20}>
                <div className="break-inside-avoid mb-6 flex items-start gap-3 border-l border-dotted border-black/[0.25] pl-4">
                  <service.icon weight="duotone" className="size-4 text-black/40 mt-0.5 shrink-0" />
                  <div className="min-w-0">
                    <p
                      className="text-[0.95rem] font-medium text-black/80"
                      style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.015em" }}
                    >
                      {service.title}
                    </p>
                    <p className="text-[12.5px] text-black/50 mt-0.5 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden pb-16 md:pb-20">
        <div className="section-sep" />
        <div className="section-container pt-16">
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
              <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
              <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
              <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
              <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />
              <div className="relative z-10 max-w-2xl mx-auto">
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
                  Ready to transform?
                </span>
                <h2
                  className="text-white text-balance mb-4"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.08,
                    color:"white"
                  }}
                >
                  Let&apos;s build something{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #fdece2 0%, #c4b0f5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>useful and beautiful.</span>
                </h2>
                <p className="text-white/45 mb-8" style={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Book a structured consultation and see how careful product thinking can reshape your workflow.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 btn btn-primary"
                  style={{ height: "2.5rem", padding: "0 1.5rem" }}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
