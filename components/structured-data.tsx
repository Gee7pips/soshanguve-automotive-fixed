import Script from "next/script"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Soshanguve Engineering School Of Specialisation",
    alternateName: "Soshanguve Engineering School Of Specialisation",
    url: "https://sosha-automotive.org",
    logo: "https://sosha-automotive.org/icon.svg",
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
    email: "soshanguve.technical@gmail.com",
    description: "Soshanguve Engineering School Of Specialisation empowers future innovators through engineering and technical education.",
    areaServed: "Tshwane",
    foundingDate: "2019",
  }

  return <Script id="structured-data" type="application/ld+json">{JSON.stringify(structuredData)}</Script>
}
