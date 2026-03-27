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
      <section ref={containerRef} className="py-24 lg:py-32 bg-gray-50/60 relative z-0">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">

            {/* Left: Text content */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="flex-1 space-y-6"
              style={{ y, opacity }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-school-gold" />
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">
                  Our Mission
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-school-navy leading-tight text-balance">
                Investing in{" "}
                <span className="text-school-blue">
                  Tomorrow&apos;s Innovators
                </span>
              </h2>

              <div className="w-12 h-0.5 bg-school-gold" />

              <p className="text-lg text-gray-500 font-medium">
                Nurturing Dreams, Empowering Futures, One Student at a Time
              </p>

              <p className="text-gray-600 leading-relaxed">
                Our students don&apos;t just learn engineering — they build the future. From electric vehicles to
                sustainable energy solutions, we&apos;re cultivating the next generation of technical innovators and
                entrepreneurs who will lead South Africa forward.
              </p>

              <div className="flex gap-4 pt-2">
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-school-navy hover:bg-school-blue transition-colors duration-300 text-white rounded-full px-7 shadow-md"
                  >
                    <Link href="/about">Learn More</Link>
                  </Button>
                </motion.div>
                <motion.div whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full px-7 border-school-navy/30 text-school-navy hover:bg-school-navy hover:text-white transition-colors duration-300 bg-transparent"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: Image and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex-1 flex flex-col justify-center items-center"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
            >
              <div
                ref={carImageRef}
                className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-shadow duration-300 w-full"
              >
                {/* Gold accent border on image */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-school-gold z-10" />
                <SEOImage
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250203-WA0010.jpg-8fDZJnnxBBSs11CDSSdQi7ZzVqoby6.jpeg"
                  alt="Students showcasing their innovative electric car project"
                  width={600}
                  height={400}
                  className="w-full object-cover transform transition-transform duration-700 hover:scale-105"
                  loading="eager"
                  priority
                />
              </div>

              <div className="text-center space-y-4 mt-8">
                <p className="text-base text-gray-700 font-semibold font-serif">
                  Your support fuels the dreams of tomorrow&apos;s innovators.
                </p>
                <motion.div ref={donateButtonRef} whileTap={{ scale: 0.95 }}>
                  <Button
                    asChild
                    className="bg-school-gold hover:bg-yellow-400 text-school-navy font-bold rounded-full px-8 shadow-lg shadow-school-gold/20 transition-all duration-300 hover:scale-105"
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
