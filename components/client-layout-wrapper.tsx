"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingContacts } from "@/components/floating-contacts"
import { usePathname } from "next/navigation"

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleResize = () => {
      document.documentElement.style.height = `${window.innerHeight}px`
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("orientationchange", handleResize)
    setMounted(true)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("orientationchange", handleResize)
    }
  }, [])

  useEffect(() => {
    if (mounted && pathname) {
      window.scrollTo(0, 0)
    }
  }, [pathname, mounted])

  // Homepage-only headline treatment: reveal each heading like a precision typewriter
  // without replacing its text, keeping the full heading accessible to search engines and assistive tech.
  useEffect(() => {
    if (!mounted || pathname !== "/") return

    const headings = Array.from(document.querySelectorAll<HTMLElement>("main h1, main h2, main h3, main h4, main h5, main h6"))
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) return

    const activate = (heading: HTMLElement) => {
      const chars = Math.max(12, heading.textContent?.trim().length ?? 12)
      heading.style.setProperty("--typewriter-steps", String(chars))
      heading.classList.add("typewriter-heading-active")
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activate(entry.target as HTMLElement)
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    )

    headings.forEach((heading) => observer.observe(heading))

    return () => observer.disconnect()
  }, [mounted, pathname])

  return (
    <>
      {mounted && <Header />}
      <AnimatePresence mode="wait">
        <main className="flex-grow relative z-0 overflow-hidden pt-24 lg:pt-28">{children}</main>
      </AnimatePresence>
      {mounted && <Footer />}
      {mounted && <StructuredData />}
      {/* Global contact actions: WhatsApp, phone call and Gmail compose. */}
      {mounted && <FloatingContacts />}
    </>
  )
}
