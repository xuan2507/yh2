import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Reveal({ children, className = '', delay = 0 }) {
  const { ref, visible } = useScrollReveal(0.08);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.3;
      parallaxRef.current.style.transform = `translateY(${rate}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const platforms = [
    {
      num: '/01',
      title: 'AI Design Studio',
      desc: 'Upload a photo of your space. Set your preferences. Receive multiple professionally designed concepts with 3D renders, layouts, and a complete shopping list — in minutes, not weeks.',
      link: '/design-studio',
      image: 'https://images.unsplash.com/photo-1592315862863-f5f4ff421b3b?w=900&h=1100&fit=crop',
    },
    {
      num: '/02',
      title: 'Visualization',
      desc: 'Photorealistic exterior and interior renders, 360° panoramas, and cinematic virtual walkthroughs for architects, developers, and real estate professionals.',
      link: '/visualization',
      image: 'https://images.unsplash.com/photo-1614961234425-dedd96e5e699?w=900&h=1100&fit=crop',
    },
    {
      num: '/03',
      title: 'Marketplace',
      desc: 'Every item in your AI-generated design is clickable and shoppable. Partnered with the world\'s finest furniture brands. Your complete room, delivered to your door.',
      link: '/marketplace',
      image: 'https://images.unsplash.com/photo-1513584684374-8ab4dc5e39f2?w=900&h=1100&fit=crop',
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1494526585095-c41746248156?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1600210491898-03076e8ec95c?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=650&fit=crop',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=500&h=650&fit=crop',
  ];

  const mosaicImages = [
    { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=800&fit=crop', w: 'lg:col-span-2', h: 'h-[500px]' },
    { src: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=400&h=500&fit=crop', w: 'lg:col-span-1', h: 'h-[500px]' },
    { src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=500&fit=crop', w: 'lg:col-span-1', h: 'h-[400px]' },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=500&fit=crop', w: 'lg:col-span-2', h: 'h-[400px]' },
    { src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&h=500&fit=crop', w: 'lg:col-span-1', h: 'h-[450px]' },
    { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=500&fit=crop', w: 'lg:col-span-1', h: 'h-[450px]' },
  ];

  const architectureImages = [
    { src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=700&h=900&fit=crop', title: 'Modern Residential Interior', location: 'Private Residence' },
    { src: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=700&h=900&fit=crop', title: 'Contemporary Living Space', location: 'Urban Apartment' },
    { src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&h=900&fit=crop', title: 'Scandinavian-Inspired Home', location: 'Nordic Residence' },
    { src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=700&h=900&fit=crop', title: 'Light-Filled Interior', location: 'City Residence' },
    { src: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=700&h=900&fit=crop', title: 'Warm Tonal Bedroom', location: 'Private Villa' },
    { src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&h=900&fit=crop', title: 'Minimalist Reading Nook', location: 'Studio Apartment' },
  ];

  const revenueStreams = [
    { title: 'Marketplace Commission', desc: 'Commission on every product sold through the platform.' },
    { title: 'Featured Placement', desc: 'Priority exposure fees for brands in AI-generated designs.' },
    { title: 'Retailer Subscriptions', desc: 'Monthly plans for retailers to list and manage catalogues.' },
    { title: 'Affiliate Commissions', desc: 'Revenue from home improvement and renovation partners.' },
    { title: 'Design Consultation', desc: 'Premium fees for personalized interior design services.' },
    { title: 'Visualization Projects', desc: 'Project-based fees for architectural visualization work.' },
  ];

  return (
    <div>
      {/* Full-screen Hero with parallax */}
      <section className="min-h-screen relative flex items-end overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            ref={parallaxRef}
            src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=1920&h=1080&fit=crop&q=90" 
            alt="Interior" 
            className="w-full h-[120%] object-cover"
            style={{ marginTop: '-10%' }}
          />
          <div className="absolute inset-0 bg-ink/50" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
        </div>
        
        <div className="relative z-10 w-full px-6 md:px-10 pb-16 md:pb-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <div className="animate-fade-in-up">
                <p className="text-[10px] tracking-[0.3em] uppercase text-paper/60 mb-6">AI-Powered Design Platform</p>
                <h1 className="font-serif text-paper leading-[1.02]">
                  <span className="block text-[clamp(2.5rem,7vw,6rem)]">Houses that</span>
                  <span className="block text-[clamp(2.5rem,7vw,6rem)] mt-1">invite you to</span>
                  <em className="block text-[clamp(2.5rem,7vw,6rem)] text-paper/70 mt-1">pause time</em>
                </h1>
              </div>
              
              <div className="lg:text-right animate-fade-in-up delay-200">
                <p className="text-paper/70 text-sm leading-[1.8] max-w-sm lg:ml-auto mb-8">
                  Where artificial intelligence meets architectural artistry. Design your space, visualize it in photorealistic 3D, and shop every item — all from one platform.
                </p>
                <div className="flex items-center gap-8 lg:justify-end">
                  <Link to="/design-studio" className="group flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-paper hover:text-paper/70 transition-colors">
                    Start Designing
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </Link>
                  <Link to="/marketplace" className="text-[11px] tracking-[0.12em] uppercase text-paper/50 hover:text-paper transition-colors">
                    Explore
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-16 flex items-center gap-2">
              <p className="text-[10px] tracking-[0.2em] uppercase text-paper/40">Scroll</p>
              <ArrowDown className="w-3 h-3 text-paper/30 animate-bounce" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/00 About</span>
            <h2 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2rem,4vw,3.5rem)]">Every space</span>
              <span className="block text-[clamp(2rem,4vw,3.5rem)]">should be as</span>
              <em className="block text-[clamp(2rem,4vw,3.5rem)] text-stone mt-1">unique as you</em>
            </h2>
          </Reveal>
          <Reveal delay={150} className="lg:pt-12">
            <p className="text-stone text-sm leading-[1.9] mb-6">
              We believe that the future of interior design lies at the intersection of human creativity and artificial intelligence. Our platform unifies AI-powered design, professional visualization, and a curated marketplace into one seamless experience.
            </p>
            <p className="text-stone text-sm leading-[1.9]">
              No more fragmented processes — no more searching dozens of websites to recreate a design. What you see in your render is exactly what you can buy.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-stone hover:text-ink transition-colors mt-8">
              Our Story
              <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Full-bleed image divider */}
      <section className="h-[70vh] relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Architecture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/20" />
        <div className="absolute bottom-10 left-10">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/60">The Details</p>
        </div>
      </section>

      {/* Horizontal Image Gallery */}
      <section className="py-8 border-t border-line overflow-hidden">
        <div className="flex gap-4 animate-scroll" style={{ width: 'max-content' }}>
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="w-[320px] h-[420px] flex-shrink-0 overflow-hidden">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
            </div>
          ))}
        </div>
      </section>

      {/* Three Platforms */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/01 The Platform</span>
          </Reveal>
          
          <div className="space-y-36">
            {platforms.map((platform, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={platform.image} 
                      alt={platform.title} 
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
                    />
                  </div>
                </Reveal>
                <Reveal delay={200} className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="font-serif text-6xl text-line block mb-8">{platform.num}</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-ink mb-6">{platform.title}</h3>
                  <p className="text-stone text-sm leading-[1.9] mb-8 max-w-md">{platform.desc}</p>
                  <Link 
                    to={platform.link} 
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-ink hover:text-stone transition-colors group"
                  >
                    Discover
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mosaic image grid */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/02 Interiors</span>
            <h2 className="font-serif text-ink leading-[1.05] mb-16">
              <span className="block text-[clamp(2rem,4vw,3rem)]">Light, space,</span>
              <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">and material</em>
            </h2>
          </Reveal>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {mosaicImages.map((item, i) => (
              <Reveal key={i} delay={i * 100} className={`${item.w} ${item.h} overflow-hidden group`}>
                <img 
                  src={item.src} 
                  alt={`Interior ${i}`} 
                  className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Showcase */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/03 Selected Works</span>
            <h2 className="font-serif text-ink leading-[1.05] mb-20">
              <span className="block text-[clamp(2rem,4vw,3rem)]">Architecture</span>
              <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">& Interiors</em>
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {architectureImages.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-paper group relative overflow-hidden">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={item.src} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-[1.03] group-hover:brightness-105 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="font-serif text-white text-lg">{item.title}</p>
                    <p className="text-white/60 text-xs mt-1">{item.location}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed parallax divider 2 */}
      <section className="h-[60vh] relative overflow-hidden">
        <img 
          src="https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Interior detail" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/20" />
      </section>

      {/* Stats */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/04 By Numbers</span>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '2,400+', label: 'Spaces Designed' },
              { value: '500+', label: 'Partner Products' },
              { value: '12', label: 'Countries' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 100}>
                <span className="font-serif text-4xl md:text-6xl text-paper block">{stat.value}</span>
                <span className="text-stone text-xs mt-3 block tracking-wide">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/05 How It Works</span>
          </Reveal>
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { num: '/01', title: 'Upload Your Space', desc: 'Snap a photo or upload floor plans. Tell us your vision.' },
              { num: '/02', title: 'AI Designs', desc: 'Our AI generates multiple concepts tailored to your taste and budget.' },
              { num: '/03', title: 'Visualize', desc: 'Explore photorealistic 3D renders and immersive walkthroughs.' },
              { num: '/04', title: 'Shop the Room', desc: 'Click any item to purchase from our curated partner brands.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 100}>
                <span className="font-serif text-5xl text-line block mb-6">{step.num}</span>
                <h3 className="font-serif text-lg text-ink mb-3">{step.title}</h3>
                <p className="text-stone text-sm leading-[1.8]">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/06 Revenue Model</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="font-serif text-ink leading-[1.05] mb-16">
              <span className="block text-[clamp(2rem,4vw,3rem)]">Multiple income</span>
              <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">streams</em>
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {revenueStreams.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-paper p-10 hover:bg-paper/80 transition-all">
                  <span className="text-[10px] text-stone block mb-4">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-lg text-ink mb-2">{r.title}</h3>
                  <p className="text-sm text-stone leading-relaxed">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-12 text-center">/07 Partner Brands</span>
          </Reveal>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            {['Herman Miller', 'Knoll', 'Flos', 'Vitra', 'Carl Hansen', 'Muuto', 'Louis Poulsen', 'B&B Italia'].map((brand, i) => (
              <span key={i} className="font-serif text-stone/40 text-lg hover:text-stone transition-colors cursor-default">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-44 px-6 md:px-10 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-ink leading-[1.05] mb-8">
              <span className="block text-[clamp(2rem,4vw,3.5rem)]">Ready to transform</span>
              <em className="block text-[clamp(2rem,4vw,3.5rem)] text-stone mt-1">your space?</em>
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
              Join thousands of homeowners, designers, and architects who are already designing, visualizing, and furnishing with xuantelier.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/design-studio" 
                className="px-10 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all"
              >
                Start Designing
              </Link>
              <Link 
                to="/marketplace" 
                className="px-10 py-4 border border-line hover:border-ink text-ink text-[11px] tracking-[0.12em] uppercase transition-all"
              >
                Browse Products
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
