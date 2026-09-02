"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
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
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [cardsRef, cardsInView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="relative overflow-hidden bg-school-navy" ref={ref}>
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23D4AF37' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 0h1v40H0zm40 0h-1v40h1zM0 0v1h40V0zm0 40v-1h40v1z'/%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 pt-20 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-school-gold" /><span className="text-[11px] font-bold tracking-[0.22em] uppercase text-school-gold">Academic Results — 2024</span><span className="h-px w-10 bg-school-gold" />
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.1 }} className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance mb-4">
            Soshanguve Engineering School Of Specialisation: <span className="text-school-gold">Class of 2024</span>
          </motion.h2>

          <motion.div initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}} transition={{ duration: 0.6, delay: 0.25 }} className="w-24 h-0.5 bg-school-gold mx-auto mb-10 origin-center" />

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.35 }} className="inline-flex flex-col items-center gap-1 px-10 py-6 rounded-2xl border-2 border-school-gold bg-school-gold/10 mb-10">
            <span className="font-serif text-6xl sm:text-7xl font-black text-school-gold leading-none tracking-tight">99.3%</span>
            <span className="text-white font-bold text-lg uppercase tracking-widest">Pass Rate</span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.45 }} className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-14">
            The <span className="text-white font-semibold">Class of 2024</span> achieved a <span className="text-school-gold font-bold">99.3% matric pass rate</span>, reflecting the commitment of learners, educators, families and the wider school community.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.5 }} className="relative rounded-2xl overflow-hidden shadow-2xl border border-school-gold/30 max-w-3xl mx-auto">
            <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1774649920765-lfbyIQmPmwM2W9yYP54Zv87DmjZmZM.jpg" alt="Soshanguve Engineering School Of Specialisation matric results celebration" width={900} height={506} className="w-full h-auto object-cover" priority />
            <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-sm py-3 px-5 text-center"><p className="text-white font-semibold text-sm tracking-wide">Celebrating the Class of 2024 — Soshanguve Engineering School Of Specialisation</p></div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 h-px bg-school-gold/20 max-w-5xl mx-auto" />
      <div className="relative z-10 py-16 px-6" ref={cardsRef}>
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={cardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4"><span className="h-px w-8 bg-school-gold" /><span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">With Gratitude</span><span className="h-px w-8 bg-school-gold" /></div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">It Takes a Village</h3>
            <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed">This achievement did not happen in isolation. We extend our deepest gratitude to everyone who supported our learners.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {thankYouCards.map((card, index) => { const Icon = card.icon; return <motion.div key={card.title} initial={{ opacity: 0, y: 24 }} animate={cardsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55, delay: index * 0.1 }} className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-school-gold/40 transition-all duration-300 p-6 flex gap-4"><div className="absolute left-0 top-4 bottom-4 w-0.5 bg-school-gold/60 rounded-full group-hover:bg-school-gold transition-colors duration-300" /><div className="flex-shrink-0 w-10 h-10 rounded-lg bg-school-gold/15 flex items-center justify-center group-hover:bg-school-gold/25 transition-colors duration-300"><Icon className="w-5 h-5 text-school-gold" /></div><div><h4 className="font-semibold text-white text-sm mb-1.5">{card.title}</h4><p className="text-white/60 text-sm leading-relaxed">{card.description}</p></div></motion.div> })}
          </div>
        </div>
      </div>

      <div className="relative z-10 pb-20 px-6"><motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-10"><div className="flex-1 h-px bg-school-gold/25" /><div className="w-2 h-2 rounded-full bg-school-gold" /><div className="flex-1 h-px bg-school-gold/25" /></div>
        <p className="font-serif text-school-gold text-6xl leading-none mb-2 select-none">&ldquo;</p>
        <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-medium leading-snug text-balance mb-6">Strong results are built by <span className="text-school-gold">learners, teachers and community</span> working together.</p>
        <div className="flex items-center justify-center gap-3 mt-6"><span className="h-px w-6 bg-school-gold/50" /><span className="text-white/50 text-sm font-medium tracking-wider uppercase">Soshanguve Engineering School Of Specialisation</span><span className="h-px w-6 bg-school-gold/50" /></div>
      </motion.div></div>
    </section>
  )
}
