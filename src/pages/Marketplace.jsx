import { useState } from 'react';
import { Search, Filter, ShoppingBag, Star, ArrowRight, Sparkles, Heart, ChevronDown } from 'lucide-react';
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
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">AI Furniture Marketplace</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Shop Every Item in Your
            <span className="font-serif italic text-brand-400 font-normal"> Design</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Every product featured in your AI-generated design is clickable, shoppable, and delivered to your door. Partnered with the world's best furniture brands.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 border-b border-white/5">
            {[
              { id: 'products', label: 'All Products', icon: <ShoppingBag className="w-4 h-4" /> },
              { id: 'rooms', label: 'Shop by Room', icon: <Sparkles className="w-4 h-4" /> },
              { id: 'brands', label: 'Partner Brands', icon: <Star className="w-4 h-4" /> },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-all flex items-center gap-2 ${
                  activeTab === tab.id ? 'border-brand-400 text-brand-400' : 'border-transparent text-white/50 hover:text-white'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Tab */}
      {activeTab === 'products' && (
        <>
          {/* Filters & Search */}
          <section className="px-6 pb-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="text"
                  placeholder="Search products, brands..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-dark-800 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white"
                />
              </div>
              <div className="flex gap-2">
                <div className="relative">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none px-4 py-3 pr-10 bg-dark-800 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none text-white text-sm"
                  >
                    {categories.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
                <div className="relative">
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="appearance-none px-4 py-3 pr-10 bg-dark-800 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none text-white text-sm"
                  >
                    {styles.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
                </div>
              </div>
            </div>
          </section>

          {/* Product Grid */}
          <section className="px-6 pb-24">
            <div className="max-w-7xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all">
                    <div className="aspect-square relative overflow-hidden bg-dark-700">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-dark-900/80 flex items-center justify-center text-white/50 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100">
                        <Heart className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-3 left-3 flex gap-1">
                        {product.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-dark-900/80 rounded-full text-[10px] text-white/70 uppercase tracking-wider">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className="font-medium text-sm truncate flex-1">{product.name}</h3>
                      </div>
                      <p className="text-xs text-white/50 mb-2">{product.brand}</p>
                      <div className="flex items-center gap-1 mb-3">
                        <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                        <span className="text-xs text-white/70">{product.rating}</span>
                        <span className="text-xs text-white/30">({product.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-brand-400">${product.price.toLocaleString()}</span>
                        <button
                          onClick={() => addItem(product)}
                          className="px-3 py-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-medium rounded-lg transition-all flex items-center gap-1"
                        >
                          <ShoppingBag className="w-3 h-3" />
                          Add
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
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomDesigns.map(room => (
                <div key={room.id} className="group bg-dark-800 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-500/30 transition-all">
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs text-brand-400 uppercase tracking-wider">{room.roomType}</span>
                      <h3 className="font-semibold text-lg">{room.name}</h3>
                      <p className="text-sm text-white/60 mt-1">{room.description}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-white/50">{room.products.length} products</span>
                      <span className="text-sm font-semibold">${room.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex gap-2 mb-4">
                      {room.products.map(pid => {
                        const p = products.find(x => x.id === pid);
                        return p ? (
                          <div key={pid} className="w-10 h-10 rounded-lg overflow-hidden bg-dark-700 flex-shrink-0">
                            <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                          </div>
                        ) : null;
                      })}
                    </div>
                    <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-xl transition-all flex items-center justify-center gap-2 group/btn">
                      Shop This Room
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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
        <section className="px-6 pb-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {partnerBrands.map((brand, i) => (
                <div key={i} className="p-8 bg-dark-800 border border-white/5 rounded-xl hover:border-brand-500/30 transition-all text-center group">
                  <div className="w-16 h-16 rounded-full bg-brand-500/10 flex items-center justify-center text-brand-400 text-xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform">
                    {brand.logo}
                  </div>
                  <h3 className="font-semibold mb-1">{brand.name}</h3>
                  <span className="text-xs text-white/50">{brand.category}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-brand-900/30 to-purple-900/30 border border-brand-500/20 rounded-2xl text-center">
              <Sparkles className="w-10 h-10 text-brand-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Become a Partner Brand</h3>
              <p className="text-white/60 max-w-lg mx-auto mb-6">
                Join our marketplace and have your products featured in AI-generated designs. Reach customers at the exact moment they're ready to buy.
              </p>
              <button className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all">
                Apply as Partner
              </button>
            </div>
          </div>
        </section>
      )}

      {/* AI Shopping Assistant */}
      <section className="px-6 py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">AI Shopping Assistant</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Your Personal
                <span className="font-serif italic text-brand-400 font-normal"> Design Consultant</span>
              </h2>
              <div className="space-y-4 text-white/60">
                <p>
                  Our AI doesn't just design — it shops with you. Ask for alternatives at lower or higher price points, matching collections, complementary accessories, or sustainable options.
                </p>
                <div className="space-y-3 mt-6">
                  {[
                    'Find similar chairs under $500',
                    'Show me matching side tables',
                    'Recommend sustainable lighting options',
                    'What rug would complement this sofa?',
                    'Swap this for a space-saving alternative',
                  ].map((q, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-dark-800 border border-white/5 rounded-lg">
                      <Sparkles className="w-4 h-4 text-brand-400 flex-shrink-0" />
                      <span className="text-sm">"{q}"</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-dark-800 border border-white/5 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="w-10 h-10 rounded-full bg-brand-500/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <p className="font-medium">AI Assistant</p>
                  <p className="text-xs text-white/50">Online</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs flex-shrink-0">You</div>
                  <div className="bg-dark-700 rounded-xl rounded-tl-sm px-4 py-3 text-sm max-w-[80%]">
                    I'm designing a Scandinavian living room with a $3,000 budget. What sofa should I get?
                  </div>
                </div>
                <div className="flex gap-3 justify-end">
                  <div className="bg-brand-600/20 border border-brand-500/20 rounded-xl rounded-tr-sm px-4 py-3 text-sm max-w-[80%]">
                    <p className="mb-2">Great choice! For Scandinavian style at $3,000, I recommend:</p>
                    <div className="space-y-2">
                      <div className="p-2 bg-dark-800 rounded-lg">
                        <p className="font-medium text-sm">Muuto Oslo Sofa — $4,290</p>
                        <p className="text-xs text-white/50">Premium option with modular configuration</p>
                      </div>
                      <div className="p-2 bg-dark-800 rounded-lg">
                        <p className="font-medium text-sm">IKEA SÖDERHAMN — $899</p>
                        <p className="text-xs text-white/50">Budget-friendly with washable covers</p>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-brand-400">Would you like to see matching armchairs?</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-xs flex-shrink-0">AI</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="flex gap-2">
                  <input type="text" placeholder="Ask the AI assistant..." className="flex-1 px-4 py-2 bg-dark-900 border border-white/10 rounded-lg text-sm focus:border-brand-500/50 focus:outline-none" />
                  <button className="px-4 py-2 bg-brand-600 hover:bg-brand-500 rounded-lg text-sm transition-all">
                    <ArrowRight className="w-4 h-4" />
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
