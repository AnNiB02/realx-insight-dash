import { DemoHero } from "@/components/DemoHero";
import { DashboardDemo } from "@/components/DashboardDemo";
import { KnowledgeDemo } from "@/components/KnowledgeDemo";
import { IntegrationSection } from "@/components/IntegrationSection";
import { DemoClosing } from "@/components/DemoClosing";

const Demo = () => {
  return (
    <div className="min-h-screen bg-background">
      <DemoHero />
      <DashboardDemo />
      <KnowledgeDemo />
      <IntegrationSection />
      <DemoClosing />
    </div>
  );
};

export default Demo;