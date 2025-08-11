import { MinimalDemoHero } from "@/components/MinimalDemoHero";
import { MinimalDashboardOverview } from "@/components/MinimalDashboardOverview";
import { MinimalKnowledgeBase } from "@/components/MinimalKnowledgeBase";
import { MinimalClosingCTA } from "@/components/MinimalClosingCTA";

const MinimalDemo = () => {
  return (
    <div className="min-h-screen">
      <MinimalDemoHero />
      <MinimalDashboardOverview />
      <MinimalKnowledgeBase />
      <MinimalClosingCTA />
    </div>
  );
};

export default MinimalDemo;