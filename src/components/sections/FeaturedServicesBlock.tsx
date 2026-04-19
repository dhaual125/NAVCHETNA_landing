"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ScrollTextReveal } from "@/components/ui/ScrollTextReveal";

type Service = {
  badge: string;
  title: string;
  desc: string;
  bullets: string[];
};

const images = [
  "/ref/gmhm1kxxzgd-Background7.jpeg",
  "/ref/9dzqkp3d2u4-app-creative.jpeg",
  "/ref/rlartawee0i-app-agents.jpeg",
  "/ref/redchdw2op-bento-orange-blue-2@3x.jpeg",
];

export function FeaturedServicesBlock({ featuredServices }: { featuredServices: Service[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 relative bg-[var(--page-bg)]">
      {/* Top markers & border */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 mb-20 lg:mb-32">
        <ScrollTextReveal className="type-5xl text-black max-w-4xl leading-snug">
          Comprehensive solutions for every challenge. We build intelligent systems that scale with your ambition.
        </ScrollTextReveal>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Top Decorative Border line like in ElevenLabs */}
        <div className="relative border-t border-black/[0.08] w-full pt-0">
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--page-bg)]">
            <div className="h-1.5 w-1.5 rounded-full bg-black/40"></div>
          </div>
          <div className="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--page-bg)]">
            <div className="h-1.5 w-1.5 rounded-full bg-black/40"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 relative border-l border-r border-black/[0.08]">
          
          {/* Left Column: Scrolling Content */}
          <div className="relative border-r border-black/[0.08]">
            {featuredServices.map((s, i) => (
              <ServiceTextBlock key={s.title} s={s} index={i} setIndex={setActiveIndex} isLast={i === featuredServices.length - 1} />
            ))}
          </div>

          {/* Right Column: Sticky Media */}
          <div className="relative hidden lg:block">
            <div className="sticky top-32 p-10 xl:p-16">
              <div className="relative w-full aspect-square md:aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_8px_40px_rgba(0,0,0,0.08)] ring-[0.5px] ring-black/[0.06] ring-inset bg-warm-50">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[activeIndex % images.length]}
                      alt="Featured Service Media"
                      fill
                      className="object-cover"
                    />
                    {/* Optional gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent mix-blend-overlay pointer-events-none" />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic summary indicator below media */}
              <div className="mt-8 flex items-center justify-between px-4 text-warm-500">
                <span className="type-sm font-medium">{featuredServices[activeIndex].badge}</span>
                <span className="type-sm">0{activeIndex + 1} / 0{featuredServices.length}</span>
              </div>
            </div>
          </div>

        </div>
        
        {/* Bottom Decorative Border line */}
        <div className="relative border-b border-black/[0.08] w-full">
          <div className="absolute left-0 bottom-0 -translate-x-1/2 translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--page-bg)]">
            <div className="h-1.5 w-1.5 rounded-full bg-black/40"></div>
          </div>
          <div className="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--page-bg)]">
            <div className="h-1.5 w-1.5 rounded-full bg-black/40"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ServiceTextBlock({ 
  s, 
  index, 
  setIndex,
  isLast 
}: { 
  s: Service; 
  index: number; 
  setIndex: (i: number) => void;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setIndex(index);
    }
  }, [isInView, index, setIndex]);

  return (
    <div 
      ref={ref} 
      className={`relative flex flex-col justify-center min-h-[70vh] p-10 py-24 md:p-16 lg:p-20 transition-colors duration-500 ${isInView ? "opacity-100" : "opacity-40 hover:opacity-70"} ${!isLast ? "border-b border-black/[0.08]" : ""}`}
    >
      <span className="type-2xs font-bold uppercase tracking-wider text-brand bg-brand/5 px-3 py-1.5 rounded-md w-fit mb-6">
        {s.badge}
      </span>
      <h3 className="type-4xl md:type-5xl text-black mb-6 tracking-tight leading-[1.1]">{s.title}</h3>
      <p className="type-base text-warm-600 leading-relaxed text-pretty max-w-xl">
        {s.desc}
      </p>
      
      <div className="mt-12 space-y-4">
        {s.bullets.map((b) => (
          <div key={b} className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-black/20 flex-none" />
            <span className="type-sm text-black/70 font-medium">{b}</span>
          </div>
        ))}
      </div>
      
      {/* Mobile media fallback (hidden on desktop) */}
      <div className="mt-10 lg:hidden w-full aspect-video relative rounded-[var(--panel-radius)] overflow-hidden shadow-lg border border-black/5">
        <Image
          src={images[index % images.length]}
          alt={s.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
