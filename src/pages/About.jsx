import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-28">
      {/* Hero */}
      <section className="px-6 md:px-10 pb-24">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">About</span>
            <h1 className="font-serif text-ink leading-[1.05]">
              <span className="block text-[clamp(2.5rem,5vw,4rem)]">One vision.</span>
              <em className="block text-[clamp(2.5rem,5vw,4rem)] text-stone mt-1">Infinite possibilities.</em>
            </h1>
          </div>
          <div>
            <p className="text-stone text-sm leading-[1.9]">
              xuantelier unifies AI-powered interior design, professional architectural visualization, and a curated marketplace into one seamless experience. Founded on the belief that great design should be accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 md:px-10 pb-32">
        <div className="max-w-[1400px] mx-auto">
          <div className="aspect-[21/9] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=700&fit=crop" 
              alt="xuantelier Studio" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/10 Our Story</span>
            <h2 className="font-serif text-ink leading-[1.1] mb-8">
              <span className="block text-[clamp(2rem,4vw,3rem)]">Bridging design</span>
              <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">and commerce</em>
            </h2>
            <div className="space-y-6 text-stone text-sm leading-[1.9]">
              <p>
                Traditional interior design is fragmented. You hire a designer, wait weeks for concepts, then spend months sourcing furniture from dozens of websites, hoping everything works together.
              </p>
              <p>
                xuantelier eliminates that friction. Our AI designs your space in minutes, renders it photorealistically, and instantly turns every item into a shoppable product. What you see is exactly what you can buy.
              </p>
              <p>
                As a solo-founded company, we move fast, iterate constantly, and obsess over every detail of the customer experience.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-line">
            {[
              { value: '2,400+', label: 'Happy Customers' },
              { value: '500+', label: 'Partner Products' },
              { value: '12', label: 'Countries' },
              { value: '98%', label: 'Satisfaction Rate' },
            ].map((stat, i) => (
              <div key={i} className="bg-paper p-10 text-center">
                <span className="font-serif text-4xl text-ink block">{stat.value}</span>
                <span className="text-stone text-sm mt-2 block">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-16">/11 Values</span>
          <h2 className="font-serif text-ink leading-[1.1] mb-16">
            <span className="block text-[clamp(2rem,4vw,3rem)]">What drives</span>
            <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">us</em>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: 'Speed Without Sacrifice', desc: 'Professional-quality design and visualization in hours, not weeks. AI accelerates every step without compromising on aesthetics.' },
              { title: 'Democratized Design', desc: 'Great design should not be reserved for the wealthy. Our platform makes professional interior design accessible to everyone, everywhere.' },
              { title: 'Partnership Over Ownership', desc: 'We partner with the best brands rather than manufacturing. More choice, better quality, fair economics for everyone.' },
            ].map((v, i) => (
              <div key={i} className="border-t border-line pt-8">
                <span className="text-[10px] text-stone block mb-4">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-serif text-lg text-ink mb-3">{v.title}</h3>
                <p className="text-sm text-stone leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-line">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="text-[10px] tracking-[0.3em] uppercase text-stone block mb-8">/12 Contact</span>
              <h2 className="font-serif text-ink leading-[1.1] mb-8">
                <span className="block text-[clamp(2rem,4vw,3rem)]">Let's build</span>
                <em className="block text-[clamp(2rem,4vw,3rem)] text-stone mt-1">together</em>
              </h2>
              <p className="text-stone text-sm leading-[1.9] mb-12">
                Whether you're a homeowner with a dream, an architect with a deadline, or a brand looking to partner — we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-line flex items-center justify-center text-stone">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-stone">Email</span>
                    <span className="text-ink text-sm">hello@xuantelier.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-line flex items-center justify-center text-stone">
                    <Phone className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-stone">Phone</span>
                    <span className="text-ink text-sm">+1 (555) 234-5678</span>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-10 h-10 border border-line flex items-center justify-center text-stone">
                    <MapPin className="w-4 h-4" strokeWidth={1.5} />
                  </div>
                  <div>
                    <span className="block text-[10px] tracking-[0.2em] uppercase text-stone">Studio</span>
                    <span className="text-ink text-sm">New York, NY — Working Globally</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-line p-10 md:p-12">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Name</label>
                    <input type="text" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none transition-colors text-ink" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Email</label>
                    <input type="email" className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none transition-colors text-ink" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Inquiry Type</label>
                  <select className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none transition-colors text-ink appearance-none">
                    <option>Interior Design Project</option>
                    <option>Visualization Services</option>
                    <option>Brand Partnership</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-stone mb-3">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3.5 bg-transparent border border-line focus:border-stone focus:outline-none transition-colors text-ink resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="w-full py-4 bg-ink hover:bg-stone text-paper text-[11px] tracking-[0.12em] uppercase transition-all flex items-center justify-center gap-3 group">
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
