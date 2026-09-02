"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, Plane, Cpu, Car, Trophy, Zap, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"

const projects = [
  {
    number: "01",
    icon: Plane,
    title: "S.o.S Flight 01",
    category: "Aerospace Engineering",
    description: "A learner-engineered, battery-powered aircraft bringing aerodynamics, electronics and fabrication together in one ambitious project.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg",
  },
  {
    number: "02",
    icon: Car,
    title: "Electric Mobility",
    category: "Automotive Innovation",
    description: "Practical projects that turn automotive theory into working systems, with learners exploring electric power, vehicle systems and sustainable mobility.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-09-11-30-31-91_a23b203fd3aafc6dcb84e438dda678b6.jpg-yt5q9iMB6WMqsswYXx2nfIzyVxfTrN.jpeg",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Robotics & Automation",
    category: "Industry 4.0",
    description: "Coding, robotics, PLCs and digital systems give learners a practical foundation for the automated workplaces of tomorrow.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739092938017.jpg-wXZYdCdK9Z49HGVIidqamZyRyAwmrS.jpeg",
  },
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
      <PageHeader
        title="Innovation & Engineering"
        description="Discover the projects where Soshanguve learners turn ideas into machines, systems and solutions."
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg"
      />

      <section className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#0b1836 1px, transparent 1px), linear-gradient(90deg, #0b1836 1px, transparent 1px)", backgroundSize: "44px 44px" }} />
        <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 24 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-5"><span className="h-px w-8 bg-school-gold" /><span className="text-[11px] font-bold tracking-[0.22em] uppercase text-school-gold">Innovation Lab</span></div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-school-navy leading-tight">Ideas become <span className="text-school-gold">engineering.</span></h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">Our innovation culture is built around doing. Learners combine technical subjects, creativity and teamwork to solve problems with their own hands.</p>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <motion.article key={project.title} initial={reducedMotion ? false : { opacity: 0, y: 30 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: reducedMotion ? 0 : index * 0.08 }} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all duration-400">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 1024px) 100vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-school-navy/10 to-transparent" />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-school-navy/85 px-3 py-1.5 backdrop-blur-sm"><Icon className="h-3.5 w-3.5 text-school-gold" /><span className="text-[10px] font-bold uppercase tracking-widest text-white">{project.category}</span></div>
                    <span className="absolute bottom-4 right-4 font-serif text-5xl font-black text-white/20">{project.number}</span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl font-bold text-school-navy">{project.title}</h2>
                    <div className="w-8 h-0.5 bg-school-gold my-4" />
                    <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-school-navy py-20 lg:py-24">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon
              return <motion.div key={item.title} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={reducedMotion ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: reducedMotion ? 0 : index * 0.08 }} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 hover:border-school-gold/40 transition-colors"><div className="h-11 w-11 rounded-xl bg-school-gold/15 flex items-center justify-center mb-5"><Icon className="h-5 w-5 text-school-gold" /></div><h3 className="font-serif text-xl font-bold text-white mb-2">{item.title}</h3><p className="text-white/55 leading-relaxed text-sm">{item.text}</p></motion.div>
            })}
          </div>
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 pt-10">
            <div><p className="text-school-gold text-[10px] font-bold uppercase tracking-[0.2em]">Ready to build?</p><h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">Explore the programmes behind the projects.</h2></div>
            <Button asChild className="rounded-full bg-school-gold text-school-navy hover:bg-school-gold/90 font-bold px-7"><Link href="/programs">Explore Programs <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </main>
  )
}
