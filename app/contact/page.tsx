"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Mail, MapPin, Phone, MessageCircle, Send, ChevronDown } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { PageTransition } from "@/components/page-transition"
import { openEmail, openWhatsApp, SCHOOL_EMAIL } from "@/lib/contact-links"

const enquiryLabels = { general: "General Enquiry", admission: "Admission / Enrolment", partnership: "Partnership / Sponsorship", media: "Media / Press" } as const
type Enquiry = keyof typeof enquiryLabels
type FormState = { name: string; email: string; phone: string; subject: Enquiry; message: string }
const empty: FormState = { name: "", email: "", phone: "", subject: "general", message: "" }
const contactInfo = [
  { icon: Mail, title: "Email", value: SCHOOL_EMAIL, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(SCHOOL_EMAIL)}` },
  { icon: Phone, title: "Phone", value: "012 797 2118", href: "tel:0127972118" },
  { icon: MessageCircle, title: "WhatsApp", value: "082 098 5985", href: "https://wa.me/27820985985" },
  { icon: MapPin, title: "Address", value: "1669 Block L, Soshanguve, Pretoria", href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve,+Pretoria" },
  { icon: Facebook, title: "Facebook", value: "@sosh-technical.com", href: "https://facebook.com/sosh-technical.com" },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const { toast } = useToast()
  const set = (key: keyof FormState, value: string) => setForm((p) => ({ ...p, [key]: value }))
  const valid = Boolean(form.name && form.email && form.message)
  const details = `Enquiry Type: ${enquiryLabels[form.subject]}\nName: ${form.name}\nEmail: ${form.email}${form.phone ? `\nPhone: ${form.phone}` : ""}\n\nMessage:\n${form.message}`
  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault()
    if (!valid) { toast({ title: "Missing fields", description: "Please fill in your name, email and message.", variant: "destructive" }); return }
    openEmail(`[${enquiryLabels[form.subject]}] from ${form.name}`, details)
    toast({ title: "Gmail opened", description: "Your message is pre-filled. Review it and click Send." })
  }
  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.message) { toast({ title: "Missing fields", description: "Please fill in your name and message.", variant: "destructive" }); return }
    openWhatsApp(`Hello Soshanguve Automotive SoS,\n\n${details}`)
  }
  const inputCls = "border-gray-200 focus:border-school-blue focus:ring-2 focus:ring-school-blue/20 rounded-xl transition-all duration-200"
  return <PageTransition>
    <PageHeader title="Get in Touch" subtitle="We would love to hear from you. Reach out for enquiries, partnerships, or admission questions." backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />
    <section className="py-20 bg-white"><div className="container max-w-7xl mx-auto px-6 lg:px-8">
      <ScrollAnimation><div className="text-center mb-14"><div className="flex items-center justify-center gap-3 mb-4"><span className="h-px w-8 bg-school-gold"/><span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">Reach Us</span><span className="h-px w-8 bg-school-gold"/></div><h2 className="font-serif text-3xl sm:text-4xl font-bold text-school-navy">Contact Information</h2></div></ScrollAnimation>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">{contactInfo.map((item, i) => { const Icon = item.icon; return <ScrollAnimation key={i}><motion.a href={item.href} target={item.icon !== MapPin ? "_blank" : undefined} rel="noopener noreferrer" whileHover={{ y: -4 }} className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all"><div className="flex h-12 w-12 items-center justify-center rounded-full bg-school-navy/5"><Icon className="h-5 w-5 text-school-navy"/></div><div><p className="text-xs font-bold uppercase tracking-wider text-school-gold mb-1">{item.title}</p><p className="text-sm text-gray-600 group-hover:text-school-blue leading-snug">{item.value}</p></div></motion.a></ScrollAnimation>})}</div>
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <ScrollAnimation><div className="space-y-5"><div className="flex items-center gap-3 mb-6"><span className="h-px w-6 bg-school-gold"/><h3 className="font-serif text-2xl font-bold text-school-navy">Send a Message</h3></div>
          <div><label className="text-sm font-semibold text-gray-700">Enquiry Type *</label><div className="relative mt-1.5"><select value={form.subject} onChange={(e) => set("subject", e.target.value)} className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm pr-10 focus:outline-none focus:ring-2 focus:ring-school-blue/20">{Object.entries(enquiryLabels).map(([v,l])=><option key={v} value={v}>{l}</option>)}</select><ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/></div></div>
          <div><label className="text-sm font-semibold text-gray-700">Full Name *</label><Input value={form.name} onChange={e=>set("name",e.target.value)} className={inputCls} required /></div>
          <div><label className="text-sm font-semibold text-gray-700">Email Address *</label><Input type="email" value={form.email} onChange={e=>set("email",e.target.value)} className={inputCls} required /></div>
          <div><label className="text-sm font-semibold text-gray-700">Phone Number <span className="font-normal text-gray-400">(optional)</span></label><Input type="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} className={inputCls} /></div>
          <div><label className="text-sm font-semibold text-gray-700">Message *</label><Textarea value={form.message} onChange={e=>set("message",e.target.value)} className={`min-h-[140px] ${inputCls}`} required /></div>
        </div></ScrollAnimation>
        <ScrollAnimation><Card className="border-0 shadow-lg rounded-2xl overflow-hidden"><div className="h-1.5 w-full bg-school-gold"/><CardContent className="p-8 flex flex-col gap-6"><div><h4 className="font-serif text-xl font-bold text-school-navy mb-2">How would you like to send?</h4><p className="text-sm text-gray-500 leading-relaxed">Choose Gmail or WhatsApp. Your message is prepared for you, but this website does not submit or store it.</p></div><div className="h-px bg-gray-100"/>
          <Button type="button" disabled={!valid} onClick={handleEmail} className="w-full bg-school-navy hover:bg-school-blue text-white rounded-xl font-semibold py-3 flex items-center justify-center gap-2"><Mail className="h-4 w-4"/>Open Gmail</Button>
          <Button type="button" disabled={!form.name || !form.message} onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white rounded-xl font-semibold py-3 flex items-center justify-center gap-2"><MessageCircle className="h-4 w-4"/>Open WhatsApp</Button>
          <p className="text-xs text-gray-400 text-center">Review the prepared message and press Send yourself.</p>
        </CardContent></Card></ScrollAnimation>
      </div>
    </div></section>
    <section className="py-20 bg-gray-50"><div className="container max-w-7xl mx-auto px-6 lg:px-8"><ScrollAnimation className="text-center mb-12"><h2 className="font-serif text-3xl font-bold text-school-navy mb-3">Find Us</h2><p className="text-gray-500">Visit our campus and see our world-class facilities firsthand</p></ScrollAnimation><ScrollAnimation><Card className="overflow-hidden rounded-2xl shadow-lg border-0"><CardContent className="p-0"><div className="aspect-video w-full relative"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.4143162647837!2d28.138899776537827!3d-25.531599137376397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfd2b76a355555%3A0x41c6bbd8d68e153e!2sSoshanguve%20Engineering%20School%20of%20Specialisation!5e0!3m2!1sen!2sza!4v1709136000000!5m2!1sen!2sza" width="100%" height="100%" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="absolute inset-0" title="Soshanguve Automotive School location on Google Maps"/></div><div className="p-6 bg-white"><div className="flex items-start gap-4"><div className="p-3 rounded-full bg-school-navy/5"><MapPin className="h-5 w-5 text-school-navy"/></div><div><h3 className="font-semibold text-lg text-school-navy mb-1">Our Location</h3><p className="text-gray-600 text-sm">1669 Block L, Soshanguve, 0152, Tshwane</p><Button asChild variant="outline" className="mt-4 rounded-full border-school-navy/30 text-school-navy"><a href="https://www.google.com/maps/dir//Soshanguve+Engineering+School+of+Specialisation" target="_blank" rel="noopener noreferrer">Get Directions</a></Button></div></div></div></CardContent></Card></ScrollAnimation></div></section>
  </PageTransition>
}
