"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingContacts } from "@/components/floating-contacts"
import { usePathname } from "next/navigation"

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const reduceMotion = useReducedMotion()

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
    if (mounted && pathname) window.scrollTo(0, 0)
  }, [pathname, mounted])

  const typographyScope = pathname === "/" ? "premium-homepage" : "premium-interior-page"

  return (
    <>
      {mounted && <Header />}
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -4, filter: "blur(1px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
          className={`premium-route-enter flex-grow relative z-0 overflow-hidden pt-24 lg:pt-28 ${typographyScope}`}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {mounted && <Footer />}
      {mounted && <StructuredData />}
      {/* Keep contact actions mounted independently of page animation/layout state. */}
      <FloatingContacts />
    </>
  )
}
