import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, Bot, User } from "lucide-react";

const mockMessages = [
  {
    id: 1,
    type: "user" as const,
    content: "How can I track my support team's performance?",
    timestamp: "2:34 PM"
  },
  {
    id: 2,
    type: "bot" as const,
    content: "RealX Dashboard provides real-time analytics for conversation volumes, response times, and customer satisfaction scores. You can monitor everything from a single, clean interface.",
    timestamp: "2:34 PM"
  },
  {
    id: 3,
    type: "user" as const,
    content: "Can I integrate my existing knowledge base?",
    timestamp: "2:35 PM"
  },
  {
    id: 4,
    type: "bot" as const,
    content: "Absolutely! RealX seamlessly integrates with your existing knowledge base, making all your content searchable and easily accessible to your support team.",
    timestamp: "2:35 PM"
  }
];

export const AIChatInterface = () => {
  const [displayedMessages, setDisplayedMessages] = useState<typeof mockMessages>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Animate messages appearing one by one
    mockMessages.forEach((message, index) => {
      setTimeout(() => {
        if (index < mockMessages.length - 1) {
          setIsTyping(true);
        }
        setDisplayedMessages(prev => [...prev, message]);
        if (index === mockMessages.length - 1) {
          setIsTyping(false);
        }
      }, index * 2000);
    });
  }, []);

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0">
      {/* Chat Header */}
      <div className="flex items-center gap-3 p-4 border-b border-gray-100">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-full">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <div className="font-semibold text-gray-800">RealX AI Assistant</div>
          <div className="text-xs text-green-500 flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Online
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="h-80 overflow-y-auto p-4 space-y-4">
        {displayedMessages.map((message, index) => (
          <div
            key={message.id}
            className={`flex gap-3 animate-fade-in ${
              message.type === "user" ? "justify-end" : "justify-start"
            }`}
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            {message.type === "bot" && (
              <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1">
                <Bot className="w-3 h-3 text-white" />
              </div>
            )}
            
            <div
              className={`max-w-xs p-3 rounded-2xl ${
                message.type === "user"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-1 ${
                message.type === "user" ? "text-white/70" : "text-gray-500"
              }`}>
                {message.timestamp}
              </p>
            </div>

            {message.type === "user" && (
              <div className="flex items-center justify-center w-6 h-6 bg-gray-300 rounded-full flex-shrink-0 mt-1">
                <User className="w-3 h-3 text-gray-600" />
              </div>
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex gap-3 justify-start animate-fade-in">
            <div className="flex items-center justify-center w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1">
              <Bot className="w-3 h-3 text-white" />
            </div>
            <div className="bg-gray-100 p-3 rounded-2xl">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2 items-center bg-gray-50 rounded-full px-4 py-2">
          <MessageSquare className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Ask about RealX features..."
            className="flex-1 bg-transparent text-sm focus:outline-none text-gray-600"
            disabled
          />
          <Button size="sm" className="rounded-full w-8 h-8 p-0">
            <Send className="w-3 h-3" />
          </Button>
        </div>
      </div>
    </Card>
  );
};