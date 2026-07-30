import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();

  useState(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { name: 'Design Studio', href: '/design-studio' },
    { name: 'Visualization', href: '/visualization' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark-900/95 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-tight">
          <span className="font-serif italic text-brand-400">Atelier</span>
          <span className="ml-1 font-light">AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm tracking-wide transition-colors ${isActive(link.href) ? 'text-brand-400' : 'text-white/70 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => setIsOpen(true)}
            className="relative p-2 text-white/70 hover:text-white transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-600 text-white text-xs rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <Link to="/design-studio" className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium rounded-full transition-all">
            Start Designing
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="relative p-2 text-white/70">
            <ShoppingBag className="w-5 h-5" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-600 text-white text-xs rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dark-800 border-b border-white/5 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="block text-white/70 hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link to="/design-studio" onClick={() => setIsMenuOpen(false)} className="block px-5 py-2.5 bg-brand-600 text-white text-sm font-medium rounded-full text-center">
            Start Designing
          </Link>
        </div>
      )}
    </nav>
  );
}
