"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, Lightbulb, MapPin, Heart, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function VarunProfilePage() {
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
            <span className="text-black/80">Varun Yadav</span>
          </div>
        </ScrollReveal>

        {/* Profile Header */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/[0.08]">
              <Image
                src="/assets/varun.jpg"
                alt="Varun Yadav"
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
                Varun Yadav
              </h1>
              <p className="text-[15px] font-medium tracking-wide text-black/60 uppercase mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Co-Founder & Director <span className="text-black/30 mx-2">•</span> Navchetna Technologies
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Lightbulb className="w-3.5 h-3.5 text-black/50" />
                  EdTech Innovator
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Heart className="w-3.5 h-3.5 text-black/50" />
                  Student-First Thinker
                </span>
              </div>

              <div className="flex flex-col gap-2 text-[13px] text-black/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black/40" />
                  Noida → Alwar, Rajasthan, India
                </div>
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
              From JEE struggles in Alwar to co-founding Navchetna — transforming educational setbacks into revolutionary AI solutions that ensure no student feels alone in their journey.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20">

          {/* Left Column: Biography */}
          <div className="space-y-8 text-black/85" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", lineHeight: 1.7 }}>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Early Challenges & Growth</h2>
                <p className="mb-4">
                  I am Varun Yadav, Co-Founder and Director at Navchetna. My early years of schooling were in Noida until Class 10, after which I moved to Alwar, Rajasthan, to prepare for JEE. Living away from my parents at such a young age with limited resources was not easy.
                </p>
                <p>
                  It was a difficult period, but it taught me resilience and gave me a deeper understanding of the challenges that students face every day. Not achieving my target in JEE was a turning point in my life. It felt like a setback at the time, but it eventually became the seed for something much larger.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>The Spark of Innovation</h2>
                <p className="mb-4">
                  In college, I met Ayushmaan, Swastik, Suman, and Dhraval. As we shared our stories, we realized that our struggles were not unique. Millions of students across the country were going through the same journey of stress, confusion, and lack of proper guidance.
                </p>
                <p>
                  That realization became the spark for Osmium AI, an AI-driven EdTech platform designed to make learning more personal, adaptive, and supportive.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>From Osmium AI to Navchetna</h2>
                <p className="mb-4">
                  What began as an idea at a hackathon soon grew into something much bigger. From Osmium AI emerged Navchetna, the company that now carries forward our mission to reshape education.
                </p>
                <p>
                  With Osmium AI and our new innovation, Natraj, we are building solutions that turn setbacks into stepping stones, giving students the tools and mentorship they need to succeed.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Philosophy & Vision</h2>
                <p className="mb-4">
                  My journey proves that you do not need to have everything figured out to begin. What matters most is the courage to take the first step and the persistence to keep moving forward. Every challenge along the way has been a lesson, and every failure has become an opportunity to grow.
                </p>
                <p>
                  Today, through Navchetna, I am committed to ensuring that no student feels alone in their journey and that every learner has the support to transform their dreams into reality.
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
                  You do not need to have everything figured out to begin. What matters most is the courage to take the first step and the persistence to keep moving forward.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Student-Centric Mission</h2>
                <p className="mb-4">
                  Our shared experiences of struggle, stress, and confusion during JEE preparation revealed a universal truth — millions of students face the same challenges we did. This realization drives our commitment to building solutions that address these fundamental issues.
                </p>
                <p>
                  Through Navchetna, we are not just building technology; we are creating a support system that ensures every student has the guidance, tools, and encouragement they need to succeed, regardless of their background or circumstances.
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
                    <span className="text-[12.5px] font-semibold text-black/80">Co-Founder & Director</span>
                    <span className="text-[11px] text-black/50 mt-0.5">NINELLMS SOLUTIONS LLP (Navchetna)</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Key Pillars */}
            <ScrollReveal delay={200}>
              <div className="p-7 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" /> Core Strengths
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Impact & Innovation</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Co-creator of Osmium AI — AI-driven EdTech platform</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Co-creator of Natraj — EdTech innovation for student success</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Personalized and adaptive AI-driven learning experiences</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Core Values</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Resilience — learning from challenges to build stronger foundations</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Empathy — understanding student struggles through personal experience</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Innovation — transforming challenges into creative AI-driven solutions</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Journey Milestones</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Schooling in Noida until Class 10</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>JEE preparation in Alwar, Rajasthan</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Co-founded Navchetna with 4 college friends</span>
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
