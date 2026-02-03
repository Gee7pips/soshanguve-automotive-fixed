"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const features = [
  {
    title: "Award-Winning Innovation",
    description: "Our students consistently excel in national and international competitions",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739093388684.jpg-LZVsV7QLZLLAdDFqCjrCvKGoCEZsjk.jpeg",
    alt: "Students receiving SAGE entrepreneurship awards with ceremonial checks",
  },
  {
    title: "Hands-on Experience",
    description: "Real-world training with industry-standard equipment and vehicles",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-09-11-30-31-91_a23b203fd3aafc6dcb84e438dda678b6.jpg-yt5q9iMB6WMqsswYXx2nfIzyVxfTrN.jpeg",
    alt: "Students with automotive project",
  },
  {
    title: "Cutting-Edge Technology",
    description: "Access to modern tools including VR/AR for enhanced learning",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739092938017.jpg-wXZYdCdK9Z49HGVIidqamZyRyAwmrS.jpeg",
    alt: "Student using VR technology",
  },
]

export function InnovationSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent mb-6">
            Empowering Tomorrow's Innovators
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At Soshanguve Engineering School, we're not just teaching – we're shaping the future of technology and
            innovation in South Africa.
          </p>
        </motion.div>

        <div className="grid gap-16 md:gap-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <motion.h3
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-school-navy"
                >
                  {feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600"
                >
                  {feature.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <Button
                    asChild
                    className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full"
                  >
                    <Link href="/learn-more">Learn More</Link>
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${index % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative aspect-[4/3]"
                  >
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="absolute inset-0 flex items-end p-6"
                  >
                    <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {feature.description}
                    </p>
                  </motion.div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-school-navy to-school-blue opacity-10 blur-2xl rounded-3xl -z-10" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
