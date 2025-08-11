import { Button } from "@/components/ui/button";
import { AIChatInterface } from "@/components/AIChatInterface";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-flow">
      {/* Animated background overlay */}
      <div className="absolute inset-0 gradient-hero opacity-30"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="text-center lg:text-left">
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Your Support Performance,{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
          
          {/* Hero description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto lg:mx-0 leading-relaxed mt-6">
            Step into the heart of your customer support operations with{" "}
            <span className="text-primary font-semibold">RealX Dashboard</span>{" "}
            — where clarity meets elegance. Monitor your conversations, track active users, 
            and see your growth at a glance, all in one beautiful, intuitive space.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <a href="/demo">
              <Button 
                size="lg" 
                className="demo-button text-lg px-8 py-4 rounded-xl"
              >
                Request a Demo
              </Button>
            </a>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <AIChatInterface />
            
            {/* Glow effect behind chat */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 blur-3xl -z-10 scale-150"></div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-blue rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-purple rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
    </section>
  );
};