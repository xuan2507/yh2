import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowRight, Clock, Package, CreditCard, HelpCircle, Wrench, Palette, Eye, ShoppingBag, Phone, Mail, ExternalLink, ThumbsUp, ThumbsDown, RotateCcw } from 'lucide-react';
import { products, roomDesigns } from '../data/products';

// ─── Intent Engine ─────────────────────────────────────────────

const intents = {
  greeting: {
    patterns: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening', 'greetings', 'yo', 'sup', 'howdy'],
    response: (ctx) => {
      const hour = new Date().getHours();
      const timeGreeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';
      return {
        text: `${timeGreeting}! I'm your xuantelier assistant. I can help you with AI room design, shopping furniture, finding experts, or navigating our platform. What brings you here today?`,
        suggestions: ['Design my room', 'Browse products', 'Find an expert', 'Pricing info'],
      };
    },
  },

  designStudio: {
    patterns: ['design studio', 'design my room', 'redesign', 'room design', 'interior design', 'ai design', 'virtual design', 'design service', 'how does design work', 'upload photo', 'room makeover'],
    response: () => ({
      text: `Our AI Design Studio transforms your space in 3 simple steps:

1. **Upload** a photo of your room
2. **Choose** your style, budget, and preferences
3. **Receive** photorealistic 3D renders, floor plans, and a complete shoppable product list — all within minutes.

You get 3 design concepts per room. Each concept includes a 360° walkthrough you can explore.`,
      suggestions: ['Start designing', 'See walkthrough demo', 'How much does it cost?', 'What styles are available?'],
      actions: [{ label: 'Launch Design Studio', href: '/design-studio', icon: Palette }],
    }),
  },

  visualization: {
    patterns: ['visualization', '3d render', 'rendering', 'exterior render', 'interior render', 'panorama', 'virtual tour', 'walkthrough', '360 tour', 'marketing visual', 'architectural visualization'],
    response: () => ({
      text: `We offer professional visualization services for homeowners, architects, and developers:

• **Interior Renders** — Photorealistic room visualizations
• **Exterior Renders** — Building facades, landscaping, context
• **360° Panoramas** — Immersive room experiences
• **Virtual Walkthroughs** — Multi-scene, interactive tours with shoppable hotspots
• **Marketing Visuals** — For property listings and pre-sales

Projects start from $300. Turnaround is typically 3-5 business days.`,
      suggestions: ['Request a quote', 'See walkthrough examples', 'What formats do you deliver?'],
      actions: [{ label: 'Explore Visualization', href: '/visualization', icon: Eye }],
    }),
  },

  walkthrough: {
    patterns: ['walkthrough', '360 walkthrough', 'virtual walkthrough', 'room tour', 'interactive tour', 'panorama', 'look around', 'immersive tour'],
    response: () => ({
      text: `Our 360° walkthroughs let you step inside AI-designed spaces and look around freely. Click and drag to pan in any direction. Every piece of furniture is tagged — click a hotspot to see the actual product, its price, and add it to your cart.

We currently have 5 demo walkthroughs ranging from Scandinavian living rooms to Neo-Industrial lofts.`,
      suggestions: ['Try a walkthrough', 'How are walkthroughs made?', 'Can I get one for my design?'],
      actions: [{ label: 'Explore Walkthroughs', href: '/walkthrough', icon: Eye }],
    }),
  },

  marketplace: {
    patterns: ['marketplace', 'shop', 'buy furniture', 'products', 'furniture', 'shopping', 'catalog', 'store', 'browse items', 'product list'],
    response: () => ({
      text: `Our marketplace features curated furniture and decor from the world's finest brands — Herman Miller, Knoll, Flos, Vitra, B&B Italia, and 13+ more partners.

Every product in your AI-generated design is directly shoppable. Click any item in your render or walkthrough to view specs, colors, and pricing.`,
      suggestions: ['Browse all products', 'Shop by room', 'Partner brands', 'Delivery info'],
      actions: [{ label: 'Visit Marketplace', href: '/marketplace', icon: ShoppingBag }],
    }),
  },

  productInquiry: {
    patterns: ['sofa', 'chair', 'lamp', 'table', 'rug', 'bed', 'storage', 'shelf', 'pendant', 'eames', 'barcelona', 'wishbone', 'noguchi', 'oslo', 'togo'],
    response: (ctx, text) => {
      const query = text.toLowerCase();
      const matches = products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.brand.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.tags.some(t => t.toLowerCase().includes(query))
      ).slice(0, 3);

      if (matches.length === 0) {
        return {
          text: `I couldn't find a specific product matching that. We carry 28+ curated pieces from brands like Herman Miller, Knoll, Flos, and Vitra. Would you like to browse by category?`,
          suggestions: ['Browse seating', 'Browse lighting', 'Browse tables', 'See all products'],
          actions: [{ label: 'Open Marketplace', href: '/marketplace', icon: ShoppingBag }],
        };
      }

      const productCards = matches.map(p => ({
        id: p.id,
        name: p.name,
        brand: p.brand,
        price: p.price,
        image: p.image,
        category: p.category,
      }));

      return {
        text: `I found ${matches.length} product${matches.length > 1 ? 's' : ''} that might interest you:`,
        products: productCards,
        suggestions: matches.length < 3 ? [] : ['Show more like this', 'Similar under $500', 'What goes with this?'],
      };
    },
  },

  pricing: {
    patterns: ['price', 'pricing', 'cost', 'how much', 'fee', 'subscription', 'plan', 'budget', 'payment', 'cheap', 'expensive', 'affordable'],
    response: () => ({
      text: `Here's our pricing breakdown:

**Design Studio**
• First room design — **Free**
• Additional rooms — from $29/room
• Commercial projects — custom quote

**Visualization**
• Interior renders — from $300
• Exterior renders — from $500
• 360° walkthroughs — from $800

**Marketplace**
• Products priced by partner brands
• Free shipping on orders over $500
• 30-day returns on most items

**Partner Plans**
• Retailer subscription — $99/month
• Enterprise — custom pricing`,
      suggestions: ['Design Studio pricing', 'Visualization quote', 'Partner program', 'Refund policy'],
    }),
  },

  payment: {
    patterns: ['payment', 'pay', 'credit card', 'visa', 'mastercard', 'touch n go', 'tng', 'bank transfer', 'installment', 'checkout', 'billing'],
    response: () => ({
      text: `We accept multiple payment methods for your convenience:

• **Credit/Debit Cards** — Visa, Mastercard, American Express
• **Touch 'n Go eWallet** — Instant, no fees
• **Bank Transfer** — FPX (Malaysia), PayNow (Singapore), ACH (US)
• **Buy Now Pay Later** — Atome, Grab PayLater (where available)

All transactions are encrypted with 256-bit SSL. Your payment info is never stored on our servers.`,
      suggestions: ['Is my payment secure?', 'Refund policy', 'Payment failed help'],
    }),
  },

  delivery: {
    patterns: ['delivery', 'shipping', 'how long', 'arrive', 'track order', 'shipping time', 'when will it arrive', 'courier', 'freight', 'logistics'],
    response: () => ({
      text: `Delivery varies by product and partner brand:

• **In-stock items** — 3-5 business days
• **Standard furniture** — 1-3 weeks
• **Made-to-order** — 4-8 weeks
• **International** — 2-4 weeks

**Free shipping** on orders over $500. Each product page shows the estimated delivery time before you add to cart.

You can track your order in real-time from your account dashboard.`,
      suggestions: ['Track my order', 'International shipping', 'What if my item is damaged?'],
    }),
  },

  refund: {
    patterns: ['refund', 'return', 'exchange', 'money back', 'cancel order', 'not satisfied', 'wrong item', 'damaged', 'warranty', 'claim'],
    response: () => ({
      text: `Return policies are set by individual partner brands, but most offer:

• **14-30 day returns** on unused items in original packaging
• **Defective items** — full refund or replacement, we cover return shipping
• **Wrong item sent** — immediate exchange at no cost
• **Custom/made-to-order** — non-returnable unless defective

To initiate a return, email **support@xuantelier.com** with your order number and photos (if damaged). We process refunds within 5-7 business days.`,
      suggestions: ['Contact support', 'My order status', 'Warranty info'],
    }),
  },

  experts: {
    patterns: ['expert', 'professional', 'architect', 'contractor', 'designer', 'interior designer', 'property agent', 'landscaper', 'engineer', 'consultant', 'find an expert', 'hire', 'recommend'],
    response: () => ({
      text: `Our Expert Network connects you with verified professionals worldwide — property agents, architects, interior designers, contractors, engineers, landscapers, and specialists.

Each expert has a full portfolio page showing:
• Past projects with photos and budgets
• Client testimonials and ratings
• Services offered with transparent pricing
• Education, awards, and credentials

All experts are identity-verified and background-checked by xuantelier.`,
      suggestions: ['Browse all experts', 'Find an architect', 'Find a contractor', 'How do I hire?'],
      actions: [{ label: 'View Expert Network', href: '/professionals', icon: Wrench }],
    }),
  },

  partner: {
    patterns: ['partner', 'become a partner', 'sell on', 'vendor', 'supplier', 'brand partnership', 'list products', 'wholesale', 'retailer'],
    response: () => ({
      text: `We partner with furniture brands, lighting suppliers, home decor retailers, and material manufacturers who want to reach design-minded customers at the exact moment they're ready to buy.

**Partner Benefits:**
• Featured placement in AI-generated designs
• Direct integration into 360° walkthroughs
• Access to buyer intent data
• Co-marketing opportunities

**Plans:** Retailer subscription starts at $99/month. Enterprise plans available for large catalogs.`,
      suggestions: ['Apply as partner', 'Partner benefits', 'Commission structure'],
      actions: [{ label: 'Apply as Partner', href: '/partners', icon: ExternalLink }],
    }),
  },

  contact: {
    patterns: ['contact', 'email', 'phone', 'call', 'reach', 'support', 'help desk', 'customer service', 'talk to human', 'agent', 'live chat'],
    response: () => ({
      text: `You can reach us through multiple channels:

📧 **Email:** hello@xuantelier.com
📞 **Phone:** +1 (555) 234-5678
💬 **AI Assistant:** Available 24/7 (that's me!)

**Support Hours:**
• Monday–Friday: 9am–6pm SGT / CET / EST
• Saturday: 10am–4pm

For urgent issues, call us directly. For general questions, I'm here around the clock.`,
      suggestions: ['Email support', 'Report a bug', 'Business inquiry'],
    }),
  },

  account: {
    patterns: ['account', 'login', 'sign in', 'sign up', 'register', 'password', 'forgot password', 'my orders', 'order history', 'dashboard', 'profile'],
    response: () => ({
      text: `Manage your xuantelier account to track orders, save designs, and manage your preferences.

**Account Features:**
• Save and revisit AI-generated designs
• Track marketplace orders in real-time
• Manage your expert consultations
• Save favorite products and room concepts
• Access exclusive partner discounts

Your data is encrypted and never shared with third parties.`,
      suggestions: ['Create account', 'Reset password', 'Privacy policy'],
    }),
  },

  styles: {
    patterns: ['style', 'scandinavian', 'mid-century', 'modern', 'japandi', 'industrial', 'minimalist', 'contemporary', 'bohemian', 'luxury', 'classic'],
    response: () => ({
      text: `Our AI is trained on 50+ design styles. Popular options include:

• **Scandinavian** — Clean lines, natural wood, neutral palettes, hygge comfort
• **Mid-Century Modern** — Iconic pieces, warm woods, bold colors, tapered legs
• **Japandi** — Japanese minimalism meets Scandinavian warmth
• **Modern Minimal** — Stripped-back, functional, gallery-like spaces
• **Neo-Industrial** — Exposed materials, raw textures, warehouse aesthetics
• **Contemporary** — Current trends, mixed materials, statement pieces

Not sure which fits you? Upload your room and our AI will suggest styles based on your space.`,
      suggestions: ['Scandinavian examples', 'Mid-century examples', 'Take a style quiz', 'See all styles'],
    }),
  },

  roomTypes: {
    patterns: ['living room', 'bedroom', 'kitchen', 'bathroom', 'dining room', 'office', 'entryway', 'balcony', 'studio', 'apartment', 'house'],
    response: (ctx, text) => {
      const roomMatch = roomDesigns.find(r =>
        text.toLowerCase().includes(r.roomType.toLowerCase()) ||
        text.toLowerCase().includes(r.style.toLowerCase())
      );
      if (roomMatch) {
        return {
          text: `I found a ${roomMatch.style} ${roomMatch.roomType} concept in our collection. It features ${roomMatch.products.length} curated products with a total budget of $${roomMatch.budget.toLocaleString()}.

**Highlights:** ${roomMatch.highlights.join(', ')}`,
          suggestions: ['Shop this room', 'See similar rooms', 'Customize this design'],
          actions: [{ label: 'View Room Concept', href: '/marketplace', icon: Eye }],
        };
      }
      return {
        text: `We can design virtually any room type — living rooms, bedrooms, kitchens, dining rooms, home offices, entryways, and even outdoor spaces. Our AI adapts to your room's dimensions, lighting, and existing architecture.

Which room are you looking to redesign?`,
        suggestions: ['Living room', 'Bedroom', 'Kitchen', 'Home office'],
      };
    },
  },

  comparison: {
    patterns: ['compare', 'difference', 'vs', 'versus', 'better', 'which one', 'should i choose', 'recommendation', 'what do you suggest', 'help me decide'],
    response: (ctx, text) => {
      if (text.toLowerCase().includes('sofa') || text.toLowerCase().includes('chair')) {
        return {
          text: `For seating, here are some popular comparisons:

**Budget-friendly:** HAY AAC22 ($325) — versatile, modern, great for dining
**Mid-range:** Muuto Oslo Sofa ($4,290) — deep comfort, modular, Scandinavian
**Investment:** Eames Lounge Chair ($6,995) — iconic, handcrafted, lasts generations

Tell me your budget and room type, and I'll narrow it down.`,
          suggestions: ['Under $500', '$500–$2,000', '$2,000+', 'Most comfortable'],
        };
      }
      if (text.toLowerCase().includes('lamp') || text.toLowerCase().includes('light')) {
        return {
          text: `For lighting:

**Ambient:** PH5 Pendant ($895) — glare-free, classic Scandinavian
**Task:** Tolomeo Mini ($395) — adjustable, perfect for desks
**Statement:** Arco Floor Lamp ($2,450) — sculptural, dramatic overhead light

What room is this for?`,
          suggestions: ['Living room lighting', 'Bedroom lighting', 'Office lighting', 'Dining lighting'],
        };
      }
      return {
        text: `I'd be happy to help you compare options. To give you the best recommendation, could you tell me:

1. What type of product? (furniture, lighting, decor)
2. Your approximate budget?
3. Which room is it for?
4. Any style preferences?`,
        suggestions: ['Compare sofas', 'Compare lighting', 'Compare tables', 'Full room budget'],
      };
    },
  },

  thanks: {
    patterns: ['thank', 'thanks', 'appreciate', 'grateful', 'cheers', 'awesome', 'great help', 'you rock'],
    response: () => ({
      text: `You're very welcome! I'm glad I could help. If you need anything else — design ideas, product recommendations, or expert connections — just ask. Enjoy creating your space!`,
      suggestions: ['Design my room', 'Browse marketplace', 'Find an expert'],
    }),
  },

  goodbye: {
    patterns: ['bye', 'goodbye', 'see you', 'later', 'cya', 'talk soon', 'night', 'sleep'],
    response: () => ({
      text: `Goodbye! Feel free to come back anytime — I'm here 24/7. Have a wonderful day!`,
      suggestions: [],
    }),
  },

  negative: {
    patterns: ['bad', 'terrible', 'worst', 'hate', 'awful', 'suck', 'stupid', 'useless', 'broken', 'not working', 'frustrated', 'angry', 'disappointed'],
    response: () => ({
      text: `I'm sorry to hear you're frustrated. I want to make this right for you.

Could you tell me more about what went wrong? If it's urgent, I can connect you with a human support agent right away.

• **Technical issue** — I'll escalate to our engineering team
• **Order problem** — I'll connect you with fulfillment support
• **General feedback** — We read every message and improve based on it`,
      suggestions: ['Talk to human support', 'Report a bug', 'Order issue', 'Leave feedback'],
    }),
  },

  fallback: {
    patterns: [],
    response: (ctx, text) => {
      // Try to detect if it's a product query that slipped through
      const lower = text.toLowerCase();
      const productHint = products.some(p =>
        p.name.toLowerCase().includes(lower) ||
        p.brand.toLowerCase().includes(lower) ||
        p.category.toLowerCase().includes(lower)
      );

      if (productHint) {
        return intents.productInquiry.response(ctx, text);
      }

      return {
        text: `I'm not sure I understood that correctly. I can help you with:

• AI room design and 3D visualization
• Furniture shopping and product recommendations
• Finding architects, contractors, and designers
• Orders, delivery, and returns
• Pricing and partner programs

What would you like to explore?`,
        suggestions: ['Design my room', 'Browse products', 'Find an expert', 'Contact support'],
      };
    },
  },
};

function detectIntent(text) {
  const lower = text.toLowerCase();
  for (const [key, intent] of Object.entries(intents)) {
    if (key === 'fallback') continue;
    if (intent.patterns.some(p => lower.includes(p))) return key;
  }
  return 'fallback';
}

// ─── Component ─────────────────────────────────────────────────

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem('xuantelier_chat');
    if (saved) {
      try { return JSON.parse(saved); } catch { /* ignore */ }
    }
    return [
      {
        role: 'ai',
        text: "Hello! I'm your xuantelier assistant. I can help you design your space, shop furniture, find experts, or answer any questions. What can I do for you today?",
        suggestions: ['Design my room', 'Browse products', 'Find an expert', 'Pricing'],
      }
    ];
  });
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [feedbackMap, setFeedbackMap] = useState({});
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing]);

  useEffect(() => {
    sessionStorage.setItem('xuantelier_chat', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const generateResponse = useCallback((text) => {
    const intentKey = detectIntent(text);
    const intent = intents[intentKey];
    return intent.response({}, text);
  }, []);

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { role: 'user', text }]);
    setInput('');
    setTyping(true);

    const response = generateResponse(text);
    const delay = Math.min(800 + text.length * 15, 2000);

    setTimeout(() => {
      setTyping(false);
      setMessages(prev => [...prev, { role: 'ai', ...response }]);
    }, delay);
  }, [generateResponse]);

  const handleFeedback = (msgIndex, type) => {
    setFeedbackMap(prev => ({ ...prev, [msgIndex]: type }));
  };

  const clearChat = () => {
    const welcome = {
      role: 'ai',
      text: "Hello! I'm your xuantelier assistant. I can help you design your space, shop furniture, find experts, or answer any questions. What can I do for you today?",
      suggestions: ['Design my room', 'Browse products', 'Find an expert', 'Pricing'],
    };
    setMessages([welcome]);
    sessionStorage.removeItem('xuantelier_chat');
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-ink hover:bg-stone text-paper flex items-center justify-center transition-all shadow-lg group"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? (
          <X className="w-5 h-5" strokeWidth={1.5} />
        ) : (
          <>
            <MessageCircle className="w-5 h-5 group-hover:hidden" strokeWidth={1.5} />
            <Sparkles className="w-5 h-5 hidden group-hover:block" strokeWidth={1.5} />
          </>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)] h-[560px] bg-paper border border-line flex flex-col shadow-2xl animate-fade-in-up">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-line bg-paper">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-ink flex items-center justify-center">
                <Bot className="w-4 h-4 text-paper" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-serif text-ink text-sm">xuantelier Assistant</p>
                <p className="text-[10px] text-stone flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                  Online 24/7 · AI-powered
                </p>
              </div>
            </div>
            <button
              onClick={clearChat}
              className="text-stone hover:text-ink transition-colors p-1"
              title="Clear conversation"
            >
              <RotateCcw className="w-3.5 h-3.5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i}>
                <div className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : ''}`}>
                  {m.role === 'ai' && (
                    <div className="w-6 h-6 bg-ink flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3 h-3 text-paper" strokeWidth={1.5} />
                    </div>
                  )}
                  <div className="min-w-0 max-w-[82%]">
                    <div className={`px-4 py-3 text-sm leading-relaxed whitespace-pre-line ${
                      m.role === 'user' ? 'bg-ink text-paper' : 'bg-line/40 text-stone'
                    }`}>
                      {m.text}
                    </div>

                    {/* Product cards */}
                    {m.products && (
                      <div className="mt-2 space-y-2">
                        {m.products.map(p => (
                          <Link
                            key={p.id}
                            to={`/marketplace?product=${p.id}`}
                            onClick={() => setIsOpen(false)}
                            className="flex gap-3 p-2.5 bg-paper border border-line hover:border-stone transition-colors group"
                          >
                            <div className="w-14 h-14 bg-line flex-shrink-0 overflow-hidden">
                              <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-ink text-xs font-medium truncate">{p.name}</p>
                              <p className="text-stone text-[10px]">{p.brand} · {p.category}</p>
                              <p className="font-serif text-ink text-xs mt-0.5">${p.price.toLocaleString()}</p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-line group-hover:text-stone flex-shrink-0 self-center transition-colors" strokeWidth={1.5} />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Action buttons */}
                    {m.actions && (
                      <div className="mt-2 flex flex-wrap gap-2">
                        {m.actions.map((a, j) => (
                          <Link
                            key={j}
                            to={a.href}
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center gap-1.5 px-3 py-2 bg-ink hover:bg-stone text-paper text-[11px] tracking-wide transition-colors"
                          >
                            {a.icon && <a.icon className="w-3 h-3" strokeWidth={1.5} />}
                            {a.label}
                            <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Feedback */}
                    {m.role === 'ai' && messages.length > 1 && (
                      <div className="flex items-center gap-2 mt-1.5 ml-1">
                        <button
                          onClick={() => handleFeedback(i, 'up')}
                          className={`p-1 transition-colors ${feedbackMap[i] === 'up' ? 'text-ink' : 'text-line hover:text-stone'}`}
                        >
                          <ThumbsUp className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                        <button
                          onClick={() => handleFeedback(i, 'down')}
                          className={`p-1 transition-colors ${feedbackMap[i] === 'down' ? 'text-ink' : 'text-line hover:text-stone'}`}
                        >
                          <ThumbsDown className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                    )}
                  </div>
                  {m.role === 'user' && (
                    <div className="w-6 h-6 bg-stone flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3 h-3 text-paper" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Suggestions */}
                {m.suggestions && m.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 ml-9">
                    {m.suggestions.map((s, j) => (
                      <button
                        key={j}
                        onClick={() => sendMessage(s)}
                        className="px-3 py-1.5 border border-line hover:border-stone text-[11px] text-stone hover:text-ink transition-all"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex gap-2.5">
                <div className="w-6 h-6 bg-ink flex items-center justify-center flex-shrink-0">
                  <Bot className="w-3 h-3 text-paper" strokeWidth={1.5} />
                </div>
                <div className="bg-line/40 px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-stone rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick topic chips (when idle) */}
          {messages.length === 1 && !typing && (
            <div className="px-4 pb-3 border-t border-line pt-3">
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone mb-2">Popular topics</p>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { label: 'Design Studio', icon: Palette, query: 'How does the design studio work?' },
                  { label: 'Products', icon: ShoppingBag, query: 'Browse products' },
                  { label: 'Experts', icon: Wrench, query: 'Find an expert' },
                  { label: 'Pricing', icon: CreditCard, query: 'Pricing plans' },
                ].map((t, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(t.query)}
                    className="flex items-center gap-2 px-3 py-2.5 border border-line hover:border-stone hover:bg-line/20 transition-all text-left"
                  >
                    <t.icon className="w-3.5 h-3.5 text-stone" strokeWidth={1.5} />
                    <span className="text-[11px] text-stone">{t.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 border-t border-line flex gap-2 bg-paper">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
              placeholder="Ask me anything..."
              className="flex-1 px-4 py-2.5 bg-transparent border border-line focus:border-stone focus:outline-none text-sm text-ink placeholder:text-line"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim()}
              className="w-10 h-10 bg-ink hover:bg-stone disabled:opacity-30 disabled:hover:bg-ink text-paper flex items-center justify-center transition-all"
            >
              <Send className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
