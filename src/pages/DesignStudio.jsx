import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Maximize, DollarSign, Palette, Sparkles, Check, Home, Coffee, Briefcase, Store, Hotel, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function DesignStudio() {
  const [step, setStep] = useState(1);
  const [uploaded, setUploaded] = useState(false);
  const [designing, setDesigning] = useState(false);
  const [complete, setComplete] = useState(false);

  const styles = [
    { name: 'Scandinavian', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop' },
    { name: 'Mid-Century', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&h=300&fit=crop' },
    { name: 'Modern Minimal', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=300&fit=crop' },
    { name: 'Industrial', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop' },
    { name: 'Bohemian', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=300&h=300&fit=crop' },
    { name: 'Japandi', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300&h=300&fit=crop' },
  ];

  const budgets = ['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'];

  const deliverables = [
    { icon: <Palette className="w-5 h-5" strokeWidth={1.5} />, title: 'AI Mood Boards', desc: 'Curated color palettes and material selections' },
    { icon: <Maximize className="w-5 h-5" strokeWidth={1.5} />, title: 'Optimized Layouts', desc: 'Furniture placement for flow and function' },
    { icon: <Sparkles className="w-5 h-5" strokeWidth={1.5} />, title: '3D Renders', desc: 'Photorealistic visualizations' },
    { icon: <DollarSign className="w-5 h-5" strokeWidth={1.5} />, title: 'Shopping Lists', desc: 'Every product linked to marketplace' },
  ];

  const customers = [
    { icon: <Home className="w-5 h-5" strokeWidth={1.5} />, name: 'Homeowners', desc: 'Transform any room' },
    { icon: <Coffee className="w-5 h-5" strokeWidth={1.5} />, name: 'Cafes & Restaurants', desc: 'Memorable experiences' },
    { icon: <Briefcase className="w-5 h-5" strokeWidth={1.5} />, name: 'Offices', desc: 'Inspiring workspaces' },
    { icon: <Store className="w-5 h-5" strokeWidth={1.5} />, name: 'Retail Stores', desc: 'Layouts that drive sales' },
    { icon: <Hotel className="w-5 h-5" strokeWidth={1.5} />, name: 'Hotels & Airbnb', desc: '5-star guest experiences' },
  ];

  const handleUpload = () => {
    setUploaded(true);
    setTimeout(() => setStep(2), 800);
  };

  const handleDesign = () => {
    setDesigning(true);
    setTimeout(() => {
      setDesigning(false);
      setComplete(true);
    }, 3000);
  };

  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-8 md:px-12 lg:px-20 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">AI Design Studio</p>
            <h1 className="editorial-heading text-charcoal-800">
              <span className="block text-5xl md:text-6xl">Your space,</span>
              <em className="block text-5xl md:text-6xl text-terra-500 mt-2">reimagined</em>
            </h1>
          </div>
          <div>
            <p className="text-charcoal-500 leading-[1.8]">
              Upload a photo of your room, set your preferences, and receive multiple professional design concepts complete with 3D renders, layouts, and a shoppable product list — all within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden bg-cream-300">
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&h=700&fit=crop" 
              alt="Interior Design" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Design Tool */}
      <section className="px-8 md:px-12 lg:px-20 pb-32 bg-cream-200 py-32">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-12 text-center">Try It Now</p>
          
          <div className="bg-cream-100 border border-sand-100/50">
            {/* Steps */}
            <div className="flex items-center border-b border-sand-100/50">
              {[
                { num: 1, label: 'Upload' },
                { num: 2, label: 'Preferences' },
                { num: 3, label: 'Generate' },
              ].map((s, i) => (
                <div key={i} className={`flex-1 py-5 text-center ${step >= s.num ? 'text-charcoal-800' : 'text-charcoal-300'}`}>
                  <span className="text-[11px] tracking-[0.2em] uppercase">{s.num}. {s.label}</span>
                </div>
              ))}
            </div>

            <div className="p-10 md:p-16">
              {step === 1 && !uploaded && (
                <div className="text-center py-12">
                  <div
                    onClick={handleUpload}
                    className="border border-dashed border-sand-300 hover:border-terra-400 p-20 cursor-pointer transition-all hover:bg-cream-200/50"
                  >
                    <Upload className="w-8 h-8 text-sand-300 mx-auto mb-4" strokeWidth={1} />
                    <p className="font-serif text-xl text-charcoal-800 mb-2">Upload a photo of your room</p>
                    <p className="text-sm text-charcoal-400">Or drag and drop. Floor plans work too.</p>
                  </div>
                </div>
              )}

              {step === 1 && uploaded && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 border border-terra-300 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-terra-500" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-xl text-charcoal-800">Photo uploaded successfully</p>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-4">Select Your Style</label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {styles.map((style, i) => (
                        <button key={i} className="group text-center p-2 hover:bg-cream-200 transition-all">
                          <div className="aspect-square overflow-hidden mb-2 border border-transparent group-hover:border-terra-300 transition-all">
                            <img src={style.img} alt={style.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[11px] text-charcoal-500">{style.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-4">Room Type</label>
                    <div className="flex flex-wrap gap-2">
                      {['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Home Office', 'Bathroom'].map((room, i) => (
                        <button key={i} className="px-5 py-2.5 border border-sand-200 hover:border-terra-300 text-charcoal-600 text-[13px] transition-all">
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-4">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b, i) => (
                        <button key={i} className="px-5 py-2.5 border border-sand-200 hover:border-terra-300 text-charcoal-600 text-[13px] transition-all">
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => { setStep(3); handleDesign(); }}
                    className="w-full py-5 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-3"
                  >
                    <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                    Generate Design Concepts
                  </button>
                </div>
              )}

              {step === 3 && designing && (
                <div className="text-center py-20">
                  <div className="w-12 h-12 border-2 border-sand-200 border-t-terra-500 animate-spin mx-auto mb-8" />
                  <p className="font-serif text-xl text-charcoal-800 mb-2">AI is designing your space...</p>
                  <p className="text-charcoal-400 text-sm">Analyzing dimensions, selecting furniture, creating renders</p>
                </div>
              )}

              {step === 3 && complete && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 border border-terra-300 flex items-center justify-center mx-auto mb-8">
                    <Sparkles className="w-8 h-8 text-terra-500" strokeWidth={1.5} />
                  </div>
                  <p className="font-serif text-2xl text-charcoal-800 mb-2">Your designs are ready</p>
                  <p className="text-charcoal-400 mb-12">3 unique concepts generated with full product lists</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-10">
                    {[
                      { name: 'Scandinavian Warmth', color: 'bg-cream-300' },
                      { name: 'Modern Minimal', color: 'bg-sand-100' },
                      { name: 'Japandi Zen', color: 'bg-terra-300/20' },
                    ].map((c, i) => (
                      <div key={i} className={`${c.color} aspect-[3/4] flex items-end p-6`}>
                        <span className="font-serif text-charcoal-800">{c.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/marketplace" className="px-8 py-4 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all inline-flex items-center justify-center gap-2">
                      Shop the Room
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                    <button onClick={() => { setStep(1); setUploaded(false); setComplete(false); }} className="px-8 py-4 border border-charcoal-300 hover:border-charcoal-800 text-charcoal-800 text-[13px] tracking-[0.15em] uppercase transition-all">
                      Start New Design
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-16">04 — What You Get</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {deliverables.map((d, i) => (
              <div key={i} className="border-t border-sand-200 pt-8">
                <div className="text-terra-500 mb-4">{d.icon}</div>
                <h3 className="font-serif text-xl text-charcoal-800 mb-2">{d.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-16">05 — Who We Serve</p>
          
          <div className="grid md:grid-cols-5 gap-6">
            {customers.map((c, i) => (
              <div key={i} className="text-center p-8 bg-cream-100 border border-sand-100/50">
                <div className="text-terra-500 mx-auto mb-4 flex justify-center">{c.icon}</div>
                <h3 className="font-serif text-charcoal-800 mb-1">{c.name}</h3>
                <p className="text-xs text-charcoal-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
