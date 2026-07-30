import { Camera, Box, TreePine, Building2, RotateCcw, Video, Sun, Moon, Check, ArrowRight } from 'lucide-react';

export default function Visualization() {
  const services = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Exterior Renders',
      desc: 'Photorealistic building exteriors with accurate lighting, materials, and landscaping for presentations and marketing.',
      price: 'From $500',
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: 'Interior Renders',
      desc: 'Stunning interior visualizations that showcase space, light, and materiality with photographic realism.',
      price: 'From $400',
    },
    {
      icon: <TreePine className="w-6 h-6" />,
      title: 'Landscape Visualization',
      desc: 'Beautiful outdoor spaces, gardens, and environmental contexts that complement architectural designs.',
      price: 'From $350',
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: 'Urban Planning Concepts',
      desc: 'Large-scale masterplans and urban design visualizations for city planners and developers.',
      price: 'From $800',
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: '360° Panoramic Views',
      desc: 'Immersive spherical renders for VR headsets and web-based virtual tours of unbuilt spaces.',
      price: 'From $600',
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: 'Virtual Walkthroughs',
      desc: 'Cinematic animated flythroughs that bring architectural projects to life for stakeholders and buyers.',
      price: 'From $1,200',
    },
    {
      icon: <Sun className="w-6 h-6" />,
      title: 'Day & Night Scenes',
      desc: 'Multiple lighting scenarios showing how spaces transform from morning light to evening ambiance.',
      price: 'From $300',
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: 'Marketing Visuals',
      desc: 'Lifestyle-oriented renders optimized for brochures, websites, and property launch campaigns.',
      price: 'From $450',
    },
  ];

  const clients = [
    'Architects',
    'Property Developers',
    'Real Estate Agencies',
    'Construction Companies',
    'Interior Designers',
    'Landscape Architects',
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
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Architecture Visualization</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            See the Future,
            <span className="font-serif italic text-brand-400 font-normal"> Today</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Professional-grade architectural visualization powered by AI. From photorealistic renders to immersive virtual walkthroughs — faster, more affordable, and more flexible than traditional studios.
          </p>
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] rounded-2xl bg-dark-800 border border-white/5 overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-600/30 to-slate-800/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Box className="w-16 h-16 text-white/20 mx-auto mb-4" />
                  <p className="text-white/40 font-medium">3D Wireframe Model</p>
                  <p className="text-white/30 text-sm mt-1">Input: architectural plans</p>
                </div>
              </div>
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark-900/80 text-xs text-white/60">Before</div>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-dark-800 border border-white/5 overflow-hidden relative group">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop" alt="Render" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-brand-600/80 text-xs text-white">After</div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white font-medium">Photorealistic Render</p>
                <p className="text-white/60 text-sm">AI-enhanced visualization with accurate materials, lighting, and landscaping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Every Visualization
              <span className="font-serif italic text-brand-400 font-normal"> You Need</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-dark-800 border border-white/5 rounded-xl hover:border-brand-500/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-white/50 mb-4">{s.desc}</p>
                <span className="text-sm text-brand-400 font-medium">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Why Atelier AI</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Faster, Better,
                <span className="font-serif italic text-brand-400 font-normal"> More Affordable</span>
              </h2>
              <div className="space-y-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-brand-400" />
                    </div>
                    <span className="text-white/70">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">60%</span>
                <span className="block text-sm text-white/50 mt-1">Cost Reduction</span>
              </div>
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">24h</span>
                <span className="block text-sm text-white/50 mt-1">Turnaround Time</span>
              </div>
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">∞</span>
                <span className="block text-sm text-white/50 mt-1">Iterations</span>
              </div>
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">8K</span>
                <span className="block text-sm text-white/50 mt-1">Render Resolution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="px-6 py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Clients</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Trusted By Industry
              <span className="font-serif italic text-brand-400 font-normal"> Leaders</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {clients.map((c, i) => (
              <div key={i} className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center hover:border-brand-500/30 transition-all">
                <span className="text-sm font-medium">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Visualize Your
            <span className="font-serif italic text-brand-400 font-normal"> Project?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Get a free quote for your visualization project. Upload your plans and receive a detailed proposal within hours.
          </p>
          <button className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all inline-flex items-center gap-2 group">
            Request a Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
