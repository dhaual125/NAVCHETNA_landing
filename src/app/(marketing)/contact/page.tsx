"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thanks for reaching out! We will get back to you shortly.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <div className="bg-[var(--page-bg)] min-h-screen">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 border-b border-[var(--card-border)]">
        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <ScrollReveal>
            <div className="max-w-4xl">
              {/* Subtle Tag */}
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-[4px]"
                style={{ 
                  boxShadow: "rgba(0,0,0,0.075) 0px 0px 0px 0.5px inset",
                  background: "#fdfcfb"
                }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-black/40" />
                <span className="text-[12px] font-medium tracking-normal text-black/60" style={{ letterSpacing: "0.14px" }}>
                  Connect with us
                </span>
              </div>

              {/* ElevenLabs Light Display Typography */}
              <h1 
                className="mb-8 text-black" 
                style={{ 
                  fontSize: "clamp(3rem, 7vw, 5.5rem)", 
                  lineHeight: "1.08", 
                  letterSpacing: "-1.2px",
                  fontFamily: "var(--font-waldenburg)",
                  fontWeight: 300,
                }}
              >
                Let&apos;s build the <br /> <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}>future together.</span>
              </h1>

              <p 
                className="text-black/60 max-w-xl text-pretty"
                style={{
                  fontSize: "18px",
                  lineHeight: "1.60",
                  letterSpacing: "0.18px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400
                }}
              >
                Whether you have a specific project in mind, need strategic consultation, or just want to explore possibilities—our team is ready to help you accelerate.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CONTACT LAYOUT SECION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative py-24 bg-[var(--page-bg)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* ── LEFT COLUMN: INFO ── */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              <ScrollReveal delay={0}>
                <div>
                  <h3 
                    className="text-black mb-4" 
                    style={{ 
                      fontSize: "24px", 
                      fontFamily: "var(--font-waldenburg)", 
                      fontWeight: 300,
                      letterSpacing: "-0.5px"
                    }}
                  >
                    Contact Information
                  </h3>
                  <p 
                    className="text-black/60 mb-8"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    Reach out to us directly through any of our channels, or fill out the form and our specialized team will be in touch promptly.
                  </p>
                </div>

                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ background: "#f5f2ef", color: "#000000" }}>
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <span className="block text-black/40 mb-1 font-medium text-xs tracking-wider uppercase">Email</span>
                      <a href="mailto:hello@navchetna.tech" className="text-black hover:text-black/70 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}>
                        hello@navchetna.tech
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ background: "#f5f2ef", color: "#000000" }}>
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <span className="block text-black/40 mb-1 font-medium text-xs tracking-wider uppercase">Phone</span>
                      <a href="tel:+919876543210" className="text-black hover:text-black/70 transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px" }}>
                        +91 98765 43210
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full" style={{ background: "#f5f2ef", color: "#000000" }}>
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <span className="block text-black/40 mb-1 font-medium text-xs tracking-wider uppercase">Office</span>
                      <address className="text-black not-italic" style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", lineHeight: "1.5" }}>
                        Navchetna Tech Hub<br />
                        Bengaluru, Karnataka, India
                      </address>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* ── RIGHT COLUMN: FORM ── */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={100}>
                <div 
                  className="p-8 sm:p-12 relative overflow-hidden bg-[var(--card-bg)] rounded-[24px] border border-[var(--card-border)]"
                >
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
                    <div className="grid sm:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-black/70 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Full Name</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 outline-none transition-all duration-300 bg-[var(--page-bg)] border border-[var(--card-border)] rounded-xl text-black"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "15px",
                          }}
                        />
                      </div>

                      {/* Email Field */}
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-black/70 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Email Address</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 outline-none transition-all duration-300 bg-[var(--page-bg)] border border-[var(--card-border)] rounded-xl text-black"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "15px",
                          }}
                        />
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="subject" className="text-black/70 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Subject</label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="How can we help?"
                        className="w-full px-4 py-3 outline-none transition-all duration-300 bg-[var(--page-bg)] border border-[var(--card-border)] rounded-xl text-black"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "15px",
                        }}
                      />
                    </div>

                    {/* Message Field */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-black/70 text-sm font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        className="w-full px-4 py-3 outline-none transition-all duration-300 resize-none bg-[var(--page-bg)] border border-[var(--card-border)] rounded-xl text-black"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "15px",
                        }}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex items-center justify-center w-full sm:w-auto"
                        style={{
                          background: "#000000",
                          color: "#ffffff",
                          padding: "14px 28px",
                          borderRadius: "9999px",
                          border: "none",
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 500,
                          fontSize: "15px",
                          cursor: isSubmitting ? "wait" : "pointer",
                          opacity: isSubmitting ? 0.8 : 1
                        }}
                      >
                        <span className="inline-flex items-center gap-2">
                          {isSubmitting ? "Sending..." : "Send Message"}
                          {!isSubmitting && <ArrowRight className="size-4 text-white/70" />}
                        </span>
                      </button>
                    </div>
                  </form>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
