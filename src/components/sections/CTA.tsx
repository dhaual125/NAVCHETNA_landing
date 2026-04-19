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
              background: "#080808",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "clamp(3rem, 10vw, 5rem) clamp(1.25rem, 5vw, 3rem)",
            }}
          >
            <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
            <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
            <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
            <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span
                className="inline-flex items-center gap-2 mb-6 text-white/40"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 700,
                  fontSize: "10px",
                  letterSpacing: "1.4px",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "5px 14px",
                  borderRadius: "3px",
                }}
              >
                Begin the transformation
              </span>
              <h2
                className="mb-5 text-balance text-white"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  fontWeight: 400,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  color: "white"
                }}
              >
                Ready to elevate{" "}
                <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #fdece2 0%, #c4b0f5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>your operations?</span>
              </h2>
              <p
                className="mb-8 text-white/45"
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
                  className="inline-flex items-center justify-center gap-2 text-white/50 hover:text-white transition-colors"
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
