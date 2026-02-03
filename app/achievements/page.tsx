import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Star, Trophy } from "lucide-react"
import { PageTransition } from "@/components/page-transition"
import { AchievementShowcase } from "@/components/achievement-showcase"
import Image from "next/image"

const achievements = [
  {
    title: "Global Clean Tech Award",
    location: "Abu Dhabi",
    description: "Our principal received recognition for clean energy initiatives",
    icon: Trophy,
  },
  {
    title: "SAGE South Africa Award",
    location: "National Competition",
    description: "Student victory in 2022 showcasing innovation",
    icon: Award,
  },
  {
    title: "Robotics Challenge",
    location: "National Level",
    description: "Excellence demonstrated in STEM competition",
    icon: Star,
  },
]

const projects = [
  {
    title: "Electric Car Innovation",
    description:
      "A groundbreaking student-led project showcasing sustainable engineering excellence. Our learners designed and built this elegant electric vehicle from the ground up, combining classic automotive design with modern electric technology. This project demonstrates our commitment to innovative, environmentally conscious engineering education.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-13-20-53-59-43_99c04817c0de5652397fc8b56c3b3817.jpg-6wS3jUHB2FtdXGpMshb9dtnDSasAbN.jpeg",
        alt: "Rear view of student-built electric car in metallic blue",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-13-20-52-15-58_99c04817c0de5652397fc8b56c3b3817.jpg-FiTJwqMAi91LUEzyWe1FcE8RsJCywX.jpeg",
        alt: "Side view of student-built electric car showing classic design",
      },
    ],
    achievements: [
      "Zero-emission electric powertrain",
      "Custom-designed chassis and bodywork",
      "Featured at the GDE SOS Festival",
      "Demonstrates practical application of multiple engineering disciplines",
    ],
  },
  {
    title: "Solar-Powered Train",
    description:
      "An innovative student-built locomotive reaching speeds of 30km/hour, powered entirely by solar energy. This project showcases our students' ability to tackle South Africa's energy challenges through sustainable engineering solutions.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2025-02-25-14-44-44-46_f9ee0578fe1cc94de7482bd41accb329.jpg-TPSCHtoQ4mHwTSHcN09419f3FwFIdG.jpeg",
        alt: "Solar-powered train built by Soshanguve Automotive SOS students, featured on SABC News",
      },
    ],
    achievements: [
      "100% solar-powered operation",
      "Speeds up to 30km/hour",
      "Featured on SABC News",
      "Innovative solution to energy challenges",
      "Practical demonstration of renewable energy",
      "Student-designed and built",
    ],
  },
]

const achievementImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345089652.jpg-g0Ko98CxyKlRmeqwgB0TfnsKweO7J7.jpeg",
    alt: "Certificate of Excellence and Trophies for 99.15% Pass Rate in 2023 NSC Grade 12 Examinations",
    caption: "Excellence in Academic Achievement: 99.15% Pass Rate Recognition",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345052987.jpg-OEO5u8dYn44k0r8mGY7RrRS0oGV8r5.jpeg",
    alt: "Staff members with awards and certificates",
    caption: "Our dedicated educators receiving recognition for outstanding performance",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345070699.jpg-W9rpmYyFnlkzb6GUFVlXxCnMBPAsYK.jpeg",
    alt: "Principal with awards at Gauteng Province Education event",
    caption: "Leadership Excellence: Recognition from Gauteng Department of Education",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1740345205295.jpg-2JYDVxzWrg3Q2Vyrw5Rp3eNeEGHxSY.jpeg",
    alt: "WCA2022 Awards Ceremony",
    caption: "International Recognition at WCA2022",
  },
]

export default function AchievementsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="Celebrating Excellence"
        subtitle="Our achievements showcase our commitment to innovation and education"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Our Success Stories</h2>
            <p className="text-xl text-gray-600">
              Celebrating excellence through recognition and achievements that inspire future generations
            </p>
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2">
            {achievementImages.map((image, index) => (
              <ScrollAnimation key={index}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-0">
                    <div className="relative h-[300px] overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm">{image.caption}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <AchievementShowcase />

      <section className="py-20">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Awards & Recognition</h2>
            <p className="text-gray-600">
              Our school has consistently been recognized for its excellence within the Gauteng Department of Education
            </p>
          </ScrollAnimation>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((achievement) => (
              <ScrollAnimation key={achievement.title}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <achievement.icon className="w-10 h-10 text-school-navy mb-4" />
                    <h3 className="font-bold mb-2">{achievement.title}</h3>
                    <p className="text-sm text-school-navy mb-2">{achievement.location}</p>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container">
          <ScrollAnimation className="text-center max-w-[800px] mx-auto mb-12">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Innovative Projects</h2>
            <p className="text-gray-600">
              Our students demonstrate their practical skills through groundbreaking projects
            </p>
          </ScrollAnimation>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ScrollAnimation key={project.title}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <CardContent className="p-0">
                    <div className="relative">
                      {project.images?.map((image, imgIndex) => (
                        <div key={imgIndex} className="relative aspect-video overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-school-navy/20 to-school-blue/20 z-10" />
                          <div className="absolute inset-0 border-[3px] border-school-gold/30 m-4 rounded-xl z-20" />
                          <img
                            src={image.url || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                        </div>
                      ))}
                    </div>
                    <div className="p-6 space-y-4">
                      <h3 className="text-2xl font-bold text-school-navy">{project.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{project.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-school-blue">Key Features:</h4>
                        <ul className="grid grid-cols-2 gap-2">
                          {project.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center space-x-2">
                              <div className="w-2 h-2 rounded-full bg-school-gold" />
                              <span className="text-sm text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
