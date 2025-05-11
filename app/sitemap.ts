import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.soshanguve-automotive.edu.za"

  const routes = [
    "",
    "/about",
    "/academics",
    "/achievements",
    "/activities",
    "/partnerships",
    "/programs",
    "/documents",
    "/support-us",
    "/contact",
    "/apply",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routes
}

