import type { MetadataRoute } from "next";

const BASE = "https://carboncredits.kz";
const LANGS = ["en", "ru", "kk"] as const;

/** Use a fixed date reflecting latest meaningful content update */
const LAST_MODIFIED = new Date("2026-05-28");

interface SitemapSection {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const SECTIONS: SitemapSection[] = [
  { path: "",            priority: 1.0,  changeFrequency: "weekly"  },
  { path: "/aral-sea",  priority: 0.9,  changeFrequency: "monthly" },
  { path: "/article-6", priority: 0.85, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    // Root redirect — lower priority, crawlers follow to /en
    {
      url: BASE,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];

  for (const lang of LANGS) {
    for (const section of SECTIONS) {
      entries.push({
        url: `${BASE}/${lang}${section.path}`,
        lastModified: LAST_MODIFIED,
        changeFrequency: section.changeFrequency,
        // English pages get full priority; other languages slightly lower
        priority: lang === "en" ? section.priority : section.priority * 0.9,
      });
    }
  }

  return entries;
}
