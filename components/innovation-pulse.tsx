"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Cpu, Gauge, Orbit, Radio, Sparkles, Wrench } from "lucide-react"
import Link from "next/link"

const signals = [
  { icon: Cpu, index: "01", title: "Engineering", text: "Technical thinking built through real projects.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0012-npGbQl41x5FxKUHZ8CBaDZz5Xz2NQC.jpg", alt: "Soshanguve Engineering learners celebrating an engineering achievement" },
  { icon: Wrench, index: "02", title: "Workshop", text: "Hands-on learning that turns theory into capability.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0011-ai1QlIOBXhquApCz4uZXQXk2hAtphD.jpg", alt: "Learners working on an engineering aircraft project" },
  { icon: Orbit, index: "03", title: "Aerospace", text: "Big ambition taking shape beyond the classroom.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg", alt: "Soshanguve Engineering Flight 01 aircraft in flight" },
  { icon: Gauge, index: "04", title: "Future Skills", text: "Career-ready foundations for a changing world.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0021-Wdylez7JBZv7L82Jtt5wlNrnNke4rY.jpg", alt: "Learners working with robotics equipment" },
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
              <motion.div key={signal.index} initial={{ opacity: 0, y: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.07 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-2 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/40 hover:bg-white/[0.08]">
                <div className="relative h-36 overflow-hidden rounded-xl bg-slate-900">
                  <Image src={signal.image} alt={signal.alt} fill className="object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy via-school-navy/10 to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/20 px-2 py-1 font-mono text-[8px] text-white/60 backdrop-blur">{signal.index}</span>
                  <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg border border-school-gold/30 bg-school-navy/60"><Icon className="h-3.5 w-3.5 text-school-gold" /></span>
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-2xl font-bold">{signal.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/55">{signal.text}</p>
                  <div className="mt-5 h-px w-8 bg-school-gold transition-all duration-500 group-hover:w-full" />
                </div>
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
