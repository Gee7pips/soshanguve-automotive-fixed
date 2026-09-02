"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, Mail, X } from "lucide-react"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

const WA_DEFAULT_MSG = "Hello Soshanguve Engineering School Of Specialisation, I would like to find out more about the school."
const contacts = [
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle, bg: "bg-[#25D366]", text: "text-white", action: () => openWhatsApp(WA_DEFAULT_MSG) },
  { id: "phone", label: "Call Us", icon: Phone, bg: "bg-school-navy", text: "text-white", href: "tel:0127972118" },
  { id: "email", label: "Email Us", icon: Mail, bg: "bg-school-gold", text: "text-school-navy", action: () => openEmail("General Enquiry", "Hello Soshanguve Engineering School Of Specialisation,\n\nI would like to find out more about the school.") },
]

export function FloatingContacts() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[9999] flex justify-end px-4 sm:bottom-6 sm:px-5">
      <div className="pointer-events-auto flex flex-col items-end gap-3">
        <AnimatePresence initial={false}>
          {open && contacts.map((c, i) => {
            const Icon = c.icon
            const className = `flex items-center gap-3 rounded-full px-4 py-2.5 font-semibold text-sm shadow-[0_14px_32px_-10px_rgba(15,23,42,0.45)] ring-1 ring-black/10 transition-transform hover:scale-105 active:scale-95 ${c.bg} ${c.text}`
            return c.action ? (
              <motion.button key={c.id} type="button" onClick={c.action} aria-label={c.label} initial={{ opacity: 0, y: 14, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.85 }} transition={{ duration: 0.2, delay: i * 0.05 }} className={className}><Icon className="h-5 w-5 shrink-0" /><span className="whitespace-nowrap">{c.label}</span></motion.button>
            ) : (
              <motion.a key={c.id} href={c.href} aria-label={c.label} initial={{ opacity: 0, y: 14, scale: 0.85 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 14, scale: 0.85 }} transition={{ duration: 0.2, delay: i * 0.05 }} className={className}><Icon className="h-5 w-5 shrink-0" /><span className="whitespace-nowrap">{c.label}</span></motion.a>
            )
          })}
        </AnimatePresence>

        <div className="relative">
          {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />}
          <motion.button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close contact options" : "Open contact options"} aria-expanded={open} whileTap={{ scale: 0.9 }} className={`relative flex h-14 w-14 items-center justify-center rounded-full shadow-[0_18px_40px_-12px_rgba(15,23,42,0.55)] ring-2 ring-white/90 ${open ? "bg-gray-800 text-white" : "bg-[#25D366] text-white"}`}>
            {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
          </motion.button>
        </div>
      </div>
    </div>
  )
}
