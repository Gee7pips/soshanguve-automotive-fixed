import Script from "next/script"

const siteUrl = "https://www.sosha-automotive.org"
const siteName = "Soshanguve Engineering School Of Specialisation"

export function StructuredData() {
  const graph = [
    {
      "@type": "EducationalOrganization",
      "@id": `${siteUrl}/#organization`,
      name: siteName,
      alternateName: ["Soshanguve Engineering SOS", "Soshanguve Engineering School"],
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg` },
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FB_IMG_1737649315546.jpg-zXpGFpwslpfjZV4tHjellh5AzhDh2M.jpeg",
      description: "Soshanguve Engineering School Of Specialisation is a Gauteng School of Specialisation and technical high school in Soshanguve, Pretoria, focused on automotive, engineering, technology and practical STEM education.",
      telephone: "+27 12 797 2118",
      email: "soshanguve.technical@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1669 Block L",
        addressLocality: "Soshanguve",
        addressRegion: "Gauteng",
        postalCode: "0152",
        addressCountry: "ZA",
      },
      areaServed: ["Soshanguve", "Tshwane", "Gauteng", "South Africa"],
      foundingDate: "2019",
      educationalLevel: "Secondary education",
      knowsAbout: [
        "Automotive engineering",
        "Automotive technology",
        "Mechanical technology",
        "Civil technology",
        "Electrical technology",
        "Engineering education",
        "STEM education",
        "Technical education",
      ],
      sameAs: [
        "https://www.facebook.com/SoshaTechnical/",
        "https://www.instagram.com/technical_matrics",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteName,
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-ZA",
    },
  ]

  const structuredData = { "@context": "https://schema.org", "@graph": graph }

  return <Script id="structured-data" type="application/ld+json">{JSON.stringify(structuredData)}</Script>
}
