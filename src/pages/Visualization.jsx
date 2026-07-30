import { Camera, Box, TreePine, Building2, RotateCcw, Video, Sun, Moon, Check, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function Visualization() {
  const services = [
    { icon: <Building2 className="w-5 h-5" strokeWidth={1.5} />, title: 'Exterior Renders', desc: 'Photorealistic building exteriors with accurate lighting, materials, and landscaping.', price: 'From $500' },
    { icon: <Camera className="w-5 h-5" strokeWidth={1.5} />, title: 'Interior Renders', desc: 'Stunning interior visualizations showcasing space, light, and materiality.', price: 'From $400' },
    { icon: <TreePine className="w-5 h-5" strokeWidth={1.5} />, title: 'Landscape Visualization', desc: 'Beautiful outdoor spaces, gardens, and environmental contexts.', price: 'From $350' },
    { icon: <Box className="w-5 h-5" strokeWidth={1.5} />, title: 'Urban Planning', desc: 'Large-scale masterplans and urban design visualizations.', price: 'From $800' },
    { icon: <RotateCcw className="w-5 h-5" strokeWidth={1.5} />, title: '360° Panoramic Views', desc: 'Immersive spherical renders for VR headsets and virtual tours.', price: 'From $600' },
    { icon: <Video className="w-5 h-5" strokeWidth={1.5} />, title: 'Virtual Walkthroughs', desc: 'Cinematic animated flythroughs bringing projects to life.', price: 'From $1,200' },
    { icon: <Sun className="w-5 h-5" strokeWidth={1.5} />, title: 'Day & Night Scenes', desc: 'Multiple lighting scenarios from morning to evening ambiance.', price: 'From $300' },
    { icon: <Moon className="w-5 h-5" strokeWidth={1.5} />, title: 'Marketing Visuals', desc: 'Lifestyle-oriented renders for brochures, websites, and campaigns.', price: 'From $450' },
  ];

  const benefits = [
    'Reduce visualization costs by up to 60%',
    'Receive drafts in 24-48 hours vs. weeks',
    'Unlimited design iterations included',
    'AI-assisted material and lighting optimization',
    'Direct integration with our furniture marketplace',
    'White-label deliverables for client presentations',
  ];

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-8 md:px-12 lg:px-20 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">Architecture Visualization</p>
            <h1 className="editorial-heading text-charcoal-800">
              <span className="block text-5xl md:text-6xl">See the future,</span>
              <em className="block text-5xl md:text-6xl text-terra-500 mt-2">today</em>
            </h1>
          </div>
          <div>
            <p className="text-charcoal-500 leading-[1.8]">
              Professional-grade architectural visualization powered by AI. From photorealistic renders to immersive virtual walkthroughs — faster, more affordable, and more flexible than traditional studios.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="px-8 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-4">
          <div className="aspect-[4/3] bg-cream-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-cream-300 flex items-center justify-center">
              <div className="text-center">
                <Box className="w-12 h-12 text-sand-200 mx-auto mb-4" strokeWidth={1} />
                <p className="font-serif text-charcoal-500">3D Wireframe Model</p>
                <p className="text-charcoal-400 text-sm mt-1">Input: architectural plans</p>
              </div>
            </div>
            <div className="absolute top-6 left-6 px-3 py-1 bg-cream-100/80 text-[11px] tracking-[0.2em] uppercase text-charcoal-500">Before</div>
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&h=750&fit=crop" alt="Render" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-800/30 to-transparent" />
            <div className="absolute top-6 left-6 px-3 py-1 bg-terra-500 text-[11px] tracking-[0.2em] uppercase text-white">After</div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-xl text-white">Photorealistic Render</p>
              <p className="text-white/70 text-sm mt-1">AI-enhanced with accurate materials, lighting, and landscaping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-16">06 — Services</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-sand-100/50">
            {services.map((s, i) => (
              <div key={i} className="bg-cream-200 p-8 hover:bg-cream-100 transition-all group">
                <div className="text-terra-500 mb-6 group-hover:scale-110 transition-transform origin-left">{s.icon}</div>
                <h3 className="font-serif text-lg text-charcoal-800 mb-2">{s.title}</h3>
                <p className="text-sm text-charcoal-500 mb-6 leading-relaxed">{s.desc}</p>
                <span className="text-[11px] tracking-[0.15em] uppercase text-terra-500">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">07 — Why Atelier AI</p>
            <h2 className="editorial-heading text-charcoal-800 mb-10">
              <span className="block text-4xl md:text-5xl">Faster, better,</span>
              <em className="block text-4xl md:text-5xl text-terra-500 mt-1">more affordable</em>
            </h2>
            <div className="space-y-5">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-5 h-5 border border-terra-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-terra-500" strokeWidth={2} />
                  </div>
                  <span className="text-charcoal-600">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-sand-100/50">
            {[
              { value: '60%', label: 'Cost Reduction' },
              { value: '24h', label: 'Turnaround Time' },
              { value: '∞', label: 'Iterations' },
              { value: '8K', label: 'Resolution' },
            ].map((stat, i) => (
              <div key={i} className="bg-cream-100 p-10 text-center">
                <span className="font-serif text-4xl md:text-5xl text-charcoal-800 block">{stat.value}</span>
                <span className="text-charcoal-500 text-sm mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-charcoal-800">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-300 mb-16">08 — Trusted By</p>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-px bg-charcoal-700">
            {['Architects', 'Developers', 'Real Estate', 'Construction', 'Interior Designers', 'Landscape Architects'].map((c, i) => (
              <div key={i} className="bg-charcoal-800 p-8 text-center">
                <span className="text-cream-100 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="editorial-heading text-charcoal-800 mb-8">
            <span className="block text-4xl md:text-5xl">Ready to visualize</span>
            <em className="block text-4xl md:text-5xl text-terra-500 mt-2">your project?</em>
          </h2>
          <p className="text-charcoal-500 max-w-lg mx-auto mb-12 leading-relaxed">
            Get a free quote for your visualization project. Upload your plans and receive a detailed proposal within hours.
          </p>
          <button className="px-10 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all inline-flex items-center gap-3 group">
            Request a Quote
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </button>
        </div>
      </section>
    </div>
  );
}
