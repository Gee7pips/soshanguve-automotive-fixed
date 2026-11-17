import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "School Documents & Resources",
  description: "Access school documents, resources and information for learners, parents, partners and prospective students of Soshanguve Engineering School Of Specialisation.",
  keywords: ["Soshanguve school documents", "Soshanguve Engineering School resources", "school forms Soshanguve", "technical school resources Pretoria"],
  alternates: { canonical: "https://www.sosha-automotive.org/documents" },
}

export default function DocumentsLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="School Documents & Resources" description="School documents, resources and information for learners, parents, partners and prospective students." path="/documents" breadcrumbs={[{ name: "Home", path: "/" }, { name: "Documents", path: "/documents" }]} />{children}</>
}
