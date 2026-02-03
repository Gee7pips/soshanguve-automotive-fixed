"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { AnimatePresence } from "framer-motion"
import type React from "react"

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <main className="flex-grow min-h-screen">{children}</main>
      </AnimatePresence>
      <Footer />
      <StructuredData />
    </>
  )
}
