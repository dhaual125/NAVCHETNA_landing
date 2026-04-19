"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Priya Kumari",
    role: "Engineering Student, Jodhpur",
    quote:
      "Osmium helped me understand exactly where I was going wrong in calculus, not just what the right answer was. My mock test scores improved steadily over the course of a month. It genuinely felt like having a patient tutor who never gets tired.",
    avatar: "/assets/avatar-priya.jpg",
  },
  {
    name: "Dr. Mehul Shah",
    role: "Professor of Anatomy",
    quote:
      "We introduced Natraj in our practical sessions and the difference was immediate. Students could explore anatomical structures in 3D on their own devices instead of crowding around a single model. The engagement in class has never been higher.",
    avatar: "/assets/avatar-mehul.jpg",
  },
  {
    name: "Raghav Malhotra",
    role: "Co-founder, LoopStack",
    quote:
      "Setting up Aegis Auth took us less than a day. We went from patching together different auth providers to one clean, fast system. We have not had a single login-related support ticket since the switch.",
    avatar: "/assets/avatar-raghav.jpg",
  },
  {
    name: "Arjun Nair",
    role: "Director, Pixel & Thread Agency",
    quote:
      "Navchetna built our internal project tracker using Kriya. We explained our process in plain language and they shaped the tool around it exactly. It handles the complicated routing our old spreadsheets never could.",
    avatar: "/assets/avatar-arjun.jpg",
  },
  {
    name: "Sneha Desai",
    role: "Finance Head, Meridian Group",
    quote:
      "NSL removed the invoice disputes that had been a recurring headache for our accounts team. The automated ledger is transparent enough that clients rarely ask for clarifications anymore. It has made our month-end process noticeably calmer.",
    avatar: "/assets/avatar-sneha.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Operations Manager, Vantage Logistics",
    quote:
      "LM Lens reads our handwritten vendor invoices and logs the data faster and more accurately than manual entry ever was. It handled edge cases we were worried about without any special configuration from our side.",
    avatar: "/assets/avatar-vikram.jpg",
  },
];

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the track
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animId: number;
    let pos = 0;
    const speed = 0.6; // px per frame

    const step = () => {
      pos += speed;
      // Reset when the first clone set is fully scrolled past
      const half = track.scrollWidth / 2;
      if (pos >= half) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => cancelAnimationFrame(animId);
    const resume = () => { animId = requestAnimationFrame(step); };
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.parentElement?.addEventListener("touchstart", pause, { passive: true });
    track.parentElement?.addEventListener("touchend", resume, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  const cards = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <section className="relative overflow-hidden py-10 md:py-14 bg-white">
      <div className="section-sep" />

      {/* Section header — centred */}
      <div className="section-container text-center mb-10">
        <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Testimonials</p>
        <h2
          className="text-black"
          style={{
            fontFamily: "var(--font-waldenburg)",
            fontSize: "clamp(1.65rem, 4vw, 2.6rem)",
            fontWeight: 500,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          What our clients{" "}
          <span className="serif-italic">are saying</span>
        </h2>
        <p
          className="mt-3 mx-auto"
          style={{
            color: "rgba(0,0,0,0.46)",
            fontSize: "0.9rem",
            lineHeight: 1.65,
            maxWidth: "38ch",
          }}
        >
          Real teams. Genuine results. No marketing fluff.
        </p>
      </div>

      {/* Carousel wrapper with left/right fade masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        {/* Scrolling track — inline-flex so cards stay on one row */}
        <div
          ref={trackRef}
          className="flex gap-5 w-max"
          style={{ willChange: "transform" }}
        >
          {cards.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="flex flex-col justify-between rounded-2xl bg-white border border-black/[0.07] p-7 shrink-0"
              style={{
                width: "clamp(280px, 30vw, 380px)",
                minHeight: "220px",
              }}
            >
              {/* Quote */}
              <p
                className="text-black/70 leading-relaxed"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  lineHeight: 1.72,
                }}
              >
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-dotted border-black/[0.12]">
                <div className="relative h-10 w-10 shrink-0 rounded-full overflow-hidden bg-black/[0.04] border border-black/[0.07]">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="40px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-waldenburg)",
                      fontSize: "0.93rem",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                      color: "#0A0A0A",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.73rem",
                      color: "rgba(0,0,0,0.44)",
                      marginTop: "1px",
                    }}
                  >
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
