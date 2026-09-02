import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Academics & Technical Education",
  description: "Explore academic and technical education at Soshanguve Engineering School Of Specialisation, including automotive, mechanical, civil, electrical, welding and practical project-based learning.",
  keywords: ["Soshanguve engineering academics", "automotive technology school", "technical subjects Soshanguve", "engineering school Pretoria", "STEM education Gauteng"],
  alternates: { canonical: "https://sosha-automotive.org/academics" },
  openGraph: { title: "Academics | Soshanguve Engineering School Of Specialisation", description: "Explore technical subjects, specialist programs and project-based learning.", url: "https://sosha-automotive.org/academics", type: "website" },
}
export default function AcademicsLayout({ children }: { children: React.ReactNode }) { return children }
