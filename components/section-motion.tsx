"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface SectionMotionProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function SectionMotion({ children, className = "", delay = 0 }: SectionMotionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto h-px w-24 origin-center bg-school-gold/70"
      aria-hidden="true"
    />
  )
}
