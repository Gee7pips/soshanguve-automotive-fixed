"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, ChevronRight, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { SCHOOL_EMAIL, DEPARTMENT_EMAIL } from "@/lib/contact-links"

const quickLinks = [
  { name: "About the school", href: "/about" },
  { name: "Academic life", href: "/academics" },
  { name: "Achievements", href: "/achievements" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

const resourceLinks = [
  { name: "Admissions & enquiries", href: "/apply" },
  { name: "Programmes", href: "/programs" },
  { name: "Innovation hub", href: "/innovations" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "School documents", href: "/documents" },
  { name: "Support the school", href: "/support-us" },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/SoshaTechnical/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/technical_matrics?igsh=czMxOTZ1b20wbXNu", icon: Instagram },
]

const contactInfo = [
  { icon: Mail, label: "School email", value: SCHOOL_EMAIL, href: "mailto:" + SCHOOL_EMAIL },
  { icon: Mail, label: "GDE email", value: DEPARTMENT_EMAIL, href: "mailto:" + DEPARTMENT_EMAIL },
  { icon: Phone, label: "Telephone", value: "012 797 2118", href: "tel:0127972118" },
  { icon: MapPin, label: "Campus", value: "1669 Block L, Soshanguve", href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve" },
]

export function Footer() {
  return (
    <footer data-site-footer="true" className="site-footer relative isolate overflow-hidden bg-[#123654] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_84%_0%,rgba(143,190,220,.18),transparent_39%),radial-gradient(ellipse_at_4%_100%,rgba(212,175,55,.07),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[.12] [background-image:linear-gradient(rgba(255,255,255,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.14)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8bd78]/70 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 border-b border-white/15 py-12 sm:flex-row sm:items-end sm:justify-between lg:py-14">
          <div className="max-w-3xl">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[.22em] text-[#d9c580]">Soshanguve Engineering / School of Specialisation</p>
            <h2 className="mt-4 max-w-3xl font-display text-3xl font-semibold leading-[1.08] tracking-[-.055em] text-white sm:text-4xl lg:text-5xl">Learning for today. <span className="text-[#b9d7eb]">Engineering for tomorrow.</span></h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">A school community focused on academic growth, technical curiosity, practical thinking and possibility.</p>
          </div>
          <Link href="/apply" className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start rounded-full border border-white/20 bg-white/[.09] px-6 py-3 text-xs font-bold text-white shadow-[0_14px_40px_-26px_rgba(0,0,0,.55)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/40 hover:bg-white hover:text-[#123654] sm:self-auto">
            Admissions & enquiries <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-14">
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-3.5">
              <span className="relative flex h-[66px] w-[66px] shrink-0 items-center justify-center rounded-[1.15rem] border border-white/20 bg-white p-1.5 shadow-[0_12px_30px_-18px_rgba(0,0,0,.55)] transition-transform duration-300 group-hover:-translate-y-0.5">
                <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Engineering School of Specialisation crest" width={54} height={54} className="h-full w-full rounded-lg object-contain" />
              </span>
              <span>
                <span className="block font-display text-base font-semibold leading-tight tracking-[-.025em] text-white">Soshanguve Engineering</span>
                <span className="mt-1 block font-sans text-[8px] font-bold uppercase tracking-[.17em] text-[#cbddea]">School of Specialisation</span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">Empowering future innovators through excellence in engineering and technical education since 2019.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[.06] text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[.14] hover:text-white">
                  <social.icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                </Link>
              ))}
            </div>
            <p className="mt-6 font-mono text-[8px] font-semibold uppercase tracking-[.18em] text-white/35">Tshwane · Gauteng · South Africa</p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#d9c580]">Explore</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => <li key={link.name}><Link href={link.href} className="group inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"><ChevronRight className="h-3 w-3 text-[#b6d2e6]/50 transition-transform group-hover:translate-x-0.5 group-hover:text-[#d9c580]" />{link.name}</Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#d9c580]">Information</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => <li key={link.name}><Link href={link.href} className="group inline-flex items-center gap-2 text-xs text-white/60 transition-colors hover:text-white"><ChevronRight className="h-3 w-3 text-[#b6d2e6]/50 transition-transform group-hover:translate-x-0.5 group-hover:text-[#d9c580]" />{link.name}</Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-5 font-mono text-[9px] font-bold uppercase tracking-[.2em] text-[#d9c580]">Connect with the school</h3>
            <div className="overflow-hidden rounded-[1.35rem] border border-white/15 bg-white/[.055] shadow-[0_20px_55px_-38px_rgba(0,0,0,.55)] backdrop-blur-sm">
              <div className="divide-y divide-white/10">
                {contactInfo.map((contact) => (
                  <Link key={contact.label} href={contact.href} target={contact.icon === MapPin ? "_blank" : undefined} rel={contact.icon === MapPin ? "noopener noreferrer" : undefined} className="group flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-white/[.07]">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[.07] text-[#c5dbea]"><contact.icon className="h-4 w-4" /></span>
                    <span className="min-w-0 flex-1"><span className="block font-mono text-[8px] font-bold uppercase tracking-[.15em] text-white/40">{contact.label}</span><span className="mt-1 block truncate text-xs text-white/75 transition-colors group-hover:text-white">{contact.value}</span></span>
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#d9c580]" />
                  </Link>
                ))}
              </div>
              <div className="border-t border-white/10 p-3">
                <Link href="/contact" className="group flex items-center justify-between rounded-lg bg-white/[.09] px-3.5 py-3 text-[10px] font-bold text-white/80 transition-colors hover:bg-white hover:text-[#123654]">
                  <span>Open contact page</span><ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/15 py-6 text-[10px] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/40">
            <span>© {new Date().getFullYear()} Soshanguve Engineering School of Specialisation.</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
            <span>All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/privacy" className="text-white/45 transition-colors hover:text-white/85">Privacy</Link>
            <Link href="/terms" className="text-white/45 transition-colors hover:text-white/85">Terms</Link>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="text-white/35">Designed & developed by</span>
            <Link href="https://carterdigitals.co.za/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 font-semibold text-[#c4dcec]/75 transition-colors hover:text-white" aria-label="Designed and developed by Carter Digitals — visit website">
              Carter Digitals <ArrowUpRight className="h-3 w-3 text-[#d9c580]/70 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
