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
  { icon: Coffee, title: "Builder Energy", desc: "Curious, scrappy, and focused on shipping useful things with taste." },
];

const categories = ["Engineering", "Design", "Business", "Marketing", "Operations"];

export default function CareerPage() {
  return (
    <main className="bg-white">
      <section className="relative border-b border-black/[0.12] pt-28 pb-12 md:pt-36 md:pb-16" style={{ background: "var(--quiet-gradient)" }}>
        <div className="grid-overlay" />
        <div className="section-container relative z-10 mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">

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
        </div>
      </section>

      <section className="py-14 md:py-[4.5rem]">
        <div className="section-container">
          <ScrollReveal>
            <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">
                  Working Here
                </p>
                <h2 className="section-heading max-w-sm text-black">
                  How we <span className="serif-italic">Work.</span>
                </h2>
              </div>
              <p
                className="mb-6 max-w-md text-pretty"
                style={{
                  color: "rgba(0, 0, 0, 0.48)",
                  lineHeight: 1.65,
                  fontSize: "0.88rem",
                }}
              >
                We focus on building, learning, and shipping great products without unnecessary bureaucracy.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 border-y border-black/[0.08] mb-16">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 40}>
                <div className={`h-full p-6 md:p-10 ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-black/[0.08]' : ''}`}>
                  <div className="inline-flex size-10 items-center justify-center rounded-xl border border-black/[0.08] mb-6">
                    <perk.icon className="size-[18px] text-black/70 stroke-[1.5]" />
                  </div>
                  <h3 className="mb-3 text-[1.15rem] text-black font-medium leading-tight tracking-tight">
                    {perk.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.65] text-black/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {perk.desc}
                  </p>
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
                <h2 className="section-heading max-w-sm text-black">
                  Current <span className="serif-italic">Openings.</span>
                </h2>
              </div>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            <div className="rounded-[var(--panel-radius)] bg-white p-6 ring-1 ring-black/[0.06] md:flex md:items-center md:justify-between md:gap-8">
              <div className="flex gap-5">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08]">
                  <Users className="size-[18px] text-black/70 stroke-[1.5]" />
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
            className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
            style={{
              background: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%)",
              backgroundImage: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 32px 32px, 32px 32px",
              border: "1px solid rgba(0,0,0,0.08)",
              padding: "clamp(2.5rem, 8vw, 3.5rem) clamp(1.5rem, 5vw, 3rem)",
            }}
          >
            <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-black/15 to-transparent" />
            <span className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-black/15 to-transparent" />
            <span className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-black/15 to-transparent" />
            <span className="absolute bottom-0 right-0 h-12 w-px bg-gradient-to-t from-black/15 to-transparent" />
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-purple-200/20 to-transparent blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-orange-200/20 to-transparent blur-3xl opacity-40" />
            <ScrollReveal>
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2
                  className="mb-4 text-balance"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    color: "#000"
                  }}
                >
                  Don&apos;t see a role? Send us your{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #d4845a 0%, #8b6bc7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>work anyway.</span>
                </h2>
                <p
                  className="mb-7 text-black/60"
                  style={{ lineHeight: 1.65, fontSize: "0.92rem", maxWidth: "480px", margin: "0 auto 1.75rem" }}
                >
                  We are always open to meeting thoughtful builders who care about product, design, engineering, and impact.
                </p>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-black px-6 text-sm font-semibold text-white hover:bg-black/80 transition-colors" style={{ height: "2.5rem" }}>
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
