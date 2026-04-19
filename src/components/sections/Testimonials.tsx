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
      <div className="section-container text-center mb-16">
        <ScrollReveal>
          <div className="mb-4 inline-flex items-center gap-2">
            <span className="block h-px w-6 bg-black/20" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
              Community & Feedback
            </span>
            <span className="block h-px w-6 bg-black/20" />
          </div>
          <h2 className="text-black text-3xl md:text-4xl lg:text-[2.75rem] font-medium tracking-tight leading-tight" style={{ fontFamily: "var(--font-waldenburg)" }}>
            Genuine impact.<br className="hidden md:block" />
            <span className="serif-italic">Real stories.</span>
          </h2>
        </ScrollReveal>
      </div>

      <div className="section-container relative z-10">
        <ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 pb-32">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="break-inside-avoid flex flex-col rounded-[16px] bg-black/[0.02] p-7 border border-black/[0.06]"
              >
                <div className="flex items-center gap-0.5 text-black/80 mb-5 text-[14px]">
                  ★★★★★
                </div>
                <p
                  className="mb-8 flex-1 text-black/70"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9375rem",
                    lineHeight: 1.65,
                  }}
                >
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div 
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-[13px] font-medium text-black/70"
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
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(0,0,0,0.5)"
                      }}
                    >
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
      
      {/* Enhanced fade out bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/90 to-transparent pointer-events-none z-20" />
    </section>
  );
}
