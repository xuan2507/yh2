import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, PenTool, Zap, Globe, Award } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">About</span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            One Vision.
            <span className="font-serif italic text-brand-400 font-normal"> Infinite Possibilities.</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Atelier AI is a next-generation design platform that unifies AI-powered interior design, professional architectural visualization, and a shoppable furniture marketplace into a single seamless experience.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="px-6 py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Bridging Design and
                <span className="font-serif italic text-brand-400 font-normal"> Commerce</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Traditional interior design is fragmented. You hire a designer, wait weeks for concepts, then spend months sourcing furniture from dozens of websites, hoping everything works together.
                </p>
                <p>
                  Atelier AI eliminates that friction. Our AI designs your space in minutes, renders it photorealistically, and instantly turns every item into a shoppable product. What you see is exactly what you can buy.
                </p>
                <p>
                  As a solo-founded company, we move fast, iterate constantly, and obsess over every detail of the customer experience. This isn't just a tool — it's the future of how spaces are designed and furnished.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">2,400+</span>
                <span className="block text-sm text-white/50 mt-1">Happy Customers</span>
              </div>
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">500+</span>
                <span className="block text-sm text-white/50 mt-1">Partner Products</span>
              </div>
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">12</span>
                <span className="block text-sm text-white/50 mt-1">Countries</span>
              </div>
              <div className="p-6 bg-dark-800 border border-white/5 rounded-xl text-center">
                <span className="text-4xl font-bold text-brand-400">98%</span>
                <span className="block text-sm text-white/50 mt-1">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Values</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              What Drives
              <span className="font-serif italic text-brand-400 font-normal"> Us</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: <Zap className="w-6 h-6" />, title: 'Speed Without Sacrifice', desc: 'Professional-quality design and visualization in hours, not weeks. AI accelerates every step without compromising on aesthetics.' },
              { icon: <Globe className="w-6 h-6" />, title: 'Democratized Design', desc: 'Great design should not be reserved for the wealthy. Our platform makes professional interior design accessible to everyone, everywhere.' },
              { icon: <Award className="w-6 h-6" />, title: 'Partnership Over Ownership', desc: 'We partner with the best brands rather than manufacturing. This means more choice, better quality, and fair economics for everyone in the ecosystem.' },
            ].map((v, i) => (
              <div key={i} className="p-8 bg-dark-800 border border-white/5 rounded-xl hover:border-brand-500/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                  {v.icon}
                </div>
                <h3 className="font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Build
                <span className="font-serif italic text-brand-400 font-normal"> Together</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Whether you're a homeowner with a dream, an architect with a deadline, or a brand looking to partner — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-brand-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50">Email</span>
                    <span className="text-white">hello@atelierai.studio</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-brand-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50">Phone</span>
                    <span className="text-white">+1 (555) 234-5678</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-dark-800 border border-white/5 flex items-center justify-center text-brand-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50">Studio</span>
                    <span className="text-white">New York, NY — Working Globally</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-dark-800 border border-white/5 rounded-2xl p-8 md:p-10">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Inquiry Type</label>
                  <select className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white appearance-none">
                    <option>Interior Design Project</option>
                    <option>Visualization Services</option>
                    <option>Brand Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 group">
                  Send Message
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
