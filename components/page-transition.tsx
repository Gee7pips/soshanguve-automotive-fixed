"use client"

import type React from "react"
import { useTransition, animated } from "react-spring"
import { usePathname } from "next/navigation"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const transitions = useTransition(pathname, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  })

  return transitions((style, item) => <animated.div style={style}>{item === pathname ? children : null}</animated.div>)
}
