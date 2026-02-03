import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building, Globe, Briefcase, GraduationCap, Lightbulb, Users } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"
import { PartnerLogo } from "@/components/partner-logo"

const partnerships = [
  {
    name: "BMW",
    description:
      "A strategic partnership focused on automotive excellence and entrepreneurship education. BMW provides our students with industry-standard training, mentorship opportunities, and exposure to cutting-edge automotive technology. This collaboration helps bridge the gap between academic learning and industry requirements.",
    icon: Building,
    benefits: [
      "Access to BMW's advanced automotive technology",
      "Industry-standard training programs",
      "Entrepreneurship workshops and mentoring",
      "Career pathway opportunities",
    ],
  },
  {
    name: "Chinese Embassy",
    description:
      "Our partnership with the Chinese Embassy facilitates valuable cultural and technological exchange programs. This international collaboration opens doors for our students to experience global perspectives in engineering and innovation, while fostering cross-cultural understanding and knowledge sharing.",
    icon: Globe,
    benefits: [
      "International exchange programs",
      "Cultural immersion opportunities",
      "Access to Chinese technological expertise",
      "Global networking possibilities",
    ],
  },
  {
    name: "MerSETA",
    description:
      "A transformative partnership that has enabled us to train 21 qualified artisans since 2017. MerSETA's support has been instrumental in developing practical skills and ensuring our graduates are workplace-ready. This collaboration continues to strengthen our technical training capabilities.",
    icon: Briefcase,
    benefits: [
      "Accredited artisan training programs",
      "Industry-recognized certifications",
      "Workplace experience opportunities",
      "Skills development funding",
    ],
  },
]

const impactMetrics = [
  { number: "21+", label: "Qualified Artisans", icon: GraduationCap },
  { number: "3", label: "Major Industry Partners", icon: Building },
  { number: "100+", label: "Student Internships", icon: Users },
  { number: "15+", label: "Innovation Projects", icon: Lightbulb },
]

export default function PartnershipsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Strategic Partnerships"
        subtitle="Collaborating with industry leaders to provide world-class opportunities for our students"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Key Partners</h2>
            <p className="text-gray-600">
              We're proud to work with leading organizations who share our vision of transforming engineering education
              in Africa
            </p>
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            <PartnerLogo
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f291de07e4734cb6dbcab9ab7ff85ccf.jpg-n0uisI7CtgbZnAPiajnIhUIsMIdHX7.jpeg"
              alt="BMW Logo"
              width={300}
              height={300}
            />
            <PartnerLogo
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avdiceufm-yLtJiCcxYgCtPFP7yyyQrvsixjPASk.webp"
              alt="Chinese Embassy Logo"
              width={300}
              height={300}
            />
            <PartnerLogo
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo2%20(1)-wJzejoGe0jSM0cByTktKKjPukdTepj.png"
              alt="MerSETA Logo"
              width={300}
              height={300}
            />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {partnerships.map((partner) => (
              <ScrollAnimation key={partner.name}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col h-full">
                    <partner.icon className="w-12 h-12 text-school-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                    <p className="text-gray-600 mb-4">{partner.description}</p>
                    <h4 className="font-semibold mb-2">Key Benefits:</h4>
                    <ul className="text-gray-600 space-y-2 mt-auto">
                      {partner.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Partnership Impact</h2>
            <p className="text-gray-600">
              Our strategic partnerships have created meaningful opportunities and driven significant results
            </p>
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, index) => (
              <ScrollAnimation key={index}>
                <Card className="text-center hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <metric.icon className="w-12 h-12 mx-auto mb-4 text-school-navy" />
                    <h3 className="text-3xl font-bold text-school-navy mb-2">{metric.number}</h3>
                    <p className="text-gray-600">{metric.label}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Become a Partner</h2>
                <p className="text-gray-600">
                  Join us in our mission to transform engineering education in Africa. Your partnership can help create
                  opportunities for talented students and contribute to technological advancement across the continent.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Access to top engineering talent</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Influence curriculum development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Contribute to community development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      className="w-6 h-6 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Drive innovation in engineering education</span>
                  </li>
                </ul>
                <div className="flex gap-4">
                  <Button asChild className="bg-school-navy hover:bg-school-navy/90 text-white rounded-full">
                    <Link href="/contact">Become a Partner</Link>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full">
                    <Link href="/support-us">Support Our Vision</Link>
                  </Button>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-46-37-49_a23b203fd3aafc6dcb84e438dda678b6.jpg-fRW2zThgs2Wg2xkxgU7h6JxxYPmnuw.jpeg"
                    alt="Students working on engineering projects"
                    className="w-full h-[400px] object-cover"
                  />
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
