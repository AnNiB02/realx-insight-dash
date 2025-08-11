import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BarChart, MessageSquare, TrendingUp } from "lucide-react";

export const MinimalDashboardOverview = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="dashboard-overview" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Screenshot */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="bg-card rounded-lg shadow-lg overflow-hidden max-w-md border border-gray-200">
              <img 
                src="/lovable-uploads/a9127df5-9dda-488a-9236-df1128b29699.png"
                alt="Dashboard metrics and conversations"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Stay on Top of Performance
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From real-time conversations to conversion rates, the RealX Dashboard 
              shows you exactly how your support is performing — without visual clutter.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start space-x-3"
              >
                <BarChart className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Live metrics at a glance</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-3"
              >
                <MessageSquare className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Real-time conversation list</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-start space-x-3"
              >
                <TrendingUp className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Month-over-month trends</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};