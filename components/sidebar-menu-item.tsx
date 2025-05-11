"use client"

import type React from "react"

import Link from "next/link"
import { motion } from "framer-motion"

interface SidebarMenuItemProps {
  href: string
  label: string
  isActive: boolean
  onClick?: () => void
  icon?: React.ReactNode // Optional icon prop
}

export function SidebarMenuItem({ href, label, isActive, onClick, icon }: SidebarMenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href={href}
        className={`flex items-center px-4 py-2 text-lg font-medium transition-colors hover:text-school-navy rounded-lg ${
          isActive ? "text-school-navy bg-gray-100" : "text-gray-600 hover:bg-gray-50"
        }`}
        onClick={onClick}
      >
        {icon && <span className="mr-2">{icon}</span>} {/* Render icon if provided */}
        {label}
      </Link>
    </motion.div>
  )
}

