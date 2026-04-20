import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { MonitorSmartphone, Bot, Lightbulb, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: MonitorSmartphone,
    title: "Product Development",
    desc: "Web, mobile, desktop, and game experiences built with a clear product plan. We focus on scalable architecture and seamless user experiences across all devices.",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    desc: "LLM workflows, recommendation systems, and automation that reduce manual effort. We integrate intelligent agents that learn and adapt to your organizational needs.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Management",
    desc: "Research, planning, cloud direction, and execution support for growing teams. We provide the technical leadership necessary to guide complex projects to completion.",
  },
];

const capabilities = [
  "Digital Marketing", "Brand Strategy", "Market Research", 
  "Content Creation", "Data Engineering", "Cybersecurity", 
  "Cloud Infrastructure", "3D & AR Experiences"
];

export function Platforms() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-white">
      <div className="section-container relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="section-heading max-w-xl mb-6">
              Practical systems,
              {" "}
              <span className="serif-italic">shaped with restraint.</span>
            </h2>
            <p
              className="max-w-xl"
              style={{ color: "rgba(0,0,0,0.50)", lineHeight: 1.68, fontSize: "0.98rem" }}
            >
              We keep the workflow focused: understand the problem, shape the experience,
              engineer the system, and support the launch with disciplined iteration.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Services — image-inspired layout */}
        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-3 border-y border-black/[0.08] mb-10">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className={`p-6 md:p-10 ${index !== 2 ? 'border-b md:border-b-0 md:border-r border-black/[0.08]' : ''}`}>
                <div className="inline-flex size-10 items-center justify-center rounded-xl border border-black/[0.08] mb-6">
                  <pillar.icon className="size-[18px] text-black/70 stroke-[1.5]" />
                </div>
                <h3 className="mb-3 text-[1.15rem] text-black font-medium leading-tight tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.65] text-black/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Additional capabilities — simple text list instead of chips */}
        <ScrollReveal delay={200}>
          <div className="pt-0">
            <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <h4 
                  className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.12em] text-black/40 shrink-0"
                >
                  Also delivering:
                </h4>
                <p className="text-[13.5px] leading-relaxed text-black/45 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {capabilities.join(" · ")}
                </p>
              </div>
              
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-black text-white text-[11px] font-bold uppercase tracking-[0.08em] hover:bg-black/80 transition-all duration-300 shadow-md shadow-black/5 group"
              >
                View all services
                <ArrowRight className="size-3.5 text-white/70 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
