"use client";

import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const t = translations.footer[lang];
  const nav = translations.nav[lang];

  return (
    <footer className="bg-kz-dark border-t border-white/[0.06] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-kz-gold/20 border border-kz-gold/40 flex items-center justify-center">
                <span className="text-kz-gold font-bold font-serif">C</span>
              </div>
              <div>
                <div className="text-kz-cream font-semibold leading-none">CarbonCredits.kz</div>
                <div className="text-kz-gold/60 text-xs tracking-widest mt-0.5">
                  {t.tagline}
                </div>
              </div>
            </div>
            <p className="text-kz-sand/40 text-xs leading-relaxed max-w-sm">
              {t.disclaimer}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-kz-sand text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.links}</h4>
            <ul className="space-y-2">
              {[
                { label: nav.credits, href: "#carbon-credits" },
                { label: nav.whyKZ, href: "#why-kazakhstan" },
                { label: nav.aralSea, href: "#aral-sea" },
                { label: nav.article6, href: "#article-6" },
                { label: nav.projects, href: "#projects" },
                { label: nav.investment, href: "#investment" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-kz-sand/40 hover:text-kz-gold text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-kz-sand text-xs font-semibold tracking-[0.15em] uppercase mb-4">{t.legal}</h4>
            <ul className="space-y-2">
              {[
                { label: "Verra VCS", href: "https://verra.org" },
                { label: "Gold Standard", href: "https://goldstandard.org" },
                { label: "Paris Agreement", href: "https://unfccc.int" },
                { label: "Green Earth Group", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-kz-sand/40 hover:text-kz-gold text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-kz-sand/30 text-xs">{t.copyright}</p>
          <div className="flex items-center gap-4">
            <span className="text-kz-sand/20 text-xs">Powered by nature</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
