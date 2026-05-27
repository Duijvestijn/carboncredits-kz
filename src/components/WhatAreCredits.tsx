"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";
import { IMAGES } from "@/lib/images";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

const FLOW_STEPS = [
  { icon: "ðŸŒ", color: "kz-green" },
  { icon: "ðŸ“‹", color: "kz-blue" },
  { icon: "âœ…", color: "kz-gold" },
  { icon: "ðŸŒ", color: "kz-mist" },
  { icon: "ðŸ”„", color: "kz-green" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-kz-gold/50" />
      <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{children}</span>
    </div>
  );
}

export default function WhatAreCredits() {
  const { lang } = useLang();
  const t = translations.credits[lang];

  const titleRef = useRef<HTMLDivElement>(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-80px" });

  const stepsRef = useRef<HTMLDivElement>(null);
  const isStepsInView = useInView(stepsRef, { once: true, margin: "-60px" });

  const steps = [
    { title: t.step1Title, desc: t.step1Desc },
    { title: t.step2Title, desc: t.step2Desc },
    { title: t.step3Title, desc: t.step3Desc },
    { title: t.step4Title, desc: t.step4Desc },
    { title: t.step5Title, desc: t.step5Desc },
  ];

  const creditTypes = [t.type1, t.type2, t.type3, t.type4, t.type5, t.type6];

  return (
    <section id="carbon-credits" className="bg-kz-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={titleRef} className="max-w-3xl mb-20">
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
          >
            <SectionLabel>{t.label}</SectionLabel>
          </motion.div>
          <motion.h2
            variants={FADE_UP(0.08)}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FADE_UP(0.16)}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className="text-kz-gold font-serif text-xl italic mb-6"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            variants={FADE_UP(0.24)}
            initial="hidden"
            animate={isTitleInView ? "visible" : "hidden"}
            className="text-kz-sand/60 text-lg leading-relaxed"
          >
            {t.intro}
          </motion.p>
        </div>

        {/* How it works â€” flow diagram */}
        <div ref={stepsRef} className="mb-24">
          <motion.h3
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isStepsInView ? "visible" : "hidden"}
            className="font-serif text-2xl text-white font-bold mb-10"
          >
            {t.howTitle}
          </motion.h3>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-kz-green/60 via-kz-gold/40 to-kz-green/20 hidden md:block" />

            <div className="space-y-0">
              {steps.map((step, i) => {
                const flowStep = FLOW_STEPS[i];
                return (
                  <motion.div
                    key={i}
                    variants={FADE_UP(i * 0.1)}
                    initial="hidden"
                    animate={isStepsInView ? "visible" : "hidden"}
                    className="flex gap-6 md:gap-10 py-6 group"
                  >
                    {/* Icon circle */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-12 h-12 rounded-full bg-kz-navy border border-kz-gold/20 flex items-center justify-center group-hover:border-kz-gold/50 transition-colors z-10 relative">
                        <span className="text-lg">{flowStep.icon}</span>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pb-6 border-b border-white/[0.05] last:border-0">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-serif text-3xl font-bold text-kz-gold/20">0{i + 1}</span>
                        <h4 className="font-serif text-lg font-semibold text-white group-hover:text-kz-gold transition-colors">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-kz-sand/50 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Credit types + Why it matters */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Credit types */}
          <div>
            <h3 className="font-serif text-2xl text-white font-bold mb-6">{t.typesTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {creditTypes.map((type) => (
                <span
                  key={type}
                  className="px-4 py-2 rounded-full bg-kz-green/10 border border-kz-green/20 text-kz-green-light text-sm font-medium hover:bg-kz-green/20 transition-colors cursor-default"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Why it matters */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-kz-gold/10 to-kz-gold/5 border border-kz-gold/20">
            <h3 className="font-serif text-2xl text-white font-bold mb-4">{t.whyMatters}</h3>
            <p className="text-kz-sand/60 leading-relaxed mb-4">{t.whyDesc}</p>
            {/* Visual accent */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-1">
                {["ðŸŒ±", "ðŸ’°", "ðŸŒ"].map((emoji) => (
                  <div key={emoji} className="w-8 h-8 rounded-full bg-kz-navy border border-kz-gold/20 flex items-center justify-center text-sm">
                    {emoji}
                  </div>
                ))}
              </div>
              <div className="w-px h-6 bg-kz-gold/20" />
              <span className="text-kz-gold text-sm font-medium">Nature Ã— Finance</span>
            </div>
          </div>
        </div>

        {/* Background image interlude */}
        <div className="mt-24 relative h-64 md:h-80 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.grassland})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-kz-dark/80 via-kz-dark/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-lg">
              <p className="font-serif text-2xl md:text-3xl italic text-white leading-snug">
                "Land transformed into living, breathing financial assets â€” while nature recovers."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
