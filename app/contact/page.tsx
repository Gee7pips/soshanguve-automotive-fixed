"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Mail, MapPin, Phone, Loader2, CheckCircle2 } from "lucide-react"
import { submitContact } from "@/app/actions"
import { useToast } from "@/components/ui/use-toast"
import { PageTransition } from "@/components/page-transition"
import type React from "react" // Added import for React

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "soshanguve.technical@gmail.com",
    href: "mailto:soshanguve.technical@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "012 797 2118",
    href: "tel:0127972118",
  },
  {
    icon: MapPin,
    title: "Address",
    value: "1669 Block L, Soshanguve, Pretoria",
    href: "https://maps.google.com/?q=1669+Block+L,+Soshanguve,+Pretoria",
  },
  {
    icon: Facebook,
    title: "Facebook",
    value: "@sosh-technical.com",
    href: "https://facebook.com/sosh-technical.com",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await submitContact(formState)
      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Message Sent",
          description: "Thank you for contacting us. We'll get back to you soon.",
        })
        setFormState({ name: "", email: "", message: "" })
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        throw new Error(result.error || "Failed to send message")
      }
    } catch (error) {
      console.error("Error submitting contact form:", error)
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "There was an error sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <PageTransition>
      <PageHeader
        title="Get in Touch"
        subtitle="We'd love to hear from you. Reach out for any inquiries or partnership opportunities."
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-gray-900/[0.04] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]" />
        </div>

        <div className="container relative">
          <div className="grid gap-12 md:grid-cols-2">
            <ScrollAnimation>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter text-school-navy">Contact Information</h2>
                <p className="text-gray-600">
                  Feel free to reach out to us using any of the following methods. We're here to answer your questions
                  and provide support.
                </p>
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid gap-4">
                  {contactInfo.map((item, index) => (
                    <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.02 }} className="group">
                      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                        <CardContent className="p-6">
                          <a
                            href={item.href}
                            target={item.icon !== MapPin ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="flex items-center space-x-4"
                          >
                            <div className="p-3 rounded-full bg-school-navy/5 group-hover:bg-school-navy/10 transition-colors">
                              <item.icon className="w-6 h-6 text-school-navy" />
                            </div>
                            <div>
                              <p className="font-bold text-school-navy">{item.title}</p>
                              <p className="text-gray-600 group-hover:text-school-blue transition-colors">
                                {item.value}
                              </p>
                            </div>
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation>
              <Card className="overflow-hidden">
                <CardContent className="p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold text-school-navy mb-6">Send us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">
                          Name
                        </label>
                        <Input
                          id="name"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="transition-all duration-300 focus:ring-2 focus:ring-school-blue/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="transition-all duration-300 focus:ring-2 focus:ring-school-blue/20"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="min-h-[150px] transition-all duration-300 focus:ring-2 focus:ring-school-blue/20"
                          required
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
                          {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
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
                  </motion.div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container">
          <ScrollAnimation className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">Find Us</h2>
            <p className="text-gray-600">Visit our campus and see our facilities firsthand</p>
          </ScrollAnimation>

          <ScrollAnimation>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video w-full relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.4143162647837!2d28.138899776537827!3d-25.531599137376397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfd2b76a355555%3A0x41c6bbd8d68e153e!2sSoshanguve%20Engineering%20School%20of%20Specialisation!5e0!3m2!1sen!2sza!4v1709136000000!5m2!1sen!2sza"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-6 bg-gradient-to-b from-gray-50 to-white">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-school-navy/5">
                      <MapPin className="w-6 h-6 text-school-navy" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Our Location</h3>
                      <p className="text-gray-600">1669 Block L, Soshanguve, 0152, Tshwane</p>
                      <p className="text-gray-600 mt-2">
                        Located in the heart of Soshanguve, our campus is easily accessible via public transport and
                        major routes.
                      </p>
                      <div className="mt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full hover:bg-school-navy hover:text-white transition-colors"
                        >
                          <a
                            href="https://www.google.com/maps/dir//Soshanguve+Engineering+School+of+Specialisation"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollAnimation>
        </div>
      </section>
    </PageTransition>
  )
}
