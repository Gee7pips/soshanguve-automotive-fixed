import { Card, CardContent } from "@/components/ui/card"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"

interface StatCardProps {
  value: string
  label: string
  description: string
}

export function StatCard({ value, label, description }: StatCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 20,
    config: { duration: 500 },
  })

  return (
    <animated.div ref={ref} style={props}>
      <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-6 text-center">
          <p className="text-4xl font-bold text-school-navy mb-2">{value}</p>
          <p className="text-xl font-semibold text-school-blue mb-1">{label}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </animated.div>
  )
}

