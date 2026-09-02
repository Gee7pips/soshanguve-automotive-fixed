import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react"

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Achievements", href: "/achievements" },
  { name: "Activities", href: "/activities" },
  { name: "Staff", href: "/staff" },
  { name: "Contact", href: "/contact" },
]

const resourceLinks = [
  { name: "Apply Now", href: "/apply" },
  { name: "Documents", href: "/documents" },
  { name: "Partnerships", href: "/partnerships" },
  { name: "Support Us", href: "/support-us" },
]

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com/SoshaTechnical/", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com/technical_matrics?igsh=czMxOTZ1b20wbXNu", icon: Instagram },
]

const contactInfo = [
  { icon: Mail, label: "Email", value: "700241314@gdeschools.gov.za", href: "mailto:700241314@gdeschools.gov.za" },
  { icon: Phone, label: "Phone", value: "012 797 2118", href: "tel:0127972118" },
  { icon: MapPin, label: "Address", value: "1669 Block L, Soshanguve", href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-school-navy text-white">
      <div className="h-1 w-full bg-school-gold" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.035] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
      <div className="pointer-events-none absolute -right-32 top-16 h-96 w-96 rounded-full bg-school-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-school-gold/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="border-b border-white/10 py-12 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-school-gold" />
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-school-gold">SOS / Engineering Education</span>
              </div>
              <h2 className="max-w-3xl font-serif text-3xl font-semibold leading-tight tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
                Building the engineers who will shape tomorrow.
              </h2>
            </div>
            <Link
              href="/apply"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-school-gold px-6 py-3.5 text-sm font-bold text-school-navy shadow-[0_12px_35px_rgba(212,175,55,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              Start Your Journey
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
          <div className="lg:col-span-4">
            <Link href="/" className="group inline-flex items-center gap-4">
              <div className="relative flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-2xl border border-school-gold/30 bg-white/10 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:border-school-gold/60 group-hover:bg-white/15">
                <Image src="/images/soshanguve-logo.jpg" alt="Soshanguve Engineering School Of Specialisation crest" width={60} height={60} className="rounded-xl object-contain" />
              </div>
              <div>
                <p className="font-serif text-lg font-semibold leading-tight text-white">Soshanguve Engineering</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-school-gold">School Of Specialisation</p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
              Empowering future innovators through excellence in engineering and technical education since 2019.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/50 transition-all duration-300 hover:-translate-y-0.5 hover:border-school-gold/50 hover:bg-school-gold/10 hover:text-school-gold"
                >
                  <social.icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </Link>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold">Explore</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-school-gold/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-school-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold">Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-white/55 transition-colors duration-200 hover:text-white">
                    <ChevronRight className="h-3.5 w-3.5 text-school-gold/40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-school-gold" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/support-us" className="group mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-school-gold transition-colors hover:text-white">
              Partner with us
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="lg:col-span-4">
            <h3 className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold">Connect</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <Link
                    href={contact.href}
                    target={contact.icon === MapPin ? "_blank" : undefined}
                    rel={contact.icon === MapPin ? "noopener noreferrer" : undefined}
                    className="group flex items-start gap-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-school-gold/15 bg-school-gold/[0.06] transition-all duration-300 group-hover:border-school-gold/40 group-hover:bg-school-gold/10">
                      <contact.icon className="h-3.5 w-3.5 text-school-gold" />
                    </span>
                    <span>
                      <span className="mb-0.5 block text-[9px] font-bold uppercase tracking-[0.18em] text-white/30">{contact.label}</span>
                      <span className="block text-sm leading-snug text-white/65 transition-colors duration-200 group-hover:text-white">{contact.value}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/30">Based in</p>
              <p className="mt-1 text-sm font-semibold text-white/80">Tshwane · Gauteng · South Africa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col gap-2 text-xs text-white/35 sm:flex-row sm:items-center sm:gap-4">
              <span>&copy; {new Date().getFullYear()} Soshanguve Engineering School Of Specialisation.</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <span>All rights reserved.</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs">
              <Link href="/privacy" className="text-white/35 transition-colors duration-200 hover:text-white/70">Privacy Policy</Link>
              <Link href="/terms" className="text-white/35 transition-colors duration-200 hover:text-white/70">Terms of Service</Link>
              <span className="hidden h-4 w-px bg-white/10 sm:block" />
              <span className="inline-flex items-center gap-1.5 text-white/35">
                Designed and Developed by
                <Link
                  href="https://carterdigitals.co.za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 font-semibold text-white/65 transition-colors duration-200 hover:text-school-gold"
                >
                  Carter Digitals
                  <ExternalLink className="h-3 w-3 opacity-50 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
