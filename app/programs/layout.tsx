import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Engineering & Technical Programs",
  description: "Discover engineering and technical pathways at Soshanguve Engineering School Of Specialisation, with specialist learning in mechanical, civil, electrical technology, sciences and mathematics.",
  keywords: ["Soshanguve engineering programs", "technical programs Pretoria", "mechanical technology school", "civil technology school", "electrical technology school", "automotive engineering Gauteng"],
  alternates: { canonical: "https://sosha-automotive.org/programs" },
  openGraph: { title: "Programs | Soshanguve Engineering School Of Specialisation", description: "Explore specialist engineering and technical learning pathways in Soshanguve.", url: "https://sosha-automotive.org/programs", type: "website" },
}
export default function ProgramsLayout({ children }: { children: React.ReactNode }) { return children }
