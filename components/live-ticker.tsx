"use client"

import { useRef, useState } from "react"
import { Megaphone } from "lucide-react"

const tickerItems = [
  { label: "NEW", text: "Class of 2025 achieves a historic 100% Matric Pass Rate — Soshanguve Automotive SoS" },
  { label: "WIN", text: "1st Place at the Gauteng SoS Festival with S.o.S Flight 01 — our student-built RC aircraft" },
  { label: "AWARD", text: "Rendani Tshikhudo wins Best Quintile 3 Junior Learner at the South African Mathematics Olympiad 2025" },
  { label: "PARTNER", text: "New fibre connectivity partnership with Vuma Fibre & Afrihost — connecting every learner" },
  { label: "TECH", text: "State-of-the-art mBot Robotics Lab launched — coding and robotics for every grade" },
  { label: "SPORT", text: "School netball, chess and table-tennis teams represent at inter-district competitions 2026" },
  { label: "APPLY", text: "2026 applications now open — non-fee-paying school serving 700+ learners in Tshwane" },
]

export function LiveTicker() {
  const [paused, setPaused] = useState(false)
  const trackRef = useRef<HTMLDivElement>(null)

  // Duplicate items so the seamless loop works
  const allItems = [...tickerItems, ...tickerItems]

  return (
    <div
      className="relative bg-school-navy border-y border-school-gold/30 overflow-hidden select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="School news ticker"
      role="marquee"
    >
      {/* Left badge */}
      <div className="absolute left-0 top-0 bottom-0 z-20 flex items-center bg-school-gold px-4 gap-2 shadow-lg">
        <Megaphone className="h-4 w-4 text-school-navy shrink-0" aria-hidden="true" />
        <span className="text-[11px] font-black tracking-[0.18em] uppercase text-school-navy whitespace-nowrap hidden sm:block">
          Latest News
        </span>
      </div>

      {/* Gradient fade — left */}
      <div className="absolute left-[52px] sm:left-[120px] top-0 bottom-0 w-8 z-10 bg-gradient-to-r from-school-navy to-transparent pointer-events-none" />

      {/* Scrolling track */}
      <div className="pl-[60px] sm:pl-[132px] py-3 overflow-hidden">
        <div
          ref={trackRef}
          className="flex whitespace-nowrap"
          style={{
            animation: `ticker 48s linear infinite`,
            animationPlayState: paused ? "paused" : "running",
          }}
        >
          {allItems.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 mr-12">
              <span className="inline-block bg-school-gold text-school-navy text-[10px] font-black tracking-widest px-2 py-0.5 rounded-sm">
                {item.label}
              </span>
              <span className="text-white/85 text-sm font-medium">{item.text}</span>
              <span className="text-school-gold/40 mx-2 text-lg leading-none">&#9670;</span>
            </span>
          ))}
        </div>
      </div>

      {/* Gradient fade — right */}
      <div className="absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-school-navy to-transparent pointer-events-none" />
    </div>
  )
}
