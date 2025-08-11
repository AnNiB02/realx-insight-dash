import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MetricsShowcase } from "@/components/MetricsShowcase";
import { ConversationFeed } from "@/components/ConversationFeed";
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
      <ConversationFeed />
      <KnowledgeBaseSection />
      <DashboardPreview />
      <GrowthInsights />
      <CallToAction />
    </div>
  );
};

export default Index;
