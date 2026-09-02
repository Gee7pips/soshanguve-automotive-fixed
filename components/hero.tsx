"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { WavyBackground } from "@/components/ui/wavy-background"
import { ErrorBoundary } from "react-error-boundary"
import { useInView } from "react-intersection-observer"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, ChevronDown, Cpu, Gauge, GraduationCap } from "lucide-react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 90])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.95, 0])

  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 22 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  })

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <motion.section ref={containerRef} style={{ opacity: heroOpacity }} className="relative z-10 overflow-hidden bg-school-navy">
        <WavyBackground
          className="min-h-[760px] py-28 md:min-h-[820px] md:py-36"
          containerClassName="relative"
          colors={["#4A90B9", "#1E3A8A", "#D4AF37"]}
          backgroundFill="#0b1836"
          waveOpacity={0.18}
        >
          <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-school-gold/15" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

          <motion.div ref={ref} className="container relative mx-auto px-6" style={{ y: imageY }}>
            <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
              <motion.div {...reveal(0.05)} className="relative mb-7">
                <div className="absolute -inset-5 rounded-full bg-school-gold/15 blur-2xl" />
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-school-gold/50 bg-white/10 p-2 shadow-[0_0_70px_rgba(212,175,55,0.16)] backdrop-blur-md md:h-40 md:w-40">
                  <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Automotive S.O.S School Crest" width={160} height={160} className="rounded-full object-contain" priority />
                </div>
              </motion.div>

              <motion.div {...reveal(0.2)} className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-school-gold md:text-xs">
                <span className="h-px w-8 bg-school-gold/70 md:w-12" />
                <span>School of Specialisation · Established 2019</span>
                <span className="h-px w-8 bg-school-gold/70 md:w-12" />
              </motion.div>

              <motion.h1 {...reveal(0.3)} className="font-serif font-bold tracking-tight text-white">
                <span className="block text-4xl leading-[1.02] text-school-gold sm:text-5xl md:text-7xl lg:text-8xl">Soshanguve Automotive</span>
                <span className="mt-3 block text-2xl font-medium leading-tight text-white/90 sm:text-3xl md:text-5xl">School of Specialisation</span>
              </motion.h1>

              <motion.p {...reveal(0.45)} className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/70 md:text-xl">
                Building the next generation of engineers, innovators and entrepreneurs through world-class technical education in the heart of Soshanguve.
              </motion.p>

              <motion.div {...reveal(0.6)} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Button asChild size="lg" className="group rounded-full bg-school-gold px-8 font-bold text-school-navy shadow-xl shadow-school-gold/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-school-gold/30">
                  <Link href="/programs" className="flex items-center gap-2">Explore Programs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-white/10 px-8 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15">
                  <Link href="/support-us">Support Our Vision</Link>
                </Button>
              </motion.div>

              <motion.div {...reveal(0.75)} className="mt-12 grid w-full max-w-2xl grid-cols-3 gap-2 border-y border-white/10 py-5 md:gap-8">
                {[
                  { icon: GraduationCap, value: "700+", label: "Learners" },
                  { icon: Cpu, value: "9", label: "Programs" },
                  { icon: Gauge, value: "100%", label: "Matric Pass" },
                ].map(({ icon: Icon, value, label }) => (
                  <div key={label} className="flex items-center justify-center gap-2 text-left md:gap-3">
                    <Icon className="hidden h-5 w-5 text-school-gold sm:block" />
                    <div><div className="font-serif text-lg font-bold text-white md:text-2xl">{value}</div><div className="text-[9px] uppercase tracking-[0.16em] text-white/45 md:text-[10px]">{label}</div></div>
                  </div>
                ))}
              </motion.div>

              <motion.div {...reveal(0.9)} className="mt-7">
                <motion.div animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center gap-1 text-white/35">
                  <span className="text-[9px] uppercase tracking-[0.25em]">Scroll to explore</span><ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </WavyBackground>
      </motion.section>
    </ErrorBoundary>
  )
}
