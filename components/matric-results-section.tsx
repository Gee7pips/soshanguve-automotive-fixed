"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { Star, Heart, Users, BookOpen, Award } from "lucide-react"

const thankYouCards = [
  { icon: Users, title: "Our Learners", description: "Your resilience, brilliance, and late-night sacrifices made this possible. You showed up every day and gave everything." },
  { icon: BookOpen, title: "Our Teachers", description: "Thank you for going beyond the classroom — for your patience, dedication, and unwavering belief in every learner." },
  { icon: Heart, title: "Parents & Families", description: "Your prayers, support, and encouragement carried these young people through their most challenging moments." },
  { icon: Star, title: "Our Community", description: "Soshanguve stood behind its children. This achievement is a reflection of a community that refuses to give up." },
  { icon: Award, title: "The GDE", description: "We are grateful to the Gauteng Department of Education for continued partnership, resources, and guidance throughout this journey." },
]

export function MatricResultsSection() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: reduceMotion ? undefined : { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  })

  return (
    <section className="relative overflow-hidden bg-school-navy">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0zm40 0h-1v40h1zM0 0v1h40V0zm0 40v-1h40v1z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 px-6 pb-16 pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div {...reveal()} className="mb-6 flex items-center justify-center gap-3"><span className="h-px w-10 bg-school-gold" /><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-school-gold">Academic Results — 2024</span><span className="h-px w-10 bg-school-gold" /></motion.div>
          <motion.h2 {...reveal(0.06)} className="mb-4 font-serif text-3xl font-bold leading-tight text-white text-balance sm:text-4xl lg:text-5xl">Soshanguve Engineering School Of Specialisation: <span className="text-school-gold">Class of 2024</span></motion.h2>
          <motion.div initial={reduceMotion ? false : { scaleX: 0 }} whileInView={reduceMotion ? undefined : { scaleX: 1 }} viewport={{ once: true }} transition={{ duration: reduceMotion ? 0 : 0.5 }} className="mx-auto mb-10 h-0.5 w-24 origin-center bg-school-gold" />
          <motion.div {...reveal(0.12)} className="mb-10 inline-flex flex-col items-center gap-1 rounded-2xl border-2 border-school-gold bg-school-gold/10 px-10 py-6"><span className="font-serif text-6xl font-black leading-none tracking-tight text-school-gold sm:text-7xl">99.3%</span><span className="text-lg font-bold uppercase tracking-widest text-white">Pass Rate</span></motion.div>
          <motion.p {...reveal(0.18)} className="mx-auto mb-14 max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl">The <span className="font-semibold text-white">Class of 2024</span> achieved a <span className="font-bold text-school-gold">99.3% matric pass rate</span>, reflecting the commitment of learners, educators, families and the wider school community.</motion.p>
          <motion.div {...reveal(0.24)} className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-school-gold/30 shadow-2xl"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1774649920765-lfbyIQmPmwM2W9yYP54Zv87DmjZmZM.jpg" alt="Soshanguve Engineering School Of Specialisation matric results celebration" width={900} height={506} sizes="(max-width: 768px) 100vw, 768px" className="h-auto w-full object-cover" priority /><div className="absolute inset-x-0 bottom-0 bg-black/60 py-3 px-5 text-center"><p className="text-sm font-semibold tracking-wide text-white">Celebrating the Class of 2024 — Soshanguve Engineering School Of Specialisation</p></div></motion.div>
        </div>
      </div>

      <div className="relative z-10 mx-auto h-px max-w-5xl bg-school-gold/20" />
      <div className="relative z-10 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <motion.div {...reveal()} className="mb-12 text-center"><div className="mb-4 flex items-center justify-center gap-3"><span className="h-px w-8 bg-school-gold" /><span className="text-[11px] font-bold uppercase tracking-[0.2em] text-school-gold">With Gratitude</span><span className="h-px w-8 bg-school-gold" /></div><h3 className="mb-3 font-serif text-2xl font-bold text-white sm:text-3xl">It Takes a Village</h3><p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70">This achievement did not happen in isolation. We extend our deepest gratitude to everyone who supported our learners.</p></motion.div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {thankYouCards.map((card, index) => { const Icon = card.icon; return <motion.div key={card.title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.06 }} className="group relative flex gap-4 rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-school-gold/40 hover:bg-white/10"><div className="absolute bottom-4 left-0 top-4 w-0.5 rounded-full bg-school-gold/60 transition-colors duration-300 group-hover:bg-school-gold" /><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-school-gold/15 transition-colors duration-300 group-hover:bg-school-gold/25"><Icon className="h-5 w-5 text-school-gold" /></div><div><h4 className="mb-1.5 text-sm font-semibold text-white">{card.title}</h4><p className="text-sm leading-relaxed text-white/60">{card.description}</p></div></motion.div> })}
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 pb-20"><motion.div {...reveal()} className="mx-auto max-w-3xl text-center"><div className="mb-10 flex items-center gap-4"><div className="h-px flex-1 bg-school-gold/25" /><div className="h-2 w-2 rounded-full bg-school-gold" /><div className="h-px flex-1 bg-school-gold/25" /></div><p className="mb-2 select-none font-serif text-6xl leading-none text-school-gold">&ldquo;</p><p className="mb-6 font-serif text-xl font-medium leading-snug text-white text-balance sm:text-2xl lg:text-3xl">Strong results are built by <span className="text-school-gold">learners, teachers and community</span> working together.</p><div className="mt-6 flex items-center justify-center gap-3"><span className="h-px w-6 bg-school-gold/50" /><span className="text-sm font-medium uppercase tracking-wider text-white/50">Soshanguve Engineering School Of Specialisation</span><span className="h-px w-6 bg-school-gold/50" /></div></motion.div></div>
    </section>
  )
}
