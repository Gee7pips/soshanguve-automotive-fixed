"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { WavyBackground } from "@/components/ui/wavy-background"
import { ErrorBoundary } from "react-error-boundary"
import { useInView } from "react-intersection-observer"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { ChevronDown } from "lucide-react"

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
          className="py-32 md:py-52"
          containerClassName="relative"
          colors={["#4A90B9", "#1E3A8A", "#D4AF37"]}
          backgroundFill="#1E3A8A"
          waveOpacity={0.25}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ scale }}
            className="container relative"
          >
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">

              {/* Crest logo with gold ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative"
              >
                <div className="absolute inset-0 rounded-full bg-school-gold/20 blur-2xl scale-110" />
                <div className="relative h-36 w-36 md:h-44 md:w-44 rounded-full border-2 border-school-gold/40 bg-white/10 backdrop-blur-sm p-3 flex items-center justify-center shadow-2xl">
                  <Image
                    src="/images/soshanguve-logo.jpg"
                    alt="Soshanguve Automotive S.O.S School Crest"
                    width={160}
                    height={160}
                    className="object-contain drop-shadow-lg rounded-full"
                    priority
                  />
                </div>
              </motion.div>

              {/* Eyebrow label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-school-gold/60" />
                <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-school-gold">
                  School of Specialisation &middot; Established 2019
                </span>
                <span className="h-px w-10 bg-school-gold/60" />
              </motion.div>

              {/* Main heading in Playfair Display */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.45 }}
                className="font-serif font-bold tracking-tight text-white text-balance"
              >
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-school-gold leading-tight">
                  Soshanguve Automotive
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white/90 mt-2 font-medium leading-tight">
                  School of Specialisation
                </span>
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mx-auto max-w-[620px] text-white/70 md:text-xl leading-relaxed text-pretty font-sans"
              >
                Gauteng&apos;s premier technical school — producing world-class engineers, innovators, and entrepreneurs from the heart of Soshanguve since 2019.
              </motion.p>

              {/* CTA buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.75 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-school-gold hover:bg-yellow-400 text-school-navy font-bold rounded-full px-8 shadow-lg shadow-school-gold/20 transition-all duration-300 hover:scale-105"
                >
                  <Link href="/support-us">Support Our Vision</Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/40 hover:border-white rounded-full px-8 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <Link href="/programs">Explore Programs</Link>
                </Button>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
                className="pt-6"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="flex flex-col items-center gap-1 text-white/30"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </motion.div>

            </div>
          </motion.div>
        </WavyBackground>
      </motion.div>
    </ErrorBoundary>
  )
}
