import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count, setIsOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Design Studio', href: '/design-studio' },
    { name: 'Visualization', href: '/visualization' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'About', href: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-cream-100/95 backdrop-blur-md border-b border-sand-100/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="flex items-baseline gap-1">
            <span className="font-serif text-2xl tracking-tight text-charcoal-800">Atelier</span>
            <span className="font-serif text-2xl italic text-terra-500">AI</span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-[13px] tracking-[0.15em] uppercase transition-colors duration-300 ${
                  isActive(link.href) ? 'text-terra-500' : 'text-charcoal-500 hover:text-charcoal-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setIsOpen(true)}
              className="relative text-charcoal-600 hover:text-charcoal-800 transition-colors"
            >
              <ShoppingBag className="w-[18px] h-[18px]" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-terra-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <Link 
              to="/design-studio" 
              className="text-[13px] tracking-[0.15em] uppercase px-6 py-3 bg-charcoal-800 hover:bg-charcoal-700 text-cream-100 transition-all duration-300"
            >
              Start
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsOpen(true)} className="relative text-charcoal-600">
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-terra-500 text-white text-[10px] rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-charcoal-800">
              {isMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-cream-100 border-b border-sand-100/30 px-8 py-10 space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                onClick={() => setIsMenuOpen(false)} 
                className="block text-[13px] tracking-[0.15em] uppercase text-charcoal-600 hover:text-charcoal-800 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
