"use client"

import { useState } from "react"
import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { ArrowRight, ArrowUpRight, Award, BookOpen, Check, ChevronRight, Cpu, GraduationCap, Lightbulb, MoveUpRight, Target, Users, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/scroll-animation"

const stats = [
  { value: "100%", label: "2025 matric pass rate", detail: "Academic achievement", icon: GraduationCap },
  { value: "700+", label: "Learners", detail: "A growing school community", icon: Users },
  { value: "2019", label: "Established", detail: "School of Specialisation journey", icon: BookOpen },
  { value: "39", label: "Specialisation schools", detail: "Gauteng network", icon: Award },
]

const focusAreas = [
  {
    number: "01",
    title: "Academic foundations",
    tagline: "Knowledge that opens doors",
    description: "A strong academic foundation gives learners the confidence to ask questions, reason carefully and keep progressing. We value the habits behind achievement: curiosity, consistency, preparation and the willingness to learn.",
    outcomes: ["Build sound subject knowledge", "Develop independent thinking", "Grow confidence and learning discipline"],
    icon: BookOpen,
    signal: "KNOWLEDGE / FOUNDATION",
  },
  {
    number: "02",
    title: "Engineering mindset",
    tagline: "Understand how things work",
    description: "Engineering begins with observation. It asks learners to understand a challenge, explore how systems work and approach practical problems with logic, precision and imagination.",
    outcomes: ["Think through real-world problems", "Connect theory with practical ideas", "Appreciate precision and process"],
    icon: Wrench,
    signal: "DESIGN / PROBLEM SOLVING",
  },
  {
    number: "03",
    title: "Innovation and technology",
    tagline: "Ideas with room to grow",
    description: "Technology changes how communities live and work. We want learners to remain curious about new ideas, recognise opportunities and develop the confidence to contribute to a changing world.",
    outcomes: ["Explore emerging possibilities", "Develop creative confidence", "Think about the impact of ideas"],
    icon: Cpu,
    signal: "IDEAS / FUTURE THINKING",
  },
]

const recognitions = [
  "Best Performing School in Tshwane West District",
  "National Batho Pele Excellence Award Winner",
  "Global Clean Tech Award Recognition",
  "SADTU Gauteng Grade 12 Best Performance recognition",
]

const journey = [
  { number: "01", title: "Ask", description: "Start with a question. Notice a challenge, investigate it and stay curious.", icon: Lightbulb },
  { number: "02", title: "Explore", description: "Build understanding through research, discussion, learning and observation.", icon: BookOpen },
  { number: "03", title: "Create", description: "Use knowledge and imagination to test ideas and develop practical solutions.", icon: Wrench },
  { number: "04", title: "Grow", description: "Reflect on what worked, learn from the process and carry that knowledge forward.", icon: Target },
]

function SectionEyebrow({ children }: { children: ReactNode }) {
  return <div className="flex items-center gap-3 text-school-gold"><span className="h-px w-9 bg-school-gold" /><span className="font-technical text-[9px] font-bold uppercase tracking-[.22em]">{children}</span></div>
}

function EngineeringBlueprint({ reducedMotion }: { reducedMotion: boolean }) {
  const repeat = reducedMotion ? 0 : Infinity
  return (
    <svg viewBox="0 0 440 310" role="img" aria-label="Animated engineering blueprint illustration" className="h-full w-full overflow-visible">
      <defs>
        <pattern id="about-engine-grid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#9dc2df" strokeOpacity=".16" strokeWidth="1" /></pattern>
        <linearGradient id="about-engine-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f4d987" /><stop offset=".52" stopColor="#d1ad4e" /><stop offset="1" stopColor="#8bb4d2" /></linearGradient>
        <radialGradient id="about-engine-glow"><stop offset="0" stopColor="#7eb4da" stopOpacity=".28" /><stop offset="1" stopColor="#7eb4da" stopOpacity="0" /></radialGradient>
      </defs>
      <rect width="440" height="310" rx="22" fill="url(#about-engine-grid)" />
      <circle cx="222" cy="146" r="126" fill="url(#about-engine-glow)" />
      <g fill="none" stroke="#a9c8df" strokeOpacity=".25" strokeWidth="1">
        <path d="M30 45H410M30 265H410M56 22V288M384 22V288" strokeDasharray="3 7" />
        <path d="M222 20V286M70 146H374" strokeDasharray="2 8" />
        <circle cx="222" cy="146" r="112" strokeDasharray="2 8" /><circle cx="222" cy="146" r="84" />
      </g>
      <motion.g style={{ transformOrigin: "222px 146px" }} animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 48, repeat, ease: "linear" }}>
        <circle cx="222" cy="146" r="100" fill="none" stroke="#d6b65f" strokeOpacity=".66" strokeWidth="1.4" strokeDasharray="2 12" />
        <circle cx="222" cy="46" r="4.5" fill="#f3d987" /><circle cx="122" cy="146" r="3.5" fill="#8fc0e2" /><circle cx="322" cy="146" r="3.5" fill="#8fc0e2" />
      </motion.g>
      <motion.g style={{ transformOrigin: "222px 146px" }} animate={reducedMotion ? undefined : { rotate: -360 }} transition={{ duration: 70, repeat, ease: "linear" }}>
        <circle cx="222" cy="146" r="72" fill="none" stroke="#8bb8d8" strokeOpacity=".55" strokeWidth="1.2" strokeDasharray="30 8 4 8" />
        <circle cx="222" cy="74" r="4" fill="#8bb8d8" /><circle cx="294" cy="146" r="3" fill="#f3d987" />
      </motion.g>
      <g transform="translate(222 146)">
        <motion.circle r="49" fill="#0d2d4c" stroke="url(#about-engine-metal)" strokeWidth="2.3" animate={reducedMotion ? undefined : { scale: [1, 1.025, 1] }} transition={{ duration: 4.5, repeat, ease: "easeInOut" }} />
        <circle r="35" fill="none" stroke="#8bb8d8" strokeOpacity=".5" strokeWidth="1.3" />
        <motion.g animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 18, repeat, ease: "linear" }}>
          <path d="M0 -32L7 -19L20 -20L19 -7L32 0L19 7L20 20L7 19L0 32L-7 19L-20 20L-19 7L-32 0L-19 -7L-20 -20L-7 -19Z" fill="none" stroke="#e2c66f" strokeWidth="2.4" strokeLinejoin="round" />
          <circle r="13" fill="#102f4e" stroke="#e2c66f" strokeWidth="2" />
        </motion.g>
        <circle r="5" fill="#f1d786" />
      </g>
      <motion.path d="M222 146L356 63L397 63" fill="none" stroke="#e5c76d" strokeWidth="1.4" strokeDasharray="5 5" initial={{ pathLength: 0, opacity: .4 }} animate={{ pathLength: 1, opacity: [.4, 1, .4] }} transition={{ duration: 4, repeat, ease: "easeInOut" }} />
      <motion.path d="M222 146L92 224L49 224" fill="none" stroke="#86b9da" strokeWidth="1.4" strokeDasharray="5 5" initial={{ pathLength: 0, opacity: .4 }} animate={{ pathLength: 1, opacity: [.4, 1, .4] }} transition={{ duration: 4.8, repeat, ease: "easeInOut" }} />
      <g fill="#dceaf5" fontFamily="monospace" fontSize="8" letterSpacing="1.8">
        <text x="353" y="52">SYSTEM / 01</text><text x="28" y="242">ENGINEERING</text><text x="28" y="255" fill="#e1c36c">PRECISION • PROCESS</text><text x="326" y="285" fill="#9abbd4">SOS / 2019</text>
      </g>
      <motion.circle cx="397" cy="63" r="4" fill="#e4c56c" animate={reducedMotion ? undefined : { opacity: [.35, 1, .35], scale: [.8, 1.25, .8] }} transition={{ duration: 2.7, repeat }} />
      <motion.circle cx="49" cy="224" r="4" fill="#8fc0e2" animate={reducedMotion ? undefined : { opacity: [.35, 1, .35], scale: [.8, 1.25, .8] }} transition={{ duration: 3.2, repeat }} />
    </svg>
  )
}

function LearningCircuit({ reducedMotion }: { reducedMotion: boolean }) {
  const repeat = reducedMotion ? 0 : Infinity
  const nodes = [{ x: 76, label: "ASK", sub: "Curiosity" }, { x: 205, label: "EXPLORE", sub: "Knowledge" }, { x: 335, label: "CREATE", sub: "Application" }, { x: 464, label: "GROW", sub: "Reflection" }]
  return (
    <svg viewBox="0 0 540 290" role="img" aria-label="Animated learning pathway and connected ideas illustration" className="h-full w-full">
      <defs>
        <linearGradient id="about-circuit-line" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#7daacb" /><stop offset=".55" stopColor="#d7b65e" /><stop offset="1" stopColor="#7daacb" /></linearGradient>
        <radialGradient id="about-circuit-glow"><stop offset="0" stopColor="#e7cb7a" stopOpacity=".23" /><stop offset="1" stopColor="#e7cb7a" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="270" cy="145" r="115" fill="url(#about-circuit-glow)" />
      <path d="M56 145H484" stroke="#8eacc5" strokeOpacity=".22" strokeWidth="2" strokeDasharray="4 8" />
      <motion.path d="M56 145H484" fill="none" stroke="url(#about-circuit-line)" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="8 12" animate={reducedMotion ? undefined : { strokeDashoffset: [0, -80] }} transition={{ duration: 5, repeat, ease: "linear" }} />
      {nodes.map((node, index) => (
        <g key={node.label}>
          <circle cx={node.x} cy="145" r="43" fill="#e4edf5" fillOpacity=".7" />
          <circle cx={node.x} cy="145" r="30" fill="#fff" stroke="#9ab9d2" strokeWidth="1.5" />
          <motion.circle cx={node.x} cy="145" r="23" fill="none" stroke="#d3b45f" strokeOpacity=".65" strokeDasharray="4 5" animate={reducedMotion ? undefined : { rotate: index % 2 === 0 ? 360 : -360 }} style={{ transformOrigin: node.x + "px 145px" }} transition={{ duration: 20 + index * 4, repeat, ease: "linear" }} />
          <circle cx={node.x} cy="145" r="5" fill={index === 2 ? "#d3b45f" : "#315f83"} />
          <text x={node.x} y="211" textAnchor="middle" fill="#173a5c" fontFamily="monospace" fontSize="10" fontWeight="700" letterSpacing="1.5">{node.label}</text>
          <text x={node.x} y="228" textAnchor="middle" fill="#70869a" fontFamily="sans-serif" fontSize="10">{node.sub}</text>
        </g>
      ))}
      <g fill="#8399aa" fontFamily="monospace" fontSize="8" letterSpacing="1.7"><text x="18" y="36">LEARNING / IN MOTION</text><text x="415" y="36">PATHWAY 01—04</text></g>
    </svg>
  )
}

export default function AboutPage() {
  const [activeFocus, setActiveFocus] = useState(0)
  const reducedMotion = useReducedMotion() ?? false
  const activeArea = focusAreas[activeFocus]
  const ActiveIcon = activeArea.icon

  return (
    <main className="premium-interior-page min-h-screen overflow-hidden bg-[#f5f8fb] text-school-navy">
      <section className="relative isolate flex min-h-[690px] items-center overflow-hidden bg-[#0c2948] pb-20 pt-36 text-white sm:min-h-[740px] lg:min-h-[790px] lg:pb-24">
        <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" alt="Soshanguve Engineering School of Specialisation campus and school community" fill priority sizes="100vw" className="absolute inset-0 -z-30 object-cover object-center" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(92deg,rgba(5,20,39,.96)_0%,rgba(7,30,54,.9)_45%,rgba(9,37,63,.55)_100%)]" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#0b2846] via-transparent to-[#0b2846]/40" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[.13] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:58px_58px]" />
        <motion.div className="pointer-events-none absolute -right-28 top-16 -z-10 h-[34rem] w-[34rem] rounded-full border border-white/[.09]" animate={reducedMotion ? undefined : { rotate: 360 }} transition={{ duration: 75, repeat: Infinity, ease: "linear" }} />
        <motion.div className="pointer-events-none absolute right-[-5rem] top-28 -z-10 h-[24rem] w-[24rem] rounded-full border border-school-gold/20" animate={reducedMotion ? undefined : { rotate: -360 }} transition={{ duration: 58, repeat: Infinity, ease: "linear" }} />
        <div className="container relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_.88fr] lg:gap-14">
            <motion.div initial={reducedMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, ease: [.22, 1, .36, 1] }} className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[.08] px-4 py-2.5 shadow-[0_10px_35px_-20px_rgba(0,0,0,.55)] backdrop-blur-xl">
                <motion.span className="h-2 w-2 rounded-full bg-school-gold shadow-[0_0_16px_rgba(212,175,55,.8)]" animate={reducedMotion ? undefined : { scale: [1, 1.3, 1], opacity: [1, .65, 1] }} transition={{ duration: 2.3, repeat: Infinity }} />
                <span className="font-technical text-[9px] font-bold uppercase tracking-[.2em] text-white/80">Soshanguve · Gauteng · South Africa</span>
              </div>
              <p className="mb-5 font-technical text-[10px] font-bold uppercase tracking-[.25em] text-school-gold sm:text-xs">About our school / established 2019</p>
              <h1 className="max-w-3xl font-display text-5xl font-bold leading-[.97] tracking-[-.07em] text-white sm:text-6xl lg:text-7xl xl:text-[5.55rem]">Where ideas become <span className="text-school-gold">possibility.</span></h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">An engineering-focused School of Specialisation where academic ambition, technical curiosity and practical thinking help learners imagine—and shape—their next chapter.</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild className="group h-12 rounded-full bg-school-gold px-6 font-bold text-school-navy shadow-[0_16px_38px_-16px_rgba(212,175,55,.55)] transition-all duration-300 hover:-translate-y-1 hover:bg-white"><Link href="/programs">Explore our programmes <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/35 bg-white/[.06] px-6 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-school-navy"><Link href="/contact">Connect with the school</Link></Button>
              </div>
              <div className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/15 pt-6">
                <div><p className="font-display text-2xl font-bold tracking-[-.05em] text-white">2019</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.17em] text-white/45">Established</p></div>
                <span className="hidden h-9 w-px bg-white/15 sm:block" />
                <div><p className="font-display text-2xl font-bold tracking-[-.05em] text-white">Grades 8–12</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.17em] text-white/45">Secondary education</p></div>
                <span className="hidden h-9 w-px bg-white/15 sm:block" />
                <div><p className="font-display text-2xl font-bold tracking-[-.05em] text-school-gold">Engineering</p><p className="mt-1 text-[9px] font-bold uppercase tracking-[.17em] text-white/45">Specialisation focus</p></div>
              </div>
            </motion.div>

            <motion.div initial={reducedMotion ? false : { opacity: 0, scale: .94, x: 18 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .9, delay: .12, ease: [.22, 1, .36, 1] }} className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
              <div className="absolute -inset-8 rounded-full bg-school-blue/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#0a2948]/75 p-4 shadow-[0_35px_100px_-35px_rgba(0,0,0,.72)] backdrop-blur-2xl sm:p-6">
                <div className="flex items-center justify-between gap-4 border-b border-white/10 px-2 pb-4">
                  <div><p className="font-technical text-[8px] font-bold uppercase tracking-[.2em] text-school-gold">Engineering / visual system</p><p className="mt-1 font-display text-lg font-semibold tracking-[-.035em] text-white">Curiosity in motion</p></div>
                  <span className="rounded-full border border-white/10 bg-white/[.06] px-3 py-1.5 font-mono text-[8px] tracking-[.14em] text-white/55">SOS / 001</span>
                </div>
                <div className="relative mt-4 aspect-[1.34/1]"><EngineeringBlueprint reducedMotion={reducedMotion} /></div>
                <div className="flex items-center justify-between border-t border-white/10 px-2 pt-4"><p className="text-[10px] text-white/45">Observe · Understand · Build</p><div className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /><span className="font-mono text-[8px] font-semibold uppercase tracking-[.16em] text-white/60">Learning system active</span></div></div>
              </div>
              <motion.div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/15 bg-[#eaf2f8] px-4 py-3 text-school-navy shadow-[0_15px_40px_-20px_rgba(0,0,0,.5)] sm:block" animate={reducedMotion ? undefined : { y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}><p className="font-technical text-[8px] font-bold uppercase tracking-[.18em] text-school-blue">A mindset for tomorrow</p><p className="mt-1 font-display text-sm font-bold">Learn. Apply. Progress.</p></motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-20 -mt-8 pb-10 sm:-mt-10">
        <div className="container">
          <div className="grid overflow-hidden rounded-[1.65rem] border border-white bg-white/95 shadow-[0_25px_70px_-42px_rgba(8,35,64,.35)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div key={stat.label} whileHover={reducedMotion ? undefined : { y: -4 }} transition={{ duration: .3 }} className={"relative flex items-center gap-4 p-5 sm:p-6 lg:p-7 " + (index > 0 ? "border-t border-school-navy/[.08] sm:border-l sm:border-t-0 " : "") + (index === 2 ? "sm:border-l-0 lg:border-l" : "")}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-school-blue/10 bg-[#eaf2f8] text-school-blue"><stat.icon className="h-5 w-5" /></div>
                <div><p className="font-display text-2xl font-bold tracking-[-.06em] text-school-navy">{stat.value}</p><p className="mt-0.5 text-[10px] font-bold text-school-blue">{stat.label}</p><p className="mt-1 text-[10px] text-slate-400">{stat.detail}</p></div>
              </motion.div>
            ))}
          </div>
          <p className="mt-3 text-center text-[9px] text-slate-400">A snapshot based on information currently published on the school website. Figures may change.</p>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-52 top-20 h-[30rem] w-[30rem] rounded-full bg-school-blue/[.07] blur-3xl" />
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[.98fr_1.02fr] lg:gap-16">
            <ScrollAnimation>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-school-gold/70" />
                <div className="relative overflow-hidden rounded-[1.8rem] border-[7px] border-white bg-white shadow-[0_30px_80px_-38px_rgba(7,22,48,.35)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem] bg-school-navy"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027647652.jpg-3gkCLsb3efCQvPztqcyJtpYnjIsVXm.jpeg" alt="School leadership receiving the SADTU Gauteng Grade 12 Best Performance award" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.035]" /></div>
                </div>
                <div className="absolute -bottom-6 right-5 max-w-[255px] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_18px_45px_-22px_rgba(7,22,48,.35)] backdrop-blur-xl sm:right-8"><div className="flex items-center gap-2 text-school-gold"><Award className="h-4 w-4" /><span className="font-technical text-[9px] font-bold uppercase tracking-[.16em] text-school-blue">A culture of achievement</span></div><p className="mt-2 font-display text-sm font-semibold leading-5 text-school-navy">Recognising dedication, commitment and progress.</p></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="space-y-6 lg:pl-3">
                <SectionEyebrow>Our story</SectionEyebrow>
                <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-[-.06em] text-school-navy sm:text-5xl lg:text-[3.6rem]">A school shaped by <span className="text-school-blue">ambition.</span></h2>
                <p className="text-base leading-8 text-slate-600">Established in 2019, Soshanguve Engineering School of Specialisation is part of a learning journey focused on engineering and technical education. We want learners to see knowledge as something they can use: to ask better questions, solve problems and imagine what they can build.</p>
                <p className="text-base leading-8 text-slate-600">Our identity brings together the foundations of schooling and the possibilities of a technical future. We are proud of the people who make this journey possible—our learners, educators, support staff, families and wider community.</p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2"><div className="rounded-2xl border border-school-navy/10 bg-white p-4 shadow-[0_12px_36px_-26px_rgba(7,22,48,.3)]"><p className="font-display text-2xl font-bold tracking-[-.05em] text-school-navy">2019</p><p className="mt-1 text-xs font-semibold text-slate-500">Established</p></div><div className="rounded-2xl border border-school-navy/10 bg-white p-4 shadow-[0_12px_36px_-26px_rgba(7,22,48,.3)]"><p className="font-display text-2xl font-bold tracking-[-.05em] text-school-navy">Grades 8–12</p><p className="mt-1 text-xs font-semibold text-slate-500">Secondary education</p></div></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-school-navy/[.06] bg-white py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[.38] [background-image:linear-gradient(rgba(30,58,138,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.045)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="container relative">
          <ScrollAnimation><div className="mx-auto mb-12 max-w-3xl text-center"><div className="flex justify-center"><SectionEyebrow>Our learning philosophy</SectionEyebrow></div><h2 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-[-.06em] text-school-navy sm:text-5xl">More than a subject. <span className="text-school-blue">A way of thinking.</span></h2><p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">Engineering is a way to look at the world: notice how things work, understand why they work and imagine how they could work better. Explore the ideas at the heart of our specialisation.</p></div></ScrollAnimation>
          <div className="grid gap-7 lg:grid-cols-[.82fr_1.18fr]">
            <div className="space-y-2" role="tablist" aria-label="Explore our learning focus">
              {focusAreas.map((area, index) => {
                const Icon = area.icon
                const selected = activeFocus === index
                return <motion.button key={area.number} type="button" role="tab" aria-selected={selected} aria-controls="about-focus-detail" onClick={() => setActiveFocus(index)} whileTap={reducedMotion ? undefined : { scale: .99 }} className={"group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 " + (selected ? "border-school-blue/25 bg-white shadow-[0_15px_45px_-28px_rgba(13,47,78,.35)]" : "border-transparent bg-white/55 hover:border-school-navy/10 hover:bg-white")}>
                  {selected && <motion.span layoutId="about-focus-active" className="absolute inset-y-3 left-0 w-[3px] rounded-full bg-school-gold" transition={{ type: "spring", stiffness: 380, damping: 34 }} />}
                  <span className={"flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors " + (selected ? "bg-school-navy text-school-gold" : "bg-[#eaf2f8] text-school-blue group-hover:bg-school-blue/10")}><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0 flex-1"><span className={"block font-technical text-[8px] font-bold uppercase tracking-[.18em] " + (selected ? "text-school-gold" : "text-slate-400")}>Focus / {area.number}</span><span className="mt-1 block font-display text-lg font-bold tracking-[-.035em] text-school-navy">{area.title}</span><span className="mt-1 block text-xs text-slate-500">{area.tagline}</span></span>
                  <ChevronRight className={"h-4 w-4 shrink-0 transition-transform " + (selected ? "translate-x-0.5 text-school-gold" : "text-slate-300 group-hover:translate-x-1")} />
                </motion.button>
              })}
            </div>
            <div id="about-focus-detail" role="tabpanel" className="relative min-h-[390px] overflow-hidden rounded-[1.8rem] border border-school-navy/10 bg-gradient-to-br from-[#eaf2f8] via-white to-[#f4f7fb] p-6 shadow-[0_24px_70px_-45px_rgba(13,47,78,.4)] sm:p-8 lg:p-10">
              <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-school-blue/[.07] blur-3xl" />
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeArea.number} initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={reducedMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: .32, ease: [.22, 1, .36, 1] }} className="relative">
                  <div className="flex items-center justify-between gap-4"><div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-school-gold/30 bg-white text-school-blue shadow-sm"><ActiveIcon className="h-5 w-5" /></div><span className="font-mono text-[9px] font-bold tracking-[.2em] text-slate-400">{activeArea.signal}</span></div>
                  <h3 className="mt-7 font-display text-3xl font-bold tracking-[-.055em] text-school-navy sm:text-4xl">{activeArea.title}</h3>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{activeArea.description}</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-3">{activeArea.outcomes.map((outcome) => <div key={outcome} className="flex items-start gap-2 rounded-xl border border-school-navy/[.07] bg-white/80 p-3 text-xs leading-5 text-slate-600"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-school-blue" />{outcome}</div>)}</div>
                  <div className="mt-7 flex items-center justify-between border-t border-school-navy/10 pt-5"><span className="font-technical text-[8px] font-bold uppercase tracking-[.18em] text-slate-400">An approach to lifelong learning</span><span className="font-mono text-[10px] font-bold text-school-blue">0{activeFocus + 1} / 03</span></div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24">
        <div className="container">
          <div className="grid items-center gap-10 lg:grid-cols-[.88fr_1.12fr] lg:gap-14">
            <ScrollAnimation><div className="space-y-6"><SectionEyebrow>From curiosity to capability</SectionEyebrow><h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-.06em] text-school-navy sm:text-5xl">A learning journey that <span className="text-school-blue">keeps moving.</span></h2><p className="text-base leading-8 text-slate-600">Progress is built one step at a time. We encourage learners to move from asking questions to exploring ideas, applying what they discover and reflecting on the experience.</p><div className="rounded-2xl border border-school-blue/10 bg-white p-5 shadow-[0_18px_55px_-38px_rgba(13,47,78,.35)]"><p className="font-technical text-[9px] font-bold uppercase tracking-[.18em] text-school-blue">The engineering mindset</p><p className="mt-2 font-display text-xl font-semibold leading-snug tracking-[-.035em] text-school-navy">Understand the challenge. Respect the process. Improve the result.</p></div></div></ScrollAnimation>
            <ScrollAnimation><div className="relative overflow-hidden rounded-[1.7rem] border border-school-navy/10 bg-white p-3 shadow-[0_26px_70px_-42px_rgba(13,47,78,.34)] sm:p-6"><div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-school-blue/20 to-transparent" /><div className="relative aspect-[1.75/1] min-h-[190px]"><LearningCircuit reducedMotion={reducedMotion} /></div><div className="flex flex-wrap items-center justify-between gap-3 border-t border-school-navy/[.08] px-3 pt-4"><span className="font-technical text-[8px] font-bold uppercase tracking-[.18em] text-slate-400">A continuous cycle of learning</span><span className="inline-flex items-center gap-2 text-[9px] font-semibold text-school-blue"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Explore the process</span></div></div></ScrollAnimation>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step) => <ScrollAnimation key={step.number}><motion.div whileHover={reducedMotion ? undefined : { y: -5 }} className="group h-full rounded-2xl border border-school-navy/10 bg-white p-5 shadow-[0_12px_38px_-28px_rgba(13,47,78,.3)] transition-shadow hover:shadow-[0_24px_55px_-32px_rgba(13,47,78,.35)]"><div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.15em] text-school-gold">{step.number} / 04</span><step.icon className="h-5 w-5 text-school-blue transition-transform duration-300 group-hover:scale-110" /></div><h3 className="mt-6 font-display text-2xl font-bold tracking-[-.045em] text-school-navy">{step.title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{step.description}</p></motion.div></ScrollAnimation>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#eaf1f7] py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-white/80 blur-3xl" />
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <ScrollAnimation><div className="relative"><div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-bl-[2rem] border-b-2 border-l-2 border-school-gold/70" /><div className="relative overflow-hidden rounded-[1.8rem] border-[7px] border-white bg-white shadow-[0_30px_80px_-38px_rgba(7,22,48,.35)]"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem]"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250216-WA0001.jpg-3zo75nJELrPTiXjeBGD5O6bvDLKMWX.jpeg" alt="Soshanguve Engineering School educators and staff" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover transition-transform duration-700 hover:scale-[1.035]" /></div></div></div></ScrollAnimation>
            <ScrollAnimation><div className="space-y-6"><SectionEyebrow>The people behind the mission</SectionEyebrow><h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-.06em] text-school-navy sm:text-5xl">People make a <span className="text-school-blue">school.</span></h2><p className="text-base leading-8 text-slate-600">Every school day is shaped by people: educators who guide, support teams who keep things moving, families who encourage and learners who bring energy and ideas. Their shared commitment is at the heart of our school community.</p><p className="text-base leading-8 text-slate-600">We recognise the contribution of our staff and celebrate the care, collaboration and professional dedication that help learners move forward. A strong school community is built through everyday moments of teaching, listening, encouragement and shared responsibility.</p><div className="grid gap-3 sm:grid-cols-2"><div className="rounded-xl border border-white bg-white/75 p-4"><Users className="h-5 w-5 text-school-blue" /><p className="mt-3 text-sm font-bold text-school-navy">A connected community</p><p className="mt-1 text-xs leading-5 text-slate-500">Learners, staff, families and partners all contribute.</p></div><div className="rounded-xl border border-white bg-white/75 p-4"><Target className="h-5 w-5 text-school-blue" /><p className="mt-3 text-sm font-bold text-school-navy">Shared purpose</p><p className="mt-1 text-xs leading-5 text-slate-500">Helping every learner move towards their potential.</p></div></div><Link href="/contact" className="group inline-flex items-center gap-2 pt-1 text-sm font-bold text-school-blue transition-colors hover:text-school-navy">Connect with the school <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div></ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="container">
          <ScrollAnimation><div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div className="max-w-3xl"><SectionEyebrow>A record of progress</SectionEyebrow><h2 className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-[-.06em] text-school-navy sm:text-5xl">Proud of the work. <span className="text-school-blue">Focused on what comes next.</span></h2><p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600">We value recognition as a reflection of collective effort—from learners and educators to families and the wider community.</p></div><Link href="/achievements" className="group inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-bold text-school-blue transition-colors hover:text-school-navy">Explore achievements <MoveUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div></ScrollAnimation>
          <div className="grid gap-4 md:grid-cols-2">{recognitions.map((item, index) => <ScrollAnimation key={item}><motion.div whileHover={reducedMotion ? undefined : { y: -4 }} className="group flex h-full items-center gap-4 rounded-2xl border border-school-navy/10 bg-white p-5 shadow-[0_14px_44px_-32px_rgba(13,47,78,.35)] transition-all hover:border-school-gold/35 hover:shadow-[0_22px_55px_-32px_rgba(13,47,78,.32)] sm:p-6"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-school-gold/25 bg-school-gold/[.08] text-school-blue"><Award className="h-5 w-5" /></span><span className="flex-1"><span className="mb-1 block font-mono text-[8px] font-bold uppercase tracking-[.16em] text-school-gold">Recognition / {String(index + 1).padStart(2, "0")}</span><span className="block text-sm font-semibold leading-6 text-school-navy">{item}</span></span><ArrowUpRight className="h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-school-blue" /></motion.div></ScrollAnimation>)}</div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#102f4e] py-20 text-white sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-36 -top-40 h-[30rem] w-[30rem] rounded-full bg-school-blue/30 blur-3xl" /><div className="pointer-events-none absolute -bottom-40 -left-36 h-[28rem] w-[28rem] rounded-full bg-school-gold/10 blur-3xl" /><div className="pointer-events-none absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:46px_46px]" />
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_.9fr] lg:gap-16">
            <ScrollAnimation><SectionEyebrow>Looking ahead</SectionEyebrow><h2 className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-[-.06em] text-white sm:text-5xl lg:text-6xl">The next chapter is <span className="text-school-gold">built together.</span></h2><p className="mt-6 max-w-2xl text-base leading-8 text-white/70">Whether you are a prospective learner, parent, partner or member of our community, we welcome the opportunity to connect and work towards a stronger future for technical education.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-12 rounded-full bg-school-gold px-6 font-bold text-school-navy hover:bg-white"><Link href="/apply">Admissions & enquiries <ArrowUpRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" className="h-12 rounded-full border-white/30 bg-white/[.05] px-6 font-bold text-white hover:bg-white hover:text-school-navy"><Link href="/support-us">Support the school</Link></Button></div></ScrollAnimation>
            <ScrollAnimation><div className="rounded-[1.8rem] border border-white/15 bg-white/[.06] p-6 shadow-[0_30px_80px_-42px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-8"><p className="font-technical text-[9px] font-bold uppercase tracking-[.2em] text-school-gold">Explore the school</p><div className="mt-5 divide-y divide-white/10">{[{ title: "Academic life", description: "Explore learning and school achievement.", href: "/academics" }, { title: "Programmes", description: "Discover the school's programme offering.", href: "/programs" }, { title: "Innovation hub", description: "See ideas, technology and innovation.", href: "/innovations" }, { title: "School activities", description: "Discover the wider school experience.", href: "/activities" }].map((item) => <Link key={item.href} href={item.href} className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"><span className="min-w-0 flex-1"><span className="block text-sm font-bold text-white transition-colors group-hover:text-school-gold">{item.title}</span><span className="mt-1 block text-xs text-white/45">{item.description}</span></span><ArrowUpRight className="h-4 w-4 text-white/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-school-gold" /></Link>)}</div></div></ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
