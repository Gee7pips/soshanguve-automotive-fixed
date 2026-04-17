"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Facebook,
  Mail,
  MapPin,
  Phone,
  Loader2,
  CheckCircle2,
  MessageCircle,
  Send,
  ChevronDown,
} from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { PageTransition } from "@/components/page-transition"
import type React from "react"

const WA_NUMBER = "27820985985"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "soshanguve.technical@gmail.com",
    href: "mailto:soshanguve.technical@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "012 797 2118",
    href: "tel:0127972118",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "082 098 5985",
    href: `https://wa.me/${WA_NUMBER}`,
  },
  {
    icon: MapPin,
    title: "Address",
    value: "1669 Block L, Soshanguve, Pretoria",
    href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve,+Pretoria",
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "@sosh-technical.com",
    href: "https://facebook.com/sosh-technical.com",
  },
]

type Enquiry = "general" | "admission" | "partnership" | "media"

const enquiryLabels: Record<Enquiry, string> = {
  general: "General Enquiry",
  admission: "Admission / Enrolment",
  partnership: "Partnership / Sponsorship",
  media: "Media / Press",
}

interface FormState {
  name: string
  email: string
  phone: string
  subject: Enquiry
  message: string
}

const empty: FormState = { name: "", email: "", phone: "", subject: "general", message: "" }

function buildWhatsAppUrl(f: FormState) {
  const body =
    `Hello Soshanguve Automotive SoS,%0A%0A` +
    `*Enquiry Type:* ${enquiryLabels[f.subject]}%0A` +
    `*Name:* ${encodeURIComponent(f.name)}%0A` +
    `*Email:* ${encodeURIComponent(f.email)}%0A` +
    (f.phone ? `*Phone:* ${encodeURIComponent(f.phone)}%0A` : "") +
    `%0A*Message:*%0A${encodeURIComponent(f.message)}`
  return `https://wa.me/${WA_NUMBER}?text=${body}`
}

function buildMailtoUrl(f: FormState) {
  const subject = encodeURIComponent(`[${enquiryLabels[f.subject]}] from ${f.name}`)
  const body = encodeURIComponent(
    `Enquiry Type: ${enquiryLabels[f.subject]}\nName: ${f.name}\nEmail: ${f.email}${f.phone ? `\nPhone: ${f.phone}` : ""}\n\nMessage:\n${f.message}`
  )
  return `mailto:soshanguve.technical@gmail.com?subject=${subject}&body=${body}`
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const { toast } = useToast()

  const set = (key: keyof FormState, val: string) =>
    setForm((prev) => ({ ...prev, [key]: val }))

  const handleEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" })
      return
    }
    setSubmitting(true)
    // Open default mail client with pre-filled content
    window.location.href = buildMailtoUrl(form)
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      toast({ title: "Email client opened", description: "Your message has been pre-filled. Please click Send." })
      setForm(empty)
      setTimeout(() => setSuccess(false), 4000)
    }, 800)
  }

  const handleWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in your name and message.", variant: "destructive" })
      return
    }
    window.open(buildWhatsAppUrl(form), "_blank", "noopener,noreferrer")
  }

  const inputCls =
    "border-gray-200 focus:border-school-blue focus:ring-2 focus:ring-school-blue/20 rounded-xl transition-all duration-200"

  return (
    <PageTransition>
      <PageHeader
        title="Get in Touch"
        subtitle="We would love to hear from you. Reach out for enquiries, partnerships, or admission questions."
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      {/* Contact info cards */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-school-gold" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">
                  Reach Us
                </span>
                <span className="h-px w-8 bg-school-gold" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-school-navy text-balance">
                Contact Information
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
            {contactInfo.map((item, i) => (
              <ScrollAnimation key={i}>
                <motion.a
                  href={item.href}
                  target={item.icon !== MapPin ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="group flex flex-col items-center text-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-school-navy/5 group-hover:bg-school-navy/10 transition-colors">
                    <item.icon className="h-5 w-5 text-school-navy" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-school-gold mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600 group-hover:text-school-blue transition-colors leading-snug">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              </ScrollAnimation>
            ))}
          </div>

          {/* Dual-submit form */}
          <div className="grid gap-8 lg:grid-cols-2 items-start">

            {/* Left: form fields */}
            <ScrollAnimation>
              <div className="space-y-5">
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-6 bg-school-gold" />
                  <h3 className="font-serif text-2xl font-bold text-school-navy">Send a Message</h3>
                </div>

                {/* Enquiry type selector */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Enquiry Type <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      value={form.subject}
                      onChange={(e) => set("subject", e.target.value as Enquiry)}
                      className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:border-school-blue focus:outline-none focus:ring-2 focus:ring-school-blue/20 transition-all duration-200 pr-10"
                    >
                      {Object.entries(enquiryLabels).map(([v, l]) => (
                        <option key={v} value={v}>{l}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  </div>
                </div>

                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></label>
                  <Input
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="e.g. Thabo Dlamini"
                    className={inputCls}
                    required
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Email Address <span className="text-red-500">*</span></label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@example.com"
                    className={inputCls}
                    required
                  />
                </div>

                {/* Phone (optional) */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Phone Number <span className="text-gray-400 font-normal">(optional)</span></label>
                  <Input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="e.g. 083 123 4567"
                    className={inputCls}
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-gray-700">Message <span className="text-red-500">*</span></label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Tell us how we can help..."
                    className={`min-h-[140px] ${inputCls}`}
                    required
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Right: submit options */}
            <ScrollAnimation>
              <Card className="border-0 shadow-lg rounded-2xl overflow-hidden h-full">
                <div className="h-1.5 w-full bg-school-gold" />
                <CardContent className="p-8 flex flex-col gap-6 h-full">

                  <div>
                    <h4 className="font-serif text-xl font-bold text-school-navy mb-2">How would you like to send?</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      Choose to send via your email client with a structured, pre-filled message — or open WhatsApp
                      with the same details ready to go.
                    </p>
                  </div>

                  <div className="h-px bg-gray-100" />

                  {/* Email CTA */}
                  <form onSubmit={handleEmail} className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-school-navy/3 border border-school-navy/10">
                      <Mail className="h-5 w-5 text-school-navy mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-school-navy">Send via Email</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Opens your mail app with a structured message pre-filled and addressed to{" "}
                          <span className="font-medium">soshanguve.technical@gmail.com</span>
                        </p>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-school-navy hover:bg-school-blue text-white rounded-xl font-semibold py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      {submitting ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : success ? (
                        <CheckCircle2 className="h-4 w-4" />
                      ) : (
                        <Send className="h-4 w-4" />
                      )}
                      {submitting ? "Opening mail app..." : success ? "Email client opened!" : "Send via Email"}
                    </Button>
                  </form>

                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex-1 h-px bg-gray-100" />
                    <span>or</span>
                    <span className="flex-1 h-px bg-gray-100" />
                  </div>

                  {/* WhatsApp CTA */}
                  <form onSubmit={handleWhatsApp} className="space-y-3">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/20">
                      <MessageCircle className="h-5 w-5 text-[#25D366] mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-gray-800">Send via WhatsApp</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          Opens WhatsApp with your enquiry pre-filled to{" "}
                          <span className="font-medium">082 098 5985</span>. Fastest response guaranteed.
                        </p>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-[#25D366] hover:bg-[#1ebe5c] text-white rounded-xl font-semibold py-3 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp
                    </Button>
                  </form>

                  <p className="text-xs text-gray-400 text-center mt-auto">
                    We typically respond within 24 hours on school days.
                  </p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold text-school-navy mb-3">Find Us</h2>
            <p className="text-gray-500">Visit our campus and see our world-class facilities firsthand</p>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="overflow-hidden rounded-2xl shadow-lg border-0">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.4143162647837!2d28.138899776537827!3d-25.531599137376397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfd2b76a355555%3A0x41c6bbd8d68e153e!2sSoshanguve%20Engineering%20School%20of%20Specialisation!5e0!3m2!1sen!2sza!4v1709136000000!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                    title="Soshanguve Automotive SoS location on Google Maps"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-school-navy/5 shrink-0">
                      <MapPin className="h-5 w-5 text-school-navy" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-school-navy mb-1">Our Location</h3>
                      <p className="text-gray-600 text-sm">1669 Block L, Soshanguve, 0152, Tshwane</p>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                        Easily accessible via public transport and major routes through Soshanguve and Pretoria North.
                      </p>
                      <div className="mt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full border-school-navy/30 text-school-navy hover:bg-school-navy hover:text-white transition-all duration-300"
                        >
                          <a
                            href="https://www.google.com/maps/dir//Soshanguve+Engineering+School+of+Specialisation"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </PageTransition>
  )
}
