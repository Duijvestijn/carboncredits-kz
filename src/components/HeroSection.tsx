"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  }),
};

export default function HeroSection() {
  const { lang } = useLang();
  const t = translations.hero[lang];
  const nav = translations.nav[lang];
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const stats = [
    { value: t.stat1Value, label: t.stat1Label },
    { value: t.stat2Value, label: t.stat2Label },
    { value: t.stat3Value, label: t.stat3Label },
    { value: t.stat4Value, label: t.stat4Label },
  ];

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ y: bgY, willChange: "transform" }}
        className="absolute inset-0 scale-110"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.heroSteppe})` }}
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-kz-dark/70 via-kz-dark/40 to-kz-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-kz-dark/60 via-transparent to-kz-dark/30" />
        {/* Golden atmospheric haze */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-kz-dark to-transparent" />
      </motion.div>

      {/* Cinematic grain overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity, willChange: "transform, opacity" }}
        className="relative z-10 text-center px-6 max-w-6xl mx-auto pt-24"
      >
        {/* Label */}
        <motion.div
          custom={0}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="w-8 h-px bg-kz-gold/60" />
          <span className="text-xs tracking-[0.3em] uppercase text-kz-gold font-medium">
            {t.label}
          </span>
          <span className="w-8 h-px bg-kz-gold/60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          custom={1}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] text-white mb-4"
        >
          {t.titleLine1}
        </motion.h1>
        <motion.p
          custom={2}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] italic text-kz-gold mb-8"
        >
          {t.titleLine2}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={3}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="text-kz-sand/70 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-10"
        >
          {t.description}
        </motion.p>

        {/* CTA buttons — two clear actions */}
        <motion.div
          custom={4}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <a
            href="#carbon-credits"
            className="px-7 py-3.5 rounded-xl text-sm font-semibold bg-kz-gold hover:bg-kz-gold-light text-kz-dark transition-colors shadow-lg shadow-kz-gold/20"
          >
            {t.btn1}
          </a>
          <a
            href="#projects"
            className="px-7 py-3.5 rounded-xl text-sm font-medium bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.12] text-kz-sand/80 hover:text-kz-sand backdrop-blur-sm transition-colors"
          >
            {t.btn3}
          </a>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          custom={5}
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden backdrop-blur-sm border border-white/[0.08]"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-kz-dark/60 px-6 py-5 text-center"
            >
              <div className="font-serif text-2xl md:text-3xl font-bold text-kz-gold mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-kz-sand/50 text-xs leading-snug">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="mt-12 flex flex-col items-center gap-2"
        >
          <span className="text-kz-sand/30 text-xs tracking-widest uppercase">{t.scroll}</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-8 bg-gradient-to-b from-kz-gold/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
