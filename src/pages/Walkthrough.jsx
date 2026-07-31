import { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Move, Eye, Box, Maximize2, MapPin, ChevronRight, ShoppingBag } from 'lucide-react';
import { products } from '../data/products';

function getProduct(pid) {
  return products.find((p) => p.id === pid) || null;
}

const walkthroughs = [
  {
    id: 'scandi-living',
    name: 'Scandinavian Living Room',
    style: 'Scandinavian',
    designer: 'xuantelier AI',
    area: '320 sq ft',
    scenes: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&h=120&fit=crop',
        hotspots: [
          { x: 28, y: 55, productId: 'p6' },
          { x: 62, y: 48, productId: 'p7' },
          { x: 75, y: 72, productId: 'p9' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=200&h=120&fit=crop',
        hotspots: [
          { x: 35, y: 60, productId: 'p5' },
          { x: 55, y: 42, productId: 'p2' },
          { x: 82, y: 38, productId: 'p3' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=200&h=120&fit=crop',
        hotspots: [
          { x: 22, y: 52, productId: 'p10' },
          { x: 48, y: 46, productId: 'p16' },
          { x: 70, y: 68, productId: 'p22' },
        ],
      },
    ],
  },
  {
    id: 'japandi-bedroom',
    name: 'Japandi Master Bedroom',
    style: 'Japandi',
    designer: 'xuantelier AI',
    area: '240 sq ft',
    scenes: [
      {
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=200&h=120&fit=crop',
        hotspots: [
          { x: 42, y: 58, productId: 'p5' },
          { x: 68, y: 45, productId: 'p7' },
          { x: 18, y: 65, productId: 'p22' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200&h=120&fit=crop',
        hotspots: [
          { x: 52, y: 52, productId: 'p15' },
          { x: 30, y: 68, productId: 'p23' },
        ],
      },
    ],
  },
  {
    id: 'modern-kitchen',
    name: 'Modern Minimal Kitchen',
    style: 'Modern Minimal',
    designer: 'xuantelier AI',
    area: '180 sq ft',
    scenes: [
      {
        src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=200&h=120&fit=crop',
        hotspots: [
          { x: 38, y: 50, productId: 'p18' },
          { x: 65, y: 58, productId: 'p23' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=200&h=120&fit=crop',
        hotspots: [
          { x: 45, y: 48, productId: 'p7' },
          { x: 72, y: 62, productId: 'p12' },
        ],
      },
    ],
  },
  {
    id: 'midcentury-dining',
    name: 'Mid-Century Dining Room',
    style: 'Mid-Century Modern',
    designer: 'xuantelier AI',
    area: '210 sq ft',
    scenes: [
      {
        src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=200&h=120&fit=crop',
        hotspots: [
          { x: 48, y: 62, productId: 'p8' },
          { x: 32, y: 55, productId: 'p5' },
          { x: 68, y: 42, productId: 'p7' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=200&h=120&fit=crop',
        hotspots: [
          { x: 55, y: 58, productId: 'p11' },
          { x: 25, y: 48, productId: 'p3' },
        ],
      },
    ],
  },
  {
    id: 'industrial-loft',
    name: 'Neo-Industrial Loft',
    style: 'Neo-Industrial',
    designer: 'xuantelier AI',
    area: '450 sq ft',
    scenes: [
      {
        src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=200&h=120&fit=crop',
        hotspots: [
          { x: 40, y: 55, productId: 'p13' },
          { x: 65, y: 48, productId: 'p12' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ab?w=2400&h=1200&fit=crop',
        thumb: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ab?w=200&h=120&fit=crop',
        hotspots: [
          { x: 30, y: 60, productId: 'p24' },
          { x: 55, y: 45, productId: 'p20' },
        ],
      },
    ],
  },
];

function PanoramaViewer({ walkthrough, onClose }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeHotspot, setActiveHotspot] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  const SCALE = 1.7;
  const scene = walkthrough.scenes[sceneIndex];

  useEffect(() => {
    setPanX(0);
    setPanY(0);
    setActiveHotspot(null);
  }, [sceneIndex]);

  const getBounds = useCallback(() => {
    if (!containerRef.current || !imageRef.current) return { maxX: 0, maxY: 0 };
    const cw = containerRef.current.offsetWidth;
    const ch = containerRef.current.offsetHeight;
    const iw = cw * SCALE;
    const ih = ch * SCALE;
    return {
      maxX: Math.max(0, (iw - cw) / 2),
      maxY: Math.max(0, (ih - ch) / 2),
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - panX, y: e.clientY - panY });
    setActiveHotspot(null);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const { maxX, maxY } = getBounds();
    const newX = e.clientX - dragStart.x;
    const newY = e.clientY - dragStart.y;
    setPanX(Math.max(-maxX, Math.min(maxX, newX)));
    setPanY(Math.max(-maxY, Math.min(maxY, newY)));
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    const t = e.touches[0];
    setIsDragging(true);
    setDragStart({ x: t.clientX - panX, y: t.clientY - panY });
    setActiveHotspot(null);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const t = e.touches[0];
    const { maxX, maxY } = getBounds();
    const newX = t.clientX - dragStart.x;
    const newY = t.clientY - dragStart.y;
    setPanX(Math.max(-maxX, Math.min(maxX, newX)));
    setPanY(Math.max(-maxY, Math.min(maxY, newY)));
  };

  const handleTouchEnd = () => setIsDragging(false);

  const changeScene = (newIndex) => {
    if (isTransitioning || newIndex === sceneIndex) return;
    setIsTransitioning(true);
    setActiveHotspot(null);
    setTimeout(() => {
      setSceneIndex(newIndex);
      setIsTransitioning(false);
    }, 400);
  };

  const nextScene = () => {
    changeScene((sceneIndex + 1) % walkthrough.scenes.length);
  };

  const prevScene = () => {
    changeScene((sceneIndex - 1 + walkthrough.scenes.length) % walkthrough.scenes.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-ink flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-ink border-b border-stone/20 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-paper/60 hover:text-paper transition-colors">
            <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
          </button>
          <div>
            <h3 className="font-serif text-paper text-sm">{walkthrough.name}</h3>
            <p className="text-paper/40 text-[10px]">{walkthrough.style} · {walkthrough.area} · Scene {sceneIndex + 1} of {walkthrough.scenes.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-[0.1em] uppercase text-paper/40 flex items-center gap-1.5 hidden sm:flex">
            <Move className="w-3 h-3" strokeWidth={1.5} /> Click & drag to look around
          </span>
          <button onClick={onClose} className="text-paper/40 hover:text-paper transition-colors ml-4">
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing touch-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Panorama image */}
        <div
          ref={imageRef}
          className={`absolute inset-0 transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
          style={{
            transform: `translate(${panX}px, ${panY}px) scale(${SCALE})`,
            transformOrigin: 'center center',
          }}
        >
          <img
            src={scene.src}
            alt={walkthrough.name}
            className="w-full h-full object-cover select-none pointer-events-none"
            draggable={false}
          />
        </div>

        {/* Vignette overlay for immersion */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            boxShadow: 'inset 0 0 150px 60px rgba(0,0,0,0.4)',
          }}
        />

        {/* Compass indicator */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="bg-ink/50 backdrop-blur-sm px-3 py-1.5 flex items-center gap-2">
            <MapPin className="w-3 h-3 text-paper/60" strokeWidth={1.5} />
            <span className="text-[10px] tracking-[0.15em] uppercase text-paper/60">
              {['North', 'North-East', 'East', 'South-East', 'South', 'South-West', 'West', 'North-West'][Math.floor(((panX + 500) / 1000) * 8) % 8] || 'North'}
            </span>
          </div>
        </div>

        {/* Hotspots with actual product images */}
        {scene.hotspots.map((h, i) => {
          const product = getProduct(h.productId);
          if (!product) return null;
          const isActive = activeHotspot === i;
          return (
            <button
              key={i}
              className="absolute z-10 group"
              style={{
                left: `${h.x}%`,
                top: `${h.y}%`,
                transform: `translate(-50%, -50%) translate(${-panX / SCALE}px, ${-panY / SCALE}px)`,
              }}
              onClick={(e) => { e.stopPropagation(); setActiveHotspot(isActive ? null : i); }}
            >
              {/* Pulse ring */}
              <span className="relative flex items-center justify-center">
                <span className="absolute w-10 h-10 rounded-full bg-paper/30 animate-ping" />
                <span className="relative w-8 h-8 rounded-full bg-paper/90 border-2 border-ink flex items-center justify-center shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-6 h-6 object-cover rounded-full"
                  />
                </span>
              </span>

              {/* Product card */}
              {isActive && (
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-paper border border-line w-56 shadow-2xl animate-fade-in">
                  <div className="aspect-[4/3] overflow-hidden bg-line">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-3">
                    <p className="font-serif text-ink text-sm leading-tight">{product.name}</p>
                    <p className="text-stone text-[10px] mt-0.5">{product.brand}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-serif text-ink text-sm">${product.price.toLocaleString()}</p>
                      <Link
                        to={`/marketplace?product=${product.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[10px] tracking-[0.1em] uppercase text-ink hover:text-stone transition-colors bg-line px-2 py-1"
                      >
                        View <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </button>
          );
        })}

        {/* Scene navigation arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prevScene(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ink/50 hover:bg-ink/80 text-paper flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextScene(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-ink/50 hover:bg-ink/80 text-paper flex items-center justify-center transition-all backdrop-blur-sm"
        >
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </button>

        {/* Scene thumbnails */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {walkthrough.scenes.map((s, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); changeScene(i); }}
              className={`w-20 h-12 overflow-hidden border-2 transition-all ${i === sceneIndex ? 'border-paper scale-105' : 'border-transparent opacity-50 hover:opacity-80'}`}
            >
              <img src={s.thumb} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Scene label */}
        <div className="absolute bottom-6 right-6 pointer-events-none">
          <div className="bg-ink/50 backdrop-blur-sm px-3 py-1.5">
            <span className="text-[10px] tracking-[0.1em] uppercase text-paper/60">
              Scene {sceneIndex + 1} — {walkthrough.scenes[sceneIndex].hotspots.length} products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Walkthrough() {
  const [activeWalkthrough, setActiveWalkthrough] = useState(null);

  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">360° Immersive Walkthroughs</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">Walk through</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">your design</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Experience your AI-generated designs in immersive 360-degree walkthroughs. Navigate through every room, look around in all directions, and click on any piece of furniture to shop it instantly.
            </p>
          </div>
        </div>
      </section>

      {/* Hero visual */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto relative overflow-hidden group cursor-pointer" onClick={() => setActiveWalkthrough(walkthroughs[0])}>
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=700&fit=crop"
              alt="3D Walkthrough Preview"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/20 transition-all" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 border border-paper/40 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Eye className="w-6 h-6 text-paper" strokeWidth={1} />
              </div>
              <p className="font-serif text-paper text-lg">Start Walkthrough</p>
              <p className="text-paper/60 text-xs mt-1">Scandinavian Living Room · 3 scenes · 360° view</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/01 How It Works</span>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Box, title: 'AI Generates Your Space', desc: 'Upload photos and preferences. Our AI creates a complete 3D model of your redesigned room with accurate proportions and lighting.' },
              { icon: Move, title: 'Look Around in 360°', desc: 'Click and drag to look around each room in full 360 degrees. Move between multiple viewpoints to see every detail from every angle.' },
              { icon: Maximize2, title: 'Shop What You See', desc: 'Every item in the walkthrough is tagged with its actual product image. Click any piece to view details, specs, and add it to your cart.' },
            ].map((f, i) => (
              <div key={i}>
                <f.icon className="w-6 h-6 text-stone mb-6" strokeWidth={1.5} />
                <h3 className="font-serif text-lg text-paper mb-3">{f.title}</h3>
                <p className="text-stone text-sm leading-[1.8]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Walkthrough Gallery */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/02 Explore Walkthroughs</span>
          <h2 className="font-serif text-ink leading-[1.05] mb-16">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Step inside</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">AI-designed spaces</em>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {walkthroughs.map((wt, i) => {
              const totalProducts = wt.scenes.reduce((a, s) => a + s.hotspots.length, 0);
              return (
                <button
                  key={i}
                  onClick={() => setActiveWalkthrough(wt)}
                  className="bg-paper group text-left relative overflow-hidden"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={wt.scenes[0].src.replace('w=2400', 'w=800')} alt={wt.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4 w-10 h-10 bg-paper/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Eye className="w-4 h-4 text-ink" strokeWidth={1.5} />
                    </div>
                    {/* 360 badge */}
                    <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur-sm px-2 py-1">
                      <span className="text-[9px] tracking-[0.15em] uppercase text-paper">360°</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-[10px] tracking-[0.15em] uppercase text-stone block mb-2">{wt.style}</span>
                    <h3 className="font-serif text-ink text-lg mb-1">{wt.name}</h3>
                    <p className="text-stone text-xs">{wt.area} · {wt.scenes.length} scenes · {totalProducts} products</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Specs */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/03 Technology</span>
            <h2 className="font-serif text-ink leading-[1.1] mb-10">
              <span className="block text-[clamp(2rem,4vw,3rem)]">Photorealistic,</span>
              <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">interactive, instant</em>
            </h2>
            <div className="space-y-6">
              {[
                { label: 'Render Engine', value: 'AI-Powered Path Tracing' },
                { label: 'Resolution', value: 'Up to 8K per scene' },
                { label: 'Scene Count', value: '2-5 angles per room' },
                { label: 'Generation Time', value: 'Under 5 minutes' },
                { label: 'Hotspot Accuracy', value: 'Product-level precision' },
                { label: 'Compatibility', value: 'Desktop, tablet, mobile' },
              ].map((spec, i) => (
                <div key={i} className="flex items-center justify-between border-b border-line pb-4">
                  <span className="text-sm text-stone">{spec.label}</span>
                  <span className="text-sm text-ink font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-line h-fit">
            {[
              { value: '< 5 min', label: 'Generation Time' },
              { value: '8K', label: 'Max Resolution' },
              { value: '360°', label: 'Room Coverage' },
              { value: '100%', label: 'Products Shoppable' },
            ].map((stat, i) => (
              <div key={i} className="bg-paper p-10 text-center">
                <span className="font-serif text-4xl text-ink block">{stat.value}</span>
                <span className="text-stone text-sm mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-ink leading-[1.1] mb-8">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Ready to walk through</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">your future home?</em>
          </h2>
          <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
            Upload your room photos and let our AI generate a complete 360° walkthrough with shoppable furniture in minutes.
          </p>
          <Link
            to="/design-studio"
            className="px-10 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all inline-flex items-center gap-3 group"
          >
            Generate Your Walkthrough
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      {/* Fullscreen Viewer */}
      {activeWalkthrough && (
        <PanoramaViewer
          walkthrough={activeWalkthrough}
          onClose={() => setActiveWalkthrough(null)}
        />
      )}
    </div>
  );
}
