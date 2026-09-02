"use client"

import { MessageCircle, Phone, Mail } from "lucide-react"
import { openEmail, openWhatsApp } from "@/lib/contact-links"

const WA_DEFAULT_MSG = "Hello Soshanguve Engineering School Of Specialisation, I would like to find out more about the school."

export function FloatingContacts() {
  const baseClass = "flex h-12 w-12 items-center justify-center rounded-full text-white shadow-[0_16px_36px_-12px_rgba(15,23,42,0.6)] ring-2 ring-white/90 transition-transform duration-200 hover:-translate-y-1 hover:scale-105 active:scale-95 sm:h-14 sm:w-14"

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[9999] flex justify-end px-4 sm:bottom-6 sm:px-5">
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3" aria-label="Contact the school">
        <a href="tel:0127972118" aria-label="Call Soshanguve Engineering School Of Specialisation" className={`${baseClass} bg-school-navy`} title="Call Us"><Phone className="h-5 w-5 sm:h-6 sm:w-6" /></a>
        <button type="button" onClick={() => openEmail("General Enquiry", "Hello Soshanguve Engineering School Of Specialisation,\n\nI would like to find out more about the school.")} aria-label="Email Soshanguve Engineering School Of Specialisation" className={`${baseClass} bg-school-gold text-school-navy`} title="Email Us"><Mail className="h-5 w-5 sm:h-6 sm:w-6" /></button>
        <div className="relative"><span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" /><button type="button" onClick={() => openWhatsApp(WA_DEFAULT_MSG)} aria-label="WhatsApp Soshanguve Engineering School Of Specialisation" className={`relative ${baseClass} bg-[#25D366]`} title="WhatsApp Us"><MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" /></button></div>
      </div>
    </div>
  )
}
