"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=400&width=1920",
}: PageHeaderProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#1E3A8A",
        }}
      >
        <div className="absolute inset-0 bg-school-navy/90" />
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">{title}</h1>
          {subtitle && <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}

