import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Priya Kumari",
    role: "JEE Student, Patna",
    quote: "Osmium didn't feel like an exam prep app — it felt like someone who understood how I studied. The predictions were accurate, and I wasn't second-guessing myself the night before my exam.",
    initial: "P",
  },
  {
    name: "Dr. Mehul Shah",
    role: "Assistant Professor, Ahmedabad",
    quote: "We integrated Natraj into our anatomy curriculum. Students who previously struggled with spatial understanding had a tangible breakthrough. That kind of impact is rare with any software.",
    initial: "M",
  },
  {
    name: "Raghav Malhotra",
    role: "Co-Founder, EdTech Startup, Delhi",
    quote: "We needed a digital presence that matched how seriously we take our work. Navchetna delivered without hand-holding. Timeline was honest, delivery was solid.",
    initial: "R",
  },
  {
    name: "Arjun Nair",
    role: "Product Manager, Bangalore",
    quote: "What impressed me was that they pushed back on a few of our assumptions — in a good way. They genuinely understood our product goals, not just the spec sheet.",
    initial: "A",
  },
  {
    name: "Sneha Desai",
    role: "Director of Operations, Mumbai",
    quote: "Kriya removed a layer of friction we didn't even know was costing us hours every week. The team's communication throughout was straightforward and no-nonsense.",
    initial: "S",
  },
  {
    name: "Vikram Singh",
    role: "Founder & CEO, Jaipur",
    quote: "Most agencies optimize for their process. Navchetna optimized for our outcome. That distinction matters more than any portfolio or pitch deck.",
    initial: "V",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-[var(--page-bg)]">
      {/* Header */}
      <div className="section-container mb-16">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span
              className="inline-block mb-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/40"
              style={{ letterSpacing: "0.18em" }}
            >
              Client Perspectives
            </span>
            <h2
              className="text-black text-balance"
              style={{
                fontFamily: "var(--font-waldenburg)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 400,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              Trusted by builders,{" "}
              <span
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              >
                educators &amp; founders.
              </span>
            </h2>
            <p
              className="mt-5 text-black/50"
              style={{ fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "480px" }}
            >
              A small collection of what people say after working with us or using our products.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Grid */}
      <div className="section-container">
        <ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5 relative z-10 pb-24">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="break-inside-avoid flex flex-col rounded-2xl bg-white p-6 border border-black/[0.05]"
              >
                {/* Stars */}
                <div
                  className="mb-5 text-black/80"
                  style={{ letterSpacing: "0.15em", fontSize: "13px" }}
                >
                  ★★★★★
                </div>

                {/* Quote */}
                <p
                  className="mb-6 flex-1 text-black/70"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.925rem",
                    lineHeight: 1.65,
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-black/[0.05]">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/[0.06] text-[12px] font-semibold text-black/70">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.83rem", fontWeight: 600, color: "#111", lineHeight: 1.3 }}>
                      {testimonial.name}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "rgba(0,0,0,0.4)", marginTop: "2px" }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Fade out bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-20"
        style={{
          height: "180px",
          background: "linear-gradient(to top, var(--page-bg) 0%, var(--page-bg) 20%, transparent 100%)",
        }}
      />
    </section>
  );
}
