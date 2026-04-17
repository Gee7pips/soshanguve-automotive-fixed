"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { PageTransition } from "@/components/page-transition"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import {
  Trophy, Award, Star, Plane, Cpu, Calculator,
  Users, ChevronRight, Zap, Globe, Medal,
} from "lucide-react"

// ─── Data ───────────────────────────────────────────────────────────────────

const STATS = [
  { value: "100%",  label: "Matric Pass Rate", sub: "Class of 2025" },
  { value: "1st",   label: "Gauteng SoS Festival", sub: "Flight 01 — 2026" },
  { value: "700+",  label: "Learners Enrolled", sub: "2026 Academic Year" },
  { value: "9",     label: "Technical Streams", sub: "Specialisation subjects" },
]

const RECENT_ACHIEVEMENTS = [
  {
    year: "2026",
    icon: Plane,
    category: "Innovation",
    title: "S.o.S Flight 01 — 1st Place, Gauteng SoS Festival",
    description:
      "Our learners designed, engineered, and flew the school's first student-built RC aircraft — taking first position at the 2026 Gauteng Schools of Specialisation Festival. From balsa-wood spars to brushless motors, every component was built in-house.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg",
        alt: "S.o.S Flight 01 in the air — Soshanguve Automotive SoS student-built RC aircraft",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0011-ai1QlIOBXhquApCz4uZXQXk2hAtphD.jpg",
        alt: "Close-up of S.o.S Flight 01 on the workshop table with technical drawings",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0012-npGbQl41x5FxKUHZ8CBaDZz5Xz2NQC.jpg",
        alt: "Students celebrating 1st place with the Flight 01 aircraft and tablets",
      },
    ],
    highlights: [
      "First aircraft ever built at the school",
      "1st place — Gauteng SoS Festival 2026",
      "Student-designed airframe and electronics",
      "Tablet prizes awarded to the build team",
    ],
  },
  {
    year: "2025",
    icon: Calculator,
    category: "Academic",
    title: "SA Mathematics Olympiad — Best Quintile 3 Junior Learner",
    description:
      "Rendani Tshikhudo claimed the national title of Best Quintile 3 Junior Learner at the 2025 South African Mathematics Olympiad, sponsored by Old Mutual. Competing against schools across South Africa, her performance placed Soshanguve Automotive SoS on the national academic map.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0018-6c8mSu5UhQricouUACyKwlgUZ68ff4.jpg",
        alt: "Rendani Tshikhudo holding South African Mathematics Olympiad winner certificates and Old Mutual plaque",
      },
    ],
    highlights: [
      "Best Quintile 3 Junior Learner — nationally",
      "Old Mutual SAMP Finals Round winner",
      "Competing against all South African schools",
      "Inspiring the next generation of mathematicians",
    ],
  },
  {
    year: "2025",
    icon: Trophy,
    category: "Matric",
    title: "Historic 100% Matric Pass Rate — Class of 2025",
    description:
      "The Class of 2025 delivered the most outstanding academic result in the school's history — a 100% Matric pass rate. Every single learner who sat the National Senior Certificate examination passed, a testament to the dedication of learners, teachers, families, and the GDE.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1774649920765-lfbyIQmPmwM2W9yYP54Zv87DmjZmZM.jpg",
        alt: "Class of 2025 celebrating 100% pass rate — three graduates in gold medallion frames",
      },
    ],
    highlights: [
      "100% pass rate — every learner passed",
      "Best matric result in school history",
      "Non-fee-paying school, community-funded",
      "Recognition from the GDE and community",
    ],
  },
  {
    year: "2026",
    icon: Cpu,
    category: "Technology",
    title: "Robotics Lab Launch — mBot Partnership with Makeblock",
    description:
      "A major partnership with Makeblock saw the launch of a fully equipped mBot Robotics Lab, complete with autonomous vehicle tracks, LEGO-compatible build kits, and guided coding curriculum. The lab is open to all grades, bridging the gap between mechanical engineering and software thinking.",
    images: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0021-Wdylez7JBZv7L82Jtt5wlNrnNke4rY.jpg",
        alt: "Students working in the new mBot robotics lab with orange autonomous vehicle tracks",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0020-SYPUiWO0yYLtCcruvuwvDkEaJEcFDq.jpg",
        alt: "Group photo with Makeblock partners and school robotics team",
      },
    ],
    highlights: [
      "Full mBot kit donation from Makeblock",
      "Autonomous track programming curriculum",
      "Accessible to all grade levels",
      "Industry partner mentorship included",
    ],
  },
]

const HISTORIC_AWARDS = [
  {
    icon: Globe,
    title: "Global Clean Tech Award",
    location: "Abu Dhabi, UAE",
    year: "2022",
    description: "International recognition for clean energy initiatives led by the school's principal.",
  },
  {
    icon: Medal,
    title: "SAGE South Africa Champion",
    location: "National Competition",
    year: "2022",
    description: "Students won the national SAGE entrepreneurship competition, representing innovation at the highest level.",
  },
  {
    icon: Zap,
    title: "SABC News Feature — Solar Train",
    location: "Broadcast nationally",
    year: "2023",
    description: "Student-built solar-powered locomotive reaching 30 km/h featured on SABC News.",
  },
  {
    icon: Star,
    title: "99.15% Matric Pass Rate",
    location: "GDE Recognition",
    year: "2023",
    description: "Certificate of Excellence and trophy from the Gauteng Department of Education.",
  },
  {
    icon: Award,
    title: "WCA 2022 International Award",
    location: "World Craft Awards",
    year: "2022",
    description: "Global recognition for craftsmanship and innovation embedded in the curriculum.",
  },
  {
    icon: Users,
    title: "Electric Car Innovation",
    location: "GDE SoS Festival",
    year: "2024",
    description: "Student-built zero-emission electric vehicle showcased at the GDE Festival of Innovation.",
  },
]

const GALLERY = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345089652.jpg-g0Ko98CxyKlRmeqwgB0TfnsKweO7J7.jpeg",
    alt: "Certificate of Excellence — 99.15% Pass Rate 2023 NSC Grade 12",
    caption: "Certificate of Excellence: 99.15% Pass Rate",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345052987.jpg-OEO5u8dYn44k0r8mGY7RrRS0oGV8r5.jpeg",
    alt: "Staff with awards and certificates",
    caption: "Educators Recognised for Outstanding Performance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345070699.jpg-W9rpmYyFnlkzb6GUFVlXxCnMBPAsYK.jpeg",
    alt: "Principal with awards at Gauteng Province Education event",
    caption: "Leadership Excellence: GDE Recognition",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345205295.jpg-2JYDVxzWrg3Q2Vyrw5Rp3eNeEGHxSY.jpeg",
    alt: "WCA 2022 Awards Ceremony",
    caption: "International Recognition at WCA 2022",
  },
]

// ─── Helpers ─────────────────────────────────────────────────────────────────

const categoryColor: Record<string, string> = {
  Innovation: "bg-school-blue text-white",
  Academic:   "bg-school-navy text-white",
  Matric:     "bg-school-gold text-school-navy",
  Technology: "bg-emerald-600 text-white",
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AchievementsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="A Culture of Excellence"
        subtitle="Every award, every invention, every pass — the proof of what is possible when ambition meets opportunity"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="bg-school-navy py-12">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <ScrollAnimation key={i}>
                <div className="text-center space-y-1">
                  <p className="font-serif text-4xl lg:text-5xl font-bold text-school-gold">{stat.value}</p>
                  <p className="text-white font-semibold text-sm">{stat.label}</p>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{stat.sub}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent achievements ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">

          <ScrollAnimation>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-school-gold" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">2025 – 2026</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-school-navy mb-2 text-balance">
              Recent Achievements
            </h2>
            <div className="w-12 h-0.5 bg-school-gold mb-16" />
          </ScrollAnimation>

          <div className="space-y-24">
            {RECENT_ACHIEVEMENTS.map((item, index) => {
              const IconComponent = item.icon
              const isEven = index % 2 === 0
              const badgeStyle = categoryColor[item.category] ?? "bg-school-gold text-school-navy"

              return (
                <ScrollAnimation key={index}>
                  <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? "lg:[direction:rtl]" : ""}`}>

                    {/* Image side */}
                    <div className={`space-y-3 ${!isEven ? "[direction:ltr]" : ""}`}>
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-xl group">
                        <Image
                          src={item.images[0].src}
                          alt={item.images[0].alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Year stamp */}
                        <div className="absolute top-4 left-4 bg-school-gold text-school-navy text-xs font-black tracking-widest px-3 py-1 rounded">
                          {item.year}
                        </div>
                      </div>
                      {/* Thumbnail row */}
                      {item.images.length > 1 && (
                        <div className={`grid gap-3 ${item.images.length === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
                          {item.images.slice(1).map((img, j) => (
                            <div key={j} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md group">
                              <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Text side */}
                    <div className={`space-y-5 ${!isEven ? "[direction:ltr]" : ""}`}>
                      <div className="flex items-center gap-3">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase ${badgeStyle}`}>
                          <IconComponent className="h-3 w-3" />
                          {item.category}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-school-navy leading-tight text-balance">
                        {item.title}
                      </h3>

                      <div className="w-10 h-0.5 bg-school-gold" />

                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>

                      <ul className="space-y-2 pt-2">
                        {item.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-school-gold flex-shrink-0" />
                            <span className="text-sm text-gray-700">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Airplane hero feature ─────────────────────────────────────────── */}
      <section className="py-24 bg-school-navy overflow-hidden">
        <div className="container max-w-6xl mx-auto px-6">

          <ScrollAnimation>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-school-gold" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">Innovation Spotlight</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-2 text-balance">
              S.o.S Flight 01 — Soshanguve Takes to the Sky
            </h2>
            <div className="w-12 h-0.5 bg-school-gold mb-12" />
          </ScrollAnimation>

          <div className="grid lg:grid-cols-5 gap-8 items-center">
            {/* Main plane image */}
            <motion.div
              className="lg:col-span-3 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0010-ZcU0BoXNd5gU7SM8TbcbMhamriBbf5.jpg"
                alt="S.o.S Flight 01 — student-built RC aircraft in full flight"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-serif text-xl font-bold">SOSHANGUVE S.o.S FLIGHT 01</p>
                <p className="text-white/60 text-sm mt-1">First student-built aircraft — Gauteng SoS Festival Champions 2026</p>
              </div>
            </motion.div>

            {/* Spec / info cards */}
            <motion.div
              className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              {[
                { label: "Design", value: "Student-engineered airframe" },
                { label: "Propulsion", value: "Brushless electric motor" },
                { label: "Construction", value: "Balsa wood & composite" },
                { label: "Result", value: "1st Place — SoS Festival 2026" },
              ].map((spec, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors duration-200"
                >
                  <p className="text-school-gold text-[10px] font-bold tracking-widest uppercase mb-1">{spec.label}</p>
                  <p className="text-white text-sm font-medium leading-snug">{spec.value}</p>
                </div>
              ))}

              {/* Close-up thumbnail */}
              <div className="col-span-2 lg:col-span-1 relative aspect-[16/7] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0011-ai1QlIOBXhquApCz4uZXQXk2hAtphD.jpg"
                  alt="Close-up of S.o.S Flight 01 on the workshop table"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Historic awards grid ──────────────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-6">

          <ScrollAnimation>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-school-gold" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">Track Record</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-school-navy mb-2 text-balance">
              Awards &amp; Recognition
            </h2>
            <div className="w-12 h-0.5 bg-school-gold mb-12" />
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HISTORIC_AWARDS.map((award, i) => {
              const IconComponent = award.icon
              return (
                <ScrollAnimation key={i}>
                  <div className="group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
                    <div className="absolute top-0 left-0 w-1 h-full bg-school-gold rounded-l-2xl" />
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-school-navy/5 flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-school-navy" />
                      </div>
                      <span className="text-xs font-bold text-school-gold bg-school-gold/10 px-2.5 py-1 rounded-full">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-bold text-school-navy mb-1">{award.title}</h3>
                    <p className="text-xs text-school-blue font-semibold uppercase tracking-wider mb-3">{award.location}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{award.description}</p>
                  </div>
                </ScrollAnimation>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Photo gallery ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="container max-w-6xl mx-auto px-6">

          <ScrollAnimation>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-px w-8 bg-school-gold" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">Gallery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-school-navy mb-2 text-balance">
              Captured Moments
            </h2>
            <div className="w-12 h-0.5 bg-school-gold mb-12" />
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((img, i) => (
              <ScrollAnimation key={i}>
                <div className="group relative rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium leading-snug translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {img.caption}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-school-navy">
        <div className="container max-w-3xl mx-auto px-6 text-center">
          <ScrollAnimation>
            <p className="text-school-gold text-[11px] font-bold tracking-[0.2em] uppercase mb-4">Join Us</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4 text-balance">
              Your achievement could be on this page next year
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Applications for the 2027 academic year open soon. Take the first step toward a world-class
              technical education — free of charge, rooted in Soshanguve.
            </p>
            <Link
              href="/apply"
              className="inline-flex items-center gap-2 bg-school-gold text-school-navy font-bold text-sm px-8 py-3.5 rounded-full hover:bg-yellow-400 transition-colors duration-200"
            >
              Apply Now
              <ChevronRight className="h-4 w-4" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </PageTransition>
  )
}
