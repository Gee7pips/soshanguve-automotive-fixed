"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import type React from "react"

interface SidebarMenuItemProps {
  href: string
  label: string
  description?: string
  isActive: boolean
  onClick?: () => void
  icon?: React.ReactNode
  index?: number
}

export function SidebarMenuItem({ href, label, description, isActive, onClick, icon, index = 0 }: SidebarMenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 22, filter: "blur(4px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, x: 14, filter: "blur(3px)" }}
      transition={{ duration: .34, delay: index * .035, ease: [.22, 1, .36, 1] }}
      className="group"
    >
      <Link
        href={href}
        onClick={onClick}
        aria-current={isActive ? "page" : undefined}
        className={"relative flex items-center gap-3 overflow-hidden rounded-[1.15rem] border px-3.5 py-3 transition-all duration-300 sm:gap-4 sm:px-4 sm:py-3.5 " + (
          isActive
            ? "border-[#234f75]/20 bg-white text-[#102f4e] shadow-[0_12px_34px_-22px_rgba(13,47,78,.48)]"
            : "border-transparent bg-white/55 text-[#193a59] hover:border-[#8eb4d0]/35 hover:bg-white hover:shadow-[0_12px_28px_-22px_rgba(13,47,78,.28)]"
        )}
      >
        {isActive && <motion.span layoutId="tray-active-rail" className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-[#c9a64e]" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
        <span className={"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 " + (
          isActive ? "bg-[#102f4e] text-[#e5c976] shadow-[0_8px_18px_-10px_rgba(13,47,78,.8)]" : "bg-[#eaf1f7] text-[#2f6289] group-hover:bg-[#dceaf4]"
        )}>
          {icon || <span className="h-1.5 w-1.5 rounded-full bg-current" />}
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className={"block font-sans text-[13px] font-extrabold tracking-[-.02em] sm:text-sm " + (isActive ? "text-[#102f4e]" : "text-[#24445f]")}>{label}</span>
            {isActive && <span className="rounded-full bg-[#f3eddc] px-2 py-0.5 font-mono text-[7px] font-bold uppercase tracking-[.12em] text-[#9a792c]">Current</span>}
          </span>
          <span className="mt-1 block truncate text-[10px] leading-4 text-slate-400">{description || (isActive ? "You are viewing this section" : "Explore this section")}</span>
        </span>
        <span className={"flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-0.5 " + (
          isActive ? "bg-[#edf3f7] text-[#2f6289]" : "bg-[#edf3f7]/70 text-slate-400 group-hover:bg-[#e1edf5] group-hover:text-[#24445f]"
        )}>
          {isActive ? <ChevronRight className="h-4 w-4" /> : <ArrowUpRight className="h-3.5 w-3.5" />}
        </span>
      </Link>
    </motion.div>
  )
}
