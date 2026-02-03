import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayoutWrapper } from "@/components/client-layout-wrapper"

// Configure Inter font with display swap
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.soshanguve-automotive.edu.za"),
  title: {
    default: "Soshanguve Automotive School of Specialisation",
    template: "%s | Soshanguve Automotive School",
  },
  description: "Empowering Future Innovators in Automotive and Engineering Education",
  keywords: [
    "automotive school",
    "technical education",
    "engineering school",
    "Soshanguve",
    "specialisation school",
    "STEM education",
    "South Africa education",
  ],
  authors: [{ name: "Soshanguve Automotive School" }],
  creator: "Soshanguve Automotive School",
  publisher: "Soshanguve Automotive School",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: "#1E3A8A",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.soshanguve-automotive.edu.za",
    title: "Soshanguve Automotive School of Specialisation",
    description: "Empowering Future Innovators in Automotive and Engineering Education",
    siteName: "Soshanguve Automotive School",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg",
        width: 1200,
        height: 630,
        alt: "Soshanguve Automotive School",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soshanguve Automotive School of Specialisation",
    description: "Empowering Future Innovators in Automotive and Engineering Education",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Add your Google verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* Preload critical font */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        {/* Load font with JavaScript */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          />
        </noscript>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col antialiased`}>
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  )
}
