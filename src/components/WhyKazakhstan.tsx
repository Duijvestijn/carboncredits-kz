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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-kz-gold/50" />
      <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{children}</span>
    </div>
  );
}

export default function WhyKazakhstan() {
  const { lang } = useLang();
  const t = translations.whyKZ[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const advantagesRef = useRef<HTMLDivElement>(null);
  const isAdvantagesInView = useInView(advantagesRef, { once: true, margin: "-60px" });

  const advantages = [
    { title: t.advantage1Title, desc: t.advantage1Desc, icon: "ðŸŒ¾" },
    { title: t.advantage2Title, desc: t.advantage2Desc, icon: "ðŸ›ï¸" },
    { title: t.advantage3Title, desc: t.advantage3Desc, icon: "ðŸŒ" },
    { title: t.advantage4Title, desc: t.advantage4Desc, icon: "ðŸ’§" },
    { title: t.advantage5Title, desc: t.advantage5Desc, icon: "ðŸŒ±" },
    { title: t.advantage6Title, desc: t.advantage6Desc, icon: "âš¡" },
  ];

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  const regions = [
    { name: t.region1, color: "bg-kz-gold", x: "25%", y: "55%" },
    { name: t.region2, color: "bg-kz-green-light", x: "55%", y: "40%" },
    { name: t.region3, color: "bg-kz-sky", x: "15%", y: "40%" },
    { name: t.region4, color: "bg-kz-mist", x: "65%", y: "25%" },
    { name: t.region5, color: "bg-kz-sand", x: "50%", y: "65%" },
  ];

  return (
    <section id="why-kazakhstan" className="bg-kz-navy py-24 md:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.aerialGreen})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kz-navy via-kz-navy/95 to-kz-navy" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16">
          <motion.div variants={FADE_UP(0)} initial="hidden" animate={isHeaderInView ? "visible" : "hidden"}>
            <SectionLabel>{t.label}</SectionLabel>
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
            className="text-kz-gold font-serif text-xl italic mb-6"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            variants={FADE_UP(0.24)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-kz-sand/60 text-lg leading-relaxed"
          >
            {t.intro}
          </motion.p>
        </div>

        {/* Key stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={FADE_UP(i * 0.1)}
              initial="hidden"
              animate={isStatsInView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-kz-dark/60 border border-kz-gold/15 hover:border-kz-gold/30 transition-colors text-center group"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-kz-gold mb-2 group-hover:scale-105 transition-transform">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-kz-sand/50 text-xs leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Split: map visual + advantages grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Stylized map area */}
          <div className="relative">
            <h3 className="font-serif text-2xl text-white font-bold mb-6">{t.mapTitle}</h3>
            <div className="relative h-72 md:h-96 rounded-3xl bg-kz-dark/80 border border-white/[0.06] overflow-hidden">
              {/* Satellite image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${IMAGES.satellite})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-kz-dark/60 to-transparent" />

              {/* Kazakhstan silhouette placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  {/* Simplified Kazakhstan shape as dotted outline */}
                  <svg viewBox="0 0 400 300" className="w-full h-full opacity-20">
                    <path
                      d="M 20 120 L 40 80 L 100 60 L 160 50 L 200 40 L 260 50 L 320 60 L 370 80 L 390 120 L 380 160 L 340 200 L 300 230 L 260 240 L 200 250 L 140 240 L 80 220 L 40 180 Z"
                      fill="rgba(196,161,53,0.15)"
                      stroke="rgba(196,161,53,0.4)"
                      strokeWidth="1.5"
                      strokeDasharray="6 3"
                    />
                  </svg>

                  {/* Region dots */}
                  {regions.map((region, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isStatsInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.5 + i * 0.15 }}
                      className="absolute flex flex-col items-center gap-1"
                      style={{ left: region.x, top: region.y, transform: "translate(-50%, -50%)" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ repeat: Infinity, duration: 2.5 + i * 0.5, ease: "easeInOut" }}
                        className={`w-2.5 h-2.5 rounded-full ${region.color} shadow-lg`}
                      />
                      <span className="text-[8px] text-kz-sand/60 whitespace-nowrap font-medium max-w-20 text-center leading-tight">
                        {region.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Scale info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <div className="w-12 h-px bg-kz-gold/40" />
                <span className="text-kz-sand/30 text-[10px]">2.7M kmÂ² â€” 9th largest country</span>
              </div>
            </div>
          </div>

          {/* Advantages grid */}
          <div ref={advantagesRef}>
            <h3 className="font-serif text-2xl text-white font-bold mb-6">
              {lang === "kk" ? "Ð‘Ñ–Ñ€ÐµÐ³ÐµÐ¹ Ð°Ñ€Ñ‚Ñ‹Ò›ÑˆÑ‹Ð»Ñ‹Ò›Ñ‚Ð°Ñ€" : lang === "ru" ? "Ð£Ð½Ð¸ÐºÐ°Ð»ÑŒÐ½Ñ‹Ðµ Ð¿Ñ€ÐµÐ¸Ð¼ÑƒÑ‰ÐµÑÑ‚Ð²Ð°" : "Unique Advantages"}
            </h3>
            <div className="space-y-4">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  variants={FADE_UP(i * 0.08)}
                  initial="hidden"
                  animate={isAdvantagesInView ? "visible" : "hidden"}
                  className="flex gap-4 p-5 rounded-2xl bg-kz-dark/50 border border-white/[0.05] hover:border-kz-gold/20 transition-all hover:bg-kz-dark/70 group"
                >
                  <span className="text-xl flex-shrink-0 mt-0.5">{adv.icon}</span>
                  <div>
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-kz-gold transition-colors">{adv.title}</h4>
                    <p className="text-kz-sand/45 text-xs leading-relaxed">{adv.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
