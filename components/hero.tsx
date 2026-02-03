"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WavyBackground } from "@/components/ui/wavy-background"
import { SEOImage } from "@/components/seo-image"
import { ErrorBoundary } from "react-error-boundary"
import { useInView } from "react-intersection-observer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95])

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <motion.div ref={containerRef} style={{ opacity }} className="relative z-10">
        <WavyBackground
          className="py-32 md:py-48"
          containerClassName="relative"
          colors={["#4A90B9", "#1E3A8A", "#D4AF37"]}
          backgroundFill="#1E3A8A"
          waveOpacity={0.3}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ scale }}
            className="container relative"
          >
            <div className="text-center space-y-8">
              <div className="mx-auto w-32 h-32 mb-6 relative">
                <SEOImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-Q4QlrW7RXBYEXpxfLh8r0DSSuuhmjG.jpeg"
                  alt="Soshanguve Engineering School Logo"
                  width={128}
                  height={128}
                  className="object-contain rounded-full shadow-lg"
                  priority
                />
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white"
              >
                <span className="bg-gradient-to-r from-school-gold to-yellow-300 bg-clip-text text-transparent">
                  Soshanguve Automotive
                </span>
                <br />
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">School Of Specialisation</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl"
              >
                Empowering Future Innovators and Shaping Tomorrow&apos;s Leaders
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-school-gold to-yellow-300 hover:from-yellow-300 hover:to-school-gold text-school-navy font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Link href="/support-us">Support Our Vision</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </WavyBackground>
      </motion.div>
    </ErrorBoundary>
  )
}
