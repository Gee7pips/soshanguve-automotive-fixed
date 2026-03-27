"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Cog,
  Zap,
  Building2,
  ChevronRight,
  Wrench,
  Drill,
  Flame,
  Power,
  Cpu,
  HardHat,
  TreePine,
  Droplets,
  PenTool,
  Calculator,
  FlaskConical,
  Bot,
  Car,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const streams = [
  {
    id: "mechanical",
    label: "Mechanical Technology",
    shortLabel: "Mechanical",
    icon: Cog,
    color: "from-blue-900 to-school-navy",
    accent: "#4A90B9",
    tagline: "The Art of Motion & Power",
    overview:
      "Our flagship stream, rooted in the physics of movement, manufacturing, and automotive systems. Learners gain mastery over the machines that drive modern industry — from internal combustion engines to precision-machined components.",
    subjects: [
      {
        icon: Car,
        name: "Automotive Specialisation",
        badge: "Flagship",
        description:
          "The heartbeat of the school. Learners disassemble and rebuild engines, diagnose ECUs with electronic scanners, and study hybrid vehicle dynamics — mirroring BMW production-line standards.",
        highlights: ["Engine Rebuilding", "ABS / EBD Braking", "Hybrid Systems", "Electronic Diagnostics"],
      },
      {
        icon: Drill,
        name: "Fitting & Turning",
        badge: "Precision",
        description:
          "The science of micron-level accuracy. Using Centre Lathes and Milling Machines, learners manufacture components with tolerances that rival aerospace standards, grounded in deep metallurgical knowledge.",
        highlights: ["Centre Lathe Operation", "Milling Machines", "Metallurgy", "Precision Tolerances"],
      },
      {
        icon: Flame,
        name: "Welding & Metalwork",
        badge: "Fabrication",
        description:
          "Structural integrity through mastery of joining processes — SMAW, MIG, and TIG. Learners build real muscle memory using our state-of-the-art VR Welding Simulators before entering the workshop.",
        highlights: ["MIG / TIG Welding", "SMAW Process", "VR Simulators", "Structural Fabrication"],
      },
    ],
  },
  {
    id: "electrical",
    label: "Electrical Technology",
    shortLabel: "Electrical",
    icon: Zap,
    color: "from-school-navy to-indigo-900",
    accent: "#D4AF37",
    tagline: "Powering the Digital Revolution",
    overview:
      "This stream prepares learners for the electrification of everything — from domestic wiring to the Programmable Logic Controllers (PLCs) that operate BMW assembly robots. It is the curriculum of tomorrow, delivered today.",
    subjects: [
      {
        icon: Power,
        name: "Power Systems",
        badge: "Heavy Current",
        description:
          "From your home's DB board to a three-phase industrial motor — learners master the entire electrical distribution chain, including transformers, protection devices, and safe domestic and industrial installation.",
        highlights: ["Three-Phase Motors", "Transformers", "Industrial Wiring", "Protection Devices"],
      },
      {
        icon: Cpu,
        name: "Electronics — Digital & Industrial",
        badge: "Automation",
        description:
          "Digital: microprocessors, logic gates, and the car's electronic brain (ECU). Industrial: Programmable Logic Controllers — the same technology directing the robotic arms inside the BMW Rosslyn Plant.",
        highlights: ["Microprocessors", "Logic Gates", "PLC Programming", "ECU Systems"],
      },
    ],
  },
  {
    id: "civil",
    label: "Civil Technology",
    shortLabel: "Civil",
    icon: Building2,
    color: "from-slate-800 to-school-navy",
    accent: "#7EAEC4",
    tagline: "Building the Infrastructure of Tomorrow",
    overview:
      "Focused on the built environment — the roads, buildings, and water systems that underpin modern life. Learners understand structural engineering, sustainable construction, and the plumbing infrastructure that serves entire communities.",
    subjects: [
      {
        icon: HardHat,
        name: "Construction",
        badge: "Structural",
        description:
          "From laying foundations to reading structural drawings — learners engage with concrete technology, masonry, and national building regulations, producing graduates ready for the construction sector.",
        highlights: ["Concrete Technology", "Foundations", "Masonry", "Building Regulations"],
      },
      {
        icon: TreePine,
        name: "Woodworking",
        badge: "High-End Joinery",
        description:
          "Beyond carpentry — learners use industrial machinery to design and construct complex wooden structures, fine furniture, and roof systems requiring deep knowledge of timber properties and joinery.",
        highlights: ["Industrial Machinery", "Roof Construction", "Fine Joinery", "Timber Properties"],
      },
      {
        icon: Droplets,
        name: "Civil Services",
        badge: "Fluid Systems",
        description:
          "The engineering of water: learners design and install water supply systems, drainage networks, and sanitation infrastructure — critical skills for South Africa's growing infrastructure demands.",
        highlights: ["Water Supply Systems", "Drainage Engineering", "Sanitation", "Fluid Mechanics"],
      },
    ],
  },
]

const supportSubjects = [
  {
    icon: PenTool,
    name: "Engineering Graphics & Design",
    short: "EGD",
    description:
      "The visual language of engineering. Learners communicate technical ideas through 2D orthographic drawings and 3D CAD models — a skill demanded by every engineering employer.",
  },
  {
    icon: Calculator,
    name: "Technical Mathematics",
    short: "Tech Maths",
    description:
      "Mathematics applied at the coal-face of engineering: gear ratios, torque calculations, and the quantitative reasoning that underpins every design decision.",
  },
  {
    icon: FlaskConical,
    name: "Technical Science",
    short: "Tech Science",
    description:
      "Applied Physics and Chemistry — thermodynamics, electricity, and mechanics — giving learners the scientific foundation to understand why machines behave as they do.",
  },
  {
    icon: Bot,
    name: "Coding & Robotics",
    short: "Robotics",
    description:
      "Integrated into the weekly timetable, this subject positions learners at the frontier of the Fourth Industrial Revolution, building and programming autonomous systems.",
  },
]

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export function SubjectOfferings() {
  const [activeStream, setActiveStream] = useState(0)
  const [activeSubject, setActiveSubject] = useState(0)

  const stream = streams[activeStream]
  const subject = stream.subjects[activeSubject]

  const handleStreamChange = (index: number) => {
    setActiveStream(index)
    setActiveSubject(0)
  }

  return (
    <section className="py-24 lg:py-36 bg-school-navy overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 lg:mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-school-gold" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-school-gold">
              Academic Programmes
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance max-w-xl">
              Three Pillars of{" "}
              <span className="text-school-gold">Engineering Excellence</span>
            </h2>
            <p className="text-white/50 max-w-sm leading-relaxed lg:text-right text-sm">
              Every learner selects a primary stream at the start of Grade 10, then builds deep mastery through the National Senior Certificate (Technical) framework.
            </p>
          </div>
          <div className="w-12 h-0.5 bg-school-gold mt-6" />
        </motion.div>

        {/* ── Stream Selector Tabs ── */}
        <div className="flex flex-col sm:flex-row gap-3 mb-10">
          {streams.map((s, i) => {
            const Icon = s.icon
            const isActive = activeStream === i
            return (
              <button
                key={s.id}
                onClick={() => handleStreamChange(i)}
                className={`group flex items-center gap-3 px-5 py-3.5 rounded-xl border text-left transition-all duration-300 flex-1 ${
                  isActive
                    ? "bg-school-gold border-school-gold text-school-navy"
                    : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className={`h-9 w-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                  isActive ? "bg-school-navy/20" : "bg-white/10 group-hover:bg-white/15"
                }`}>
                  <Icon className={`h-4 w-4 ${isActive ? "text-school-navy" : "text-white/70"}`} />
                </div>
                <div>
                  <p className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-0.5 ${isActive ? "text-school-navy/60" : "text-white/30"}`}>
                    Stream
                  </p>
                  <p className={`font-semibold text-sm leading-tight ${isActive ? "text-school-navy" : ""}`}>
                    {s.shortLabel}
                  </p>
                </div>
                {isActive && (
                  <ChevronRight className="h-4 w-4 ml-auto text-school-navy/60" />
                )}
              </button>
            )
          })}
        </div>

        {/* ── Main Content Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStream}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-[1fr_1.6fr] gap-6"
          >

            {/* Left: Subject list */}
            <div className="space-y-3">
              {/* Stream overview card */}
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mb-5">
                <p className="text-[11px] font-bold tracking-[0.18em] uppercase text-school-gold mb-2">
                  {stream.tagline}
                </p>
                <p className="text-white/65 text-sm leading-relaxed">
                  {stream.overview}
                </p>
              </div>

              {/* Subject pills */}
              {stream.subjects.map((sub, i) => {
                const SubIcon = sub.icon
                const isActive = activeSubject === i
                return (
                  <button
                    key={sub.name}
                    onClick={() => setActiveSubject(i)}
                    className={`w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-300 group ${
                      isActive
                        ? "bg-white/10 border-school-gold/40"
                        : "bg-white/[0.03] border-white/8 hover:bg-white/[0.07] hover:border-white/15"
                    }`}
                  >
                    <div className={`h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-school-gold/20 border border-school-gold/40" : "bg-white/8 border border-white/10"
                    }`}>
                      <SubIcon className={`h-4.5 w-4.5 ${isActive ? "text-school-gold" : "text-white/50 group-hover:text-white/70"}`} style={{ width: 18, height: 18 }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className={`font-semibold text-sm leading-tight truncate ${isActive ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                          {sub.name}
                        </p>
                      </div>
                      <span className={`text-[10px] font-bold tracking-[0.15em] uppercase ${isActive ? "text-school-gold" : "text-white/25"}`}>
                        {sub.badge}
                      </span>
                    </div>
                    <ChevronRight className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 ${isActive ? "text-school-gold translate-x-0.5" : "text-white/20 group-hover:text-white/40"}`} />
                  </button>
                )
              })}
            </div>

            {/* Right: Subject detail panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeStream}-${activeSubject}`}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -12 }}
                transition={{ duration: 0.35 }}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-8 lg:p-10 flex flex-col justify-between"
              >
                <div className="space-y-7">
                  {/* Subject header */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-12 w-12 rounded-xl bg-school-gold/15 border border-school-gold/30 flex items-center justify-center">
                        <subject.icon className="text-school-gold" style={{ width: 22, height: 22 }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-school-gold mb-0.5">
                          {subject.badge} Subject
                        </p>
                        <h3 className="font-serif text-xl font-bold text-white leading-tight">
                          {subject.name}
                        </h3>
                      </div>
                    </div>
                    <div className="w-8 h-0.5 bg-school-gold mb-5" />
                    <p className="text-white/65 leading-relaxed text-base">
                      {subject.description}
                    </p>
                  </div>

                  {/* Highlights grid */}
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-white/30 mb-4">
                      Core Focus Areas
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {subject.highlights.map((h) => (
                        <div
                          key={h}
                          className="flex items-center gap-2.5 bg-white/[0.05] border border-white/8 rounded-lg px-3.5 py-2.5"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-school-gold flex-shrink-0" />
                          <span className="text-white/70 text-xs font-medium leading-tight">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stream badge */}
                  <div className="flex items-center gap-3 pt-1">
                    <span className="h-px flex-1 bg-white/8" />
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
                      {stream.label}
                    </span>
                    <span className="h-px flex-1 bg-white/8" />
                  </div>
                </div>

                <div className="mt-8">
                  <Button
                    asChild
                    className="group bg-school-gold hover:bg-yellow-400 text-school-navy font-bold rounded-full px-7 shadow-lg shadow-school-gold/10 transition-all duration-300 hover:scale-105"
                  >
                    <Link href="/programs" className="flex items-center gap-2">
                      Explore Full Curriculum
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

          </motion.div>
        </AnimatePresence>

        {/* ── Support Subjects ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 lg:mt-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-8 bg-school-gold/50" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-white/35">
              The Language of Engineering — Core Support Subjects
            </span>
            <span className="h-px flex-1 bg-white/8" />
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {supportSubjects.map((sub, i) => {
              const Icon = sub.icon
              return (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-white/[0.04] border border-white/8 rounded-xl p-5 hover:bg-white/[0.08] hover:border-white/15 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-9 w-9 rounded-lg bg-school-gold/10 border border-school-gold/20 flex items-center justify-center group-hover:bg-school-gold/20 transition-colors duration-300">
                      <Icon className="h-4 w-4 text-school-gold" />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-school-gold/70">
                      {sub.short}
                    </span>
                  </div>
                  <h4 className="font-serif text-sm font-bold text-white mb-2 leading-tight">
                    {sub.name}
                  </h4>
                  <p className="text-white/45 text-xs leading-relaxed">
                    {sub.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
