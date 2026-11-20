"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, HeartHandshake } from "lucide-react"

export function FloatingDonorButton() {
  const [footerVisible, setFooterVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const footer = document.querySelector("[data-site-footer]")
    if (!footer || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.01,
      rootMargin: "0px 0px -56px 0px",
    })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  return (
    <motion.div
      initial={false}
      animate={{ opacity: footerVisible ? 0 : 1, x: footerVisible ? -14 : 0, y: footerVisible ? 10 : 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={footerVisible}
      style={{ pointerEvents: footerVisible ? "none" : "auto" }}
      className="floating-donor fixed bottom-4 left-3 z-[70] safe-bottom sm:bottom-6 sm:left-6"
    >
      <Link href="/support-us#donor-enquiry" aria-label="Support the school — become a donor" className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full border border-school-gold/55 bg-[#0b1d37]/95 px-3.5 text-white shadow-[0_18px_42px_-16px_rgba(5,19,42,.72),0_0_0_1px_rgba(255,255,255,.08)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-school-gold hover:bg-school-navy hover:shadow-[0_22px_48px_-16px_rgba(5,19,42,.78),0_0_26px_rgba(212,175,55,.2)] active:translate-y-0 sm:h-14 sm:gap-2.5 sm:px-5">
        <span aria-hidden="true" className="floating-donor-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-22deg]" />
        <motion.span aria-hidden="true" animate={reduceMotion ? undefined : { y: [0,-2,0], rotate: [0,-5,0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-school-gold text-school-navy shadow-[0_0_18px_rgba(212,175,55,.2)] sm:h-9 sm:w-9">
          <HeartHandshake className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        </motion.span>
        <span className="relative flex flex-col text-left"><span className="text-[9px] font-extrabold uppercase tracking-[.1em] sm:text-[11px] sm:tracking-[.12em]">Support the School</span><span className="mt-0.5 hidden text-[9px] font-medium text-white/55 sm:block">Become a donor</span></span>
        <ArrowUpRight className="relative ml-0.5 h-4 w-4 text-school-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 max-[380px]:hidden" />
      </Link>
    </motion.div>
  )
}
