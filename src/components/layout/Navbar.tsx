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
        className="mx-auto w-full transition-all duration-300 ease-in-out"
        style={{
          maxWidth: scrolled ? "1140px" : "100%",
          padding: scrolled ? "0.875rem 1.25rem 0" : "0",
        }}
      >
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{
            borderRadius: open ? (scrolled ? "24px" : "0px") : scrolled ? "9999px" : "0px",
            background: open
              ? "rgba(255,255,255,0.75)"
              : scrolled
                ? "rgba(250,250,250,0.90)"
                : white
                  ? "transparent"
                  : "rgba(250,250,250,0.88)",
            border: scrolled
              ? "1px solid rgba(0,0,0,0.07)"
              : white
                ? "0 solid transparent"
                : "0 solid transparent",
            borderBottom: open
              ? "1px solid rgba(0,0,0,0.08)"
              : scrolled
                ? undefined
                : white
                  ? "1px solid rgba(255,255,255,0.12)"
                  : "1px solid rgba(0,0,0,0.05)",
            backdropFilter: open ? "blur(32px) saturate(2)" : scrolled ? "blur(24px) saturate(1.8)" : white ? "none" : "blur(16px)",
            WebkitBackdropFilter: open ? "blur(32px) saturate(2)" : scrolled ? "blur(24px) saturate(1.8)" : white ? "none" : "blur(16px)",
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
            <div className="flex h-[58px] items-center justify-between px-5">
              <Link href="/" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-75">
                <span
                  className="whitespace-nowrap uppercase"
                  style={{
                    color: white ? "#ffffff" : "#0A0A0A",
                    fontFamily: "var(--font-body)",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                  }}
                >
                  NAVCHETNA TECHNOLOGIES
                </span>
              </Link>

              <button
                type="button"
                aria-label="Toggle navigation"
                aria-expanded={open}
                className="flex size-8 flex-col items-center justify-center gap-[5px] rounded-full"
                style={{ background: white ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.05)" }}
                onClick={() => setOpen((v) => !v)}
              >
                <span
                  className="h-[1.5px] w-4 transition-transform duration-300"
                  style={{ 
                    background: white ? "#ffffff" : "#0A0A0A",
                    transform: open ? "translateY(3.25px) rotate(45deg)" : "none"
                  }}
                />
                <span
                  className="h-[1.5px] w-4 transition-transform duration-300"
                  style={{ 
                    background: white ? "#ffffff" : "#0A0A0A",
                    transform: open ? "translateY(-3.25px) rotate(-45deg)" : "none"
                  }}
                />
              </button>
            </div>

            <div
              className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col gap-1 px-5 pb-8 pt-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-xl px-4 py-3 text-[14px] font-medium text-black/80 transition-colors hover:bg-black/[0.05] hover:text-black"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-4 flex h-11 items-center justify-center rounded-full bg-black text-[14px] font-medium text-white"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
