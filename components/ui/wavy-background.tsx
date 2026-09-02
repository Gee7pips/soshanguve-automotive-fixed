"use client"

import { cn } from "@/lib/utils"
import { useEffect, useRef, useState, type ReactNode } from "react"
import { createNoise3D } from "simplex-noise"

interface WavyBackgroundProps {
  children?: ReactNode
  className?: string
  containerClassName?: string
  colors?: string[]
  waveWidth?: number
  backgroundFill?: string
  blur?: number
  speed?: "slow" | "fast"
  waveOpacity?: number
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#38bdf8", "#818cf8", "#c084fc"],
  waveWidth = 42,
  backgroundFill = "#0b1836",
  blur = 8,
  speed = "slow",
  waveOpacity = 0.16,
}: WavyBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const frameRef = useRef<number | null>(null)
  const [isSafari, setIsSafari] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    const noise = createNoise3D()
    let width = 0
    let height = 0
    let time = 0
    let visible = true
    let reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = () => {
      ctx.globalAlpha = 1
      ctx.filter = "none"
      ctx.fillStyle = backgroundFill
      ctx.fillRect(0, 0, width, height)
      ctx.globalAlpha = waveOpacity
      ctx.lineWidth = waveWidth
      ctx.lineCap = "round"
      for (let wave = 0; wave < Math.min(colors.length, 3); wave++) {
        ctx.beginPath()
        ctx.strokeStyle = colors[wave]
        const yBase = height * (0.47 + wave * 0.075)
        const step = Math.max(10, width / 90)
        for (let x = -step; x <= width + step; x += step) {
          const y = yBase + noise(x / 700, wave * 0.7, time) * 65
          if (x === -step) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1
    }

    const render = () => {
      draw()
      if (visible && !reducedMotion) {
        time += speed === "fast" ? 0.0014 : 0.0007
        frameRef.current = requestAnimationFrame(render)
      }
    }

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible && !reducedMotion && frameRef.current === null) frameRef.current = requestAnimationFrame(render)
      if (!visible && frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }, { threshold: 0.01 })

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onMotionChange = () => {
      reducedMotion = motionQuery.matches
      if (reducedMotion && frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      } else if (!reducedMotion && visible && frameRef.current === null) {
        frameRef.current = requestAnimationFrame(render)
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(canvas)
    observer.observe(canvas)
    motionQuery.addEventListener("change", onMotionChange)
    setIsSafari(/Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent))
    resize()
    render()

    return () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current)
      resizeObserver.disconnect()
      observer.disconnect()
      motionQuery.removeEventListener("change", onMotionChange)
    }
  }, [backgroundFill, colors, speed, waveOpacity, waveWidth])

  return (
    <div className={cn("relative flex min-h-screen flex-col items-center justify-center overflow-hidden", containerClassName)}>
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" style={{ filter: isSafari ? `blur(${Math.min(blur, 4)}px)` : undefined }} />
      <div className={cn("relative z-10 w-full", className)}>{children}</div>
    </div>
  )
}
