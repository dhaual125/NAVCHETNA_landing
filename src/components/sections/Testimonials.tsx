import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Kumari",
    role: "Student, Patna",
    quote: "I used Osmium for my JEE prep. Honestly, it felt less like an app and more like a study partner. The mock tests were scarily close to the actual exam pattern.",
    initial: "P",
  },
  {
    name: "Dr. Mehul Shah",
    role: "Professor, Ahmedabad",
    quote: "We tried Natraj in our college for managing course content. Usually, software means headaches, but this one was surprisingly smooth. Even my colleagues figured it out.",
    initial: "M",
  },
  {
    name: "Raghav Malhotra",
    role: "Founder, New Delhi",
    quote: "Our startup needed a website that did not look dated. Navchetna delivered something clean, modern, and genuinely easy to use. The process was entirely transparent.",
    initial: "R",
  },
  {
    name: "Arjun Nair",
    role: "Professional, Bangalore",
    quote: "I asked Navchetna for branding help and they made a logo so clear that even my mom finally understood what my company does. That is a real UX win.",
    initial: "A",
  },
  {
    name: "Sneha Desai",
    role: "HR Director, Mumbai",
    quote: "Kriya changed how our team communicates. We completely dropped our old scattered tools. The difference in daily operational speed is night and day.",
    initial: "S",
  },
  {
    name: "Vikram Singh",
    role: "CEO, Jaipur",
    quote: "Finding a tech partner who actually listens is rare. They didn't just build the features we asked for, they helped us refine the actual business logic behind them.",
    initial: "V",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#FAFAFA]">
      <div className="section-container text-center mb-14">
        <ScrollReveal>
          <h2 className="text-black text-4xl md:text-5xl font-medium tracking-tight mb-4" style={{ fontFamily: "var(--font-waldenburg)" }}>
            See why we're rated #1<br />in modern tech
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-black/[0.04] px-4 py-2 rounded-full border border-black/[0.05]">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-black/60">Rated #1 Engineering Partner</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="section-container">
        <ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 relative z-10 pb-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="break-inside-avoid flex flex-col rounded-[16px] bg-white p-6 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-black/[0.03] transition-all hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
              >
                <div className="text-black mb-4 tracking-[0.2em] text-[15px]">
                  ★★★★★
                </div>
                <p
                  className="mb-6 flex-1 text-black/80"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div 
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f0f0f0] text-[13px] font-medium text-black"
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: "#000"
                      }}
                    >
                      {testimonial.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      
      {/* Fade out bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#FAFAFA] to-transparent pointer-events-none z-20" />
    </section>
  );
}
