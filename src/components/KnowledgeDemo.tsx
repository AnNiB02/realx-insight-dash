import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const KnowledgeDemo = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const searchResults = [
    { title: "Ownership Modes Guide", highlight: "you own", content: "Learn about RealX ownership models..." },
    { title: "Property Rights FAQ", highlight: "you own", content: "Understanding your property rights..." },
    { title: "Investment Options", highlight: "you own", content: "Explore investment opportunities where..." },
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">
              Your Knowledge, Instantly Accessible
            </h2>
            
            <div className="space-y-6">
              {[
                { icon: "🔍", title: "Fast, smart search", desc: "Find any information instantly with AI-powered search" },
                { icon: "🗂", title: "All content formats supported", desc: "PDFs, articles, URLs - everything in one place" },
                { icon: "✏️", title: "Effortless content editing", desc: "Update your knowledge base with simple, intuitive tools" }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
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
          
          {/* Knowledge Base Interface */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Search Interface */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border">
              {/* Search Bar */}
              <motion.div 
                className="p-6 bg-gradient-to-r from-violet-500 to-blue-500"
                animate={{ boxShadow: ["0 0 0 0 rgba(139, 92, 246, 0.7)", "0 0 20px 5px rgba(139, 92, 246, 0.3)", "0 0 0 0 rgba(139, 92, 246, 0.7)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                  <div className="text-violet-500">🔍</div>
                  <div className="flex-1 text-gray-800">
                    <span className="opacity-60">Search: "</span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="font-semibold"
                    >
                      you own
                    </motion.span>
                    <span className="opacity-60">"</span>
                    <motion.span
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="ml-1 text-violet-500"
                    >
                      |
                    </motion.span>
                  </div>
                  <Badge className="bg-green-500 text-white">3 results</Badge>
                </div>
              </motion.div>
              
              {/* Search Results */}
              <div className="p-6 space-y-4">
                {searchResults.map((result, index) => (
                  <motion.div
                    key={result.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                  >
                    <Card 
                      className="p-4 hover:shadow-lg transition-all duration-300 cursor-pointer border-l-4 border-l-violet-500"
                      style={{
                        transform: hoveredCard === index ? 'rotateX(2deg) rotateY(-2deg)' : 'rotateX(0deg) rotateY(0deg)',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <h3 className="font-semibold text-primary mb-2">{result.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {result.content.split(result.highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <motion.span
                                animate={{ backgroundColor: ["transparent", "#fef08a", "transparent"] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                                className="px-1 rounded font-medium"
                              >
                                {result.highlight}
                              </motion.span>
                            )}
                          </span>
                        ))}
                      </p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Floating search icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -left-6 bg-yellow-400 text-yellow-900 p-4 rounded-full shadow-lg"
            >
              🔍
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};