"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion"
import {
  ArrowUpRight,
  BookOpen,
  Cpu,
  Building2,
  GraduationCap,
  Handshake,
  Home,
  Menu,
  Trophy,
  Users,
  Wrench,
  X,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarMenuItem } from "@/components/sidebar-menu-item"

const routes = [
  { href: "/", label: "Home", description: "The school at a glance", icon: Home },
  { href: "/about", label: "About", description: "Our story, purpose and people", icon: Building2 },
  { href: "/academics", label: "Academics", description: "Learning and academic life", icon: GraduationCap },
  { href: "/achievements", label: "Achievements", description: "Milestones and recognition", icon: Trophy },
  { href: "/activities", label: "Activities", description: "Life beyond the classroom", icon: Wrench },
  { href: "/innovations", label: "Innovation Hub", description: "Ideas, technology and projects", icon: Cpu },
  { href: "/partnerships", label: "Partnerships", description: "Connect and collaborate", icon: Handshake },
  { href: "/programs", label: "Programs", description: "Explore school programmes", icon: BookOpen },
  { href: "/support-us", label: "Support Us", description: "Help strengthen opportunities", icon: Handshake },
  { href: "/contact", label: "Contact", description: "Reach the school team", icon: Users },
  { href: "/apply", label: "Admissions & Enquiries", description: "Application information and enquiries", icon: GraduationCap },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const scrollProgress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })
  const primaryRoutes = routes.filter((route) => ["/", "/about", "/academics", "/achievements", "/innovations", "/programs", "/partnerships"].includes(route.href))

  return (
    <motion.header
      initial={{ y: -28, opacity: 0, filter: "blur(5px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: .62, ease: [.22, 1, .36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6 lg:pt-5"
    >
      <motion.div aria-hidden="true" className="site-scroll-progress" style={{ scaleX: scrollProgress }} />
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-[68px] items-center rounded-[22px] border border-white/70 bg-white/90 px-3 shadow-[0_18px_50px_rgba(15,35,75,0.14)] backdrop-blur-2xl ring-1 ring-black/[0.03] sm:px-4 lg:h-[74px]">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5 rounded-2xl px-1.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-gold">
            <motion.div whileHover={{ scale: 1.04, rotate: -2 }} whileTap={{ scale: .97 }} className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-school-navy/10 to-school-gold/15 p-1 ring-1 ring-school-gold/20 shadow-sm sm:h-12 sm:w-12">
              <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Engineering School of Specialisation crest" width={48} height={48} className="h-full w-full object-contain" priority />
            </motion.div>
            <div className="min-w-0 max-w-[190px] sm:max-w-none">
              <p className="whitespace-nowrap font-display text-[11px] font-semibold leading-none tracking-[-.035em] text-school-navy sm:text-[15px] sm:tracking-[-.02em] lg:text-base">Soshanguve Engineering</p>
              <p className="mt-1 whitespace-nowrap font-sans text-[7px] font-extrabold uppercase tracking-[.12em] text-school-gold sm:text-[9px] sm:tracking-[.18em] lg:text-[10px]">School of Specialisation</p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center xl:flex">
            <div className="mx-6 flex items-center rounded-full border border-school-navy/[.06] bg-school-navy/[.025] p-1">
              {primaryRoutes.map((route) => {
                const isActive = pathname === route.href
                return (
                  <Link key={route.href} href={route.href} aria-current={isActive ? "page" : undefined} className={"relative rounded-full px-3.5 py-2 font-sans text-[11px] font-extrabold tracking-[.01em] transition-colors duration-200 lg:px-4 " + (isActive ? "text-white" : "text-slate-600 hover:text-school-navy")}>
                    {isActive && <motion.span layoutId="desktop-nav-pill" className="absolute inset-0 -z-10 rounded-full bg-school-navy shadow-md shadow-school-navy/20" transition={{ type: "spring", stiffness: 420, damping: 32 }} />}
                    {route.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link href="/apply" className="group hidden items-center gap-1.5 rounded-full bg-school-navy px-4 py-2.5 font-sans text-xs font-extrabold text-white shadow-md shadow-school-navy/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-lg lg:flex">
              Admissions <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button variant="ghost" size="icon" aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"} className={"h-11 w-11 rounded-full border transition-all duration-300 " + (isOpen ? "border-school-gold/35 bg-school-navy text-school-gold shadow-lg" : "border-school-navy/10 bg-school-navy/[.035] text-school-navy hover:border-school-blue/25 hover:bg-school-blue/[.08]")}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span key={isOpen ? "close" : "menu"} initial={{ opacity: 0, rotate: -70, scale: .7 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 70, scale: .7 }} transition={{ duration: .18 }}>
                      {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.span>
                  </AnimatePresence>
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-full max-w-none border-l border-white/30 bg-[#f2f6fa] p-0 text-school-navy shadow-[-25px_0_90px_-35px_rgba(4,22,42,.5)] sm:max-w-[470px] [&>button]:right-5 [&>button]:top-5 [&>button]:z-20 [&>button]:rounded-xl [&>button]:border [&>button]:border-white/15 [&>button]:bg-white/10 [&>button]:p-2 [&>button]:text-white [&>button]:opacity-100 [&>button]:hover:bg-white/20"
              >
                <div className="relative flex h-full flex-col overflow-hidden">
                  <div className="pointer-events-none absolute inset-0 opacity-[.55] [background-image:linear-gradient(rgba(30,58,138,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.045)_1px,transparent_1px)] [background-size:34px_34px]" />
                  <div className="pointer-events-none absolute -right-24 top-14 h-64 w-64 rounded-full bg-[#76a8ce]/20 blur-3xl" />

                  <div className="relative overflow-hidden bg-gradient-to-br from-[#173d60] via-[#123454] to-[#0c2948] px-6 pb-7 pt-8 text-white sm:px-8">
                    <div className="pointer-events-none absolute -right-8 -top-16 h-52 w-52 rounded-full border border-white/10" />
                    <div className="pointer-events-none absolute -right-1 top-[-4.5rem] h-44 w-44 rounded-full border border-school-gold/20" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-school-gold/65 to-transparent" />
                    <div className="relative flex items-center gap-3 pr-12">
                      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-school-gold/25 bg-white p-1 shadow-[0_12px_26px_-14px_rgba(0,0,0,.5)]">
                        <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Engineering School of Specialisation crest" width={48} height={48} className="h-full w-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-display text-base font-semibold leading-tight tracking-[-.035em] sm:text-lg">Soshanguve Engineering</p>
                        <p className="mt-1 font-sans text-[8px] font-extrabold uppercase tracking-[.18em] text-school-gold sm:text-[9px]">School of Specialisation</p>
                      </div>
                    </div>
                    <div className="relative mt-8 flex items-end justify-between gap-3">
                      <div>
                        <p className="font-mono text-[8px] font-bold uppercase tracking-[.22em] text-white/45">Navigation / Explore</p>
                        <h2 className="mt-2 font-display text-3xl font-semibold leading-none tracking-[-.055em] text-white">Find your way.</h2>
                        <p className="mt-2 text-xs text-white/55">Everything you need to discover the school.</p>
                      </div>
                      <div className="mb-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-white/[.07] text-school-gold">
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="relative flex-1 overflow-y-auto px-4 py-5 sm:px-6">
                    <div className="mb-3 flex items-center justify-between px-1">
                      <p className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">Explore the website</p>
                      <span className="text-[9px] font-semibold text-slate-400">11 destinations</span>
                    </div>
                    <div className="space-y-1.5">
                      <AnimatePresence initial={false}>
                        {routes.map((route, index) => {
                          const Icon = route.icon
                          return <SidebarMenuItem key={route.href} href={route.href} label={route.label} description={route.description} isActive={pathname === route.href} onClick={() => setIsOpen(false)} index={index} icon={<Icon className="h-4 w-4" />} />
                        })}
                      </AnimatePresence>
                    </div>
                    <div className="mt-5 flex items-center gap-3 rounded-xl border border-[#d7e3ed] bg-white/65 px-4 py-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#e8f0f6] text-[#315f83]"><Users className="h-4 w-4" /></span>
                      <p className="text-[10px] leading-5 text-slate-500">A school community built around learning, technical confidence and opportunity.</p>
                    </div>
                  </motion.div>

                  <div className="relative border-t border-[#dce5ec] bg-white/90 px-4 pb-5 pt-4 shadow-[0_-15px_45px_-38px_rgba(13,47,78,.3)] backdrop-blur-xl sm:px-6">
                    <div className="mb-3 flex items-center justify-between px-1">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-[.2em] text-slate-400">Take the next step</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-school-gold shadow-[0_0_10px_rgba(212,175,55,.6)]" />
                    </div>
                    <div className="grid grid-cols-[1.15fr_1fr] gap-2">
                      <Link href="/apply" onClick={() => setIsOpen(false)} className="group flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#12395d] px-3 py-3 font-sans text-xs font-extrabold text-white shadow-[0_12px_26px_-14px_rgba(13,47,78,.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#245d86]">Admissions <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                      <Link href="/contact" onClick={() => setIsOpen(false)} className="flex min-h-12 items-center justify-center rounded-xl border border-[#c9d9e5] bg-[#f2f6fa] px-3 py-3 font-sans text-xs font-bold text-[#244a69] transition-all duration-300 hover:border-[#9cb8ce] hover:bg-[#e8f0f6]">Contact school</Link>
                    </div>
                    <p className="mt-3 text-center font-mono text-[8px] tracking-[.12em] text-slate-400">SOSHANGUVE ENGINEERING / SOS</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
