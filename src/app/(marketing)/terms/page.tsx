import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Terms of Service - NAVCHETNA TECHNOLOGIES",
  description: "Terms of Service for Navchetna Technologies.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: [
      "By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
      "If you do not agree with any part of these terms, you may not use our services."
    ]
  },
  {
    title: "2. Use License",
    content: [
      "We grant you a limited, non-exclusive, non-transferable license to use our services for their intended purpose.",
      "This license is subject to your compliance with these terms and may be revoked at any time for violations."
    ]
  },
  {
    title: "3. User Obligations",
    content: [
      "Users must provide accurate information, maintain account security, and use services in compliance with applicable laws.",
      "You are responsible for all activities conducted through your account and must notify us immediately of any unauthorized use."
    ]
  },
  {
    title: "4. Prohibited Activities",
    content: [
      "Users may not engage in unlawful activities, violate intellectual property rights, or interfere with service operations.",
      "Prohibited activities include but are not limited to fraud, harassment, and unauthorized access attempts."
    ]
  },
  {
    title: "5. Service Availability",
    content: [
      "We strive to maintain service availability but do not guarantee uninterrupted access.",
      "Services may be modified, suspended, or discontinued with reasonable notice when possible."
    ]
  },
  {
    title: "6. Limitation of Liability",
    content: [
      "Our liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages.",
      "Total liability shall not exceed the amount paid for services in the preceding twelve months."
    ]
  },
  {
    title: "7. Contact Information",
    content: [
      "For questions regarding these terms, contact us at hello@navchetna.tech"
    ]
  }
];

export default function TermsPage() {
  return (
    <main className="bg-[var(--page-bg)] min-h-screen">
      <section className="relative border-b border-black/[0.12] pt-28 pb-12 md:pt-36 md:pb-16" style={{ background: "var(--quiet-gradient)" }}>
        <div className="grid-overlay" />
        <div className="section-container relative z-10 mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl">
              <span className="mb-4 inline-flex rounded-full border border-black/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/42">
                Legal
              </span>
              <h1
                className="text-black text-balance"
                style={{
                  fontFamily: "var(--font-waldenburg)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.03em",
                  lineHeight: 1.05,
                }}
              >
                Terms of <span className="serif-italic">Service.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-black/50" style={{ fontFamily: "var(--font-body)", fontSize: "16px", lineHeight: 1.7 }}>
                Effective Date: January 1, 2025
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 md:py-24">
        <div className="section-container">
          <div className="mx-auto max-w-3xl flex flex-col gap-12">
            {sections.map((sec, i) => (
              <ScrollReveal key={i} delay={i * 20}>
                <div>
                  <h2 
                    className="text-2xl text-black mb-4" 
                    style={{ 
                      fontFamily: "var(--font-waldenburg)",
                      letterSpacing: "-0.02em",
                      fontWeight: 500
                    }}
                  >
                    {sec.title}
                  </h2>
                  <div className="flex flex-col gap-4">
                    {sec.content.map((paragraph, pIdx) => (
                      <p 
                        key={pIdx} 
                        className="text-black/60" 
                        style={{ fontFamily: "var(--font-body)", lineHeight: 1.7, fontSize: "0.98rem" }}
                      >
                        {paragraph.includes("hello@navchetna.tech") ? (
                          <>
                            For questions regarding these terms, contact us at <a href="mailto:hello@navchetna.tech" className="text-black underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors">hello@navchetna.tech</a>.
                          </>
                        ) : (
                          paragraph
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
