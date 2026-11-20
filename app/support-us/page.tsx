"use client"

import { useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CheckCircle2,
  ChevronRight,
  Cpu,
  GraduationCap,
  HeartHandshake,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

const supportOptions = [
  {
    value: "Financial contribution",
    title: "Financial contribution",
    description: "Support a school-led priority with a contribution that fits your budget.",
    detail: "A flexible contribution towards priorities confirmed with the school.",
    icon: HeartHandshake,
    accent: "gold",
  },
  {
    value: "Tools & equipment",
    title: "Tools & equipment",
    description: "Discuss practical tools, diagnostic equipment and engineering resources.",
    detail: "For example: hand tools, measuring equipment or automotive diagnostics.",
    icon: Wrench,
    accent: "blue",
  },
  {
    value: "Workshop materials",
    title: "Workshop materials",
    description: "Help explore materials and consumables for practical learning.",
    detail: "For example: project materials, components and workshop consumables.",
    icon: Cpu,
    accent: "gold",
  },
  {
    value: "Learner opportunity",
    title: "Learner opportunity",
    description: "Create conversations around learner support and access to opportunity.",
    detail: "For example: career exposure, learning resources or approved learner support.",
    icon: GraduationCap,
    accent: "blue",
  },
  {
    value: "Mentorship & skills",
    title: "Mentorship & skills",
    description: "Share professional knowledge, guidance and real-world experience.",
    detail: "For example: talks, demonstrations, mentoring or workplace exposure.",
    icon: BookOpen,
    accent: "gold",
  },
  {
    value: "Corporate partnership",
    title: "Corporate partnership",
    description: "Build a longer-term relationship around engineering education.",
    detail: "For example: a programme, project collaboration or in-kind partnership.",
    icon: Building2,
    accent: "blue",
  },
]

const steps = [
  {
    number: "01",
    title: "Tell us what you have in mind",
    text: "Choose a support area and share your idea, intended contribution or organisation.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "The school confirms the next step",
    text: "The school can discuss suitability, practical requirements and the appropriate arrangement.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Coordinate your contribution",
    text: "Agree the details directly with the school and keep a clear record of the arrangement.",
    icon: HeartHandshake,
  },
]

const ease = [0.22, 1, 0.36, 1] as const

function MotorEngineeringArtwork({ reduceMotion }: { reduceMotion: boolean }) {
  const ticks = Array.from({ length: 24 }, (_, index) => index * 15)

  return (
    <div className="donor-engine-art relative mx-auto aspect-[1.12/1] w-full max-w-[560px]">
      <div className="donor-art-glow absolute inset-[12%] rounded-full" />
      <svg
        viewBox="0 0 560 500"
        role="img"
        aria-label="Decorative engineering blueprint showing a motor, gears and mechanical components"
        className="relative z-10 h-full w-full overflow-visible"
      >
        <defs>
          <linearGradient id="donor-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f7e6a0" />
            <stop offset=".45" stopColor="#d4af37" />
            <stop offset="1" stopColor="#8e6f20" />
          </linearGradient>
          <linearGradient id="donor-steel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#dcecff" stopOpacity=".9" />
            <stop offset="1" stopColor="#5b88bd" stopOpacity=".35" />
          </linearGradient>
          <radialGradient id="donor-core">
            <stop offset="0" stopColor="#d4af37" stopOpacity=".23" />
            <stop offset="1" stopColor="#d4af37" stopOpacity="0" />
          </radialGradient>
          <pattern id="donor-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="#b9d2f5" strokeOpacity=".11" strokeWidth="1" />
          </pattern>
        </defs>

        <rect x="18" y="18" width="524" height="464" rx="28" fill="url(#donor-grid)" opacity=".8" />
        <circle cx="280" cy="245" r="190" fill="url(#donor-core)" />
        <circle cx="280" cy="245" r="178" fill="none" stroke="#d4af37" strokeOpacity=".17" strokeDasharray="2 9" />
        <circle cx="280" cy="245" r="150" fill="none" stroke="#b8d5f6" strokeOpacity=".22" strokeDasharray="3 8" />

        <motion.g
          style={{ transformOrigin: "280px 245px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 72, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="280" cy="245" r="166" fill="none" stroke="#d4af37" strokeOpacity=".42" strokeWidth="1.5" strokeDasharray="22 12 3 12" />
          {ticks.map((tick) => (
            <line
              key={tick}
              x1="280"
              y1="67"
              x2="280"
              y2="78"
              stroke="#e4c45c"
              strokeOpacity=".7"
              strokeWidth="2"
              transform={`rotate(${tick} 280 245)`}
            />
          ))}
        </motion.g>

        {/* Motor casing */}
        <motion.g
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: .96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: .3 }}
          transition={{ duration: .9, ease }}
        >
          <path d="M151 181 L184 151 H358 L390 181 V307 L359 339 H183 L151 307 Z" fill="#10294e" stroke="url(#donor-steel)" strokeWidth="2.2" />
          <path d="M181 184 H360 V305 H181 Z" fill="#0a1d38" stroke="#86b1dc" strokeOpacity=".45" />
          <path d="M204 163 V141 H337 V163" fill="none" stroke="url(#donor-metal)" strokeWidth="5" strokeLinecap="round" />
          <path d="M203 326 V350 H338 V326" fill="none" stroke="#7eaddd" strokeOpacity=".65" strokeWidth="4" strokeLinecap="round" />
          <path d="M168 207 H144 V283 H168 M373 207 H399 V283 H373" fill="none" stroke="#9ec7ec" strokeOpacity=".65" strokeWidth="4" strokeLinecap="round" />
          <path d="M225 185 V304 M280 185 V304 M335 185 V304" stroke="#8bb6e1" strokeOpacity=".28" strokeDasharray="4 8" />
          <circle cx="280" cy="245" r="81" fill="#0d2344" stroke="url(#donor-metal)" strokeWidth="2.2" />
          <circle cx="280" cy="245" r="60" fill="none" stroke="#d8e8f7" strokeOpacity=".56" strokeWidth="2" />
          <circle cx="280" cy="245" r="45" fill="#152f53" stroke="#d4af37" strokeOpacity=".7" strokeWidth="2" />
          <circle cx="280" cy="245" r="17" fill="#d4af37" fillOpacity=".18" stroke="#e6c75e" strokeWidth="2" />
          <path d="M280 205 V228 M280 262 V285 M240 245 H263 M297 245 H320" stroke="#e7c85e" strokeWidth="3" strokeLinecap="round" />
          <circle cx="280" cy="245" r="6" fill="#f7e6a0" />
          {[ [177,177], [383,177], [177,313], [383,313] ].map(([cx,cy],i)=>(
            <circle key={i} cx={cx} cy={cy} r="5" fill="#d4af37" fillOpacity=".85" />
          ))}
        </motion.g>

        {/* Rotating gear assembly */}
        <motion.g
          style={{ transformOrigin: "404px 142px" }}
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="404" cy="142" r="44" fill="#10294e" stroke="#d4af37" strokeWidth="2" strokeDasharray="7 4" />
          <circle cx="404" cy="142" r="28" fill="none" stroke="#b9d9fb" strokeOpacity=".8" strokeWidth="2" />
          <circle cx="404" cy="142" r="10" fill="#d4af37" fillOpacity=".25" stroke="#e9cd6a" strokeWidth="2" />
          {Array.from({ length: 8 }, (_, i) => (
            <rect key={i} x="399" y="91" width="10" height="13" rx="2" fill="url(#donor-metal)" transform={`rotate(${i * 45} 404 142)`} />
          ))}
        </motion.g>

        {/* Piston and connecting rod */}
        <motion.g
          initial={false}
          animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
          transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect x="82" y="111" width="52" height="62" rx="8" fill="#10294e" stroke="#9fc5ea" strokeOpacity=".8" strokeWidth="2" />
          <path d="M90 125 H126 M90 137 H126 M90 149 H126" stroke="#d4af37" strokeWidth="3" strokeLinecap="round" />
          <path d="M108 173 V219 L137 244" fill="none" stroke="url(#donor-metal)" strokeWidth="6" strokeLinecap="round" />
          <circle cx="137" cy="244" r="8" fill="#0b1d37" stroke="#e4c45c" strokeWidth="2.5" />
        </motion.g>

        {/* Engineering callouts */}
        <g fill="none" stroke="#a6c8e9" strokeOpacity=".58" strokeWidth="1.3">
          <path d="M134 115 L96 78 H40" />
          <path d="M448 142 L484 104 H526" />
          <path d="M390 334 L443 385 H517" />
          <path d="M184 350 L140 402 H44" />
        </g>
        <g fill="#d4af37">
          <circle cx="134" cy="115" r="3.5" />
          <circle cx="448" cy="142" r="3.5" />
          <circle cx="390" cy="334" r="3.5" />
          <circle cx="184" cy="350" r="3.5" />
        </g>
        <g fill="#c8d9ee" fontSize="9" fontFamily="monospace" letterSpacing="1.8" opacity=".75">
          <text x="40" y="69">PISTON ASSEMBLY</text>
          <text x="423" y="91">DRIVE GEAR</text>
          <text x="435" y="402">MOTOR HOUSING</text>
          <text x="42" y="419">TORQUE / MOTION</text>
          <text x="281" y="452" textAnchor="middle" fill="#d4af37">ENGINEERING IN MOTION · SOS</text>
        </g>

        <motion.path
          d="M52 462 C154 440 226 478 300 456 S444 435 508 456"
          fill="none"
          stroke="#d4af37"
          strokeOpacity=".8"
          strokeWidth="1.5"
          strokeDasharray="5 8"
          animate={reduceMotion ? undefined : { strokeDashoffset: [0, -52] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="donor-art-label absolute bottom-[5%] right-[4%] z-20 flex items-center gap-2 rounded-full border border-school-gold/25 bg-[#0b1d37]/80 px-3 py-2 text-[9px] font-bold uppercase tracking-[.2em] text-school-gold shadow-xl backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-school-gold shadow-[0_0_12px_rgba(212,175,55,.9)]" />
        Built for the future
      </div>
    </div>
  )
}

export default function SupportUsPage() {
  const reduceMotion = useReducedMotion()
  const [form, setForm] = useState({
    name: "",
    email: "",
    organization: "",
    supportType: "Financial contribution",
    amount: "",
    message: "",
  })

  const set = (key: keyof typeof form, value: string) =>
    setForm((previous) => ({ ...previous, [key]: value }))

  const details = () =>
    `Support / donor enquiry

Name: ${form.name}
Email: ${form.email}
Organisation: ${form.organization || "Not provided"}
Support type: ${form.supportType || "Not specified"}
Indicative contribution: ${form.amount || "Not specified"}

Message:
${form.message}`

  const valid = Boolean(form.name.trim() && form.email.trim() && form.message.trim())

  const selectSupport = (value: string) => {
    set("supportType", value)
    document.getElementById("donor-enquiry")?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    })
  }

  return (
    <div className="donor-page overflow-hidden bg-[#f6f8fb]">
      {/* Premium motor-engineering hero */}
      <section className="donor-hero relative isolate overflow-hidden bg-[#091a34] text-white">
        <div className="donor-blueprint-pattern pointer-events-none absolute inset-0" />
        <div className="donor-hero-vignette pointer-events-none absolute inset-0" />
        <motion.div
          aria-hidden="true"
          className="donor-hero-glow donor-hero-glow-one pointer-events-none absolute -left-40 top-12 h-[34rem] w-[34rem] rounded-full"
          animate={reduceMotion ? undefined : { x: [0, 32, 0], y: [0, 20, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="donor-hero-glow donor-hero-glow-two pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full"
          animate={reduceMotion ? undefined : { x: [0, -25, 0], y: [0, -18, 0], scale: [1.05, .95, 1.05] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="grid items-center gap-7 lg:grid-cols-[1.04fr_.96fr] lg:gap-8">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .8, ease }}
              className="relative z-20"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-school-gold/30 bg-school-gold/[.09] px-4 py-2 text-[9px] font-bold uppercase tracking-[.23em] text-school-gold sm:text-[10px]">
                <Sparkles className="h-3.5 w-3.5" />
                Invest in practical engineering education
              </div>
              <h1 className="max-w-3xl font-serif text-[clamp(2.7rem,6vw,5.5rem)] font-bold leading-[.98] tracking-[-.055em] text-white">
                Help build the <span className="donor-gold-text">next generation</span> of engineers.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-blue-100/75 sm:text-lg">
                Support Soshanguve Engineering School Of Specialisation and help strengthen the tools, experiences and opportunities that make technical learning practical.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="donor-cta-primary group h-13 rounded-full bg-school-gold px-7 font-bold text-school-navy shadow-[0_18px_42px_-18px_rgba(212,175,55,.75)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7c65e]">
                  <a href="#donor-enquiry">
                    Become a donor
                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-full border-white/25 bg-white/[.045] px-7 text-white backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:bg-white/10">
                  <a href="#ways-to-support">Explore ways to help <ArrowDown className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/10 pt-6 text-xs text-blue-100/65">
                <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-school-gold" /> Direct contact with the school</span>
                <span className="inline-flex items-center gap-2"><Wrench className="h-4 w-4 text-school-gold" /> Practical learning focus</span>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, scale: .94, x: 18 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: .12, ease }}
              className="relative z-10"
            >
              <MotorEngineeringArtwork reduceMotion={Boolean(reduceMotion)} />
            </motion.div>
          </div>
        </div>

        <div className="donor-hero-bottom-line absolute inset-x-0 bottom-0 h-px" />
      </section>

      {/* Clear donor proposition */}
      <section className="relative z-10 -mt-7">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[1.6rem] border border-white/70 bg-white shadow-[0_24px_70px_-38px_rgba(9,26,55,.32)] sm:grid-cols-3">
            {[
              { icon: Wrench, title: "Practical skills", text: "Help learners connect theory with hands-on engineering." },
              { icon: Cpu, title: "Modern thinking", text: "Encourage curiosity, experimentation and problem-solving." },
              { icon: GraduationCap, title: "Future pathways", text: "Support conversations that connect learning with opportunity." },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .3 }}
                transition={{ duration: .65, delay: index * .08, ease }}
                className="donor-value-card group relative flex gap-4 p-6 sm:p-7"
              >
                <div className="donor-value-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-school-navy text-school-gold shadow-lg shadow-school-navy/15 transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-5deg] group-hover:shadow-xl">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="font-technical text-base font-bold tracking-tight text-school-navy">{item.title}</h2>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">{item.text}</p>
                </div>
                {index !== 2 && <span className="absolute bottom-0 left-6 right-6 h-px bg-slate-100 sm:bottom-6 sm:left-auto sm:right-0 sm:top-6 sm:h-auto sm:w-px" />}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donor routes */}
      <section id="ways-to-support" className="scroll-mt-24 py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .35 }}
            transition={{ duration: .7, ease }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <span className="donor-eyebrow">Many ways to make a difference</span>
            <h2 className="mt-4 font-technical text-3xl font-bold leading-tight tracking-[-.045em] text-school-navy sm:text-4xl lg:text-5xl">
              Support can take more than one form.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether you are an individual, a community organisation or an industry partner, start with the contribution you are best placed to make.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {supportOptions.map((option, index) => {
              const Icon = option.icon
              const active = form.supportType === option.value
              return (
                <motion.button
                  key={option.value}
                  type="button"
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: .18 }}
                  transition={{ duration: .62, delay: index * .045, ease }}
                  whileHover={reduceMotion ? undefined : { y: -6, scale: 1.012 }}
                  whileTap={reduceMotion ? undefined : { scale: .99 }}
                  onClick={() => selectSupport(option.value)}
                  className={`donor-option-card group relative flex h-full min-h-[220px] flex-col items-start overflow-hidden rounded-[1.5rem] border p-6 text-left transition-colors duration-300 sm:p-7 ${active ? "is-selected border-school-gold bg-white shadow-[0_20px_54px_-28px_rgba(9,26,55,.32)]" : "border-slate-200/80 bg-white hover:border-school-gold/60 hover:shadow-[0_22px_54px_-30px_rgba(9,26,55,.24)]"}`}
                >
                  <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-school-gold/[.055] blur-2xl transition-transform duration-700 group-hover:scale-150" />
                  <div className="relative flex w-full items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 group-hover:-translate-y-1 group-hover:rotate-[-5deg] ${option.accent === "gold" ? "bg-school-gold/15 text-school-navy" : "bg-school-navy text-school-gold"}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className={`donor-option-check flex h-7 w-7 items-center justify-center rounded-full border transition-all duration-300 ${active ? "border-school-gold bg-school-gold text-school-navy" : "border-slate-200 text-transparent group-hover:border-school-gold/60"}`}>
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                  </div>
                  <h3 className="relative mt-6 font-technical text-lg font-bold tracking-tight text-school-navy">{option.title}</h3>
                  <p className="relative mt-2 text-sm leading-6 text-slate-500">{option.description}</p>
                  <span className="relative mt-auto inline-flex items-center gap-2 pt-5 text-[10px] font-bold uppercase tracking-[.16em] text-school-navy/65 transition-colors group-hover:text-school-navy">
                    Choose this route <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              )
            })}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-6 text-slate-400">
            Equipment and material examples are suggestions to discuss with the school. Please contact the school first so any contribution can be matched to a suitable, current priority.
          </p>
        </div>
      </section>

      {/* Mechanical feature band */}
      <section className="donor-feature-band relative overflow-hidden bg-[#0d2344] py-16 text-white sm:py-20">
        <div className="donor-blueprint-pattern donor-blueprint-pattern-subtle pointer-events-none absolute inset-0" />
        <motion.div
          aria-hidden="true"
          className="absolute -right-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-school-gold/15"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-school-gold shadow-[0_0_18px_rgba(212,175,55,.9)]" />
        </motion.div>
        <div className="container relative mx-auto grid max-w-7xl items-center gap-8 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div className="max-w-3xl">
            <span className="donor-eyebrow donor-eyebrow-light">From interest to impact</span>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight tracking-[-.04em] sm:text-4xl lg:text-5xl">
              Industry knowledge belongs in the learning environment.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100/70 sm:text-base">
              Practical engineering education is strengthened when schools, communities and industry open doors to tools, insight, experience and meaningful collaboration.
            </p>
          </div>
          <a href="#donor-enquiry" className="donor-outline-link group inline-flex items-center justify-center gap-3 self-center rounded-full border border-school-gold/50 bg-school-gold/[.08] px-6 py-4 text-sm font-bold text-school-gold transition-all duration-300 hover:-translate-y-1 hover:bg-school-gold hover:text-school-navy hover:shadow-[0_18px_42px_-18px_rgba(212,175,55,.65)]">
            Start a conversation <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* Three-step trust process */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .3 }}
              transition={{ duration: .7, ease }}
              className="max-w-lg"
            >
              <span className="donor-eyebrow">A clear way forward</span>
              <h2 className="mt-4 font-technical text-3xl font-bold leading-tight tracking-[-.045em] text-school-navy sm:text-4xl">
                A simple, transparent process.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Every contribution starts with a conversation. The school can confirm what is appropriate before you make a commitment.
              </p>
              <div className="mt-7 flex items-center gap-3 rounded-2xl border border-school-gold/25 bg-school-gold/[.08] p-4">
                <ShieldCheck className="h-6 w-6 shrink-0 text-school-navy" />
                <p className="text-xs leading-5 text-school-navy/80">
                  Protect yourself: confirm payment instructions directly with the school using its official contact details.
                </p>
              </div>
            </motion.div>

            <div className="relative space-y-4">
              <div className="donor-process-rail absolute bottom-10 left-[27px] top-10 hidden w-px sm:block" />
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={reduceMotion ? false : { opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: .3 }}
                  transition={{ duration: .65, delay: index * .1, ease }}
                  className="donor-process-step relative flex gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_14px_42px_-30px_rgba(9,26,55,.25)] sm:gap-6 sm:p-6"
                >
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-school-gold/30 bg-school-navy text-school-gold shadow-lg shadow-school-navy/15">
                    <step.icon className="h-5 w-5" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#f6f8fb] bg-school-gold text-[9px] font-black text-school-navy">{step.number}</span>
                  </div>
                  <div className="pt-1">
                    <h3 className="font-technical text-lg font-bold text-school-navy">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donor enquiry form */}
      <section id="donor-enquiry" className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-[.82fr_1.18fr] lg:gap-16">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .25 }}
              transition={{ duration: .7, ease }}
              className="lg:sticky lg:top-28"
            >
              <span className="donor-eyebrow">Let's make it practical</span>
              <h2 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-[-.05em] text-school-navy sm:text-5xl">
                Your support starts with a conversation.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                Tell us a little about yourself and how you would like to contribute. Choose email or WhatsApp to send your prepared enquiry directly to the school.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-school-navy/5 text-school-navy"><Mail className="h-4 w-4" /></div>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-school-navy">Email</p><a className="mt-1 text-sm text-slate-500 hover:text-school-navy" href="mailto:soshanguve.technical@gmail.com">soshanguve.technical@gmail.com</a></div>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#168a43]"><MessageCircle className="h-4 w-4" /></div>
                  <div><p className="text-xs font-bold uppercase tracking-wider text-school-navy">WhatsApp</p><a className="mt-1 text-sm text-slate-500 hover:text-school-navy" href="https://wa.me/27820985985" target="_blank" rel="noreferrer">Start a conversation with the school</a></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: .18 }}
              transition={{ duration: .78, delay: .08, ease }}
              className="donor-form-shell relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-[#f8fafc] p-5 shadow-[0_30px_90px_-48px_rgba(9,26,55,.36)] sm:p-8 lg:p-10"
            >
              <div className="donor-form-topline absolute inset-x-0 top-0 h-1" />
              <div className="relative mb-8 flex items-start justify-between gap-4">
                <div>
                  <p className="font-technical text-[10px] font-bold uppercase tracking-[.22em] text-school-gold">Donor / partner enquiry</p>
                  <h3 className="mt-2 font-technical text-2xl font-bold tracking-tight text-school-navy">How would you like to help?</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Fields marked optional can be left blank.</p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-school-navy text-school-gold shadow-lg sm:flex"><Zap className="h-5 w-5" /></div>
              </div>

              <div className="relative space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="donor-name" className="text-xs font-bold text-school-navy">Full name *</Label>
                    <Input id="donor-name" required autoComplete="name" value={form.name} onChange={(event) => set("name", event.target.value)} placeholder="Your name" className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-school-gold" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="donor-email" className="text-xs font-bold text-school-navy">Email address *</Label>
                    <Input id="donor-email" required type="email" autoComplete="email" value={form.email} onChange={(event) => set("email", event.target.value)} placeholder="you@example.com" className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-school-gold" />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="donor-organisation" className="text-xs font-bold text-school-navy">Organisation <span className="font-normal text-slate-400">(optional)</span></Label>
                    <Input id="donor-organisation" autoComplete="organization" value={form.organization} onChange={(event) => set("organization", event.target.value)} placeholder="Company or organisation" className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-school-gold" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="donor-amount" className="text-xs font-bold text-school-navy">Indicative contribution <span className="font-normal text-slate-400">(optional)</span></Label>
                    <Input id="donor-amount" value={form.amount} onChange={(event) => set("amount", event.target.value)} placeholder="e.g. R500, tools or in-kind" className="h-12 rounded-xl border-slate-200 bg-white focus-visible:ring-school-gold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="donor-support-type" className="text-xs font-bold text-school-navy">Support area</Label>
                  <div id="donor-support-type" className="flex flex-wrap gap-2" role="group" aria-label="Selected support area">
                    {supportOptions.map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => set("supportType", option.value)}
                        aria-pressed={form.supportType === option.value}
                        className={`rounded-full border px-3.5 py-2 text-[11px] font-semibold transition-all duration-200 ${form.supportType === option.value ? "border-school-navy bg-school-navy text-white shadow-md" : "border-slate-200 bg-white text-slate-600 hover:border-school-gold hover:text-school-navy"}`}
                      >
                        {option.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="donor-message" className="text-xs font-bold text-school-navy">Your message *</Label>
                  <Textarea
                    id="donor-message"
                    required
                    value={form.message}
                    onChange={(event) => set("message", event.target.value)}
                    placeholder="Tell the school what you would like to support, any questions you have, or how your organisation could get involved."
                    className="min-h-36 resize-y rounded-xl border-slate-200 bg-white leading-6 focus-visible:ring-school-gold"
                  />
                </div>

                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <Button
                    type="button"
                    disabled={!valid}
                    onClick={() => openEmail("Donor / Support Enquiry", details())}
                    className="h-12 rounded-xl bg-school-navy font-bold text-white shadow-lg shadow-school-navy/15 transition-all duration-300 hover:-translate-y-1 hover:bg-school-blue disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <Mail className="mr-2 h-4 w-4" /> Prepare email
                  </Button>
                  <Button
                    type="button"
                    disabled={!valid}
                    onClick={() => openWhatsApp(`Hello Soshanguve Engineering School Of Specialisation, I would like to discuss supporting the school.\n\n${details()}`)}
                    className="h-12 rounded-xl bg-[#1fae58] font-bold text-white shadow-lg shadow-green-700/10 transition-all duration-300 hover:-translate-y-1 hover:bg-[#168f48] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" /> Continue on WhatsApp
                  </Button>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-school-gold/20 bg-school-gold/[.08] p-4">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-school-navy" />
                  <p className="text-[11px] leading-5 text-slate-600">
                    This website does not collect or store this form and does not process online payments. Your message is prepared for you to send. Confirm any payment or delivery instructions directly with the school before making a contribution.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="donor-final-cta relative overflow-hidden bg-school-navy py-16 text-white sm:py-20">
        <div className="donor-blueprint-pattern donor-blueprint-pattern-subtle pointer-events-none absolute inset-0" />
        <div className="container relative mx-auto max-w-5xl px-5 text-center sm:px-6">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .35 }}
            transition={{ duration: .7, ease }}
          >
            <Sparkles className="mx-auto h-7 w-7 text-school-gold" />
            <h2 className="mt-5 font-serif text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">The future is built together.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base">
              Start a conversation about how you, your organisation or your network can help strengthen engineering education in Soshanguve.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full bg-school-gold px-8 font-bold text-school-navy shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#e7c65e]">
              <a href="#donor-enquiry">Talk to the school <ArrowUpRight className="ml-2 h-4 w-4" /></a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
