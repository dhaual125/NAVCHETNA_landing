"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";



export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative min-h-[90dvh] flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, transparent 30%, var(--page-bg) 100%)" }} />
      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 pt-32 pb-20`}
      >
        <div className="flex flex-col items-center text-center">
          {/* ── Pill badge ── */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-10 rounded-full"
            style={{
              background: "transparent",
              border: "1px solid var(--card-border)"
            }}
          >
            <Sparkles className="size-3.5 text-black/50" />
            <span className="type-xs font-medium text-black/60 uppercase tracking-widest">
              Powering Innovation Across Industries
            </span>
          </div>

          {/* ── Display heading — massive, impactful ── */}
          <h1
            className="max-w-5xl text-balance"
            style={{
              fontSize: "clamp(2.5rem, 7.5vw, 5.5rem)",
              lineHeight: "1.04",
              letterSpacing: "-0.035em",
              fontFamily: "var(--font-montserrat)",
              fontWeight: 400,
            }}
          >
            Technology with
            <br />
            <span className="relative inline-block">
              Awareness
            </span>
            , Built&nbsp;
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              for Everyone.
            </span>
          </h1>

          {/* ── Subheading ── */}
          <p
            className="mt-8 max-w-2xl text-balance text-warm-500"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              lineHeight: "1.7",
              letterSpacing: "0.01em",
            }}
          >
            From education to enterprise, we empower growth through
            technology, creativity, and conscious innovation. Powering
            Osmium, Natraj, Aegis Auth, and enterprise-grade AI solutions.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-black text-white hover:bg-black/80"
              style={{
                height: "52px",
                padding: "0 28px",
                fontSize: "15px",
                fontWeight: 500,
              }}
            >
              Get started
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full hover:bg-black/5"
              style={{
                height: "52px",
                padding: "0 28px",
                fontSize: "15px",
                fontWeight: 500,
                background: "transparent",
                color: "var(--page-text)",
                border: "1px solid var(--card-border)",
              }}
            >
              Explore products
            </Link>
          </div>


        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <div
          className="w-[1px] h-8"
          style={{
            background:
              "linear-gradient(to bottom, var(--page-text), transparent)",
          }}
        />
      </div>
    </section>
  );
}
