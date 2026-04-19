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
    linkedin: "https://www.linkedin.com/in/422h52219hsuya?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tag: "Founder",
    profileUrl: "/news/company-updates/ayushmaan-soni",
    github: "https://github.com/Ayush91225",
  },
  {
    name: "Varun Kumar",
    role: "Co-Founder",
    desc: "Another founding member focused on innovation and bringing creative ideas to life through technology.",
    avatar: "/assets/varun.jpg",
    linkedin: "https://www.linkedin.com/in/varun-yadav-navchetna?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tag: "Co-Founder",
    profileUrl: "/news/company-updates/varun-yadav",
    github: "https://github.com/varun-ya",
  },
  {
    name: "Swastik Khatua",
    role: "Co-Founder",
    desc: "Part of the founding team, bringing technical expertise and innovative solutions to complex challenges.",
    avatar: "/assets/swastik.jpg",
    linkedin: "https://www.linkedin.com/in/swastik-khatua-84798631b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tag: "Co-Founder",
    profileUrl: "/news/company-updates/swastik-khatua",
    github: "https://github.com/Swastik400",
  },
  {
    name: "Dhraval Narsinha",
    role: "Co-Founder",
    desc: "Founding member dedicated to building scalable solutions and driving product excellence.",
    avatar: "/assets/dhraval.jpg",
    linkedin: "https://www.linkedin.com/in/dhraval-narsinha-navchetna125?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tag: "Co-Founder",
    profileUrl: "/news/company-updates/dhraval-narsinha",
    github: "https://github.com/dhaual125",
  },
  {
    name: "Suman Yadav",
    role: "Co-Founder & HOD",
    desc: "Part of the founding team, leading product development and ensuring quality in everything we build.",
    avatar: "/assets/suman.jpg",
    linkedin: "https://www.linkedin.com/in/suman-yadav-bb5516322?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tag: "Co-Founder",
    profileUrl: "/news/company-updates/suman-yadav",
    github: "https://github.com/Suman1214129",
  },
  {
    name: "Tanmay",
    role: "Intern",
    desc: "Dedicated team member contributing to innovative solutions and technical excellence.",
    avatar: "/assets/tanmay.jpg",
    linkedin: "#",
    tag: "Intern",
  },
  {
    name: "Divyansh Singh",
    role: "Intern",
    desc: "Enthusiastic intern bringing fresh perspectives and energy to the team.",
    avatar: "/assets/divyansh.jpg",
    linkedin: "https://www.linkedin.com/in/divyansh-singh-747b55379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    tag: "Intern",
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
      className="group relative isolate h-full overflow-hidden rounded-3xl bg-white"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
      }}
    >
      {/* Avatar */}
      <Link href={(member as any).profileUrl || member.linkedin || "#"} className="relative block h-56 overflow-hidden bg-[#f5f3f1]">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover"
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
      </Link>

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
          className="pt-4 flex items-center gap-3"
          style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
        >
          <Link
            href={(member as any).profileUrl || member.linkedin || "#"}
            target={(member as any).profileUrl ? undefined : "_blank"}
            rel={(member as any).profileUrl ? undefined : "noopener noreferrer"}
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
          </Link>

          {/* GitHub icon */}
          <a
            href={(member as any).github || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto inline-flex items-center justify-center w-7 h-7 rounded-full border border-black/[0.08] text-black/30 hover:text-black hover:border-black/20 transition-colors duration-200"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
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
    <div className="bg-white">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO — Immersive full-height
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative flex items-center justify-center overflow-hidden border-b border-black/[0.12] pt-32 pb-14 md:pt-40 md:pb-24" style={{ background: "var(--quiet-gradient)" }}>
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

              {/* Headline */}
              <h1
                className="mb-5 text-black text-balance"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.15rem)",
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 500,
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
                <h2 className="section-heading max-w-sm">
                  Every great journey starts with a{" "}
                  <span className="serif-italic">
                    simple idea
                  </span>
                </h2>
                <p
                  className="mb-6 text-pretty"
                  style={{
                    color: "rgba(0, 0, 0, 0.48)",
                    lineHeight: 1.65,
                    fontSize: "0.88rem",
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
                }}
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image src="/assets/friends.jpg" alt="The founding team - Navchetna" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-top" />
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
                }}
              >
                <div className="relative h-64 overflow-hidden flex-shrink-0">
                  <Image src="/assets/20260419_015219.jpeg" alt="Navchetna is born - light painting" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
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
                style={{ background: "#ffffff", border: "1px solid rgba(0,0,0,0.07)", minHeight: "420px" }}
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


      <section className="py-24 md:py-32 relative bg-[#F8F8F7]">
        <div className="section-sep" />
        <div className="section-container px-6 sm:px-12 md:px-24">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <SectionLabel>Our Culture</SectionLabel>
              <h2 className="section-heading mt-6 mb-6">
                More Than Just <span className="serif-italic">Code.</span>
              </h2>
              <p
                className="mx-auto"
                style={{
                  color: "rgba(0, 0, 0, 0.48)",
                  lineHeight: 1.65,
                  fontSize: "1.05rem",
                  maxWidth: "520px",
                }}
              >
                We're friendly, approachable, and obsessed with making technology
                work for real people. Every idea we work on comes from the heart.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100/40 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-100/30 to-transparent rounded-tr-full" />
                <div className="absolute top-1/2 right-8 w-2 h-2 rounded-full bg-black/5" />
                <div className="absolute top-1/3 right-16 w-1.5 h-1.5 rounded-full bg-black/5" />
                
                <div className="relative z-10">
                  <div className="size-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, rgba(245,190,145,0.12) 0%, rgba(185,165,230,0.08) 100%)" }}>
                    <Flame className="size-5 text-black/60" />
                  </div>
                  <h3 className="text-[1.35rem] text-black mb-5 leading-tight" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>
                    From Dreamers to Builders
                  </h3>
                  <p className="text-black/50 text-[0.95rem] leading-[1.75]">
                    Back then, we were just a bunch of dreamers with laptops and big ideas.
                    No fancy offices, no investors, no roadmap — just a shared vision and a
                    lot of determination. We wanted to create solutions that actually help
                    learners and make learning exciting, not just another tech project.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="relative bg-white rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.06)" }}>
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-purple-100/40 to-transparent rounded-br-full" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-orange-100/30 to-transparent rounded-tl-full" />
                <div className="absolute bottom-1/3 left-8 w-2 h-2 rounded-full bg-black/5" />
                <div className="absolute bottom-1/2 left-16 w-1.5 h-1.5 rounded-full bg-black/5" />
                
                <div className="relative z-10">
                  <div className="size-12 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, rgba(185,165,230,0.12) 0%, rgba(245,190,145,0.08) 100%)" }}>
                    <Heart className="size-5 text-black/60" />
                  </div>
                  <h3 className="text-[1.35rem] text-black mb-5 leading-tight" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>
                    Today's Reality
                  </h3>
                  <p className="text-black/50 text-[0.95rem] leading-[1.75]">
                    Today, we've grown from five friends to a core team of six and a
                    family of 15 passionate people. Our growth has always been powered by
                    curiosity, creativity, and a love for building things that matter. The scale changed, but the heart remains the same.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
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
                <h2 className="section-heading max-w-sm mt-5 mb-0 text-balance">
                  The people{" "}
                  <span className="serif-italic">
                    behind Navchetna
                  </span>
                </h2>
              </div>
              <p
                className="mb-6 max-w-xs text-pretty"
                style={{
                  color: "rgba(0, 0, 0, 0.48)",
                  lineHeight: 1.65,
                  fontSize: "0.88rem",
                }}
              >
                From five friends with a shared dream to a core team of six
                and a family of 15 passionate people.
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1 — Co-founders */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {team.slice(0, 4).map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <TeamCard member={m} />
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2 — Team */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
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
                background: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%)",
                backgroundImage: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 32px 32px, 32px 32px",
                border: "1px solid rgba(0,0,0,0.08)",
                padding: "clamp(3rem, 10vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
              }}
            >
              {/* corner accents */}
              <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-black/15 to-transparent" />
              <span className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-black/15 to-transparent" />
              <span className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-black/15 to-transparent" />
              <span className="absolute bottom-0 right-0 h-12 w-px bg-gradient-to-t from-black/15 to-transparent" />
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-purple-200/20 to-transparent blur-3xl opacity-40" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-orange-200/20 to-transparent blur-3xl opacity-40" />

              <span
                className="inline-flex items-center gap-2 mb-7 text-black/50"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  border: "1px solid rgba(0,0,0,0.12)",
                  padding: "5px 14px",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <Users className="size-3" />
                Join Our Growing Family
              </span>
              <h3
                className="text-black mb-6 text-balance text-center mx-auto"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 50,
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  maxWidth: "520px",
                  color: "#000"
                }}
              >
                Navchetna isn&apos;t just a company.{" "}
                <span
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    background: "linear-gradient(135deg, #d4845a 0%, #8b6bc7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  It&apos;s a story.
                </span>
              </h3>
              <p
                className="text-black/55 max-w-lg mx-auto mb-10 text-pretty"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.8",
                }}
              >
                Dreaming big, working hard, and believing that learning and innovation
                can truly change the world. And honestly? We&apos;re just getting started.
              </p>
              <Link
                href="/career"
                className="mt-8 btn btn-primary inline-flex items-center gap-2"
                style={{ height: "2.5rem", padding: "0 1.5rem" }}
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
