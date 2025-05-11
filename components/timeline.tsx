import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

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
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-school-navy to-school-blue" />
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} index={index} />
      ))}
    </div>
  )
}

function TimelineItem({ event, index }: { event: TimelineEvent; index: number }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    x: inView ? 0 : index % 2 === 0 ? -50 : 50,
    config: { duration: 500 },
  })

  return (
    <animated.div
      ref={ref}
      style={props}
      className={`flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
    >
      <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"} relative`}>
        <div
          className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-school-gold border-4 border-white shadow-lg"
          style={{ [index % 2 === 0 ? "right" : "left"]: "-10px" }}
        />
        <h4 className="text-xl font-bold mb-2">{event.year}</h4>
        <h5 className="text-lg font-semibold mb-1">{event.title}</h5>
        <p className="text-gray-600">{event.description}</p>
      </div>
    </animated.div>
  )
}

