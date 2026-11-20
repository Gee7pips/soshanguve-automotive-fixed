import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Achievements & Innovation",
  description: "See the achievements, awards and student innovations of Soshanguve Engineering School Of Specialisation, including electric mobility, renewable energy and engineering projects.",
  keywords: ["Soshanguve Engineering achievements", "Soshanguve engineering awards", "student engineering projects South Africa", "solar train Soshanguve", "electric car school project"],
  alternates: { canonical: "https://www.sosha-automotive.org/achievements" },
  openGraph: { title: "Achievements & Innovation | Soshanguve Engineering School", description: "Explore award-winning student projects and engineering achievements.", url: "https://www.sosha-automotive.org/achievements", type: "website" },
}

export default function AchievementsLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Achievements & Innovation" description="Achievements, awards and student engineering innovations at Soshanguve Engineering School Of Specialisation." path="/achievements" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Achievements", path: "/achievements" }]} />{children}</>
}
