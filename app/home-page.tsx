"use client"

import { Hero } from "@/components/hero"
import { WelcomeSection } from "@/components/welcome-section"
import { CampusLife } from "@/components/campus-life"
import { AchievementsSection } from "@/components/achievements-section"
import { InnovationSection } from "@/components/innovation-section"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { VideoSection } from "@/components/video-section"

const stats = [
  { label: "Matric Pass Rate", value: "99.3%", description: "2024 Results" },
  { label: "Student Capacity", value: "700+", description: "Annual Enrollment" },
  { label: "Specialized Programs", value: "9", description: "Technical Fields" },
  { label: "Years of Excellence", value: "5+", description: "Since Establishment" },
]

export default function HomePageClient() {
  return (
    <div className="bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <Hero />
      <WelcomeSection />
      <InnovationSection />
      <CampusLife />
      <section className="py-20">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
                A Beacon of Excellence in Automotive Education
              </h2>
              <p className="text-gray-600 md:text-lg">
                With a rich history spanning decades in the Tshwane area, our institution underwent a transformative
                evolution in 2019 when it became Soshanguve Automotive School of Specialisation. This strategic
                transformation, as part of the Gauteng Department of Education's initiative, positioned us as one of 39
                specialisation schools in the province.
              </p>
              <p className="text-gray-600 md:text-lg">
                Under the visionary leadership of Principal Mr. TA Mashiane, we've quickly established ourselves as a
                cornerstone of technical education in the Tshwane West district. Our non-fee-paying model ensures that
                quality education remains accessible to all 700 learners from Soshanguve township and surrounding areas,
                while our commitment to excellence has led to outstanding achievements, including a remarkable 99.3%
                matric pass rate in 2024.
              </p>
              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full hover:bg-school-navy hover:text-white transition-all duration-300 hover:scale-105"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div key={index}>
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-4xl font-bold bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
                        {stat.value}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="font-medium">{stat.label}</p>
                      <p className="text-sm text-gray-600">{stat.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <AchievementsSection />
      <VideoSection />
    </div>
  )
}

