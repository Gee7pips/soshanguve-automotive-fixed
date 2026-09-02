import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "School Documents & Resources",
  description: "Access school documents, resources and information for learners, parents, partners and prospective students of Soshanguve Engineering School Of Specialisation.",
  keywords: ["Soshanguve school documents", "Soshanguve Engineering School resources", "school forms Soshanguve", "technical school resources Pretoria"],
  alternates: { canonical: "https://sosha-automotive.org/documents" },
}
export default function DocumentsLayout({ children }: { children: React.ReactNode }) { return children }
