"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, Phone, Mail, X, ChevronUp } from "lucide-react"

const WA_NUMBER = "27820985985" // international format without +
const WA_DEFAULT_MSG = encodeURIComponent(
  "Hello Soshanguve Automotive SoS, I would like to find out more about the school."
)

const contacts = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: MessageCircle,
    href: `https://wa.me/${WA_NUMBER}?text=${WA_DEFAULT_MSG}`,
    bg: "bg-[#25D366]",
    text: "text-white",
  },
  {
    id: "phone",
    label: "Call Us",
    icon: Phone,
    href: "tel:0127972118",
    bg: "bg-school-navy",
    text: "text-white",
  },
  {
    id: "email",
    label: "Email Us",
    icon: Mail,
    href: "mailto:soshanguve.technical@gmail.com",
    bg: "bg-school-gold",
    text: "text-school-navy",
  },
]

export function FloatingContacts() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expanded contact buttons */}
      <AnimatePresence>
        {open &&
          contacts.map((c, i) => (
            <motion.a
              key={c.id}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={c.label}
              initial={{ opacity: 0, y: 16, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.85 }}
              transition={{ duration: 0.22, delay: i * 0.06 }}
              className={`group flex items-center gap-3 rounded-full shadow-lg px-4 py-2.5 ${c.bg} ${c.text} font-semibold text-sm transition-transform hover:scale-105 active:scale-95`}
            >
              <c.icon className="h-5 w-5 shrink-0" />
              <span className="whitespace-nowrap">{c.label}</span>
            </motion.a>
          ))}
      </AnimatePresence>

      {/* WhatsApp pulse dot (always visible when closed) */}
      {!open && (
        <motion.div className="relative" initial={false}>
          {/* Ping ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
          <motion.button
            onClick={() => setOpen(true)}
            aria-label="Open contact options"
            whileTap={{ scale: 0.9 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl text-white"
          >
            <MessageCircle className="h-7 w-7" />
          </motion.button>
        </motion.div>
      )}

      {/* Close / collapse button */}
      {open && (
        <motion.button
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          aria-label="Close contact options"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-800 shadow-2xl text-white hover:bg-gray-700 transition-colors"
        >
          <X className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  )
}
