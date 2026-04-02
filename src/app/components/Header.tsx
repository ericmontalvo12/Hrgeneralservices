import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex flex-col">
              <span className="text-2xl tracking-[0.2em] text-black" style={{ fontFamily: 'Playfair Display, serif' }}>ELITE</span>
              <span className="text-[10px] tracking-[0.3em] text-[#d4af37] ml-1">REMODELING</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            <a href="#services" className="text-sm tracking-wider text-black hover:text-[#d4af37] transition-colors">
              SERVICES
            </a>
            <a href="#portfolio" className="text-sm tracking-wider text-black hover:text-[#d4af37] transition-colors">
              PORTFOLIO
            </a>
            <a href="#contact" className="text-sm tracking-wider text-black hover:text-[#d4af37] transition-colors">
              CONTACT
            </a>
            <div className="w-px h-8 bg-black/10"></div>
            <a href="#contact" className="text-sm tracking-wider bg-black text-white px-8 py-3 hover:bg-[#d4af37] hover:text-black transition-all duration-300">
              GET QUOTE
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-black p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-8 space-y-6 border-t border-black/5">
            <a href="#services" className="block text-sm tracking-wider text-black hover:text-[#d4af37] transition-colors">
              SERVICES
            </a>
            <a href="#portfolio" className="block text-sm tracking-wider text-black hover:text-[#d4af37] transition-colors">
              PORTFOLIO
            </a>
            <a href="#contact" className="block text-sm tracking-wider text-black hover:text-[#d4af37] transition-colors">
              CONTACT
            </a>
            <a href="#contact" className="block text-sm tracking-wider bg-black text-white px-8 py-3 text-center hover:bg-[#d4af37] hover:text-black transition-all duration-300">
              GET QUOTE
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
