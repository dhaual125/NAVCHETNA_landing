import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us — NAVCHETNA TECHNOLOGIES",
  description: "Learn about Navchetna Technologies — five friends who built a conscious tech company from Jodhpur and Ahmedabad, India.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
