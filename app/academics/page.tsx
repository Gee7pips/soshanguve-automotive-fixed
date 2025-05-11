import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Book,
  Award,
  Users,
  Lightbulb,
  GraduationCap,
  Cog,
  Zap,
  Building2,
  Wrench,
  Car,
  CheckCircle2,
} from "lucide-react"
import { PageTransition } from "@/components/page-transition"

const programs = [
  {
    title: "Automotive Fitting & Tuning",
    icon: Car,
    description: "Master the intricacies of vehicle mechanics and modern automotive technologies.",
    subjects: [
      { name: "Advanced diagnostics training" },
      { name: "Engine performance optimization" },
      { name: "Hybrid and electric vehicle systems" },
    ],
    careers: ["Automotive Technician", "Vehicle Systems Specialist", "Fleet Maintenance Manager"],
    facilities: "State-of-the-art automotive workshop with modern diagnostic equipment",
    duration: "3 years",
    certification: "National Certificate: Automotive Engineering",
  },
  {
    title: "Welding & Metals",
    icon: Wrench,
    description: "Develop expertise in various welding techniques and metal fabrication.",
    subjects: [
      { name: "MIG, TIG, and stick welding" },
      { name: "Metal fabrication and sheet metal work" },
      { name: "Welding certification preparation" },
    ],
    careers: ["Certified Welder", "Metal Fabricator", "Quality Control Inspector"],
    facilities: "Professional welding bays with industry-standard equipment",
    duration: "3 years",
    certification: "National Certificate: Welding",
  },
  {
    title: "Mechanical Technology",
    icon: Cog,
    description: "Explore the principles of mechanical engineering and industrial technology.",
    subjects: [
      { name: "CAD/CAM software proficiency" },
      { name: "Precision machining techniques" },
      { name: "Robotics and automation" },
    ],
    careers: ["Mechanical Technician", "CNC Programmer", "Manufacturing Specialist"],
    facilities: "Modern mechanical workshop with CNC machines",
    duration: "3 years",
    certification: "National Certificate: Mechanical Engineering",
  },
  {
    title: "Construction Woodworking",
    icon: Building2,
    description: "Learn the craft of woodworking and its applications in construction.",
    subjects: [
      { name: "Furniture design and construction" },
      { name: "Architectural woodworking" },
      { name: "Advanced joinery techniques" },
    ],
    careers: ["Cabinet Maker", "Furniture Designer", "Construction Specialist"],
    facilities: "Fully-equipped woodworking workshop",
    duration: "3 years",
    certification: "National Certificate: Woodworking",
  },
  {
    title: "Civil Technology",
    icon: Building2,
    description: "Gain knowledge in civil engineering principles and construction management.",
    subjects: [
      { name: "Structural design and analysis" },
      { name: "Construction project management" },
      { name: "Sustainable building practices" },
    ],
    careers: ["Civil Engineering Technician", "Construction Manager", "Building Inspector"],
    facilities: "Civil engineering laboratory and design studio",
    duration: "3 years",
    certification: "National Certificate: Civil Engineering",
  },
  {
    title: "Electrical Technology",
    icon: Zap,
    description: "Delve into electrical systems, power distribution, and electronic controls.",
    subjects: [
      { name: "Industrial electrical systems" },
      { name: "PLC programming and control" },
      { name: "Renewable energy technologies" },
    ],
    careers: ["Electrical Technician", "PLC Programmer", "Renewable Energy Specialist"],
    facilities: "Modern electrical laboratory with automation equipment",
    duration: "3 years",
    certification: "National Certificate: Electrical Engineering",
  },
]

const results = [
  { year: "2024", rate: "99.3%" },
  { year: "2023", rate: "99.1%" },
  { year: "2022", rate: "95.3%" },
  { year: "2021", rate: "95.5%" },
  { year: "2020", rate: "94.5%" },
  { year: "2019", rate: "93.0%" },
]

export default function AcademicsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Academic Excellence"
        subtitle="Preparing students for the future of engineering and technology"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Specialized Programs</h2>
            <p className="text-gray-600">
              Discover our comprehensive range of technical programs designed to meet industry demands and foster
              innovation
            </p>
          </ScrollAnimation>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(programs).map(([key, program]) => (
              <Card key={key} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-school-navy to-school-blue text-white p-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-lg bg-white/10">
                      <program.icon className="w-6 h-6" />
                    </div>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-school-navy">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.subjects.map((subject) => (
                        <li key={subject.name} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{subject.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className="w-full mt-4 bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white"
                  >
                    <Link href={`/programs#${key}`}>Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

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
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Outstanding Matric Results</h2>
                <p className="text-xl text-gray-200">
                  Our commitment to excellence is evident in our consistent record of outstanding matric results, making
                  us one of the top-performing schools in the Tshwane West district.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {results.map(({ year, rate }) => (
                    <Card key={year} className="bg-white/10 backdrop-blur border-0">
                      <CardContent className="p-6">
                        <p className="text-3xl font-bold text-school-gold mb-2">{rate}</p>
                        <p className="text-sm text-gray-200">Matric Pass Rate {year}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="bg-white text-school-navy">
                <CardContent className="p-8">
                  <GraduationCap className="w-12 h-12 mb-6 text-school-navy" />
                  <h3 className="text-xl font-bold mb-4">Project-Based Learning</h3>
                  <p className="mb-4">
                    We believe in learning by doing. Our project-based learning approach allows students to:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-school-gold" />
                      <span>Explore real-world problems</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-school-gold" />
                      <span>Create innovative solutions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-school-gold" />
                      <span>Enhance academic growth</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-school-gold" />
                      <span>Develop time management skills</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Lightbulb className="w-5 h-5 text-school-gold" />
                      <span>Build character and leadership</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Academic Support</h2>
            <p className="text-gray-600">
              We provide comprehensive support to ensure every student reaches their full potential
            </p>
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-3">
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 mx-auto mb-4 text-school-navy" />
                  <h3 className="font-bold text-xl mb-2">Mentorship Program</h3>
                  <p className="text-gray-600">Personalized guidance from industry professionals and alumni</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Book className="w-12 h-12 mx-auto mb-4 text-school-navy" />
                  <h3 className="font-bold text-xl mb-2">Resource Center</h3>
                  <p className="text-gray-600">Access to cutting-edge learning materials and technology</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation>
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <Award className="w-12 h-12 mx-auto mb-4 text-school-navy" />
                  <h3 className="font-bold text-xl mb-2">Academic Competitions</h3>
                  <p className="text-gray-600">Opportunities to showcase skills in national and international events</p>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container text-center">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold tracking-tighter mb-6">Ready to Shape Your Future?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join us at Soshanguve Engineering School and embark on a journey of innovation and excellence
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full px-8 py-3 text-lg"
            >
              <Link href="/apply">Apply Now</Link>
            </Button>
          </ScrollAnimation>
        </div>
      </section>
    </PageTransition>
  )
}

