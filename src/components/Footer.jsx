import { Link } from 'react-router-dom';
import { Globe, Share2, MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-semibold tracking-tight mb-4">
              <span className="font-serif italic text-brand-400">Atelier</span>
              <span className="ml-1 font-light">AI</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              AI-powered interior design, architectural visualization, and shoppable home marketplace. One platform, infinite possibilities.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <Link to="/design-studio" className="block text-white/50 hover:text-white text-sm transition-colors">AI Design Studio</Link>
              <Link to="/visualization" className="block text-white/50 hover:text-white text-sm transition-colors">Visualization</Link>
              <Link to="/marketplace" className="block text-white/50 hover:text-white text-sm transition-colors">Marketplace</Link>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-white/50 hover:text-white text-sm transition-colors">About</Link>
              <a href="#" className="block text-white/50 hover:text-white text-sm transition-colors">Partners</a>
              <a href="#" className="block text-white/50 hover:text-white text-sm transition-colors">Careers</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                <Share2 className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-dark-800 border border-white/5 flex items-center justify-center text-white/50 hover:text-white hover:border-brand-500/30 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm text-white/30">2025 Atelier AI. All rights reserved.</span>
          <div className="flex items-center gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
