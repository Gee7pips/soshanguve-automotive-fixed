import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import Link from "next/link"
import { PageTransition } from "@/components/page-transition"

const documents = [
  {
    category: "Policies",
    items: [
      { name: "Student Code of Conduct", link: "/documents/student-code-of-conduct.pdf" },
      { name: "Attendance Policy", link: "/documents/attendance-policy.pdf" },
      { name: "Anti-Bullying Policy", link: "/documents/anti-bullying-policy.pdf" },
    ],
  },
  {
    category: "Assessment Criteria",
    items: [
      { name: "General Assessment Guidelines", link: "/documents/general-assessment-guidelines.pdf" },
      { name: "Engineering Projects Rubric", link: "/documents/engineering-projects-rubric.pdf" },
      { name: "Practical Skills Evaluation Criteria", link: "/documents/practical-skills-evaluation.pdf" },
    ],
  },
  {
    category: "Academic Calendar",
    items: [
      { name: "2025 Academic Year Calendar", link: "/documents/2025-academic-calendar.pdf" },
      { name: "Exam Schedules", link: "/documents/exam-schedules.pdf" },
    ],
  },
  {
    category: "Forms",
    items: [
      { name: "Project Proposal Form", link: "/documents/project-proposal-form.pdf" },
      { name: "Internship Application", link: "/documents/internship-application.pdf" },
      { name: "Parent-Teacher Meeting Request", link: "/documents/parent-teacher-meeting-request.pdf" },
    ],
  },
]

export default function DocumentsPage() {
  return (
    <PageTransition>
      <PageHeader
        title="School Documents"
        subtitle="Access important policies, assessment criteria, and forms"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg"
      />

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          <ScrollAnimation className="grid gap-8 md:grid-cols-2">
            {documents.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-school-navy">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <FileText className="text-school-blue" size={20} />
                          <span>{item.name}</span>
                        </div>
                        <Button asChild variant="outline" size="sm">
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            <Download size={16} className="mr-2" />
                            Download
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </ScrollAnimation>
        </div>
      </section>
    </PageTransition>
  )
}
