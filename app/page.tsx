import { Hero } from "@/components/features/hero";
import { PortfolioSection } from "@/components/features/portfolio";
import { PricingSection } from "@/components/features/pricing";
import { ServicesSection } from "@/components/features/services";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
    </>
  );
}
