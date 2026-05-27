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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-kz-gold/50" />
      <span className="text-xs tracking-[0.25em] uppercase text-kz-gold/80 font-medium">{children}</span>
    </div>
  );
}

export default function Article6Section() {
  const { lang } = useLang();
  const t = translations.article6[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-60px" });

  const benefitsRef = useRef<HTMLDivElement>(null);
  const isBenefitsInView = useInView(benefitsRef, { once: true, margin: "-60px" });

  const benefits = [
    t.benefit1, t.benefit2, t.benefit3, t.benefit4, t.benefit5, t.benefit6,
  ];

  return (
    <section id="article-6" className="bg-kz-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url(${IMAGES.satellite})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

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

        {/* NDC explanation */}
        <div ref={contentRef} className="grid md:grid-cols-3 gap-6 mb-16">
          {/* NDC box */}
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="md:col-span-1 p-7 rounded-3xl bg-kz-blue/30 border border-kz-sky/20"
          >
            <div className="w-10 h-10 mb-4 text-kz-sky/70">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-3">{t.ndcTitle}</h3>
            <p className="text-kz-sand/55 text-sm leading-relaxed">{t.ndcDesc}</p>
          </motion.div>

          {/* Article 6.2 */}
          <motion.div
            variants={FADE_UP(0.1)}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="p-7 rounded-3xl bg-kz-green/10 border border-kz-green/20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kz-green/20 border border-kz-green/30 mb-4">
              <span className="text-kz-green-light text-xs font-bold">6.2</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-3">{t.art61Title}</h3>
            <p className="text-kz-sand/55 text-sm leading-relaxed">{t.art61Desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-kz-green-light">
              <span className="w-px h-3 bg-kz-green-light/40 flex-shrink-0" />
              <span>{lang === "kk" ? "Екіжақты механизм" : lang === "ru" ? "Двусторонний механизм" : "Bilateral mechanism"}</span>
            </div>
          </motion.div>

          {/* Article 6.4 */}
          <motion.div
            variants={FADE_UP(0.2)}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="p-7 rounded-3xl bg-kz-gold/[0.07] border border-kz-gold/20"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kz-gold/15 border border-kz-gold/30 mb-4">
              <span className="text-kz-gold text-xs font-bold">6.4</span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-3">{t.art62Title}</h3>
            <p className="text-kz-sand/55 text-sm leading-relaxed">{t.art62Desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-kz-gold">
              
              <span>{lang === "kk" ? "Ð‘Ò°Ò° Ð±Ð°Ò›Ñ‹Ð»Ð°ÑƒÑ‹" : lang === "ru" ? "ÐŸÐ¾Ð´ ÐºÐ¾Ð½Ñ‚Ñ€Ð¾Ð»ÐµÐ¼ ÐžÐžÐ" : "UN supervised"}</span>
            </div>
          </motion.div>
        </div>

        {/* Flow diagram */}
        <div className="mb-16 p-8 rounded-3xl bg-kz-navy border border-white/[0.06]">
          <h3 className="font-serif text-xl text-white font-bold mb-8 text-center">{t.art6Title}</h3>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-0">
            {[
              { label: lang === "kk" ? "Жоба ел" : lang === "ru" ? "Страна-хозяин" : "Host Country", code: "KZ" },
              { label: "→", code: null },
              { label: lang === "kk" ? "Жоба іске асыру" : lang === "ru" ? "Реализация проекта" : "Project Implemented", code: "PR" },
              { label: "→", code: null },
              { label: "Verra / GS", code: "VS" },
              { label: "→", code: null },
              { label: lang === "kk" ? "Несиелер сатылады" : lang === "ru" ? "Кредиты проданы" : "Credits Sold", code: "CR" },
              { label: "→", code: null },
              { label: lang === "kk" ? "NDC мақсаттары" : lang === "ru" ? "Цели NDC" : "NDC Targets", code: "ND" },
            ].map((item, i) =>
              item.code ? (
                <div key={i} className="flex flex-col items-center gap-2 px-3">
                  <div className="w-12 h-12 rounded-full bg-kz-dark/70 border border-kz-gold/15 flex items-center justify-center">
                    <span className="text-[10px] font-mono font-bold text-kz-gold/70">{item.code}</span>
                  </div>
                  <span className="text-kz-sand/50 text-[10px] text-center max-w-16 leading-tight">{item.label}</span>
                </div>
              ) : (
                <div key={i} className="text-kz-gold/30 text-xl font-light hidden md:block">→</div>
              )
            )}
          </div>
        </div>

        {/* Benefits for Kazakhstan */}
        <div ref={benefitsRef}>
          <motion.h3
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isBenefitsInView ? "visible" : "hidden"}
            className="font-serif text-2xl text-white font-bold mb-6"
          >
            {t.benefitsTitle}
          </motion.h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={FADE_UP(i * 0.08)}
                initial="hidden"
                animate={isBenefitsInView ? "visible" : "hidden"}
                className="flex items-start gap-3 p-4 rounded-xl bg-kz-navy/50 border border-white/[0.05] hover:border-kz-gold/20 transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-kz-gold flex-shrink-0 mt-2" />
                <span className="text-kz-sand/65 text-sm leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
