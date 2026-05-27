import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";
import LenisProvider from "@/lib/LenisProvider";

export const metadata: Metadata = {
  title: {
    default: "CarbonCredits.kz — Kazakhstan Nature Restoration & Environmental Finance",
    template: "%s | CarbonCredits.kz",
  },
  description:
    "Kazakhstan's premier platform for nature restoration, land recovery, and environmental finance through carbon credits. Afforestation, steppe restoration, Aral Sea revival, and biodiversity projects.",
  keywords: [
    "carbon credits Kazakhstan",
    "nature restoration Kazakhstan",
    "Aral Sea restoration",
    "steppe restoration",
    "environmental finance",
    "Verra Kazakhstan",
    "Article 6 Kazakhstan",
    "carbon market Kazakhstan",
    "ecological restoration",
    "карбон несиелері Қазақстан",
    "карбоновые кредиты Казахстан",
  ],
  openGraph: {
    type: "website",
    locale: "kk_KZ",
    alternateLocale: ["ru_RU", "en_US"],
    siteName: "CarbonCredits.kz",
    url: "https://carboncredits.kz",
    title: "CarbonCredits.kz — Nature Restoration & Environmental Finance",
    description:
      "Kazakhstan holds one of the world's largest untapped opportunities in nature restoration and environmental finance.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://carboncredits.kz"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="kk"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-kz-dark text-kz-sand antialiased overflow-x-hidden font-sans">
        <LangProvider>
          <LenisProvider>
            {children}
          </LenisProvider>
        </LangProvider>
      </body>
    </html>
  );
}
