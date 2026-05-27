"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function ProjectTypes() {
  const { lang } = useLang();
  const t = translations.projectTypes[lang];
  const [openId, setOpenId] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: "-60px" });

  const types = t.types;

  return (
    <section id="projects" className="bg-kz-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-px bg-kz-gold/50" />
            <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{t.label}</span>
          </motion.div>
          <motion.h2
            variants={FADE_UP(0.08)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight"
          >
            {t.title}
          </motion.h2>
        </div>

        {/* Project type cards â€” expandable */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {types.map((type, i) => {
            const isOpen = openId === type.id;
            return (
              <motion.div
                key={type.id}
                variants={FADE_UP(i * 0.07)}
                initial="hidden"
                animate={isGridInView ? "visible" : "hidden"}
                className={`rounded-3xl border cursor-pointer transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-kz-navy border-kz-gold/30 col-span-1 sm:col-span-2"
                    : "bg-kz-navy border-white/[0.06] hover:border-kz-gold/20"
                }`}
                onClick={() => setOpenId(isOpen ? null : type.id)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl">{type.icon}</span>
                    <span className={`text-kz-gold/40 transition-transform text-lg ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-white mb-2">{type.title}</h3>
                  <p className="text-kz-sand/45 text-xs leading-relaxed line-clamp-2">{type.desc}</p>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 pt-4 border-t border-white/[0.06] space-y-3">
                          <p className="text-kz-sand/55 text-xs leading-relaxed">{type.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 rounded-full bg-kz-green/10 border border-kz-green/20 text-kz-green-light text-xs">
                              {type.impact}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-kz-gold/10 border border-kz-gold/20 text-kz-gold text-xs">
                              {type.revenue}
                            </span>
                          </div>
                          <a
                            href="#contact"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs text-kz-gold hover:text-kz-gold-light transition-colors font-medium"
                          >
                            {lang === "kk" ? "Ð¢Ð¾Ð»Ñ‹Ò“Ñ‹Ñ€Ð°Ò› Ð±Ñ–Ð»Ñ–Ò£Ñ–Ð·" : lang === "ru" ? "Ð£Ð·Ð½Ð°Ñ‚ÑŒ Ð¿Ð¾Ð´Ñ€Ð¾Ð±Ð½ÐµÐµ" : "Learn more"} â†’
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
