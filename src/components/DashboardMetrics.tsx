import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { MessageSquare, Users, ShoppingBag, TrendingUp } from "lucide-react";

const metrics = [
  {
    title: "Total Conversations",
    value: 1234,
    change: "+12.5% from last month",
    icon: MessageSquare,
    color: "text-primary"
  },
  {
    title: "Active Users", 
    value: 89,
    change: "+3.2% from last month",
    icon: Users,
    color: "text-success"
  },
  {
    title: "Products Recommended",
    value: 456, 
    change: "+18.3% from last month",
    icon: ShoppingBag,
    color: "text-accent-purple"
  },
  {
    title: "Conversion Rate",
    value: 23.8,
    suffix: "%",
    change: "+2.1% from last month",
    icon: TrendingUp,
    color: "text-warning"
  }
];

const AnimatedCounter = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export const DashboardMetrics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <Card 
          key={metric.title}
          className="dashboard-metric-card p-6 border-0"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-2 rounded-lg bg-muted ${metric.color}`}>
              <metric.icon className="h-5 w-5" />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="metric-number text-foreground">
              <AnimatedCounter 
                end={metric.value} 
                suffix={metric.suffix} 
                duration={1500 + index * 200}
              />
            </div>
            <p className="text-sm font-medium text-muted-foreground">{metric.title}</p>
            <p className="text-xs text-success font-medium">
              {metric.change}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};