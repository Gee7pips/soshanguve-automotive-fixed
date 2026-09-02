import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  value: string
  label: string
  description: string
}

export function StatCard({ value, label, description }: StatCardProps) {
  return (
    <ScrollAnimation>
      <Card className="bg-gradient-to-br from-white to-gray-50 shadow-lg transition-shadow duration-300 hover:shadow-xl">
        <CardContent className="p-6 text-center">
          <p className="mb-2 text-4xl font-bold text-school-navy">{value}</p>
          <p className="mb-1 text-xl font-semibold text-school-blue">{label}</p>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Card>
    </ScrollAnimation>
  )
}
