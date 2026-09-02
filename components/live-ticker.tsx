"use client"

import { useState } from "react"
import { ArrowUpRight, Pause, Play, Radio, Sparkles } from "lucide-react"

const TICKER_ITEMS = [
  { category: "ACHIEVEMENT", text: "Class of 2025 makes history — 100% Matric Pass Rate at Soshanguve Automotive SoS" },
  { category: "INNOVATION", text: "S.o.S Flight 01 takes off — students design and build the school's first RC aircraft" },
  { category: "AWARD", text: "Rendani Tshikhudo named Best Quintile 3 Junior Learner — SA Mathematics Olympiad 2025" },
  { category: "WIN", text: "1st Place at the Gauteng SoS Festival 2026 — school aircraft project earns top honours" },
  { category: "PARTNERSHIP", text: "Vuma Fibre and Afrihost connect our campus — high-speed internet for every learner" },
  { category: "TECH", text: "New mBot Robotics Lab launched — state-of-the-art coding and robotics for all grades" },
  { category: "SPORT", text: "Netball, chess and table-tennis teams advance to inter-district championships 2026" },
  { category: "COMMUNITY", text: "100+ learners enrolled in extended engineering mentorship with industry partners" },
  { category: "APPLY", text: "2026 applications now open — non-fee-paying school serving 700+ learners across Tshwane" },
  { category: "NEWS", text: "Principal Mr. TA Mashiane receives national crystal award for educational leadership excellence" },
]

const CATEGORY_STYLES: Record<string, string> = {
  ACHIEVEMENT: "border-school-gold/30 bg-school-gold/10 text-school-gold",
  INNOVATION: "border-school-blue/40 bg-school-blue/15 text-blue-100",
  AWARD: "border-school-gold/30 bg-school-gold/10 text-school-gold",
  WIN: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200",
  PARTNERSHIP: "border-white/15 bg-white/[0.06] text-white/75",
  TECH: "border-sky-300/30 bg-sky-300/10 text-sky-100",
  SPORT: "border-orange-300/30 bg-orange-300/10 text-orange-100",
  COMMUNITY: "border-white/15 bg-white/[0.06] text-white/75",
  APPLY: "border-school-gold/30 bg-school-gold/10 text-school-gold",
  NEWS: "border-rose-300/30 bg-rose-300/10 text-rose-100",
}

export function LiveTicker() {
  const [paused, setPaused] = useState(false)
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <section
      className="relative overflow-hidden border-y border-school-navy/15 bg-[#08142e] text-white"
      aria-label="Live school news and updates"
    >
      {/* Technical scan line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10">
        <div className="h-full w-1/4 animate-[premium-ticker-scan_7s_linear_infinite] bg-gradient-to-r from-transparent via-school-gold/70 to-transparent" />
      </div>

      <div className="mx-auto flex max-w-7xl items-stretch">
        {/* Editorial live module */}
        <div className="relative z-20 flex w-[116px] shrink-0 flex-col justify-center border-r border-white/10 bg-[#0c1d3d] px-4 py-3 sm:w-[168px] sm:px-5">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inset-0 animate-ping rounded-full bg-school-gold/70" />
              <span className="relative h-2 w-2 rounded-full bg-school-gold" />
            </span>
            <span className="text-[9px] font-extrabold uppercase tracking-[0.24em] text-school-gold">Live feed</span>
          </div>
          <div className="mt-1.5 flex items-center gap-1.5">
            <Radio className="h-3 w-3 text-white/50" aria-hidden="true" />
            <span className="font-serif text-base font-semibold tracking-tight sm:text-lg">SOS / NOW</span>
          </div>
        </div>

        {/* Marquee viewport */}
        <div
          className="relative min-w-0 flex-1 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#08142e] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#08142e] to-transparent" />

          <div
            className="flex min-h-[76px] w-max items-center py-3 will-change-transform"
            style={{
              animation: "premium-ticker-scroll 72s linear infinite",
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {items.map((item, index) => {
              const badgeStyle = CATEGORY_STYLES[item.category] ?? CATEGORY_STYLES.ACHIEVEMENT
              return (
                <article key={`${item.category}-${index}`} className="flex shrink-0 items-center gap-5 px-5 sm:px-7">
                  <div className="flex shrink-0 items-center gap-2">
                    <span className="font-mono text-[9px] font-bold tabular-nums text-white/25">{String((index % TICKER_ITEMS.length) + 1).padStart(2, "0")}</span>
                    <span className={`rounded-full border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em] ${badgeStyle}`}>
                      {item.category}
                    </span>
                  </div>
                  <p className="max-w-[560px] text-[12px] font-medium leading-5 text-white/80 sm:text-[13px]">{item.text}</p>
                  <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-school-gold/60" aria-hidden="true" />
                </article>
              )
            })}
          </div>
        </div>

        {/* Controls */}
        <div className="relative z-20 hidden w-[116px] shrink-0 items-center justify-end gap-2 border-l border-white/10 bg-[#0c1d3d] px-4 lg:flex">
          <div className="mr-auto hidden items-center gap-1.5 xl:flex">
            <Sparkles className="h-3 w-3 text-school-gold" />
            <span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/40">Updates</span>
          </div>
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/65 transition-all duration-300 hover:border-school-gold/50 hover:bg-school-gold hover:text-school-navy"
            aria-label={paused ? "Resume live updates" : "Pause live updates"}
          >
            {paused ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5 fill-current" />}
          </button>
        </div>
      </div>

      {/* Mobile control rail */}
      <div className="flex items-center justify-between border-t border-white/10 bg-[#0c1d3d] px-4 py-2 lg:hidden">
        <div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/35">
          <Sparkles className="h-3 w-3 text-school-gold" />
          School updates · live
        </div>
        <button
          type="button"
          onClick={() => setPaused((value) => !value)}
          className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-school-gold/40 hover:text-school-gold"
          aria-label={paused ? "Resume live updates" : "Pause live updates"}
        >
          {paused ? <Play className="h-3 w-3 fill-current" /> : <Pause className="h-3 w-3 fill-current" />}
          {paused ? "Resume" : "Pause"}
        </button>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-school-gold/40 to-transparent" />
    </section>
  )
}
