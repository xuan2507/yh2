import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen relative flex">
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-10 pt-28 pb-20">
          <div className="animate-fade-in-up">
            <p className="text-[10px] tracking-[0.3em] uppercase text-stone mb-10">AI-Powered Design Platform</p>
            
            <h1 className="font-serif text-ink leading-[1.05] mb-10">
              <span className="block text-[clamp(2.5rem,6vw,5rem)]">Houses that</span>
              <span className="block text-[clamp(2.5rem,6vw,5rem)] mt-1">invite you to</span>
              <em className="block text-[clamp(2.5rem,6vw,5rem)] text-stone mt-1">pause time</em>
            </h1>
            
            <p className="text-stone text-sm leading-[1.8] max-w-sm mb-12">
              Where artificial intelligence meets architectural artistry. Design your space, visualize it in photorealistic 3D, and shop every item — all from one platform.
            </p>
            
            <div className="flex items-center gap-8">
              <Link to="/design-studio" className="group flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-ink hover:text-stone transition-colors">
                Start Designing
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
              </Link>
              <Link to="/marketplace" className="text-[11px] tracking-[0.12em] uppercase text-stone hover:text-ink transition-colors">
                Explore
              </Link>
            </div>
          </div>
        </div>
        
        <div className="hidden lg:block w-1/2 relative">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=1600&fit=crop" 
            alt="Interior" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-10">
            <p className="text-[10px] tracking-[0.2em] uppercase text-white/50 mb-2">Scroll</p>
            <ArrowDown className="w-3.5 h-3.5 text-white/30 animate-bounce" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/00 About</span>
            <h2 className="font-serif text-ink leading-[1.1]">
              <span className="block text-[clamp(2rem,4vw,3.5rem)]">Every space</span>
              <span className="block text-[clamp(2rem,4vw,3.5rem)]">should be as</span>
              <em className="block text-[clamp(2rem,4vw,3.5rem)] text-stone mt-1">unique as you</em>
            </h2>
          </div>
          <div className="lg:pt-12">
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
          </div>
        </div>
      </section>

      {/* Three Platforms */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/01 The Platform</span>
          
          <div className="space-y-32">
            {[
              {
                num: '/01',
                title: 'AI Design Studio',
                desc: 'Upload a photo of your space. Set your preferences. Receive multiple professionally designed concepts with 3D renders, layouts, and a complete shopping list — in minutes, not weeks.',
                link: '/design-studio',
                image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1000&fit=crop',
              },
              {
                num: '/02',
                title: 'Visualization',
                desc: 'Photorealistic exterior and interior renders, 360° panoramas, and cinematic virtual walkthroughs for architects, developers, and real estate professionals.',
                link: '/visualization',
                image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop',
              },
              {
                num: '/03',
                title: 'Marketplace',
                desc: 'Every item in your AI-generated design is clickable and shoppable. Partnered with the world\'s finest furniture brands. Your complete room, delivered to your door.',
                link: '/marketplace',
                image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop',
              },
            ].map((platform, i) => (
              <div key={i} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={platform.image} 
                      alt={platform.title} 
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-1000"
                    />
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <span className="font-serif text-5xl text-line block mb-8">{platform.num}</span>
                  <h3 className="font-serif text-3xl md:text-4xl text-ink mb-6">{platform.title}</h3>
                  <p className="text-stone text-sm leading-[1.9] mb-8 max-w-md">{platform.desc}</p>
                  <Link 
                    to={platform.link} 
                    className="inline-flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-ink hover:text-stone transition-colors group"
                  >
                    Discover
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/02 By Numbers</span>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '2,400+', label: 'Spaces Designed' },
              { value: '500+', label: 'Partner Products' },
              { value: '12', label: 'Countries' },
              { value: '98%', label: 'Satisfaction' },
            ].map((stat, i) => (
              <div key={i}>
                <span className="font-serif text-4xl md:text-5xl text-paper block">{stat.value}</span>
                <span className="text-stone text-xs mt-3 block tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-20">/03 How It Works</span>
          
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { num: '/01', title: 'Upload Your Space', desc: 'Snap a photo or upload floor plans. Tell us your vision.' },
              { num: '/02', title: 'AI Designs', desc: 'Our AI generates multiple concepts tailored to your taste and budget.' },
              { num: '/03', title: 'Visualize', desc: 'Explore photorealistic 3D renders and immersive walkthroughs.' },
              { num: '/04', title: 'Shop the Room', desc: 'Click any item to purchase from our curated partner brands.' },
            ].map((step, i) => (
              <div key={i}>
                <span className="font-serif text-4xl text-line block mb-6">{step.num}</span>
                <h3 className="font-serif text-lg text-ink mb-3">{step.title}</h3>
                <p className="text-stone text-sm leading-[1.8]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-ink leading-[1.1] mb-8">
            <span className="block text-[clamp(2rem,4vw,3.5rem)]">Ready to transform</span>
            <em className="block text-[clamp(2rem,4vw,3.5rem)] text-stone mt-1">your space?</em>
          </h2>
          <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
            Join thousands of homeowners, designers, and architects who are already designing, visualizing, and furnishing with Atelier AI.
          </p>
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
        </div>
      </section>
    </div>
  );
}
