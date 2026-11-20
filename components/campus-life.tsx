"use client"

import { motion, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { ArrowUpRight, Activity } from "lucide-react"

const galleryItems = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0015-SSpLjnb8yxdgtwcnn4ofWj5K3TmQuX.jpg", alt: "Students playing table tennis in the school recreation room", label: "Table Tennis", className: "col-span-1 row-span-2 min-h-[360px]" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0016-XIvLWR1o3AnTj15lvChmPEzVpmC7xy.jpg", alt: "Student engaged in a chess match outdoors", label: "Chess Club", className: "col-span-1 min-h-[220px]" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0017-dBW9EMfMHufwx8BQFQaWWKahCkFjqi.jpg", alt: "Girls netball match on the school court", label: "Netball", className: "col-span-1 min-h-[220px]" },
]

export function CampusLife() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="homepage-section section-campus relative overflow-hidden bg-school-navy py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-school-blue/15 blur-3xl" />
      <div className="container relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <motion.div initial={{ opacity: 0, x: reduceMotion ? 0 : -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7 }}>
            <div className="eyebrow mb-5 flex items-center gap-3 text-school-gold"><span className="h-px w-9 bg-school-gold" /> Campus Life</div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-white/45"><Activity className="h-3 w-3 text-school-gold" /> 2026 / Active Campus</div>
            <h2 className="premium-heading premium-heading-dark text-3xl text-white sm:text-4xl lg:text-6xl">More Than an Education — A Complete Community</h2>
            <div className="my-7 h-0.5 w-14 bg-school-gold" />
            <p className="subheading-premium subheading-premium-dark text-white/75">Excellence extends beyond the workshop floor. Learners compete, collaborate and create through sport, clubs and activities that build confidence alongside technical mastery.</p>
            <p className="mt-4 leading-relaxed text-white/50">The 2026 campus story includes active netball, chess and table tennis alongside the school's engineering and academic programmes — giving learners space to develop resilience, strategy and teamwork.</p>
            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/10 pt-6">{[['03','Featured activities'],['01','Community'],['∞','Possibilities']].map(([value,label]) => <div key={label}><div className="font-serif text-2xl font-bold text-school-gold">{value}</div><div className="mt-1 font-technical text-[9px] uppercase tracking-wider text-white/40">{label}</div></div>)}</div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {galleryItems.map((item, index) => (
              <motion.div key={item.label} initial={{ opacity: 0, y: reduceMotion ? 0 : 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.1 }} className={`group relative overflow-hidden rounded-[1.65rem] border border-school-gold/20 bg-white/5 p-1.5 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.8)] transition-transform duration-500 hover:-translate-y-1 ${item.className}`}>
                <div className="image-surface h-full min-h-[inherit]">
                  <Image src={item.src} alt={item.alt} fill className="object-cover" sizes="(max-width: 1024px) 50vw, 40vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy/95 via-school-navy/10 to-transparent" />
                  <div className="absolute left-3 top-3 h-8 w-8 border-l border-t border-school-gold/70" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5"><div><span className="font-technical text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">2026 / Student Life</span><h3 className="premium-heading premium-heading-dark mt-1 text-lg text-white">{item.label}</h3></div><span className="rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-all group-hover:border-school-gold/50 group-hover:bg-school-gold group-hover:text-school-navy"><ArrowUpRight className="h-4 w-4" /></span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
