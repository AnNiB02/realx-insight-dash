import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-2xl font-bold text-primary">RealX</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="/#dashboard" className="text-muted-foreground hover:text-primary transition-colors">
              Dashboard
            </a>
            <a href="/#insights" className="text-muted-foreground hover:text-primary transition-colors">
              Insights
            </a>
            <a href="/demo" className="text-muted-foreground hover:text-primary transition-colors">
              Live Demo
            </a>
          </nav>
          
          {/* CTA */}
          <Button className="bg-primary hover:bg-primary-light text-primary-foreground">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};