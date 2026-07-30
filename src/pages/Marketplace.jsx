import { useState } from 'react';
import { Search, ShoppingBag, Star, ArrowRight, Sparkles, Heart, ChevronDown, ArrowUpRight } from 'lucide-react';
import { products, partnerBrands, roomDesigns } from '../data/products';
import { useCart } from '../context/CartContext';

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const { addItem } = useCart();

  const categories = ['All', 'Seating', 'Tables', 'Lighting', 'Storage'];
  const styles = ['All', 'Scandinavian', 'Mid-Century Modern', 'Modern', 'Contemporary'];

  const filteredProducts = products.filter(p => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchStyle = selectedStyle === 'All' || p.style === selectedStyle;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchStyle && matchSearch;
  });

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">AI Furniture Marketplace</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">Shop every item</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">in your design</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Every product featured in your AI-generated design is clickable, shoppable, and delivered to your door. Partnered with the world's finest furniture brands.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=700&fit=crop" 
              alt="Marketplace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 md:px-10 pb-12 border-t border-line pt-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-0 border-b border-line">
            {[
              { id: 'products', label: 'All Products' },
              { id: 'rooms', label: 'Shop by Room' },
              { id: 'brands', label: 'Partner Brands' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-[11px] tracking-[0.12em] uppercase border-b transition-all ${
                  activeTab === tab.id ? 'border-ink text-ink' : 'border-transparent text-stone hover:text-ink'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <>
          <section className="px-6 md:px-10 pb-12">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-line" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none transition-colors text-ink text-sm"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-5 py-3.5 pr-10 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="appearance-none px-5 py-3.5 pr-10 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                  >
                    {styles.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-10 pb-32">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-line">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-paper p-5 group hover:bg-paper/80 transition-all">
                    <div className="aspect-square relative overflow-hidden bg-line mb-4">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                      <button className="absolute top-3 right-3 w-7 h-7 bg-paper/80 flex items-center justify-center text-stone hover:text-ink transition-colors opacity-0 group-hover:opacity-100">
                        <Heart className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    </div>
                    <h3 className="font-serif text-ink text-sm">{product.name}</h3>
                    <p className="text-stone text-xs mt-0.5">{product.brand}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Star className="w-3 h-3 text-stone fill-stone" />
                      <span className="text-xs text-stone">{product.rating}</span>
                      <span className="text-xs text-line">({product.reviews})</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="font-serif text-ink">${product.price.toLocaleString()}</span>
                      <button
                        onClick={() => addItem(product)}
                        className="w-8 h-8 bg-ink hover:bg-stone text-paper flex items-center justify-center transition-all"
                      >
                        <ShoppingBag className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Shop by Room Tab */}
      {activeTab === 'rooms' && (
        <section className="px-6 md:px-10 pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {roomDesigns.map(room => (
                <div key={room.id} className="bg-paper group">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-paper/70">{room.roomType}</span>
                      <h3 className="font-serif text-lg text-white mt-0.5">{room.name}</h3>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-stone">{room.products.length} products</span>
                      <span className="font-serif text-ink">${room.budget.toLocaleString()}</span>
                    </div>
                    <button className="w-full py-3 border border-line hover:border-ink hover:bg-ink hover:text-paper text-ink text-[11px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-2 group/btn">
                      Shop This Room
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partner Brands Tab */}
      {activeTab === 'brands' && (
        <section className="px-6 md:px-10 pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
              {partnerBrands.map((brand, i) => (
                <div key={i} className="bg-paper p-10 text-center hover:bg-paper/80 transition-all group">
                  <div className="w-12 h-12 border border-line flex items-center justify-center text-stone text-sm font-serif mx-auto mb-4 group-hover:border-stone transition-all">
                    {brand.logo}
                  </div>
                  <h3 className="font-serif text-ink">{brand.name}</h3>
                  <span className="text-xs text-stone">{brand.category}</span>
                </div>
              ))}
            </div>

            <div className="mt-24 p-12 md:p-16 border border-line text-center">
              <Sparkles className="w-6 h-6 text-stone mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl text-ink mb-4">Become a Partner Brand</h3>
              <p className="text-stone max-w-md mx-auto mb-8 leading-relaxed text-sm">
                Join our marketplace and have your products featured in AI-generated designs. Reach customers at the exact moment they're ready to buy.
              </p>
              <button className="px-10 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all">
                Apply as Partner
              </button>
            </div>
          </div>
        </section>
      )}

      {/* AI Shopping Assistant */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/09 AI Shopping Assistant</span>
              <h2 className="font-serif text-ink leading-[1.1] mb-8">
                <span className="block text-[clamp(2rem,4vw,3rem)]">Your personal</span>
                <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">design consultant</em>
              </h2>
              <p className="text-stone text-sm leading-[1.9] mb-8">
                Our AI doesn't just design — it shops with you. Ask for alternatives at different price points, matching collections, complementary accessories, or sustainable options.
              </p>
              <div className="space-y-3">
                {[
                  'Find similar chairs under $500',
                  'Show me matching side tables',
                  'Recommend sustainable lighting options',
                  'What rug would complement this sofa?',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 py-3 border-b border-line">
                    <span className="text-[10px] text-stone">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm text-stone">"{q}"</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-line p-8">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-line">
                <Sparkles className="w-4 h-4 text-stone" strokeWidth={1.5} />
                <div>
                  <p className="font-serif text-ink text-sm">AI Assistant</p>
                  <p className="text-[10px] text-stone">Online</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-7 h-7 bg-ink flex items-center justify-center text-[9px] text-paper flex-shrink-0">You</div>
                  <div className="bg-line/50 px-4 py-3 text-sm text-stone max-w-[80%]">
                    I'm designing a Scandinavian living room with a $3,000 budget. What sofa should I get?
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="bg-line/50 px-4 py-4 text-sm text-stone max-w-[80%]">
                    <p className="mb-3">Great choice! For Scandinavian style at $3,000:</p>
                    <div className="space-y-2">
                      <div className="p-3 bg-paper border border-line">
                        <p className="font-serif text-ink text-sm">Muuto Oslo Sofa — $4,290</p>
                        <p className="text-xs text-stone">Premium with modular configuration</p>
                      </div>
                      <div className="p-3 bg-paper border border-line">
                        <p className="font-serif text-ink text-sm">IKEA SÖDERHAMN — $899</p>
                        <p className="text-xs text-stone">Budget-friendly, washable covers</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-stone">Would you like to see matching armchairs?</p>
                  </div>
                  <div className="w-7 h-7 bg-line flex items-center justify-center text-[9px] text-stone flex-shrink-0">AI</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-line">
                <div className="flex gap-2">
                  <input type="text" placeholder="Ask the AI assistant..." className="flex-1 px-4 py-3 bg-transparent border border-line focus:border-stone focus:outline-none text-sm text-ink" />
                  <button className="px-4 py-3 bg-ink hover:bg-stone text-paper transition-all">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
