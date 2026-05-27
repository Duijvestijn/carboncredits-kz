import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import WhatAreCredits from "@/components/WhatAreCredits";
import WhyKazakhstan from "@/components/WhyKazakhstan";
import AralSeaSection from "@/components/AralSeaSection";
import Article6Section from "@/components/Article6Section";
import HowProjectsWork from "@/components/HowProjectsWork";
import ProjectTypes from "@/components/ProjectTypes";
import RegionalBenefits from "@/components/RegionalBenefits";
import InvestmentSection from "@/components/InvestmentSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import { IMAGES } from "@/lib/images";

export const metadata: Metadata = {
  title: "CarbonCredits.kz — Nature Restoration & Environmental Finance Kazakhstan",
  description:
    "Kazakhstan's premier platform for nature restoration, land recovery, and environmental finance through carbon credits. Afforestation, steppe restoration, Aral Sea revival, biodiversity projects.",
  openGraph: {
    title: "CarbonCredits.kz — Nature Restoration & Environmental Finance",
    description:
      "Kazakhstan holds one of the world's largest untapped opportunities in nature restoration and environmental finance. Carbon credits transform land into financial assets.",
    images: [
      {
        url: IMAGES.heroSteppe,
        width: 2400,
        height: 1600,
        alt: "Kazakhstan steppe landscape at golden hour",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhatAreCredits />
        <WhyKazakhstan />
        <AralSeaSection />
        <Article6Section />
        <HowProjectsWork />
        <ProjectTypes />
        <RegionalBenefits />
        <InvestmentSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
