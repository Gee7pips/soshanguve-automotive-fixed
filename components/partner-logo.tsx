"use client"

import { useSpring, animated } from "react-spring"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PartnerLogoProps {
  src: string
  alt: string
  width: number
  height: number
}

export function PartnerLogo({ src, alt, width, height }: PartnerLogoProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const props = useSpring({
    opacity: inView ? 1 : 0,
    scale: inView ? 1 : 0.9,
    config: { duration: 500 },
  })

  return (
    <animated.div ref={ref} style={props}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
        <CardContent className="p-6 flex items-center justify-center">
          <div className="relative w-full aspect-square">
            <Image
              src={src || "/placeholder.svg"}
              alt={alt}
              width={width}
              height={height}
              className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </CardContent>
      </Card>
    </animated.div>
  )
}

