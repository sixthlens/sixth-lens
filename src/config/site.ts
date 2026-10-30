export const siteConfig = {
  name: "Sixth Lens",
  legalName: "Sixth Lens Technology",
  description: "Doha-based digital studio serving businesses across Qatar, the GCC and international markets with connected web, mobile, CRM, cloud, marketing and AI systems.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://sixthlense.com",
  email: "hello@sixthlense.com",
  phoneDisplay: "+974 3031 3046",
  phoneHref: "+97430313046",
  whatsappUrl: "https://wa.me/97430313046",
  linkedinUrl: "https://www.linkedin.com/company/sixth-lens/?viewAsMember=true",
  calendlyUrl: "https://calendly.com/shoaibintech",
  googleBusinessUrl: "https://share.google/bpJTBIXtt7XR1mXzq",
  googleKnowledgeUrl: "https://www.google.com/search?kgmid=/g/11p2dw6732",
  location: "Doha, Qatar",
} as const;

export const serviceAreas = [
  { "@type": "Country", name: "Qatar" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Saudi Arabia" },
  { "@type": "Country", name: "Bahrain" },
  { "@type": "Country", name: "Kuwait" },
  { "@type": "Country", name: "Oman" },
  { "@type": "Place", name: "International markets" },
] as const;
