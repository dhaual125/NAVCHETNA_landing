"use client";

import Link from "next/link";
import { Newspaper, Rocket, Building2 } from "lucide-react";

const categories = [
  { label: "All News",         icon: Newspaper,  href: "/news" },
  { label: "Product Launches", icon: Rocket,      href: "/news/product" },
  { label: "Company Updates",  icon: Building2,   href: "/news/company" },
];

const tags = ["AI", "Innovation", "Product", "EdTech", "Security", "Updates"];

interface NewsSidebarProps {
  activeHref: string;
}

export function NewsSidebar({ activeHref }: NewsSidebarProps) {
  return (
    <aside
      className="hidden lg:flex lg:flex-col w-64 shrink-0 fixed top-24 left-0 h-[calc(100vh-6rem)] border-r border-black/[0.06] z-10 bg-white"
    >
      <div className="py-8 pl-4 pr-6 space-y-10">

        {/* Categories */}
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-black/40 mb-4 px-3">
            Categories
          </p>
          <ul className="space-y-0.5">
            {categories.map((c) => {
              const active = c.href === activeHref;
              return (
                <li key={c.label}>
                  <Link
                    href={c.href}
                    className={`flex items-center gap-3 px-3 py-2 text-[13px] rounded-lg transition-colors ${
                      active
                        ? "bg-black/[0.04] text-black font-medium"
                        : "text-black/55 hover:text-black hover:bg-black/[0.02]"
                    }`}
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    <c.icon className="size-4 shrink-0 opacity-60" />
                    {c.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Tags */}
        <div>
          <p className="text-[10px] uppercase tracking-widest font-semibold text-black/40 mb-4 px-3">
            Tags
          </p>
          <div className="flex flex-wrap gap-1.5 px-3">
            {tags.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-black/50 rounded-md text-[11px] font-medium hover:bg-black/[0.03] hover:text-black cursor-pointer transition-colors border border-black/[0.07]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </aside>
  );
}

/* Mobile bar — horizontal scrollable pill row */
export function NewsMobileBar({ activeHref }: NewsSidebarProps) {
  return (
    <div className="lg:hidden flex overflow-x-auto gap-2 px-5 py-3 border-b border-black/[0.06] scrollbar-hide">
      {categories.map((c) => {
        const active = c.href === activeHref;
        return (
          <Link
            key={c.label}
            href={c.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-[12px] border transition-colors ${
              active
                ? "bg-black/[0.04] text-black border-black/[0.08] font-medium"
                : "bg-transparent text-black/50 border-transparent hover:bg-black/[0.02]"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            <c.icon className="size-3.5 opacity-60" />
            {c.label}
          </Link>
        );
      })}
    </div>
  );
}
