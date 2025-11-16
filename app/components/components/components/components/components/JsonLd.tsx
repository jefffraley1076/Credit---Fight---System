export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Credit Fight System — Gold Edition",
    description:
      "A step-by-step system using federal consumer law to help you delete inaccurate negative items and take back control of your credit reports.",
    brand: {
      "@type": "Brand",
      name: "Credit Fight System",
    },
    offers: {
      "@type": "Offer",
      price: "76.00",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: "https://example.com", // TODO: replace with your real site URL
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
