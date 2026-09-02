"use client"

import { motion, useReducedMotion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Star, Award, Zap, Train, Lightbulb, ArrowRight } from "lucide-react"
import Image from "next/image"

const achievements = [
  { icon: Zap, title: "Electric Car Project", description: "Student-designed and built electric car, showcased at the GDE SOS Festival" },
  { icon: Train, title: "Solar-Powered Train", description: "Innovative student-built locomotive reaching speeds of 30km/hour" },
  { icon: Trophy, title: "Global Clean Tech Award", description: "Recognition received for clean energy initiatives in Abu Dhabi" },
  { icon: Star, title: "SAGE South Africa Award", description: "National victory in 2022 showcasing student innovation" },
  { icon: Award, title: "Robotics Challenge", description: "Excellence demonstrated in national STEM competition" },
  { icon: Lightbulb, title: "Wits University Award", description: "Recognition for Princess Julius's innovative project" },
]

export function AchievementsSection() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-14">
          <div className="mb-5 flex items-center gap-3"><span className="h-px w-9 bg-school-gold" /><span className="text-[11px] font-bold uppercase tracking-[0.22em] text-school-gold">Recognition & Excellence</span></div>
          <div className="grid gap-5 lg:grid-cols-[1fr_360px] lg:items-end">
            <h2 className="font-serif text-4xl font-bold leading-tight text-school-navy sm:text-5xl lg:text-6xl">A Trophy Case Built by Learners</h2>
            <p className="leading-relaxed text-gray-500 lg:text-right">From national championships to international recognition — milestones earned through curiosity, persistence and engineering imagination.</p>
          </div>
          <div className="mt-6 h-0.5 w-14 bg-school-gold" />
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.div key={achievement.title} initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.07 }} whileHover={reduceMotion ? undefined : { y: -5 }} className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl">
              <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-50 bg-school-gold/50 transition-transform duration-500 group-hover:scale-x-100 group-hover:bg-school-gold" />
              <div className="mb-6 flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-xl border border-school-gold/20 bg-school-gold/10"><achievement.icon className="h-5 w-5 text-school-gold" /></div><span className="font-mono text-xs text-gray-300">0{index + 1}</span></div>
              <h3 className="font-serif text-xl font-bold text-school-navy">{achievement.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{achievement.description}</p>
              <div className="mt-5 h-px w-10 bg-school-gold/40 transition-all duration-300 group-hover:w-16 group-hover:bg-school-gold" />
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: reduceMotion ? 0 : 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7 }} className="group relative mt-16 overflow-hidden rounded-3xl bg-school-navy shadow-2xl">
          <div className="absolute left-0 top-0 z-10 h-1 w-full bg-school-gold" />
          <div className="relative min-h-[500px]">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-44-07-22_f541918c7893c52dbd1ee5d319333948.jpg-UycgphdSNW1pbbmTJsQmWJwa32X7sB.jpeg" alt="School achievements collage" fill className="object-cover opacity-75 transition-transform duration-1000 group-hover:scale-105" sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-navy/75 to-school-navy/20" />
            <div className="relative z-10 flex min-h-[500px] max-w-2xl flex-col justify-end p-8 pb-10 lg:p-14">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-school-gold">Inspiring the Next Generation</p>
              <h3 className="mt-3 font-serif text-3xl font-bold text-white sm:text-4xl">The Best Is Still Ahead.</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-white/65">These achievements are proof of what becomes possible when ambition meets resources, expert guidance and an unshakeable belief in South Africa's youth.</p>
              <Button asChild className="group mt-7 w-fit rounded-full bg-white px-7 font-semibold text-school-navy hover:bg-school-gold hover:text-white"><Link href="/achievements" className="flex items-center gap-2">Explore Our Achievements <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
