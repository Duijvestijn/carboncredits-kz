import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { LangProvider } from "@/lib/LangContext";
import type { Lang } from "@/lib/LangContext";

const SUPPORTED_LANGS: Lang[] = ["en", "ru", "kk"];
const BASE = "https://carboncredits.kz";

/** Pre-generate static routes for the three languages */
export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

const TITLES: Record<Lang, string> = {
  en: "CarbonCredits.kz — Nature Restoration & Environmental Finance Kazakhstan",
  ru: "CarbonCredits.kz — Восстановление природы и экологические финансы Казахстана",
  kk: "CarbonCredits.kz — Табиғатты қалпына келтіру және Қазақстанның экологиялық қаржысы",
};

const DESCRIPTIONS: Record<Lang, string> = {
  en: "Kazakhstan's premier platform for nature restoration and environmental finance. Aral Sea revival, steppe restoration, saxaul afforestation — Verra VCS certified carbon credits.",
  ru: "Ведущая платформа Казахстана для восстановления природы и экологического финансирования. Возрождение Арала, восстановление степей — Verra VCS сертифицированные карбоновые кредиты.",
  kk: "Табиғатты қалпына келтіру және экологиялық қаржыландыру саласындағы Қазақстанның жетекші платформасы. Аралды жандандыру, дала қалпына келтіру — Verra VCS сертификатталған карбон несиелері.",
};

const OG_LOCALES: Record<Lang, string> = {
  en: "en_US",
  ru: "ru_RU",
  kk: "kk_KZ",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const safeLang = SUPPORTED_LANGS.includes(lang as Lang)
    ? (lang as Lang)
    : "en";

  return {
    title: TITLES[safeLang],
    description: DESCRIPTIONS[safeLang],
    alternates: {
      canonical: `${BASE}/${safeLang}`,
      languages: {
        kk: `${BASE}/kk`,
        ru: `${BASE}/ru`,
        en: `${BASE}/en`,
        "x-default": `${BASE}/en`,
      },
    },
    openGraph: {
      locale: OG_LOCALES[safeLang],
      alternateLocale: (["en", "ru", "kk"] as Lang[])
        .filter((l) => l !== safeLang)
        .map((l) => OG_LOCALES[l]),
    },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!SUPPORTED_LANGS.includes(lang as Lang)) {
    notFound();
  }

  return (
    <LangProvider initialLang={lang as Lang}>
      {children}
    </LangProvider>
  );
}
