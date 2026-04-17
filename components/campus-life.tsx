"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const galleryItems = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0015-SSpLjnb8yxdgtwcnn4ofWj5K3TmQuX.jpg",
    alt: "Students playing table tennis in the school recreation room",
    label: "Table Tennis",
    span: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0016-XIvLWR1o3AnTj15lvChmPEzVpmC7xy.jpg",
    alt: "Student engaged in a chess match outdoors",
    label: "Chess Club",
    span: "col-span-1",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260407-WA0017-dBW9EMfMHufwx8BQFQaWWKahCkFjqi.jpg",
    alt: "Girls netball match on the school court",
    label: "Netball",
    span: "col-span-1 sm:col-span-2 lg:col-span-1",
  },
]

export function CampusLife() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50/60 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid gap-16 lg:gap-24 lg:grid-cols-2 items-center">

          {/* Left: Text block */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-school-gold" />
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-school-gold">
                Campus Life
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-school-navy leading-tight text-balance">
              More Than an Education — A Complete Community
            </h2>

            <div className="w-12 h-0.5 bg-school-gold" />

            <p className="text-gray-600 leading-relaxed text-lg">
              Excellence at Soshanguve Automotive SoS extends well beyond the workshop floor. Our learners compete in
              netball leagues, sharpen their strategic minds in chess tournaments, and unwind at the table tennis table
              — because we believe that a well-rounded learner is a resilient one.
            </p>
            <p className="text-gray-600 leading-relaxed">
              A healthy body and an active mind are as important as technical mastery. Our vibrant sports and
              extra-curricular programme gives every learner the space to discover their strengths, build character,
              and forge lifelong friendships alongside their academic journey.
            </p>
          </motion.div>

          {/* Right: Image gallery grid */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grid grid-cols-2 gap-3"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${item.span} ${index === 0 ? "row-span-2" : ""}`}
              >
                <div className={index === 0 ? "h-full min-h-[340px]" : "h-44"}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-school-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-school-gold text-school-navy text-[9px] font-black tracking-widest uppercase">
                      {item.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
