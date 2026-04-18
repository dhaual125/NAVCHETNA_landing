"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Kumari",
    role: "Student, Patna",
    color: "#3b82f6",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Priya",
    quote: "I used Osmium for my JEE prep. Honestly, it felt less like an app and more like a study partner. The mock tests were scarily close to the actual exam pattern.",
  },
  {
    name: "Dr. Mehul Shah",
    role: "Professor, Ahmedabad",
    color: "#8b5cf6",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Mehul",
    quote: "We tried Natraj in our college for managing course content. Usually, software means headaches, but this one was surprisingly smooth. Even my colleagues figured it out.",
  },
  {
    name: "Raghav Malhotra",
    role: "Founder, New Delhi",
    color: "#22c55e",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Raghav",
    quote: "Our startup needed a website that didn't look like it was built in the 90s. Navchetna Technology Technology delivered exactly that. Clean, modern, and easy to use.",
  },
  {
    name: "Arjun Nair",
    role: "Professional, Bangalore",
    color: "#f59e0b",
    avatar: "https://api.dicebear.com/9.x/notionists/svg?seed=Arjun",
    quote: "I asked Navchetna Technology Technology for branding help and they made a logo so good that even my mom finally understood what my company does. That's the real UX win here.",
  },
];

const INTERVAL = 5000;

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx: number) => {
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setProgress(0);
      setFading(false);
    }, 200);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          goTo((active + 1) % testimonials.length);
          return 0;
        }
        return p + 100 / (INTERVAL / 50);
      });
    }, 50);
    return () => clearInterval(tick);
  }, [active, goTo]);

  const t = testimonials[active];

  return (
    <section className="py-24 md:py-32 bg-[var(--page-bg)] relative overflow-hidden">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 100%, transparent 40%, var(--page-bg) 100%)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-start gap-16 lg:flex-row lg:items-end lg:justify-between mb-20">
            <div className="max-w-xl">
              <h2
                className="text-black tracking-tight leading-[1.1] mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                }}
              >
                Voices of impact and{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>
                  sustainable growth.
                </span>
              </h2>
              <p className="type-lg text-black/60">
                Hear directly from our partners across the nation about how our technology has systematically transformed their operations.
              </p>
            </div>

            <Link
              href="/contact"
              className="group flex-shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-3.5 type-sm font-medium bg-black text-white hover:bg-black/80"
            >
              Become a Partner
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="relative pt-12 pb-8 border-t border-black/[0.06]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

              <div className="lg:col-span-5 flex flex-wrap gap-4 items-center align-middle justify-start h-min">
                {testimonials.map((person, i) => {
                  const isActive = active === i;
                  return (
                    <button
                      key={person.name}
                      onClick={() => goTo(i)}
                      className={`relative outline-none ${isActive ? "z-10 grayscale-0" : "grayscale-[0.8] opacity-50"
                        }`}
                      style={{
                        boxShadow: isActive ? "0 10px 30px -10px rgba(0,0,0,0.15)" : "none",
                        borderRadius: "24px"
                      }}
                      aria-label={person.name}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl overflow-hidden bg-black/5 relative">
                        <img src={person.avatar} alt="" className="w-full h-full object-cover p-2" />
                        {isActive && (
                          <div
                            className="absolute bottom-0 left-0 h-1 bg-black"
                            style={{
                              width: `${progress}%`,
                              transition: "width 50ms linear"
                            }}
                          />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className={`transition-opacity duration-300 ease-in-out ${fading ? 'opacity-0' : 'opacity-100'}`}>
                  <h3
                    className="text-black leading-[1.3] text-balance mb-8"
                    style={{
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: "italic",
                      letterSpacing: "-0.01em"
                    }}
                  >
                    "{t.quote}"
                  </h3>

                  <div>
                    <p className="type-lg font-semibold text-black mb-1.5">{t.name}</p>
                    <p className="type-sm text-black/50 tracking-wide uppercase font-medium">{t.role}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
