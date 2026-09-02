import type { Metadata } from "next"
import HomePageClient from "./home-page"

export const metadata: Metadata = {
  title: "Home",
  description: "Soshanguve Automotive School of Specialisation - Empowering Future Innovators in Automotive and Engineering Education",
  alternates: { canonical: "https://sosha-automotive.org" },
  openGraph: {
    title: "Soshanguve Automotive School of Specialisation",
    description: "Empowering Future Innovators in Automotive and Engineering Education",
    url: "https://sosha-automotive.org",
    type: "website",
  },
}

export default function HomePage() {
  return <HomePageClient />
}
