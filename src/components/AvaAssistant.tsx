import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Send, Sparkles } from "lucide-react";

const AnimatedAvatar = ({ isTyping, shouldWave }: { isTyping: boolean; shouldWave: boolean }) => {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 150);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="relative w-20 h-20 mx-auto mb-4">
      {/* Avatar circle background with breathing animation */}
      <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-pulse shadow-lg flex items-center justify-center relative overflow-hidden">
        {/* Face */}
        <div className={`transform transition-transform duration-300 ${shouldWave ? 'rotate-12' : ''}`}>
          {/* Eyes */}
          <div className="flex gap-2 mb-1">
            <div className={`w-2 h-2 bg-white rounded-full transition-all duration-150 ${isBlinking ? 'h-0.5' : ''}`}></div>
            <div className={`w-2 h-2 bg-white rounded-full transition-all duration-150 ${isBlinking ? 'h-0.5' : ''}`}></div>
          </div>
          {/* Smile */}
          <div className="w-3 h-1.5 border-b-2 border-white rounded-full"></div>
        </div>
        
        {/* Breathing glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-50 animate-ping"></div>
      </div>
      
      {/* Sparkles around avatar */}
      <div className="absolute -top-1 -right-1">
        <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute -bottom-1 -left-1">
        <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
    </div>
  );
};

const TypingDots = () => (
  <div className="flex gap-1 p-3">
    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
  </div>
);

export const AvaAssistant = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [shouldWave, setShouldWave] = useState(false);
  const [showGreeting, setShowGreeting] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    
    // Trigger wave animation when user starts typing
    if (value.length === 1) {
      setShouldWave(true);
      setTimeout(() => setShouldWave(false), 600);
    }
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      setIsTyping(true);
      setShowGreeting(false);
      
      // Simulate response delay
      setTimeout(() => {
        setIsTyping(false);
        setInputValue("");
      }, 2000);
    }
  };

  return (
    <Card className="w-full max-w-md bg-white/95 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
      {/* Header with Avatar */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 text-center">
        <AnimatedAvatar isTyping={isTyping} shouldWave={shouldWave} />
        <h3 className="font-bold text-gray-800 mb-1">Ava</h3>
        <div className="flex items-center justify-center gap-1 text-xs text-green-500">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          AI Assistant • Online
        </div>
      </div>

      {/* Chat Area */}
      <div className="h-80 overflow-y-auto p-4">
        {/* Greeting Message */}
        {showGreeting && (
          <div className="animate-fade-in mb-4">
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-2xl">
              <div className="flex items-start gap-2">
                <div className="text-2xl">👋</div>
                <div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <strong>Hi there!</strong> I'm Ava, your AI chat assistant. I'm here around the clock to answer your questions, guide you through our platform, and help you get things done — quickly and with a smile. 
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Just type your message below, and I'll reply instantly! ✨
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Sample conversation after user interaction */}
        {!showGreeting && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex justify-end">
              <div className="bg-purple-500 text-white p-3 rounded-2xl max-w-xs">
                <p className="text-sm">How does RealX help with customer support?</p>
              </div>
            </div>
            
            {isTyping && (
              <div className="flex gap-2">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="bg-gray-100 rounded-2xl">
                  <TypingDots />
                </div>
              </div>
            )}

            {!isTyping && !showGreeting && (
              <div className="flex gap-2 animate-fade-in">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="bg-gray-100 p-3 rounded-2xl max-w-xs">
                  <p className="text-sm text-gray-700">
                    RealX provides a unified dashboard where you can monitor all your support conversations, track key metrics like response times, and manage your knowledge base — all in one beautiful, intuitive interface! 🚀
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="flex gap-2 items-center bg-white rounded-full px-4 py-2 shadow-sm border">
          <input
            type="text"
            placeholder="Ask me anything about RealX..."
            value={inputValue}
            onChange={handleInputChange}
            className="flex-1 bg-transparent text-sm focus:outline-none text-gray-700 placeholder-gray-400"
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button 
            size="sm" 
            onClick={handleSend}
            className="rounded-full w-8 h-8 p-0 bg-purple-500 hover:bg-purple-600 transition-colors"
            disabled={!inputValue.trim()}
          >
            <Send className="w-3 h-3" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">
          Powered by RealX AI • Always learning, always helping
        </p>
      </div>
    </Card>
  );
};