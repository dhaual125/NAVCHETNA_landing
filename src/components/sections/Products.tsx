"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const products = [
  { name: "Osmium", tag: "Deep Learning", bg: "/assets/osmium (1).png", href: "https://osmium.co.in" },
  { name: "Natraj", tag: "AI + AR", bg: "/assets/nataraj.png", href: "/products" },
  { name: "Aegis Auth", tag: "Agentic AI", bg: "/assets/aegis1.png", href: "/products" },
  { name: "Kriya", tag: "Organizational AI", bg: "/assets/kriya1.png", href: "/products" },
  { name: "LM Lens", tag: "Text Extractor", bg: "/assets/lmlens.png", href: "/products" },
  { name: "NSL", tag: "Smart Ledger", bg: "/assets/nsl.png", href: "/products" },
];

export function Products() {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <div className="grid-overlay opacity-30" />
      <div className="section-sep" />

      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.65fr)_minmax(0,1.35fr)]">
          {/* Left copy — sticky */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <span className="chip mb-4">Products</span>
              <h2 className="section-heading max-w-sm">
                Powered by
                {" "}
                <span className="serif-italic">conscious intelligence.</span>
              </h2>

              <div className="mb-6 flex flex-wrap gap-2">
                {["Intelligence Redefined", "Fluid Collaboration", "Endless Possibilities"].map((step) => (
                  <span
                    key={step}
                    className="text-[11px] font-medium text-black/54 uppercase tracking-widest"
                  >
                    {step} {step !== "Endless Possibilities" && "·"}
                  </span>
                ))}
              </div>

              {/* Dotted divider */}
              <div className="section-divider mb-6" />

              <p style={{ color: "rgba(0,0,0,0.48)", lineHeight: 1.65, fontSize: "0.88rem" }} className="mb-6">
                Discover how conscious intelligence and advanced technology unlock growth,
                creativity, and transformation across every dimension of life.
              </p>

              <Link href="/products" className="btn btn-secondary w-max">
                Explore all products
                <ArrowRight weight="bold" className="size-3.5" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — open product list */}
          <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {products.map((product, index) => (
              <ScrollReveal key={product.name} delay={index * 45}>
                <Link
                  href={product.href}
                  className="group block"
                  target={product.href.startsWith("http") ? "_blank" : undefined}
                  rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <div className="relative mb-3 overflow-hidden rounded-sm bg-black/[0.02] border border-black/[0.08] transition-shadow duration-500 group-hover:shadow-sm">
                    <Image
                      src={product.bg}
                      alt={product.name}
                      width={320}
                      height={220}
                      loading={index < 3 ? "eager" : "lazy"}
                      className="h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      quality={84}
                      style={{ maxHeight: "140px" }}
                    />
                  </div>

                  <div className="flex items-center justify-between border-b border-dotted border-black/[0.25] pb-2">
                    <h3
                      style={{
                        fontFamily: "var(--font-waldenburg)",
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        letterSpacing: "-0.015em",
                        color: "var(--heading-color)"
                      }}
                    >
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-black/40">
                        {product.tag}
                      </span>
                      <ArrowUpRight
                        weight="bold"
                        className="w-3.5 h-3.5 text-black/30 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black/80"
                      />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
