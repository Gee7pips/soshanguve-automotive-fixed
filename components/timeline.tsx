"use client"

import { ScrollAnimation } from "@/components/scroll-animation"

interface TimelineEvent {
  year: number
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-school-navy to-school-blue" />
      {events.map((event, index) => (
        <TimelineItem key={`${event.year}-${event.title}`} event={event} index={index} />
      ))}
    </div>
  )
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  return (
    <ScrollAnimation className={`mb-8 flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
      <div className={`relative w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
        <div className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-4 border-white bg-school-gold shadow-lg" style={{ [index % 2 === 0 ? "right" : "left"]: "-10px" }} />
        <h4 className="mb-2 text-xl font-bold">{event.year}</h4>
        <h5 className="mb-1 text-lg font-semibold">{event.title}</h5>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </ScrollAnimation>
  )
}
