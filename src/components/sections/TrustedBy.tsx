import Image from "next/image";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const logos = [
  { src: "/assets/aws.svg",      alt: "AWS",      w: "w-20 md:w-24",  h: "h-10 md:h-12" },
  { src: "/assets/homeguru.svg", alt: "Homeguru", w: "w-36 md:w-44",  h: "h-9 md:h-11" },
  { src: "/assets/plaur.svg",    alt: "Plaur",    w: "w-32 md:w-40",  h: "h-9 md:h-11" },
];

export function TrustedBy() {
  return (
    <section className="relative overflow-hidden py-14 md:py-16" style={{ backgroundColor: "#ffffff" }}>
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <p className="section-eyebrow text-center mb-10">
            Trusted by teams building with intent
          </p>
        </ScrollReveal>
      </div>

      <div className="section-container">
        {/* Marquee — edge fade */}
        <div
          className="relative flex overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="ticker-track flex w-max items-center"
            style={{ animationDuration: "28s" }}
          >
            {[1, 2, 3, 4, 5, 6].map((set) => (
              <div
                key={set}
                className="flex shrink-0 flex-nowrap items-center gap-10 pr-10 md:gap-14 md:pr-14"
              >
                {logos.map((logo) => (
                  <div
                    key={`${set}-${logo.alt}`}
                    className={`relative ${logo.w} ${logo.h} opacity-35 hover:opacity-65 transition-opacity duration-300 grayscale flex-shrink-0`}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain"
                      sizes="176px"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
