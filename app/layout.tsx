import type React from "react"
import type { Metadata, Viewport } from "next"
import { Manrope, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper"

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sosha-automotive.org"),
  title: { default: "Soshanguve Engineering School Of Specialisation", template: "%s | Soshanguve Engineering School Of Specialisation" },
  description: "Empowering Future Innovators through engineering and technical education",
  keywords: ["engineering school", "technical education", "Soshanguve", "specialisation school", "STEM education", "South Africa education"],
  authors: [{ name: "Soshanguve Engineering School Of Specialisation" }],
  creator: "Soshanguve Engineering School Of Specialisation",
  publisher: "Soshanguve Engineering School Of Specialisation",
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: "/icon-light-32x32.png", apple: "/apple-icon.png" },
  openGraph: {
    type: "website", locale: "en_ZA", url: "https://sosha-automotive.org",
    title: "Soshanguve Engineering School Of Specialisation",
    description: "Empowering Future Innovators through engineering and technical education",
    siteName: "Soshanguve Engineering School Of Specialisation",
    images: [{ url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg", width: 1200, height: 630, alt: "Soshanguve Engineering School Of Specialisation" }],
  },
  twitter: { card: "summary_large_image", title: "Soshanguve Engineering School Of Specialisation", description: "Empowering Future Innovators through engineering and technical education", images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
}

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true, themeColor: "#1E3A8A" }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${manrope.variable} ${playfair.variable}`}><body className={`${manrope.className} min-h-screen flex flex-col antialiased`}> <ClientLayoutWrapper>{children}</ClientLayoutWrapper></body></html>
}
