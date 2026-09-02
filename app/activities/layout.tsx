import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Student Activities & Campus Life",
  description: "Discover student activities, campus life, competitions and practical experiences at Soshanguve Engineering School Of Specialisation in Soshanguve, Pretoria.",
  keywords: ["Soshanguve school activities", "technical school campus life", "engineering student activities", "Soshanguve STEM competitions", "Pretoria technical school"],
  alternates: { canonical: "https://sosha-automotive.org/activities" },
}
export default function ActivitiesLayout({ children }: { children: React.ReactNode }) { return children }
