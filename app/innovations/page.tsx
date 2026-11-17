"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Award, BatteryCharging, BookOpen,
  ChevronDown, Cpu, ExternalLink, FlaskConical, GraduationCap, Leaf, Medal,
  Microscope, Plane, Radio, Sparkles, Sprout, Trophy, TrainFront, Wrench, Zap,
} from "lucide-react"

type CaseStudy = {
  id: string
  year: string
  category: string
  title: string
  discipline: string
  summary: string
  detail: string
  source: string
  sourceDate: string
  sourceUrl: string
  sourceType: "Independent reporting" | "Official record" | "School-published update"
  image?: string
  imageAlt?: string
  facts: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: "modjadji",
    year: "2022",
    category: "Clean energy",
    title: "Modjadji — the solar locomotive",
    discipline: "Mechanical · Electrical · Fabrication",
    summary: "A learner-built solar-powered train that turned energy and transport challenges into a practical engineering brief.",
    detail: "Learners began working on the locomotive in 2020. GroundUp reported that the finished prototype was solar-powered, carried power sockets and a TV screen, had room for two passengers and ran at 30 km/h. The school’s innovation work was also recognised through the Gauteng Schools of Specialisation Festival and the SAGE national competition, as reported by the Gauteng Department of Education and Rekord.",
    source: "GroundUp",
    sourceDate: "16 September 2022",
    sourceUrl: "https://groundup.org.za/article/soshanguve-learners-build-one-of-a-kind-solar-powered-train/",
    sourceType: "Independent reporting",
    facts: ["30 km/h reported prototype speed", "Top prize, Engineering category — Gauteng SoS Festival", "SAGE national and South Africa Annual Teen Entrepreneur of the Year champions"],
  },
  {
    id: "dynamic-charging",
    year: "2023",
    category: "Electric mobility",
    title: "Dynamic wireless charging for electric vehicles",
    discipline: "Physics · Electrical · Automotive",
    summary: "Amogelang Mampane investigated how an electric vehicle could charge wirelessly while moving.",
    detail: "The learner’s research used two coils and mutual inductance to explore dynamic wireless energy transfer for electric vehicles. Eskom Expo reported that Mampane received the Eskom Best Development Project award at the 2023 International Science Fair and a Gold Medal. This is a research prototype and award-winning development project, not a claim that a commercial road-charging system was deployed.",
    source: "Eskom Expo for Young Scientists",
    sourceDate: "20 October 2023",
    sourceUrl: "https://exposcience.co.za/young-soshanguve-innovator-earns-best-development-project-honours-at-eskom-expo-international-science-fair/",
    sourceType: "Official record",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-09-11-30-31-91_a23b203fd3aafc6dcb84e438dda678b6.jpg-yt5q9iMB6WMqsswYXx2nfIzyVxfTrN.jpeg",
    imageAlt: "School engineering project display",
    facts: ["Eskom Best Development Project — 2023 ISF", "Gold Medal recorded by Eskom Expo", "Wireless energy transfer using mutual inductance"],
  },
  {
    id: "electric-car",
    year: "2024–25",
    category: "Electric mobility",
    title: "Electric car & sustainable mobility",
    discipline: "Automotive · Electrical · Engineering design",
    summary: "Learners developed an electric-car project that earned recognition at national and Gauteng school innovation events.",
    detail: "A June 2025 feature reported that the school’s electric-car project received Best Implemented Project of the Year at the National Batho Pele Awards and third place in the Engineering category at the Schools of Specialisation Festival. The same report describes a wireless electric-car charger and a learner-built railway line among the school's innovation work.",
    source: "Egoli Jozi News",
    sourceDate: "22 June 2025",
    sourceUrl: "https://egolijozinews.co.za/soshanguve-engineering-school-of-specialisation-driving-innovation-and-empowering-futures/",
    sourceType: "Independent reporting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739092938017.jpg-wXZYdCdK9Z49HGVIidqamZyRyAwmrS.jpeg",
    imageAlt: "Soshanguve Engineering technical innovation project",
    facts: ["Best Implemented Project of the Year — as reported in 2025", "Third place in Engineering at the SoS Festival", "Part of a wider electric-mobility project portfolio"],
  },
  {
    id: "international-science",
    year: "2023–24",
    category: "Research",
    title: "International science-fair recognition",
    discipline: "Scientific research · Design · Experimentation",
    summary: "Soshanguve learners reached the Eskom Expo International Science Fair, with a major award for dynamic EV charging research.",
    detail: "Eskom Expo’s 2023 report documents Amogelang Mampane’s Best Development Project award and Gold Medal. A later school profile also says learners earned several medals at the 2024 Eskom Expo, including a Gold Medal at the International Science Fair. The specific 2024 project title is not stated in the source used here, so it is not inferred.",
    source: "Eskom Expo; Egoli Jozi News",
    sourceDate: "20 October 2023; 22 June 2025",
    sourceUrl: "https://exposcience.co.za/young-soshanguve-innovator-earns-best-development-project-honours-at-eskom-expo-international-science-fair/",
    sourceType: "Independent reporting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0018-6c8mSu5UhQricouUACyKwlgUZ68ff4.jpg",
    imageAlt: "Learner recognised for a science and innovation achievement",
    facts: ["2023 Gold Medal and Best Development Project", "2024 medals reported by the school profile", "Research connected to real-world engineering questions"],
  },
  {
    id: "technical-skills",
    year: "2025",
    category: "Technical skills",
    title: "Workshop learning, simulation & industry exposure",
    discipline: "Mechanical · Civil · Electrical trades",
    summary: "The school profile describes expanded trade exposure, welding simulation and industry-linked learning pathways.",
    detail: "The June 2025 profile describes an AI-powered welding simulator for remote, real-time practice, mechanical, civil and electrical vocational exposure, BMW job-shadowing links and donated Toyota engines. These are described as programme and partnership activity in that profile; they should not be read as a guarantee that every learner receives a placement or certification.",
    source: "Egoli Jozi News",
    sourceDate: "22 June 2025",
    sourceUrl: "https://egolijozinews.co.za/soshanguve-engineering-school-of-specialisation-driving-innovation-and-empowering-futures/",
    sourceType: "Independent reporting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0011-ai1QlIOBXhquApCz4uZXQXk2hAtphD.jpg",
    imageAlt: "Learners working on an engineering project",
    facts: ["AI-powered welding simulation described in the report", "Mechanical, civil and electrical trade exposure", "BMW job-shadowing links and Toyota engine donation reported"],
  },
  {
    id: "flight-01",
    year: "2026",
    category: "Aerospace",
    title: "S.o.S Flight 01 — learner-built RC aircraft",
    discipline: "Aerospace · Electronics · Fabrication",
    summary: "School-published 2026 updates showcase a learner-designed, battery-powered model aircraft and a first-place festival result.",
    detail: "The school’s own achievement update describes Flight 01 as a student-designed and assembled battery-powered RC aircraft, and reports first place at the Gauteng Schools of Specialisation Festival. The specific result is labelled as school-published because an independent report for this aircraft result was not found in the sources reviewed for this update.",
    source: "Soshanguve Engineering School",
    sourceDate: "2026 school update",
    sourceUrl: "https://www.sosha-automotive.org/achievements",
    sourceType: "School-published update",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg",
    imageAlt: "S.o.S Flight 01 learner-built aircraft",
    facts: ["Battery-powered model aircraft", "First place reported at Gauteng SoS Festival 2026", "Combines design, electronics and practical fabrication"],
  },
  {
    id: "robotics",
    year: "2026",
    category: "Automation",
    title: "mBot robotics & coding lab",
    discipline: "Robotics · Coding · Automation",
    summary: "School-published updates describe a practical robotics learning space using mBot kits and guided coding activities.",
    detail: "The school’s 2026 update describes an mBot robotics lab and Makeblock-linked activity. This is labelled as a school-published update: the research for this page did not locate an independent announcement verifying the exact partnership or launch details.",
    source: "Soshanguve Engineering School",
    sourceDate: "2026 school update",
    sourceUrl: "https://www.sosha-automotive.org/achievements",
    sourceType: "School-published update",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0021-Wdylez7JBZv7L82Jtt5wlNrnNke4rY.jpg",
    imageAlt: "Learners working with robotics equipment",
    facts: ["mBot robotics kits featured in school updates", "Coding and physical prototyping", "Connects mechanical and software thinking"],
  },
  {
    id: "horticulture",
    year: "2026",
    category: "Food systems",
    title: "Horticulture tunnels, borehole & food production",
    discipline: "Agriculture · Water · Sustainability",
    summary: "A Shoprite Foundation-backed project brings practical food production, water management and an accredited learning pathway onto campus.",
    detail: "Two horticultural tunnels and a borehole were officially opened on 15 September 2026 with support from the Shoprite Foundation. African Farming reported that 40 Grade 9 learners will use the facilities for practical training in plant production. Reporting also describes an accredited plant-production part-qualification supported by MarketPlace Academy. The school plans to use produce to supplement its feeding scheme, with possible surplus sales supporting the school.",
    source: "African Farming",
    sourceDate: "18 September 2026",
    sourceUrl: "https://www.africanfarming.com/2026/09/18/tunnels-and-an-accredited-qualification-shoprite-foundations-school-farming-project-reaches-soshanguve/",
    sourceType: "Independent reporting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0020-SYPUiWO0yYLtCcruvuwvDkEaJEcFDq.jpg",
    imageAlt: "School partnership and learner group photograph",
    facts: ["2 horticultural tunnels and a borehole", "40 Grade 9 learners in the reported programme", "Plant-production part-qualification pathway described"],
  },
]

const filterOptions = ["All", "Clean energy", "Electric mobility", "Research", "Technical skills", "Aerospace", "Automation", "Food systems"]

const milestones = [
  {
    year: "2019",
    title: "Engineering specialisation takes shape",
    text: "The school was relaunched as a Gauteng School of Specialisation with an automotive and engineering focus, connecting classroom learning with technical skills and a changing industrial environment.",
    source: "GroundUp · 16 September 2022",
    href: "https://groundup.org.za/article/soshanguve-learners-build-one-of-a-kind-solar-powered-train/",
  },
  {
    year: "2022",
    title: "Modjadji puts learner engineering on the map",
    text: "Learners developed a solar-powered locomotive, displayed it at the Sasol Innovation Expo and received wider attention for a project built through research, teamwork and practical problem-solving.",
    source: "GroundUp · 16 September 2022; Rekord · 24 January 2023",
    href: "https://groundup.org.za/article/soshanguve-learners-build-one-of-a-kind-solar-powered-train/",
  },
  {
    year: "2023",
    title: "Wireless EV charging earns national science-fair honours",
    text: "Amogelang Mampane’s dynamic wireless charging research received Eskom Expo’s Best Development Project award and a Gold Medal at the International Science Fair. The principal also received the Harry Gwala award for the school’s competition performance.",
    source: "Eskom Expo · 20 October 2023; Rekord · 24 January 2023",
    href: "https://exposcience.co.za/young-soshanguve-innovator-earns-best-development-project-honours-at-eskom-expo-international-science-fair/",
  },
  {
    year: "2024–25",
    title: "Electric mobility, trade skills and industry links expand",
    text: "A 2025 profile reports electric-car project awards, a 99.3% 2024 matric pass rate, welding simulation, vocational trade exposure and industry-linked learning activity.",
    source: "Egoli Jozi News · 22 June 2025",
    href: "https://egolijozinews.co.za/soshanguve-engineering-school-of-specialisation-driving-innovation-and-empowering-futures/",
  },
  {
    year: "2026",
    title: "The innovation footprint grows beyond engineering",
    text: "School updates showcase Flight 01 and mBot robotics activity. Separately, the Shoprite Foundation-backed horticulture tunnels and borehole add practical plant-production training and a food-security dimension to campus learning.",
    source: "School achievements · 2026; African Farming · 18 September 2026",
    href: "https://www.africanfarming.com/2026/09/18/tunnels-and-an-accredited-qualification-shoprite-foundations-school-farming-project-reaches-soshanguve/",
  },
]

const sources = [
  { name: "GroundUp", date: "16 Sep 2022", title: "Soshanguve learners build one-of-a-kind solar powered train", href: "https://groundup.org.za/article/soshanguve-learners-build-one-of-a-kind-solar-powered-train/", type: "Independent reporting" },
  { name: "Rekord", date: "24 Jan 2023", title: "Soshanguve SoS principal receives special award", href: "https://www.citizen.co.za/rekord/news-headlines/2023/01/24/soshanguve-sos-principal-receives-special-award/", type: "Independent reporting" },
  { name: "Eskom Expo", date: "20 Oct 2023", title: "Young Soshanguve innovator earns Best Development Project honours", href: "https://exposcience.co.za/young-soshanguve-innovator-earns-best-development-project-honours-at-eskom-expo-international-science-fair/", type: "Official award report" },
  { name: "Egoli Jozi News", date: "22 Jun 2025", title: "Driving innovation and empowering futures", href: "https://egolijozinews.co.za/soshanguve-engineering-school-of-specialisation-driving-innovation-and-empowering-futures/", type: "Published school profile" },
  { name: "African Farming", date: "18 Sep 2026", title: "Shoprite Foundation’s school farming project reaches Soshanguve", href: "https://www.africanfarming.com/2026/09/18/tunnels-and-an-accredited-qualification-shoprite-foundations-school-farming-project-reaches-soshanguve/", type: "Independent reporting" },
  { name: "Soshanguve Engineering", date: "2026", title: "School-published achievements and project updates", href: "https://www.sosha-automotive.org/achievements", type: "School source" },
]

const innovationLoop = [
  { n: "01", title: "Identify", text: "Start with a practical problem in the community, the workshop or industry.", icon: Radio },
  { n: "02", title: "Research", text: "Investigate the science, materials, constraints and possible approaches.", icon: Microscope },
  { n: "03", title: "Design", text: "Bring different technical disciplines together around a build plan.", icon: BookOpen },
  { n: "04", title: "Build & test", text: "Prototype, measure, improve and learn from what happens.", icon: Wrench },
  { n: "05", title: "Present", text: "Share the result, compete, and connect learning with opportunity.", icon: GraduationCap },
]

function ProjectArtwork({ item }: { item: CaseStudy }) {
  const reduceMotion = useReducedMotion()
  if (item.id === "modjadji") {
    return (
      <div className="relative flex h-full min-h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#1b4565_0%,#0b2038_58%,#061326_100%)]">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:28px_28px]" />
        <div className="absolute right-10 top-8 h-16 w-16 rounded-full bg-school-gold/10 blur-2xl" />
        <svg viewBox="0 0 640 300" role="img" aria-label="Illustration of Modjadji, the school’s solar-powered locomotive" className="relative w-full max-w-[580px] px-3">
          <defs>
            <linearGradient id="modjadji-shell" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#55b9e3"/><stop offset="55%" stopColor="#0876a8"/><stop offset="100%" stopColor="#073858"/></linearGradient>
            <linearGradient id="modjadji-solar" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#244c70"/><stop offset="100%" stopColor="#0a203a"/></linearGradient>
            <linearGradient id="modjadji-metal" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#8c6a29"/><stop offset="50%" stopColor="#f5df9d"/><stop offset="100%" stopColor="#a98132"/></linearGradient>
          </defs>
          <path d="M56 232 H584" stroke="#a7c0d2" strokeOpacity=".55" strokeWidth="4" strokeLinecap="round"/>
          <path d="M72 245 H568" stroke="#8ca5ba" strokeOpacity=".45" strokeWidth="3" strokeDasharray="5 9"/>
          {Array.from({length:13},(_,i)=><path key={i} d={"M"+(85+i*39)+" 233 v17"} stroke="#93aabd" strokeOpacity=".45" strokeWidth="4"/>)}
          <path d="M128 100 L166 66 H470 L510 106 V218 H116 V143 Z" fill="url(#modjadji-shell)" stroke="#b9d8e8" strokeWidth="2.5"/>
          <path d="M153 105 L190 77 H450 L484 105 Z" fill="#09213b" stroke="#d4e6f0" strokeOpacity=".55" strokeWidth="2"/>
          <path d="M176 98 L198 82 H268 V105 H164 Z M283 82 H365 V105 H283 Z M380 82 H444 L464 105 H380 Z" fill="url(#modjadji-solar)" stroke="#8bb4ce" strokeWidth="1.5"/>
          <path d="M180 87 l-10 15 M204 84 l-10 18 M228 83 l-10 20 M252 83 l-10 20 M292 84 l-10 18 M316 84 l-10 18 M340 84 l-10 18 M388 84 l-10 18 M412 84 l-10 18 M436 86 l-10 16" stroke="#90c6df" strokeOpacity=".55" strokeWidth="1.2"/>
          <path d="M125 139 H500 V206 H125 Z" fill="#063a5b" stroke="#c4e1ef" strokeOpacity=".5"/>
          <path d="M143 150 H226 V197 H143 Z M237 150 H320 V197 H237 Z M331 150 H414 V197 H331 Z M425 150 H484 V197 H425 Z" fill="#b4dff0" fillOpacity=".28" stroke="#d4ebf5" strokeWidth="2"/>
          <path d="M143 151 L172 151 V197 H143 Z M237 151 L265 151 V197 H237 Z M331 151 L359 151 V197 H331 Z" fill="#d8eff8" fillOpacity=".22"/>
          <path d="M118 207 H512" stroke="#f2d88e" strokeWidth="4"/>
          <path d="M116 121 H96 V105 M510 122 H532 V106" fill="none" stroke="#e9d18d" strokeWidth="3"/>
          <path d="M245 63 L258 42 H404 L420 63 Z" fill="#0a1e35" stroke="#d5dfeb" strokeOpacity=".55"/>
          <text x="320" y="130" fill="#fff2bf" fontSize="11" fontWeight="700" letterSpacing="2.2" textAnchor="middle">MODJADJI</text>
          <g><circle cx="184" cy="228" r="25" fill="#061326" stroke="#b5c8d8" strokeWidth="5"/><circle cx="184" cy="228" r="9" fill="url(#modjadji-metal)"/><circle cx="444" cy="228" r="25" fill="#061326" stroke="#b5c8d8" strokeWidth="5"/><circle cx="444" cy="228" r="9" fill="url(#modjadji-metal)"/></g>
          <motion.path d="M210 54 H430" stroke="#f4df9a" strokeWidth="2" strokeLinecap="round" animate={reduceMotion ? undefined : { opacity:[.15,.8,.15] }} transition={{duration:3.5,repeat:Infinity,ease:"easeInOut"}}/>
          <text x="52" y="282" fill="#9db4c8" fontSize="9" fontFamily="monospace" letterSpacing="1.6">SOLAR LOCOMOTIVE / LEARNER BUILT / 2022</text>
          <text x="588" y="282" fill="#e5c878" fontSize="9" fontFamily="monospace" textAnchor="end">MODJADJI</text>
        </svg>
      </div>
    )
  }
  if (item.id === "horticulture") {
    return (
      <div className="relative flex h-full min-h-[250px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#153e42] via-[#0d2938] to-[#061326]">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:26px_26px]" />
        {[0, 1].map((index) => (
          <motion.div key={index} animate={{ y: [0, -2, 0] }} transition={{ duration: 5 + index, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-14 top-8 w-[34%] rounded-t-[50%] border-[5px] border-emerald-100/55 bg-emerald-200/[0.06]" style={{ left: index === 0 ? "13%" : "53%" }}>
            <div className="absolute inset-x-2 bottom-0 h-[46%] rounded-t-[50%] bg-gradient-to-t from-emerald-700/55 to-emerald-300/10" />
            {Array.from({ length: 4 }, (_, i) => <span key={i} className="absolute bottom-3 h-10 w-2 rounded-full bg-lime-200/70" style={{ left: (18 + i * 20) + "%" }} />)}
          </motion.div>
        ))}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-emerald-100/25 bg-[#081d29]/80 px-4 py-2 font-mono text-[9px] uppercase tracking-[.16em] text-emerald-100">Grow · Learn · Sustain</div>
      </div>
    )
  }
  if (item.id === "dynamic-charging") {
    return (
      <div className="relative flex h-full min-h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_44%,#235575_0%,#102b49_50%,#061326_100%)]">
        <div className="absolute inset-8 rounded-2xl border border-sky-200/15" />
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }} className="absolute h-40 w-40 rounded-full border border-dashed border-sky-200/45" />
        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} className="absolute h-28 w-28 rounded-full border border-dotted border-school-gold/65" />
        <div className="relative grid h-28 w-52 grid-cols-2 items-center gap-5 rounded-2xl border border-sky-100/40 bg-[#0b223c]/85 p-4 shadow-[0_25px_70px_-24px_rgba(0,0,0,.8)]">
          <div className="flex h-16 items-center justify-center rounded-xl border border-sky-100/30 bg-sky-300/10"><BatteryCharging className="h-8 w-8 text-sky-200" /></div>
          <div className="flex h-16 items-center justify-center rounded-xl border border-school-gold/30 bg-school-gold/10"><Zap className="h-8 w-8 text-school-gold" /></div>
        </div>
        <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[.18em] text-white/45">Mutual inductance / dynamic charging</span>
      </div>
    )
  }
  if (item.id === "international-science") {
    return (
      <div className="relative flex h-full min-h-[250px] items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_50%_42%,#244f70_0%,#0d2340_55%,#061326_100%)]">
        <div className="absolute inset-6 rounded-[1.4rem] border border-school-gold/25" />
        <motion.div animate={{ rotate: [0, 3, 0, -3, 0], y: [0, -4, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-[#c5a24a] bg-gradient-to-br from-[#ffe8a4] via-[#d7b75d] to-[#8d6a25] shadow-[0_25px_70px_-22px_rgba(212,175,55,.65)]">
          <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border border-school-navy/35 text-school-navy"><Medal className="h-8 w-8" /><span className="mt-1 font-mono text-[10px] font-black tracking-[.2em]">GOLD</span></div>
        </motion.div>
        <span className="absolute bottom-5 left-5 font-mono text-[9px] uppercase tracking-[.18em] text-white/45">Eskom Expo / International Science Fair</span>
      </div>
    )
  }
  if (item.image) return (
    <div className="relative h-full min-h-[250px] overflow-hidden bg-[#0a1931]">
      <Image src={item.image} alt={item.imageAlt || item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/60 via-transparent to-[#061326]/10" />
    </div>
  )
  return <div className="flex h-full min-h-[250px] items-center justify-center bg-[#071a31]"><Sparkles className="h-12 w-12 text-school-gold" /></div>
}

export default function InnovationsPage() {
  const reduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState("All")
  const [expandedId, setExpandedId] = useState<string | null>("modjadji")
  const [activeYear, setActiveYear] = useState("2022")
  const visibleProjects = useMemo(() => activeCategory === "All" ? caseStudies : caseStudies.filter((item) => item.category === activeCategory), [activeCategory])
  const activeMilestone = milestones.find((item) => item.year === activeYear) || milestones[1]

  return (
    <main className="innovation-hub-page min-h-screen overflow-hidden bg-[#f5f7fa] text-school-navy">
      <section className="relative isolate overflow-hidden bg-[#061326] pb-16 pt-16 text-white lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="pointer-events-none absolute -left-40 top-10 h-[28rem] w-[28rem] rounded-full bg-sky-500/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[30rem] w-[30rem] rounded-full bg-school-gold/15 blur-[100px]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-6 lg:grid-cols-[.92fr_1.08fr] lg:gap-14 lg:px-8">
          <motion.div initial={reduceMotion ? false : { opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, ease: [0.22, 1, .36, 1] }} className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-school-gold/25 bg-white/[.045] px-4 py-2 text-[9px] font-bold uppercase tracking-[.22em] text-school-gold"><span className="relative flex h-2 w-2"><span className="absolute inset-0 animate-ping rounded-full bg-school-gold/60" /><span className="relative h-2 w-2 rounded-full bg-school-gold" /></span> Innovation Hub / Field Notes 2019—2026</div>
            <h1 className="max-w-3xl font-display text-5xl font-semibold leading-[.98] tracking-[-.06em] text-white sm:text-6xl lg:text-7xl">Ideas built into <span className="text-school-gold">real things.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">A record of learner ingenuity at Soshanguve Engineering — from a solar-powered locomotive and award-winning wireless EV-charging research to electric mobility, technical trades, robotics and practical food-production skills.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-school-gold px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.12em] text-school-navy shadow-[0_18px_45px_-18px_rgba(212,175,55,.7)] transition-all hover:-translate-y-1 hover:bg-white">Explore projects <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-y-1" /></a>
              <a href="#timeline" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.05] px-6 py-3.5 text-xs font-bold uppercase tracking-[.12em] text-white/75 transition-all hover:border-white/45 hover:bg-white/10">Explore timeline <ArrowRight className="h-4 w-4" /></a>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[{value:"2019",label:"Engineering SoS launch"},{value:"30 km/h",label:"Modjadji reported speed"},{value:"Gold",label:"Eskom Expo ISF medal"},{value:"40",label:"Grade 9 learners in 2026 horticulture programme"}].map((stat) => (
                <div key={stat.label} className="border-l border-school-gold/40 pl-3"><p className="font-technical text-2xl font-bold tracking-[-.04em] text-white sm:text-3xl">{stat.value}</p><p className="mt-1 text-[9px] leading-4 text-white/40">{stat.label}</p></div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={reduceMotion ? false : { opacity: 0, x: 28, scale: .97 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: .85, delay: .1, ease: [0.22, 1, .36, 1] }} className="relative">
            <div className="absolute -inset-5 rounded-[2.25rem] border border-school-gold/10" />
            <div className="relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[.04] p-2 shadow-[0_40px_100px_-38px_rgba(0,0,0,.85)] backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem]">
                <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg" alt="S.o.S Flight 01 learner-built aircraft" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 52vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061326]/75 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5"><p className="text-[9px] font-bold uppercase tracking-[.2em] text-school-gold">School project / 2026</p><p className="mt-1 font-display text-2xl font-semibold text-white">S.o.S Flight 01</p></div>
              </div>
              <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5"><div><p className="text-[9px] font-bold uppercase tracking-[.2em] text-school-gold">Featured milestone / 2022</p><p className="mt-1 font-display text-xl font-semibold text-white">Modjadji solar locomotive</p></div><span className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-300/20 bg-emerald-300/[.08] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[.14em] text-emerald-100 sm:self-auto"><Trophy className="h-3.5 w-3.5" /> GDE Engineering prize</span></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-school-navy/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 sm:grid-cols-3 sm:px-6 lg:px-8">
          <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-school-gold/20 bg-school-gold/10"><Wrench className="h-4 w-4 text-school-gold" /></span><div><p className="text-xs font-extrabold uppercase tracking-[.12em]">Applied engineering</p><p className="mt-1 text-xs leading-5 text-slate-500">Technical knowledge becomes prototypes, systems and practical capability.</p></div></div>
          <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-sky-200 bg-sky-50"><FlaskConical className="h-4 w-4 text-sky-700" /></span><div><p className="text-xs font-extrabold uppercase tracking-[.12em]">Research & recognition</p><p className="mt-1 text-xs leading-5 text-slate-500">Learners have represented the school in national and international innovation spaces.</p></div></div>
          <div className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50"><Sprout className="h-4 w-4 text-emerald-700" /></span><div><p className="text-xs font-extrabold uppercase tracking-[.12em]">Community problem-solving</p><p className="mt-1 text-xs leading-5 text-slate-500">Recent work connects practical skills with sustainability, food and local opportunity.</p></div></div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl"><div className="mb-4 flex items-center gap-3"><span className="h-px w-9 bg-school-gold" /><span className="text-[10px] font-extrabold uppercase tracking-[.22em] text-school-gold">Project portfolio / 01—08</span></div><h2 className="font-display text-4xl font-semibold leading-[1.04] tracking-[-.055em] text-school-navy sm:text-5xl">The work behind the <span className="text-[#b18a32]">recognition.</span></h2><p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">Filter by discipline, open a project to read the context, and follow the source trail. School-published updates are clearly distinguished from independent reporting and official award records.</p></div>
            <div className="flex items-center gap-2 text-[9px] font-mono uppercase tracking-[.16em] text-slate-400"><Radio className="h-3.5 w-3.5 text-school-gold" /> {visibleProjects.length} projects shown</div>
          </div>
          <div className="mb-8 flex flex-wrap gap-2">
            {filterOptions.map((category) => <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={"rounded-full border px-4 py-2.5 text-[10px] font-extrabold uppercase tracking-[.12em] transition-all duration-200 " + (activeCategory === category ? "border-school-navy bg-school-navy text-white shadow-lg shadow-school-navy/15" : "border-school-navy/10 bg-white text-slate-500 hover:border-school-gold/50 hover:text-school-navy")}>{category}</button>)}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={activeCategory} initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .3 }} className="grid gap-5 lg:grid-cols-2">
              {visibleProjects.map((item, index) => (
                <motion.article key={item.id} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .42, delay: reduceMotion ? 0 : index * .045 }} className="group overflow-hidden rounded-[1.45rem] border border-school-navy/[.08] bg-white shadow-[0_18px_55px_-38px_rgba(9,31,62,.36)] transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/35 hover:shadow-[0_28px_70px_-38px_rgba(9,31,62,.46)]">
                  <div className="grid md:grid-cols-[.95fr_1.05fr]">
                    <div className="relative min-h-[250px] overflow-hidden"><ProjectArtwork item={item} /><span className="absolute left-4 top-4 rounded-full border border-white/20 bg-[#061326]/75 px-3 py-1.5 font-mono text-[9px] font-bold tracking-[.14em] text-white backdrop-blur">{item.year}</span></div>
                    <div className="flex flex-col p-5 sm:p-6">
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2"><span className="rounded-full border border-school-gold/25 bg-school-gold/[.08] px-2.5 py-1 text-[8px] font-extrabold uppercase tracking-[.16em] text-[#8e6a21]">{item.category}</span><span className="text-[8px] font-semibold uppercase tracking-[.12em] text-slate-400">{item.sourceType}</span></div>
                      <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-.035em] text-school-navy">{item.title}</h3>
                      <p className="mt-2 text-[9px] font-bold uppercase tracking-[.13em] text-slate-400">{item.discipline}</p>
                      <p className="mt-4 text-sm leading-6 text-slate-600">{item.summary}</p>
                      <div className="mt-4 flex flex-wrap gap-2">{item.facts.slice(0, 2).map((fact) => <span key={fact} className="rounded-lg bg-slate-50 px-2.5 py-1.5 text-[9px] font-semibold leading-4 text-slate-500">{fact}</span>)}</div>
                      <div className="mt-auto flex items-center justify-between gap-3 pt-6"><button type="button" aria-expanded={expandedId === item.id} onClick={() => setExpandedId(expandedId === item.id ? null : item.id)} className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-school-navy transition-colors hover:text-[#9a7428]">{expandedId === item.id ? "Close case note" : "Open case note"} <ChevronDown className={"h-3.5 w-3.5 transition-transform " + (expandedId === item.id ? "rotate-180" : "")} /></button><span className="font-mono text-[8px] uppercase tracking-[.12em] text-slate-300">SOS / {item.year}</span></div>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {expandedId === item.id && <motion.div initial={reduceMotion ? false : { height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .28 }} className="overflow-hidden border-t border-school-navy/[.08] bg-[#f8fafc]"><div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:p-6"><div><p className="mb-2 text-[9px] font-extrabold uppercase tracking-[.2em] text-school-gold">Project note</p><p className="text-sm leading-7 text-slate-600">{item.detail}</p><p className="mt-4 text-[9px] font-semibold leading-5 text-slate-400">Source: {item.source} · {item.sourceDate}</p></div><div className="flex items-start sm:justify-end"><a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-school-navy/15 bg-white px-4 py-2.5 text-[9px] font-bold uppercase tracking-[.12em] text-school-navy transition-all hover:border-school-gold/50 hover:text-[#997124]">View source <ExternalLink className="h-3 w-3" /></a></div></div></motion.div>}
                  </AnimatePresence>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="timeline" className="scroll-mt-24 border-y border-white/10 bg-[#08192f] py-20 text-white lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div><div className="mb-4 flex items-center gap-3"><span className="h-px w-9 bg-school-gold" /><span className="text-[10px] font-extrabold uppercase tracking-[.22em] text-school-gold">Milestones / 2019—2026</span></div><h2 className="font-display text-4xl font-semibold leading-[1.05] tracking-[-.05em] sm:text-5xl">A timeline of <span className="text-school-gold">doing.</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-white/50">The Hub draws on independent reporting, official award records and the school’s own project updates. Select a year to explore the milestone and its source.</p><div className="mt-8 flex flex-wrap gap-2">{milestones.map((item) => <button key={item.year} type="button" onClick={() => setActiveYear(item.year)} aria-pressed={activeYear === item.year} className={"rounded-full border px-4 py-2.5 font-mono text-[10px] font-bold tracking-[.1em] transition-all " + (activeYear === item.year ? "border-school-gold bg-school-gold text-school-navy" : "border-white/15 bg-white/[.04] text-white/60 hover:border-school-gold/40 hover:text-white")}>{item.year}</button>)}</div></div>
          <AnimatePresence mode="wait">
            <motion.div key={activeMilestone.year} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .3 }} className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[.045] p-6 shadow-[0_35px_90px_-55px_rgba(0,0,0,.8)] sm:p-9"><div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-school-gold/[.08] blur-3xl" /><div className="relative"><div className="flex items-center justify-between"><span className="font-mono text-[10px] font-bold uppercase tracking-[.18em] text-school-gold">Selected milestone</span><span className="font-display text-5xl font-semibold tracking-[-.06em] text-white/10 sm:text-6xl">{activeMilestone.year}</span></div><h3 className="mt-6 max-w-xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{activeMilestone.title}</h3><p className="mt-5 max-w-xl text-sm leading-7 text-white/60">{activeMilestone.text}</p><div className="mt-8 border-t border-white/10 pt-5"><p className="text-[8px] font-bold uppercase tracking-[.18em] text-white/35">Source trail</p><p className="mt-2 text-xs leading-5 text-white/55">{activeMilestone.source}</p><a href={activeMilestone.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[.14em] text-school-gold transition-colors hover:text-white">Open supporting source <ArrowUpRight className="h-3.5 w-3.5" /></a></div></div></motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="mx-auto mb-12 max-w-3xl text-center"><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-school-gold">The innovation loop</p><h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-.05em] text-school-navy sm:text-5xl">Problem first. Prototype next.</h2><p className="mt-4 text-sm leading-7 text-slate-500">A simple way to understand the project-based approach behind the school’s technical and innovation work.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">{innovationLoop.map((step, index) => { const Icon = step.icon; return <motion.div key={step.n} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .45, delay: reduceMotion ? 0 : index * .06 }} className="relative rounded-2xl border border-school-navy/10 bg-white p-5 shadow-[0_15px_45px_-36px_rgba(9,31,62,.35)]"><div className="flex items-center justify-between"><span className="font-mono text-[9px] font-bold tracking-[.15em] text-slate-300">{step.n} / 05</span><Icon className="h-4 w-4 text-school-gold" /></div><h3 className="mt-7 font-display text-xl font-semibold text-school-navy">{step.title}</h3><p className="mt-2 text-xs leading-6 text-slate-500">{step.text}</p>{index < 4 && <div className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-school-navy/10 bg-[#f5f7fa] text-school-gold lg:flex"><ArrowRight className="h-3 w-3" /></div>}</motion.div> })}</div>
        </div>
      </section>

      <section className="border-t border-school-navy/10 bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"><div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-school-gold">Evidence & further reading</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-[-.04em] text-school-navy sm:text-4xl">Follow the source trail.</h2></div><p className="max-w-md text-xs leading-6 text-slate-400">Publication dates and evidence labels distinguish official records, independent reporting and school-published project updates.</p></div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{sources.map((source) => <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="group flex min-h-[142px] flex-col rounded-2xl border border-school-navy/10 bg-[#f8fafc] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/40 hover:bg-white hover:shadow-xl"><div className="flex items-center justify-between gap-2"><span className="text-[9px] font-extrabold uppercase tracking-[.15em] text-school-gold">{source.name}</span><span className="font-mono text-[8px] text-slate-400">{source.date}</span></div><p className="mt-4 flex-1 text-sm font-bold leading-6 text-school-navy">{source.title}</p><div className="mt-4 flex items-center justify-between gap-2"><span className="text-[8px] font-semibold uppercase tracking-[.12em] text-slate-400">{source.type}</span><span className="inline-flex items-center gap-2 text-[9px] font-extrabold uppercase tracking-[.14em] text-slate-400 transition-colors group-hover:text-school-navy">Read source <ExternalLink className="h-3 w-3" /></span></div></a>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-school-navy py-16 text-white lg:py-20"><div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full bg-school-gold/10 blur-3xl" /><div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"><div className="max-w-2xl"><p className="text-[10px] font-extrabold uppercase tracking-[.22em] text-school-gold">Build the next chapter</p><h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">Curiosity becomes capability when learners get to build.</h2><p className="mt-4 text-sm leading-7 text-white/55">Explore technical learning pathways or speak with the school about supporting practical innovation.</p></div><div className="flex flex-wrap gap-3"><Link href="/programs" className="inline-flex items-center gap-2 rounded-full bg-school-gold px-6 py-3.5 text-xs font-extrabold uppercase tracking-[.12em] text-school-navy transition-all hover:-translate-y-1 hover:bg-white">Explore programmes <ArrowRight className="h-4 w-4" /></Link><Link href="/partnerships" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[.05] px-6 py-3.5 text-xs font-bold uppercase tracking-[.12em] text-white transition-all hover:border-school-gold/50 hover:text-school-gold">Partner with the school <ArrowUpRight className="h-4 w-4" /></Link></div></div></section>
    </main>
  )
}
