"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SEOImage } from "@/components/seo-image"
import { ErrorBoundary } from "react-error-boundary"
import { ArrowUpRight, Check, Crosshair, Sparkles } from "lucide-react"

const stats = [["2019", "Established"], ["700+", "Learners"], ["9", "Programs"]]

export function WelcomeSection() {
  const reduceMotion = useReducedMotion()

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(30,58,138,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.045)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -left-40 top-24 h-80 w-80 rounded-full bg-school-blue/10 blur-3xl" />
        <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between border-b border-school-navy/10 pb-5">
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.26em] text-school-gold">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-school-gold/30 bg-school-gold/5"><Crosshair className="h-3.5 w-3.5" /></span>
              Our Mission
            </div>
            <span className="hidden font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 sm:block">SOS / MISSION 01</span>
          </div>

          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: "easeOut" }}
              className="relative"
            >
              <h2 className="max-w-3xl font-serif text-4xl font-bold leading-[1.04] tracking-[-0.035em] text-school-navy sm:text-5xl lg:text-6xl">
                Engineering the Future, <span className="text-school-blue">One Learner at a Time.</span>
              </h2>
              <div className="mt-7 flex items-center gap-3"><span className="h-1 w-16 bg-school-gold" /><span className="h-px w-20 bg-school-navy/15" /></div>
              <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-school-navy/70">Where Soshanguve&apos;s potential meets the standards of global industry.</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">Our learners do not simply study engineering — they live it. Through practical automotive, electrical, civil, science and mathematics pathways, every workshop becomes a rehearsal for a high-impact career.</p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="group rounded-full bg-school-navy px-7 text-white shadow-lg shadow-school-navy/15 transition-all duration-300 hover:-translate-y-1 hover:bg-school-blue"><Link href="/about" className="flex items-center gap-2">Discover Our Story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button>
                <Button asChild variant="outline" className="rounded-full border-school-navy/20 px-7 text-school-navy transition-all hover:-translate-y-1 hover:bg-school-navy hover:text-white"><Link href="/programs">Explore Programs</Link></Button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 overflow-hidden rounded-2xl border border-school-navy/10 bg-white shadow-sm">
                {stats.map(([value, label], index) => (
                  <div key={label} className={`relative px-4 py-5 ${index < 2 ? "border-r border-school-navy/10" : ""}`}>
                    <div className="absolute left-0 top-0 h-0.5 w-8 bg-school-gold" />
                    <div className="font-serif text-2xl font-bold text-school-navy">{value}</div>
                    <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : 0.08, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative rounded-[2rem] border border-school-navy/10 bg-school-navy p-2 shadow-2xl shadow-school-navy/20">
                <div className="relative overflow-hidden rounded-[1.55rem]">
                  <SEOImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250203-WA0010.jpg-8fDZJnnxBBSs11CDSSdQi7ZzVqoby6.jpeg" alt="Students showcasing their innovative electric car project" width={800} height={540} sizes="(max-width: 1024px) 100vw, 52vw" className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy via-school-navy/5 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-school-navy/45 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-school-gold" /> Live learning</div>
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div><div className="text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">Hands-on innovation</div><p className="mt-1 max-w-xs font-serif text-xl font-semibold leading-tight text-white">Ideas become machines, systems and solutions.</p></div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 sm:flex"><Sparkles className="h-5 w-5 text-school-gold" /></div>
                  </div>
                </div>
              </div>

              <motion.div initial={reduceMotion ? false : { opacity: 0, y: 12 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reduceMotion ? 0 : 0.35 }} className="absolute -bottom-6 -left-5 hidden rounded-2xl border border-school-gold/30 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400"><Check className="h-3 w-3 text-school-gold" /> Learner mindset</div>
                <div className="mt-1 font-serif font-bold text-school-navy">Build. Test. Improve.</div>
              </motion.div>
              <div className="absolute -right-4 -top-4 hidden h-20 w-20 rounded-full border border-school-gold/20 sm:block" />
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
