"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function RegionalBenefits() {
  const { lang } = useLang();
  const t = translations.benefits[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-60px" });

  return (
    <section className="bg-kz-navy py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.ruralCommunity})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kz-navy via-kz-navy/95 to-kz-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <motion.div variants={FADE_UP(0)} initial="hidden" animate={isHeaderInView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-6 h-px bg-kz-gold/50" />
              <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{t.label}</span>
            </div>
          </motion.div>
          <motion.h2
            variants={FADE_UP(0.08)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FADE_UP(0.16)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-kz-gold font-serif text-xl italic"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Benefits grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              variants={FADE_UP(i * 0.07)}
              initial="hidden"
              animate={isGridInView ? "visible" : "hidden"}
              className="p-6 rounded-3xl bg-kz-dark/50 border border-white/[0.05] hover:border-kz-gold/20 hover:bg-kz-dark/70 transition-all group"
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h3 className="font-serif text-base font-bold text-white mb-2 group-hover:text-kz-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-kz-sand/45 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Full-width image quote */}
        <div className="mt-16 relative h-56 md:h-72 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.waterRestoration})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kz-dark/85 via-kz-dark/50 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-lg">
              <p className="font-serif text-xl md:text-2xl italic text-white leading-snug mb-3">
                {lang === "kk"
                  ? '"ÐšÐ°Ñ€Ð±Ð¾Ð½ Ð¶Ð¾Ð±Ð°Ð»Ð°Ñ€Ñ‹ â€” Ð±Ò±Ð» Ð¶Ð°Ð¹ ÑÐºÐ¾Ð»Ð¾Ð³Ð¸Ñ ÐµÐ¼ÐµÑ. Ð‘Ò±Ð» Ð°ÑƒÑ‹Ð»Ð´Ñ‹Ò› Ð°Ð¹Ð¼Ð°Ò›Ñ‚Ð°Ñ€Ð´Ñ‹Ò£ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸ÐºÐ°Ð»Ñ‹Ò› Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸ÑÑÑ‹."'
                  : lang === "ru"
                  ? '"ÐšÐ°Ñ€Ð±Ð¾Ð½Ð¾Ð²Ñ‹Ðµ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹ â€” ÑÑ‚Ð¾ Ð½Ðµ Ð¿Ñ€Ð¾ÑÑ‚Ð¾ ÑÐºÐ¾Ð»Ð¾Ð³Ð¸Ñ. Ð­Ñ‚Ð¾ ÑÐºÐ¾Ð½Ð¾Ð¼Ð¸Ñ‡ÐµÑÐºÐ°Ñ Ñ‚Ñ€Ð°Ð½ÑÑ„Ð¾Ñ€Ð¼Ð°Ñ†Ð¸Ñ ÑÐµÐ»ÑŒÑÐºÐ¸Ñ… Ñ€ÐµÐ³Ð¸Ð¾Ð½Ð¾Ð²."'
                  : '"Carbon projects are not just ecology. They are the economic transformation of rural regions."'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
