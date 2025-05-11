"use client"

import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"
import type React from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
}

export function ScrollAnimation({ children, className }: ScrollAnimationProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    config: { duration: 500 },
  })

  return (
    <animated.div ref={ref} style={props} className={className}>
      {children}
    </animated.div>
  )
}

