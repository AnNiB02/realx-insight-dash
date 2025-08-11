import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const integrations = [
  { icon: "💬", title: "Chats", desc: "Real-time customer conversations" },
  { icon: "👨‍🏫", title: "Trainers", desc: "AI-powered support training" },
  { icon: "📚", title: "Knowledge Base", desc: "Centralized documentation hub" },
  { icon: "📊", title: "Dashboard", desc: "Performance analytics & insights" }
];

export const IntegrationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500"></div>
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      
      {/* Floating orbs */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-20 h-20 bg-white/5 rounded-full backdrop-blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Seamless Integration
          </h2>
          <p className="text-xl text-white/90 mb-16 max-w-3xl mx-auto">
            All your support tools working together in perfect harmony
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5
              }}
              className="group"
            >
              <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-xl">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-5xl mb-4"
                >
                  {integration.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{integration.title}</h3>
                <p className="text-white/80 text-sm">{integration.desc}</p>
                
                {/* Connecting lines (visible on hover) */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <div className="absolute top-1/2 left-full w-8 h-0.5 bg-white/50 transform -translate-y-1/2 hidden lg:block"></div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};