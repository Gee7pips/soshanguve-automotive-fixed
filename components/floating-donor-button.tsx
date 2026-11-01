"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, HeartHandshake } from "lucide-react"

export function FloatingDonorButton() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: -18, y: 12 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: .65, delay: .35, ease: [0.22, 1, 0.36, 1] }}
      className="floating-donor fixed bottom-5 left-4 z-[9998] sm:bottom-6 sm:left-6"
    >
      {!reduceMotion && <span aria-hidden="true" className="floating-donor-pulse absolute -inset-1 rounded-full" />}
      <Link
        href="/support-us#donor-enquiry"
        aria-label="Support the school — become a donor"
        className="floating-donor-link group relative inline-flex h-12 items-center gap-2.5 overflow-hidden rounded-full border border-school-gold/55 bg-[#0b1d37] px-4 text-white shadow-[0_18px_42px_-16px_rgba(5,19,42,.72),0_0_0_1px_rgba(255,255,255,.08)] transition-all duration-300 hover:-translate-y-1 hover:border-school-gold hover:bg-school-navy hover:shadow-[0_22px_48px_-16px_rgba(5,19,42,.78),0_0_26px_rgba(212,175,55,.2)] active:translate-y-0 sm:h-14 sm:px-5"
      >
        <span aria-hidden="true" className="floating-donor-shine pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-22deg]" />
        <motion.span
          aria-hidden="true"
          animate={reduceMotion ? undefined : { y: [0, -2, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-school-gold text-school-navy shadow-[0_0_18px_rgba(212,175,55,.2)] sm:h-9 sm:w-9"
        >
          <HeartHandshake className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
        </motion.span>
        <span className="relative flex flex-col text-left">
          <span className="text-[10px] font-extrabold uppercase tracking-[.12em] sm:text-[11px]">Support the School</span>
          <span className="mt-0.5 hidden text-[9px] font-medium text-white/55 sm:block">Become a donor</span>
        </span>
        <ArrowUpRight className="relative ml-0.5 h-4 w-4 text-school-gold transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 max-[380px]:hidden" />
      </Link>
    </motion.div>
  )
}
