import { Instagram, Facebook } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 py-24">
          {/* Company Info */}
          <div className="lg:col-span-5">
            <div className="mb-8">
              <Logo size="md" href="/" />
            </div>
            <p className="text-gray-600 mb-8 max-w-sm leading-relaxed">
              Where exceptional craftsmanship meets timeless design. Transforming spaces into extraordinary environments since 2011.
            </p>
            <div className="flex gap-3">
              <a href="#" className="flex items-center gap-2 bg-black text-white px-5 py-3 text-xs tracking-widest hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                <Instagram className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
              <a href="#" className="flex items-center gap-2 bg-black text-white px-5 py-3 text-xs tracking-widest hover:bg-[#d4af37] hover:text-black transition-all duration-300">
                <Facebook className="w-4 h-4" />
                <span>FACEBOOK</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <div className="text-xs tracking-widest mb-6 text-[#d4af37]">SERVICES</div>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Drywall Installation</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Floor Installation</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Custom Cabinetry</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Bathroom Remodels</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Kitchen Remodels</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="text-xs tracking-widest mb-6 text-[#d4af37]">COMPANY</div>
            <ul className="space-y-3">
              <li><a href="#portfolio" className="text-gray-600 hover:text-black transition-colors">Portfolio</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-black transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <div className="text-xs tracking-widest mb-6 text-[#d4af37]">LEGAL</div>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black transition-colors">Licenses</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 py-8">
          <div className="flex items-center justify-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Elite Remodeling. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
