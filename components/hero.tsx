"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { WavyBackground } from "@/components/ui/wavy-background"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ChevronDown, Cpu, Gauge, GraduationCap } from "lucide-react"

const metrics = [
  { icon: GraduationCap, value: "700+", label: "Learners" },
  { icon: Cpu, value: "9", label: "Programs" },
  { icon: Gauge, value: "100%", label: "Matric Pass" },
]

export function Hero() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  })

  return (
    <section className="relative overflow-hidden bg-[#0b1836]">
      <WavyBackground
        className="min-h-[700px] py-24 md:min-h-[780px] md:py-28"
        containerClassName="relative"
        colors={["#4A90B9", "#1E3A8A", "#D4AF37"]}
        backgroundFill="#0b1836"
        waveOpacity={0.13}
        waveWidth={34}
        speed="slow"
      >
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0b1836]/70 to-transparent" />
        <div className="pointer-events-none absolute left-1/2 top-[38%] h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-school-gold/10" />

        <div className="container relative mx-auto px-5 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <motion.div {...reveal(0.05)} className="relative mb-6">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border border-school-gold/50 bg-white/[0.08] p-2 shadow-[0_12px_40px_rgba(0,0,0,.22)] md:h-32 md:w-32">
                <Image
                  src="/images/soshanguve-logo.jpg"
                  alt="Soshanguve Automotive S.O.S School Crest"
                  width={128}
                  height={128}
                  className="h-full w-full rounded-full object-contain"
                  priority
                  sizes="128px"
                />
              </div>
            </motion.div>

            <motion.div {...reveal(0.12)} className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold md:text-xs">
              <span className="h-px w-7 bg-school-gold/70 md:w-10" />
              <span>School of Specialisation · Est. 2019</span>
              <span className="h-px w-7 bg-school-gold/70 md:w-10" />
            </motion.div>

            <motion.h1 {...reveal(0.2)} className="font-serif font-bold tracking-tight text-white">
              <span className="block text-4xl leading-[1.02] text-school-gold sm:text-5xl md:text-7xl lg:text-8xl">Soshanguve Automotive</span>
              <span className="mt-2 block text-2xl font-medium leading-tight text-white/90 sm:text-3xl md:text-5xl">School of Specialisation</span>
            </motion.h1>

            <motion.p {...reveal(0.3)} className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Building the next generation of engineers, innovators and entrepreneurs through world-class technical education in the heart of Soshanguve.
            </motion.p>

            <motion.div {...reveal(0.4)} className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="group rounded-full bg-school-gold px-8 font-bold text-school-navy shadow-lg shadow-school-gold/15 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-yellow-400">
                <Link href="/programs" className="flex items-center gap-2">Explore Programs <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 bg-white/[0.06] px-8 text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/10">
                <Link href="/support-us">Support Our Vision</Link>
              </Button>
            </motion.div>

            <motion.div {...reveal(0.5)} className="mt-10 grid w-full max-w-2xl grid-cols-3 border-y border-white/10 py-4">
              {metrics.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center justify-center gap-2 border-r border-white/10 px-2 last:border-r-0 md:gap-3">
                  <Icon className="hidden h-5 w-5 text-school-gold sm:block" aria-hidden="true" />
                  <div className="text-left">
                    <div className="font-serif text-lg font-bold text-white md:text-2xl">{value}</div>
                    <div className="text-[9px] uppercase tracking-[0.14em] text-white/45 md:text-[10px]">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div {...reveal(0.6)} className="mt-6">
              <motion.div
                animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                className="flex flex-col items-center gap-1 text-white/30"
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
