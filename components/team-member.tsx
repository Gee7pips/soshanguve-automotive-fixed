import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  image: string
  description: string
}

export function TeamMember({ name, role, image, description }: TeamMemberProps) {
  return (
    <ScrollAnimation>
      <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <CardContent className="p-0">
          <Image src={image || "/placeholder.svg"} alt={name} width={300} height={300} className="h-64 w-full object-cover" />
          <div className="p-6">
            <h3 className="mb-1 text-xl font-bold">{name}</h3>
            <p className="mb-2 font-semibold text-school-blue">{role}</p>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
