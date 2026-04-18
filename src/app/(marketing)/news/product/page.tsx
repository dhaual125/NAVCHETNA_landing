"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Newspaper, Rocket, Building2, Calendar, Package, Cpu, Shield } from "lucide-react";

const categories = [
  { label: "All News", icon: Newspaper, href: "/news" },
  { label: "Product Launches", icon: Rocket, href: "/news/product", active: true },
  { label: "Company Updates", icon: Building2, href: "/news" },
];

const recentPosts = [
  "January 15, 2025",
  "January 12, 2025",
  "January 10, 2025",
];

const tags = ["Product", "Launch", "AI", "EdTech", "Security", "Platform"];

const toc = [
  { id: "osmium", label: "Osmium Launch", icon: Cpu },
  { id: "natraj", label: "Natraj Launch", icon: Package },
  { id: "aegis-auth", label: "Aegis Auth Launch", icon: Shield },
];

export default function ProductLaunchesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <div className="flex">
        {/* ── Left sidebar ── */}
        <aside className="hidden md:block w-64 shrink-0 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto border-r bg-warm-50/50 border-black/[0.06]">
          <div className="p-5 space-y-8">
            <div>
              <h3 className="type-2xs font-semibold uppercase tracking-wider text-warm-400 mb-3">Categories</h3>
              <ul className="space-y-1">
                {categories.map((c) => (
                  <li key={c.label}>
                    <Link
                      href={c.href}
                      className={`w-full flex items-center gap-2 px-3 py-2 type-sm rounded-md transition-colors ${c.active
                          ? "bg-brand/10 text-brand font-medium"
                          : "text-warm-600 hover:text-black hover:bg-warm-50"
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
              <h3 className="type-2xs font-semibold uppercase tracking-wider text-warm-400 dark:text-neutral-500 mb-3">Recent Posts</h3>
              <ul className="space-y-1">
                {recentPosts.map((d) => (
                  <li key={d}>
                    <button className="w-full flex items-center gap-2 px-3 py-2 type-sm text-warm-600 rounded-md hover:text-black hover:bg-warm-50 transition-colors text-left">
                      <Calendar className="size-4 shrink-0" />
                      <span className="whitespace-nowrap">{d}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="type-2xs font-semibold uppercase tracking-wider text-warm-400 dark:text-neutral-500 mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span key={t} className="px-2 py-1 bg-warm-50 text-warm-600 rounded type-2xs hover:bg-warm-100 cursor-pointer transition-colors ring-[0.5px] ring-inset ring-black/[0.06]">
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
                  <h1 className="type-5xl mb-3" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Product Launches</h1>
                  <p className="type-base text-warm-500">Discover the latest products built by Navchetna Technology Technology</p>
                </div>
              </ScrollReveal>

              {/* ── Article 1: Osmium (Featured) ── */}
              <ScrollReveal>
                <article id="osmium" className="bg-white border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.06] ring-[0.5px] ring-inset ring-black/[0.04]">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-6">
                    <div>
                      <h2 className="type-4xl mb-1">Osmium — AI-Powered <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>Education & Career Guidance</span></h2>
                      <p className="type-sm text-warm-400">Launched January 2025 · Flagship Product</p>
                    </div>
                    <span className="type-2xs font-semibold uppercase tracking-wider text-brand bg-brand/10 px-2.5 py-1 rounded-md shrink-0">Featured</span>
                  </div>

                  <div className="mb-6">
                    <h3 className="type-xl mb-3">Redefining How Students Learn & Grow</h3>
                    <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                      Osmium is Navchetna Technology Technology&apos;s flagship AI platform designed to transform education and career guidance. Built entirely in-house, it combines advanced AI models with an intuitive interface to deliver personalized learning experiences, career recommendations, and academic support.
                    </p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed">
                      From intelligent tutoring to real-time doubt resolution, Osmium empowers students to take control of their learning journey — all powered by Navchetna Technology Technology&apos;s proprietary AI stack.
                    </p>
                  </div>

                  <div className="border-l-4 border-brand dark:border-[#c4856e] pl-6 py-3 my-6 rounded-r-lg bg-brand/5 dark:bg-[#c4856e]/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-brand dark:text-[#c4856e] mb-1">Key Highlight</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      Osmium features multiple AI channels — Vidyānukriti for academic assistance, Manobal for mental wellness, VākyaSetu for language translation, and Chaturyug for general intelligence — all accessible via a unified platform.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                    <div className="bg-warm-50 dark:bg-neutral-800/30 rounded-xl p-4 ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">
                      <h4 className="type-sm font-medium mb-2">Core Features</h4>
                      <ul className="type-sm text-warm-600 dark:text-neutral-400 space-y-1">
                        <li>· AI-powered career guidance</li>
                        <li>· Personalized learning paths</li>
                        <li>· Real-time doubt resolution</li>
                        <li>· Multi-channel AI assistants</li>
                      </ul>
                    </div>
                    <div className="bg-warm-50 dark:bg-neutral-800/30 rounded-xl p-4 ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">
                      <h4 className="type-sm font-medium mb-2">Platform Availability</h4>
                      <ul className="type-sm text-warm-600 dark:text-neutral-400 space-y-1">
                        <li>· Web — osmium.co.in</li>
                        <li>· Public API access</li>
                        <li>· Mobile apps (coming soon)</li>
                        <li>· AWS-backed infrastructure</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 type-sm text-warm-400 dark:text-neutral-500 mb-2 sm:mb-0">
                      <span>By Navchetna Technology Technology Team</span>
                      <span className="hidden sm:inline">·</span>
                      <span>6 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["AI", "EdTech", "Flagship"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── Article 2: Natraj ── */}
              <ScrollReveal>
                <article id="natraj" className="bg-white dark:bg-neutral-900/30 border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.06] dark:border-white/[0.06] ring-[0.5px] ring-inset ring-black/[0.04] dark:ring-white/[0.04]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="type-2xs font-semibold uppercase tracking-wider bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 px-2.5 py-1 rounded-md">New Launch</span>
                    <span className="type-sm text-warm-400 dark:text-neutral-500">January 12, 2025</span>
                  </div>
                  <h2 className="type-4xl mb-4">Natraj — Creative Suite for the Next Generation</h2>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Natraj is Navchetna Technology Technology&apos;s creative platform built to empower creators, designers, and educators with powerful tools for content creation, visual design, and multimedia production — all backed by AI-driven workflows.
                  </p>

                  <div className="border-l-4 border-purple-500 pl-6 py-3 my-6 rounded-r-lg bg-purple-50 dark:bg-purple-500/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-400 mb-1">What Makes Natraj Different</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      Unlike traditional creative tools, Natraj integrates AI assistance at every step — from ideation to final output. It&apos;s designed to reduce creative friction and help users produce professional-quality content faster than ever.
                    </p>
                  </div>

                  <h3 className="type-xl mb-3">Built for Everyone</h3>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-4">
                    Whether you&apos;re a student creating a presentation, an educator building course material, or a professional designing marketing assets — Natraj adapts to your workflow and amplifies your creativity.
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 type-sm text-warm-400 dark:text-neutral-500 mb-2 sm:mb-0">
                      <span>By Navchetna Technology Technology Team</span><span className="hidden sm:inline">·</span><span>4 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Creative", "AI", "Platform"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>

              {/* ── Article 3: Aegis Auth ── */}
              <ScrollReveal>
                <article id="aegis-auth" className="bg-white dark:bg-neutral-900/30 border rounded-2xl p-6 sm:p-8 mb-8 border-black/[0.06] dark:border-white/[0.06] ring-[0.5px] ring-inset ring-black/[0.04] dark:ring-white/[0.04]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="type-2xs font-semibold uppercase tracking-wider bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-2.5 py-1 rounded-md">Security</span>
                    <span className="type-sm text-warm-400 dark:text-neutral-500">January 10, 2025</span>
                  </div>
                  <h2 className="type-4xl mb-4">Aegis Auth — 10+ Layers of Security, Built from Scratch</h2>
                  <p className="type-sm text-warm-600 dark:text-neutral-400 leading-relaxed mb-6">
                    Aegis Auth is Navchetna Technology Technology&apos;s proprietary authentication and security framework. With over 10 layers of protection, it ensures absolute data sovereignty and zero dependency on third-party auth providers.
                  </p>

                  <div className="border-l-4 border-emerald-500 pl-6 py-3 my-6 rounded-r-lg bg-emerald-50 dark:bg-emerald-500/10">
                    <p className="type-2xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1">Available Across Ecosystems</p>
                    <p className="type-sm text-warm-600 dark:text-neutral-400">
                      Aegis Auth is available as packages for JavaScript, Python, Rust, and Flutter — with native Android and iOS SDKs coming soon. One auth system, every platform.
                    </p>
                  </div>

                  <h3 className="type-xl mb-3">Installation</h3>
                  <ul className="type-sm text-warm-600 dark:text-neutral-400 space-y-2 mb-6 pl-1">
                    {[
                      ["JavaScript:", "npm i aegis-auth-Navchetna Technology"],
                      ["Python:", "pip install aegis-auth-Navchetna Technology"],
                      ["Rust:", "cargo add aegis-auth-Navchetna Technology"],
                      ["Flutter:", "aegis_auth"],
                    ].map(([label, cmd]) => (
                      <li key={cmd} className="flex items-start gap-2">
                        <span className="text-warm-400 dark:text-neutral-600 mt-0.5">·</span>
                        <span>{label} <code className="bg-warm-50 dark:bg-neutral-800 px-2 py-0.5 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{cmd}</code></span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
                    <div className="flex items-center gap-2 type-sm text-warm-400 dark:text-neutral-500 mb-2 sm:mb-0">
                      <span>By Navchetna Technology Technology Team</span><span className="hidden sm:inline">·</span><span>5 min read</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {["Security", "Auth", "Open Source"].map((t) => (
                        <span key={t} className="px-2 py-1 bg-warm-50 dark:bg-neutral-800 text-warm-600 dark:text-neutral-400 rounded type-2xs ring-[0.5px] ring-inset ring-black/[0.06] dark:ring-white/[0.06]">{t}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            </div>

            {/* ── Right sidebar: On this page ── */}
            <div className="hidden xl:block">
              <div className="p-5 border rounded-2xl xl:w-64 xl:sticky xl:top-24 xl:self-start bg-warm-50/50 border-black/[0.06] ring-[0.5px] ring-inset ring-black/[0.04]">
                <h2 className="type-sm font-medium mb-3">On this page</h2>
                <div className="grid grid-cols-1 gap-1">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="flex items-center px-3 py-2 type-2xs rounded-md transition-colors text-warm-600 hover:bg-warm-100"
                    >
                      <item.icon className="size-4 mr-2 opacity-70" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Inline footer ── */}
          <footer className="border-t mt-16 py-8 px-5 sm:px-8 border-black/[0.06] dark:border-white/[0.06]">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="type-sm font-medium mb-4">Product</h3>
                  <ul className="space-y-2">
                    <li><a href="https://osmium.co.in" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Osmium</a></li>
                    <li><a href="https://natraj.Navchetna Technology.tech" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Natraj</a></li>
                    <li><a href="https://aegis.Navchetna Technology.tech" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Aegis Auth</a></li>
                    <li><Link href="/products" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Kriya</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="type-sm font-medium mb-4">Resources</h3>
                  <ul className="space-y-2">
                    <li><Link href="/" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Documentation</Link></li>
                    <li><Link href="/" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Tutorials</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="type-sm font-medium mb-4">APIs</h3>
                  <ul className="space-y-2">
                    <li><a href="https://osmium.co.in/channels/API/?version=Vidyanukriti" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Vidyānukriti</a></li>
                    <li><a href="https://osmium.co.in/channels/API?version=Manobal" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Manobal</a></li>
                    <li><a href="https://osmium.co.in/channels/API?version=VakyaSetu" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">VākyaSetu</a></li>
                    <li><a href="https://osmium.co.in/channels/API?version=Chaturyug" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Chaturyug</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="type-sm font-medium mb-4">Connect</h3>
                  <ul className="space-y-2">
                    <li><a href="https://x.com/Navchetna Technology_labs" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">X</a></li>
                    <li><a href="https://www.linkedin.com/company/Navchetna Technology" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/Navchetna Technology.tech/" target="_blank" rel="noopener noreferrer" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Instagram</a></li>
                    <li><Link href="/contact" className="type-sm text-warm-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-black/[0.06] dark:border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="type-3xl font-medium">N</span>
                  <p className="type-sm text-warm-500 dark:text-neutral-500">© 2025 NINELLMS SOLUTIONS LLP. All rights reserved.</p>
                </div>
                <div className="flex gap-4">
                  <Link href="/privacy" className="type-2xs text-warm-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">Privacy Policy</Link>
                  <Link href="/terms" className="type-2xs text-warm-500 dark:text-neutral-500 hover:text-black dark:hover:text-white transition-colors">Terms of Service</Link>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
