"use client"

import type React from "react"
import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Send } from "lucide-react"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

export default function ApplyPage() {
  const [form, setForm] = useState({ firstName:"", lastName:"", email:"", phone:"", gradeLevel:"", program:"", message:"" })
  const set = (key: keyof typeof form, value: string) => setForm((p) => ({ ...p, [key]: value }))
  const details = () => `Student application\n\nName: ${form.firstName} ${form.lastName}\nApplicant email: ${form.email}\nPhone: ${form.phone}\nGrade: ${form.gradeLevel}\nPreferred programme: ${form.program}\n\nAdditional information:\n${form.message}`
  const valid = form.firstName && form.lastName && form.email && form.phone && form.gradeLevel && form.program
  const email = (e: React.FormEvent) => { e.preventDefault(); if (valid) openEmail("Student Application Enquiry", details()) }
  const whatsapp = () => { if (valid) openWhatsApp(`Hello Soshanguve Engineering School, I would like to apply.\n\n${details()}`) }

  return <>
    <PageHeader title="Apply Now" subtitle="Start your journey in engineering and technology" backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />
    <section className="py-16 bg-gray-50"><div className="container max-w-3xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="font-serif text-3xl font-bold text-school-navy mb-2">Student Application Enquiry</h2>
        <p className="text-gray-600 mb-8">Complete the form, then choose Email or WhatsApp. Your message will be prepared for you — you send it manually.</p>
        <form onSubmit={email} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4"><div><Label>First Name</Label><Input required value={form.firstName} onChange={e=>set("firstName",e.target.value)} /></div><div><Label>Last Name</Label><Input required value={form.lastName} onChange={e=>set("lastName",e.target.value)} /></div></div>
          <div className="grid md:grid-cols-2 gap-4"><div><Label>Email</Label><Input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} /></div><div><Label>Phone</Label><Input required type="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} /></div></div>
          <div className="grid md:grid-cols-2 gap-4"><div><Label>Current Grade</Label><Select value={form.gradeLevel} onValueChange={v=>set("gradeLevel",v)}><SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger><SelectContent>{[8,9,10,11].map(g=><SelectItem key={g} value={`Grade ${g}`}>Grade {g}</SelectItem>)}</SelectContent></Select></div><div><Label>Preferred Programme</Label><Select value={form.program} onValueChange={v=>set("program",v)}><SelectTrigger><SelectValue placeholder="Select programme" /></SelectTrigger><SelectContent><SelectItem value="Automotive Fitting & Tuning">Automotive Fitting & Tuning</SelectItem><SelectItem value="Mechanical Technology">Mechanical Technology</SelectItem><SelectItem value="Civil Technology">Civil Technology</SelectItem><SelectItem value="Electrical Technology">Electrical Technology</SelectItem></SelectContent></Select></div></div>
          <div><Label>Message / Additional Information</Label><Textarea value={form.message} onChange={e=>set("message",e.target.value)} placeholder="Tell us anything else the school should know..." className="min-h-32" /></div>
          <div className="grid sm:grid-cols-2 gap-3"><Button type="submit" disabled={!valid} className="bg-school-navy text-white"><Mail className="mr-2 h-4 w-4"/>Prepare Email</Button><Button type="button" disabled={!valid} onClick={whatsapp} className="bg-[#25D366] hover:bg-[#1ebe5c] text-white"><MessageCircle className="mr-2 h-4 w-4"/>Open WhatsApp</Button></div>
          <p className="text-xs text-center text-gray-500">The school does not receive anything automatically. Email opens your mail client and WhatsApp opens a chat with your details ready to send.</p>
        </form>
      </div>
    </div></section>
  </>
}
