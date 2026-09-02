import { ScrollAnimation } from "@/components/scroll-animation"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface PartnerLogoProps {
  src: string
  alt: string
  width: number
  height: number
}

export function PartnerLogo({ src, alt, width, height }: PartnerLogoProps) {
  return (
    <ScrollAnimation>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
        <CardContent className="flex items-center justify-center p-6">
          <div className="relative aspect-square w-full">
            <Image src={src || "/placeholder.svg"} alt={alt} width={width} height={height} className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105" />
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
