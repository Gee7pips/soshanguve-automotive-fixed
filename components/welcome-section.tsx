"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SEOImage } from "@/components/seo-image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ErrorBoundary } from "react-error-boundary"
import { useInView } from "react-intersection-observer"

gsap.registerPlugin(ScrollTrigger)

export function WelcomeSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const carImageRef = useRef<HTMLDivElement>(null)
  const donateButtonRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (carImageRef.current && donateButtonRef.current) {
        gsap.from(carImageRef.current, {
          duration: 1,
          x: "50%",
          opacity: 0,
          scale: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: carImageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(donateButtonRef.current, {
          duration: 0.8,
          y: 30,
          opacity: 0,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: donateButtonRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <section ref={containerRef} className="py-20 bg-gradient-to-b from-gray-50 to-white relative z-0">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex-1 space-y-6"
              style={{ y, opacity }}
            >
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
                Investing in{" "}
                <span className="bg-gradient-to-r from-school-blue to-school-navy bg-clip-text text-transparent">
                  Tomorrow&apos;s Innovators
                </span>
              </h2>
              <p className="text-xl text-gray-600">Nurturing Dreams, Empowering Futures, One Student at a Time</p>
              <p className="text-gray-600">
                Our students don&apos;t just learn engineering - they build the future. From electric vehicles to
                sustainable energy solutions, we&apos;re cultivating the next generation of technical innovators and
                entrepreneurs.
              </p>
              <div className="flex gap-4">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-school-navy hover:bg-school-blue transition-colors duration-300 
                             text-white rounded-full shadow-lg hover:shadow-xl"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-2 border-school-navy text-school-navy 
                             hover:bg-school-navy hover:text-white transition-colors duration-300
                             shadow-lg hover:shadow-xl"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex-1 flex flex-col justify-center items-center"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
            >
              <div
                ref={carImageRef}
                className="relative rounded-xl overflow-hidden 
                           shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
                           hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]
                           transition-shadow duration-300"
              >
                <SEOImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250203-WA0010.jpg-8fDZJnnxBBSs11CDSSdQi7ZzVqoby6.jpeg"
                  alt="Students showcasing their innovative electric car project"
                  width={600}
                  height={400}
                  className="w-full object-cover transform transition-transform duration-700 hover:scale-110"
                  loading="eager"
                  priority
                />
              </div>
              <div className="text-center space-y-4 mt-6">
                <p className="text-lg text-gray-700 font-semibold">
                  Your support fuels the dreams of tomorrow&apos;s innovators.
                </p>
                <motion.div ref={donateButtonRef} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-school-gold to-yellow-500 
                             hover:from-yellow-500 hover:to-school-gold 
                             text-school-navy font-bold rounded-full
                             shadow-lg hover:shadow-xl
                             transition-all duration-300 transform hover:scale-105"
                  >
                    <Link href="/support-us">Support Us</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}
