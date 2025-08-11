import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-24 px-6 gradient-flow">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Your customers are talking
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground">
            <span className="text-primary font-semibold">Hear them</span>, understand them, 
            and respond faster than ever. Let{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent font-bold">
              RealX
            </span>{" "}
            make every interaction count.
          </p>
          
          <div className="pt-8">
            <a href="/demo">
              <Button 
                size="lg" 
                className="demo-button text-xl px-12 py-6 rounded-xl"
              >
                Request a Demo
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            Join thousands of support teams already using RealX
          </p>
        </div>
      </div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-accent-blue rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-purple rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};