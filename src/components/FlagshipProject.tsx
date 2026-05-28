"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/LangContext";
import { IMAGES } from "@/lib/images";

const FADE_UP = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
});

const content = {
  kk: {
    superLabel: "Үздік жоба · Verra VCS расталған",
    label: "Жобалар",
    title: "Қазақстандағы үздік карбон жобасы",
    subtitle: "Green Earth Group — Арал теңізі Саксаул екпе ормандарын қалпына келтіру жобасы",
    description:
      "Бұл — Орталық Азиядағы және мүмкін бүкіл әлемдегі ең ірі белсенді шөл афоресттеу жобасы. Бұрынғы Арал теңізінің сусыз табанында саксаул ағаштарын өсіру арқылы Green Earth Group 100 000+ гектар жерді қалпына келтіреді, CO₂ секвестрациялайды және жергілікті экожүйені тіршілікке қайтарады.",
    credentialTitle: "Жобаның негізгі деректері",
    credentials: [
      { label: "Тіркеу органы", value: "Verra Verified Carbon Standard (VCS)" },
      { label: "Стандарт", value: "VM0047 — Афоресттеу, орман қалпына келтіру және реөсімдеу" },
      { label: "Орналасқан жері", value: "Арал теңізінің бұрынғы табаны, Оңтүстік Қазақстан" },
      { label: "Ауқымы", value: "100 000+ гектар" },
      { label: "Егілген ағаштар", value: "1 100 000+ саксаул ағаштары" },
      { label: "Мәртебесі", value: "Белсенді · Халықаралық верификацияланған" },
    ],
    impactTitle: "Дәлелденген нәтижелер",
    impacts: [
      { value: "1.1M+", label: "Егілген саксаул ағаштары" },
      { value: "100K+", label: "Гектар қалпына келтірілген жер" },
      { value: "Verra", label: "Тіркелген CO₂ бірліктері" },
      { value: "Art.6", label: "Париж келісімімен үйлесімді" },
    ],
    why: "Неге бұл жоба маңызды?",
    whyText:
      "Арал теңізі апатты экологиялық дағдарысты бастан кешірді — бір кездері тоқтаусыз кеңейіп жатқан теңіз енді шөлге айналды. Саксаул — тамырымен топырақты ұстайтын, аздаған суға шыдамды ағаш — бұл жерді қайта тіршілікке қайтарудың кілті. Green Earth Group осы жобасы арқылы экологиялық қалпына келтіруді карбон қаржысымен үйлестіріп, Қазақстанның 2060 жылғы климаттық мақсаттарына үлес қосады.",
    readMore: "Толық жобаны қараңыз",
    verraLink: "Verra тізілімі",
  },
  ru: {
    superLabel: "Ведущий проект · Сертификат Verra VCS",
    label: "Проекты",
    title: "Лучший карбоновый проект в Казахстане",
    subtitle: "Green Earth Group — Саксауловая афforeстация Аральского моря",
    description:
      "Это крупнейший активный проект по озеленению пустыни в Центральной Азии, а возможно, и во всём мире. Высаживая саксаул на высохшем дне бывшего Аральского моря, Green Earth Group восстанавливает более 100 000 гектаров, секвестрирует CO₂ и возвращает жизнь в деградированные экосистемы.",
    credentialTitle: "Ключевые данные проекта",
    credentials: [
      { label: "Регистратор", value: "Verra Verified Carbon Standard (VCS)" },
      { label: "Стандарт", value: "VM0047 — Облесение, лесовосстановление и ревегетация" },
      { label: "Расположение", value: "Бывшее дно Аральского моря, Южный Казахстан" },
      { label: "Масштаб", value: "100 000+ гектаров" },
      { label: "Высажено деревьев", value: "1 100 000+ саксаулов" },
      { label: "Статус", value: "Активный · Международная верификация" },
    ],
    impactTitle: "Подтверждённые результаты",
    impacts: [
      { value: "1.1M+", label: "Высаженных саксаулов" },
      { value: "100K+", label: "Гектаров восстановлено" },
      { value: "Verra", label: "Зарегистрированные углеродные единицы" },
      { value: "Ст.6", label: "Соответствие Парижскому соглашению" },
    ],
    why: "Почему этот проект важен?",
    whyText:
      "Аральское море пережило одну из крупнейших экологических катастроф XX века — некогда великое море превратилось в пустыню. Саксаул — засухоустойчивое дерево, удерживающее почву корнями — является ключом к возрождению этой земли. Проект Green Earth Group объединяет экологическое восстановление с углеродным финансированием, напрямую поддерживая климатические обязательства Казахстана на 2060 год.",
    readMore: "Читать полное описание проекта",
    verraLink: "Реестр Verra",
  },
  en: {
    superLabel: "Featured Project · Verra VCS Certified",
    label: "Projects",
    title: "Kazakhstan's Flagship Carbon Project",
    subtitle: "Green Earth Group — Aral Sea Saxaul Afforestation",
    description:
      "This is among the largest active desert afforestation projects in Central Asia. By planting saxaul trees on the dried seabed of the former Aral Sea, Green Earth Group is restoring over 100,000 hectares of degraded land, sequestering CO₂, and generating internationally verified carbon credits under the Verra VCS Standard.",
    credentialTitle: "Project Credentials",
    credentials: [
      { label: "Registry", value: "Verra Verified Carbon Standard (VCS)" },
      { label: "Methodology", value: "VM0047 — Afforestation, Reforestation & Revegetation" },
      { label: "Location", value: "Former Aral Sea bed, South Kazakhstan" },
      { label: "Project Area", value: "100,000+ hectares" },
      { label: "Trees Planted", value: "1,100,000+ saxaul trees" },
      { label: "Status", value: "Active · Internationally Verified" },
    ],
    impactTitle: "Verified Impact",
    impacts: [
      { value: "1.1M+", label: "Saxaul trees planted" },
      { value: "100K+", label: "Hectares restored" },
      { value: "Verra", label: "Registered CO₂ credits" },
      { value: "Art.6", label: "Paris Agreement aligned" },
    ],
    why: "Why This Project Matters",
    whyText:
      "The Aral Sea was once the world's fourth-largest lake. Over-irrigation caused it to shrink to a fraction of its former size, leaving a salt-crusted desert prone to toxic dust storms that harm millions. Saxaul trees — drought-resistant, deep-rooted — are the proven tool for stabilising this landscape. Green Earth Group's project demonstrates exactly how environmental restoration can be paired with verified carbon finance to create measurable, internationally recognised outcomes aligned with Kazakhstan's 2060 net-zero commitment and its NDC obligations under the Paris Agreement.",
    readMore: "Read the Full Case Study",
    verraLink: "Verra Registry",
  },
};

export default function FlagshipProject() {
  const { lang } = useLang();
  const t = content[lang];

  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-60px" });

  const bodyRef = useRef<HTMLDivElement>(null);
  const isBodyInView = useInView(bodyRef, { once: true, margin: "-40px" });

  const impactRef = useRef<HTMLDivElement>(null);
  const isImpactInView = useInView(impactRef, { once: true, margin: "-40px" });

  return (
    <section id="projects" className="bg-kz-dark py-24 md:py-32 relative overflow-hidden">
      {/* Subtle steppe texture */}
      <div
        className="absolute inset-0 opacity-[0.05] bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.saxaulRestoration})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-kz-dark via-kz-dark/96 to-kz-dark" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-kz-gold/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mx-auto text-center mb-16">
          <motion.div variants={FADE_UP(0)} initial="hidden" animate={isHeaderInView ? "visible" : "hidden"}>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-kz-gold/50" />
              {/* Verra badge */}
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kz-gold/10 border border-kz-gold/25 text-kz-gold text-[10px] font-bold tracking-[0.15em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-kz-gold animate-pulse" />
                {t.superLabel}
              </span>
              <div className="w-8 h-px bg-kz-gold/50" />
            </div>
          </motion.div>

          <motion.h2
            variants={FADE_UP(0.08)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4"
          >
            {t.title}
          </motion.h2>
          <motion.p
            variants={FADE_UP(0.14)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="font-serif text-xl md:text-2xl text-kz-gold italic mb-6"
          >
            {t.subtitle}
          </motion.p>
          <motion.p
            variants={FADE_UP(0.2)}
            initial="hidden"
            animate={isHeaderInView ? "visible" : "hidden"}
            className="text-kz-sand/60 text-lg leading-relaxed max-w-3xl mx-auto"
          >
            {t.description}
          </motion.p>
        </div>

        {/* Main body: image + credentials */}
        <div ref={bodyRef} className="grid lg:grid-cols-2 gap-10 mb-16 items-start">
          {/* Image stack */}
          <motion.div
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isBodyInView ? "visible" : "hidden"}
            className="space-y-3"
          >
            {/* Primary image — saxaul restoration */}
            <div className="relative rounded-3xl overflow-hidden aspect-[16/10]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${IMAGES.saxaulRestoration})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kz-dark/80 via-kz-dark/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] text-kz-sand/60 tracking-widest uppercase">
                  {lang === "kk" ? "Саксаул орманы · Арал аймағы" : lang === "ru" ? "Саксауловый лес · Приаралье" : "Saxaul forest · Aral Sea region"}
                </span>
              </div>
            </div>

            {/* Secondary image — dried seabed before */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/7]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${IMAGES.aralDry})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kz-dark/80 via-kz-dark/10 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <span className="text-[10px] text-kz-sand/50 tracking-widest uppercase">
                  {lang === "kk" ? "Бұрынғы Арал теңізінің табаны" : lang === "ru" ? "Бывшее дно Аральского моря" : "Former Aral Sea bed"}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-kz-sand/10 text-kz-sand/40 border border-white/[0.06]">
                  {lang === "kk" ? "Жобаға дейін" : lang === "ru" ? "До проекта" : "Before"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Credentials panel */}
          <motion.div
            variants={FADE_UP(0.1)}
            initial="hidden"
            animate={isBodyInView ? "visible" : "hidden"}
          >
            <h3 className="font-serif text-xl text-white font-bold mb-5">{t.credentialTitle}</h3>
            <div className="space-y-2 mb-8">
              {t.credentials.map(({ label, value }, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-kz-gold/20 transition-colors"
                >
                  <span className="text-kz-sand/40 text-xs">{label}</span>
                  <span className="text-kz-sand text-xs font-semibold text-right">{value}</span>
                </div>
              ))}
            </div>

            {/* Why this matters */}
            <div className="p-5 rounded-2xl bg-kz-gold/[0.06] border border-kz-gold/15">
              <h4 className="text-kz-gold text-sm font-bold mb-3">{t.why}</h4>
              <p className="text-kz-sand/55 text-xs leading-relaxed">{t.whyText}</p>
            </div>
          </motion.div>
        </div>

        {/* Impact numbers */}
        <div ref={impactRef} className="mb-14">
          <motion.h3
            variants={FADE_UP(0)}
            initial="hidden"
            animate={isImpactInView ? "visible" : "hidden"}
            className="text-center text-kz-sand/40 text-xs tracking-[0.2em] uppercase mb-6"
          >
            {t.impactTitle}
          </motion.h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
            {t.impacts.map((item, i) => (
              <motion.div
                key={i}
                variants={FADE_UP(i * 0.08)}
                initial="hidden"
                animate={isImpactInView ? "visible" : "hidden"}
                className="bg-kz-dark/80 px-6 py-6 text-center"
              >
                <div className="font-serif text-3xl md:text-4xl font-bold text-kz-gold mb-2">{item.value}</div>
                <div className="text-kz-sand/45 text-xs leading-snug">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP(0.1)}
          initial="hidden"
          animate={isImpactInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#aral-sea"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-kz-gold hover:bg-kz-gold-light text-kz-dark text-sm font-bold rounded-xl transition-colors"
          >
            {t.readMore}
            <span>→</span>
          </a>
          <a
            href="https://registry.verra.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-kz-sand/70 hover:text-kz-sand text-sm font-medium rounded-xl transition-colors"
          >
            {t.verraLink}
            <span className="text-kz-sand/30">↗</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
