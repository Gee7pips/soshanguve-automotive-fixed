import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Apply & Admissions",
  description: "Find out how to enquire about admission to Soshanguve Engineering School Of Specialisation, a Gauteng School of Specialisation for learners interested in engineering and technical education.",
  keywords: ["Soshanguve Engineering School applications", "Soshanguve school admissions", "School of Specialisation admissions Gauteng", "engineering school application Pretoria", "technical high school admissions"],
  alternates: { canonical: "https://www.sosha-automotive.org/apply" },
  openGraph: { title: "Apply & Admissions | Soshanguve Engineering School", description: "Start an admissions enquiry for Soshanguve Engineering School Of Specialisation.", url: "https://www.sosha-automotive.org/apply", type: "website" },
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Apply & Admissions | Soshanguve Engineering School Of Specialisation" description={metadata.description as string} path="/apply" breadcrumbs={[{ name: "Home", path: "" }, { name: "Apply & Admissions", path: "/apply" }]} />{children}</>
}
