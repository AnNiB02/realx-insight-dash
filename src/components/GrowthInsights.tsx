import { Card } from "@/components/ui/card";

const insights = [
  {
    metric: "Response Time",
    current: "2.3 min",
    previous: "3.1 min",
    improvement: "-26%",
    trend: "↓",
    trendColor: "text-success"
  },
  {
    metric: "Customer Satisfaction",
    current: "94.2%", 
    previous: "91.8%",
    improvement: "+2.4%",
    trend: "↑",
    trendColor: "text-success"
  },
  {
    metric: "Resolution Rate",
    current: "87.5%",
    previous: "84.2%", 
    improvement: "+3.3%",
    trend: "↑",
    trendColor: "text-success"
  }
];

export const GrowthInsights = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            📈 Growth Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Compare month-to-month performance with easy-to-read trend indicators, 
            so you know exactly where your team shines and where there's room to grow.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card 
              key={insight.metric}
              className={`metric-card p-8 text-center border-0 animation-delay-${index * 200}`}
            >
              <div className={`text-5xl mb-4 ${insight.trendColor}`}>
                {insight.trend}
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">{insight.current}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{insight.metric}</p>
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs text-muted-foreground">vs {insight.previous}</span>
                <span className={`text-sm font-bold ${insight.trendColor}`}>
                  {insight.improvement}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};