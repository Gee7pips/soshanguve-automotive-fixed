import { Button } from "@/components/ui/button"
import { FileText, Download } from "lucide-react"
import Link from "next/link"

interface DocumentDownloadProps {
  name: string
  link: string
}

export function DocumentDownload({ name, link }: DocumentDownloadProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center space-x-2">
        <FileText className="text-school-blue" size={20} />
        <span className="font-medium">{name}</span>
      </div>
      <Button asChild variant="outline" size="sm">
        <Link href={link} target="_blank" rel="noopener noreferrer">
          <Download size={16} className="mr-2" />
          Download
        </Link>
      </Button>
    </div>
  )
}
