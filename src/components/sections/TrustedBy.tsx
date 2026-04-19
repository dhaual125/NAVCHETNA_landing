import { ScrollReveal } from "@/components/ui/ScrollReveal";

const logos = [
  "AWS",
  "Sarvam AI",
  "SSIP",
  "NexTech",
  "TantriX",
  "Plenora",
  "NineOne15",
  "Aegis Auth",
  "Plaur",
  "Kriya",
  "LM Lens",
  "NSL",
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow text-center mb-8">
            Trusted by teams building with intent
          </p>
        </ScrollReveal>

        {/* Clean full-width marquee — no box wrapper */}
        <div
          className="relative flex overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="ticker-track flex w-max items-center" style={{ animationDuration: "40s" }}>
            {[1, 2].map((set) => (
              <div
                key={set}
                className="flex shrink-0 flex-nowrap items-center gap-10 pr-10 md:gap-14 md:pr-14"
              >
                {logos.map((name) => (
                  <span
                    key={`${set}-${name}`}
                    className="whitespace-nowrap text-[clamp(1rem,1.8vw,1.35rem)] font-medium tracking-tight"
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      color: "rgba(0,0,0,0.16)",
                      fontWeight: 500,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {name}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
