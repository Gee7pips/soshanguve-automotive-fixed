import type React from "react"
import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Support Engineering Education",
  description: "Support Soshanguve Engineering School Of Specialisation through funding, resources, mentorship or partnerships that expand opportunities for young engineers in Gauteng.",
  keywords: ["support Soshanguve Engineering School", "school sponsorship Gauteng", "engineering education sponsorship South Africa", "STEM school support", "technical education funding"],
  alternates: { canonical: "https://sosha-automotive.org/support-us" },
  openGraph: { title: "Support Engineering Education | Soshanguve Engineering School", description: "Support learners through funding, resources, mentorship or partnership.", url: "https://sosha-automotive.org/support-us", type: "website" },
}

export default function SupportUsLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Support Engineering Education" description="Support engineering education through funding, resources, mentorship or partnerships." path="/support-us" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Support Us", path: "/support-us" }]} />{children}</>
}
