"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const importantProducts = [
  { name: "Osmium", tag: "EdTech Platform", bg: "/assets/osmium (1).png", href: "https://osmium.co.in" },
  { name: "Natraj", tag: "AR Anatomy", bg: "/assets/nataraj.png", href: "/products" },
  { name: "Aegis Auth", tag: "Identity Management", bg: "/assets/aegis1.png", href: "/products" },
  { name: "Kriya", tag: "Organizational AI", bg: "/assets/kriya1.png", href: "/products" },
];

export function Products() {
  return (
    <section className="relative overflow-hidden py-8 md:py-14">

      <div className="section-sep" />

      <div className="section-container">
        <div className="grid gap-12 lg:grid-cols-[minmax(260px,0.65fr)_minmax(0,1.35fr)]">
          {/* Left copy — sticky */}
          <ScrollReveal>
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.16em] text-black/36">Products</p>
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
              </Link>
            </div>
          </ScrollReveal>

          {/* Right — open product list */}
          <div className="flex flex-col gap-10">
            {/* Cards for important ones */}
            <div className="grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-x-6 sm:grid-cols-2">
              {importantProducts.map((product, index) => (
                <ScrollReveal key={product.name} delay={index * 45}>
                  <Link
                    href={product.href}
                    className="group block"
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={product.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    <div className="relative mb-3 aspect-[16/11] w-full overflow-hidden rounded-sm bg-black/[0.02] border border-black/[0.08] transition-shadow duration-500">
                      <Image
                        src={product.bg}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        loading={index < 2 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        quality={84}
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-2 pt-1 gap-1 sm:gap-0">
                      <h3
                        style={{
                          fontFamily: "var(--font-waldenburg)",
                          fontSize: "clamp(0.85rem, 2.5vw, 1.05rem)",
                          fontWeight: 500,
                          letterSpacing: "-0.015em",
                          color: "var(--heading-color)",
                          lineHeight: 1.2
                        }}
                      >
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-[7.5px] sm:text-[9px] font-semibold uppercase tracking-[0.1em] sm:tracking-[0.16em] text-black/40">
                          {product.tag}
                        </span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
