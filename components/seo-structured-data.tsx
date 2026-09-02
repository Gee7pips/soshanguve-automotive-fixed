import Script from "next/script"

type BreadcrumbItem = {
  name: string
  path: string
}

type SeoStructuredDataProps = {
  title: string
  description: string
  path: string
  breadcrumbs: BreadcrumbItem[]
}

const siteUrl = "https://sosha-automotive.org"
const siteName = "Soshanguve Engineering School Of Specialisation"

export function SeoStructuredData({ title, description, path, breadcrumbs }: SeoStructuredDataProps) {
  const items = breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteUrl}${item.path}`,
  }))

  const graph = [
    {
      "@type": "WebPage",
      "@id": `${siteUrl}${path}#webpage`,
      url: `${siteUrl}${path}`,
      name: title,
      description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
      breadcrumb: { "@id": `${siteUrl}${path}#breadcrumb` },
      inLanguage: "en-ZA",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${siteUrl}${path}#breadcrumb`,
      itemListElement: items,
    },
  ]

  const structuredData = { "@context": "https://schema.org", "@graph": graph }

  return <Script id={`seo-structured-data-${path.replace(/\W+/g, "-")}`} type="application/ld+json">{JSON.stringify(structuredData)}</Script>
}

export const seoSiteName = siteName
