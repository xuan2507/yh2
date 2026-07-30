import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-10 border-t border-line">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-4">
            <span className="font-serif text-lg text-ink">xuantelier</span>
            <p className="text-stone text-sm leading-relaxed mt-4 max-w-xs">
              AI-powered interior design, architectural visualization, and a shoppable home marketplace.
            </p>
          </div>
          
          <div className="md:col-span-2 md:col-start-7">
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-4">Platform</span>
            <div className="space-y-2">
              <Link to="/design-studio" className="block text-sm text-stone hover:text-ink transition-colors">Design Studio</Link>
              <Link to="/projects" className="block text-sm text-stone hover:text-ink transition-colors">Projects</Link>
              <Link to="/visualization" className="block text-sm text-stone hover:text-ink transition-colors">Visualization</Link>
              <Link to="/marketplace" className="block text-sm text-stone hover:text-ink transition-colors">Marketplace</Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-4">Company</span>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-stone hover:text-ink transition-colors">About</Link>
              <Link to="/partners" className="block text-sm text-stone hover:text-ink transition-colors">Partners</Link>
              <Link to="/professionals" className="block text-sm text-stone hover:text-ink transition-colors">Experts</Link>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <span className="text-[10px] tracking-[0.2em] uppercase text-stone block mb-4">Connect</span>
            <div className="space-y-2">
              <a href="#" className="block text-sm text-stone hover:text-ink transition-colors">Instagram</a>
              <a href="#" className="block text-sm text-stone hover:text-ink transition-colors">LinkedIn</a>
              <a href="#" className="block text-sm text-stone hover:text-ink transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-line flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[11px] text-stone">2025 xuantelier</span>
          <div className="flex items-center gap-6 text-[11px] text-stone">
            <Link to="/privacy" className="hover:text-ink transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-ink transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
