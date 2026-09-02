import type { Metadata } from "next"
import HomePageClient from "./home-page"

export const metadata: Metadata = {
  title: "Home",
  description: "Soshanguve Engineering School Of Specialisation - Empowering Future Innovators through engineering and technical education",
  alternates: { canonical: "https://sosha-automotive.org" },
  openGraph: {
    title: "Soshanguve Engineering School Of Specialisation",
    description: "Empowering Future Innovators through engineering and technical education",
    url: "https://sosha-automotive.org",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
