"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("https://formspree.io/f/hello@navchetna.tech", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
      {submitted && (
        <div className="rounded-[14px] bg-green-50 border border-green-100 px-4 py-3 text-green-800 text-[13.5px] font-medium tracking-[-0.01em]">
          Thanks for reaching out! We&apos;ll get back to you shortly.
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-black/70 text-[13px] font-medium" style={{ fontFamily: "var(--font-body)" }}>Full Name</label>
          <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="John Doe"
            className="w-full px-4 py-3 outline-none transition-all duration-300 bg-[var(--page-bg)] border border-[var(--border-default)] rounded-[14px] text-black focus:border-black focus:ring-1 focus:ring-black"
            style={{ fontFamily: "var(--font-body)", fontSize: "14px" }} />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-black/70 text-[13px] font-medium" style={{ fontFamily: "var(--font-body)" }}>Email Address</label>
          <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com"
            className="w-full px-4 py-3 outline-none transition-all duration-300 bg-[var(--page-bg)] border border-[var(--border-default)] rounded-[14px] text-black focus:border-black focus:ring-1 focus:ring-black"
            style={{ fontFamily: "var(--font-body)", fontSize: "14px" }} />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-black/70 text-[13px] font-medium" style={{ fontFamily: "var(--font-body)" }}>Subject</label>
        <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="How can we help?"
          className="w-full px-4 py-3 outline-none transition-all duration-300 bg-[var(--page-bg)] border border-[var(--border-default)] rounded-[14px] text-black focus:border-black focus:ring-1 focus:ring-black"
          style={{ fontFamily: "var(--font-body)", fontSize: "14px" }} />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-black/70 text-[13px] font-medium" style={{ fontFamily: "var(--font-body)" }}>Message</label>
        <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
          placeholder="Tell us about your project or inquiry..."
          className="w-full px-4 py-3 outline-none transition-all duration-300 resize-none bg-[var(--page-bg)] border border-[var(--border-default)] rounded-[14px] text-black focus:border-black focus:ring-1 focus:ring-black"
          style={{ fontFamily: "var(--font-body)", fontSize: "14px" }} />
      </div>
      <div className="pt-2">
        <button type="submit" disabled={isSubmitting}
          className="group inline-flex items-center justify-center w-full sm:w-auto hover:opacity-80 active:scale-95 transition-all duration-300"
          style={{
            background: "#0A0A0A", color: "#ffffff", padding: "12px 24px", borderRadius: "9999px",
            border: "none", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "13.5px",
            cursor: isSubmitting ? "wait" : "pointer", opacity: isSubmitting ? 0.8 : 1,
            letterSpacing: "-0.01em"
          }}
        >
          <span className="inline-flex items-center gap-2">
            {isSubmitting ? "Sending..." : "Send Message"}
            {!isSubmitting && <ArrowRight className="size-4 text-white/70 transition-transform group-hover:translate-x-1" />}
          </span>
        </button>
      </div>
    </form>
  );
}

