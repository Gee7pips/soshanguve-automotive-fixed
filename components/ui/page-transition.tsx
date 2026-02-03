"use client"

import type React from "react"

import { useTransition, animated } from "react-spring"
import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const transitions = useTransition(pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  })

  return transitions((style, item) => <animated.div style={style}>{item === pathname ? children : null}</animated.div>)
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage = "/placeholder.svg?height=400&width=1920",
}: {
  title: string
  subtitle?: string
  backgroundImage?: string
}) {
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
