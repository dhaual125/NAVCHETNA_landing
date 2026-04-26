"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { NewsSidebar, NewsMobileBar } from "@/components/sections/NewsSidebar";
import { Calendar, Award, Microscope, Shield, Rocket, Briefcase, Handshake, Flag, Coffee, ArrowUpRight } from "lucide-react";

const toc = [
  { id: "recognition",  label: "Govt Recognition",     icon: Award       },
  { id: "research",     label: "Global Benchmarks",     icon: Microscope  },
  { id: "independence", label: "Tech Independence",     icon: Shield      },
  { id: "product",      label: "Aegis 10-Layer Auth",   icon: Rocket      },
  { id: "registered",   label: "Official Registration", icon: Briefcase   },
  { id: "partnership",  label: "AWS Collaboration",     icon: Handshake   },
  { id: "milestone",    label: "First Prototype",       icon: Flag        },
  { id: "foundation",   label: "The Birth",             icon: Coffee      },
];

const articles = [
  {
    id: "recognition",
    badge: "Featured",
    date: "Dec 22, 2025",
    title: "Navchetna Technologies: Now a Government Recognized Startup",
    body: "Navchetna Technologies is officially a DPIIT Recognized Startup under the Startup India Initiative. This recognition validates our journey from five friends in Jodhpur to national innovators building enterprise-grade technology.",
    callout: { label: "NineLLMs Solution", text: "Our proprietary NineLLMs ecosystem powers everything from Osmium AI's adaptive learning to Natraj's creative engines, establishing us as leaders in AI-driven innovation." },
    author: "Navchetna Team", readTime: "5 min read",
    tags: ["DPIIT", "Government", "Recognition"],
  },
  {
    id: "research",
    badge: "Research",
    date: "Aug 15, 2025",
    title: "Osmium AI Outperforms All Global LLMs in Educational Content Benchmarks",
    body: "We are proud to announce that Osmium AI, Navchetna's flagship AI platform, has officially outperformed every existing large language model worldwide in the domain of educational content generation. This milestone, achieved on August 15, 2025, marks a historic step in our mission to revolutionize personalized learning and empower students globally.",
    callout: { label: "Benchmark Documentation", text: "The full benchmark methodology, evaluation criteria, and results are available in our official documentation." },
    author: "Research Department", readTime: "8 min read",
    tags: ["AI", "Research", "EdTech"],
  },
  {
    id: "independence",
    badge: "Engineering",
    date: "Jan 10, 2025",
    title: "Fully Independent: Zero Dependencies, 100% In-House",
    body: "Navchetna is now fully independent with our own complete technology stack. We built Aegis Auth with 10+ layers of security, NSL for financial integrity, and LM Lens for data extraction. All proprietary, all Made in India.",
    callout: { label: "Zero Black Boxes", text: "From authentication to billing to data processing, we own every layer. No third party dependencies, no shortcuts. Just pure in-house engineering." },
    author: "Navchetna Team", readTime: "6 min read",
    tags: ["Engineering", "Independence", "Infrastructure"],
  },
  {
    id: "product",
    badge: "Product Launch",
    date: "Jan 15, 2025",
    title: "Aegis Auth: 10+ Layers of Security, Live Now",
    body: "We built our own fortress with Aegis Auth, featuring over 10 layers of security to ensure absolute data sovereignty. This is not just a concept — it is live and ready for developers right now with packages available for JavaScript, Python, Rust, Flutter, and more.",
    callout: { label: "Enterprise Grade Security", text: "Aegis Auth delivers sub-millisecond validation without compromising security, setting a new standard for authentication systems." },
    author: "Security Team", readTime: "5 min read",
    tags: ["Security", "Auth", "Developers"],
  },
  {
    id: "registered",
    badge: "Company",
    date: "Aug 6, 2025",
    title: "Navchetna Officially Registered as NINELLMS Solutions LLP",
    body: "We are proud to announce that Navchetna is now officially registered as NINELLMS Solutions LLP. What began as a vision is now a legally recognized company committed to transforming education through technology. This marks the start of our formal journey as an organization built on innovation, collaboration, and impact.",
    callout: { label: "Official Foundation", text: "Registration establishes Navchetna as a structured entity, empowering us to scale our mission, attract talent, and partner with leading institutions globally." },
    author: "Editorial Dept.", readTime: "4 min read",
    tags: ["Milestone", "Company", "Legal"],
  },
  {
    id: "partnership",
    badge: "Partnership",
    date: "Jul 16, 2025",
    title: "Navchetna Collaborates with AWS",
    body: "We are excited to announce our collaboration with Amazon Web Services to accelerate the growth of Osmium AI and our future products. This partnership provides access to world-class cloud infrastructure and advanced AI tools, enabling us to scale rapidly and deliver secure, reliable solutions to learners across the nation.",
    callout: { label: "Strategic Growth", text: "Through AWS, Navchetna will leverage Amazon S3, CloudFront, Cognito, and Bedrock to build the next generation of AI-powered educational technology." },
    author: "Editorial Dept.", readTime: "5 min read",
    tags: ["AWS", "Partnership", "Cloud"],
  },
  {
    id: "milestone",
    badge: "Milestone",
    date: "Sep 15, 2024",
    title: "First Prototype of Osmium AI Completed",
    body: "Just days after its inception, Navchetna achieved a major milestone with the creation of the first prototype of Osmium AI, our AI-driven EdTech platform. This early version validated our vision and proved that innovation, persistence, and teamwork could turn ideas into reality.",
    callout: { label: "Key Milestone", text: "The prototype demonstrated adaptive mock test generation — the foundation of Osmium AI's future success as a revolutionary learning platform." },
    author: "Editorial Dept.", readTime: "4 min read",
    tags: ["Osmium AI", "Milestone", "EdTech"],
  },
  {
    id: "foundation",
    badge: "Foundation",
    date: "Sep 6, 2024",
    title: "The Birth of Navchetna",
    body: "On this day, Navchetna was born out of a shared vision to reshape the future of education through innovation and technology. Although unofficial at the time, the journey began with a small team of dreamers determined to create solutions that empower learners everywhere. This day marks the true beginning of our story.",
    callout: { label: "Founding Spark", text: "Navchetna emerged from late-night discussions and bold ideas, setting the foundation for Osmium AI, our first product that would later define our mission." },
    author: "Editorial Dept.", readTime: "5 min read",
    tags: ["Founding", "Story", "Team"],
  },
];

export default function CompanyNewsPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <div className="flex max-w-[100rem] mx-auto">

        <NewsSidebar activeHref="/news/company" />

        <main className="flex-1 min-w-0 pb-20">
          <NewsMobileBar activeHref="/news/company" />

          <div className="flex flex-col xl:flex-row xl:gap-12 px-6 sm:px-10 lg:px-14 pt-10 pb-4">

            {/* ── Article feed ── */}
            <div className="flex-1 max-w-3xl">
              <ScrollReveal>
                <div className="mb-10 pb-8 border-b border-black/[0.06]">
                  <h1
                    className="text-[clamp(1.85rem,3.5vw,2.5rem)] text-black mb-3"
                    style={{ fontFamily: "var(--font-waldenburg)", lineHeight: 1.1, letterSpacing: "-0.03em" }}
                  >
                    Company <span className="serif-italic">Updates.</span>
                  </h1>
                  <p className="text-[0.9rem] text-black/45 max-w-lg leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Milestones, partnerships, and the story behind building Navchetna from scratch.
                  </p>
                </div>
              </ScrollReveal>

              <div className="divide-y divide-black/[0.06]">
                {articles.map((a) => (
                  <ScrollReveal key={a.id}>
                    <article id={a.id} className="py-10">
                      <div className="mb-4 flex items-center gap-3">
                        <span className="chip mb-0">{a.badge}</span>
                        <span className="text-[12.5px] text-black/35 flex items-center gap-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>
                          <Calendar className="size-3.5" />
                          {a.date}
                        </span>
                      </div>

                      <h2
                        className="text-[1.35rem] md:text-[1.6rem] leading-[1.2] text-black mb-9"
                        style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.022em" }}
                      >
                        {a.title}
                      </h2>

                      <div className="space-y-4 text-[0.9rem] leading-[1.7] text-black/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <p>{a.body}</p>
                        <div className="border border-black/[0.06] rounded-xl px-5 py-4">
                          <p className="text-[11px] font-semibold uppercase tracking-widest text-black/35 mb-1.5">{a.callout.label}</p>
                          <p className="text-[0.88rem] text-black/70 leading-[1.7]">{a.callout.text}</p>
                        </div>
                      </div>

                      <div className="mt-7 flex flex-wrap items-center gap-3 pt-6 border-t border-black/[0.06]">
                        <span className="text-[12.5px] text-black/35 flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {a.author} · {a.readTime}
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {a.tags.map((tag) => (
                            <span key={tag} className="border border-black/[0.06] px-2.5 py-1 rounded-md text-[11px] font-medium text-black/40" style={{ fontFamily: "'Inter', sans-serif" }}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* ── Right TOC ── */}
            <div className="hidden xl:block w-52 shrink-0">
              <div className="sticky top-28 border border-black/[0.06] rounded-xl p-5">
                <p className="text-[10px] uppercase tracking-widest font-semibold text-black/40 mb-4">On this page</p>
                <nav className="flex flex-col gap-0.5">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className="group flex items-center gap-2.5 px-2.5 py-2 text-[12.5px] rounded-lg text-black/50 hover:text-black hover:bg-black/[0.02] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      <item.icon className="size-3.5 opacity-50 shrink-0 group-hover:opacity-70 transition-opacity" />
                      {item.label}
                      <ArrowUpRight className="size-3 opacity-0 group-hover:opacity-35 ml-auto transition-opacity" />
                    </a>
                  ))}
                </nav>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
