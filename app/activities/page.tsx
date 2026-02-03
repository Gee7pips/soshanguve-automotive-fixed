"use client"

import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import {
  Award,
  Book,
  Globe,
  Users,
  Trophy,
  Brain,
  Footprints,
  CastleIcon as ChessKnight,
  TableIcon as TableTennis,
  Timer,
  Puzzle,
  Lightbulb,
  GraduationCap,
  Heart,
  Gamepad2,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

const enrichmentPrograms = [
  {
    title: "Eskom Expo for Young Scientists",
    description: "Annual competition showcasing innovative scientific projects",
    icon: Award,
    category: "Academic",
  },
  {
    title: "SASOL Techno X",
    description: "Project exhibitions highlighting technological advancements",
    icon: Globe,
    category: "Academic",
  },
  {
    title: "Columba Leadership Programme",
    description: "Developing leadership skills and personal growth",
    icon: Users,
    category: "Leadership",
  },
  {
    title: "Department of Water and Sanitation Competition",
    description: "Addressing water-related challenges through innovation",
    icon: Book,
    category: "Innovation",
  },
  {
    title: "Students for Advancement of Global Entrepreneurship",
    description: "Fostering entrepreneurial spirit and global thinking",
    icon: Globe,
    category: "Entrepreneurship",
  },
  {
    title: "Gibbs Spirit of Youth Programme",
    description: "Empowering youth through personal development initiatives",
    icon: Heart,
    category: "Personal Development",
  },
  {
    title: "Allan Grey Entrepreneurship Programme",
    description: "Nurturing future business leaders and innovators",
    icon: Lightbulb,
    category: "Entrepreneurship",
  },
  {
    title: "Boys Club",
    description:
      "Mentorship and personal development program focused on building strong character and leadership skills in young men",
    icon: Brain,
    category: "Personal Development",
  },
]

const activityImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-17-15-24-55-88_a23b203fd3aafc6dcb84e438dda678b6.jpg-3ay7h6fDjYVO4I04nLjvEf7ArSqk2y.jpeg",
    alt: "Students engaged in strategic thinking during a life-sized chess game",
    caption: "Developing strategic thinking through our chess program",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-13-21-42-21-27_a23b203fd3aafc6dcb84e438dda678b6.jpg-1We78wGJ1op9H0rIX0MIQ4Ac4DYLox.jpeg",
    alt: "Students participating in a technical workshop session",
    caption: "Hands-on learning in our technical workshops",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-13-21-39-49-97_a23b203fd3aafc6dcb84e438dda678b6.jpg-gzjDynOOI10zMYiXnz8SiyfB6iVclp.jpeg",
    alt: "Students practicing athletics on the school track",
    caption: "Excellence in athletics on our professional track",
  },
]

const sports = [
  {
    title: "Soccer",
    description:
      "Ignite your passion for the beautiful game. Our soccer program builds teamwork, strategy, and athletic prowess on and off the field.",
    icon: Footprints,
  },
  {
    title: "Netball",
    description:
      "Experience the thrill of fast-paced action. Netball at our school fosters agility, precision, and unbreakable team spirit.",
    icon: Trophy,
  },
  {
    title: "Chess",
    description:
      "Master the game of kings. Our chess program sharpens minds, cultivates patience, and develops strategic thinking for life's challenges.",
    icon: ChessKnight,
    image: {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-17-15-24-55-88_a23b203fd3aafc6dcb84e438dda678b6.jpg-3ay7h6fDjYVO4I04nLjvEf7ArSqk2y.jpeg",
      alt: "Students engaged in strategic thinking during a life-sized chess game",
    },
  },
  {
    title: "Table Tennis",
    description:
      "Discover lightning-fast reflexes and pinpoint accuracy. Table tennis here is more than a game—it's a test of focus and adaptability.",
    icon: TableTennis,
  },
  {
    title: "Athletics",
    description:
      "Push your limits and reach for the stars. Our athletics program is where personal bests are shattered and champions are forged.",
    icon: Timer,
  },
]

export default function ActivitiesPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Student Life & Activities"
        subtitle="Enriching our learners' educational journey through diverse extracurricular activities"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Enrichment Programs</h2>
            <p className="text-gray-600">
              We offer a variety of programs that enhance our learners' educational experience and personal growth
            </p>
          </ScrollAnimation>

          {/* Add Technical Workshop Image */}
          <ScrollAnimation className="mb-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-13-21-42-21-27_a23b203fd3aafc6dcb84e438dda678b6.jpg-1We78wGJ1op9H0rIX0MIQ4Ac4DYLox.jpeg"
                alt="Students participating in a technical workshop session"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-medium">Hands-on learning in our technical workshops</p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {enrichmentPrograms.map((program) => (
              <ScrollAnimation key={program.title}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-full bg-school-navy/10 group-hover:bg-school-navy/20 transition-colors">
                        <program.icon className="w-6 h-6 text-school-navy" />
                      </div>
                      <span className="ml-3 text-xs font-medium text-school-blue uppercase tracking-wider">
                        {program.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-xl mb-2 group-hover:text-school-navy transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600">{program.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-school-navy text-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Sports & Athletics</h2>
            <p className="text-xl text-gray-200">
              Unleash your potential through the power of sports and physical excellence
            </p>
          </ScrollAnimation>

          {/* Add Athletics Image */}
          <ScrollAnimation className="mb-12">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-13-21-39-49-97_a23b203fd3aafc6dcb84e438dda678b6.jpg-gzjDynOOI10zMYiXnz8SiyfB6iVclp.jpeg"
                alt="Students practicing athletics on the school track"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-lg font-medium">Excellence in athletics on our professional track</p>
              </div>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sports.map((sport, index) => (
              <ScrollAnimation key={sport.title}>
                <Card className="bg-white/10 backdrop-blur border-0 hover:bg-white/20 transition-all duration-300 overflow-hidden group">
                  {sport.image && (
                    <div className="relative h-48 w-full">
                      <Image
                        src={sport.image.src || "/placeholder.svg"}
                        alt={sport.image.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                    </div>
                  )}
                  <CardHeader className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-school-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative z-10 flex items-center space-x-4">
                      <div className="p-3 rounded-full bg-school-gold/20 group-hover:bg-school-gold/30 transition-colors">
                        <sport.icon className="w-6 h-6 text-school-gold" />
                      </div>
                      <CardTitle className="text-xl group-hover:text-school-gold transition-colors">
                        {sport.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-200 group-hover:text-white transition-colors">{sport.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Get Involved</h2>
            <p className="text-gray-600">Join our vibrant community and make the most of your educational journey</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full"
              >
                <Link href="/apply">Join Our Programs</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-school-navy text-school-navy hover:bg-school-navy hover:text-white"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 rounded-full bg-school-navy/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-school-navy" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Academic Excellence</h3>
                  <p className="text-gray-600">Enhance your learning through our enrichment programs</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 rounded-full bg-school-navy/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Gamepad2 className="w-8 h-8 text-school-navy" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Sports Development</h3>
                  <p className="text-gray-600">Build physical excellence and team spirit</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="p-4 rounded-full bg-school-navy/10 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Puzzle className="w-8 h-8 text-school-navy" />
                  </div>
                  <h3 className="font-bold text-xl mb-2">Personal Growth</h3>
                  <p className="text-gray-600">Develop leadership and life skills</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
