"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { MessageCircle, Phone, Mail } from "lucide-react"
import { openEmail } from "@/lib/contact-links"

const WA_DEFAULT_MSG = "Hello Soshanguve Engineering School Of Specialisation, I would like to find out more about the school."

export function FloatingContacts() {
  const [footerVisible, setFooterVisible] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const footer = document.querySelector("[data-site-footer]")
    if (!footer || !("IntersectionObserver" in window)) return
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting), {
      threshold: 0.01,
      rootMargin: "0px 0px -56px 0px",
    })
    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const actionClass = "group relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/75 shadow-[0_10px_26px_-12px_rgba(4,18,38,.42)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-school-gold focus-visible:ring-offset-2 sm:h-12 sm:w-12"

  return (
    <motion.div
      initial={false}
      animate={{ opacity: footerVisible ? 0 : 1, y: footerVisible ? 16 : 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.22, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden={footerVisible}
      style={{ pointerEvents: footerVisible ? "none" : "auto" }}
      className="pointer-events-none fixed bottom-4 right-3 z-[70] safe-bottom sm:bottom-6 sm:right-6"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 rounded-full border border-white/70 bg-white/85 p-1.5 shadow-[0_18px_50px_-20px_rgba(5,20,44,.38)] backdrop-blur-2xl sm:gap-2 sm:p-2" aria-label="Contact the school">
        <span className="hidden pl-3 pr-1 font-technical text-[8px] font-bold uppercase tracking-[.16em] text-slate-400 xl:block">Connect</span>
        <a href="tel:0127972118" aria-label="Call Soshanguve Engineering School Of Specialisation" title="Call the school" className={actionClass + " bg-school-navy text-white"}>
          <Phone className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-school-navy px-2.5 py-1.5 text-[9px] font-bold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Call</span>
        </a>
        <button type="button" onClick={() => openEmail("General Enquiry", "Hello Soshanguve Engineering School Of Specialisation,\n\nI would like to find out more about the school.")} aria-label="Email Soshanguve Engineering School Of Specialisation" title="Email the school" className={actionClass + " bg-gradient-to-br from-[#f5d979] to-school-gold text-school-navy"}>
          <Mail className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-school-navy px-2.5 py-1.5 text-[9px] font-bold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">Email</span>
        </button>
        <a href="https://wa.me/27127972118?text=Hello%20Soshanguve%20Engineering%20School%20Of%20Specialisation%2C%20I%20would%20like%20to%20find%20out%20more%20about%20the%20school." target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Soshanguve Engineering School Of Specialisation" title="WhatsApp the school" className={actionClass + " bg-[#1fbf69] text-white shadow-[0_10px_28px_-10px_rgba(31,191,105,.5)]"}>
          <MessageCircle className="h-[18px] w-[18px] sm:h-5 sm:w-5" />
          <span className="pointer-events-none absolute bottom-[calc(100%+10px)] left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-school-navy px-2.5 py-1.5 text-[9px] font-bold text-white opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">WhatsApp</span>
        </a>
      </div>
    </motion.div>
  )
}
