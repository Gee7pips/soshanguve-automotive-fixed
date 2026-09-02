"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Plane, Cpu, Car, Trophy, Zap, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

const projects = [
  { number: "01", icon: Plane, title: "S.o.S Flight 01", category: "Aerospace Engineering", description: "A learner-engineered, battery-powered aircraft bringing aerodynamics, electronics and fabrication together in one ambitious project.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg" },
  { number: "02", icon: Car, title: "Electric Mobility", category: "Automotive Innovation", description: "Practical projects that turn automotive theory into working systems, with learners exploring electric power, vehicle systems and sustainable mobility.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-09-11-30-31-91_a23b203fd3aafc6dcb84e438dda678b6.jpg-yt5q9iMB6WMqsswYXx2nfIzyVxfTrN.jpeg" },
  { number: "03", icon: Cpu, title: "Robotics & Automation", category: "Industry 4.0", description: "Coding, robotics, PLCs and digital systems give learners a practical foundation for the automated workplaces of tomorrow.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739092938017.jpg-wXZYdCdK9Z49HGVIidqamZyRyAwmrS.jpeg" },
]

const principles = [
  { icon: Wrench, title: "Build", text: "Learners move beyond theory and create working prototypes." },
  { icon: Zap, title: "Experiment", text: "Curiosity is turned into practical engineering challenges." },
  { icon: Trophy, title: "Compete", text: "Projects are tested against real standards and real peers." },
]

export default function InnovationsPage() {
  const reducedMotion = useReducedMotion()

  return (
    <main className="min-h-screen bg-white">
      <PageHeader title="Innovation & Engineering" description="Discover the projects where Soshanguve learners turn ideas into machines, systems and solutions." />
      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#0b1836 1px, transparent 1px), linear-gradient(90deg, #0b1836 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative z-10 container mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="mb-16 max-w-3xl">
            <div className="mb-5 flex items-center gap-3"><span className="h-px w-8 bg-school-gold" /><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-school-gold">Innovation Lab</span></div>
            <h1 className="font-serif text-4xl font-bold leading-tight text-school-navy sm:text-5xl lg:text-6xl">Ideas become <span className="text-school-gold">engineering.</span></h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">Our innovation culture is built around doing. Learners combine technical subjects, creativity and teamwork to solve problems with their own hands.</p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon
              return <motion.article key={project.title} initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08 }} className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 33vw" /><div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-school-navy/10 to-transparent" /><div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-school-navy/85 px-3 py-1.5"><Icon className="h-3.5 w-3.5 text-school-gold" /><span className="text-[10px] font-bold uppercase tracking-widest text-white">{project.category}</span></div><span className="absolute bottom-4 right-4 font-serif text-5xl font-black text-white/20">{project.number}</span></div>
                <div className="p-6"><h2 className="font-serif text-2xl font-bold text-school-navy">{project.title}</h2><div className="my-4 h-0.5 w-8 bg-school-gold" /><p className="leading-relaxed text-gray-600">{project.description}</p></div>
              </motion.article>
            })}
          </div>
        </div>
      </section>
      <section className="bg-school-navy py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item, index) => { const Icon = item.icon; return <motion.div key={item.title} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reducedMotion ? 0 : index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors hover:border-school-gold/40"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-school-gold/15"><Icon className="h-5 w-5 text-school-gold" /></div><h3 className="mb-2 font-serif text-xl font-bold text-white">{item.title}</h3><p className="text-sm leading-relaxed text-white/55">{item.text}</p></motion.div> })}
          </div>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-school-gold">Ready to build?</p><h2 className="mt-2 font-serif text-2xl font-bold text-white sm:text-3xl">Explore the programmes behind the projects.</h2></div><Button asChild className="rounded-full bg-school-gold px-7 font-bold text-school-navy hover:bg-school-gold/90"><Link href="/programs">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div>
        </div>
      </section>
    </main>
  )
}
