"use client"

import { Hero } from "@/components/hero"
import { MatricResultsSection } from "@/components/matric-results-section"
import { WelcomeSection } from "@/components/welcome-section"
import { PrincipalWelcome } from "@/components/principal-welcome"
import { CampusLife } from "@/components/campus-life"
import { AchievementsSection } from "@/components/achievements-section"
import { NewsAndUpdates2026 } from "@/components/news-and-updates-2026"
import { InnovationSection } from "@/components/innovation-section"
import { AirplaneInnovation } from "@/components/airplane-innovation"
import { SubjectOfferings } from "@/components/subject-offerings"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VideoSection } from "@/components/video-section"
import { LiveTicker } from "@/components/live-ticker"
import { InnovationPulse } from "@/components/innovation-pulse"
import { Highlights2026 } from "@/components/highlights-2026"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, Compass, Cpu, GraduationCap, Wrench } from "lucide-react"
import { SectionDivider } from "@/components/section-motion"

const stats = [
  { label: "Matric Pass Rate", value: "100%", description: "2025 Results" },
  { label: "Student Capacity", value: "700+", description: "Learners" },
  { label: "Specialized Programs", value: "Technical", description: "Engineering & Technology" },
  { label: "Years of Excellence", value: "7+", description: "Since 2019" },
]

const pillars = [
  { icon: Wrench, label: "Hands-on", text: "Practical technical learning" },
  { icon: Cpu, label: "Innovation", text: "Build. Test. Improve." },
  { icon: GraduationCap, label: "Excellence", text: "Academic & career readiness" },
  { icon: Compass, label: "Purpose", text: "Skills for South Africa's future" },
]

export default function HomePageClient() {
  const reduceMotion = useReducedMotion()

  return (
    <div className="bg-white">
      <Hero />
      <SectionDivider tone="dark" label="Discover" />
      <LiveTicker />
      <SectionDivider label="Achievement" />
      <MatricResultsSection />
      <SectionDivider tone="dark" label="Our Mission" />
      <WelcomeSection />
      <SectionDivider tone="dark" label="Innovation Pulse" />
      <InnovationPulse />
      <SectionDivider label="Leadership" />
      <PrincipalWelcome />
      <SectionDivider tone="dark" label="Innovation" />
      <InnovationSection />
      <SectionDivider tone="dark" label="Aerospace" />
      <AirplaneInnovation />
      <SectionDivider label="Learning Pathways" />
      <SubjectOfferings />
      <SectionDivider tone="dark" label="Campus Life" />
      <CampusLife />
      <SectionDivider label="Our Story" />
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,58,138,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.05)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-school-gold/10 blur-3xl" />
        <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 flex flex-col gap-5 border-b border-school-navy/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3"><span className="h-px w-10 bg-school-gold" /><span className="text-[11px] font-bold uppercase tracking-[0.24em] text-school-gold">The SOS Difference</span></div>
              <h2 className="max-w-3xl font-serif text-4xl font-bold leading-[1.08] text-school-navy sm:text-5xl lg:text-6xl">Where Township Ambition Meets World-Class Engineering</h2>
            </div>
            <div className="hidden rounded-full border border-school-navy/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-school-navy/55 shadow-sm sm:block">Tshwane · Gauteng · South Africa</div>
          </div>
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.7 }} className="space-y-6">
              <p className="max-w-2xl text-lg font-medium leading-relaxed text-school-navy/75">With a long educational legacy in Tshwane, Soshanguve Engineering School Of Specialisation was formally relaunched as an engineering School of Specialisation in 2019, with a focus on automotive and technical education.</p>
              <p className="max-w-2xl text-base leading-8 text-slate-600">The school provides technical and engineering education for learners from Soshanguve and surrounding communities. Its practical focus includes automotive, mechanical, civil and electrical technology, supported by mathematics, sciences and project-based learning.</p>
              <div className="flex flex-wrap gap-3 pt-2"><Button asChild className="group rounded-full bg-school-navy px-7 text-white shadow-lg shadow-school-navy/15 transition-all duration-300 hover:-translate-y-1 hover:bg-school-blue"><Link href="/about" className="flex items-center gap-2">Learn More <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button><Button asChild variant="outline" className="rounded-full border-school-navy/20 px-7 text-school-navy transition-all duration-300 hover:-translate-y-1 hover:bg-school-navy hover:text-white"><Link href="/contact">Contact Us</Link></Button></div>
              <div className="grid max-w-2xl grid-cols-2 gap-3 pt-3 sm:grid-cols-4">{pillars.map((pillar, index) => { const Icon = pillar.icon; return <motion.div key={pillar.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: reduceMotion ? 0 : 0.45, delay: reduceMotion ? 0 : index * 0.06 }} className="rounded-2xl border border-school-navy/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-lg"><Icon className="h-5 w-5 text-school-gold" /><p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-school-navy">{pillar.label}</p><p className="mt-1 text-[11px] leading-5 text-slate-500">{pillar.text}</p></motion.div> })}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.1 }} className="grid grid-cols-2 gap-4">{stats.map((stat, index) => <motion.div key={stat.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : index * 0.08 }} className="group relative overflow-hidden rounded-2xl border border-school-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:shadow-xl"><div className="absolute inset-x-0 top-0 h-1 bg-school-gold/80" /><div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-school-gold/10 blur-2xl transition-transform duration-500 group-hover:scale-150" /><p className="relative font-serif text-4xl font-bold leading-none text-school-navy sm:text-5xl">{stat.value}</p><p className="relative mt-3 text-sm font-bold text-school-navy">{stat.label}</p><p className="relative mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{stat.description}</p><CheckCircle2 className="absolute bottom-5 right-5 h-4 w-4 text-school-gold/60" /></motion.div>)}</motion.div>
          </div>
        </div>
      </section>
      <SectionDivider tone="dark" label="Recognition" />
      <AchievementsSection />
      <SectionDivider tone="dark" label="2026 / Field Notes" />
      <Highlights2026 />
      <SectionDivider label="Latest" />
      <NewsAndUpdates2026 />
      <SectionDivider tone="dark" label="Inside SOS" />
      <VideoSection />
    </div>
  )
}
