import type { MetadataRoute } from "next"

const baseUrl = "https://sosha-automotive.org"
const lastModified = new Date()

const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/programs", priority: 0.95, changeFrequency: "weekly" },
  { path: "/academics", priority: 0.95, changeFrequency: "weekly" },
  { path: "/apply", priority: 0.95, changeFrequency: "weekly" },
  { path: "/innovations", priority: 0.9, changeFrequency: "weekly" },
  { path: "/achievements", priority: 0.9, changeFrequency: "weekly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: "/activities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/partnerships", priority: 0.8, changeFrequency: "monthly" },
  { path: "/documents", priority: 0.8, changeFrequency: "monthly" },
  { path: "/support-us", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
