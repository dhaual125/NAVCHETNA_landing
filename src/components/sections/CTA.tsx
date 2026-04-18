import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 md:py-40 bg-[var(--page-bg)] relative overflow-hidden">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "56px 56px" }} />
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, var(--page-bg) 100%)" }} />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <ScrollReveal>
          <div
            className="relative isolate overflow-hidden rounded-[3rem] px-6 sm:px-16 py-20 sm:py-32 flex flex-col items-center text-center"
            style={{
              background: "#111111"
            }}
          >
            {/* Ambient Background Glow Effect inside the card */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute top-0 right-1/4 w-[30rem] h-[30rem] translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
              />
              <div className="absolute inset-0 bg-[#0a0a0a]/50 mix-blend-multiply" />
            </div>

            <div className="relative z-10 w-full max-w-3xl flex flex-col items-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Begin the Transformation
              </span>

              <h2
                className="text-white text-balance mb-10 leading-[1.05]"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  letterSpacing: "-0.04em"
                }}
              >
                Ready to elevate<br />
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", fontWeight: 400 }}>your operations?</span>
              </h2>

              <p className="type-xl text-white/50 text-pretty mb-14 max-w-xl">
                Book a structured, zero-commitment technological consultation and discover precisely how precision engineering can revolutionize your entire workflow.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white text-black h-14 px-8 type-base font-semibold"
                >
                  Schedule Consultation
                  <ArrowRight className="size-4" />
                </Link>
              </div>

              <div className="mt-16 flex items-center justify-center gap-8 type-sm font-medium tracking-wide text-white/30 flex-wrap">
                <a href="mailto:hello@navchetna.tech" className="hover:text-white transition-colors">
                  hello@navchetna.tech
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
