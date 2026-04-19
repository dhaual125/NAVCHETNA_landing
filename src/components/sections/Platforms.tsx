import { ScrollReveal } from "@/components/ui/ScrollReveal";

const pillars = [
  {
    title: "Product Development",
    desc: "Web, mobile, desktop, and game experiences built with a clear product plan. We focus on scalable architecture and seamless user experiences across all devices.",
  },
  {
    title: "AI & Automation",
    desc: "LLM workflows, recommendation systems, and automation that reduce manual effort. We integrate intelligent agents that learn and adapt to your organizational needs.",
  },
  {
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
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="section-sep" />

      <div className="section-container">
        {/* Header */}
        <ScrollReveal>
          <div className="mb-12 grid gap-6 md:grid-cols-[0.9fr_1fr] md:items-end">
            <div>
              <span className="chip mb-4">Services</span>
              <h2 className="section-heading max-w-xl">
                Practical systems,
                {" "}
                <span className="serif-italic">shaped with restraint.</span>
              </h2>
            </div>
            <p
              className="max-w-md md:justify-self-end"
              style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.68, fontSize: "0.94rem" }}
            >
              We keep the workflow focused: understand the problem, shape the experience,
              engineer the system, and support the launch with disciplined iteration.
            </p>
          </div>
        </ScrollReveal>

        {/* Dotted divider */}
        <div className="section-divider mb-10" />

        {/* Core Services — open typographic layout */}
        <div className="grid gap-10 md:grid-cols-3 mb-16">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.title} delay={index * 60}>
              <div className="flex flex-col">
                <span className="text-[10px] font-semibold text-black/30 mb-4 tracking-widest">
                  0{index + 1}
                </span>
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {pillar.title}
                </h3>
                <p style={{ color: "rgba(0,0,0,0.5)", lineHeight: 1.65, fontSize: "0.88rem" }}>
                  {pillar.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional capabilities — simple text list instead of chips */}
        <ScrollReveal delay={200}>
          <div className="border-t border-dotted border-black/[0.15] pt-8">
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
              <h4 
                className="whitespace-nowrap"
                style={{ 
                  fontFamily: "var(--font-waldenburg)", 
                  fontSize: "0.95rem",
                  color: "var(--heading-color)"
                }}
              >
                Also delivering:
              </h4>
              <p className="text-[0.88rem] leading-relaxed text-black/60">
                {capabilities.join(" · ")}
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
