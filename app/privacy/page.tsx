import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Soshanguve Engineering School Of Specialisation",
  description: "Privacy information for the Soshanguve Engineering School Of Specialisation website.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl sm:p-10 lg:p-14">
          <p className="eyebrow text-school-gold">Legal / Privacy</p>
          <h1 className="premium-heading mt-4 text-4xl text-school-navy sm:text-5xl">Privacy Policy</h1>
          <p className="mt-5 text-sm leading-7 text-slate-500">Last updated: September 2026</p>

          <div className="mt-10 space-y-8 text-[15px] leading-8 text-slate-600">
            <section><h2 className="premium-heading text-2xl text-school-navy">What this website does</h2><p className="mt-3">This website provides information about Soshanguve Engineering School Of Specialisation, its academic pathways, activities, achievements, partnerships and admissions information.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">Enquiries and applications</h2><p className="mt-3">The website does not operate an online database for applications or enquiries. When you use an enquiry or application form, the information you enter is used to prepare a message for you. You then choose whether to open Gmail or WhatsApp and manually send that message to the school.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">No automatic submission</h2><p className="mt-3">The website does not automatically submit, store or process your application or enquiry on the school&apos;s behalf. The school may receive and process information only after you manually send your message through the selected communication service.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">Third-party services</h2><p className="mt-3">Links and actions may open third-party services such as Gmail, WhatsApp, Google Maps and social media platforms. Those services have their own privacy policies and terms, which apply when you use them.</p></section>
            <section><h2 className="premium-heading text-2xl text-school-navy">Contact</h2><p className="mt-3">For questions about this website or how an enquiry is handled, please contact the school through the official contact details published on the Contact page.</p></section>
          </div>

          <div className="mt-10 border-t border-slate-100 pt-7"><Link href="/contact" className="font-semibold text-school-blue hover:text-school-navy">Go to Contact</Link></div>
        </div>
      </div>
    </main>
  )
}
