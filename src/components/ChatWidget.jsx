import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const quickReplies = [
  'How does the AI design studio work?',
  'What visualization services do you offer?',
  'How do I shop from my design?',
  'What are your pricing plans?',
  'How do I become a partner brand?',
];

const aiResponses = {
  'design studio': 'Our AI Design Studio lets you upload a photo of your room, select your style and budget, and receive multiple professionally designed concepts with 3D renders, layouts, and a complete shoppable product list — all within minutes.',
  'visualization': 'We offer photorealistic exterior and interior renders, 360° panoramas, virtual walkthroughs, landscape visualization, urban planning concepts, and marketing visuals for architects and developers.',
  'shop': 'Every item in your AI-generated design is clickable and shoppable. Simply click on any product in your render to view details and add it to your cart. We partner with top furniture brands worldwide.',
  'pricing': 'Our Design Studio is free to try. Visualization projects start from $300. Marketplace products are priced by our partner brands. We also offer subscription plans for retailers starting at $99/month.',
  'partner': 'We partner with furniture brands, lighting suppliers, home decor retailers, and more. Partners get featured placement in AI-generated designs. Apply through our Marketplace page or email partners@atelierai.studio.',
  'payment': 'We accept Touch n Go e-wallet, bank transfer, and all major credit/debit cards (Visa, Mastercard, Amex). You can select your preferred payment method at checkout.',
  'delivery': 'Delivery times vary by product and brand, typically 1-4 weeks. Each product page shows estimated delivery. We deliver to 12 countries worldwide.',
  'refund': 'Refund policies are set by individual partner brands. Most offer 14-30 day returns. Contact us at support@atelierai.studio for assistance.',
  'contact': 'You can reach us at hello@atelierai.studio or call +1 (555) 234-5678. Our AI assistant is available 24/7 for instant answers.',
  'default': 'I\'d be happy to help with that. Could you provide more details about what you\'re looking for? You can also browse our Design Studio, Visualization, or Marketplace pages for more information.',
};

function getAIResponse(text) {
  const lower = text.toLowerCase();
  for (const [key, response] of Object.entries(aiResponses)) {
    if (lower.includes(key)) return response;
  }
  return aiResponses.default;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I\'m your Atelier AI assistant. I can help you with design, visualization, shopping, or any questions about our platform. What can I do for you today?' }
  ]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'ai', text: getAIResponse(text) }]);
    }, 1200);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-ink hover:bg-stone text-paper flex items-center justify-center transition-all shadow-lg"
      >
        {isOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <MessageCircle className="w-5 h-5" strokeWidth={1.5} />}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] h-[520px] bg-paper border border-line flex flex-col shadow-xl">
          {/* Header */}
          <div className="flex items-center gap-3 p-5 border-b border-line">
            <div className="w-8 h-8 bg-ink flex items-center justify-center">
              <Bot className="w-4 h-4 text-paper" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-serif text-ink text-sm">Atelier AI Assistant</p>
              <p className="text-[10px] text-stone flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                Online 24/7
              </p>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'ai' && (
                  <div className="w-6 h-6 bg-ink flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-3 h-3 text-paper" strokeWidth={1.5} />
                  </div>
                )}
                <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed ${
                  m.role === 'user' ? 'bg-ink text-paper' : 'bg-line/50 text-stone'
                }`}>
                  {m.text}
                </div>
                {m.role === 'user' && (
                  <div className="w-6 h-6 bg-stone flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-3 h-3 text-paper" strokeWidth={1.5} />
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="flex gap-3">
                <div className="w-6 h-6 bg-ink flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-paper" strokeWidth={1.5} />
                </div>
                <div className="bg-line/50 px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Replies */}
          <div className="px-5 py-3 border-t border-line overflow-x-auto flex gap-2 scrollbar-hide">
            {quickReplies.map((q, i) => (
              <button
                key={i}
                onClick={() => sendMessage(q)}
                className="flex-shrink-0 px-3 py-1.5 border border-line hover:border-stone text-[11px] text-stone hover:text-ink transition-all"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-line flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-transparent border border-line focus:border-stone focus:outline-none text-sm text-ink"
            />
            <button
              onClick={() => sendMessage(input)}
              className="w-10 h-10 bg-ink hover:bg-stone text-paper flex items-center justify-center transition-all"
            >
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
