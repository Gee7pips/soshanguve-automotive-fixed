"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SEOImage } from "@/components/seo-image"
import { ErrorBoundary } from "react-error-boundary"
import { ArrowUpRight, Sparkles } from "lucide-react"

export function WelcomeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const imageY = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 0 : 36, reduceMotion ? 0 : -36])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <section ref={containerRef} className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,58,138,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.05)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.7, ease: "easeOut" }} className="relative">
              <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-school-gold"><span className="h-px w-10 bg-school-gold" /> Our Mission</div>
              <h2 className="font-serif text-4xl font-bold leading-[1.08] text-school-navy sm:text-5xl lg:text-6xl">Engineering the Future, <span className="text-school-blue">One Learner at a Time.</span></h2>
              <div className="mt-7 h-1 w-16 bg-school-gold" />
              <p className="mt-7 text-lg font-medium leading-relaxed text-school-navy/70">Where Soshanguve&apos;s potential meets the standards of global industry.</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">Our learners do not simply study engineering — they live it. Through practical automotive, electrical, civil, science and mathematics pathways, every workshop becomes a rehearsal for a high-impact career.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="group rounded-full bg-school-navy px-7 text-white shadow-lg shadow-school-navy/15 transition-all duration-300 hover:-translate-y-1 hover:bg-school-blue"><Link href="/about" className="flex items-center gap-2">Discover Our Story <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button>
                <Button asChild variant="outline" className="rounded-full border-school-navy/20 px-7 text-school-navy transition-all hover:-translate-y-1 hover:bg-school-navy hover:text-white"><Link href="/programs">Explore Programs</Link></Button>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-school-navy/10 py-5">
                {[['2019','Established'],['700+','Learners'],['9','Programs']].map(([value,label]) => <div key={label} className="border-r border-school-navy/10 px-4 first:pl-0 last:border-0"><div className="font-serif text-2xl font-bold text-school-navy">{value}</div><div className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div></div>)}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1, ease: "easeOut" }} className="relative">
              <motion.div style={{ y: imageY }} className="relative overflow-hidden rounded-[2rem] border border-school-navy/10 bg-school-navy p-3 shadow-2xl shadow-school-navy/15">
                <div className="relative overflow-hidden rounded-[1.5rem]">
                  <SEOImage src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250203-WA0010.jpg-8fDZJnnxBBSs11CDSSdQi7ZzVqoby6.jpeg" alt="Students showcasing their innovative electric car project" width={800} height={540} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div><div className="text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">Hands-on innovation</div><p className="mt-1 max-w-xs font-serif text-lg font-semibold text-white">Ideas become machines, systems and solutions.</p></div>
                    <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur sm:flex"><Sparkles className="h-5 w-5 text-school-gold" /></div>
                  </div>
                </div>
              </motion.div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-school-gold/30 bg-white p-4 shadow-xl sm:block"><div className="text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">Learner mindset</div><div className="mt-1 font-serif font-bold text-school-navy">Build. Test. Improve.</div></div>
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
