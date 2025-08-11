import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const MinimalDemoHero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('dashboard-overview');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              All Your Support Tools,{" "}
              <span className="text-accent">One Clean Dashboard</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Track your conversations, monitor performance, and manage knowledge 
              in one minimal, distraction-free interface.
            </p>
            
            <Button 
              size="lg"
              onClick={scrollToDemo}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg text-base font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              Get Started
            </Button>
          </motion.div>
          
          {/* Right: Browser Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Browser frame */}
              <div className="bg-card border border-gray-200 rounded-lg shadow-lg overflow-hidden max-w-md">
                {/* Browser chrome */}
                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-4 bg-white px-3 py-1 rounded text-xs text-gray-600 flex-1">
                      dashboard.realx.com
                    </div>
                  </div>
                </div>
                
                {/* Dashboard screenshot */}
                <div className="aspect-video bg-gray-100">
                  <img 
                    src="/lovable-uploads/a9127df5-9dda-488a-9236-df1128b29699.png"
                    alt="RealX Dashboard Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};