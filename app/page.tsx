import { Hero } from "@/components/features/hero";
import { PortfolioSection } from "@/components/features/portfolio";
import { ServicesSection } from "@/components/features/services";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <PortfolioSection />
    </>
  );
}
