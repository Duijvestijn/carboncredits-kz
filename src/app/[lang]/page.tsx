import { notFound } from "next/navigation";
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
import FlagshipProject from "@/components/FlagshipProject";
import ContactSection from "@/components/ContactSection";

const SUPPORTED_LANGS = ["en", "ru", "kk"];

export default async function LangHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!SUPPORTED_LANGS.includes(lang)) notFound();

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
        <FlagshipProject />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
