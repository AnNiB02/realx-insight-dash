import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const AnimatedCounter = ({ end, suffix = "" }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const metrics = [
  { title: "Total Conversations", value: 1234, suffix: "", icon: "💬" },
  { title: "Active Users", value: 89, suffix: "", icon: "👥" },
  { title: "Conversion Rate", value: 23, suffix: "%", icon: "📈" },
];

export const DashboardDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard-demo" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Subtle pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard Preview */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Browser Frame */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
              {/* Browser Header */}
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 mx-4 bg-white rounded px-3 py-1 text-sm text-gray-500">
                  dashboard.realx.com
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-white to-gray-50">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                    >
                      <Card className="p-4 text-center bg-white shadow-md hover:shadow-lg transition-shadow">
                        <div className="text-2xl mb-2">{metric.icon}</div>
                        <div className="text-2xl font-bold text-primary">
                          <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {metric.title}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
                
                {/* Simulated chart area */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="h-32 bg-gradient-to-r from-violet-100 to-blue-100 rounded flex items-end justify-around p-4">
                    {[40, 65, 45, 80, 60, 90, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 1, delay: 1 + i * 0.1 }}
                        className="w-8 bg-gradient-to-t from-violet-500 to-blue-500 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-violet-500 text-white p-3 rounded-full shadow-lg"
            >
              📊
            </motion.div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Stay in Control of Your Performance
            </h2>
            
            <div className="space-y-6">
              {[
                { icon: "📊", title: "Live performance metrics", desc: "Real-time insights into your support operations" },
                { icon: "💬", title: "Real-time conversation feed", desc: "Stay connected with every customer interaction" },
                { icon: "📈", title: "Month-over-month growth tracking", desc: "Monitor trends and celebrate improvements" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
                  className="flex gap-4"
                >
                  <div className="text-2xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};