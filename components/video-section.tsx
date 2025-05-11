"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, ExternalLink, Award, Newspaper, PlayCircle } from "lucide-react"
import Link from "next/link"

export function VideoSection() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { scrollYProgress } = useScroll()

  // Parallax effect values
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.8])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const handleIframeError = () => {
    setError("Failed to load video. Please try again later.")
    setIsLoading(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] -z-10" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-6 mb-16"
        >
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-school-navy/5 text-school-navy font-semibold text-sm mb-4">
              Featured in National Media
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
            Excellence Recognized
          </h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Our commitment to innovation and excellence has captured national attention. From groundbreaking student
            projects to prestigious awards, discover how we're making headlines and inspiring the next generation of
            engineers.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <motion.div
              className="flex items-center gap-2 text-school-navy"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <PlayCircle className="w-5 h-5" />
              <span>SABC News Coverage</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-school-navy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Newspaper className="w-5 h-5" />
              <span>The Citizen Feature</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 text-school-navy"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Award className="w-5 h-5" />
              <span>Global Recognition</span>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="grid md:grid-cols-2 gap-8" style={{ y, opacity }}>
          {/* Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="transform transition-all duration-300"
          >
            <Card className="overflow-hidden shadow-2xl relative h-full border-2 border-transparent hover:border-school-navy/10">
              <CardHeader className="bg-gradient-to-r from-school-navy/5 to-school-blue/5">
                <CardTitle className="text-xl text-school-navy flex items-center gap-2">
                  <PlayCircle className="w-6 h-6" />
                  Featured on SABC News
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <Loader2 className="w-8 h-8 animate-spin text-school-navy" />
                    </div>
                  )}
                  {error ? (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <p className="text-red-500">{error}</p>
                    </div>
                  ) : (
                    <iframe
                      src="https://www.youtube.com/embed/OvGcpgxQCEU"
                      title="Soshanguve Engineering School of Specialisation"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                      onError={handleIframeError}
                      onLoad={() => setIsLoading(false)}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* News Article Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid gap-8"
          >
            {/* First News Article */}
            <Card className="overflow-hidden shadow-2xl h-full border-2 border-transparent hover:border-school-navy/10">
              <CardHeader className="bg-gradient-to-r from-school-navy/5 to-school-blue/5">
                <CardTitle className="text-xl text-school-navy flex items-center gap-2">
                  <Newspaper className="w-6 h-6" />
                  Featured in The Citizen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.h3
                  className="text-2xl font-bold text-school-navy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Soshanguve SOS principal receives special award
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <p className="text-gray-600">
                    The principal of Soshanguve Engineering School of Specialisation, Thabo Mashiane, received a special
                    award at the Global Clean Tech conference in Abu Dhabi for his school's clean energy initiatives.
                  </p>
                  <p className="text-gray-600">
                    The school has been recognized for its innovative projects, including an electric car and a
                    solar-powered train built by students. These projects demonstrate the school's commitment to
                    sustainable technology and practical education.
                  </p>
                </motion.div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="text-sm text-gray-500">Published: January 24, 2023</div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-school-navy hover:text-white transition-colors duration-300"
                  >
                    <Link
                      href="https://www.citizen.co.za/rekord/news-headlines/2023/01/24/soshanguve-sos-principal-receives-special-award/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* New Article About Solar Train */}
            <Card className="overflow-hidden shadow-2xl h-full border-2 border-transparent hover:border-school-navy/10">
              <CardHeader className="bg-gradient-to-r from-school-navy/5 to-school-blue/5">
                <CardTitle className="text-xl text-school-navy flex items-center gap-2">
                  <Newspaper className="w-6 h-6" />
                  Featured in The Citizen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.h3
                  className="text-2xl font-bold text-school-navy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Premier Makhura impressed by solar train school
                </motion.h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <p className="text-gray-600">
                    Gauteng Premier David Makhura was left impressed after visiting Soshanguve Engineering School of
                    Specialisation where learners built a solar-powered train that can reach speeds of up to 30km/h.
                  </p>
                  <p className="text-gray-600">
                    The school's principal, Thabo Mashiane, said the train was built by grade 11 learners as part of
                    their practical assessment task. "The train is powered by solar panels mounted on its roof and can
                    carry up to four people," said Mashiane.
                  </p>
                </motion.div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                  <div className="text-sm text-gray-500">Published: September 26, 2022</div>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="hover:bg-school-navy hover:text-white transition-colors duration-300"
                  >
                    <Link
                      href="https://www.citizen.co.za/rekord/news-headlines/local-news/2022/09/26/premier-makhura-impressed-by-solar-train-school/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      Read Full Article
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Bottom Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-school-navy/80 italic">
            "Inspiring the next generation through innovation and excellence in education"
          </p>
        </motion.div>
      </div>
    </section>
  )
}

