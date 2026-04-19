"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, Lightbulb, Heart, Award, Layers } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function SumanProfilePage() {
  return (
    <div className="bg-white min-h-screen pt-20 pb-16">
      <div className="max-w-4xl mx-auto px-6 sm:px-12">

        {/* Breadcrumb */}
        <ScrollReveal>
          <div className="mb-10 flex items-center gap-2 text-[11px] font-semibold tracking-widest text-black/40 uppercase">
            <Link href="/news" className="hover:text-black transition-colors">News</Link>
            <span>/</span>
            <span className="hover:text-black transition-colors cursor-pointer">Company Updates</span>
            <span>/</span>
            <span className="text-black/80">Suman Yadav</span>
          </div>
        </ScrollReveal>

        {/* Profile Header */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/[0.08]">
              <Image
                src="/assets/suman.jpg"
                alt="Suman Yadav"
                fill
                sizes="(max-width: 768px) 160px, 224px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col flex-1 pt-1">
              <h1
                className="text-3xl md:text-4xl mb-2 bg-clip-text text-transparent bg-gradient-to-r from-black via-[#7D4835] to-[#333]"
                style={{ fontFamily: "var(--font-waldenburg)", fontWeight: 500, letterSpacing: "-0.03em" }}
              >
                Suman Yadav
              </h1>
              <p className="text-[15px] font-medium tracking-wide text-black/60 uppercase mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Co-Founder & Head of Design <span className="text-black/30 mx-2">•</span> Navchetna Technologies
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Layers className="w-3.5 h-3.5 text-black/50" />
                  Design Leadership
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Heart className="w-3.5 h-3.5 text-black/50" />
                  Student Advocate
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Intro Highlight */}
        <ScrollReveal delay={100}>
          <div className="relative mb-12 pl-8 md:pl-12 py-2">
            <span
              className="absolute -top-4 left-0 text-7xl md:text-9xl text-black/[0.06] leading-none pointer-events-none select-none"
              style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
            >
              "
            </span>
            <p className="relative z-10 text-base md:text-xl text-black/80 leading-relaxed" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.01em" }}>
              Co-Founder and Head of Design at Navchetna — passionate about creating meaningful AI-driven solutions that empower students and uplift our nation.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20">

          {/* Left Column: Biography */}
          <div className="space-y-8 text-black/75" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", lineHeight: 1.7 }}>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-3" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>About Suman</h2>
                <p className="mb-4">
                  I&apos;m Suman Yadav, Co-Founder and Head of Design at Navchetna. Coming from a humble background, I&apos;ve always believed that technology can change lives — especially for students like me who dream of creating something meaningful despite limited resources.
                </p>
                <p>
                  My biggest motivation is to uplift our nation and empower the next generation with modern AI-driven solutions, while also supporting my family who stood by me through every step.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-3" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Design at Navchetna</h2>
                <p className="mb-4">
                  At Navchetna, I channel this vision into design — crafting experiences that are not only functional but also inspiring. My story is proof that you don&apos;t need to have it all figured out to start — you just need the courage to begin.
                </p>
                <p>
                  If there&apos;s one thing I hope to pass on, it&apos;s this: don&apos;t fear failures, they&apos;re part of the path. What matters is daring to build, to learn, and to create the future you believe in.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-3" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Design Philosophy</h2>
                <p className="mb-4">
                  My approach to design is rooted in the belief that technology should be accessible to everyone, regardless of their background or resources. Every interface, every interaction, and every experience we create at Navchetna is designed with the student in mind — those who dare to dream big despite facing challenges.
                </p>
                <p>
                  I focus on creating designs that are not just visually appealing, but also meaningful and impactful. Each design decision is made with the intention of empowering users and making AI technology more approachable for the next generation of innovators.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-3" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Impact & Vision</h2>
                <p className="mb-4">
                  At Navchetna, my role extends beyond traditional design. I&apos;m committed to creating solutions that bridge the gap between advanced AI technology and students who need it most. My vision is to ensure that every young mind, regardless of their economic background, has access to tools that can transform their educational journey.
                </p>
                <p>
                  Through thoughtful design and user-centered approaches, we&apos;re building a platform that doesn&apos;t just serve technology, but serves humanity — particularly the students who will shape our nation&apos;s future.
                </p>
              </div>
            </ScrollReveal>

            {/* Pull Quote */}
            <ScrollReveal>
              <div className="relative pl-8 md:pl-12 py-2">
                <span
                  className="absolute -top-4 left-0 text-7xl md:text-9xl text-black/[0.06] leading-none pointer-events-none select-none"
                  style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
                >
                  "
                </span>
                <p className="relative z-10 text-base md:text-lg text-black/60 leading-relaxed italic" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.01em" }}>
                  Don&apos;t fear failures — they&apos;re part of the path. What matters is daring to build, to learn, and to create the future you believe in.
                </p>
              </div>
            </ScrollReveal>

          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">

            {/* Roles */}
            <ScrollReveal delay={150}>
              <div className="p-6 rounded-xl bg-black/[0.02] border border-black/[0.06]">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" /> Leadership Positions
                </h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">Co-Founder & Head of Design</span>
                    <span className="text-[11px] text-black/50 mt-0.5">NINELLMS SOLUTIONS LLP (Navchetna)</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">Co-Founder</span>
                    <span className="text-[11px] text-black/50 mt-0.5">Osmium — AI EdTech Platform</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Core Values & Focus */}
            <ScrollReveal delay={200}>
              <div className="p-7 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" /> Core Values & Focus
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Design Principles</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Student-centric design thinking</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Accessibility for all economic backgrounds</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Meaningful, impactful user experiences</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>AI technology made approachable and human</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Personal Values</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Courage to begin without having it all figured out</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Embracing failures as part of the path</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Uplifting the nation through technology</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Family as the foundation of every step forward</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Mission</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Empowering the next generation with AI-driven solutions</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Bridging the gap between AI and underserved students</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Serving humanity through thoughtful design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>

        {/* Back Link */}
        <ScrollReveal>
          <div className="mt-12 pt-6 border-t border-dotted border-black/20">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-black/50 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Company Profile
            </Link>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
}
