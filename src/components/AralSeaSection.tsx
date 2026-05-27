"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";
import AnimatedCounter from "@/components/AnimatedCounter";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

export default function AralSeaSection() {
  const { lang } = useLang();
  const t = translations.aralSea[lang];

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const verraRef = useRef<HTMLDivElement>(null);
  const isVerraInView = useInView(verraRef, { once: true, margin: "-60px" });

  const impactRef = useRef<HTMLDivElement>(null);
  const isImpactInView = useInView(impactRef, { once: true, margin: "-60px" });

  const impacts = [
    { value: t.impact1Value, label: t.impact1Label },
    { value: t.impact2Value, label: t.impact2Label },
    { value: t.impact3Value, label: t.impact3Label },
    { value: t.impact4Value, label: t.impact4Label },
  ];

  return (
    <section id="aral-sea" ref={sectionRef} className="relative bg-kz-dark py-0 overflow-hidden">
      {/* Cinematic full-width image banner */}
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.aralDry})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-kz-dark/30 via-kz-dark/50 to-kz-dark" />
          <div className="absolute inset-0 bg-gradient-to-r from-kz-dark/60 to-transparent" />
        </motion.div>

        {/* Overlay text */}
        <div className="absolute inset-0 flex items-center px-6 md:px-16">
          <div className="max-w-2xl">
            <div ref={headerRef}>
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
                variants={FADE_UP(0.1)}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
                className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
              >
                {t.title}
              </motion.h2>
              <motion.p
                variants={FADE_UP(0.2)}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
                className="text-kz-sand/70 text-lg italic font-serif"
              >
                {t.subtitle}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Intro paragraph */}
        <div className="max-w-3xl mb-16">
          <p className="text-kz-sand/65 text-lg leading-relaxed">{t.intro}</p>
        </div>

        {/* Verra registration — FLAGSHIP CALLOUT */}
        <div
          ref={verraRef}
          className="relative rounded-3xl overflow-hidden mb-16"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${IMAGES.saxaulRestoration})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-kz-gold/20 via-kz-dark/90 to-kz-dark/95" />
          <div className="relative z-10 p-8 md:p-12">
            <motion.div
              variants={FADE_UP(0)}
              initial="hidden"
              animate={isVerraInView ? "visible" : "hidden"}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kz-gold/15 border border-kz-gold/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-kz-gold animate-pulse" />
                <span className="text-kz-gold text-xs font-bold tracking-widest uppercase">Verra VCS Certified</span>
              </div>
            </motion.div>
            <motion.h3
              variants={FADE_UP(0.1)}
              initial="hidden"
              animate={isVerraInView ? "visible" : "hidden"}
              className="font-serif text-2xl md:text-4xl font-bold text-white mb-4"
            >
              {t.verraTitle}
            </motion.h3>
            <motion.p
              variants={FADE_UP(0.2)}
              initial="hidden"
              animate={isVerraInView ? "visible" : "hidden"}
              className="text-kz-sand/65 leading-relaxed mb-8 max-w-2xl"
            >
              {t.verraDesc}
            </motion.p>

            {/* What is Verra box */}
            <motion.div
              variants={FADE_UP(0.3)}
              initial="hidden"
              animate={isVerraInView ? "visible" : "hidden"}
              className="p-6 rounded-2xl bg-kz-dark/60 border border-white/10 max-w-2xl"
            >
              <h4 className="text-kz-gold font-semibold mb-2 text-sm tracking-wide">{t.whatIsVerra}</h4>
              <p className="text-kz-sand/55 text-sm leading-relaxed">{t.verraExplain}</p>
            </motion.div>
          </div>
        </div>

        {/* Two-column: saxaul + video placeholder */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Saxaul info */}
          <div className="p-8 rounded-3xl bg-kz-green/[0.08] border border-kz-green/20">
            <div className="w-10 h-10 mb-4 text-kz-green-light/70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
              </svg>
            </div>
            <h3 className="font-serif text-xl font-bold text-white mb-3">{t.saxaulTitle}</h3>
            <p className="text-kz-sand/60 text-sm leading-relaxed">{t.saxaulDesc}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs text-kz-green-light font-medium font-mono">Haloxylon ammodendron</span>
              <span className="text-kz-sand/20">·</span>
              <span className="text-xs text-kz-sand/40">IUCN recognized</span>
            </div>
          </div>

          {/* Video placeholder */}
          <div className="relative rounded-3xl overflow-hidden bg-kz-navy border border-white/[0.06] min-h-[200px] flex items-center justify-center group cursor-default">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity"
              style={{ backgroundImage: `url(${IMAGES.saxaulRestoration})` }}
            />
            <div className="relative z-10 text-center p-8">
              <div className="w-14 h-14 rounded-full bg-kz-gold/20 border border-kz-gold/40 flex items-center justify-center mx-auto mb-4">
                <svg className="w-5 h-5 text-kz-gold ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-kz-sand/40 text-xs leading-relaxed">{t.videoPlaceholder}</p>
            </div>
          </div>
        </div>

        {/* Impact metrics */}
        <div ref={impactRef}>
          <h3 className="font-serif text-2xl text-white font-bold mb-8">{t.impactTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impacts.map((imp, i) => (
              <motion.div
                key={i}
                variants={FADE_UP(i * 0.1)}
                initial="hidden"
                animate={isImpactInView ? "visible" : "hidden"}
                className="p-6 rounded-2xl bg-kz-navy border border-kz-gold/10 hover:border-kz-gold/25 transition-colors text-center"
              >
                <div className="font-serif text-2xl md:text-3xl font-bold text-kz-gold mb-2">
                  {/[0-9]/.test(imp.value) ? <AnimatedCounter value={imp.value} /> : imp.value}
                </div>
                <div className="text-kz-sand/50 text-xs">{imp.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Restoration image interlude */}
        <div className="mt-16 relative h-64 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.treePlanting})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kz-dark/85 to-kz-dark/30" />
          <div className="absolute inset-0 flex items-center px-10">
            <blockquote className="font-serif text-xl md:text-2xl italic text-white max-w-xl leading-relaxed">
              "Restoring the Aral Sea is not just an ecological mission — it is a model for how nature finance can heal the world's most damaged landscapes."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
