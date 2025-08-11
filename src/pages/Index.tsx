import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { DemoHero } from "@/components/DemoHero";
import { DashboardDemo } from "@/components/DashboardDemo";
import { KnowledgeDemo } from "@/components/KnowledgeDemo";
import { IntegrationSection } from "@/components/IntegrationSection";
import { DemoClosing } from "@/components/DemoClosing";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <MinimalHeader />
      <DemoHero />
      <DashboardDemo />
      <KnowledgeDemo />
      <IntegrationSection />
      <DemoClosing />
      <Footer />
    </div>
  );
};

export default Index;
