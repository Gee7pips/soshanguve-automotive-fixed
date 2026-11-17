"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plane, ArrowRight, Trophy, Zap, Wind } from "lucide-react"

const specs = [
  { icon: Zap, label: "Power Source", value: "Battery Electric" },
  { icon: Wind, label: "Propulsion", value: "Variable-Pitch Propeller" },
  { icon: Plane, label: "Design", value: "Learner-Engineered" },
  { icon: Trophy, label: "Recognition", value: "Gauteng SoS Festival 1st Place" },
]

export function AirplaneInnovation() {
  return (
    <section className="homepage-section section-aerospace relative py-24 lg:py-36 bg-school-navy overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Gold glow blob */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-school-gold/10 blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-school-gold" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">
              Aerospace Innovation — 2026
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance max-w-2xl">
              S.o.S Flight 01:{" "}
              <span className="text-school-gold">From the Workshop to the Sky</span>
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed lg:text-right text-sm">
              When we said our learners engineer the future, we meant it literally — they built an aircraft that flies.
            </p>
          </div>
          <div className="w-12 h-0.5 bg-school-gold mt-6" />
        </motion.div>

        {/* Main two-column layout */}
        <div className="grid gap-12 lg:gap-20 lg:grid-cols-2 items-center mb-16">

          {/* Left: editorial text */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="space-y-7"
          >
            {/* Large editorial index */}
            <span className="font-serif text-[120px] leading-none font-black text-white/5 select-none block -mb-8">
              01
            </span>

            <div className="space-y-5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Learners Who Don&apos;t Just Study Aerospace — They Create It
              </h3>
              <div className="w-8 h-0.5 bg-school-gold" />
              <p className="text-white/65 leading-relaxed text-lg">
                The SOSHANGUVE S.o.S FLIGHT 01 is not a model kit assembled from instructions. It is an original,
                battery-powered aircraft designed, fabricated, and successfully flown by learners from the
                school&apos;s Engineering stream — a project that combines aerodynamics, electronics, and precision
                manufacturing into a single, airborne achievement.
              </p>
              <p className="text-white/55 leading-relaxed">
                The project earned <span className="text-school-gold font-semibold">first position</span> at the
                2026 Gauteng Schools of Specialisation Festival, where judges recognised it as the standout
                innovation of the competition. Each learner on the team received a tablet and certificate — but more
                importantly, they earned the knowledge that their hands can build things that fly.
              </p>
            </div>

            {/* Spec chips */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {specs.map((spec, i) => {
                const Icon = spec.icon
                return (
                  <motion.div
                    key={spec.label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-school-gold/40 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-school-gold/15 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-school-gold" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold tracking-widest uppercase text-white/35 mb-0.5">
                        {spec.label}
                      </p>
                      <p className="text-white/80 text-sm font-semibold leading-snug">{spec.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="pt-2">
              <Button
                asChild
                className="group bg-school-gold hover:bg-school-gold/90 text-school-navy font-bold rounded-full px-8 shadow-lg shadow-school-gold/25 transition-all duration-300 hover:scale-105"
              >
                <Link href="/innovations" className="flex items-center gap-2">
                  Explore All Innovations
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: hero image */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)] group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-school-gold z-10" />
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3]"
              >
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg"
                  alt="SOSHANGUVE S.o.S FLIGHT 01 — learner-built model aircraft in flight"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-school-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </motion.div>
              {/* Floating label */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-4 py-2">
                  <Plane className="h-4 w-4 text-school-gold" />
                  <span className="text-white text-xs font-bold tracking-wider uppercase">S.o.S Flight 01</span>
                </div>
                <div className="bg-school-gold/90 rounded-full px-3 py-1.5">
                  <span className="text-school-navy text-[10px] font-black tracking-widest uppercase">In Flight</span>
                </div>
              </div>
            </div>
            {/* Gold shadow blob */}
            <div className="absolute -inset-4 bg-school-gold/8 blur-3xl rounded-3xl -z-10" />
          </motion.div>
        </div>

        {/* Bottom: workshop close-up + team celebration side by side */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {/* Workshop image */}
          <div className="relative rounded-2xl overflow-hidden group shadow-xl">
            <div className="relative h-64 sm:h-72">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0011-ai1QlIOBXhquApCz4uZXQXk2hAtphD.jpg"
                alt="Close-up of the SOSHANGUVE S.o.S FLIGHT 01 aircraft on the workshop table with technical drawings"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-0.5">Behind the Build</p>
              <p className="font-serif text-white text-base font-bold leading-snug">Workshop Engineering Process</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-school-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </div>

          {/* Team celebration image */}
          <div className="relative rounded-2xl overflow-hidden group shadow-xl">
            <div className="relative h-64 sm:h-72">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0012-npGbQl41x5FxKUHZ8CBaDZz5Xz2NQC.jpg"
                alt="Learner team celebrating 1st place at the Gauteng SoS Festival with tablets, certificate, and the Flight 01 aircraft"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute top-3 right-3">
                <span className="bg-school-gold text-school-navy text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
                  1st Place
                </span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4">
              <p className="text-white/50 text-[10px] font-bold tracking-widest uppercase mb-0.5">Gauteng SoS Festival 2026</p>
              <p className="font-serif text-white text-base font-bold leading-snug">Champions Celebrating Victory</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-school-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
