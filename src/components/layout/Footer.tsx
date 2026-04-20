import Link from "next/link";
import { Sparkles } from "lucide-react";

const productLinks = [
  { href: "/products", label: "All Products" },
  { href: "https://www.osmium.co.in/", label: "Osmium", external: true },
  { href: "https://natraj.navchetna.tech/", label: "Natraj", external: true },
  { href: "https://aegis.navchetna.tech/", label: "Aegis Auth", external: true },
  { href: "https://kriya.navchetna.tech/", label: "Kriya", external: true },
  { href: "/products", label: "LM Lens" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/career", label: "Careers" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services", label: "Product Development" },
  { href: "/services", label: "AI & Automation" },
  { href: "/services", label: "Design & Branding" },
  { href: "/services", label: "Strategy & Management" },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/Navchetna Technology/", label: "LinkedIn" },
  { href: "https://www.instagram.com/Navchetna Technology.tech/", label: "Instagram" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer id="global-footer" className="relative overflow-hidden bg-white">
      {/* Warm glow at the bottom edge */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[32rem] w-[140%] opacity-[0.85] mix-blend-multiply" style={{ background: "radial-gradient(ellipse at bottom, rgba(245, 190, 145, 0.35) 0%, rgba(185, 165, 230, 0.15) 35%, transparent 70%)" }} />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#fdece2]/30 to-transparent mix-blend-multiply" />

      <div className="relative z-10 mx-auto max-w-[80rem] px-5 sm:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-12 py-16 sm:grid-cols-5 md:py-20">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2">
            <span className="type-3xl text-black font-medium tracking-tight">Navchetna Technologies</span>
            <p className="mt-5 type-sm text-black/50 leading-relaxed max-w-[280px]">
              Based in India, For India,<br />
              By Students of India
            </p>

          </div>

          {/* Products */}
          <div>
            <p className="type-2xs font-semibold uppercase tracking-wider text-black/40 mb-5">Products</p>
            <ul className="space-y-3.5">
              {productLinks.map((l) => (
                <li key={l.label}>
                  {l.external ? (
                    <a href={l.href} target="_blank" rel="noopener noreferrer" className="type-sm text-black/60 transition-colors hover:text-black font-medium">{l.label}</a>
                  ) : (
                    <Link href={l.href} className="type-sm text-black/60 transition-colors hover:text-black font-medium">{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="type-2xs font-semibold uppercase tracking-wider text-black/40 mb-5">Services</p>
            <ul className="space-y-3.5">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="type-sm text-black/60 transition-colors hover:text-black font-medium">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="type-2xs font-semibold uppercase tracking-wider text-black/40 mb-5">Company</p>
            <ul className="space-y-3.5">
              {companyLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="type-sm text-black/60 transition-colors hover:text-black font-medium">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-black/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 py-8 type-xs text-black/40 font-medium">
          <span>© 2026 Navchetna Technologies. All rights reserved.</span>
          <div className="flex flex-wrap items-center gap-6">
            {socialLinks.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">{l.label}</a>
            ))}
            <span className="w-px h-3 bg-black/10"></span>
            {legalLinks.map((l) => (
              <Link key={l.label} href={l.href} className="hover:text-black transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
