import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-12 md:py-28">
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <div
            className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
            style={{
              background: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%)",
              backgroundImage: "linear-gradient(135deg, #fdfbf7 0%, #f8f6ff 50%, #fef9f5 100%), linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)",
              backgroundSize: "100% 100%, 32px 32px, 32px 32px",
              border: "1px solid rgba(0,0,0,0.08)",
              padding: "clamp(3rem, 10vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8)",
            }}
          >
            {/* Premium corner accents */}
            <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-black/15 to-transparent" />
            <span className="absolute top-0 left-0 h-12 w-px bg-gradient-to-b from-black/15 to-transparent" />
            <span className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-black/15 to-transparent" />
            <span className="absolute bottom-0 right-0 h-12 w-px bg-gradient-to-t from-black/15 to-transparent" />

            {/* Subtle gradient orbs */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-radial from-purple-200/20 to-transparent blur-3xl opacity-40" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-radial from-orange-200/20 to-transparent blur-3xl opacity-40" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span
                className="inline-flex items-center gap-2 mb-6 text-black/50"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  border: "1px solid rgba(0,0,0,0.12)",
                  padding: "5px 14px",
                  borderRadius: "3px",
                  background: "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Begin the transformation
              </span>
              <h2
                className="mb-5 text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  color: "#000"
                }}
              >
                Ready to elevate{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #d4845a 0%, #8b6bc7 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>your operations?</span>
              </h2>
              <p
                className="mb-8 text-black/60"
                style={{ lineHeight: 1.7, fontSize: "0.96rem", maxWidth: "520px", margin: "0 auto 2rem" }}
              >
                Book a structured, zero-commitment consultation and see how careful product
                thinking and precision engineering can reshape your workflow.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary gap-2"
                  style={{ height: "2.5rem", padding: "0 1.5rem" }}
                >
                  Schedule consultation
                  <ArrowRight weight="bold" className="size-3.5 text-white/50" />
                </Link>
                <a
                  href="mailto:hello@navchetna.tech"
                  className="inline-flex items-center justify-center gap-2 text-black/60 hover:text-black transition-colors"
                  style={{ fontSize: "13px", fontWeight: 500 }}
                >
                  <EnvelopeSimple className="size-4" />
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
