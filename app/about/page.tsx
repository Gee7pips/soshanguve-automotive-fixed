"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Cpu,
  GraduationCap,
  Lightbulb,
  Target,
  Users,
  Wrench,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollAnimation } from "@/components/scroll-animation"

const schoolFacts = [
  { number: "100%", label: "2025 matric pass rate", detail: "Academic achievement", icon: GraduationCap },
  { number: "700+", label: "Learners", detail: "A growing school community", icon: Users },
  { number: "2019", label: "Established", detail: "School of Specialisation journey", icon: BookOpen },
  { number: "39", label: "Specialisation schools", detail: "Gauteng network", icon: Award },
]

const learningPillars = [
  {
    number: "01",
    title: "Strong academic foundations",
    description: "A focused learning environment that values knowledge, curiosity and the discipline needed to keep progressing.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Engineering in action",
    description: "An engineering and technical focus that helps learners connect classroom concepts with practical problem-solving.",
    icon: Wrench,
  },
  {
    number: "03",
    title: "Ideas with a future",
    description: "Encouraging learners to think creatively, explore technology and see themselves as contributors to a changing world.",
    icon: Lightbulb,
  },
]

const recognitions = [
  "Best Performing School in Tshwane West District",
  "National Batho Pele Excellence Award Winner",
  "Global Clean Tech Award Recognition",
  "SADTU Gauteng Grade 12 Best Performance recognition",
]

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fa] text-school-navy">
      <section className="relative isolate flex min-h-[610px] items-end overflow-hidden bg-[#061326] pb-16 pt-36 text-white sm:min-h-[660px] sm:pb-20 lg:min-h-[720px] lg:pb-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
          alt="Soshanguve Engineering School of Specialisation"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,15,31,.96)_0%,rgba(5,21,42,.86)_48%,rgba(5,21,42,.46)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061326] via-transparent to-[#061326]/35" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:54px_54px]" />
        <div className="container relative z-10">
          <div className="grid items-end gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <ScrollAnimation>
              <div className="max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-school-gold shadow-[0_0_15px_rgba(212,175,55,.9)]" />
                  <span className="font-technical text-[9px] font-bold uppercase tracking-[0.22em] text-white/80">Soshanguve · Gauteng · South Africa</span>
                </div>
                <p className="mb-4 font-technical text-[10px] font-bold uppercase tracking-[0.25em] text-school-gold sm:text-xs">About our school</p>
                <h1 className="max-w-3xl font-display text-5xl font-bold leading-[.98] tracking-[-0.065em] text-white sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                  Engineering a <span className="text-school-gold">future of possibility.</span>
                </h1>
                <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
                  An engineering-focused School of Specialisation where academic ambition, technical curiosity and practical learning come together to open new pathways for young people.
                </p>
                <div className="mt-9 flex flex-wrap gap-3">
                  <Button asChild className="group h-12 rounded-full bg-school-gold px-6 font-bold text-school-navy shadow-[0_16px_38px_-16px_rgba(212,175,55,.65)] hover:bg-white">
                    <Link href="/programs">Explore our programmes <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
                  </Button>
                  <Button asChild variant="outline" className="h-12 rounded-full border-white/35 bg-white/[0.06] px-6 font-semibold text-white backdrop-blur-md hover:bg-white hover:text-school-navy">
                    <Link href="/contact">Get in touch</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="mx-auto w-full max-w-sm lg:ml-auto">
                <div className="rounded-[1.8rem] border border-white/20 bg-[#071a32]/70 p-6 shadow-[0_30px_90px_-35px_rgba(0,0,0,.8)] backdrop-blur-xl sm:p-7">
                  <div className="flex items-center justify-between border-b border-white/15 pb-5">
                    <div>
                      <p className="font-technical text-[9px] font-bold uppercase tracking-[0.2em] text-school-gold">Our identity</p>
                      <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-white">Built around engineering.</h2>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-school-gold/25 bg-school-gold/10">
                      <Cpu className="h-6 w-6 text-school-gold" />
                    </div>
                  </div>
                  <div className="space-y-4 py-5">
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-school-gold/15 text-school-gold"><GraduationCap className="h-3.5 w-3.5" /></span>
                      <div><p className="text-sm font-semibold text-white">Academic focus</p><p className="mt-1 text-xs leading-5 text-white/55">A strong foundation for continued learning.</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-school-gold/15 text-school-gold"><Wrench className="h-3.5 w-3.5" /></span>
                      <div><p className="text-sm font-semibold text-white">Technical direction</p><p className="mt-1 text-xs leading-5 text-white/55">Engineering and applied problem-solving.</p></div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-school-gold/15 text-school-gold"><Target className="h-3.5 w-3.5" /></span>
                      <div><p className="text-sm font-semibold text-white">Future pathways</p><p className="mt-1 text-xs leading-5 text-white/55">Confidence to explore opportunities beyond school.</p></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-white/15 pt-4">
                    <span className="font-technical text-[9px] font-bold uppercase tracking-[0.16em] text-white/40">School of Specialisation</span>
                    <span className="font-display text-sm font-semibold text-school-gold">Since 2019</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute -right-48 top-20 h-[28rem] w-[28rem] rounded-full bg-school-blue/[0.06] blur-3xl" />
        <div className="container relative">
          <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr] lg:gap-16">
            <ScrollAnimation>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-28 w-28 rounded-tl-[2rem] border-l-2 border-t-2 border-school-gold/70" />
                <div className="relative overflow-hidden rounded-[1.8rem] border border-white bg-white p-2 shadow-[0_30px_80px_-38px_rgba(7,22,48,.35)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-school-navy">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027647652.jpg-3gkCLsb3efCQvPztqcyJtpYnjIsVXm.jpeg"
                      alt="School leadership receiving the SADTU Gauteng Grade 12 Best Performance award"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.035]"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-6 right-5 max-w-[245px] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_18px_45px_-22px_rgba(7,22,48,.45)] backdrop-blur-xl sm:right-8">
                  <div className="flex items-center gap-2 text-school-gold"><Award className="h-4 w-4" /><span className="font-technical text-[9px] font-bold uppercase tracking-[0.16em] text-school-blue">Recognising achievement</span></div>
                  <p className="mt-2 font-display text-sm font-semibold leading-5 text-school-navy">A culture that celebrates dedication and progress.</p>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <div className="space-y-6 lg:pl-3">
                <div className="flex items-center gap-3 text-school-gold"><span className="h-px w-10 bg-school-gold" /><span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em]">Our story</span></div>
                <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-[-0.06em] text-school-navy sm:text-5xl lg:text-[3.6rem]">A school shaped by <span className="text-school-blue">ambition.</span></h2>
                <p className="text-base leading-8 text-slate-600">
                  Established in 2019, Soshanguve Engineering School of Specialisation is part of a learning journey focused on engineering and technical education. We want learners to see knowledge as something they can use: to ask better questions, solve problems and imagine what they can build.
                </p>
                <p className="text-base leading-8 text-slate-600">
                  Our identity brings together the foundations of schooling and the possibilities of a technical future. We are proud of the people who make this journey possible—our learners, educators, support staff, families and wider community.
                </p>
                <div className="grid gap-3 pt-2 sm:grid-cols-2">
                  <div className="rounded-2xl border border-school-navy/10 bg-white p-4 shadow-[0_12px_36px_-26px_rgba(7,22,48,.3)]">
                    <p className="font-display text-2xl font-bold tracking-[-0.05em] text-school-navy">2019</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">Established</p>
                  </div>
                  <div className="rounded-2xl border border-school-navy/10 bg-white p-4 shadow-[0_12px_36px_-26px_rgba(7,22,48,.3)]">
                    <p className="font-display text-2xl font-bold tracking-[-0.05em] text-school-navy">Grades 8–12</p>
                    <p className="mt-1 text-xs font-semibold text-slate-500">Secondary education</p>
                  </div>
                </div>
                <Link href="/achievements" className="group inline-flex items-center gap-2 pt-2 text-sm font-bold text-school-blue transition-colors hover:text-school-navy">
                  Discover our achievements <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-school-navy/[0.06] bg-white py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.32] [background-image:linear-gradient(rgba(30,58,138,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(30,58,138,.045)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="container relative">
          <ScrollAnimation>
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <p className="mb-4 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold">How we approach learning</p>
              <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-[-0.06em] text-school-navy sm:text-5xl">Knowledge. Practical thinking. <span className="text-school-blue">Possibility.</span></h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">Our engineering specialisation gives the school a clear direction while keeping the wider purpose of education at the centre.</p>
            </div>
          </ScrollAnimation>
          <div className="grid gap-5 md:grid-cols-3">
            {learningPillars.map((pillar) => (
              <ScrollAnimation key={pillar.number}>
                <Card className="group h-full overflow-hidden rounded-[1.55rem] border-school-navy/10 bg-white shadow-[0_18px_55px_-38px_rgba(7,22,48,.35)] transition-all duration-500 hover:-translate-y-2 hover:border-school-gold/45 hover:shadow-[0_28px_65px_-35px_rgba(7,22,48,.3)]">
                  <CardContent className="relative flex h-full flex-col p-7 sm:p-8">
                    <div className="absolute right-6 top-5 font-display text-4xl font-bold tracking-[-0.08em] text-school-navy/[0.055]">{pillar.number}</div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-school-gold/25 bg-school-gold/10 text-school-blue transition-all duration-300 group-hover:scale-105 group-hover:bg-school-navy group-hover:text-school-gold">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-7 font-display text-xl font-bold tracking-[-0.04em] text-school-navy">{pillar.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
                    <div className="mt-auto flex items-center gap-2 pt-7 font-technical text-[9px] font-bold uppercase tracking-[0.18em] text-school-gold"><span className="h-px w-7 bg-school-gold" /> Our learning approach</div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-16">
            <ScrollAnimation>
              <div>
                <div className="flex items-center gap-3 text-school-gold"><span className="h-px w-10 bg-school-gold" /><span className="font-technical text-[10px] font-bold uppercase tracking-[0.22em]">The people behind the mission</span></div>
                <h2 className="mt-5 font-display text-4xl font-bold leading-[1.04] tracking-[-0.06em] text-school-navy sm:text-5xl">People make a <span className="text-school-blue">school.</span></h2>
                <p className="mt-6 text-base leading-8 text-slate-600">
                  Every school day is shaped by people: educators who guide, support teams who keep things moving, families who encourage and learners who bring energy and ideas. Their shared commitment is at the heart of our school community.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  We recognise the contribution of our staff and celebrate the care, collaboration and professional dedication that help learners move forward.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild className="h-12 rounded-full bg-school-navy px-6 font-bold text-white shadow-lg hover:bg-school-blue">
                    <Link href="/contact">Connect with the school <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative">
                <div className="absolute -bottom-5 -left-5 h-32 w-32 rounded-bl-[2rem] border-b-2 border-l-2 border-school-gold/70" />
                <div className="relative overflow-hidden rounded-[1.8rem] border-[7px] border-white bg-white shadow-[0_30px_80px_-38px_rgba(7,22,48,.4)]">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.3rem]">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250216-WA0001.jpg-3zo75nJELrPTiXjeBGD5O6bvDLKMWX.jpeg"
                      alt="Soshanguve Engineering School educators and staff"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-5 right-5 rounded-2xl border border-white/70 bg-white/95 px-5 py-3 shadow-xl backdrop-blur-xl">
                  <p className="font-technical text-[9px] font-bold uppercase tracking-[0.17em] text-school-gold">One community</p>
                  <p className="mt-1 font-display text-sm font-bold text-school-navy">Many people. One purpose.</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-school-navy py-20 text-white sm:py-24">
        <div className="pointer-events-none absolute -right-36 -top-40 h-[30rem] w-[30rem] rounded-full bg-school-blue/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-36 h-[28rem] w-[28rem] rounded-full bg-school-gold/10 blur-3xl" />
        <div className="container relative">
          <ScrollAnimation>
            <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="mb-4 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold">A record of progress</p>
                <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.06em] text-white sm:text-5xl">Proud of the work. <span className="text-school-gold">Focused on what comes next.</span></h2>
              </div>
              <Link href="/achievements" className="group inline-flex shrink-0 items-center gap-2 pb-1 text-sm font-bold text-school-gold transition-colors hover:text-white">View achievements <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
            </div>
          </ScrollAnimation>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {schoolFacts.map((fact) => (
              <ScrollAnimation key={fact.label}>
                <div className="group h-full rounded-[1.45rem] border border-white/10 bg-white/[0.055] p-6 shadow-[0_20px_55px_-38px_rgba(0,0,0,.7)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/45 hover:bg-white/[0.09]">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-school-gold/25 bg-school-gold/10 text-school-gold"><fact.icon className="h-5 w-5" /></div>
                    <span className="font-technical text-[9px] font-bold uppercase tracking-[0.17em] text-white/30">Snapshot</span>
                  </div>
                  <p className="mt-6 font-display text-4xl font-bold tracking-[-0.07em] text-white sm:text-[2.65rem]">{fact.number}</p>
                  <p className="mt-2 text-sm font-bold text-school-gold">{fact.label}</p>
                  <p className="mt-1 text-xs leading-5 text-white/45">{fact.detail}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
          <p className="mt-6 text-[10px] leading-5 text-white/35">Figures shown reflect information currently published on the school website and may change. Please contact the school for the latest updates.</p>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#f7f8fa] py-20 sm:py-24">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027620573.jpg-5i9QuxIXHXyMvx6t7JVrdH33Nd82W4.jpeg"
          alt="School staff recognised for their work and contribution"
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-[#061326]/90" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_85%_10%,rgba(212,175,55,.2),transparent_35%)]" />
        <div className="container relative z-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <ScrollAnimation>
              <div className="max-w-3xl">
                <p className="mb-4 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-school-gold">Looking ahead</p>
                <h2 className="font-display text-4xl font-bold leading-[1.04] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">The next chapter is <span className="text-school-gold">built together.</span></h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">Whether you are a prospective learner, parent, partner or member of our community, we welcome the opportunity to connect and work towards a stronger future for technical education.</p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button asChild className="h-12 rounded-full bg-school-gold px-6 font-bold text-school-navy hover:bg-white">
                  <Link href="/apply">Admissions & enquiries <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button asChild variant="outline" className="h-12 rounded-full border-white/35 bg-white/[0.06] px-6 font-bold text-white hover:bg-white hover:text-school-navy">
                  <Link href="/support-us">Support the school</Link>
                </Button>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}
