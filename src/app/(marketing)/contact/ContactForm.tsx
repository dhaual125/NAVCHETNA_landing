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
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
      {submitted ? (
        <div className="flex flex-col items-center justify-center py-8 text-center bg-green-50/50 rounded-2xl border border-green-100/50">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="type-2xl text-green-900 mb-1">Message Sent</h3>
          <p className="text-green-800/60 text-sm max-w-xs mx-auto">Thanks for reaching out! We&apos;ll get back to you shortly.</p>
          <button 
            type="button" 
            onClick={() => setSubmitted(false)}
            className="mt-6 text-[12.5px] font-semibold text-green-800/80 hover:text-green-900"
          >
            Send another message
          </button>
        </div>
      ) : (
        <>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-black/60 text-[11px] font-semibold uppercase tracking-wider pl-1">Full Name</label>
              <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Enter your full name"
                className="w-full px-4 py-3 outline-none transition-all duration-300 bg-black/[0.03] border border-black/[0.06] rounded-[12px] text-black focus:border-black/20 focus:bg-white text-[14px]" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-black/60 text-[11px] font-semibold uppercase tracking-wider pl-1">Email Address</label>
              <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="Enter your email address"
                className="w-full px-4 py-3 outline-none transition-all duration-300 bg-black/[0.03] border border-black/[0.06] rounded-[12px] text-black focus:border-black/20 focus:bg-white text-[14px]" />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="subject" className="text-black/60 text-[11px] font-semibold uppercase tracking-wider pl-1">Subject</label>
            <input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="How can we help?"
              className="w-full px-4 py-3 outline-none transition-all duration-300 bg-black/[0.03] border border-black/[0.06] rounded-[12px] text-black focus:border-black/20 focus:bg-white text-[14px]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-black/60 text-[11px] font-semibold uppercase tracking-wider pl-1">Message</label>
            <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange}
              placeholder="Tell us about your project or inquiry..."
              className="w-full px-4 py-3 outline-none transition-all duration-300 resize-none bg-black/[0.03] border border-black/[0.06] rounded-[12px] text-black focus:border-black/20 focus:bg-white text-[14px]" />
          </div>
          <div className="pt-2">
            <button type="submit" disabled={isSubmitting}
              className="group inline-flex items-center justify-center w-full sm:w-auto hover:opacity-80 active:scale-95 transition-all duration-300"
              style={{
                background: "#0A0A0A", color: "#ffffff", padding: "12px 32px", borderRadius: "9999px",
                border: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "13px",
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
        </>
      )}
    </form>
  );
}

