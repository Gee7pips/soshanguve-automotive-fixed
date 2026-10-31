import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Admissions & Enquiries",
  description: "Admissions information and school enquiry options for Soshanguve Engineering School Of Specialisation in Soshanguve, Pretoria. Official Grade 8 placement and application processes are managed by the Gauteng Department of Education.",
  keywords: ["Soshanguve Engineering School applications", "Soshanguve school admissions", "School of Specialisation admissions Gauteng", "engineering school application Pretoria", "technical high school admissions"],
  alternates: { canonical: "https://www.sosha-automotive.org/apply" },
  openGraph: { title: "Admissions & Enquiries | Soshanguve Engineering School", description: "Admissions information and school enquiry options for Soshanguve Engineering School Of Specialisation.", url: "https://www.sosha-automotive.org/apply", type: "website" },
}

export default function ApplyLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Apply & Admissions | Soshanguve Engineering School Of Specialisation" description={metadata.description as string} path="/apply" breadcrumbs={[{ name: "Home", path: "" }, { name: "Admissions & Enquiries", path: "/apply" }]} />{children}</>
}
