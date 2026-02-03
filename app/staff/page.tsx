"use client"

import { motion } from "framer-motion"
import { Construction, Users, HardHat } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <PageHeader
        title="Our Staff"
        description="Meet the dedicated team shaping future innovators"
      />

      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-dashed border-school-blue/30 bg-white shadow-2xl">
              <CardContent className="p-12 md:p-16">
                <div className="text-center space-y-8">
                  {/* Animated construction icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      type: "spring",
                      stiffness: 200,
                      damping: 15
                    }}
                    className="mx-auto w-32 h-32 bg-gradient-to-br from-school-gold via-yellow-400 to-school-gold rounded-full flex items-center justify-center shadow-2xl"
                  >
                    <HardHat className="w-16 h-16 text-white" />
                  </motion.div>

                  {/* Staff icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-center"
                  >
                    <div className="p-4 bg-school-navy/10 rounded-full">
                      <Users className="w-12 h-12 text-school-navy" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-4"
                  >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                      <span className="bg-gradient-to-r from-school-navy via-school-blue to-school-gold bg-clip-text text-transparent">
                        Staff Directory
                      </span>
                    </h1>
                    
                    {/* Under Construction Badge */}
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full shadow-lg">
                      <Construction className="w-5 h-5 text-white animate-pulse" />
                      <span className="text-white font-bold text-lg">
                        UNDER CONSTRUCTION
                      </span>
                    </div>
                  </motion.div>

                  {/* Description */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-4"
                  >
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                      We're working hard to bring you detailed information about our exceptional teaching staff and administrative team.
                    </p>
                    <p className="text-lg text-gray-500">
                      Check back soon to meet the dedicated professionals who inspire and guide our students every day.
                    </p>
                  </motion.div>

                  {/* Divider */}
                  <div className="py-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
                  </div>

                  {/* Carter Digitals Credit */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      <Construction className="w-5 h-5" />
                      <span className="text-sm">Website under development</span>
                    </div>
                    <div className="text-lg">
                      <span className="text-gray-600">Designed and built by</span>
                      {" "}
                      <span className="font-bold bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
                        Carter Digitals
                      </span>
                    </div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
