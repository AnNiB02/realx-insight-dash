import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

export const MinimalClosingCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Give Your Support a Cleaner, Faster,{" "}
            <span className="text-accent">Smarter Home</span>
          </h2>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-4 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              Book a Demo
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};