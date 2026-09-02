import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Contact the School",
  description: "Contact Soshanguve Engineering School Of Specialisation in Soshanguve, Pretoria for admissions, programs, partnerships, support and general enquiries.",
  keywords: ["contact Soshanguve Engineering School", "Soshanguve school contact", "engineering school Pretoria contact", "Soshanguve admissions contact"],
  alternates: { canonical: "https://sosha-automotive.org/contact" },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Contact the School | Soshanguve Engineering School Of Specialisation" description={metadata.description as string} path="/contact" breadcrumbs={[{ name: "Home", path: "" }, { name: "Contact", path: "/contact" }]} />{children}</>
}
