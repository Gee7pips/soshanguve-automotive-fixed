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
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg"
            alt="Soshanguve Engineering School Logo"
            width={40}
            height={40}
            className="rounded-sm"
            priority
          />
          <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
            Soshanguve Automotive
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <div className="flex items-center space-x-1 bg-gray-50/50 backdrop-blur-sm rounded-full px-3 py-1.5 border border-gray-100/50">
            {routes.map((route) => {
              const isActive = pathname === route.href
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive ? "text-school-navy" : "text-gray-600 hover:text-school-navy"
                  }`}
                >
                  {route.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white shadow-md rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white p-0">
            <nav className="flex flex-col h-full">
              <div className="p-4 border-b">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg"
                  alt="Soshanguve Engineering School Logo"
                  width={40}
                  height={40}
                  className="rounded-sm"
                  priority
                />
              </div>
              <div className="flex-grow overflow-y-auto py-4">
                <AnimatePresence>
                  {routes.map((route) => (
                    <SidebarMenuItem
                      key={route.href}
                      href={route.href}
                      label={route.label}
                      isActive={pathname === route.href}
                      onClick={() => setIsOpen(false)}
                    />
                  ))}
                </AnimatePresence>
              </div>
              <div className="p-4 border-t">
                <Link
                  href="/support-us"
                  className="block w-full py-2 px-4 text-center bg-gradient-to-r from-school-navy to-school-blue hover:opacity-90 transition-opacity rounded-lg text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Support Us
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
