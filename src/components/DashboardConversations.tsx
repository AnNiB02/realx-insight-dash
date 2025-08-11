import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const conversations = [
  {
    user: "Sarah Chen",
    avatar: "/avatars/sarah.png",
    status: "resolved",
    message: "Thanks for the headphone recommendation! The sound quality is amazing.",
    time: "2 minutes ago",
    statusStyle: "bg-resolved-status text-resolved-status-foreground"
  },
  {
    user: "Mike Johnson", 
    avatar: "/avatars/mike.png",
    status: "active",
    message: "What's your return policy for electronics? Need to know before purchasing.",
    time: "5 minutes ago",
    statusStyle: "bg-active-status text-active-status-foreground"
  },
  {
    user: "Emma Davis",
    avatar: "/avatars/emma.png", 
    status: "pending", 
    message: "I need help with shipping costs to international addresses. Can you help?",
    time: "12 minutes ago",
    statusStyle: "bg-pending-status text-pending-status-foreground"
  },
  {
    user: "Alex Rivera",
    avatar: "/avatars/alex.png",
    status: "resolved",
    message: "Do you have wireless keyboards in stock? Looking for gaming setup.",
    time: "25 minutes ago", 
    statusStyle: "bg-resolved-status text-resolved-status-foreground"
  }
];

export const DashboardConversations = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Conversations</h3>
        <Badge variant="secondary" className="text-xs">
          {conversations.length} active
        </Badge>
      </div>
      
      <div className="space-y-4">
        {conversations.map((conversation, index) => (
          <div 
            key={conversation.user}
            className="flex items-start gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors cursor-pointer"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* User Avatar */}
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src={conversation.avatar} alt={conversation.user} />
              <AvatarFallback>
                {conversation.user.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            {/* Conversation Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-foreground text-sm truncate">
                  {conversation.user}
                </h4>
                <span className="text-xs text-muted-foreground flex-shrink-0 ml-2">
                  {conversation.time}
                </span>
              </div>
              
              <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
                {conversation.message}
              </p>
              
              <Badge 
                className={`text-xs ${conversation.statusStyle} capitalize`}
                variant="secondary"
              >
                {conversation.status}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};