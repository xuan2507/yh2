import { Camera, Box, TreePine, Building2, RotateCcw, Video, Sun, Moon, Check, ArrowUpRight } from 'lucide-react';

export default function Visualization() {
  const services = [
    { title: 'Exterior Renders', desc: 'Photorealistic building exteriors with accurate lighting, materials, and landscaping.', price: 'From $500' },
    { title: 'Interior Renders', desc: 'Stunning interior visualizations showcasing space, light, and materiality.', price: 'From $400' },
    { title: 'Landscape Visualization', desc: 'Beautiful outdoor spaces, gardens, and environmental contexts.', price: 'From $350' },
    { title: 'Urban Planning', desc: 'Large-scale masterplans and urban design visualizations.', price: 'From $800' },
    { title: '360° Panoramic Views', desc: 'Immersive spherical renders for VR headsets and virtual tours.', price: 'From $600' },
    { title: 'Virtual Walkthroughs', desc: 'Cinematic animated flythroughs bringing projects to life.', price: 'From $1,200' },
    { title: 'Day & Night Scenes', desc: 'Multiple lighting scenarios from morning to evening ambiance.', price: 'From $300' },
    { title: 'Marketing Visuals', desc: 'Lifestyle-oriented renders for brochures, websites, and campaigns.', price: 'From $450' },
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
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">Architecture Visualization</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">See the future,</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">today</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Professional-grade architectural visualization powered by AI. From photorealistic renders to immersive virtual walkthroughs — faster, more affordable, and more flexible than traditional studios.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-1">
          <div className="aspect-[4/3] bg-line relative overflow-hidden flex items-center justify-center">
            <div className="text-center">
              <Box className="w-10 h-10 text-stone/30 mx-auto mb-4" strokeWidth={1} />
              <p className="font-serif text-stone">3D Wireframe Model</p>
              <p className="text-stone/60 text-sm mt-1">Input: architectural plans</p>
            </div>
            <div className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase text-stone">Before</div>
          </div>
          <div className="aspect-[4/3] relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&h=750&fit=crop" alt="Render" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent" />
            <div className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase text-paper bg-ink px-2 py-1">After</div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-serif text-xl text-white">Photorealistic Render</p>
              <p className="text-white/70 text-sm mt-1">AI-enhanced with accurate materials, lighting, and landscaping</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/06 Services</span>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
            {services.map((s, i) => (
              <div key={i} className="bg-paper p-8 hover:bg-paper/80 transition-all group">
                <h3 className="font-serif text-lg text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-stone mb-6 leading-relaxed">{s.desc}</p>
                <span className="text-[10px] tracking-[0.15em] uppercase text-stone">{s.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/07 Why xuantelier</span>
            <h2 className="font-serif text-ink leading-[1.1] mb-10">
              <span className="block text-[clamp(2rem,4vw,3rem)]">Faster, better,</span>
              <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">more affordable</em>
            </h2>
            <div className="space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-3.5 h-3.5 text-stone flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <span className="text-stone text-sm">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line">
            {[
              { value: '60%', label: 'Cost Reduction' },
              { value: '24h', label: 'Turnaround Time' },
              { value: '∞', label: 'Iterations' },
              { value: '8K', label: 'Resolution' },
            ].map((stat, i) => (
              <div key={i} className="bg-paper p-10 text-center">
                <span className="font-serif text-4xl md:text-5xl text-ink block">{stat.value}</span>
                <span className="text-stone text-sm mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line bg-ink">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/08 Trusted By</span>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-px bg-stone/20">
            {['Architects', 'Developers', 'Real Estate', 'Construction', 'Interior Designers', 'Landscape Architects'].map((c, i) => (
              <div key={i} className="bg-ink p-8 text-center">
                <span className="text-paper text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-ink leading-[1.1] mb-8">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Ready to visualize</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">your project?</em>
          </h2>
          <p className="text-stone text-sm leading-[1.8] max-w-md mx-auto mb-12">
            Get a free quote for your visualization project. Upload your plans and receive a detailed proposal within hours.
          </p>
          <button className="px-10 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all inline-flex items-center gap-3 group">
            Request a Quote
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
          </button>
        </div>
      </section>
    </div>
  );
}
