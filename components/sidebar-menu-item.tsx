"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

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
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      className="px-2"
    >
      <Link
        href={href}
        className="group relative flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-102"
        onClick={onClick}
      >
        <div className={`flex items-center space-x-3 flex-1 relative z-10 ${
          isActive 
            ? "text-white" 
            : "text-gray-700 group-hover:text-school-navy"
        }`}>
          {icon && <span className="text-base">{icon}</span>}
          <span className="text-balance">{label}</span>
        </div>
        
        {isActive && (
          <ChevronRight className="w-4 h-4 text-white relative z-10" />
        )}

        {/* Active background pill */}
        {isActive && (
          <motion.div
            layoutId="sidebar-active-pill"
            className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-blue to-school-navy rounded-lg shadow-md -z-0"
            transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
          />
        )}

        {/* Hover background */}
        {!isActive && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg opacity-0 group-hover:opacity-100 -z-0 transition-opacity duration-300" />
        )}
      </Link>
    </motion.div>
  )
}
