import type { Metadata } from "next";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Privacy Policy - NAVCHETNA TECHNOLOGIES",
  description: "Privacy Policy for Navchetna Technologies.",
};

const sections = [
  {
    title: "1. Information Collection",
    content: [
      "We collect information you provide directly, including personal details when creating accounts, using services, or contacting support.",
      "Automatically collected data includes device information, usage patterns, and technical details necessary for service operation."
    ]
  },
  {
    title: "2. Use of Information",
    content: [
      "Information is used to provide, maintain, and improve services, process transactions, and communicate with users.",
      "We analyze usage data to enhance user experience and develop new features while maintaining privacy standards."
    ]
  },
  {
    title: "3. Information Sharing",
    content: [
      "Personal information is not sold or shared with third parties except as necessary for service provision or legal compliance.",
      "We may share aggregated, non-personally identifiable information for business purposes."
    ]
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard security measures to protect personal information against unauthorized access, alteration, or destruction.",
      "While we strive for complete security, no method of transmission over the internet is 100% secure."
    ]
  },
  {
    title: "5. User Rights",
    content: [
      "Users have the right to access, correct, or delete personal information, subject to legal and operational requirements.",
      "Requests can be submitted through our contact channels and will be processed within reasonable timeframes."
    ]
  },
  {
    title: "6. Contact Information",
    content: [
      "For privacy-related inquiries, contact us at hello@navchetna.tech"
    ]
  }
];

export default function PrivacyPage() {
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
                Privacy <span className="serif-italic">Policy.</span>
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
                            For privacy-related inquiries, contact us at <a href="mailto:hello@navchetna.tech" className="text-black underline underline-offset-4 decoration-black/20 hover:decoration-black transition-colors">hello@navchetna.tech</a>.
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
