"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Heart, BookOpen, Users, Lightbulb, Loader2, CheckCircle2 } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { submitSponsorship } from "@/app/actions"
import { PageTransition } from "@/components/page-transition"
import Image from "next/image"
import { Trophy, Star } from "lucide-react"

const supportOptions = [
  {
    icon: Heart,
    title: "Financial Donation",
    description: "Contribute funds to support our programs and infrastructure",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description: "Donate books, software, or equipment for our students",
  },
  { icon: Users, title: "Mentorship", description: "Share your expertise and guide our aspiring engineers" },
  { icon: Lightbulb, title: "Project Sponsorship", description: "Fund innovative student projects and research" },
]

export default function SupportUsPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    areaOfInterest: "",
    supportType: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      // Validate required fields
      if (!formState.firstName || !formState.lastName || !formState.email) {
        throw new Error("Please fill in all required fields")
      }

      const result = await submitSponsorship(formState)
      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Sponsorship Inquiry Submitted",
          description: "Thank you for your interest in supporting us. We will contact you soon.",
        })
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          organization: "",
          areaOfInterest: "",
          supportType: "",
          message: "",
        })
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        throw new Error(result.error || "Failed to submit sponsorship inquiry")
      }
    } catch (error) {
      console.error("Error submitting sponsorship inquiry:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "There was an error submitting your inquiry. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <PageTransition>
      <PageHeader
        title="Support Our Vision"
        subtitle="Join us in shaping the future of engineering education"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      {/* New Impact Section with First Image */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Your Support Creates Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Our students consistently achieve excellence in national competitions and industry recognition
            </p>
          </ScrollAnimation>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739093407139.jpg-N4FXn5WOUAEi8TxMvUda6ZnVVOmEpx.jpeg"
                  alt="Students receiving awards at Eskom Expo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-school-navy">Award-Winning Innovation</h3>
                <p className="text-gray-600">
                  Our students regularly participate and excel in prestigious competitions like the Eskom Expo for Young
                  Scientists, showcasing their innovative solutions to real-world problems.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <Trophy className="w-5 h-5 text-school-gold" />
                    <span>Multiple national awards in engineering innovation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-school-gold" />
                    <span>Recognition from industry leaders</span>
                  </li>
                </ul>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* New Needs Section with Second Image */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <ScrollAnimation>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1739093076995.jpg-nWhLauKGkMnyUbUYmQKd5kPO505muq.jpeg"
                  alt="Our growing student community gathered for an assembly"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-school-navy">Our Vibrant Learning Community</h3>
                <p className="text-gray-600">
                  This image captures the heart of Soshanguve Engineering School - our dedicated students. Dressed in
                  their distinctive blue uniforms, they represent our commitment to excellence and disciplined learning.
                  Each face in this assembly holds the promise of a bright future in engineering and innovation. These
                  young minds, gathered together, symbolize the collaborative spirit and shared vision that define our
                  institution. They are not just students; they are the future engineers, innovators, and leaders who
                  will shape South Africa's technological landscape.
                </p>
                <p className="text-gray-600">
                  Your support doesn't just improve facilities; it nurtures dreams, fuels ambitions, and empowers these
                  brilliant young minds to reach their full potential. By investing in our school, you're investing in a
                  future where these students will lead groundbreaking projects, solve complex challenges, and drive
                  progress in our nation and beyond.
                </p>
                <div className="grid gap-4">
                  <Card className="bg-school-navy text-white">
                    <CardContent className="p-4">
                      <h4 className="font-bold">Empowering Future Innovators</h4>
                      <p className="text-sm">Support the dreams and aspirations of our talented student body</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-school-blue text-white">
                    <CardContent className="p-4">
                      <h4 className="font-bold">Fostering Excellence</h4>
                      <p className="text-sm">
                        Help us maintain and enhance our culture of academic rigor and innovation
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              Your Support Can Transform Lives
            </h2>
            <p className="text-xl text-gray-600">
              At Soshanguve Engineering School of Specialisation, we're committed to nurturing the next generation of
              engineers and innovators. Your support can make a significant impact on our students' lives and help shape
              the future of engineering education in South Africa.
            </p>
          </ScrollAnimation>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {supportOptions.map((option, index) => (
              <ScrollAnimation key={index}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <option.icon className="w-12 h-12 text-school-navy mb-4" />
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              </ScrollAnimation>
            ))}
          </div>

          <ScrollAnimation className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center">Become a Sponsor or Investor</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="Your first name"
                        required
                        value={formState.firstName}
                        onChange={(e) => setFormState({ ...formState, firstName: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Your last name"
                        required
                        value={formState.lastName}
                        onChange={(e) => setFormState({ ...formState, lastName: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email address"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization (if applicable)</Label>
                    <Input
                      id="organization"
                      placeholder="Your company or organization"
                      value={formState.organization}
                      onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Area of Interest</Label>
                    <RadioGroup
                      value={formState.areaOfInterest}
                      onValueChange={(value) => setFormState({ ...formState, areaOfInterest: value })}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="sponsorship" id="sponsorship" />
                        <Label htmlFor="sponsorship">Sponsorship</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="investment" id="investment" />
                        <Label htmlFor="investment">Investment</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="partnership" id="partnership" />
                        <Label htmlFor="partnership">Partnership</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="supportType">Type of Support</Label>
                    <Select
                      value={formState.supportType}
                      onValueChange={(supportType) => setFormState({ ...formState, supportType })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type of support" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial Donation</SelectItem>
                        <SelectItem value="resources">Educational Resources</SelectItem>
                        <SelectItem value="mentorship">Mentorship</SelectItem>
                        <SelectItem value="project">Project Sponsorship</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how you'd like to support our school"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy
                             text-white rounded-full relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      ) : isSuccess ? (
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                      ) : null}
                      {isSubmitting ? "Submitting..." : isSuccess ? "Inquiry Sent!" : "Submit Inquiry"}
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20"
                      animate={{
                        x: [-500, 500],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-20 bg-school-navy text-white">
        <div className="container">
          <ScrollAnimation className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">The Impact of Your Support</h2>
            <p className="text-xl mb-8">
              Your contribution helps us create a brighter future for our students and community. Here's how your
              support makes a difference:
            </p>
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-school-gold mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Provides access to cutting-edge technology and equipment for hands-on learning</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-school-gold mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Enables us to offer scholarships to talented students from underprivileged backgrounds</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-school-gold mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Funds innovative student projects that address real-world engineering challenges</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-school-gold mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span>Supports our outreach programs, inspiring more young people to pursue STEM careers</span>
              </li>
            </ul>
          </ScrollAnimation>
        </div>
      </section>
    </PageTransition>
  )
}
