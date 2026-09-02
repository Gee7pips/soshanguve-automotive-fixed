"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionMotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

interface SectionDividerProps {
  tone?: "light" | "dark"
  label?: string
}

export function SectionMotion({ children, className = "", delay = 0 }: SectionMotionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionDivider({ tone = "light", label }: SectionDividerProps) {
  const reduceMotion = useReducedMotion()
  const isDark = tone === "dark"

  return (
    <div
      className={`relative z-20 flex h-20 items-center justify-center overflow-hidden ${isDark ? "bg-school-navy" : "bg-white"}`}
      aria-hidden={!label}
    >
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-school-gold/30 to-transparent" />
      <motion.div
        initial={{ opacity: 0, scaleX: 0.4 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex w-full max-w-7xl items-center justify-center px-6"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-school-gold/30" />
        <div className="mx-4 flex items-center gap-2 sm:mx-6 sm:gap-3">
          <span className="h-1.5 w-1.5 rotate-45 border border-school-gold/80" />
          <span className={`h-2.5 w-2.5 rounded-full border-2 border-school-gold ${isDark ? "bg-school-navy" : "bg-white"}`} />
          <span className="h-1.5 w-1.5 rotate-45 border border-school-gold/80" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-school-gold/30" />
      </motion.div>
      {label && (
        <span className={`absolute top-1/2 -translate-y-1/2 bg-inherit px-3 text-[9px] font-bold uppercase tracking-[0.24em] ${isDark ? "text-white/45" : "text-school-navy/35"}`}>
          {label}
        </span>
      )}
    </div>
  )
}
