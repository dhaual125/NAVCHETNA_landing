"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  ArrowDown, CaretRight, X, Gauge, Cube, Megaphone,
  Database, Globe, ShieldCheck, Headset, ChartLine,
  GameController, DeviceMobile, Briefcase,
} from "@phosphor-icons/react";

/* ── SVG illustrations ── */
const MobileSvg = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="100" y="20" width="80" height="160" rx="12" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
    <rect x="108" y="35" width="64" height="120" rx="4" stroke="#1a1a1a" strokeWidth="0.8" fill="none" strokeDasharray="3 2" />
    <circle cx="140" cy="168" r="4" stroke="#1a1a1a" strokeWidth="1" fill="none" />
    <path d="M60 80 Q80 60 60 40" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
    <path d="M50 85 Q75 55 50 30" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
    <path d="M40 90 Q70 50 40 20" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
    <line x1="200" y1="50" x2="240" y2="50" stroke="#1a1a1a" strokeWidth="1" />
    <line x1="200" y1="62" x2="230" y2="62" stroke="#1a1a1a" strokeWidth="0.8" strokeDasharray="4 3" />
    <line x1="200" y1="74" x2="250" y2="74" stroke="#1a1a1a" strokeWidth="0.8" />
    <line x1="180" y1="62" x2="198" y2="62" stroke="#1a1a1a" strokeWidth="0.6" strokeDasharray="2 2" />
  </svg>
);

const SoftwareSvg = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g transform="translate(140,100)">
      <path d="M-50,-30 L50,-30 L50,30 L-50,30 Z" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M-50,-30 L-25,-60 L75,-60 L50,-30" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <path d="M50,-30 L75,-60 L75,0 L50,30" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <line x1="-25" y1="-30" x2="0" y2="-60" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="0" y1="-30" x2="25" y2="-60" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="25" y1="-30" x2="50" y2="-60" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="-50" y1="0" x2="50" y2="0" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="0" y1="-30" x2="0" y2="30" stroke="#1a1a1a" strokeWidth="0.5" />
      <line x1="-50" y1="30" x2="-75" y2="55" stroke="#1a1a1a" strokeWidth="0.6" strokeDasharray="3 3" />
      <line x1="75" y1="0" x2="100" y2="0" stroke="#1a1a1a" strokeWidth="0.6" strokeDasharray="3 3" />
    </g>
  </svg>
);

const AiSvg = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g transform="translate(155,100)">
      <circle cx="0" cy="0" r="14" stroke="#1a1a1a" strokeWidth="1.5" fill="none" />
      <circle cx="0" cy="0" r="27" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <circle cx="0" cy="0" r="41" stroke="#1a1a1a" strokeWidth="1" fill="none" />
      <circle cx="0" cy="0" r="55" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <circle cx="0" cy="0" r="70" stroke="#1a1a1a" strokeWidth="0.6" fill="none" />
      <circle cx="0" cy="0" r="84" stroke="#1a1a1a" strokeWidth="0.4" fill="none" strokeDasharray="4 3" />
      <circle cx="-14" cy="-8" r="20" stroke="#1a1a1a" strokeWidth="0.7" fill="none" />
      <circle cx="-14" cy="-8" r="35" stroke="#1a1a1a" strokeWidth="0.5" fill="none" />
    </g>
  </svg>
);

const CloudSvg = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g transform="translate(140,100)">
      <rect x="-60" y="-55" width="120" height="22" rx="3" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <rect x="-60" y="-28" width="120" height="22" rx="3" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <rect x="-60" y="-1" width="120" height="22" rx="3" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <rect x="-60" y="26" width="120" height="22" rx="3" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <circle cx="-48" cy="-44" r="2.5" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <circle cx="-48" cy="-17" r="2.5" fill="#1a1a1a" opacity="0.25" />
      <circle cx="-48" cy="10" r="2.5" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
      <circle cx="-48" cy="37" r="2.5" fill="#1a1a1a" opacity="0.25" />
      <line x1="30" y1="-44" x2="50" y2="-44" stroke="#1a1a1a" strokeWidth="0.6" />
      <line x1="30" y1="-17" x2="45" y2="-17" stroke="#1a1a1a" strokeWidth="0.6" />
    </g>
    <path d="M80 60 L80 40 M76 46 L80 40 L84 46" stroke="#1a1a1a" strokeWidth="0.8" fill="none" />
  </svg>
);

const DesignSvg = () => (
  <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <g transform="translate(140,100)">
      <ellipse cx="0" cy="0" rx="30" ry="70" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <ellipse cx="0" cy="0" rx="70" ry="30" stroke="#1a1a1a" strokeWidth="1.2" fill="none" />
      <ellipse cx="0" cy="0" rx="55" ry="25" stroke="#1a1a1a" strokeWidth="0.8" fill="none" transform="rotate(45)" />
      <line x1="0" y1="-80" x2="0" y2="80" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="3 4" />
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#1a1a1a" strokeWidth="0.5" strokeDasharray="3 4" />
      <circle cx="0" cy="0" r="3" fill="#1a1a1a" opacity="0.15" />
    </g>
  </svg>
);

type Service = {
  title: string;
  desc: string;
  subtitle: string;
  Svg: () => React.JSX.Element;
};

const services: Service[] = [
  {
    title: "Mobile App Development",
    desc: "We build Android, iOS, and cross-platform apps with native performance and premium interfaces.",
    subtitle: "Android/iOS apps, cross-platform solutions, PWAs, and native mobile experiences.",
    Svg: MobileSvg,
  },
  {
    title: "Software Development",
    desc: "Robust websites, dashboards, and backend systems designed for real users and long-term scale.",
    subtitle: "Web apps, SaaS platforms, dashboards, APIs, and scalable backend systems.",
    Svg: SoftwareSvg,
  },
  {
    title: "AI & Machine Learning",
    desc: "LLM integrations, computer vision, and automation workflows shaped around your product.",
    subtitle: "LLM integrations, computer vision, recommendation engines, and intelligent automation.",
    Svg: AiSvg,
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Cloud-native deployments, DevOps automation, and secure infrastructure that scales.",
    subtitle: "AWS/Azure/GCP deployments, CI/CD pipelines, DevOps automation, and cloud security.",
    Svg: CloudSvg,
  },
  {
    title: "Design & Branding",
    desc: "High-quality UI/UX, brand systems, and launch-ready visuals that build trust.",
    subtitle: "UI/UX design, brand systems, motion design, and launch-ready visual identities.",
    Svg: DesignSvg,
  },
];

const moreServices = [
  { icon: Briefcase, title: "Project Management & Operations", desc: "Agile workflows, resource planning, and execution support" },
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

/* ── Quote Modal — light theme ── */
function QuoteModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", details: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  // Lock scroll + hide navbar while modal is open
  useEffect(() => {
    document.documentElement.classList.add("modal-open");
    return () => document.documentElement.classList.remove("modal-open");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSent(true);
    }, 1200);
  };

  const inputCls =
    "w-full rounded-lg px-3.5 py-2.5 text-sm text-black/80 placeholder-black/30 outline-none transition-colors" +
    " bg-black/[0.03] border border-black/[0.09] focus:border-black/25 focus:bg-white";
  const labelCls = "block text-[11px] font-semibold text-black/45 mb-1.5 tracking-widest uppercase";

  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center p-4"
      style={{ background: "rgba(10,10,10,0.45)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-[600px] rounded-2xl overflow-y-auto max-h-[92vh]"
        style={{
          background: "#FAFAFA",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 24px 64px -12px rgba(0,0,0,0.18)",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-8 w-8 items-center justify-center rounded-full text-black/30 hover:text-black/70 hover:bg-black/[0.05] transition-colors"
        >
          <X size={15} />
        </button>

        <div className="p-8">
          {sent ? (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-black/[0.05]">
                <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-black/60" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-black text-xl font-semibold mb-2" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>
                Inquiry Sent
              </h3>
              <p className="text-black/45 text-sm mb-6 leading-relaxed">We&apos;ll get back to you within 24 hours.</p>
              <button onClick={onClose} className="rounded-full bg-black text-white text-[13px] font-semibold px-6 py-2.5 hover:bg-black/80 transition-colors">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Header */}
              <div className="mb-7 pr-8">
                <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Get a Quote</p>
                <h2
                  className="text-black mb-1.5 leading-snug"
                  style={{ fontFamily: "var(--font-waldenburg)", fontSize: "1.35rem", fontWeight: 500, letterSpacing: "-0.025em" }}
                >
                  {service.title}
                </h2>
                <p className="text-black/45 text-[13px] leading-relaxed">{service.subtitle}</p>
              </div>

              <div className="section-divider mb-6" />

              {/* 2-col: Name + Email */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>Full Name</label>
                  <input required className={inputCls} value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                </div>
                <div>
                  <label className={labelCls}>Email</label>
                  <input required type="email" className={inputCls} value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                </div>
              </div>

              {/* 2-col: Phone + Company */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className={labelCls}>Phone</label>
                  <input className={inputCls} value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                </div>
                <div>
                  <label className={labelCls}>Company</label>
                  <input className={inputCls} value={form.company} onChange={e => setForm(p => ({ ...p, company: e.target.value }))} />
                </div>
              </div>

              {/* Service Required */}
              <div className="mb-4">
                <label className={labelCls}>Service Required</label>
                <input
                  readOnly
                  className={inputCls + " cursor-default"}
                  value={service.title}
                  style={{ color: "rgba(0,0,0,0.55)" }}
                />
              </div>

              {/* Project Details */}
              <div className="mb-7">
                <label className={labelCls}>Project Details</label>
                <textarea
                  rows={4}
                  className={inputCls + " resize-none"}
                  placeholder="Tell us about your project requirements..."
                  value={form.details}
                  onChange={e => setForm(p => ({ ...p, details: e.target.value }))}
                />
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="h-11 rounded-full border border-black/12 text-sm font-semibold text-black/60 hover:bg-black/[0.04] hover:text-black/80 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="h-11 rounded-full bg-black text-white text-sm font-semibold hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-wait"
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div>
      {/* ── Header ── */}
      <section
        className="relative pt-28 pb-12 md:pt-36 md:pb-16"
        style={{ background: "linear-gradient(180deg, rgba(125,72,53,0.04) 0%, rgba(72,105,133,0.03) 40%, #ffffff 100%)" }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl">

              <h1
                className="text-black text-balance"
                style={{ fontFamily: "var(--font-waldenburg)", fontSize: "clamp(2rem, 4vw, 3.15rem)", fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.08 }}
              >
                Practical services for{" "}
                <span className="serif-italic">focused execution.</span>
              </h1>
              <p className="mt-5 max-w-2xl" style={{ color: "rgba(0,0,0,0.50)", fontSize: "0.95rem", lineHeight: 1.65 }}>
                From planning to engineering, AI, infrastructure, and brand experience, we help teams build clear systems without adding unnecessary complexity.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-black px-5 text-[13px] font-semibold text-white transition-colors hover:bg-black/80">
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
        <div className="section-container mt-12">
          <div className="section-divider" />
        </div>
      </section>

      {/* ── What We Do — Cards ── */}
      <section ref={scrollRef} className="relative overflow-hidden py-14 md:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-12">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">What we do</p>
              <h2 className="section-heading max-w-xl">
                End-to-end capabilities,{" "}
                <span className="serif-italic">restrained delivery.</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Equal-height grid — SVG fixed, text flex-grow */}
          <div className="grid gap-3 sm:gap-4 grid-cols-2 lg:grid-cols-3" style={{ gridAutoRows: "1fr" }}>
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={index * 30}>
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="group flex flex-col w-full h-full rounded-xl sm:rounded-2xl overflow-hidden text-left cursor-pointer transition-opacity hover:opacity-90"
                  style={{ background: "#f2f2f2" }}
                >
                  {/* Fixed-height SVG area */}
                  <div className="flex flex-shrink-0 items-center justify-center px-4 sm:px-8 pt-6 sm:pt-10 pb-3 sm:pb-4" style={{ height: "clamp(120px, 30vw, 196px)" }}>
                    <service.Svg />
                  </div>
                  {/* Text */}
                  <div className="flex flex-col flex-1 px-4 sm:px-6 pb-5 sm:pb-7 pt-2 sm:pt-3">
                    <h3
                      className="mb-3 sm:mb-5"
                      style={{ fontFamily: "var(--font-waldenburg)", fontSize: "clamp(0.75rem, 2.5vw, 0.95rem)", fontWeight: 500, letterSpacing: "-0.015em", lineHeight: 1.2, color: "var(--heading-color)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="hidden sm:block" style={{ color: "rgba(0,0,0,0.44)", fontSize: "0.75rem", lineHeight: 1.48 }}>
                      {service.desc}
                    </p>
                    <p className="block sm:hidden text-black/50" style={{ fontSize: "0.65rem", lineHeight: 1.4 }}>
                      {service.subtitle || service.desc}
                    </p>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── More Services ── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="section-sep" />
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Also available</p>
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
                    <p className="text-[0.95rem] font-medium text-black/80" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.015em" }}>
                      {service.title}
                    </p>
                    <p className="text-[12.5px] text-black/50 mt-0.5 leading-relaxed">{service.desc}</p>
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
              className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center shadow-[0_20px_40px_-10px_rgba(0,0,0,0.04)]"
              style={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #F6F6F5 100%)",
                backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                border: "1px solid rgba(0,0,0,0.06)",
                padding: "80px 48px",
              }}
            >
              <span className="absolute top-0 left-0 w-8 h-px bg-black/10" />
              <span className="absolute top-0 left-0 h-8 w-px bg-black/10" />
              <span className="absolute bottom-0 right-0 w-8 h-px bg-black/10" />
              <span className="absolute bottom-0 right-0 h-8 w-px bg-black/10" />
              <div className="relative z-10 max-w-2xl mx-auto">
                <span className="inline-flex items-center gap-2 mb-6 text-black/50 bg-black/[0.02]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: "10px", letterSpacing: "1.4px", textTransform: "uppercase", border: "1px solid rgba(0,0,0,0.06)", padding: "5px 14px", borderRadius: "9999px" }}>
                  Ready to transform?
                </span>
                <h2 className="text-black text-balance mb-4" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 400, letterSpacing: "-0.03em", lineHeight: 1.08 }}>
                  Let&apos;s build something{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", color: "#000" }}>useful and beautiful.</span>
                </h2>
                <p className="text-black/50 mb-8" style={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Book a structured consultation and see how careful product thinking can reshape your workflow.
                </p>
                <Link href="/contact" className="mt-8 btn btn-primary" style={{ height: "2.5rem", padding: "0 1.5rem" }}>
                  Schedule a Call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Quote Modal ── */}
      {activeService && (
        <QuoteModal service={activeService} onClose={() => setActiveService(null)} />
      )}
    </div>
  );
}
