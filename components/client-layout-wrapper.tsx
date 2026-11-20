"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { StructuredData } from "@/components/structured-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingContacts } from "@/components/floating-contacts"
import { FloatingDonorButton } from "@/components/floating-donor-button"
import { usePathname } from "next/navigation"

export function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname
      window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior })
    }
  }, [pathname])

  const typographyScope = pathname === "/" ? "premium-homepage" : "premium-interior-page"

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 8, filter: "blur(2px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -4, filter: "blur(1px)" }}
          transition={{ duration: reduceMotion ? 0 : 0.36, ease: [0.22, 1, 0.36, 1] }}
          className={"premium-route-enter relative z-0 flex-grow overflow-x-clip pt-24 lg:pt-28 " + typographyScope}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <StructuredData />
      <FloatingContacts />
      <FloatingDonorButton />
    </>
  )
}
