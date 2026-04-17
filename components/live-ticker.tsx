"use client"

import { useState } from "react"
import { Radio } from "lucide-react"

const TICKER_ITEMS = [
  { category: "ACHIEVEMENT", text: "Class of 2025 makes history — 100% Matric Pass Rate at Soshanguve Automotive SoS" },
  { category: "INNOVATION",  text: "S.o.S Flight 01 takes off — students design and build the school's first RC aircraft" },
  { category: "AWARD",       text: "Rendani Tshikhudo named Best Quintile 3 Junior Learner — SA Mathematics Olympiad 2025" },
  { category: "WIN",         text: "1st Place at the Gauteng SoS Festival 2026 — school aircraft project earns top honours" },
  { category: "PARTNERSHIP", text: "Vuma Fibre and Afrihost connect our campus — high-speed internet for every learner" },
  { category: "TECH",        text: "New mBot Robotics Lab launched — state-of-the-art coding and robotics for all grades" },
  { category: "SPORT",       text: "Netball, chess and table-tennis teams advance to inter-district championships 2026" },
  { category: "COMMUNITY",   text: "100+ learners enrolled in extended engineering mentorship with industry partners" },
  { category: "APPLY",       text: "2026 applications now open — non-fee-paying school serving 700+ learners across Tshwane" },
  { category: "NEWS",        text: "Principal Mr. TA Mashiane receives national crystal award for educational leadership excellence" },
]

const CATEGORY_STYLES: Record<string, string> = {
  ACHIEVEMENT: "bg-school-gold text-school-navy",
  INNOVATION:  "bg-school-blue text-white",
  AWARD:       "bg-school-gold text-school-navy",
  WIN:         "bg-emerald-500 text-white",
  PARTNERSHIP: "bg-white/15 text-white",
  TECH:        "bg-school-blue text-white",
  SPORT:       "bg-orange-500 text-white",
  COMMUNITY:   "bg-white/15 text-white",
  APPLY:       "bg-school-gold text-school-navy",
  NEWS:        "bg-rose-600 text-white",
}

export function LiveTicker() {
  const [paused, setPaused] = useState(false)

  // Triple items so translateX(-33.333%) produces a seamless loop
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div
      className="relative overflow-hidden select-none"
      role="region"
      aria-label="School news and updates"
    >
      {/* Gold top accent */}
      <div className="h-0.5 bg-school-gold" />

      <div className="bg-school-navy flex items-stretch">

        {/* ── Fixed LIVE badge ── */}
        <div className="flex-shrink-0 flex items-center gap-2.5 bg-school-gold pl-4 pr-5 py-3.5 z-20 shadow-[4px_0_12px_rgba(0,0,0,0.25)]">
          {/* Pulsing dot */}
          <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-school-navy/60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-school-navy" />
          </span>
          <Radio className="h-3.5 w-3.5 text-school-navy hidden sm:block" aria-hidden="true" />
          <span className="text-[11px] font-black tracking-[0.22em] uppercase text-school-navy whitespace-nowrap">
            Live
          </span>
        </div>

        {/* Divider */}
        <div className="w-px bg-school-gold/40 flex-shrink-0" />

        {/* ── Scrolling track ── */}
        <div
          className="flex-1 overflow-hidden relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Left fade */}
          <div
            className="absolute left-0 top-0 bottom-0 w-8 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, #1E3A8A 0%, transparent 100%)" }}
          />

          <div
            className="flex items-center whitespace-nowrap py-3.5 will-change-transform"
            style={{
              animation: "ticker 65s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {items.map((item, i) => {
              const style = CATEGORY_STYLES[item.category] ?? "bg-school-gold text-school-navy"
              return (
                <span key={i} className="inline-flex items-center gap-3 px-6 flex-shrink-0">
                  {/* Badge */}
                  <span className={`inline-flex items-center px-2 py-[3px] rounded text-[9px] font-black tracking-[0.14em] uppercase flex-shrink-0 ${style}`}>
                    {item.category}
                  </span>
                  {/* Text */}
                  <span className="text-[13px] sm:text-sm font-medium text-white/90 leading-snug">
                    {item.text}
                  </span>
                  {/* Separator */}
                  <span className="text-school-gold/40 text-sm leading-none flex-shrink-0" aria-hidden="true">
                    &#9670;
                  </span>
                </span>
              )
            })}
          </div>

          {/* Right fade */}
          <div
            className="absolute right-0 top-0 bottom-0 w-12 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, #1E3A8A 0%, transparent 100%)" }}
          />
        </div>
      </div>

      {/* Gold bottom accent */}
      <div className="h-0.5 bg-school-gold/30" />
    </div>
  )
}
