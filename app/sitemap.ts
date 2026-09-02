import type { MetadataRoute } from "next"

const baseUrl = "https://sosha-automotive.org"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/academics",
    "/achievements",
    "/activities",
    "/partnerships",
    "/programs",
    "/innovations",
    "/documents",
    "/support-us",
    "/contact",
    "/apply",
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))
}
