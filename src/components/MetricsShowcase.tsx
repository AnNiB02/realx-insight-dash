import { Card } from "@/components/ui/card";

const metrics = [
  {
    title: "Total Conversations",
    value: "1,234",
    change: "+12.5% from last month",
    icon: "💬",
    color: "text-accent-blue"
  },
  {
    title: "Active Users", 
    value: "89",
    change: "+3.2% from last month",
    icon: "👥",
    color: "text-success"
  },
  {
    title: "Products Recommended",
    value: "456", 
    change: "+18.3% from last month",
    icon: "📦",
    color: "text-accent-purple"
  },
  {
    title: "Conversion Rate",
    value: "23.8%",
    change: "+2.1% from last month",
    icon: "📈",
    color: "text-warning"
  }
];

export const MetricsShowcase = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            📊 Performance at a Glance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Keep track of your support health in real time — total conversations, active users, 
            and conversion rates — all displayed in clean, clear, and dynamic visuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <Card 
              key={metric.title}
              className={`metric-card p-8 text-center border-0 animation-delay-${index * 200}`}
            >
              <div className="text-4xl mb-4">{metric.icon}</div>
              <h3 className="text-3xl font-bold text-primary mb-2">{metric.value}</h3>
              <p className="text-sm font-medium text-muted-foreground mb-3">{metric.title}</p>
              <p className={`text-sm font-medium ${metric.color}`}>
                {metric.change}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};