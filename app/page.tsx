import type { Metadata } from "next"
import HomePageClient from "./home-page"

export const metadata: Metadata = {
  title: "Home",
  description:
    "Soshanguve Engineering School of Specialisation - Empowering Future Innovators in Automotive and Engineering Education",
  alternates: {
    canonical: "https://www.soshanguve-engineering.edu.za",
  },
  openGraph: {
    title: "Soshanguve Engineering School of Specialisation",
    description: "Empowering Future Innovators in Automotive and Engineering Education",
    url: "https://www.soshanguve-engineering.edu.za",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
