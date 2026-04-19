import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Briefcase,
  Coffee,
  GraduationCap,
  Heart,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers - NAVCHETNA TECHNOLOGIES",
  description: "Join Navchetna Technologies and help build conscious technology that impacts real lives across India.",
};

const perks = [
  { icon: Rocket, title: "Build What Matters", desc: "Work on products like Osmium and Natraj that solve practical problems." },
  { icon: GraduationCap, title: "Learn Every Day", desc: "Explore AI, AR, cloud, product thinking, and design through real work." },
  { icon: Users, title: "Small Team, Big Impact", desc: "A close team where ownership is visible and ideas move quickly." },
  { icon: Heart, title: "Culture of Care", desc: "Flexible collaboration, supportive peers, and a healthy learning environment." },
  { icon: Coffee, title: "Builder Energy", desc: "Curious, scrappy, and focused on shipping useful things with taste." },
  { icon: Sparkles, title: "Grow With Us", desc: "Early team members help shape how the company builds and operates." },
];

const categories = ["Engineering", "Design", "Business", "Marketing", "Operations"];

export default function CareerPage() {
  return (
    <main className="bg-[var(--page-bg)]">
      <section className="relative border-b border-black/[0.12] pt-28 pb-12 md:pt-36 md:pb-16" style={{ background: "var(--quiet-gradient)" }}>
        <div className="grid-overlay" />
        <div className="section-container relative z-10 mx-auto grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full border border-black/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/42">
                Careers
              </span>
              <h1
                className="text-black text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Build useful technology with a{" "}
                <span className="serif-italic">
                  focused team.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-black/50" style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7 }}>
                Join Navchetna Technologies and help shape products, platforms,
                and learning systems that create visible impact across India.
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-[13px] font-medium text-black/52">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-black/34" />
                  Jodhpur & Ahmedabad
                </span>
                <span className="inline-flex items-center gap-2">
                  <Users className="size-4 text-black/34" />
                  15+ team members
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#positions" className="inline-flex h-10 items-center justify-center rounded-full bg-black px-4 text-[13px] font-semibold text-white">
                  View positions
                </a>
                <Link href="/about" className="inline-flex h-10 items-center justify-center rounded-full border border-black/[0.10] px-4 text-[13px] font-semibold text-black/72">
                  Our story
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="rounded-[var(--panel-radius)] bg-white p-4 ring-1 ring-black/[0.06]">
              <div
                className="relative h-44 overflow-hidden rounded-[12px] bg-[#f4f4f3]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.12) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
              >
                <div className="absolute left-1/2 top-1/2 size-[4.5rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_18px_50px_-32px_rgba(0,0,0,0.45)] ring-1 ring-black/[0.06]" />
                <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[14px] bg-black text-white">
                  <Briefcase className="size-5" />
                </div>
                {[0, 1, 2, 3].map((i) => (
                  <span
                    key={i}
                    className="absolute rounded-full border border-black/[0.08]"
                    style={{
                      width: `${104 + i * 32}px`,
                      height: `${104 + i * 32}px`,
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                {["Product", "AI", "Design"].map((item) => (
                  <span key={item} className="rounded-full bg-black/[0.035] px-3 py-2 text-xs font-semibold text-black/54">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-[4.5rem]">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">
                  Culture
                </p>
                <h2
                  className="max-w-xl text-black"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.08,
                  }}
                >
                  A calm place to do <span className="serif-italic">ambitious work.</span>
                </h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-black/48">
                We value taste, ownership, curiosity, and direct communication.
              </p>
            </div>
          </ScrollReveal>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 40}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-black/[0.02] border border-black/[0.06] p-7 transition-all duration-500 hover:bg-black/[0.04] hover:border-black/[0.12]">
                  {/* Subtle Blueprint Background on Hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                  
                  <span className="relative mb-6 flex size-10 items-center justify-center rounded-xl bg-white shadow-sm border border-black/[0.05] text-black/70">
                    <perk.icon className="size-4" />
                  </span>
                  <h3 className="relative text-lg font-medium text-black tracking-tight" style={{ fontFamily: "var(--font-waldenburg)" }}>{perk.title}</h3>
                  <p className="relative mt-3 text-[14px] leading-relaxed text-black/60">{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="positions" className="scroll-mt-24 border-t border-black/[0.06] py-14 md:py-[4.5rem]">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-7 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">
                  Open Positions
                </p>
                <h2 
                  className="text-black"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(2rem, 4vw, 3.2rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.08,
                  }}
                >
                  Current openings
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span key={category} className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-black/52 ring-1 ring-black/[0.06]">
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="rounded-[var(--panel-radius)] bg-white p-6 ring-1 ring-black/[0.06] md:flex md:items-center md:justify-between md:gap-8">
              <div className="flex gap-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-[var(--soft-radius)] bg-black/[0.045] text-black/44">
                  <Users className="size-6" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-black">No open positions currently</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-black/48">
                    We are not actively hiring right now, but we are always open
                    to meeting thoughtful builders who care about product,
                    design, engineering, and impact.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-black px-5 text-sm font-semibold text-white md:mt-0"
              >
                <Mail className="size-4" />
                Send Resume
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="section-container">
          <div
            className="relative isolate overflow-hidden rounded-2xl p-8 md:p-12 text-white"
            style={{
              background: "#080808",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
            <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
            <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
            <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />
            <ScrollReveal>
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/50">
                  Stay connected
                </p>
                <h2 
                  className="max-w-xl text-white"
                  style={{
                    color: "#fff",
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    lineHeight: 1.1,
                  }}
                >
                  Don&apos;t see a role? Send us your <span className="serif-italic" style={{ background: "linear-gradient(135deg, #fdece2 0%, #d2b9f5 100%)", WebkitBackgroundClip: "text", color: "transparent" }}>work anyway.</span>
                </h2>
              </div>
              <Link href="/contact" className="inline-flex h-10 w-max items-center justify-center rounded-full bg-white px-4 text-[13px] font-semibold text-black">
                Get in touch
              </Link>
            </div>
          </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
