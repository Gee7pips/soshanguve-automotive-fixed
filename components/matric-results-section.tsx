"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Construction, Calendar, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MatricResultsSection() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%231E3A8A' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}/>
      </div>

      <div className="container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-2 border-dashed border-school-blue/30 bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 md:p-12">
              <div className="text-center space-y-6">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mx-auto w-20 h-20 bg-gradient-to-br from-school-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Award className="w-10 h-10 text-white" />
                </motion.div>

                {/* Year Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-school-navy/10 rounded-full"
                >
                  <Calendar className="w-4 h-4 text-school-navy" />
                  <span className="text-sm font-semibold text-school-navy">2025</span>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold"
                >
                  <span className="bg-gradient-to-r from-school-navy via-school-blue to-school-gold bg-clip-text text-transparent">
                    Matric Results 2025
                  </span>
                </motion.h2>

                {/* Coming Soon Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="inline-block"
                >
                  <div className="px-6 py-3 bg-gradient-to-r from-school-gold to-yellow-400 rounded-full shadow-lg">
                    <span className="text-white font-bold text-lg tracking-wide">
                      COMING SOON
                    </span>
                  </div>
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-gray-600 text-lg max-w-2xl mx-auto"
                >
                  Our 2025 matric results will be published here soon. Stay tuned for another year of outstanding achievements!
                </motion.p>

                {/* Construction Notice */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="pt-6 border-t border-gray-200"
                >
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                    <Construction className="w-4 h-4" />
                    <span>Under construction by</span>
                    <span className="font-semibold text-school-navy">Carter Digitals</span>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
