import { Link } from 'react-router-dom';
import { Globe, Share2, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-8 md:px-12 border-t border-sand-100/30 bg-cream-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4">
            <div className="flex items-baseline gap-1 mb-6">
              <span className="font-serif text-2xl text-charcoal-800">Atelier</span>
              <span className="font-serif text-2xl italic text-terra-500">AI</span>
            </div>
            <p className="text-charcoal-500 text-sm leading-relaxed max-w-xs">
              AI-powered interior design, architectural visualization, and a shoppable home marketplace — unified in one seamless experience.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-6">Platform</h4>
            <div className="space-y-3">
              <Link to="/design-studio" className="block text-charcoal-600 hover:text-terra-500 text-sm transition-colors">Design Studio</Link>
              <Link to="/visualization" className="block text-charcoal-600 hover:text-terra-500 text-sm transition-colors">Visualization</Link>
              <Link to="/marketplace" className="block text-charcoal-600 hover:text-terra-500 text-sm transition-colors">Marketplace</Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-6">Company</h4>
            <div className="space-y-3">
              <Link to="/about" className="block text-charcoal-600 hover:text-terra-500 text-sm transition-colors">About</Link>
              <a href="#" className="block text-charcoal-600 hover:text-terra-500 text-sm transition-colors">Partners</a>
              <a href="#" className="block text-charcoal-600 hover:text-terra-500 text-sm transition-colors">Careers</a>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-charcoal-400 mb-6">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 border border-sand-200 flex items-center justify-center text-charcoal-500 hover:text-terra-500 hover:border-terra-300 transition-all">
                <Globe className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-9 h-9 border border-sand-200 flex items-center justify-center text-charcoal-500 hover:text-terra-500 hover:border-terra-300 transition-all">
                <Share2 className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-9 h-9 border border-sand-200 flex items-center justify-center text-charcoal-500 hover:text-terra-500 hover:border-terra-300 transition-all">
                <MessageCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a href="#" className="w-9 h-9 border border-sand-200 flex items-center justify-center text-charcoal-500 hover:text-terra-500 hover:border-terra-300 transition-all">
                <Mail className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-sand-100/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] tracking-wide text-charcoal-400">2025 Atelier AI. All rights reserved.</span>
          <div className="flex items-center gap-6 text-[11px] tracking-wide text-charcoal-400">
            <a href="#" className="hover:text-charcoal-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-charcoal-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-charcoal-600 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
