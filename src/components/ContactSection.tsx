"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { translations } from "@/lib/translations";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
});

type Status = "idle" | "sending" | "success" | "error";

const INPUT_CLASS =
  "w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-kz-sand placeholder-kz-sand/25 focus:outline-none focus:border-kz-gold/40 transition-colors text-sm";

const LABEL_CLASS = "block text-kz-sand/50 text-xs mb-2 font-medium tracking-wide";

export default function ContactSection() {
  const { lang } = useLang();
  const t = translations.contact[lang];
  const f = t.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [org, setOrg] = useState("");
  const [type, setType] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const contentRef = useRef<HTMLDivElement>(null);
  const isContentInView = useInView(contentRef, { once: true, margin: "-60px" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, org, type, message }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-kz-dark py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
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
            className="text-kz-sand/55 text-lg leading-relaxed"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div ref={contentRef} className="grid lg:grid-cols-5 gap-12">
          {/* Contact flows (left) */}
          <div className="lg:col-span-2 space-y-4">
            {t.flows.map((flow, i) => (
              <motion.div
                key={i}
                variants={FADE_UP(i * 0.08)}
                initial="hidden"
                animate={isContentInView ? "visible" : "hidden"}
                className="flex gap-4 p-5 rounded-2xl bg-kz-navy border border-white/[0.05] hover:border-kz-gold/20 transition-colors group"
              >
                {/* Professional SVG icons — investor / landowner / government / international */}
                <div className="w-8 h-8 flex-shrink-0 mt-0.5 text-kz-gold/60 group-hover:text-kz-gold transition-colors">
                  {i === 0 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                  )}
                  {i === 1 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  )}
                  {i === 2 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="9" width="18" height="13" rx="1" />
                      <path d="M8 9V7a4 4 0 0 1 8 0v2" />
                      <line x1="12" y1="13" x2="12" y2="17" />
                    </svg>
                  )}
                  {i === 3 && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-kz-gold transition-colors">
                    {flow.title}
                  </h4>
                  <p className="text-kz-sand/40 text-xs leading-relaxed">{flow.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Direct contact info */}
            <div className="p-5 rounded-2xl bg-kz-navy border border-kz-gold/10 mt-6">
              <p className="text-kz-sand/40 text-xs mb-1">Email</p>
              <a
                href="mailto:info@carboncredits.kz"
                className="text-kz-gold text-sm font-medium hover:text-kz-gold-light transition-colors"
              >
                info@carboncredits.kz
              </a>
            </div>
          </div>

          {/* Form (right) */}
          <motion.div
            variants={FADE_UP(0.2)}
            initial="hidden"
            animate={isContentInView ? "visible" : "hidden"}
            className="lg:col-span-3"
          >
            {status === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-kz-green/15 border border-kz-green/30 flex items-center justify-center">
                  <svg className="w-8 h-8 text-kz-green-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-kz-sand">{f.successTitle}</h3>
                <p className="text-kz-sand/50 leading-relaxed max-w-sm">{f.successDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className={LABEL_CLASS}>{f.nameLabel}</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={f.namePlaceholder}
                      className={INPUT_CLASS}
                      required
                    />
                  </div>
                  <div>
                    <label className={LABEL_CLASS}>{f.emailLabel}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={f.emailPlaceholder}
                      className={INPUT_CLASS}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={LABEL_CLASS}>{f.orgLabel}</label>
                  <input
                    type="text"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    placeholder={f.orgPlaceholder}
                    className={INPUT_CLASS}
                  />
                </div>

                <div>
                  <label className={LABEL_CLASS}>{f.typeLabel}</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className={`${INPUT_CLASS} cursor-pointer`}
                  >
                    <option value="" style={{ background: "#0B1929" }}>—</option>
                    {f.types.map((tp) => (
                      <option key={tp} value={tp} style={{ background: "#0B1929" }}>{tp}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className={LABEL_CLASS}>{f.messageLabel}</label>
                  <textarea
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={f.messagePlaceholder}
                    className={`${INPUT_CLASS} resize-none`}
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400/80 text-sm">{f.errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 bg-kz-gold hover:bg-kz-gold-light disabled:opacity-50 disabled:cursor-not-allowed text-kz-dark font-bold rounded-xl transition-colors tracking-wide"
                >
                  {status === "sending" ? f.sending : f.submitBtn}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
