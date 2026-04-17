"use client"

import { Hero } from "@/components/hero"
import { MatricResultsSection } from "@/components/matric-results-section"
import { WelcomeSection } from "@/components/welcome-section"
import { PrincipalWelcome } from "@/components/principal-welcome"
import { CampusLife } from "@/components/campus-life"
import { AchievementsSection } from "@/components/achievements-section"
import { NewsAndUpdates2026 } from "@/components/news-and-updates-2026"
import { InnovationSection } from "@/components/innovation-section"
import { SubjectOfferings } from "@/components/subject-offerings"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VideoSection } from "@/components/video-section"
import { motion } from "framer-motion"

const stats = [
  { label: "Matric Pass Rate", value: "100%", description: "2025 Results" },
  { label: "Student Capacity", value: "700+", description: "Annual Enrollment" },
  { label: "Specialized Programs", value: "9", description: "Technical Fields" },
  { label: "Years of Excellence", value: "5+", description: "Since Establishment" },
]

export default function HomePageClient() {
  return (
    <div className="bg-white">
      <Hero />
      <MatricResultsSection />
      <WelcomeSection />
      <PrincipalWelcome />
      <InnovationSection />
      <SubjectOfferings />
      <CampusLife />

      {/* About / Stats Section */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">

            {/* Left: Editorial text block */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-school-gold" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-school-navy leading-tight text-balance">
                Where Township Ambition Meets World-Class Engineering
              </h2>

              <div className="w-12 h-0.5 bg-school-gold" />

              <p className="text-gray-600 leading-relaxed text-lg">
                Born from a decades-long legacy in Tshwane, Soshanguve Automotive SoS was formally designated as one
                of Gauteng&apos;s 39 specialisation schools in 2019 — a mandate to produce the technical talent that
                South Africa&apos;s economy demands.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under the visionary stewardship of Principal Mr. TA Mashiane, we have built an institution where
                excellence is non-negotiable and opportunity knows no postal code. Our non-fee-paying model opens
                world-class technical education to over 700 learners from Soshanguve and surrounding communities —
                culminating in a historic 100% matric pass rate for the Class of 2025.
              </p>
              <div className="flex gap-4 pt-2">
                <Button
                  asChild
                  className="bg-school-navy hover:bg-school-blue text-white rounded-full px-7 shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Link href="/about">Learn More</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-7 border-school-navy/30 text-school-navy hover:bg-school-navy hover:text-white hover:border-school-navy transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: Stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  {/* Gold left accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-school-gold rounded-l-2xl" />

                  <p className="font-serif text-4xl font-bold text-school-navy leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{stat.label}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">{stat.description}</p>

                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-school-navy/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      <AchievementsSection />
      <NewsAndUpdates2026 />
      <VideoSection />
    </div>
  )
}
