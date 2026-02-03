"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { SidebarMenuItem } from "@/components/sidebar-menu-item"

const routes = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/staff", label: "Staff" },
  { href: "/academics", label: "Academics" },
  { href: "/achievements", label: "Achievements" },
  { href: "/activities", label: "Activities" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/programs", label: "Programs" },
  { href: "/documents", label: "Documents" },
  { href: "/support-us", label: "Support Us" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply Now" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md border-b border-gray-200/40 shadow-lg"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 lg:py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo Section - Prominently Displayed */}
          <Link 
            href="/" 
            className="flex items-center gap-3 lg:gap-4 group flex-shrink-0"
          >
            <motion.div 
              whileHover={{ scale: 1.08, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
              className="relative h-20 w-20 lg:h-24 lg:w-24 rounded-2xl bg-gradient-to-br from-school-navy/10 to-school-gold/10 backdrop-blur-sm p-2 flex items-center justify-center border border-school-gold/20 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src="/images/fb-img-1770099205683.jpg"
                alt="Soshanguve Automotive S.O.S School Crest"
                width={96}
                height={96}
                className="object-contain drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300"
                priority
              />
            </motion.div>
            <div className="hidden sm:flex flex-col justify-center space-y-1">
              <h1 className="text-lg lg:text-2xl font-bold text-school-navy leading-tight group-hover:text-school-blue transition-colors">
                Soshanguve
              </h1>
              <p className="text-xs lg:text-sm font-semibold text-school-gold">
                Automotive S.O.S
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - Center */}
          <nav className="hidden xl:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-white via-gray-50 to-white rounded-full px-6 py-3 border border-gray-200/60 shadow-md backdrop-blur-sm">
              {routes.slice(0, 6).map((route) => {
                const isActive = pathname === route.href
                return (
                  <motion.div
                    key={route.href}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={route.href}
                      className={`relative px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                        isActive 
                          ? "text-white shadow-lg" 
                          : "text-gray-700 hover:text-school-navy"
                      }`}
                    >
                      {route.label}
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-blue to-school-navy rounded-full -z-10 shadow-lg"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-2 lg:gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link
                href="/support-us"
                className="px-6 py-3 bg-gradient-to-r from-school-gold via-orange-400 to-school-gold text-white font-semibold text-sm rounded-full hover:shadow-lg transition-all duration-300"
              >
                Support Us
              </Link>
            </motion.div>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="xl:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-11 w-11 rounded-full hover:bg-school-navy/10 transition-colors"
                >
                  {isOpen ? (
                    <X className="h-6 w-6 text-school-navy" />
                  ) : (
                    <Menu className="h-6 w-6 text-school-navy" />
                  )}
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>

              {/* Mobile Sidebar */}
              <SheetContent
                side="right"
                className="w-full sm:w-96 p-0 bg-gradient-to-b from-white via-gray-50 to-white border-l border-gray-200/50 shadow-2xl"
              >
                <div className="flex flex-col h-full">
                  {/* Mobile Sidebar Header */}
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="sticky top-0 z-10 bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-lg px-6 py-6 border-b border-gray-200/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative h-14 w-14 rounded-xl bg-gradient-to-br from-school-navy/10 to-school-gold/10 p-1.5 flex items-center justify-center border border-school-gold/20">
                        <Image
                          src="/images/fb-img-1770099205683.jpg"
                          alt="Soshanguve Automotive S.O.S"
                          width={56}
                          height={56}
                          className="object-contain drop-shadow-md"
                          priority
                        />
                      </div>
                      <div className="flex flex-col">
                        <p className="text-sm font-bold text-school-navy leading-tight">Soshanguve</p>
                        <p className="text-xs font-semibold text-school-gold">Automotive S.O.S</p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Menu Items */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-grow overflow-y-auto py-4 px-3 space-y-1"
                  >
                    <AnimatePresence>
                      {routes.map((route, index) => (
                        <SidebarMenuItem
                          key={route.href}
                          href={route.href}
                          label={route.label}
                          isActive={pathname === route.href}
                          onClick={() => setIsOpen(false)}
                          index={index}
                        />
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {/* Mobile Sidebar Footer */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="sticky bottom-0 p-4 border-t border-gray-200/50 bg-gradient-to-t from-white to-gray-50/80 backdrop-blur-lg space-y-3"
                  >
                    <Link
                      href="/support-us"
                      className="block w-full py-3 px-4 text-center bg-gradient-to-r from-school-gold via-orange-400 to-school-gold hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full text-white font-semibold text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Sponsor Us
                    </Link>
                    <Link
                      href="/apply"
                      className="block w-full py-3 px-4 text-center bg-gradient-to-r from-school-navy to-school-blue hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-full text-white font-semibold text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      Apply Now
                    </Link>
                  </motion.div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
