"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, CalendarDays, Trophy, Users, Sparkles, Globe2, ImageIcon } from "lucide-react"
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

const gallery = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg", alt: "Soshanguve Engineering School Flight 01 aircraft in flight", label: "Flight 01" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0012-npGbQl41x5FxKUHZ8CBaDZz5Xz2NQC.jpg", alt: "Soshanguve Engineering learners celebrating engineering achievement", label: "Recognition" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0021-Wdylez7JBZv7L82Jtt5wlNrnNke4rY.jpg", alt: "Soshanguve Engineering learners working with robotics equipment", label: "Robotics" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0020-SYPUiWO0yYLtCcruvuwvDkEaJEcFDq.jpg", alt: "Soshanguve Engineering School partnership event", label: "Partnerships" },
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
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-900">
              <Image src={gallery[0].src} alt={gallery[0].alt} width={1400} height={900} className="aspect-[10/7] w-full object-cover transition duration-700 group-hover:scale-[1.025]" sizes="(max-width: 1024px) 100vw, 52vw" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-school-navy/5 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-school-gold">{gallery[0].label} / 2026</p><p className="mt-2 max-w-sm font-serif text-xl font-bold leading-tight sm:text-2xl">Engineering education is moving beyond the classroom.</p></div>
                <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur sm:flex"><ArrowUpRight className="h-5 w-5" /></div>
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

        <div className="mt-14">
          <div className="mb-5 flex items-center gap-3"><ImageIcon className="h-4 w-4 text-school-gold" /><span className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">2026 / Visual archive</span></div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {gallery.slice(1).map((item, index) => <motion.div key={item.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06 }} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-1"><div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-900"><Image src={item.src} alt={item.alt} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 640px) 50vw, 25vw" /><div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent" /><span className="absolute bottom-3 left-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white">{item.label}</span></div></motion.div>)}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-xl text-sm leading-6 text-white/45">2026 is presented as a living story — achievements, people, partnerships and learner opportunity — with working imagery rather than a placeholder collage.</p><Link href="/achievements" className="inline-flex w-fit items-center gap-2 rounded-full border border-school-gold/40 bg-school-gold/10 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-school-gold transition hover:bg-school-gold hover:text-school-navy">Explore Achievements <ArrowUpRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  )
}
