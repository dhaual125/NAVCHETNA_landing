import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products — NAVCHETNA TECHNOLOGIES",
  description: "Explore Navchetna Technologies' AI-powered products: Osmium AI, Natraj, Aegis Auth, Kriya, LM Lens, and NSL.",
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
