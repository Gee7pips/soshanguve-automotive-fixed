"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Quote, GraduationCap, Star, Users } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    body: "We hold every learner to the highest standard — not as a burden, but as an expression of our belief in their unlimited potential.",
  },
  {
    icon: Star,
    title: "Character & Integrity",
    body: "Technical skill without virtue is incomplete. We cultivate engineers of strong character who lead with honesty and purpose.",
  },
  {
    icon: Users,
    title: "Community Belonging",
    body: "Every learner who walks through our gates belongs here. Soshanguve Automotive SoS is a home, not just a school.",
  },
]

export function PrincipalWelcome() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [pillarsRef, pillarsInView] = useInView({ threshold: 0.05, triggerOnce: true })

  return (
    <section className="relative py-24 lg:py-36 bg-white overflow-hidden" ref={ref}>

      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-school-gold/5 -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" />

      <div className="relative z-10 container max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-8 bg-school-gold" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-school-gold">
              From the Principal&apos;s Desk
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-school-navy leading-tight text-balance max-w-2xl">
            A Word from Our{" "}
            <span className="text-school-blue">Principal</span>
          </h2>
          <div className="w-12 h-0.5 bg-school-gold mt-6" />
        </motion.div>

        {/* ── Main two-column layout ── */}
        <div className="grid gap-16 lg:gap-24 lg:grid-cols-[1fr_1.1fr] items-start">

          {/* Left: Principal portrait + name card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            {/* Portrait */}
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-school-gold/40 via-school-gold/10 to-transparent" />
              <div className="relative rounded-2xl overflow-hidden bg-school-navy aspect-[4/5] max-w-sm">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1776384761271-xjUufMTvlcevshZ163NuZ9MaXZesk4.jpg"
                  alt="Mr. TA Mashiane — Principal of Soshanguve Automotive SoS, speaking at an awards ceremony holding a crystal trophy"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Name overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-school-navy via-school-navy/70 to-transparent pt-16 pb-6 px-6">
                  <p className="font-serif text-xl font-bold text-white leading-tight">Mr. T.A. Mashiane</p>
                  <p className="text-school-gold text-xs font-bold tracking-[0.18em] uppercase mt-1">
                    Principal — Soshanguve Automotive SoS
                  </p>
                </div>
              </div>
            </div>

            {/* Credential strip */}
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-school-navy/10 bg-school-navy/[0.03]">
              <div className="h-10 w-10 rounded-lg bg-school-navy/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="h-5 w-5 text-school-navy" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.15em] uppercase text-school-gold mb-0.5">
                  School of Specialisation
                </p>
                <p className="text-sm text-gray-600 leading-snug">
                  One of 39 GDE-designated specialisation schools in Gauteng
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Message content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Opening quote mark */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-school-navy flex items-center justify-center shadow-lg">
                <Quote className="h-5 w-5 text-school-gold fill-school-gold" />
              </div>
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-school-navy leading-snug text-balance">
                Welcome to Soshanguve Automotive School of Specialisation.
              </p>
            </div>

            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                It is my privilege and honour to welcome you to an institution that stands as proof of what is
                possible when a community decides to invest in its children without compromise. From our humble
                beginnings in the Tshwane area to our current standing as one of Gauteng&apos;s foremost technical
                schools, this journey has always been powered by one conviction:{" "}
                <span className="font-semibold text-school-navy">
                  every learner who enters our gates deserves a world-class future.
                </span>
              </p>

              <p>
                Our school is more than a curriculum. It is a covenant — with our learners, their families, and the
                broader Soshanguve community — that we will never settle for ordinary. We equip our young people
                with the technical mastery, the critical thinking, and the professional character that South
                Africa&apos;s economy urgently needs.
              </p>

              <p>
                The Class of 2025 has demonstrated, with a historic{" "}
                <span className="font-semibold text-school-navy">100% matric pass rate</span>, what becomes
                possible when learners are believed in, challenged, and supported without reservation. That
                achievement belongs to every teacher, parent, and partner who refused to give up.
              </p>

              <p>
                Whether you are a prospective learner, a parent, a partner, or a supporter — I invite you to join
                us in building something extraordinary.{" "}
                <span className="font-semibold text-school-navy">Together, we are unstoppable.</span>
              </p>
            </div>

            {/* Signature block */}
            <div className="flex items-center gap-5 pt-4 border-t border-gray-100">
              <div className="flex-shrink-0 h-14 w-14 rounded-full bg-school-navy/10 border-2 border-school-gold/30 flex items-center justify-center">
                <span className="font-serif text-xl font-black text-school-navy">TM</span>
              </div>
              <div>
                <p className="font-serif font-bold text-school-navy text-lg leading-tight">Mr. T.A. Mashiane</p>
                <p className="text-xs font-semibold text-school-gold tracking-[0.15em] uppercase mt-0.5">
                  Principal
                </p>
                <p className="text-xs text-gray-400 mt-0.5">Soshanguve Automotive School of Specialisation</p>
              </div>
              <div className="ml-auto hidden sm:flex items-center gap-2">
                <span className="h-px w-8 bg-school-gold/40" />
                <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-school-gold/60">Est. 2019</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── School Pillars ── */}
        <div ref={pillarsRef} className="mt-20 lg:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="h-px w-8 bg-school-gold/50" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-gray-400">
              Our Guiding Principles
            </span>
            <span className="h-px flex-1 bg-gray-100" />
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-3">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Gold left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-school-gold rounded-l-2xl" />

                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-school-navy/5 border border-school-navy/10 flex items-center justify-center group-hover:bg-school-navy group-hover:border-school-navy transition-all duration-300">
                      <Icon className="h-5 w-5 text-school-navy group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="font-serif font-bold text-school-navy text-base leading-tight">{pillar.title}</h3>
                  </div>

                  <p className="text-gray-500 text-sm leading-relaxed">{pillar.body}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
