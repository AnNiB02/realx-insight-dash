import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const conversations = [
  {
    user: "user-001",
    status: "resolved",
    message: "Thanks for the headphone recommendation!",
    time: "2 minutes ago",
    statusColor: "bg-success"
  },
  {
    user: "user-002", 
    status: "active",
    message: "What's your return policy?",
    time: "5 minutes ago",
    statusColor: "bg-primary"
  },
  {
    user: "user-003",
    status: "pending", 
    message: "I need help with shipping costs",
    time: "12 minutes ago",
    statusColor: "bg-warning"
  },
  {
    user: "user-004",
    status: "resolved",
    message: "Do you have wireless keyboards?",
    time: "25 minutes ago", 
    statusColor: "bg-success"
  }
];

export const ConversationFeed = () => {
  return (
    <section className="py-20 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="feature-reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              💬 Live Conversation Feed
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              See what's happening right now. Stay close to your customers with a live feed 
              of recent conversations, color-coded by status: active, resolved, or pending.
            </p>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-success text-success-foreground">Resolved</Badge>
              <Badge className="bg-primary text-primary-foreground">Active</Badge>
              <Badge className="bg-warning text-warning-foreground">Pending</Badge>
            </div>
          </div>
          
          {/* Conversation Cards */}
          <div className="space-y-4">
            {conversations.map((conversation, index) => (
              <Card 
                key={conversation.user}
                className={`chat-bubble p-6 border-l-4 border-l-${conversation.status === 'resolved' ? 'success' : conversation.status === 'active' ? 'primary' : 'warning'} animation-delay-${index * 200}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-primary">{conversation.user}</span>
                    <Badge 
                      className={`${conversation.statusColor} text-white text-xs`}
                    >
                      {conversation.status}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{conversation.time}</span>
                </div>
                <p className="text-muted-foreground">{conversation.message}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};