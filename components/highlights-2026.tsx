"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, CalendarDays, Trophy, Users, Sparkles, Globe2 } from "lucide-react"
import Link from "next/link"

const moments = [
  {
    date: "JAN — FEB 2026",
    label: "Excellence",
    title: "100% Matric. A new year opened with proof of what is possible.",
    text: "The Class of 2025's 100% NSC pass rate was celebrated with awards, certificates and recognition for high-achieving learners — setting the tone for 2026.",
    icon: Trophy,
  },
  {
    date: "FEB 2026",
    label: "Community",
    title: "Partners showed up for learners.",
    text: "The school welcomed the Black Coffee Foundation and Gautrain for a meaningful learner-support initiative, including a full school-uniform donation.",
    icon: Users,
  },
  {
    date: "05 JUN 2026",
    label: "Youth Day",
    title: "1,200+ learners. One campus. A bigger view of the future.",
    text: "BMW Group South Africa, UNICEF South Africa and education partners brought career guidance, STEM activities, digital learning and mentorship to Soshanguve Engineering SOS.",
    icon: Sparkles,
  },
  {
    date: "16 JUL 2026",
    label: "Future Nation",
    title: "1st place at the 2026 Future Nation Business Challenge.",
    text: "Soshanguve Engineering SOS took the top spot in the FNBC 2026 Exposition Competition and won R15,000 — another signal that technical learning can become real-world enterprise.",
    icon: Trophy,
  },
  {
    date: "26 JUL 2026",
    label: "Global Pathways",
    title: "New-energy vehicle learning goes international.",
    text: "The school formalised a partnership with Shanghai Caoyang Vocational School around international training and new-energy vehicle drive-system maintenance.",
    icon: Globe2,
  },
]

export function Highlights2026() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-school-navy py-24 text-white lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.045)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-school-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-school-gold/10 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-school-gold"><span className="h-px w-10 bg-school-gold" /><span className="text-[11px] font-bold uppercase tracking-[0.28em]">SOS / 2026 FIELD NOTES</span></div>
            <h2 className="max-w-4xl font-serif text-4xl font-bold leading-[1.04] sm:text-5xl lg:text-7xl">A year of <span className="text-school-gold">momentum.</span></h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">From academic excellence and community support to a 1st-place national business challenge and a global new-energy vehicle pathway, 2026 has been a year of movement for Soshanguve Engineering School Of Specialisation.</p>
          </div>
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60 backdrop-blur"><CalendarDays className="h-4 w-4 text-school-gold" /> 2026 / LIVE STORY</div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/20 p-2 shadow-2xl shadow-black/30">
            <div className="relative flex min-h-[27rem] flex-col justify-between overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-[#102f56] via-[#0b1d39] to-[#07162b] p-7 sm:p-9">
              <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.10)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.10)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full border border-school-gold/20" />
              <div className="pointer-events-none absolute -right-5 top-[-2rem] h-52 w-52 rounded-full border border-white/10" />
              <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-school-blue/25 blur-3xl" />
              <div className="relative flex items-center justify-between gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-school-gold">2026 / National recognition</p>
                <span className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/55">Field note 04</span>
              </div>
              <div className="relative mt-10 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="font-serif text-[7rem] font-bold leading-[.8] tracking-[-.08em] text-white sm:text-[9rem]">1<span className="text-school-gold">st</span></div>
                  <p className="mt-5 max-w-sm font-serif text-2xl font-bold leading-tight text-white sm:text-3xl">Future Nation Business Challenge</p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">A school idea moved from technical learning into a national enterprise challenge.</p>
                </div>
                <div className="flex shrink-0 flex-col items-start rounded-2xl border border-school-gold/25 bg-school-gold/10 px-5 py-4 backdrop-blur">
                  <Trophy className="mb-3 h-6 w-6 text-school-gold" />
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">Prize awarded</span>
                  <span className="mt-1 font-serif text-3xl font-bold text-school-gold">R15,000</span>
                </div>
              </div>
              <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">Soshanguve Engineering SOS</span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-school-gold"><ArrowUpRight className="h-5 w-5" /></span>
              </div>
            </div>
          </motion.div>

          <div className="space-y-3">
            {moments.map((moment, index) => {
              const Icon = moment.icon
              return <motion.article key={moment.title} initial={{ opacity: 0, x: reduceMotion ? 0 : 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.05 }} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-school-gold/40 hover:bg-white/[0.06] sm:p-6"><div className="flex gap-4"><div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-school-gold/20 bg-school-gold/10 text-school-gold"><Icon className="h-4 w-4" /></div><div className="min-w-0"><div className="flex flex-wrap items-center gap-x-3 gap-y-1"><span className="text-[9px] font-bold uppercase tracking-[0.22em] text-school-gold">{moment.label}</span><span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">{moment.date}</span></div><h3 className="mt-2 font-serif text-lg font-bold leading-snug text-white sm:text-xl">{moment.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{moment.text}</p></div></div></motion.article>
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">Youth Day / 05 June</span>
            <p className="mt-3 font-serif text-4xl font-bold text-white">1,200<span className="text-school-gold">+</span></p>
            <p className="mt-1 text-xs leading-5 text-white/45">Learners reached through career guidance, STEM and mentorship activity</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">Academic excellence</span>
            <p className="mt-3 font-serif text-4xl font-bold text-white">100<span className="text-school-gold">%</span></p>
            <p className="mt-1 text-xs leading-5 text-white/45">Class of 2025 National Senior Certificate pass rate</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">International pathway</span>
            <p className="mt-3 font-serif text-4xl font-bold text-white">Global</p>
            <p className="mt-1 text-xs leading-5 text-white/45">New-energy vehicle training partnership with Shanghai Caoyang</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-white/45">2026 is a living record of achievement, people, partnerships and learner opportunity — told through the school's milestones and outcomes.</p><Link href="/achievements" className="inline-flex w-fit items-center gap-2 rounded-full border border-school-gold/40 bg-school-gold/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-school-gold transition hover:bg-school-gold hover:text-school-navy">Explore Achievements <ArrowUpRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  )
}
