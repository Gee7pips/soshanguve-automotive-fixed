"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionMotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

interface CinematicSectionProps extends SectionMotionProps {
  amount?: number
}

interface SectionDividerProps {
  tone?: "light" | "dark"
  label?: string
}

const cinematicEase = [0.22, 1, 0.36, 1] as const

/**
 * Shared editorial reveal for major homepage sections.
 * Reduced-motion users still receive a gentle opacity transition, without spatial movement.
 */
export function CinematicSection({
  children,
  className = "",
  delay = 0,
  amount = 0.12,
}: CinematicSectionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: reduceMotion ? 0 : 34,
        scale: reduceMotion ? 1 : 0.986,
        filter: reduceMotion ? "none" : "blur(7px)",
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount, margin: "0px 0px -7% 0px" }}
      transition={{
        opacity: { duration: reduceMotion ? 0.42 : 0.78, delay, ease: cinematicEase },
        y: { duration: reduceMotion ? 0 : 0.82, delay, ease: cinematicEase },
        scale: { duration: reduceMotion ? 0 : 0.96, delay, ease: cinematicEase },
        filter: { duration: reduceMotion ? 0 : 0.82, delay, ease: cinematicEase },
      }}
      className={`cinematic-section ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function SectionMotion({ children, className = "", delay = 0 }: SectionMotionProps) {
  return (
    <CinematicSection delay={delay} className={className}>
      {children}
    </CinematicSection>
  )
}

export function SectionDivider({ tone = "light", label }: SectionDividerProps) {
  const reduceMotion = useReducedMotion()
  const isDark = tone === "dark"

  return (
    <div
      className={`section-divider relative z-20 flex h-20 items-center justify-center overflow-hidden ${isDark ? "bg-school-navy" : "bg-white"}`}
      aria-hidden={!label}
    >
      <motion.div
        initial={{ opacity: 0, scaleX: reduceMotion ? 1 : 0.22 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: reduceMotion ? 0.45 : 1.05, ease: cinematicEase }}
        className="section-divider-line absolute inset-x-0 top-1/2 h-px origin-center bg-gradient-to-r from-transparent via-school-gold/45 to-transparent"
      />
      <div className="relative flex w-full max-w-7xl items-center justify-center px-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-school-gold/30" />
        <div className="mx-4 flex items-center gap-2 sm:mx-6 sm:gap-3">
          <span className="h-1.5 w-1.5 rotate-45 border border-school-gold/80" />
          <span className={`section-divider-core h-2.5 w-2.5 rounded-full border-2 border-school-gold ${isDark ? "bg-school-navy" : "bg-white"}`} />
          <span className="h-1.5 w-1.5 rotate-45 border border-school-gold/80" />
        </div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-school-gold/30" />
      </div>
      {label && (
        <span className={`absolute top-1/2 -translate-y-1/2 bg-inherit px-3 text-[9px] font-bold uppercase tracking-[0.24em] ${isDark ? "text-white/45" : "text-school-navy/35"}`}>
          {label}
        </span>
      )}
    </div>
  )
}
