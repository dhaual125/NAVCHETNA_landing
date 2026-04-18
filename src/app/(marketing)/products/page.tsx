"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Brain, Zap, TrendingUp, ShieldCheck, Eye, FileText, Heart, Maximize, Users, ArrowRight, Sparkles } from "lucide-react";

/* ── Data ── */
const categories = ["All", "Core Intelligence", "Vision & AR", "Business Automation"];

const allProducts = [
  {
    id: "osmium",
    name: "Osmium",
    category: "Core Intelligence",
    tag: "Deep Learning",
    logo: "/assets/osmium.png",
    desc: "Advanced deep learning platform that transforms complex data into intelligent insights. AI-powered education & career guidance built from thousands of past papers.",
    tags: ["Neural Networks", "NLP", "Exam Prediction"],
    href: "https://osmium.co.in",
    isFlagship: true,
  },
  {
    id: "natraj",
    name: "Natraj",
    category: "Vision & AR",
    tag: "AI + AR",
    logo: "/assets/natraj.png",
    desc: "Immersive AI-powered augmented reality platform. Point your phone at a body part and view realistic 3D models of bones and organs in place.",
    tags: ["Augmented Reality", "Spatial AI", "Interactive"],
    href: "/news/product/natraj",
    isFlagship: false,
  },
  {
    id: "aegis",
    name: "Aegis Auth",
    category: "Core Intelligence",
    tag: "Agentic AI",
    logo: "/assets/agegis.png",
    desc: "Intelligent autonomous agents that understand, learn, and execute complex tasks with human-like reasoning.",
    tags: ["Autonomous Agents", "Reasoning", "Automation"],
    href: "/news/product/aegis",
    isFlagship: false,
  },
  {
    id: "kriya",
    name: "Kriya",
    category: "Business Automation",
    tag: "Organizational AI",
    logo: "/assets/kriya.png",
    desc: "Comprehensive organizational intelligence platform that streamlines workflows and drives productivity.",
    tags: ["Workflow AI", "Collaboration", "Analytics"],
    href: "/news/product/kriya",
    isFlagship: false,
  },
  {
    id: "lmlens",
    name: "LM Lens",
    category: "Vision & AR",
    tag: "Vision AI",
    logo: "/assets/lm-lens.svg",
    desc: "Intelligent data extraction that converts unstructured documents into actionable data using advanced OCR.",
    tags: ["OCR", "Computer Vision", "Template Free"],
    href: "/news/product/lmlens",
    isFlagship: false,
  },
  {
    id: "nsl",
    name: "NSL",
    category: "Business Automation",
    tag: "Smart Billing",
    logo: "/assets/nsl.png",
    desc: "Intelligent billing and ledger management system that automates the entire billing lifecycle.",
    tags: ["Auto Invoicing", "Smart Ledger", "Automation"],
    href: "/news/product/nsl",
    isFlagship: false,
  },
];

const whyChoose = [
  { icon: Heart, title: "Conscious AI", desc: "Designed with ethical considerations and human values at their core." },
  { icon: Maximize, title: "Scalable", desc: "Cloud-native architecture that grows with your needs and adapts to any scale." },
  { icon: Users, title: "Human-Centered", desc: "Intuitive interfaces that enhance human capabilities rather than replace them." },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = allProducts.filter((p) => 
    activeCategory === "All" ? true : p.category === activeCategory
  );

  return (
    <>
      {/* ━━━ HEADER ━━━ */}
      <section className="pt-28 sm:pt-36 md:pt-44 pb-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="type-sm text-black/40 font-bold uppercase tracking-widest mb-6">
                Product Directory
              </p>
              <h1 className="type-6xl text-black text-balance leading-tight" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                Conscious Intelligence <br className="hidden md:block"/><span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>Meets Innovation</span>
              </h1>
              <p className="mt-8 type-base text-black/60 text-pretty max-w-xl mx-auto">
                Explore our directory of revolutionary AI products that redefine possibilities across education, creativity, and enterprise automation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━ DYNAMIC FILTER DIRECTORY ━━━ */}
      <section className="pb-24">
        {/* Sticky Filter Bar */}
        <div className="sticky top-[73px] z-40 bg-[var(--page-bg)]/90 backdrop-blur-xl border-y border-black/[0.08] py-4 mb-12 shadow-[0_4px_32px_rgba(0,0,0,0.02)]">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative whitespace-nowrap rounded-full px-5 py-2.5 type-sm font-medium transition-colors duration-300 ${
                      isActive 
                        ? "bg-black text-white" 
                        : "bg-transparent text-[var(--heading-color)] hover:bg-black/5 border border-[var(--card-border)]"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Framer Motion Minimal Grid (Sarvam Style) */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-[var(--card-bg)] transition-all duration-300 hover:bg-[var(--section-bg)] p-8 border border-[var(--card-border)]"
                >
                  <Link href={p.href} className="flex flex-col h-full cursor-pointer">
                    
                    {/* Top row: Animated Logo & Category Tag */}
                    <div className="flex items-center justify-between mb-8 h-16">
                      <motion.img 
                        src={p.logo} 
                        alt={p.name} 
                        className="h-14 w-auto max-w-[64px] object-contain origin-center"
                      />
                      <span className="type-2xs font-semibold text-black/60 bg-black/5 px-2.5 py-1 rounded-[0.4rem]">
                        {p.category}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <div className="flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="type-2xl font-bold text-black tracking-tight">{p.name}</h3>
                        {p.isFlagship && (
                          <span className="type-2xs font-bold uppercase tracking-wider text-brand px-2 py-0.5 rounded-md bg-brand/5 ring-[0.5px] ring-inset ring-brand/20">
                            Flagship
                          </span>
                        )}
                      </div>
                      <p className="type-sm text-warm-600 leading-relaxed text-pretty flex-1 mb-8">
                        {p.desc}
                      </p>
                      
                      {/* Interactive Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {p.tags.map((t) => (
                          <span key={t} className="inline-flex items-center rounded-md bg-warm-50 px-2 py-1 type-2xs font-medium text-warm-700 ring-[0.5px] ring-inset ring-black/[0.04]">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-auto flex items-center justify-between border-t border-black/[0.06] pt-5">
                        <span className="inline-flex items-center gap-1.5 type-sm font-semibold text-black/60 transition-colors group-hover:text-black">
                          Explore <ArrowRight className="size-4 -rotate-45" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredProducts.length === 0 && (
             <div className="py-20 text-center">
               <p className="type-base text-warm-500">No products found in this category.</p>
             </div>
          )}
        </div>
      </section>

      {/* ━━━ WHY CHOOSE ━━━ */}
      <section className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative border-t border-black/[0.08] pt-16 md:pt-20">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="type-sm text-brand font-bold uppercase tracking-widest mb-3">Core Pillars</p>
                <h2 className="type-5xl text-black text-balance max-w-lg mx-auto leading-tight">Built for the Future</h2>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {whyChoose.map((w, i) => (
                <ScrollReveal key={w.title} delay={i * 100}>
                  <div className="flex h-full flex-col items-center text-center p-8 transition-colors hover:bg-warm-50 rounded-3xl">
                    <div className="flex items-center justify-center size-16 rounded-[1.25rem] bg-black text-white shadow-xl mb-6">
                      <w.icon className="size-7" />
                    </div>
                    <h3 className="type-xl text-black mb-3 font-semibold">{w.title}</h3>
                    <p className="type-base text-warm-500 leading-relaxed text-balance">{w.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ CTA ━━━ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-black text-center shadow-2xl">
              <div className="absolute inset-0">
                <Image src="/ref/purpleblue.jpeg" alt="" fill sizes="100vw" className="object-cover opacity-40 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="pointer-events-none absolute inset-0 z-30 rounded-[2.5rem] ring-[0.5px] ring-inset ring-white/[0.1]" />

              <div className="relative z-10 px-6 sm:px-10 md:px-14 py-20 md:py-28 max-w-2xl mx-auto">
                <h2 className="type-5xl text-balance tracking-tight leading-tight" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "#ffffff" }}>
                  Ready to Experience Conscious Intelligence?
                </h2>
                <p className="mt-6 type-base text-white/70 text-pretty">
                  Discover how our AI-powered products can transform your workflow and unlock new possibilities.
                </p>
                <div className="mt-10 flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-white text-black h-14 px-8 type-base font-bold">
                    Request Integration
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
