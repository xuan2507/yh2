import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Sparkles, Camera, ShoppingBag, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const platforms = [
    {
      num: '01',
      title: 'AI Design Studio',
      desc: 'Upload a photo of your space. Set your preferences. Receive multiple professionally designed concepts with 3D renders, layouts, and a complete shopping list — in minutes, not weeks.',
      link: '/design-studio',
      image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1000&fit=crop',
    },
    {
      num: '02',
      title: 'Visualization',
      desc: 'Photorealistic exterior and interior renders, 360° panoramas, and cinematic virtual walkthroughs for architects, developers, and real estate professionals.',
      link: '/visualization',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop',
    },
    {
      num: '03',
      title: 'Marketplace',
      desc: 'Every item in your AI-generated design is clickable and shoppable. Partnered with the world\'s finest furniture brands. Your complete room, delivered to your door.',
      link: '/marketplace',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop',
    },
  ];

  const stats = [
    { value: '2,400+', label: 'Spaces Designed' },
    { value: '500+', label: 'Partner Products' },
    { value: '12', label: 'Countries' },
    { value: '98%', label: 'Satisfaction' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen relative flex">
        <div className="w-full lg:w-[55%] flex flex-col justify-center px-8 md:px-12 lg:px-20 pt-32 pb-20">
          <div className="animate-fade-in-up">
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">AI-Powered Design Platform</p>
            
            <h1 className="editorial-heading text-charcoal-800 mb-8">
              <span className="block text-5xl md:text-6xl lg:text-7xl">Houses that</span>
              <span className="block text-5xl md:text-6xl lg:text-7xl mt-2">invite you to</span>
              <em className="block text-5xl md:text-6xl lg:text-7xl text-terra-500 mt-2">pause time</em>
            </h1>
            
            <p className="text-charcoal-500 text-base leading-relaxed max-w-md mb-12">
              Where artificial intelligence meets architectural artistry. Design your space, visualize it in photorealistic 3D, and shop every item — all from one platform.
            </p>
            
            <div className="flex items-center gap-8">
              <Link to="/design-studio" className="group flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-charcoal-800 hover:text-terra-500 transition-colors">
                Start Designing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link to="/marketplace" className="text-[13px] tracking-[0.15em] uppercase text-charcoal-400 hover:text-charcoal-800 transition-colors">
                Explore
              </Link>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block w-[45%] relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1600&fit=crop" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-12 left-12">
            <p className="text-[11px] tracking-[0.2em] uppercase text-white/60 mb-2">Scroll</p>
            <ArrowDown className="w-4 h-4 text-white/40 animate-bounce" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">00 — About</p>
            <h2 className="editorial-heading text-charcoal-800 mb-8">
              <span className="block text-4xl md:text-5xl">Every space</span>
              <span className="block text-4xl md:text-5xl">should be as</span>
              <em className="block text-4xl md:text-5xl text-terra-500 mt-1">unique as you</em>
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-charcoal-600 leading-[1.8]">
              We believe that the future of interior design lies at the intersection of human creativity and artificial intelligence. Our platform unifies AI-powered design, professional visualization, and a curated marketplace into one seamless experience.
            </p>
            <p className="text-charcoal-600 leading-[1.8]">
              No more fragmented processes — no more searching dozens of websites to recreate a design. What you see in your render is exactly what you can buy. Every item. Every detail. Delivered to your door.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[13px] tracking-[0.15em] uppercase text-terra-500 hover:text-terra-600 transition-colors mt-4">
              Our Story
              <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Three Platforms */}
      <section className="py-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-16">01 — The Platform</p>
          
          <div className="space-y-32">
            {platforms.map((platform, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/5] overflow-hidden bg-cream-300">
                    <img 
                      src={platform.image} 
                      alt={platform.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="font-serif text-6xl text-sand-200 block mb-6">{platform.num}</span>
                  <h3 className="editorial-heading text-3xl md:text-4xl text-charcoal-800 mb-6">{platform.title}</h3>
                  <p className="text-charcoal-500 leading-[1.8] mb-8 max-w-md">{platform.desc}</p>
                  <Link 
                    to={platform.link} 
                    className="inline-flex items-center gap-3 text-[13px] tracking-[0.15em] uppercase text-charcoal-800 hover:text-terra-500 transition-colors group"
                  >
                    Discover
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-charcoal-800">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-300 mb-16">02 — By Numbers</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <div key={i}>
                <span className="font-serif text-5xl md:text-6xl text-cream-100 block">{stat.value}</span>
                <span className="text-charcoal-400 text-sm mt-3 block tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-16">03 — How It Works</p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '01', title: 'Upload Your Space', desc: 'Snap a photo or upload floor plans. Tell us your vision.' },
              { num: '02', title: 'AI Designs', desc: 'Our AI generates multiple concepts tailored to your taste and budget.' },
              { num: '03', title: 'Visualize', desc: 'Explore photorealistic 3D renders and immersive walkthroughs.' },
              { num: '04', title: 'Shop the Room', desc: 'Click any item to purchase from our curated partner brands.' },
            ].map((step, i) => (
              <div key={i} className="relative">
                <span className="font-serif text-5xl text-sand-200 block mb-6">{step.num}</span>
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">{step.title}</h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-sand-100" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="editorial-heading text-charcoal-800 mb-8">
            <span className="block text-4xl md:text-5xl">Ready to transform</span>
            <em className="block text-4xl md:text-5xl text-terra-500 mt-2">your space?</em>
          </h2>
          <p className="text-charcoal-500 max-w-lg mx-auto mb-12 leading-relaxed">
            Join thousands of homeowners, designers, and architects who are already designing, visualizing, and furnishing with Atelier AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/design-studio" 
              className="px-10 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all"
            >
              Start Designing
            </Link>
            <Link 
              to="/marketplace" 
              className="px-10 py-4 border border-charcoal-300 hover:border-charcoal-800 text-charcoal-800 text-[13px] tracking-[0.15em] uppercase transition-all"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
