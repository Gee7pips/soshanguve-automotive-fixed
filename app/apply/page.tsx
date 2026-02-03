"use client"

import type React from "react"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/components/ui/use-toast"
import { submitApplication } from "@/app/actions"
import { Loader2, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function ApplyPage() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    city: "",
    postalCode: "",
    currentSchool: "",
    gradeLevel: "",
    program: "",
    academicAchievements: "",
    extracurricularActivities: "",
    whyJoin: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, agreeTerms: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const result = await submitApplication(formState)
      if (result.success) {
        setIsSuccess(true)
        toast({
          title: "Application Submitted",
          description: "Thank you for applying. We will contact you soon.",
        })
        // Reset form
        setFormState({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          gender: "",
          address: "",
          city: "",
          postalCode: "",
          currentSchool: "",
          gradeLevel: "",
          program: "",
          academicAchievements: "",
          extracurricularActivities: "",
          whyJoin: "",
          parentName: "",
          parentEmail: "",
          parentPhone: "",
          agreeTerms: false,
        })
        setTimeout(() => setIsSuccess(false), 3000)
      } else {
        throw new Error(result.error)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Apply Now"
        subtitle="Take the first step towards shaping your future in engineering and technology"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-yGlKhAhQg39EA6QQPltIMWzC1vXCas.jpeg"
      />

      <section className="py-20 bg-gray-50">
        <div className="container">
          <ScrollAnimation>
            <Card className="max-w-4xl mx-auto">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-school-navy">
                  Student Application Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-school-navy">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formState.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formState.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formState.dateOfBirth}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select
                          name="gender"
                          value={formState.gender}
                          onValueChange={(value) => handleSelectChange("gender", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="preferNotToSay">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" name="address" value={formState.address} onChange={handleChange} required />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" name="city" value={formState.city} onChange={handleChange} required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input
                          id="postalCode"
                          name="postalCode"
                          value={formState.postalCode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-school-navy">Academic Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentSchool">Current School</Label>
                        <Input
                          id="currentSchool"
                          name="currentSchool"
                          value={formState.currentSchool}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gradeLevel">Current Grade Level</Label>
                        <Select
                          name="gradeLevel"
                          value={formState.gradeLevel}
                          onValueChange={(value) => handleSelectChange("gradeLevel", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select grade level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="grade8">Grade 8</SelectItem>
                            <SelectItem value="grade9">Grade 9</SelectItem>
                            <SelectItem value="grade10">Grade 10</SelectItem>
                            <SelectItem value="grade11">Grade 11</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="program">Preferred Program</Label>
                      <Select
                        name="program"
                        value={formState.program}
                        onValueChange={(value) => handleSelectChange("program", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select a program" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="automotive">Automotive Fitting & Tuning</SelectItem>
                          <SelectItem value="mechanical">Mechanical Technology</SelectItem>
                          <SelectItem value="civil">Civil Technology</SelectItem>
                          <SelectItem value="electrical">Electrical Technology</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="academicAchievements">Academic Achievements</Label>
                      <Textarea
                        id="academicAchievements"
                        name="academicAchievements"
                        value={formState.academicAchievements}
                        onChange={handleChange}
                        placeholder="List any academic awards, honors, or significant achievements"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="extracurricularActivities">Extracurricular Activities</Label>
                      <Textarea
                        id="extracurricularActivities"
                        name="extracurricularActivities"
                        value={formState.extracurricularActivities}
                        onChange={handleChange}
                        placeholder="Describe any clubs, sports, or other activities you're involved in"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whyJoin">Why do you want to join our school?</Label>
                      <Textarea
                        id="whyJoin"
                        name="whyJoin"
                        value={formState.whyJoin}
                        onChange={handleChange}
                        placeholder="Tell us about your interest in engineering and technology, and why you think our school is a good fit for you"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-school-navy">Parent/Guardian Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="parentName">Parent/Guardian Name</Label>
                        <Input
                          id="parentName"
                          name="parentName"
                          value={formState.parentName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentEmail">Parent/Guardian Email</Label>
                        <Input
                          id="parentEmail"
                          name="parentEmail"
                          type="email"
                          value={formState.parentEmail}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="parentPhone">Parent/Guardian Phone</Label>
                        <Input
                          id="parentPhone"
                          name="parentPhone"
                          type="tel"
                          value={formState.parentPhone}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formState.agreeTerms}
                      onCheckedChange={handleCheckboxChange}
                      required
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the terms and conditions
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-school-navy hover:bg-school-navy/90 text-white"
                    disabled={!formState.agreeTerms || isSubmitting}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                      ) : isSuccess ? (
                        <CheckCircle2 className="w-5 h-5 mr-2" />
                      ) : null}
                      {isSubmitting ? "Submitting..." : isSuccess ? "Application Sent!" : "Submit Application"}
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
    </>
  )
}
