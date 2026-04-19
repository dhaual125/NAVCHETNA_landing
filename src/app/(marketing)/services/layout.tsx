import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services — NAVCHETNA TECHNOLOGIES",
  description: "Intelligent services for every challenge: product development, AI & ML, cloud infrastructure, design, and more.",
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
