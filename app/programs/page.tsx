"use client"

import dynamic from "next/dynamic"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import {
  Wrench,
  Building2,
  Zap,
  Microscope,
  Calculator,
  Cog,
  Car,
  Hammer,
  TreePine,
  Building,
  Workflow,
  Cpu,
  Power,
  FlaskRoundIcon as Flask,
  Binary,
  PlusSquare,
} from "lucide-react"
import { motion } from "framer-motion"

const programs = {
  mechanical: {
    title: "Mechanical Technology",
    description: "Master the fundamentals of mechanical engineering and industrial technology",
    icon: Wrench,
    subjects: [
      {
        name: "Welding",
        icon: Hammer,
        description: "Learn advanced welding techniques, metallurgy, and fabrication processes",
        careers: ["Welding Specialist", "Metal Fabricator", "Quality Control Inspector"],
      },
      {
        name: "Automotive",
        icon: Car,
        description: "Study vehicle systems, diagnostics, and modern automotive technology",
        careers: ["Automotive Technician", "Vehicle Inspector", "Fleet Maintenance Manager"],
      },
      {
        name: "Fitting and Turning",
        icon: Cog,
        description: "Master precision engineering, machine operation, and component manufacturing",
        careers: ["Machine Operator", "Manufacturing Technician", "Maintenance Specialist"],
      },
    ],
  },
  civil: {
    title: "Civil Technology",
    description: "Develop skills in construction, design, and infrastructure development",
    icon: Building2,
    subjects: [
      {
        name: "Woodworking",
        icon: TreePine,
        description: "Learn woodworking techniques, joinery, and furniture making",
        careers: ["Cabinet Maker", "Furniture Designer", "Wood Products Manufacturer"],
      },
      {
        name: "Construction",
        icon: Building,
        description: "Study building methods, materials, and project management",
        careers: ["Construction Manager", "Building Inspector", "Site Supervisor"],
      },
      {
        name: "Services",
        icon: Workflow,
        description: "Focus on building services, systems, and maintenance",
        careers: ["Building Services Technician", "Facilities Manager", "Systems Coordinator"],
      },
    ],
  },
  electrical: {
    title: "Electrical Technology",
    description: "Explore power systems, electronics, and digital technology",
    icon: Zap,
    subjects: [
      {
        name: "Digital",
        icon: Cpu,
        description: "Study digital electronics, programming, and automation",
        careers: ["Electronics Technician", "PLC Programmer", "Automation Specialist"],
      },
      {
        name: "Power Systems",
        icon: Power,
        description: "Learn about electrical power generation, distribution, and control",
        careers: ["Power Systems Technician", "Electrical Controller", "Grid Operator"],
      },
    ],
  },
  sciences: {
    title: "Sciences",
    description: "Build a strong foundation in scientific principles and applications",
    icon: Microscope,
    subjects: [
      {
        name: "Physical Sciences",
        icon: Flask,
        description: "Study physics and chemistry with practical applications",
        careers: ["Laboratory Technician", "Quality Analyst", "Research Assistant"],
      },
      {
        name: "Technical Sciences",
        icon: Binary,
        description: "Focus on applied sciences in engineering contexts",
        careers: ["Technical Analyst", "Process Controller", "Engineering Assistant"],
      },
    ],
  },
  mathematics: {
    title: "Mathematics",
    description: "Develop strong analytical and problem-solving skills",
    icon: Calculator,
    subjects: [
      {
        name: "Pure Mathematics",
        icon: PlusSquare,
        description: "Master mathematical concepts and theoretical foundations",
        careers: ["Data Analyst", "Statistical Technician", "Mathematical Modeler"],
      },
      {
        name: "Technical Mathematics",
        icon: Calculator,
        description: "Apply mathematical principles to engineering problems",
        careers: ["Engineering Calculator", "Technical Designer", "CAD Specialist"],
      },
    ],
  },
}

const DynamicPageTransition = dynamic(
  () => import("@/components/ui/page-transition").then((mod) => mod.PageTransition),
  {
    ssr: false,
  },
)
const DynamicPageHeader = dynamic(() => import("@/components/ui/page-transition").then((mod) => mod.PageHeader), {
  ssr: false,
})

export default function ProgramsPage() {
  return (
    <DynamicPageTransition>
      <DynamicPageHeader
        title="Our Specialized Programs"
        subtitle="Comprehensive technical education pathways designed for future innovators"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Explore Our Programs</h2>
            <p className="text-gray-600">
              Our specialized programs are designed to provide you with industry-relevant skills and knowledge,
              preparing you for a successful career in engineering and technology.
            </p>
          </ScrollAnimation>

          <Tabs defaultValue="mechanical" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4 bg-transparent h-auto p-0 mb-8">
              {Object.entries(programs).map(([key, program]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  className="data-[state=active]:bg-school-navy data-[state=active]:text-white px-4 py-3 rounded-lg border border-gray-200 hover:border-school-navy transition-all duration-200"
                >
                  <program.icon className="w-5 h-5 mr-2" />
                  <span className="text-sm font-medium">{program.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(programs).map(([key, program]) => (
              <TabsContent key={key} value={key}>
                <div className="grid gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center text-2xl">
                        <program.icon className="w-8 h-8 mr-3 text-school-navy" />
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {program.subjects.map((subject, index) => (
                          <motion.div
                            key={subject.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className="h-full hover:shadow-lg transition-all duration-300">
                              <CardContent className="p-6">
                                <div className="flex items-center mb-4">
                                  <div className="p-2 rounded-lg bg-school-navy/10">
                                    <subject.icon className="w-6 h-6 text-school-navy" />
                                  </div>
                                  <h3 className="text-xl font-bold ml-3">{subject.name}</h3>
                                </div>
                                <p className="text-gray-600 mb-4">{subject.description}</p>
                                <div className="space-y-2">
                                  <h4 className="font-semibold text-school-navy">Career Opportunities:</h4>
                                  <ul className="list-disc list-inside text-gray-600">
                                    {subject.careers.map((career) => (
                                      <li key={career}>{career}</li>
                                    ))}
                                  </ul>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-school-navy text-white">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center max-w-[800px] mx-auto">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our Programs?</h2>
              <p className="text-xl text-gray-200 mb-12">
                Our comprehensive approach to technical education ensures you're well-prepared for the future
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Industry-Aligned</h3>
                    <p className="text-gray-200">Curriculum developed with industry partners</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Hands-on Learning</h3>
                    <p className="text-gray-200">Practical experience in modern facilities</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/10 backdrop-blur border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold mb-2">Career Ready</h3>
                    <p className="text-gray-200">Direct pathway to employment opportunities</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </DynamicPageTransition>
  )
}
