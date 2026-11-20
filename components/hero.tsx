"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { WavyBackground } from "@/components/ui/wavy-background"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown, Cpu, Gauge, GraduationCap } from "lucide-react"

const metrics = [
  { icon: GraduationCap, value: "700+", label: "Learners" },
  { icon: Cpu, value: "Technical", label: "Programs" },
  { icon: Gauge, value: "100%", label: "2025 Matric Pass" },
]

const cinematicEase = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const reduceMotion = useReducedMotion()

  // Headings reveal as a single composed unit — no character-by-character typing.
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 22 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduceMotion ? 0.48 : 0.82,
      delay,
      ease: cinematicEase,
    },
  })

  return (
    <section className="hero-cinematic relative isolate overflow-hidden bg-[#0b1836]">
      <WavyBackground
        className="min-h-[700px] py-24 md:min-h-[780px] md:py-28"
        containerClassName="relative"
        colors={["#4A90B9", "#1E3A8A", "#D4AF37"]}
        backgroundFill="#0b1836"
        waveOpacity={0.13}
        waveWidth={34}
        speed="slow"
      >
        {/* Slow ambient light fields: visual atmosphere, not distracting content animation. */}
        <motion.div
          aria-hidden="true"
          className="hero-ambient hero-ambient-blue pointer-events-none absolute -left-40 top-10 h-[34rem] w-[34rem] rounded-full"
          animate={reduceMotion ? undefined : { x: [0, 34, 0], y: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="hero-ambient hero-ambient-gold pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full"
          animate={reduceMotion ? undefined : { x: [0, -28, 0], y: [0, -20, 0], scale: [1.04, 0.96, 1.04] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b1836]/70 to-transparent" />
        <motion.div
          aria-hidden="true"
          className="hero-orbit hero-orbit-wide pointer-events-none absolute left-1/2 top-[38%] h-[460px] w-[460px] rounded-full border border-school-gold/10"
          style={{ x: "-50%", y: "-50%" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          aria-hidden="true"
          className="hero-orbit hero-orbit-inner pointer-events-none absolute left-1/2 top-[38%] h-[330px] w-[330px] rounded-full border border-white/[0.07]"
          style={{ x: "-50%", y: "-50%" }}
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        />

        <div className="container relative z-10 mx-auto px-5 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div
              {...reveal(0.05)}
              whileHover={reduceMotion ? undefined : { y: -5, scale: 1.035 }}
              transition={{ duration: 0.5, ease: cinematicEase }}
              className="hero-crest-wrap relative mb-6"
            >
              <div className="hero-crest-aura absolute -inset-5 rounded-full" />
              <div className="hero-crest-ring absolute -inset-3 rounded-full border border-school-gold/25" />
              <div className="hero-crest relative flex h-28 w-28 items-center justify-center rounded-full border border-school-gold/55 bg-white/[0.09] p-2 md:h-32 md:w-32">
                <Image
                  src="/images/soshanguve-logo.jpg"
                  alt="Soshanguve Engineering School Of Specialisation crest"
                  width={128}
                  height={128}
                  className="h-full w-full rounded-full object-contain"
                  priority
                  sizes="128px"
                />
              </div>
            </motion.div>

            <motion.div
              {...reveal(0.16)}
              className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold md:text-xs"
            >
              <span className="h-px w-7 bg-school-gold/70 md:w-10" />
              <span>School Of Specialisation · Est. 2019</span>
              <span className="h-px w-7 bg-school-gold/70 md:w-10" />
            </motion.div>

            <motion.h1
              {...reveal(0.25)}
              className="hero-title font-serif font-bold tracking-tight text-white"
            >
              <span className="block text-3xl leading-[1.02] text-school-gold sm:text-5xl md:text-7xl lg:text-8xl">
                Soshanguve Engineering
              </span>
              <span className="mt-2 block text-2xl font-medium leading-tight text-white/90 sm:text-3xl md:text-5xl">
                School Of Specialisation
              </span>
            </motion.h1>

            <motion.p
              {...reveal(0.36)}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              Building the next generation of engineers, innovators and entrepreneurs through world-class technical education in the heart of Soshanguve.
            </motion.p>

            <motion.div
              {...reveal(0.46)}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <Button
                asChild
                size="lg"
                className="hero-primary-button group rounded-full bg-school-gold px-8 font-bold text-school-navy shadow-lg shadow-school-gold/15 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-[0_16px_42px_-12px_rgba(212,175,55,.48)]"
              >
                <Link href="/programs" className="flex items-center gap-2">
                  Explore Programs
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-full border-white/25 bg-white/[0.06] px-8 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10 hover:shadow-[0_14px_34px_-18px_rgba(255,255,255,.4)]"
              >
                <Link href="/support-us">Support Our Vision</Link>
              </Button>
            </motion.div>

            <motion.div
              {...reveal(0.56)}
              className="hero-metrics mt-10 grid w-full max-w-2xl grid-cols-3 border-y border-white/10 py-4"
            >
              {metrics.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  initial={false}
                  whileHover={reduceMotion ? undefined : { y: -4, scale: 1.045 }}
                  transition={{ duration: 0.28, ease: cinematicEase }}
                  className="hero-metric flex items-center justify-center gap-2 border-r border-white/10 px-2 last:border-r-0 md:gap-3"
                >
                  <Icon className="hidden h-5 w-5 text-school-gold sm:block" aria-hidden="true" />
                  <div className="text-left">
                    <div className="font-serif text-lg font-bold text-white md:text-2xl">{value}</div>
                    <div className="text-[9px] uppercase tracking-[0.14em] text-white/45 md:text-[10px]">{label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...reveal(0.68)} className="mt-6">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 7, 0], opacity: [0.42, 0.9, 0.42] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1 text-white/40"
              >
                <span className="text-[9px] uppercase tracking-[0.22em]">Scroll to explore</span>
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </section>
  )
}
