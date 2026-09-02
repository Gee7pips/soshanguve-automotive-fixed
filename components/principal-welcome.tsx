"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Quote, GraduationCap, Star, Users } from "lucide-react"
import Image from "next/image"

const pillars = [
  { icon: GraduationCap, title: "Academic Excellence", body: "We hold every learner to a high standard because we believe their future deserves nothing less." },
  { icon: Star, title: "Character & Integrity", body: "Technical skill is strongest when paired with honesty, discipline, confidence and purpose." },
  { icon: Users, title: "Community Belonging", body: "Every learner belongs here. Our school is a launchpad for the wider Soshanguve community." },
]

export function PrincipalWelcome() {
  const reduceMotion = useReducedMotion()
  const reveal = (x = 0, delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, x },
    whileInView: reduceMotion ? undefined : { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : delay, ease: "easeOut" as const },
  })

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-school-blue/[0.04] blur-3xl" />
      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div {...reveal(0, 0)} className="mb-14 max-w-3xl lg:mb-20">
          <div className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-school-gold"><span className="h-px w-10 bg-school-gold" /> Leadership</div>
          <h2 className="font-serif text-4xl font-bold leading-tight text-school-navy sm:text-5xl lg:text-6xl">A Word from Our <span className="text-school-blue">Principal</span></h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-500">A school built around high expectations, practical learning and a deep belief in the potential of every learner.</p>
        </motion.div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <motion.div {...reveal(-25, 0.05)}>
            <div className="relative mx-auto max-w-md lg:mx-0">
              <div className="absolute -inset-2 rounded-[2rem] bg-school-gold/20 blur-sm" />
              <div className="relative overflow-hidden rounded-[1.7rem] bg-school-navy p-2 shadow-2xl shadow-school-navy/20">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.35rem]">
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1776384761271-xjUufMTvlcevshZ163NuZ9MaXZesk4.jpg" alt="Mr. T.A. Mashiane, Principal of Soshanguve Engineering School Of Specialisation" fill className="object-cover object-top" sizes="(max-width: 1024px) 100vw, 420px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6"><div className="text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">Principal&apos;s Desk</div><div className="mt-1 font-serif text-2xl font-bold text-white">Mr. T.A. Mashiane</div><div className="mt-1 text-xs text-white/60">Soshanguve Engineering School Of Specialisation</div></div>
                </div>
              </div>
              <div className="relative mt-5 flex items-center gap-4 rounded-2xl border border-school-navy/10 bg-white p-4 shadow-sm"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-school-navy"><GraduationCap className="h-5 w-5 text-school-gold" /></div><div><div className="text-[9px] font-bold uppercase tracking-[0.18em] text-school-gold">School Of Specialisation</div><div className="mt-1 text-sm text-slate-500">Technical education with a future-focused mindset.</div></div></div>
            </div>
          </motion.div>

          <motion.div {...reveal(25, 0.1)} className="rounded-[2rem] border border-school-navy/10 bg-white p-7 shadow-sm sm:p-10 lg:p-12">
            <div className="flex items-start gap-5"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-school-navy shadow-lg"><Quote className="h-5 w-5 fill-school-gold text-school-gold" /></div><h3 className="font-serif text-2xl font-bold leading-snug text-school-navy sm:text-3xl">Welcome to Soshanguve Engineering School Of Specialisation.</h3></div>
            <div className="mt-8 space-y-5 text-[15px] leading-8 text-slate-600"><p>It is my privilege to welcome you to an institution that stands as proof of what becomes possible when a community invests in its children without compromise.</p><p>Our school is more than a curriculum. We equip young people with technical mastery, critical thinking and professional character — the qualities South Africa&apos;s economy needs for the future.</p><p>Our <strong className="text-school-navy">100% matric pass rate for the Class of 2025</strong> demonstrates what can happen when learners are believed in, challenged and supported.</p><p>Whether you are a prospective learner, parent, partner or supporter, I invite you to join us in building something extraordinary. <strong className="text-school-navy">Together, we are unstoppable.</strong></p></div>
            <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6"><div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-school-gold/40 bg-school-navy/5 font-serif font-black text-school-navy">TM</div><div><div className="font-serif text-lg font-bold text-school-navy">Mr. T.A. Mashiane</div><div className="text-[10px] font-bold uppercase tracking-[0.18em] text-school-gold">Principal</div></div></div>
          </motion.div>
        </div>

        <div className="mt-16 lg:mt-20"><div className="mb-8 flex items-center gap-3"><span className="h-px w-8 bg-school-gold/60" /><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">Our Guiding Principles</span><span className="h-px flex-1 bg-slate-200" /></div><div className="grid gap-4 md:grid-cols-3">{pillars.map((pillar, i) => { const Icon = pillar.icon; return <motion.div key={pillar.title} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : i * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="absolute left-0 top-0 h-1 w-full bg-school-gold" /><div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-school-navy/5 transition-colors group-hover:bg-school-navy"><Icon className="h-5 w-5 text-school-navy group-hover:text-school-gold" /></div><h3 className="font-serif text-lg font-bold text-school-navy">{pillar.title}</h3><p className="mt-2 text-sm leading-6 text-slate-500">{pillar.body}</p></motion.div> })}</div></div>
      </div>
    </section>
  )
}
