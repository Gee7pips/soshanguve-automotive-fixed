import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Playfair_Display, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper"

const manrope = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-manrope", weight: ["400", "500", "600", "700", "800"] })
const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", variable: "--font-playfair", weight: ["400", "500", "600", "700"] })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space", weight: ["400", "500", "600", "700"] })

const siteName = "Soshanguve Engineering School Of Specialisation"
const siteUrl = "https://www.sosha-automotive.org"
const description = "Soshanguve Engineering School Of Specialisation is a Gauteng School of Specialisation in Soshanguve, Pretoria, focused on automotive, engineering, technology and practical STEM education for Grades 8–12."

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: siteName, template: "%s | Soshanguve Engineering School Of Specialisation" },
  description,
  keywords: [
    siteName, "Soshanguve engineering school", "Soshanguve technical school", "school of specialisation Soshanguve",
    "automotive school Soshanguve", "engineering school Gauteng", "technical high school Pretoria",
    "automotive engineering South Africa", "technical education Gauteng", "STEM school Soshanguve",
    "Schools of Specialisation Gauteng", "Tshwane West engineering school",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  category: "education",
  classification: "Secondary technical and engineering education",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: siteUrl },
  icons: { icon: "/icon-light-32x32.png", apple: "/apple-icon.png" },
  openGraph: {
    type: "website", locale: "en_ZA", url: siteUrl, title: siteName, description, siteName,
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg", width: 1200, height: 630, alt: `${siteName} — Automotive and Engineering Education` }],
  },
  twitter: {
    card: "summary_large_image", title: siteName, description,
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true, themeColor: "#1E3A8A" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en-ZA" className={`${manrope.variable} ${playfair.variable} ${spaceGrotesk.variable}`}><body className={`${manrope.className} min-h-screen flex flex-col antialiased`}><ClientLayoutWrapper>{children}</ClientLayoutWrapper></body></html>
}
