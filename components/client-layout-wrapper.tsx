"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { usePathname } from "next/navigation"

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Handle orientation changes only
  useEffect(() => {
    const handleResize = () => {
      // Force layout recalculation after orientation change
      document.documentElement.style.height = `${window.innerHeight}px`
    }

    // Initial setup
    handleResize()

    // Listen for orientation changes and resize events
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)

    // Set mounted state
    setMounted(true)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  // Handle page transitions only
  useEffect(() => {
    if (mounted && pathname) {
      // Scroll to top only on page change
      window.scrollTo(0, 0)
    }
  }, [pathname, mounted])

  if (!mounted) {
    return null
  }

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <main className="flex-grow relative z-0 overflow-hidden pt-24 lg:pt-28">{children}</main>
      </AnimatePresence>
      <Footer />
      <StructuredData />
    </>
  )
}
