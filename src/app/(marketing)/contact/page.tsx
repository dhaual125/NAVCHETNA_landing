import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact — NAVCHETNA TECHNOLOGIES",
  description: "Get in touch with Navchetna Technologies. Schedule a consultation or reach out for project inquiries.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* HERO */}
      <section 
        className="relative pt-32 pb-16 md:pt-40 md:pb-20" 
        style={{ background: "linear-gradient(180deg, rgba(72,105,133,0.04) 0%, rgba(125,72,53,0.03) 40%, #ffffff 100%)" }}
      >
        <div className="grid-overlay" />
        <div className="section-container relative z-10">
          <div className="section-sep" />
          <ScrollReveal>
            <div className="max-w-4xl">
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Connect with us</p>

              <h1
                className="mb-6 text-black text-balance"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: "1.06", letterSpacing: "-0.03em", fontFamily: "var(--font-waldenburg)", fontWeight: 500 }}
              >
                Let&apos;s build the <br />
                <span className="serif-italic">future together.</span>
              </h1>

              <p
                className="text-black/55 max-w-xl text-pretty"
                style={{ fontSize: "1.05rem", lineHeight: "1.68", letterSpacing: "0", fontFamily: "var(--font-body)", fontWeight: 400 }}
              >
                Whether you have a specific project in mind, need strategic consultation, or just want to explore possibilities — our team is ready to help you accelerate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="relative py-14 md:py-20">
        <div className="section-container">
          <div className="section-divider mb-12" />
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            {/* LEFT: INFO */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              <ScrollReveal delay={0}>
                <div className="border-l border-dotted border-black/[0.25] pl-6">
                  <h3
                    className="text-black mb-4"
                    style={{ fontSize: "1.35rem", fontFamily: "var(--font-waldenburg)", fontWeight: 500, letterSpacing: "-0.015em" }}
                  >
                    Contact Information
                  </h3>
                  <p className="text-black/60 mb-8 text-pretty" style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", lineHeight: "1.65" }}>
                    Reach out to us directly through any of our channels, or fill out the form and our specialized team will be in touch promptly.
                  </p>
                </div>

                <div className="flex flex-col gap-8 pl-6 mt-4">
                  {/* Address */}
                  <div className="flex items-start gap-5">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08]">
                      <MapPin className="size-[18px] text-black/70 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[1.05rem] font-semibold text-black mb-1.5" style={{ fontFamily: "var(--font-waldenburg)" }}>Address</h4>
                      <address className="text-black/60 not-italic text-[0.92rem] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        82-Malviya Nagar, AFS Area<br />
                        Jodhpur, Rajasthan<br />
                        342011, India
                      </address>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08]">
                      <Phone className="size-[18px] text-black/70 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[1.05rem] font-semibold text-black mb-1.5" style={{ fontFamily: "var(--font-waldenburg)" }}>Phone</h4>
                      <a href="tel:+918209199581" className="text-black/60 hover:text-black transition-colors text-[0.92rem] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        +918209199581
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08]">
                      <Mail className="size-[18px] text-black/70 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[1.05rem] font-semibold text-black mb-1.5" style={{ fontFamily: "var(--font-waldenburg)" }}>Email</h4>
                      <a href="mailto:hello@navchetna.tech" className="text-black/60 hover:text-black transition-colors text-[0.92rem] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        hello@navchetna.tech
                      </a>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-5">
                    <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-black/[0.08]">
                      <Clock className="size-[18px] text-black/70 stroke-[1.5]" />
                    </div>
                    <div>
                      <h4 className="text-[1.05rem] font-semibold text-black mb-1.5" style={{ fontFamily: "var(--font-waldenburg)" }}>Business Hours</h4>
                      <p className="text-black/60 text-[0.92rem] leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT: FORM */}
            <div className="lg:col-span-7 relative">
              {/* Premium Ambient Glow for Form */}
              <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center opacity-40 mt-10">
                <div className="w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,_rgba(84,91,140,0.15)_0%,_rgba(198,139,89,0.12)_40%,_transparent_70%)] blur-[60px] rounded-full" />
              </div>

              <ScrollReveal delay={100} className="relative z-10">
                <div className="p-8 sm:p-10 relative bg-white border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.02)] rounded-sm">
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
