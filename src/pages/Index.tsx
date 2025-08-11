import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MetricsShowcase } from "@/components/MetricsShowcase";

import { GrowthInsights } from "@/components/GrowthInsights";
import { KnowledgeBaseSection } from "@/components/KnowledgeBaseSection";
import { DashboardPreview } from "@/components/DashboardPreview";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <MetricsShowcase />
      
      <KnowledgeBaseSection />
      <DashboardPreview />
      <GrowthInsights />
      <CallToAction />
    </div>
  );
};

export default Index;
