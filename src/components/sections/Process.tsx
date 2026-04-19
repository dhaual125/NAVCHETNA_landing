"use client";

import { useState } from "react";
import { MagnifyingGlass, Lightning, Rocket, CheckCircle, Handshake, HandHeart } from "@phosphor-icons/react";
import Image from "next/image";

const phases = [
  {
    id: "plan",
    label: "Plan",
    title: "Plan",
    desc: "Every project begins with clarity. We listen, research, and map a practical strategy aligned on timelines, budgets, and goals.",
    items: [
      { icon: MagnifyingGlass, title: "Deep Research", desc: "Understand the market, needs, and scale." },
      { icon: Handshake, title: "Strategic Alignment", desc: "Transparent communication from day one." },
    ],
  },
  {
    id: "development",
    label: "Development",
    title: "Development",
    desc: "Our engineers bring ideas to life with a rigorous approach that balances speed, reliability, and long-term maintainability.",
    items: [
      { icon: Lightning, title: "Agile Execution", desc: "Flexible, rapid, and adaptive to change." },
      { icon: CheckCircle, title: "Zero-Compromise", desc: "Every line tested for reliability." },
    ],
  },
  {
    id: "release",
    label: "Release",
    title: "Release",
    desc: "Seamless launches, careful monitoring, and ongoing support keep the system performing after it ships.",
    items: [
      { icon: Rocket, title: "Seamless Deployment", desc: "A steady path from build to production." },
      { icon: HandHeart, title: "Lifecycle Support", desc: "An extension of your team post-release." },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="grid-overlay opacity-50" />
      <div className="section-sep" />

      <div className="section-container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="chip mb-4">Process</span>
            <h2 className="section-heading">Executing vision with <span className="serif-italic">steady precision.</span></h2>
          </div>
          <p
            className="max-w-md"
            style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.68, fontSize: "0.94rem" }}
          >
            Every project deserves a thoughtful start, a strong build, and a confident launch.
          </p>
        </div>

        {/* Dotted divider */}
        <div className="section-divider mb-10" />

        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Phase List — stark text list instead of pills */}
          <div className="flex flex-col gap-6 border-l border-dotted border-black/[0.25] pl-6">
            {phases.map((phase, index) => (
              <button
                key={phase.id}
                onClick={() => setActive(index)}
                className="text-left group relative"
              >
                {/* Active indicator dot */}
                <div 
                  className={`absolute -left-[27px] top-2 h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    active === index 
                      ? index === 0 ? "bg-copper" : index === 1 ? "bg-slate-blue" : "bg-sage"
                      : "bg-transparent"
                  }`}
                  style={{ 
                    backgroundColor: active === index ? undefined : "transparent"
                  }}
                />
                
                <h3
                  className="text-xl transition-colors duration-300"
                  style={{ 
                    fontFamily: "var(--font-waldenburg)", 
                    color: active === index ? "var(--heading-color)" : "rgba(0,0,0,0.3)" 
                  }}
                >
                  0{index + 1}. {phase.title}
                </h3>
                
                <div 
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ 
                    maxHeight: active === index ? "100px" : "0px",
                    opacity: active === index ? 1 : 0,
                    marginTop: active === index ? "0.5rem" : "0"
                  }}
                >
                  <p className="text-sm text-black/50 pr-4">{phase.desc}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content details — open layout without cards */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm bg-black/[0.02]">
              <Image
                src={["/assets/Frame 110.png", "/assets/Frame 112.png", "/assets/Frame 113.png"][active]}
                alt={current.title}
                fill
                className="object-cover"
                quality={88}
              />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {current.items.map((item, itemIndex) => (
                <div key={item.title} className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    {/* Gradient Icon Wrapper */}
                    <div className="flex w-8 h-8 shrink-0 items-center justify-center rounded-full"
                         style={{ background: "linear-gradient(135deg, rgba(198,139,89,0.15) 0%, rgba(84,91,140,0.15) 100%)" }}>
                      <item.icon weight="duotone" className="w-4 h-4" style={{ color: "#C68B59" }} />
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        color: "var(--heading-color)",
                      }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <div className="section-divider opacity-80" />
                  <p style={{ color: "rgba(0,0,0,0.5)", lineHeight: 1.6, fontSize: "0.85rem" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
