import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, FolderOpen, Edit3 } from "lucide-react";

export const MinimalKnowledgeBase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Knowledge, Simplified
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Organize your help docs, product info, and FAQs in one place — 
              easy to search, easy to edit.
            </p>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start space-x-3"
              >
                <Search className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Fast, keyword-based search</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start space-x-3"
              >
                <FolderOpen className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Supports typed content, URLs, and PDFs</span>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-start space-x-3"
              >
                <Edit3 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <span className="text-foreground">Edit and update in seconds</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right: Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="bg-card rounded-lg shadow-lg overflow-hidden max-w-md border border-gray-200">
              <img 
                src="/lovable-uploads/b0f79d00-f83b-4cca-b986-97c62ce24060.png"
                alt="Knowledge Base search and content view"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};