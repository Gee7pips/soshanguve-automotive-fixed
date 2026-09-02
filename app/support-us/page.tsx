"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle } from "lucide-react"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

export default function SupportUsPage() {
  const [form, setForm] = useState({ name:"", email:"", organization:"", supportType:"", message:"" })
  const set = (key: keyof typeof form, value: string) => setForm(p=>({...p,[key]:value}))
  const details = () => `Support / partnership enquiry\n\nName: ${form.name}\nEmail: ${form.email}\nOrganisation: ${form.organization || "N/A"}\nSupport type: ${form.supportType || "N/A"}\n\nMessage:\n${form.message}`
  const valid = form.name && form.email && form.message
  return <>
    <PageHeader title="Support Our Vision" subtitle="Partner with us to expand opportunities in engineering education" backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />
    <section className="py-16 bg-gray-50"><div className="container max-w-3xl mx-auto px-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="font-serif text-3xl font-bold text-school-navy mb-2">Become a Sponsor or Partner</h2>
        <p className="text-gray-600 mb-8">Tell us how you would like to support the school. Choose Email or WhatsApp and send the prepared message manually.</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">{[["Financial support","Funding"],["Equipment / resources","Resources"],["Mentorship","Mentorship"],["Partnership","Partnership"]].map(([label,value])=><button type="button" key={value} onClick={()=>set("supportType",value)} className={`rounded-xl border p-4 text-left transition ${form.supportType===value?"border-school-gold bg-school-gold/10":"border-gray-200 hover:border-school-navy/30"}`}><span className="font-semibold text-school-navy">{label}</span></button>)}</div>
        <div className="space-y-5"><div><Label>Full Name</Label><Input required value={form.name} onChange={e=>set("name",e.target.value)} /></div><div><Label>Email</Label><Input required type="email" value={form.email} onChange={e=>set("email",e.target.value)} /></div><div><Label>Organisation (optional)</Label><Input value={form.organization} onChange={e=>set("organization",e.target.value)} /></div><div><Label>Message</Label><Textarea required value={form.message} onChange={e=>set("message",e.target.value)} placeholder="Tell us how you would like to support the school..." className="min-h-36" /></div><div className="grid sm:grid-cols-2 gap-3"><Button disabled={!valid} onClick={()=>openEmail("Sponsorship / Partnership Enquiry",details())} className="bg-school-navy text-white"><Mail className="mr-2 h-4 w-4"/>Prepare Email</Button><Button disabled={!valid} onClick={()=>openWhatsApp(`Hello Soshanguve Engineering School, I would like to discuss supporting the school.\n\n${details()}`)} className="bg-[#25D366] hover:bg-[#1ebe5c] text-white"><MessageCircle className="mr-2 h-4 w-4"/>Open WhatsApp</Button></div></div>
        <p className="text-xs text-center text-gray-500 mt-6">Nothing is stored on the website. You control the final message and press Send yourself.</p>
      </div>
    </div></section>
  </>
}
