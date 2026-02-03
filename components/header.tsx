"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
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
  const pathname = usePathname()
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-md border-b border-gray-100"
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 lg:space-x-3 group">
          <div className="relative h-12 w-12 lg:h-14 lg:w-14">
            <Image
              src="/images/gemini-generated-image-w3vj3ew3vj3ew3vj.jpeg"
              alt="Soshanguve Automotive S.O.S School Crest"
              width={56}
              height={56}
              className="object-contain drop-shadow-md group-hover:drop-shadow-lg group-hover:scale-110 transition-all duration-300"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-school-gold/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md" />
          </div>
          <div className="hidden lg:flex flex-col justify-center">
            <span className="font-bold text-sm lg:text-lg leading-tight bg-gradient-to-r from-school-navy via-school-blue to-school-gold bg-clip-text text-transparent group-hover:from-school-gold group-hover:via-school-blue group-hover:to-school-navy transition-all duration-300">
              Soshanguve Automotive
            </span>
            <span className="text-xs text-gray-600 font-semibold">
              S.O.S
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center space-x-1">
          <div className="flex items-center space-x-1 bg-gradient-to-r from-gray-50 to-white backdrop-blur-xl rounded-full px-4 py-2 border border-gray-200/60 shadow-sm">
            {routes.map((route) => {
              const isActive = pathname === route.href
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`relative px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 whitespace-nowrap ${
                    isActive 
                      ? "text-white" 
                      : "text-gray-700 hover:text-school-navy hover:bg-gray-100/50"
                  }`}
                >
                  {route.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-gradient-to-r from-school-navy via-school-blue to-school-navy shadow-lg rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="xl:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative hover:bg-school-navy/10 rounded-full transition-all duration-300"
            >
              <Menu className="h-6 w-6 text-school-navy" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-b from-white to-gray-50 p-0 border-l border-gray-200 shadow-xl">
            <nav className="flex flex-col h-full">
              <div className="sticky top-0 z-10 bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-sm p-4 border-b border-gray-200 flex items-center space-x-3">
                <Image
                  src="/images/gemini-generated-image-w3vj3ew3vj3ew3vj.jpeg"
                  alt="Soshanguve Automotive S.O.S School Crest"
                  width={44}
                  height={44}
                  className="object-contain drop-shadow-md"
                  priority
                />
                <div className="flex flex-col">
                  <span className="font-bold text-sm leading-tight text-school-navy">Soshanguve</span>
                  <span className="text-xs text-gray-600">Automotive S.O.S</span>
                </div>
              </div>
              <div className="flex-grow overflow-y-auto py-2">
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
              </div>
              <div className="sticky bottom-0 p-4 border-t border-gray-200 bg-gradient-to-t from-white to-gray-50 backdrop-blur-sm">
                <Link
                  href="/apply"
                  className="block w-full py-3 px-4 text-center bg-gradient-to-r from-school-navy via-school-blue to-school-gold hover:shadow-lg hover:scale-105 transition-all duration-300 rounded-lg text-white font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
