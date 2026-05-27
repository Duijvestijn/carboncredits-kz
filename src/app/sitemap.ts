import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://carboncredits.kz";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/#carbon-credits`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#why-kazakhstan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#aral-sea`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/#article-6`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#investment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
