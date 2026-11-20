"use client"

import { useState } from "react"
import { Activity, Pause, Play, Radio, Sparkles, Zap } from "lucide-react"

const TICKER_ITEMS = [
  { category: "ACHIEVEMENT", text: "Class of 2025 makes history — 100% Matric Pass Rate at Soshanguve Engineering School Of Specialisation" },
  { category: "INNOVATION", text: "S.o.S Flight 01 takes off — students design and build the school's first RC aircraft" },
  { category: "AWARD", text: "Rendani Tshikhudo named Best Quintile 3 Junior Learner — SA Mathematics Olympiad 2025" },
  { category: "WIN", text: "1st Place at the Gauteng SoS Festival 2026 — school aircraft project earns top honours" },
  { category: "WIN", text: "Future Nation Business Challenge 2026 — Soshanguve Engineering SOS takes 1st place and wins R15,000" },
  { category: "PARTNERSHIP", text: "Vuma Fibre and Afrihost connect our campus — high-speed internet for every learner" },
  { category: "TECH", text: "New mBot Robotics Lab launched — state-of-the-art coding and robotics for all grades" },
  { category: "SPORT", text: "Netball, chess and table-tennis teams advance to inter-district championships 2026" },
  { category: "COMMUNITY", text: "Black Coffee Foundation and Gautrain support learners through a 2026 school-uniform initiative" },
  { category: "ADMISSIONS", text: "2027 Grade 8 admissions — check the official GDE portal for placement updates and late-application guidance" },
  { category: "NEWS", text: "Principal Mr. TA Mashiane receives national crystal award for educational leadership excellence" },
]

const CATEGORY_STYLES: Record<string, string> = {
  ACHIEVEMENT: "border-school-gold/30 bg-school-gold/10 text-school-gold", INNOVATION: "border-school-blue/40 bg-school-blue/15 text-blue-100", AWARD: "border-school-gold/30 bg-school-gold/10 text-school-gold", WIN: "border-emerald-400/30 bg-emerald-400/10 text-emerald-200", PARTNERSHIP: "border-white/15 bg-white/[0.06] text-white/75", TECH: "border-sky-300/30 bg-sky-300/10 text-sky-100", SPORT: "border-orange-300/30 bg-orange-300/10 text-orange-100", COMMUNITY: "border-white/15 bg-white/[0.06] text-white/75", ADMISSIONS: "border-school-gold/30 bg-school-gold/10 text-school-gold", NEWS: "border-rose-300/30 bg-rose-300/10 text-rose-100",
}

export function LiveTicker() {
  const [paused, setPaused] = useState(false)
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS]
  return (
    <section className="relative overflow-hidden border-y border-school-navy/15 bg-[linear-gradient(105deg,#061326_0%,#0b1e3b_48%,#07162c_100%)] text-white shadow-[0_18px_45px_-32px_rgba(4,12,28,0.8)]" aria-label="Live school news and updates">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-white/10"><div className="h-full w-1/4 animate-[premium-ticker-scan_7s_linear_infinite] bg-gradient-to-r from-transparent via-school-gold/70 to-transparent" /></div>
      <div className="mx-auto flex max-w-7xl items-stretch">
        <div className="relative z-20 flex w-[128px] shrink-0 flex-col justify-center border-r border-white/10 bg-gradient-to-br from-[#10284b] via-[#0c1d3d] to-[#09172f] px-4 py-3 sm:w-[196px] sm:px-5">
          <div className="flex items-center gap-2"><span className="relative flex h-2 w-2 shrink-0"><span className="absolute inset-0 animate-ping rounded-full bg-school-gold/60" /><span className="relative h-2 w-2 rounded-full bg-school-gold shadow-[0_0_12px_rgba(212,175,55,0.85)]" /></span><span className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-school-gold">Schoolwire</span></div>
          <div className="mt-1.5 flex items-center gap-1.5"><Radio className="h-3 w-3 text-white/50" aria-hidden="true" /><span className="font-serif text-[17px] font-semibold tracking-tight text-white sm:text-xl">SOS / PULSE</span></div>
          <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.16em] text-white/35 sm:block">Engineering · Campus · Community</span>
        </div>
        <div className="relative min-w-0 flex-1 overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocus={() => setPaused(true)} onBlur={() => setPaused(false)}><div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#08142e] to-transparent" /><div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#08142e] to-transparent" /><div className="flex min-h-[84px] w-max items-center py-3 will-change-transform" style={{ animation: "premium-ticker-scroll 88s linear infinite", animationPlayState: paused ? "paused" : "running" }}>{items.map((item, index) => { const badgeStyle = CATEGORY_STYLES[item.category] ?? CATEGORY_STYLES.ACHIEVEMENT; return <article key={`${item.category}-${index}`} className="group flex shrink-0 items-center gap-4 border-r border-white/[0.07] px-5 sm:gap-5 sm:px-8">
              <div className="flex shrink-0 flex-col items-start gap-1.5">
                <span className="font-mono text-[8px] font-bold tabular-nums tracking-[0.18em] text-white/25">SIGNAL / {String((index % TICKER_ITEMS.length) + 1).padStart(2, "0")}</span>
                <span className={`rounded-md border px-2.5 py-1 text-[8px] font-black uppercase tracking-[0.16em] ${badgeStyle}`}>{item.category}</span>
              </div>
              <p className="max-w-[560px] text-[12px] font-medium leading-[1.65] text-white/75 transition-colors duration-300 group-hover:text-white sm:text-[13px]">{item.text}</p>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-school-gold/15 bg-school-gold/[0.05] text-school-gold/70 transition-all duration-300 group-hover:border-school-gold/50 group-hover:bg-school-gold/10 group-hover:text-school-gold" aria-hidden="true"><Zap className="h-3 w-3" /></span>
            </article> })}</div></div>
        <div className="relative z-20 hidden w-[150px] shrink-0 items-center justify-end gap-2 border-l border-white/10 bg-gradient-to-bl from-[#10284b] to-[#0c1d3d] px-4 lg:flex"><div className="mr-auto hidden flex-col gap-1 xl:flex"><div className="flex items-center gap-1.5"><Activity className="h-3 w-3 text-school-gold" /><span className="text-[8px] font-bold uppercase tracking-[0.16em] text-white/50">Transmission</span></div><span className="font-mono text-[8px] tracking-[0.12em] text-white/25">TAPE CONTROL</span></div><button type="button" onClick={() => setPaused((value) => !value)} className="group flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/65 transition-all duration-300 hover:border-school-gold/50 hover:bg-school-gold hover:text-school-navy" aria-label={paused ? "Resume live updates" : "Pause live updates"}>{paused ? <Play className="h-3.5 w-3.5 fill-current" /> : <Pause className="h-3.5 w-3.5 fill-current" />}</button></div>
      </div>
      <div className="flex items-center justify-between border-t border-white/10 bg-[#0c1d3d] px-4 py-2.5 lg:hidden"><div className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.18em] text-white/40"><Sparkles className="h-3 w-3 text-school-gold" />Schoolwire · Campus updates</div><button type="button" onClick={() => setPaused((value) => !value)} className="flex items-center gap-1.5 rounded-full border border-white/10 px-3 py-1.5 text-[8px] font-bold uppercase tracking-[0.15em] text-white/60 transition-colors hover:border-school-gold/40 hover:text-school-gold" aria-label={paused ? "Resume live updates" : "Pause live updates"}>{paused ? <Play className="h-3 w-3 fill-current" /> : <Pause className="h-3 w-3 fill-current" />}{paused ? "Resume" : "Pause"}</button></div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-school-gold/40 to-transparent" />
    </section>
  )
}
