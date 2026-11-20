import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Industry Partnerships & Collaboration",
  description: "Learn how partners can support engineering education, technical skills, learner development and innovation at Soshanguve Engineering School Of Specialisation.",
  keywords: ["Soshanguve school partnerships", "engineering education partnerships Gauteng", "technical education sponsorship", "school industry partnership Pretoria", "STEM education partnership South Africa"],
  alternates: { canonical: "https://www.sosha-automotive.org/partnerships" },
}

export default function PartnershipsLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Industry Partnerships & Collaboration" description="Partnership opportunities supporting engineering education, technical skills, learner development and innovation." path="/partnerships" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Partnerships", path: "/partnerships" }]} />{children}</>
}
