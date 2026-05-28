import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Lang } from "@/lib/LangContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Article6Section from "@/components/Article6Section";
import ContactSection from "@/components/ContactSection";

const SUPPORTED_LANGS: Lang[] = ["en", "ru", "kk"];
const BASE = "https://carboncredits.kz";

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: "Article 6 Paris Agreement — Kazakhstan Carbon Market | CarbonCredits.kz",
    description:
      "Kazakhstan and Article 6 of the Paris Agreement: how bilateral mechanisms and the UN-supervised carbon market create internationally transferable mitigation outcomes (ITMOs) for global investors.",
  },
  ru: {
    title: "Статья 6 Парижского соглашения — Углеродный рынок Казахстана | CarbonCredits.kz",
    description:
      "Казахстан и Статья 6 Парижского соглашения: двусторонние механизмы и углеродный рынок под надзором ООН создают международно передаваемые результаты снижения выбросов (ITMO) для глобальных инвесторов.",
  },
  kk: {
    title: "Париж келісімінің 6-бабы — Қазақстанның көміртекті нарығы | CarbonCredits.kz",
    description:
      "Қазақстан және Париж келісімінің 6-бабы: екіжақты механизмдер мен БҰҰ бақылауындағы көміртекті нарық жаһандық инвесторлар үшін халықаралық деңгейде берілетін шығарындыларды азайту нәтижелерін (ITMO) қалыптастырады.",
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
      canonical: `${BASE}/${safeLang}/article-6`,
      languages: {
        kk: `${BASE}/kk/article-6`,
        ru: `${BASE}/ru/article-6`,
        en: `${BASE}/en/article-6`,
        "x-default": `${BASE}/en/article-6`,
      },
    },
    openGraph: {
      title: m.title,
      description: m.description,
    },
  };
}

export default async function Article6Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang as Lang)) notFound();

  return (
    <>
      <Header />
      <main>
        <div className="pt-20">
          <Article6Section />
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
