import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Star, ArrowRight, Sparkles, Heart, ChevronDown, ArrowUpRight, X, ChevronLeft, ChevronRight, Check, Truck, Shield, RotateCcw } from 'lucide-react';
import { products, partnerBrands, roomDesigns } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductModal({ product, onClose, onAddToCart }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const nextImage = () => setCurrentImage((i) => (i + 1) % product.images.length);
  const prevImage = () => setCurrentImage((i) => (i - 1 + product.images.length) % product.images.length);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-paper w-full max-w-5xl max-h-[90vh] overflow-y-auto border border-line">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-paper border border-line flex items-center justify-center text-stone hover:text-ink transition-colors"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Image Gallery */}
          <div className="bg-line/30 p-6 md:p-10">
            <div className="aspect-square relative overflow-hidden bg-line mb-4">
              <img
                src={product.images[currentImage]}
                alt={product.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-paper/80 flex items-center justify-center text-ink hover:bg-paper transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-paper/80 flex items-center justify-center text-ink hover:bg-paper transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </>
              )}
            </div>
            <div className="flex gap-2">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-16 h-16 border transition-all overflow-hidden ${
                    i === currentImage ? 'border-ink' : 'border-line hover:border-stone'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="p-6 md:p-10">
            <div className="flex items-start justify-between mb-2">
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone">{product.brand}</span>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-stone fill-stone" />
                <span className="text-xs text-stone">{product.rating}</span>
                <span className="text-xs text-line">({product.reviews})</span>
              </div>
            </div>

            <h2 className="font-serif text-2xl text-ink mb-4">{product.name}</h2>
            <p className="font-serif text-xl text-ink mb-6">${product.price.toLocaleString()}</p>

            <p className="text-sm text-stone leading-[1.8] mb-6">{product.description}</p>

            {/* Colors */}
            <div className="mb-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-3">Color — {selectedColor}</span>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-[11px] border transition-all ${
                      selectedColor === color
                        ? 'border-ink bg-ink text-paper'
                        : 'border-line text-stone hover:border-stone hover:text-ink'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Specs */}
            <div className="border-t border-line pt-6 mb-6 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Dimensions</span>
                  <span className="text-sm text-ink">{product.dimensions}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Material</span>
                  <span className="text-sm text-ink">{product.material}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Delivery</span>
                  <span className="text-sm text-ink">{product.delivery}</span>
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-stone block">Warranty</span>
                  <span className="text-sm text-ink">{product.warranty}</span>
                </div>
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-8 text-[10px] tracking-[0.1em] uppercase text-stone">
              <span className="flex items-center gap-1.5"><Truck className="w-3 h-3" strokeWidth={1.5} /> Free Shipping</span>
              <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" strokeWidth={1.5} /> Authentic</span>
              <span className="flex items-center gap-1.5"><RotateCcw className="w-3 h-3" strokeWidth={1.5} /> 30-Day Returns</span>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={handleAdd}
                className={`flex-1 py-4 text-[11px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-2 ${
                  added
                    ? 'bg-stone text-paper'
                    : 'bg-ink hover:bg-stone text-paper'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" strokeWidth={1.5} /> Added to Cart
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-3.5 h-3.5" strokeWidth={1.5} /> Add to Cart
                  </>
                )}
              </button>
              <button className="w-14 h-14 border border-line flex items-center justify-center text-stone hover:text-ink hover:border-ink transition-all">
                <Heart className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>

            {product.care && (
              <div className="mt-6 pt-6 border-t border-line">
                <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-2">Care Instructions</span>
                <p className="text-xs text-stone leading-relaxed">{product.care}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomModal({ room, onClose }) {
  const [currentImage, setCurrentImage] = useState(0);
  if (!room) return null;

  const roomProducts = room.products
    .map((pid) => products.find((p) => p.id === pid))
    .filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-ink/30 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-paper w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-line">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-paper border border-line flex items-center justify-center text-stone hover:text-ink transition-colors"
        >
          <X className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <div className="aspect-[16/9] relative overflow-hidden">
          <img src={room.images[currentImage]} alt={room.name} className="w-full h-full object-cover" />
          {room.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {room.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === currentImage ? 'bg-paper' : 'bg-paper/40'}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="p-8 md:p-12">
          <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-3">{room.roomType} — {room.style}</span>
          <h2 className="font-serif text-2xl text-ink mb-4">{room.name}</h2>
          <p className="text-sm text-stone leading-[1.8] mb-6 max-w-2xl">{room.description}</p>

          {room.highlights && (
            <div className="flex flex-wrap gap-2 mb-8">
              {room.highlights.map((h) => (
                <span key={h} className="px-3 py-1.5 border border-line text-[10px] tracking-[0.1em] uppercase text-stone">{h}</span>
              ))}
            </div>
          )}

          <div className="border-t border-line pt-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-serif text-lg text-ink">Products in this room</h3>
              <span className="font-serif text-ink">${room.budget.toLocaleString()}</span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {roomProducts.map((p) => (
                <div key={p.id} className="bg-paper p-4 group cursor-pointer" onClick={onClose}>
                  <div className="aspect-square overflow-hidden bg-line mb-3">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
                  </div>
                  <h4 className="font-serif text-sm text-ink">{p.name}</h4>
                  <p className="text-xs text-stone mt-0.5">{p.brand}</p>
                  <p className="font-serif text-sm text-ink mt-2">${p.price.toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Marketplace() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStyle, setSelectedStyle] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const { addItem } = useCart();

  const categories = ['All', 'Seating', 'Tables', 'Lighting', 'Storage', 'Rugs', 'Decor', 'Bedroom'];
  const styles = ['All', 'Scandinavian', 'Mid-Century Modern', 'Modern', 'Contemporary'];

  const filteredProducts = products.filter((p) => {
    const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchStyle = selectedStyle === 'All' || p.style === selectedStyle;
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchStyle && matchSearch;
  });

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Curated Furniture Marketplace</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">Shop every item</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">in your design</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Every product featured in your AI-generated design is clickable, shoppable, and delivered to your door. Partnered with the world's finest furniture brands — now with detailed specs, multiple photos, and room concepts to inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=1600&h=700&fit=crop"
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
            ].map((tab) => (
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
                  placeholder="Search products, brands, or tags..."
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
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" strokeWidth={1.5} />
                </div>
                <div className="relative">
                  <select
                    value={selectedStyle}
                    onChange={(e) => setSelectedStyle(e.target.value)}
                    className="appearance-none px-5 py-3.5 pr-10 bg-transparent border border-line focus:border-stone focus:outline-none text-ink text-sm"
                  >
                    {styles.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone pointer-events-none" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </section>

          <section className="px-6 md:px-10 pb-32">
            <div className="max-w-[1400px] mx-auto">
              <p className="text-[10px] tracking-[0.15em] uppercase text-stone mb-6">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-line">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-paper group">
                    <div
                      className="aspect-square relative overflow-hidden bg-line mb-4 cursor-pointer"
                      onClick={() => setSelectedProduct(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors" />
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                        className="absolute top-3 right-3 w-7 h-7 bg-paper/80 flex items-center justify-center text-stone hover:text-ink transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <Heart className="w-3 h-3" strokeWidth={1.5} />
                      </button>
                      {product.images.length > 1 && (
                        <span className="absolute bottom-3 left-3 text-[9px] tracking-[0.1em] uppercase text-paper bg-ink/60 px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {product.images.length} photos
                        </span>
                      )}
                    </div>
                    <div className="px-5 pb-5">
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <h3
                            className="font-serif text-ink text-sm cursor-pointer hover:text-stone transition-colors"
                            onClick={() => setSelectedProduct(product)}
                          >
                            {product.name}
                          </h3>
                          <p className="text-stone text-xs mt-0.5">{product.brand}</p>
                        </div>
                        <span className="font-serif text-ink text-sm flex-shrink-0">
                          ${product.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-2">
                        <Star className="w-3 h-3 text-stone fill-stone" />
                        <span className="text-xs text-stone">{product.rating}</span>
                        <span className="text-xs text-line">({product.reviews})</span>
                      </div>
                      {/* Color dots */}
                      <div className="flex items-center gap-1.5 mt-3">
                        {product.colors.slice(0, 4).map((color) => (
                          <span
                            key={color}
                            className="w-3 h-3 border border-line"
                            title={color}
                          />
                        ))}
                        {product.colors.length > 4 && (
                          <span className="text-[9px] text-stone">+{product.colors.length - 4}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <button
                          onClick={() => setSelectedProduct(product)}
                          className="flex-1 py-2.5 border border-line hover:border-ink text-ink text-[10px] tracking-[0.1em] uppercase transition-all"
                        >
                          Quick View
                        </button>
                        <button
                          onClick={() => addItem(product)}
                          className="w-10 h-10 bg-ink hover:bg-stone text-paper flex items-center justify-center transition-all"
                        >
                          <ShoppingBag className="w-3 h-3" strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-24">
                  <Search className="w-8 h-8 text-line mx-auto mb-4" strokeWidth={1} />
                  <p className="text-stone text-sm">No products match your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSelectedStyle('All');
                      setSearchQuery('');
                    }}
                    className="mt-4 text-[11px] tracking-[0.12em] uppercase text-ink hover:text-stone transition-colors underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Shop by Room Tab */}
      {activeTab === 'rooms' && (
        <section className="px-6 md:px-10 pb-32">
          <div className="max-w-[1400px] mx-auto">
            <p className="text-[10px] tracking-[0.15em] uppercase text-stone mb-6">{roomDesigns.length} room concepts</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
              {roomDesigns.map((room) => (
                <div key={room.id} className="bg-paper group cursor-pointer" onClick={() => setSelectedRoom(room)}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5">
                      <span className="text-[10px] tracking-[0.2em] uppercase text-paper/70">{room.roomType}</span>
                      <h3 className="font-serif text-lg text-white mt-0.5">{room.name}</h3>
                    </div>
                    {room.images.length > 1 && (
                      <span className="absolute top-3 right-3 text-[9px] tracking-[0.1em] uppercase text-paper bg-ink/60 px-2 py-1">
                        {room.images.length} photos
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-stone leading-relaxed mb-4">{room.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-stone">{room.products.length} products</span>
                      <span className="font-serif text-ink">${room.budget.toLocaleString()}</span>
                    </div>
                    <button className="w-full mt-4 py-3 border border-line hover:border-ink hover:bg-ink hover:text-paper text-ink text-[11px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-2 group/btn">
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
                        <p className="font-serif text-ink text-sm">HAY About A Chair AAC22 — $325</p>
                        <p className="text-xs text-stone">Budget-friendly, versatile seating</p>
                      </div>
                    </div>
                    <p className="mt-3 text-xs text-stone">Would you like to see matching armchairs?</p>
                  </div>
                  <div className="w-7 h-7 bg-line flex items-center justify-center text-[9px] text-stone flex-shrink-0">AI</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-line">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask the AI assistant..."
                    className="flex-1 px-4 py-3 bg-transparent border border-line focus:border-stone focus:outline-none text-sm text-ink"
                  />
                  <button className="px-4 py-3 bg-ink hover:bg-stone text-paper transition-all">
                    <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addItem}
        />
      )}
      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />
      )}
    </div>
  );
}
