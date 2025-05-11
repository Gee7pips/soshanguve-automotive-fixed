"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Trophy, Star, Award, Zap, Train, Lightbulb } from "lucide-react"
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
    description: "Recognition for Princess Julius's innovative project",
  },
]

export function AchievementsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent mb-4">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in innovation, research, and technical education
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden group">
                <CardHeader className="bg-gradient-to-br from-school-navy to-school-blue p-4">
                  {achievement.icon && <achievement.icon className="w-8 h-8 text-white mb-2" />}
                  <CardTitle className="text-xl text-white">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-44-07-22_f541918c7893c52dbd1ee5d319333948.jpg-UycgphdSNW1pbbmTJsQmWJwa32X7sB.jpeg"
            alt="School achievements collage"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Inspiring Future Innovators</h3>
            <p className="text-lg mb-4">
              Our students consistently excel in national and international competitions, showcasing their innovative
              solutions to real-world problems.
            </p>
            <Button
              asChild
              className="bg-white text-school-navy hover:bg-school-gold hover:text-white transition-colors duration-300"
            >
              <Link href="/achievements">Explore Our Achievements</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

