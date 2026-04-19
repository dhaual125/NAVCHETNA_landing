"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Crosshair,
  Globe,
  Brain,
  Flag,
  MessageCircle,
  Flame,
  Users,
  Calendar,
  MapPin,
  Heart,
  ChevronRight,
  ArrowDown,
  CheckCircle2,
  Layers,
  LifeBuoy,
  Cloud,
  Sparkles,
  ArrowRight,
  Building2,
  Star,
} from "lucide-react";

/* ──────────────────────────────────────────────────────
   Data
   ────────────────────────────────────────────────────── */

const values = [
  { label: "Human-Centered", Icon: Crosshair },
  { label: "Accessible", Icon: Globe },
  { label: "AI-Powered", Icon: Brain },
  { label: "Made in India", Icon: Flag },
  { label: "Transparent", Icon: MessageCircle },
  { label: "Relentless", Icon: Flame },
];

const stats = [
  { value: "15+", label: "Team Members", Icon: Users, sub: "And growing fast" },
  { value: "4", label: "Core Products", Icon: Layers, sub: "Live in market" },
  { value: "2024", label: "Founded", Icon: Calendar, sub: "September 6th" },
  { value: "5", label: "Co-Founders", Icon: Heart, sub: "One shared dream" },
];

const team = [
  {
    name: "Ayushmaan Soni",
    role: "Founder & CEO",
    desc: "One of the five friends who started this journey, passionate about making technology work for real people.",
    avatar: "/assets/ayushmaan.jpg",
    linkedin: "https://www.linkedin.com/in/422h52219hsuya/",
    tag: "Founder",
  },
  {
    name: "Varun Kumar",
    role: "Co-Founder",
    desc: "Another founding member focused on innovation and bringing creative ideas to life through technology.",
    avatar: "/assets/varun.jpg",
    linkedin: "https://www.linkedin.com/in/varun-yadav-Navchetna Technology/",
    tag: "Co-Founder",
  },
  {
    name: "Swastik Khatua",
    role: "Co-Founder",
    desc: "Part of the founding team, bringing technical expertise and innovative solutions to complex challenges.",
    avatar: "/assets/swastik.jpg",
    linkedin: "https://www.linkedin.com/in/swastik-khatua-84798631b/",
    tag: "Co-Founder",
  },
  {
    name: "Dhraval Narsinha",
    role: "Co-Founder",
    desc: "Founding member dedicated to building scalable solutions and driving product excellence.",
    avatar: "/assets/dhraval.jpg",
    linkedin: "https://www.linkedin.com/in/dhraval-narsinha-Navchetna Technology125/",
    tag: "Co-Founder",
  },
  {
    name: "Suman Yadav",
    role: "Co-Founder & HOD",
    desc: "Part of the founding team, leading product development and ensuring quality in everything we build.",
    avatar: "/assets/suman.jpg",
    linkedin: "https://www.linkedin.com/in/suman-yadav-bb5516322/",
    tag: "Co-Founder",
  },
  {
    name: "Aman Gupta",
    role: "Executive",
    desc: "Strategic executive focused on business development and operational excellence.",
    avatar: "/ref/voice-bg-02.png",
    linkedin: "#",
    tag: "Executive",
  },
  {
    name: "Kuldeep Thakar",
    role: "Executive",
    desc: "Dedicated team member contributing to innovative solutions and technical excellence.",
    avatar: "/assets/kuldeep.jpg",
    linkedin: "#",
    tag: "Executive",
  },
  {
    name: "Tanmay",
    role: "Team Member",
    desc: "Dedicated team member contributing to innovative solutions and technical excellence.",
    avatar: "/ref/voice-bg-08.png",
    linkedin: "#",
    tag: "Team",
  },
];

/* ──────────────────────────────────────────────────────
   Animated Counter
   ────────────────────────────────────────────────────── */

function useCountUp(target: string, duration = 1800) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const numeric = parseInt(target.replace(/\D/g, ""), 10);
          const suffix = target.replace(/[\d]/g, "");
          if (isNaN(numeric)) { setDisplay(target); return; }
          const start = performance.now();
          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${Math.round(eased * numeric)}${suffix}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, display };
}

/* ──────────────────────────────────────────────────────
   Stat Card — premium elevated
   ────────────────────────────────────────────────────── */

function StatCard({
  value,
  label,
  Icon,
  sub,
}: {
  value: string;
  label: string;
  Icon: React.ElementType;
  sub: string;
}) {
  const { ref, display } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="relative flex flex-col p-8 rounded-2xl overflow-hidden"
      style={{
        background: "transparent",
        border: "1px solid rgba(0,0,0,0.09)",
      }}
    >
      {/* Subtle corner gradient */}
      <div
        className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle at top right, rgba(125,72,53,0.06) 0%, transparent 70%)" }}
      />

      <div
        className="inline-flex items-center justify-center size-11 rounded-2xl mb-6 flex-shrink-0"
        style={{ background: "rgba(0,0,0,0.04)" }}
      >
        <Icon className="size-5 text-black/40" />
      </div>

      <p
        className="text-black mb-1"
        style={{
          fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
          letterSpacing: "-0.05em",
          fontFamily: "var(--font-waldenburg)",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        {display}
      </p>

      <p
        className="text-black mb-1"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          color: "rgba(0,0,0,0.75)",
        }}
      >
        {label}
      </p>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          color: "rgba(0,0,0,0.35)",
          letterSpacing: "0.1px",
        }}
      >
        {sub}
      </p>

    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Team Card — premium
   ────────────────────────────────────────────────────── */

function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <div
      className="group relative isolate h-full overflow-hidden rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.03)",
      }}
    >
      {/* Avatar */}
      <div className="relative h-56 overflow-hidden bg-[#f5f3f1]">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent pointer-events-none" />

        {/* Tag badge */}
        <div
          className="absolute top-3.5 left-3.5"
        >
          <span
            className="inline-block px-2.5 py-1 rounded-full text-white/90"
            style={{
              background: "rgba(0,0,0,0.45)",
              backdropFilter: "blur(8px)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}
          >
            {member.tag}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3
          className="text-black mb-1"
          style={{
            fontFamily: "var(--font-waldenburg)",
            fontWeight: 400,
            fontSize: "17px",
            letterSpacing: "-0.2px",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </h3>

        <p
          className="mb-3"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "rgba(0,0,0,0.38)",
          }}
        >
          {member.role}
        </p>

        <p
          className="text-black/50 text-pretty mb-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            lineHeight: 1.65,
          }}
        >
          {member.desc}
        </p>

        {/* LinkedIn */}
        <div
          className="pt-4"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-black/35 hover:text-black transition-colors duration-200"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.29c.032.678 0 7.225 0 7.225h2.36z" />
            </svg>
            View Profile
            <ChevronRight className="size-3 opacity-50" />
          </a>
        </div>
      </div>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, transparent, rgba(125,72,53,0.5), transparent)" }}
      />
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Section Label
   ────────────────────────────────────────────────────── */

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-black/40 uppercase"
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "1.2px",
      }}
    >
      <span className="block h-px w-4" style={{ background: "rgba(0,0,0,0.25)" }} />
      {children}
    </span>
  );
}

/* ──────────────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-[var(--page-bg)]">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Immersive full-height
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex items-center justify-center overflow-hidden border-b border-black/[0.12]" style={{ paddingTop: "160px", paddingBottom: "100px", background: "var(--quiet-gradient)" }}>
        <div className="grid-overlay" />

        <div className="section-container px-6 sm:px-12 md:px-24 relative z-10 w-full">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 rounded-full"
                style={{ background: "rgba(0,0,0,0.04)", border: "1px solid rgba(0,0,0,0.09)" }}
              >
                <span className="size-1.5 rounded-full" style={{ background: "rgba(0,0,0,0.3)" }} />
                <span
                  style={{ letterSpacing: "0.3px", fontFamily: "'Inter', sans-serif", color: "rgba(0,0,0,0.45)", fontSize: "11px", fontWeight: 600 }}
                >
                  Our Story — Est. September 2024
                </span>
              </div>

              {/* Headline — smaller, left-aligned, about-page weight */}
              <h1
                className="mb-5 text-black text-balance"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
                  lineHeight: "1.05",
                  letterSpacing: "-0.035em",
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 400,
                  color: "#000",
                }}
              >
                Building the Future with{" "}
                <span className="serif-italic">
                  Conscious Intelligence
                </span>
              </h1>

              {/* Sub copy */}
              <p
                className="text-black/45 text-pretty mb-10"
                style={{
                  fontSize: "15.5px",
                  lineHeight: "1.75",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  maxWidth: "520px",
                }}
              >
                From five friends with a shared dream — a story of friendship,
                late-night ideas, and the belief that learning and innovation
                can truly change the world.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap justify-center items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full transition-all duration-200 hover:gap-3"
                  style={{
                    background: "#000",
                    color: "#fff",
                    padding: "11px 22px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Contact Us
                  <ArrowRight className="size-4 text-white/60 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <button
                  onClick={() => { document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="inline-flex items-center gap-2 cursor-pointer rounded-full transition-all duration-200 hover:bg-black/5"
                  style={{
                    background: "transparent",
                    color: "#000",
                    padding: "11px 22px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  Our Journey
                  <ArrowDown className="size-4 text-black/40" />
                </button>
              </div>
              <div className="mt-14 pt-8 w-full" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
                <div className="flex flex-wrap justify-center gap-0">
                  {stats.map((s, i) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center px-8 py-2"
                      style={{
                        borderRight: i < stats.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-waldenburg)",
                          fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                          fontWeight: 400,
                          letterSpacing: "-0.05em",
                          lineHeight: 1,
                          color: "#000",
                        }}
                      >
                        {s.value}
                      </span>
                      <span
                        className="mt-1"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: 500,
                          color: "rgba(0,0,0,0.6)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {s.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "11px",
                          color: "rgba(0,0,0,0.3)",
                          marginTop: "2px",
                        }}
                      >
                        {s.sub}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          JOURNEY — Story blocks
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="journey"
        className="py-24 md:py-32 relative"
      >
        <div className="section-sep" />
        <div className="section-container px-6 sm:px-12 md:px-24">

          {/* Section header */}
          <ScrollReveal>
            <div className="mb-16">
              <SectionLabel>Our Journey</SectionLabel>
              <div className="mt-5 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <h2
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontWeight: 400,
                    fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.06,
                    color: "#000",
                  }}
                >
                  Every great journey starts with a{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    simple idea
                  </span>
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    lineHeight: "1.75",
                    color: "rgba(0,0,0,0.4)",
                    maxWidth: "280px",
                    flexShrink: 0,
                  }}
                >
                  Three chapters that shaped who we are, from a single conversation to a growing company.
                </p>
              </div>
            </div>
          </ScrollReveal>

                    {/* Three story cards */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">

            {/* Card 1 */}
            <ScrollReveal>
              <div
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white h-full"
                style={{
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
                }}
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image src="/assets/friends.jpg.jpeg" alt="The founding team - Navchetna" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-5" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "13px", fontWeight: 400, color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px" }}>01</span>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", marginBottom: "14px", display: "block" }}>
                    The Beginning · Sep 6, 2024
                  </span>
                  <h3 style={{ fontFamily: "var(--font-waldenburg)", fontWeight: 400, fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#000", marginBottom: "14px" }}>
                    Five friends,{" "}
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>one spark</span>
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(0,0,0,0.5)", flex: 1 }}>
                    On 6th September 2024, five friends sat together and realized something: education could be so much better with the right tools and technology. That single conversation started everything.
                  </p>
                  <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(0,0,0,0.3)", fontWeight: 500 }}>Jodhpur, Rajasthan</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 — white */}
            <ScrollReveal delay={80}>
              <div
                className="relative flex flex-col overflow-hidden rounded-2xl bg-white h-full"
                style={{
                  border: "1px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)",
                }}
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image src="/assets/20260419_015219.jpg.jpeg" alt="Navchetna is born - light painting" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute bottom-4 left-5" style={{ fontFamily: "var(--font-waldenburg)", fontSize: "13px", fontWeight: 400, color: "rgba(255,255,255,0.5)", letterSpacing: "0.5px" }}>02</span>
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", marginBottom: "14px", display: "block" }}>
                    The Birth · Late 2024
                  </span>
                  <h3 style={{ fontFamily: "var(--font-waldenburg)", fontWeight: 400, fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#000", marginBottom: "14px" }}>
                    Navchetna{" "}
                    <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>is born</span>
                  </h3>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(0,0,0,0.5)", flex: 1 }}>
                    From late-night brainstorming sessions and countless cups of coffee, Navchetna was born. Proudly based in Jodhpur, Rajasthan and Ahmedabad, Gujarat.
                  </p>
                  <div className="mt-6 pt-5" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "rgba(0,0,0,0.3)", fontWeight: 500 }}>Ahmedabad, Gujarat</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3 — editorial dark */}
            <ScrollReveal delay={160}>
              <div
                className="relative flex flex-col overflow-hidden rounded-2xl h-full"
                style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.04)", minHeight: "420px" }}
              >
                {/* Giant ghost number */}
                <span
                  className="absolute -top-4 -right-3 select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(7rem, 14vw, 11rem)",
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.03)",
                    lineHeight: 1,
                    letterSpacing: "-0.05em",
                  }}
                >
                  03
                </span>

                <div className="relative flex flex-col flex-1 p-8 justify-between z-10">
                  {/* Top */}
                  <div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(0,0,0,0.3)", display: "block", marginBottom: "20px" }}>
                      The Growth · 2025 — Present
                    </span>
                    <h3 style={{ fontFamily: "var(--font-waldenburg)", fontWeight: 400, fontSize: "clamp(1.4rem, 2.2vw, 1.75rem)", lineHeight: 1.15, letterSpacing: "-0.025em", color: "#000", marginBottom: "16px" }}>
                      From dreamers{" "}
                      <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>to builders</span>
                    </h3>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14.5px", lineHeight: "1.8", color: "rgba(0,0,0,0.5)" }}>
                      No fancy offices, no investors — just a shared vision and sheer determination. We&apos;ve grown from five friends into a team building products that genuinely matter.
                    </p>
                  </div>

                  {/* Milestones */}
                  <div className="mt-10">
                    <div className="space-y-3">
                      {[
                        { year: "2024", note: "Navchetna founded in Jodhpur" },
                        { year: "2025", note: "AWS Official Collaboration" },
                        { year: "Now", note: "15+ team · 4 products live" },
                      ].map((m) => (
                        <div key={m.year} className="flex items-center gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "10px" }}>
                          <span style={{ fontFamily: "var(--font-waldenburg)", fontSize: "13px", fontWeight: 400, color: "rgba(0,0,0,0.25)", letterSpacing: "-0.02em", minWidth: "36px" }}>{m.year}</span>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(0,0,0,0.45)", fontWeight: 400 }}>{m.note}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* CTA strip */}
          <ScrollReveal delay={200}>
            <div
              className="mt-5 rounded-2xl px-8 md:px-12 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5"
              style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div>
                <p style={{ fontFamily: "var(--font-waldenburg)", fontSize: "19px", fontWeight: 400, color: "#000", letterSpacing: "-0.02em" }}>
                  The story continues{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>and we&apos;re just getting started.</span>
                </p>
                <p className="mt-1.5" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "rgba(0,0,0,0.37)", lineHeight: "1.65" }}>
                  Every day we push closer to making learning accessible for all.
                </p>
              </div>
              <Link
                href="/career"
                className="inline-flex items-center gap-2 shrink-0 transition-all duration-200 hover:gap-3"
                style={{ background: "#000", color: "#fff", padding: "10px 20px", borderRadius: "9999px", fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "13.5px", whiteSpace: "nowrap" }}
              >
                Join the journey
                <ArrowRight className="size-4 text-white/50" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 dotted-line-x" />
        <div className="section-container px-6 sm:px-12 md:px-24">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-start">
              {/* Left: headline */}
              <div>
                <SectionLabel>Our Culture</SectionLabel>
                <h2
                  className="text-black mt-5 mb-7"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                  }}
                >
                  More Than Just{" "}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    Code
                  </span>
                </h2>
                <p
                  className="text-black/50 text-pretty mb-10"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "17px",
                    lineHeight: "1.7",
                    maxWidth: "420px",
                  }}
                >
                  We&apos;re friendly, approachable, and obsessed with making technology
                  work for real people. Every idea we work on comes from the heart.
                </p>

                {/* Decorative rule */}
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 max-w-[80px]" style={{ background: "rgba(0,0,0,0.1)" }} />
                  <span
                    className="text-black/25"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}
                  >
                    Since 2024
                  </span>
                </div>
              </div>

              {/* Right: two dotted-border cards */}
              <div className="space-y-0">
                {/* Card A — From Dreamers to Builders */}
                <div
                  className="rounded-2xl p-8"
                  style={{
                    border: "1.5px dashed rgba(0,0,0,0.15)",
                    borderBottom: "none",
                    borderRadius: "16px 16px 0 0",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex size-7 items-center justify-center rounded-full"
                      style={{ background: "rgba(0,0,0,0.04)", border: "1px dashed rgba(0,0,0,0.15)" }}
                    >
                      <span style={{ fontFamily: "var(--font-waldenburg)", fontSize: "11px", fontWeight: 400, color: "rgba(0,0,0,0.35)" }}>01</span>
                    </span>
                    <h3
                      className="text-black"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 400,
                        fontSize: "19px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      From Dreamers to Builders
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14.5px",
                      lineHeight: "1.78",
                      color: "rgba(0,0,0,0.48)",
                    }}
                  >
                    Back then, we were just a bunch of dreamers with laptops and big ideas.
                    No fancy offices, no investors, no roadmap — just a shared vision and a
                    lot of determination. We wanted to create solutions that actually help
                    learners and make learning exciting, not just another tech project.
                  </p>
                </div>

                {/* Dotted connector line */}
                <div
                  className="mx-8 flex items-center justify-center"
                  style={{ height: "28px", borderLeft: "1.5px dashed rgba(0,0,0,0.13)", borderRight: "1.5px dashed rgba(0,0,0,0.13)", borderTop: "none", borderBottom: "none" }}
                >
                  <div className="w-full h-px" style={{ borderTop: "1.5px dashed rgba(0,0,0,0.1)" }} />
                </div>

                {/* Card B — Today's Reality */}
                <div
                  className="rounded-2xl p-8"
                  style={{
                    border: "1.5px dashed rgba(0,0,0,0.15)",
                    borderTop: "none",
                    borderRadius: "0 0 16px 16px",
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="inline-flex size-7 items-center justify-center rounded-full"
                      style={{ background: "rgba(0,0,0,0.04)", border: "1px dashed rgba(0,0,0,0.15)" }}
                    >
                      <span style={{ fontFamily: "var(--font-waldenburg)", fontSize: "11px", fontWeight: 400, color: "rgba(0,0,0,0.35)" }}>02</span>
                    </span>
                    <h3
                      className="text-black"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 400,
                        fontSize: "19px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Today&apos;s Reality
                    </h3>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14.5px",
                      lineHeight: "1.78",
                      color: "rgba(0,0,0,0.48)",
                    }}
                  >
                    Today, we&apos;ve grown from five friends to a core team of six and a
                    family of 15 passionate people. Our growth has always been powered by
                    curiosity, creativity, and a love for building things that matter.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LOCATION + AWS — Bento grid
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TEAM
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-0 left-0 right-0 dotted-line-x" />
        <div className="section-container px-6 sm:px-12 md:px-24">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div>
                <SectionLabel>Our Team</SectionLabel>
                <h2
                  className="text-black text-balance mt-5"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontWeight: 400,
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1.1,
                    maxWidth: "400px",
                  }}
                >
                  The people{" "}
                  <span
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                    }}
                  >
                    behind Navchetna
                  </span>
                </h2>
              </div>
              <p
                className="text-black/40 max-w-xs text-pretty"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.7",
                }}
              >
                From five friends with a shared dream to a core team of six
                and a family of 15 passionate people.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1 — Co-founders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {team.slice(0, 4).map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <TeamCard member={m} />
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2 — Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {team.slice(4).map((m, i) => (
              <ScrollReveal key={m.name} delay={(i + 4) * 80}>
                <TeamCard member={m} />
              </ScrollReveal>
            ))}
          </div>

          {/* Join CTA */}
          <ScrollReveal delay={200}>
            <div
              className="mt-6 relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
              style={{
                background: "#080808",
                backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "72px 48px",
              }}
            >
              {/* corner accents */}
              <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
              <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
              <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
              <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />

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
                <Users className="size-3" />
                Join Our Growing Family
              </span>
              <h3
                className="text-white mb-5 text-balance text-center mx-auto"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 50,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  maxWidth: "520px",
                  color:"white"
                }}
              >
                Navchetna isn&apos;t just a company.{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    background: "linear-gradient(135deg, #fdece2 0%, #c4b0f5 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  It&apos;s a story.
                </span>
              </h3>
              <p
                className="text-white/40 max-w-lg mx-auto mb-10 text-pretty"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.7",
                }}
              >
                Dreaming big, working hard, and believing that learning and innovation
                can truly change the world. And honestly? We&apos;re just getting started.
              </p>
              <Link
                href="/career"
                className="blueprint-btn inline-flex items-center gap-2"
              >
                <Users className="size-3.5" />
                View Open Positions
                <ArrowRight className="size-3.5 text-white/50" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
