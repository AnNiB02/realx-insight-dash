import { Card } from "@/components/ui/card";

export const DashboardPreview = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
          See RealX in Action
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Experience the clean, intuitive interface that makes support management effortless
        </p>
        
        <Card className="relative overflow-hidden border-0 shadow-2xl max-w-5xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-muted to-secondary/30 flex items-center justify-center">
            <img 
              src="/lovable-uploads/a9127df5-9dda-488a-9236-df1128b29699.png"
              alt="RealX Dashboard Interface Preview"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Overlay with key features */}
          <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h3 className="text-2xl font-bold mb-4">Intuitive Dashboard</h3>
              <p className="text-lg opacity-90">
                Clean design, real-time data, and powerful insights all in one place
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};