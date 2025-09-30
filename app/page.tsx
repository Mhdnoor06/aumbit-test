"use client";

import { BackgroundAtmosphere } from "@/components/landing/background-atmosphere";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { MissionVisionSection } from "@/components/landing/mission-vision-section";
import { TechnologiesSection } from "@/components/landing/technologies-section";
import { SolutionsSection } from "@/components/landing/solutions-section";
import { Footer } from "@/components/footer";
import ProductivitySection from "@/components/ProductivitySection";
import Auth0StatsSection from "@/components/Auth0StatsSection";
import { IndustriesSection } from "@/components/landing/industries-section";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative bg-slate-900">
      <BackgroundAtmosphere />
      <Navigation />
      <HeroSection />
      <MissionVisionSection />
      <ProductivitySection />
      <TechnologiesSection />
      <SolutionsSection />
      <IndustriesSection />
      <Auth0StatsSection />
      <Footer />
    </div>
  );
}
