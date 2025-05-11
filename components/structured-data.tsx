import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Soshanguve Automotive School of Specialisation",
    alternateName: "Soshanguve Automotive",
    url: "https://www.soshanguve-engineering.edu.za",
    logo: "https://www.soshanguve-engineering.edu.za/logo.png",
    sameAs: [
      "https://www.facebook.com/SoshanguveEngineering",
      "https://twitter.com/SoshanguveEng",
      "https://www.linkedin.com/company/soshanguve-engineering-school",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "1669 Block L",
      addressLocality: "Soshanguve",
      addressRegion: "Gauteng",
      postalCode: "0152",
      addressCountry: "ZA",
    },
    telephone: "+27 12 797 2118",
    email: "info@soshanguve-engineering.edu.za",
    description:
      "Soshanguve Engineering School of Specialisation is a leading institution in automotive and engineering education, empowering future innovators and shaping tomorrow's leaders.",
    areaServed: "Tshwane",
    foundingDate: "2019",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    alumni: {
      "@type": "QuantitativeValue",
      value: "1000+",
    },
  }

  return (
    <Script id="structured-data" type="application/ld+json">
      {JSON.stringify(structuredData)}
    </Script>
  )
}

