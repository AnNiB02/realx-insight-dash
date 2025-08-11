import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const DemoClosing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl lg:text-6xl font-bold text-white leading-tight"
          >
            Bring clarity and elegance to your{" "}
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              customer support
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            Experience the future of support management with RealX Dashboard
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-6"
          >
            <Button 
              size="lg"
              className="relative group bg-transparent border-2 border-white text-white hover:bg-white hover:text-purple-900 text-xl px-12 py-6 rounded-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Glowing border animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                animate={{
                  background: [
                    "linear-gradient(0deg, #fbbf24, #f472b6, #06b6d4)",
                    "linear-gradient(120deg, #fbbf24, #f472b6, #06b6d4)",
                    "linear-gradient(240deg, #fbbf24, #f472b6, #06b6d4)",
                    "linear-gradient(360deg, #fbbf24, #f472b6, #06b6d4)",
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="relative z-10"
              >
                Book Your Demo
              </motion.span>
              
              {/* Button shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                style={{ transform: "skewX(-20deg)" }}
              />
            </Button>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-sm text-white/60 pt-6"
          >
            Join thousands of support teams already transforming with RealX
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};