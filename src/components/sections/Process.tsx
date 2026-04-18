"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Search, Zap, Rocket, CheckCircle, Handshake, HeartHandshake } from "lucide-react";
import Image from "next/image";

const phases = [
  {
    id: "plan",
    label: "Plan",
    title: "Plan",
    desc: "Every project begins with absolute clarity. We listen, research, and map out a practical strategy. Together, we align on timelines, budgets, and goals to ensure your vision is set on the optimal path.",
    items: [
      { icon: Search, title: "Deep Research", desc: "Understanding your market, needs, and scale." },
      { icon: Handshake, title: "Strategic Alignment", desc: "Reliable service and transparent communication from day one." },
    ],
  },
  {
    id: "development",
    label: "Development",
    title: "Development",
    desc: "With a flawless architecture in place, our engineers bring ideas to life. We follow rigorous structured approaches that balance speed with precision — delivering enterprise-ready solutions.",
    items: [
      { icon: Zap, title: "Agile Execution", desc: "Flexible, rapid, and adaptive to evolving needs." },
      { icon: CheckCircle, title: "Zero-Compromise Quality", desc: "Every line of code is tested for maximum reliability." },
    ],
  },
  {
    id: "release",
    label: "Release",
    title: "Release",
    desc: "The final stage is about global delivery and massive impact. We launch seamlessly, monitor vital performance metrics, and provide ongoing dedicated support to fuel your continuous growth.",
    items: [
      { icon: Rocket, title: "Seamless Deployment", desc: "A hassle-free transition from build to production." },
      { icon: HeartHandshake, title: "Lifecycle Support", desc: "We are an extension of your team, post-release." },
    ],
  },
];

export function Process() {
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section className="relative py-24 sm:py-32 bg-[var(--page-bg)] overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* ── Top Typography (Matching Image) ── */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-24">
          <div className="flex items-center gap-2 mb-6">
            {phases.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === i
                    ? "bg-black text-white"
                    : "bg-black/5 text-black/50 hover:bg-black/10 hover:text-black/70"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
          <h2
            className="text-balance"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              color: "var(--heading-color)",
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              lineHeight: 1.08,
            }}
          >
            Executing vision with{" "}
            <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
              absolute precision.
            </span>
          </h2>
        </div>

        {/* ── 2-Column Layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Image */}
          <div className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden" style={{ border: "1px solid var(--card-border)" }}>
             <Image
                src={["/assets/Frame 110.png", "/assets/Frame 112.png", "/assets/Frame 113.png"][active]}
                alt={current.title}
                fill
                className="object-cover"
              />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col max-w-lg">
            <h3 className="type-3xl sm:type-4xl font-semibold text-[var(--heading-color)] mb-4 tracking-tight">
              {current.title}
            </h3>
            <p className="type-base sm:type-lg text-[var(--heading-color)]/60 leading-relaxed text-pretty mb-8">
              {current.desc}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {current.items.map((item) => (
                <div key={item.title} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full" style={{ border: "1px solid var(--card-border)", background: "var(--card-bg)" }}>
                  <span className="type-sm font-medium text-[var(--heading-color)]">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
