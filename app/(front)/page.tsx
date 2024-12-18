import { DashboardPreview } from "@/components/frontend/dashboard-preview";
import FeaturesGrid from "@/components/frontend/features-grid";
import HeroSection from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logo-cloud";
import Pricing from "@/components/frontend/pricing";
import { FeatureTabs } from "@/components/frontend/tabbed-features";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <LogoCloud />
      <DashboardPreview />
      <FeaturesGrid />
      <FeatureTabs />
      <Pricing />
    </main>
  );
}
