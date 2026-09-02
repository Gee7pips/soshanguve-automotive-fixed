"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Cpu, Gauge, Orbit, Radio, Sparkles, Wrench } from "lucide-react"
import Link from "next/link"

const signals = [
  { icon: Cpu, index: "01", title: "Engineering", text: "Technical thinking built through real projects." },
  { icon: Wrench, index: "02", title: "Workshop", text: "Hands-on learning that turns theory into capability." },
  { icon: Orbit, index: "03", title: "Aerospace", text: "Big ambition taking shape beyond the classroom." },
  { icon: Gauge, index: "04", title: "Future Skills", text: "Career-ready foundations for a changing world." },
]

export function InnovationPulse() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-school-navy py-20 text-white lg:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-school-blue/20 blur-3xl" />
      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-school-gold"><span className="flex h-7 w-7 items-center justify-center rounded-full border border-school-gold/30"><Radio className="h-3.5 w-3.5" /></span> Innovation Pulse</div>
            <h2 className="max-w-3xl font-serif text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">A school designed to <span className="text-school-gold">build what&apos;s next.</span></h2>
          </div>
          <div className="flex items-center gap-3 text-[9px] font-mono uppercase tracking-[0.2em] text-white/45"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-school-gold" /> Systems online / 2026</div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((signal, index) => {
            const Icon = signal.icon
            return (
              <motion.div key={signal.index} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.07 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/40 hover:bg-white/[0.08]">
                <div className="mb-10 flex items-center justify-between"><span className="font-mono text-[9px] text-white/35">{signal.index}</span><span className="flex h-9 w-9 items-center justify-center rounded-xl border border-school-gold/20 bg-school-gold/5"><Icon className="h-4 w-4 text-school-gold" /></span></div>
                <h3 className="font-serif text-2xl font-bold">{signal.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/55">{signal.text}</p>
                <div className="mt-6 h-px w-8 bg-school-gold transition-all duration-500 group-hover:w-full" />
              </motion.div>
            )
          })}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/10 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3"><Sparkles className="h-4 w-4 text-school-gold" /><span className="text-sm font-medium text-white/70">Explore the projects, pathways and people behind the vision.</span></div>
          <Link href="/innovations" className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-school-gold">View Innovation Lab <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </div>
      </div>
    </section>
  )
}
