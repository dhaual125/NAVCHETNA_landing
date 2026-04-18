"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/career", label: "Career" },
  { href: "/news", label: "News" },
];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 right-0 left-0 z-[10000] w-full">
      {/* Top fade — only visible when scrolled */}
      <div
        className="absolute top-0 right-0 left-0 h-8 lg:h-10 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: scrolled ? 1 : 0,
          background: "linear-gradient(var(--page-bg) 40%, transparent)",
          maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div
        className="relative mx-auto w-full transition-all duration-500 ease-out"
        style={{
          maxWidth: scrolled ? "1400px" : "100%",
        }}
      >
        <div
          className="transition-all duration-500 ease-out"
          style={{
            padding: scrolled ? "0.625rem 0.75rem 0 0.75rem" : "0",
          }}
        >
          <div
            className="overflow-hidden transition-all duration-500 ease-out"
            style={{
              borderRadius: scrolled ? "34px" : "0px",
              backgroundColor: "var(--nav-bg)",
              border: scrolled ? "1px solid var(--nav-border)" : "none",
              borderBottom: scrolled ? undefined : "1px solid var(--nav-border)",
              backdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
              WebkitBackdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
              boxShadow: scrolled
                ? "rgba(0, 0, 0, 0.02) 0px 2px 24px, rgba(0, 0, 0, 0.04) 0px 1px 3px inset"
                : "rgba(0, 0, 0, 0.04) 0px 1px 2px",
            }}
          >
            {/* Desktop */}
            <nav className="hidden lg:flex justify-between items-center py-2.5 pr-2.5 pl-9 w-full">
              <div className="flex flex-1 justify-between items-center mx-auto">
                <Link href="/" className="flex flex-1 items-center gap-2 transition-opacity hover:opacity-80">
                  <span className="type-3xl font-medium tracking-tight" style={{ color: "var(--heading-color)" }}>NAVCHETNA TECHNOLOGY</span>
                </Link>

                <div className="hidden lg:flex flex-2 justify-center items-center gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200"
                      style={{ color: "var(--page-text)" }}
                    >
                      <span className="font-medium text-xs uppercase tracking-[1px]">
                        {link.label}
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="hidden md:flex flex-1 justify-end items-center gap-3">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium overflow-hidden transition-all duration-300 active:scale-95 whitespace-nowrap bg-black text-white hover:bg-black/80"
                  >
                    <span className="z-10 relative">Contact Us</span>
                  </Link>
                </div>
              </div>
            </nav>

            {/* Mobile */}
            <div className="lg:hidden flex flex-col">
              <div className="flex justify-between items-center px-6 py-2.5">
                <Link href="/" className="relative flex items-center gap-2">
                  <span className="type-3xl font-medium tracking-tight text-sm" style={{ color: "var(--heading-color)" }}>NAVCHETNA TECHNOLOGY</span>
                </Link>
                <div className="flex items-center gap-3">
                  <button
                    className="flex flex-col justify-center items-center space-y-[3px] focus:outline-none w-7 h-7"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                  >
                    <span className={`w-[18px] h-[1.5px] transition-all duration-300 ease-out origin-center ${open ? "rotate-45 translate-y-[4.5px]" : ""}`} style={{ backgroundColor: "var(--page-text)" }} />
                    <span className={`w-[18px] h-[1.5px] transition-all duration-300 ease-out ${open ? "opacity-0" : ""}`} style={{ backgroundColor: "var(--page-text)" }} />
                    <span className={`w-[18px] h-[1.5px] transition-all duration-300 ease-out origin-center ${open ? "-rotate-45 -translate-y-[4.5px]" : ""}`} style={{ backgroundColor: "var(--page-text)" }} />
                  </button>
                </div>
              </div>

              <div
                className="overflow-hidden transition-all duration-300 ease-out"
                style={{ maxHeight: open ? "400px" : "0px" }}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 px-3 text-xs uppercase tracking-[1px] font-medium rounded-lg transition-colors"
                        style={{ color: "var(--page-text)" }}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 flex gap-2" style={{ borderTop: "1px solid var(--card-border)" }}>
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex-1 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium active:scale-95 transition-all bg-black text-white"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
