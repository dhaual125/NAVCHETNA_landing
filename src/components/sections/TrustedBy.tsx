import { ScrollReveal } from "@/components/ui/ScrollReveal";

const logos = [
  "AWS", "Sarvam AI", "SSIP", "NexTech", "TantriX",
  "Plenora", "NineOne15²", "Aegis Auth", "Plaur", "Kriya",
  "LM Lens", "NSL",
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: "var(--page-bg)" }}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8 mb-10 md:mb-14">
        <ScrollReveal>
          <p className="type-sm font-medium tracking-[0.05em] uppercase text-center text-warm-500">
            Trusted by leading developers and enterprises
          </p>
        </ScrollReveal>
      </div>

      {/* Marquee Wrapper with Mask */}
      <ScrollReveal delay={100} className="w-full">
        <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          {/* Ticker Track (Scrolls left continuously) */}
          <div className="flex w-max items-center ticker-track" style={{ animationDuration: "60s" }}>

            {/* Need two identical sets for seamless infinite scrolling */}
            {[1, 2].map((set) => (
              <div
                key={set}
                className="flex flex-nowrap shrink-0 items-center gap-x-16 sm:gap-x-24 pr-16 sm:pr-24"
              >
                {logos.map((name) => (
                  <div
                    key={name}
                    className="flex shrink-0 items-center justify-center cursor-default transition-all duration-500 hover:scale-105"
                  >
                    <span
                      className="type-5xl font-semibold whitespace-nowrap opacity-20 transition-all duration-300 hover:opacity-100"
                      style={{ color: "var(--heading-color)" }}
                    >
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
