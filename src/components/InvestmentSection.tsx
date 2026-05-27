"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function InvestmentSection() {
  const { lang } = useLang();
  const t = translations.investment[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-60px" });

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  const buyers = [t.buyer1, t.buyer2, t.buyer3, t.buyer4, t.buyer5];

  return (
    <section id="investment" className="bg-kz-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle financial background */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.financialPremium})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kz-dark via-kz-dark/97 to-kz-dark" />

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
            className="text-kz-gold font-serif text-xl italic mb-4"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Market stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={FADE_UP(i * 0.1)}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-kz-navy border border-kz-gold/15 hover:border-kz-gold/30 transition-colors text-center"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-kz-gold mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-kz-sand/45 text-xs leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Two column: market desc + buyers */}
        <div ref={contentRef} className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Market growth */}
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
          >
            <h3 className="font-serif text-2xl text-white font-bold mb-4">{t.marketTitle}</h3>
            <p className="text-kz-sand/55 leading-relaxed mb-6">{t.marketDesc}</p>

            {/* Visual bar chart */}
            <div className="space-y-3">
              {[
                { year: "2023", width: "30%", value: "$2B" },
                { year: "2025", width: "50%", value: "$15B" },
                { year: "2027", width: "72%", value: "$80B" },
                { year: "2030", width: "100%", value: "$250B" },
              ].map((bar) => (
                <div key={bar.year} className="flex items-center gap-3">
                  <span className="text-kz-sand/40 text-xs w-8 flex-shrink-0">{bar.year}</span>
                  <div className="flex-1 h-5 bg-kz-dark/60 rounded-full overflow-hidden border border-white/[0.05]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isContentInView ? { width: bar.width } : {}}
                      transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-kz-green to-kz-gold rounded-full"
                    />
                  </div>
                  <span className="text-kz-gold text-xs font-mono flex-shrink-0">{bar.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Who buys */}
          <motion.div
            variants={FADE_UP(0.15)}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
          >
            <h3 className="font-serif text-2xl text-white font-bold mb-4">{t.buyersTitle}</h3>
            <div className="space-y-3">
              {buyers.map((buyer, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-kz-navy border border-white/[0.05]">
                  <span className="text-kz-gold text-sm flex-shrink-0 mt-0.5">âœ“</span>
                  <span className="text-kz-sand/60 text-sm">{buyer}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Kazakhstan advantage callout */}
        <div className="relative p-8 md:p-12 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-15"
            style={{ backgroundImage: `url(${IMAGES.heroSteppe})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-kz-gold/20 to-kz-dark/95" />
          <div className="relative z-10">
            <h3 className="font-serif text-2xl md:text-3xl text-white font-bold mb-4">{t.kazTitle}</h3>
            <p className="text-kz-sand/65 leading-relaxed max-w-3xl">{t.kazDesc}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Verra VCS", "Gold Standard", "Article 6", "NDC Ready"].map((badge) => (
                <span
                  key={badge}
                  className="px-4 py-2 rounded-full bg-kz-gold/15 border border-kz-gold/30 text-kz-gold text-xs font-bold tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
