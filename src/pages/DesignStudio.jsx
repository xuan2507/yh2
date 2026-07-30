import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Upload, Check, Sparkles, ArrowRight, ArrowUpRight } from 'lucide-react';

export default function DesignStudio() {
  const [step, setStep] = useState(1);
  const [uploaded, setUploaded] = useState(false);
  const [designing, setDesigning] = useState(false);
  const [complete, setComplete] = useState(false);

  const styles = [
    { name: 'Scandinavian', img: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=300&fit=crop' },
    { name: 'Mid-Century', img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=300&h=300&fit=crop' },
    { name: 'Modern Minimal', img: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=300&h=300&fit=crop' },
    { name: 'Industrial', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=300&h=300&fit=crop' },
    { name: 'Bohemian', img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=300&h=300&fit=crop' },
    { name: 'Japandi', img: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=300&h=300&fit=crop' },
  ];

  const budgets = ['Under $2,000', '$2,000 - $5,000', '$5,000 - $10,000', '$10,000 - $25,000', '$25,000+'];

  const deliverables = [
    { title: 'AI Mood Boards', desc: 'Curated color palettes and material selections' },
    { title: 'Optimized Layouts', desc: 'Furniture placement for flow and function' },
    { title: '3D Renders', desc: 'Photorealistic visualizations of your final design' },
    { title: 'Shopping Lists', desc: 'Every product linked to our marketplace with pricing' },
  ];

  const customers = [
    { name: 'Homeowners', desc: 'Transform any room in your home' },
    { name: 'Cafes & Restaurants', desc: 'Create memorable dining experiences' },
    { name: 'Offices', desc: 'Productive and inspiring workspaces' },
    { name: 'Retail Stores', desc: 'Layouts that drive sales' },
    { name: 'Hotels & Airbnb', desc: 'Guest experiences that earn 5-star reviews' },
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
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">AI Design Studio</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">Your space,</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">reimagined</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              Upload a photo of your room, set your preferences, and receive multiple professional design concepts complete with 3D renders, layouts, and a shoppable product list — all within minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1600&h=700&fit=crop" 
              alt="Interior Design" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Tool */}
      <section className="px-6 md:px-10 py-32 border-t border-line">
        <div className="max-w-2xl mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-12 text-center">Try It Now</span>
          
          <div className="border border-line">
            <div className="flex items-center border-b border-line">
              {[
                { num: 1, label: 'Upload' },
                { num: 2, label: 'Preferences' },
                { num: 3, label: 'Generate' },
              ].map((s, i) => (
                <div key={i} className={`flex-1 py-4 text-center ${step >= s.num ? 'text-ink' : 'text-line'}`}>
                  <span className="text-[11px] tracking-[0.15em] uppercase">{s.num}. {s.label}</span>
                </div>
              ))}
            </div>

            <div className="p-10 md:p-16">
              {step === 1 && !uploaded && (
                <div className="text-center py-12">
                  <div
                    onClick={handleUpload}
                    className="border border-dashed border-line hover:border-stone p-20 cursor-pointer transition-all"
                  >
                    <Upload className="w-6 h-6 text-line mx-auto mb-4" strokeWidth={1} />
                    <p className="font-serif text-lg text-ink mb-2">Upload a photo of your room</p>
                    <p className="text-sm text-stone">Or drag and drop. Floor plans work too.</p>
                  </div>
                </div>
              )}

              {step === 1 && uploaded && (
                <div className="text-center py-16">
                  <Check className="w-8 h-8 text-stone mx-auto mb-4" strokeWidth={1.5} />
                  <p className="font-serif text-lg text-ink">Photo uploaded successfully</p>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-10">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-4">Select Your Style</label>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                      {styles.map((style, i) => (
                        <button key={i} className="group text-center p-1 transition-all">
                          <div className="aspect-square overflow-hidden mb-2 border border-transparent group-hover:border-stone transition-all">
                            <img src={style.img} alt={style.name} className="w-full h-full object-cover" />
                          </div>
                          <span className="text-[10px] text-stone">{style.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-4">Room Type</label>
                    <div className="flex flex-wrap gap-2">
                      {['Living Room', 'Bedroom', 'Kitchen', 'Dining Room', 'Home Office', 'Bathroom'].map((room, i) => (
                        <button key={i} className="px-4 py-2 border border-line hover:border-stone text-stone text-[12px] transition-all">
                          {room}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-4">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b, i) => (
                        <button key={i} className="px-4 py-2 border border-line hover:border-stone text-stone text-[12px] transition-all">
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => { setStep(3); handleDesign(); }}
                    className="w-full py-5 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-3"
                  >
                    <Sparkles className="w-4 h-4" strokeWidth={1.5} />
                    Generate Design Concepts
                  </button>
                </div>
              )}

              {step === 3 && designing && (
                <div className="text-center py-20">
                  <div className="w-10 h-10 border border-line border-t-stone animate-spin mx-auto mb-8" />
                  <p className="font-serif text-lg text-ink mb-2">AI is designing your space...</p>
                  <p className="text-stone text-sm">Analyzing dimensions, selecting furniture, creating renders</p>
                </div>
              )}

              {step === 3 && complete && (
                <div className="text-center py-12">
                  <Sparkles className="w-8 h-8 text-stone mx-auto mb-6" strokeWidth={1.5} />
                  <p className="font-serif text-2xl text-ink mb-2">Your designs are ready</p>
                  <p className="text-stone mb-10">3 unique concepts generated with full product lists</p>

                  <div className="grid md:grid-cols-3 gap-3 mb-10">
                    {[
                      { name: 'Scandinavian Warmth', color: 'bg-line' },
                      { name: 'Modern Minimal', color: 'bg-stone/20' },
                      { name: 'Japandi Zen', color: 'bg-stone/10' },
                    ].map((c, i) => (
                      <div key={i} className={`${c.color} aspect-[3/4] flex items-end p-5`}>
                        <span className="font-serif text-ink text-sm">{c.name}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/marketplace" className="px-8 py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all inline-flex items-center justify-center gap-2">
                      Shop the Room
                      <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                    </Link>
                    <button onClick={() => { setStep(1); setUploaded(false); setComplete(false); }} className="px-8 py-4 border border-line hover:border-ink text-ink text-[11px] tracking-[0.12em] uppercase transition-all">
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
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/04 What You Get</span>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {deliverables.map((d, i) => (
              <div key={i} className="border-t border-line pt-8">
                <h3 className="font-serif text-lg text-ink mb-2">{d.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Gallery */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/05 Design Gallery</span>
          <h2 className="font-serif text-ink leading-[1.05] mb-16">
            <span className="block text-[clamp(2rem,4vw,3rem)]">Real spaces,</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">reimagined</em>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 h-[500px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200&h=800&fit=crop" alt="Before and after living room" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
            <div className="h-[500px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?w=600&h=800&fit=crop" alt="Scandinavian bedroom design" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
            <div className="h-[400px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=500&fit=crop" alt="Modern kitchen concept" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
            <div className="lg:col-span-2 h-[400px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=600&fit=crop" alt="Minimalist dining space" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
            <div className="h-[450px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=600&h=700&fit=crop" alt="Japandi interior concept" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
            <div className="h-[450px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=700&fit=crop" alt="Industrial loft design" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
            <div className="lg:col-span-1 h-[450px] overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1521192586723-1ef0e384dd32?w=600&h=700&fit=crop" alt="Reading nook concept" className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/06 Who We Serve</span>

          <div className="grid md:grid-cols-5 gap-8">
            {customers.map((c, i) => (
              <div key={i} className="border-t border-line pt-6">
                <h3 className="font-serif text-ink mb-1">{c.name}</h3>
                <p className="text-xs text-stone">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
