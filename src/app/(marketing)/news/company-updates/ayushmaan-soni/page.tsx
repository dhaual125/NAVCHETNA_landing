"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Briefcase, GraduationCap, Lightbulb, MapPin, Calendar, Award } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function AyushmaanProfilePage() {
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
            <span className="text-black/80">Ayushmaan Soni</span>
          </div>
        </ScrollReveal>

        {/* Profile Header */}
        <ScrollReveal delay={50}>
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-10">
            <div className="relative w-40 h-40 md:w-56 md:h-56 shrink-0 rounded-2xl overflow-hidden shadow-lg border border-black/[0.08]">
              <Image 
                src="/assets/ayushmaan.jpg" 
                alt="Ayushmaan Soni"
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
                Ayushmaan Soni
              </h1>
              <p className="text-[15px] font-medium tracking-wide text-black/60 uppercase mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>
                CEO | CTO | Founder <span className="text-black/30 mx-2">•</span> Navchetna Technologies
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Lightbulb className="w-3.5 h-3.5 text-black/50" />
                  Mathematical Researcher
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-black/10 bg-black/[0.02] text-[11px] font-semibold tracking-wider text-black/70">
                  <Briefcase className="w-3.5 h-3.5 text-black/50" />
                  Tech Entrepreneur
                </span>
              </div>

              <div className="flex flex-col gap-2 text-[13px] text-black/50" style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-black/40" />
                  Born February 14, 2005
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black/40" />
                  Jodhpur, Rajasthan, India
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
              From a curious child dismantling toys to JEE Mains Jodhpur topper (99.91%) and mathematical researcher — the extraordinary journey of a visionary tech entrepreneur revolutionizing AI education.
            </p>
          </div>
        </ScrollReveal>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 lg:gap-20">
          
          {/* Left Column: Biography */}
          <div className="space-y-8 text-black/85" style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", lineHeight: 1.7 }}>
            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>The Journey Begins</h2>
                <p className="mb-4">
                  I was born on February 14, 2005, in Jodhpur, Rajasthan, into a middle class family. Life was not always smooth. My family went through financial and personal struggles, and those challenges shaped me into who I am today. Instead of breaking me, they became the reason I developed a relentless determination to grow and succeed.
                </p>
                <p>
                  From a young age I was endlessly curious about technology. I would dismantle toys, explore electronic components, and play with circuits and motors. In Class 7, I discovered Arduino, and that single moment became a turning point. I began programming.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Academic Transformation</h2>
                <p className="mb-4">
                  I completed my schooling at Kendriya Vidyalaya Number 1 AFS Jodhpur until Class 11. Until Class 7, academics were not my strength. Everything changed when I met my mentor, Mr. Santosh Singh. His tuition classes gave me not only knowledge but also a new outlook on learning. That shift transformed me completely.
                </p>
                <p>
                  During the pandemic, what could have been a setback turned into an opportunity for me. I spent those hours diving deep into programming. I earned Google's Associate Android Developer certification, a milestone that gave me both confidence and clarity about what I wanted to do with my life.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>JEE Success & Legal Battle</h2>
                <p className="mb-4">
                  My first JEE attempt earned me 99.16 percentile in JEE Mains and 207 marks in JEE Advanced, though I missed qualifying in physics. I refused to stop there. I took a drop year and worked harder. In my second attempt, I became Jodhpur's topper in JEE Mains with 99.91 percentile.
                </p>
                <p>
                  My JEE Advanced attempt, however, faced a legal controversy which is still documented online as "Ayushmaan Soni versus Union of India."
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Entrepreneurial Journey</h2>
                <p className="mb-4">
                  At the age of 17, while still in Class 12, I began working as a software developer at Secure E Techno World Private Limited in Jodhpur. After a year, I left my job to dedicate myself fully to my entrepreneurial journey.
                </p>
                <p className="mb-4">
                  I started as a freelancer, going door to door to pitch development services. Those days were difficult. I failed more times than I can count, but I refused to quit. Soon, I connected with startups in the United States, and that shift opened doors for me.
                </p>
                <p>
                  That success led to the founding of my first company, NINEONE15SQ Technologies Private Limited. What started with small projects grew into a company generating revenue in crores.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Birth of Osmium AI & Navchetna</h2>
                <p className="mb-4">
                  To keep exploring bigger ideas, I intentionally joined a private university. There, I met some of my closest collaborators, Varun, Swastik, Suman, and Dhraval. Together we participated in a hackathon where the idea of Osmium AI was born.
                </p>
                <p className="mb-4">
                  From the very first day, we promised ourselves that Osmium AI would not be just another hackathon project. We treated it like an industry level platform. We kept upgrading it with advanced features and even trained our own large language model.
                </p>
                <p>
                  To take this vision forward, I founded NINELLMS Solutions Limited Liability Partnership, also known as Navchetna. Today, our team is building Osmium AI into a product that can make a real difference for learners across the world.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Mathematical Research & Innovation</h2>
                <p className="mb-4">
                  Outside of technology, mathematics is a part of me. I often say that mathematics is like a girlfriend to me. It is something I cannot live without. One day, while reading about the Riemann Hypothesis, a question came to me: Why cannot we define factorials for negative numbers?
                </p>
                <p className="mb-4">
                  That single question led me to develop my own mathematical theory, "The Theory of Factorial of Complex Numbers." I remember a wedding function where I sat alone with a pen and tissue papers of excellent quality. Out of habit, I began writing, and that is where I developed the first proper version of my theory.
                </p>
                <p>
                  My research kept expanding. I created the concept of three dimensional Argand Space, found connections between factorials, geometry, and complex numbers, and even submitted my research to the Mathematical Gazette, where it is currently under review.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div>
                <h2 className="text-xl text-black mb-10" style={{ fontFamily: "var(--font-waldenburg)", letterSpacing: "-0.02em" }}>Philosophy & Vision</h2>
                <p className="mb-4">
                  Today, I continue to learn, to create, and to innovate. My journey from a curious child dismantling toys to becoming the founder of multiple companies and contributing to mathematics has been full of challenges. But every obstacle has been a lesson, every failure a stepping stone.
                </p>
                <p className="mb-4">
                  My goal is not only to work with existing technologies but to build something new, something that expands the possibilities of both software and mathematics. I believe that true growth comes when curiosity meets persistence.
                </p>
                <p>
                  My story is not just about success. It is about never giving up, no matter how many times life tests you.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-6">
            {/* Leadership */}
            <ScrollReveal delay={150}>
              <div className="p-6 rounded-xl bg-black/[0.02] border border-black/[0.06]">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" /> Leadership Positions
                </h3>
                <ul className="space-y-4">
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">CEO, Founder & CTO</span>
                    <span className="text-[11px] text-black/50 mt-0.5">NINELLMS SOLUTIONS LLP</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">CEO & Founder</span>
                    <span className="text-[11px] text-black/50 mt-0.5">NINEONE15SQ TECHNOLOGIES PVT LTD</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">Director</span>
                    <span className="text-[11px] text-black/50 mt-0.5">COSMONEXTECH SOLUTIONS PVT LTD</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-[12.5px] font-semibold text-black/80">CTO</span>
                    <span className="text-[11px] text-black/50 mt-0.5">TANTRIX SOLUTIONS OPC PVT LTD</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>

            {/* Quick Stats */}
            <ScrollReveal delay={200}>
              <div className="p-7 rounded-xl bg-white border border-black/[0.06] shadow-sm">
                <h3 className="text-[11px] font-bold uppercase tracking-widest text-black/40 mb-6 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" /> Key Achievements
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Academic & Research</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>JEE Mains Jodhpur Topper - 99.91%</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Google Associate Android Developer certified</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Mathematical research under review at Mathematical Gazette</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Theory of Factorial of Complex Numbers</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[11px] font-semibold text-black/70 mb-3 border-b border-black/5 pb-2">Business & Innovation</h4>
                    <ul className="space-y-2.5 text-[12px] text-black/60 leading-relaxed">
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Founded multiple companies generating crores in revenue</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Created Osmium AI - revolutionary AI education platform</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Legal case: Ayushmaan Soni vs Union of India</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="mt-1.5 w-1.25 h-1.25 rounded-full bg-black/20 shrink-0" />
                        <span>Trained custom large language models</span>
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
