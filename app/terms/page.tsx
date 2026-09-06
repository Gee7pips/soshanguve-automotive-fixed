import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Use | Soshanguve Engineering School Of Specialisation",
  description: "Terms of use for the Soshanguve Engineering School Of Specialisation website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-10 lg:p-14">
          <p className="eyebrow text-school-gold">Legal / Terms</p>
          <h1 className="premium-heading mt-4 text-4xl text-school-navy sm:text-5xl">Terms of Use</h1>
          <p className="mt-5 text-sm leading-7 text-slate-500">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-8 text-slate-600">
            <section><h2 className="premium-heading text-2xl text-school-navy">Website information</h2><p className="mt-3">This website is provided to share information about Soshanguve Engineering School Of Specialisation. Information is intended for general guidance and may change as school programmes, admissions arrangements and activities are updated.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">Admissions</h2><p className="mt-3">An enquiry or application message prepared by this website does not constitute official placement or admission. Prospective learners and parents must follow the applicable Gauteng Department of Education admissions and placement requirements.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">External services and links</h2><p className="mt-3">The website may link to Gmail, WhatsApp, Google Maps, government websites, social media and other external services. Those services operate independently and their own terms apply when you leave this website.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">Intellectual property</h2><p className="mt-3">Unless otherwise indicated, website copy, design and original presentation elements are provided for the school&apos;s website. Third-party trademarks, photographs and logos remain the property of their respective owners.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">Contact</h2><p className="mt-3">Questions about the school, admissions or information published here should be directed to the school using the official contact details on the Contact page.</p></section>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-7"><Link href="/contact" className="font-semibold text-school-blue hover:text-school-navy">Go to Contact</Link></div>
        </div>
      </div>
    </main>
  )
}
