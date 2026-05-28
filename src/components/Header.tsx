"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLang, type Lang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

/** Inline SVG flag icons — no emoji, no external assets */
function LangFlag({ code }: { code: Lang }) {
  if (code === "kk") {
    // Kazakhstan: sky-blue field, yellow ornamental stripe on left, yellow sun
    return (
      <svg viewBox="0 0 20 14" width="18" height="13" className="rounded-[2px] flex-shrink-0">
        <rect width="20" height="14" fill="#00AFCA" />
        <rect width="1.4" height="14" fill="#FFD700" />
        {/* sun disc */}
        <circle cx="11" cy="7" r="2.8" fill="#FFD700" />
        {/* 8 sun rays */}
        {[0,45,90,135,180,225,270,315].map((deg) => (
          <line
            key={deg}
            x1={11 + Math.cos((deg * Math.PI) / 180) * 2.8}
            y1={7  + Math.sin((deg * Math.PI) / 180) * 2.8}
            x2={11 + Math.cos((deg * Math.PI) / 180) * 4.4}
            y2={7  + Math.sin((deg * Math.PI) / 180) * 4.4}
            stroke="#FFD700"
            strokeWidth="0.7"
          />
        ))}
      </svg>
    );
  }
  if (code === "ru") {
    // Russia: white / blue / red horizontal thirds
    return (
      <svg viewBox="0 0 20 14" width="18" height="13" className="rounded-[2px] flex-shrink-0">
        <rect width="20" height="14" fill="#D52B1E" />
        <rect width="20" height="9.33" fill="#003DA5" />
        <rect width="20" height="4.67" fill="#FFFFFF" />
      </svg>
    );
  }
  // English — UK Union Jack (simplified)
  return (
    <svg viewBox="0 0 20 14" width="18" height="13" className="rounded-[2px] flex-shrink-0">
      <rect width="20" height="14" fill="#012169" />
      {/* white X */}
      <line x1="0" y1="0" x2="20" y2="14" stroke="white" strokeWidth="3.2" />
      <line x1="20" y1="0" x2="0" y2="14" stroke="white" strokeWidth="3.2" />
      {/* red X (offset for saltire) */}
      <line x1="0" y1="0" x2="20" y2="14" stroke="#C8102E" strokeWidth="1.8" />
      <line x1="20" y1="0" x2="0" y2="14" stroke="#C8102E" strokeWidth="1.8" />
      {/* white cross */}
      <rect x="8.5" y="0" width="3" height="14" fill="white" />
      <rect x="0" y="5.5" width="20" height="3" fill="white" />
      {/* red cross */}
      <rect x="9" y="0" width="2" height="14" fill="#C8102E" />
      <rect x="0" y="6" width="20" height="2" fill="#C8102E" />
    </svg>
  );
}

const LANGS: { code: Lang; label: string }[] = [
  { code: "kk", label: "ҚАЗ" },
  { code: "ru", label: "РУС" },
  { code: "en", label: "ENG" },
];

export default function Header() {
  const { lang, setLang } = useLang();
  const t = translations.nav[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: t.credits, href: "#carbon-credits" },
    { label: t.whyKZ, href: "#why-kazakhstan" },
    { label: t.aralSea, href: "#aral-sea" },
    { label: t.article6, href: "#article-6" },
    { label: t.projects, href: "#projects" },
    { label: t.investment, href: "#investment" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-kz-dark/95 backdrop-blur-md border-b border-white/[0.06] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
          <div className="w-8 h-8 rounded-full bg-kz-gold/20 border border-kz-gold/40 flex items-center justify-center">
            <span className="text-kz-gold text-xs font-bold font-serif">C</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-kz-cream font-semibold text-sm leading-none tracking-wide">
              CarbonCredits
            </div>
            <div className="text-kz-gold text-[10px] tracking-[0.2em] uppercase leading-none mt-0.5">
              .kz
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs text-kz-sand/60 hover:text-kz-sand font-medium tracking-wide transition-colors uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Language switcher + CTA */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-0.5 bg-white/[0.04] border border-white/[0.08] rounded-full p-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-widest transition-all duration-200 ${
                  lang === l.code
                    ? "bg-kz-gold text-kz-dark shadow-sm"
                    : "text-kz-sand/40 hover:text-kz-sand/70"
                }`}
              >
                <LangFlag code={l.code} />
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-kz-gold hover:bg-kz-gold-light text-kz-dark text-xs font-bold rounded-full transition-colors tracking-wide"
          >
            {t.contact}
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span className={`block h-px w-5 bg-kz-sand transition-all ${mobileOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block h-px w-5 bg-kz-sand transition-all ${mobileOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-kz-dark/98 border-t border-white/[0.06] overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 text-kz-sand/70 hover:text-kz-sand font-medium border-b border-white/[0.05] last:border-0 transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
