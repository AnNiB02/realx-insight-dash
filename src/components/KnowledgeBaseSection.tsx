import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const knowledgeFeatures = [
  {
    icon: "🔍",
    title: "Lightning-Fast Search",
    description: "Type a keyword and instantly see relevant results — your team spends less time hunting for information and more time helping customers."
  },
  {
    icon: "🗂",
    title: "All Formats Supported", 
    description: "Whether it's typed content, a URL, or a PDF, your documentation stays accessible and beautifully organized."
  },
  {
    icon: "✏️",
    title: "Effortless Content Management",
    description: "Add, edit, or remove entries in seconds. Keep your knowledge base fresh and up-to-date without any technical hassle."
  },
  {
    icon: "📜", 
    title: "Rich Content Previews",
    description: "Read a quick snippet of each article without opening it fully, so you can find the right answer faster."
  }
];

export const KnowledgeBaseSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-accent-lavender/20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20 feature-reveal">
          <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Your Knowledge,{" "}
            <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">
              Organized & Searchable
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-12">
            Empower your support team and customers with the{" "}
            <span className="text-primary font-semibold">RealX Knowledge Base</span>{" "}
            — a central hub where every answer is just a search away. Manage guides, FAQs, 
            and documentation with ease, all in one intuitive interface.
          </p>
          
          {/* Animated Search Bar Preview */}
          <div className="relative max-w-2xl mx-auto mb-16">
            <div className="search-glow bg-white rounded-xl p-4 shadow-lg border-2 border-accent-blue/20">
              <div className="flex items-center gap-3">
                <div className="text-accent-blue">🔍</div>
                <div className="flex-1 text-left text-muted-foreground">
                  Search your knowledge base...
                </div>
                <Badge className="bg-accent-purple text-white animate-pulse">
                  Instant Results
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Knowledge Base Interface Preview */}
        <div className="mb-20">
          <Card className="relative overflow-hidden border-0 shadow-2xl max-w-6xl mx-auto">
            <div className="aspect-[16/10] bg-gradient-to-br from-muted to-secondary/30 flex items-center justify-center">
              <img 
                src="/lovable-uploads/b0f79d00-f83b-4cca-b986-97c62ce24060.png"
                alt="RealX Knowledge Base Interface"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            {/* Search Highlight Overlay */}
            <div className="absolute top-4 right-4 bg-warning/90 text-warning-foreground px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              "you own" highlighted
            </div>
          </Card>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {knowledgeFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`metric-card p-8 text-center border-0 animation-delay-${index * 200} hover:scale-105`}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Filter Tabs Preview */}
        <div className="text-center mb-12 feature-reveal">
          <h3 className="text-2xl font-bold text-primary mb-6">Organized by Content Type</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="px-6 py-2 text-sm">All</Badge>
            <Badge variant="outline" className="px-6 py-2 text-sm">Typed Content</Badge>
            <Badge variant="outline" className="px-6 py-2 text-sm">URL</Badge>
            <Badge variant="outline" className="px-6 py-2 text-sm">PDF File</Badge>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center feature-reveal">
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            From FAQs to detailed product guides — your answers, beautifully organized. 
            Let <span className="text-primary font-semibold">RealX</span> keep your knowledge base one step ahead.
          </p>
          
          <Button 
            size="lg" 
            className="demo-button text-lg px-8 py-4 rounded-xl"
          >
            Explore the Knowledge Base
          </Button>
        </div>
      </div>
      
      {/* Floating document icons */}
      <div className="absolute top-1/4 left-8 w-8 h-8 text-accent-blue opacity-30 animate-bounce">📄</div>
      <div className="absolute top-1/3 right-12 w-6 h-6 text-accent-purple opacity-25 animate-pulse animation-delay-1000">📝</div>
      <div className="absolute bottom-1/4 left-1/4 w-7 h-7 text-accent-lavender opacity-20 animate-bounce animation-delay-600">📋</div>
    </section>
  );
};