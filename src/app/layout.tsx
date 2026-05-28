import type { Metadata } from "next";
import { playfair, inter } from "@/lib/fonts";
import "./globals.css";
import LenisProvider from "@/lib/LenisProvider";

/** Organization JSON-LD — rendered once in the root layout for all pages */
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CarbonCredits.kz",
  alternateName: [
    "Көміртегі бірліктері Қазақстан",
    "Углеродные единицы Казахстан",
  ],
  url: "https://carboncredits.kz",
  logo: "https://carboncredits.kz/favicon.ico",
  description:
    "Kazakhstan's premier platform for nature restoration and environmental finance through verified carbon credits — Aral Sea revival, steppe restoration, Verra VCS certified projects.",
  foundingLocation: {
    "@type": "Place",
    addressCountry: "KZ",
    name: "Kazakhstan",
  },
  areaServed: {
    "@type": "Country",
    name: "Kazakhstan",
    sameAs: "https://www.wikidata.org/wiki/Q232",
  },
  knowsAbout: [
    "Carbon Credits",
    "Nature Restoration",
    "Aral Sea Restoration",
    "Steppe Restoration",
    "Verra VCS Certification",
    "Article 6 Paris Agreement",
    "Environmental Finance",
    "Afforestation Kazakhstan",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Inquiries",
    url: "https://carboncredits.kz/en#contact",
    availableLanguage: ["English", "Russian", "Kazakh"],
  },
  sameAs: ["https://verra.org"],
};

export const metadata: Metadata = {
  title: {
    default:
      "CarbonCredits.kz — Kazakhstan Nature Restoration & Environmental Finance",
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
    "көміртегі бірліктері Қазақстан",
    "углеродные единицы Казахстан",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ru_RU", "kk_KZ"],
    siteName: "CarbonCredits.kz",
    url: "https://carboncredits.kz",
    title:
      "CarbonCredits.kz — Nature Restoration & Environmental Finance",
    description:
      "Kazakhstan holds one of the world's largest untapped opportunities in nature restoration and environmental finance.",
  },
  robots: { index: true, follow: true },
  metadataBase: new URL("https://carboncredits.kz"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="bg-kz-dark text-kz-sand antialiased overflow-x-hidden font-sans">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
