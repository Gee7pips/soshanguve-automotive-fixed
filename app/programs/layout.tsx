import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "Engineering & Technical Programs",
  description: "Discover engineering and technical pathways at Soshanguve Engineering School Of Specialisation, with specialist learning in mechanical, civil, electrical technology, sciences and mathematics.",
  keywords: ["Soshanguve engineering programs", "technical programs Pretoria", "mechanical technology school", "civil technology school", "electrical technology school", "automotive engineering Gauteng"],
  alternates: { canonical: "https://www.sosha-automotive.org/programs" },
  openGraph: { title: "Programs | Soshanguve Engineering School Of Specialisation", description: "Explore specialist engineering and technical learning pathways in Soshanguve.", url: "https://www.sosha-automotive.org/programs", type: "website" },
}

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="Engineering & Technical Programs | Soshanguve Engineering School Of Specialisation" description={metadata.description as string} path="/programs" breadcrumbs={[{ name: "Home", path: "" }, { name: "Programs", path: "/programs" }]} />{children}</>
}
