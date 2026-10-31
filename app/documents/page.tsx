import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, CalendarDays, ClipboardList, FileText } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const siteUrl = "https://www.sosha-automotive.org"
const backgroundImage = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg"

export const metadata: Metadata = {
  title: "School Documents & Resources",
  description: "Find out how to request current school policies, learner guidance, academic information and parent forms from Soshanguve Engineering School Of Specialisation.",
  alternates: { canonical: `${siteUrl}/documents` },
  openGraph: {
    title: "School Documents & Resources | Soshanguve Engineering School",
    description: "Request current school policies, academic information, assessment guidance and parent or learner forms.",
    url: `${siteUrl}/documents`,
    type: "website",
  },
}

const resourceGroups = [
  {
    icon: FileText,
    title: "Policies & learner guidelines",
    description: "Ask the school office for current approved copies of learner conduct, attendance guidance and relevant school policies.",
  },
  {
    icon: CalendarDays,
    title: "Academic calendars & assessment",
    description: "Request the latest academic calendar, examination information, assessment guidance and programme-related details.",
  },
  {
    icon: ClipboardList,
    title: "Parent, learner & school forms",
    description: "Contact the school for the appropriate current forms and guidance for parents, guardians and learners.",
  },
]

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="School Documents & Resources"
        subtitle="Information for parents, guardians and learners at Soshanguve Engineering School Of Specialisation"
        backgroundImage={backgroundImage}
      />

      <main className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <section className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-school-gold">Official school information</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-school-navy md:text-4xl">
              Request the latest approved document
            </h2>
            <p className="mt-5 leading-7 text-gray-600">
              School policies, forms and academic information can change. Contact the school office to request the current version of the document you need. This page does not offer unverified or outdated downloads.
            </p>
          </section>

          <section aria-label="Available resource categories" className="grid gap-6 md:grid-cols-3">
            {resourceGroups.map((group) => (
              <Card key={group.title} className="h-full border-school-navy/10 bg-white shadow-sm transition-shadow hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-2xl bg-school-navy/5">
                    <group.icon className="h-6 w-6 text-school-blue" />
                  </div>
                  <CardTitle className="text-xl text-school-navy">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-gray-600">{group.description}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mt-12 rounded-3xl bg-school-navy p-7 text-white md:p-10">
            <div className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
              <div className="max-w-2xl">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-school-gold">Need a document?</p>
                <h2 className="font-serif text-2xl font-bold md:text-3xl">Speak to the school office</h2>
                <p className="mt-3 leading-7 text-white/75">
                  Tell the school which policy, form or academic resource you need so that you can receive the correct and most recent information.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Button asChild className="rounded-full bg-school-gold text-school-navy hover:bg-white">
                  <Link href="/contact">
                    Contact the School <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-white/50 bg-transparent text-white hover:bg-white hover:text-school-navy">
                  <Link href="/apply">
                    Admissions & Enquiries
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
