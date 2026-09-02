"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Ruler, BookOpen, GraduationCap, Trophy } from "lucide-react"
import { PageTransition } from "@/components/page-transition"

const features = [
  { icon: GraduationCap, title: "Specialized Programs", description: "Nine specialized technical programs designed to meet industry demands" },
  { icon: Trophy, title: "Award-Winning Institution", description: "Recipients of the National Batho Pele Excellence Award", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027253711.jpg-7gwqr89D7YV7hDzj5XB655WiTbcsjH.jpeg" },
  { icon: Users, title: "Expert Faculty", description: "Dedicated professionals committed to student success", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027452789.jpg-4wJScpJvYSvWwljERvIWwTFXKJO4Cb.jpeg" },
  { icon: Ruler, title: "Technical Excellence", description: "State-of-the-art equipment and resources", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739027413795.jpg-MDwjY6eS57MokIgJttbWLhQwtbB2ke.jpeg" },
]

const achievements = [
  { title: "100% Matric Pass Rate", description: "Verified 2025 matric achievement", icon: BookOpen },
  { title: "National Recognition", description: "Multiple awards for innovation and excellence", icon: Trophy },
  { title: "Industry Partnerships", description: "Strong connections with leading companies", icon: Users },
]

export default function LearnMorePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] })
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <PageTransition>
      <PageHeader title="Discover Our Excellence" subtitle="Learn how we're shaping the future of engineering education in South Africa" backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg" />
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden" ref={containerRef}><div className="container"><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16"><h2 className="premium-heading text-4xl font-bold text-school-navy mb-4">Why Choose Soshanguve Engineering?</h2><p className="subheading-premium text-xl text-gray-600 max-w-3xl mx-auto">We offer a unique blend of academic excellence, practical experience, and innovation.</p></motion.div><div className="grid gap-12 md:grid-cols-2 items-center mb-20">{features.map((feature, index) => <motion.div key={feature.title} style={{ y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-100, 100]), opacity }} className="relative rounded-2xl overflow-hidden shadow-2xl group"><Card className="h-full transition-transform duration-500 hover:scale-[1.02]"><CardContent className="p-6"><div className="flex items-center space-x-4 mb-4"><div className="p-3 rounded-full bg-school-navy/10"><feature.icon className="w-6 h-6 text-school-navy" /></div><h3 className="premium-heading text-xl font-bold text-school-navy">{feature.title}</h3></div><p className="text-gray-600 mb-6">{feature.description}</p>{feature.image && <div className="image-frame-premium"><div className="image-surface relative h-[300px]"><Image src={feature.image} alt={feature.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" /></div></div>}</CardContent></Card></motion.div>)}</div></div></section>
      <section className="py-20 bg-school-navy text-white"><div className="container"><div className="grid gap-12 md:grid-cols-2 items-center"><motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6"><h2 className="premium-heading premium-heading-dark text-3xl font-bold">Our Vision for Excellence</h2><p className="subheading-premium subheading-premium-dark text-xl text-gray-200">At Soshanguve Engineering School, we're committed to nurturing the next generation of innovative thinkers and problem-solvers.</p><div className="grid gap-4">{achievements.map((achievement, index) => <motion.div key={achievement.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }}><Card className="bg-white/10 backdrop-blur border border-white/10"><CardContent className="p-4 flex items-center space-x-4"><achievement.icon className="w-8 h-8 text-school-gold" /><div><h3 className="premium-heading premium-heading-dark font-bold text-white">{achievement.title}</h3><p className="text-sm text-gray-200">{achievement.description}</p></div></CardContent></Card></motion.div>)}</div><Button asChild className="bg-school-gold hover:bg-school-gold/90 text-school-navy rounded-full shadow-lg"><Link href="/apply">Join Us Today</Link></Button></motion.div><motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="image-frame-dark"><div className="image-surface relative h-[600px]"><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739093087147.jpg-OM39nvgrdm5aIqKM8EKrVJOofwqguW.jpeg" alt="Students showcasing their achievements" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-school-navy via-transparent to-transparent opacity-60" /></div></motion.div></div></div></section>
    </PageTransition>
  )
}
