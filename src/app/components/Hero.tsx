import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-white pt-28 pb-24 lg:h-screen lg:pt-0 lg:pb-0">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12 w-full lg:h-full lg:flex lg:flex-col lg:pt-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:flex-1 lg:py-10 items-center lg:items-stretch">

          {/* Left Content */}
          <div className="space-y-6 lg:pr-12 text-center lg:text-left self-center">
            <div className="space-y-5">
              <div className="w-12 h-px bg-[#d4af37] mx-auto lg:mx-0"></div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-black" style={{ fontFamily: 'Playfair Display, serif' }}>
                Miami Interiors,<span className="italic text-[#d4af37]"> Reimagined</span>
                <span className="hidden lg:inline"><br /></span>
                {' '}to Perfection
              </h1>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
              South Florida's trusted interior remodeling specialists. We transform kitchens, bathrooms, and living spaces with precision, premium materials, and real craftsmanship — no shortcuts, no surprises.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center text-sm tracking-wider bg-black text-white px-6 lg:px-10 py-4 hover:bg-[#d4af37] hover:text-black transition-all duration-300"
              >
                SCHEDULE CONSULTATION
              </a>
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center text-sm tracking-wider border border-black text-black px-6 lg:px-10 py-4 hover:bg-black hover:text-white transition-all duration-300"
              >
                VIEW PORTFOLIO
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-6 border-t border-black/10">
              <div>
                <div className="text-3xl lg:text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>10+</div>
                <div className="text-xs tracking-wider text-gray-500">YEARS IN MIAMI</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>500+</div>
                <div className="text-xs tracking-wider text-gray-500">INTERIORS TRANSFORMED</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl text-black mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                <div className="text-xs tracking-wider text-gray-500">SATISFACTION</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="relative lg:h-full">
            {/* Mobile: 2x2 grid */}
            <div className="lg:hidden grid grid-cols-2 gap-2">
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Luxury bathroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="/portfolio/kitchen-1.jpeg"
                  alt="Modern kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Elegant bathroom design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Modern door"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop: staggered columns that fill the available height */}
            <div className="hidden lg:flex gap-4 h-full py-8">
              <div className="flex-1 flex flex-col gap-4">
                <div className="overflow-hidden" style={{ flex: 3 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1663811397133-2d1f5addd9d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Luxury bathroom"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden" style={{ flex: 2 }}>
                  <ImageWithFallback
                    src="/portfolio/kitchen-1.jpeg"
                    alt="Modern kitchen"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-4 pt-12">
                <div className="overflow-hidden" style={{ flex: 2 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1663811396038-7a21d4eef49e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Elegant bathroom design"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="overflow-hidden" style={{ flex: 3 }}>
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1774716925801-cad665240e12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                    alt="Modern door"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Gold accent */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#d4af37] -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
