import type { Metadata } from "next"
import { SeoStructuredData } from "@/components/seo-structured-data"

export const metadata: Metadata = {
  title: "About the School",
  description: "Learn about Soshanguve Engineering School Of Specialisation in Soshanguve, Pretoria: its 2019 School of Specialisation journey, engineering focus, academic excellence and vision for future innovators.",
  keywords: ["about Soshanguve Engineering School", "Soshanguve School of Specialisation", "Soshanguve technical school", "engineering education Pretoria", "automotive education Gauteng"],
  alternates: { canonical: "https://www.sosha-automotive.org/about" },
  openGraph: { title: "About Soshanguve Engineering School Of Specialisation", description: "Discover the school's engineering focus, history, achievements and vision in Soshanguve, Pretoria.", url: "https://www.sosha-automotive.org/about", type: "website" },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <><SeoStructuredData title="About the School | Soshanguve Engineering School Of Specialisation" description={metadata.description as string} path="/about" breadcrumbs={[{ name: "Home", path: "" }, { name: "About the School", path: "/about" }]} />{children}</>
}
