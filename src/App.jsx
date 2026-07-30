import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight, Sparkles, Box, Palette, Camera, PenTool, Mail, MapPin, Phone, Globe, Share2, MessageCircle } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI-Powered Design',
      desc: 'Leveraging cutting-edge AI to generate personalized interior concepts, mood boards, and spatial layouts tailored to your unique taste and lifestyle.',
    },
    {
      icon: <Box className="w-8 h-8" />,
      title: '3D Visualization',
      desc: 'Photorealistic architectural renders and immersive 3D walkthroughs that bring your space to life before a single brick is laid.',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Space Planning',
      desc: 'Intelligent spatial optimization combining human-centered design principles with data-driven layout recommendations for maximum functionality.',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Material Curation',
      desc: 'Expert selection of finishes, textures, and furnishings. AI-assisted material matching ensures cohesive, timeless aesthetics.',
    },
  ]

  const portfolio = [
    { title: 'Neo-Minimalist Loft', category: 'Residential', color: 'from-violet-500/20 to-purple-600/20' },
    { title: 'Zen Wellness Center', category: 'Commercial', color: 'from-emerald-500/20 to-teal-600/20' },
    { title: 'Coastal Modern Villa', category: 'Residential', color: 'from-blue-500/20 to-cyan-600/20' },
    { title: 'Urban Micro-Apartment', category: 'Residential', color: 'from-amber-500/20 to-orange-600/20' },
    { title: 'Tech HQ Lobby', category: 'Commercial', color: 'from-rose-500/20 to-pink-600/20' },
    { title: 'Scandinavian Retreat', category: 'Residential', color: 'from-slate-500/20 to-gray-600/20' },
  ]

  const steps = [
    { num: '01', title: 'Discovery', desc: 'Deep-dive consultation to understand your vision, lifestyle, and spatial requirements.' },
    { num: '02', title: 'AI Concept', desc: 'AI generates multiple design directions and mood boards based on your inputs.' },
    { num: '03', title: 'Refinement', desc: 'Collaborative iteration. We fine-tune layouts, materials, and details together.' },
    { num: '04', title: 'Visualization', desc: 'Photorealistic 3D renders and virtual walkthroughs of the final design.' },
    { num: '05', title: 'Delivery', desc: 'Complete documentation, specs, and guidance for seamless implementation.' },
  ]

  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold tracking-tight">
            <span className="font-['Playfair_Display'] italic text-brand-400">Atelier</span>
            <span className="ml-1 font-light">AI</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm text-white/70 hover:text-white transition-colors tracking-wide">
                {link.name}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-full transition-all">
              Start a Project
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-800 border-b border-white/5 px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-dark-900 to-dark-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-white/80">AI-Enhanced Design Studio</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100 leading-[1.1]">
            Design Beyond
            <span className="block font-['Playfair_Display'] italic text-brand-400 font-normal mt-2">Imagination</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
            Where artificial intelligence meets architectural artistry. Bespoke interior design and photorealistic visualization for discerning clients worldwide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <a href="#portfolio" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all flex items-center gap-2 group">
              View Portfolio
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all">
              Book Consultation
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 text-sm">
          <span className="tracking-widest uppercase text-xs">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-20">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Services</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Intelligence Meets
              <span className="font-['Playfair_Display'] italic text-brand-400 font-normal"> Aesthetics</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-8 md:p-10 rounded-2xl bg-dark-800 border border-white/5 hover:border-brand-500/30 transition-all hover:bg-dark-700/50">
                <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-white/50 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 md:py-32 px-6 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20">
            <div>
              <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Selected Work</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Featured
                <span className="font-['Playfair_Display'] italic text-brand-400 font-normal"> Projects</span>
              </h2>
            </div>
            <p className="text-white/50 max-w-md mt-4 md:mt-0">
              A curated selection of residential and commercial spaces transformed through the synergy of human creativity and AI precision.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((project, i) => (
              <div key={i} className="group relative aspect-[4/5] rounded-2xl overflow-hidden bg-dark-700 cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-80 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs text-white/50 tracking-widest uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">How We Work</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              The Design
              <span className="font-['Playfair_Display'] italic text-brand-400 font-normal"> Journey</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <span className="text-5xl font-bold text-brand-500/20 mb-4 block">{step.num}</span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">About</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                One Vision.
                <span className="font-['Playfair_Display'] italic text-brand-400 font-normal block">Infinite Possibilities.</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Atelier AI is a boutique design studio founded on the belief that the future of interior design lies at the intersection of human creativity and artificial intelligence.
                </p>
                <p>
                  As a solo practitioner, I offer a deeply personal, collaborative experience — combining years of architectural training with cutting-edge AI tools to deliver designs that are both innovative and intimately tailored to each client.
                </p>
                <p>
                  Every project is an opportunity to push boundaries. Every space is a canvas for something extraordinary.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-10">
                <div>
                  <span className="text-3xl font-bold text-brand-400">150+</span>
                  <span className="block text-sm text-white/50 mt-1">Projects Completed</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-brand-400">12</span>
                  <span className="block text-sm text-white/50 mt-1">Countries Served</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-brand-400">8</span>
                  <span className="block text-sm text-white/50 mt-1">Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-brand-500/20 to-purple-600/20 flex items-center justify-center">
                <PenTool className="w-24 h-24 text-brand-400/30" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl bg-dark-700 border border-white/5 p-6 flex flex-col justify-center">
                <span className="text-brand-400 text-3xl font-bold">98%</span>
                <span className="text-white/60 text-sm mt-1">Client Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Let's Create
                <span className="font-['Playfair_Display'] italic text-brand-400 font-normal block">Something Extraordinary</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Ready to transform your space? Whether you have a fully-formed vision or just a spark of an idea, I'd love to hear from you. Every great design starts with a conversation.
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

              <div className="flex items-center gap-4 mt-10">
                <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                  <Globe className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                  <Share2 className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                  <MessageCircle className="w-4 h-4" />
                </a>
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
                  <label className="block text-sm text-white/50 mb-2">Project Type</label>
                  <select className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white appearance-none">
                    <option>Residential Interior</option>
                    <option>Commercial Space</option>
                    <option>Architecture Visualization</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-2">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl focus:border-brand-500/50 focus:outline-none transition-colors text-white resize-none" placeholder="Tell me about your project..." />
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

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-2xl font-semibold tracking-tight">
            <span className="font-['Playfair_Display'] italic text-brand-400">Atelier</span>
            <span className="ml-1 font-light">AI</span>
          </div>
          <span className="text-sm text-white/30">© 2025 Atelier AI. All rights reserved.</span>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
