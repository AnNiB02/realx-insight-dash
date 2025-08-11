import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { BarChart3, BookOpen, MessageSquare, Users } from "lucide-react";

const sidebarItems = [
  { icon: BarChart3, label: "Dashboard", href: "/dashboard", active: true },
  { icon: BookOpen, label: "Knowledge Base", href: "/knowledge", active: false },
  { icon: MessageSquare, label: "Chats", href: "/chats", active: false },
  { icon: Users, label: "Trainers", href: "/trainers", active: false },
];

export const DashboardSidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside 
      className={cn(
        "h-full bg-white border-r border-border transition-all duration-300 flex flex-col shadow-sm",
        isHovered ? "w-56" : "w-16"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-4 flex-1">
        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant={item.active ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-12",
                item.active && "bg-primary/10 text-primary hover:bg-primary/15",
                !isHovered && "px-2"
              )}
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              <span className={cn(
                "transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0 w-0"
              )}>
                {item.label}
              </span>
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};