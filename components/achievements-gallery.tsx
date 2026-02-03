"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const achievements = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-44-07-22_f541918c7893c52dbd1ee5d319333948.jpg-UycgphdSNW1pbbmTJsQmWJwa32X7sB.jpeg",
    title: "Award-Winning Innovations",
    description:
      "From Global Clean Tech awards to robotics championships, our students continue to excel on national and international stages.",
  },
]

export function AchievementsGallery() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">Our Achievements</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in innovation, research, and technical education
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-full"
          >
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-44-07-22_f541918c7893c52dbd1ee5d319333948.jpg-UycgphdSNW1pbbmTJsQmWJwa32X7sB.jpeg"
                  alt="School achievements collage"
                  className="w-full h-[400px] object-cover"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
