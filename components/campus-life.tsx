"use client"

import { motion } from "framer-motion"

export function CampusLife() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Inspiring Future Leaders</h2>
              <p className="text-gray-600">
                Our students are more than just learners - they are innovators, problem-solvers, and future industry
                leaders. In this image, you see the bright minds who are already making their mark through
                groundbreaking projects and innovative solutions. Their dedication to excellence and passion for
                engineering exemplifies our school's commitment to nurturing talent and fostering real-world innovation.
                These young visionaries are not just studying engineering; they're actively shaping South Africa's
                technological future.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-01-24-01-49-46-80_a23b203fd3aafc6dcb84e438dda678b6.jpg-kTIySJsIKV9HqvkXREj5t4azqHcYAa.jpeg"
              alt="Students showcasing their innovative projects"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-sm">
                Where passion meets innovation - our students leading the way in engineering excellence
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
