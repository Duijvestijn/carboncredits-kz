import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Lang } from "@/lib/LangContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AralSeaSection from "@/components/AralSeaSection";
import ContactSection from "@/components/ContactSection";

const SUPPORTED_LANGS: Lang[] = ["en", "ru", "kk"];
const BASE = "https://carboncredits.kz";

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Aral Sea Restoration — Carbon Credits & Saxaul Afforestation | CarbonCredits.kz",
    description:
      "The Aral Sea dried-lakebed restoration project: saxaul afforestation across 1.1M hectares, Verra VCS certified, sequestering millions of tonnes of CO₂ while reversing one of the world's worst ecological disasters.",
  },
  ru: {
    title: "Восстановление Аральского моря — Углеродные единицы и саксаул | CarbonCredits.kz",
    description:
      "Проект восстановления высохшего дна Аральского моря: посадка саксаула на 1,1 млн гектаров, сертификация Verra VCS, секвестрация миллионов тонн CO₂ и ликвидация последствий одной из крупнейших экологических катастроф.",
  },
  kk: {
    title: "Арал теңізін қалпына келтіру — Көміртегі бірліктері және сексеуіл | CarbonCredits.kz",
    description:
      "Арал теңізінің кепкен түбін қалпына келтіру жобасы: 1,1 млн гектарға сексеуіл егу, Verra VCS сертификаты, миллиондаған тонна CO₂ секвестрациясы және дүниежүзіндегі ең ауыр экологиялық апаттың зардаптарын жою.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = SUPPORTED_LANGS.includes(lang as Lang) ? (lang as Lang) : "en";
  const m = META[safeLang];

  return {
    title: m.title,
    description: m.description,
    alternates: {
      canonical: `${BASE}/${safeLang}/aral-sea`,
      languages: {
        kk: `${BASE}/kk/aral-sea`,
        ru: `${BASE}/ru/aral-sea`,
        en: `${BASE}/en/aral-sea`,
        "x-default": `${BASE}/en/aral-sea`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      images: [
        {
          url: "https://d8j0ntlcm91z4.cloudfront.net/user_3E7JAVPwA7DZLNJSwAYUmbE0qfD/hf_20260528_063134_b2c4b3a9-c1e1-48a8-ab62-a1371d15cdb3_min.webp",
          width: 2048,
          height: 1152,
          alt: "Aral Sea dried lakebed — restoration project",
        },
      ],
    },
  };
}

export default async function AralSeaPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();

  return (
    <>
      <Header />
      <main id="main">
        {/* Dedicated Aral Sea page — full section + contact */}
        <div className="pt-20">
          <AralSeaSection />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
