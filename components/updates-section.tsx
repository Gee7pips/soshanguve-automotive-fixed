"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Tag } from "lucide-react"

interface Update {
  id: string
  title: string
  content: string
  date: string
  category?: string
  imageUrl?: string
}

const staticUpdates: Update[] = [
  {
    id: "1",
    title: "New Engineering Lab Opening",
    content: "We are excited to announce the opening of our state-of-the-art engineering laboratory equipped with the latest technology and tools for hands-on learning.",
    date: "2025-02-15",
    category: "Facilities",
  },
  {
    id: "2",
    title: "Student Innovation Award",
    content: "Our students won first place at the National Engineering Competition with their innovative solar-powered vehicle project.",
    date: "2025-02-10",
    category: "Achievement",
  },
  {
    id: "3",
    title: "Industry Partnership Program",
    content: "We have partnered with leading engineering companies to provide internship opportunities and mentorship programs for our students.",
    date: "2025-02-05",
    category: "Partnership",
  },
]

export function UpdatesSection() {
  const updates = staticUpdates
  const error = null; // Declare the error variable

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-school-navy to-school-blue bg-clip-text text-transparent">
            Latest Updates
          </h2>
          <p className="text-gray-600 md:text-lg max-w-[800px] mx-auto">
            Stay informed about the latest news, events, and achievements at Soshanguve Engineering School
          </p>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-3">
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 overflow-hidden">
                {update.imageUrl && (
                  <div className="w-full h-48 relative overflow-hidden">
                    <img
                      src={update.imageUrl || "/placeholder.svg"}
                      alt={update.title}
                      className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-xl font-bold line-clamp-2">{update.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(update.date).toLocaleDateString()}
                    </span>
                    {update.category && (
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {update.category}
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">{update.content}</p>
                  <Button variant="link" className="p-0 h-auto font-semibold text-school-blue hover:text-school-navy">
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-gradient-to-r from-school-navy to-school-blue hover:from-school-blue hover:to-school-navy text-white rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Link href="/updates">View All Updates</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
