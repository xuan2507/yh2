import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Box, Palette, ShoppingBag, Camera, Zap, Users, TrendingUp } from 'lucide-react';

export default function Home() {
  const platforms = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'AI Design Studio',
      desc: 'Upload photos of your space and get professional interior designs in minutes. AI-generated mood boards, layouts, 3D renders, and shoppable product lists.',
      link: '/design-studio',
      color: 'from-violet-500/20 to-purple-600/20',
      stats: '150+ Designs Delivered',
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Architecture Visualization',
      desc: 'Photorealistic exterior and interior renders, 360° panoramas, virtual walkthroughs, and marketing visuals for architects and developers.',
      link: '/visualization',
      color: 'from-emerald-500/20 to-teal-600/20',
      stats: '98% Client Satisfaction',
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: 'AI Furniture Marketplace',
      desc: 'Every item in your AI design is clickable and shoppable. Partnered with top brands. AI shopping assistant recommends alternatives and matches.',
      link: '/marketplace',
      color: 'from-amber-500/20 to-orange-600/20',
      stats: '500+ Partner Products',
    },
  ];

  const howItWorks = [
    { num: '01', title: 'Upload Your Space', desc: 'Snap a photo or upload floor plans. Tell us your budget, style, and needs.' },
    { num: '02', title: 'AI Designs', desc: 'Our AI generates multiple concepts with layouts, colors, and furniture in minutes.' },
    { num: '03', title: 'Visualize', desc: 'Explore photorealistic 3D renders, 360° views, and virtual walkthroughs.' },
    { num: '04', title: 'Shop the Room', desc: 'Click any item in your design to add real products from partner brands to cart.' },
  ];

  const stats = [
    { icon: <Zap className="w-5 h-5" />, value: '5min', label: 'Average Design Time' },
    { icon: <Users className="w-5 h-5" />, value: '2,400+', label: 'Happy Customers' },
    { icon: <Box className="w-5 h-5" />, value: '500+', label: 'Partner Products' },
    { icon: <TrendingUp className="w-5 h-5" />, value: '12', label: 'Countries Served' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/40 via-dark-900 to-dark-900" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-sm text-white/80">AI-Powered Design Platform</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up delay-100 leading-[1.1]">
            Design. Visualize.
            <span className="block font-serif italic text-brand-400 font-normal mt-2">Shop.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-200 leading-relaxed">
            The first platform where AI designs your space, renders it in photorealistic 3D, and turns every item into a shoppable product. All in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
            <Link to="/design-studio" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all flex items-center gap-2 group">
              Start Designing
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/marketplace" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all">
              Explore Marketplace
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Three Platforms */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">The Platform</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Three Pillars. One
              <span className="font-serif italic text-brand-400 font-normal"> Vision.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, i) => (
              <Link
                key={i}
                to={platform.link}
                className="group p-8 md:p-10 rounded-2xl bg-dark-800 border border-white/5 hover:border-brand-500/30 transition-all hover:bg-dark-700/50 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${platform.color} flex items-center justify-center text-brand-400 mb-6 group-hover:scale-110 transition-transform`}>
                  {platform.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{platform.title}</h3>
                <p className="text-white/50 leading-relaxed mb-6 flex-1">{platform.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-400">{platform.stats}</span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 px-6 bg-dark-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-400 text-sm tracking-widest uppercase mb-4 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              From Idea to
              <span className="font-serif italic text-brand-400 font-normal"> Reality</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="relative text-center">
                <span className="text-6xl font-bold text-brand-500/10 mb-4 block">{step.num}</span>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
                {i < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your
            <span className="font-serif italic text-brand-400 font-normal"> Space?</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-10">
            Join thousands of homeowners, designers, and architects using Atelier AI to design, visualize, and furnish spaces faster than ever before.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/design-studio" className="px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-full transition-all flex items-center gap-2 group">
              <Palette className="w-4 h-4" />
              Start Free Design
            </Link>
            <Link to="/marketplace" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center gap-2">
              <ShoppingBag className="w-4 h-4" />
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
