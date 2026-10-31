"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight, ChevronRight, ExternalLink, Sparkles, MessageCircle } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Achievements", href: "/achievements" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

const resourceLinks = [
  { name: "Admissions & Enquiries", href: "/apply" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Support Us", href: "/support-us" },
  { name: "Innovations", href: "/innovations" },
  { name: "School Documents", href: "/documents" },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/SoshaTechnical/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/technical_matrics?igsh=czMxOTZ1b20wbXNu", icon: Instagram },
]

const contactInfo = [
  { icon: Mail, label: "Email", value: "700241314@gdeschools.gov.za", href: "mailto:700241314@gdeschools.gov.za" },
  { icon: Phone, label: "Phone", value: "012 797 2118", href: "tel:0127972118" },
  { icon: MapPin, label: "Campus", value: "1669 Block L, Soshanguve", href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-school-navy text-white">
      <div className="h-1.5 w-full bg-gradient-to-r from-school-gold via-white/80 to-school-gold" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
      <div className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-school-blue/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-[28rem] w-[28rem] rounded-full bg-school-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="border-b border-white/10 py-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-school-gold/60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-school-gold" /></span>
                <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-white/65">SOS / Engineering Education</span>
              </div>
              <h2 className="premium-heading-dark font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-6xl">Building the engineers <span className="text-school-gold">who will shape tomorrow.</span></h2>
              <p className="subheading-premium-dark mt-6 max-w-2xl text-sm leading-7 sm:text-base">A school built around technical confidence, practical learning, innovation and the ambition to create real opportunity.</p>
            </div>
            <Link href="/apply" className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-school-gold/50 bg-school-gold px-7 py-4 text-sm font-bold text-school-navy shadow-[0_20px_50px_-18px_rgba(212,175,55,0.65)] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto">Start Your Journey <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>
        </div>

        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-16">
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[1.35rem] border border-school-gold/35 bg-white/[0.08] p-1.5 shadow-[0_18px_45px_-20px_rgba(0,0,0,0.8)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-school-gold/70 group-hover:bg-white/[0.12]">
                <div className="absolute inset-1 rounded-[1rem] border border-white/10" />
                <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Engineering School Of Specialisation crest" width={62} height={62} className="relative rounded-xl object-contain" />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold leading-tight text-white">Soshanguve Engineering</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-school-gold">School Of Specialisation</p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">Empowering future innovators through excellence in engineering and technical education since 2019.</p>

            <div className="mt-8 flex flex-wrap gap-2">
              {socialLinks.map((social) => <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-white/50 transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/50 hover:bg-school-gold/10 hover:text-school-gold"><social.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" /></Link>)}
            </div>

            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3"><Sparkles className="h-4 w-4 text-school-gold" /><span className="text-[10px] font-bold uppercase tracking-[0.17em] text-white/45">Tshwane · Gauteng · South Africa</span></div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-school-gold">Explore</h3>
            <ul className="space-y-3.5">{quickLinks.map((link, index) => <li key={link.name}><Link href={link.href} className="group flex items-center justify-between gap-3 rounded-xl px-2 py-1.5 text-sm text-white/55 transition-all hover:bg-white/[0.035] hover:text-white"><span className="flex items-center gap-2"><span className="font-technical text-[9px] text-white/20">0{index + 1}</span>{link.name}</span><ChevronRight className="h-3.5 w-3.5 text-school-gold/35 transition-all group-hover:translate-x-0.5 group-hover:text-school-gold" /></Link></li>)}</ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-school-gold">Resources</h3>
            <ul className="space-y-3.5">{resourceLinks.map((link, index) => <li key={link.name}><Link href={link.href} className="group flex items-center justify-between gap-3 rounded-xl px-2 py-1.5 text-sm text-white/55 transition-all hover:bg-white/[0.035] hover:text-white"><span className="flex items-center gap-2"><span className="font-technical text-[9px] text-white/20">{String(index + 1).padStart(2, "0")}</span>{link.name}</span><ChevronRight className="h-3.5 w-3.5 text-school-gold/35 transition-all group-hover:translate-x-0.5 group-hover:text-school-gold" /></Link></li>)}</ul>
            <Link href="/support-us" className="group mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-school-gold hover:text-white">Partner with us <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-6 text-[10px] font-bold uppercase tracking-[0.24em] text-school-gold">Connect</h3>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_-35px_rgba(0,0,0,0.9)] backdrop-blur-sm">
              <div className="border-b border-white/10 bg-white/[0.025] px-5 py-4"><p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/35">School contact desk</p><p className="mt-1 text-sm font-semibold text-white/85">Speak with Soshanguve Engineering</p></div>
              <div className="divide-y divide-white/10">{contactInfo.map((contact) => <Link key={contact.label} href={contact.href} target={contact.icon === MapPin ? "_blank" : undefined} rel={contact.icon === MapPin ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-white/[0.045]"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-school-gold/15 bg-school-gold/[0.06] transition-all group-hover:border-school-gold/40 group-hover:bg-school-gold/10"><contact.icon className="h-4 w-4 text-school-gold" /></span><span className="min-w-0"><span className="block text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">{contact.label}</span><span className="mt-1 block truncate text-sm text-white/65 transition-colors group-hover:text-white">{contact.value}</span></span><ArrowUpRight className="ml-auto h-3.5 w-3.5 shrink-0 text-white/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-school-gold" /></Link>)}</div>
              <div className="border-t border-white/10 p-4"><Link href="/contact" className="group flex items-center justify-between rounded-xl bg-school-gold px-4 py-3 text-xs font-bold text-school-navy transition-all hover:bg-white"><span className="flex items-center gap-2"><MessageCircle className="h-4 w-4" /> Open Contact Page</span><ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link></div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:gap-4"><span>&copy; {new Date().getFullYear()} Soshanguve Engineering School Of Specialisation.</span><span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" /><span>All rights reserved.</span></div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs"><Link href="/privacy" className="text-white/35 transition-colors hover:text-white/70">Privacy Policy</Link><Link href="/terms" className="text-white/35 transition-colors hover:text-white/70">Terms of Service</Link><span className="hidden h-4 w-px bg-white/10 sm:block" /><span className="inline-flex items-center gap-1.5 text-white/35">Designed and Developed by <Link href="https://carterdigitals.co.za/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-1 font-semibold text-white/65 transition-colors hover:text-school-gold">Carter Digitals <ExternalLink className="h-3 w-3 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" /></Link></span></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
