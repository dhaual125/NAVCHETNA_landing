"use client";

import { useState } from "react";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Newspaper, Rocket, Building2, Calendar, Coffee, Award, Shield } from "lucide-react";

const categories = [
  { label: "All News", icon: Newspaper, href: "/news", active: true },
  { label: "Product Launches", icon: Rocket, href: "/news/product" },
  { label: "Company Updates", icon: Building2, href: "/news" },
];

const recentPosts = [
  "January 15, 2025",
  "January 12, 2025",
  "January 10, 2025",
];

const tags = ["AI", "Innovation", "Product", "Updates", "Team"];

const toc = [
  { id: "founding-story", label: "Founding Story", icon: Coffee },
  { id: "government-recognition", label: "Government Recognition", icon: Award },
  { id: "tech-independence", label: "Tech Independence", icon: Shield },
];

export default function NewsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="flex">
        {/* ── Left sidebar ── */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-r bg-transparent border-black/[0.08]">
          <div className="p-5 space-y-8">
            <div>
              <h3 className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-black/40 mb-3">Categories</h3>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className={`w-full flex items-center gap-2 px-3 py-2 font-inter text-[14px] rounded-md transition-colors ${c.active
                          ? "bg-brand/10 text-brand font-medium"
                          : "text-black/60 hover:text-black hover:bg-black/[0.02]"
                        }`}
                    >
                      <c.icon className="size-4 shrink-0" />
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-black/40  mb-3">Recent Posts</h3>
              <ul className="space-y-1">
                {recentPosts.map((d) => (
                  <li key={d}>
                    <button className="w-full flex items-center gap-2 px-3 py-2 font-inter text-[14px] text-black/60 rounded-md hover:text-black hover:bg-black/[0.02] transition-colors text-left">
                      <Calendar className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">{d}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-black/40  mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-black/[0.02] text-black/60 rounded font-inter text-[11px] uppercase tracking-wider hover:bg-warm-100 cursor-pointer transition-colors border border-black/[0.08]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* ── Main content ── */}
        <main className="flex-1 min-w-0">
          <div className="relative flex flex-col xl:flex-row xl:gap-8 max-w-7xl mx-auto p-5 sm:p-8">
            <div className="max-w-4xl w-full">
              {/* Header */}
              <ScrollReveal>
                <div className="mb-10">
                  <h1 className="font-waldenburg text-[clamp(1.8rem,3.5vw,2.5rem)] tracking-[-0.03em] font-normal text-black mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Latest News</h1>
                  <p className="font-inter text-[15px] text-black/50">Stay updated with the latest from Navchetna Technology Technology</p>
                </div>
              </ScrollReveal>

              {/* ── Article 1: Founding Story (Featured) ── */}
              <ScrollReveal>
                <article id="founding-story" className="bg-white border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.08] border border-black/[0.08]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h2 className="font-waldenburg text-[1.5rem] tracking-[-0.02em] font-normal text-black mb-1">Innovation Served <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>Hotter Than Coffee:</span> The Navchetna Technology Story</h2>
                      <p className="font-inter text-[14px] text-black/40">Published on January 15, 2025 · Company Feature</p>
                    </div>
                    <span className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md shrink-0">Featured</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-waldenburg text-[1.2rem] font-normal text-black mb-3">From Five Friends to Innovation Leaders</h3>
                    <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-4">
                      Every great journey starts with a simple idea — and ours started on 6th September 2024. Five friends — Ayushmaan, Varun, Suman, Swastik, and Dhraval — were sitting together, talking about school, college, and life, and suddenly realized something: education could be so much better with the right tools and technology.
                    </p>
                    <p className="font-inter text-[14px] text-black/60  leading-relaxed">
                      From that conversation, late-night brainstorming sessions, and countless cups of coffee, Navchetna Technology Technology was born. Back then, we were just a bunch of dreamers with laptops and big ideas. No fancy offices, no investors, no roadmap — just a shared vision and a lot of determination.
                    </p>
                  </div>

                  <div className="border-l-4 border-brand pl-6 py-3 my-6 rounded-r-lg bg-brand/5">
                    <p className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-brand dark:text-[#c4856e] mb-1">Company Milestone</p>
                    <p className="font-inter text-[14px] text-black/60 ">
                      Today, Navchetna Technology Technology is proud to be based in Jodhpur, Rajasthan, India, and has grown into a company that delivers both innovative products and comprehensive services, with official AWS India collaboration ensuring enterprise-grade reliability.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-waldenburg text-[1.2rem] font-normal text-black mb-3">Product Portfolio & Innovation</h3>
                    <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-4">
                      Our flagship products — Osmium, Natraj, and Aegis Auth — are designed to make learning smarter and more accessible. Our services span everything from web, iOS, and Android development to AI/ML solutions, cybersecurity, and more.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                      <div className="bg-black/[0.02]  rounded-xl p-4 border border-black/[0.08] ">
                        <h4 className="font-inter text-[14px] font-medium mb-2">Our Approach</h4>
                        <ul className="font-inter text-[14px] text-black/60  space-y-1">
                          <li>· Plan — Listen, understand, and map out solutions</li>
                          <li>· Strategy — Clear steps and milestones</li>
                          <li>· Development — Build, tweak, and perfect</li>
                          <li>· Deployment — Launch, monitor, and support</li>
                        </ul>
                      </div>
                      <div className="bg-black/[0.02]  rounded-xl p-4 border border-black/[0.08] ">
                        <h4 className="font-inter text-[14px] font-medium mb-2">Growth Journey</h4>
                        <p className="font-inter text-[14px] text-black/60 ">
                          From five friends with a shared dream to a core team of six and a family of 15 passionate people, our growth has always been powered by curiosity, creativity, and a love for building things that matter.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-warm-300 dark:border-neutral-700 pl-6 py-4 my-6 rounded-r-lg bg-black/[0.02] ">
                    <p className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-black/50  mb-1">Company Philosophy</p>
                    <p className="font-inter text-[14px] text-black/60  italic">
                      &ldquo;Navchetna Technology Technology isn&apos;t just a company. It&apos;s a story of friendship, late-night ideas, challenges, and small wins. It&apos;s about dreaming big, working hard, and believing that learning and innovation can truly change the world. And honestly? We&apos;re just getting started.&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.08] ">
                    <div className="flex items-center gap-2 font-inter text-[14px] text-black/40  mb-2 sm:mb-0">
                      <span>By Navchetna Technology Technology Team</span>
                      <span className="hidden sm:inline">·</span>
                      <span>8 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Innovation", "Startup", "EdTech"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-black/[0.02]  text-black/60  rounded font-inter text-[11px] uppercase tracking-wider border border-black/[0.08] ">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── Article 2: Government Recognition ── */}
              <ScrollReveal>
                <article id="government-recognition" className="bg-white border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.08] border border-black/[0.08]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider bg-green-50 text-green-700 px-2.5 py-1 rounded-md">Government Recognition</span>
                    <span className="font-inter text-[14px] text-black/40 ">January 12, 2025</span>
                  </div>
                  <h2 className="font-waldenburg text-[1.5rem] tracking-[-0.02em] font-normal text-black mb-4">Innovation Fueled by Pure Adrenaline: Navchetna Technology Technology Recognized by DPIIT</h2>
                  <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-6">
                    We are thrilled to announce that Navchetna Technology Technology has been officially recognized by the Department for Promotion of Industry and Internal Trade (DPIIT), Government of India. This recognition validates our commitment to innovation and positions us among India&apos;s most promising startups.
                  </p>

                  <div className="border-l-4 border-green-500 pl-6 py-3 my-6 rounded-r-lg bg-green-50 dark:bg-green-500/10">
                    <p className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-green-700 dark:text-green-400 mb-1">Official Recognition</p>
                    <p className="font-inter text-[14px] text-black/60 ">
                      The DPIIT recognition opens doors to various benefits including tax exemptions, easier compliance, faster patent examination, and access to government schemes. This milestone reflects our dedication to building innovative solutions that contribute to India&apos;s technological advancement.
                    </p>
                  </div>

                  <h3 className="font-waldenburg text-[1.2rem] font-normal text-black mb-3">What This Means for Us</h3>
                  <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-4">
                    This recognition is more than just a certificate. It&apos;s a testament to our team&apos;s hard work, our innovative approach, and our commitment to building world-class products. It validates our vision of creating technology that makes a real difference in education and beyond.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.08] ">
                    <div className="flex items-center gap-2 font-inter text-[14px] text-black/40  mb-2 sm:mb-0">
                      <span>By Navchetna Technology Technology Team</span><span className="hidden sm:inline">·</span><span>4 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["DPIIT", "Recognition", "Milestone"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-black/[0.02]  text-black/60  rounded font-inter text-[11px] uppercase tracking-wider border border-black/[0.08] ">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── Article 3: Tech Independence ── */}
              <ScrollReveal>
                <article id="tech-independence" className="bg-white border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.08] border border-black/[0.08]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider bg-amber-50 text-amber-700 px-2.5 py-1 rounded-md">Tech Independence</span>
                    <span className="font-inter text-[14px] text-black/40 ">January 10, 2025</span>
                  </div>
                  <h2 className="font-waldenburg text-[1.5rem] tracking-[-0.02em] font-normal text-black mb-4">Building the Future on Our Own Terms: Navchetna Technology Technology is Now a Fully Independent Powerhouse</h2>
                  <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-6">
                    From Five Friends to Total Self-Reliance. Every revolution starts with a spark — and ours ignited on September 6, 2024. We realized that too many startups were just wrappers built on top of other people&apos;s tools. We didn&apos;t want to rent our success, so we decided to build everything ourselves.
                  </p>

                  <div className="border-l-4 border-amber-500 pl-6 py-3 my-6 rounded-r-lg bg-amber-50 dark:bg-amber-500/10">
                    <p className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">100% Made in India with Our Own Tech Stack</p>
                    <p className="font-inter text-[14px] text-black/60 ">
                      Our transition from dreamers to industry leaders was powered by a bold decision to reject third-party dependencies. We built the entire infrastructure that supports our products — from security to billing to data extraction.
                    </p>
                  </div>

                  <h3 className="font-waldenburg text-[1.2rem] font-normal text-black mb-3">Security by Aegis Auth</h3>
                  <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-4">
                    We built our own fortress with Aegis Auth — featuring over 10 layers of security to ensure absolute data sovereignty. Released packages for the entire ecosystem:
                  </p>
                  <ul className="font-inter text-[14px] text-black/60  space-y-2 mb-6 pl-1">
                    {[
                      ["JavaScript:", "npm i aegis-auth-Navchetna Technology"],
                      ["Python:", "pip install aegis-auth-Navchetna Technology"],
                      ["Rust:", "cargo add aegis-auth-Navchetna Technology"],
                      ["Flutter:", "aegis_auth"],
                    ].map(([label, cmd]) => (
                      <li key={cmd} className="flex items-start gap-2">
                        <span className="text-black/40  mt-0.5">·</span>
                        <span>{label} <code className="bg-black/[0.02]  px-2 py-0.5 rounded font-inter text-[11px] uppercase tracking-wider border border-black/[0.08] ">{cmd}</code></span>
                      </li>
                    ))}
                    <li className="flex items-start gap-2">
                      <span className="text-black/40  mt-0.5">·</span>
                      <span>Native Mobile: Android and iOS SDKs coming soon</span>
                    </li>
                  </ul>

                  <h3 className="font-waldenburg text-[1.2rem] font-normal text-black mb-3">Financial Integrity with NSL</h3>
                  <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-4">
                    We engineered NSL (Navchetna Technology Smart Ledger) — our proprietary ledger system built from scratch to maintain immutable financial records and ensure absolute transparency in every transaction.
                  </p>

                  <h3 className="font-waldenburg text-[1.2rem] font-normal text-black mb-3">Data Clarity with LM Lens</h3>
                  <p className="font-inter text-[14px] text-black/60  leading-relaxed mb-6">
                    From raw data extraction to deep analysis, we utilize LM Lens — our proprietary extraction engine that feeds perfect data directly into our AI models.
                  </p>

                  <div className="border-l-4 border-amber-500 pl-6 py-3 my-6 rounded-r-lg bg-amber-50 dark:bg-amber-500/10">
                    <p className="font-inter text-[11px] uppercase tracking-wider font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">Our Philosophy</p>
                    <p className="font-inter text-[14px] text-black/60 ">
                      Navchetna Technology Technology is not just a company. It is a declaration of independence. Zero dependencies and zero black boxes. With Aegis Auth protecting the door, NSL managing the ledger, and LM Lens processing the data, our technology is truly Made in India and built entirely in-house. We own our tech and we own our future.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.08] ">
                    <div className="flex items-center gap-2 font-inter text-[14px] text-black/40  mb-2 sm:mb-0">
                      <span>By Navchetna Technology Technology Team</span><span className="hidden sm:inline">·</span><span>7 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Self-Reliance", "Zero Dependencies", "Built In-House"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-black/[0.02]  text-black/60  rounded font-inter text-[11px] uppercase tracking-wider border border-black/[0.08] ">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* ── Right sidebar: On this page ── */}
            <div className="hidden xl:block">
              <div className="p-5 border rounded-2xl xl:w-64 xl:sticky xl:top-24 xl:self-start bg-transparent border-black/[0.08] border border-black/[0.08]">
                <h2 className="font-inter text-[14px] font-medium mb-3">On this page</h2>
                <div className="grid grid-cols-1 gap-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center px-3 py-2 font-inter text-[11px] uppercase tracking-wider rounded-md transition-colors text-black/60 hover:bg-warm-100"
                    >
                      <item.icon className="size-4 mr-2 opacity-70" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          
        </main>
      </div>
    </div>
  );
}
