const fs = require('fs');

// 1. globals.css
let css = fs.readFileSync('src/app/globals.css', 'utf8');

// Update dotted lines
css = css.replace(/background-size: 24px 1px;/g, 'background-size: 48px 1px;');
css = css.replace(/background-size: 1px 10px;/g, 'background-size: 1px 48px;');

// Redefine btn-primary with hero sci-fi vibe
css = css.replace(/\/\* ═══════════════════════════════════════════\r?\n   BUTTON MATURE UI EFFECTS \(SCI-FI \/ BLUEPRINT VIBE\)[\s\S]*?\}\r?\n/g, '');
const btnScifi = `
/* ═══════════════════════════════════════════
   BUTTON MATURE UI EFFECTS (SCI-FI / BLUEPRINT VIBE)
   ═══════════════════════════════════════════ */
.btn-primary {
  background-color: #000000;
  background-image: 
    linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
  background-size: 8px 8px;
  color: #FFFFFF;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 15px rgba(0,0,0,0.2), inset 0 0 0 1px rgba(255,255,255,0.05);
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-size: 0.75rem;
  font-family: 'Inter', sans-serif;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0 1.25rem;
}
.btn-primary::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent);
  transform: translateX(-100%);
  transition: none;
}
.btn-primary::after {
  content: '';
  position: absolute;
  bottom: 0; right: 0; width: 4px; height: 4px;
  background: #fff;
  opacity: 0.5;
}
.btn-primary:hover {
  background-color: #111111;
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.1);
  letter-spacing: 0.18em;
}
.btn-primary:hover::before {
  transform: translateX(100%);
  transition: transform 0.8s ease-in-out;
}
`;
css += '\n' + btnScifi;
fs.writeFileSync('src/app/globals.css', css);


// 2. Footer.tsx
let footer = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');
footer = footer.replace(/<div className="mt-8 flex gap-3 text-black\/20">[\s\S]*?<\/div>/, '');
fs.writeFileSync('src/components/layout/Footer.tsx', footer);


// 3. products/page.tsx
let products = fs.readFileSync('src/app/(marketing)/products/page.tsx', 'utf8');
products = products.replace(/\/assets\/osmium \(1\)\.png/g, '/assets/osmium-mockup.png');
products = products.replace(/\/assets\/nataraj\.png/g, '/assets/nataraj_mockup.png');
fs.writeFileSync('src/app/(marketing)/products/page.tsx', products);


// 4. Testimonials.tsx (Complete rewrite for the layout)
const testCode = `import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
`;
fs.writeFileSync('src/components/sections/Testimonials.tsx', testCode);


// 5. career/page.tsx Culture section
let career = fs.readFileSync('src/app/(marketing)/career/page.tsx', 'utf8');
const oldCulture = `            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 55}>
                <div className="h-full rounded-[var(--panel-radius)] bg-white p-5 ring-1 ring-black/[0.15] transition-all duration-300 hover:-translate-y-0.5 hover:ring-black/[0.25]">
                  <span className="mb-5 flex size-9 items-center justify-center rounded-[12px] bg-black/[0.045] text-black/58">
                    <perk.icon className="size-4" />
                  </span>
                  <h3 className="text-base font-semibold text-black">{perk.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/48">{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>`;

const newCulture = `            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <ScrollReveal key={perk.title} delay={index * 40}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-black/[0.02] border border-black/[0.06] p-7 transition-all duration-500 hover:bg-black/[0.04] hover:border-black/[0.12]">
                  {/* Subtle Blueprint Background on Hover */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
                  
                  <span className="relative mb-6 flex size-10 items-center justify-center rounded-xl bg-white shadow-sm border border-black/[0.05] text-black/70">
                    <perk.icon className="size-4" />
                  </span>
                  <h3 className="relative text-lg font-medium text-black tracking-tight" style={{ fontFamily: "var(--font-waldenburg)" }}>{perk.title}</h3>
                  <p className="relative mt-3 text-[14px] leading-relaxed text-black/60">{perk.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>`;
career = career.replace(oldCulture, newCulture);
fs.writeFileSync('src/app/(marketing)/career/page.tsx', career);


// 6. services/page.tsx "What we do" section
let services = fs.readFileSync('src/app/(marketing)/services/page.tsx', 'utf8');

const oldWhatWeDo = `<article className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] border-l border-dotted border-black/[0.25] pl-6">
                  {/* Left Column: Number & Title */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold text-black/30 mb-2 tracking-widest">
                      {service.num} · {service.tag}
                    </span>
                    <h2
                      className="text-2xl mt-1"
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontWeight: 500,
                        letterSpacing: "-0.02em",
                        lineHeight: 1.15,
                        color: "var(--heading-color)"
                      }}
                    >
                      {service.title}
                    </h2>
                  </div>

                  {/* Right Column: Description & Bullets */}
                  <div className="flex flex-col md:pl-8 md:border-l border-dotted border-black/[0.15]">
                    <p className="text-black/60 mb-6" style={{ lineHeight: 1.65, fontSize: "0.95rem" }}>
                      {service.desc}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.bullets.map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <service.icon weight="duotone" className="size-4 text-black/40 mt-1 shrink-0" />
                          <span className="text-[13px] font-medium text-black/70 leading-relaxed">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>`;

const newWhatWeDo = `<article className="group relative overflow-hidden rounded-2xl bg-white border border-black/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-black/[0.12] p-8 md:p-10">
                  <div className="absolute top-0 left-0 w-1 h-full bg-black/10 group-hover:bg-black/30 transition-colors" />
                  <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] pl-2">
                    {/* Left Column: Number & Title */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="flex items-center justify-center size-8 rounded-full bg-black/[0.04] text-[11px] font-semibold text-black/60 tracking-wider">
                          {service.num}
                        </span>
                        <span className="text-[11px] font-semibold text-black/40 tracking-widest uppercase">
                          {service.tag}
                        </span>
                      </div>
                      <h2
                        className="text-[1.75rem] mt-2"
                        style={{
                          fontFamily: "var(--font-waldenburg)",
                          fontWeight: 500,
                          letterSpacing: "-0.02em",
                          lineHeight: 1.15,
                          color: "var(--heading-color)"
                        }}
                      >
                        {service.title}
                      </h2>
                    </div>

                    {/* Right Column: Description & Bullets */}
                    <div className="flex flex-col md:pl-8 md:border-l border-solid border-black/[0.08]">
                      <p className="text-black/60 mb-8" style={{ lineHeight: 1.7, fontSize: "1rem" }}>
                        {service.desc}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-y-5 gap-x-4">
                        {service.bullets.map((item) => (
                          <div key={item} className="flex items-center gap-3">
                            <span className="flex size-6 items-center justify-center rounded-md bg-black/[0.03] text-black/40">
                              <service.icon weight="bold" className="size-3.5" />
                            </span>
                            <span className="text-[13.5px] font-medium text-black/70">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>`;

services = services.replace(oldWhatWeDo, newWhatWeDo);
fs.writeFileSync('src/app/(marketing)/services/page.tsx', services);

