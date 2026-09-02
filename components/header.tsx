"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowUpRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarMenuItem } from "@/components/sidebar-menu-item"

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/staff", label: "Staff" },
  { href: "/academics", label: "Academics" },
  { href: "/achievements", label: "Achievements" },
  { href: "/activities", label: "Activities" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/programs", label: "Programs" },
  { href: "/documents", label: "Documents" },
  { href: "/support-us", label: "Support Us" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply Now" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const primaryRoutes = routes.slice(0, 7)

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 lg:px-6 lg:pt-5"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-[68px] items-center rounded-[22px] border border-white/60 bg-white/90 px-3 shadow-[0_18px_50px_rgba(15,35,75,0.14)] backdrop-blur-2xl ring-1 ring-black/[0.03] sm:px-4 lg:h-[74px]">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5 rounded-2xl px-1.5 py-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-gold">
            <motion.div
              whileHover={{ scale: 1.04, rotate: -2 }}
              whileTap={{ scale: 0.97 }}
              className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-school-navy/10 to-school-gold/15 p-1 ring-1 ring-school-gold/20 shadow-sm sm:h-12 sm:w-12"
            >
              <Image
                src="/images/soshanguve-logo.jpg"
                alt="Soshanguve Automotive S.O.S School Crest"
                width={48}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </motion.div>
            <div className="hidden sm:block">
              <p className="font-display text-[15px] font-semibold leading-none tracking-[-0.02em] text-school-navy lg:text-base">Soshanguve</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.18em] text-school-gold lg:text-[10px]">Automotive S.O.S</p>
            </div>
          </Link>

          <nav aria-label="Main navigation" className="hidden flex-1 items-center justify-center xl:flex">
            <div className="mx-6 flex items-center rounded-full border border-school-navy/[0.06] bg-school-navy/[0.025] p-1">
              {primaryRoutes.map((route) => {
                const isActive = pathname === route.href
                return (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`relative rounded-full px-3.5 py-2 text-[12px] font-bold tracking-[-0.01em] transition-colors duration-200 lg:px-4 ${isActive ? "text-white" : "text-slate-600 hover:text-school-navy"}`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="desktop-nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-school-navy shadow-md shadow-school-navy/20"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                      />
                    )}
                    {route.label}
                  </Link>
                )
              })}
            </div>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/apply"
              className="group hidden items-center gap-1.5 rounded-full bg-school-navy px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-school-navy/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-school-blue hover:shadow-lg lg:flex"
            >
              Apply Now
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-full border border-school-navy/10 bg-school-navy/[0.035] hover:bg-school-navy/10"
                >
                  {isOpen ? <X className="h-5 w-5 text-school-navy" /> : <Menu className="h-5 w-5 text-school-navy" />}
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-full border-l border-school-navy/10 bg-[#f8fafc] p-0 shadow-2xl sm:w-[400px]">
                <div className="flex h-full flex-col">
                  <div className="border-b border-school-navy/10 bg-white/85 px-5 pb-5 pt-6 backdrop-blur-xl">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-xl bg-school-navy/5 p-1 ring-1 ring-school-gold/25">
                        <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Automotive S.O.S" width={48} height={48} className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <p className="font-display text-lg font-semibold text-school-navy">Soshanguve</p>
                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-school-gold">Automotive S.O.S</p>
                      </div>
                    </div>
                  </div>

                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-1 overflow-y-auto px-3 py-4">
                    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Explore</p>
                    <AnimatePresence>
                      {routes.map((route, index) => (
                        <SidebarMenuItem key={route.href} href={route.href} label={route.label} isActive={pathname === route.href} onClick={() => setIsOpen(false)} index={index} />
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  <div className="space-y-2 border-t border-school-navy/10 bg-white/90 p-4 backdrop-blur-xl">
                    <Link href="/apply" onClick={() => setIsOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-school-navy px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-school-navy/15 transition-transform hover:-translate-y-0.5">
                      Apply Now <ArrowUpRight className="h-4 w-4" />
                    </Link>
                    <Link href="/support-us" onClick={() => setIsOpen(false)} className="flex w-full items-center justify-center rounded-xl border border-school-gold/40 bg-school-gold/10 px-4 py-3.5 text-sm font-bold text-school-navy transition-colors hover:bg-school-gold/20">
                      Support Our Vision
                    </Link>
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
