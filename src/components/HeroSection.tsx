import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-flow">
      {/* Animated background overlay */}
      <div className="absolute inset-0 gradient-hero opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div className="space-y-8">
          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
            Your Support Performance,{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Reimagined
            </span>
          </h1>
          
          {/* Hero description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Step into the heart of your customer support operations with{" "}
            <span className="text-primary font-semibold">RealX Dashboard</span>{" "}
            — where clarity meets elegance. Monitor your conversations, track active users, 
            and see your growth at a glance, all in one beautiful, intuitive space.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="demo-button text-lg px-8 py-4 rounded-xl"
            >
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent-blue rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent-purple rounded-full opacity-15 animate-pulse animation-delay-1000"></div>
    </section>
  );
};