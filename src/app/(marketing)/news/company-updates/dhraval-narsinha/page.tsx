"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, Lightbulb, MapPin, Calendar, Award, GraduationCap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function DhravalProfilePage() {
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
            <span className="text-black/80">Dhraval Narsinha</span>
          </div>
        </ScrollReveal>

        {/* Profile Header */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/[0.08]">
              <Image
                src="/assets/dhraval.jpg"
                alt="Dhraval Narsinha"
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
                Dhraval Narsinha
              </h1>
              <p className="text-[15px] font-medium tracking-wide text-black/60 uppercase mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                Co-Founder & Frontend Developer <span className="text-black/30 mx-2">•</span> Navchetna Technologies
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Lightbulb className="w-3.5 h-3.5 text-black/50" />
                  Co-Founder
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <GraduationCap className="w-3.5 h-3.5 text-black/50" />
                  Frontend Dev
                </span>
              </div>

              <div className="flex flex-col gap-2 text-[13px] text-black/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-black/40" />
                  Born January 1, 2006
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black/40" />
                  Diu, India
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
              From Diu to revolutionary AI EdTech — a journey of resilience, passion, and innovation. Co-Founder of Osmium AI, transforming education through technology despite every challenge.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20">

          {/* Left Column: Biography */}
          <div className="space-y-8 text-black/85" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", lineHeight: 1.7 }}>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Early Life & Challenges</h2>
                <p className="mb-4">
                  I am Dhraval Narsinha, born on January 1, 2006, in Diu, into a middle class family. Life was not always easy as my family faced financial struggles, but those challenges only strengthened my determination to grow and succeed.
                </p>
                <p>
                  My education began at Tulip English Medium School, where I studied from Lower KG to 5th standard. After that, I continued my studies at Jawahar Navodaya Vidyalaya in Diu, where I completed my 10th standard. However, my academic performance did not allow me to continue in the science stream.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Overcoming Setbacks</h2>
                <p className="mb-4">
                  It was a setback, and I had to leave Navodaya. I then enrolled at Government Higher Secondary School in Diu, where I completed my 11th and 12th standards and graduated with the Class of 2024.
                </p>
                <p>
                  Despite these challenges, my interest in technology never faded. Driven by that passion, I pursued higher education at University in Ahmedabad.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>The Birth of Osmium AI</h2>
                <p className="mb-4">
                  It was at University that I met some of my closest friends — Ayushmaan, Swastik, Varun, and Suman. Together, we participated in a hackathon that became the birthplace of Osmium AI, an AI-driven EdTech platform.
                </p>
                <p>
                  From the very beginning, we decided Osmium AI would not remain just another hackathon project. We committed ourselves to building it at an industry level.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Building the Future</h2>
                <p className="mb-4">
                  We kept refining it, adding advanced AI features, and even creating our own large language model. Every step was filled with challenges. We faced setbacks, technical difficulties, and moments of doubt. Yet, we never gave up.
                </p>
                <p>
                  Our persistence turned Osmium AI into a revolutionary platform with the potential to transform education itself. To carry this vision forward, we founded NineLLMS Solutions Limited Liability Partnership, also known as Navchetna. Today, our team is actively working on Osmium AI, determined to create an impact that reaches learners everywhere.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Team & Collaboration</h2>
                <p className="mb-4">
                  The strength of our team lies in our shared vision and complementary skills. Working alongside Ayushmaan, Swastik, Varun, and Suman has been an incredible journey of learning, innovation, and mutual growth.
                </p>
                <p>
                  Together, we have transformed a hackathon idea into a revolutionary platform that has the potential to impact millions of learners worldwide. Our commitment to excellence and innovation drives us forward every day.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Philosophy & Commitment</h2>
                <p className="mb-4">
                  Even now, I remain deeply committed to learning and developing new technologies. My journey from a curious child building models to becoming a driving force behind an innovative EdTech platform is proof that passion and persistence can shape dreams into reality.
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
                  Passion and persistence can shape dreams into reality. Every challenge is an opportunity to grow stronger and build something meaningful.
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
                    <span className="text-[12.5px] font-semibold text-black/80">Co-Founder & Frontend Developer</span>
                    <span className="text-[11px] text-black/50 mt-0.5">NINELLMS SOLUTIONS LLP (Navchetna)</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">Co-Creator</span>
                    <span className="text-[11px] text-black/50 mt-0.5">Osmium AI — AI EdTech Platform</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Key Achievements */}
            <ScrollReveal delay={200}>
              <div className="p-7 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" /> Key Achievements
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Educational Journey</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Tulip English Medium School, Diu (LKG–5th)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Jawahar Navodaya Vidyalaya, Diu (10th)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Government Higher Secondary School, Diu (11th–12th)</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>University, Ahmedabad (Current)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Innovation & Impact</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Co-Founder of Navchetna Technologies</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Co-creator of Osmium AI EdTech Platform</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Contributed to building Navchetna's custom LLM</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-black/20 shrink-0" />
                        <span>Hackathon winner and innovator</span>
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
