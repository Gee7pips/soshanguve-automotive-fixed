"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { getUpdates } from "@/app/actions"
import { ArrowRight, Calendar, Tag } from "lucide-react"

interface Update {
  _id: string
  title: string
  content: string
  date: string
  category?: string
  imageUrl?: string
}

export function UpdatesSection() {
  const [updates, setUpdates] = useState<Update[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUpdates = async () => {
      try {
        const fetchedUpdates = await getUpdates()
        setUpdates(fetchedUpdates.slice(0, 3)) // Only show latest 3 updates
      } catch (err) {
        console.error("Error fetching updates:", err)
        setError("Failed to load updates. Please try again later.")
      }
    }
    fetchUpdates()
  }, [])

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    )
  }

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
              key={update._id}
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

