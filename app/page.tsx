import type { Metadata } from "next"
import HomePageClient from "./home-page"

const siteUrl = "https://sosha-automotive.org"
const siteName = "Soshanguve Engineering School Of Specialisation"

export const metadata: Metadata = {
  title: "Engineering School in Soshanguve, Pretoria",
  description: "Official website of Soshanguve Engineering School Of Specialisation, a Gauteng School of Specialisation for Grades 8–12 with an automotive, engineering, technology and practical STEM focus.",
  keywords: [
    "engineering school Soshanguve", "technical school Soshanguve", "automotive school Pretoria", "School of Specialisation Gauteng",
    "engineering education South Africa", "technical high school Soshanguve", "STEM school Pretoria", "automotive engineering Gauteng",
  ],
  alternates: { canonical: siteUrl },
  openGraph: {
    title: `${siteName} | Engineering & Technical Education`,
    description: "A Gauteng School of Specialisation in Soshanguve, Pretoria, focused on automotive engineering, technical education and practical innovation.",
    url: siteUrl,
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
