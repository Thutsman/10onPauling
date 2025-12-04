export function generateHotelStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "10 On Pauling Hotel",
    description: "Award-winning luxury boutique hotel in Bulawayo, Zimbabwe. Offering premium accommodation, wildlife tours, volunteer experiences, and car rental services.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Pauling Road, Suburbs",
      addressLocality: "Bulawayo",
      addressCountry: "ZW",
    },
    telephone: "+263-12-345-6789",
    email: "info@10onpauling.com",
    url: "https://10onpauling.com",
    priceRange: "$$$",
    starRating: {
      "@type": "Rating",
      ratingValue: "5",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi" },
      { "@type": "LocationFeatureSpecification", name: "Parking" },
      { "@type": "LocationFeatureSpecification", name: "Restaurant" },
      { "@type": "LocationFeatureSpecification", name: "24/7 Concierge" },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.1569",
      longitude: "28.5892",
    },
  };
}

export function generateLocalBusinessStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "10 On Pauling Hotel",
    image: "https://10onpauling.com/images/og-image.jpg",
    "@id": "https://10onpauling.com",
    url: "https://10onpauling.com",
    telephone: "+263-12-345-6789",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Pauling Road, Suburbs",
      addressLocality: "Bulawayo",
      postalCode: "0000",
      addressCountry: "ZW",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-20.1569",
      longitude: "28.5892",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  };
}

export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

