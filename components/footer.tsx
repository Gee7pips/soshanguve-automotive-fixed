import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Programs", href: "/programs" },
  { name: "Achievements", href: "/achievements" },
  { name: "Activities", href: "/activities" },
  { name: "Contact", href: "/contact" },
]

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/SoshaTechnical/",
    icon: Facebook,
    color: "hover:text-blue-400",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/technical_matrics?igsh=czMxOTZ1b20wbXNu",
    icon: Instagram,
    color: "hover:text-pink-500",
  },
]

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "700241314@gdeschools.gov.za",
    href: "mailto:700241314@gdeschools.gov.za",
    color: "hover:text-blue-300",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "012 797 2118",
    href: "tel:0127972118",
    color: "hover:text-green-300",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "1669 Block L, Soshanguve",
    href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve",
    color: "hover:text-red-300",
  },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-school-navy via-school-blue to-school-navy" />

      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 to-transparent" />

      <div className="container relative z-10 mx-auto py-16 px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* School Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Soshanguve Automotive
              </h3>
              <p className="mt-2 text-gray-300 leading-relaxed">
                Empowering future innovators through excellence in automotive and engineering education.
              </p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  asChild
                  variant="ghost"
                  size="icon"
                  className={`rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 ${social.color}`}
                >
                  <Link href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-school-gold mr-2 transform scale-0 group-hover:scale-100 transition-transform duration-200" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <Link
                    href={contact.href}
                    target={contact.icon !== MapPin ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className={`group flex items-center space-x-3 text-gray-300 ${contact.color} transition-colors duration-200`}
                  >
                    <div className="p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-200">
                      <contact.icon className="h-4 w-4" />
                    </div>
                    <span>{contact.value}</span>
                    {contact.icon !== Phone && (
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/CTA Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">Support Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              Join us in shaping the future of technical education in South Africa.
            </p>
            <Button
              asChild
              className="w-full bg-school-gold hover:bg-yellow-500 text-school-navy font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              <Link href="/support-us">Become a Sponsor</Link>
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Soshanguve Engineering School of Specialisation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
