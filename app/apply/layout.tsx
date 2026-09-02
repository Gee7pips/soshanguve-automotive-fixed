import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Apply & Admissions",
  description: "Find out how to enquire about admission to Soshanguve Engineering School Of Specialisation, a Gauteng School of Specialisation for learners interested in engineering and technical education.",
  keywords: ["Soshanguve Engineering School applications", "Soshanguve school admissions", "School of Specialisation admissions Gauteng", "engineering school application Pretoria", "technical high school admissions"],
  alternates: { canonical: "https://sosha-automotive.org/apply" },
  openGraph: { title: "Apply & Admissions | Soshanguve Engineering School", description: "Start an admissions enquiry for Soshanguve Engineering School Of Specialisation.", url: "https://sosha-automotive.org/apply", type: "website" },
}
export default function ApplyLayout({ children }: { children: React.ReactNode }) { return children }
