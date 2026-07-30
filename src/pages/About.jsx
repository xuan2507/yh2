import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, Zap, Globe, Award, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="px-8 md:px-12 lg:px-20 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">About</p>
            <h1 className="editorial-heading text-charcoal-800">
              <span className="block text-5xl md:text-6xl">One vision.</span>
              <em className="block text-5xl md:text-6xl text-terra-500 mt-2">Infinite possibilities.</em>
            </h1>
          </div>
          <div>
            <p className="text-charcoal-500 leading-[1.8]">
              Atelier AI unifies AI-powered interior design, professional architectural visualization, and a curated marketplace into one seamless experience. Founded on the belief that great design should be accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden bg-cream-300">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=700&fit=crop" 
              alt="Atelier AI Studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">Our Story</p>
            <h2 className="editorial-heading text-charcoal-800 mb-8">
              <span className="block text-4xl md:text-5xl">Bridging design</span>
              <em className="block text-4xl md:text-5xl text-terra-500 mt-1">and commerce</em>
            </h2>
            <div className="space-y-6 text-charcoal-500 leading-[1.8]">
              <p>
                Traditional interior design is fragmented. You hire a designer, wait weeks for concepts, then spend months sourcing furniture from dozens of websites, hoping everything works together.
              </p>
              <p>
                Atelier AI eliminates that friction. Our AI designs your space in minutes, renders it photorealistically, and instantly turns every item into a shoppable product. What you see is exactly what you can buy.
              </p>
              <p>
                As a solo-founded company, we move fast, iterate constantly, and obsess over every detail of the customer experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-sand-100/50">
            {[
              { value: '2,400+', label: 'Happy Customers' },
              { value: '500+', label: 'Partner Products' },
              { value: '12', label: 'Countries' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i} className="bg-cream-100 p-10 text-center">
                <span className="font-serif text-4xl text-charcoal-800 block">{stat.value}</span>
                <span className="text-charcoal-500 text-sm mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-16">Values</p>
          <h2 className="editorial-heading text-charcoal-800 mb-16">
            <span className="block text-4xl md:text-5xl">What drives</span>
            <em className="block text-4xl md:text-5xl text-terra-500 mt-1">us</em>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-5 h-5" strokeWidth={1.5} />, title: 'Speed Without Sacrifice', desc: 'Professional-quality design and visualization in hours, not weeks. AI accelerates every step without compromising on aesthetics.' },
              { icon: <Globe className="w-5 h-5" strokeWidth={1.5} />, title: 'Democratized Design', desc: 'Great design should not be reserved for the wealthy. Our platform makes professional interior design accessible to everyone, everywhere.' },
              { icon: <Award className="w-5 h-5" strokeWidth={1.5} />, title: 'Partnership Over Ownership', desc: 'We partner with the best brands rather than manufacturing. More choice, better quality, fair economics for everyone.' },
            ].map((v, i) => (
              <div key={i} className="border-t border-sand-200 pt-8">
                <div className="text-terra-500 mb-4">{v.icon}</div>
                <h3 className="font-serif text-xl text-charcoal-800 mb-3">{v.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 px-8 md:px-12 lg:px-20 bg-cream-200">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-terra-500 mb-8">Contact</p>
              <h2 className="editorial-heading text-charcoal-800 mb-8">
                <span className="block text-4xl md:text-5xl">Let's build</span>
                <em className="block text-4xl md:text-5xl text-terra-500 mt-1">together</em>
              </h2>
              <p className="text-charcoal-500 leading-[1.8] mb-12">
                Whether you're a homeowner with a dream, an architect with a deadline, or a brand looking to partner — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 border border-sand-200 flex items-center justify-center text-terra-500">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400">Email</span>
                    <span className="text-charcoal-800">hello@atelierai.studio</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 border border-sand-200 flex items-center justify-center text-terra-500">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400">Phone</span>
                    <span className="text-charcoal-800">+1 (555) 234-5678</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 border border-sand-200 flex items-center justify-center text-terra-500">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400">Studio</span>
                    <span className="text-charcoal-800">New York, NY — Working Globally</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream-100 border border-sand-100/50 p-10 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-3">Name</label>
                    <input type="text" className="w-full px-4 py-3.5 bg-cream-200 border border-sand-100/50 focus:border-terra-300 focus:outline-none transition-colors text-charcoal-800" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-3">Email</label>
                    <input type="email" className="w-full px-4 py-3.5 bg-cream-200 border border-sand-100/50 focus:border-terra-300 focus:outline-none transition-colors text-charcoal-800" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-3">Inquiry Type</label>
                  <select className="w-full px-4 py-3.5 bg-cream-200 border border-sand-100/50 focus:border-terra-300 focus:outline-none transition-colors text-charcoal-800 appearance-none">
                    <option>Interior Design Project</option>
                    <option>Visualization Services</option>
                    <option>Brand Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-3">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3.5 bg-cream-200 border border-sand-100/50 focus:border-terra-300 focus:outline-none transition-colors text-charcoal-800 resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full py-4 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 text-[13px] tracking-[0.15em] uppercase transition-all flex items-center justify-center gap-3 group">
                  Send Message
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
