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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[10000] w-full">
      <div 
        className="relative mx-auto w-full transition-all duration-500 ease-out" 
        style={{ maxWidth: scrolled ? "1200px" : "1400px" }}
      >
        <div 
          className="transition-all duration-500 ease-out" 
          style={{ padding: scrolled ? "0.875rem 1.25rem 0" : "0.625rem 0.75rem 0px" }}
        >
          <div 
            className="overflow-hidden transition-all duration-500 ease-out" 
            style={{ 
              borderRadius: open ? "24px" : "34px", 
              backgroundColor: scrolled ? "rgba(255, 255, 255, 0.75)" : "rgba(255, 255, 255, 0.55)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "rgba(220, 220, 220, 0.4)",
              backdropFilter: "blur(24px) saturate(1.3) brightness(1.04)",
              boxShadow: "rgba(0, 0, 0, 0.02) 0px 2px 24px, rgba(0, 0, 0, 0.04) 0px 1px 3px inset"
            }}
          >
            {/* Desktop Nav */}
            <nav className="hidden md:flex justify-between items-center py-2.5 pr-2.5 pl-9 w-full">
              <div className="flex flex-1 justify-between items-center mx-auto">
                <Link className="flex flex-1 items-center gap-2 transition-opacity hover:opacity-80" href="/">
                  <span className="font-bold text-[13px] uppercase tracking-[1.5px] text-black">NAVCHETNA</span>
                </Link>
                
                <div className="hidden md:flex flex-2 justify-center items-center gap-1">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.href}
                      className="flex items-center gap-1.5 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-black/5" 
                      href={link.href}
                    >
                      <span className="font-medium text-[11px] uppercase tracking-[1px] text-black/70 hover:text-black transition-colors">{link.label}</span>
                    </Link>
                  ))}
                </div>

                <div className="hidden md:flex flex-1 justify-end items-center gap-3">
                  <Link 
                    className="group relative inline-flex items-center justify-center rounded-full px-5 py-2.5 text-[13px] font-medium bg-[#131313] text-white overflow-hidden transition-all duration-500 active:scale-95 whitespace-nowrap" 
                    style={{ boxShadow: "inset 0 0 12px rgba(255,255,255,0.2), 0px 0px 2px 0 rgba(0,0,0,0.1)" }}
                    href="/contact"
                  >
                    <span className="z-10 relative">Get Started</span>
                  </Link>
                </div>
              </div>
            </nav>

            {/* Mobile Nav */}
            <div className="md:hidden flex flex-col">
              <div className="flex justify-between items-center px-6 py-3">
                <Link className="relative flex items-center gap-2" href="/">
                  <span className="font-bold text-[11px] uppercase tracking-[1px] text-black">NAVCHETNA</span>
                </Link>
                <button 
                  className="flex flex-col justify-center items-center space-y-[4px] focus:outline-none w-8 h-8" 
                  aria-label="Toggle menu"
                  onClick={() => setOpen(!open)}
                >
                  <span 
                    className="w-[18px] h-[1.2px] bg-black transition-all duration-300 ease-out origin-center"
                    style={{ transform: open ? "translateY(5.2px) rotate(45deg)" : "none" }}
                  ></span>
                  <span 
                    className="w-[18px] h-[1.2px] bg-black transition-all duration-300 ease-out"
                    style={{ opacity: open ? 0 : 1 }}
                  ></span>
                  <span 
                    className="w-[18px] h-[1.2px] bg-black transition-all duration-300 ease-out origin-center"
                    style={{ transform: open ? "translateY(-5.2px) rotate(-45deg)" : "none" }}
                  ></span>
                </button>
              </div>

              <div 
                className="overflow-hidden transition-all duration-500 ease-out" 
                style={{ maxHeight: open ? "500px" : "0px", opacity: open ? 1 : 0 }}
              >
                <div className="px-6 pb-8 pt-2">
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.href}
                        className="block py-3 px-3 text-[13px] uppercase tracking-[1px] font-medium text-black/70 rounded-lg hover:bg-black/[0.04] transition-colors" 
                        href={link.href}
                        onClick={() => setOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-black/[0.06] flex gap-3">
                    <Link 
                      className="flex-1 inline-flex items-center justify-center rounded-full bg-[#131313] text-white px-5 py-3 text-[13px] font-medium active:scale-95 transition-transform" 
                      href="/contact"
                      onClick={() => setOpen(false)}
                    >
                      Get Started
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
