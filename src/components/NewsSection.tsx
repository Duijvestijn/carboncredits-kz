"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

/** Maps stable tagId to the most relevant on-page section */
const TAG_HREF: Record<string, string> = {
  project:    "#aral-sea",
  market:     "#carbon-credits",
  policy:     "#article-6",
  research:   "#why-kazakhstan",
  investment: "#investment",
  verra:      "#aral-sea",
};

const TAG_COLORS: Record<string, string> = {
  project:    "bg-kz-green/15 border-kz-green/25 text-kz-green-light",
  market:     "bg-kz-gold/15 border-kz-gold/25 text-kz-gold",
  policy:     "bg-kz-blue/30 border-kz-mist/25 text-kz-mist",
  research:   "bg-kz-navy border-white/10 text-kz-sand/60",
  investment: "bg-kz-gold/15 border-kz-gold/25 text-kz-gold",
  verra:      "bg-kz-green/15 border-kz-green/25 text-kz-green-light",
};

export default function NewsSection() {
  const { lang } = useLang();
  const t = translations.news[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-kz-navy py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-14">
          <div>
            <motion.div variants={FADE_UP(0)} initial="hidden" animate={isHeaderInView ? "visible" : "hidden"}>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-kz-gold/50" />
                <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{t.label}</span>
              </div>
            </motion.div>
            <motion.h2
              variants={FADE_UP(0.08)}
              initial="hidden"
              animate={isHeaderInView ? "visible" : "hidden"}
              className="font-serif text-3xl md:text-5xl font-bold text-white"
            >
              {t.title}
            </motion.h2>
          </div>
        </div>

        {/* News grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.items.map((item, i) => {
            const tagClass = TAG_COLORS[item.tagId] || "bg-kz-navy border-white/10 text-kz-sand/60";
            const href = TAG_HREF[item.tagId] || "#carbon-credits";
            const isFeatured = i === 0;
            return (
              <motion.article
                key={i}
                variants={FADE_UP(i * 0.08)}
                initial="hidden"
                animate={isGridInView ? "visible" : "hidden"}
                className={`group rounded-3xl bg-kz-dark border border-white/[0.05] hover:border-kz-gold/20 transition-all overflow-hidden ${
                  isFeatured ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <a href={href} className="block p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full border text-[10px] font-bold tracking-wide uppercase ${tagClass}`}>
                      {item.tag}
                    </span>
                    <span className="text-kz-sand/30 text-xs">{item.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white mb-3 group-hover:text-kz-gold transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-kz-sand/45 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <span className="text-kz-gold/60 text-xs font-medium group-hover:text-kz-gold transition-colors">
                    {t.readMore} →
                  </span>
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
