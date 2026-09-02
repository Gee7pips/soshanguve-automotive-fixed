"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight, CheckCircle2, Wrench, Building2, Zap, Microscope, Calculator, Cog, Car, Hammer, TreePine, Building, Workflow, Cpu, Power, FlaskRoundIcon as Flask, Binary, PlusSquare, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionDivider } from "@/components/section-motion"

const programs = {
  mechanical: { title: "Mechanical Technology", short: "Mechanical", description: "Master mechanical engineering, fabrication, diagnostics and industrial technology.", icon: Wrench, subjects: [{ name: "Welding", icon: Hammer, description: "Advanced welding techniques, metallurgy and fabrication processes.", careers: ["Welding Specialist", "Metal Fabricator", "Quality Control Inspector"] }, { name: "Automotive", icon: Car, description: "Vehicle systems, diagnostics and modern automotive technology.", careers: ["Automotive Technician", "Vehicle Inspector", "Fleet Maintenance Manager"] }, { name: "Fitting & Turning", icon: Cog, description: "Precision engineering, machine operation and component manufacturing.", careers: ["Machine Operator", "Manufacturing Technician", "Maintenance Specialist"] }] },
  civil: { title: "Civil Technology", short: "Civil", description: "Develop practical skills in construction, design and infrastructure development.", icon: Building2, subjects: [{ name: "Woodworking", icon: TreePine, description: "Woodworking techniques, joinery and furniture making.", careers: ["Cabinet Maker", "Furniture Designer", "Wood Products Manufacturer"] }, { name: "Construction", icon: Building, description: "Building methods, materials and project management.", careers: ["Construction Manager", "Building Inspector", "Site Supervisor"] }, { name: "Services", icon: Workflow, description: "Building services, systems and technical maintenance.", careers: ["Building Services Technician", "Facilities Manager", "Systems Coordinator"] }] },
  electrical: { title: "Electrical Technology", short: "Electrical", description: "Explore power systems, electronics, automation and digital technology.", icon: Zap, subjects: [{ name: "Digital", icon: Cpu, description: "Digital electronics, programming and automation fundamentals.", careers: ["Electronics Technician", "PLC Programmer", "Automation Specialist"] }, { name: "Power Systems", icon: Power, description: "Electrical generation, distribution, control and protection.", careers: ["Power Systems Technician", "Electrical Controller", "Grid Operator"] }] },
  sciences: { title: "Sciences", short: "Sciences", description: "Build a strong scientific foundation through theory, experimentation and application.", icon: Microscope, subjects: [{ name: "Physical Sciences", icon: Flask, description: "Physics and chemistry with practical engineering applications.", careers: ["Laboratory Technician", "Quality Analyst", "Research Assistant"] }, { name: "Technical Sciences", icon: Binary, description: "Applied science concepts for engineering and technical environments.", careers: ["Technical Analyst", "Process Controller", "Engineering Assistant"] }] },
  mathematics: { title: "Mathematics", short: "Mathematics", description: "Develop analytical thinking and problem-solving skills for technical careers.", icon: Calculator, subjects: [{ name: "Pure Mathematics", icon: PlusSquare, description: "Mathematical concepts, reasoning and theoretical foundations.", careers: ["Data Analyst", "Statistical Technician", "Mathematical Modeler"] }, { name: "Technical Mathematics", icon: Calculator, description: "Mathematical principles applied to engineering and design problems.", careers: ["Technical Designer", "CAD Specialist", "Engineering Technician"] }] },
}

const DynamicPageTransition = dynamic(() => import("@/components/ui/page-transition").then((mod) => mod.PageTransition), { ssr: false })
const DynamicPageHeader = dynamic(() => import("@/components/ui/page-transition").then((mod) => mod.PageHeader), { ssr: false })

export default function ProgramsPage() {
  const reducedMotion = useReducedMotion()

  return (
    <DynamicPageTransition>
      <DynamicPageHeader title="Our Specialized Programs" subtitle="Technical pathways built for future innovators, technicians and engineers" backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />

      <section className="relative overflow-hidden bg-[#f7f9fc] py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#102a56 1px, transparent 1px), linear-gradient(90deg, #102a56 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-school-gold"><span className="h-px w-10 bg-school-gold" />Learning Pathways<span className="h-px w-10 bg-school-gold" /></div>
            <h2 className="font-serif text-4xl font-bold tracking-tight text-school-navy md:text-5xl">Build Skills That <span className="text-school-blue">Move the World</span></h2>
            <SectionDivider />
            <p className="mt-6 text-lg leading-8 text-slate-600">Explore specialist technical education designed around practical skills, problem-solving and real-world engineering pathways.</p>
          </motion.div>

          <Tabs defaultValue="mechanical" className="w-full">
            <TabsList className="mx-auto mb-10 grid h-auto max-w-5xl grid-cols-2 gap-2 rounded-2xl border border-slate-200 bg-white/80 p-2 shadow-sm md:grid-cols-5">
              {Object.entries(programs).map(([key, program]) => {
                const Icon = program.icon
                return <TabsTrigger key={key} value={key} className="group rounded-xl px-3 py-4 text-slate-600 transition-all data-[state=active]:bg-school-navy data-[state=active]:text-white"><Icon className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" /><span className="text-xs font-bold sm:text-sm">{program.short}</span></TabsTrigger>
              })}
            </TabsList>

            {Object.entries(programs).map(([key, program]) => {
              const ProgramIcon = program.icon
              return <TabsContent key={key} value={key} className="mt-0 outline-none">
                <motion.div initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_-35px_rgba(15,42,86,0.35)]">
                  <div className="relative overflow-hidden bg-school-navy p-7 text-white md:p-10">
                    <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-white/10" /><div className="absolute -right-6 -top-10 h-36 w-36 rounded-full border border-school-gold/20" />
                    <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div className="flex items-start gap-5"><div className="rounded-2xl border border-school-gold/30 bg-white/10 p-4"><ProgramIcon className="h-8 w-8 text-school-gold" /></div><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-school-gold">Technical pathway</p><h3 className="font-serif text-3xl font-bold md:text-4xl">{program.title}</h3><p className="mt-3 max-w-2xl leading-7 text-blue-100">{program.description}</p></div></div>
                      <div className="hidden shrink-0 text-right md:block"><div className="font-serif text-4xl font-bold text-school-gold">{program.subjects.length}</div><div className="text-xs uppercase tracking-widest text-blue-200">Specialist Areas</div></div>
                    </div>
                  </div>

                  <div className="grid gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
                    {program.subjects.map((subject, index) => { const SubjectIcon = subject.icon; return <motion.article key={subject.name} initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reducedMotion ? 0 : index * 0.08, duration: 0.45 }} className="group relative bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-school-gold transition-transform duration-300 group-hover:scale-x-100" />
                      <div className="mb-6 flex items-center justify-between"><div className="rounded-2xl bg-school-navy/5 p-3 text-school-navy transition-colors group-hover:bg-school-navy group-hover:text-white"><SubjectIcon className="h-6 w-6" /></div><span className="font-mono text-xs text-slate-300">0{index + 1}</span></div>
                      <h4 className="mb-3 text-xl font-bold text-school-navy">{subject.name}</h4><p className="mb-6 min-h-[72px] text-sm leading-6 text-slate-600">{subject.description}</p>
                      <div className="border-t border-slate-100 pt-5"><p className="mb-3 text-xs font-bold uppercase tracking-wider text-school-blue">Career pathways</p><ul className="space-y-2">{subject.careers.map((career) => <li key={career} className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-school-gold" />{career}</li>)}</ul></div>
                    </motion.article> })}
                  </div>
                </motion.div>
              </TabsContent>
            })}
          </Tabs>

          <div className="mt-12 flex justify-center"><Button asChild size="lg" className="group rounded-full bg-school-gold px-7 text-school-navy shadow-lg shadow-school-gold/20 hover:bg-[#e3c24c]"><Link href="/apply">Start Your Journey <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></Button></div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-school-navy py-24 text-white">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(90deg, white 1px, transparent 1px), linear-gradient(white 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="container relative">
          <div className="mx-auto max-w-3xl text-center"><div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-school-gold"><Sparkles className="h-4 w-4" />The Difference</div><h2 className="font-serif text-4xl font-bold md:text-5xl">Learn by <span className="text-school-gold">Doing.</span> Prepare to <span className="text-school-blue">Lead.</span></h2><p className="mt-6 text-lg leading-8 text-blue-100">A technical education experience that connects classroom knowledge with practical capability and future opportunity.</p></div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">{[{ title: "Industry-Aligned", text: "Learning shaped around relevant technical skills and workplace expectations." }, { title: "Hands-on Learning", text: "Practical experience that turns concepts into confidence and capability." }, { title: "Career Ready", text: "Clear pathways toward further study, apprenticeships and technical careers." }].map((item, index) => <motion.div key={item.title} initial={reducedMotion ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.1 }} className="group rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-school-gold/40 hover:bg-white/[0.1]"><div className="mb-8 font-mono text-sm text-school-gold">0{index + 1}</div><h3 className="mb-3 text-xl font-bold">{item.title}</h3><p className="leading-7 text-blue-100">{item.text}</p></motion.div>)}</div>
        </div>
      </section>
    </DynamicPageTransition>
  )
}
