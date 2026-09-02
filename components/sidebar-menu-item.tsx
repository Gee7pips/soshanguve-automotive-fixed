"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import type React from "react"

interface SidebarMenuItemProps {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  icon?: React.ReactNode
  index?: number
}

export function SidebarMenuItem({ href, label, isActive, onClick, icon, index = 0 }: SidebarMenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 18 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 18 }}
      transition={{ duration: 0.3, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link
        href={href}
        onClick={onClick}
        className={`relative flex items-center gap-3 overflow-hidden rounded-2xl border px-4 py-3.5 transition-all duration-300 ${
          isActive
            ? "border-school-navy bg-school-navy text-white shadow-[0_12px_30px_rgba(30,58,138,0.18)]"
            : "border-transparent bg-white/60 text-school-navy hover:border-school-gold/25 hover:bg-white hover:shadow-[0_10px_28px_rgba(15,35,75,0.08)]"
        }`}
      >
        <span className={`w-7 shrink-0 font-mono text-[9px] font-bold tracking-[0.16em] ${isActive ? "text-school-gold" : "text-slate-400"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${isActive ? "bg-white/10 text-school-gold" : "bg-school-navy/[0.045] text-school-navy group-hover:bg-school-gold/10"}`}>
          {icon || <span className="h-1.5 w-1.5 rounded-full bg-current" />}
        </span>

        <span className="min-w-0 flex-1">
          <span className="block font-sans text-[14px] font-extrabold tracking-[-0.015em]">{label}</span>
          <span className={`mt-0.5 block text-[9px] font-bold uppercase tracking-[0.16em] ${isActive ? "text-white/55" : "text-slate-400"}`}>
            {isActive ? "Current section" : "Explore"}
          </span>
        </span>

        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 ${isActive ? "bg-white/10" : "bg-school-navy/[0.04]"}`}>
          {isActive ? <ChevronRight className="h-4 w-4 text-school-gold" /> : <ArrowUpRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-school-navy" />}
        </span>
      </Link>
    </motion.div>
  )
}
