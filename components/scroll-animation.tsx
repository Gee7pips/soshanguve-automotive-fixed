"use client"

import { useEffect, useRef, useState } from "react"
import type React from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
}

export function ScrollAnimation({ children, className }: ScrollAnimationProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`scroll-reveal ${visible ? "scroll-reveal-visible" : ""} ${className ?? ""}`}>
      {children}
    </div>
  )
}
