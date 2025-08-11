import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AvaAssistant } from "./AvaAssistant";

export const DemoHero = () => {
  const scrollToDemo = () => {
    const demoSection = document.getElementById('dashboard-demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600 opacity-90"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Support Operations,{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Beautifully Organized
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed"
          >
            From real-time conversations to a powerful knowledge base — all in one elegant dashboard.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button 
              size="lg"
              onClick={scrollToDemo}
              className="bg-white text-purple-700 hover:bg-white/90 text-lg px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              See It In Action
            </Button>
          </motion.div>
        </motion.div>
        
        {/* AI Chat Interface */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <AvaAssistant />
            
            {/* Glow effect behind chat */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/30 to-blue-500/30 blur-3xl -z-10 scale-150"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};