import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Academics & Technical Education",
  description: "Explore academic and technical education at Soshanguve Engineering School Of Specialisation, including automotive, mechanical, civil, electrical, welding and practical project-based learning.",
  keywords: ["Soshanguve engineering academics", "automotive technology school", "technical subjects Soshanguve", "engineering school Pretoria", "STEM education Gauteng"],
  alternates: { canonical: "https://www.sosha-automotive.org/academics" },
  openGraph: { title: "Academics | Soshanguve Engineering School Of Specialisation", description: "Explore technical subjects, specialist programs and project-based learning.", url: "https://www.sosha-automotive.org/academics", type: "website" },
}

export default function AcademicsLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Academics & Technical Education | Soshanguve Engineering School Of Specialisation" description={metadata.description as string} path="/academics" breadcrumbs={[{ name: "Home", path: "" }, { name: "Academics", path: "/academics" }]} />{children}</>
}
