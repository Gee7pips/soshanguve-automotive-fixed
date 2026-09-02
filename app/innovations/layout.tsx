import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Innovation Lab & Student Engineering Projects",
  description: "Explore student-built engineering innovations at Soshanguve Engineering School Of Specialisation, from aerospace concepts and electric mobility to robotics and automation.",
  keywords: ["Soshanguve innovation lab", "student engineering innovation South Africa", "electric mobility school project", "robotics school Gauteng", "aerospace education Pretoria"],
  alternates: { canonical: "https://sosha-automotive.org/innovations" },
  openGraph: { title: "Innovation Lab | Soshanguve Engineering School", description: "Explore aerospace, electric mobility, robotics and other student engineering projects.", url: "https://sosha-automotive.org/innovations", type: "website" },
}
export default function InnovationsLayout({ children }: { children: React.ReactNode }) { return children }
