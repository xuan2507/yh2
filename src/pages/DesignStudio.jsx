import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Upload, Image, Maximize, DollarSign, Palette, Sparkles, Check, Home, Coffee, Briefcase, Store, Hotel, ShoppingBag } from 'lucide-react';

export default function DesignStudio() {
  const [step, setStep] = useState(1);
  const [uploaded, setUploaded] = useState(false);
  const [designing, setDesigning] = useState(false);
  const [complete, setComplete] = useState(false);

  const styles = [
    { name: 'Scandinavian', img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&h=200&fit=crop' },
    { name: 'Mid-Century', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=200&h=200&fit=crop' },
    { name: 'Modern Minimal', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop' },
    { name: 'Industrial', img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop' },
    { name: 'Bohemian', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200&h=200&fit=crop' },
    { name: 'Japandi', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=200&h=200&fit=crop' },
  ];

  const budgets = ['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'];

  const deliverables = [
    { icon: <Palette className="w-5 h-5" />, title: 'AI Mood Boards', desc: 'Curated color palettes and material selections' },
    { icon: <Maximize className="w-5 h-5" />, title: 'Optimized Layouts', desc: 'Furniture placement optimized for flow and function' },
    { icon: <Image className="w-5 h-5" />, title: '3D Renders', desc: 'Photorealistic visualizations of your final design' },
    { icon: <DollarSign className="w-5 h-5" />, title: 'Shopping Lists', desc: 'Every product linked to our marketplace with pricing' },
    { icon: <Sparkles className="w-5 h-5" />, title: 'Lighting Plans', desc: 'Layered lighting schemes for ambiance and function' },
    { icon: <Check className="w-5 h-5" />, title: 'Budget Estimates', desc: 'Itemized cost breakdown with alternatives' },
  ];

  const customers = [
    { icon: <Home className="w-5 h-5" />, name: 'Homeowners', desc: 'Transform any room in your home' },
    { icon: <Coffee className="w-5 h-5" />, name: 'Cafes & Restaurants', desc: 'Create memorable dining experiences' },
    { icon: <Briefcase className="w-5 h-5" />, name: 'Offices', desc: 'Productive and inspiring workspaces' },
    { icon: <Store className="w-5 h-5" />, name: 'Retail Stores', desc: 'Layouts that drive sales' },
    { icon: <Hotel className="w-5 h-5" />, name: 'Hotels & Airbnb', desc: 'Guest experiences that earn 5-star reviews' },
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
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">AI Design Studio</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Your Space, Reimagined by
            <span className="font-serif italic text-brand-400 font-normal"> AI</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Upload a photo of your room, set your preferences, and receive multiple professional design concepts complete with 3D renders, layouts, and a shoppable product list — all within minutes.
          </p>
        </div>
      </section>

      {/* Interactive Design Tool */}
      <section className="px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-dark-800 border border-white/5 rounded-2xl overflow-hidden">
            {/* Steps */}
            <div className="flex items-center gap-0 border-b border-white/5">
              {[
                { num: 1, label: 'Upload' },
                { num: 2, label: 'Preferences' },
                { num: 3, label: 'Generate' },
              ].map((s, i) => (
                <div key={i} className={`flex-1 py-4 px-6 text-center ${step >= s.num ? 'text-brand-400' : 'text-white/30'}`}>
                  <span className="text-sm font-medium">{s.num}. {s.label}</span>
                </div>
              ))}
            </div>

            <div className="p-8 md:p-12">
              {step === 1 && !uploaded && (
                <div className="text-center">
                  <div
                    onClick={handleUpload}
                    className="border-2 border-dashed border-white/10 hover:border-brand-500/50 rounded-2xl p-16 cursor-pointer transition-all hover:bg-white/5"
                  >
                    <Upload className="w-12 h-12 text-white/30 mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Upload a photo of your room</p>
                    <p className="text-sm text-white/50">Or drag and drop. Floor plans work too.</p>
                  </div>
                </div>
              )}

              {step === 1 && uploaded && (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-10 h-10 text-brand-400" />
                  </div>
                  <p className="text-lg font-medium">Photo uploaded successfully!</p>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-8">
                  <div>
                    <label className="block text-sm font-medium mb-3">Select Your Style</label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {styles.map((style, i) => (
                        <button key={i} className="group text-center p-2 rounded-xl hover:bg-white/5 transition-all">
                          <div className="aspect-square rounded-lg overflow-hidden mb-2 border-2 border-transparent group-hover:border-brand-500/50 transition-all">
                            <img src={style.img} alt={style.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-xs text-white/70">{style.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Room Type</label>
                    <div className="flex flex-wrap gap-2">
                      {['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Home Office', 'Bathroom'].map((room, i) => (
                        <button key={i} className="px-4 py-2 rounded-full bg-dark-700 border border-white/10 hover:border-brand-500/50 text-sm transition-all">
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b, i) => (
                        <button key={i} className="px-4 py-2 rounded-full bg-dark-700 border border-white/10 hover:border-brand-500/50 text-sm transition-all">
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => { setStep(3); handleDesign(); }}
                    className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-5 h-5" />
                    Generate Design Concepts
                  </button>
                </div>
              )}

              {step === 3 && designing && (
                <div className="text-center py-16">
                  <div className="w-16 h-16 border-4 border-brand-500/20 border-t-brand-500 rounded-full animate-spin mx-auto mb-6" />
                  <p className="text-lg font-medium mb-2">AI is designing your space...</p>
                  <p className="text-sm text-white/50">Analyzing dimensions, selecting furniture, creating renders</p>
                </div>
              )}

              {step === 3 && complete && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-brand-500/20 flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-brand-400" />
                  </div>
                  <p className="text-xl font-medium mb-2">Your designs are ready!</p>
                  <p className="text-white/50 mb-8">3 unique concepts generated with full product lists</p>

                  <div className="grid md:grid-cols-3 gap-4 mb-8">
                    {[
                      { name: 'Concept A: Scandinavian Warmth', color: 'bg-amber-500/20' },
                      { name: 'Concept B: Modern Minimal', color: 'bg-slate-500/20' },
                      { name: 'Concept C: Japandi Zen', color: 'bg-emerald-500/20' },
                    ].map((c, i) => (
                      <div key={i} className={`${c.color} rounded-xl p-6 aspect-[4/3] flex items-end`}>
                        <span className="font-medium text-sm">{c.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/marketplace" className="px-8 py-3 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all inline-flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4" />
                      Shop the Room
                    </Link>
                    <button onClick={() => { setStep(1); setUploaded(false); setComplete(false); }} className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all">
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
      <section className="px-6 py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">What You Get</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Complete Design
              <span className="font-serif italic text-brand-400 font-normal"> Deliverables</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((d, i) => (
              <div key={i} className="p-6 bg-dark-800 border border-white/5 rounded-xl hover:border-brand-500/30 transition-all">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                  {d.icon}
                </div>
                <h3 className="font-semibold mb-1">{d.title}</h3>
                <p className="text-sm text-white/50">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Who We Serve</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Designed For
              <span className="font-serif italic text-brand-400 font-normal"> Everyone</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {customers.map((c, i) => (
              <div key={i} className="text-center p-6 bg-dark-800 border border-white/5 rounded-xl hover:border-brand-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mx-auto mb-4">
                  {c.icon}
                </div>
                <h3 className="font-semibold text-sm mb-1">{c.name}</h3>
                <p className="text-xs text-white/50">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
