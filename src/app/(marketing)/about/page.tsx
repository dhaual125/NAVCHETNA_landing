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
  TrendingUp,
  ChevronRight,
  ArrowDown,
  CheckCircle2,
  Lightbulb,
  Layers,
  Rocket,
  LifeBuoy,
  Cloud,
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
  { value: "15+", label: "Team Members", Icon: Users },
  { value: "4", label: "Core Products", Icon: Layers },
  { value: "2024", label: "Founded", Icon: Calendar },
  { value: "5", label: "Co-Founders", Icon: Heart },
];

const processSteps = [
  {
    num: "01",
    icon: Lightbulb,
    title: "Plan",
    desc: "Listen, understand, and map together",
  },
  {
    num: "02",
    icon: Crosshair,
    title: "Strategy",
    desc: "Clear steps and milestones",
  },
  {
    num: "03",
    icon: Layers,
    title: "Development",
    desc: "Build, tweak, perfect",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deployment",
    desc: "Launch, monitor, support",
  },
];

const philosophy = [
  {
    icon: Heart,
    title: "Human-Centered Design",
    desc: "We start with people, not technology. Every solution begins with understanding real problems and real needs.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Learning",
    desc: "We're always learning, always improving. Every project teaches us something new about making technology better.",
  },
  {
    icon: Users,
    title: "Community First",
    desc: "We measure success by the positive impact we create in people's lives and communities, not just metrics.",
  },
];

const team = [
  {
    name: "Ayushmaan Soni",
    role: "Founder & CEO",
    desc: "One of the five friends who started this journey, passionate about making technology work for real people.",
    avatar: "/ref/voice-bg-04.png",
    linkedin: "https://www.linkedin.com/in/422h52219hsuya/",
  },
  {
    name: "Varun Kumar",
    role: "Co-Founder",
    desc: "Another founding member focused on innovation and bringing creative ideas to life through technology.",
    avatar: "/ref/voice-bg-01.png",
    linkedin: "https://www.linkedin.com/in/varun-yadav-Navchetna Technology/",
  },
  {
    name: "Swastik Khatua",
    role: "Co-Founder",
    desc: "Part of the founding team, bringing technical expertise and innovative solutions to complex challenges.",
    avatar: "/ref/voice-bg-03.png",
    linkedin: "https://www.linkedin.com/in/swastik-khatua-84798631b/",
  },
  {
    name: "Dhraval Narsinha",
    role: "Co-Founder",
    desc: "Founding member dedicated to building scalable solutions and driving product excellence.",
    avatar: "/ref/voice-bg-07.png",
    linkedin: "https://www.linkedin.com/in/dhraval-narsinha-Navchetna Technology125/",
  },
  {
    name: "Suman Yadav",
    role: "Co-Founder & HOD",
    desc: "Part of the founding team, leading product development and ensuring quality in everything we build.",
    avatar: "/ref/voice-bg-05.png",
    linkedin: "https://www.linkedin.com/in/suman-yadav-bb5516322/",
  },
  {
    name: "Aman Gupta",
    role: "Executive",
    desc: "Strategic executive focused on business development and operational excellence.",
    avatar: "/ref/voice-bg-02.png",
    linkedin: "#",
  },
  {
    name: "Kuldeep Thakar",
    role: "Executive",
    desc: "Dedicated team member contributing to innovative solutions and technical excellence.",
    avatar: "/ref/voice-bg-06.png",
    linkedin: "#",
  },
  {
    name: "Tanmay",
    role: "Team Member",
    desc: "Dedicated team member contributing to innovative solutions and technical excellence.",
    avatar: "/ref/voice-bg-08.png",
    linkedin: "#",
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

function StatCard({
  value,
  label,
  Icon,
}: {
  value: string;
  label: string;
  Icon: React.ElementType;
}) {
  const { ref, display } = useCountUp(value);
  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center p-8 rounded-2xl bg-white"
      style={{ border: "1px solid rgba(0,0,0,0.06)" }}
    >
      <div
        className="flex items-center justify-center size-12 rounded-xl mb-5"
        style={{ background: "rgba(0,0,0,0.04)" }}
      >
        <Icon className="size-5 text-black/50" />
      </div>
      <p
        className="text-black mb-1"
        style={{
          fontSize: "clamp(2rem, 4vw, 3rem)",
          letterSpacing: "-0.04em",
          fontFamily: "var(--font-waldenburg)",
          fontWeight: 400,
          lineHeight: 1,
        }}
      >
        {display}
      </p>
      <p
        className="text-black/50"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.14px",
        }}
      >
        {label}
      </p>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Team Card
   ────────────────────────────────────────────────────── */

function TeamCard({ member }: { member: (typeof team)[number] }) {
  return (
    <div
      className="group relative isolate h-full overflow-hidden rounded-2xl bg-white"
      style={{ border: "1px solid rgba(0,0,0,0.07)" }}
    >
      {/* Avatar */}
      <div className="relative h-52 overflow-hidden bg-black/5">
        <Image
          src={member.avatar}
          alt={member.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Info */}
      <div className="p-5">
        {/* Role tag */}
        <span
          className="inline-block mb-3 text-black/40"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.9px",
            textTransform: "uppercase",
          }}
        >
          {member.role}
        </span>

        <h3
          className="text-black mb-2"
          style={{
            fontFamily: "var(--font-waldenburg)",
            fontWeight: 300,
            fontSize: "18px",
            letterSpacing: "-0.2px",
            lineHeight: 1.2,
          }}
        >
          {member.name}
        </h3>

        <p
          className="text-black/50 text-pretty"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            lineHeight: 1.6,
          }}
        >
          {member.desc}
        </p>

        {/* LinkedIn */}
        <div className="mt-4 flex items-center justify-between">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-black/40 hover:text-black transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            <svg viewBox="0 0 16 16" fill="currentColor" className="size-3.5">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H6.29c.032.678 0 7.225 0 7.225h2.36z" />
            </svg>
            LinkedIn
          </a>
          <ChevronRight className="size-3.5 text-black/20 group-hover:text-black/50 transition-colors" />
        </div>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Page Component
   ────────────────────────────────────────────────────── */

export default function AboutPage() {
  return (
    <div className="bg-[var(--page-bg)]">

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[var(--page-bg)]">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 py-32 sm:py-40 w-full">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto flex flex-col items-center">

              {/* Tag */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-[4px]"
                style={{
                  boxShadow: "rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset",
                  background: "transparent",
                }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-black/40" />
                <span
                  className="text-[12px] font-medium text-black/60"
                  style={{ letterSpacing: "0.14px", fontFamily: "'Inter', sans-serif" }}
                >
                  Our Story
                </span>
              </div>

              {/* Headline */}
              <h1
                className="mb-8 text-black text-balance"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.03em",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                Building the Future with{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                  Conscious Intelligence
                </span>
              </h1>

              {/* Sub copy */}
              <p
                className="text-black/55 max-w-xl mx-auto text-pretty mb-14"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.65",
                  letterSpacing: "0.1px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                }}
              >
                From five friends with a shared dream — a story of friendship,
                late-night ideas, and the belief that learning and innovation
                can truly change the world.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2"
                  style={{
                    background: "#000000",
                    color: "#ffffff",
                    padding: "12px 20px 12px 14px",
                    borderRadius: "30px",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "15px",
                  }}
                >
                  Our Mission
                  <ChevronRight className="size-4 text-white/40" />
                </Link>

                <button
                  onClick={() => {
                    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 cursor-pointer"
                  style={{
                    background: "transparent",
                    color: "#000000",
                    padding: "12px 20px",
                    borderRadius: "9999px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "15px",
                  }}
                >
                  Our Journey
                  <ArrowDown className="size-4 text-black/40" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          VALUES TICKER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-10 overflow-hidden"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)", borderBottom: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="flex whitespace-nowrap ticker-track">
          {[...values, ...values, ...values].map((v, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2.5 px-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(0,0,0,0.4)",
              }}
            >
              <v.Icon className="size-4 text-black/30" />
              {v.label}
              <span className="mx-4 text-black/15">·</span>
            </span>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          MISSION — large editorial statement
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 md:py-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
              {/* Label column */}
              <div className="lg:pt-3">
                <span
                  className="block text-black/40 uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  Our Mission
                </span>
                <div
                  className="mt-6 w-8 h-px"
                  style={{ background: "rgba(0,0,0,0.15)" }}
                />
              </div>

              {/* Statement */}
              <div>
                <h2
                  className="text-black text-balance mb-8"
                  style={{
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    lineHeight: "1.18",
                    letterSpacing: "-0.02em",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Technology should make life better,{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    not more complicated.
                  </span>
                </h2>
                <p
                  className="text-black/55 text-pretty"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "17px",
                    lineHeight: "1.65",
                    maxWidth: "600px",
                  }}
                >
                  We keep things simple, practical, and transparent. Our approach
                  focuses on building technology that actually helps people and
                  makes their lives better.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} value={s.value} label={s.label} Icon={s.Icon} />
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          JOURNEY — Story blocks
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        id="journey"
        className="py-16 md:py-24"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="mb-16">
              <span
                className="block text-black/40 uppercase mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                Our Journey
              </span>
              <h2
                className="text-black"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.1,
                  maxWidth: "520px",
                }}
              >
                Every great journey starts with a{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                  simple idea
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-5">

            {/* Block 1 — The Beginning */}
            <ScrollReveal>
              <div
                className="relative rounded-3xl overflow-hidden bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <span
                      className="inline-block mb-5 text-black/40 uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        border: "1px solid rgba(0,0,0,0.08)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        width: "fit-content",
                      }}
                    >
                      The Beginning — Sep 6, 2024
                    </span>
                    <h3
                      className="text-black mb-5"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 300,
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Five friends, one spark
                    </h3>
                    <p
                      className="text-black/55 leading-relaxed text-pretty"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      Every great journey starts with a simple idea — and ours started on
                      6th September 2024. Five friends — Ayushmaan, Varun, Suman, Swastik,
                      and Dhraval — were sitting together, talking about school, college,
                      and life, and suddenly realized something: education could be so much
                      better with the right tools and technology.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto min-h-[280px]">
                    <Image
                      src="/ref/Navchetna Technology-team.png"
                      alt="The beginning"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 2 — The Birth */}
            <ScrollReveal>
              <div
                className="relative rounded-3xl overflow-hidden bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto min-h-[280px] order-2 lg:order-1">
                    <Image
                      src="/ref/xuo8mc9lweg-dali.jpeg"
                      alt="Late night brainstorming"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center order-1 lg:order-2">
                    <span
                      className="inline-block mb-5 text-black/40 uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        border: "1px solid rgba(0,0,0,0.08)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        width: "fit-content",
                      }}
                    >
                      The Birth
                    </span>
                    <h3
                      className="text-black mb-5"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 300,
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      Navchetna is born
                    </h3>
                    <p
                      className="text-black/55 leading-relaxed text-pretty"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      From that conversation, late-night brainstorming sessions, and
                      countless cups of coffee, Navchetna was born. Today, we&apos;re
                      proud to be based in Jodhpur, Rajasthan and Ahmedabad, Gujarat —
                      creating solutions that make learning smarter and more accessible
                      for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Block 3 — The Growth */}
            <ScrollReveal>
              <div
                className="relative rounded-3xl overflow-hidden bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.07)" }}
              >
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-center">
                    <span
                      className="inline-block mb-5 text-black/40 uppercase"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        border: "1px solid rgba(0,0,0,0.08)",
                        padding: "4px 10px",
                        borderRadius: "4px",
                        width: "fit-content",
                      }}
                    >
                      The Growth
                    </span>
                    <h3
                      className="text-black mb-5"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 300,
                        fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      From dreamers to builders
                    </h3>
                    <p
                      className="text-black/55 leading-relaxed text-pretty"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.7",
                      }}
                    >
                      Back then, we were just a bunch of dreamers with laptops and big
                      ideas. No fancy offices, no investors — just a shared vision and a
                      lot of determination. Today, we&apos;ve grown from five friends to a
                      core team of six and a family of 15 passionate people. Our growth
                      has always been powered by curiosity, creativity, and a love for
                      building things that matter.
                    </p>
                  </div>
                  <div className="relative h-64 lg:h-auto min-h-[280px]">
                    <Image
                      src="/ref/yi3fbo0ee5-mozart.jpeg"
                      alt="Growth"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          VISION — Full-width editorial dark block
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-6 px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-3xl bg-black text-center"
              style={{ minHeight: "340px" }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/ref/7ga82q8pxzm-deutsche-telekom-bg.jpeg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-25"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.07]" />

              <div className="relative z-10 px-8 sm:px-14 py-20 max-w-3xl mx-auto">
                <span
                  className="inline-block mb-6 text-white/50 uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  Our Vision
                </span>
                <h2
                  className="text-white text-balance mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.025em",
                  }}
                >
                  A story of friendship, late-night ideas, and the belief that{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    learning and innovation can truly change the world.
                  </span>
                </h2>
                <p
                  className="text-white/55 text-pretty"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.65",
                  }}
                >
                  Navchetna isn&apos;t just a company. It&apos;s about dreaming big,
                  working hard, and believing that learning and innovation can truly
                  change the world. And honestly? We&apos;re just getting started.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PROCESS — How we work
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-24 md:py-32"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start mb-16">
              <div>
                <span
                  className="block text-black/40 uppercase mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  How We Work
                </span>
                <h2
                  className="text-black"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.15,
                  }}
                >
                  Simple, practical &{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    transparent
                  </span>
                </h2>
              </div>
              <p
                className="text-black/50 text-pretty self-end"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  lineHeight: "1.65",
                  maxWidth: "520px",
                }}
              >
                Our approach focuses on building technology that actually helps people and
                makes their lives better. No complexity for complexity&apos;s sake.
              </p>
            </div>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 100}>
                <div
                  className="relative h-full rounded-2xl bg-white p-7 flex flex-col"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  {/* Number */}
                  <span
                    className="text-black/15 mb-6 block"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontSize: "36px",
                      fontWeight: 300,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div
                    className="flex items-center justify-center size-10 rounded-xl mb-5"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <step.icon className="size-5 text-black/50" />
                  </div>

                  {/* Text */}
                  <h3
                    className="text-black mb-2"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontWeight: 300,
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-black/45 text-sm"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    {step.desc}
                  </p>

                  {/* Connector dot (not on last) */}
                  {i < processSteps.length - 1 && (
                    <div
                      className="absolute top-7 right-0 translate-x-1/2 size-2 rounded-full bg-black/10 hidden lg:block"
                    />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          OUR CULTURE — 2-col editorial
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-24 md:py-32"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
              {/* Left: headline */}
              <div>
                <span
                  className="block text-black/40 uppercase mb-6"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  Our Culture
                </span>
                <h2
                  className="text-black mb-8"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.12,
                  }}
                >
                  More Than Just{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    Code
                  </span>
                </h2>
                <p
                  className="text-black/55 text-pretty"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "17px",
                    lineHeight: "1.65",
                    maxWidth: "440px",
                  }}
                >
                  We&apos;re friendly, approachable, and obsessed with making technology
                  work for real people. Every idea we work on comes from the heart.
                </p>
              </div>

              {/* Right: two text blocks */}
              <div className="space-y-10">
                {/* Block A */}
                <div
                  className="rounded-2xl bg-white p-8"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <h3
                    className="text-black mb-4"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontWeight: 300,
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    From Dreamers to Builders
                  </h3>
                  <p
                    className="text-black/50 text-pretty"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.7",
                    }}
                  >
                    Back then, we were just a bunch of dreamers with laptops and big ideas.
                    No fancy offices, no investors, no roadmap — just a shared vision and a
                    lot of determination. We wanted to create solutions that actually help
                    learners and make learning exciting, not just another tech project.
                  </p>
                </div>

                {/* Block B */}
                <div
                  className="rounded-2xl bg-white p-8"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <h3
                    className="text-black mb-4"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontWeight: 300,
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Today&apos;s Reality
                  </h3>
                  <p
                    className="text-black/50 text-pretty"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.7",
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
      <section
        className="py-8 px-5 sm:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-5">

            {/* Location card */}
            <ScrollReveal>
              <div
                className="relative rounded-3xl overflow-hidden bg-white"
                style={{ border: "1px solid rgba(0,0,0,0.07)", minHeight: "280px" }}
              >
                <div className="p-8 md:p-10">
                  <div
                    className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-[4px]"
                    style={{ border: "1px solid rgba(0,0,0,0.08)" }}
                  >
                    <MapPin className="size-3.5 text-black/40" />
                    <span
                      className="text-black/50"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.5px",
                      }}
                    >
                      Our Location
                    </span>
                  </div>
                  <h3
                    className="text-black mb-4"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontWeight: 300,
                      fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.2,
                    }}
                  >
                    Proudly based in Jodhpur &amp; Ahmedabad
                  </h3>
                  <p
                    className="text-black/50 text-pretty"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      lineHeight: "1.65",
                      maxWidth: "480px",
                    }}
                  >
                    Rajasthan and Gujarat, India — where tradition meets innovation and
                    every sunset inspires new possibilities.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* AWS card */}
            <ScrollReveal delay={100}>
              <div
                className="relative rounded-3xl bg-white h-full p-8 md:p-10 flex flex-col justify-between"
                style={{ border: "1px solid rgba(0,0,0,0.07)", minHeight: "280px" }}
              >
                <div>
                  <div
                    className="inline-flex items-center justify-center size-12 rounded-2xl mb-6"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <Cloud className="size-6 text-black/40" />
                  </div>
                  <h3
                    className="text-black mb-4"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontWeight: 300,
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    Official AWS India Collaboration
                  </h3>
                </div>

                <div className="space-y-2.5 mt-4">
                  {[
                    "Reliable, scalable solutions",
                    "Enterprise-ready infrastructure",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-black/30" />
                      <span
                        className="text-black/55"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          PHILOSOPHY — 3 premium cards
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-24 md:py-32"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 max-w-xl mx-auto">
              <span
                className="block text-black/40 uppercase mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                Our Philosophy
              </span>
              <h2
                className="text-black"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.12,
                }}
              >
                Innovation Served{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                  Hotter Than Coffee
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-5 md:grid-cols-3">
            {philosophy.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 100}>
                <div
                  className="flex h-full flex-col rounded-2xl bg-white p-8"
                  style={{ border: "1px solid rgba(0,0,0,0.07)" }}
                >
                  <div
                    className="flex items-center justify-center size-12 rounded-2xl mb-7"
                    style={{ background: "rgba(0,0,0,0.04)" }}
                  >
                    <p.icon className="size-5 text-black/50" />
                  </div>
                  <h3
                    className="text-black mb-3"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontWeight: 300,
                      fontSize: "20px",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    className="text-black/50 leading-relaxed text-pretty"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      lineHeight: "1.7",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          TEAM
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="py-24 md:py-32"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
              <div>
                <span
                  className="block text-black/40 uppercase mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "1px",
                  }}
                >
                  Our Team
                </span>
                <h2
                  className="text-black text-balance"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.12,
                    maxWidth: "440px",
                  }}
                >
                  The people behind{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    Navchetna
                  </span>
                </h2>
              </div>
              <p
                className="text-black/45 max-w-sm text-pretty lg:text-right"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  lineHeight: "1.65",
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
              className="mt-8 rounded-3xl bg-white p-10 md:p-14 text-center"
              style={{ border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <span
                className="block text-black/40 uppercase mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                Join Our Growing Family
              </span>
              <h3
                className="text-black mb-5 text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 300,
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Navchetna isn&apos;t just a company. It&apos;s a story of
                friendship, late-night ideas, and big dreams.
              </h3>
              <p
                className="text-black/45 max-w-lg mx-auto mb-8 text-pretty"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: "1.65",
                }}
              >
                Dreaming big, working hard, and believing that learning and innovation
                can truly change the world. And honestly? We&apos;re just getting started.
              </p>
              <Link
                href="/career"
                className="inline-flex items-center gap-2"
                style={{
                  background: "#000000",
                  color: "#ffffff",
                  padding: "12px 22px",
                  borderRadius: "9999px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "15px",
                }}
              >
                <Users className="size-4" />
                View Open Positions
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM CTA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section
        className="pb-24 md:pb-32 px-5 sm:px-8"
        style={{ borderTop: "1px solid rgba(0,0,0,0.05)" }}
      >
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-3xl bg-black text-center"
              style={{ paddingTop: "80px", paddingBottom: "80px" }}
            >
              <div className="absolute inset-0">
                <Image
                  src="/ref/green.jpeg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-3xl ring-[0.5px] ring-inset ring-white/[0.075]" />

              <div className="relative z-10 px-8 sm:px-14 max-w-2xl mx-auto">
                <span
                  className="inline-block mb-6 text-white/50 uppercase"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    padding: "4px 12px",
                    borderRadius: "4px",
                  }}
                >
                  Let&apos;s Connect
                </span>
                <h2
                  className="text-white text-balance mb-5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(1.8rem, 4vw, 3rem)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                  }}
                >
                  Ready to Transform Your Vision{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                    into Reality?
                  </span>
                </h2>
                <p
                  className="text-white/55 text-pretty mb-10"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.65",
                  }}
                >
                  Let&apos;s discuss how Navchetna can help bring your ideas to life
                  with conscious intelligence.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black font-medium transition-all hover:bg-white/90"
                    style={{
                      padding: "12px 24px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    Start a Conversation
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full text-white font-medium"
                    style={{
                      padding: "12px 24px",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      fontWeight: 500,
                      background: "rgba(255,255,255,0.1)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
