import { metadata } from "./metadata"
import type React from "react"

export { metadata }

export default function SupportUsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
