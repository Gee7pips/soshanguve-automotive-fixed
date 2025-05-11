"use client"

import { useEffect } from "react"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Users, GraduationCap, School, TrendingUp, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const stats = [
  {
    number: "99.3%",
    label: "2024 Pass Rate",
    description: "Consistently exceeding expectations",
    icon: GraduationCap,
  },
  {
    number: "700+",
    label: "Students",
    description: "From local communities",
    icon: Users,
  },
  {
    number: "2019",
    label: "Established",
    description: "Years of excellence",
    icon: School,
  },
  {
    number: "39",
    label: "Specialisation Schools",
    description: "Part of Gauteng network",
    icon: Award,
  },
]

const investmentPoints = [
  {
    title: "Academic Excellence",
    description: "Consistently achieving outstanding matric results with a 99.3% pass rate in 2024",
    icon: GraduationCap,
  },
  {
    title: "Industry Recognition",
    description: "Multiple awards including SADTU Gauteng Grade 12 Best Performance",
    icon: Award,
  },
  {
    title: "Growth Potential",
    description: "Expanding programs and increasing student capacity",
    icon: TrendingUp,
  },
  {
    title: "Strategic Vision",
    description: "Focused on developing future industry leaders and innovators",
    icon: Target,
  },
]

export default function AboutPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      <PageHeader
        title="About Our School"
        subtitle="Excellence in Engineering Education Since 2019"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-school-navy">Leadership & Excellence</h2>
                <p className="text-xl text-gray-600">
                  Under the visionary leadership of our principal, Soshanguve Engineering School has become a beacon of
                  technical education excellence in Gauteng.
                </p>
                <div className="relative rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027647652.jpg-3gkCLsb3efCQvPztqcyJtpYnjIsVXm.jpeg"
                    alt="Principal receiving SADTU Gauteng Grade 12 Best Performance Award"
                    width={600}
                    height={400}
                    className="w-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-500 italic">
                  Our principal receiving the prestigious SADTU Gauteng Grade 12 Best Performance Award
                </p>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="bg-white/80 backdrop-blur border-0 shadow-xl">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-2xl font-bold text-school-navy">Key Achievements</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-school-gold" />
                      <span>Best Performing School in Tshwane West District</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-school-gold" />
                      <span>National Batho Pele Excellence Award Winner</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Award className="w-5 h-5 text-school-gold" />
                      <span>Global Clean Tech Award Recognition</span>
                    </li>
                  </ul>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full shadow-lg"
                  >
                    <Link href="/achievements">View All Achievements</Link>
                  </Button>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-navy mb-4">Our Professional Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Led by experienced educators and industry professionals dedicated to nurturing the next generation of
                engineers
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250216-WA0001.jpg-3zo75nJELrPTiXjeBGD5O6bvDLKMWX.jpeg"
                alt="Our dedicated female staff members sharing a moment of joy"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Our remarkable female educators and staff members embody the spirit of unity and dedication that makes our
              school special. Their warmth, strength, and commitment to excellence create an inspiring environment where
              every student can thrive. Together, they form a powerful support system that nurtures both academic
              achievement and personal growth in our learners.
            </p>
          </ScrollAnimation>
          <ScrollAnimation>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-school-navy" />
                    <h3 className="text-3xl font-bold text-school-navy mb-2">{stat.number}</h3>
                    <p className="font-semibold text-school-blue mb-1">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 bg-school-navy text-white">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-4">Investment Opportunity</h2>
                <p className="text-xl text-gray-200">
                  Join us in shaping the future of technical education in South Africa. Your investment can help us
                  expand our impact and develop more skilled professionals.
                </p>
                <div className="grid gap-4">
                  {investmentPoints.map((point, index) => (
                    <Card key={index} className="bg-white/10 backdrop-blur border-0">
                      <CardContent className="p-4 flex items-center space-x-4">
                        <point.icon className="w-8 h-8 text-school-gold" />
                        <div>
                          <h3 className="font-bold">{point.title}</h3>
                          <p className="text-sm text-gray-200">{point.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-school-gold hover:bg-school-gold/90 text-school-navy rounded-full shadow-lg"
                  >
                    <Link href="/support-us">Become a Sponsor</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-school-navy rounded-full"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027620573.jpg-5i9QuxIXHXyMvx6t7JVrdH33Nd82W4.jpeg"
                  alt="Staff excellence awards ceremony"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-semibold">
                    Our staff receiving certificates of excellence for outstanding performance
                  </p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </main>
  )
}

