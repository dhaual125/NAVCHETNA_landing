"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isHome = pathname === "/";
  const white = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] w-full">
      <div
        className="mx-auto w-full"
        style={{
          maxWidth: scrolled ? "1140px" : "100%",
          padding: scrolled ? "0.875rem 1.25rem 0" : "0",
        }}
      >
        <div
          className="overflow-hidden"
          style={{
            borderRadius: open ? "24px" : scrolled ? "9999px" : "0px",
            background: scrolled
              ? "rgba(250,250,250,0.90)"
              : white
                ? "transparent"
                : "rgba(250,250,250,0.88)",
            border: scrolled
              ? "1px solid rgba(0,0,0,0.07)"
              : white
                ? "0 solid transparent"
                : "0 solid transparent",
            borderBottom: scrolled
              ? undefined
              : white
                ? "1px solid rgba(255,255,255,0.12)"
                : "1px solid rgba(0,0,0,0.05)",
            backdropFilter: scrolled ? "blur(24px) saturate(1.8)" : white ? "none" : "blur(16px)",
            WebkitBackdropFilter: scrolled ? "blur(24px) saturate(1.8)" : white ? "none" : "blur(16px)",
            boxShadow: scrolled ? "0 8px 32px -16px rgba(0,0,0,0.18)" : "none",
          }}
        >
          {/* Desktop */}
          <nav className="hidden h-[64px] grid-cols-[1fr_auto_1fr] items-center px-7 lg:grid">
            <Link href="/" className="w-max transition-opacity hover:opacity-75">
              <span
                className="whitespace-nowrap uppercase transition-colors"
                style={{
                  color: white ? "#ffffff" : "#0A0A0A",
                  fontFamily: "var(--font-body)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.09em",
                }}
              >
                NAVCHETNA{" "}
                <span
                  style={{
                    color: white ? "rgba(255,255,255,0.55)" : "rgba(0,0,0,0.38)",
                    fontWeight: 600,
                  }}
                >
                  TECHNOLOGIES
                </span>
              </span>
            </Link>

            <div className="flex items-center justify-center gap-0.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full px-3.5 py-2 transition-all duration-200 hover:bg-black/[0.04]"
                    style={{
                      background: active && scrolled ? "rgba(0,0,0,0.04)" : "transparent",
                      color: white
                        ? active
                          ? "#ffffff"
                          : "rgba(255,255,255,0.72)"
                        : active
                          ? "#0A0A0A"
                          : "rgba(0,0,0,0.52)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: active ? 500 : 400,
                        letterSpacing: "0",
                      }}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center justify-end gap-2">
              <Link
                href="/contact"
                className="inline-flex h-9 items-center justify-center rounded-full px-4.5 text-[13px] font-medium transition-all duration-200 active:scale-95"
                style={{
                  background: white ? "rgba(255,255,255,0.12)" : "#0A0A0A",
                  color: "#ffffff",
                  border: white ? "1px solid rgba(255,255,255,0.20)" : "1px solid #0A0A0A",
                  padding: "0 18px",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                }}
              >
                Get Started
              </Link>
            </div>
          </nav>

          {/* Mobile */}
          <div className="lg:hidden">
            <div className="flex h-[64px] items-center justify-between px-6">
              <Link href="/" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-75">
                <span
                  className="whitespace-nowrap uppercase"
                  style={{
                    color: white ? "#ffffff" : "#0A0A0A",
                    fontFamily: "var(--font-body)",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                  }}
                >
                  NAVCHETNA
                </span>
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={open}
                className="flex size-10 items-center justify-center rounded-full"
                onClick={() => setOpen((v) => !v)}
              >
                <div className="relative flex h-5 w-5 items-center justify-center">
                  <span
                    className="absolute h-[1.5px] w-5 transition-transform duration-300"
                    style={{ background: white ? "#ffffff" : "#0A0A0A", transform: open ? "rotate(45deg)" : "translateY(-3px)" }}
                  />
                  <span
                    className="absolute h-[1.5px] w-5 transition-transform duration-300"
                    style={{ background: white ? "#ffffff" : "#0A0A0A", transform: open ? "rotate(-45deg)" : "translateY(3px)" }}
                  />
                </div>
              </button>
            </div>

            {/* Fullscreen-ish Menu Overlay */}
            <div
              className="fixed inset-x-0 top-[64px] z-[9999] overflow-hidden bg-[#fdfbf7] transition-all duration-300 ease-in-out"
              style={{ 
                height: open ? "calc(100vh - 64px)" : "0px",
                opacity: open ? 1 : 0,
                pointerEvents: open ? "auto" : "none"
              }}
            >
              <div className="flex h-full flex-col px-8 pt-10 pb-12">
                <nav className="flex flex-col gap-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="text-[22px] font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-60"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-auto">
                  <div className="mb-8 h-px w-full bg-black/[0.06]" />
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex h-14 items-center justify-center rounded-full bg-black text-[15px] font-bold text-white shadow-lg shadow-black/5 active:scale-[0.98] transition-transform"
                    >
                      Get Started
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className="flex h-14 items-center justify-center rounded-full border border-black/10 bg-white text-[15px] font-bold text-black active:scale-[0.98] transition-transform"
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
