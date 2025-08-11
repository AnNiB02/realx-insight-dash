import { DashboardTopNav } from "@/components/DashboardTopNav";
import { DashboardSidebar } from "@/components/DashboardSidebar";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { DashboardConversations } from "@/components/DashboardConversations";
import { DashboardInsights } from "@/components/DashboardInsights";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-background">
      <DashboardTopNav />
      
      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebar />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8 max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-foreground mb-2">Dashboard</h1>
              <p className="text-muted-foreground">
                Welcome back! Here's what's happening with your support operations today.
              </p>
            </div>
            
            {/* Metrics Cards */}
            <DashboardMetrics />
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Conversations - Takes 2 columns */}
              <div className="lg:col-span-2">
                <DashboardConversations />
              </div>
              
              {/* Quick Actions or Additional Info */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
                  <h3 className="font-semibold text-foreground mb-2">Quick Actions</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Streamline your workflow with these shortcuts.
                  </p>
                  <div className="space-y-2">
                    <button className="w-full text-left p-2 text-sm text-primary hover:bg-primary/10 rounded transition-colors">
                      📝 Add Knowledge Article
                    </button>
                    <button className="w-full text-left p-2 text-sm text-primary hover:bg-primary/10 rounded transition-colors">
                      👥 Invite Team Member  
                    </button>
                    <button className="w-full text-left p-2 text-sm text-primary hover:bg-primary/10 rounded transition-colors">
                      📊 Generate Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Insights Section */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-6">Quick Insights</h2>
              <DashboardInsights />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;