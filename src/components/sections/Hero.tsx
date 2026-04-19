"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center overflow-hidden">
      {/* Full-screen background image */}
      <Image
        src="/assets/hero background.png"
        alt=""
        fill
        priority
        quality={92}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Layered overlays for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.12) 38%, rgba(0,0,0,0.22) 65%, rgba(0,0,0,0.72) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 110% 80% at 50% 50%, transparent 20%, rgba(0,0,0,0.48) 100%)",
        }}
      />

      {/* Content */}
      {/* Structural Grid Overlay removed for Home Hero as requested */}


      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8 flex flex-col items-center text-center">
        {/* Eyebrow chip removed as requested */}
        <h1
          style={{
            fontSize: "clamp(2.1rem, 5vw, 3.75rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.06em",
            fontFamily: "var(--font-waldenburg)",
            fontWeight: 500,
            color: "#ffffff",
            textShadow: "0 2px 40px rgba(0,0,0,0.45)",
            textAlign: "center",
          }}
        >
          Technology with Awareness,
          <br />
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              fontWeight: 400,
              color: "rgba(255,255,255,0.85)",
            }}
          >
            Built for everywhere.
          </span>
        </h1>

        <p
          className="mt-8 max-w-md text-pretty"
          style={{
            fontSize: "clamp(0.9rem, 1.1vw, 1rem)",
            lineHeight: "1.70",
            color: "rgba(255,255,255,0.65)",
            fontFamily: "var(--font-body)",
            fontWeight: 400,
            letterSpacing: "0",
          }}
        >
          From education to enterprise — we empower growth through{" "}
          <span style={{ color: "rgba(255,255,255,0.88)", fontWeight: 500 }}>
            technology, creativity,
          </span>{" "}
          and conscious innovation.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full transition-all duration-300 active:scale-95 hover:bg-white/90"
            style={{
              height: "46px",
              padding: "0 22px",
              fontSize: "13.5px",
              fontWeight: 600,
              background: "#ffffff",
              color: "#000000",
              letterSpacing: "-0.01em",
            }}
          >
            Get started
            <ArrowRight weight="bold" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full transition-all duration-300 active:scale-95 hover:bg-white/15"
            style={{
              height: "46px",
              padding: "0 22px",
              fontSize: "13.5px",
              fontWeight: 500,
              background: "rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.88)",
              border: "1px solid rgba(255,255,255,0.22)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              letterSpacing: "-0.01em",
            }}
          >
            Explore products
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-10 opacity-25"
          style={{ background: "linear-gradient(to bottom, transparent, #fff)" }}
        />
        <div className="w-1 h-1 rounded-full bg-white/40" />
      </div>
    </section>
  );
}
