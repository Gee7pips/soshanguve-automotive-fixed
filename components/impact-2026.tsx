"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, Award, Cpu, Globe2, Users } from "lucide-react"
import Link from "next/link"

const stories = [
  {
    eyebrow: "01 / INNOVATION",
    title: "Flight 01 put engineering on display.",
    text: "Learners designed, assembled and successfully flew a battery-powered model aircraft, turning classroom principles into a working project.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg",
    alt: "Soshanguve Engineering learners' Flight 01 aircraft in flight",
    icon: Cpu,
  },
  {
    eyebrow: "02 / RECOGNITION",
    title: "Technical talent is being recognised.",
    text: "From engineering projects to mathematics achievement, learners are building a record of academic and practical excellence.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0018-6c8mSu5UhQricouUACyKwlgUZ68ff4.jpg",
    alt: "Learner receiving mathematics achievement recognition",
    icon: Award,
  },
  {
    eyebrow: "03 / COMMUNITY",
    title: "Support is becoming opportunity.",
    text: "Partnerships around connectivity, learner support and community programmes are helping expand what learners can access.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0020-SYPUiWO0yYLtCcruvuwvDkEaJEcFDq.jpg",
    alt: "School partnership and learner support event",
    icon: Users,
  },
  {
    eyebrow: "04 / GLOBAL",
    title: "The pathway is getting bigger.",
    text: "New partnerships and industry exposure are connecting technical education with the wider world of work, technology and enterprise.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0021-Wdylez7JBZv7L82Jtt5wlNrnNke4rY.jpg",
    alt: "Learners working with robotics equipment",
    icon: Globe2,
  },
]

const metrics = [
  ["100%", "2025 matric pass"],
  ["700+", "Learner capacity"],
  ["2026", "Innovation in motion"],
  ["01", "National challenge win"],
]

export function Impact2026() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="homepage-section section-impact relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,58,138,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.045)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-school-gold/10 blur-3xl" />
      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3"><span className="h-px w-10 bg-school-gold" /><span className="text-[10px] font-bold uppercase tracking-[0.28em] text-school-gold">2026 / IMPACT SNAPSHOT</span></div>
            <h2 className="max-w-4xl font-serif text-4xl font-bold leading-[1.04] text-school-navy sm:text-5xl lg:text-6xl">What the year is <span className="text-school-blue">building.</span></h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">A growing engineering culture is showing up in projects, recognition, partnerships and the everyday opportunities learners experience on campus.</p>
          </div>
          <Link href="/innovations" className="inline-flex w-fit items-center gap-2 rounded-full border border-school-navy/15 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-school-navy transition hover:-translate-y-0.5 hover:border-school-gold hover:bg-school-navy hover:text-white">View Innovation Lab <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="mb-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-school-navy/10 bg-white shadow-[0_24px_70px_-40px_rgba(15,23,42,.35)] sm:grid-cols-4">
          {metrics.map(([value, label], index) => (
            <motion.div key={label} initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.05 }} className="relative border-school-navy/10 p-5 sm:p-6 [&:not(:last-child)]:border-r [&:nth-child(-n+2)]:border-b sm:[&:nth-child(-n+2)]:border-b-0">
              <div className="font-serif text-3xl font-bold text-school-navy sm:text-4xl">{value}</div>
              <div className="mt-2 text-[9px] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {stories.map((story, index) => {
            const Icon = story.icon
            return (
              <motion.article key={story.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.06 }} className="group overflow-hidden rounded-[1.75rem] border border-school-navy/10 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-school-gold/40 hover:shadow-2xl">
                <div className="grid sm:grid-cols-[.92fr_1.08fr]">
                  <div className="relative min-h-60 overflow-hidden bg-school-navy">
                    <Image src={story.image} alt={story.alt} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 45vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-school-navy/75 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-school-navy/45 text-school-gold backdrop-blur"><Icon className="h-4 w-4" /></div>
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:p-7">
                    <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-school-gold">{story.eyebrow}</span>
                    <h3 className="mt-3 font-serif text-2xl font-bold leading-tight text-school-navy">{story.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{story.text}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
