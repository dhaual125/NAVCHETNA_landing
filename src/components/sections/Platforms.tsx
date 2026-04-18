import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Smartphone,
  Brain,
  Star,
  Megaphone,
  Palette,
  FileText,
  Video,
} from "lucide-react";

const pillars = [
  {
    title: "Product Development",
    desc: "Cross-platform design & development from start to finish. Android, iOS, Web, Desktop, and Game development.",
    icon: Smartphone,
    tags: ["Scalable", "Adaptive"],
  },
  {
    title: "AI & Automation",
    desc: "AI-driven automation, recommendation engines, custom LLMs — combined with engaging UI/UX and creative branding.",
    icon: Brain,
    tags: ["Optimized", "Intelligent"],
    highlight: true,
  },
  {
    title: "Strategy & Management",
    desc: "From project management and marketing to research, cloud, and IoT — we help you scale with confidence.",
    icon: Star,
    tags: ["Reliable", "Growth-focused"],
  },
];

const capabilities = [
  { icon: Megaphone, title: "Marketing & Outreach", desc: "Digital, print, & social reach strategies." },
  { icon: Palette, title: "Design & Branding", desc: "Impactful logos and visuals that build identity." },
  { icon: FileText, title: "Research & Documentation", desc: "Structured insights & technical writing." },
  { icon: Video, title: "Content Creation", desc: "Video, writing, and editing for growth." },
];

export function Platforms() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-[var(--page-bg)]">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, transparent 40%, var(--page-bg) 100%)" }} />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-black/5 text-xs font-medium uppercase tracking-wider text-black/60">
              Services & Capabilities
            </span>
            <h2
              className="text-black text-balance leading-tight max-w-2xl mb-6"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontFamily: "var(--font-montserrat)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.08,
              }}
            >
              Our Proven &{" "}
              <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                Intelligent Approach
              </span>
            </h2>
            <p className="type-lg text-black/60 text-pretty max-w-xl leading-relaxed" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>
              From analysis to implementation — we provide the comprehensive architecture you need to
              automate, optimize, and massively scale your operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Three Pillars Bento Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 100}>
              <div
                className="group relative isolate h-full overflow-hidden rounded-[2rem] bg-white text-black"
                style={{
                  border: "1px solid var(--card-border)",
                }}
              >
                <div className="relative flex h-full flex-col p-8 sm:p-10 z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center justify-center size-12 rounded-[1rem] bg-black/5">
                      <p.icon className="h-6 w-6 text-black" />
                    </div>
                  </div>

                  <h3 className="type-2xl font-medium mb-3 tracking-tight">{p.title}</h3>
                  <p className="type-sm leading-relaxed text-pretty text-black/60">
                    {p.desc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-medium bg-black/5 text-black">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Capabilities Row Bento Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <ScrollReveal key={c.title} delay={i * 80}>
              <div
                className="rounded-[1.5rem] bg-[var(--card-bg)] p-6"
                style={{
                  border: "1px solid var(--card-border)"
                }}
              >
                <div className="flex flex-col gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5">
                    <c.icon className="h-4 w-4 text-black" />
                  </span>
                  <div>
                    <h4 className="type-base font-medium text-black mb-1.5">{c.title}</h4>
                    <p className="type-sm text-black/60">{c.desc}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
