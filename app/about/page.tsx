"use client"

import { useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, GraduationCap, School, TrendingUp, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  { number: "100%", label: "2024 Pass Rate", description: "Verified matric achievement", icon: GraduationCap },
  { number: "700+", label: "Students", description: "From local communities", icon: Users },
  { number: "2019", label: "Established", description: "Years of excellence", icon: School },
  { number: "39", label: "Specialisation Schools", description: "Part of Gauteng network", icon: Award },
]

const investmentPoints = [
  { title: "Academic Excellence", description: "Verified 100% matric pass rate for 2024", icon: GraduationCap },
  { title: "Industry Recognition", description: "Multiple awards including SADTU Gauteng Grade 12 Best Performance", icon: Award },
  { title: "Growth Potential", description: "Expanding programs and increasing student capacity", icon: TrendingUp },
  { title: "Strategic Vision", description: "Focused on developing future industry leaders and innovators", icon: Target },
]

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <PageHeader title="About Our School" subtitle="Excellence in Engineering Education Since 2019" backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />

      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(30,58,138,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.04)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="container relative">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            <ScrollAnimation>
              <div className="space-y-6">
                <div className="eyebrow flex items-center gap-3 text-school-gold"><span className="h-px w-10 bg-school-gold" /> Our Story</div>
                <h2 className="premium-heading text-4xl text-school-navy sm:text-5xl lg:text-6xl">Leadership & <span className="heading-accent text-school-blue">Excellence</span></h2>
                <p className="subheading-premium text-school-navy/70">Under the visionary leadership of our principal, Soshanguve Engineering School has become a beacon of technical education excellence in Gauteng.</p>
                <div className="image-frame-premium">
                  <div className="image-surface aspect-[3/2]"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027647652.jpg-3gkCLsb3efCQvPztqcyJtpYnjIsVXm.jpeg" alt="Principal receiving SADTU Gauteng Grade 12 Best Performance Award" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /></div>
                </div>
                <p className="font-technical text-[10px] uppercase tracking-[0.14em] text-gray-500">Principal receiving the prestigious SADTU Gauteng Grade 12 Best Performance Award</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="border-school-navy/10 bg-white/85 shadow-[0_28px_70px_-42px_rgba(15,23,42,0.45)] backdrop-blur">
                <CardContent className="space-y-6 p-7 sm:p-9">
                  <h3 className="premium-heading text-3xl text-school-navy">Key Achievements</h3>
                  <ul className="space-y-4">{[
                    "Best Performing School in Tshwane West District",
                    "National Batho Pele Excellence Award Winner",
                    "Global Clean Tech Award Recognition",
                  ].map((item) => <li key={item} className="flex items-center gap-3"><Award className="h-5 w-5 shrink-0 text-school-gold" /><span>{item}</span></li>)}</ul>
                  <Button asChild className="w-full rounded-full bg-gradient-to-r from-school-navy to-school-blue text-white shadow-lg"><Link href="/achievements">View All Achievements</Link></Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50 lg:py-28">
        <div className="container">
          <ScrollAnimation><div className="mb-12 text-center"><div className="eyebrow mb-5 text-school-gold">The People Behind the Mission</div><h2 className="premium-heading text-4xl text-school-navy sm:text-5xl lg:text-6xl">Our Professional <span className="text-school-blue">Team</span></h2><p className="subheading-premium mx-auto mt-5 max-w-3xl text-gray-600">Led by experienced educators and industry professionals dedicated to nurturing the next generation of engineers.</p></div></ScrollAnimation>
          <ScrollAnimation>
            <div className="image-frame-premium mx-auto max-w-5xl"><div className="image-surface aspect-[3/2]"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250216-WA0001.jpg-3zo75nJELrPTiXjeBGD5O6bvDLKMWX.jpeg" alt="Our dedicated female staff members sharing a moment of joy" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" /></div></div>
            <p className="mx-auto mt-5 max-w-5xl text-sm leading-7 text-gray-600">Our remarkable female educators and staff members embody the spirit of unity and dedication that makes our school special. Their warmth, strength, and commitment to excellence create an inspiring environment where every student can thrive.</p>
          </ScrollAnimation>
          <ScrollAnimation><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{stats.map((stat) => <Card key={stat.label} className="group border-school-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><CardContent className="p-6 text-center"><div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-school-navy/5 transition-colors group-hover:bg-school-navy"><stat.icon className="h-6 w-6 text-school-navy group-hover:text-school-gold" /></div><h3 className="premium-heading text-4xl text-school-navy">{stat.number}</h3><p className="mt-2 font-technical text-[10px] font-bold uppercase tracking-[0.14em] text-school-blue">{stat.label}</p><p className="mt-1 text-sm text-gray-600">{stat.description}</p></CardContent></Card>)}</div></ScrollAnimation>
        </div>
      </section>

      <section className="bg-school-navy py-20 text-white lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
            <ScrollAnimation><div className="space-y-6"><div className="eyebrow text-school-gold">Partner With Purpose</div><h2 className="premium-heading premium-heading-dark text-4xl text-white sm:text-5xl lg:text-6xl">Invest in the <span className="heading-accent text-school-gold">Next Generation</span></h2><p className="subheading-premium subheading-premium-dark text-white/70">Join us in shaping the future of technical education in South Africa. Your investment can help us expand our impact and develop more skilled professionals.</p><div className="grid gap-4">{investmentPoints.map((point) => <Card key={point.title} className="border-white/10 bg-white/10 backdrop-blur transition-all hover:bg-white/[0.14]"><CardContent className="flex items-center gap-4 p-4"><point.icon className="h-8 w-8 shrink-0 text-school-gold" /><div><h3 className="premium-heading premium-heading-dark text-lg text-white">{point.title}</h3><p className="text-sm text-gray-200">{point.description}</p></div></CardContent></Card>)}</div><div className="flex flex-wrap gap-4"><Button asChild className="rounded-full bg-school-gold text-school-navy shadow-lg hover:bg-school-gold/90"><Link href="/support-us">Become a Sponsor</Link></Button><Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-school-navy"><Link href="/contact">Contact Us</Link></Button></div></div></ScrollAnimation>
            <ScrollAnimation><div className="image-frame-dark"><div className="image-surface aspect-[3/2]"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027620573.jpg-5i9QuxIXHXyMvx6t7JVrdH33Nd82W4.jpeg" alt="Staff excellence awards ceremony" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" /><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" /><div className="absolute bottom-0 left-0 right-0 p-6"><p className="font-serif text-xl font-semibold text-white drop-shadow-lg">Our staff receiving certificates of excellence for outstanding performance</p></div></div></div></ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
