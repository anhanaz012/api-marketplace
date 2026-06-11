import FAQSection from "@/domains/marketing/components/faqs";
import FeaturesSection from "@/domains/marketing/components/features";
import HeroSection from "@/domains/marketing/components/landing-hero";
import PowerPlayersSection from "@/domains/marketing/components/power-players";
import StatsSection from "@/domains/marketing/components/stats-section";
import { Layout } from "@/shared/ui";

const LandingPage = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <PowerPlayersSection />
      <FeaturesSection />
      <FAQSection />
    </Layout>
  );
};

export default LandingPage;
