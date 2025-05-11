import { Card, CardContent } from "@/components/ui/card"
import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
}

export function TeamMember({ name, role, image, description }: TeamMemberProps) {
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
      <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <CardContent className="p-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="w-full object-cover h-64"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-1">{name}</h3>
            <p className="text-school-blue font-semibold mb-2">{role}</p>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </CardContent>
      </Card>
    </animated.div>
  )
}

