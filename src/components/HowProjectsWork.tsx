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

export default function HowProjectsWork() {
  const { lang } = useLang();
  const t = translations.howItWorks[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const stepsRef = useRef<HTMLDivElement>(null);
  const isStepsInView = useInView(stepsRef, { once: true, margin: "-40px" });

  const steps = [
    t.step1, t.step2, t.step3, t.step4, t.step5, t.step6, t.step7, t.step8, t.step9,
  ];

  const colors = [
    "from-kz-blue/40 to-kz-navy",
    "from-kz-green/20 to-kz-navy",
    "from-kz-blue/30 to-kz-navy",
    "from-kz-gold/15 to-kz-navy",
    "from-kz-green/25 to-kz-navy",
    "from-kz-blue/20 to-kz-navy",
    "from-kz-gold/20 to-kz-navy",
    "from-kz-gold/25 to-kz-navy",
    "from-kz-green/20 to-kz-navy",
  ];

  return (
    <section className="bg-kz-navy py-24 md:py-32 relative overflow-hidden">
      {/* Background image subtle */}
      <div
        className="absolute inset-0 opacity-[0.04] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.farmlandAerial})` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-20 text-center mx-auto">
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-6 h-px bg-kz-gold/50" />
            <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{t.label}</span>
            <span className="w-6 h-px bg-kz-gold/50" />
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
            className="text-kz-sand/55 text-lg leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Steps grid */}
        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={FADE_UP(i * 0.07)}
              initial="hidden"
              animate={isStepsInView ? "visible" : "hidden"}
              className={`relative p-6 rounded-3xl bg-gradient-to-br ${colors[i]} border border-white/[0.05] hover:border-kz-gold/20 transition-all group`}
            >
              {/* Step number */}
              <div className="flex items-center gap-3 mb-4">
                <span className="font-serif text-4xl font-bold text-kz-gold/15 leading-none">{step.n}</span>
              </div>
              {/* Title */}
              <h3 className="font-serif text-base font-bold text-white mb-2 group-hover:text-kz-gold transition-colors">
                {step.title}
              </h3>
              {/* Description */}
              <p className="text-kz-sand/45 text-xs leading-relaxed">{step.desc}</p>

              {/* Arrow connector for non-last items */}
              {i < steps.length - 1 && (
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-kz-gold/20 text-xl hidden lg:block">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom link — educational, not contact-driven */}
        <div className="mt-16 text-center">
          <a
            href="#aral-sea"
            className="inline-flex items-center gap-2 text-kz-gold/70 hover:text-kz-gold text-sm font-medium transition-colors"
          >
            {t.link}
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
