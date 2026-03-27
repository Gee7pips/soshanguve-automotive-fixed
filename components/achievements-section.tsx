"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Star, Award, Zap, Train, Lightbulb, ArrowRight } from "lucide-react"
import Image from "next/image"

const achievements = [
  {
    icon: Zap,
    title: "Electric Car Project",
    description: "Student-designed and built electric car, showcased at the GDE SOS Festival",
  },
  {
    icon: Train,
    title: "Solar-Powered Train",
    description: "Innovative student-built locomotive reaching speeds of 30km/hour",
  },
  {
    icon: Trophy,
    title: "Global Clean Tech Award",
    description: "Recognition received for clean energy initiatives in Abu Dhabi",
  },
  {
    icon: Star,
    title: "SAGE South Africa Award",
    description: "National victory in 2022 showcasing student innovation",
  },
  {
    icon: Award,
    title: "Robotics Challenge",
    description: "Excellence demonstrated in national STEM competition",
  },
  {
    icon: Lightbulb,
    title: "Wits University Award",
    description: "Recognition for Princess Julius&apos;s innovative project",
  },
]

export function AchievementsSection() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/60 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-school-gold" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">
              Recognition &amp; Excellence
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-school-navy leading-tight text-balance">
              A Trophy Case Built by Learners
            </h2>
            <p className="text-gray-500 max-w-xs leading-relaxed sm:text-right">
              From national championships to international podiums — these milestones belong to every learner who ever stayed late in the workshop
            </p>
          </div>
          <div className="w-12 h-0.5 bg-school-gold mt-5" />
        </motion.div>

        {/* Achievement cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Gold top accent */}
              <div className="absolute top-0 left-6 right-6 h-px bg-school-gold/40 group-hover:bg-school-gold transition-colors duration-300" />

              <div className="flex items-start gap-4 mt-1">
                {/* Icon in gold-tinted box */}
                <div className="flex-shrink-0 h-11 w-11 rounded-xl bg-school-gold/10 border border-school-gold/20 flex items-center justify-center group-hover:bg-school-gold/20 transition-colors duration-300">
                  <achievement.icon className="h-5 w-5 text-school-gold" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-serif text-base font-bold text-school-navy leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hero image with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Gold top bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-school-gold z-10" />

          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-44-07-22_f541918c7893c52dbd1ee5d319333948.jpg-UycgphdSNW1pbbmTJsQmWJwa32X7sB.jpeg"
            alt="School achievements collage"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-school-navy/80 via-school-navy/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold mb-3">
              Inspiring the Next Generation
            </p>
            <h3 className="font-serif text-2xl lg:text-3xl font-bold text-white mb-3 text-balance">
              The Best is Still Ahead
            </h3>
            <p className="text-white/75 text-base mb-6 max-w-xl leading-relaxed">
              These achievements are not endpoints — they are proof of what is possible when ambition is met with
              proper resources, expert guidance, and an unshakeable belief in South Africa&apos;s youth.
            </p>
            <Button
              asChild
              className="group bg-white text-school-navy hover:bg-school-gold hover:text-white rounded-full px-7 transition-all duration-300 font-semibold"
            >
              <Link href="/achievements" className="flex items-center gap-2">
                Explore Our Achievements
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
