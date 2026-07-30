import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, X, Move, Eye, Box, Maximize2 } from 'lucide-react';

const walkthroughs = [
  {
    id: 'scandi-living',
    name: 'Scandinavian Living Room',
    style: 'Scandinavian',
    designer: 'xuantelier AI',
    area: '320 sq ft',
    scenes: [
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 28, y: 55, product: 'Oslo Sofa', id: 'p8', price: '$3,200' },
          { x: 62, y: 48, product: 'PH5 Pendant', id: 'p6', price: '$725' },
          { x: 75, y: 72, product: 'String Pocket Shelf', id: 'p10', price: '$195' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 35, y: 60, product: 'Wishbone Chair', id: 'p7', price: '$695' },
          { x: 55, y: 42, product: 'Noguchi Coffee Table', id: 'p2', price: '$1,895' },
          { x: 82, y: 38, product: 'Arco Floor Lamp', id: 'p3', price: '$2,450' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 22, y: 52, product: 'Togo Sofa', id: 'p5', price: '$4,800' },
          { x: 48, y: 46, product: 'IC T1 Table Lamp', id: 'p17', price: '$385' },
          { x: 70, y: 68, product: 'Componibili Storage', id: 'p12', price: '$165' },
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
        src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 42, y: 58, product: 'Wishbone Chair', id: 'p7', price: '$695' },
          { x: 68, y: 45, product: 'PH5 Pendant', id: 'p6', price: '$725' },
          { x: 18, y: 65, product: 'Componibili Storage', id: 'p12', price: '$165' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 52, y: 52, product: 'AAC22 Chair', id: 'p9', price: '$445' },
          { x: 30, y: 68, product: 'Iittala Aalto Vase', id: 'p23', price: '$195' },
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
        src: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 38, y: 50, product: 'Alessi Juicy Salif', id: 'p25', price: '$85' },
          { x: 65, y: 58, product: 'Iittala Aalto Vase', id: 'p23', price: '$195' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 45, y: 48, product: 'PH5 Pendant', id: 'p6', price: '$725' },
          { x: 72, y: 62, product: 'Tolomeo Desk Lamp', id: 'p16', price: '$395' },
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
        src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 48, y: 62, product: 'Saarinen Dining Table', id: 'p14', price: '$3,850' },
          { x: 32, y: 55, product: 'Wishbone Chair', id: 'p7', price: '$695' },
          { x: 68, y: 42, product: 'Louis Poulsen PH5', id: 'p6', price: '$725' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 55, y: 58, product: 'Nelson Platform Bench', id: 'p15', price: '$995' },
          { x: 25, y: 48, product: 'Arco Floor Lamp', id: 'p3', price: '$2,450' },
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
        src: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 40, y: 55, product: 'Wassily Chair', id: 'p19', price: '$875' },
          { x: 65, y: 48, product: 'Tolomeo Desk Lamp', id: 'p16', price: '$395' },
        ],
      },
      {
        src: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ab?w=1600&h=900&fit=crop',
        hotspots: [
          { x: 30, y: 60, product: 'Egg Chair', id: 'p20', price: '$5,200' },
          { x: 55, y: 45, product: 'Tribeca Warren Pendant', id: 'p18', price: '$545' },
        ],
      },
    ],
  },
];

function PanoramaViewer({ walkthrough, onClose }) {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [panX, setPanX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const containerRef = useRef(null);

  const scene = walkthrough.scenes[sceneIndex];

  useEffect(() => {
    setPanX(0);
    setActiveHotspot(null);
  }, [sceneIndex]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX - panX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStartX;
    const maxPan = containerRef.current ? containerRef.current.offsetWidth * 0.3 : 200;
    setPanX(Math.max(-maxPan, Math.min(maxPan, newX)));
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const nextScene = () => {
    setSceneIndex((i) => (i + 1) % walkthrough.scenes.length);
  };

  const prevScene = () => {
    setSceneIndex((i) => (i - 1 + walkthrough.scenes.length) % walkthrough.scenes.length);
  };

  return (
    <div className="fixed inset-0 z-50 bg-ink flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-ink border-b border-stone/20">
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
          <span className="text-[10px] tracking-[0.1em] uppercase text-paper/40 flex items-center gap-1.5">
            <Move className="w-3 h-3" strokeWidth={1.5} /> Drag to look around
          </span>
          <button onClick={onClose} className="text-paper/40 hover:text-paper transition-colors ml-4">
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={scene.src}
          alt={walkthrough.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-100 ease-out select-none"
          style={{ transform: `translateX(${panX}px) scale(1.15)` }}
          draggable={false}
        />

        {/* Hotspots */}
        {scene.hotspots.map((h, i) => (
          <button
            key={i}
            className="absolute z-10 group"
            style={{ left: `${h.x}%`, top: `${h.y}%`, transform: 'translate(-50%, -50%)' }}
            onClick={(e) => { e.stopPropagation(); setActiveHotspot(activeHotspot === i ? null : i); }}
          >
            <span className="relative flex items-center justify-center w-8 h-8">
              <span className="absolute w-full h-full rounded-full bg-paper/80 animate-ping" />
              <span className="relative w-3 h-3 rounded-full bg-paper border border-ink" />
            </span>
            {activeHotspot === i && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-paper border border-line p-3 w-48 text-left shadow-xl">
                <p className="font-serif text-ink text-sm">{h.product}</p>
                <p className="text-stone text-xs mt-1">{h.price}</p>
                <Link
                  to={`/marketplace?product=${h.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-[10px] tracking-[0.1em] uppercase text-ink mt-2 hover:text-stone transition-colors"
                >
                  View Product <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                </Link>
              </div>
            )}
          </button>
        ))}

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
          {walkthrough.scenes.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setSceneIndex(i); }}
              className={`w-16 h-10 overflow-hidden border-2 transition-all ${i === sceneIndex ? 'border-paper' : 'border-transparent opacity-50 hover:opacity-80'}`}
            >
              <img src={walkthrough.scenes[i].src} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
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
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">AI 3D Walkthroughs</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">Walk through</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">your design</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Experience your AI-generated designs in immersive 3D walkthroughs. Navigate through every room, explore different angles, and click on any piece of furniture to shop it instantly.
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
              <p className="text-paper/60 text-xs mt-1">Scandinavian Living Room · 3 scenes</p>
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
              { icon: Move, title: 'Navigate Freely', desc: 'Click and drag to look around each room. Move between multiple camera angles to see every detail from every perspective.' },
              { icon: Maximize2, title: 'Shop What You See', desc: 'Every item in the walkthrough is tagged. Click any piece of furniture to view details, specs, and add it to your cart.' },
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
            {walkthroughs.map((wt, i) => (
              <button
                key={i}
                onClick={() => setActiveWalkthrough(wt)}
                className="bg-paper group text-left relative overflow-hidden"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={wt.scenes[0].src} alt={wt.name} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-paper/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="w-4 h-4 text-ink" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] tracking-[0.15em] uppercase text-stone block mb-2">{wt.style}</span>
                  <h3 className="font-serif text-ink text-lg mb-1">{wt.name}</h3>
                  <p className="text-stone text-xs">{wt.area} · {wt.scenes.length} scenes · {wt.scenes.reduce((a, s) => a + s.hotspots.length, 0)} products</p>
                </div>
              </button>
            ))}
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
            Upload your room photos and let our AI generate a complete 3D walkthrough with shoppable furniture in minutes.
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
