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
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Design Studio', href: '/design-studio' },
    { name: 'Walkthroughs', href: '/walkthrough' },
    { name: 'Visualization', href: '/visualization' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'Experts', href: '/professionals' },
    { name: 'About', href: '/about' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled ? 'bg-paper/90 backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link to="/" className="font-serif text-lg tracking-tight text-ink">
          xuantelier
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-[12px] tracking-[0.12em] uppercase transition-colors duration-300 ${
                location.pathname === link.href ? 'text-ink' : 'text-stone hover:text-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setIsOpen(true)}
            className="relative text-stone hover:text-ink transition-colors"
          >
            <ShoppingBag className="w-[15px] h-[15px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-ink text-paper text-[9px] flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button onClick={() => setIsOpen(true)} className="relative text-stone">
            <ShoppingBag className="w-[15px] h-[15px]" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-3.5 h-3.5 bg-ink text-paper text-[9px] flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-ink">
            {isMenuOpen ? <X className="w-4 h-4" strokeWidth={1.5} /> : <Menu className="w-4 h-4" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-paper border-b border-line px-6 py-8 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href} 
              onClick={() => setIsMenuOpen(false)} 
              className="block text-[12px] tracking-[0.12em] uppercase text-stone hover:text-ink transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
