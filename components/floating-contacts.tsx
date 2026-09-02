"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, Mail, X } from "lucide-react"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

const WA_DEFAULT_MSG = "Hello Soshanguve Automotive SoS, I would like to find out more about the school."
const contacts = [
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, bg: "bg-[#25D366]", text: "text-white", action: () => openWhatsApp(WA_DEFAULT_MSG) },
  { id: "phone", label: "Call Us", icon: Phone, bg: "bg-school-navy", text: "text-white", href: "tel:0127972118" },
  { id: "email", label: "Email Us", icon: Mail, bg: "bg-school-gold", text: "text-school-navy", action: () => openEmail("General Enquiry", "Hello Soshanguve Automotive SoS,\n\nI would like to find out more about the school.") },
]

export function FloatingContacts() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && contacts.map((c, i) => {
          const Icon = c.icon
          return c.action ? (
            <motion.button key={c.id} type="button" onClick={c.action} aria-label={c.label} initial={{ opacity: 0, y: 16, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.85 }} transition={{ duration: 0.22, delay: i * 0.06 }} className={`group flex items-center gap-3 rounded-full shadow-lg px-4 py-2.5 ${c.bg} ${c.text} font-semibold text-sm transition-transform hover:scale-105 active:scale-95`}><Icon className="h-5 w-5 shrink-0" /><span className="whitespace-nowrap">{c.label}</span></motion.button>
          ) : (
            <motion.a key={c.id} href={c.href} aria-label={c.label} initial={{ opacity: 0, y: 16, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.85 }} transition={{ duration: 0.22, delay: i * 0.06 }} className={`group flex items-center gap-3 rounded-full shadow-lg px-4 py-2.5 ${c.bg} ${c.text} font-semibold text-sm transition-transform hover:scale-105 active:scale-95`}><Icon className="h-5 w-5 shrink-0" /><span className="whitespace-nowrap">{c.label}</span></motion.a>
          )
        })}
      </AnimatePresence>
      {!open && <motion.div className="relative" initial={false}><span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" /><motion.button onClick={() => setOpen(true)} aria-label="Open contact options" whileTap={{ scale: 0.9 }} className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl text-white"><MessageCircle className="h-7 w-7" /></motion.button></motion.div>}
      {open && <motion.button initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} onClick={() => setOpen(false)} aria-label="Close contact options" className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 shadow-2xl text-white hover:bg-gray-700 transition-colors"><X className="h-6 w-6" /></motion.button>}
    </div>
  )
}
