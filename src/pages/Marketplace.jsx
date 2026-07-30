import { useState } from 'react';
import { Search, Filter, ShoppingBag, Star, ArrowRight, Sparkles, Heart, ChevronDown, ArrowUpRight } from 'lucide-react';
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
    <div className="pt-32">
      {/* Hero */}
      <section className="px-8 md:px-12 lg:px-20 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">AI Furniture Marketplace</p>
            <h1 className="editorial-heading text-charcoal-800">
              <span className="block text-5xl md:text-6xl">Shop every item</span>
              <em className="block text-5xl md:text-6xl text-terra-500 mt-2">in your design</em>
            </h1>
          </div>
          <div>
            <p className="text-charcoal-500 leading-[1.8]">
              Every product featured in your AI-generated design is clickable, shoppable, and delivered to your door. Partnered with the world's finest furniture brands.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden bg-cream-300">
            <img 
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&h=700&fit=crop" 
              alt="Marketplace" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-8 md:px-12 lg:px-20 pb-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-0 border-b border-sand-100/50">
            {[
              { id: 'products', label: 'All Products' },
              { id: 'rooms', label: 'Shop by Room' },
              { id: 'brands', label: 'Partner Brands' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 text-[13px] tracking-[0.15em] uppercase border-b-2 transition-all ${
                  activeTab === tab.id ? 'border-terra-500 text-charcoal-800' : 'border-transparent text-charcoal-400 hover:text-charcoal-600'
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
          <section className="px-8 md:px-12 lg:px-20 pb-12">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-300" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3.5 bg-cream-100 border border-sand-100/50 focus:border-terra-300 focus:outline-none transition-colors text-charcoal-800 text-sm"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-5 py-3.5 pr-10 bg-cream-100 border border-sand-100/50 focus:border-terra-300 focus:outline-none text-charcoal-800 text-sm"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="appearance-none px-5 py-3.5 pr-10 bg-cream-100 border border-sand-100/50 focus:border-terra-300 focus:outline-none text-charcoal-800 text-sm"
                  >
                    {styles.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-400 pointer-events-none" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </section>

          <section className="px-8 md:px-12 lg:px-20 pb-32">
            <div className="max-w-[1400px] mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group bg-cream-100 border border-sand-100/50 hover:border-terra-300 transition-all">
                    <div className="aspect-square relative overflow-hidden bg-cream-200">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                      <button className="absolute top-4 right-4 w-8 h-8 bg-cream-100/80 flex items-center justify-center text-charcoal-400 hover:text-terra-500 transition-colors opacity-0 group-hover:opacity-100">
                        <Heart className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </button>
                      <div className="absolute bottom-4 left-4 flex gap-1">
                        {product.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-cream-100/80 text-[10px] text-charcoal-500 uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-charcoal-800 truncate">{product.name}</h3>
                      <p className="text-charcoal-400 text-xs mt-1">{product.brand}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-3 h-3 text-terra-400 fill-terra-400" />
                        <span className="text-xs text-charcoal-500">{product.rating}</span>
                        <span className="text-xs text-charcoal-300">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <span className="font-serif text-terra-500">${product.price.toLocaleString()}</span>
                        <button
                          onClick={() => addItem(product)}
                          className="w-9 h-9 bg-charcoal-800 hover:bg-terra-500 text-cream-100 flex items-center justify-center transition-all"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} />
                        </button>
                      </div>
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
        <section className="px-8 md:px-12 lg:px-20 pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomDesigns.map(room => (
                <div key={room.id} className="group bg-cream-100 border border-sand-100/50 hover:border-terra-300 transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/50 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-[11px] tracking-[0.2em] uppercase text-terra-300">{room.roomType}</span>
                      <h3 className="font-serif text-xl text-white mt-1">{room.name}</h3>
                      <p className="text-white/70 text-sm mt-1">{room.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-charcoal-400">{room.products.length} products</span>
                      <span className="font-serif text-charcoal-800">${room.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2 mb-5">
                      {room.products.map(pid => {
                        const p = products.find(x => x.id === pid);
                        return p ? (
                          <div key={pid} className="w-10 h-10 overflow-hidden bg-cream-200 flex-shrink-0">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                        ) : null;
                      })}
                    </div>
                    <button className="w-full py-3.5 border border-charcoal-300 hover:border-charcoal-800 hover:bg-charcoal-800 hover:text-cream-100 text-charcoal-800 text-[13px] tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-2 group/btn">
                      Shop This Room
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
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
        <section className="px-8 md:px-12 lg:px-20 pb-32">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-100/50">
              {partnerBrands.map((brand, i) => (
                <div key={i} className="bg-cream-100 p-10 text-center hover:bg-cream-200 transition-all group">
                  <div className="w-16 h-16 border border-sand-200 flex items-center justify-center text-charcoal-400 text-lg font-serif mx-auto mb-4 group-hover:border-terra-300 group-hover:text-terra-500 transition-all">
                    {brand.logo}
                  </div>
                  <h3 className="font-serif text-charcoal-800">{brand.name}</h3>
                  <span className="text-xs text-charcoal-400">{brand.category}</span>
                </div>
              ))}
            </div>

            <div className="mt-20 p-12 md:p-16 bg-cream-200 border border-sand-100/50 text-center">
              <Sparkles className="w-8 h-8 text-terra-500 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="editorial-heading text-3xl text-charcoal-800 mb-4">Become a Partner Brand</h3>
              <p className="text-charcoal-500 max-w-lg mx-auto mb-8 leading-relaxed">
                Join our marketplace and have your products featured in AI-generated designs. Reach customers at the exact moment they're ready to buy.
              </p>
              <button className="px-10 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all">
                Apply as Partner
              </button>
            </div>
          </div>
        </section>
      )}

      {/* AI Shopping Assistant */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">AI Shopping Assistant</p>
              <h2 className="editorial-heading text-charcoal-800 mb-8">
                <span className="block text-4xl md:text-5xl">Your personal</span>
                <em className="block text-4xl md:text-5xl text-terra-500 mt-1">design consultant</em>
              </h2>
              <p className="text-charcoal-500 leading-[1.8] mb-8">
                Our AI doesn't just design — it shops with you. Ask for alternatives at different price points, matching collections, complementary accessories, or sustainable options.
              </p>
              <div className="space-y-3">
                {[
                  'Find similar chairs under $500',
                  'Show me matching side tables',
                  'Recommend sustainable lighting options',
                  'What rug would complement this sofa?',
                ].map((q, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-cream-100 border border-sand-100/50">
                    <Sparkles className="w-4 h-4 text-terra-500 flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-sm text-charcoal-600">"{q}"</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream-100 border border-sand-100/50 p-8">
              <div className="flex items-center gap-3 mb-8 pb-6 border-b border-sand-100/50">
                <div className="w-10 h-10 bg-terra-500/10 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-terra-500" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-charcoal-800">AI Assistant</p>
                  <p className="text-xs text-charcoal-400">Online</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-charcoal-800 flex items-center justify-center text-[10px] text-cream-100 flex-shrink-0">You</div>
                  <div className="bg-cream-200 px-5 py-3 text-sm text-charcoal-600 max-w-[80%]">
                    I'm designing a Scandinavian living room with a $3,000 budget. What sofa should I get?
                  </div>
                </div>
                <div className="flex gap-4 justify-end">
                  <div className="bg-cream-200 border border-terra-200 px-5 py-4 text-sm text-charcoal-600 max-w-[80%]">
                    <p className="mb-3">Great choice! For Scandinavian style at $3,000:</p>
                    <div className="space-y-2">
                      <div className="p-3 bg-cream-100">
                        <p className="font-serif text-charcoal-800">Muuto Oslo Sofa — $4,290</p>
                        <p className="text-xs text-charcoal-400">Premium with modular configuration</p>
                      </div>
                      <div className="p-3 bg-cream-100">
                        <p className="font-serif text-charcoal-800">IKEA SÖDERHAMN — $899</p>
                        <p className="text-xs text-charcoal-400">Budget-friendly, washable covers</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-terra-500">Would you like to see matching armchairs?</p>
                  </div>
                  <div className="w-8 h-8 bg-terra-500/10 flex items-center justify-center text-[10px] text-terra-500 flex-shrink-0">AI</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-sand-100/50">
                <div className="flex gap-2">
                  <input type="text" placeholder="Ask the AI assistant..." className="flex-1 px-4 py-3 bg-cream-200 border border-sand-100/50 focus:border-terra-300 focus:outline-none text-sm text-charcoal-800" />
                  <button className="px-4 py-3 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 transition-all">
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
