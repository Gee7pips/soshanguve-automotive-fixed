import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About the School",
  description: "Learn about Soshanguve Engineering School Of Specialisation in Soshanguve, Pretoria: its 2019 School of Specialisation journey, engineering focus, academic excellence and vision for future innovators.",
  keywords: ["about Soshanguve Engineering School", "Soshanguve School of Specialisation", "Soshanguve technical school", "engineering education Pretoria", "automotive education Gauteng"],
  alternates: { canonical: "https://sosha-automotive.org/about" },
  openGraph: { title: "About Soshanguve Engineering School Of Specialisation", description: "Discover the school's engineering focus, history, achievements and vision in Soshanguve, Pretoria.", url: "https://sosha-automotive.org/about", type: "website" },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) { return children }
