import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "Plastic Recycling Machinery",
  tagline: "Top-quality Plastic Recycling Machine",
  description: "Discover top-of-the-line plastic recycling machines. Our durable and efficient equipment is designed to maximize your recycling capabilities and sustainability goals",
  description_short: "Explore our wide range of machinery and get expert advice to optimize your recycling processes.",
  url: "https://www.recyclemachine.net",
  author: "Recycling Machinery",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Top-quality Plastic Recycling Machine`,
  description: "Discover top-of-the-line plastic recycling machines. Our durable and efficient equipment is designed to maximize your recycling capabilities and sustainability goals. Start exploring now!",
  image: ogImageSrc,
};
