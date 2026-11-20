"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Script from "next/script"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

const faqs = [
  {
    question: "How do I apply for Grade 8 at Soshanguve Engineering School Of Specialisation?",
    answer: "The main Gauteng Department of Education online application period for 2027 Grade 8 admissions ran from 5 August to 4 September 2026 and has closed. Applicants who did not submit proof of residence can use the GDE incomplete-application window from 23 November to 4 December 2026. A newer public update from the Gauteng Department of Education, reported on 16 November 2026, says late applications are scheduled for 17 December 2026 to 31 January 2027, where space is available. The GDE admissions-phases page still lists 4 December 2026 as the start date, so the published dates conflict. Parents and guardians must confirm the current date on the live GDE portal before acting. Parents who already applied should monitor placement updates and SMS notifications on the official GDE portal.",
  },
  {
    question: "Does this website form automatically submit my application?",
    answer: "No. This website form does not submit an application to the school or store your details. It prepares an email or WhatsApp message, and you choose whether to send it manually.",
  },
  {
    question: "What grades does the school serve?",
    answer: "Soshanguve Engineering School Of Specialisation is a secondary school serving Grades 8 to 12. For current admission requirements and placement decisions, applicants should confirm the applicable process with the Gauteng Department of Education and the school.",
  },
  {
    question: "What technical areas can learners explore?",
    answer: "The school's engineering and technical focus includes automotive engineering and technology, mechanical technology, civil technology, electrical technology, welding and metals, construction-related practical learning, mathematics and sciences.",
  },
  {
    question: "What should I do if I have an admissions question?",
    answer: "Use the enquiry form on this page, then prepare an email or WhatsApp message and send it manually. You can also contact the school directly through the Contact page for admissions and programme enquiries.",
  },
]

export default function ApplyPage() {
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", phone:"", gradeLevel:"", program:"", message:"" })
  const set = (key: keyof typeof form, value: string) => setForm((p) => ({ ...p, [key]: value }))
  const details = () => `School admissions enquiry\n\nLearner name: ${form.firstName} ${form.lastName}\nParent / guardian email: ${form.email}\nContact phone: ${form.phone}\nLearner current grade: ${form.gradeLevel}\nArea of interest: ${form.program}\n\nAdditional information:\n${form.message}\n\nThis is an enquiry only. It is not an official GDE application and does not guarantee placement.`
  const valid = form.firstName && form.lastName && form.email && form.phone && form.gradeLevel && form.program
  const email = (e: React.FormEvent) => { e.preventDefault(); if (valid) openEmail("School Admissions Enquiry", details()) }
  const whatsapp = () => { if (valid) openWhatsApp(`Hello Soshanguve Engineering School. I would like to make a school admissions enquiry.\n\n${details()}`) }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }

  return <>
    <Script id="admissions-faq-schema" type="application/ld+json">{JSON.stringify(faqSchema)}</Script>
    <PageHeader title="Admissions & Enquiries" subtitle="Speak to the school about programmes, admissions, transfers and learner placement enquiries" backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />
    <section className="py-16 bg-gray-50"><div className="container max-w-3xl mx-auto px-6">
      <div className="mb-8 rounded-2xl border border-school-gold/30 bg-white p-6 shadow-sm md:p-8" aria-labelledby="admissions-update-heading">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-school-gold">2027 admissions update</p>
        <h2 id="admissions-update-heading" className="font-serif text-2xl font-bold text-school-navy md:text-3xl">The main Grade 8 application period has closed</h2>
        <p className="mt-4 leading-7 text-gray-600">The Gauteng Department of Education&apos;s main online application period for 2027 Grade 8 admissions ran from 5 August to 4 September 2026.</p>
        <p className="mt-3 leading-7 text-gray-600">The current unplaced-learner placement phase runs from 2 to 20 November 2026. Applicants who did not submit proof of residence can address that outstanding requirement during the incomplete-application window from 23 November to 4 December 2026.</p>
        <p className="mt-3 leading-7 text-gray-600">A newer public update from the Gauteng Department of Education, reported on 16 November 2026, says late applications are scheduled for 17 December 2026 to 31 January 2027 where space is available. The GDE admissions-phases page still lists 4 December 2026 as the start date, so the published dates conflict. Parents and guardians must confirm the current date on the live GDE portal before acting. These are Department-managed processes; an enquiry to the school does not create an official application or guarantee placement.</p>
        <p className="mt-3 leading-7 text-gray-600">Dates and placement instructions can change. Parents and guardians should confirm the latest information directly on the official GDE portal before acting.</p>
        <a href="https://www.gdeadmissions.gov.za/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center rounded-full bg-school-navy px-5 py-3 font-semibold text-white hover:bg-school-blue">Check Official GDE Admissions <ArrowUpRight className="ml-2 h-4 w-4" /></a>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="font-serif text-3xl font-bold text-school-navy mb-2">School Admissions Enquiry</h2>
        <p className="text-gray-600 mb-8">Use this form to ask the school about programmes, requirements or placement enquiries. Choose Email or WhatsApp to prepare a message that you send manually. This is not an official application.</p>
        <form onSubmit={email} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4"><div><Label>First Name</Label><Input required value={form.firstName} onChange={e=>set("firstName",e.target.value)} /></div><div><Label>Last Name</Label><Input required value={form.lastName} onChange={e=>set("lastName",e.target.value)} /></div></div>
          <div className="grid md:grid-cols-2 gap-4"><div><Label>Email</Label><Input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} /></div><div><Label>Phone</Label><Input required type="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} /></div></div>
          <div className="grid md:grid-cols-2 gap-4"><div><Label>Learner&apos;s Current Grade</Label><Select value={form.gradeLevel} onValueChange={v=>set("gradeLevel",v)}><SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger><SelectContent>{[7,8,9,10,11,12].map(g=><SelectItem key={g} value={`Grade ${g}`}>Grade {g}</SelectItem>)}</SelectContent></Select></div><div><Label>Preferred Programme</Label><Select value={form.program} onValueChange={v=>set("program",v)}><SelectTrigger><SelectValue placeholder="Select programme" /></SelectTrigger><SelectContent><SelectItem value="Automotive Fitting & Tuning">Automotive Fitting & Tuning</SelectItem><SelectItem value="Mechanical Technology">Mechanical Technology</SelectItem><SelectItem value="Civil Technology">Civil Technology</SelectItem><SelectItem value="Electrical Technology">Electrical Technology</SelectItem></SelectContent></Select></div></div>
          <div><Label>Message / Additional Information</Label><Textarea value={form.message} onChange={e=>set("message",e.target.value)} placeholder="Tell us anything else the school should know..." className="min-h-32" /></div>
          <div className="grid sm:grid-cols-2 gap-3"><Button type="submit" disabled={!valid} className="bg-school-navy text-white"><Mail className="mr-2 h-4 w-4"/>Prepare Email</Button><Button type="button" disabled={!valid} onClick={whatsapp} className="bg-[#25D366] hover:bg-[#1ebe5c] text-white"><MessageCircle className="mr-2 h-4 w-4"/>Open WhatsApp</Button></div>
          <p className="text-xs text-center text-gray-500">No automatic submission or storage. Your details are not sent until you review and manually send the message.</p>
        </form>
      </div>

      <div className="mt-12 rounded-2xl bg-school-navy text-white p-6 md:p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-school-gold mb-2">Official admissions route</p>
        <h2 className="font-serif text-3xl font-bold mb-3">The GDE manages official Grade 8 applications and placement</h2>
        <p className="text-white/75 leading-7 mb-5">For 2027 Grade 8 admissions, the main application window has closed. The GDE lists an incomplete-application window from 23 November to 4 December 2026 for applicants with outstanding proof of residence, followed by late applications that a newer public update from the Department says are scheduled for 17 December 2026 to 31 January 2027, where space is available. The GDE admissions-phases page still lists 4 December 2026 as the start date, so parents must verify the current date on the live GDE portal. This enquiry form does not replace the official GDE process.</p>
        <a href="https://www.gdeadmissions.gov.za/" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-school-gold px-5 py-3 font-semibold text-school-navy hover:opacity-90">Open Official GDE Admissions Portal <ArrowUpRight className="ml-2 h-4 w-4" /></a>
      </div>

      <section className="mt-14" aria-labelledby="admissions-faq-heading">
        <p className="text-xs uppercase tracking-[0.22em] text-school-gold mb-2">Admissions FAQ</p>
        <h2 id="admissions-faq-heading" className="font-serif text-3xl md:text-4xl font-bold text-school-navy mb-6">Questions parents often ask</h2>
        <div className="space-y-3">
          {faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm"><summary className="cursor-pointer list-none pr-6 font-semibold text-school-navy">{faq.question}</summary><p className="mt-3 leading-7 text-gray-600">{faq.answer}</p></details>)}
        </div>
      </section>

      <div className="mt-10 flex flex-wrap gap-3 text-sm font-semibold">
        <Link href="/programs" className="rounded-full border border-school-navy/15 px-4 py-2 text-school-navy hover:bg-school-navy hover:text-white">Explore Programs</Link>
        <Link href="/academics" className="rounded-full border border-school-navy/15 px-4 py-2 text-school-navy hover:bg-school-navy hover:text-white">Academics</Link>
        <Link href="/contact" className="rounded-full border border-school-navy/15 px-4 py-2 text-school-navy hover:bg-school-navy hover:text-white">Contact the School</Link>
      </div>
    </div></section>
  </>
}
