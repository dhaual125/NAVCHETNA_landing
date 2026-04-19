const fs = require('fs');

// ─────────────────────────────────────────────
// SHARED DARK BLUEPRINT CARD TEMPLATE (as JSX strings)
// ─────────────────────────────────────────────

// 1. ABOUT PAGE — remove "Let's Connect" bottom CTA section
let about = fs.readFileSync('src/app/(marketing)/about/page.tsx', 'utf8');

// Remove the entire BOTTOM CTA section
const bottomCtaStart = `      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          BOTTOM CTA
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}`;
const bottomCtaEnd = `      </section>
    </div>
  );
}`;

const ctaIdx = about.indexOf(bottomCtaStart);
if (ctaIdx !== -1) {
  about = about.slice(0, ctaIdx) + `    </div>\n  );\n}\n`;
}
fs.writeFileSync('src/app/(marketing)/about/page.tsx', about);
console.log('✓ Removed "Let\'s Connect" from about page');


// 2. PRODUCTS PAGE — update CTA card to blueprint style
let products = fs.readFileSync('src/app/(marketing)/products/page.tsx', 'utf8');
const oldProductsCta = `      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-xl px-6 py-10 sm:px-8 md:px-10 md:py-12"
              style={{
                background: "linear-gradient(180deg, rgba(10,10,10,0.98) 0%, rgba(16,16,16,0.98) 100%)",
              }}
            >
              <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
                <h2
                  className="mb-4 text-balance text-white"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.6rem, 3vw, 2.35rem)",
                    fontWeight: 500,
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Ready to experience{" "}
                  <span className="serif-italic">conscious intelligence?</span>
                </h2>
                <p className="max-w-xl" style={{ color: "rgba(255,255,255,0.56)", lineHeight: 1.68, fontSize: "0.94rem" }}>
                  Discover how our AI-powered products can transform your workflow and unlock new possibilities.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 btn btn-primary"
                  style={{ background: "#fff", color: "#000", height: "2.5rem", padding: "0 1.25rem" }}
                >
                  Request Integration
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>`;

const newProductsCta = `      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-14 md:py-20">
        <div className="section-container">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
              style={{
                background: "#080808",
                backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "80px 48px",
              }}
            >
              {/* corner accents */}
              <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
              <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
              <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
              <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />
              <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
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
                  Explore Products
                </span>
                <h2
                  className="mb-4 text-balance text-white"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.6rem, 3vw, 2.35rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Ready to experience{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #fdece2 0%, #c4b0f5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>conscious intelligence?</span>
                </h2>
                <p className="max-w-xl mt-3" style={{ color: "rgba(255,255,255,0.45)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Discover how our AI-powered products can transform your workflow and unlock new possibilities.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 btn btn-primary"
                  style={{ height: "2.5rem", padding: "0 1.5rem" }}
                >
                  Request Integration
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>`;

if (products.includes(oldProductsCta)) {
  products = products.replace(oldProductsCta, newProductsCta);
  fs.writeFileSync('src/app/(marketing)/products/page.tsx', products);
  console.log('✓ Products CTA updated');
} else {
  console.log('! Products CTA pattern not found');
}


// 3. SERVICES PAGE — update bottom CTA to blueprint style  
let services = fs.readFileSync('src/app/(marketing)/services/page.tsx', 'utf8');
const oldServicesCta = `      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden pb-16 md:pb-20">
        <div className="section-sep" />
        <div className="section-container pt-16">
          <ScrollReveal>
            <div className="flex flex-col gap-6 py-4 md:flex-row md:items-center md:justify-between md:gap-8">
              <div>
                <span className="chip mb-3">Ready to transform?</span>
                <h2
                  className="max-w-2xl text-black text-balance"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.45rem, 2.8vw, 2.15rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.08,
                  }}
                >
                  Let&apos;s build something{" "}
                  <span className="serif-italic">useful and beautiful.</span>
                </h2>
              </div>
              <Link
                href="/contact"
                className="btn btn-primary shrink-0"
                style={{ height: "2.5rem", padding: "0 1.25rem" }}
              >
                Schedule a Call
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>`;

const newServicesCta = `      {/* ── Bottom CTA ── */}
      <section className="relative overflow-hidden pb-16 md:pb-20">
        <div className="section-sep" />
        <div className="section-container pt-16">
          <ScrollReveal>
            <div
              className="relative isolate overflow-hidden rounded-2xl flex flex-col items-center text-center"
              style={{
                background: "#080808",
                backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "80px 48px",
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
                  Ready to transform?
                </span>
                <h2
                  className="text-white text-balance mb-4"
                  style={{
                    fontFamily: "var(--font-waldenburg)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 400,
                    letterSpacing: "-0.03em",
                    lineHeight: 1.08,
                  }}
                >
                  Let&apos;s build something{" "}
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic", background: "linear-gradient(135deg, #fdece2 0%, #c4b0f5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>useful and beautiful.</span>
                </h2>
                <p className="text-white/45 mb-8" style={{ lineHeight: 1.7, fontSize: "0.95rem" }}>
                  Book a structured consultation and see how careful product thinking can reshape your workflow.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-primary"
                  style={{ height: "2.5rem", padding: "0 1.5rem" }}
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>`;

if (services.includes(oldServicesCta)) {
  services = services.replace(oldServicesCta, newServicesCta);
  fs.writeFileSync('src/app/(marketing)/services/page.tsx', services);
  console.log('✓ Services CTA updated');
} else {
  console.log('! Services CTA pattern not found');
}


// 4. CAREER PAGE — update bottom "Don't see a role?" CTA to blueprint style
let career = fs.readFileSync('src/app/(marketing)/career/page.tsx', 'utf8');
const oldCareerCta = `      <section className="pb-16 md:pb-20">
        <div className="section-container">
          <div className="rounded-[var(--panel-radius)] p-6 text-white md:p-8" style={{ background: "#000", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>`;

const newCareerCta = `      <section className="pb-16 md:pb-20">
        <div className="section-container">
          <div
            className="relative isolate overflow-hidden rounded-2xl p-8 md:p-12 text-white"
            style={{
              background: "#080808",
              backgroundImage: "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <span className="absolute top-0 left-0 w-8 h-px bg-white/20" />
            <span className="absolute top-0 left-0 h-8 w-px bg-white/20" />
            <span className="absolute bottom-0 right-0 w-8 h-px bg-white/20" />
            <span className="absolute bottom-0 right-0 h-8 w-px bg-white/20" />`;

if (career.includes(oldCareerCta)) {
  career = career.replace(oldCareerCta, newCareerCta);
  // Also fix the closing div - the old one had one closing div, new one needs same count
  fs.writeFileSync('src/app/(marketing)/career/page.tsx', career);
  console.log('✓ Career CTA updated');
} else {
  console.log('! Career CTA - trying alternate match...');
  // Try finding by key string
  const altIdx = career.indexOf('"rounded-[var(--panel-radius)] p-6 text-white md:p-8"');
  if (altIdx !== -1) {
    console.log('! Found alternate at index', altIdx);
  }
}

// 5. CTA.tsx component — update to blueprint style
let cta = fs.readFileSync('src/components/sections/CTA.tsx', 'utf8');
const oldCtaSection = `    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="section-sep" />

      <div className="section-container">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div className="max-w-3xl">
              <span className="chip mb-6">Begin the transformation</span>

              <h2
                className="mb-6 text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 500,
                  lineHeight: 1.04,
                  letterSpacing: "-0.03em",
                  color: "var(--heading-color)",
                }}
              >
                Ready to elevate
                <br />
                <span className="serif-italic text-black/60">your operations?</span>
              </h2>

              <p
                className="max-w-xl"
                style={{ color: "rgba(0,0,0,0.56)", lineHeight: 1.68, fontSize: "1.05rem" }}
              >
                Book a structured, zero-commitment consultation and see how careful product
                thinking and precision engineering can reshape your workflow.
              </p>
            </div>

            <div className="flex flex-col gap-5 md:min-w-[280px]">
              <Link
                href="/contact"
                className="btn btn-primary h-12 px-6 text-[14px] w-full sm:w-auto"
              >
                Schedule consultation
                <ArrowRight weight="bold" className="size-4" />
              </Link>
              
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 border-b border-dotted border-black/[0.15]" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-black/30">Or</span>
                <div className="h-px flex-1 border-b border-dotted border-black/[0.15]" />
              </div>

              <a
                href="mailto:hello@navchetna.tech"
                className="flex items-center justify-center gap-2 rounded-full border border-black/[0.1] bg-transparent h-12 px-6 text-[13px] font-semibold text-black/70 transition-colors hover:bg-black/[0.02] hover:text-black"
              >
                <EnvelopeSimple className="size-4" />
                hello@navchetna.tech
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>`;

const newCtaSection = `    <section className="relative overflow-hidden py-20 md:py-28">
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
              padding: "80px 48px",
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
                  className="btn btn-primary"
                  style={{ height: "2.5rem", padding: "0 1.5rem" }}
                >
                  Schedule consultation
                  <ArrowRight weight="bold" className="size-3.5" />
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
    </section>`;

if (cta.includes(oldCtaSection)) {
  cta = cta.replace(oldCtaSection, newCtaSection);
  fs.writeFileSync('src/components/sections/CTA.tsx', cta);
  console.log('✓ CTA component updated');
} else {
  console.log('! CTA component pattern not found');
}
