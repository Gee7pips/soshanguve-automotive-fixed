"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AchievementShowcase() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="container" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-school-navy mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-600">Celebrating achievements that inspire future generations</p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2 items-center mb-20">
          <motion.div
            style={{ y, opacity }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027617384.jpg-Afwpef3h5ZznZqt2nf4gYtTOHU07Jb.jpeg"
              alt="Students and staff celebrating achievements"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white"
              >
                <h3 className="text-2xl font-bold mb-2">Excellence Recognized</h3>
                <p className="text-gray-200">Our students receiving prestigious awards for their innovations</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10" />
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027666157.jpg-zPdkru2XRDnh55hFFgVEFOmv8rDxY0.jpeg"
              alt="SAGE certificates and awards"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-white"
              >
                <h3 className="text-2xl font-bold mb-2">SAGE Recognition</h3>
                <p className="text-gray-200">National awards celebrating our commitment to excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid gap-8 md:grid-cols-3"
        >
          <Card className="bg-gradient-to-br from-school-navy to-school-blue text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">National Recognition</h3>
              <p>Multiple awards for innovation and technical excellence</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-school-blue to-school-gold text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Student Success</h3>
              <p>Celebrating our students' achievements and growth</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-school-gold to-school-navy text-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Innovation Leaders</h3>
              <p>Setting new standards in technical education</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
